# Years 7–10 — Science topics

Source of truth: Australian Curriculum v9.0, Science 7–10 (strands: Science
understanding U, Science as a human endeavour H, Science inquiry I). Every
content description for Years 7–10 is covered below and mirrored in
`apps/mobile/src/data/year{7,8,9,10}/science.ts`. Codes verified against
ACARA v9.0 and the QCAA Years 7–10 Science content-description sequence.

Per AC v9.0 the Year 7–10 band carries the following content descriptions:

| Year | Understanding | Human Endeavour | Inquiry | Total |
|------|--------------:|----------------:|--------:|------:|
| 7    | 6             | 4               | 8       | 18    |
| 8    | 7             | 4               | 8       | 19    |
| 9    | 7             | 4               | 8       | 19    |
| 10   | 7             | 4               | 8       | 19    |

Each topic below is one unit (**lesson + quick-check + assignment**) tagged with
its CD codes. Topic ids follow `Y<year>-SCI-<strand><NN>` (strand letters U / H /
I). Every topic ships 6 assignment questions at nominal pace and 4 under compact
pace (adaptive pacing, see `docs/specs/adaptive-pacing.md`). Illustration slots
render real vector diagrams via `src/components/illustrations/diagrams.tsx` (no
emoji placeholders). Topics for `AC9SxI02` carry a `sensitivity` flag — they
touch Country/Place research-permission awareness and await a First Nations
protocol review before release.

---

## Year 7 — Science topics

### Y7-SCI-U01 · Classifying life
- CDs: `AC9S7U01`
- Learn: classification orders and organises the diversity of life (kingdom →
  phylum → class → order → family → genus → species); dichotomous keys identify
  organisms through either/or questions.
- Illustrations: a kingdom-to-species funnel flowchart; a dichotomous-key scene.
- Assignment: 6/4 — order taxonomic groups, use and interpret keys.

### Y7-SCI-U02 · Ecosystems & food webs
- CDs: `AC9S7U02`
- Learn: food webs model matter and energy flow; the Sun powers producers, and
  changing abiotic/biotic factors (drought, predators, introduced species) shifts
  populations.
- Illustrations: a sun→producer→consumer food-web flow; an impact bar compare.
- Assignment: 6/4 — read food webs, predict population effects.

### Y7-SCI-U03 · Earth, Sun & Moon cycles
- CDs: `AC9S7U03`
- Learn: Earth's tilt drives seasons; the Moon's orbit drives phases and tides;
  aligned Sun–Earth–Moon positions cause solar and lunar eclipses — all regular,
  predictable cycles.
- Illustrations: an Earth–Moon–Sun scene; a lunar-phase cycle flowchart.
- Assignment: 6/4 — explain seasons, tides, phases and eclipses.

### Y7-SCI-U04 · Forces & motion
- CDs: `AC9S7U04`
- Learn: forces as pushes/pulls; balanced forces keep motion steady, unbalanced
  forces change it; gravity pulls to Earth's centre; mass affects how much force
  changes motion.
- Illustrations: a balanced tug-of-war scale; force-arrow scene.
- Assignment: 6/4 — identify balanced/unbalanced forces, relate mass to motion.

### Y7-SCI-U05 · Particle theory of matter
- CDs: `AC9S7U05`
- Learn: particle arrangement, motion and attraction explain solids (packed,
  vibrating), liquids (sliding) and gases (fast, far apart) and their properties.
- Illustrations: a solid/liquid/gas particle flow; a temperature thermometer.
- Assignment: 6/4 — link particle behaviour to properties of substances.

### Y7-SCI-U06 · Pure substances & mixtures
- CDs: `AC9S7U06`
- Learn: pure substances vs mixtures; separating mixtures using properties —
  filtering (solid/liquid), evaporation (dissolved solids), distillation
  (boiling points).
- Illustrations: a separation-methods flowchart; a pure-vs-mixture balance.
- Assignment: 6/4 — classify matter, choose separation techniques.

### Y7-SCI-H01 · How scientific knowledge changes
- CDs: `AC9S7H01`
- Learn: knowledge changes with new evidence and technologies; different
  perspectives and cultures contribute questions and knowledges; ideas are
  refined or revised.
- Illustrations: an evidence → revision → new idea flowchart.
- Assignment: 6/4 — evaluate how and why scientific ideas change.

