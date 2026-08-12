import type { Topic } from '../../types/curriculum';

/**
 * Year 5 Science, full topic bank.
 * Source of truth: docs/content/year-1-5/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry). Every topic carries its AC9S5xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite codes,
 * author original lessons, never bulk-copy syllabus text).
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 * First Nations knowledge of living things is referenced in Y5-SCI-U01 as
 * general facts only (respectful, no sensitivity flag).
 */
export const YEAR5_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (4 CDs) ----------
  {
    id: 'Y5-SCI-U01',
    title: 'Adaptations for survival',
    year: '5',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S5U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Adaptations are the tricks living things have for surviving where they live, structural ones are body features like sharp claws, and behavioural ones are actions like migrating before winter.',
        'A cactus stores water in its thick stem and a camel can go days without a drink, because each one is built for a hot, dry place. First Nations Australians have watched these patterns in plants and animals over many generations to read the seasons and find food and water.',
      ],
      illustrations: [
        { brief: 'Structural features: sharp claws, thick fur and a water-storing cactus', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: 'Sharp claws catch prey' }, { icon: 'sun', label: 'Thick fur beats the cold' }, { icon: 'droplet', label: 'Cactus stores water' }], caption: 'Structural features help living things survive' } },
        { brief: 'A flowchart showing a behavioural adaptation: escaping the midday heat', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Desert gets hot' }, { text: 'Find shade and rest' }, { text: 'Hunt and move at dusk' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-U01-q1', type: 'mcq', prompt: 'Which is a structural adaptation (a body feature)?', options: ['Sharp claws for catching prey', 'Migrating to find food', 'Hiding at night'], answer: 'Sharp claws for catching prey', difficulty: 1 },
        { id: 'Y5-SCI-U01-q2', type: 'mcq', prompt: 'Which is a behavioural adaptation (an action)?', options: ['A bird migrating south before winter', 'Thick fur', 'Long ears to lose heat'], answer: 'A bird migrating south before winter', difficulty: 1 },
        { id: 'Y5-SCI-U01-q3', type: 'mcq', prompt: 'A cactus storing water in its thick stem is an adaptation for living in…', options: ['A hot, dry desert', 'A freezing ocean', 'A dark cave'], answer: 'A hot, dry desert', difficulty: 1 },
        { id: 'Y5-SCI-U01-q4', type: 'mcq', prompt: 'Which structural feature best helps an animal hide from predators?', options: ['Camouflaged skin or feathers', 'Bright, loud colours', 'Extra-long legs'], answer: 'Camouflaged skin or feathers', difficulty: 2 },
        { id: 'Y5-SCI-U01-q5', type: 'short', prompt: 'Name one structural adaptation that helps a camel survive in a hot, sandy desert.', answer: 'A hump that stores fat', difficulty: 2 },
        { id: 'Y5-SCI-U01-q6', type: 'mcq', prompt: 'First Nations Australians have long observed when certain animals appear or move to know the seasons. This knowledge is…', options: ['Based on careful observation over many generations', 'A lucky guess from one day', 'Unrelated to the natural world'], answer: 'Based on careful observation over many generations', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-SCI-U02',
    title: "Earth's changing surface",
    year: '5',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S5U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Earth\'s surface is always on the move, weathering breaks rocks into pieces, erosion carries those pieces away, and deposition drops them somewhere new.',
        'Rain, ice and roots slowly crack rocks; rivers and wind sweep the bits away; and the pieces settle where the flow slows, like where a river meets the sea. Big changes can take millions of years, so keep watching!',
      ],
      illustrations: [
        { brief: 'Weathering → erosion → deposition flowchart', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Weathering: rain and ice crack rocks' }, { text: 'Erosion: the river carries pieces away' }, { text: 'Deposition: pieces settle at the mouth' }] } },
        { brief: 'Slow forces that reshape the land', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'wave', label: 'Waves carve cliffs' }, { icon: 'wind', label: 'Wind moves sand' }, { icon: 'tree', label: 'Roots split rocks' }], caption: 'Slow forces reshape the land' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-U02-q1', type: 'mcq', prompt: 'Weathering is the process of…', options: ['Breaking rocks into smaller pieces', 'Carrying rock pieces away', 'Dropping pieces in a new place'], answer: 'Breaking rocks into smaller pieces', difficulty: 1 },
        { id: 'Y5-SCI-U02-q2', type: 'mcq', prompt: 'Erosion is when pieces of rock are…', options: ['Carried away by wind or water', 'Broken in place by ice', 'Dropped and left behind'], answer: 'Carried away by wind or water', difficulty: 1 },
        { id: 'Y5-SCI-U02-q3', type: 'mcq', prompt: 'Deposition happens when carried material…', options: ['Settles and is dropped', 'Breaks into smaller pieces', 'Changes into rock instantly'], answer: 'Settles and is dropped', difficulty: 1 },
        { id: 'Y5-SCI-U02-q4', type: 'mcq', prompt: 'A river deposits the most sediment where its flow slows down, such as…', options: ['Where it meets the ocean', 'On a steep mountain slope', 'Where it rushes fastest'], answer: 'Where it meets the ocean', difficulty: 2 },
        { id: 'Y5-SCI-U02-q5', type: 'short', prompt: 'Which force, wind, water or ice, is the main mover of loose desert sand dunes?', answer: 'wind', difficulty: 2 },
        { id: 'Y5-SCI-U02-q6', type: 'mcq', prompt: 'Which sequence correctly shows the order of the three processes?', options: ['Weathering → erosion → deposition', 'Deposition → weathering → erosion', 'Erosion → deposition → weathering'], answer: 'Weathering → erosion → deposition', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-SCI-U03',
    title: 'Light, sources, shadows & bending',
    year: '5',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S5U03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Light comes from sources, natural ones like the Sun and made ones like a torch, and it travels in straight lines until something gets in the way.',
        'When an object blocks the light, a shadow forms behind it. Light can also bounce off a mirror (reflection) and bend as it passes through glass or water (refraction), that is why a straw looks bent in a glass of water!',
      ],
      illustrations: [
        { brief: 'Natural source, made source and a mirror reflecting light', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Sun, natural source' }, { icon: 'bulb', label: 'Lamp, made source' }, { icon: 'mirror', label: 'Mirror reflects' }], caption: 'Light comes from sources and can reflect' } },
        { brief: 'Shadow formation: light travels straight and is blocked', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Light leaves the lamp' }, { text: 'Travels in a straight line' }, { text: 'Your hand blocks it' }, { text: 'A shadow forms behind' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-U03-q1', type: 'mcq', prompt: 'Which is a natural source of light?', options: ['The Sun', 'A torch', 'A lamp'], answer: 'The Sun', difficulty: 1 },
        { id: 'Y5-SCI-U03-q2', type: 'mcq', prompt: 'Which is a made (artificial) source of light?', options: ['A light bulb', 'Lightning', 'The Moon'], answer: 'A light bulb', difficulty: 1 },
        { id: 'Y5-SCI-U03-q3', type: 'mcq', prompt: 'A shadow is formed when…', options: ['An object blocks light travelling in a straight line', 'Light bends around everything', 'An object makes its own light'], answer: 'An object blocks light travelling in a straight line', difficulty: 2 },
        { id: 'Y5-SCI-U03-q4', type: 'mcq', prompt: 'When light bounces off a mirror, we say it…', options: ['Reflects', 'Refracts', 'Disappears'], answer: 'Reflects', difficulty: 1 },
        { id: 'Y5-SCI-U03-q5', type: 'mcq', prompt: 'A straw in a glass of water looks bent because light…', options: ['Refracts as it moves from water to air', 'Reflects off the glass', 'Stops travelling in water'], answer: 'Refracts as it moves from water to air', difficulty: 3 },
        { id: 'Y5-SCI-U03-q6', type: 'short', prompt: 'Where does a shadow form when an object blocks the light?', answer: 'behind the object', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-SCI-U04',
    title: 'Solids, liquids & gases, particles',
    year: '5',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S5U04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Everything is made of tiny particles, and the state a thing is in, solid, liquid or gas, comes from how those particles sit and move.',
        'In a solid the particles are packed tight; in a liquid they slide over each other; in a gas they spread out and zoom around. Add heat and the particles gain energy and spread, melt, then boil!',
      ],
      illustrations: [
        { brief: 'Particle arrangement in a solid, liquid and gas', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: 'Solid, packed tight' }, { icon: 'droplet', label: 'Liquid, slide around' }, { icon: 'wind', label: 'Gas, spread out' }], caption: 'Same particles, different spacing' } },
        { brief: 'Heating a solid: ice → water → steam', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ice (solid), particles locked' }, { text: 'Water (liquid), particles slide' }, { text: 'Steam (gas), particles zoom' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-U04-q1', type: 'mcq', prompt: 'In a solid, the particles are…', options: ['Packed tightly and vibrate in place', 'Far apart and moving fast', 'Sliding over one another'], answer: 'Packed tightly and vibrate in place', difficulty: 1 },
        { id: 'Y5-SCI-U04-q2', type: 'mcq', prompt: 'In a liquid, the particles can…', options: ['Slide and roll over each other', 'Only vibrate in one spot', 'Fly far apart with nothing between them'], answer: 'Slide and roll over each other', difficulty: 1 },
        { id: 'Y5-SCI-U04-q3', type: 'mcq', prompt: 'In a gas, the particles are…', options: ['Far apart and moving fast in all directions', 'Packed tightly in rows', 'Stuck in a fixed shape'], answer: 'Far apart and moving fast in all directions', difficulty: 2 },
        { id: 'Y5-SCI-U04-q4', type: 'mcq', prompt: 'A solid keeps its own shape because its particles…', options: ['Are held in a fixed pattern', 'Can pour freely', 'Have nothing holding them'], answer: 'Are held in a fixed pattern', difficulty: 2 },
        { id: 'Y5-SCI-U04-q5', type: 'mcq', prompt: 'When a solid melts into a liquid, its particles…', options: ['Gain energy and start to slide over each other', 'Stop moving completely', 'Disappear into the air'], answer: 'Gain energy and start to slide over each other', difficulty: 2 },
        { id: 'Y5-SCI-U04-q6', type: 'short', prompt: 'Which state of matter can always spread out to fill the whole container it is in?', answer: 'gas', difficulty: 2 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (2 CDs) ----------
  {
    id: 'Y5-SCI-H01',
    title: 'Collaboration in science',
    year: '5',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S5H01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big scientific breakthroughs are usually team efforts, scientists work together across classrooms, countries and even generations, building on the work of the people before them.',
        'A scientist who shares their results hands the next person a head start. That is how knowledge grows: each discovery becomes the stepping stone for the next one.',
      ],
      illustrations: [
        { brief: 'Teamwork across people, places and time', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Team effort' }, { icon: 'globe', label: 'Across the world' }, { icon: 'telescope', label: 'Builds on discoveries' }], caption: 'Science grows through teamwork' } },
        { brief: 'How shared results grow into new knowledge', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'A scientist observes' }, { text: 'Shares results with others' }, { text: 'Others test and build on it' }, { text: 'New knowledge grows' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-H01-q1', type: 'mcq', prompt: 'Scientific advances often happen because…', options: ['People build on the work of others and collaborate', 'Scientists always work completely alone', 'Luck with no prior work'], answer: 'People build on the work of others and collaborate', difficulty: 1 },
        { id: 'Y5-SCI-H01-q2', type: 'mcq', prompt: 'Collaboration means…', options: ['Working together toward shared goals', 'Always working alone', 'Copying without asking'], answer: 'Working together toward shared goals', difficulty: 1 },
        { id: 'Y5-SCI-H01-q3', type: 'mcq', prompt: 'When one research team shares results so another team can continue the work, this is an example of…', options: ['Building on the work of others', 'Keeping secrets', 'Starting from scratch every time'], answer: 'Building on the work of others', difficulty: 2 },
        { id: 'Y5-SCI-H01-q4', type: 'mcq', prompt: 'Two teams from different countries studying the same question and sharing data show science is…', options: ['A collaborative global effort', 'Best done in isolation', 'Only about competitions'], answer: 'A collaborative global effort', difficulty: 2 },
        { id: 'Y5-SCI-H01-q5', type: 'short', prompt: 'Name one way scientists can share their work so others can build on it.', answer: 'publishing their results', difficulty: 2 },
        { id: 'Y5-SCI-H01-q6', type: 'mcq', prompt: 'A later scientist improving a model first built by an earlier team shows that…', options: ['Knowledge grows over time through collaboration', 'Each scientist must start over', 'Science never changes'], answer: 'Knowledge grows over time through collaboration', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-SCI-H02',
    title: 'Science in decision-making',
    year: '5',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S5H02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Scientific knowledge helps people and communities spot problems and make better choices, from choosing a sunscreen with higher SPF to planning recycling programs.',
        'A farmer checks rainfall data before planting, and a council studies erosion data before protecting a beach. Science turns guesses into informed decisions.',
      ],
      illustrations: [
        { brief: 'Everyday and community decisions guided by science', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'recycle', label: 'Recycling plan' }, { icon: 'wave', label: 'Protect the coast' }, { icon: 'bottle', label: 'Higher SPF' }], caption: 'Science guides real decisions' } },
        { brief: 'From problem to informed decision', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Spot the problem' }, { text: 'Gather scientific data' }, { text: 'Compare the options' }, { text: 'Make an informed decision' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-H02-q1', type: 'mcq', prompt: 'A council using rainfall data to decide when to bring in water restrictions is an example of…', options: ['Using science to make a decision', 'Guessing randomly', 'Ignoring evidence'], answer: 'Using science to make a decision', difficulty: 1 },
        { id: 'Y5-SCI-H02-q2', type: 'mcq', prompt: 'Choosing a higher-SPF sunscreen is a decision informed by…', options: ['Scientific knowledge about UV protection', 'The colour of the bottle', 'A coin toss'], answer: 'Scientific knowledge about UV protection', difficulty: 1 },
        { id: 'Y5-SCI-H02-q3', type: 'mcq', prompt: 'Communities consider scientific evidence when deciding…', options: ['Which recycling programs to run', 'What to have for dinner tonight', 'Which TV show is best'], answer: 'Which recycling programs to run', difficulty: 2 },
        { id: 'Y5-SCI-H02-q4', type: 'mcq', prompt: 'A farmer choosing drought-resistant crops after studying rainfall data is…', options: ['Applying scientific knowledge to a real problem', 'A guess with no evidence', 'Not related to science'], answer: 'Applying scientific knowledge to a real problem', difficulty: 2 },
        { id: 'Y5-SCI-H02-q5', type: 'mcq', prompt: 'Using scientific knowledge to weigh the pros and cons before acting helps people…', options: ['Make more informed decisions', 'Avoid all decisions', 'Skip the evidence'], answer: 'Make more informed decisions', difficulty: 2 },
        { id: 'Y5-SCI-H02-q6', type: 'short', prompt: 'Name one everyday decision that could be informed by scientific knowledge.', answer: 'choosing sunscreen', difficulty: 2 },
      ],
    },
  },
  // ---------- Science Inquiry (6 CDs) ----------
  {
    id: 'Y5-SCI-I01',
    title: 'Investigable questions & predictions',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'An investigable question asks about something you can measure and test, like "does water temperature change how fast salt dissolves?" rather than "which flavour is nicer?".',
        'A prediction is your reasoned guess about what will happen, based on what you already know. Spot a pattern, pose a testable question, then predict before you test, you are thinking like a scientist!',
      ],
      illustrations: [
        { brief: 'From observing a pattern to testing a prediction', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Observe a pattern' }, { text: 'Pose a "does X affect Y?" question' }, { text: 'Make a reasoned prediction' }, { text: 'Test it' }] } },
        { brief: 'The tools of an inquiry: spotting patterns, predicting, testing', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'magnifier', label: 'Look for patterns' }, { icon: 'crystal-ball', label: 'Predict' }, { icon: 'check-box', label: 'Testable question' }], caption: 'From question to testable prediction' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I01-q1', type: 'mcq', prompt: 'Which question can be investigated by a fair test?', options: ['Does water temperature change how fast salt dissolves?', 'Is salt nicer than pepper?', 'What is the best flavour?'], answer: 'Does water temperature change how fast salt dissolves?', difficulty: 2 },
        { id: 'Y5-SCI-I01-q2', type: 'mcq', prompt: 'A good investigable question usually asks about…', options: ['A relationship that can be measured and tested', 'Only personal opinions', 'Things that cannot be measured'], answer: 'A relationship that can be measured and tested', difficulty: 1 },
        { id: 'Y5-SCI-I01-q3', type: 'mcq', prompt: 'A prediction is…', options: ['A reasoned guess based on what you know', 'A random answer', 'The final result'], answer: 'A reasoned guess based on what you know', difficulty: 2 },
        { id: 'Y5-SCI-I01-q4', type: 'mcq', prompt: '"I think warmer water will dissolve the salt faster" is an example of…', options: ['A prediction', 'A conclusion', 'A safety rule'], answer: 'A prediction', difficulty: 2 },
        { id: 'Y5-SCI-I01-q5', type: 'mcq', prompt: 'Which question is NOT investigable?', options: ['Which rock feels the friendliest?', 'Which rock type erodes the fastest?', 'Which material absorbs the most water?'], answer: 'Which rock feels the friendliest?', difficulty: 2 },
        { id: 'Y5-SCI-I01-q6', type: 'short', prompt: 'Before testing, what do scientists state about what they think will happen?', answer: 'a prediction', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-SCI-I02',
    title: 'Planning repeatable investigations',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A repeatable investigation is one others can follow: you change only ONE variable at a time, keep everything else the same, and record clear steps so the test can be run again.',
        'Planning also means describing the risks before you start, hot water, sharp edges, fragile glass, and using materials safely. Run the test a few times to check your results are reliable!',
      ],
      illustrations: [
        { brief: 'A fair-test plant watering comparison', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'No water', value: 2 }, { label: 'Some water', value: 8 }, { label: 'Lots of water', value: 7 }] } },
        { brief: 'Planning steps for a repeatable fair test', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ask the question' }, { text: 'Pick ONE thing to change' }, { text: 'Keep the rest the same' }, { text: 'Describe the risks' }, { text: 'Repeat for reliability' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I02-q1', type: 'mcq', prompt: 'To make an experiment repeatable, scientists should…', options: ['Record clear steps so others can follow them', 'Change everything each time', 'Work from memory only'], answer: 'Record clear steps so others can follow them', difficulty: 1 },
        { id: 'Y5-SCI-I02-q2', type: 'mcq', prompt: 'In a fair test, you change…', options: ['Only ONE variable at a time', 'As many variables as possible', 'No variables'], answer: 'Only ONE variable at a time', difficulty: 1 },
        { id: 'Y5-SCI-I02-q3', type: 'mcq', prompt: 'The variable you keep the same for every test is called the…', options: ['Controlled variable', 'Changed variable', 'Result'], answer: 'Controlled variable', difficulty: 2 },
        { id: 'Y5-SCI-I02-q4', type: 'mcq', prompt: 'Repeating the test more than once helps…', options: ['Check the results are reliable', 'Make the experiment longer for no reason', 'Hide mistakes'], answer: 'Check the results are reliable', difficulty: 2 },
        { id: 'Y5-SCI-I02-q5', type: 'mcq', prompt: 'Describing risks like hot water or sharp edges before starting is part of…', options: ['Planning a safe investigation', 'The final conclusion', 'Drawing a graph'], answer: 'Planning a safe investigation', difficulty: 1 },
        { id: 'Y5-SCI-I02-q6', type: 'mcq', prompt: 'A student is testing how light affects plant growth. Which should they keep the same?', options: ['Water, soil and pot size', 'The amount of light', 'Everything, including the light'], answer: 'Water, soil and pot size', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-SCI-I03',
    title: 'Precise measurement',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'The right tool measures the right thing, a ruler for length, a thermometer for temperature, a timer for time, and the finest markings give the most precise readings.',
        'Digital tools like electronic timers and digital scales make measuring even more precise. Record your numbers as you go in a table, and your data will be trustworthy!',
      ],
      illustrations: [
        { brief: 'Measuring tools: ruler, timer and data clipboard', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'Length' }, { icon: 'clock', label: 'Time' }, { icon: 'clipboard', label: 'Record as you go' }], caption: 'The right tool, measured and recorded precisely' } },
        { brief: 'A precise reading sits between whole numbers', ready: true, diagram: { kind: 'number-line', min: 21, max: 22, marks: [{ value: 21, label: '21' }, { value: 21.5, label: '21.5' }, { value: 22, label: '22' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I03-q1', type: 'mcq', prompt: 'Which tool is best for measuring length precisely?', options: ['A ruler', 'A stopwatch', 'A thermometer'], answer: 'A ruler', difficulty: 1 },
        { id: 'Y5-SCI-I03-q2', type: 'mcq', prompt: 'Which tool is best for measuring temperature?', options: ['A thermometer', 'A ruler', 'A stopwatch'], answer: 'A thermometer', difficulty: 1 },
        { id: 'Y5-SCI-I03-q3', type: 'mcq', prompt: 'Reading a thermometer as 21.5°C instead of "about 21°C" is…', options: ['More precise', 'Less precise', 'The same precision'], answer: 'More precise', difficulty: 2 },
        { id: 'Y5-SCI-I03-q4', type: 'mcq', prompt: 'Digital tools like electronic timers and digital scales help scientists…', options: ['Measure more precisely', 'Skip measuring', 'Make results less accurate'], answer: 'Measure more precisely', difficulty: 2 },
        { id: 'Y5-SCI-I03-q5', type: 'mcq', prompt: 'Recording measurements as you go, in a table, helps you…', options: ['Avoid forgetting or guessing later', 'Make numbers up', 'Skip the experiment'], answer: 'Avoid forgetting or guessing later', difficulty: 2 },
        { id: 'Y5-SCI-I03-q6', type: 'short', prompt: 'To measure length more precisely, would you use a ruler marked in millimetres or centimetres?', answer: 'millimetres', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-SCI-I04',
    title: 'Representing & describing patterns',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Raw data is a pile of numbers, turn it into a table, column graph or dot plot and the patterns leap out at you.',
        'A plant that grows 2cm, then 5cm, then 9cm, then 14cm has a clear trend: growth keeps climbing. Describing that trend in words is half the scientist\'s job!',
      ],
      illustrations: [
        { brief: 'Bean plant growth climbing over four days', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Day 1', value: 2 }, { label: 'Day 3', value: 5 }, { label: 'Day 5', value: 9 }, { label: 'Day 7', value: 14 }] } },
        { brief: 'A dot plot of days for bean seeds to sprout', ready: true, diagram: { kind: 'dot-plot', values: [2, 3, 3, 4, 4, 4, 5, 5, 6], unit: 'days' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I04-q1', type: 'mcq', prompt: 'A column graph is useful because it…', options: ['Shows patterns and trends at a glance', 'Replaces the need for data', 'Only works for colours'], answer: 'Shows patterns and trends at a glance', difficulty: 1 },
        { id: 'Y5-SCI-I04-q2', type: 'mcq', prompt: 'In a plant-growth chart reading 2cm, 5cm, 9cm, then 14cm over four days, the pattern is…', options: ['Growth is increasing each time', 'Growth is decreasing', 'Growth stays the same'], answer: 'Growth is increasing each time', difficulty: 2 },
        { id: 'Y5-SCI-I04-q3', type: 'short', prompt: 'In the chart (Day 1: 2cm, Day 3: 5cm, Day 5: 9cm, Day 7: 14cm), on which day was the plant tallest?', answer: 'Day 7', difficulty: 2 },
        { id: 'Y5-SCI-I04-q4', type: 'mcq', prompt: 'A table organises data so it is…', options: ['Easy to read and compare', 'Harder to understand', 'A mystery'], answer: 'Easy to read and compare', difficulty: 1 },
        { id: 'Y5-SCI-I04-q5', type: 'mcq', prompt: 'Describing a trend in data means explaining…', options: ['How the values change across the graph', 'What colour the graph is', 'Who made the graph'], answer: 'How the values change across the graph', difficulty: 2 },
        { id: 'Y5-SCI-I04-q6', type: 'mcq', prompt: 'Choosing a column graph, dot plot or table depends on…', options: ['What best shows the pattern in your data', 'Your favourite colour', 'Nothing at all'], answer: 'What best shows the pattern in your data', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-SCI-I05',
    title: 'Comparing methods & conclusions',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I05' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Every measurement can hide a small error, a wobbly ruler, a mistimed stopwatch. Comparing your method with a classmate\'s helps you spot where errors might have crept in.',
        'A strong conclusion follows from the evidence you actually collected. If your result disagrees with another team\'s, check both methods, retest, and pose a fresh question!',
      ],
      illustrations: [
        { brief: 'Spot the error, then retest', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'A wobbly ruler' }, { icon: 'magnifier', label: 'Check for errors' }, { icon: 'smiley', label: 'Retest' }], caption: 'Spot the error, then retest' } },
        { brief: 'From evidence to a reasoned conclusion', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Collect the evidence' }, { text: 'Compare with others' }, { text: 'Spot sources of error' }, { text: 'Draw a reasoned conclusion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I05-q1', type: 'mcq', prompt: 'A wobbly ruler giving slightly different lengths each time is an example of…', options: ['A source of measurement error', 'Perfect precision', 'A conclusion'], answer: 'A source of measurement error', difficulty: 2 },
        { id: 'Y5-SCI-I05-q2', type: 'mcq', prompt: 'A conclusion should be based on…', options: ['The evidence you collected', 'What you hoped would happen', 'A friend\'s guess'], answer: 'The evidence you collected', difficulty: 1 },
        { id: 'Y5-SCI-I05-q3', type: 'mcq', prompt: 'Comparing your methods with a classmate\'s helps you…', options: ['Spot differences and possible errors', 'Copy without understanding', 'Ignore your results'], answer: 'Spot differences and possible errors', difficulty: 2 },
        { id: 'Y5-SCI-I05-q4', type: 'mcq', prompt: 'If your result is very different from another team\'s, a good next step is to…', options: ['Check both methods for sources of error', 'Just pick the higher number', 'Delete your data'], answer: 'Check both methods for sources of error', difficulty: 2 },
        { id: 'Y5-SCI-I05-q5', type: 'mcq', prompt: 'A reasoned conclusion is one that…', options: ['Follows from the evidence and reasoning', 'Is a random guess', 'Ignores the data'], answer: 'Follows from the evidence and reasoning', difficulty: 1 },
        { id: 'Y5-SCI-I05-q6', type: 'mcq', prompt: 'Two teams get different answers using different rulers. The BEST way to compare fairly is to…', options: ['Repeat both using the same equipment and method', 'Average the answers without repeating', 'Only keep the best-looking result'], answer: 'Repeat both using the same equipment and method', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-SCI-I06',
    title: 'Communicating for audiences',
    year: '5',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S5I06' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Findings only matter if you can share them, and the best way depends on who you are telling. A poster for a school fair, a talk for your class and a report for a scientist all do different jobs.',
        'Pick your language to fit: simple words and clear pictures for younger kids, precise science words for an expert. Know your audience, choose your format, then share your findings with confidence!',
      ],
      illustrations: [
        { brief: 'One set of findings, three ways to share it', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Report' }, { icon: 'speaker', label: 'Talk' }, { icon: 'picture-frame', label: 'Poster' }], caption: 'Same findings, different audiences' } },
        { brief: 'Steps to communicate findings for an audience', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Know your audience' }, { text: 'Choose the format' }, { text: 'Pick the right words' }, { text: 'Share your findings' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-SCI-I06-q1', type: 'mcq', prompt: 'A scientific poster for a school fair should be written so that…', options: ['Visitors can understand it quickly', 'Only experts can read it', 'Nobody reads it'], answer: 'Visitors can understand it quickly', difficulty: 1 },
        { id: 'Y5-SCI-I06-q2', type: 'mcq', prompt: 'A report for a scientist and a talk for your class should use…', options: ['Language chosen for each audience', 'Identical words every time', 'The most confusing words'], answer: 'Language chosen for each audience', difficulty: 1 },
        { id: 'Y5-SCI-I06-q3', type: 'mcq', prompt: 'A poster, a talk and a written report can share the same findings but…', options: ['Present them differently for the audience', 'Must all be identical', 'Cannot all be accurate'], answer: 'Present them differently for the audience', difficulty: 2 },
        { id: 'Y5-SCI-I06-q4', type: 'mcq', prompt: 'Using a graph or diagram in your communication helps the audience…', options: ['Understand the findings more easily', 'Get confused', 'Ignore your work'], answer: 'Understand the findings more easily', difficulty: 2 },
        { id: 'Y5-SCI-I06-q5', type: 'mcq', prompt: 'For an audience of younger kids, you would most likely…', options: ['Use simple words and lots of clear pictures', 'Use long, complex science words', 'Skip the main point'], answer: 'Use simple words and lots of clear pictures', difficulty: 2 },
        { id: 'Y5-SCI-I06-q6', type: 'short', prompt: 'Name the two things you should consider before sharing your findings: who you are telling and what you want them to know.', answer: 'audience and purpose', difficulty: 2 },
      ],
    },
  },
];
