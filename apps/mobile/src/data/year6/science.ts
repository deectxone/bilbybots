import type { Topic } from '../../types/curriculum';

/**
 * Year 6 Science — full topic bank.
 * Source of truth: docs/content/year-6/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry).
 * `AC9S6I02` carries a `sensitivity: true` flag per the source doc — it
 * touches Country/Place research-permission awareness and is written
 * generally, pending a First Nations protocol review before release.
 */
export const YEAR6_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (4 CDs) ----------
  {
    id: 'Y6-SCI-U01',
    title: 'Habitats & living things',
    year: '6',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S6U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A habitat is everywhere from a desert to a rainforest to a coral reef — and every living thing there depends on the right temperature, water, light, food and shelter to survive.',
        'Change one condition — less rain, a hotter summer — and you change how well plants and animals in that habitat grow and survive.',
      ],
      illustrations: [
        { brief: 'A desert/rainforest/reef habitat panel', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Desert' }, { icon: 'tree', label: 'Rainforest' }, { icon: 'fish', label: 'Reef' }], caption: 'Different habitats, different survival conditions' } },
        { brief: 'A "conditions meter" for a plant in a sun/water experiment', ready: true, diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Sun', value: 8 }, { label: 'Water', value: 5 }, { label: 'Shade only', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-U01-q1', type: 'mcq', prompt: 'A cactus surviving in a desert mostly depends on adapting to…', options: ['Very little water', 'Constant rain', 'Deep shade'], answer: 'Very little water', difficulty: 1 },
        { id: 'Y6-SCI-U01-q2', type: 'mcq', prompt: 'If a plant gets no light at all, what usually happens?', options: ['It grows faster', 'It struggles to survive', 'Nothing changes'], answer: 'It struggles to survive', difficulty: 1 },
        { id: 'Y6-SCI-U01-q3', type: 'mcq', prompt: 'A coral reef fish moved to a freezing habitat would likely…', options: ['Struggle to survive', 'Thrive immediately', 'Not be affected at all'], answer: 'Struggle to survive', difficulty: 2 },
        { id: 'Y6-SCI-U01-q4', type: 'mcq', prompt: 'Which condition is NOT usually needed for a living thing to survive in its habitat?', options: ['Shelter', 'Food', 'A calendar'], answer: 'A calendar', difficulty: 1 },
        { id: 'Y6-SCI-U01-q5', type: 'mcq', prompt: 'In the plant experiment chart, which condition produced the most growth?', options: ['Sun', 'Water', 'Shade only'], answer: 'Sun', difficulty: 2 },
        { id: 'Y6-SCI-U01-q6', type: 'mcq', prompt: 'A sudden drought (much less rain) in a habitat would most likely…', options: ['Have no effect on any species', 'Make survival harder for many species', 'Help every species equally'], answer: 'Make survival harder for many species', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-SCI-U02',
    title: 'Earth, Sun & planets — day, night & seasons',
    year: '6',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S6U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Earth spins on its axis once a day (giving us day and night) and orbits the Sun once a year (giving us seasons). It's Earth's tilt — not distance from the Sun — that causes the seasons.",
        'Different places on Earth get different day lengths through the year because of that same tilt — that is why summer days in Australia are long and winter days are short.',
      ],
      illustrations: [
        { brief: "A solar-system model showing Earth's tilt and orbit", ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Sun' }, { icon: 'orbit', label: 'Earth (tilted) orbits' }], caption: "Earth's tilt and spin drive day/night and seasons" } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-U02-q1', type: 'mcq', prompt: 'Day and night are caused by Earth…', options: ['Orbiting the Sun', 'Spinning on its axis', 'Changing distance from the Sun'], answer: 'Spinning on its axis', difficulty: 1 },
        { id: 'Y6-SCI-U02-q2', type: 'mcq', prompt: 'The seasons are mainly caused by…', options: ["Earth's tilt", 'The Moon', 'Clouds'], answer: "Earth's tilt", difficulty: 2 },
        { id: 'Y6-SCI-U02-q3', type: 'short', prompt: 'How long does it take Earth to spin once on its axis (in hours)?', answer: '24', difficulty: 1 },
        { id: 'Y6-SCI-U02-q4', type: 'mcq', prompt: 'One full orbit of the Sun by Earth takes about…', options: ['A day', 'A month', 'A year'], answer: 'A year', difficulty: 1 },
        { id: 'Y6-SCI-U02-q5', type: 'mcq', prompt: 'When it is summer in Australia, days are…', options: ['Longer', 'Shorter', 'Exactly 12 hours always'], answer: 'Longer', difficulty: 2 },
        { id: 'Y6-SCI-U02-q6', type: 'mcq', prompt: "Which best explains why the Southern and Northern Hemispheres have opposite seasons?", options: ["Earth's tilt means each hemisphere leans toward or away from the Sun at different times of year", 'The Sun moves around Earth', 'It is random'], answer: "Earth's tilt means each hemisphere leans toward or away from the Sun at different times of year", difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y6-SCI-U03',
    title: 'Electrical energy & circuits',
    year: '6',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S6U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A circuit needs a complete loop — battery, wires and a bulb all connected — for electricity to flow and energy to transform from chemical (battery) into light and heat.',
        'Conductors (like metal) let electricity flow through them; insulators (like plastic or rubber) block it — that is why wires have a metal core wrapped in a plastic coat.',
      ],
      illustrations: [
        { brief: 'A battery-bulb circuit with insulators vs conductors labelled', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'battery', label: 'Battery' }, { icon: 'bolt', label: 'Wire' }, { icon: 'bulb', label: 'Bulb' }], caption: 'A complete circuit lets electricity flow' } },
        { brief: 'Energy-flow cartoon: chemical → electrical → light/heat', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Chemical energy (battery)' }, { text: 'Electrical energy (circuit)' }, { text: 'Light + heat (bulb)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-U03-q1', type: 'mcq', prompt: 'Which material is a good conductor?', options: ['Copper metal', 'Rubber', 'Plastic'], answer: 'Copper metal', difficulty: 1 },
        { id: 'Y6-SCI-U03-q2', type: 'mcq', prompt: 'For a bulb to light up, the circuit must be…', options: ['Broken', 'A complete loop', 'Made only of plastic'], answer: 'A complete loop', difficulty: 1 },
        { id: 'Y6-SCI-U03-q3', type: 'mcq', prompt: 'An insulator is a material that…', options: ['Blocks electricity from flowing', 'Always lets electricity flow', 'Generates electricity'], answer: 'Blocks electricity from flowing', difficulty: 2 },
        { id: 'Y6-SCI-U03-q4', type: 'mcq', prompt: 'The plastic coating around a wire is there to…', options: ['Insulate and protect it', 'Help electricity flow faster', 'Make it heavier'], answer: 'Insulate and protect it', difficulty: 2 },
        { id: 'Y6-SCI-U03-q5', type: 'mcq', prompt: 'In a working torch circuit, energy transforms from chemical (battery) into…', options: ['Light and heat', 'Sound only', 'Nothing — energy disappears'], answer: 'Light and heat', difficulty: 2 },
        { id: 'Y6-SCI-U03-q6', type: 'mcq', prompt: 'If a wire in a circuit is cut, the bulb will…', options: ['Stay lit', 'Turn off, since the loop is broken', 'Get brighter'], answer: 'Turn off, since the loop is broken', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-SCI-U04',
    title: 'Reversible & irreversible changes',
    year: '6',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S6U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A reversible change can be undone — ice melts to water and can be frozen back again; sugar dissolves in water and the water can be evaporated to get the sugar back.',
        'An irreversible change makes a new substance you cannot get back — cooking an egg or a nail rusting cannot be undone.',
      ],
      illustrations: [
        { brief: 'Ice / water / steam cycle', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ice (solid)' }, { text: 'Water (liquid)' }, { text: 'Steam (gas)' }] } },
        { brief: 'A rusty nail timeline showing an irreversible change', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'nail', label: 'Nail' }, { icon: 'droplet', label: 'Exposed to water/air' }, { icon: 'nail', label: 'Rusted' }], caption: 'Rusting makes a new substance — irreversible' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-U04-q1', type: 'mcq', prompt: 'Which is a reversible change?', options: ['Freezing water', 'Cooking a pancake', 'A rusting nail'], answer: 'Freezing water', difficulty: 1 },
        { id: 'Y6-SCI-U04-q2', type: 'mcq', prompt: 'Cooking an egg is irreversible because…', options: ['It gets cold again', 'It forms a new substance that cannot change back', 'Nothing actually changes'], answer: 'It forms a new substance that cannot change back', difficulty: 2 },
        { id: 'Y6-SCI-U04-q3', type: 'mcq', prompt: 'Dissolving sugar in water is…', options: ['Reversible — the water can be evaporated to get the sugar back', 'Irreversible — the sugar is gone forever'], answer: 'Reversible — the water can be evaporated to get the sugar back', difficulty: 2 },
        { id: 'Y6-SCI-U04-q4', type: 'mcq', prompt: 'A nail rusting is an example of a change that is…', options: ['Reversible', 'Irreversible'], answer: 'Irreversible', difficulty: 1 },
        { id: 'Y6-SCI-U04-q5', type: 'mcq', prompt: 'Melting ice into water is…', options: ['Reversible', 'Irreversible'], answer: 'Reversible', difficulty: 1 },
        { id: 'Y6-SCI-U04-q6', type: 'mcq', prompt: 'An irreversible change is one that…', options: ['Produces a new substance you cannot get back', 'Always involves water', 'Never involves heat'], answer: 'Produces a new substance you cannot get back', difficulty: 2 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (2 CDs) ----------
  {
    id: 'Y6-SCI-H01',
    title: 'Science is collaborative',
    year: '6',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S6H01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big scientific discoveries are rarely made by one person alone — they build on the work of scientists before them, from many cultures and countries, working together.',
        'First Nations Australians developed deep knowledge of astronomy, land and seasons over tens of thousands of years — knowledge that scientists today still learn from.',
      ],
      illustrations: [
        { brief: 'A scientists\' timeline showing teamwork across cultures and eras', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'telescope', label: 'Observe' }, { icon: 'people', label: 'Collaborate' }, { icon: 'helix', label: 'Build knowledge' }, { icon: 'globe', label: 'Across cultures' }], caption: 'Science builds on shared knowledge across generations' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-H01-q1', type: 'mcq', prompt: 'Scientific discoveries are usually made by…', options: ['One genius working alone', 'People building on others’ work together', 'Pure luck only'], answer: 'People building on others’ work together', difficulty: 1 },
        { id: 'Y6-SCI-H01-q2', type: 'mcq', prompt: 'First Nations Australians developed deep knowledge of the land and sky over…', options: ['A few years', 'Tens of thousands of years', 'One decade'], answer: 'Tens of thousands of years', difficulty: 2 },
        { id: 'Y6-SCI-H01-q3', type: 'mcq', prompt: 'A scientist publishing their results so others can build on them is an example of…', options: ['Collaboration across time', 'Keeping knowledge secret', 'Working alone forever'], answer: 'Collaboration across time', difficulty: 2 },
        { id: 'Y6-SCI-H01-q4', type: 'mcq', prompt: 'Modern medicine builds on the work of…', options: ['Many scientists across many generations', 'A single inventor with no help', 'No one before them'], answer: 'Many scientists across many generations', difficulty: 2 },
        { id: 'Y6-SCI-H01-q5', type: 'mcq', prompt: 'Collaboration in science can happen across…', options: ['Different cultures and countries', 'Only one country ever', 'Only one lifetime'], answer: 'Different cultures and countries', difficulty: 1 },
        { id: 'Y6-SCI-H01-q6', type: 'mcq', prompt: 'A team of international scientists working together on a discovery shows that science is…', options: ['A collaborative, shared effort', 'Always a solo effort', 'Unrelated to teamwork'], answer: 'A collaborative, shared effort', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-SCI-H02',
    title: 'Science in everyday decisions',
    year: '6',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S6H02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Communities use scientific knowledge to make real decisions — like choosing drought-resistant crops, planning recycling programs, or protecting a coastline from erosion.',
        'Even everyday choices, like picking a sunscreen with the right SPF, use science to make an informed decision.',
      ],
      illustrations: [
        { brief: 'Coastal erosion response and recycling policy scenes', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'wave', label: 'Coastal erosion' }, { icon: 'recycle', label: 'Recycling' }, { icon: 'bottle', label: 'Sunscreen SPF' }], caption: 'Science informs everyday and community decisions' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-H02-q1', type: 'mcq', prompt: 'Choosing a drought-resistant crop is an example of…', options: ['Using science to inform a decision', 'Ignoring evidence', 'A random guess'], answer: 'Using science to inform a decision', difficulty: 1 },
        { id: 'Y6-SCI-H02-q2', type: 'mcq', prompt: 'Choosing a sunscreen with a higher SPF is a decision informed by…', options: ['Scientific knowledge about UV protection', 'Fashion trends only', 'Coin flip'], answer: 'Scientific knowledge about UV protection', difficulty: 1 },
        { id: 'Y6-SCI-H02-q3', type: 'mcq', prompt: 'A council deciding to build a sea wall after studying coastal erosion data is using…', options: ['Scientific knowledge to guide a decision', 'A guess with no evidence', 'Nothing related to science'], answer: 'Scientific knowledge to guide a decision', difficulty: 2 },
        { id: 'Y6-SCI-H02-q4', type: 'mcq', prompt: 'Recycling programs are usually designed using knowledge from…', options: ['Environmental science', 'Random chance', 'Sport statistics'], answer: 'Environmental science', difficulty: 1 },
        { id: 'Y6-SCI-H02-q5', type: 'mcq', prompt: 'Science informing "everyday decisions" means it is used by…', options: ['Individuals and communities, not just scientists', 'Only professional scientists', 'No one in daily life'], answer: 'Individuals and communities, not just scientists', difficulty: 2 },
        { id: 'Y6-SCI-H02-q6', type: 'mcq', prompt: 'A farmer choosing when to plant crops based on rainfall data is an example of…', options: ['Applying scientific knowledge to a decision', 'Ignoring the weather', 'Pure luck'], answer: 'Applying scientific knowledge to a decision', difficulty: 2 },
      ],
    },
  },
  // ---------- Science Inquiry (6 CDs) ----------
  {
    id: 'Y6-SCI-I01',
    title: 'Asking questions & predicting',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Good scientific questions can actually be tested — "what happens if…" or "how does… affect…" rather than questions with no testable answer.',
        'A prediction is your reasoned guess about what will happen, based on what you already know — not just a random guess.',
      ],
      illustrations: [
        { brief: 'A question-ladder from "what" to "how/if" questions', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'What is it? (observe)' }, { text: 'Why does it happen?' }, { text: 'What if I change X?' }, { text: 'Testable question!' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I01-q1', type: 'mcq', prompt: 'Which question can actually be tested?', options: ['Is blue a nice colour?', 'Does more sunlight make a plant grow taller?', 'What is the best pet?'], answer: 'Does more sunlight make a plant grow taller?', difficulty: 2 },
        { id: 'Y6-SCI-I01-q2', type: 'mcq', prompt: 'A prediction should be based on…', options: ['What you already know or have observed', 'A completely random guess', 'What sounds exciting'], answer: 'What you already know or have observed', difficulty: 2 },
        { id: 'Y6-SCI-I01-q3', type: 'mcq', prompt: 'Which is a testable scientific question?', options: ['Do plants grow faster with more water?', 'What is the nicest plant?', 'Are plants friendly?'], answer: 'Do plants grow faster with more water?', difficulty: 2 },
        { id: 'Y6-SCI-I01-q4', type: 'mcq', prompt: 'A "how does X affect Y" question is useful because it…', options: ['Can be investigated and measured', 'Cannot be answered ever', 'Is only an opinion'], answer: 'Can be investigated and measured', difficulty: 2 },
        { id: 'Y6-SCI-I01-q5', type: 'mcq', prompt: 'Posing a good investigable question is usually the…', options: ['First step of an investigation', 'Last step of an investigation', 'Not part of an investigation'], answer: 'First step of an investigation', difficulty: 1 },
        { id: 'Y6-SCI-I01-q6', type: 'mcq', prompt: 'A prediction is different from a wild guess because it is…', options: ['Reasoned from existing knowledge', 'Always correct', 'Chosen randomly'], answer: 'Reasoned from existing knowledge', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-SCI-I02',
    title: 'Planning fair tests',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'A fair test changes only ONE thing at a time (the variable), keeps everything else the same (controlled), and measures the result — that way you know what actually caused the change.',
        'Planning also means thinking about safety, and — for investigations on Country or Place — understanding that some land and knowledge require permission before you investigate there.',
      ],
      illustrations: [
        { brief: 'A "fair test" lab bench showing changed/measured/controlled jars for a plant experiment', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'No water', value: 2 }, { label: 'Some water', value: 8 }, { label: 'Lots of water', value: 7 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I02-q1', type: 'mcq', prompt: 'In a fair test, how many variables should you change at a time?', options: ['One', 'As many as possible', 'None'], answer: 'One', difficulty: 1 },
        { id: 'Y6-SCI-I02-q2', type: 'mcq', prompt: 'In the plant fair test, what should stay the same across all pots?', options: ['Everything except the amount of water', 'Nothing at all', 'The pot colour only, nothing else matters'], answer: 'Everything except the amount of water', difficulty: 2 },
        { id: 'Y6-SCI-I02-q3', type: 'mcq', prompt: 'A "controlled" variable in an experiment is one that is…', options: ['Kept the same on purpose', 'Changed on purpose', 'Ignored completely'], answer: 'Kept the same on purpose', difficulty: 2 },
        { id: 'Y6-SCI-I02-q4', type: 'mcq', prompt: 'Thinking about safety before starting an experiment is part of…', options: ['Planning a fair test', 'Something unrelated to science', 'Only needed for chemistry'], answer: 'Planning a fair test', difficulty: 1 },
        { id: 'Y6-SCI-I02-q5', type: 'mcq', prompt: 'Some investigations on Country or Place require…', options: ['Permission before investigating', 'No planning at all', 'Nothing special'], answer: 'Permission before investigating', difficulty: 2 },
        { id: 'Y6-SCI-I02-q6', type: 'mcq', prompt: 'The variable you deliberately change in a fair test is called the…', options: ['Changed (independent) variable', 'Controlled variable', 'Measured variable'], answer: 'Changed (independent) variable', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y6-SCI-I03',
    title: 'Measuring & recording data',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Rulers, thermometers and timers all measure with a level of precision — recording "about 10cm" is very different from a careful "10.2cm".',
        'Good scientists record data as they go in a table or log, not from memory afterwards — memory is unreliable and precision matters.',
      ],
      illustrations: [
        { brief: 'Ruler, thermometer and timer close-ups with a data table', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'Ruler' }, { icon: 'clock', label: 'Timer' }, { icon: 'clipboard', label: 'Data log' }], caption: 'The right tool, measured and recorded precisely' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I03-q1', type: 'mcq', prompt: 'Which tool measures temperature?', options: ['Ruler', 'Thermometer', 'Timer'], answer: 'Thermometer', difficulty: 1 },
        { id: 'Y6-SCI-I03-q2', type: 'mcq', prompt: 'Which tool measures how long something takes?', options: ['Timer', 'Ruler', 'Thermometer'], answer: 'Timer', difficulty: 1 },
        { id: 'Y6-SCI-I03-q3', type: 'mcq', prompt: 'Recording "about 10cm" instead of "10.2cm" is…', options: ['Less precise', 'More precise', 'Exactly the same'], answer: 'Less precise', difficulty: 2 },
        { id: 'Y6-SCI-I03-q4', type: 'mcq', prompt: 'Data should be recorded…', options: ['As you go, in a table or log', 'Only from memory afterwards', 'Never — just remember it'], answer: 'As you go, in a table or log', difficulty: 2 },
        { id: 'Y6-SCI-I03-q5', type: 'mcq', prompt: 'Digital tools (like a digital thermometer) can help scientists…', options: ['Measure with more precision', 'Make results less reliable', 'Replace the need to measure'], answer: 'Measure with more precision', difficulty: 2 },
        { id: 'Y6-SCI-I03-q6', type: 'mcq', prompt: 'Why is precise measurement important in an investigation?', options: ['So results can be trusted and compared', 'It looks neater', 'It is required by law'], answer: 'So results can be trusted and compared', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-SCI-I04',
    title: 'Representing & describing data',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Raw data (a pile of tally marks) is hard to read — turning it into a table or graph reveals patterns and trends at a glance.',
        'Once you have a graph, describe what it shows in words too: what went up, what stayed the same, what surprised you?',
      ],
      illustrations: [
        { brief: 'Steps from tally → column graph → "what it means" caption', ready: true, diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Mon', value: 3 }, { label: 'Tue', value: 5 }, { label: 'Wed', value: 4 }, { label: 'Thu', value: 7 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I04-q1', type: 'mcq', prompt: 'A graph is useful mainly because it…', options: ['Looks decorative', 'Reveals patterns at a glance', 'Replaces the need for data'], answer: 'Reveals patterns at a glance', difficulty: 1 },
        { id: 'Y6-SCI-I04-q2', type: 'short', prompt: 'In the chart (Mon 3, Tue 5, Wed 4, Thu 7), which day had the highest value?', answer: 'Thu', difficulty: 2 },
        { id: 'Y6-SCI-I04-q3', type: 'mcq', prompt: 'A tally mark chart is most useful for…', options: ['Quickly counting how often something occurs', 'Showing exact temperatures', 'Drawing pictures'], answer: 'Quickly counting how often something occurs', difficulty: 1 },
        { id: 'Y6-SCI-I04-q4', type: 'mcq', prompt: 'After building a graph, a scientist should also…', options: ['Describe what it shows in words', 'Throw away the data', 'Never look at it again'], answer: 'Describe what it shows in words', difficulty: 2 },
        { id: 'Y6-SCI-I04-q5', type: 'mcq', prompt: 'A physical model (like a 3D volcano model) helps represent data by…', options: ['Making an idea easier to see and understand', 'Replacing all numbers', 'Being purely decorative'], answer: 'Making an idea easier to see and understand', difficulty: 2 },
        { id: 'Y6-SCI-I04-q6', type: 'mcq', prompt: 'Choosing the right way to represent data (table vs graph) depends on…', options: ['What best shows the pattern in that data', 'Personal favourite colour', 'Nothing — they are all identical'], answer: 'What best shows the pattern in that data', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-SCI-I05',
    title: 'Evaluating — errors & evidence',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Every measurement can have small errors — a wobbly ruler, a mistimed stopwatch. Good scientists think about what might have gone wrong rather than assuming every result is perfect.',
        'A strong conclusion is backed by evidence (data you collected), not just a feeling about what you expected to find.',
      ],
      illustrations: [
        { brief: 'A "spot the wobble" measuring-mistake panel', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'Measurement' }, { icon: 'magnifier', label: 'Spot the error' }], caption: 'Where could error have crept into this measurement?' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I05-q1', type: 'mcq', prompt: 'A conclusion should mainly be based on…', options: ['What you expected to find', 'The evidence you collected', 'What your friend guessed'], answer: 'The evidence you collected', difficulty: 1 },
        { id: 'Y6-SCI-I05-q2', type: 'mcq', prompt: 'A wobbly ruler giving slightly different readings each time is an example of…', options: ['A source of measurement error', 'Perfect precision', 'A conclusion'], answer: 'A source of measurement error', difficulty: 2 },
        { id: 'Y6-SCI-I05-q3', type: 'mcq', prompt: 'Comparing your results with a classmate\'s findings helps you…', options: ['Check for errors or differences', 'Copy their answers', 'Ignore your own data'], answer: 'Check for errors or differences', difficulty: 2 },
        { id: 'Y6-SCI-I05-q4', type: 'mcq', prompt: 'Good scientists assume every result is…', options: ['Possibly affected by small errors', 'Always perfectly accurate', 'Not worth checking'], answer: 'Possibly affected by small errors', difficulty: 2 },
        { id: 'Y6-SCI-I05-q5', type: 'mcq', prompt: 'After finding a possible error, a good next step is to…', options: ['Pose a further question or retest', 'Give up on the investigation', 'Hide the mistake'], answer: 'Pose a further question or retest', difficulty: 2 },
        { id: 'Y6-SCI-I05-q6', type: 'mcq', prompt: 'Choosing evidence to support a conclusion should be based on…', options: ['What the data actually shows', 'What sounds most exciting', 'What was guessed beforehand'], answer: 'What the data actually shows', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-SCI-I06',
    title: 'Communicating findings',
    year: '6',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S6I06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Findings only matter if you can explain them clearly — a scientific poster uses headings, a diagram and short, precise sentences to share what you found.',
        'Choose your language for your audience: a class presentation and a written report can both be accurate, but sound quite different.',
      ],
      illustrations: [
        { brief: 'A mini scientific-poster template', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Question' }, { icon: 'microscope', label: 'Method' }, { icon: 'bar-chart', label: 'Results' }, { icon: 'bulb', label: 'Conclusion' }], caption: 'A clear structure for sharing findings' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-SCI-I06-q1', type: 'mcq', prompt: 'A scientific poster usually includes a question, method, results and…', options: ['A joke', 'A conclusion', 'A shopping list'], answer: 'A conclusion', difficulty: 1 },
        { id: 'Y6-SCI-I06-q2', type: 'mcq', prompt: 'Choosing your language for a written report vs a spoken talk should…', options: ['Change to suit the audience and format', 'Always stay identical', 'Never matter'], answer: 'Change to suit the audience and format', difficulty: 2 },
        { id: 'Y6-SCI-I06-q3', type: 'mcq', prompt: 'A finding is only useful to others if it is…', options: ['Communicated clearly', 'Kept private', 'Left as raw numbers only'], answer: 'Communicated clearly', difficulty: 2 },
        { id: 'Y6-SCI-I06-q4', type: 'mcq', prompt: 'Using digital tools (like presentation software) to share findings can help…', options: ['Make findings clearer and more engaging', 'Replace the need for accurate data', 'Hide mistakes'], answer: 'Make findings clearer and more engaging', difficulty: 2 },
        { id: 'Y6-SCI-I06-q5', type: 'mcq', prompt: 'A scientific poster\'s "method" section explains…', options: ['How the investigation was carried out', 'The final conclusion only', 'Unrelated facts'], answer: 'How the investigation was carried out', difficulty: 2 },
        { id: 'Y6-SCI-I06-q6', type: 'mcq', prompt: 'Short, precise sentences in a scientific report help readers…', options: ['Understand findings quickly and clearly', 'Get confused', 'Skip the whole report'], answer: 'Understand findings quickly and clearly', difficulty: 1 },
      ],
    },
  },
];
