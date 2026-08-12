# BilbyBots — Content Authoring (Years 1–5)

Organisation and conventions for authoring Years 1–5 curriculum-aligned
content, mirroring `docs/content/year-6/`. Every topic is a self-contained
unit: **lesson (text + illustrations) + quick-check + assignment**, tagged with
the Australian Curriculum v9.0 content descriptions (CD) it covers.

## File layout

```
docs/content/year-1-5/
├── mathematics.md            ← all Y1–5 Maths topics (index)
├── english.md                ← all Y1–5 English topics (index)
├── science.md                ← all Y1–5 Science topics (index)
└── hass.md                   ← all Y1–5 HASS topics (index)
```

The app mirrors these indexes in
`apps/mobile/src/data/year{1,2,3,4,5}/<subject>.ts` (the data bank is the
shipping content; these docs are the scope source-of-truth and the human
review surface).

## Scope

- **Mathematics:** Y1 = 15 CDs, Y2 = 18, Y3 = 23, Y4 = 23, Y5 = 24.
  Probability has **no** CDs in Years 1–2 (starts Year 3).
- **English:** Y1 = 30 CDs, Y2 = 27, Y3 = 28, Y4 = 28, Y5 = 24.
- **Science:** Y1 = 10, Y2 = 10, Y3 = 12, Y4 = 12, Y5 = 12. Science
  understanding is per-year; Human Endeavour + Inquiry are 2-year-band codes
  (Y1–2 share H01/I01–I06; Y3–4 share H01–H02/I01–I06; Y5 has its own
  H01–H02/I01–I06 wording).
- **HASS:** Y1 = 4 knowledge + 6 skills, Y2 = 4 + 6, Y3 = 7 + 7, Y4 = 9 + 7,
  Y5 = 8 + 7. Skills CDs are **woven into** the knowledge units (not authored
  separately), matching the Year-6 bank pattern.

## Topic ids

- Maths: `Y<n>-MAT-<NN|AL|ME|SP|ST|PR><NN>` (Number, Algebra, Measurement,
  Space, Statistics, Probability)
- English: `Y<n>-ENG-<LA|LE|LY><NN>` (Language, Literature, Literacy)
- Science: `Y<n>-SCI-<U|H|I><NN>` (Understanding, Human Endeavour, Inquiry)
- HASS: `Y<n>-HASS-<HI|GE|CI|EC><NN>` (History, Geography, Civics, Economics)

## Authoring rules

- Kid-friendly voice, short sentences, concrete examples, warm + brave tone.
- Every topic ships **6 assignment questions** at nominal pace / **4** compact
  (per `docs/specs/adaptive-pacing.md`).
- Every illustration slot renders a real vector `DiagramSpec` from
  `apps/mobile/src/components/illustrations/diagrams.tsx` — never an emoji row.
- Keep `cd:` lists identical to the indexes; never renumber ACARA codes.
- **Sensitivity:** topics touching First Nations Australians' history, culture
  or Country/Place carry `sensitivity: true` in the app bank and are written
  to established, general facts pending a community-protocol review (see
  AGENTS.md and the per-topic flags in `hass.md`/`science.md`).
- Provenance is retained everywhere (AC9 codes preserved).
