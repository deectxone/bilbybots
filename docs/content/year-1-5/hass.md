# Years 1–5 — HASS topics (History, Geography, Civics & Citizenship, Economics & Business)

Source of truth: Australian Curriculum v9.0, HASS F–6 (strands: Knowledge &
understanding K, Skills S). Every content description for Years 1–5 is covered
below and mirrored in `apps/mobile/src/data/year{1,2,3,4,5}/hass.ts`.

Per AC v9.0 the Years 1–5 HASS band carries the following content descriptions
(codes verified against ACARA v9.0 MRAC data):

| Year | Knowledge (K) | Skills (S) | Total |
|------|--------------:|-----------:|------:|
| 1    | 4             | 6          | 10    |
| 2    | 4             | 6          | 10    |
| 3    | 7             | 7          | 14    |
| 4    | 9             | 7          | 16    |
| 5    | 8             | 7          | 15    |

> Skills CDs are taught **within** the knowledge topics below (an inquiry is
> embedded in each unit), matching how schools program HASS and the existing
> Year-6 bank pattern. Each topic id uses `Y<n>-HASS-<HI|GE|CI|EC>NN`
> (History, Geography, Civics & Citizenship, Economics & Business).

> ⚠ **Sensitivity:** topics touching First Nations Australians' histories,
> cultures or Country/Place (e.g. `AC9HS2K04`, `AC9HS3K04`, `AC9HS4K01`,
> `AC9HS4K04`, `AC9HS5K02`) carry `sensitivity: true` in the app bank and are
> written to established, general facts pending a community-protocol review
> (see AGENTS.md).

Each topic ships 6 assignment questions at nominal pace and 4 under compact
pace (adaptive pacing, see `docs/specs/adaptive-pacing.md`). Illustration slots
render real vector diagrams via `src/components/illustrations/diagrams.tsx`.

---

## Year 1 — HASS topics (4 knowledge units + 6 skills woven in)

### Y1-HASS-HI01 · Family structures & roles then and now
- CDs: `AC9HS1K01`
- Learn: differences in family structures and roles today, and how these have
  changed or remained the same over time.
- Skills woven in: `AC9HS1S01`–`S06` (questioning, sources, comparison,
  perspectives, conclusions, communicating).
- ⚠ handled with care re: family diversity; sensitivity: none (family-focused,
  but written inclusively).
- Assignment: 6 questions (compare families, change/continuity).

### Y1-HASS-HI02 · Daily life then and now
- CDs: `AC9HS1K02`
- Learn: continuity and change between aspects of daily life now and
  parents'/grandparents' childhoods (education, work, play).
- Skills woven in: `AC9HS1S01`–`S06`.
- Assignment: 6 questions (compare past/present daily life).

### Y1-HASS-GE01 · Features of local places
- CDs: `AC9HS1K03`
- Learn: the natural, managed and constructed features of local places, and
  their location.
- Skills woven in: `AC9HS1S01`–`S06`.
- Assignment: 6 questions (natural/managed/constructed, locate on map).

### Y1-HASS-GE02 · Caring for places
- CDs: `AC9HS1K04`
- Learn: how places change and how they can be cared for by different groups,
  including First Nations Australians.
- Skills woven in: `AC9HS1S01`–`S06`.
- ⚠ `sensitivity: true` — First Nations Australians' care for Country/Place.
- Assignment: 6 questions (how places change, caring for Country/Place).

---

## Year 2 — HASS topics (4 knowledge units + 6 skills woven in)

### Y2-HASS-HI01 · Significance of local places & people
- CDs: `AC9HS2K01`
- Learn: a local individual, group, place or building and the reasons for its
  importance, including social, cultural or spiritual significance.
- Skills woven in: `AC9HS2S01`–`S06`.
- Assignment: 6 questions (why places/people matter).

### Y2-HASS-HI02 · How technology changed lives
- CDs: `AC9HS2K02`
- Learn: how technological developments changed people's lives at home, work,
  travel and communication.
- Skills woven in: `AC9HS2S01`–`S06`.
- Assignment: 6 questions (old vs new technology).

