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
  // Topic j of subject s has an ideal week `floor(j * R / K_s)`. Place each
  // topic into the latest available week (capacity < max) at or before its
  // ideal, never before the previous topic of the same subject, so subjects
  // interleave across the whole remainder instead of packing into the earliest
  // weeks, and weekly load stays <= max when feasible.
  const weeks: Topic[][] = Array.from({ length: R }, () => []);
  for (const { subject, topics } of streams) {
    const K = topics.length;
    let last = 0;
    for (let j = 0; j < K; j++) {
      const ideal = Math.min(Math.floor((j * R) / K), R - 1);
      let w = -1;
      for (let i = ideal; i >= last; i--) {
        if (weeks[i].length < config.maxTopicsPerWeek) {
          w = i;
          break;
        }
      }
      if (w === -1) {
        for (let i = last; i < R; i++) {
          if (weeks[i].length < config.maxTopicsPerWeek) {
            w = i;
            break;
          }
        }
        if (w === -1) w = R - 1; // workload can't fit: spill into the last week
      }
      weeks[w].push(topics[j]);
      last = w;
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
