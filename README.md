# BilbyBots

Concept study & documentation for a **Year 1–6 Australian primary school learning app**
aligned to the Australian Curriculum (v9.0) and state syllabuses.

> **Status:** Research, specification, **Year‑6 content mapping** and an
> **Expo/React scaffold** (facade). Production content + backend are next.

## The idea in one paragraph

A parent signs up (Google Auth), creates a profile for each child with their
name and school year (1–6), and BilbyBots generates a **curated weekly learning
plan** per subject. Each week has **learn-first content** (text with worked,
illustrated examples) followed by **on-device assignments**. Completion earns
**badges**; finishing the weekly assignment unlocks a **bonus challenge** with
extra rewards. If a child joins the app partway through the school year, the
planner **re-packs the full year syllabus into the remaining weeks** so 100% of
topics are still covered, with fewer questions per assignment to keep it
achievable. Ships as web + iOS + Android at **Lite** and **Pro** tiers.

## Key docs

| Doc | Purpose |
| --- | --- |
| [`docs/specs/product-spec.md`](docs/specs/product-spec.md) | Product requirements, UX, user journey, gamification, Lite/Pro |
| [`docs/specs/curriculum-research.md`](docs/specs/curriculum-research.md) | Feasibility from ACARA / NESA / state authorities + licensing rules |
| [`docs/specs/adaptive-pacing.md`](docs/specs/adaptive-pacing.md) | Algorithm for late-join 100% syllabus coverage |
| [`docs/specs/naplan-research.md`](docs/specs/naplan-research.md) | NAPLAN past-paper availability (2008–2016), licensing constraints, structure to replicate |
| [`docs/specs/naplan-test-spec.md`](docs/specs/naplan-test-spec.md) | Product spec for an original NAPLAN-style practice-test module (Y3/5/7/9) |
| [`docs/content/year-6/README.md`](docs/content/year-6/README.md) | Year‑6 content authoring + topic indexes (Maths, English, Science, HASS) |
| [`docs/content/year-6/video-prompts/template.md`](docs/content/year-6/video-prompts/template.md) | Phase‑2 AI‑video prompt markup (Google Flow playbook) |
| [`docs/architecture.md`](docs/architecture.md) | Stack, data model, offline strategy, open-source DB choice |
| [`docs/roadmap.md`](docs/roadmap.md) | Phased delivery plan |
| [`apps/mobile/`](apps/mobile/) | Expo SDK‑57 scaffold — home (weekly-plan + NAPLAN tracks) → plan/lesson + NAPLAN hub/runner facades |

## Run the scaffold

```bash
cd apps/mobile
npm start            # Expo dev server (press w / i / a for web / iOS / Android)
npx tsc --noEmit     # typecheck
```

## Headline research findings (details & sources in `docs/specs/curriculum-research.md`)

- The Australian Curriculum v9.0 is published **machine-readable** (RDF/XML,
  JSON-LD, SPARQL endpoint, plus a full-curriculum Excel download), which makes
  content ingestion tractable.
- ACARA curriculum content is **CC BY 4.0** — you may use it commercially with
  attribution and a non-endorsement disclaimer. NESA (NSW) syllabuses are
  **not** openly licensed; strategy is to align to ACARA content and map state
  outcomes instead.
- NSW K–6 is **stage-based** (Stage 1 = Y1–2, Stage 2 = Y3–4, Stage 3 = Y5–6)
  and is mid curriculum-reform — most new K–6 syllabuses (HSIE, PDHPE, Creative
  Arts, Science & Tech) are only implemented from 2027.
- **DB recommendation:** PostgreSQL (open source) as the system of record with
  Row-Level Security for multi-tenant family accounts, plus **SQLite** on-device
  for offline-first mobile. The heavy media (illustrations/video) lives in
  object storage, not the DB.
- **NAPLAN practice (Y3/5/7/9):** past papers exist for **2008–2016 only** and
  are FOI-released — ACARA forbids putting them in an app. Ship **original
  NAPLAN-style tests** instead (see `naplan-research.md` + `naplan-test-spec.md`).

## Working here

Read [`AGENTS.md`](AGENTS.md) first — it contains the licensing, alignment,
accuracy and child-safety constraints that govern all decisions in this repo.