# BilbyBots — NAPLAN Practice Test Module (Product Spec)

**Version:** 0.1 (concept)
**Date:** 2026-08
**Status:** Draft — gates on `naplan-research.md` licensing findings
**Audience:** founders, designers, engineers

---

## 1. Vision

A **NAPLAN-style practice test module** inside BilbyBots. For children in Years
3, 5, 7 and 9, parents can enable timed, structured practice tests in the four
NAPLAN domains — **reading, writing, conventions of language, numeracy** — that
mirror the real test's format, item types, lengths and locked-section
behaviour, using **100% original question content**.

The module is deliberately **"NAPLAN-style, never NAPLAN items"**: ACARA's
released papers and demonstration tests cannot be used in an app (see
`naplan-research.md` §4). The value proposition is *familiarity* — a child sits
the real test having already experienced its exact structure — not reproduction
of past questions.

## 2. Goals & non-goals

### Goals
- Familiarise the child with real NAPLAN structure: item counts, timings,
  item types, locked sections, on-screen tools.
- Four domains, four year levels (3, 5, 7, 9), each with a library of original
  practice tests.
- Timed test mode + untimed practice mode (per question with instant feedback).
- Results mapped to **proficiency-style descriptors** (clearly marked as
  indicative, not official NAPLAN results).
