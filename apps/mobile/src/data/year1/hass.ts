import type { Topic } from '../../types/curriculum';

/**
 * Year 1 HASS — full topic bank.
 * Source of truth: docs/content/year-1-5/hass.md (AC v9.0; strands History and
 * Geography for Year 1's four knowledge CDs).
 * Y1-HASS-GE02 (AC9HS1K04) touches First Nations Australians' care for
 * Country/Place and carries `sensitivity: true` — it is written to
 * established, general facts only (e.g. caring for Country/Place for tens of
 * thousands of years) pending a community-protocol review (see AGENTS.md).
 * Every topic renders real vector diagrams (see
 * src/components/illustrations/diagrams.tsx) and ships 6 assignment questions
 * at nominal pace / 4 under compact pace. Skills AC9HS1S01–S06 are woven into
 * each lesson and its questions, not listed in `cd`. Vocabulary and sentence
 * patterns stay simple for six-year-olds, with clear, unambiguous answers.
 */
export const YEAR1_HASS_TOPICS: Topic[] = [
  // ---------- History ----------
  {
    id: 'Y1-HASS-HI01',
    title: 'Family structures & roles then and now',
    year: '1',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS1K01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Families come in all shapes and sizes — a mum and a dad, one parent, grandparents, or two mums or two dads — and every family helps its people feel safe and loved.',
        'Long ago, jobs at home were often split in a fixed way, like only mum cooking or only dad working; today anyone in a family can cook, clean, work or help out.',
        'Some things have stayed the same, though: families have always cared for each other, shared meals and played together.',
      ],
      illustrations: [
        { brief: 'Different family shapes: many people, one home, all caring for each other', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Different families' }, { icon: 'house', label: 'One home' }, { icon: 'smiley', label: 'Caring for each other' }], caption: 'Families come in all shapes and sizes' } },
        { brief: 'Flowchart: fixed jobs long ago, shared jobs now, caring that stays the same', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Long ago: one person did each job' }, { text: 'Now: anyone can cook, clean or work' }, { text: 'Same: families care for each other' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-HASS-HI01-q1', type: 'mcq', prompt: 'Which of these can be a family?', options: ['A mum, a dad and their children', 'A couch and a table', 'A bucket and a spade'], answer: 'A mum, a dad and their children', difficulty: 1 },
        { id: 'Y1-HASS-HI01-q2', type: 'mcq', prompt: 'Today, both mums and dads can cook, clean and go to work. This is…', options: ['A normal way families share jobs', 'Only what children do', 'Something nobody can do'], answer: 'A normal way families share jobs', difficulty: 1 },
        { id: 'Y1-HASS-HI01-q3', type: 'mcq', prompt: 'When grandparents were little, most children played…', options: ['Outside and with simple toys', 'On tablets all day', 'With robots that talked'], answer: 'Outside and with simple toys', difficulty: 2 },
        { id: 'Y1-HASS-HI01-q4', type: 'short', prompt: 'Families can look different, but they all help and ___ for each other.', answer: 'care', difficulty: 2 },
        { id: 'Y1-HASS-HI01-q5', type: 'mcq', prompt: 'A good way to learn how family life was long ago is to…', options: ['Ask grandparents and look at old photos', 'Ask a fish at the pet shop', 'Watch only today\u2019s TV shows'], answer: 'Ask grandparents and look at old photos', difficulty: 2 },
        { id: 'Y1-HASS-HI01-q6', type: 'short', prompt: 'What word means the people who care for you and live with you at home?', answer: 'family', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-HASS-HI02',
    title: 'Daily life then and now',
    year: '1',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS1K02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When your grandparents were little, daily life looked different — many children wrote with chalk, letters arrived by post and there were no mobile phones.',
        'Today many of us ride to school in a car or bus, write with tablets and send messages on phones.',
        'But some things are the same: children then and now go to school to learn, and they love to play with friends!',
      ],
      illustrations: [
        { brief: 'Flowchart: chalk and letters long ago, tablets and phones now, school and play the same', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Then: chalk and letters' }, { text: 'Now: tablets and phones' }, { text: 'Same: school and play' }] } },
        { brief: 'A letter, a phone and a ball showing what changed and what stayed the same', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'envelope', label: 'Letters long ago' }, { icon: 'phone', label: 'Messages today' }, { icon: 'ball', label: 'Play then and now' }], caption: 'Some parts of daily life change, some stay the same' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-HASS-HI02-q1', type: 'mcq', prompt: 'When grandparents were young, most people did NOT have…', options: ['Mobile phones', 'Streets', 'Friends'], answer: 'Mobile phones', difficulty: 1 },
        { id: 'Y1-HASS-HI02-q2', type: 'mcq', prompt: 'Long ago, children at school often wrote with…', options: ['Chalk on a board', 'Tablets', 'Robots'], answer: 'Chalk on a board', difficulty: 1 },
        { id: 'Y1-HASS-HI02-q3', type: 'mcq', prompt: 'When grandparents were little, most children spent play time…', options: ['Outside with friends', 'Watching videos all day', 'Talking to robots'], answer: 'Outside with friends', difficulty: 2 },
        { id: 'Y1-HASS-HI02-q4', type: 'short', prompt: 'Children then and now both go to ___ to learn.', answer: 'school', difficulty: 1 },
        { id: 'Y1-HASS-HI02-q5', type: 'mcq', prompt: 'One thing that has stayed the same is that children…', options: ['Still love to play with friends', 'Never need to eat', 'Ride rockets to school'], answer: 'Still love to play with friends', difficulty: 2 },
        { id: 'Y1-HASS-HI02-q6', type: 'short', prompt: 'Long ago a letter was sent by post; today we can send a message on a ___ .', answer: 'phone', difficulty: 2 },
      ],
    },
  },
  // ---------- Geography ----------
  {
    id: 'Y1-HASS-GE01',
    title: 'Features of local places',
    year: '1',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS1K03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Look around your local place and you will find three kinds of features: natural, managed and constructed.',
        'Natural features grow or happen by themselves, like a river, a tree or the sky; managed features are looked after by people, like a park or a garden.',
        'Constructed features are built by people, like houses, roads and schools — and a map can help you find where they all are!',
      ],
      illustrations: [
        { brief: 'Natural features: a tree, a river and a fish growing or living by themselves', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'tree', label: 'Tree' }, { icon: 'wave', label: 'River' }, { icon: 'fish', label: 'Fish' }], caption: 'Natural features grow or happen by themselves' } },
        { brief: 'A built house, a cared-for garden and a map to find them', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'House — built' }, { icon: 'sprout', label: 'Garden — cared for' }, { icon: 'map', label: 'Map finds them' }], caption: 'People build some features and care for others' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-HASS-GE01-q1', type: 'mcq', prompt: 'Which of these is a natural feature?', options: ['A river', 'A house', 'A playground'], answer: 'A river', difficulty: 1 },
        { id: 'Y1-HASS-GE01-q2', type: 'mcq', prompt: 'Which of these was BUILT by people?', options: ['A school', 'A mountain', 'A river'], answer: 'A school', difficulty: 1 },
        { id: 'Y1-HASS-GE01-q3', type: 'short', prompt: 'Who looks after the flowers in a park — people or the wind?', answer: 'people', difficulty: 1 },
        { id: 'Y1-HASS-GE01-q4', type: 'short', prompt: 'Trees, rivers and mountains are called ___ features.', answer: 'natural', difficulty: 2 },
        { id: 'Y1-HASS-GE01-q5', type: 'mcq', prompt: 'A map of your local area helps you…', options: ['Find where places like the park and shop are', 'Know what is for dinner', 'Hear a loud noise'], answer: 'Find where places like the park and shop are', difficulty: 2 },
        { id: 'Y1-HASS-GE01-q6', type: 'mcq', prompt: 'Roads, houses and bridges are made by people, so they are called…', options: ['Constructed features', 'Natural features', 'Invisible features'], answer: 'Constructed features', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-HASS-GE02',
    title: 'Caring for places',
    year: '1',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS1K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 10,
      body: [
        'Places are special, and we can all help look after them — by putting rubbish in the bin, saving water and planting trees.',
        'First Nations Australians have cared for and looked after Country/Place for tens of thousands of years — the longest care of all.',
        'When many people care for a place together, it stays healthy, safe and beautiful for everyone.',
      ],
      illustrations: [
        { brief: 'Caring actions: rubbish in the bin, saving water and planting trees', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'recycle', label: 'Rubbish in the bin' }, { icon: 'droplet', label: 'Save water' }, { icon: 'tree', label: 'Plant trees' }], caption: 'Small actions keep places clean and cared for' } },
        { brief: 'Country/Place: land, sky and seasons cared for over tens of thousands of years', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Country/Place' }, { icon: 'sun', label: 'Seasons watched' }, { icon: 'sprout', label: 'Land cared for' }], caption: 'First Nations Australians have cared for Country/Place for tens of thousands of years' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-HASS-GE02-q1', type: 'mcq', prompt: 'Putting your rubbish in the bin helps…', options: ['Keep a place clean and cared for', 'Make the place messier', 'Make the bin grow'], answer: 'Keep a place clean and cared for', difficulty: 1 },
        { id: 'Y1-HASS-GE02-q2', type: 'mcq', prompt: 'First Nations Australians have looked after Country/Place for…', options: ['Tens of thousands of years', 'One day', 'A few minutes'], answer: 'Tens of thousands of years', difficulty: 1 },
        { id: 'Y1-HASS-GE02-q3', type: 'mcq', prompt: 'Watering a garden and planting trees are ways to…', options: ['Care for a place', 'Break the ground', 'Skip the fun'], answer: 'Care for a place', difficulty: 2 },
        { id: 'Y1-HASS-GE02-q4', type: 'short', prompt: 'If you drop a wrapper at the park, where should it go?', answer: 'In the bin', difficulty: 1 },
        { id: 'Y1-HASS-GE02-q5', type: 'mcq', prompt: 'First Nations Australians look after the land, rivers, plants and animals. What do they call this land?', options: ['Country/Place', 'The mall', 'The moon'], answer: 'Country/Place', difficulty: 2 },
        { id: 'Y1-HASS-GE02-q6', type: 'short', prompt: 'When you see a wrapper on the ground, what should you do to care for the place?', answer: 'Put it in the bin', difficulty: 2 },
      ],
    },
  },
];
