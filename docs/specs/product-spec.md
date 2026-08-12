# BilbyBots — Product Specification

**Version:** 0.1 (concept)
**Date:** 2026-08
**Audience:** founders, designers, engineers

---

## 1. Vision

BilbyBots is a fun, curriculum-aligned learning companion for Australian
school children from **Foundation (Prep/Kinder) through Year 10 (K–10)**. It
turns the K–10 syllabus into a **weekly, personalised plan** that a child can
complete *on a device*, with gamification that keeps them motivated and a
pacing engine that guarantees the whole year's syllabus is covered even for
children who join partway through the year. The primary (K–6) years are the
Phase-1 focus; **Years 7–10** are a designed-for, later-phase expansion
(same planner, pacing and badge systems, different subject structure).

## 2. Goals & non-goals

### Goals
- Deep, detailed, curriculum-accurate content per year level (Foundation–10),
  per subject.
- Curated weekly plans generated from the parent-visible profile (name + year).
- Learn-first structure each week: **explain → illustrate → practise → assess**.
- Badges, streaks, and bonus "advance level" content with extra rewards.
- **100% syllabus coverage** for any join week (adaptive/compressed pacing).
- Three clients from one React codebase: **web, Android, iOS**.
- Google-first authentication.
- Key content offline-friendly for kids on tablets at home/commute.
- Lite and Pro tiers.

### Non-goals (phase 1)
- Classroom/teacher tooling, analytics dashboards, LMS integrations.
- Live video, chat, or social features for children.
- AI-generated video lessons (scoped as Phase 2).
- Non-English languages.
- Years 7–10 content **authoring** (design + planner support exist, content
  lands in Phase 3).

## 3. Target users & personae

- **Parent (primary user, purchaser):** manages family account, creates child
  profiles, subscribes to Pro, reviews progress/insights.
- **Child (Years 1–6, end user):** has their own kid-facing profile and
  avatar, completes weekly plans, earns badges, unlocks bonuses.
- **Secondary:** grandparents/guardians as co-viewers of progress.

### Multi-tenant model
One parent Google account → one family → N child profiles (each with year +
state). All data scoped per family (row-level security in the data layer).

## 4. User journey (happy path)

1. **Sign up (parent):** Google OAuth. Family account created.
2. **Onboarding:** Parent adds child: name, avatar, **state** (curriculum
   variant), **school year (1–6)**.
3. **Plan generation:** BilbyBots computes the child's weekly plan for the
   remainder of the school year (see `adaptive-pacing.md`). Week N shows
   subjects and topics.
4. **Weekly flow (child-facing):**
   - **Learn:** illustrated lesson content (text + worked examples). Bear
     explains concepts (Bilby mascot).
   - **Practise:** short formative checks.
   - **Assign:** the assignment packet for the week (adaptive size).
   - **Badge:** completing the weekly assignment earns a badge + XP.
   - **Bonus:** completing early unlocks the **Advance level** for that week —
     harder/bonus tasks with bonus rewards (see §7).
5. **Parent dashboard:** weekly progress, badges, "topics mastered",
   "curriculum coverage %", streak history. Parent controls when a **new week**
   unlocks (or auto-advance toggle).

## 5. Subjects & scope

Prioritised alignment to the **Australian Curriculum v9.0**, mapped to state
syllabuses. K–10 subject structure differs between the primary and secondary
bands; both use the same plan/badge/pacing machinery.

### Phase-1 core (K–6, primary)

| Priority | Subject | Notes |
| --- | --- | --- |
| P1 | English | 3 strands: Language, Literature, Literacy |
| P1 | Mathematics | 6 strands: Number, Algebra, Measurement, Space, Statistics, Probability |
| P2 | Science | 3 strands: Science understanding, Science as a human endeavour, Science inquiry |
| P2 | HASS (F–6) | History, Geography, Civics & Citizenship (from Y3), Economics & Business (from Y5) |
| P3 | Technologies | Digital Technologies (+ Design later) |
| P3 | The Arts / PDHPE / Languages | Later phases, lower priority |

### Phase-3 expansion (Years 7–10, secondary)

| Subject | Status in 7–10 | Notes |
| --- | --- | --- |
| English | Mandatory every year | Same 3 strands; content deepens |
| Mathematics | Mandatory every year | Same 6 strands; by Years 9–10 strands feed senior pathways |
| Science | Mandatory every year | Same 3 strands (Biological/Chemical/Physical/Earth & Space sub-strands) |
| History | Mandatory every year | 7–10; **2 topics/year** in v9 (e.g. Deep Time Australia, Ancients; Australia 1750–1914; WW1/WW2 & Building modern Australia) |
| Geography | Mandatory 7–8; school-determined 9–10 | |
| Civics & Citizenship | Mandatory 7–8; school-determined 9–10 | |
| Economics & Business | Mandatory 7–8; school-determined 9–10 | |

