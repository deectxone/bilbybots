# Curriculum Research — State of Play (ACARA, NSW, QLD, VIC, WA)

> Compiled 2026-08 from official sources. This gates product decisions
> (subject scope, licensing, versioning, pacing). URLs are included so claims
> can be re-verified.

---

## 1. Executive summary

- The **Australian Curriculum Version 9.0** (approved by ministers April 2022,
  replacing v8.4) is the national F–10 curriculum. All states derive their own
  syllabuses from it. **Building on AC v9.0 is the correct feasibility anchor.**
- ACARA publishes the curriculum in **machine-readable formats** (RDF/XML,
  JSON-LD, SPARQL endpoint, full-curriculum Excel download) expressly "to
  import the curriculum into a database" — this makes content ingestion cheap
  and reliable.
- **Licensing is favourable:** ACARA curriculum is **CC BY 4.0**, permitting
  commercial reuse with attribution and a non-endorsement disclaimer.
  **NESA (NSW) is the exception** — its licence terms are restrictive and
  Smartcopying explicitly advises developers to use ACARA content "or seek
  permission from NESA" instead. Strategy: ingest ACARA, map NSW/state outcomes.
- **NSW is mid curriculum-reform.** English K–10 (2022) and Mathematics K–10
  (2022) are stable; HSIE K–6, PDHPE K–6, Creative Arts K–6, Science and
  Technology K–6 (2024) roll out through **2027**. Content must be version-tagged.
- **Data volume is modest:** the syllabus itself is a few thousand fine-grained
  statements (content descriptions + elaborations + achievement standards).
  The data *we author* (lessons, questions, media) dominates. See
  `architecture.md` §Data sizing.

## 2. The national curriculum — ACARA v9.0

Source:
- https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview
- https://www.australiancurriculum.edu.au/help/learning-areas

**8 learning areas**, F–10:
1. English (single subject, taught every year F–10)
2. Mathematics (single subject, every year F–10)
3. Science (single subject, every year)
4. Health and Physical Education (single, every year)
5. HASS (F–6 band; splits into Civics & Citizenship, Economics & Business,
   Geography, History from 7–10)
6. Technologies (Design & Technologies; Digital Technologies)
7. The Arts (Dance, Drama, Media Arts, Music, Visual Arts)
8. Languages (many subjects)

**Key mechanics:**
- Each learning area is organised into **strands → sub-strands → content
  descriptions** (the teachable items, each with a stable code such as
  `AC9M2N01`) → **elaborations** (examples) → **achievement standards**.
- Compulsory in primary: effectively English, Maths, Science, HASS, the arts,
  technologies, and (school-determined) languages. For an edtech MVP the
  realistic core is **English, Mathematics, Science, HASS**.
- v9.0 changed: fewer content descriptions, clarified achievement standards,
  "deep time" history added, engineering embedded in Design & Tech.

**Machine-readable SDK-grade assets** (this is a big deal for feasibility):
- Machine-readable Australian Curriculum (MRAC): https://rdf.australiancurriculum.edu.au/
  - RDF/XML per learning area, **JSON manifest files** preserving statement
    ordering, and a **SPARQL endpoint** (`.../api/sparql`).
  - Also: "Download entire curriculum" **Excel file** on
    https://www.australiancurriculum.edu.au/downloads (contains all content).
- Related open-source tooling: `github.com/nsip/NSIP` (Go) transforms MRAC; the
  broader NSIP ecosystem includes a **Machine-readable NSW Syllabus** transform.

### Implication
Plan for a **curriculum ingestion pipeline** (parser + import to DB) as a Phase 1
deliverable, consuming MRAC JSON + Excel as sources of truth. Everything else
(planner, pacing, content tagging) depends on this layer.

### 2.2 Years 7–10 (secondary band)

Source:
- https://www.australiancurriculum.edu.au/curriculum-information/understand-this-learning-area/humanities-and-social-sciences

The 7–10 band keeps the same architecture (strands → content descriptions →
achievement standards) but restructures some learning areas:

- **English, Mathematics, Science** continue as single subjects every year;
  content widens and deepens (e.g. Maths adds topics that later feed senior
  pathways; Science's four sub-strands — Biological, Chemical, Physical,
  Earth & Space — accumulate to Year 10).
