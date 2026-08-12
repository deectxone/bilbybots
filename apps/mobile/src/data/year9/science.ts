import type { Topic } from '../../types/curriculum';

/**
 * Year 9 Science, full topic bank.
 * Source of truth: docs/content/year-7-10/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry; codes verified against ACARA v9.0
 * and the QCAA Years 7–10 Science sequence).
 * Each `AC9S9I02` topic carries `sensitivity: true` per the primary-school
 * convention, it touches Country/Place research-permission awareness, pending
 * a First Nations protocol review before release.
 */
export const YEAR9_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (7 CDs) ----------
  {
    id: 'Y9-SCI-U01',
    title: 'Body systems & feedback',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Body systems work together to respond to stimuli, light, temperature, danger or hunger. Electrical impulses in nerves and chemical hormones both carry messages, coordinating the whole body.',
        'A negative feedback mechanism keeps things stable: a receptor senses a change, a command centre compares it to a set point, and an effector corrects it. Think of temperature regulation or blood-sugar control by insulin.',
      ],
      illustrations: [
        { brief: 'Negative feedback loop: receptor → command centre → effector', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Receptor senses change' }, { text: 'Command centre compares' }, { text: 'Effector corrects' }, { text: 'Back to set point' }] } },
        { brief: 'Stimulus-response body-system coordination', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'brain', label: 'Brain' }, { icon: 'bolt', label: 'Nerve impulse' }, { icon: 'runner', label: 'Muscle responds' }], caption: 'Nerves and hormones coordinate responses' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U01-q1', type: 'mcq', prompt: 'A negative feedback mechanism aims to…', options: ['Return conditions to the set point', 'Increase changes forever', 'Stop all movement'], answer: 'Return conditions to the set point', difficulty: 2 },
        { id: 'Y9-SCI-U01-q2', type: 'mcq', prompt: 'The two main ways the body sends messages are…', options: ['Electrical impulses and hormones', 'Sounds and smells', 'Light and heat'], answer: 'Electrical impulses and hormones', difficulty: 2 },
        { id: 'Y9-SCI-U01-q3', type: 'mcq', prompt: 'In a feedback loop, the effector…', options: ['Carries out the correction', 'Senses the change', 'Compares the values'], answer: 'Carries out the correction', difficulty: 3 },
        { id: 'Y9-SCI-U01-q4', type: 'mcq', prompt: 'Insulin is a hormone that helps control…', options: ['Blood sugar levels', 'Ear size', 'Hair colour'], answer: 'Blood sugar levels', difficulty: 2 },
        { id: 'Y9-SCI-U01-q5', type: 'mcq', prompt: 'A disorder in a feedback system, like diabetes, affects…', options: ['The body\u2019s ability to regulate itself', 'The skeleton only', 'Nothing at all'], answer: 'The body\u2019s ability to regulate itself', difficulty: 3 },
        { id: 'Y9-SCI-U01-q6', type: 'mcq', prompt: 'When you move into the shade on a hot day, your body uses feedback to…', options: ['Maintain a stable internal temperature', 'Stop producing energy', 'Grow fur'], answer: 'Maintain a stable internal temperature', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U02',
    title: 'Reproduction & survival of species',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Sexual reproduction needs two gametes (sperm and egg) to join, mixing genes and creating variation. Asexual reproduction makes genetically identical offspring from one parent, like many plants can do.',
        'Reproductive strategies relate to environment: species with little parental care often produce many offspring, while those that care for young (like humans) produce few. Variation from sexual reproduction helps species survive change.',
      ],
      illustrations: [
        { brief: 'Sexual vs asexual reproduction comparison', ready: true, diagram: { kind: 'balance-scale', left: 'Sexual: two parents, variation', right: 'Asexual: one parent, clones', balanced: true } },
        { brief: 'Offspring number vs parental care trade-off', ready: true, diagram: { kind: 'bar-compare', unit: 'offspring', items: [{ label: 'Many eggs, no care', value: 9 }, { label: 'Few young, care', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U02-q1', type: 'mcq', prompt: 'Sexual reproduction involves…', options: ['Two gametes joining to mix genes', 'Only one parent', 'No genes at all'], answer: 'Two gametes joining to mix genes', difficulty: 2 },
        { id: 'Y9-SCI-U02-q2', type: 'mcq', prompt: 'Asexual reproduction produces offspring that are…', options: ['Genetically identical to the parent', 'Always different', 'Never alive'], answer: 'Genetically identical to the parent', difficulty: 2 },
        { id: 'Y9-SCI-U02-q3', type: 'mcq', prompt: 'Sexual reproduction creates more variation, which helps a species…', options: ['Survive a changing environment', 'Grow faster in one spot', 'Hide from everything'], answer: 'Survive a changing environment', difficulty: 2 },
        { id: 'Y9-SCI-U02-q4', type: 'mcq', prompt: 'The form of sperm and eggs is related to their…', options: ['Function in reproduction', 'Colour', 'Smell'], answer: 'Function in reproduction', difficulty: 3 },
        { id: 'Y9-SCI-U02-q5', type: 'mcq', prompt: 'Species with little parental care usually produce…', options: ['Many offspring', 'Very few offspring', 'No offspring'], answer: 'Many offspring', difficulty: 2 },
        { id: 'Y9-SCI-U02-q6', type: 'mcq', prompt: 'Strawberries can reproduce asexually by runners, new plants are…', options: ['Clones of the parent', 'A mix of two parents', 'A new species'], answer: 'Clones of the parent', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U03',
    title: 'The carbon cycle',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Carbon moves between Earth\u2019s spheres, geosphere, biosphere, hydrosphere and atmosphere. Photosynthesis takes carbon dioxide from the air into plants; respiration returns it; combustion (burning) releases stored carbon quickly.',
        'Human activity like burning fossil fuels has pushed more carbon into the atmosphere, strengthening the greenhouse effect and warming the planet. Natural and technological capture (sequestration) can help draw it back down.',
      ],
      illustrations: [
        { brief: 'Carbon cycle loop: atmosphere ↔ plants ↔ animals ↔ fossil fuels', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'CO2 in air' }, { text: 'Photosynthesis (plants)' }, { text: 'Food chain (animals)' }, { text: 'Respiration + combustion' }] } },
        { brief: 'CO2 rise from human activity over time', ready: true, diagram: { kind: 'bar-compare', unit: 'CO2', items: [{ label: 'Pre-industrial', value: 2 }, { label: 'Today', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U03-q1', type: 'mcq', prompt: 'Photosynthesis removes…', options: ['Carbon dioxide from the air', 'Oxygen from the air', 'Soil from the ground'], answer: 'Carbon dioxide from the air', difficulty: 2 },
        { id: 'Y9-SCI-U03-q2', type: 'mcq', prompt: 'Respiration in animals returns…', options: ['Carbon dioxide to the atmosphere', 'Nothing to the air', 'Only oxygen'], answer: 'Carbon dioxide to the atmosphere', difficulty: 2 },
        { id: 'Y9-SCI-U03-q3', type: 'mcq', prompt: 'Burning fossil fuels adds…', options: ['Extra carbon to the atmosphere', 'Less carbon everywhere', 'No change'], answer: 'Extra carbon to the atmosphere', difficulty: 1 },
        { id: 'Y9-SCI-U03-q4', type: 'mcq', prompt: 'Earth\u2019s spheres include the…', options: ['Geosphere, biosphere, hydrosphere and atmosphere', 'Stratosphere only', 'Biosphere only'], answer: 'Geosphere, biosphere, hydrosphere and atmosphere', difficulty: 2 },
        { id: 'Y9-SCI-U03-q5', type: 'mcq', prompt: 'The greenhouse effect keeps Earth…', options: ['Warm enough to support life', 'Frozen solid', 'Empty of air'], answer: 'Warm enough to support life', difficulty: 2 },
        { id: 'Y9-SCI-U03-q6', type: 'mcq', prompt: 'Carbon sequestration means…', options: ['Capturing and storing carbon', 'Releasing more carbon', 'Turning carbon into gold'], answer: 'Capturing and storing carbon', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U04',
    title: 'Energy transfer: waves & particles',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Energy moves through materials in ways the particle model explains: conduction passes heat through solids by vibrating particles, and convection carries heat in liquids and gases as warmer fluid rises. Sound travels as waves through a medium.',
        'Light can behave as waves and as particles (photons). The particle model also explains electricity, moving charged particles, and how voltage, conductors and insulators work.',
      ],
      illustrations: [
        { brief: 'Conduction, convection and radiation comparison', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Conduction (solids)' }, { text: 'Convection (fluids)' }, { text: 'Radiation (waves)' }] } },
        { brief: 'Heat transfer through different materials', ready: true, diagram: { kind: 'bar-compare', unit: 'heat lost', items: [{ label: 'Metal spoon', value: 9 }, { label: 'Wood spoon', value: 4 }, { label: 'Plastic spoon', value: 3 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U04-q1', type: 'mcq', prompt: 'Conduction transfers heat mainly through…', options: ['Solids via vibrating particles', 'Empty space', 'Colour'], answer: 'Solids via vibrating particles', difficulty: 2 },
        { id: 'Y9-SCI-U04-q2', type: 'mcq', prompt: 'Convection happens when warmer fluid…', options: ['Rises and cooler fluid sinks', 'Stays perfectly still', 'Disappears'], answer: 'Rises and cooler fluid sinks', difficulty: 2 },
        { id: 'Y9-SCI-U04-q3', type: 'mcq', prompt: 'Sound needs a… to travel through.', options: ['Medium (material)', 'Vacuum', 'Light source'], answer: 'Medium (material)', difficulty: 2 },
        { id: 'Y9-SCI-U04-q4', type: 'mcq', prompt: 'Light energy can be described as…', options: ['Waves and as particles (photons)', 'Only solid chunks', 'Pure sound'], answer: 'Waves and as particles (photons)', difficulty: 3 },
        { id: 'Y9-SCI-U04-q5', type: 'mcq', prompt: 'The particle model of electricity explains current as…', options: ['Moving charged particles', 'Frozen charges', 'Sound waves'], answer: 'Moving charged particles', difficulty: 3 },
        { id: 'Y9-SCI-U04-q6', type: 'mcq', prompt: 'A metal spoon heats up faster than a plastic one because metal…', options: ['Conducts heat better', 'Is lighter', 'Is colourful'], answer: 'Conducts heat better', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U05',
    title: 'Conservation of energy & efficiency',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The law of conservation of energy says energy is never created or destroyed, it is only transferred or transformed. But in every change, some energy becomes less usable (usually heat), so no system is 100% efficient.',
        'Efficiency compares useful output to total input. Sankey diagrams show energy flowing in and splitting into useful output and wasted energy. Improving efficiency saves energy and money.',
      ],
      illustrations: [
        { brief: 'Sankey-style flow: input → useful output + wasted heat', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Energy in' }, { text: 'Useful output' }, { text: 'Wasted heat' }] } },
        { brief: 'Efficiency comparison of energy sources', ready: true, diagram: { kind: 'bar-compare', unit: 'efficiency %', items: [{ label: 'Coal', value: 4 }, { label: 'Gas', value: 6 }, { label: 'Solar', value: 7 }, { label: 'Hydro', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U05-q1', type: 'mcq', prompt: 'The law of conservation of energy states that energy…', options: ['Is never created or destroyed', 'Disappears when used', 'Is only created in power plants'], answer: 'Is never created or destroyed', difficulty: 2 },
        { id: 'Y9-SCI-U05-q2', type: 'mcq', prompt: 'A system that is not 100% efficient loses energy mainly as…', options: ['Heat', 'Light', 'Sound only'], answer: 'Heat', difficulty: 2 },
        { id: 'Y9-SCI-U05-q3', type: 'mcq', prompt: 'Efficiency is the ratio of…', options: ['Useful output to total input', 'Input to time', 'Cost to speed'], answer: 'Useful output to total input', difficulty: 3 },
        { id: 'Y9-SCI-U05-q4', type: 'mcq', prompt: 'A Sankey diagram shows…', options: ['Energy input, outputs and waste flows', 'Only costs', 'Weather patterns'], answer: 'Energy input, outputs and waste flows', difficulty: 2 },
        { id: 'Y9-SCI-U05-q5', type: 'mcq', prompt: 'An appliance with a higher energy star rating…', options: ['Is more efficient, wasting less energy', 'Always costs more to run', 'Runs hotter'], answer: 'Is more efficient, wasting less energy', difficulty: 2 },
        { id: 'Y9-SCI-U05-q6', type: 'mcq', prompt: 'Improving efficiency in a machine means…', options: ['Getting more useful output from the same input', 'Adding more wasted heat', 'Making it slower'], answer: 'Getting more useful output from the same input', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U06',
    title: 'The atom & radioactivity',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Our model of the atom changed as experiments found electrons, protons and neutrons. Protons are positive, electrons are negative and light, neutrons are neutral. Isotopes are atoms of the same element with different numbers of neutrons, some are unstable.',
        'Unstable isotopes decay radioactively, releasing alpha, beta or gamma radiation until they become stable. Half-life is the time for half the atoms to decay, carbon-14 dating uses this, and radioisotopes treat cancer and test materials.',
      ],
      illustrations: [
        { brief: 'Atom model: protons, neutrons, electrons', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'orbit', label: 'Electrons' }, { icon: 'cube', label: 'Protons + neutrons' }], caption: 'Tiny nucleus, orbiting electrons' } },
        { brief: 'Radioactive decay over time (half-life)', ready: true, diagram: { kind: 'bar-compare', unit: 'atoms left', items: [{ label: 'Start', value: 8 }, { label: '1 half-life', value: 4 }, { label: '2 half-lives', value: 2 }, { label: '3 half-lives', value: 1 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U06-q1', type: 'mcq', prompt: 'Protons are…', options: ['Positively charged', 'Negatively charged', 'Neutral'], answer: 'Positively charged', difficulty: 1 },
        { id: 'Y9-SCI-U06-q2', type: 'mcq', prompt: 'Electrons are…', options: ['Negative and very light', 'Positive and heavy', 'The same as neutrons'], answer: 'Negative and very light', difficulty: 2 },
        { id: 'Y9-SCI-U06-q3', type: 'mcq', prompt: 'Isotopes are atoms of the same element with different numbers of…', options: ['Neutrons', 'Protons', 'Electrons only'], answer: 'Neutrons', difficulty: 2 },
        { id: 'Y9-SCI-U06-q4', type: 'mcq', prompt: 'Half-life is the time for…', options: ['Half the atoms to decay', 'All atoms to vanish', 'The atom to grow'], answer: 'Half the atoms to decay', difficulty: 2 },
        { id: 'Y9-SCI-U06-q5', type: 'mcq', prompt: 'Radioactivity is used in medicine to…', options: ['Diagnose and treat conditions like cancer', 'Grow hair', 'Cook dinner'], answer: 'Diagnose and treat conditions like cancer', difficulty: 2 },
        { id: 'Y9-SCI-U06-q6', type: 'mcq', prompt: 'Radiocarbon dating can establish that First Peoples have lived in Australia…', options: ['For more than 60,000 years', 'For 100 years', 'Since last Tuesday'], answer: 'For more than 60,000 years', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-U07',
    title: 'Chemical reactions & mass',
    year: '9',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S9U07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In a chemical reaction, atoms rearrange but none are created or destroyed, that is the law of conservation of mass. In a closed system, the total mass before and after a reaction is equal.',
        'Balanced equations represent this: the same number of atoms of each element on both sides. Reactants become products, shown with word equations or symbols.',
      ],
      illustrations: [
        { brief: 'Mass conservation: reactants → products (same atoms)', ready: true, diagram: { kind: 'balance-scale', left: 'Reactants', right: 'Products', balanced: true } },
        { brief: 'Word to balanced equation steps', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Reactants' }, { text: 'Atoms rearrange' }, { text: 'Products' }, { text: 'Mass conserved' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-U07-q1', type: 'mcq', prompt: 'In a chemical reaction, atoms are…', options: ['Rearranged, not created or destroyed', 'Created from nothing', 'Destroyed'], answer: 'Rearranged, not created or destroyed', difficulty: 2 },
        { id: 'Y9-SCI-U07-q2', type: 'mcq', prompt: 'A balanced equation must have the same number of…', options: ['Each type of atom on both sides', 'Letters on both sides', 'Smiley faces'], answer: 'Each type of atom on both sides', difficulty: 3 },
        { id: 'Y9-SCI-U07-q3', type: 'mcq', prompt: 'In a closed system, total mass before and after a reaction is…', options: ['Equal (conserved)', 'Always doubled', 'Random'], answer: 'Equal (conserved)', difficulty: 2 },
        { id: 'Y9-SCI-U07-q4', type: 'mcq', prompt: 'The substances that react are called…', options: ['Reactants', 'Products', 'Catalysts'], answer: 'Reactants', difficulty: 1 },
        { id: 'Y9-SCI-U07-q5', type: 'mcq', prompt: 'The substances formed by a reaction are called…', options: ['Products', 'Reactants', 'Reagents'], answer: 'Products', difficulty: 1 },
        { id: 'Y9-SCI-U07-q6', type: 'mcq', prompt: 'Most elements are not found pure in nature because they…', options: ['Have reacted to form compounds', 'Are imaginary', 'Sink underground'], answer: 'Have reacted to form compounds', difficulty: 3 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (4 CDs) ----------
  {
    id: 'Y9-SCI-H01',
    title: 'Publication & peer review',
    year: '9',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S9H01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific knowledge is validated and refined through publication and peer review. Scientists submit findings to journals, where other experts check the work before it is published, and papers can be rejected if the evidence is weak.',
        'Marshall and Warren\u2019s discovery that bacteria cause stomach ulcers was first rejected, then later validated. Peer review keeps the record honest, though it is not perfect.',
      ],
      illustrations: [
        { brief: 'Peer review pipeline: submit → review → accept/revise → publish', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Submit paper' }, { text: 'Expert peer review' }, { text: 'Revise / accept' }, { text: 'Publish + share' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-H01-q1', type: 'mcq', prompt: 'Peer review means other experts…', options: ['Check the work before publication', 'Sign the paper for money', 'Never look at it'], answer: 'Check the work before publication', difficulty: 2 },
        { id: 'Y9-SCI-H01-q2', type: 'mcq', prompt: 'A paper can be… if the evidence is weak.', options: ['Rejected or sent back for revision', 'Always accepted', 'Published unchanged'], answer: 'Rejected or sent back for revision', difficulty: 2 },
        { id: 'Y9-SCI-H01-q3', type: 'mcq', prompt: 'Marshall and Warren\u2019s ulcer findings were…', options: ['First rejected, then later validated', 'Accepted instantly', 'Never tested'], answer: 'First rejected, then later validated', difficulty: 3 },
        { id: 'Y9-SCI-H01-q4', type: 'mcq', prompt: 'Publication helps scientific knowledge by…', options: ['Sharing findings for others to check and build on', 'Keeping results secret', 'Deleting old ideas'], answer: 'Sharing findings for others to check and build on', difficulty: 2 },
        { id: 'Y9-SCI-H01-q5', type: 'mcq', prompt: 'Scientific consensus (like on global warming) is built from…', options: ['Many independent lines of evidence', 'One unverified post', 'Popularity'], answer: 'Many independent lines of evidence', difficulty: 3 },
        { id: 'Y9-SCI-H01-q6', type: 'mcq', prompt: 'The main purpose of peer review is to…', options: ['Improve reliability and validity of published work', 'Slow science down forever', 'Hide results'], answer: 'Improve reliability and validity of published work', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-H02',
    title: 'Science, technology & engineering',
    year: '9',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S9H02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Advances in technology enable advances in science, imaging lets us watch body systems work, and science drives new technologies and engineering, from the cochlear implant to wi-fi, both pioneered in Australia.',
        'This is a two-way street: better instruments reveal more, and new understanding builds better machines.',
      ],
      illustrations: [
        { brief: 'Technology ↔ science feedback loop', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'New technology' }, { text: 'New observations' }, { text: 'New understanding' }, { text: 'Better technology' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-H02-q1', type: 'mcq', prompt: 'Imaging technologies have improved understanding of…', options: ['Body systems and their interactions', 'The weather', 'Shoe design'], answer: 'Body systems and their interactions', difficulty: 2 },
        { id: 'Y9-SCI-H02-q2', type: 'mcq', prompt: 'The cochlear implant, pioneered by Professor Graeme Clark, is an example of…', options: ['Science contributing to engineering/technology', 'A food recipe', 'A dance move'], answer: 'Science contributing to engineering/technology', difficulty: 2 },
        { id: 'Y9-SCI-H02-q3', type: 'mcq', prompt: 'Wi-fi was invented by CSIRO and Dr John O\u2019Sullivan as a result of…', options: ['Radioastronomy research', 'A cooking experiment', 'A sporting accident'], answer: 'Radioastronomy research', difficulty: 3 },
        { id: 'Y9-SCI-H02-q4', type: 'mcq', prompt: 'The relationship between science and technology is…', options: ['Two-way: each enables the other', 'One-way only', 'Nonexistent'], answer: 'Two-way: each enables the other', difficulty: 3 },
        { id: 'Y9-SCI-H02-q5', type: 'mcq', prompt: 'Electromagnetic radiation\u2019s properties relate to its uses in…', options: ['Radar, medicine and mobile communications', 'Only cooking', 'Nothing'], answer: 'Radar, medicine and mobile communications', difficulty: 3 },
        { id: 'Y9-SCI-H02-q6', type: 'mcq', prompt: 'Modern technology lets scientists explore energy conversion…', options: ['At scales from black holes to atoms', 'Only on Earth\u2019s surface', 'Never'], answer: 'At scales from black holes to atoms', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-H03',
    title: 'How science is adopted by society',
    year: '9',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S9H03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific knowledge is adopted when factors line up: clear benefits, community involvement, government support and public awareness. Citizen science projects grow because people want to help; Landcare supports land restoration.',
        'Solar panels spread as they became cheaper and more valued; First Nations fire-management knowledge is being adopted because it works. Understanding why people adopt science helps it have impact.',
      ],
      illustrations: [
        { brief: 'Adoption factors: benefit + support + community + awareness', ready: true, diagram: { kind: 'bar-compare', unit: 'influence', items: [{ label: 'Clear benefit', value: 9 }, { label: 'Government support', value: 6 }, { label: 'Community involvement', value: 7 }] } },
        { brief: 'Solar adoption rising over time', ready: true, diagram: { kind: 'bar-compare', unit: 'adoption', items: [{ label: 'Early', value: 2 }, { label: 'Now', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-H03-q1', type: 'mcq', prompt: 'People join citizen science projects because…', options: ['They want to contribute to research and community', 'They are paid to', 'They must'], answer: 'They want to contribute to research and community', difficulty: 2 },
        { id: 'Y9-SCI-H03-q2', type: 'mcq', prompt: 'Solar panels became widely adopted as they…', options: ['Became cheaper and more valued', 'Stayed expensive forever', 'Got banned'], answer: 'Became cheaper and more valued', difficulty: 2 },
        { id: 'Y9-SCI-H03-q3', type: 'mcq', prompt: 'Landcare is an example of…', options: ['Government initiatives supporting good practices', 'A fast-food chain', 'A music genre'], answer: 'Government initiatives supporting good practices', difficulty: 2 },
        { id: 'Y9-SCI-H03-q4', type: 'mcq', prompt: 'First Nations fire-management practices are being adopted because…', options: ['They are proven and effective', 'They are fashionable', 'They are cheap'], answer: 'They are proven and effective', difficulty: 3 },
        { id: 'Y9-SCI-H03-q5', type: 'mcq', prompt: 'Widespread recycling was driven partly by…', options: ['Environmental concern and understanding of materials', 'Boredom', 'New colours'], answer: 'Environmental concern and understanding of materials', difficulty: 2 },
        { id: 'Y9-SCI-H03-q6', type: 'mcq', prompt: 'Science is adopted more broadly when…', options: ['Society sees clear value and support exists', 'It is hidden from everyone', 'Nobody cares'], answer: 'Society sees clear value and support exists', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-H04',
    title: 'Society\u2019s values shape research',
    year: '9',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S9H04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The values and needs of society influence what science is done. Governments decide which research to fund; the need to cut greenhouse gas emissions drives new energy research; safety concerns drive better materials.',
        'Sometimes research follows a societal push (like IVF and embryo selection), and sometimes new capabilities raise questions about how they should be used.',
      ],
      illustrations: [
        { brief: 'Needs → funding → research focus flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Societal need' }, { text: 'Funding decisions' }, { text: 'Research focus' }, { text: 'Solutions' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-H04-q1', type: 'mcq', prompt: 'Who decides much of which scientific research is funded?', options: ['Governments and organisations', 'Nobody', 'Only weather forecasters'], answer: 'Governments and organisations', difficulty: 2 },
        { id: 'Y9-SCI-H04-q2', type: 'mcq', prompt: 'The need to reduce greenhouse gases has driven research into…', options: ['Cleaner energy and new materials', 'Faster running', 'Louder music'], answer: 'Cleaner energy and new materials', difficulty: 2 },
        { id: 'Y9-SCI-H04-q3', type: 'mcq', prompt: 'Society\u2019s values can shape…', options: ['Which questions science explores', 'The laws of physics', 'The colour of the sky'], answer: 'Which questions science explores', difficulty: 3 },
        { id: 'Y9-SCI-H04-q4', type: 'mcq', prompt: 'Assisted reproductive technologies became common partly because…', options: ['Many families valued the ability to have children', 'They were free', 'They were required by law'], answer: 'Many families valued the ability to have children', difficulty: 3 },
        { id: 'Y9-SCI-H04-q5', type: 'mcq', prompt: 'Safer workplace sound levels came from research driven by…', options: ['Concern for worker health', 'Music preferences', 'Noise complaints only'], answer: 'Concern for worker health', difficulty: 2 },
        { id: 'Y9-SCI-H04-q6', type: 'mcq', prompt: 'Research priorities can change when society\u2019s needs change because…', options: ['Funding and focus follow what society values', 'Science ignores society', 'Research never changes'], answer: 'Funding and focus follow what society values', difficulty: 3 },
      ],
    },
  },
  // ---------- Science Inquiry (8 CDs) ----------
  {
    id: 'Y9-SCI-I01',
    title: 'Investigable questions & hypotheses',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An investigable question can be answered with data, "How does exercise intensity affect heart rate?" A reasoned prediction and hypothesis must be testable and have a scientific reason.',
        'A hypothesis has to be able to be supported or refuted by evidence. "If objects of different temperatures touch, heat transfers from hot to cold until they match" is a testable hypothesis.',
      ],
      illustrations: [
        { brief: 'Hypothesis testing loop: predict → test → support/refute', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Predict' }, { text: 'Test' }, { text: 'Evidence' }, { text: 'Support or refute' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I01-q1', type: 'mcq', prompt: 'A scientific hypothesis must be…', options: ['Testable and refutable by evidence', 'Always true', 'A mystery'], answer: 'Testable and refutable by evidence', difficulty: 2 },
        { id: 'Y9-SCI-I01-q2', type: 'mcq', prompt: '"How does exercise intensity affect heart rate?" is an…', options: ['Investigable question', 'Unanswerable question', 'Opinion'], answer: 'Investigable question', difficulty: 1 },
        { id: 'Y9-SCI-I01-q3', type: 'mcq', prompt: 'A reasoned prediction is based on…', options: ['Scientific reasoning and prior knowledge', 'Pure luck', 'A coin toss'], answer: 'Scientific reasoning and prior knowledge', difficulty: 2 },
        { id: 'Y9-SCI-I01-q4', type: 'mcq', prompt: 'Heat transfers from hot to cold until temperatures match, this is a…', options: ['Testable hypothesis', 'Slogan', 'Fashion'], answer: 'Testable hypothesis', difficulty: 2 },
        { id: 'Y9-SCI-I01-q5', type: 'mcq', prompt: 'If evidence refutes your hypothesis, you should…', options: ['Revise your explanation', 'Ignore the data', 'Stop asking questions'], answer: 'Revise your explanation', difficulty: 2 },
        { id: 'Y9-SCI-I01-q6', type: 'mcq', prompt: 'Explanatory models (like the particle model) help scientists…', options: ['Form testable predictions and hypotheses', 'Avoid experiments', 'Hide data'], answer: 'Form testable predictions and hypotheses', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I02',
    title: 'Valid, reproducible investigations',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'A valid investigation measures what it claims to and controls for sources of error; a reproducible one can be repeated with similar results. You plan methods, follow risk assessments, and consider ethical issues.',
        'Respect Country/Place: recognise First Nations heritage laws, report new sites or artefacts, and understand the consequences of disturbing heritage sites.',
      ],
      illustrations: [
        { brief: 'Validity + reproducibility checklist', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Controls error' }, { text: 'Measures what it claims' }, { text: 'Repeatable' }, { text: 'Ethical + safe' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I02-q1', type: 'mcq', prompt: 'A valid investigation measures…', options: ['What it claims to measure, controlling for error', 'Anything at all', 'Only the weather'], answer: 'What it claims to measure, controlling for error', difficulty: 2 },
        { id: 'Y9-SCI-I02-q2', type: 'mcq', prompt: 'Reproducibility means…', options: ['Repeating gives similar results', 'Results change every time', 'No one can repeat it'], answer: 'Repeating gives similar results', difficulty: 2 },
        { id: 'Y9-SCI-I02-q3', type: 'mcq', prompt: 'A risk assessment is done…', options: ['Before and while conducting investigations', 'Never', 'After results are lost'], answer: 'Before and while conducting investigations', difficulty: 2 },
        { id: 'Y9-SCI-I02-q4', type: 'mcq', prompt: 'Ethical considerations matter when an investigation involves…', options: ['Animals and biological materials', 'Only numbers', 'Nothing alive'], answer: 'Animals and biological materials', difficulty: 2 },
        { id: 'Y9-SCI-I02-q5', type: 'mcq', prompt: 'If you find an unregistered First Nations artefact, the responsible action is to…', options: ['Report it and avoid disturbing it', 'Take it home', 'Dig around it'], answer: 'Report it and avoid disturbing it', difficulty: 3 },
        { id: 'Y9-SCI-I02-q6', type: 'mcq', prompt: 'Controlling for sources of error improves…', options: ['The validity of conclusions', 'The colour of the graph', 'Nothing'], answer: 'The validity of conclusions', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I03',
    title: 'Precise measurement & sample size',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Precision comes from choosing the right instrument and recording correctly, an electronic balance for mass, the right scale for a data logger, correct significant figures and scientific notation.',
        'Sample size matters: more data points give a more reliable average, and digital tools help collect large, replicable samples efficiently.',
      ],
      illustrations: [
        { brief: 'Sample-size effect on reliability', ready: true, diagram: { kind: 'bar-compare', unit: 'reliability', items: [{ label: 'Small sample', value: 3 }, { label: 'Large sample', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I03-q1', type: 'mcq', prompt: 'An electronic balance measures…', options: ['Mass precisely', 'Volume by eye', 'Colour'], answer: 'Mass precisely', difficulty: 2 },
        { id: 'Y9-SCI-I03-q2', type: 'mcq', prompt: 'Significant figures refer to…', options: ['How precisely a value is recorded', 'How big the number is', 'Font size'], answer: 'How precisely a value is recorded', difficulty: 3 },
        { id: 'Y9-SCI-I03-q3', type: 'mcq', prompt: 'A larger sample size generally gives…', options: ['More reliable data', 'Less reliable data', 'Identical data'], answer: 'More reliable data', difficulty: 2 },
        { id: 'Y9-SCI-I03-q4', type: 'mcq', prompt: 'A measuring cylinder is more accurate than a pipette for…', options: ['Rough volumes; a pipette is more precise', 'Nothing', 'Weighing'], answer: 'Rough volumes; a pipette is more precise', difficulty: 3 },
        { id: 'Y9-SCI-I03-q5', type: 'mcq', prompt: 'Replicable data means another person can…', options: ['Repeat the measurements and get similar values', 'Never touch the data', 'Guess the answers'], answer: 'Repeat the measurements and get similar values', difficulty: 2 },
        { id: 'Y9-SCI-I03-q6', type: 'mcq', prompt: 'Digital tools help data collection by…', options: ['Making larger sample sizes efficient', 'Removing the need for data', 'Hiding errors'], answer: 'Making larger sample sizes efficient', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I04',
    title: 'Processing data & models',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Representations organise data for analysis: spreadsheets for tables and graphs, descriptive statistics (mean, median, range) for summaries, and models or equations for relationships.',
        'Choose the right summary for the job, sometimes the mean is best, sometimes the range matters more. Sankey diagrams and balanced equations each represent energy or mass relationships in their own useful way.',
      ],
      illustrations: [
        { brief: 'Mean, median and range on a data set', ready: true, diagram: { kind: 'dot-plot', values: [3, 4, 4, 5, 6, 6, 6, 9], unit: 'values' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I04-q1', type: 'mcq', prompt: 'Spreadsheets are useful for…', options: ['Presenting data in tables and graphs', 'Growing plants', 'Predicting dreams'], answer: 'Presenting data in tables and graphs', difficulty: 2 },
        { id: 'Y9-SCI-I04-q2', type: 'mcq', prompt: 'Descriptive statistics include…', options: ['Mean, median and range', 'Only the biggest value', 'Colours'], answer: 'Mean, median and range', difficulty: 2 },
        { id: 'Y9-SCI-I04-q3', type: 'mcq', prompt: 'The mean is most useful when you want…', options: ['A typical value of the data', 'The fastest value', 'The prettiest value'], answer: 'A typical value of the data', difficulty: 2 },
        { id: 'Y9-SCI-I04-q4', type: 'mcq', prompt: 'A Sankey diagram represents…', options: ['Energy transfer ratios (usable vs waste)', 'DNA sequences', 'Weather maps'], answer: 'Energy transfer ratios (usable vs waste)', difficulty: 3 },
        { id: 'Y9-SCI-I04-q5', type: 'mcq', prompt: 'Choosing the right representation helps…', options: ['Reveal patterns clearly', 'Hide the data', 'Slow down analysis'], answer: 'Reveal patterns clearly', difficulty: 2 },
        { id: 'Y9-SCI-I04-q6', type: 'mcq', prompt: 'The range shows…', options: ['How spread out the values are', 'The middle value', 'The mode'], answer: 'How spread out the values are', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I05',
    title: 'Analysing & connecting data',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Connecting data from different sources reveals patterns, trends and anomalies. Atmospheric monitoring and ice cores both show rising carbon dioxide; published sound-level data and your own measurements can be compared.',
        'Extrapolating from a graph needs care, you can predict beyond the data, but only if the pattern holds. Look for proportional relationships, like halving heat transfer when insulation doubles.',
      ],
      illustrations: [
        { brief: 'Two sources, one trend: atmospheric + ice-core CO2', ready: true, diagram: { kind: 'bar-compare', unit: 'CO2', items: [{ label: 'Ice core', value: 3 }, { label: 'Modern monitoring', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I05-q1', type: 'mcq', prompt: 'Connecting multiple data sources helps…', options: ['Confirm patterns and spot anomalies', 'Create more confusion', 'Reduce data'], answer: 'Confirm patterns and spot anomalies', difficulty: 2 },
        { id: 'Y9-SCI-I05-q2', type: 'mcq', prompt: 'Ice cores and modern monitoring both show…', options: ['Rising carbon dioxide trends', 'Falling temperatures always', 'No change'], answer: 'Rising carbon dioxide trends', difficulty: 2 },
        { id: 'Y9-SCI-I05-q3', type: 'mcq', prompt: 'Extrapolating from a graph means…', options: ['Predicting beyond the data range', 'Ignoring the graph', 'Deleting points'], answer: 'Predicting beyond the data range', difficulty: 3 },
        { id: 'Y9-SCI-I05-q4', type: 'mcq', prompt: 'When insulation thickness doubles and heat transfer halves, that is a…', options: ['Proportional relationship', 'Coincidence', 'Miracle'], answer: 'Proportional relationship', difficulty: 3 },
        { id: 'Y9-SCI-I05-q5', type: 'mcq', prompt: 'An anomaly in atmospheric data should be…', options: ['Investigated, not simply ignored', 'Hidden', 'Celebrated'], answer: 'Investigated, not simply ignored', difficulty: 2 },
        { id: 'Y9-SCI-I05-q6', type: 'mcq', prompt: 'Comparing published data with your own measurements can…', options: ['Reveal trends or inconsistencies between them', 'Prove your data is perfect', 'End science'], answer: 'Reveal trends or inconsistencies between them', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I06',
    title: 'Assessing validity & claims',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Assess the validity and reproducibility of methods, and evaluate conclusions and claims by identifying assumptions, conflicting evidence and areas of uncertainty.',
        'Question things taken for granted: "facts" or premises assumed true. If the method is not valid or reproducible, the conclusion is weaker. Recognising uncertainty can point to alternative conclusions.',
      ],
      illustrations: [
        { brief: 'Assumption-checking: is that premise reasonable?', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Identify assumption' }, { text: 'Is it reasonable?' }, { text: 'Effect on conclusion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I06-q1', type: 'mcq', prompt: 'Validity of a conclusion depends on…', options: ['The validity and reproducibility of the method', 'Its popularity', 'Its length'], answer: 'The validity and reproducibility of the method', difficulty: 2 },
        { id: 'Y9-SCI-I06-q2', type: 'mcq', prompt: 'An assumption is a premise…', options: ['Taken for granted to be true', 'Proven beyond doubt', 'Never questioned'], answer: 'Taken for granted to be true', difficulty: 2 },
        { id: 'Y9-SCI-I06-q3', type: 'mcq', prompt: 'Conflicting evidence should make you…', options: ['Re-examine the conclusion', 'Ignore the evidence', 'Double your claim'], answer: 'Re-examine the conclusion', difficulty: 2 },
        { id: 'Y9-SCI-I06-q4', type: 'mcq', prompt: 'Areas of uncertainty mean a conclusion might be…', options: ['Less certain, possibly with alternatives', 'Definitely final', 'Useless'], answer: 'Less certain, possibly with alternatives', difficulty: 3 },
        { id: 'Y9-SCI-I06-q5', type: 'mcq', prompt: 'Weaknesses or gaps in a conclusion relate to…', options: ['The method\u2019s validity and reproducibility', 'The graph\u2019s colour', 'The font used'], answer: 'The method\u2019s validity and reproducibility', difficulty: 3 },
        { id: 'Y9-SCI-I06-q6', type: 'mcq', prompt: 'Evaluating whether an assumption is reasonable helps judge…', options: ['How much the conclusion can be trusted', 'Who wrote the report', 'The weather'], answer: 'How much the conclusion can be trusted', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I07',
    title: 'Arguments from evidence',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Construct arguments from a variety of evidence. Check the credibility of secondary sources, look for multiple consistent lines of evidence (like vaccine effectiveness), and interrogate the reasoning behind claims.',
        'Respect ethical issues and cultural protocols when accessing or using secondary data, no personal information that could harm, correct citation, and respect for First Peoples\u2019 knowledges in "both ways" research.',
      ],
      illustrations: [
        { brief: 'Multiple lines of evidence → strong argument', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Evidence 1' }, { text: 'Evidence 2' }, { text: 'Evidence 3' }, { text: 'Strong argument' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I07-q1', type: 'mcq', prompt: 'A claim is stronger when supported by…', options: ['Multiple consistent lines of evidence', 'One vague rumour', 'No evidence'], answer: 'Multiple consistent lines of evidence', difficulty: 2 },
        { id: 'Y9-SCI-I07-q2', type: 'mcq', prompt: 'Checking a source\u2019s credibility means assessing…', options: ['Its trustworthiness and validity', 'Its colour scheme', 'Its age only'], answer: 'Its trustworthiness and validity', difficulty: 2 },
        { id: 'Y9-SCI-I07-q3', type: 'mcq', prompt: 'Secondary data must not contain…', options: ['Personal information that could harm individuals', 'Numbers', 'References'], answer: 'Personal information that could harm individuals', difficulty: 3 },
        { id: 'Y9-SCI-I07-q4', type: 'mcq', prompt: 'Research "both ways" means…', options: ['Combining First Peoples\u2019 knowledges and contemporary science', 'Doing everything twice', 'Choosing one view only'], answer: 'Combining First Peoples\u2019 knowledges and contemporary science', difficulty: 3 },
        { id: 'Y9-SCI-I07-q5', type: 'mcq', prompt: 'Interrogating media claims about science means…', options: ['Checking the evidence and methods behind the headline', 'Believing every headline', 'Ignoring all news'], answer: 'Checking the evidence and methods behind the headline', difficulty: 3 },
        { id: 'Y9-SCI-I07-q6', type: 'mcq', prompt: 'Correctly citing secondary data is important because…', options: ['It credits sources and follows ethical practice', 'It fills space', 'It hides mistakes'], answer: 'It credits sources and follows ethical practice', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-SCI-I08',
    title: 'Communicating findings',
    year: '9',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S9I08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Communicate ideas and findings effectively for your purpose and audience, a full report for experts, an interactive presentation on feedback loops, or a social media campaign on carbon footprints.',
        'Language and text features matter, and so does cultural responsiveness, respecting cultural protocols when communicating about First Nations knowledges.',
      ],
      illustrations: [
        { brief: 'Purpose → audience → format decision flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Purpose' }, { text: 'Audience' }, { text: 'Content + format' }, { text: 'Effective text' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-SCI-I08-q1', type: 'mcq', prompt: 'A good report includes…', options: ['Background, results and a discussion of validity', 'Only the title', 'No results'], answer: 'Background, results and a discussion of validity', difficulty: 2 },
        { id: 'Y9-SCI-I08-q2', type: 'mcq', prompt: 'An interactive presentation suits…', options: ['Explaining feedback loops in body systems', 'Weighing rocks', 'Nothing'], answer: 'Explaining feedback loops in body systems', difficulty: 2 },
        { id: 'Y9-SCI-I08-q3', type: 'mcq', prompt: 'A social media campaign on carbon footprints aims to…', options: ['Encourage young people to reduce emissions', 'Hide the data', 'Confuse readers'], answer: 'Encourage young people to reduce emissions', difficulty: 2 },
        { id: 'Y9-SCI-I08-q4', type: 'mcq', prompt: 'Comparing scientific texts for different audiences shows…', options: ['How content and language are selected for each purpose', 'That all texts are identical', 'Nothing useful'], answer: 'How content and language are selected for each purpose', difficulty: 3 },
        { id: 'Y9-SCI-I08-q5', type: 'mcq', prompt: 'Culturally responsive communication means…', options: ['Respecting protocols around First Nations knowledges', 'Ignoring culture', 'Using offensive language'], answer: 'Respecting protocols around First Nations knowledges', difficulty: 3 },
        { id: 'Y9-SCI-I08-q6', type: 'mcq', prompt: 'Selecting the right text features makes communication…', options: ['More effective for the audience', 'Longer for no reason', 'Impossible'], answer: 'More effective for the audience', difficulty: 2 },
      ],
    },
  },
];
