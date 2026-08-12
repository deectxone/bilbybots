import type { Topic } from '../../types/curriculum';

/**
 * Year 8 Science, full topic bank.
 * Source of truth: docs/content/year-7-10/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry; codes verified against ACARA v9.0
 * and the QCAA Years 7–10 Science sequence).
 * Each `AC9S8I02` topic carries `sensitivity: true` per the primary-school
 * convention, it touches Country/Place research-permission awareness, pending
 * a First Nations protocol review before release.
 */
export const YEAR8_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (7 CDs) ----------
  {
    id: 'Y8-SCI-U01',
    title: 'Cells & their organelles',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Cells are the basic units of living things. A microscope reveals their parts, the nucleus holds the DNA, the cytoplasm is the jelly-like filling, and the membrane controls what enters and leaves.',
        'Plant cells have extras: a stiff cell wall for support, chloroplasts for photosynthesis and a large vacuole. Animal cells have none of these. Single-celled organisms do everything inside just one cell.',
      ],
      illustrations: [
        { brief: 'Plant vs animal cell comparison diagram', ready: true, diagram: { kind: 'balance-scale', left: 'Plant cell', right: 'Animal cell', balanced: true } },
        { brief: 'Cell organelles flow: nucleus → membrane → cytoplasm', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Nucleus (DNA)' }, { text: 'Membrane (gatekeeper)' }, { text: 'Cytoplasm (jelly)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U01-q1', type: 'mcq', prompt: 'The basic unit of living things is the…', options: ['Cell', 'Organ', 'Tissue'], answer: 'Cell', difficulty: 1 },
        { id: 'Y8-SCI-U01-q2', type: 'mcq', prompt: 'The part of the cell that holds the DNA is the…', options: ['Nucleus', 'Vacuole', 'Cell wall'], answer: 'Nucleus', difficulty: 1 },
        { id: 'Y8-SCI-U01-q3', type: 'mcq', prompt: 'Which structure is found in plant cells but NOT animal cells?', options: ['Cell wall', 'Nucleus', 'Cell membrane'], answer: 'Cell wall', difficulty: 2 },
        { id: 'Y8-SCI-U01-q4', type: 'mcq', prompt: 'Chloroplasts are important because they allow plant cells to…', options: ['Photosynthesise', 'Move around', 'Store water'], answer: 'Photosynthesise', difficulty: 2 },
        { id: 'Y8-SCI-U01-q5', type: 'mcq', prompt: 'The cell membrane controls…', options: ['What enters and leaves the cell', 'Cell colour', 'Cell smell'], answer: 'What enters and leaves the cell', difficulty: 2 },
        { id: 'Y8-SCI-U01-q6', type: 'mcq', prompt: 'The invention of the microscope changed cell science by…', options: ['Letting people observe tiny cells for the first time', 'Making cells bigger', 'Replacing the nucleus'], answer: 'Letting people observe tiny cells for the first time', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U02',
    title: 'Cells, tissues & organs',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Similar cells group into tissues, tissues form organs, and organs work together in systems. In the heart, muscle tissue pumps blood; in a leaf, cells and tissues work to make food and move water.',
        'Structure and function are linked: an organ is shaped the way it is because of what it does. Compare a lung with a leaf, both are "exchange surfaces" with huge internal surface area.',
      ],
      illustrations: [
        { brief: 'Cell → tissue → organ → system hierarchy', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Cells' }, { text: 'Tissues' }, { text: 'Organs' }, { text: 'Systems' }] } },
        { brief: 'Lung vs leaf structure-and-function comparison', ready: true, diagram: { kind: 'balance-scale', left: 'Lung', right: 'Leaf', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U02-q1', type: 'mcq', prompt: 'Groups of similar cells working together form a…', options: ['Tissue', 'Molecule', 'Habitat'], answer: 'Tissue', difficulty: 2 },
        { id: 'Y8-SCI-U02-q2', type: 'mcq', prompt: 'Which list shows the correct size order (smallest first)?', options: ['Cell → tissue → organ → system', 'System → organ → tissue → cell', 'Tissue → cell → system → organ'], answer: 'Cell → tissue → organ → system', difficulty: 1 },
        { id: 'Y8-SCI-U02-q3', type: 'mcq', prompt: 'The heart\u2019s job of pumping blood is linked to its…', options: ['Muscle tissue structure', 'Colour', 'Location in the head'], answer: 'Muscle tissue structure', difficulty: 2 },
        { id: 'Y8-SCI-U02-q4', type: 'mcq', prompt: 'A lung and a leaf are similar because both…', options: ['Are exchange surfaces with large surface area', 'Contain feathers', 'Produce electricity'], answer: 'Are exchange surfaces with large surface area', difficulty: 3 },
        { id: 'Y8-SCI-U02-q5', type: 'mcq', prompt: 'Several organs working together to do one big job form a…', options: ['System', 'Cell', 'Tissue'], answer: 'System', difficulty: 1 },
        { id: 'Y8-SCI-U02-q6', type: 'mcq', prompt: 'If cells in an organ are damaged, the organ\u2019s function is likely to…', options: ['Be affected, because structure supports function', 'Improve instantly', 'Become invisible'], answer: 'Be affected, because structure supports function', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U03',
    title: 'Plate tectonics',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Earth's outer layer is broken into tectonic plates that move very slowly. At divergent boundaries plates pull apart; at convergent boundaries they collide (one may sink under the other); at transform boundaries they slide past each other.",
        'Earthquakes, volcanoes and mountain ranges cluster along these boundaries. The theory is backed by evidence, matching fossil patterns, the shape of coastlines, and maps of quakes and ridges (pioneered by Marie Tharp).',
      ],
      illustrations: [
        { brief: 'Three plate boundary types: divergent, convergent, transform', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'Divergent' }, { icon: 'globe', label: 'Convergent' }, { icon: 'globe', label: 'Transform' }], caption: 'Plates meet at three boundary types' } },
        { brief: 'Earthquake pattern along a plate boundary', ready: true, diagram: { kind: 'dot-plot', values: [1, 1, 2, 6, 7, 7, 8, 3, 2, 1], unit: 'quakes' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U03-q1', type: 'mcq', prompt: 'Earth\u2019s outer layer is broken into…', options: ['Tectonic plates', 'Oceans', 'Clouds'], answer: 'Tectonic plates', difficulty: 1 },
        { id: 'Y8-SCI-U03-q2', type: 'mcq', prompt: 'Where two plates pull apart is called a… boundary.', options: ['Divergent', 'Convergent', 'Transform'], answer: 'Divergent', difficulty: 2 },
        { id: 'Y8-SCI-U03-q3', type: 'mcq', prompt: 'Where two plates collide, one may…', options: ['Sink beneath the other', 'Turn into liquid', 'Disappear'], answer: 'Sink beneath the other', difficulty: 2 },
        { id: 'Y8-SCI-U03-q4', type: 'mcq', prompt: 'Earthquakes and volcanoes mostly happen…', options: ['Along plate boundaries', 'In the middle of oceans randomly', 'Only at the poles'], answer: 'Along plate boundaries', difficulty: 1 },
        { id: 'Y8-SCI-U03-q5', type: 'mcq', prompt: 'Evidence for plate tectonics includes…', options: ['Matching fossils and coastlines across continents', 'The phases of the Moon', 'The colour of the sky'], answer: 'Matching fossils and coastlines across continents', difficulty: 2 },
        { id: 'Y8-SCI-U03-q6', type: 'mcq', prompt: 'Marie Tharp\u2019s maps of the ocean floor supported plate tectonics by showing…', options: ['Mid-ocean ridges and their pattern', 'That the ocean is shallow', 'That plates are static'], answer: 'Mid-ocean ridges and their pattern', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U04',
    title: 'The rock cycle',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Rocks form in three ways. Igneous rocks form from cooled magma or lava; sedimentary rocks form from layers of particles pressed together; metamorphic rocks form when heat and pressure change existing rocks.',
        'The rock cycle links these through weathering, erosion, deposition, burial, heating and uplift, over timescales from thousands to millions of years. Rock properties reflect how they formed, which guides how we use them.',
      ],
      illustrations: [
        { brief: 'Rock cycle loop: magma → igneous → sediment → sedimentary → metamorphic', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Magma/lava' }, { text: 'Igneous' }, { text: 'Weathering + sediment' }, { text: 'Sedimentary' }, { text: 'Heat + pressure' }, { text: 'Metamorphic' }] } },
        { brief: 'Comparison of the three rock types by formation', ready: true, diagram: { kind: 'bar-compare', unit: 'time', items: [{ label: 'Igneous', value: 6 }, { label: 'Sedimentary', value: 8 }, { label: 'Metamorphic', value: 7 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U04-q1', type: 'mcq', prompt: 'Igneous rocks form from…', options: ['Cooled magma or lava', 'Packed sand', 'Living shells only'], answer: 'Cooled magma or lava', difficulty: 1 },
        { id: 'Y8-SCI-U04-q2', type: 'mcq', prompt: 'Sedimentary rocks form from…', options: ['Layers of sediment pressed together', 'Volcanic eruption alone', 'Pure metal'], answer: 'Layers of sediment pressed together', difficulty: 2 },
        { id: 'Y8-SCI-U04-q3', type: 'mcq', prompt: 'Metamorphic rocks are changed by…', options: ['Heat and pressure', 'Being eaten', 'Freezing forever'], answer: 'Heat and pressure', difficulty: 2 },
        { id: 'Y8-SCI-U04-q4', type: 'mcq', prompt: 'The process of rock breaking down into smaller pieces is called…', options: ['Weathering', 'Melting', 'Cooking'], answer: 'Weathering', difficulty: 2 },
        { id: 'Y8-SCI-U04-q5', type: 'mcq', prompt: 'The rock cycle shows that rock types…', options: ['Can transform into one another over time', 'Never change', 'Only change in summer'], answer: 'Can transform into one another over time', difficulty: 2 },
        { id: 'Y8-SCI-U04-q6', type: 'mcq', prompt: 'Rock properties reflect their formation, which matters because it…', options: ['Guides how we choose rocks for different uses', 'Determines rock colour alone', 'Only affects naming'], answer: 'Guides how we choose rocks for different uses', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U05',
    title: 'Energy: kinetic & potential',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Energy comes in two broad types. Kinetic energy is energy of movement, a rolling ball, moving water, electricity. Potential energy is stored energy, chemical (batteries, food), elastic (a stretched band) and gravitational (a lifted object).',
        'Energy can be transferred between objects and transformed from one form to another. On a roller-coaster, gravitational potential becomes kinetic as the car drops, and some is always lost as heat.',
      ],
      illustrations: [
        { brief: 'Kinetic vs potential energy classification', ready: true, diagram: { kind: 'balance-scale', left: 'Kinetic: moving', right: 'Potential: stored', balanced: true } },
        { brief: 'Roller-coaster energy transformation flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Gravitational potential (top)' }, { text: 'Kinetic (dropping)' }, { text: 'Heat (lost)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U05-q1', type: 'mcq', prompt: 'Kinetic energy is energy of…', options: ['Movement', 'Storage', 'Colour'], answer: 'Movement', difficulty: 1 },
        { id: 'Y8-SCI-U05-q2', type: 'mcq', prompt: 'The chemical energy in a battery is an example of…', options: ['Potential energy', 'Kinetic energy', 'Sound energy'], answer: 'Potential energy', difficulty: 2 },
        { id: 'Y8-SCI-U05-q3', type: 'mcq', prompt: 'A ball held high on a shelf has mainly…', options: ['Gravitational potential energy', 'Heat energy', 'Sound energy'], answer: 'Gravitational potential energy', difficulty: 2 },
        { id: 'Y8-SCI-U05-q4', type: 'mcq', prompt: 'When a roller-coaster car drops, gravitational potential energy transforms into…', options: ['Kinetic energy', 'Nothing', 'Colour'], answer: 'Kinetic energy', difficulty: 2 },
        { id: 'Y8-SCI-U05-q5', type: 'mcq', prompt: 'A filament globe turning electricity into light and heat shows energy…', options: ['Transformation', 'Disappearing', 'Sleeping'], answer: 'Transformation', difficulty: 3 },
        { id: 'Y8-SCI-U05-q6', type: 'mcq', prompt: 'Heat produced by a battery charging is best described as…', options: ['A by-product of energy transfer', 'The main product', 'Impossible'], answer: 'A by-product of energy transfer', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U06',
    title: 'Elements, compounds & mixtures',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Matter is classified as elements (one type of atom), compounds (two or more types of atom chemically joined, like H2O) or mixtures (substances mixed but not joined, like solutions, suspensions and colloids).',
        'Elements have symbols (H, O, Fe), compounds have formulas (H2O, CO2), and mixtures are described by percentages. Models help show this, balls for atoms, joined balls for molecules, loose balls for mixtures.',
      ],
      illustrations: [
        { brief: 'Element vs compound vs mixture atom models', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Element: one atom type' }, { text: 'Compound: atoms joined' }, { text: 'Mixture: not joined' }] } },
        { brief: 'Types of mixtures: solution, suspension, colloid', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bottle', label: 'Solution' }, { icon: 'bottle', label: 'Suspension' }, { icon: 'bottle', label: 'Colloid' }], caption: 'Mixtures differ by particle size and settling' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U06-q1', type: 'mcq', prompt: 'An element is made of…', options: ['Only one type of atom', 'Two joined compounds', 'Any mixture'], answer: 'Only one type of atom', difficulty: 1 },
        { id: 'Y8-SCI-U06-q2', type: 'mcq', prompt: 'Water (H2O) is a…', options: ['Compound', 'Mixture', 'Colloid'], answer: 'Compound', difficulty: 1 },
        { id: 'Y8-SCI-U06-q3', type: 'mcq', prompt: 'A salad is best classified as a…', options: ['Mixture', 'Compound', 'Element'], answer: 'Mixture', difficulty: 1 },
        { id: 'Y8-SCI-U06-q4', type: 'mcq', prompt: 'In a compound, atoms are…', options: ['Chemically joined', 'Never touching', 'Always the same type'], answer: 'Chemically joined', difficulty: 2 },
        { id: 'Y8-SCI-U06-q5', type: 'mcq', prompt: 'Mendeleev arranged the elements into the first useful…', options: ['Periodic table', 'Food chain', 'Calendar'], answer: 'Periodic table', difficulty: 2 },
        { id: 'Y8-SCI-U06-q6', type: 'mcq', prompt: 'Elements are shown by symbols, compounds by formulas and mixtures by…', options: ['Percentages of components', 'Fairy dust', 'Smell'], answer: 'Percentages of components', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-U07',
    title: 'Physical & chemical change',
    year: '8',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S8U07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In a physical change, no new substance forms, ice melts, sugar dissolves, a shape bends. In a chemical change, a new substance is made and you can often spot it.',
        'Indicators of chemical change include gas bubbles, a solid forming (precipitate), a colour change or a temperature change. Energy is usually absorbed or released too.',
      ],
      illustrations: [
        { brief: 'Indicators of chemical change: gas, precipitate, colour, heat', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'burst', label: 'Gas' }, { icon: 'cube', label: 'Precipitate' }, { icon: 'droplet', label: 'Colour change' }], caption: 'Clues that a new substance formed' } },
        { brief: 'Physical vs chemical change comparison', ready: true, diagram: { kind: 'balance-scale', left: 'Ice melts (physical)', right: 'Iron rusts (chemical)', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-U07-q1', type: 'mcq', prompt: 'Ice melting into water is a…', options: ['Physical change', 'Chemical change', 'Neither'], answer: 'Physical change', difficulty: 1 },
        { id: 'Y8-SCI-U07-q2', type: 'mcq', prompt: 'Iron rusting is a chemical change because…', options: ['A new substance forms', 'It changes shape only', 'It stays the same'], answer: 'A new substance forms', difficulty: 2 },
        { id: 'Y8-SCI-U07-q3', type: 'mcq', prompt: 'Which is an indicator of chemical change?', options: ['Gas bubbles forming', 'The object getting warmer then cooling (same substance)', 'Being cut in half'], answer: 'Gas bubbles forming', difficulty: 2 },
        { id: 'Y8-SCI-U07-q4', type: 'mcq', prompt: 'A colour change during a reaction usually means…', options: ['A chemical change may have happened', 'The sun was shining', 'Nothing occurred'], answer: 'A chemical change may have happened', difficulty: 2 },
        { id: 'Y8-SCI-U07-q5', type: 'mcq', prompt: 'Dissolving sugar in water is a physical change because…', options: ['You can get the sugar back, no new substance forms', 'It gets hot forever', 'It bubbles violently'], answer: 'You can get the sugar back, no new substance forms', difficulty: 3 },
        { id: 'Y8-SCI-U07-q6', type: 'mcq', prompt: 'A reaction that warms up shows…', options: ['Energy being released', 'Energy disappearing', 'A physical change'], answer: 'Energy being released', difficulty: 3 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (4 CDs) ----------
  {
    id: 'Y8-SCI-H01',
    title: 'New evidence changes knowledge',
    year: '8',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S8H01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'New evidence or new perspectives can change scientific knowledge. Microscopes and medical imaging revealed cells and organs; deep-Earth imaging found new resources; plate-tectonics evidence changed how we see our planet.',
        'Sometimes this means overturning an older idea, like continental drift giving way to the accepted theory of plate tectonics once enough evidence piled up.',
      ],
      illustrations: [
        { brief: 'Evidence timeline: old idea → new evidence → changed knowledge', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Old idea' }, { text: 'New evidence' }, { text: 'Knowledge updated' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-H01-q1', type: 'mcq', prompt: 'New evidence that contradicts an accepted idea can…', options: ['Lead to knowledge being revised', 'Never change anything', 'Only confuse textbooks'], answer: 'Lead to knowledge being revised', difficulty: 2 },
        { id: 'Y8-SCI-H01-q2', type: 'mcq', prompt: 'The invention of the microscope changed cell science by…', options: ['Revealing cell structures for the first time', 'Shrinking cells', 'Creating new cells'], answer: 'Revealing cell structures for the first time', difficulty: 2 },
        { id: 'Y8-SCI-H01-q3', type: 'mcq', prompt: 'Deep-Earth imaging technologies have helped scientists…', options: ['Find mineral, energy and water resources', 'Predict the weather of a single day', 'Name rocks'], answer: 'Find mineral, energy and water resources', difficulty: 2 },
        { id: 'Y8-SCI-H01-q4', type: 'mcq', prompt: 'The theory of plate tectonics was accepted after…', options: ['Sufficient evidence accumulated', 'One person declared it', 'It became a slogan'], answer: 'Sufficient evidence accumulated', difficulty: 2 },
        { id: 'Y8-SCI-H01-q5', type: 'mcq', prompt: 'Sustainability priorities (like limiting environmental impact) can lead to…', options: ['Innovative, cleaner practices', 'More pollution', 'Less science'], answer: 'Innovative, cleaner practices', difficulty: 3 },
        { id: 'Y8-SCI-H01-q6', type: 'mcq', prompt: 'Which statement best describes scientific knowledge?', options: ['It grows and is refined as evidence improves', 'It is final and unchangeable', 'It is decided by votes alone'], answer: 'It grows and is refined as evidence improves', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-H02',
    title: 'World views & scientific knowledge',
    year: '8',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S8H02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Cultural perspectives and world views influence science. Women scientists were sometimes "written out" of history, the Matilda effect. Different cultures bring different questions, materials and ways of knowing.',
        'Bamboo building traditions inspired quake-resistant structures; First Nations Australians develop materials through holistic world views that combine many kinds of knowledge.',
      ],
      illustrations: [
        { brief: 'Culture-to-knowledge flow: world view → questions → discoveries', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'World view' }, { text: 'Different questions' }, { text: 'New discoveries' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-H02-q1', type: 'mcq', prompt: 'The Matilda effect describes how women scientists were…', options: ['Written out of the historical record', 'Given all the credit', 'Given extra awards'], answer: 'Written out of the historical record', difficulty: 3 },
        { id: 'Y8-SCI-H02-q2', type: 'mcq', prompt: 'Bamboo building traditions contributed to science by inspiring…', options: ['Quake-resistant structures and materials', 'Faster trains', 'New flavours'], answer: 'Quake-resistant structures and materials', difficulty: 2 },
        { id: 'Y8-SCI-H02-q3', type: 'mcq', prompt: 'Different world views can lead to science that…', options: ['Asks new questions and uses different knowledges', 'Copies one answer forever', 'Ignores evidence'], answer: 'Asks new questions and uses different knowledges', difficulty: 2 },
        { id: 'Y8-SCI-H02-q4', type: 'mcq', prompt: 'First Nations Australians develop materials using…', options: ['Holistic world views combining many knowledges', 'Only one technique', 'No knowledge at all'], answer: 'Holistic world views combining many knowledges', difficulty: 3 },
        { id: 'Y8-SCI-H02-q5', type: 'mcq', prompt: 'Ideas about fairness in sport led to the development of…', options: ['Rapid chemical tests for performance drugs', 'New footballs only', 'Longer games'], answer: 'Rapid chemical tests for performance drugs', difficulty: 2 },
        { id: 'Y8-SCI-H02-q6', type: 'mcq', prompt: 'Recognising different perspectives in science makes the field…', options: ['Richer and more complete', 'Simpler and shorter', 'Unreliable'], answer: 'Richer and more complete', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-H03',
    title: 'Science responses & society',
    year: '8',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S8H03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific responses to real problems raise ethical, environmental, social and economic questions. Organ transplants save lives but raise big ethical questions; new building materials and early-warning systems protect quake-prone regions.',
        'Hybrid and electric vehicles are a scientific response to fossil-fuel depletion; biodegradable materials tackle landfill. Science does not just discover, it shapes how society chooses to live.',
      ],
      illustrations: [
        { brief: 'Considerations wheel: ethical, environmental, social, economic', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ethical' }, { text: 'Environmental' }, { text: 'Social' }, { text: 'Economic' }] } },
        { brief: 'Vehicle choice comparison: fossil, hybrid, electric', ready: true, diagram: { kind: 'bar-compare', unit: 'emissions', items: [{ label: 'Fossil', value: 9 }, { label: 'Hybrid', value: 5 }, { label: 'Electric', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-H03-q1', type: 'mcq', prompt: 'Scientific responses to issues often raise questions that are…', options: ['Ethical, environmental, social and economic', 'Only about prices', 'Purely decorative'], answer: 'Ethical, environmental, social and economic', difficulty: 2 },
        { id: 'Y8-SCI-H03-q2', type: 'mcq', prompt: 'Early-warning systems for earthquakes help communities by…', options: ['Giving time to respond to danger', 'Making quakes smaller', 'Predicting the weather'], answer: 'Giving time to respond to danger', difficulty: 2 },
        { id: 'Y8-SCI-H03-q3', type: 'mcq', prompt: 'Electric vehicles are a scientific response to…', options: ['Fossil-fuel depletion and pollution', 'Traffic lights', 'Music preference'], answer: 'Fossil-fuel depletion and pollution', difficulty: 1 },
        { id: 'Y8-SCI-H03-q4', type: 'mcq', prompt: 'Biodegradable materials help by…', options: ['Reducing landfill waste', 'Making plastic forever', 'Adding more litter'], answer: 'Reducing landfill waste', difficulty: 1 },
        { id: 'Y8-SCI-H03-q5', type: 'mcq', prompt: 'Organ transplants raise mainly…', options: ['Ethical questions about donors and recipients', 'Questions about colour', 'No questions at all'], answer: 'Ethical questions about donors and recipients', difficulty: 2 },
        { id: 'Y8-SCI-H03-q6', type: 'mcq', prompt: 'Considering social and economic impacts of a scientific fix helps society…', options: ['Adopt solutions that actually work in real life', 'Ignore evidence', 'Avoid new ideas'], answer: 'Adopt solutions that actually work in real life', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-H04',
    title: 'Science communication',
    year: '8',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S8H04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Science communication shapes what individuals and communities believe and do. Campaigns encourage organ donation; countries share seismic data for tsunami alerts; science communicators inspire interest in science.',
        'Clear, honest communication lets people make informed choices, about their health, the environment and policy. How science is told matters as much as the science itself.',
      ],
      illustrations: [
        { brief: 'Communication → viewpoint → policy flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Science findings' }, { text: 'Communication' }, { text: 'Informed viewpoints' }, { text: 'Community policy' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-H04-q1', type: 'mcq', prompt: 'Science communication can change society by…', options: ['Informing viewpoints and policies', 'Keeping results secret', 'Replacing evidence'], answer: 'Informing viewpoints and policies', difficulty: 2 },
        { id: 'Y8-SCI-H04-q2', type: 'mcq', prompt: 'Sharing seismic data between governments helps with…', options: ['Tsunami alerts', 'Colour of the ocean', 'Road naming'], answer: 'Tsunami alerts', difficulty: 2 },
        { id: 'Y8-SCI-H04-q3', type: 'mcq', prompt: 'Organ-donation campaigns aim to…', options: ['Increase informed donation rates', 'Decrease awareness', 'Hide medical facts'], answer: 'Increase informed donation rates', difficulty: 1 },
        { id: 'Y8-SCI-H04-q4', type: 'mcq', prompt: 'A good science communicator…', options: ['Makes science clear and engaging for the audience', 'Makes science confusing', 'Avoids facts'], answer: 'Makes science clear and engaging for the audience', difficulty: 2 },
        { id: 'Y8-SCI-H04-q5', type: 'mcq', prompt: 'Informed individual viewpoints are important because they guide…', options: ['Personal choices and community policies', 'Only fashion trends', 'Nothing'], answer: 'Personal choices and community policies', difficulty: 3 },
        { id: 'Y8-SCI-H04-q6', type: 'mcq', prompt: 'Promoting biodegradable materials is an example of using communication to…', options: ['Change everyday choices for the environment', 'Increase landfill', 'Hide science'], answer: 'Change everyday choices for the environment', difficulty: 3 },
      ],
    },
  },
  // ---------- Science Inquiry (8 CDs) ----------
  {
    id: 'Y8-SCI-I01',
    title: 'Questions & hypotheses',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Investigable questions test relationships or explore models, like "How does salt concentration affect plant cells?" A good question can be answered with data. Causation differs from correlation: two things happening together do not prove one causes the other.',
        'A hypothesis is a reasoned prediction of what you expect and why. "An earthquake of greater magnitude causes more damage because more energy is transferred" links the prediction to a scientific reason.',
      ],
      illustrations: [
        { brief: 'Correlation vs causation distinction', ready: true, diagram: { kind: 'bar-compare', unit: 'association', items: [{ label: 'Ice cream sales', value: 8 }, { label: 'Drowning rates', value: 8 }] } },
        { brief: 'If-then-because hypothesis structure', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'If (change)' }, { text: 'Then (outcome)' }, { text: 'Because (reason)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I01-q1', type: 'mcq', prompt: 'A causal relationship means one variable…', options: ['Causes a change in another', 'Looks like another', 'Is bigger'], answer: 'Causes a change in another', difficulty: 3 },
        { id: 'Y8-SCI-I01-q2', type: 'mcq', prompt: 'Ice-cream sales and drowning rates rising together in summer is…', options: ['Correlation, not necessarily causation', 'Proof of a cure', 'Random chance only'], answer: 'Correlation, not necessarily causation', difficulty: 3 },
        { id: 'Y8-SCI-I01-q3', type: 'mcq', prompt: 'Which is an investigable question?', options: ['How does sunlight affect a solar cell\u2019s electricity?', 'Which breakfast cereal is nicest?', 'What is art?'], answer: 'How does sunlight affect a solar cell\u2019s electricity?', difficulty: 1 },
        { id: 'Y8-SCI-I01-q4', type: 'mcq', prompt: 'A good hypothesis includes…', options: ['A prediction plus a reason', 'Only a guess', 'No variables'], answer: 'A prediction plus a reason', difficulty: 2 },
        { id: 'Y8-SCI-I01-q5', type: 'mcq', prompt: '"An earthquake of greater magnitude causes more damage because more energy is transferred" is a…', options: ['Hypothesis', 'Correlation', 'Law'], answer: 'Hypothesis', difficulty: 2 },
        { id: 'Y8-SCI-I01-q6', type: 'mcq', prompt: 'Testing a causal relationship requires…', options: ['Controlling variables to isolate the cause', 'Changing everything at once', 'No measurements'], answer: 'Controlling variables to isolate the cause', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I02',
    title: 'Planning & conducting investigations',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'A reproducible investigation tests a hypothesis with controlled variables. You identify what to change, what to measure and what to hold constant, and you document assumptions (like using dialysis tubing to model a cell wall).',
        'Plan for safety and ethics: manage risks, and treat heritage sites and artefacts on Country/Place with care, no harm, and follow permission and cultural protocols.',
      ],
      illustrations: [
        { brief: 'Reproducibility loop: plan → run → repeat → compare', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan variables' }, { text: 'Run test' }, { text: 'Repeat trials' }, { text: 'Compare results' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I02-q1', type: 'mcq', prompt: 'A reproducible investigation is one that…', options: ['Can be repeated to check results', 'Only works once', 'Has no method'], answer: 'Can be repeated to check results', difficulty: 2 },
        { id: 'Y8-SCI-I02-q2', type: 'mcq', prompt: 'To test one relationship fairly, you must…', options: ['Control all other variables', 'Change every variable', 'Skip controls'], answer: 'Control all other variables', difficulty: 2 },
        { id: 'Y8-SCI-I02-q3', type: 'mcq', prompt: 'An assumption in a model (like tubing = cell wall) should be…', options: ['Identified and acknowledged', 'Hidden', 'Called a fact'], answer: 'Identified and acknowledged', difficulty: 3 },
        { id: 'Y8-SCI-I02-q4', type: 'mcq', prompt: 'Safety procedures exist to…', options: ['Address the identified risks', 'Make labs slower', 'Fill time'], answer: 'Address the identified risks', difficulty: 1 },
        { id: 'Y8-SCI-I02-q5', type: 'mcq', prompt: 'When visiting a significant heritage site, you should…', options: ['Cause no harm and follow protocols', 'Collect samples freely', 'Ignore local guidance'], answer: 'Cause no harm and follow protocols', difficulty: 3 },
        { id: 'Y8-SCI-I02-q6', type: 'mcq', prompt: 'Recording variables and steps carefully helps others…', options: ['Repeat and trust the investigation', 'Guess the answer', 'Skip the science'], answer: 'Repeat and trust the investigation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I03',
    title: 'Precision in measurement',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Precision means matching the equipment to the job: adjust microscope magnification to see cell structures, read the bottom of the meniscus for exact liquid volume, and record with the right units and decimals.',
        'Digital tools like digital microscopes and simulations can record qualitative and quantitative data accurately. Label tables with the dependent and independent variables and their units.',
      ],
      illustrations: [
        { brief: 'Recording qualitative vs quantitative data', ready: true, diagram: { kind: 'bar-compare', unit: 'reading', items: [{ label: 'Qualitative', value: 4 }, { label: 'Quantitative', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I03-q1', type: 'mcq', prompt: 'Reading the bottom of the meniscus gives a more…', options: ['Precise liquid volume', 'Colourful result', 'Random number'], answer: 'Precise liquid volume', difficulty: 3 },
        { id: 'Y8-SCI-I03-q2', type: 'mcq', prompt: 'Adjusting microscope magnification lets you…', options: ['Observe specific cell structures clearly', 'Make cells bigger for real', 'Change cell colour'], answer: 'Observe specific cell structures clearly', difficulty: 2 },
        { id: 'Y8-SCI-I03-q3', type: 'mcq', prompt: 'Qualitative data is…', options: ['Descriptions, not numbers', 'Always exact measurements', 'Never recorded'], answer: 'Descriptions, not numbers', difficulty: 2 },
        { id: 'Y8-SCI-I03-q4', type: 'mcq', prompt: 'Quantitative data is…', options: ['Numbers with units', 'Feelings', 'Pictures only'], answer: 'Numbers with units', difficulty: 1 },
        { id: 'Y8-SCI-I03-q5', type: 'mcq', prompt: 'A data table should include…', options: ['Variables with names and units', 'Only random numbers', 'No labels'], answer: 'Variables with names and units', difficulty: 2 },
        { id: 'Y8-SCI-I03-q6', type: 'mcq', prompt: 'Digital tools help record data by…', options: ['Measuring and recording accurately and automatically', 'Replacing thinking entirely', 'Deleting results'], answer: 'Measuring and recording accurately and automatically', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I04',
    title: 'Representations & models',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Representations organise data: tables, line graphs (independent variable on the horizontal axis), energy flow diagrams for roller-coasters, maps for volcanoes and earthquakes, and models for things you cannot see.',
        'Every representation has strengths and limits. Physical models, diagrams and simulations each show some things well and others poorly, choosing the right one matters.',
      ],
      illustrations: [
        { brief: 'Energy flow diagram for a rocket launch', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Chemical (fuel)' }, { text: 'Kinetic (motion)' }, { text: 'Heat + sound' }] } },
        { brief: 'Comparing table, graph and model as representations', ready: true, diagram: { kind: 'bar-compare', unit: 'clarity', items: [{ label: 'Table', value: 5 }, { label: 'Graph', value: 8 }, { label: 'Model', value: 7 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I04-q1', type: 'mcq', prompt: 'In a line graph, the independent variable goes on the…', options: ['Horizontal axis', 'Vertical axis', 'Background'], answer: 'Horizontal axis', difficulty: 2 },
        { id: 'Y8-SCI-I04-q2', type: 'mcq', prompt: 'An energy flow diagram is good for showing…', options: ['Energy changes in a system', 'Exactly who did the experiment', 'The weather'], answer: 'Energy changes in a system', difficulty: 2 },
        { id: 'Y8-SCI-I04-q3', type: 'mcq', prompt: 'A map of volcanoes and earthquakes helps show…', options: ['Spatial patterns like plate boundaries', 'Taste preferences', 'Time of day'], answer: 'Spatial patterns like plate boundaries', difficulty: 2 },
        { id: 'Y8-SCI-I04-q4', type: 'mcq', prompt: 'A strength of a physical model is that it…', options: ['Makes an unseen idea tangible', 'Is always 100% accurate', 'Replaces all data'], answer: 'Makes an unseen idea tangible', difficulty: 2 },
        { id: 'Y8-SCI-I04-q5', type: 'mcq', prompt: 'Every representation has…', options: ['Strengths and limitations', 'Only strengths', 'No purpose'], answer: 'Strengths and limitations', difficulty: 3 },
        { id: 'Y8-SCI-I04-q6', type: 'mcq', prompt: 'A graph must be correctly drawn with…', options: ['A title and labelled axes', 'No labels', 'Pictures instead of numbers'], answer: 'A title and labelled axes', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I05',
    title: 'Analysing patterns in data',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Analysing data means spotting patterns, trends and relationships, and flagging anomalies. "Dropping a mass from a greater height produces a larger indentation" describes a relationship, then you ask whether it is causal.',
        'Measures of central tendency, mean, median and mode, summarise a data set, while outliers are values that stand apart and need investigating.',
      ],
      illustrations: [
        { brief: 'Mean / median / mode summary of a data set', ready: true, diagram: { kind: 'dot-plot', values: [4, 5, 5, 5, 6, 7, 12], unit: 'cm' } },
        { brief: 'Height-of-drop vs indentation relationship', ready: true, diagram: { kind: 'bar-compare', unit: 'indentation (mm)', items: [{ label: '10 cm', value: 2 }, { label: '20 cm', value: 5 }, { label: '30 cm', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I05-q1', type: 'mcq', prompt: 'The average of all data values is the…', options: ['Mean', 'Mode', 'Outlier'], answer: 'Mean', difficulty: 2 },
        { id: 'Y8-SCI-I05-q2', type: 'mcq', prompt: 'The most common value in a data set is the…', options: ['Mode', 'Median', 'Range'], answer: 'Mode', difficulty: 2 },
        { id: 'Y8-SCI-I05-q3', type: 'mcq', prompt: 'An anomaly is a data point that…', options: ['Stands apart from the pattern', 'Always fits perfectly', 'Is never noticed'], answer: 'Stands apart from the pattern', difficulty: 2 },
        { id: 'Y8-SCI-I05-q4', type: 'mcq', prompt: 'Greater drop height → larger indentation is a…', options: ['Relationship in the data', 'Random fact', 'Colour'], answer: 'Relationship in the data', difficulty: 1 },
        { id: 'Y8-SCI-I05-q5', type: 'mcq', prompt: 'A correlation in data does NOT by itself prove…', options: ['Causation', 'A measurement', 'A table'], answer: 'Causation', difficulty: 3 },
        { id: 'Y8-SCI-I05-q6', type: 'mcq', prompt: 'The median is the value…', options: ['In the middle when data is ordered', 'That occurs least', 'Always the largest'], answer: 'In the middle when data is ordered', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I06',
    title: 'Evaluating methods & claims',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Evaluate your methods: identify assumptions, possible sources of error (inconsistent controls, measurement mistakes), conflicting evidence and unanswered questions. Then explain how to improve.',
        'Compare results with other groups or sources, consistency strengthens a conclusion; conflicts and unanswered questions weaken it or point to more work.',
      ],
      illustrations: [
        { brief: 'Evaluation checklist: assumptions, error, conflict, gaps', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Assumptions?' }, { text: 'Sources of error?' }, { text: 'Conflicting evidence?' }, { text: 'Unanswered questions?' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I06-q1', type: 'mcq', prompt: 'An assumption is something you…', options: ['Take for granted to be true', 'Prove beyond doubt', 'Can never question'], answer: 'Take for granted to be true', difficulty: 2 },
        { id: 'Y8-SCI-I06-q2', type: 'mcq', prompt: 'Inconsistent variable control is a…', options: ['Source of error in the method', 'Great technique', 'Conclusion'], answer: 'Source of error in the method', difficulty: 2 },
        { id: 'Y8-SCI-I06-q3', type: 'mcq', prompt: 'Comparing your results with another group\u2019s can reveal…', options: ['Consistency or conflict in the evidence', 'The colour of data', 'Nothing useful'], answer: 'Consistency or conflict in the evidence', difficulty: 2 },
        { id: 'Y8-SCI-I06-q4', type: 'mcq', prompt: 'An unanswered question after an experiment means you should…', options: ['Note it for further investigation', 'Pretend it is answered', 'Give up on science'], answer: 'Note it for further investigation', difficulty: 2 },
        { id: 'Y8-SCI-I06-q5', type: 'mcq', prompt: 'A conclusion is stronger when it is…', options: ['Consistent across repeated and independent checks', 'Based on one lucky trial', 'Never questioned'], answer: 'Consistent across repeated and independent checks', difficulty: 3 },
        { id: 'Y8-SCI-I06-q6', type: 'mcq', prompt: 'The purpose of identifying sources of error is to…', options: ['Improve the method and judge the conclusion', 'Make the lab messy', 'Hide mistakes'], answer: 'Improve the method and judge the conclusion', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I07',
    title: 'Evidence-based arguments',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Build arguments from quality evidence. Evaluate the quality of primary and secondary sources, consider competing ideas and methods, and weigh differences in results before concluding.',
        'Using secondary data ethically means citing sources, respecting cultural protocols, and checking for personal information that could harm individuals.',
      ],
      illustrations: [
        { brief: 'Quality-evidence filter: source → validity → argument', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sources' }, { text: 'Check quality' }, { text: 'Weight evidence' }, { text: 'Argument' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I07-q1', type: 'mcq', prompt: 'A strong scientific argument is built on…', options: ['Quality evidence', 'Popular opinion', 'Loudness'], answer: 'Quality evidence', difficulty: 1 },
        { id: 'Y8-SCI-I07-q2', type: 'mcq', prompt: 'Primary data is data you…', options: ['Collect yourself', 'Borrow without asking', 'Never use'], answer: 'Collect yourself', difficulty: 2 },
        { id: 'Y8-SCI-I07-q3', type: 'mcq', prompt: 'Evaluating a claim means checking…', options: ['Whether the evidence really supports it', 'Only how famous it is', 'Its spelling'], answer: 'Whether the evidence really supports it', difficulty: 2 },
        { id: 'Y8-SCI-I07-q4', type: 'mcq', prompt: 'Competing ideas and different methods should be…', options: ['Considered before concluding', 'Ignored', 'Deleted from records'], answer: 'Considered before concluding', difficulty: 2 },
        { id: 'Y8-SCI-I07-q5', type: 'mcq', prompt: 'Respecting cultural protocols when citing secondary data means…', options: ['Following the conditions attached to sharing that knowledge', 'Copying freely', 'Never citing anyone'], answer: 'Following the conditions attached to sharing that knowledge', difficulty: 3 },
        { id: 'Y8-SCI-I07-q6', type: 'mcq', prompt: 'To support a claim like "all buildings in quake zones should be bamboo", you would need…', options: ['Evidence comparing materials under real conditions', 'A single opinion', 'No data at all'], answer: 'Evidence comparing materials under real conditions', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-SCI-I08',
    title: 'Writing & communicating science',
    year: '8',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S8I08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific writing uses careful language and structure. A report has sections for aim, method, results and discussion, and mentions assumptions and sources of error. Scientific articles often use passive voice ("the solution was heated").',
        'Match text features to audience and purpose: a persuasive text on artificial organs, a documentary on the dynamic geosphere, or a digital infographic comparing energy forms.',
      ],
      illustrations: [
        { brief: 'Report structure: aim → method → results → discussion', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Aim' }, { text: 'Method' }, { text: 'Results' }, { text: 'Discussion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-SCI-I08-q1', type: 'mcq', prompt: 'A scientific report usually includes…', options: ['Aim, method, results and discussion', 'Only the title', 'No structure at all'], answer: 'Aim, method, results and discussion', difficulty: 1 },
        { id: 'Y8-SCI-I08-q2', type: 'mcq', prompt: '"The solution was heated" is an example of…', options: ['Passive voice common in scientific writing', 'Active voice for stories', 'A question'], answer: 'Passive voice common in scientific writing', difficulty: 3 },
        { id: 'Y8-SCI-I08-q3', type: 'mcq', prompt: 'A persuasive text about artificial organs aims to…', options: ['Influence a specific audience with scientific reasoning', 'Only list dates', 'Confuse readers'], answer: 'Influence a specific audience with scientific reasoning', difficulty: 2 },
        { id: 'Y8-SCI-I08-q4', type: 'mcq', prompt: 'An infographic is a good way to…', options: ['Compare forms of energy visually', 'Hide all data', 'Avoid visuals'], answer: 'Compare forms of energy visually', difficulty: 2 },
        { id: 'Y8-SCI-I08-q5', type: 'mcq', prompt: 'Good scientific writing is…', options: ['Clear, accurate and honest', 'Vague and decorative', 'Filled with errors'], answer: 'Clear, accurate and honest', difficulty: 2 },
        { id: 'Y8-SCI-I08-q6', type: 'mcq', prompt: 'Selecting language for an audience means…', options: ['Matching complexity to the readers', 'Using the hardest words always', 'Using no words'], answer: 'Matching complexity to the readers', difficulty: 3 },
      ],
    },
  },
];