> **Design decision:** because Y9–10 access to Geography/Civics/Economics is
> school determined, packaged plans for 9–10 default to **English + Maths +
> Science + History**, with optional packs for the other subjects. The child
> profile will expose a "subjects studied" selector for secondary years.

Each lesson/assignment carries the curriculum **content description ID** (e.g.
`AC9M6N01`) and the state outcome mapping (`MA2-RN-01`, `EN2-OLC-01`, etc.) so
coverage is auditable.

## 6. Weekly plan structure

For each week (Week 1..N of the school year, per state term dates):

```
Week N
├── Subject: Mathematics
│   ├── Lesson (learn-first): text + illustrations + 2–3 worked examples
│   ├── Quick checks (mark as learned)
│   └── Assignment (adaptive question count)
│       └── completion → badge + XP
│       └── early completion → Advance level (bonus tasks) → bonus rewards
├── Subject: English
│   └── ...
└── Subject: Science (if week slot)
    └── ...
```

- Weekly cadence is **per subject**; subjects rotate so children don't hit all
  subjects every single week (subject rotation modelled on typical school
  timetables).
- Assignments are completable entirely on-device (typed/short answers, MCQs,
  drag-and-drop, drawing-adjacent input).

## 7. Gamification design

- **XP & levels:** per assignment and per week; child level within their year.
- **Badges:** skill badges (e.g. "Number Ninja", "Deep Reader"), weekly
  completion badges, streak badges, and bonus badges.
- **Streaks:** consecutive days with completed work; gentle recovery mechanic.
- **Advance level (bonus):** when the weekly assignment is completed early/at
  high accuracy, an **Advance tier** unlocks for that week — higher
  difficulty/honours content and **bonus badges** (one-time per week).
- **Rewards:** intentionally non-revenue; cosmetic and motivational (avatar
  customisation, collectible notes) to keep kids motivated without manipulative
  monetisation patterns. No ads.

## 8. Adaptive pacing ("join late, still cover 100%")

Problem: a child joins in, say, school week 26 of the year. The default pace
would leave ~half the syllabus uncovered by year end.

Solution (spec in `adaptive-pacing.md`): the planner
1. enumerates all content descriptions in scope for the child's year, state
   and subjects;
2. **compacts** the remaining weeks (more topics per week);
3. **reduces per-topic depth** (fewer questions per assignment, trimmed
   elaboration) so weekly load stays realistic;
4. guarantees **every content description is exposed at least once** before the
   school year (or subscriber year) ends;
5. reports **coverage %** transparently to the parent.

This is an explicit product differentiator — a "you've still got time, we'll
get you there" promise.

## 9. Pricing tiers

| Tier | Price posture | Includes |
| --- | --- | --- |
| **Lite** | Free | 1 child profile; core English + Maths weekly plans; standard badges; ads-free but limited subjects/history |
| **Pro** | Subscription | Unlimited child profiles; all subjects (Science, HASS, Technologies); Advance level + bonus rewards; parent progress insights & PDF reports; offline packs; early access to AI-video lessons |

Guardrails: no ads even in Lite (child audience); Pro drives sustainability;
family-friendliness (shareable across siblings) is a buying trigger.

## 10. Trust, safety & compliance

- Parent-managed accounts; child profiles have no separate credentials.
- Follow Australian Privacy Principles (Privacy Act 1988) and eSafety
  Commissioner guidance; design for **children's online safety** by default.
- No advertising, no third-party tracking of children, no social features
  between child users.
- Data minimisation: only the data needed to run learning plans + progress.
- Content disclaimer requirement from ACARA licensing (non-affiliation) baked
  into onboarding/footer.

## 11. MVP scope (cut line)

| In MVP | Deliberately cut for MVP |
| --- | --- |
| Google Auth + family/child profiles | Email/password or SSO beyond Google |
| Year 6 English + Maths weekly plans (AC v9.0, NSW first), expanding down/up across K–6 | Years 7–10 authored content |
| Learn-first lessons + on-device assignments | AI-video lessons |
| Badges + streaks + basic Advance-level per week | Rich avatar marketplace, social rewards |
| Adaptive pacing engine (late-join coverage) | Multi-state syllabus variants beyond NSW |
| Web + iOS + Android (React) | Offline video, PDF reports, export |
| Lite (free) + Pro (subscription) | Referral/multi-factor mechanics |

> **K–10 note:** content ships curricul-user-first — Year 6 first (see
> `year-6-topics.md`), then the rest of K–6, then Years 7–10 in Phase 3. The
> planner, attachment IDs and badge logic are year-agnostic, so K–10 content
> arrives without rework.

## 12. Open questions / to decide

- **State rollout order** for syllabus variants (NSW → QLD → VIC → WA?)
- Year start alignment: calendar year vs NSW term dates (Q1/2/3/4).
- Whether "school year" for pacing is **calendar-based** or **term-based**.
- Parent-set weekly intensity (e.g. default vs accelerated) as a manual override.
- Age-gating/parental consent UX for children under 13.
- Pricing amount for Pro in AUD (market research in roadmap).