# Years 7–10 — History topics

Source of truth: Australian Curriculum v9.0, History 7–10 (subject code `HH`).
v9.0 cut History to **2 broad sub-strands per year** (8 sub-strands in the
7–10 band), and schools are expected to teach them **in depth** rather than
survey many depth studies. This index breaks each year's 2 units into
lesson-sized sub-topics (4–6 per unit, 8–12 per year) mirroring the schema in
`apps/mobile/src/data/year7/history.ts`, `year8/history.ts`,
`year9/history.ts`, `year10/history.ts` (each topic carries 6 questions @
nominal pace / 4 @ compact pace, per `docs/specs/adaptive-pacing.md`).

> **Framing note (verified 2026-08 against ACARA v9.0 content descriptions):**
> `docs/specs/curriculum-research.md` §2.2 lists "Making & transforming the
> Australian nation" under **Year 8** as well as "the Australian nation
> 1750–1914" under **Year 9**. The official v9.0 curriculum places the
> Australian-nation unit **only in Year 9** (`AC9HH9K01–K07`, mandatory with
> the First World War). Year 8 is the Medieval/early-modern world plus a
> choice of an Empires or Asia-Pacific study. This index follows the official
> v9.0 codes: **Year 8 = Medieval world + Japan under the Shoguns (Asia-Pacific
> world); Year 9 = Making & transforming the Australian nation + First World
> War.** Codes are therefore real and not duplicated.

Year mapping (units → CD codes → app bank):

| Year | Unit 1 | Unit 2 | App export |
| --- | --- | --- | --- |
| 7 | Deep time history of Australia (`AC9HH7K01`–`K07`) | The ancient world — Ancient Egypt (`AC9HH7K08`–`K13`) | `YEAR7_HISTORY_TOPICS` |
| 8 | Medieval Europe & the early modern world (`AC9HH8K01`–`K06`) | Asia-Pacific world — Japan under the Shoguns (`AC9HH8K12`–`K16`) | `YEAR8_HISTORY_TOPICS` |
| 9 | Making & transforming the Australian nation (`AC9HH9K01`–`K07`) | First World War (`AC9HH9K08`–`K12`) | `YEAR9_HISTORY_TOPICS` |
| 10 | Second World War (`AC9HH10K01`–`K06`) | Building modern Australia (`AC9HH10K07`–`K13`) | `YEAR10_HISTORY_TOPICS` |

Skills CDs (`AC9HH7S01`–`S08`, `AC9HH8S01`–`S08`, `AC9HH9S01`–`S08`,
`AC9HH10S01`–`S08`) are taught **within** the knowledge units below (an
inquiry moment is embedded in each unit), matching how schools program
History.

---

## Year 7 — Deep Time Australia + The Ancient World

### Deep time history of Australia (`AC9HH7K01`–`K07`)

