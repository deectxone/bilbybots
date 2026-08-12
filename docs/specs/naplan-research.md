# NAPLAN Research — Past Papers, Licensing & Practice-Test Feasibility

> Compiled 2026-08 from official ACARA / NAP sources. This doc answers: (1) can
> we get past NAPLAN papers for Years 3, 5, 7, 9; (2) can we reproduce them as
> in-app practice tests; (3) if not, what can we build instead. URLs are
> included so every claim can be re-verified.

---

## 1. Executive summary

- NAPLAN is a national literacy & numeracy assessment for **Years 3, 5, 7 and
  9**, testing **reading, writing, conventions of language (spelling + grammar
  & punctuation) and numeracy**. Held every March (since 2023; May 2008–2022)
  in a 9-day window. Fully online since 2022, with adaptive ("tailored")
  testing for reading, numeracy and conventions of language. The only paper
  test left is **Year 3 writing**.
- **Official past papers exist for exactly 9 cycles: 2008–2016** — NOT the last
  10 years. ACARA does not release any NAPLAN test after 2016 (they are banked
  for test development / R&D). There is **no NAPLAN in 2020** (cancelled,
  COVID-19).
- **The 2008–2016 papers are unusable in an app.** They were released under the
  Freedom of Information Act 1982 (Cth) (FOI Act), which grants access but **no
  copyright rights**. ACARA explicitly prohibits publishing, uploading to "a
  website or other electronic platform, such as an app", or using them in
  coaching — commercial **or** non-commercial. No exception for password-
  protected or free use.
- The **online public demonstration tests**, example **writing prompts** and
  **reading stimulus texts** are ACARA "Excluded Materials" — view only, not
  adaptable, not redistributable.
- **Conclusion: build ORIGINAL NAPLAN-style practice tests.** Author new
  questions that replicate the format, item types, difficulty and test
  structure of real NAPLAN. Treat the released 2008–2016 papers strictly as an
  internal **reference bank** (style + difficulty calibration), never as shipped
  content. This is exactly what established competitors (SubjectCoach, Excel
  Test Zone, and many apps) do.

## 2. What exists and where

### 2.1 Official past papers (the only public source)

- https://acara.edu.au/assessment/naplan/naplan-2008-2011-test-papers
- https://acara.edu.au/assessment/naplan/naplan-2012-2016-test-papers

Released **paper tests and answers for every year 2008–2016, for every year
level (3, 5, 7, 9), for every domain**:

| Domain | Files per year/year level |
| --- | --- |
| Reading | reading test + reading magazine (stimulus texts) |
| Writing | writing test + writing prompt (prompts shared Y3&5 and Y7&9; also "all year levels" in some years) |
| Conventions of language | language conventions test (spelling + grammar/punctuation) |
| Numeracy | numeracy test; **Y7 & Y9 split into calculator and non-calculator** tests |
| Answers | paper test answers (marking keys) per year level |

Plus special-print examples (large print / black & white) for a few years.
Scores can be sanity-checked against ACARA's published **NAPLAN score
equivalence tables (2008–2022)**:
https://www.acara.edu.au/assessment/naplan/naplan-score-equivalence-tables

### 2.2 What does NOT exist publicly

- **Any NAPLAN test from 2017 onwards.** ACARA: "We do not provide access to
  NAPLAN tests after 2016 as these are used for other projects related to the
  continued improvement of the National Assessment Program." This has been
  upheld by the Acting Information Commissioner (Timothy Pilgrim). No state or
  territory authority publishes them either — state preparation pages (NSW
  NESA, QLD QCAA, VIC VCAA, WA SCSA) all link back to the same ACARA pages and
  to the demonstration site.
- **2020 tests.** NAPLAN 2020 was cancelled for COVID-19; the constructed tests
  were reused for 2021 and never released.
- No official post-2016 item bank, past papers, or released online items.

### 2.3 Official practice resources (also restricted)

| Resource | URL | Reusability |
| --- | --- | --- |
| **NAPLAN public demonstration site** (online sample tests, all domains, all year levels; runs the real test player incl. tools, audio, accessibility) | https://nap.edu.au/naplan/public-demonstration-site | **Excluded Material** — viewable/usable by students, but not adaptable or redistributable |
| NAPLAN training & practice environment (schools, timed omnibus + narrative/persuasive writing) | https://www.assessform.edu.au | School login only; not for public/app reuse |
| Example writing prompts (past) | ACARA "What's in the tests" | **Excluded** — "previous NAPLAN ... writing prompts or reading stimulus texts" |
| Writing marking guides (narrative + persuasive) | https://nap.edu.au/naplan/whats-in-the-tests | Excluded from reuse (see §4) |