### Y7-SCI-H02 · People & institutions in science
- CDs: `AC9S7H02`
- Learn: science is done by people — students to professionals — supported by
  institutions (universities, CSIRO); shared findings are checked and built on.
- Illustrations: a question → investigation → institution → shared-knowledge flow.
- Assignment: 6/4 — explain roles of people and institutions.

### Y7-SCI-H03 · Science responses & society
- CDs: `AC9S7H03`
- Learn: scientific responses to real problems raise ethical, environmental,
  social and economic questions (e.g. desalination plants, laboratory-grown
  meat); science helps society decide how to live.
- Illustrations: an ethical/environmental/social/economic considerations wheel.
- Assignment: 6/4 — weigh who is helped, who is affected, and what it costs.

### Y7-SCI-H04 · Science communication
- CDs: `AC9S7H04`
- Learn: science communication shapes viewpoints and policy — weather warnings,
  endangered-species campaigns, clear and honest messengers help people make
  informed choices.
- Illustrations: a communication → viewpoint → policy flow.
- Assignment: 6/4 — explain how sharing science changes decisions.

### Y7-SCI-I01 · Asking questions & predicting
- CDs: `AC9S7I01`
- Learn: investigable questions are answerable with evidence; hypotheses are
  reasoned, testable predictions ("if… then… because…") revised by evidence.
- Illustrations: a ramp-height hypothesis bar chart; a question → prediction →
  test loop.
- Assignment: 6/4 — form investigable questions and testable hypotheses.

### Y7-SCI-I02 · Planning investigations
- CDs: `AC9S7I02` (sensitivity flag)
- Learn: fair tests change one variable at a time (independent/dependent/
  controlled); plan for safety and ethics, and for permission and care around
  heritage sites and artefacts on Country/Place.
- Illustrations: a variables chart.
- Assignment: 6/4 — design fair tests, identify variables and risks.

### Y7-SCI-I03 · Measuring with precision
- CDs: `AC9S7I03`
- Learn: choose the right equipment (ruler, stopwatch, measuring cylinder), read
  at eye level, record units and decimals; digital tools record accurately.
- Illustrations: a thermometer reading; an equipment-matching scene.
- Assignment: 6/4 — match tools to measurements, record precisely.

### Y7-SCI-I04 · Representing data
- CDs: `AC9S7I04`
- Learn: tables for exact values, graphs for trends (independent variable on the
  horizontal axis), models for the unseen; label axes with names and units.
- Illustrations: a dot plot; a bar graph of trials.
- Assignment: 6/4 — choose and construct appropriate representations.

### Y7-SCI-I05 · Analysing data
- CDs: `AC9S7I05`
- Learn: look for patterns, trends and relationships; investigate outliers rather
  than ignore them; repeated consistent trials make trends reliable.
- Illustrations: a dot plot with an outlier; a water-and-growth bar chart.
- Assignment: 6/4 — describe relationships, handle outliers.

### Y7-SCI-I06 · Evaluating methods & conclusions
- CDs: `AC9S7I06`
- Learn: identify sources of error and unanswered questions; a conclusion is only
  as strong as its method; improve the method for next time.
- Illustrations: an error-check loop flowchart.
- Assignment: 6/4 — critique methods, judge conclusions.

### Y7-SCI-I07 · Evidence-based arguments
- CDs: `AC9S7I07`
- Learn: support claims with evidence and reasoning; weigh sources; cite
  secondary data and respect cultural protocols attached to sharing knowledge.
- Illustrations: a claim → evidence → reasoning → conclusion flow.
- Assignment: 6/4 — construct and evaluate evidence-based arguments.

### Y7-SCI-I08 · Communicating science
- CDs: `AC9S7I08`
- Learn: pick language and text features for the audience and purpose (report,
  poster, video); digital tools help create and share clear, honest findings.
- Illustrations: a findings → audience → format decision flow.
- Assignment: 6/4 — communicate findings for specific audiences.

---

## Year 8 — Science topics

### Y8-SCI-U01 · Cells & their organelles
- CDs: `AC9S8U01`
- Learn: cells as basic units of life; nucleus, membrane and cytoplasm; plant
  cells add cell wall, chloroplasts and vacuole; microscopes made cells visible.
- Illustrations: a plant-vs-animal cell balance; an organelle flow.
- Assignment: 6/4 — compare cell types, describe organelle functions.