### Y2-HASS-GE01 · Representing places across scales
- CDs: `AC9HS2K03`
- Learn: how places can be spatially represented in divisions from local to
  regional to state/territory, and interconnection across scales.
- Skills woven in: `AC9HS2S01`–`S06`.
- Assignment: 6 questions (local→state→Australia, maps).

### Y2-HASS-GE02 · First Nations connection to Country/Place
- CDs: `AC9HS2K04`
- Learn: the interconnections of First Nations Australians to a local
  Country/Place.
- Skills woven in: `AC9HS2S01`–`S06`.
- ⚠ `sensitivity: true` — First Nations connection to Country/Place.
- Assignment: 6 questions (interconnection, respect for Country/Place).

---

## Year 3 — HASS topics (7 knowledge units + 7 skills woven in)

### Y3-HASS-HI01 · Changes to the local community
- CDs: `AC9HS3K01`
- Learn: causes and effects of changes to the local community; contributions
  of people from diverse backgrounds.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (causes/effects, diverse contributions).

### Y3-HASS-HI02 · Australia's identity & symbols
- CDs: `AC9HS3K02`
- Learn: significant events, symbols and emblems important to Australia's
  identity and diversity, and how they are celebrated/commemorated.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (national symbols, celebrations, commemoration).

### Y3-HASS-GE01 · Australia's states, territories & neighbours
- CDs: `AC9HS3K03`
- Learn: contemporary Australia as states/territories and as First Nations
  Countries/Places; locations of neighbouring countries.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (states/territories, neighbours, map).

### Y3-HASS-GE02 · First Nations interconnection with Country/Place
- CDs: `AC9HS3K04`
- Learn: ways First Nations Australians in different parts of Australia are
  interconnected with Country/Place.
- Skills woven in: `AC9HS3S01`–`S07`.
- ⚠ `sensitivity: true` — First Nations interconnection with Country/Place.
- Assignment: 6 questions (interconnection, seasonal/connection knowledge).

### Y3-HASS-GE03 · Comparing Australia & neighbouring countries
- CDs: `AC9HS3K05`
- Learn: similarities/differences between places in Australia and neighbouring
  countries in natural, managed and constructed features.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (compare places, features).

### Y3-HASS-CI01 · Rules: who makes them & why
- CDs: `AC9HS3K06`
- Learn: who makes rules, why rules are important, consequences of rules not
  being followed.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (rules, reasons, consequences).

### Y3-HASS-CI02 · Participating in communities
- CDs: `AC9HS3K07`
- Learn: why people participate within communities and how students can
  actively participate and contribute.
- Skills woven in: `AC9HS3S01`–`S07`.
- Assignment: 6 questions (participation, contribution).

---

## Year 4 — HASS topics (9 knowledge units + 7 skills woven in)

### Y4-HASS-HI01 · First Nations Australians: diversity & connection
- CDs: `AC9HS4K01`
- Learn: the diversity of First Nations Australians, their social
  organisation and continuous connection to Country/Place.
- Skills woven in: `AC9HS4S01`–`S07`.
- ⚠ `sensitivity: true` — First Nations diversity and connection to
  Country/Place.
- Assignment: 6 questions (diversity, social organisation, Country).

### Y4-HASS-HI02 · Why the first colony was established
- CDs: `AC9HS4K02`
- Learn: causes of the establishment of the first British colony in Australia
  in 1788.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (causes, 1788, First Fleet).

### Y4-HASS-HI03 · Life in the early colony
- CDs: `AC9HS4K03`
- Learn: experiences of individuals/groups (military and civilian officials,
  convicts) in establishing the first colony.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (roles, daily life, hardships).

### Y4-HASS-HI04 · Effects of contact on First Nations Australians
- CDs: `AC9HS4K04`
- Learn: effects of contact on First Nations Australians and their
  Countries/Places following the First Fleet, and views of this as invasion.
- Skills woven in: `AC9HS4S01`–`S07`.
- ⚠ `sensitivity: true` — contact effects, invasion perspectives.
- Assignment: 6 questions (effects of contact, differing views).