- **HASS splits into four subjects:** History, Geography, Civics & Citizenship,
  and Economics & Business.
  - **History is mandatory every year** (v9 reduces it to **2 topics/year**,
    e.g. Y7 Deep Time Australia + the Ancient World; Y8 Making & transforming
    the Australian nation *and* the Medieval world; Y9 the Australian nation
    1750–1914 + the First World War; Y10 the Second World War + Building modern
    Australia 1945–present).
  - **Geography, Civics & Citizenship, Economics & Business are mandatory in
    7–8** and school-determined in **9–10**.
- **Technologies** (Design & Technologies; Digital Technologies) and **The
  Arts** are typically still taught in 7–8 with increasing specialisation.

| Subject | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- |
| English | ✓ | ✓ | ✓ | ✓ |
| Mathematics | ✓ | ✓ | ✓ | ✓ |
| Science | ✓ | ✓ | ✓ | ✓ |
| History | ✓ | ✓ | ✓ | ✓ |
| Geography | ✓ | ✓ | elective | elective |
| Civics & Citizenship | ✓ | ✓ | elective | elective |
| Economics & Business | ✓ | ✓ | elective | elective |

### Implication (7–10)
Packaged plans for 9–10 default to **English + Maths + Science + History**, with
"subject packs" for the electives — the child profile needs a subjects selector
for secondary years. Same planner/badge/pacing code; only the scope envelope and
rotation calendar widen.

## 3. NSW — NESA curriculum

Sources:
- https://curriculum.nsw.edu.au/stages/primary (Primary K–6 syllabus hub)
- https://www.nsw.gov.au/education-and-training/nesa/about/strategies-and-reforms/curriculum-reform/timeline
- https://www.nsw.gov.au/education-and-training/home-schooling/registration-guidelines/k-to-6-curriculum

**Structure — stage-based:**
- Early Stage 1 = Kindergarten; **Stage 1 = Years 1–2; Stage 2 = Years 3–4;
  Stage 3 = Years 5–6**.
- Mandatory K–6 areas: English, Mathematics, Science & Technology, HSIE
  (Geography and/or History), PDHPE, Creative Arts (Music, Dance, Drama, Visual
  Arts), Languages.
- Syllabuses are organised around **outcomes** (e.g. `EN2-OLC-01`, `MA2-RN-01`,
  `ENE-PRINT-01`) with related content and "focus areas" (e.g. English 3–6 focus
  areas: Oral language, Vocabulary, Reading fluency, Reading comprehension,
  Creating written texts, Spelling, Handwriting/digital transcription,
  Understanding & responding to literature).

**Curriculum reform timeline (primary), from the official timeline:**
| Syllabus | Now | Roll-out |
| --- | --- | --- |
| English K–10 (2022) | Implemented (ES1/S1; S2/S3) | Current |
| Mathematics K–10 (2022) | Implemented (ES1/S1; S2/S3) | Current |
| Creative Arts K–6 | Consultation/release done | Schools 2027 |
| HSIE K–6 | Newer syllabus | Schools 2027 |
| PDHPE K–6 | Newer syllabus | Schools 2027 |
| Science & Technology K–6 (2024) | Plan & prepare | Teach 2027 (old 2017 syllabus retires Dec 2028) |

**Implication:** NSW English/Maths (2022) are stable targets today; other K–6
subjects are in flux to 2027. Recommend: ship English/Maths on **NSW 2022
outcomes ↔ AC v9.0**, and keep other subjects aligned to AC v9.0 with NSW
outcome mapping flagged as "pre-2027 syllabus" or deferred.

## 4. Licensing rules that bind the product

Sources:
- https://www.australiancurriculum.edu.au/copyright-and-terms-of-use
- https://smartcopying.edu.au/creating-learning-and-teaching-resources/

| Source | Licence | Commercial reuse? | Notes |
| --- | --- | --- | --- |
| **ACARA Australian Curriculum** | CC BY 4.0 | **Yes** | Must attribute (TASL), add disclaimer: "ACARA does not endorse any product… nor represent quality. Users must assess the product." No fees collected by Copyright Agency. |
| ACARA site **photos & videos** | Excluded from CC | No (unless permitted) | Do not reuse ACARA-hosted images/video/assets. |
| **NESA (NSW)** syllabuses | Not CC; restrictive | Negotiate with NESA | Smartcopying: "the NESA licence terms in relation to the NSW curriculum are very restrictive. Curriculum developers are encouraged to refer to the ACARA curriculum, or seek permission from NESA." |
| **QCAA (Queensland)** | CC BY 4.0 (subject to exclusions) | Yes (with attribution) | Excludes student work samples, some video/audio. |
| **VCAA (Victoria)** | Victorian Curriculum F–10 under Creative Commons | Yes (with attribution) | Per Smartcopying list. |
| **SCSA (Western Australia)** | Material derived from Australian Curriculum usable under CC BY | Yes (non-commercial + intranet for some) | Freely copyable for non-commercial educational purposes; seek permission for commercial. |

