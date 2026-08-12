import type { Topic } from '../../types/curriculum';

/**
 * Year 7 Science — full topic bank.
 * Source of truth: docs/content/year-7-10/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry; codes verified against ACARA v9.0
 * and the QCAA Years 7–10 Science sequence).
 * Each `AC9S7I02` topic carries `sensitivity: true` per the primary-school
 * convention — it touches Country/Place research-permission awareness, pending
 * a First Nations protocol review before release.
 */
export const YEAR7_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (6 CDs) ----------
  {
    id: 'Y7-SCI-U01',
    title: 'Classifying life',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'There are millions of different living things, so scientists sort them into groups by shared features. Classification turns chaos into order — every living thing belongs to a kingdom, then smaller and smaller groups (phylum, class, order, family, genus, species).',
        "A dichotomous key is a set of 'either/or' questions that leads you to an organism's name — like a choose-your-own-adventure for identifying a plant or animal.",
      ],
      illustrations: [
        { brief: 'Kingdom-to-species classification funnel', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Kingdom' }, { text: 'Phylum' }, { text: 'Class' }, { text: 'Order' }, { text: 'Family' }, { text: 'Genus' }, { text: 'Species' }] } },
        { brief: 'A dichotomous key decision tree for four animals', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Fur?', decision: true }, { text: 'Scales?', decision: true }, { text: 'Feathers?', decision: true }, { text: 'Named animal' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U01-q1', type: 'mcq', prompt: 'Why do scientists classify living things?', options: ['To organise diversity into orderly groups', 'To make them stronger', 'So they can be sold'], answer: 'To organise diversity into orderly groups', difficulty: 1 },
        { id: 'Y7-SCI-U01-q2', type: 'mcq', prompt: 'Which list is in the correct order, broadest to most specific?', options: ['Kingdom → phylum → class → species', 'Species → class → kingdom → phylum', 'Order → family → kingdom → genus'], answer: 'Kingdom → phylum → class → species', difficulty: 2 },
        { id: 'Y7-SCI-U01-q3', type: 'mcq', prompt: 'The two-part name of a species (genus + species) is called…', options: ['Binomial name', 'Dichotomous name', 'Common name'], answer: 'Binomial name', difficulty: 2 },
        { id: 'Y7-SCI-U01-q4', type: 'mcq', prompt: 'A dichotomous key works by asking…', options: ['A series of either/or questions', 'One impossible question', 'Questions about taste'], answer: 'A series of either/or questions', difficulty: 1 },
        { id: 'Y7-SCI-U01-q5', type: 'mcq', prompt: 'A dog and a wolf are in the same genus (Canis). This means they are more closely related than…', options: ['A dog and a cat', 'A wolf and another wolf', 'Two identical twins'], answer: 'A dog and a cat', difficulty: 3 },
        { id: 'Y7-SCI-U01-q6', type: 'mcq', prompt: 'Which feature would best separate birds from mammals in a dichotomous key?', options: ['Feathers vs fur/hair', 'Whether they can run', 'Their size'], answer: 'Feathers vs fur/hair', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-SCI-U02',
    title: 'Ecosystems & food webs',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A food web shows who eats what in an ecosystem, and how matter and energy flow between living things. Energy starts with the Sun, is captured by producers (plants), and moves through consumers as they feed.',
        'Abiotic factors (sunlight, water, temperature) and biotic factors (predators, competition) affect population size. Remove or add one species and the whole web can wobble — that is why introduced species are so damaging.',
      ],
      illustrations: [
        { brief: 'A food web diagram: grass → insects → birds/frogs → hawk', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sun' }, { text: 'Grass (producer)' }, { text: 'Insects' }, { text: 'Frogs + birds' }, { text: 'Hawk' }] } },
        { brief: 'Abiotic vs biotic factors bar comparison for a pond population', ready: true, diagram: { kind: 'bar-compare', unit: 'impact', items: [{ label: 'Water level', value: 8 }, { label: 'Sunlight', value: 7 }, { label: 'Predators', value: 5 }, { label: 'Competition', value: 4 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U02-q1', type: 'mcq', prompt: 'The original source of energy in nearly every food web is…', options: ['The Sun', 'Soil', 'The Moon'], answer: 'The Sun', difficulty: 1 },
        { id: 'Y7-SCI-U02-q2', type: 'mcq', prompt: 'Producers (like grass) make their own food using…', options: ['Photosynthesis', 'Hunting', 'Digging'], answer: 'Photosynthesis', difficulty: 1 },
        { id: 'Y7-SCI-U02-q3', type: 'mcq', prompt: 'Which is an abiotic factor in an ecosystem?', options: ['Amount of rainfall', 'Number of predators', 'Population of insects'], answer: 'Amount of rainfall', difficulty: 2 },
        { id: 'Y7-SCI-U02-q4', type: 'mcq', prompt: 'If the frog population collapses, the most likely effect on the food web is…', options: ['Birds and hawks lose a food source', 'Grass disappears instantly', 'Nothing changes'], answer: 'Birds and hawks lose a food source', difficulty: 2 },
        { id: 'Y7-SCI-U02-q5', type: 'mcq', prompt: 'An introduced predator that nothing eats would most likely…', options: ['Increase in numbers and harm native prey', 'Die out instantly', 'Only eat plants'], answer: 'Increase in numbers and harm native prey', difficulty: 2 },
        { id: 'Y7-SCI-U02-q6', type: 'mcq', prompt: 'Matter and energy in a food web are mainly represented by…', options: ['The feeding links between organisms', 'The colour of the organisms', 'The depth of the soil'], answer: 'The feeding links between organisms', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-U03',
    title: 'Earth, Sun & Moon cycles',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "The Earth, Sun and Moon move in repeating patterns. Earth's tilt causes the seasons, the Moon's orbit around Earth gives us lunar phases, and the Moon's gravity pulling on Earth's oceans gives us tides.",
        "When the Sun, Earth and Moon line up just right, we get eclipses — the Moon blocking the Sun (solar) or Earth's shadow falling on the Moon (lunar). These cycles are so regular we can predict them exactly.",
      ],
      illustrations: [
        { brief: 'Earth–Moon–Sun positions for phases, tides and eclipses', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Sun' }, { icon: 'orbit', label: 'Moon orbits Earth' }, { icon: 'globe', label: 'Earth' }], caption: 'Orbits line up to cause eclipses and tides' } },
        { brief: 'Lunar phase cycle: new → full → new', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'New moon' }, { text: 'First quarter' }, { text: 'Full moon' }, { text: 'Last quarter' }, { text: 'New moon again' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U03-q1', type: 'mcq', prompt: 'The main cause of Earth\u2019s seasons is…', options: ["Earth's tilted axis", 'Distance from the Sun', 'The Moon\u2019s pull'], answer: "Earth's tilted axis", difficulty: 2 },
        { id: 'Y7-SCI-U03-q2', type: 'mcq', prompt: 'Tides are mainly caused by…', options: ["The Moon's gravitational pull on Earth's oceans", 'Wind storms', 'Fish swimming'], answer: "The Moon's gravitational pull on Earth's oceans", difficulty: 2 },
        { id: 'Y7-SCI-U03-q3', type: 'mcq', prompt: 'A solar eclipse happens when…', options: ['The Moon blocks our view of the Sun', "Earth's shadow falls on the Moon", 'Clouds cover the sky'], answer: 'The Moon blocks our view of the Sun', difficulty: 2 },
        { id: 'Y7-SCI-U03-q4', type: 'mcq', prompt: 'A lunar eclipse happens when…', options: ["Earth's shadow falls on the Moon", 'The Sun blocks the Moon', 'The Moon turns dark on its own'], answer: "Earth's shadow falls on the Moon", difficulty: 2 },
        { id: 'Y7-SCI-U03-q5', type: 'mcq', prompt: 'The Moon takes about one … to orbit Earth, giving us its phases.', options: ['Month', 'Day', 'Year'], answer: 'Month', difficulty: 1 },
        { id: 'Y7-SCI-U03-q6', type: 'mcq', prompt: 'Why are eclipses and tides predictable?', options: ['The orbits are regular and repeating cycles', 'They happen randomly', 'Animals predict them'], answer: 'The orbits are regular and repeating cycles', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-U04',
    title: 'Forces & motion',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A force is a push or a pull. Balanced forces leave an object still or moving at a steady speed; unbalanced forces make it speed up, slow down or change direction.',
        "Gravity pulls everything toward Earth's centre. Heavier (more massive) objects need a bigger force to change their motion — that is why pushing a loaded trolley is harder than pushing an empty one.",
      ],
      illustrations: [
        { brief: 'Balanced vs unbalanced forces on a tug-of-war rope', ready: true, diagram: { kind: 'balance-scale', left: 'Team A 500N', right: 'Team B 500N', balanced: true } },
        { brief: 'Force arrows: gravity pulling down, push/pull sideways', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'arrow-right', label: 'Push/pull' }, { icon: 'cube', label: 'Object' }, { icon: 'arrow-right', label: 'Friction' }], caption: 'Directions and sizes of forces matter' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U04-q1', type: 'mcq', prompt: 'A force is best described as…', options: ['A push or a pull', 'A type of food', 'A unit of length'], answer: 'A push or a pull', difficulty: 1 },
        { id: 'Y7-SCI-U04-q2', type: 'mcq', prompt: 'Balanced forces acting on an object cause it to…', options: ['Keep its current motion (still or steady speed)', 'Speed up constantly', 'Always stop'], answer: 'Keep its current motion (still or steady speed)', difficulty: 2 },
        { id: 'Y7-SCI-U04-q3', type: 'mcq', prompt: 'An object starts moving because the forces on it are…', options: ['Unbalanced', 'Zero', 'Equal in every direction'], answer: 'Unbalanced', difficulty: 2 },
        { id: 'Y7-SCI-U04-q4', type: 'mcq', prompt: 'Gravity pulls objects…', options: ['Toward the centre of Earth', 'Upward into the sky', 'Sideways'], answer: 'Toward the centre of Earth', difficulty: 1 },
        { id: 'Y7-SCI-U04-q5', type: 'mcq', prompt: 'Compared with pushing a light trolley, pushing a heavy (more massive) trolley to the same speed requires…', options: ['More force', 'Less force', 'No force at all'], answer: 'More force', difficulty: 2 },
        { id: 'Y7-SCI-U04-q6', type: 'mcq', prompt: 'A ball rolling on grass slows down because of…', options: ['Friction (an unbalanced force)', 'Gravity acting upward', 'It losing mass'], answer: 'Friction (an unbalanced force)', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-U05',
    title: 'Particle theory of matter',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Everything is made of tiny particles. In a solid the particles are packed tightly and just vibrate; in a liquid they can slide past each other; in a gas they move fast and are far apart.',
        "The particle model explains the properties of substances: solids keep their shape, liquids take the shape of their container, and gases spread out to fill all the space available.",
      ],
      illustrations: [
        { brief: 'Particle arrangement in solid / liquid / gas', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Solid: packed, vibrating' }, { text: 'Liquid: sliding past' }, { text: 'Gas: fast, far apart' }] } },
        { brief: 'Temperature comparison of hot vs cold water particles', ready: true, diagram: { kind: 'thermometer', min: 0, max: 100, value: 75, unit: '°C' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U05-q1', type: 'mcq', prompt: 'In a solid, particles are…', options: ['Packed tightly and vibrating in place', 'Far apart and moving fast', 'Frozen forever'], answer: 'Packed tightly and vibrating in place', difficulty: 1 },
        { id: 'Y7-SCI-U05-q2', type: 'mcq', prompt: 'A liquid takes the shape of its container because its particles…', options: ['Slide past one another', 'Never move', 'Are arranged in a fixed grid'], answer: 'Slide past one another', difficulty: 2 },
        { id: 'Y7-SCI-U05-q3', type: 'mcq', prompt: 'A gas spreads out to fill a whole room because its particles…', options: ['Move fast and are far apart', 'Are stuck together', 'Sink to the floor'], answer: 'Move fast and are far apart', difficulty: 2 },
        { id: 'Y7-SCI-U05-q4', type: 'mcq', prompt: 'Heating a substance makes its particles move…', options: ['Faster', 'Slower', 'Not at all'], answer: 'Faster', difficulty: 1 },
        { id: 'Y7-SCI-U05-q5', type: 'mcq', prompt: 'Which statement is true of a solid that keeps its own shape?', options: ['Its particles are held in a fixed arrangement', 'Its particles are very far apart', 'Its particles can all escape'], answer: 'Its particles are held in a fixed arrangement', difficulty: 2 },
        { id: 'Y7-SCI-U05-q6', type: 'mcq', prompt: 'The particle model helps explain properties of substances because it describes the … of the particles.', options: ['Arrangement, motion and attraction', 'Colour and taste', 'Weight and height'], answer: 'Arrangement, motion and attraction', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-U06',
    title: 'Pure substances & mixtures',
    year: '7',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S7U06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A pure substance is made of only one kind of matter (like pure water or pure salt). A mixture is two or more substances mixed together but not chemically joined — like sea water, air or a salad.',
        'Mixtures can be separated using differences in their properties: filtering separates solid from liquid, evaporation recovers dissolved solids, and distillation separates liquids with different boiling points.',
      ],
      illustrations: [
        { brief: 'Separation methods: filtering, evaporation, distillation', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Filtering: solid from liquid' }, { text: 'Evaporation: dissolved solid back' }, { text: 'Distillation: liquids apart' }] } },
        { brief: 'Comparing a pure substance with a mixture', ready: true, diagram: { kind: 'balance-scale', left: 'Pure salt', right: 'Salt + water (mixture)', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-U06-q1', type: 'mcq', prompt: 'Sea water is best described as…', options: ['A mixture', 'A pure substance', 'An element'], answer: 'A mixture', difficulty: 1 },
        { id: 'Y7-SCI-U06-q2', type: 'mcq', prompt: 'To separate sand from water you would use…', options: ['Filtering', 'Melting', 'Freezing'], answer: 'Filtering', difficulty: 1 },
        { id: 'Y7-SCI-U06-q3', type: 'mcq', prompt: 'To get salt back from salt water, you could…', options: ['Evaporate the water', 'Add more water', 'Filter it'], answer: 'Evaporate the water', difficulty: 2 },
        { id: 'Y7-SCI-U06-q4', type: 'mcq', prompt: 'Distillation separates liquids by differences in…', options: ['Boiling point', 'Colour', 'Smell'], answer: 'Boiling point', difficulty: 2 },
        { id: 'Y7-SCI-U06-q5', type: 'mcq', prompt: 'A pure substance is made of…', options: ['Only one kind of matter', 'At least two substances', 'Only gases'], answer: 'Only one kind of matter', difficulty: 2 },
        { id: 'Y7-SCI-U06-q6', type: 'mcq', prompt: 'Air is a mixture because it contains…', options: ['Several gases mixed but not joined', 'Only one type of atom', 'No particles at all'], answer: 'Several gases mixed but not joined', difficulty: 3 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (4 CDs) ----------
  {
    id: 'Y7-SCI-H01',
    title: 'How scientific knowledge changes',
    year: '7',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S7H01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific knowledge is not fixed — it changes as new evidence arrives or new technologies reveal things we could not see before. Ideas are refined, revised or sometimes replaced.',
        'Different perspectives also matter: scientists from different backgrounds and cultures bring different questions and ways of seeing, which can lead to new understanding.',
      ],
      illustrations: [
        { brief: 'A knowledge-refinement loop: evidence → revision → new idea', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Evidence collected' }, { text: 'Idea tested' }, { text: 'New evidence found' }, { text: 'Idea refined' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-H01-q1', type: 'mcq', prompt: 'Scientific knowledge changes when…', options: ['New evidence or perspectives emerge', 'It is written in a textbook', 'It gets old'], answer: 'New evidence or perspectives emerge', difficulty: 1 },
        { id: 'Y7-SCI-H01-q2', type: 'mcq', prompt: 'A new technology (like a better microscope) can change scientific knowledge by…', options: ['Revealing things we could not see before', 'Hiding evidence', 'Slowing science down'], answer: 'Revealing things we could not see before', difficulty: 2 },
        { id: 'Y7-SCI-H01-q3', type: 'mcq', prompt: 'When new evidence contradicts an old idea, scientists should…', options: ['Update or revise the idea', 'Ignore the evidence', 'Stop doing science'], answer: 'Update or revise the idea', difficulty: 2 },
        { id: 'Y7-SCI-H01-q4', type: 'mcq', prompt: 'Different cultural perspectives can contribute to science by…', options: ['Providing different questions and knowledges', 'Making experiments faster', 'Replacing all evidence'], answer: 'Providing different questions and knowledges', difficulty: 2 },
        { id: 'Y7-SCI-H01-q5', type: 'mcq', prompt: 'A scientific idea that survives many tests is called…', options: ['A well-supported theory', 'A lucky guess', 'A permanent fact that never changes'], answer: 'A well-supported theory', difficulty: 3 },
        { id: 'Y7-SCI-H01-q6', type: 'mcq', prompt: 'The key reason scientific knowledge improves is that it is…', options: ['Open to testing and revision', 'Never questioned', 'Decided by one person'], answer: 'Open to testing and revision', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-H02',
    title: 'People & institutions in science',
    year: '7',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S7H02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Science is done by people — from school students to professional researchers at universities, CSIRO and other institutions. These organisations support research, keep records and share findings.',
        'Scientific knowledge builds up over time as many people contribute. Recognising who did the work and how institutions support it is part of how science stays honest and reliable.',
      ],
      illustrations: [
        { brief: 'People-and-institutions flow: student → scientist → institution → shared knowledge', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Question' }, { text: 'Investigation' }, { text: 'Institution support' }, { text: 'Findings shared' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-H02-q1', type: 'mcq', prompt: 'Which of these is an institution that supports scientific research?', options: ['CSIRO', 'A sporting club', 'A music festival'], answer: 'CSIRO', difficulty: 1 },
        { id: 'Y7-SCI-H02-q2', type: 'mcq', prompt: 'Scientific knowledge usually grows through…', options: ['Many people contributing over time', 'One person deciding forever', 'Keeping results secret'], answer: 'Many people contributing over time', difficulty: 2 },
        { id: 'Y7-SCI-H02-q3', type: 'mcq', prompt: 'Sharing findings with other scientists is important because…', options: ['Others can check and build on the work', 'It fills textbooks', 'It makes results longer'], answer: 'Others can check and build on the work', difficulty: 2 },
        { id: 'Y7-SCI-H02-q4', type: 'mcq', prompt: 'Who can contribute to scientific knowledge?', options: ['Anyone who investigates carefully, from students to professionals', 'Only university professors', 'Only people with expensive labs'], answer: 'Anyone who investigates carefully, from students to professionals', difficulty: 2 },
        { id: 'Y7-SCI-H02-q5', type: 'mcq', prompt: 'Recognising who did scientific work matters because it…', options: ['Keeps the record honest and credits contributors', 'Makes science more complicated', 'Only matters in sport'], answer: 'Keeps the record honest and credits contributors', difficulty: 3 },
        { id: 'Y7-SCI-H02-q6', type: 'mcq', prompt: 'A key reason institutions record and store scientific records is to…', options: ['Preserve evidence others can later check', 'Hide data', 'Win competitions'], answer: 'Preserve evidence others can later check', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-H03',
    title: 'Science responses & society',
    year: '7',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S7H03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientific responses to real problems raise ethical, environmental, social and economic questions. Desalination plants turn seawater into drinking water but can affect marine life; laboratory-grown meat may help the environment but raises questions about cost and food choices.',
        'Science does not just discover things — it helps society decide how to live. Asking who is helped, who is affected and what it costs is part of judging any scientific solution.',
      ],
      illustrations: [
        { brief: 'Considerations wheel: ethical, environmental, social, economic', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ethical' }, { text: 'Environmental' }, { text: 'Social' }, { text: 'Economic' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-H03-q1', type: 'mcq', prompt: 'Scientific responses to real problems usually raise questions that are…', options: ['Ethical, environmental, social and economic', 'Only about price tags', 'Purely decorative'], answer: 'Ethical, environmental, social and economic', difficulty: 2 },
        { id: 'Y7-SCI-H03-q2', type: 'mcq', prompt: 'A desalination plant may help a community get fresh water, but can also…', options: ['Affect the local marine environment', 'Create more rain', 'Shrink the ocean'], answer: 'Affect the local marine environment', difficulty: 2 },
        { id: 'Y7-SCI-H03-q3', type: 'mcq', prompt: 'Laboratory-grown meat could reduce harm to ecosystems, but raises…', options: ['Social, ethical and economic questions', 'Only spelling questions', 'No questions at all'], answer: 'Social, ethical and economic questions', difficulty: 2 },
        { id: 'Y7-SCI-H03-q4', type: 'mcq', prompt: 'Judging a scientific solution fairly means considering…', options: ['Who is helped, who is affected, and what it costs', 'Only how fast it works', 'Only what it looks like'], answer: 'Who is helped, who is affected, and what it costs', difficulty: 3 },
        { id: 'Y7-SCI-H03-q5', type: 'mcq', prompt: 'A solution that is good for the environment might still be rejected if…', options: ['It is too expensive or unfair for some people', 'It is easy to build', 'Everyone agrees on it'], answer: 'It is too expensive or unfair for some people', difficulty: 3 },
        { id: 'Y7-SCI-H03-q6', type: 'mcq', prompt: 'Thinking about how a scientific response affects people is important because…', options: ['Solutions must work in real life, not just in theory', 'Science ignores people', 'Only scientists decide'], answer: 'Solutions must work in real life, not just in theory', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-H04',
    title: 'Science communication',
    year: '7',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S7H04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Science communication shapes what individuals and communities believe and do. Warnings about cyclones and heatwaves help people prepare; campaigns about endangered species can change fishing and hunting rules; good communicators make science clear and exciting.',
        'When science is told clearly and honestly, people can make informed choices about their health, the environment and their community. How a discovery is shared matters as much as the discovery itself.',
      ],
      illustrations: [
        { brief: 'Communication → viewpoint → policy flow', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Science findings' }, { text: 'Communication' }, { text: 'Informed viewpoints' }, { text: 'Community policy' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-H04-q1', type: 'mcq', prompt: 'Science communication can change a community by…', options: ['Informing viewpoints and guiding policies', 'Keeping results secret', 'Replacing evidence'], answer: 'Informing viewpoints and guiding policies', difficulty: 2 },
        { id: 'Y7-SCI-H04-q2', type: 'mcq', prompt: 'Clear warnings about cyclones and heatwaves help people by…', options: ['Giving time to prepare and stay safe', 'Making the weather hotter', 'Hiding the risk'], answer: 'Giving time to prepare and stay safe', difficulty: 2 },
        { id: 'Y7-SCI-H04-q3', type: 'mcq', prompt: 'Campaigns about endangered species can lead to…', options: ['New rules about fishing and hunting', 'More endangered animals', 'Fewer scientists'], answer: 'New rules about fishing and hunting', difficulty: 2 },
        { id: 'Y7-SCI-H04-q4', type: 'mcq', prompt: 'A good science communicator…', options: ['Makes science clear and engaging for the audience', 'Makes science confusing', 'Avoids facts'], answer: 'Makes science clear and engaging for the audience', difficulty: 1 },
        { id: 'Y7-SCI-H04-q5', type: 'mcq', prompt: 'Informed individual viewpoints matter because they guide…', options: ['Personal choices and community decisions', 'Only fashion trends', 'Nothing at all'], answer: 'Personal choices and community decisions', difficulty: 3 },
        { id: 'Y7-SCI-H04-q6', type: 'mcq', prompt: 'Why does honest science communication matter?', options: ['People need accurate information to make good choices', 'It makes results longer', 'It replaces all experiments'], answer: 'People need accurate information to make good choices', difficulty: 3 },
      ],
    },
  },
  // ---------- Science Inquiry (8 CDs) ----------
  {
    id: 'Y7-SCI-I01',
    title: 'Asking questions & predicting',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Science starts with a good question. An investigable question is one you can answer by collecting evidence — like "How does the height of a ramp affect how far a ball rolls?" not "What is the best sport?".',
        'Before you test, you make a prediction or hypothesis — a reasoned guess about what you expect, based on what you already know. "If the ramp is higher, then the ball will roll further because it has more energy."',
      ],
      illustrations: [
        { brief: 'Ramp-height investigation hypothesis diagram', ready: true, diagram: { kind: 'bar-compare', unit: 'distance', items: [{ label: 'Low ramp', value: 3 }, { label: 'Medium ramp', value: 6 }, { label: 'High ramp', value: 9 }] } },
        { brief: 'Question → prediction → test loop', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Investigable question' }, { text: 'Prediction (if… then…)' }, { text: 'Test it' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I01-q1', type: 'mcq', prompt: 'Which question is investigable (answerable with evidence)?', options: ['How does ramp height affect how far a ball rolls?', 'What is the best sport?', 'Why is pizza delicious?'], answer: 'How does ramp height affect how far a ball rolls?', difficulty: 1 },
        { id: 'Y7-SCI-I01-q2', type: 'mcq', prompt: 'A hypothesis is…', options: ['A reasoned, testable prediction', 'The final answer', 'A random guess'], answer: 'A reasoned, testable prediction', difficulty: 2 },
        { id: 'Y7-SCI-I01-q3', type: 'mcq', prompt: 'The hypothesis "If the ramp is higher, then the ball rolls further" is testable because…', options: ['We can measure the distance the ball rolls', 'It sounds impressive', 'It is about sport'], answer: 'We can measure the distance the ball rolls', difficulty: 2 },
        { id: 'Y7-SCI-I01-q4', type: 'mcq', prompt: 'A good prediction should be based on…', options: ['What you already know about the topic', 'Pure luck', 'Wishes'], answer: 'What you already know about the topic', difficulty: 2 },
        { id: 'Y7-SCI-I01-q5', type: 'mcq', prompt: 'If a test shows your prediction was wrong, you should…', options: ['Revise your idea using the new evidence', 'Ignore the results', 'Blame the equipment forever'], answer: 'Revise your idea using the new evidence', difficulty: 3 },
        { id: 'Y7-SCI-I01-q6', type: 'mcq', prompt: 'Which hypothesis format is the most scientific?', options: ['If… then… because…', 'Maybe something happens', 'No one knows'], answer: 'If… then… because…', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I02',
    title: 'Planning investigations',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'A fair investigation changes only one variable at a time. The thing you change is the independent variable; the thing you measure is the dependent variable; everything else must stay the same (controlled variables).',
        'Before you start, plan for safety and ethics: manage risks, respect living things, and recognise that some places (like heritage sites on Country/Place) need special care and permission before any research touches them.',
      ],
      illustrations: [
        { brief: 'Independent / dependent / controlled variables chart', ready: true, diagram: { kind: 'bar-compare', unit: 'levels', items: [{ label: 'Independent (changed)', value: 7 }, { label: 'Dependent (measured)', value: 5 }, { label: 'Controlled (fixed)', value: 3 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I02-q1', type: 'mcq', prompt: 'In a fair test, the independent variable is the one you…', options: ['Change on purpose', 'Keep the same', 'Measure after'], answer: 'Change on purpose', difficulty: 2 },
        { id: 'Y7-SCI-I02-q2', type: 'mcq', prompt: 'The dependent variable is the one you…', options: ['Measure to see the effect', 'Change deliberately', 'Never look at'], answer: 'Measure to see the effect', difficulty: 2 },
        { id: 'Y7-SCI-I02-q3', type: 'mcq', prompt: 'A fair investigation changes…', options: ['Only one variable at a time', 'Every variable at once', 'No variables ever'], answer: 'Only one variable at a time', difficulty: 1 },
        { id: 'Y7-SCI-I02-q4', type: 'mcq', prompt: 'Why do safety rules matter in an investigation?', options: ['They manage the risks of the activity', 'They slow you down', 'They are optional decorations'], answer: 'They manage the risks of the activity', difficulty: 1 },
        { id: 'Y7-SCI-I02-q5', type: 'mcq', prompt: 'Before researching a heritage site on Country/Place, you should…', options: ['Get permission and follow cultural protocols', 'Just go and look', 'Dig it up'], answer: 'Get permission and follow cultural protocols', difficulty: 3 },
        { id: 'Y7-SCI-I02-q6', type: 'mcq', prompt: 'Controlled variables must be kept the same so that…', options: ['The effect you measure is really caused by the independent variable', 'The experiment looks neat', 'No one can repeat it'], answer: 'The effect you measure is really caused by the independent variable', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I03',
    title: 'Measuring with precision',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Precision means measuring carefully and recording data the right way. You choose equipment that fits the job — a stopwatch for time, a ruler for length, a measuring cylinder for volume — and read it at eye level.',
        'Digital tools (like data loggers or spreadsheets) can record values accurately and automatically. Recording with correct units and decimals makes data useful for others.',
      ],
      illustrations: [
        { brief: 'Reading a measuring cylinder meniscus at eye level', ready: true, diagram: { kind: 'thermometer', min: 0, max: 100, value: 38, unit: '°C' } },
        { brief: 'Choosing equipment: ruler / stopwatch / measuring cylinder', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'Length' }, { icon: 'clock', label: 'Time' }, { icon: 'bottle', label: 'Volume' }], caption: 'Match the tool to the measurement' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I03-q1', type: 'mcq', prompt: 'Precise recording means data is…', options: ['Careful and consistent with correct units', 'Written in pen', 'Estimated wildly'], answer: 'Careful and consistent with correct units', difficulty: 2 },
        { id: 'Y7-SCI-I03-q2', type: 'mcq', prompt: 'To measure the volume of a liquid accurately, you would use…', options: ['A measuring cylinder', 'A ruler', 'A stopwatch'], answer: 'A measuring cylinder', difficulty: 1 },
        { id: 'Y7-SCI-I03-q3', type: 'mcq', prompt: 'To measure how long a reaction takes, you would use…', options: ['A stopwatch', 'A thermometer', 'A ruler'], answer: 'A stopwatch', difficulty: 1 },
        { id: 'Y7-SCI-I03-q4', type: 'mcq', prompt: 'Reading a measuring cylinder at the bottom of the meniscus at eye level helps you…', options: ['Record volume accurately', 'Fill it faster', 'Make it look bigger'], answer: 'Record volume accurately', difficulty: 3 },
        { id: 'Y7-SCI-I03-q5', type: 'mcq', prompt: 'A digital tool like a data logger is useful because it can…', options: ['Record values automatically and accurately', 'Answer scientific questions by itself', 'Clean up the lab'], answer: 'Record values automatically and accurately', difficulty: 2 },
        { id: 'Y7-SCI-I03-q6', type: 'mcq', prompt: 'Including correct units and decimals in your data is important because…', options: ['It makes results clear and usable by others', 'It uses more ink', 'It hides mistakes'], answer: 'It makes results clear and usable by others', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I04',
    title: 'Representing data',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Tables, graphs and models organise raw data so patterns are easy to see. In a line graph, the independent variable goes on the horizontal axis and the dependent variable goes on the vertical axis.',
        'Choosing the right representation matters: a table for exact values, a bar or line graph for trends, a model or diagram for something hard to see (like a cell or food web).',
      ],
      illustrations: [
        { brief: 'Line graph axes: independent (x) vs dependent (y)', ready: true, diagram: { kind: 'dot-plot', values: [2, 3, 4, 6, 7], unit: 'distance (m)' } },
        { brief: 'Bar graph comparing measurements across conditions', ready: true, diagram: { kind: 'bar-compare', unit: 'time (s)', items: [{ label: 'Trial 1', value: 5 }, { label: 'Trial 2', value: 5 }, { label: 'Trial 3', value: 6 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I04-q1', type: 'mcq', prompt: 'In a graph, the independent variable goes on the…', options: ['Horizontal axis', 'Vertical axis', 'Legend'], answer: 'Horizontal axis', difficulty: 2 },
        { id: 'Y7-SCI-I04-q2', type: 'mcq', prompt: 'The dependent variable goes on the…', options: ['Vertical axis', 'Horizontal axis', 'Title only'], answer: 'Vertical axis', difficulty: 2 },
        { id: 'Y7-SCI-I04-q3', type: 'mcq', prompt: 'A table is best for showing…', options: ['Exact recorded values', 'A food web', 'Movement of particles'], answer: 'Exact recorded values', difficulty: 1 },
        { id: 'Y7-SCI-I04-q4', type: 'mcq', prompt: 'A line or bar graph is best for showing…', options: ['Trends and patterns in data', 'A list of names', 'Taste of foods'], answer: 'Trends and patterns in data', difficulty: 2 },
        { id: 'Y7-SCI-I04-q5', type: 'mcq', prompt: 'A model is a good representation when the real thing…', options: ['Is too small, large or slow to see directly', 'Is brightly coloured', 'Is easy to observe'], answer: 'Is too small, large or slow to see directly', difficulty: 2 },
        { id: 'Y7-SCI-I04-q6', type: 'mcq', prompt: 'A graph is most useful when its axes are…', options: ['Labelled with names and units', 'Left blank', 'Both vertical'], answer: 'Labelled with names and units', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I05',
    title: 'Analysing data',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Analysing data means looking for patterns, trends and relationships. A pattern might be "the higher the ramp, the further the ball rolled" — the trend in the measurements tells the story.',
        'You also check for outliers — a measurement that is way out of line with the others. Outliers may be mistakes, or they may be clues, but you must not just ignore them.',
      ],
      illustrations: [
        { brief: 'A dot plot with one clear outlier marked', ready: true, diagram: { kind: 'dot-plot', values: [4, 5, 4, 6, 5, 5, 12], unit: 'distance (m)' } },
        { brief: 'Pattern-finding: relationship between two variables', ready: true, diagram: { kind: 'bar-compare', unit: 'growth (cm)', items: [{ label: '0 mL water', value: 1 }, { label: '5 mL water', value: 4 }, { label: '10 mL water', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I05-q1', type: 'mcq', prompt: 'Looking for patterns and trends in data is called…', options: ['Analysing data', 'Cooking data', 'Colouring data'], answer: 'Analysing data', difficulty: 1 },
        { id: 'Y7-SCI-I05-q2', type: 'mcq', prompt: 'If plants grow taller with more water (5 mL → 4 cm, 10 mL → 8 cm), this shows…', options: ['A relationship between water and growth', 'Plants dislike water', 'No pattern exists'], answer: 'A relationship between water and growth', difficulty: 2 },
        { id: 'Y7-SCI-I05-q3', type: 'mcq', prompt: 'An outlier is a data point that…', options: ['Is far out of line with the others', 'Is the most common value', 'Is always correct'], answer: 'Is far out of line with the others', difficulty: 2 },
        { id: 'Y7-SCI-I05-q4', type: 'mcq', prompt: 'When you notice an outlier, the best approach is to…', options: ['Investigate why it happened', 'Pretend it does not exist', 'Blame the Sun'], answer: 'Investigate why it happened', difficulty: 3 },
        { id: 'Y7-SCI-I05-q5', type: 'mcq', prompt: 'A trend in repeated measurements is more reliable when…', options: ['Many consistent trials support it', 'Only one trial is done', 'It is written in big letters'], answer: 'Many consistent trials support it', difficulty: 3 },
        { id: 'Y7-SCI-I05-q6', type: 'mcq', prompt: 'Describing a relationship in data usually means stating how…', options: ['One variable changes as another changes', 'Two colours look together', 'Long the experiment took'], answer: 'One variable changes as another changes', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I06',
    title: 'Evaluating methods & conclusions',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Evaluating means checking your work honestly. Look for possible sources of error in the method — misreading equipment, changing two variables, a shaky technique — and for unanswered questions.',
        'A good conclusion explains what the evidence shows and whether it really supports the claim. If the method had flaws, the conclusion is weaker, and you should say so.',
      ],
      illustrations: [
        { brief: 'Error-check loop: method → results → sources of error → improved method', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Method' }, { text: 'Results' }, { text: 'Check for error' }, { text: 'Improve method' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I06-q1', type: 'mcq', prompt: 'A source of error is anything that…', options: ['Makes results less accurate or reliable', 'Makes results neater', 'Speeds up the experiment'], answer: 'Makes results less accurate or reliable', difficulty: 2 },
        { id: 'Y7-SCI-I06-q2', type: 'mcq', prompt: 'Misreading a measuring scale is an example of…', options: ['A source of error', 'A variable', 'A conclusion'], answer: 'A source of error', difficulty: 1 },
        { id: 'Y7-SCI-I06-q3', type: 'mcq', prompt: 'If the method had errors, the conclusion is…', options: ['Weaker and less reliable', 'Stronger automatically', 'Not affected at all'], answer: 'Weaker and less reliable', difficulty: 2 },
        { id: 'Y7-SCI-I06-q4', type: 'mcq', prompt: 'An unanswered question after an investigation should be…', options: ['Noted as a future investigation', 'Hidden', 'Forced into the conclusion'], answer: 'Noted as a future investigation', difficulty: 2 },
        { id: 'Y7-SCI-I06-q5', type: 'mcq', prompt: 'A conclusion should be supported by…', options: ['The evidence collected', 'A lucky guess', 'What you hoped would happen'], answer: 'The evidence collected', difficulty: 2 },
        { id: 'Y7-SCI-I06-q6', type: 'mcq', prompt: 'Improving a method after finding an error makes the investigation…', options: ['More reliable next time', 'Impossible', 'Less scientific'], answer: 'More reliable next time', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I07',
    title: 'Evidence-based arguments',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A scientific argument supports a conclusion with evidence — not just opinion. You weigh the evidence, check the source, and decide whether a claim is reasonable.',
        'When using secondary data (someone else\u2019s research), you should consider ethical issues and cultural protocols — cite sources properly and respect knowledges that are shared with conditions.',
      ],
      illustrations: [
        { brief: 'Claim → evidence → reasoning structure', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Claim' }, { text: 'Evidence' }, { text: 'Reasoning' }, { text: 'Conclusion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I07-q1', type: 'mcq', prompt: 'A scientific argument needs…', options: ['Evidence to support the claim', 'A loud voice', 'No reasoning at all'], answer: 'Evidence to support the claim', difficulty: 1 },
        { id: 'Y7-SCI-I07-q2', type: 'mcq', prompt: 'Which is the strongest support for a claim?', options: ['Repeated, consistent evidence', 'One person saying it', 'A poster with no data'], answer: 'Repeated, consistent evidence', difficulty: 2 },
        { id: 'Y7-SCI-I07-q3', type: 'mcq', prompt: 'Secondary data is data that…', options: ['Someone else collected', 'You collected yourself', 'Was never measured'], answer: 'Someone else collected', difficulty: 2 },
        { id: 'Y7-SCI-I07-q4', type: 'mcq', prompt: 'When using secondary data, you should…', options: ['Cite the source and respect any cultural protocols', 'Claim it as your own', 'Change the numbers'], answer: 'Cite the source and respect any cultural protocols', difficulty: 3 },
        { id: 'Y7-SCI-I07-q5', type: 'mcq', prompt: 'A claim with weak or missing evidence should be treated as…', options: ['Unsupported until better evidence appears', 'Definitely true', 'Definitely false'], answer: 'Unsupported until better evidence appears', difficulty: 2 },
        { id: 'Y7-SCI-I07-q6', type: 'mcq', prompt: 'Strong reasoning connects evidence to a claim by explaining…', options: ['Why the evidence supports the conclusion', 'Who invented the experiment', 'How the lab looked'], answer: 'Why the evidence supports the conclusion', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y7-SCI-I08',
    title: 'Communicating science',
    year: '7',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S7I08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Scientists share their ideas in reports, graphs, talks and articles. Good science communication picks the right language and text features for the audience — a report for a teacher differs from a poster for classmates.',
        'Digital tools help you create and share: slides, infographics, videos and blogs. The goal is always to be clear and honest about what was found and what it means.',
      ],
      illustrations: [
        { brief: 'Choosing format by audience: report vs poster vs video', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Findings' }, { text: 'Audience' }, { text: 'Format (report/poster/video)' }, { text: 'Share clearly' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-SCI-I08-q1', type: 'mcq', prompt: 'Choosing the right way to share findings depends on…', options: ['The audience and purpose', 'Only the weather', 'How long your name is'], answer: 'The audience and purpose', difficulty: 2 },
        { id: 'Y7-SCI-I08-q2', type: 'mcq', prompt: 'A report for a teacher would most likely use…', options: ['Clear headings, tables and correct science terms', 'Only emoji', 'No sentences'], answer: 'Clear headings, tables and correct science terms', difficulty: 2 },
        { id: 'Y7-SCI-I08-q3', type: 'mcq', prompt: 'A poster for younger students might…', options: ['Use simple words and pictures', 'Include only equations', 'Skip the conclusion'], answer: 'Use simple words and pictures', difficulty: 1 },
        { id: 'Y7-SCI-I08-q4', type: 'mcq', prompt: 'Science communication should always be…', options: ['Clear and honest about the findings', 'As confusing as possible', 'Secret'], answer: 'Clear and honest about the findings', difficulty: 2 },
        { id: 'Y7-SCI-I08-q5', type: 'mcq', prompt: 'Digital tools can help you…', options: ['Create and share clear scientific texts', 'Replace evidence', 'Hide your data'], answer: 'Create and share clear scientific texts', difficulty: 1 },
        { id: 'Y7-SCI-I08-q6', type: 'mcq', prompt: 'The main point of communicating science is to…', options: ['Share ideas and findings so others can use them', 'Win arguments', 'Impress nobody'], answer: 'Share ideas and findings so others can use them', difficulty: 3 },
      ],
    },
  },
];