- Integrated with existing child profiles, badges/XP and parent dashboard.
- Offline-friendly (consistent with the app's offline strategy).

### Non-goals (phase 1)
- Adaptive/tailored testing (multistage branching) — optional Phase 2.
- Official NAPLAN scoring, band/proficiency claim, or "predicted NAPLAN score".
- Reuse of any actual NAPLAN test item, prompt, stimulus, image or marking
  guide (forbidden by licence — see `naplan-research.md`).
- Admin/teacher tooling or school distribution.

## 3. Placement in the product

| Year level | NAPLAN Practice available | Notes |
| --- | --- | --- |
| **Year 3** | Yes — Reading, CoL, Numeracy | Writing practice uses a sample prompt on-screen; real Y3 writing is on paper |
| **Year 4** | Yes — practises **Year 5** | Next NAPLAN year up (no NAPLAN in Year 4) |
| **Year 5** | Yes — all four domains | |
| **Year 6** | Yes — practises **Year 7** | Next NAPLAN year up (no NAPLAN in Year 6) |
| **Year 7** | Yes — all four; numeracy has NC + calculator sections | |
| **Year 8** | Yes — practises **Year 9** | Next NAPLAN year up (no NAPLAN in Year 8) |
| **Year 9** | Yes — all four; numeracy has NC + calculator sections | |
| **Year 10** | Yes — pick any NAPLAN year | No upcoming NAPLAN; the year picker still allows practice |

NAPLAN Practice appears as a **track** beside the weekly plan on the home
screen (reachable before any child profile is built). With a profile, the hub
defaults the practice year to the child's **next NAPLAN year** — their current
year if it is 3/5/7/9, otherwise the year up (e.g. a Year 6 child practises
toward Year 7) — and the year pills can always override it. It leverages the
same learner identity, badges and progress storage as the weekly plan.

## 4. Domain & test definitions (mirror of real NAPLAN)

Source of truth: NAPLAN Assessment Framework / 2025 Technical Report (see
`naplan-research.md` §3). Each shipped test replicates these lengths and rules
with original items.

| Domain | Y3 | Y5 | Y7 | Y9 | Locked sections / tools |
| --- | --- | --- | --- | --- | --- |
| **Reading** | 39 items / 45 min | 39 / 50 min | 48 / 65 min | 48 / 65 min | Stimulus texts (6–7 for Y3/5, 9 for Y7/9), 5–8 items each |
| **Conventions of language** | 52 / 45 min (25 spelling + 27 G&P) | same | same | same | **Spelling → G&P locked**; spelling includes audio dictation + proofreading |
| **Numeracy** | 36 / 45 min | 42 / 50 min | 48 / 65 min | 48 / 65 min | Y7/9: **NC section → calculator section locked**; on-screen ruler/protractor where permitted |
| **Writing** | 40 min | 42 min | 42 min | 42 min | Single prompt; **narrative or persuasive** (revealed per attempt) |

### Item types to support (Phase 1)
- Multiple choice (single answer)
- Multiple select
- Drag-and-drop (ordering, matching, categorising)
- Hot-spot (tap a region/point)
- Text entry (short constructed response — numeracy)
- Audio dictation (spelling): text-to-speech of a word, child types it
- Proofreading (spelling): pick the misspelt word / correct spelling

### Writing
- Prompt alternates **narrative / persuasive** per test instance.
- The child writes in a simple text editor with word count + timer.
- Marked via an **original rubric** implementing the published criteria
  (audience, text structure, ideas, vocabulary, cohesion, paragraphing,
  sentence structure, spelling, punctuation) — our own wording, marked
  self/quick by the child or auto-checked for surface features, never claiming
  to be an official mark.

## 5. Question banking & authoring

### Schema (mirrors `apps/mobile/src/types/curriculum.ts` conventions)
Each item is a typed record:
```
Item {
  id            // e.g. "NP5-RE-0042"
  domain        // reading | writing | conventions | numeracy
  year          // 3 | 5 | 7 | 9
  itemType      // mc | multi | dnd | hotspot | text | dictation | proofread | writing
  stimulusId?   // reading texts: FK to a stimulus unit
  stem, options, answer(s), explanation
  curriculumCodes // AC v9.0 codes covered (provenance preserved, e.g. AC9M5N09)
  cognitiveProcess // reading/numeracy process taxonomy
  difficulty    // easy | medium | hard (for future adaptive)
  sensitivity   // flags (matches existing content authoring)
}
```

### Authoring pipeline
- Markdown template-driven authoring, same spirit as `docs/content/year-6/`
  (topic indexes + per-topic prompt files). A NAPLAN item bank lives under
  `docs/content/naplan/`.
- **Style guide + item blueprint** derived from studying the released
  2008–2016 papers (kept in a private, non-shipped reference folder): question
  length, wording tone, distractors, difficulty calibration by year.
- **Human review gate** (`reviewed: true`) before any item ships — mirroring the
  video-prompt `ready` gate.
- **Coverage targets** per domain/year: enough items for ≥3 full-length
  practice tests each, then growing.

## 6. Test engine behaviour

- **Timed mode**: countdown timer per official duration; timer flashes at 5 and
  10 min; auto-submit at zero (matches real test feel).
- **Untimed practice mode**: per-question, instant feedback + explanation
  (recommended for the first attempt; timed tests come after).
- **Locked sections**: conventions of language (spelling then G&P) and Y7/9
  numeracy (NC then calculator) warn "you cannot return to the previous
  section" and enforce it, exactly like the real test.
- **Flag & review**: questions can be flagged; a progress summary screen lets
  the child revisit flagged items before finishing.
- **On-screen tools** (numeracy): ruler / protractor rendered on relevant items;
  Y7/9 calculator appears only after the NC section.
- **Audio**: TTS for audio-dictation spelling and for reading numeracy items
  aloud (accessibility aligned with the demo-site behaviour, own implementation).
- **Offline**: full tests cached on-device (SQLite), synced on completion —
  consistent with `docs/architecture.md`.

## 7. Results, scoring & reporting

- Raw score + % per domain.
- **Proficiency-style descriptor** (e.g. "Developing / Strong / Exceeding")
  derived from our own thresholds, **clearly labelled "indicative — not an
  official NAPLAN result"**.
- Per-skill breakdown (e.g. numeracy: number, measurement, statistics) mapped
  from item `curriculumCodes` — feeds the same "coverage %" and insight
  machinery as the weekly plan.
- History + progress trends on the parent dashboard; results also earn XP and
  badges in the child's gamification system.

### Guardrails (compliance, from `naplan-research.md`)
- No affiliation claim with ACARA / NAP / state authorities; standard ACARA
  non-endorsement disclaimer in onboarding + footer.
- No NAPLAN logos, item text, prompts, stimulus passages, images or marking
  guides reproduced.
- No "predicted NAPLAN score" or band claim — proficiency descriptors are
  clearly indicative.

## 8. Gamification integration

- **NAPLAN badges**: first test, per-domain completion, streaks, "perfect
  session" (100% in timed mode), improvement milestones (score delta).
- Tests award **XP** at completion; harder domains/year levels award more.
- Rewards stay cosmetic/motivational (avatar items) per the product's
  non-manipulative monetisation guardrail.

## 9. Phasing

| Phase | Scope |
| --- | --- |
| **Phase 1 (MVP)** | Numeracy + conventions of language for Year 3 and 5 (original items, timed + practice mode, locked sections, offline) |
| **Phase 2** | Reading (stimulus bank) for Y3/5/7/9; writing (rubric) for Y5/7/9; Y7/9 numeracy NC/calculator |
| **Phase 3** | Adaptive/tailored mode, richer analytics, school/teacher reporting, item pool expansion |

## 10. Open questions

- Should NAPLAN Practice be **Lite or Pro**? (Recommend Pro — it is high-value
  and costs items to build.)
- Recommended cadence: how many tests per domain per year to author first
  (target ≥3 full-length tests/dimension to start).
- Writing: how much auto-marking (surface features) vs self-marking vs parent
  review in Phase 2.
- Whether to expose a "mock NAPLAN day" flow (all four domains in sequence)
  for parents before the real test window.

## 11. Sources

- `docs/specs/naplan-research.md` — feasibility, past papers, licensing, structure tables.
- `docs/specs/product-spec.md` — core product vision, tiers, gamification, trust & safety.
- `docs/architecture.md` — stack, offline strategy, data model.