### Y8-SCI-U02 · Cells, tissues & organs
- CDs: `AC9S8U02`
- Learn: cells → tissues → organs → systems; structure supports function (a heart
  pumps via muscle tissue; a lung and a leaf are both exchange surfaces).
- Illustrations: a hierarchy flow; a lung-vs-leaf balance.
- Assignment: 6/4 — relate structure to function in organ systems.

### Y8-SCI-U03 · Plate tectonics
- CDs: `AC9S8U03`
- Learn: divergent, convergent and transform boundaries; earthquakes and
  volcanoes cluster at boundaries; evidence includes matching fossils, coastline
  shape and ocean-floor maps (Marie Tharp).
- Illustrations: a three-boundary scene; an earthquake-pattern dot plot.
- Assignment: 6/4 — model boundaries, cite evidence for the theory.

### Y8-SCI-U04 · The rock cycle
- CDs: `AC9S8U04`
- Learn: igneous (cooled magma/lava), sedimentary (layered sediment) and
  metamorphic (heat + pressure) rocks; weathering/erosion/deposition cycles them;
  properties reflect formation and guide use.
- Illustrations: a rock-cycle loop; a formation-timescale bar chart.
- Assignment: 6/4 — classify rocks, explain the cycle and rock use.

### Y8-SCI-U05 · Energy: kinetic & potential
- CDs: `AC9S8U05`
- Learn: kinetic (movement) vs potential (chemical, elastic, gravitational);
  energy transfers and transforms, with heat as a by-product; roller-coaster
  flow diagrams.
- Illustrations: a kinetic-vs-potential balance; a roller-coaster energy flow.
- Assignment: 6/4 — classify energy, trace transfers and transformations.

### Y8-SCI-U06 · Elements, compounds & mixtures
- CDs: `AC9S8U06`
- Learn: elements (one atom type), compounds (atoms joined, H2O), mixtures
  (solutions, suspensions, colloids); symbols, formulas and percentages;
  Mendeleev's periodic table.
- Illustrations: an element/compound/mixture flow; a mixture-types scene.
- Assignment: 6/4 — classify matter, use models and representations.

### Y8-SCI-U07 · Physical & chemical change
- CDs: `AC9S8U07`
- Learn: physical changes make no new substance; chemical changes show indicators
  — gas, precipitate, colour change, temperature change — and involve energy.
- Illustrations: a chemical-change indicators scene; a physical-vs-chemical
  balance.
- Assignment: 6/4 — distinguish changes, identify indicators.

### Y8-SCI-H01 · New evidence changes knowledge
- CDs: `AC9S8H01`
- Learn: microscopes, medical imaging and deep-Earth imaging changed cell, organ
  and resource knowledge; plate tectonics overtook continental drift once
  evidence accumulated; sustainability drives innovation.
- Illustrations: an old idea → new evidence → updated knowledge flow.
- Assignment: 6/4 — trace how evidence revises scientific knowledge.

### Y8-SCI-H02 · World views & scientific knowledge
- CDs: `AC9S8H02`
- Learn: cultural perspectives shape science (the Matilda effect, bamboo
  construction, fairness in sport); First Nations Australians develop materials
  through holistic world views.
- Illustrations: a world view → questions → discoveries flow.
- Assignment: 6/4 — explain how perspectives influence knowledge.

### Y8-SCI-H03 · Science responses & society
- CDs: `AC9S8H03`
- Learn: scientific fixes raise ethical/environmental/social/economic questions
  (organ transplants, quake-resistant buildings, electric vehicles,
  biodegradable materials).
- Illustrations: a considerations wheel; a vehicle-emissions bar chart.
- Assignment: 6/4 — weigh considerations around scientific responses.

### Y8-SCI-H04 · Science communication
- CDs: `AC9S8H04`
- Learn: communication shapes viewpoints and policy — organ-donation campaigns,
  tsunami-alert data sharing, science communicators; informed choices follow
  clear, honest science.
- Illustrations: a findings → communication → policy flow.
- Assignment: 6/4 — analyse how communication influences society.

### Y8-SCI-I01 · Questions & hypotheses
- CDs: `AC9S8I01`
- Learn: investigable questions test relationships or explore models; correlation
  is not causation; hypotheses include a prediction and a reason.
- Illustrations: a correlation-vs-causation bar chart; an if-then-because flow.
- Assignment: 6/4 — form causal hypotheses, distinguish causation.

