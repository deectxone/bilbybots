# AGENTS.md — BilbyBots

Guidance for AI agents and contributors working in this repository.

## What is this?

BilbyBots is a concept-stage learning app for Australian primary school students
(Years 1–6) that delivers curated weekly learning plans aligned to the
Australian Curriculum (Version 9.0) and state syllabuses (NSW first, then QLD,
VIC, WA). It targets Android, iOS and web with Google Auth, offers Lite and Pro
tiers, and gamifies completion with badges and bonus "advance" levels. A core
differentiator is **adaptive pacing**: if a child joins partway through the
school year, the planner re-packs the entire year's syllabus into the remaining
weeks so 100% of curriculum content is still covered, with compressed
assignment sizes to stay realistic for kids.

This repo currently contains **research, documentation, an Expo/React
scaffold and Year‑6 content planning.** No production curriculum content or
backend services exist yet; the code under `apps/mobile` is a facade that
proves architecture + theming + a home-first flow, with two tracks:
the weekly plan (plan→lesson) and NAPLAN practice (hub→test runner with
sample original items). Progress is persisted on-device via AsyncStorage
(`src/utils/persistence.ts`): child profile, completed topics, badges and
NAPLAN results survive reloads, and the header gear opens Setup to edit the
profile or reset all data.

## Reading order

1. `README.md` — project orientation and quick links.
2. `docs/specs/product-spec.md` — product requirements, UX, tiers, gamification.
3. `docs/specs/curriculum-research.md` — feasibility research from ACARA, NESA
   and other state authorities, plus licensing rules that constrain content reuse.
4. `docs/specs/adaptive-pacing.md` — algorithm spec for late-join syllabus coverage.
5. `docs/specs/naplan-research.md` — NAPLAN past-paper availability, licensing
   wall (FOI release, no app reuse), and the real test structure to replicate.
6. `docs/specs/naplan-test-spec.md` — product spec for an original NAPLAN-style
   practice-test module (Years 3/5/7/9).
7. `docs/content/year-6/*` — **verified Year‑6 topic lists** (English, Maths,
   Science, HASS) and the Phase‑2 AI‑video prompt markup.
8. `docs/architecture.md` — proposed system architecture and data model.
9. `docs/specs/shipping-plan.md` — how the single Expo codebase ships to web,
   iOS and Android (EAS builds, hosting, auth milestone, store submission, OTA).
10. `docs/roadmap.md` — phased delivery plan.
11. `apps/mobile/` — Expo (SDK 57) scaffold: `src/theme`, `src/types`,
    `src/data`, `src/components`, `src/screens`. See its `package.json`.

## Non-negotiable constraints (from research)

1. **Licensing.** The Australian Curriculum (ACARA v9.0) is CC BY 4.0 —
   commercial reuse is allowed **only with attribution** and a disclaimer that
   ACARA does not endorse the product. You must NOT claim any affiliation with
   ACARA, NESA or any department of education. Do NOT copy NESA syllabus text
   wholesale into content — NESA licence terms are restrictive; prefer ACARA
   content and map state outcomes to it. Photos/videos hosted on ACARA's site are
   Excluded Material — do not assume they are reusable. **NAPLAN past papers
   (2008–2016) are FOI-released, not CC-licensed: ACARA forbids reproducing them
   in an app or coaching use.** Any NAPLAN practice content must be original
   "NAPLAN-style" items (see `docs/specs/naplan-research.md`).
2. **Alignment, not reproduction.** Our value-add is authored instructional
   content (text + illustrations, later AI video). We reference curriculum
   content-description IDs (e.g. `AC9M2N01`) and do not bloat lessons by
   reproducing whole government documents.
3. **Accuracy.** The Australian Curriculum was revised to v9.0 (approved Apr
   2022). NSW is mid curriculum-reform: English/Maths K-10 (2022) are stable,
   but HSIE/PDHPE/Creative Arts/Maths Senior and Science & Tech K-6 (2024) roll
   out through 2027. Content must state which version/state syllabus it targets.
