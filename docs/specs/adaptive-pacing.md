# Adaptive Pacing — 100% Syllabus Coverage for Late Joins

> Design spec for the planner that guarantees a child joining partway through
> the school year still covers 100% of the topics in their year's syllabus,
> distributed across the remaining weeks with realistic workload.

---

## 1. Problem statement

A child is enrolled with year = X and join week = W of the school year
(W ∈ 1..totalWeeks). A naive full-pace plan would only cover
`(totalWeeks − W + 1)/totalWeeks` of the syllabus by year end. The product
promise is: **regardless of W, every content description in scope is taught
before the year ends.**

Trade-off to honour: more topics per week must not bury the child. So the
engine **compresses depth (question counts, trimmed elaborations)** while
**preserving topical breadth**.

## 2. Terminology

| Term | Meaning |
| --- | --- |
| Content description (CD) | Smallest teachable curriculum item, e.g. `AC9M2N01`. Stable ID + year + the curriculum code. |
| Topic | A cluster of CDs grouped for a lesson (e.g. "Addition within 100"). |
| Asset depth D(topic) | Question-count budget for assignments on this topic. |
| Week slot | One week for one subject in the rotation calendar. |
| Ideal pace | Spread for a full-year join: 1 topic/week, nominal depth. |
| Compact pace | Spread for a late join: 1–2+ topics/week, reduced depth. |

## 3. Inputs to the planner

1. **Scope envelope** — resolved from the child profile:
   - `state` (curriculum variant) and `year` (1–6)
   - `subjects[]` (English + Maths mandatory; + Science/HASS per plan/tier)
   - the set of CDs in scope for (state, year, subjects) from the curriculum DB.
2. **Calendar** — school year for the state: term dates (e.g. NSW Term 1–4 with
   weekends/holidays excluded from *school weeks*; a "week" = teaching week).
   - `totalWeeks` and `currentWeek = W` at join.
   - Weeks remaining: `R = totalWeeks − W + 1`.
3. **Pedagogy knobs:**
   - `maxTopicsPerWeek` (upper bound on topics/week impact) — default 1.5 → 3.
   - `minQuestionBudgetPerTopic` and `maxQuestionBudgetPerTopic` for
     lite vs compact mode.
   - `subjectRotation` pattern (timetable of which subjects appear which week).
4. **Prerequisites** (optional but valuable): CD dependency edges (e.g. skip
   counting before multiplication), used only as soft ordering hints.

## 4. Algorithm

### Step 1 — Group CDs into topics
Authoring-time: CDs are partitioned into topics (a topic has one lesson + one
set of assets). CDs are never split across topics.

### Step 2 — Build the full-year schedule (ideal pace)
For the child's (state, year, subjects): allocate topics over `totalWeeks`
respecting the subject rotation calendar and topic prerequisites. Produce an
ordered topic list `T[1..K]` (K ≈ number of topics in a full year) with a
nominal week mapping. This is deterministic and versioned; it is the same
schedule any child of that profile would receive, so content authors test a
finite set.

### Step 3 — Compress for the join week
Given `R` remaining weeks and `K_remaining = K − (topics already notionally
covered before week W)`:

- Target: assign every `K_remaining` topic into `R` week-slots such that
  `topicsPerWeek ≤ maxTopicsPerWeek`.
- Compression factor `c = K_remaining / R`.
- If `c ≤ 1`: topics fit 1-per-week → near-ideal pace; depth stays nominal.
- If `1 < c ≤ maxTopicsPerWeek`: schedule c topics/week (or alternate weeks)
  and **reduce depth** so per-topic question budget scales down while staying
  above `minQuestionBudgetPerTopic`.
- If `c > maxTopicsPerWeek` (join very late): the schedule is still legal
  because **depth floors** keep each topic meaningful; weekly XP/badge cadence
  is preserved by flattening "whole assignments" per week rather than physical
  lesson count. Parent is shown the compressed plan up-front with coverage = 100%.

Depth reduction formula (illustrative):
```
perTopicQuestions = clamp(
  round(nominalQuestions * (minRequiredDepth / c)),
  minQuestionBudgetPerTopic,
  maxQuestionBudgetPerTopic
)
```
where `minRequiredDepth` is a pedagogically-set constant ensuring a topic is
still *learned*, not just *listed* (e.g. ≥ 5 questions & ≥ 1 practice task).

### Step 4 — Emit the plan
Produce `WeekPlan[]` for weeks W..totalWeeks, each with `subject → topics →
lesson → assignment (with questionCount)` plus `coverage = 100%` and a coverage
breakdown per subject. Store as an immutable snapshot (versioned), so the child
continues a consistent plan even if the algorithm later changes.

### Step 5 — Ongoing re-planning
Re-pacing is **opt-in and parent-gated**:
- Auto: when a weekly assignment is completed before its deadline, the surplus
  can trigger a "skip ahead" recommendation.
- Manual: parent can re-run the planner (e.g. after a school holiday or an
  illness) — a new snapshot is generated from the *current* week and the
  remaining CDs, preserving the same guarantee.
- Never silently drops topics; a topic already marked "learned" is excluded
  from the re-packed remainder.

## 5. Guarantees & invariants

1. **Coverage = 100%.** Every CD in scope appears in ≥ 1 week between W and
   `totalWeeks`. Asserted by a plan validator: `covered ⊆ scope` and
   `scope ⊆ covered` (subject to the enrollment's subject list).
2. **Weekly realism.** `Σ topics ≤ maxTopicsPerWeek`; per-topic question count
   within `[min, max]`; estimated weekly time target (e.g. 15–25 min maths +
   15–25 min English) surfaced to parents and not exceeded at default settings.
3. **No topic fragmentation.** CDs are atomic; a topic is either covered or not.
4. **Determinism & auditability.** Same inputs → same plan; every plan stores
   the algorithm version + input hash so "why this plan?" is answerable.
5. **Bonus safety.** Advance levels never count toward the coverage invariant
   (they are optional), so compact plans read visually the same way ("week
   complete!" even with fewer questions).

## 6. Edge cases

| Case | Behaviour |
| --- | --- |
| Join in the very last school week | Compaction hits depth floors; still 100% topically exposed, notably lighter questions. Message to parent sets expectation ("catch-up focused"). |
| Prerequisite chain spans late-start topics | Order topics so prerequisites are scheduled first even if it means topic re-ordering across the remainder. |
| Holiday mid-plan | Re-plan from current week; previously-learned topics excluded. |
| Child changes year mid-year (moved up/down) | New scope envelope; new snapshot; old snapshot archived. |
| Multi-child family sharing one subscription | Each child re-paces independently; planner runs per child. |

## 7. Data model additions (summary)

Introduced tables/fields for the planner (details in `architecture.md`):
- `topic` (`id`, `curriculum_code`, `title`, `prereq_ids[]`, `nominal_questions`,
  `min_depth_questions`, `learning_area`)
- `topic_coverage_map(year,state,subject)` → applicable topics/CDs
- `plan_snapshot` (version, input hash, generated_at, parent-approved_at)
- `plan_week` (snapshot, week_index, subject, topics[], question_counts)
- `plan_metric (coverage_pct)`

## 8. Acceptance criteria (tests)

- Given (state, year, subjects, W), validator proves `covered == scope`.
- For each week: `topics ≤ maxTopicsPerWeek` and per-topic questions in range.
- Two runs with identical inputs → identical snapshot hash.
- Re-planning after week X excludes learned topics and re-extends coverage.
- Schedule of a full-year joiner (W=1) matches nominal expectations
  (1 topic/week, nominal depth) — i.e. this is a strict superset feature.