### Y8-SCI-I02 · Planning & conducting investigations
- CDs: `AC9S8I02` (sensitivity flag)
- Learn: reproducible investigations control variables and document assumptions
  (e.g. tubing models a cell wall); plan for safety and ethics and care for
  heritage sites and artefacts on Country/Place.
- Illustrations: a reproducibility loop flowchart.
- Assignment: 6/4 — plan controlled, reproducible tests.

### Y8-SCI-I03 · Precision in measurement
- CDs: `AC9S8I03`
- Learn: match equipment to the job, read the meniscus, record variables with
  units; digital microscopes and simulations record qualitative and quantitative
  data accurately.
- Illustrations: a qualitative-vs-quantitative bar chart.
- Assignment: 6/4 — measure and record with precision.

### Y8-SCI-I04 · Representations & models
- CDs: `AC9S8I04`
- Learn: tables, graphs (independent on the horizontal axis), maps and models
  organise data; every representation has strengths and limitations.
- Illustrations: a rocket-launch energy flow; a representation-clarity bar chart.
- Assignment: 6/4 — select and construct suitable representations.

### Y8-SCI-I05 · Analysing patterns in data
- CDs: `AC9S8I05`
- Learn: describe patterns, trends and relationships; use mean, median and mode;
  investigate anomalies; correlation does not prove causation.
- Illustrations: a dot plot with summary stats; a drop-height relationship chart.
- Assignment: 6/4 — summarise data, describe relationships.

### Y8-SCI-I06 · Evaluating methods & claims
- CDs: `AC9S8I06`
- Learn: identify assumptions, sources of error, conflicting evidence and
  unanswered questions; consistency across checks strengthens conclusions.
- Illustrations: an evaluation checklist flowchart.
- Assignment: 6/4 — critique methods, weigh conclusions.

### Y8-SCI-I07 · Evidence-based arguments
- CDs: `AC9S8I07`
- Learn: build arguments on quality evidence; evaluate primary and secondary
  sources; cite sources, respect cultural protocols, protect personal
  information.
- Illustrations: a source → quality → argument flow.
- Assignment: 6/4 — construct and evaluate evidence-based arguments.

### Y8-SCI-I08 · Writing & communicating science
- CDs: `AC9S8I08`
- Learn: reports use aim/method/results/discussion structure and passive voice;
  match text features to audience (report, persuasive text, infographic).
- Illustrations: a report-structure flowchart.
- Assignment: 6/4 — write and create audience-appropriate scientific texts.

---

## Year 9 — Science topics

### Y9-SCI-U01 · Body systems & feedback
- CDs: `AC9S9U01`
- Learn: body systems coordinate responses via electrical impulses and hormones;
  negative feedback (receptor → command centre → effector) keeps conditions at a
  set point (temperature, blood sugar).
- Illustrations: a negative-feedback loop; a stimulus-response scene.
- Assignment: 6/4 — explain feedback mechanisms and system coordination.

### Y9-SCI-U02 · Reproduction & survival of species
- CDs: `AC9S9U02`
- Learn: gametes, sexual (variation) vs asexual (clones) reproduction;
  reproductive strategies relate to environment and parental care.
- Illustrations: a sexual-vs-asexual balance; an offspring-vs-care bar chart.
- Assignment: 6/4 — compare reproductive strategies, link to survival.

### Y9-SCI-U03 · The carbon cycle
- CDs: `AC9S9U03`
- Learn: carbon moves through geosphere, biosphere, hydrosphere and atmosphere via
  photosynthesis, respiration and combustion; human emissions strengthen the
  greenhouse effect; sequestration can draw carbon back down.
- Illustrations: a carbon-cycle loop; a CO2-rise bar chart.
- Assignment: 6/4 — model carbon flows, evaluate human impact.

### Y9-SCI-U04 · Energy transfer: waves & particles
- CDs: `AC9S9U04`
- Learn: particle model explains conduction, convection and electricity; sound
  travels as waves through a medium; light behaves as waves and photons.
- Illustrations: a heat-transfer flow; a material-heat-loss bar chart.
- Assignment: 6/4 — use wave and particle models to explain energy transfer.

### Y9-SCI-U05 · Conservation of energy & efficiency
- CDs: `AC9S9U05`
- Learn: energy is never created or destroyed; every transfer wastes some as heat,
  so efficiency (useful output ÷ input) is never 100%; Sankey diagrams show the
  split.
