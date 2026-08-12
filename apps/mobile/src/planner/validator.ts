import { DEFAULT_PLANNER_CONFIG, type PlanSnapshot } from './types';

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

/**
 * Plan validator (docs/specs/adaptive-pacing.md §8):
 *  1. coverage == scope — every in-scope topic appears exactly once;
 *  2. weekly realism — topics ≤ maxTopicsPerWeek when the workload can fit,
 *     and per-topic question budgets within [1, nominalCount];
 *  3. no topic fragmentation — no topic appears twice;
 *  4. subject order preserved (week indices non-decreasing per subject).
 */
export function validatePlan(
  snapshot: PlanSnapshot,
  opts?: { maxTopicsPerWeek?: number },
): ValidationResult {
  // The planner lifts the weekly cap to at least the number of subjects in
  // scope and stores the effective value on the snapshot — validate against
  // that, not the static default.
  const maxTopicsPerWeek =
    opts?.maxTopicsPerWeek ?? snapshot.config?.maxTopicsPerWeek ?? DEFAULT_PLANNER_CONFIG.maxTopicsPerWeek;
  const errors: string[] = [];

  const counts = new Map<string, number>();
  for (const w of snapshot.weeks) {
    for (const e of w.entries) {
      counts.set(e.topic.id, (counts.get(e.topic.id) ?? 0) + 1);
    }
  }

  // 1 + 3. Coverage and no fragmentation.
  if (snapshot.coverage.inScope !== snapshot.coverage.covered) {
    errors.push(`coverage mismatch: inScope ${snapshot.coverage.inScope} != covered ${snapshot.coverage.covered}`);
  }
  for (const [id, n] of counts) {
    if (n !== 1) errors.push(`topic ${id} appears ${n} times`);
  }

  // 2. Weekly realism.
  const used = snapshot.weeks.filter((w) => w.entries.length > 0);
  const total = counts.size;
  const feasible = total <= used.length * maxTopicsPerWeek;
  for (const w of snapshot.weeks) {
    if (w.entries.length > maxTopicsPerWeek && feasible) {
      errors.push(`week ${w.week}: ${w.entries.length} topics > ${maxTopicsPerWeek}`);
    }
    for (const e of w.entries) {
      const nominal = e.topic.assignment.nominalCount || e.topic.assignment.questions.length;
      if (e.questionCount < 1 || e.questionCount > nominal) {
        errors.push(`topic ${e.topic.id}: questionCount ${e.questionCount} outside [1, ${nominal}]`);
      }
    }
  }

  // 4. Subject order.
  const lastWeekOf: Record<string, number> = {};
  for (const w of snapshot.weeks) {
    for (const e of w.entries) {
      const prev = lastWeekOf[e.topic.subject];
      if (prev !== undefined && w.week < prev) {
        errors.push(`subject ${e.topic.subject} out of order (${e.topic.id} after week ${prev})`);
      }
      lastWeekOf[e.topic.subject] = w.week;
    }
  }

  return { ok: errors.length === 0, errors };
}