## 3. What NAPLAN actually looks like (structure we must replicate)

Source of truth: NAPLAN Assessment Framework and NAPLAN 2025 Technical Report
(https://www.nap.edu.au/docs/default-source/naplan/naplan-assessment-framework.pdf,
https://www.nap.edu.au/docs/default-source/naplan/naplan-2025-technical-report.pdf).

### 3.1 Test lengths (online)

| Domain | Year 3 | Year 5 | Year 7 | Year 9 |
| --- | --- | --- | --- | --- |
| Reading | 39 items / 45 min | 39 / 50 min | 48 / 65 min | 48 / 65 min |
| Conventions of language | 52 items / 45 min (25 spelling + 27 grammar & punctuation) — same all year levels | | | |
| Numeracy | 36 / 45 min | 42 / 50 min | 48 / 65 min | 48 / 65 min |
| Writing | 40 min (paper) | 42 min | 42 min | 42 min |

### 3.2 Structure & mechanics

- **Reading** is stimulus-based: texts with 5–8 items each; 6–7 texts for Y3/5,
  9 texts for Y7/9. Content ≈ 75% Literacy, 20% Language, 5% Literature.
  Cognitive processes: locating/identifying, integrating/interpreting,
  analysing/evaluating.
- **Conventions of language** has two **locked sections** — spelling first
  (audio dictation + proofreading), then grammar & punctuation (MC + drag-drop).
  Students cannot return to spelling after moving on.
- **Numeracy**: Y3/5 no calculator; **Y7/9 split into a non-calculator section
  then a calculator-allowed section** (locked once you leave the NC section).
  Content strands: number & algebra, measurement & geometry, statistics &
  probability.
- **Writing**: one extended response to a prompt; text type is **narrative or
  persuasive** (only one is used per year, revealed on test day). Y3/5 get
  different prompts from Y7/9.
- **Item types**: multiple-choice, multi-select, drag-and-drop, hot-spot,
  text entry, audio-dictation (spelling). Audio support on numeracy questions;
  on-screen ruler/protractor/calculator where permitted.
- **Tailored (adaptive) testing**: reading, numeracy and conventions of
  language use multistage tailored design — testlets (A…F nodes) selected based
  on the student's performance, giving 200+ possible pathways. Since 2023
  results are reported against **proficiency standards** (a new time series;
  not comparable to pre-2023 bands).

### 3.3 Implications for an in-app replica

1. To feel authentic, a practice test should mirror the **item counts,
   timings, locked-section behaviour** (spelling→G&P; NC→CA for Y7/9) and
   **item types** above.
2. Adaptive tailoring is optional for practice; a fixed-length test is
   acceptable and simpler, with a "harder set" unlockable later.
3. Writing needs a rubric-style self/auto check — narrative and persuasive
   marking criteria are published (but Excluded Material; our rubric must be
   original wording that implements the same criteria).

## 4. Licensing & compliance (the binding constraints)

Sources:
- https://www.acara.edu.au/assessment/naplan (copyright section)
- https://acara.edu.au/assessment/naplan/naplan-2012-2016-test-papers
- https://www.nap.edu.au/copyright
- https://www.acara.edu.au/contact-us/copyright

| Material | Status | In-app use? |
| --- | --- | --- |
| **NAPLAN past papers & answers (2008–2016)** | Released under **FOI Act** — grants access, **not** copyright rights (s 91 FOI Act) | **No.** ACARA forbids publishing or uploading to any platform/app "regardless of whether or not the site is publicly accessible or password protected, for any commercial or non-commercial use", and forbids use in coaching clinics |
| **NAPLAN online demonstration tests** | Excluded Material | No — view only, non-commercial, cannot adapt |
| **Example writing prompts & reading stimulus texts** | Excluded Material ("previous NAPLAN example questions, writing prompts or reading stimulus texts") | No — cannot edit/adapt/redistribute |
| **Writing marking guides** | Excluded Material | No — must author original rubric wording covering the same criteria |
| **Australian Curriculum v9.0** | **CC BY 4.0** | **Yes** — with attribution + non-endorsement disclaimer (see `curriculum-research.md`) |
| Third-party photos/illustrations inside tests | Owned by third parties | No |

Key ACARA quotes (from the NAPLAN page):
> "The FOI Act provides access to documents but it does not provide any
> copyright rights in relation to the documents that have been released."
>
> "You do not have permission to ... upload them to a website or other
> electronic platform."
>
> "You are not permitted to: publish the NAPLAN test materials; use these test
> materials in coaching clinics; upload these test materials to a website or
> other electronic platform, such as an app, regardless of whether or not the
> site is publicly accessible or password protected, for any commercial or
> non-commercial use."

Schools only: principals may upload *released* (2008–2016) NAPLAN tests to
their own **password-protected** platforms under s 113P of the Copyright Act —
this is a school exception, not a product licence. The national protocols also
restrict schools from uploading any alternative-format paper tests from 2023
onwards.

### Practical policy for BilbyBots (mirrors `AGENTS.md` licensing rules)

1. **Ship only original questions.** Model style, difficulty and format on the
   released papers; never copy question text, stimulus passages or prompts.
2. Keep the 2008–2016 papers + answers in a **private reference repo** for
   authoring calibration (style/difficulty), clearly marked non-shippable.
3. Never scrape or reproduce demonstration-test screens, images, audio or
   prompts.
4. Do not claim any ACARA / NAP affiliation; include the standard ACARA
   non-endorsement disclaimer.
5. If we ever want to use genuine items (e.g. a licensing deal), that requires
   **permission from ACARA** via their online enquiry form (select "copyright")
   — but the default build path does not depend on it.

## 5. Competitor landscape (all build original questions)

| Provider | Model | Notes |
| --- | --- | --- |
| SubjectCoach | Subscription, 500+ original NAPLAN-style tests, mirrors online format | School + tutoring market |
| Excel Test Zone | Original practice tests / books | Long-established |
| NAPLAN Prep Practice Tests (iOS app) | 300+ original questions, timed, offline, Y3–9 | App-store competitor |
| Braintree Coaching, Aussie Math, Australian Edu | Free/sample original tests | Marketing funnels |

Every serious provider authors **original** items — strong evidence that
"NAPLAN-style, not NAPLAN items" is the viable, safe product model.

## 6. Recommendation

**Build a NAPLAN Practice module with 100% original content** that replicates
real NAPLAN structure (domain lengths, item types, locked sections, timed
sessions) for Years 3, 5, 7, 9. Use released papers only as an internal
authoring reference. See `naplan-test-spec.md` for the product specification.

## 7. Sources & links (re-verify)

- NAPLAN overview + copyright: https://www.acara.edu.au/assessment/naplan
- Past papers 2008–2011: https://acara.edu.au/assessment/naplan/naplan-2008-2011-test-papers
- Past papers 2012–2016: https://acara.edu.au/assessment/naplan/naplan-2012-2016-test-papers
- Score equivalence tables: https://www.acara.edu.au/assessment/naplan/naplan-score-equivalence-tables
- Public demonstration site: https://nap.edu.au/naplan/public-demonstration-site
- What's in the tests: https://nap.edu.au/naplan/whats-in-the-tests
- NAPLAN Assessment Framework (PDF): https://www.nap.edu.au/docs/default-source/naplan/naplan-assessment-framework.pdf
- NAPLAN 2025 Technical Report (PDF): https://www.nap.edu.au/docs/default-source/naplan/naplan-2025-technical-report.pdf
- NAP copyright / excluded material: https://www.nap.edu.au/copyright
- ACARA copyright: https://www.acara.edu.au/contact-us/copyright
- 2026 national protocols (PDF): https://www.nap.edu.au/docs/default-source/naplan/naplan-national-protocols-for-test-administration.pdf
- NSW NESA NAPLAN prep: https://www.nsw.gov.au/education-and-training/nesa/naplan/preparation-activities
- VCAA NAPLAN practice handbook (2025 PDF): https://vcaa.vic.edu.au/sites/default/files/Documents/naplan/publications/2025/2025NAPLANPracticeTestAdministrationHandbook.pdf
- Assessment platform (school practice): https://www.assessform.edu.au/