- Illustrations: a Sankey-style flow; an efficiency bar chart.
- Assignment: 6/4 — apply conservation, analyse efficiency.

### Y9-SCI-U06 · The atom & radioactivity
- CDs: `AC9S9U06`
- Learn: protons, neutrons and electrons; isotopes (extra neutrons) can be
  unstable and decay, releasing alpha/beta/gamma; half-life; radiocarbon dating
  and medical/industrial uses.
- Illustrations: an atom model scene; a decay-by-half-life bar chart.
- Assignment: 6/4 — explain atomic structure and radioactive decay.

### Y9-SCI-U07 · Chemical reactions & mass
- CDs: `AC9S9U07`
- Learn: atoms rearrange (never created or destroyed) — the law of conservation
  of mass; balanced equations keep atom counts equal; reactants → products.
- Illustrations: a mass-conservation balance; a word-to-equation flow.
- Assignment: 6/4 — balance equations, apply conservation of mass.

### Y9-SCI-H01 · Publication & peer review
- CDs: `AC9S9H01`
- Learn: findings are validated and refined through publication and peer review;
  papers can be rejected and revised (Marshall & Warren's ulcer work was first
  rejected, then validated).
- Illustrations: a submit → review → revise → publish pipeline.
- Assignment: 6/4 — explain how knowledge is validated.

### Y9-SCI-H02 · Science, technology & engineering
- CDs: `AC9S9H02`
- Learn: technology enables science and science enables engineering — imaging
  reveals body systems; Australian inventions include the cochlear implant and
  wi-fi; electromagnetic radiation underpins radar, medicine and phones.
- Illustrations: a technology ↔ science feedback loop.
- Assignment: 6/4 — trace two-way science–technology links.

### Y9-SCI-H03 · How science is adopted by society
- CDs: `AC9S9H03`
- Learn: adoption depends on clear benefit, support and awareness — citizen
  science, Landcare, solar panels, recycling, and First Nations fire-management
  practices proving effective.
- Illustrations: an adoption-factors bar chart; a solar-rise chart.
- Assignment: 6/4 — analyse why science is adopted or resisted.

### Y9-SCI-H04 · Society's values shape research
- CDs: `AC9S9H04`
- Learn: values and needs steer funding and research focus — emissions cuts drive
  energy research; IVF raised new questions; safety concerns drove better
  materials.
- Illustrations: a needs → funding → research focus flow.
- Assignment: 6/4 — explain how society shapes research priorities.

### Y9-SCI-I01 · Investigable questions & hypotheses
- CDs: `AC9S9I01`
- Learn: hypotheses must be testable and refutable; reasoned predictions come from
  scientific knowledge; explanatory models generate further tests.
- Illustrations: a predict → test → support/refute loop.
- Assignment: 6/4 — form and refine testable hypotheses.

### Y9-SCI-I02 · Valid, reproducible investigations
- CDs: `AC9S9I02` (sensitivity flag)
- Learn: validity (measuring what you claim, controlling error) and
  reproducibility (repeatable results); risk assessments and ethics; report new
  First Nations artefacts and respect heritage on Country/Place.
- Illustrations: a validity + reproducibility checklist flow.
- Assignment: 6/4 — plan valid, reproducible, ethical investigations.

### Y9-SCI-I03 · Precise measurement & sample size
- CDs: `AC9S9I03`
- Learn: choose precise instruments (electronic balance, correct scale),
  significant figures, scientific notation; larger samples are more reliable;
  digital tools scale data collection.
- Illustrations: a sample-size reliability bar chart.
- Assignment: 6/4 — measure precisely, justify sample sizes.

### Y9-SCI-I04 · Processing data & models
- CDs: `AC9S9I04`
- Learn: spreadsheets, descriptive statistics (mean, median, range) and models
  organise data; Sankey diagrams and balanced equations each capture a
  relationship.
- Illustrations: a dot plot with summary statistics.
- Assignment: 6/4 — select statistics and representations.

### Y9-SCI-I05 · Analysing & connecting data
- CDs: `AC9S9I05`
- Learn: connect multiple sources (atmospheric monitoring + ice cores) to find
  patterns and anomalies; extrapolate cautiously; spot proportional
  relationships.
- Illustrations: a two-source CO2 comparison chart.
- Assignment: 6/4 — connect data sources, explain patterns.

