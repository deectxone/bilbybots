import { describe, expect, it } from 'vitest';
import { buildPlan, planInputHash, validatePlan } from './index';
import type { PlanInput } from './types';

const base: PlanInput = {
  year: '6',
  subjects: ['mathematics', 'english'],
  joinWeek: 1,
};

describe('adaptive-pacing planner (acceptance criteria, docs/specs/adaptive-pacing.md §8)', () => {
  it('full-year join (W=1) keeps nominal depth and 100% coverage', () => {
    const plan = buildPlan(base);
    const check = validatePlan(plan);
    expect(check.ok, check.errors.join('; ')).toBe(true);
    expect(plan.coverage.pct).toBe(100);
    expect(plan.coverage.covered).toBe(plan.coverage.inScope);
    expect(plan.compactedSubjects).toEqual([]);
    for (const w of plan.weeks) {
      for (const e of w.entries) {
        expect(e.questionCount).toBe(e.topic.assignment.nominalCount);
      }
    }
  });

  it('late join compacts depth but keeps 100% coverage', () => {
    const plan = buildPlan({ ...base, joinWeek: 38 });
    expect(plan.coverage.pct).toBe(100);
    expect(plan.compactedSubjects.length).toBeGreaterThan(0);
    for (const w of plan.weeks) {
      for (const e of w.entries) {
        expect(e.questionCount).toBeLessThanOrEqual(e.topic.assignment.nominalCount);
        expect(e.questionCount).toBeGreaterThanOrEqual(1);
      }
    }
  });

  it('covers every in-scope topic exactly once for every join week', () => {
    for (let W = 1; W <= 40; W++) {
      const plan = buildPlan({ ...base, joinWeek: W });
      const ids = plan.weeks.flatMap((w) => w.entries.map((e) => e.topic.id));
      expect(new Set(ids).size, `duplicates at W=${W}`).toBe(ids.length);
      expect(ids.length, `coverage at W=${W}`).toBe(plan.coverage.inScope);
    }
  });

  it('respects max topics per week when the workload can fit', () => {
    // joinWeek 25 → R = 16, capacity 16*3 = 48 ≥ total topics (≈47) → feasible.
    const plan = buildPlan({ ...base, joinWeek: 25 });
    const used = plan.weeks.filter((w) => w.entries.length > 0).length;
    const feasible = plan.coverage.inScope <= used * 3;
    if (feasible) {
      for (const w of plan.weeks) expect(w.entries.length).toBeLessThanOrEqual(3);
    }
    expect(validatePlan(plan).ok).toBe(true);
  });

  it('is deterministic: identical inputs produce identical snapshots', () => {
    const a = buildPlan({ ...base, joinWeek: 20 });
    const b = buildPlan({ ...base, joinWeek: 20 });
    expect(a.inputHash).toBe(b.inputHash);
    expect(a.weeks).toEqual(b.weeks);
    expect(planInputHash(a.input)).toBe(planInputHash(b.input));
  });

  it('re-planning excludes learned topics and keeps the remainder at 100%', () => {
    const plan = buildPlan(base);
    const learned = plan.weeks[0].entries.map((e) => e.topic.id);
    expect(learned.length).toBeGreaterThan(0);
    const replan = buildPlan({ ...base, learnedTopicIds: learned });
    expect(replan.coverage.inScope).toBe(plan.coverage.inScope - learned.length);
    const ids = replan.weeks.flatMap((w) => w.entries.map((e) => e.topic.id));
    for (const id of learned) expect(ids).not.toContain(id);
    expect(replan.coverage.covered).toBe(replan.coverage.inScope);
    expect(validatePlan(replan).ok).toBe(true);
  });

  it('preserves each subject’s authored order in the schedule', () => {
    const plan = buildPlan(base);
    for (const subject of ['mathematics', 'english']) {
      let last = -1;
      for (const w of plan.weeks) {
        for (const e of w.entries) {
          if (e.topic.subject !== subject) continue;
          expect(w.week, `${subject} out of order`).toBeGreaterThanOrEqual(last);
          last = w.week;
        }
      }
    }
  });

  it('reports per-subject coverage breakdown', () => {
    const plan = buildPlan(base);
    expect(plan.breakdown.length).toBe(2);
    for (const b of plan.breakdown) {
      expect(b.covered).toBe(b.inScope);
      expect(b.pct).toBe(100);
    }
  });
});
