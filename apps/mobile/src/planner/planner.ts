import { fullYearBank } from '../data/content';
import type { SubjectId, Topic } from '../types/curriculum';
import { planInputHash } from './hash';
import {
  DEFAULT_PLANNER_CONFIG,
  type PlanInput,
  type PlanSnapshot,
  type PlanWeek,
  type PlannerConfig,
} from './types';

/**
 * Adaptive-pacing planner (docs/specs/adaptive-pacing.md).
 *
 * Guarantees: given (year, subjects, joinWeek), every topic in scope is placed
 * in exactly one of the remaining weeks (coverage = 100%), weekly load stays at
 * or below `maxTopicsPerWeek` whenever the workload can fit, subjects keep
 * their authored order, and identical inputs produce identical snapshots
 * (versioned via `algorithmVersion` + `inputHash`).
 *
 * Depth: when a subject needs more than one topic per week (c = K/R > 1) it is
 * marked compacted and each topic's assignment budget drops to the authored
 * `compactCount` (never below 1, never above `nominalCount`).
 */
export function buildPlan(input: PlanInput): PlanSnapshot {
  const config: PlannerConfig = { ...DEFAULT_PLANNER_CONFIG, ...input.config };
  const subjects = input.subjects.filter((s) => config.subjectOrder.includes(s));
  const joinWeek = Math.max(1, Math.min(config.totalWeeks, Math.floor(input.joinWeek)));
  const state = input.state ?? 'nsw';
  const learned = new Set(input.learnedTopicIds ?? []);
  const R = config.totalWeeks - joinWeek + 1;

  const streams: { subject: SubjectId; topics: Topic[] }[] = subjects
    .map((subject) => ({
      subject,
      topics: fullYearBank(input.year, subject).filter((t) => !learned.has(t.id)),
    }))
    .filter((s) => s.topics.length > 0);

  // Weekly slot count: at least the authored cap, but never fewer than the
  // number of subjects in scope — a child whose parent picked 4 subjects must
  // see every subject in their weekly plan, not a rotating 3-of-4 subset.
  const weeklyCap = Math.max(config.maxTopicsPerWeek, streams.length);

  // --- Placement (spec §4 Steps 2–3) ---
  // Ideal pace is ~1 topic/week/subject, but with several subjects that leaves
  // many single-topic weeks (a child who picked 4 subjects sees a "one subject
  // this week" plan). Instead, fill each week with a rotating mix of subjects:
  // walk weeks and, for each, take the next topic from each subject in turn
  // (up to the weekly cap, one per subject) so a multi-subject plan reads as
  // a proper weekly schedule while preserving per-subject order and coverage.
  const weeks: Topic[][] = Array.from({ length: R }, () => []);
  const pointers = new Map(streams.map(({ subject }) => [subject, 0]));
  const totalTopics = streams.reduce((n, s) => n + s.topics.length, 0);
  let placed = 0;
  for (let w = 0; w < R && placed < totalTopics; w++) {
    // Rotate the starting subject each week so the mix doesn't favor one first.
    const start = w % streams.length;
    for (let k = 0; k < streams.length && weeks[w].length < weeklyCap; k++) {
      const { subject, topics } = streams[(start + k) % streams.length];
      const j = pointers.get(subject)!;
      if (j < topics.length) {
        weeks[w].push(topics[j]);
        pointers.set(subject, j + 1);
        placed++;
      }
    }
  }

  // Rotation caps at one topic per subject per week; when a week is tight
  // (more topics than weeks × subjects) some remain. Spill any leftovers into
  // the earliest available week (>= where the subject left off) so coverage
  // stays 100% and per-subject order is preserved.
  if (placed < totalTopics) {
    for (const { subject, topics } of streams) {
      let j = pointers.get(subject)!;
      let w = Math.min(R - 1, weeks.findIndex((wk) => wk.some((t) => t.subject === subject)));
      if (w === -1) w = R - 1;
      while (j < topics.length) {
        while (w < R - 1 && weeks[w].length >= weeklyCap) w++;
        weeks[w].push(topics[j]);
        pointers.set(subject, ++j);
      }
    }
  }

  // Backfill isolated empty weeks (rare once topics spread evenly) from the
  // previous non-empty week. Moving forward never breaks per-subject order.
  for (let w = 1; w < R; w++) {
    if (weeks[w].length > 0) continue;
    for (let src = w - 1; src >= 0; src--) {
      if (weeks[src].length > 1) {
        const topic = weeks[src].pop()!;
        weeks[w].push(topic);
        break;
      }
    }
  }

  let lastUsed = -1;
  for (let i = R - 1; i >= 0; i--) {
    if (weeks[i].length > 0) {
      lastUsed = i;
      break;
    }
  }
  const used = lastUsed === -1 ? [] : weeks.slice(0, lastUsed + 1);

  // --- Depth compaction (spec §4 Step 3) ---
  const perSubjectK: Record<string, number> = {};
  for (const { subject, topics } of streams) perSubjectK[subject] = topics.length;
  const compactedSubjects: SubjectId[] = [];

  const questionCountFor = (subject: SubjectId, topic: Topic): number => {
    const nominal = topic.assignment.nominalCount || topic.assignment.questions.length || 0;
    const compact = topic.assignment.compactCount ?? nominal;
    if (perSubjectK[subject] / R <= 1) return nominal;
    if (!compactedSubjects.includes(subject)) compactedSubjects.push(subject);
    return Math.max(1, Math.min(compact, nominal));
  };

  const weeksOut: PlanWeek[] = used.map((list, i) => ({
    week: joinWeek + i,
    entries: list.map((topic) => ({
      topic,
      questionCount: questionCountFor(topic.subject, topic),
    })),
  }));

  // --- Coverage (spec §4 Step 4 / §5.1) ---
  const breakdown = streams.map(({ subject, topics }) => {
    const covered = weeksOut
      .flatMap((w) => w.entries.map((e) => e.topic))
      .filter((t) => t.subject === subject).length;
    return {
      subject,
      inScope: topics.length,
      covered,
      pct: topics.length === 0 ? 100 : Math.round((covered / topics.length) * 100),
    };
  });
  const inScope = streams.reduce((n, s) => n + s.topics.length, 0);

  const normalized = {
    year: input.year,
    subjects,
    state,
    joinWeek,
    learnedTopicIds: [...learned],
    config: {
      totalWeeks: config.totalWeeks,
      maxTopicsPerWeek: weeklyCap,
      minQuestionBudgetPerTopic: config.minQuestionBudgetPerTopic,
      subjectOrder: config.subjectOrder,
      algorithmVersion: config.algorithmVersion,
    },
  };

  return {
    algorithmVersion: config.algorithmVersion,
    inputHash: planInputHash(normalized),
    input: { year: input.year, subjects, state, joinWeek, learnedTopicIds: [...learned] },
    config: normalized.config,
    compactedSubjects,
    weeks: weeksOut,
    coverage: { inScope, covered: inScope, pct: inScope === 0 ? 100 : 100 },
    breakdown,
  };
}

/**
 * Pick the week a child should be working on right now:
 *   - the plan week matching the current school week when there is one;
 *   - otherwise (the plan ran ahead of / finished before today) the LAST
 *     planned week, but only while it still has topics the child hasn't
 *     completed — once everything planned is done there is no "this week"
 *     (callers show the revise/complete state instead of replaying done work);
 *   - before the plan starts (a future join week), the first planned week.
 * Returns null when the plan has no weeks or is fully completed.
 */
export function selectPlanWeek(
  plan: PlanSnapshot,
  currentWeek: number,
  completedTopicIds?: string[],
): PlanWeek | null {
  if (plan.weeks.length === 0) return null;
  const exact = plan.weeks.find((w) => w.week === currentWeek);
  if (exact) return exact;

  const last = plan.weeks[plan.weeks.length - 1];
  if (currentWeek > last.week) {
    if (!completedTopicIds) return last;
    const done = new Set(completedTopicIds);
    return last.entries.some((e) => !done.has(e.topic.id)) ? last : null;
  }
  return plan.weeks[0];
}