### Y9-SCI-I06 · Assessing validity & claims
- CDs: `AC9S9I06`
- Learn: evaluate validity and reproducibility of methods and conclusions;
  question assumptions, weigh conflicting evidence, and acknowledge uncertainty.
- Illustrations: an assumption-checking flowchart.
- Assignment: 6/4 — assess methods and the strength of conclusions.

### Y9-SCI-I07 · Arguments from evidence
- CDs: `AC9S9I07`
- Learn: argue from multiple consistent lines of evidence; check source
  credibility; respect ethical and cultural protocols in using secondary data
  and First Peoples' knowledges.
- Illustrations: a multiple-evidence → argument flow.
- Assignment: 6/4 — construct and critique evidence-based arguments.

### Y9-SCI-I08 · Communicating findings
- CDs: `AC9S9I08`
- Learn: communicate for purpose and audience (report, interactive presentation,
  social media campaign); select content and language, and respect cultural
  protocols.
- Illustrations: a purpose → audience → format flow.
- Assignment: 6/4 — communicate findings effectively and responsibly.

---

## Year 10 — Science topics

### Y10-SCI-U01 · DNA, genes & heredity
- CDs: `AC9S10U01`
- Learn: chromosomes, DNA and genes; meiosis halves the chromosome number and
  fertilisation restores it; Mendelian monohybrid crosses and pedigrees predict
  inheritance; mutations change DNA.
- Illustrations: a DNA → gene → chromosome flow; a 3:1 cross ratio chart.
- Assignment: 6/4 — predict inheritance, explain heredity mechanisms.

### Y10-SCI-U02 · Evolution by natural selection
- CDs: `AC9S10U02`
- Learn: variation → selection → survival → inheritance explains biodiversity;
  evidence from fossils, anatomy and distribution; artificial selection shows
  selection working fast.
- Illustrations: a natural-selection loop; an evidence-lines bar chart.
- Assignment: 6/4 — explain evolution, weigh supporting evidence.

### Y10-SCI-U03 · The big bang & the universe
- CDs: `AC9S10U03`
- Learn: the big bang models the universe's origin and evolution; light-years and
  astronomical units; evidence includes cosmic microwave background and galaxy
  red/blue shift (Hubble); modern telescopes (ASKAP) add knowledge.
- Illustrations: a universe-timeline flow; an expansion dot plot.
- Assignment: 6/4 — sequence universe history, cite evidence.

### Y10-SCI-U04 · Climate change & Earth's energy
- CDs: `AC9S10U04`
- Learn: solar energy interacting with atmosphere, ocean and land drives climate;
  models of energy flow between Earth's spheres; indicators include rising
  temperatures, sea level and ice loss.
- Illustrations: a sun → spheres energy flow; a climate-indicator bar chart.
- Assignment: 6/4 — explain climate patterns and change indicators.

### Y10-SCI-U05 · Newton's laws of motion
- CDs: `AC9S10U05`
- Learn: objects keep their motion without a net force; F = ma; equal-and-opposite
  reactions; quantitative graphs and equations; car safety features are
  engineered around these laws.
- Illustrations: a F=ma bar chart; a car-safety scene.
- Assignment: 6/4 — apply laws quantitatively to motion problems.

### Y10-SCI-U06 · Atoms & the periodic table
- CDs: `AC9S10U06`
- Learn: the periodic table organises elements by structure; same-group elements
  share properties from their outer-electron pattern; Bohr shells and emission
  spectra (flame tests) reveal identity.
- Illustrations: an outer-electron dot plot; a Bohr-shell scene.
- Assignment: 6/4 — relate atomic structure to periodic patterns.

### Y10-SCI-U07 · Reaction types & rates
- CDs: `AC9S10U07`
- Learn: synthesis, decomposition and displacement reactions have predictable
  patterns; rate rises with temperature, concentration, surface area and
  catalysts.
- Illustrations: a reaction-type flow; a rate-factors bar chart.
- Assignment: 6/4 — identify reaction types, explain rate factors.

### Y10-SCI-H01 · Validating scientific knowledge
- CDs: `AC9S10H01`
- Learn: publication and peer review validate findings (Franklin's data for the
  double helix; Mendel's statistics); models differ by assumption (climate
  models); knowledge is refined over time.
- Illustrations: a findings → review → independent check → acceptance flow.
- Assignment: 6/4 — explain how knowledge is validated and refined.

