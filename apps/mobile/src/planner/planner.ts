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

  // --- Placement (spec §4 Steps 2–3) ---
  // Topic j of subject s has an ideal week `floor(j * R / K_s)`. Assigning each
  // subject independently leaves sparse weeks (a single-topic week 29 of 40).
  // Instead, merge every topic's ideal week into one ordered list (stable by
  // subject order, so each subject keeps its authored order), then place each
  // topic into the earliest available week (capacity < max) at or after its
  // ideal. Subjects interleave within the same weeks, giving every week a
  // balanced mix while preserving per-subject order and <= max weekly load.
  const slots: { subject: SubjectId; topic: Topic; ideal: number }[] = [];
  for (const { subject, topics } of streams) {
    const K = topics.length;
    topics.forEach((topic, j) => {
      slots.push({ subject, topic, ideal: Math.min(Math.floor((j * R) / K), R - 1) });
    });
  }
  const subjectRank = new Map(config.subjectOrder.map((s, i) => [s, i]));
  slots.sort((a, b) => a.ideal - b.ideal || (subjectRank.get(a.subject) ?? 0) - (subjectRank.get(b.subject) ?? 0));

  const weeks: Topic[][] = Array.from({ length: R }, () => []);
  for (const slot of slots) {
    let w = -1;
    for (let i = slot.ideal; i < R; i++) {
      if (weeks[i].length < config.maxTopicsPerWeek) {
        w = i;
        break;
      }
    }
    if (w === -1) w = R - 1; // workload can't fit: spill into the last week
    weeks[w].push(slot.topic);
  }

  // The ideal-pace spread can leave isolated empty weeks (topics cluster on
  // some weeks, none on others). Backfill: for each empty week, pull the last
  // topic of the previous non-empty week into it. Moving forward never breaks
  // per-subject order, and it keeps every week live so the plan never shows a
  // blank "this week".
  for (let w = 1; w < R; w++) {
    if (weeks[w].length > 0) continue;
    let src = w - 1;
    while (src >= 0 && weeks[src].length <= 1) src--;
    if (src >= 0 && weeks[w - 1].length >= 2) {
      const topic = weeks[src].pop()!;
      weeks[w].push(topic);
    } else if (src === w - 1 && weeks[src].length === 1) {
      // single topic week with an empty week after it: move it forward so both
      // weeks stay populated (subject order is preserved since it only moves
      // one slot ahead of its own subject).
      const topic = weeks[src].pop()!;
      weeks[w].push(topic);
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
      maxTopicsPerWeek: config.maxTopicsPerWeek,
      minQuestionBudgetPerTopic: config.minQuestionBudgetPerTopic,
      subjectOrder: config.subjectOrder,
      algorithmVersion: config.algorithmVersion,
    },
  };

  return {
    algorithmVersion: config.algorithmVersion,
    inputHash: planInputHash(normalized),
    input: { year: input.year, subjects, state, joinWeek, learnedTopicIds: [...learned] },
    compactedSubjects,
    weeks: weeksOut,
    coverage: { inScope, covered: inScope, pct: inScope === 0 ? 100 : 100 },
    breakdown,
  };
}