**Practical policy for BilbyBots:**
1. Author original lessons/assignments/illustrations. Cite curriculum codes, do
   not bulk-copy syllabus prose.
2. Use ACARA CC BY 4.0 content where informative, with full attribution and the
   ACARA disclaimer (force-showed once in onboarding + a persistent footer).
3. For NSW-specific outcome labels (e.g. `EN2-OLC-01`), treat as **mapping
   references** (metadata) rather than reproduced text. If more NSW content is
   needed commercially, request permission from NESA (email via their site).
4. Do not scrape/reuse third-party images, ACARA photos/videos, or NAPLAN
   practice items (Excluded Material).

## 5. Queensland, Victoria, WA — state alignment

- **Queensland (QCAA)** implements Australian Curriculum v9.0 directly
  ("Australian Curriculum in Queensland" / ACiQ). Publishes sequence PDFs:
  "Sequence of content descriptions Prep–Year 6" etc. Freely downloadable.
  - https://www.qcaa.qld.edu.au/p-10/aciq/version-9/learning-areas/p-10-mathematics
- **Victoria (VCAA)** has its own **Victorian Curriculum F–10** (derived from
  AC), also CC-licensed. Slightly different document structure (achievement
  standards, "content descriptors").
- **Western Australia (SCSA)** publishes K–10 syllabuses derived from the AC;
  freely copiable for non-commercial educational purposes; commercial reuse
  needs permission.

**Implication:** a single AC v9.0 content core with state "packs" (mapping table
of AC codes ↔ state outcome codes, plus state-specific dates/term calendars)
gives national coverage with one content authoring pipeline. NSW should ship
first; QLD/VCWA packs later.

## 6. Data size sanity-check (why "data heavy" is OK)

Rough magnitude of *curriculum data* (F–6 scope, AC v9.0):
- Mathematics: hundreds of content descriptions F–10 (each year 1–6 has
  roughly 30–45 descriptions across the 6 strands).
- English: comparable order (~30–40 content descriptions per year band).
- Science, HASS: smaller per year.
- Total fine-grained statements (descriptions + elaborations + achievement
  standards) across all learning areas F–6 ≈ **low thousands of rows**.

That's comfortably small for any SQL DB. The genuinely heavy data is authored
media (illustrations, later AI video), which belongs in **object storage/CDN**,
not the database. See `architecture.md`.

## 7. The adaptive-pacing constraint — is it feasible? Yes.

- Because curriculum is enumerated as discrete, code-identifiable content
  descriptions, a planner can deterministically distribute them across weeks.
- Remaining-weeks compaction is a scheduling problem (spec in
  `adaptive-pacing.md`); it needs: (a) state term calendars
  (Q1–Q4 / Term 1–4 dates), (b) subject rotation rules, (c) per-topic depth
  knobs (question counts). All three are representable in data, not magic.

## 8. Sources & links (re-verify)

- Australian Curriculum v9.0 overview: https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview
- Learning areas: https://www.australiancurriculum.edu.au/help/learning-areas
- Downloads (Excel and per-learning-area): https://www.australiancurriculum.edu.au/downloads
- MRAC (RDF/JSON/SPARQL): https://rdf.australiancurriculum.edu.au/
- Copyright/terms: https://www.australiancurriculum.edu.au/copyright-and-terms-of-use
- NAPLAN/ACER copyright (Excluded Material detail): https://www.nap.edu.au/copyright
- Smartcopying (licensing guide): https://smartcopying.edu.au/creating-learning-and-teaching-resources/
- NSW primary syllabuses: https://curriculum.nsw.edu.au/stages/primary
- NSW curriculum reform timeline: https://www.nsw.gov.au/education-and-training/nesa/about/strategies-and-reforms/curriculum-reform/timeline
- NSW English outcomes: https://curriculum.nsw.edu.au/learning-areas/english/english-k-10-2022/outcomes
- QLD: https://www.qcaa.qld.edu.au/p-10/aciq/version-9/learning-areas/p-10-mathematics
- Mathematics Hub planning tool (F–6 coverage of v9): https://www.mathematicshub.edu.au/media/inldgf14/mathshub-planning-tool-f-6_a3_0202.pdf
- NSIP tooling (Go): https://github.com/nsip/NSIP