### Y10-SCI-H02 · Technology & scientific progress
- CDs: `AC9S10H02`
- Learn: fast computers enabled DNA sequencing and radio astronomy; satellites
  track climate indicators; gene therapy, DNA barcoding, alloys and thin films
  follow the science–technology loop.
- Illustrations: a science → technology → science loop.
- Assignment: 6/4 — trace technology–science advances.

### Y10-SCI-H03 · How society adopts science
- CDs: `AC9S10H03`
- Learn: adoption follows clear benefit and support — engineered crops, helmet
  laws from injury data, citizen science, and First Nations knowledges being
  reaffirmed in carbon farming.
- Illustrations: a helmet-injury bar chart.
- Assignment: 6/4 — analyse factors in science adoption.

### Y10-SCI-H04 · Society's needs shape research
- CDs: `AC9S10H04`
- Learn: values and funding decide research focus; genetic testing raises
  questions for counselling, embryo selection and insurers; history shows
  misconceptions about heredity once shaped harmful policies.
- Illustrations: a values → funding → research focus flow.
- Assignment: 6/4 — explain how values steer research.

### Y10-SCI-I01 · Hypotheses & models
- CDs: `AC9S10I01`
- Learn: a tested hypothesis leads to further predictions; hypotheses must be
  testable; models generate predictions checked against data.
- Illustrations: a hypothesis → test → new prediction spiral.
- Assignment: 6/4 — develop testable hypotheses from models.

### Y10-SCI-I02 · Valid investigations & risk
- CDs: `AC9S10I02` (sensitivity flag)
- Learn: control confounding variables and sources of error; follow risk
  assessments and ethics; report unregistered First Nations artefacts and manage
  animal welfare.
- Illustrations: an error-control checklist flow.
- Assignment: 6/4 — plan valid, reproducible, ethical investigations.

### Y10-SCI-I03 · Precision, calibration & error
- CDs: `AC9S10I03`
- Learn: calibrate instruments, plan recalibration, understand estimation error
  and human error; decide how much data yields valid conclusions.
- Illustrations: a calibration → reliable data flow.
- Assignment: 6/4 — calibrate, measure and judge data reliability.

### Y10-SCI-I04 · Representing & processing data
- CDs: `AC9S10I04`
- Learn: spreadsheets, graphs, statistics and models organise data; scales change
  interpretation; each representation has merits and limits (ice time-lapse vs
  mathematical model).
- Illustrations: a data → stats → graph → conclusion flow; a melting-point dot
  plot.
- Assignment: 6/4 — choose and evaluate representations.

### Y10-SCI-I05 · Analysing patterns & anomalies
- CDs: `AC9S10I05`
- Learn: connect sources (homologous structures + fossils) to explain patterns and
  anomalies; how data is organised changes interpretation.
- Illustrations: a converging-evidence bar chart.
- Assignment: 6/4 — connect evidence, explain patterns and anomalies.

### Y10-SCI-I06 · Evaluating methods & uncertainty
- CDs: `AC9S10I06`
- Learn: random vs systematic errors; data variation signals uncertainty; judge
  science media reports; conclusions need valid methods and honest uncertainty.
- Illustrations: a random-vs-systematic dot plot.
- Assignment: 6/4 — assess methods, validity and uncertainty.

### Y10-SCI-I07 · Building scientific arguments
- CDs: `AC9S10I07`
- Learn: argue from varied evidence (age of universe, climate action); weigh
  credibility and consistency; address cultural bias and ethics in secondary data
  and genetic testing.
- Illustrations: a source-synthesis → conclusion flow.
- Assignment: 6/4 — construct and critique scientific arguments.

### Y10-SCI-I08 · Communicating for impact
- CDs: `AC9S10I08`
- Learn: communicate for purpose and audience — reports, public performances,
  infographics, campaigns; explain outliers and error honestly; build arguments
  with structure and language.
- Illustrations: an audience → purpose → medium map.
- Assignment: 6/4 — communicate findings with impact and integrity.

---

## Coverage check (programmatic)

Run from `apps/mobile`:

```sh
npx tsc --noEmit
```

The data files `year{7,8,9,10}/science.ts` export one `Topic` per content
description; the app's pacing validator treats `covered == scope` as the
release gate, so the count of topic `cd` entries per year must equal the totals
in the table at the top of this file (18 / 19 / 19 / 19). Do not renumber or
drop ACARA codes.