4. **Child safety.** User data involves children under 13. Design must follow
   Australian Privacy Principles (Privacy Act 1988), the eSafety Commissioner
   guidance, and the Children's Online Privacy Protection analogue principles
   (parent-managed accounts). No ads, no data brokering, parental consent flows.
5. **Pacing integrity.** The adaptive-pacing feature must guarantee 100% topical
   coverage of the syllabus content descriptions for the chosen state/year,
   regardless of join week. See `docs/specs/adaptive-pacing.md`.

## Conventions

- Curriculum-facing authored material lives in `docs/content/`; the app mirrors
  its schema in `apps/mobile/src/types/curriculum.ts`.
- The **Year‑6 topic indexes** under `docs/content/year-6/` are the single
  source of truth for which content descriptions are covered per subject —
  keep every CD referenced and never renumber ACARA codes.
- When curriculum content is ingested, records must retain the source
  `AC9xxxxx` / state outcome IDs and version tags. Never drop provenance.
- Keep documentation factual and cited (source URLs, dates). Research claims in
  `docs/specs/curriculum-research.md` are annotated with their sources.
- Diagrams can be plain ASCII/mermaid in `.md` files.
- **Illustrations in the app are themed vector diagrams, never strings of
  emoji.** `IllustrationSlot.diagram` (`apps/mobile/src/types/curriculum.ts`)
  renders through `apps/mobile/src/components/illustrations/diagrams.tsx` —
  a fixed set of `DiagramSpec` kinds (number-line, pie-fraction, flowchart,
  bar-compare, etc.) drawn with `react-native-svg` in the app's own palette
  (`src/theme/colors.ts`), matching the BilbyBot mascot/logo's style. Do
  **not** add an illustration as `{ kind: 'icon-scene', emojis: [...] }` —
  a row of emoji reads as filler/placeholder ("AI slop"), not production
  art. Either reuse an existing diagram kind with real data, or add a new
  themed kind to `diagrams.tsx` (same file: one `Frame`-based SVG function
  per kind, palette colours only, no photographic or emoji assets) — every
  illustration slot should render a real, on-brand vector diagram or scene.

## Illustration style reference

`apps/mobile/src/components/illustrations/diagrams.tsx` is the single
illustration engine for the app — read it before adding any new visual.
- Every diagram renders inside the shared `Frame` (fixed viewBox, `Svg` from
  `react-native-svg`) and uses only colours from `palette` in
  `src/theme/colors.ts` — no hex codes invented ad hoc, no external images.
  Kids see this content, so it must look like one consistent illustrated
  world, not a grab-bag of clip art.
- `IllustrationSlot.diagram` is a discriminated union (`DiagramSpec`) — add
  new content by picking an existing `kind` and supplying its data (e.g.
  `flowchart` for any step sequence, `bar-compare` for any comparison,
  `icon-scene` **only** as a last resort, and even then compose a small,
  deliberate scene — not a loose list of unrelated emoji).
- When a topic genuinely needs a new visual metaphor with no matching
  `kind`, add one: a small function following the existing pattern (plain
  SVG primitives — `Rect`/`Circle`/`Path`/`Line`/`Polygon`/`Text` — sized to
  the shared `W`/`H` viewBox), registered in the `DiagramView` switch. This
  keeps every illustration a first-class, reusable, on-brand vector asset
  instead of a one-off.

## Commands

- App typecheck: `cd apps/mobile && npx tsc --noEmit`
- App web bundle check: `cd apps/mobile && npx expo export --platform web`
- Dev server: `cd apps/mobile && npm start` (then press `w`/`i`/`a`)
- Repo validation: docs render (markdown), the typecheck above is clean, and
  facts in `docs/specs/curriculum-research.md` match their source URLs.