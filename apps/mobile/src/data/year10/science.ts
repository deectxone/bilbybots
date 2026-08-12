import type { Topic } from '../../types/curriculum';

/**
 * Year 10 Science, full topic bank.
 * Source of truth: docs/content/year-7-10/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry; codes verified against ACARA v9.0
 * and the QCAA Years 7–10 Science sequence).
 * Each `AC9S10I02` topic carries `sensitivity: true` per the primary-school
 * convention, it touches Country/Place research-permission awareness, pending
 * a First Nations protocol review before release.
 */
export const YEAR10_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (7 CDs) ----------
  {
    id: 'Y10-SCI-U01',
    title: 'DNA, genes & heredity',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Chromosomes carry DNA, which holds genes, instructions that are passed from parents to offspring. Meiosis makes gametes with half the chromosome number, and fertilisation restores it, creating variation.',
        'Mendelian inheritance lets us predict patterns: a monohybrid cross with a dominant and a recessive allele gives a predictable ratio of offspring genotypes and phenotypes, often shown with a Punnett square or pedigree.',
      ],
      illustrations: [
        { brief: 'DNA → gene → chromosome relationship diagram', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'DNA' }, { text: 'Genes' }, { text: 'Chromosomes' }, { text: 'Genome' }] } },
        { brief: 'Dominant × recessive cross ratio (3:1)', ready: true, diagram: { kind: 'bar-compare', unit: 'offspring', items: [{ label: 'Dominant trait', value: 3 }, { label: 'Recessive trait', value: 1 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U01-q1', type: 'mcq', prompt: 'Genes are carried on…', options: ['Chromosomes made of DNA', 'Cell walls', 'Bones'], answer: 'Chromosomes made of DNA', difficulty: 1 },
        { id: 'Y10-SCI-U01-q2', type: 'mcq', prompt: 'Meiosis produces gametes with…', options: ['Half the chromosome number of the parent', 'Double the chromosomes', 'No chromosomes'], answer: 'Half the chromosome number of the parent', difficulty: 3 },
        { id: 'Y10-SCI-U01-q3', type: 'mcq', prompt: 'In a monohybrid cross of two heterozygotes, the dominant-to-recessive ratio is typically…', options: ['3:1', '1:1', '2:1'], answer: '3:1', difficulty: 3 },
        { id: 'Y10-SCI-U01-q4', type: 'mcq', prompt: 'A dominant allele shows its trait even if…', options: ['Only one copy is present', 'Two recessive copies are present', 'It is hidden'], answer: 'Only one copy is present', difficulty: 2 },
        { id: 'Y10-SCI-U01-q5', type: 'mcq', prompt: 'Mutations are changes in…', options: ['DNA or chromosomes', 'The weather', 'Bone length'], answer: 'DNA or chromosomes', difficulty: 2 },
        { id: 'Y10-SCI-U01-q6', type: 'mcq', prompt: 'Pedigree diagrams show…', options: ['How traits pass through generations', 'The orbits of planets', 'Food chains'], answer: 'How traits pass through generations', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U02',
    title: 'Evolution by natural selection',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Natural selection explains biodiversity: individuals vary, the environment selects the better-adapted, and those survive to reproduce and pass on their genes. Over many generations, populations change.',
        'Evidence comes from many sources, the fossil record, chemical and anatomical similarities between species, and how species are distributed geographically. Artificial selection (breeding) shows selection working fast.',
      ],
      illustrations: [
        { brief: 'Natural selection loop: variation → selection → survival → inheritance', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Variation' }, { text: 'Selection pressure' }, { text: 'Survival + reproduction' }, { text: 'Trait passed on' }] } },
        { brief: 'Evidence lines: fossils, anatomy, distribution', ready: true, diagram: { kind: 'bar-compare', unit: 'evidence', items: [{ label: 'Fossil record', value: 9 }, { label: 'Anatomical similarity', value: 7 }, { label: 'Geographic distribution', value: 6 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U02-q1', type: 'mcq', prompt: 'Natural selection works on…', options: ['Variation that exists in a population', 'Identical individuals', 'Non-living things'], answer: 'Variation that exists in a population', difficulty: 2 },
        { id: 'Y10-SCI-U02-q2', type: 'mcq', prompt: 'A selection pressure is something that…', options: ['Affects which individuals survive and reproduce', 'Makes all individuals identical', 'Removes all variation'], answer: 'Affects which individuals survive and reproduce', difficulty: 2 },
        { id: 'Y10-SCI-U02-q3', type: 'mcq', prompt: 'Biodiversity is best described as a result of…', options: ['Evolution by natural selection', 'A single generation', 'Weather only'], answer: 'Evolution by natural selection', difficulty: 2 },
        { id: 'Y10-SCI-U02-q4', type: 'mcq', prompt: 'The fossil record supports evolution by showing…', options: ['Change in life over deep time', 'That life never changes', 'Identical species forever'], answer: 'Change in life over deep time', difficulty: 2 },
        { id: 'Y10-SCI-U02-q5', type: 'mcq', prompt: 'Artificial selection in breeding shows that…', options: ['Selection can change traits quickly', 'Traits never change', 'Breeding has no effect'], answer: 'Selection can change traits quickly', difficulty: 3 },
        { id: 'Y10-SCI-U02-q6', type: 'mcq', prompt: 'Adaptations relate to survival and reproduction by…', options: ['Helping individuals meet their environment\u2019s demands', 'Making individuals identical', 'Removing variation'], answer: 'Helping individuals meet their environment\u2019s demands', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U03',
    title: 'The big bang & the universe',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The big bang theory models the origin and evolution of the universe, from an initial expansion to the formation of stars and galaxies over billions of years. We measure these distances in light-years and astronomical units.',
        'Evidence includes cosmic microwave background radiation, the red/blue shift of galaxies (Edwin Hubble\u2019s observations), and the proportions of matter. Modern telescopes like the ASKAP keep adding new knowledge.',
      ],
      illustrations: [
        { brief: 'Universe timeline: big bang → galaxies → stars → today', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Big bang' }, { text: 'Expansion' }, { text: 'Galaxies form' }, { text: 'Stars + planets' }] } },
        { brief: 'Expanding universe: galaxies moving apart', ready: true, diagram: { kind: 'dot-plot', values: [1, 2, 3, 5, 8], unit: 'distance' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U03-q1', type: 'mcq', prompt: 'The big bang theory models…', options: ['The origin and evolution of the universe', 'The creation of the Moon only', 'The weather'], answer: 'The origin and evolution of the universe', difficulty: 2 },
        { id: 'Y10-SCI-U03-q2', type: 'mcq', prompt: 'A light-year measures…', options: ['Distance', 'Time', 'Brightness'], answer: 'Distance', difficulty: 2 },
        { id: 'Y10-SCI-U03-q3', type: 'mcq', prompt: 'Cosmic microwave background radiation is evidence for…', options: ['The big bang', 'That the universe is static', 'Life on Mars'], answer: 'The big bang', difficulty: 3 },
        { id: 'Y10-SCI-U03-q4', type: 'mcq', prompt: 'Hubble observed that distant galaxies appear to be…', options: ['Moving away from us', 'Standing still', 'Falling into the Sun'], answer: 'Moving away from us', difficulty: 3 },
        { id: 'Y10-SCI-U03-q5', type: 'mcq', prompt: 'The major components of the universe include…', options: ['Galaxies, stars and planets', 'Only the Moon', 'Just empty space'], answer: 'Galaxies, stars and planets', difficulty: 1 },
        { id: 'Y10-SCI-U03-q6', type: 'mcq', prompt: 'Star spectra reveal…', options: ['The elements, movement and distance of stars', 'The taste of starlight', 'Nothing'], answer: 'The elements, movement and distance of stars', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U04',
    title: 'Climate change & Earth\u2019s energy',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Energy from the Sun interacts with the atmosphere, ocean and land to drive the global climate. Models of energy flow between the geosphere, biosphere, hydrosphere and atmosphere explain climate patterns.',
        'Indicators of climate change include rising ocean and air temperatures, rising sea levels, shrinking sea ice and permafrost, and shifting species ranges. Understanding the flows helps predict change and guide strategies.',
      ],
      illustrations: [
        { brief: 'Sun → atmosphere/ocean/land energy flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sun\u2019s energy' }, { text: 'Atmosphere' }, { text: 'Ocean + land' }, { text: 'Climate system' }] } },
        { brief: 'Climate change indicators rising over time', ready: true, diagram: { kind: 'bar-compare', unit: 'level', items: [{ label: 'Air temp', value: 7 }, { label: 'Sea level', value: 6 }, { label: 'Sea ice loss', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U04-q1', type: 'mcq', prompt: 'The global climate is driven mainly by…', options: ['Energy from the Sun interacting with Earth\u2019s spheres', 'The Moon\u2019s phases', 'Ocean colour'], answer: 'Energy from the Sun interacting with Earth\u2019s spheres', difficulty: 2 },
        { id: 'Y10-SCI-U04-q2', type: 'mcq', prompt: 'Which is an indicator of climate change?', options: ['Rising sea levels and shrinking sea ice', 'Longer school holidays', 'More stars'], answer: 'Rising sea levels and shrinking sea ice', difficulty: 2 },
        { id: 'Y10-SCI-U04-q3', type: 'mcq', prompt: 'Deep ocean currents regulate global climate by…', options: ['Moving heat energy around the planet', 'Creating waves', 'Cooling only one beach'], answer: 'Moving heat energy around the planet', difficulty: 3 },
        { id: 'Y10-SCI-U04-q4', type: 'mcq', prompt: 'Changes in species distribution can indicate…', options: ['A changing climate', 'Nothing at all', 'New fashion'], answer: 'A changing climate', difficulty: 2 },
        { id: 'Y10-SCI-U04-q5', type: 'mcq', prompt: 'Climate models simulate…', options: ['Energy and matter flow between Earth\u2019s spheres', 'Weekly weather only', 'Moon phases'], answer: 'Energy and matter flow between Earth\u2019s spheres', difficulty: 3 },
        { id: 'Y10-SCI-U04-q6', type: 'mcq', prompt: 'Strategies to reduce climate change target…', options: ['Lowering emissions and mitigating effects', 'Producing more greenhouse gas', 'Stopping all energy use'], answer: 'Lowering emissions and mitigating effects', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U05',
    title: "Newton's laws of motion",
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Newton's laws connect force, mass and motion. An object stays still or moving steadily unless a net force acts; force = mass × acceleration (F = ma); and every action has an equal and opposite reaction.",
        'The relationship is quantitative: graphs and equations let you predict motion. Safety features like seatbelts, airbags and crumple zones are engineered around these laws.',
      ],
      illustrations: [
        { brief: 'F = ma relationship: same force, more mass → less acceleration', ready: true, diagram: { kind: 'bar-compare', unit: 'acceleration', items: [{ label: 'Light object', value: 8 }, { label: 'Heavy object', value: 3 }] } },
        { brief: 'Newton\u2019s laws applied to car safety features', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'train-engine', label: 'Moving vehicle' }, { icon: 'stop-sign', label: 'Braking' }, { icon: 'burst', label: 'Airbag' }], caption: 'Safety features manage forces in a crash' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U05-q1', type: 'mcq', prompt: 'Force equals…', options: ['Mass × acceleration', 'Mass ÷ acceleration', 'Speed × time'], answer: 'Mass × acceleration', difficulty: 2 },
        { id: 'Y10-SCI-U05-q2', type: 'mcq', prompt: 'The same force on a heavier object gives…', options: ['Less acceleration', 'More acceleration', 'No motion'], answer: 'Less acceleration', difficulty: 2 },
        { id: 'Y10-SCI-U05-q3', type: 'mcq', prompt: 'An object with no net force acting on it will…', options: ['Keep its current motion', 'Always speed up', 'Always stop'], answer: 'Keep its current motion', difficulty: 2 },
        { id: 'Y10-SCI-U05-q4', type: 'mcq', prompt: 'Crumple zones and airbags are designed to…', options: ['Reduce the force on people in a crash', 'Make cars faster', 'Use more fuel'], answer: 'Reduce the force on people in a crash', difficulty: 2 },
        { id: 'Y10-SCI-U05-q5', type: 'mcq', prompt: 'Speed and acceleration are related by…', options: ['How fast velocity changes with time', 'Colour', 'Mass only'], answer: 'How fast velocity changes with time', difficulty: 3 },
        { id: 'Y10-SCI-U05-q6', type: 'mcq', prompt: 'Newton\u2019s laws apply in sport to…', options: ['Improve performance and safety', 'Predict the weather', 'Change the rules'], answer: 'Improve performance and safety', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U06',
    title: 'Atoms & the periodic table',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The periodic table organises elements by their atomic structure. Elements in the same group have similar properties because they have the same pattern of outer electrons.',
        'The Bohr model shows electrons in shells. Repeating patterns in the table reflect those outer-electron patterns, which is why flame tests and emission spectra reveal an element\u2019s identity.',
      ],
      illustrations: [
        { brief: 'Periodic table group patterns: similar outer electrons', ready: true, diagram: { kind: 'dot-plot', values: [1, 2, 2, 3, 4, 4, 5], unit: 'outer electrons' } },
        { brief: 'Bohr model: electrons in shells around nucleus', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'orbit', label: 'Electron shells' }, { icon: 'cube', label: 'Nucleus' }], caption: 'Shell pattern explains properties' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U06-q1', type: 'mcq', prompt: 'Elements in the same group of the periodic table…', options: ['Have similar properties', 'Have no electrons', 'Are always metals'], answer: 'Have similar properties', difficulty: 2 },
        { id: 'Y10-SCI-U06-q2', type: 'mcq', prompt: 'Properties of elements relate to their…', options: ['Atomic structure and electron arrangement', 'Colour only', 'Name length'], answer: 'Atomic structure and electron arrangement', difficulty: 2 },
        { id: 'Y10-SCI-U06-q3', type: 'mcq', prompt: 'The repeating patterns of the periodic table reflect…', options: ['Patterns of outer electrons', 'Random choices', 'Element weight in gold'], answer: 'Patterns of outer electrons', difficulty: 3 },
        { id: 'Y10-SCI-U06-q4', type: 'mcq', prompt: 'Metals and non-metals differ in their…', options: ['Physical properties', 'Spelling', 'Atomic number only'], answer: 'Physical properties', difficulty: 2 },
        { id: 'Y10-SCI-U06-q5', type: 'mcq', prompt: 'Flame tests can reveal an element\u2019s…', options: ['Identity through its emission spectrum', 'Mass', 'Smell'], answer: 'Identity through its emission spectrum', difficulty: 3 },
        { id: 'Y10-SCI-U06-q6', type: 'mcq', prompt: 'The spectroscope advanced the atom model by…', options: ['Revealing emission spectra of elements', 'Making atoms visible to the eye', 'Sorting atoms'], answer: 'Revealing emission spectra of elements', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-U07',
    title: 'Reaction types & rates',
    year: '10',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S10U07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Chemical reactions follow patterns: synthesis builds a product from simpler parts, decomposition breaks one substance down, and displacement swaps one element for another. Recognising the type helps predict products.',
        'Reaction rate is affected by temperature, concentration, surface area and catalysts. Crushing a solid, heating it, or adding a catalyst all speed reactions up.',
      ],
      illustrations: [
        { brief: 'Synthesis, decomposition and displacement patterns', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Synthesis: A+B→AB' }, { text: 'Decomposition: AB→A+B' }, { text: 'Displacement: swap' }] } },
        { brief: 'Factors speeding up reactions', ready: true, diagram: { kind: 'bar-compare', unit: 'rate', items: [{ label: 'Higher temp', value: 9 }, { label: 'More surface area', value: 7 }, { label: 'Catalyst', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-U07-q1', type: 'mcq', prompt: 'A synthesis reaction…', options: ['Builds a product from simpler reactants', 'Breaks one substance down', 'Swaps nothing'], answer: 'Builds a product from simpler reactants', difficulty: 2 },
        { id: 'Y10-SCI-U07-q2', type: 'mcq', prompt: 'A decomposition reaction…', options: ['Breaks one substance into simpler products', 'Joins two substances', 'Adds water only'], answer: 'Breaks one substance into simpler products', difficulty: 2 },
        { id: 'Y10-SCI-U07-q3', type: 'mcq', prompt: 'In a displacement reaction, one element…', options: ['Replaces another in a compound', 'Disappears forever', 'Doubles the mass'], answer: 'Replaces another in a compound', difficulty: 3 },
        { id: 'Y10-SCI-U07-q4', type: 'mcq', prompt: 'Raising temperature usually…', options: ['Increases the reaction rate', 'Stops all reactions', 'Halves the rate'], answer: 'Increases the reaction rate', difficulty: 1 },
        { id: 'Y10-SCI-U07-q5', type: 'mcq', prompt: 'Crushing a solid increases reaction rate by increasing…', options: ['Surface area', 'Its colour', 'Its smell'], answer: 'Surface area', difficulty: 2 },
        { id: 'Y10-SCI-U07-q6', type: 'mcq', prompt: 'A catalyst speeds up a reaction by…', options: ['Lowering the energy barrier without being used up', 'Adding more reactants', 'Cooling the mixture'], answer: 'Lowering the energy barrier without being used up', difficulty: 3 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (4 CDs) ----------
  {
    id: 'Y10-SCI-H01',
    title: 'Validating scientific knowledge',
    year: '10',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S10H01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific knowledge is validated and refined through publication and peer review. Rosalind Franklin\u2019s data were critical to the DNA double-helix discovery; Mendel\u2019s experiments were validated with large datasets and statistics.',
        'Claims are checked by other scientists, refined as new evidence appears, the periodic table itself grew and changed as new elements were discovered.',
      ],
      illustrations: [
        { brief: 'Validation loop: findings → review → independent check → acceptance', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Findings' }, { text: 'Peer review' }, { text: 'Independent checks' }, { text: 'Accepted knowledge' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-H01-q1', type: 'mcq', prompt: 'Rosalind Franklin\u2019s work was critical to…', options: ['Discovering the DNA double helix', 'The periodic table only', 'Weather prediction'], answer: 'Discovering the DNA double helix', difficulty: 2 },
        { id: 'Y10-SCI-H01-q2', type: 'mcq', prompt: 'Large datasets and statistical analysis validate findings by…', options: ['Showing results are not due to chance', 'Making results shorter', 'Hiding variation'], answer: 'Showing results are not due to chance', difficulty: 3 },
        { id: 'Y10-SCI-H01-q3', type: 'mcq', prompt: 'The periodic table has been…', options: ['Disputed and refined as new elements appeared', 'Unchanged forever', 'Copied from the Moon'], answer: 'Disputed and refined as new elements appeared', difficulty: 2 },
        { id: 'Y10-SCI-H01-q4', type: 'mcq', prompt: 'Gravitational waves validated Einstein\u2019s theory…', options: ['About a century after it was proposed', 'The next day', 'Never'], answer: 'About a century after it was proposed', difficulty: 3 },
        { id: 'Y10-SCI-H01-q5', type: 'mcq', prompt: 'Different climate models can coexist because…', options: ['Models make different assumptions and simplify differently', 'Scientists disagree about everything', 'Models are guesses'], answer: 'Models make different assumptions and simplify differently', difficulty: 3 },
        { id: 'Y10-SCI-H01-q6', type: 'mcq', prompt: 'Publication and peer review help ensure scientific knowledge is…', options: ['Reliable and continually refined', 'Secret and fixed', 'Never questioned'], answer: 'Reliable and continually refined', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-H02',
    title: 'Technology & scientific progress',
    year: '10',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S10H02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Advances in technology drive advances in science, and science enables new technologies. Fast computers made DNA sequencing and radio astronomy possible; satellites track ocean temperatures and ice cover for climate science.',
        'From gene therapy and DNA barcoding to new alloys and computer chips, the science–technology loop keeps producing new capabilities and questions.',
      ],
      illustrations: [
        { brief: 'Science → technology → science loop', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Science insight' }, { text: 'New technology' }, { text: 'New data' }, { text: 'Deeper insight' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-H02-q1', type: 'mcq', prompt: 'Fast computers enabled…', options: ['DNA sequencing and radio astronomy data analysis', 'Faster handwriting', 'Longer lunches'], answer: 'DNA sequencing and radio astronomy data analysis', difficulty: 2 },
        { id: 'Y10-SCI-H02-q2', type: 'mcq', prompt: 'Satellites provide global data on…', options: ['Ocean temperatures, sea levels and ice cover', 'The price of fruit', 'Music charts'], answer: 'Ocean temperatures, sea levels and ice cover', difficulty: 2 },
        { id: 'Y10-SCI-H02-q3', type: 'mcq', prompt: 'Gene therapy is an application of…', options: ['Understanding how DNA stores and carries information', 'Weather science', 'Cooking'], answer: 'Understanding how DNA stores and carries information', difficulty: 3 },
        { id: 'Y10-SCI-H02-q4', type: 'mcq', prompt: 'New alloys have enabled engineers to…', options: ['Build lighter, stronger structures', 'Only colour metals', 'Melt everything'], answer: 'Build lighter, stronger structures', difficulty: 2 },
        { id: 'Y10-SCI-H02-q5', type: 'mcq', prompt: 'Computer modelling has improved predictions of…', options: ['Climate change and pollution', 'Sports scores', 'Tides only'], answer: 'Climate change and pollution', difficulty: 2 },
        { id: 'Y10-SCI-H02-q6', type: 'mcq', prompt: 'Female crash-test dummies revealed that…', options: ['Women face greater injury risk in crashes, changing safety design', 'Crashes never injure anyone', 'Dummies are optional'], answer: 'Women face greater injury risk in crashes, changing safety design', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-H03',
    title: 'How society adopts science',
    year: '10',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S10H03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Science is adopted by society when benefits are clear and support exists. Genetically engineered crops spread as they solved farming problems; helmet laws followed injury statistics; citizen science projects thrive on public interest.',
        'Climate models are sometimes contested in society even among scientific consensus, understanding why people adopt or resist science helps science have real impact.',
      ],
      illustrations: [
        { brief: 'Helmet use: injury rates with vs without helmets', ready: true, diagram: { kind: 'bar-compare', unit: 'injury rate', items: [{ label: 'No helmet', value: 9 }, { label: 'Helmet', value: 3 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-H03-q1', type: 'mcq', prompt: 'Genetically engineered crops became widespread because they…', options: ['Solved practical farming problems', 'Were banned everywhere', 'Tasted worse'], answer: 'Solved practical farming problems', difficulty: 2 },
        { id: 'Y10-SCI-H03-q2', type: 'mcq', prompt: 'Helmet requirements followed…', options: ['Injury statistics comparing riders with and without helmets', 'A fashion trend', 'A sports rule'], answer: 'Injury statistics comparing riders with and without helmets', difficulty: 3 },
        { id: 'Y10-SCI-H03-q3', type: 'mcq', prompt: 'Citizen science projects grow when…', options: ['People choose to be involved in real research', 'Everyone is forced to join', 'Data is secret'], answer: 'People choose to be involved in real research', difficulty: 2 },
        { id: 'Y10-SCI-H03-q4', type: 'mcq', prompt: 'Some people contest climate models even amid scientific consensus because…', options: ['Models, values and communication all play a role', 'Scientists never agree', 'There is no evidence'], answer: 'Models, values and communication all play a role', difficulty: 3 },
        { id: 'Y10-SCI-H03-q5', type: 'mcq', prompt: 'Genetic screening is adopted when…', options: ['Groups see clear value and applications', 'Nobody wants it', 'It is hidden'], answer: 'Groups see clear value and applications', difficulty: 2 },
        { id: 'Y10-SCI-H03-q6', type: 'mcq', prompt: 'Traditional ecological knowledges of First Nations Australians are being…', options: ['Reaffirmed by modern science and used in carbon farming', 'Discarded', 'Copied without credit'], answer: 'Reaffirmed by modern science and used in carbon farming', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-H04',
    title: 'Society\u2019s needs shape research',
    year: '10',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S10H04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The values and needs of society influence what research is funded and pursued. Government and commercial funding decides much of what gets studied; space research and new materials follow both curiosity and real-world use.',
        'Genetic testing raises big questions, for counselling, embryo selection and by insurers, and history shows how society\u2019s misconceptions about heredity once shaped harmful policies.',
      ],
      illustrations: [
        { brief: 'Values → funding → research focus → applications', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Societal values' }, { text: 'Funding' }, { text: 'Research focus' }, { text: 'Applications' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-H04-q1', type: 'mcq', prompt: 'Funding for scientific research comes largely from…', options: ['Governments and commercial organisations', 'Nobody', 'Only individuals guessing'], answer: 'Governments and commercial organisations', difficulty: 2 },
        { id: 'Y10-SCI-H04-q2', type: 'mcq', prompt: 'Genetic testing can be used for…', options: ['Counselling, embryo selection and identifying carriers', 'Cooking meals', 'Predicting sports scores'], answer: 'Counselling, embryo selection and identifying carriers', difficulty: 3 },
        { id: 'Y10-SCI-H04-q3', type: 'mcq', prompt: 'The values and needs of society influence…', options: ['Which research gets done and funded', 'The laws of motion', 'The colour of the sky'], answer: 'Which research gets done and funded', difficulty: 2 },
        { id: 'Y10-SCI-H04-q4', type: 'mcq', prompt: 'Historical misconceptions about heredity and evolution…', options: ['Once influenced harmful policies toward First Nations Australians', 'Changed the periodic table', 'Had no effects'], answer: 'Once influenced harmful policies toward First Nations Australians', difficulty: 3 },
        { id: 'Y10-SCI-H04-q5', type: 'mcq', prompt: 'Space research and new-material development are linked because…', options: ['Research often leads to real-world applications', 'Space is near', 'Materials fall from the sky'], answer: 'Research often leads to real-world applications', difficulty: 3 },
        { id: 'Y10-SCI-H04-q6', type: 'mcq', prompt: 'Questions about how genetic information should be used show that…', options: ['Science and society\u2019s values are deeply connected', 'Science ignores society', 'Testing has no effects'], answer: 'Science and society\u2019s values are deeply connected', difficulty: 3 },
      ],
    },
  },
  // ---------- Science Inquiry (8 CDs) ----------
  {
    id: 'Y10-SCI-I01',
    title: 'Hypotheses & models',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A tested hypothesis leads to further predictions, science builds on itself. Develop investigable questions, reasoned predictions and hypotheses to test relationships and refine explanatory models.',
        'From climate modelling to reaction rates, predictions come from models and are then checked against data: "If surface area increases, then the reaction rate increases."',
      ],
      illustrations: [
        { brief: 'Hypothesis → test → new prediction spiral', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Hypothesis' }, { text: 'Test' }, { text: 'Results' }, { text: 'New predictions' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I01-q1', type: 'mcq', prompt: 'A tested hypothesis typically leads to…', options: ['Further predictions and testing', 'The end of all questions', 'Random guesses'], answer: 'Further predictions and testing', difficulty: 2 },
        { id: 'Y10-SCI-I01-q2', type: 'mcq', prompt: '"If surface area increases, then reaction rate increases" is a…', options: ['Reasoned hypothesis', 'Final law', 'Rumour'], answer: 'Reasoned hypothesis', difficulty: 2 },
        { id: 'Y10-SCI-I01-q3', type: 'mcq', prompt: 'Predictions from scientific models must be…', options: ['Testable against data', 'Always believed', 'Never checked'], answer: 'Testable against data', difficulty: 2 },
        { id: 'Y10-SCI-I01-q4', type: 'mcq', prompt: 'Hypotheses about human impact on climate are best tested using…', options: ['Secondary data and models', 'A coin toss', 'Opinion polls only'], answer: 'Secondary data and models', difficulty: 3 },
        { id: 'Y10-SCI-I01-q5', type: 'mcq', prompt: 'A relationship hypothesis needs to specify…', options: ['What changes and what you expect to observe', 'Only a colour', 'No variables'], answer: 'What changes and what you expect to observe', difficulty: 3 },
        { id: 'Y10-SCI-I01-q6', type: 'mcq', prompt: 'Developing explanatory models helps scientists…', options: ['Generate testable predictions', 'Avoid data', 'Finish quickly'], answer: 'Generate testable predictions', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I02',
    title: 'Valid investigations & risk',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'Plan valid, reproducible investigations: identify and control for possible sources of error, including confounding variables, and follow risk assessments and ethical considerations.',
        'Respect Country/Place: address ethical issues when collaborating with First Nations Australians, model how to report discoveries of artefacts or heritage, and manage animal-welfare responsibilities.',
      ],
      illustrations: [
        { brief: 'Error control checklist: variables, equipment, ethics, risk', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Control variables' }, { text: 'Address error' }, { text: 'Risk assessment' }, { text: 'Ethics + Country/Place' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I02-q1', type: 'mcq', prompt: 'Confounding variables are factors that…', options: ['Could confuse the effect you are measuring', 'Make results clearer', 'Never matter'], answer: 'Could confuse the effect you are measuring', difficulty: 3 },
        { id: 'Y10-SCI-I02-q2', type: 'mcq', prompt: 'Sources of error are addressed through…', options: ['Equipment choice, variable control and further testing', 'Guessing', 'Removing all data'], answer: 'Equipment choice, variable control and further testing', difficulty: 2 },
        { id: 'Y10-SCI-I02-q3', type: 'mcq', prompt: 'Animal welfare must be considered…', options: ['Before starting investigations involving animals', 'Never', 'After the results'], answer: 'Before starting investigations involving animals', difficulty: 2 },
        { id: 'Y10-SCI-I02-q4', type: 'mcq', prompt: 'When collaborating with First Nations Australians, you must address…', options: ['Ethical issues and protocols', 'Only payment', 'Nothing'], answer: 'Ethical issues and protocols', difficulty: 3 },
        { id: 'Y10-SCI-I02-q5', type: 'mcq', prompt: 'Discovering unregistered First Nations artefacts should be…', options: ['Reported and left undisturbed', 'Kept secret', 'Collected'], answer: 'Reported and left undisturbed', difficulty: 3 },
        { id: 'Y10-SCI-I02-q6', type: 'mcq', prompt: 'A valid, reproducible investigation allows…', options: ['Others to repeat it and trust the results', 'No repeats ever', 'Random results'], answer: 'Others to repeat it and trust the results', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I03',
    title: 'Precision, calibration & error',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Reliable data needs calibrated instruments, correct reading technique and enough data. Calibrate before use, plan for recalibration, and understand how estimation between scale markings affects precision.',
        'Human error and instrument limitations affect replicability. Deciding how much data you need is part of designing a sound investigation.',
      ],
      illustrations: [
        { brief: 'Calibration → measurement → reliable data flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Calibrate' }, { text: 'Measure precisely' }, { text: 'Record correctly' }, { text: 'Reliable data' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I03-q1', type: 'mcq', prompt: 'Calibrating an instrument before use…', options: ['Improves the reliability of results', 'Makes results worse', 'Has no effect'], answer: 'Improves the reliability of results', difficulty: 2 },
        { id: 'Y10-SCI-I03-q2', type: 'mcq', prompt: 'Estimating between scale markings…', options: ['Affects precision and can introduce inaccuracy', 'Improves precision infinitely', 'Is impossible'], answer: 'Affects precision and can introduce inaccuracy', difficulty: 3 },
        { id: 'Y10-SCI-I03-q3', type: 'mcq', prompt: 'Human error can affect…', options: ['Replicability and reproducibility', 'Only the colour of results', 'Nothing'], answer: 'Replicability and reproducibility', difficulty: 2 },
        { id: 'Y10-SCI-I03-q4', type: 'mcq', prompt: 'Planning for recalibration during an experiment…', options: ['Maintains accuracy across measurements', 'Wastes all results', 'Is against the rules'], answer: 'Maintains accuracy across measurements', difficulty: 2 },
        { id: 'Y10-SCI-I03-q5', type: 'mcq', prompt: 'Deciding how much data to collect depends on…', options: ['What is needed for valid conclusions', 'How bored you are', 'The font'], answer: 'What is needed for valid conclusions', difficulty: 3 },
        { id: 'Y10-SCI-I03-q6', type: 'mcq', prompt: 'A precise measurement…', options: ['Is consistent and close to the true value', 'Is always a guess', 'Has no units'], answer: 'Is consistent and close to the true value', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I04',
    title: 'Representing & processing data',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Choose representations that organise and process data well, spreadsheets for calculations, graphs for patterns, statistics for summaries, and models for relationships. The scale you use can change how data looks.',
        'Every representation has merits and limits: a time-lapse of polar ice tells a story, a mathematical model tells another. Comparing them reveals the strongest conclusions.',
      ],
      illustrations: [
        { brief: 'Data → summary stats → graph → interpretation', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Raw data' }, { text: 'Statistics' }, { text: 'Graphs' }, { text: 'Conclusions' }] } },
        { brief: 'Melting point patterns across the periodic table', ready: true, diagram: { kind: 'dot-plot', values: [1, 2, 4, 3, 5, 6, 4, 2], unit: 'melting point' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I04-q1', type: 'mcq', prompt: 'Spreadsheets are useful for…', options: ['Mathematical analysis of data', 'Only typing essays', 'Guessing'], answer: 'Mathematical analysis of data', difficulty: 2 },
        { id: 'Y10-SCI-I04-q2', type: 'mcq', prompt: 'Mean, median and range help…', options: ['Summarise data and make generalisations', 'Replace all data', 'Hide outliers'], answer: 'Summarise data and make generalisations', difficulty: 2 },
        { id: 'Y10-SCI-I04-q3', type: 'mcq', prompt: 'Outliers on a graph…', options: ['Affect how we generalise from the data', 'Should always be deleted', 'Never occur'], answer: 'Affect how we generalise from the data', difficulty: 2 },
        { id: 'Y10-SCI-I04-q4', type: 'mcq', prompt: 'The scale used on a graph can…', options: ['Change how the data is interpreted', 'Improve the data itself', 'Remove uncertainty'], answer: 'Change how the data is interpreted', difficulty: 3 },
        { id: 'Y10-SCI-I04-q5', type: 'mcq', prompt: 'A time-lapse of polar ice and a mathematical model…', options: ['Have different merits and limitations', 'Show exactly the same thing', 'Cannot be compared'], answer: 'Have different merits and limitations', difficulty: 3 },
        { id: 'Y10-SCI-I04-q6', type: 'mcq', prompt: 'Effective representations…', options: ['Communicate support for conclusions clearly', 'Hide the evidence', 'Invent data'], answer: 'Communicate support for conclusions clearly', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I05',
    title: 'Analysing patterns & anomalies',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Connect data from multiple sources to explain patterns, trends, relationships and anomalies, like homologous structures and fossil evidence pointing the same way, or species distributions in time and space.',
        'Organising data differently can change your interpretation, so explore tables, charts and statistics before drawing conclusions.',
      ],
      illustrations: [
        { brief: 'Converging evidence from fossils + anatomy', ready: true, diagram: { kind: 'bar-compare', unit: 'support', items: [{ label: 'Homologous structures', value: 7 }, { label: 'Fossil evidence', value: 8 }, { label: 'Distribution', value: 6 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I05-q1', type: 'mcq', prompt: 'Homologous structures and fossils are…', options: ['Different lines of evidence pointing the same way', 'Contradictory always', 'Unrelated to evolution'], answer: 'Different lines of evidence pointing the same way', difficulty: 3 },
        { id: 'Y10-SCI-I05-q2', type: 'mcq', prompt: 'Analysing species distribution in time and space reveals…', options: ['Patterns and relationships between organisms', 'Only the weather', 'Nothing'], answer: 'Patterns and relationships between organisms', difficulty: 2 },
        { id: 'Y10-SCI-I05-q3', type: 'mcq', prompt: 'Organising data in different ways can…', options: ['Lead to different interpretations', 'Always give identical answers', 'Destroy the data'], answer: 'Lead to different interpretations', difficulty: 3 },
        { id: 'Y10-SCI-I05-q4', type: 'mcq', prompt: 'Tables and graphs of speed and acceleration help…', options: ['Identify relationships clearly', 'Hide the motion', 'End the investigation'], answer: 'Identify relationships clearly', difficulty: 2 },
        { id: 'Y10-SCI-I05-q5', type: 'mcq', prompt: 'An anomaly in a data set should be…', options: ['Explained or investigated', 'Ignored forever', 'Copied'], answer: 'Explained or investigated', difficulty: 2 },
        { id: 'Y10-SCI-I05-q6', type: 'mcq', prompt: 'Reasoned predictions about climate change use…', options: ['Relationships found across variables and datasets', 'One random day of weather', 'No data'], answer: 'Relationships found across variables and datasets', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I06',
    title: 'Evaluating methods & uncertainty',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Assess the validity and reproducibility of methods, and evaluate conclusions by identifying assumptions, conflicting evidence and uncertainty. Random and systematic errors affect results differently.',
        'Data variation signals uncertainty, the more variation, the less confident we can be in a conclusion. Critically judging science in the media matters too.',
      ],
      illustrations: [
        { brief: 'Error types: random vs systematic', ready: true, diagram: { kind: 'dot-plot', values: [4, 5, 5, 6, 5, 9, 5, 5], unit: 'readings' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I06-q1', type: 'mcq', prompt: 'Systematic errors affect results…', options: ['In a consistent direction', 'Randomly', 'Not at all'], answer: 'In a consistent direction', difficulty: 3 },
        { id: 'Y10-SCI-I06-q2', type: 'mcq', prompt: 'Random errors cause…', options: ['Spread around the true value', 'The same mistake each time', 'No change'], answer: 'Spread around the true value', difficulty: 3 },
        { id: 'Y10-SCI-I06-q3', type: 'mcq', prompt: 'More variation in data means…', options: ['More uncertainty in the conclusion', 'A stronger conclusion', 'No change'], answer: 'More uncertainty in the conclusion', difficulty: 2 },
        { id: 'Y10-SCI-I06-q4', type: 'mcq', prompt: 'Judging media reports about science requires…', options: ['Evaluating the validity of methods and claims', 'Believing every headline', 'Ignoring all news'], answer: 'Evaluating the validity of methods and claims', difficulty: 2 },
        { id: 'Y10-SCI-I06-q5', type: 'mcq', prompt: 'Assumptions in a method should be…', options: ['Identified and examined for their impact', 'Hidden', 'Never mentioned'], answer: 'Identified and examined for their impact', difficulty: 2 },
        { id: 'Y10-SCI-I06-q6', type: 'mcq', prompt: 'A strong conclusion needs…', options: ['A valid, reproducible method and honest uncertainty', 'The loudest voice', 'No data at all'], answer: 'A valid, reproducible method and honest uncertainty', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I07',
    title: 'Building scientific arguments',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Build arguments from a variety of evidence, for the age of the universe, the role of humans in climate change, or local actions affecting the planet. Weigh credibility and consistency across sources.',
        'Consider ethical issues and cultural protocols: critically analyse scientific literature for cultural bias relating to First Nations Australians, and question non-therapeutic genetic testing by commercial companies.',
      ],
      illustrations: [
        { brief: 'Evidence synthesis: many sources → reasoned conclusion', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Source 1' }, { text: 'Source 2' }, { text: 'Source 3' }, { text: 'Reasoned conclusion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I07-q1', type: 'mcq', prompt: 'Arguments about the age of the universe use…', options: ['A range of evidence from multiple sources', 'One opinion', 'No data'], answer: 'A range of evidence from multiple sources', difficulty: 2 },
        { id: 'Y10-SCI-I07-q2', type: 'mcq', prompt: 'Debating human impact on climate change should be…', options: ['Evidence-based', 'Based only on feelings', 'Skipped'], answer: 'Evidence-based', difficulty: 2 },
        { id: 'Y10-SCI-I07-q3', type: 'mcq', prompt: 'Credibility of a secondary source is judged by…', options: ['The validity and reproducibility of its data', 'Its design', 'Its length'], answer: 'The validity and reproducibility of its data', difficulty: 3 },
        { id: 'Y10-SCI-I07-q4', type: 'mcq', prompt: 'Critically analysing literature for cultural bias means…', options: ['Examining how First Nations Australians are represented', 'Ignoring culture', 'Removing all authors'], answer: 'Examining how First Nations Australians are represented', difficulty: 3 },
        { id: 'Y10-SCI-I07-q5', type: 'mcq', prompt: 'Non-therapeutic genetic testing by companies raises…', options: ['Ethical questions', 'No questions', 'Only pricing questions'], answer: 'Ethical questions', difficulty: 2 },
        { id: 'Y10-SCI-I07-q6', type: 'mcq', prompt: 'Supporting a local action on climate change requires…', options: ['Primary or secondary scientific evidence', 'A popular slogan only', 'No evidence'], answer: 'Primary or secondary scientific evidence', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-SCI-I08',
    title: 'Communicating for impact',
    year: '10',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S10I08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Communicate findings effectively for purpose and audience, a full investigation report, a public performance about climate change, an infographic of climate evidence, or a campaign for lower speed limits.',
        'Scientific texts build arguments with structure, content and language chosen for the reader. Explain outliers, compare with accepted values, and discuss error honestly.',
      ],
      illustrations: [
        { brief: 'Audience → purpose → medium decision map', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Findings' }, { text: 'Purpose' }, { text: 'Audience' }, { text: 'Medium + language' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-SCI-I08-q1', type: 'mcq', prompt: 'An investigation report should report…', options: ['Only relevant data, plus a discussion of error', 'Every random thought', 'No results'], answer: 'Only relevant data, plus a discussion of error', difficulty: 2 },
        { id: 'Y10-SCI-I08-q2', type: 'mcq', prompt: 'A public performance about climate change aims to…', options: ['Encourage people to take specific action', 'Hide the science', 'Entertain only'], answer: 'Encourage people to take specific action', difficulty: 2 },
        { id: 'Y10-SCI-I08-q3', type: 'mcq', prompt: 'An infographic is effective for…', options: ['Highlighting multiple lines of climate evidence', 'Avoiding visuals', 'Deleting data'], answer: 'Highlighting multiple lines of climate evidence', difficulty: 2 },
        { id: 'Y10-SCI-I08-q4', type: 'mcq', prompt: 'Outliers in results should be…', options: ['Explained, and their effect on conclusions discussed', 'Silently removed', 'Celebrated'], answer: 'Explained, and their effect on conclusions discussed', difficulty: 3 },
        { id: 'Y10-SCI-I08-q5', type: 'mcq', prompt: 'Comparing your results with accepted values…', options: ['Strengthens the discussion of the investigation', 'Is pointless', 'Ends the experiment'], answer: 'Strengthens the discussion of the investigation', difficulty: 3 },
        { id: 'Y10-SCI-I08-q6', type: 'mcq', prompt: 'The structure, content and language of a scientific text are chosen…', options: ['For the specific audience and purpose', 'At random', 'By the weather'], answer: 'For the specific audience and purpose', difficulty: 3 },
      ],
    },
  },
];