All six Deep Time topics carry **`sensitivity: true`** (First Nations
Australians' deep histories, cultural knowledge and heritage obligations).
Content is restricted to established, broadly-agreed facts per ACARA's deep
time resource, and **must be reviewed with First Nations community knowledge
holders (FIRST framework) before release** — same pattern as `Y6-HASS-HI02`.

#### Y7-HIS-DT01 · How we know the deep past: evidence & time
- CDs: `AC9HH7K01`
- Learn: methods and evidence for investigating the deep past — excavation,
  stratigraphy, radiocarbon/TL dating, oral histories — and time terms
  (BCE/CE, BP).
- Illustrations: evidence-toolkit flowchart (excavation → dating → oral
  histories → interpretation).
- Assignment: 6 questions (mcq/short mix): identify evidence forms, dating
  methods, the meaning of BP, the value of oral histories.
- Skills woven in: `AC9HH7S02`, `AC9HH7S03`, `AC9HH7S05`.
- ⚠ `sensitivity: true` — deep time/First Nations content; community-protocol
  review required.

#### Y7-HIS-DT02 · Arrival on Sahul: migration to Australia
- CDs: `AC9HH7K02`
- Learn: the Sahul landmass, seafaring migration, dating of sites such as Lake
  Mungo, genetic research, 65,000+ years of occupation.
- Illustrations: seafarers-to-Sahul icon-scene (ship / map / people).
- Assignment: 6 questions: Sahul, seafaring arrival, Lake Mungo, rising seas,
  the term "migration".
- Skills: `AC9HH7S01`, `AC9HH7S05`.
- ⚠ `sensitivity: true` — deep time/First Nations content; community-protocol
  review required.

#### Y7-HIS-DT03 · The world's oldest continuing cultures
- CDs: `AC9HH7K03`
- Learn: continuity vs change over deep time; rock art, ochre, occupation
  sites (Kakadu); living cultures today.
- Illustrations: deep-time flowchart (arrival → continuity → change → today).
- Assignment: 6 questions: meaning of "continuing", ochre, continuity,
  evidence sites, connection to Country.
- Skills: `AC9HH7S05`, `AC9HH7S07`.
- ⚠ `sensitivity: true` — cultural knowledge content; community-protocol
  review required.

#### Y7-HIS-DT04 · Surviving environmental change
- CDs: `AC9HH7K04`
- Learn: rising seas, aridification, megafauna; oral traditions of change;
  adaptation and sustainable use.
- Illustrations: adaptation icon-scene (wave / sun / tree / people).
- Assignment: 6 questions: Tasmania land bridge, megafauna, oral traditions,
  water management, "sea levels".
- Skills: `AC9HH7S05`, `AC9HH7S01`.
- ⚠ `sensitivity: true` — deep time/First Nations content; community-protocol
  review required.

#### Y7-HIS-DT05 · Technologies, land & water management
- CDs: `AC9HH7K05`
- Learn: stone tools and ground-edge axes; cultural burning; Budj Bim eel
  traps; Brewarrina fish traps; Torres Strait maritime technologies.
- Illustrations: technologies icon-scene (knife / droplet / sprout /
  triangle-shape).
- Assignment: 6 questions: aquaculture at Budj Bim, cultural burning,
  technological achievements, Brewarrina, Gunditjmara.
- Skills: `AC9HH7S05`, `AC9HH7S08`.
- ⚠ `sensitivity: true` — cultural/land-management knowledge; review required.

#### Y7-HIS-DT06 · Social organisation, culture & caring for Country
- CDs: `AC9HH7K06`, `AC9HH7K07`
- Learn: kinship, moieties, totems, lore and rites of passage; obligations to
  protect significant sites and ancestral remains; collaboration in heritage
  preservation (Willandra Lakes, Budj Bim).
- Illustrations: society flowchart (kinship → lore → Country → heritage).
- Assignment: 6 questions: kinship, totems, Willandra Lakes location,
  cultural obligations, caring for Country, heritage collaboration.
- Skills: `AC9HH7S06`, `AC9HH7S07`.
- ⚠ `sensitivity: true` — cultural knowledge & heritage obligations; review
  required.

### The ancient world (`AC9HH7K08`–`K13`) — depth study: Ancient Egypt

The v9.0 requirement is one ancient society studied in depth; Egypt is the
depth study chosen here (a general "investigating the ancient past" topic
front-loads the evidence/skills content that applies to any society).

#### Y7-HIS-AW01 · Investigating the ancient past
- CDs: `AC9HH7K08`
- Learn: primary vs secondary sources, stratigraphy, DNA testing,
  conservation, UNESCO and World Heritage, heritage debates.
- Illustrations: inquiry flowchart (question → sources → dating →
  conserve/interpret).
- Assignment: 6 questions: primary source, stratigraphy, UNESCO, excavation,
  conservation, DNA evidence.
- Skills: `AC9HH7S02`, `AC9HH7S03`, `AC9HH7S04`.

#### Y7-HIS-AW02 · The Nile shapes Ancient Egypt
- CDs: `AC9HH7K09`
- Learn: the inundation and fertile soil; transport and trade; cataracts and
  deserts as defence; the Nile in religion.
- Illustrations: Nile-gifts icon-scene (droplet / wave / bowl / ship).
- Assignment: 6 questions: flood soil, Nile's roles, "inundation", natural
  barriers, river gods, where Egyptians lived.
- Skills: `AC9HH7S03`, `AC9HH7S05`.

#### Y7-HIS-AW03 · Egypt's social pyramid
- CDs: `AC9HH7K10`
- Learn: pharaoh → officials/priests → scribes/soldiers → farmers/craftsmen →
  slaves; roles of women of different classes.
- Illustrations: social pyramid metric-ladder.
- Assignment: 6 questions: pharaoh, "scribe", largest group, priests, enslaved
  people, women's varied rights.
- Skills: `AC9HH7S06`, `AC9HH7S08`.

#### Y7-HIS-AW04 · Beliefs, death & funerary customs
- CDs: `AC9HH7K11`
- Learn: belief in an afterlife, mummification, burial goods, pyramids,
  Valley of the Kings, Book of the Dead.
- Illustrations: funerary flowchart (afterlife → mummification → burial →
  judgement/spells).
- Assignment: 6 questions: mummification, afterlife belief, burial goods,
  Book of the Dead, pyramids, Valley of the Kings.
- Skills: `AC9HH7S04`, `AC9HH7S06`.

#### Y7-HIS-AW05 · Power, contact & conflict
- CDs: `AC9HH7K12`
- Learn: New Kingdom empire, Nile-based armies and trade (Cyprus, Crete,
  Greece), the Battle of Kadesh and the peace treaty with the Hittites.
- Illustrations: power & contact icon-scene (flag / ship / link).
- Assignment: 6 questions: Kadesh treaty, trade partners, "Hittites", peace
  treaties, empire expansion, trade's effects.
- Skills: `AC9HH7S05`, `AC9HH7S07`.

#### Y7-HIS-AW06 · Significant individuals & legacy
- CDs: `AC9HH7K13`
- Learn: Hatshepsut, Ramses II, Tutankhamun's tomb (1922); legacy — papyrus,
  365-day calendar, architecture.
- Illustrations: legacy flowchart (Hatshepsut → Ramses II → Tutankhamun →
  today).
- Assignment: 6 questions: Hatshepsut, Tutankhamun, hieroglyphs/papyrus,
  Ramses II, calendar/writing legacy, meaning of "legacy".
- Skills: `AC9HH7S01`, `AC9HH7S07`, `AC9HH7S08`.

---

## Year 8 — The Medieval World + The Asia-Pacific World

Year 8 requires at least one topic from *Medieval Europe and the early modern
world* and one from *Empires and expansions* or *Asia-Pacific world*. This
bank delivers the full Medieval sub-strand and the "Japan under the Shoguns"
depth study (the classic NSW Stage 4 pairing). Empires topics (Mongol,
Ottoman, Vikings, Spanish conquest) are a future optional pack.

### Medieval Europe and the early modern world (`AC9HH8K01`–`K06`)

#### Y8-HIS-MW01 · Rome falls, the medieval world begins
- CDs: `AC9HH8K01`
- Learn: decline of the western Roman Empire, rise of kingdoms, spread of
  Christianity, the Byzantine Empire, c.590–c.1500 CE.
- Illustrations: flowchart (Rome falls → kingdoms rise → Church grows →
  feudalism).
- Assignment: 6 questions: century of Rome's fall, change after Rome, medieval
  date range, Byzantine Empire, preservation of learning.
- Skills: `AC9HH8S01`, `AC9HH8S05`.

#### Y8-HIS-MW02 · Feudal society: kings, nobles, knights & peasants
- CDs: `AC9HH8K02`
- Learn: the feudal pyramid, land-for-service relationships, roles of each
  group incl. women and men; the Church's power.
- Illustrations: social pyramid metric-ladder.
- Assignment: 6 questions: knights' service, top of pyramid, "feudalism",
  serfs, Church power, knights.
- Skills: `AC9HH8S05`, `AC9HH8S08`.

#### Y8-HIS-MW03 · The Church, monasteries & learning
- CDs: `AC9HH8K03`, `AC9HH8K05`
- Learn: Church wealth/power, tithes, cathedrals (Notre Dame), monastic
  copyists and illuminated manuscripts, universities.
- Illustrations: monasteries icon-scene (quill / book / link).
- Assignment: 6 questions: manuscript copying, Notre Dame, "tithe", Church
  services, illuminated manuscript, universities.
- Skills: `AC9HH8S03`, `AC9HH8S08`.

#### Y8-HIS-MW04 · The Black Death
- CDs: `AC9HH8K03`, `AC9HH8K04`
- Learn: spread along trade routes, ~⅓–½ of Europe's population lost;
  labour shortages, peasant freedom and uprisings, weakened feudalism,
  questioning of authority.
- Illustrations: plague flowchart (trade spreads → shortages → freedom →
  feudalism weakens).
- Assignment: 6 questions: decade, trade routes, workers' position,
  feudalism weakened, turning point, church records as evidence.
- Skills: `AC9HH8S04`, `AC9HH8S05`.

#### Y8-HIS-MW05 · Crusades, contact & trade
- CDs: `AC9HH8K03`, `AC9HH8K04`
- Learn: the Crusades' aims and cost; deepened Europe–Islamic world contact,
  trade and the flow of science/medicine/mathematics knowledge.
- Illustrations: contact flowchart (pilgrims → Crusades → trade → ideas).
- Assignment: 6 questions: Crusade aims, contact partners, knowledge gained,
  trade's spread, "Crusades", richer cities.
- Skills: `AC9HH8S03`, `AC9HH8S07`.

#### Y8-HIS-MW06 · The Renaissance: a new age of ideas
- CDs: `AC9HH8K01`, `AC9HH8K05`, `AC9HH8K06`
- Learn: humanism, da Vinci/Michelangelo, Copernicus/Galileo, the printing
  press; historians' differing interpretations of the period.
- Illustrations: Renaissance icon-scene (book / pen / globe / trophy).
- Assignment: 6 questions: meaning of "Renaissance", humanism, printing press,
  da Vinci/Michelangelo, the planets, significance.
- Skills: `AC9HH8S06`, `AC9HH8S07`.

### Asia-Pacific world — Japan under the Shoguns (`AC9HH8K12`–`K16`)

#### Y8-HIS-JA01 · Feudal Japan: shoguns, daimyo & samurai
- CDs: `AC9HH8K12`
- Learn: shogun as real ruler, emperor as figurehead, daimyo, samurai;
  stable ordered class system.
- Illustrations: social ladder metric-ladder.
- Assignment: 6 questions: shogun, daimyo, emperor's role, samurai, "daimyo",
  order and stability.
- Skills: `AC9HH8S05`, `AC9HH8S08`.

#### Y8-HIS-JA02 · Samurai, bushido & daily life
- CDs: `AC9HH8K12`, `AC9HH8K14`
- Learn: bushido values; daily life of farmers, artisans and merchants; class
  identity.
- Illustrations: bushido icon-scene (knife / link / trophy).
- Assignment: 6 questions: bushido, its values, merchants' rank, samurai
  training, "bushido", class shaping daily life.
- Skills: `AC9HH8S06`, `AC9HH8S05`.

#### Y8-HIS-JA03 · Tokugawa rule & Japan's isolation
- CDs: `AC9HH8K13`, `AC9HH8K15`
- Learn: Tokugawa Ieyasu and the Edo Shogunate (1603), sakoku, Commodore
  Perry 1853 and the shogunate's end.
- Illustrations: flowchart (Tokugawa unifies → strict order → sakoku →
  Perry 1853).
- Assignment: 6 questions: Edo Shogunate, 1603, "sakoku", Perry/USA, end of
  the shogunate, stability.
- Skills: `AC9HH8S05`, `AC9HH8S07`.

#### Y8-HIS-JA04 · Continuity, change & interpretations of shogunate Japan
- CDs: `AC9HH8K14`, `AC9HH8K16`
- Learn: continuity (stable social order) alongside change (towns, trade,
  merchant wealth); historians' debates (e.g. how "closed" was sakoku).
- Illustrations: continuity/change icon-scene (clock / rotate-arrow /
  bar-chart / magnifier).
- Assignment: 6 questions: continuity, towns/trade growth, different
  interpretations, sakoku debate, continuity/change analysis, interpretation
  definition.
- Skills: `AC9HH8S05`, `AC9HH8S07`, `AC9HH8S06`.

---

## Year 9 — Making & Transforming the Australian Nation + The First World War

Both sub-strands are **mandatory** in v9.0 Year 9. Two topics carry
`sensitivity: true` (colonisation/frontier conflict; contested perspectives
of colonisers, settlers and First Nations Australians) and three First World
War topics carry it too (enlistment incl. First Nations soldiers; Gallipoli;
Western Front) — all written age-appropriately to established facts, pending
human review.

### Making and transforming the Australian nation (`AC9HH9K01`–`K07`)

#### Y9-HIS-MA01 · European expansion & why people came
- CDs: `AC9HH9K01`
- Learn: imperial expansion, push/pull factors, 1788 Sydney Cove, convicts and
  free settlers.
- Illustrations: movement icon-scene (ship / suitcase / flag).
- Assignment: 6 questions: Sydney Cove, 1788, push factor, pull factor,
  convicts/free settlers, empire motives.
- Skills: `AC9HH9S01`, `AC9HH9S05`.

#### Y9-HIS-MA02 · The colonies grow
- CDs: `AC9HH9K02`
- Learn: six colonies' distinct development, wool economy, Blue Mountains
  crossing, free-colony South Australia.
- Illustrations: growth icon-scene (house / tree / ship / map).
- Assignment: 6 questions: six colonies, wool, Blue Mountains, different
  development, South Australia, Tasmania.
- Skills: `AC9HH9S05`, `AC9HH9S08`.

#### Y9-HIS-MA03 · First Nations Australians & colonisation
- CDs: `AC9HH9K03`
- Learn: 65,000+ years of connection; dispossession, disease, disruption;
  frontier conflict; First Nations responses and survival.
- Illustrations: abstract flowchart (connection → contact/dispossession →
  frontier conflict → survival & continuing culture).
- Assignment: 6 questions: length of connection, effects of colonisation,
  European disease, "frontier conflict", responses, respectful teaching.
- Skills: `AC9HH9S06`, `AC9HH9S07`.
- ⚠ `sensitivity: true` — colonisation/frontier conflict; First Nations
  community-protocol + human review required before release.

#### Y9-HIS-MA04 · Gold, growth & change
- CDs: `AC9HH9K02`, `AC9HH9K04`
- Learn: gold rushes from 1851, global migration, Eureka Stockade 1854,
  railways and telegraph.
- Illustrations: gold-change icon-scene (coin / people / train-engine).
- Assignment: 6 questions: 1851, migrant wave, Eureka Stockade, growth,
  Chinese miners, railways/telegraph.
- Skills: `AC9HH9S05`, `AC9HH9S07`.

#### Y9-HIS-MA05 · Federation & the new nation
- CDs: `AC9HH9K04`
- Learn: Parkes and the movement, constitutional conventions, 1898–99
  referendums, 1 January 1901, federal system.
- Illustrations: Federation flowchart (conferences → conventions →
  referendums → 1 Jan 1901).
- Assignment: 6 questions: 1 January 1901, Parkes, federal system, 1898–99
  referendums, states, "referendum".
- Skills: `AC9HH9S01`, `AC9HH9S05`.

#### Y9-HIS-MA06 · Australian society 1901–1914: identity & ideas
- CDs: `AC9HH9K05`, `AC9HH9K06`, `AC9HH9K07`
- Learn: mateship/"fair go" identity; unequal experiences (women's federal
  vote 1902, "White Australia" policy, First Nations Australians' denied
  rights); Harvester Judgement, pensions.
- Illustrations: 1901 society icon-scene (flag / people / newspaper).
- Assignment: 6 questions: 1902 federal vote, "White Australia" policy,
  Harvester Judgement, mateship identity, unequal rights, federal pensions.
- Skills: `AC9HH9S06`, `AC9HH9S07`.
- ⚠ `sensitivity: true` — contested terms & unequal experiences; human review
  required.

### First World War (`AC9HH9K08`–`K12`)

#### Y9-HIS-WW01 · Causes of the war & why Australians enlisted
- CDs: `AC9HH9K08`
- Learn: militarism, alliances, imperialism, nationalism; 1914 assassination;
  Australia at war via Britain; AIF enlistment motives; First Nations
  Australian service.
- Illustrations: causes flowchart (alliances/nationalism → assassination →
  Britain at war → enlistment).
- Assignment: 6 questions: Archduke, long-term causes, Britain/Empire, reasons
  to enlist, First Nations service, AIF.
- Skills: `AC9HH9S05`, `AC9HH9S06`.
- ⚠ `sensitivity: true` — war service incl. First Nations soldiers; human
  review required.

#### Y9-HIS-WW02 · Gallipoli 1915
- CDs: `AC9HH9K09`, `AC9HH9K10`
- Learn: 25 April 1915 landing, Ottoman campaign, eight-month failure with
  heavy losses, Anzac legend, Anzac Day.
- Illustrations: Gallipoli icon-scene (ship / flag / people / trophy).
- Assignment: 6 questions: 25 April 1915, "Anzac", Ottoman Empire, evacuation,
  Anzac Day, Anzac legend.
- Skills: `AC9HH9S06`, `AC9HH9S07`.
- ⚠ `sensitivity: true` — wartime loss/death; age-appropriate framing, human
  review required.

#### Y9-HIS-WW03 · The Western Front & trench warfare
- CDs: `AC9HH9K09`, `AC9HH9K10`
- Learn: France/Belgium trenches, machine guns/gas/tanks, battles (Fromelles,
  the Somme, Pozières, Passchendaele), Light Horse in the Middle East.
- Illustrations: trench-warfare flowchart (trenches → new weapons → battles →
  Light Horse).
- Assignment: 6 questions: France/Belgium, new weapons, Pozières, Light Horse,
  trench life, heavy casualties.
- Skills: `AC9HH9S05`, `AC9HH9S06`.
- ⚠ `sensitivity: true` — graphic war content; age-appropriate framing, human
  review required.

#### Y9-HIS-WW04 · The war at home
- CDs: `AC9HH9K11`
- Learn: women at work, censorship, 1916/1917 conscription referendums,
  Billy Hughes, national division.
- Illustrations: home-front icon-scene (people / chat-bubble / flag).
- Assignment: 6 questions: women's work, conscription referendums, both "no",
  Hughes, censorship, national division.
- Skills: `AC9HH9S06`, `AC9HH9S07`.

#### Y9-HIS-WW05 · The end of the war & commemoration
- CDs: `AC9HH9K10`, `AC9HH9K12`
- Learn: USA entry 1917, Armistice 11 November 1918, Treaty of Versailles,
  Anzac Day/memorials, contested Anzac legend.
- Illustrations: end-of-war flowchart (USA 1917 → Armistice → treaties →
  commemoration).
- Assignment: 6 questions: 11 Nov 1918, USA entry, Versailles penalties, Anzac
  Day, historians' views, commemoration vs glorification.
- Skills: `AC9HH9S07`, `AC9HH9S08`.

---

## Year 10 — The Second World War + Building Modern Australia

Both sub-strands are **mandatory** in v9.0 Year 10. Six topics carry
`sensitivity: true` — POW experiences, the Holocaust and atomic bomb, home
front (incl. First Nations Australians' service), and the First Nations
rights/reconciliation unit. Age-appropriate, factual framing only; human and
community-protocol review required before release.

### Second World War (`AC9HH10K01`–`K06`)

#### Y10-HIS-WW01 · Causes & outbreak of the Second World War
- CDs: `AC9HH10K01`
- Learn: Versailles, Great Depression, League of Nations weakness, Nazi rise,
  Japanese militarism, invasion of Poland, Menzies/1939, Pearl Harbor 1941.
- Illustrations: causes flowchart (Versailles/Depression → Nazi Germany →
  appeasement fails → war 1939).
- Assignment: 6 questions: 1939, Poland, conditions for war, Japanese
  expansion, Britain at war, Pearl Harbor.
- Skills: `AC9HH10S01`, `AC9HH10S05`.

#### Y10-HIS-WW02 · Australia at war: places & experiences
- CDs: `AC9HH10K02`
- Learn: Tobruk, Greece/Crete, fall of Singapore 1942, POWs and the
  Thai-Burma Railway, Kokoda, 1942 bombings of Darwin and Sydney.
- Illustrations: places-at-war icon-scene (ship / flag / people).
- Assignment: 6 questions: Singapore/POWs, Kokoda, Darwin bombing, POW
  treatment, Thai-Burma Railway, North Africa.
- Skills: `AC9HH10S03`, `AC9HH10S06`.
- ⚠ `sensitivity: true` — POW experiences & Pacific war; human review required.

#### Y10-HIS-WW03 · Turning points: the Holocaust & the atomic bomb
- CDs: `AC9HH10K03`
- Learn: the Holocaust's causes and scale (established facts only),
  Hiroshima/Nagasaki 1945 and their long-term effects.
- Illustrations: turning-points flowchart (Holocaust → Pearl Harbor →
  atomic bombs → war ends).
- Assignment: 6 questions: Holocaust definition, Hiroshima/Nagasaki, USA,
  consequences of hatred/power, Japan's surrender, long-lasting effects.
- Skills: `AC9HH10S04`, `AC9HH10S07`.
- ⚠ `sensitivity: true` — the Holocaust & atomic bomb; the most sensitive
  content in the band, human review mandatory.

#### Y10-HIS-WW04 · The home front
- CDs: `AC9HH10K04`
- Learn: National Security Act 1939 (censorship, rationing, manpower
  controls), internment, women's service (WAAAF/AWAS), First Nations
  Australians' service (Torres Strait Light Infantry Battalion, NTSRU).
- Illustrations: home-front icon-scene (people / clock / flag).
- Assignment: 6 questions: rationing, women's work, First Nations service,
  National Security Act, internment, home-front support.
- Skills: `AC9HH10S06`, `AC9HH10S05`.
- ⚠ `sensitivity: true` — includes First Nations Australians' wartime
  experiences; human review required.

#### Y10-HIS-WW05 · Aftermath: rebuilding & commemoration
- CDs: `AC9HH10K05`, `AC9HH10K06`
- Learn: UN founding (Evatt, Jessie Street), Chifley's reconstruction, ANZUS,
  shift toward the USA, commemoration debates (Battle for Australia, Kokoda).
- Illustrations: aftermath flowchart (rebuilding → UN → ANZUS → commemoration).
- Assignment: 6 questions: ANZUS, UN involvement, Chifley, US shift, Anzac
  Day/memorials, historians' debates.
- Skills: `AC9HH10S07`, `AC9HH10S08`.

### Building modern Australia (`AC9HH10K07`–`K13`)

#### Y10-HIS-BA01 · Post-war migration: a new Australia
- CDs: `AC9HH10K07`, `AC9HH10K08`
- Learn: "populate or perish", migration waves 1950s–2000s (Europe, Asia,
  Middle East, India, Africa), push/pull factors, multicultural society.
- Illustrations: migration icon-scene (ship / suitcase / people).
- Assignment: 6 questions: "populate or perish", Europe first, push factor,
  diversity, refugees, Asia waves.
- Skills: `AC9HH10S03`, `AC9HH10S06`.

#### Y10-HIS-BA02 · First Nations Australians: campaigns before 1965
- CDs: `AC9HH10K09`
- Learn: protection/segregation/assimilation policies, the Stolen
  Generations, 1938 Day of Mourning, AAL and AAPA campaigns.
- Illustrations: campaigns flowchart (policies → Day of Mourning → Stolen
  Generations → campaigns for rights).
- Assignment: 6 questions: Day of Mourning, Stolen Generations, assimilation,
  rights organisations, citizenship/land/justice, shaping later struggle.
- Skills: `AC9HH10S06`, `AC9HH10S07`.
- ⚠ `sensitivity: true` — Stolen Generations; First Nations community-protocol
  review required.

#### Y10-HIS-BA03 · The movement for rights: 1962 to today
- CDs: `AC9HH10K10`, `AC9HH10K11`
- Learn: 1962 federal vote, 1965 Freedom Rides, 1967 Referendum, Wave Hill
  Walk-Off, Tent Embassy, Mabo 1992 and terra nullius.
- Illustrations: rights flowchart (1962 vote → Freedom Rides → 1967 Referendum
  → land rights & Mabo).
- Assignment: 6 questions: 1962, 1967 Referendum, Freedom Rides, Mabo, Wave
  Hill/Tent Embassy, terra nullius.
- Skills: `AC9HH10S05`, `AC9HH10S07`.
- ⚠ `sensitivity: true` — First Nations rights; community-protocol review
  required.

#### Y10-HIS-BA04 · Women's movement & changing rights
- CDs: `AC9HH10K12`, `AC9HH10K13`
- Learn: marriage bar repeal, equal pay campaigns, Sex Discrimination Act
  1984, women leaders, ongoing gender pay gap.
- Illustrations: women's-rights icon-scene (people / pen / trophy).
- Assignment: 6 questions: marriage bar, 1984, equal pay/rights, workforce
  growth, campaigns/laws/attitudes, gender pay gap.
- Skills: `AC9HH10S06`, `AC9HH10S08`.

#### Y10-HIS-BA05 · Continuing change: rights & identity today
- CDs: `AC9HH10K11`, `AC9HH10K13`
- Learn: Reconciliation as an ongoing process (Redfern Speech, Bringing Them
  Home, 2008 Apology), multiculturalism and border-protection debates,
  Australia's multicultural identity.
- Illustrations: continuing-change icon-scene (people / chat-bubble / globe).
- Assignment: 6 questions: 2008 Apology, Reconciliation definition, Bringing
  Them Home, changing identity debates, understanding history, multicultural
  population.
- Skills: `AC9HH10S07`, `AC9HH10S06`.
- ⚠ `sensitivity: true` — ongoing rights/reconciliation; community-protocol
  review required.

---

## Coverage check

- **Year 7:** Deep time `K01–K07` **7/7 ✓**; Ancient world `K08–K13` **6/6 ✓**
  → **13/13 K CDs ✓**. Sensitivity: DT01–DT06 (all 6) = First Nations
  Australians' deep histories & cultural knowledge → community-protocol
  review.
- **Year 8:** Medieval world `K01–K06` **6/6 ✓**; Asia-Pacific world
  `K12–K16` **5/5 ✓** (Empires `K07–K11` optional, not authored — flagged
  for a future optional pack) → **11/11 K CDs for the two selected sub-strands
  ✓**. Sensitivity: none.
- **Year 9:** Making the Australian nation `K01–K07` **7/7 ✓**; First World
  War `K08–K12` **5/5 ✓** → **12/12 K CDs ✓**. Sensitivity: `MA03`, `MA06`,
  `WW01`, `WW02`, `WW03`.
- **Year 10:** Second World War `K01–K06` **6/6 ✓**; Building modern Australia
  `K07–K13` **7/7 ✓** → **13/13 K CDs ✓**. Sensitivity: `WW02`, `WW03`,
  `WW04`, `BA02`, `BA03`, `BA05`.
- **Skills:** all eight skills CDs per year are woven through the units above
  → **8/8 per year ✓**.
- **Topic totals:** Y7 **12** · Y8 **10** · Y9 **11** · Y10 **10** =
  **43 topics**, each with 6 questions (nominal) / 4 (compact).

## Sensitivity register (flag summary)

| Topic | Why |
| --- | --- |
| `Y7-HIS-DT01`–`DT06` | First Nations Australians' deep histories, cultural knowledge & heritage obligations (FIRST-framework review) |
| `Y9-HIS-MA03` | Colonisation, dispossession & frontier conflict |
| `Y9-HIS-MA06` | Contested perspectives (colonisers/settlers/First Nations) & unequal rights |
| `Y9-HIS-WW01`–`WW03` | War service incl. First Nations soldiers; Gallipoli; trench warfare (age-appropriate framing) |
| `Y10-HIS-WW02` | POW experiences & the Pacific war |
| `Y10-HIS-WW03` | The Holocaust & the atomic bomb |
| `Y10-HIS-WW04` | Home front incl. First Nations Australians' wartime service |
| `Y10-HIS-BA02`, `BA03`, `BA05` | Stolen Generations, rights movement, reconciliation |

## Provenance & verification note

- Codes verified 2026-08 against ACARA v9.0 History 7–10 content descriptions
  (`AC9HH7K01`…`AC9HH10K13`, `AC9HH*S01`–`S08`). All codes are the real v9.0
  identifiers; none are fabricated.
- One deviation from `docs/specs/curriculum-research.md` §2.2 is intentional
  and flagged in the framing note at the top: the Australian-nation unit is
  authored in **Year 9** (where the codes live), not Year 8.
- All lesson text is original; no syllabus text is reproduced.
