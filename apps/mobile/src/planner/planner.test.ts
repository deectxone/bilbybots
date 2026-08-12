import { describe, expect, it } from 'vitest';
import { buildPlan, planInputHash, selectPlanWeek, validatePlan } from './index';
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

  it('lifts the weekly cap to the subject count so every selected subject shows each week', () => {
    const plan = buildPlan({
      ...base,
      subjects: ['mathematics', 'english', 'science', 'hass'],
    });
    // Effective cap is max(3, 4) = 4, recorded on the snapshot for the validator.
    expect(plan.config.maxTopicsPerWeek).toBe(4);
    expect(validatePlan(plan).ok).toBe(true);
    // Early weeks (while every subject still has topics) are one-topic-per-
    // subject: 4 distinct subjects, never more than the cap.
    for (const w of plan.weeks.slice(0, 5)) {
      expect(w.entries.length).toBe(4);
      expect(new Set(w.entries.map((e) => e.topic.subject)).size).toBe(4);
    }
    // Every subject in scope is represented somewhere in the plan.
    const plannedSubjects = new Set(
      plan.weeks.flatMap((w) => w.entries.map((e) => e.topic.subject)),
    );
    for (const s of ['mathematics', 'english', 'science', 'hass']) {
      expect(plannedSubjects.has(s as 'mathematics')).toBe(true);
    }
  });

  it('selectPlanWeek picks the live week, then the last un-finished week, then null', () => {
    const plan = buildPlan({ ...base, joinWeek: 1 });
    const firstWeek = plan.weeks[0].week;
    const lastWeek = plan.weeks[plan.weeks.length - 1].week;

    // An exact week exists → returned.
    expect(selectPlanWeek(plan, firstWeek)?.week).toBe(firstWeek);

    // A week after the plan ends → the last planned week while it still has
    // un-done topics.
    const allDone = plan.weeks.flatMap((w) => w.entries.map((e) => e.topic.id));
    const beyond = lastWeek + 5;
    expect(selectPlanWeek(plan, beyond)?.week).toBe(lastWeek);
    expect(selectPlanWeek(plan, beyond, allDone)).toBeNull();

    // A week before the plan starts → the first planned week.
    expect(selectPlanWeek(plan, firstWeek - 3)?.week).toBe(firstWeek);
  });
});
