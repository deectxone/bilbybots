import type { Topic } from '../../types/curriculum';

/**
 * Year 4 Science — full topic bank.
 * Source of truth for scope: docs/content/year-1-5/science.md (AC v9.0).
 * Strands: Science understanding (AC9S4U01–04), Science as a human endeavour
 * (AC9S4H01–02), Science inquiry (AC9S4I01–06). Every topic carries its
 * AC9S4xxxx code and a rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder. Each
 * assignment carries 6 questions (nominal pace) / 4 (compact pace), per
 * docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR4_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (4 CDs) ----------
  {
    id: 'Y4-SCI-U01',
    title: 'Food chains & habitats',
    year: '4',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S4U01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every habitat is packed with living things that depend on each other for food — and a food chain shows exactly who eats who!',
        'Plants are producers that make their own food from sunlight, animals are consumers that eat other living things, and tiny decomposers recycle leftovers into soil.',
        'Point each arrow at what gets eaten — sun to grass to grasshopper to kookaburra — and you can read the whole chain of life.',
      ],
      illustrations: [
        {
          brief: 'Food chain flowchart: sun, grass, grasshopper, kookaburra',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Sun gives energy' },
              { text: 'Grass makes food (producer)' },
              { text: 'Grasshopper eats grass (consumer)' },
              { text: 'Kookaburra eats grasshopper (consumer)' },
            ],
          },
        },
        {
          brief: 'Flowchart: decomposers recycle dead matter into soil',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Dead leaves & scraps' },
              { text: 'Decomposers recycle them' },
              { text: 'Nutrients return to soil' },
              { text: 'New plants can grow' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-U01-q1', type: 'mcq', prompt: 'A producer is a living thing that...', options: ['makes its own food using sunlight', 'eats other animals', 'only lives in the ocean'], answer: 'makes its own food using sunlight', difficulty: 1 },
        { id: 'Y4-SCI-U01-q2', type: 'mcq', prompt: 'The arrow in a food chain shows...', options: ['which way the food energy flows', 'where the animals sleep', 'how fast animals run'], answer: 'which way the food energy flows', difficulty: 2 },
        { id: 'Y4-SCI-U01-q3', type: 'short', prompt: 'What do we call living things that make their own food from sunlight?', answer: 'producers', difficulty: 1 },
        { id: 'Y4-SCI-U01-q4', type: 'mcq', prompt: 'Which of these is a consumer?', options: ['grass', 'a rabbit', 'a tomato plant'], answer: 'a rabbit', difficulty: 1 },
        { id: 'Y4-SCI-U01-q5', type: 'mcq', prompt: 'Decomposers like worms and fungi...', options: ['recycle dead matter into soil', 'make their own food from sunlight', 'hunt and catch rabbits'], answer: 'recycle dead matter into soil', difficulty: 2 },
        { id: 'Y4-SCI-U01-q6', type: 'mcq', prompt: 'If all the grass in a habitat died, the rabbits that eat it would most likely...', options: ['have less food and struggle to survive', 'turn into producers', 'be completely unaffected'], answer: 'have less food and struggle to survive', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-U02',
    title: 'The water cycle',
    year: '4',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S4U02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Water is always on the move — the water cycle is its never-ending road trip around Earth!',
        'The Sun heats water so it evaporates into water vapour and rises; high up it cools and condenses into clouds; then it falls back to Earth as precipitation — rain or snow.',
        'When the water lands, it flows into rivers and oceans, and the whole journey starts again.',
      ],
      illustrations: [
        {
          brief: 'Water cycle flowchart: evaporate, condense, precipitate, collect',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Sun heats the water' },
              { text: 'Evaporation — water turns to vapour' },
              { text: 'Condensation — clouds form' },
              { text: 'Precipitation — rain falls' },
              { text: 'Water flows back to rivers & oceans' },
            ],
          },
        },
        {
          brief: 'Water cycle scenes: sun, cloud, rain and ocean',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'sun', label: 'Evaporation' },
              { icon: 'raincloud', label: 'Condensation' },
              { icon: 'droplet', label: 'Precipitation' },
              { icon: 'wave', label: 'Back to the ocean' },
            ],
            caption: 'Evaporation → Condensation → Precipitation',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-U02-q1', type: 'mcq', prompt: 'When water turns into water vapour and rises, the process is called...', options: ['evaporation', 'condensation', 'precipitation'], answer: 'evaporation', difficulty: 1 },
        { id: 'Y4-SCI-U02-q2', type: 'mcq', prompt: 'Clouds form when water vapour...', options: ['cools and condenses into tiny droplets', 'gets hotter and disappears', 'turns straight into solid ice'], answer: 'cools and condenses into tiny droplets', difficulty: 2 },
        { id: 'Y4-SCI-U02-q3', type: 'short', prompt: 'What word means rain, snow or hail falling from the sky?', answer: 'precipitation', difficulty: 2 },
        { id: 'Y4-SCI-U02-q4', type: 'mcq', prompt: 'A puddle disappears on a hot day because the water...', options: ['evaporates into the air', 'turns into stone', 'sinks away forever'], answer: 'evaporates into the air', difficulty: 1 },
        { id: 'Y4-SCI-U02-q5', type: 'mcq', prompt: 'Which of these is NOT part of the water cycle?', options: ['evaporation', 'condensation', 'fossilisation'], answer: 'fossilisation', difficulty: 2 },
        { id: 'Y4-SCI-U02-q6', type: 'mcq', prompt: 'Most of the water vapour in the water cycle comes from...', options: ['the Sun heating oceans, rivers and lakes', 'inside mountains', 'the Moon'], answer: 'the Sun heating oceans, rivers and lakes', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-SCI-U03',
    title: 'Forces — friction, gravity & magnets',
    year: '4',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S4U03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A force is a push or a pull — and you are a force machine every time you open a door, kick a ball or squeeze a tube of toothpaste!',
        'Gravity pulls things towards the centre of Earth, friction rubs and slows things down, and magnets pull or push on some metals without even touching them.',
        'Forces can change how fast something moves, which way it goes, and even its shape.',
      ],
      illustrations: [
        {
          brief: 'Three forces scene: gravity, friction and magnets',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'ball', label: 'Gravity pulls down' },
              { icon: 'runner', label: 'Friction slows things' },
              { icon: 'link', label: 'Magnets pull some metals' },
            ],
            caption: 'Three forces at work',
          },
        },
        {
          brief: 'Flowchart: push a toy car, friction slows it, it stops',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Push the toy car' },
              { text: 'It moves forward' },
              { text: 'Friction slows it down' },
              { text: 'It stops' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-U03-q1', type: 'mcq', prompt: 'A force is...', options: ['a push or a pull', 'a colour', 'a taste'], answer: 'a push or a pull', difficulty: 1 },
        { id: 'Y4-SCI-U03-q2', type: 'mcq', prompt: 'Gravity pulls things...', options: ['towards the centre of Earth', 'up into the sky', 'sideways only'], answer: 'towards the centre of Earth', difficulty: 1 },
        { id: 'Y4-SCI-U03-q3', type: 'mcq', prompt: 'Rubbing your hands together to warm them is an example of...', options: ['friction', 'magnetism', 'gravity'], answer: 'friction', difficulty: 2 },
        { id: 'Y4-SCI-U03-q4', type: 'mcq', prompt: 'Which object will a magnet pick up?', options: ['a steel paperclip', 'a plastic ruler', 'a wooden block'], answer: 'a steel paperclip', difficulty: 1 },
        { id: 'Y4-SCI-U03-q5', type: 'short', prompt: 'Name the force that pulls a dropped apple down to the ground.', answer: 'gravity', difficulty: 1 },
        { id: 'Y4-SCI-U03-q6', type: 'mcq', prompt: 'A ball rolling on grass stops sooner than a ball rolling on smooth ice because...', options: ['grass creates more friction', 'ice is heavier', 'grass is magnetic'], answer: 'grass creates more friction', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-U04',
    title: 'Materials & their properties',
    year: '4',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S4U04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every material has properties — its special qualities — and choosing the right material is a superpower: soft fibres for clothes, strong metals for tools, see-through glass for windows and light plastics for toys!',
        'Some materials come from nature, like wool and wood, while others are made by people, like plastic and glass.',
        'First Nations Australians have used natural materials like bark, fibre and stone with care and respect for Country for thousands of years.',
      ],
      illustrations: [
        {
          brief: 'Material families and their jobs: fibres, metal, glass, plastic',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'tree', label: 'Fibres — soft & warm' },
              { icon: 'cube', label: 'Metal — strong' },
              { icon: 'bottle', label: 'Glass — see-through' },
              { icon: 'bowl', label: 'Plastic — light' },
            ],
            caption: 'Properties match the job',
          },
        },
        {
          brief: 'Flowchart: choosing the best material for a job',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'What is it for?' },
              { text: 'What properties are needed?' },
              { text: 'Pick the best material' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-U04-q1', type: 'mcq', prompt: 'Which property makes glass a good choice for windows?', options: ['it lets light through', 'it is stretchy', 'it is magnetic'], answer: 'it lets light through', difficulty: 1 },
        { id: 'Y4-SCI-U04-q2', type: 'mcq', prompt: 'Which material is best for a strong bridge support?', options: ['metal', 'cotton wool', 'paper'], answer: 'metal', difficulty: 2 },
        { id: 'Y4-SCI-U04-q3', type: 'short', prompt: 'Name the material often used to make a waterproof raincoat.', answer: 'plastic', difficulty: 2 },
        { id: 'Y4-SCI-U04-q4', type: 'short', prompt: 'Which material lets light pass through and is used for windows?', answer: 'glass', difficulty: 1 },
        { id: 'Y4-SCI-U04-q5', type: 'mcq', prompt: 'Wool from sheep is an example of...', options: ['a natural fibre', 'a kind of metal', 'a type of glass'], answer: 'a natural fibre', difficulty: 2 },
        { id: 'Y4-SCI-U04-q6', type: 'mcq', prompt: 'First Nations Australians have used natural materials like bark and fibre...', options: ['with care and respect for Country', 'to build metal machines', 'only as decorations'], answer: 'with care and respect for Country', difficulty: 3 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (2 CDs) ----------
  {
    id: 'Y4-SCI-H01',
    title: 'Data builds scientific explanations',
    year: '4',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S4H01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Scientists are pattern-spotters — they collect data, like how much rain falls each day, and use it to explain what is happening and why.',
        'One splash of data is just a clue, but lots of data gathered over time can reveal a pattern that grows into a strong scientific explanation.',
        'That is how scientists came to explain everything from where rain comes from to why the river rises in spring.',
      ],
      illustrations: [
        {
          brief: 'Bar chart of weekly rainfall building an explanation',
          ready: true,
          diagram: {
            kind: 'bar-compare',
            unit: 'mm',
            items: [
              { label: 'Week 1', value: 2 },
              { label: 'Week 2', value: 5 },
              { label: 'Week 3', value: 9 },
              { label: 'Week 4', value: 12 },
            ],
          },
        },
        {
          brief: 'Flowchart: collect data, spot a pattern, build an explanation',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Collect data' },
              { text: 'Look for a pattern' },
              { text: 'Build an explanation' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-H01-q1', type: 'mcq', prompt: 'A scientific explanation is built from...', options: ['data and evidence', 'guesswork only', 'dreams'], answer: 'data and evidence', difficulty: 1 },
        { id: 'Y4-SCI-H01-q2', type: 'mcq', prompt: 'Rainfall data shows the rain getting heavier each week. That pattern helps a scientist...', options: ['develop an explanation', 'stop collecting data', 'sell the data'], answer: 'develop an explanation', difficulty: 2 },
        { id: 'Y4-SCI-H01-q3', type: 'mcq', prompt: 'Why is more data usually better than less data?', options: ['patterns are easier to spot and trust', 'it takes up more space', 'it is always correct'], answer: 'patterns are easier to spot and trust', difficulty: 2 },
        { id: 'Y4-SCI-H01-q4', type: 'short', prompt: 'What do we call a repeatable thing scientists look for in data, like rain increasing each week?', answer: 'pattern', difficulty: 2 },
        { id: 'Y4-SCI-H01-q5', type: 'mcq', prompt: 'Which is an example of using data to build an explanation?', options: ['recording rainfall for months to explain when the river rises', 'guessing why a plant died', 'naming a new plant'], answer: 'recording rainfall for months to explain when the river rises', difficulty: 3 },
        { id: 'Y4-SCI-H01-q6', type: 'mcq', prompt: 'A good scientific explanation is one that is...', options: ['supported by the collected data', 'based on one lucky guess', 'decided before collecting any data'], answer: 'supported by the collected data', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-H02',
    title: 'Science solves problems',
    year: '4',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S4H02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When there is a problem, science can help find the answer — like designing a solar water purifier so people can get clean drinking water.',
        'People study the problem, test ideas and use what they learn to build better solutions.',
        'You already use this superpower: when a glue stick stops sticking, you ask why and try something new!',
      ],
      illustrations: [
        {
          brief: 'Flowchart: identify the problem, study the science, test, solve',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Identify the problem' },
              { text: 'Study the science' },
              { text: 'Test an idea' },
              { text: 'Use the solution' },
            ],
          },
        },
        {
          brief: 'Science solving problems: clean water, saving resources, new ideas',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'droplet', label: 'Clean water' },
              { icon: 'recycle', label: 'Save resources' },
              { icon: 'bulb', label: 'Better ideas' },
            ],
            caption: 'Science solves real problems',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-H02-q1', type: 'mcq', prompt: 'A solar water purifier is an example of...', options: ['science solving a problem', 'a lucky accident', 'magic'], answer: 'science solving a problem', difficulty: 1 },
        { id: 'Y4-SCI-H02-q2', type: 'mcq', prompt: 'The first step in solving a problem scientifically is usually...', options: ['understanding the problem', 'hiding the problem', 'ignoring the problem'], answer: 'understanding the problem', difficulty: 2 },
        { id: 'Y4-SCI-H02-q3', type: 'mcq', prompt: 'Why test an idea before using it everywhere?', options: ['to see if it really works', 'to waste time', 'to make it harder'], answer: 'to see if it really works', difficulty: 1 },
        { id: 'Y4-SCI-H02-q4', type: 'short', prompt: 'Name one problem science has helped people solve.', answer: 'clean drinking water', difficulty: 3 },
        { id: 'Y4-SCI-H02-q5', type: 'mcq', prompt: 'A farmer whose crop keeps wilting uses soil and rainfall data to change how they water. This is...', options: ['using science to solve a problem', 'a random guess', 'ignoring the evidence'], answer: 'using science to solve a problem', difficulty: 2 },
        { id: 'Y4-SCI-H02-q6', type: 'mcq', prompt: 'When a test shows an idea does not work, a good problem-solver...', options: ['learns from it and tries a better idea', 'gives up forever', 'pretends it worked'], answer: 'learns from it and tries a better idea', difficulty: 2 },
      ],
    },
  },
  // ---------- Science Inquiry (6 CDs) ----------
  {
    id: 'Y4-SCI-I01',
    title: 'Questions & predictions',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Scientists start with questions! The best ones can be tested, like "Do plants grow taller with more light?"',
        'A prediction is your best guess about what will happen, based on what you already know — not just a wild guess.',
        'Ask a testable question, make a prediction, then investigate to find out if you were right.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: observe, ask a testable question, predict, investigate',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Observe' },
              { text: 'Ask a testable question' },
              { text: 'Make a prediction' },
              { text: 'Investigate' },
            ],
          },
        },
        {
          brief: 'Question, prediction and testing scene',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bulb', label: 'A question' },
              { icon: 'crystal-ball', label: 'A prediction' },
              { icon: 'microscope', label: 'Test it!' },
            ],
            caption: 'Question → predict → test',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I01-q1', type: 'mcq', prompt: 'Which question can be tested?', options: ['Do bean plants grow faster with more sunlight?', 'Is red the nicest colour?', 'What is the best movie?'], answer: 'Do bean plants grow faster with more sunlight?', difficulty: 1 },
        { id: 'Y4-SCI-I01-q2', type: 'mcq', prompt: 'A prediction should be based on...', options: ['what you already know or have observed', 'a completely random guess', 'what someone dared you to say'], answer: 'what you already know or have observed', difficulty: 2 },
        { id: 'Y4-SCI-I01-q3', type: 'short', prompt: 'What do we call your best guess about what will happen in an experiment?', answer: 'a prediction', difficulty: 1 },
        { id: 'Y4-SCI-I01-q4', type: 'mcq', prompt: 'Which is a testable question?', options: ['Do plants need water to grow?', 'Are puppies the cutest animals?', 'Why is the sky nicer than the sea?'], answer: 'Do plants need water to grow?', difficulty: 2 },
        { id: 'Y4-SCI-I01-q5', type: 'mcq', prompt: 'A good prediction is best described as...', options: ['a guess based on knowledge', 'a lucky number', 'the final result'], answer: 'a guess based on knowledge', difficulty: 2 },
        { id: 'Y4-SCI-I01-q6', type: 'mcq', prompt: 'After you make a prediction, the next step is to...', options: ['investigate and test it', 'stop asking questions', 'change the data'], answer: 'investigate and test it', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-SCI-I02',
    title: 'Planning fair investigations',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A fair test is a fair race: change only ONE thing, keep everything else the same, and measure what happens.',
        'The thing you change is the variable you are testing, and the things you keep the same are the controlled variables.',
        'A good plan also thinks about safety — safe tools, safe materials and a safe place to work.',
      ],
      illustrations: [
        {
          brief: 'Fair test of plant growth with different amounts of water',
          ready: true,
          diagram: {
            kind: 'bar-compare',
            unit: 'cm',
            items: [
              { label: 'No water', value: 1 },
              { label: 'Some water', value: 7 },
              { label: 'Lots of water', value: 6 },
            ],
          },
        },
        {
          brief: 'Flowchart: change one thing, keep the rest the same, measure',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Change one thing' },
              { text: 'Keep the rest the same' },
              { text: 'Measure the result' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I02-q1', type: 'mcq', prompt: 'In a fair test, how many things should you change at once?', options: ['one', 'two or more', 'none'], answer: 'one', difficulty: 1 },
        { id: 'Y4-SCI-I02-q2', type: 'mcq', prompt: 'You test whether more water makes plants grow taller. What should stay the same for every plant?', options: ['sunlight, soil and pot size', 'only the amount of water', 'nothing at all'], answer: 'sunlight, soil and pot size', difficulty: 2 },
        { id: 'Y4-SCI-I02-q3', type: 'mcq', prompt: 'In the plant test, the amount of water is...', options: ['the thing being changed', 'the thing being kept the same', 'the safety gear'], answer: 'the thing being changed', difficulty: 2 },
        { id: 'Y4-SCI-I02-q4', type: 'short', prompt: 'What do we call the parts of a fair test that we keep the same on purpose?', answer: 'controlled variables', difficulty: 3 },
        { id: 'Y4-SCI-I02-q5', type: 'mcq', prompt: 'Planning for safety before an experiment means...', options: ['checking the tools, materials and work area', 'skipping the experiment', 'using whatever you find'], answer: 'checking the tools, materials and work area', difficulty: 1 },
        { id: 'Y4-SCI-I02-q6', type: 'mcq', prompt: 'A fair test is better than changing lots of things at once because...', options: ['you can tell what actually caused the change', 'it takes longer', 'it is easier to write about'], answer: 'you can tell what actually caused the change', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-I03',
    title: 'Measuring with scaled instruments',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Scaled instruments have marked scales that let you measure carefully — a ruler in centimetres, a thermometer in degrees, a measuring cup in millilitres and a stopwatch in seconds.',
        'To read a scale, line up your eye with the mark and read the number exactly where the liquid or pointer sits.',
        'Measuring precisely and recording straight away makes your results trustworthy.',
      ],
      illustrations: [
        {
          brief: 'Thermometer showing 25 degrees',
          ready: true,
          diagram: {
            kind: 'thermometer',
            min: 0,
            max: 40,
            value: 25,
            unit: '°C',
          },
        },
        {
          brief: 'Scaled instruments: ruler, stopwatch and measuring cup',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'ruler', label: 'centimetres' },
              { icon: 'timer', label: 'seconds' },
              { icon: 'droplet', label: 'millilitres' },
            ],
            caption: 'Scaled instruments measure precisely',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I03-q1', type: 'mcq', prompt: 'Which tool measures temperature?', options: ['thermometer', 'ruler', 'stopwatch'], answer: 'thermometer', difficulty: 1 },
        { id: 'Y4-SCI-I03-q2', type: 'mcq', prompt: 'What units are marked on a ruler?', options: ['centimetres', 'degrees', 'seconds'], answer: 'centimetres', difficulty: 1 },
        { id: 'Y4-SCI-I03-q3', type: 'mcq', prompt: 'On a thermometer, the number right next to the top of the red liquid shows...', options: ['the temperature', 'the time', 'the length'], answer: 'the temperature', difficulty: 2 },
        { id: 'Y4-SCI-I03-q4', type: 'short', prompt: 'Which instrument measures how long an experiment takes?', answer: 'stopwatch', difficulty: 1 },
        { id: 'Y4-SCI-I03-q5', type: 'mcq', prompt: 'A bean shoot sits exactly on the 12 cm mark of the ruler. Its length is...', options: ['12 cm', 'about 20 cm', '12 degrees'], answer: '12 cm', difficulty: 2 },
        { id: 'Y4-SCI-I03-q6', type: 'mcq', prompt: 'Why should you record measurements as soon as you take them?', options: ['so the results are accurate and not forgotten', 'to finish faster', 'because it looks neat'], answer: 'so the results are accurate and not forgotten', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-I04',
    title: 'Representing data',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Raw data is hard to read — turning your measurements into a table or a column graph makes patterns pop out!',
        'A table lines numbers up neatly, and a graph turns numbers into bars you can compare at a glance.',
        'Choose the representation that shows your pattern best, then read it back: what went up, what stayed the same?',
      ],
      illustrations: [
        {
          brief: 'Column graph of sprouts per pot',
          ready: true,
          diagram: {
            kind: 'bar-compare',
            unit: 'sprouts',
            items: [
              { label: 'Pot A', value: 2 },
              { label: 'Pot B', value: 5 },
              { label: 'Pot C', value: 8 },
            ],
          },
        },
        {
          brief: 'Flowchart: collect, organise, graph, spot the pattern',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Collect data' },
              { text: 'Organise into a table' },
              { text: 'Draw a graph' },
              { text: 'Spot the pattern' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I04-q1', type: 'mcq', prompt: 'A column graph is good for...', options: ['comparing numbers at a glance', 'writing sentences', 'drawing a map'], answer: 'comparing numbers at a glance', difficulty: 1 },
        { id: 'Y4-SCI-I04-q2', type: 'mcq', prompt: 'In a table of plant heights, the rows usually list...', options: ['each plant or trial', 'favourite colours', 'the weather'], answer: 'each plant or trial', difficulty: 2 },
        { id: 'Y4-SCI-I04-q3', type: 'mcq', prompt: 'In the graph, Pot B grew 5 sprouts and Pot C grew 8. Which pot grew more?', options: ['Pot C', 'Pot B'], answer: 'Pot C', difficulty: 1 },
        { id: 'Y4-SCI-I04-q4', type: 'short', prompt: 'What do we call a picture of data made of bars you can compare?', answer: 'column graph', difficulty: 1 },
        { id: 'Y4-SCI-I04-q5', type: 'mcq', prompt: 'A model can help represent data by...', options: ['making an idea easier to see and understand', 'replacing all the numbers', 'hiding the results'], answer: 'making an idea easier to see and understand', difficulty: 2 },
        { id: 'Y4-SCI-I04-q6', type: 'mcq', prompt: 'After drawing your graph, you should...', options: ['describe the pattern you can see', 'throw the data away', 'stop collecting data'], answer: 'describe the pattern you can see', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-I05',
    title: 'Comparing findings & concluding',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'After an investigation, compare your results with what others found and with your prediction — scientists love comparing!',
        'If your results are close together, you can be more confident in your conclusion; if they are very different, it is time to wonder why and maybe test again.',
        'A conclusion answers your question using the evidence you gathered, not just what you hoped would happen.',
      ],
      illustrations: [
        {
          brief: 'Dot plot of plant heights across repeated trials',
          ready: true,
          diagram: {
            kind: 'dot-plot',
            values: [8, 9, 9, 10, 10, 11],
            unit: 'cm',
          },
        },
        {
          brief: 'Flowchart: compare, check the prediction, conclude, ask a new question',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Compare results' },
              { text: 'Check against your prediction' },
              { text: 'Write a conclusion' },
              { text: 'Ask a new question' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I05-q1', type: 'mcq', prompt: 'Comparing your results with a classmate\'s helps you...', options: ['check if your findings are similar', 'copy their answers', 'skip the conclusion'], answer: 'check if your findings are similar', difficulty: 1 },
        { id: 'Y4-SCI-I05-q2', type: 'mcq', prompt: 'If everyone\'s results are very close together, you can be...', options: ['more confident in the conclusion', 'sure someone copied', 'less sure of anything'], answer: 'more confident in the conclusion', difficulty: 2 },
        { id: 'Y4-SCI-I05-q3', type: 'mcq', prompt: 'A conclusion should...', options: ['answer your question using the evidence', 'just repeat your prediction', 'be a single word'], answer: 'answer your question using the evidence', difficulty: 2 },
        { id: 'Y4-SCI-I05-q4', type: 'short', prompt: 'What do you write at the end of an investigation that answers your question?', answer: 'a conclusion', difficulty: 1 },
        { id: 'Y4-SCI-I05-q5', type: 'mcq', prompt: 'Your results are very different from your prediction. What should you do?', options: ['wonder why and maybe test again', 'change the results', 'give up on science'], answer: 'wonder why and maybe test again', difficulty: 2 },
        { id: 'Y4-SCI-I05-q6', type: 'mcq', prompt: 'A great investigation often ends by...', options: ['posing a new question to explore', 'never recording anything', 'hiding the data'], answer: 'posing a new question to explore', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-SCI-I06',
    title: 'Communicating findings',
    year: '4',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S4I06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Findings are only useful if you share them! You can present a talk, build a poster or write a report with your question, method, results and conclusion.',
        'Use clear science words like "data" and "conclusion", and use digital tools like slides or charts to make your findings shine.',
        'Good scientists think about their audience — a poster for your class and a note for your family can both tell the same true story.',
      ],
      illustrations: [
        {
          brief: 'Scientific report sections: question, method, results, conclusion',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'clipboard', label: 'Question' },
              { icon: 'microscope', label: 'Method' },
              { icon: 'bar-chart', label: 'Results' },
              { icon: 'bulb', label: 'Conclusion' },
            ],
            caption: 'A clear report tells the whole story',
          },
        },
        {
          brief: 'Flowchart: question, method, results, conclusion',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'State the question' },
              { text: 'Explain the method' },
              { text: 'Show the results' },
              { text: 'Share the conclusion' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-SCI-I06-q1', type: 'mcq', prompt: 'A scientific report usually includes...', options: ['question, method, results and conclusion', 'only a drawing', 'just the prediction'], answer: 'question, method, results and conclusion', difficulty: 1 },
        { id: 'Y4-SCI-I06-q2', type: 'mcq', prompt: 'Using science words like "data" and "conclusion" makes your report...', options: ['clear and scientific', 'harder for everyone', 'shorter forever'], answer: 'clear and scientific', difficulty: 2 },
        { id: 'Y4-SCI-I06-q3', type: 'mcq', prompt: 'A bar chart in your presentation helps the audience...', options: ['see your results clearly', 'hear your voice', 'skip your talk'], answer: 'see your results clearly', difficulty: 1 },
        { id: 'Y4-SCI-I06-q4', type: 'short', prompt: 'What should a scientific report tell the reader at the very end?', answer: 'the conclusion', difficulty: 2 },
        { id: 'Y4-SCI-I06-q5', type: 'mcq', prompt: 'The "method" section of a report explains...', options: ['how you did the investigation', 'your favourite colour', 'the weather outside'], answer: 'how you did the investigation', difficulty: 2 },
        { id: 'Y4-SCI-I06-q6', type: 'mcq', prompt: 'Thinking about your audience means...', options: ['choosing how to share so others understand', 'only talking to scientists', 'keeping findings secret'], answer: 'choosing how to share so others understand', difficulty: 2 },
      ],
    },
  },
];