### Y4-HASS-GE01 · Environments, vegetation & water
- CDs: `AC9HS4K05`
- Learn: importance of environments, including natural vegetation and water
  sources, to people and animals in Australia and another continent.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (environments, vegetation, water).

### Y4-HASS-GE02 · Sustainable use of resources
- CDs: `AC9HS4K06`
- Learn: sustainable use and management of renewable and non-renewable
  resources, including First Nations Australians' custodial responsibility.
- Skills woven in: `AC9HS4S01`–`S07`.
- ⚠ `sensitivity: true` (custodial responsibility framed respectfully).
- Assignment: 6 questions (renewable/non-renewable, sustainability).

### Y4-HASS-CI01 · Rules vs laws
- CDs: `AC9HS4K07`
- Learn: differences between rules and laws, why laws are important, how laws
  affect people's lives.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (rules vs laws, importance).

### Y4-HASS-CI02 · Local government & community services
- CDs: `AC9HS4K08`
- Learn: roles of local government and how community members use and
  contribute to local services.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (local government roles, services).

### Y4-HASS-CI03 · Diversity & identity
- CDs: `AC9HS4K09`
- Learn: diversity of cultural, religious and/or social groups to which
  students and others belong, and their importance to identity.
- Skills woven in: `AC9HS4S01`–`S07`.
- Assignment: 6 questions (diversity, identity, belonging).

---

## Year 5 — HASS topics (8 knowledge units + 7 skills woven in)

### Y5-HASS-HI01 · Why British colonies were established after 1800
- CDs: `AC9HS5K01`
- Learn: the economic, political and social causes of the establishment of
  British colonies in Australia after 1800.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (causes, new colonies).

### Y5-HASS-HI02 · Impact of colonies on First Nations Australians & environment
- CDs: `AC9HS5K02`
- Learn: impact of the development of British colonies on the lives of First
  Nations Australians, colonists and convicts, and on the natural environment.
- Skills woven in: `AC9HS5S01`–`S07`.
- ⚠ `sensitivity: true` — impact on First Nations Australians and environment.
- Assignment: 6 questions (impacts on people and environment).

### Y5-HASS-HI03 · Significant individuals & groups
- CDs: `AC9HS5K03`
- Learn: role of a significant individual or group, including First Nations
  Australians and migrants, in the development of an Australian colony.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (key figures, their contributions).

### Y5-HASS-GE01 · People influence places
- CDs: `AC9HS5K04`
- Learn: influence of people, including First Nations Australians and people
  in other countries, on the characteristics of a place.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (how people shape places).

### Y5-HASS-GE02 · Managing Australian environments & severe weather
- CDs: `AC9HS5K05`
- Learn: management of Australian environments, including managing severe
  weather events such as bushfires, floods, droughts or cyclones.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (bushfire/flood/drought/cyclone management).

### Y5-HASS-CI01 · Australia's democracy
- CDs: `AC9HS5K06`
- Learn: key values and features of Australia's democracy, including elections
  and the roles/responsibilities of elected representatives.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (democracy, elections, representatives).

### Y5-HASS-CI02 · Working together for civic goals
- CDs: `AC9HS5K07`
- Learn: how citizens with shared beliefs and values work together to achieve
  a civic goal.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (civic goals, collective action).

### Y5-HASS-EC01 · Types of resources & needs/wants
- CDs: `AC9HS5K08`
- Learn: types of resources — natural, human and capital — and how they
  satisfy needs and wants.
- Skills woven in: `AC9HS5S01`–`S07`.
- Assignment: 6 questions (natural/human/capital, needs vs wants).

---

## Coverage check
- Year 1: 4/4 knowledge (skills S01–S06 woven) ✓
- Year 2: 4/4 knowledge (skills S01–S06 woven) ✓
- Year 3: 7/7 knowledge (skills S01–S07 woven) ✓
- Year 4: 9/9 knowledge (skills S01–S07 woven) ✓
- Year 5: 8/8 knowledge (skills S01–S07 woven) ✓
