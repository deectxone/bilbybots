import type { Topic } from '../../types/curriculum';

/**
 * Year 3 Science — full topic bank.
 * Scope mirrors the Australian Curriculum v9.0 content descriptions for
 * Year 3 (AC9S3xxx, AC9S3Hxx, AC9S3Ixx) across the three strands:
 * Science understanding (U01–U04), Science as a human endeavour (H01–H02)
 * and Science inquiry (I01–I06). Every topic carries its ACARA code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR3_SCIENCE_TOPICS: Topic[] = [
  {
    id: 'Y3-SCI-U01',
    title: 'Living & non-living things',
    year: '3',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S3U01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Living things grow, need food and water, and can make more living things — rocks and toy cars just stay the same.',
        'Plants and animals each live through a life cycle: a butterfly starts as an egg, becomes a caterpillar, then a chrysalis, and finally a butterfly!',
        'Spotting the stages of a life cycle helps us see that every living thing is on an amazing journey.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of the four stages of a butterfly life cycle',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Egg' }, { text: 'Caterpillar' }, { text: 'Chrysalis' }, { text: 'Butterfly' }] },
        },
        {
          brief: 'Living things scene with a plant, a tree, a fish and a cat',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'sprout', label: 'A plant' }, { icon: 'tree', label: 'A tree' }, { icon: 'fish', label: 'A fish' }, { icon: 'cat', label: 'A cat' }], caption: 'Living things grow, need food and water, and change through their lives.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-U01-q1', type: 'mcq', prompt: 'Which one is a living thing?', options: ['a sunflower', 'a pebble', 'a toy boat'], answer: 'a sunflower', difficulty: 1 },
        { id: 'Y3-SCI-U01-q2', type: 'mcq', prompt: 'Which of these does a living thing do?', options: ['grows and needs food and water', 'stays the same forever', 'is made of plastic'], answer: 'grows and needs food and water', difficulty: 1 },
        { id: 'Y3-SCI-U01-q3', type: 'short', prompt: 'What is the very first stage of a butterfly life cycle?', answer: 'egg', difficulty: 1 },
        { id: 'Y3-SCI-U01-q4', type: 'mcq', prompt: 'In the butterfly life cycle, what comes after the caterpillar?', options: ['the chrysalis', 'the egg', 'the flower'], answer: 'the chrysalis', difficulty: 2 },
        { id: 'Y3-SCI-U01-q5', type: 'mcq', prompt: 'Which shows the correct order of a frog life cycle?', options: ['eggs → tadpole → frog', 'frog → eggs → tadpole', 'tadpole → eggs → frog'], answer: 'eggs → tadpole → frog', difficulty: 2 },
        { id: 'Y3-SCI-U01-q6', type: 'short', prompt: 'A baby frog hatches from an egg. What is it called while it still has a tail and lives in the water?', answer: 'tadpole', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-U02',
    title: 'Soils, rocks & minerals',
    year: '3',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S3U02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Soil, rocks and minerals are Earth resources — things our planet gives us that people use every day.',
        'Soil is made when wind and rain slowly break rocks into tiny pieces that mix with dead leaves and animals.',
        'First Nations Australians have cared for Country for tens of thousands of years, using soil, rocks and minerals carefully so the land stays healthy for everyone.',
      ],
      illustrations: [
        {
          brief: 'Flowchart showing how soil forms from broken rock and plant matter',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Wind and rain break rocks into tiny pieces' }, { text: 'Pieces mix with dead leaves and animals' }, { text: 'Soil forms' }] },
        },
        {
          brief: 'Earth resources scene: rocks building homes, soil, metal coins and glass',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'Rocks build homes' }, { icon: 'globe', label: 'Soil on Earth' }, { icon: 'coin', label: 'Metals from minerals' }, { icon: 'bottle', label: 'Glass from sand' }], caption: 'People use Earth resources every day.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-U02-q1', type: 'mcq', prompt: 'What is soil mostly made of?', options: ['tiny pieces of broken rock mixed with dead plant and animal bits', 'water and ice', 'plastic and paper'], answer: 'tiny pieces of broken rock mixed with dead plant and animal bits', difficulty: 1 },
        { id: 'Y3-SCI-U02-q2', type: 'mcq', prompt: 'Which of these is an Earth resource?', options: ['soil', 'a plastic toy', 'a paper plane'], answer: 'soil', difficulty: 1 },
        { id: 'Y3-SCI-U02-q3', type: 'short', prompt: 'Rocks are made of smaller natural building blocks called what?', answer: 'minerals', difficulty: 2 },
        { id: 'Y3-SCI-U02-q4', type: 'mcq', prompt: 'Which everyday thing comes from minerals?', options: ['a metal spoon', 'a banana', 'a woollen jumper'], answer: 'a metal spoon', difficulty: 2 },
        { id: 'Y3-SCI-U02-q5', type: 'mcq', prompt: 'How have First Nations Australians cared for Earth resources for tens of thousands of years?', options: ['by caring for Country and taking only what is needed', 'by using everything up as fast as possible', 'by leaving rubbish behind'], answer: 'by caring for Country and taking only what is needed', difficulty: 2 },
        { id: 'Y3-SCI-U02-q6', type: 'short', prompt: 'Tiny pieces of broken rock mix with bits of dead plants and animals to make what?', answer: 'soil', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-SCI-U03',
    title: 'Heat energy & temperature',
    year: '3',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S3U03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Heat is a kind of energy, and the sun, fire and electricity are all sources of heat.',
        'Heat always moves from hotter things to cooler things, which is why a hot mug warms your hands and your cold hands cool the mug.',
        'We use a thermometer to measure temperature in degrees Celsius, so we can see exactly how hot or cold something is.',
      ],
      illustrations: [
        {
          brief: 'Thermometer reading 70 degrees for hot tea',
          ready: true,
          diagram: { kind: 'thermometer', min: 0, max: 110, value: 70, unit: '°C' },
        },
        {
          brief: 'Bar chart comparing temperatures of tap water, a warm day, hot tea and boiling water',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '°C', items: [{ label: 'Tap water', value: 20 }, { label: 'Warm day', value: 30 }, { label: 'Hot tea', value: 70 }, { label: 'Boiling water', value: 100 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-U03-q1', type: 'mcq', prompt: 'Which is a source of heat energy?', options: ['the sun', 'a pencil', 'a book'], answer: 'the sun', difficulty: 1 },
        { id: 'Y3-SCI-U03-q2', type: 'mcq', prompt: 'Heat always moves from ___ .', options: ['hot things to cold things', 'cold things to hot things', 'no one knows which way'], answer: 'hot things to cold things', difficulty: 1 },
        { id: 'Y3-SCI-U03-q3', type: 'mcq', prompt: 'You hold a warm mug of hot chocolate. Which way does the heat go?', options: ['from the mug into your hands', 'from your hands into the mug', 'nowhere at all'], answer: 'from the mug into your hands', difficulty: 2 },
        { id: 'Y3-SCI-U03-q4', type: 'short', prompt: 'What instrument do we use to measure temperature?', answer: 'thermometer', difficulty: 1 },
        { id: 'Y3-SCI-U03-q5', type: 'mcq', prompt: 'A warm plate and an ice cube touch. What happens to the ice cube?', options: ['it melts because it gains heat', 'it gets colder', 'nothing changes'], answer: 'it melts because it gains heat', difficulty: 2 },
        { id: 'Y3-SCI-U03-q6', type: 'mcq', prompt: 'Which is about the right temperature for a warm sunny day?', options: ['25°C', '95°C', '5°C'], answer: '25°C', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-U04',
    title: 'Solids, liquids & change of state',
    year: '3',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S3U04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Solids keep their own shape, but liquids flow and take the shape of whatever container they are in.',
        'When we add heat, a solid can melt into a liquid — like ice melting into water on a warm day.',
        'When we take heat away, a liquid can freeze back into a solid — put water in the freezer and it becomes ice again!',
      ],
      illustrations: [
        {
          brief: 'Flowchart of the melting and freezing cycle between ice and water',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Solid ice' }, { text: 'Add heat: it melts' }, { text: 'Liquid water' }, { text: 'Take heat away: it freezes' }, { text: 'Solid ice again' }] },
        },
        {
          brief: 'Scene comparing a solid ice cube with liquid water that pours into a bowl',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: 'Ice: a solid' }, { icon: 'droplet', label: 'Water: a liquid' }, { icon: 'bottle', label: 'Liquids pour' }, { icon: 'bowl', label: 'Liquids fit the bowl' }], caption: 'Heat melts ice and cold freezes water.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-U04-q1', type: 'mcq', prompt: 'Which is a liquid?', options: ['milk', 'an ice cube', 'a wooden block'], answer: 'milk', difficulty: 1 },
        { id: 'Y3-SCI-U04-q2', type: 'mcq', prompt: 'A solid keeps ___ .', options: ['its own shape', 'the shape of any container', 'no shape at all'], answer: 'its own shape', difficulty: 1 },
        { id: 'Y3-SCI-U04-q3', type: 'mcq', prompt: 'What happens when you heat ice?', options: ['it melts into water', 'it freezes into harder ice', 'it turns into paper'], answer: 'it melts into water', difficulty: 1 },
        { id: 'Y3-SCI-U04-q4', type: 'short', prompt: 'Water put into the freezer turns into what?', answer: 'ice', difficulty: 1 },
        { id: 'Y3-SCI-U04-q5', type: 'mcq', prompt: 'Melting happens when you ___ heat to a solid.', options: ['add', 'take away', 'ignore'], answer: 'add', difficulty: 2 },
        { id: 'Y3-SCI-U04-q6', type: 'mcq', prompt: 'A chocolate bar sits in a warm hand. What will it do?', options: ['melt', 'freeze', 'turn to dust'], answer: 'melt', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-H01',
    title: 'Data tells a story',
    year: '3',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S3H01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Data is information we collect, like temperatures, counts and measurements.',
        'Scientists study data to find patterns, and those patterns help them build explanations for what they see in the world.',
        'A table or graph keeps data tidy so the pattern can jump right out at you.',
      ],
      illustrations: [
        {
          brief: 'Bar chart of rainfall in millimetres across four months',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'mm', items: [{ label: 'Jan', value: 110 }, { label: 'Apr', value: 90 }, { label: 'Jul', value: 60 }, { label: 'Oct', value: 75 }] },
        },
        {
          brief: 'Dot plot of bean plant heights in centimetres',
          ready: true,
          diagram: { kind: 'dot-plot', values: [12, 15, 15, 18, 18, 18, 20, 20, 22], unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-H01-q1', type: 'mcq', prompt: 'What is data?', options: ['information we collect, like measurements and counts', 'a kind of rock', 'a type of animal'], answer: 'information we collect, like measurements and counts', difficulty: 1 },
        { id: 'Y3-SCI-H01-q2', type: 'mcq', prompt: 'A scientist writes down the temperature every morning for a month. Those numbers are called ___ .', options: ['data', 'a guess', 'a dream'], answer: 'data', difficulty: 1 },
        { id: 'Y3-SCI-H01-q3', type: 'mcq', prompt: 'Why do scientists look for patterns in data?', options: ['to build explanations for what they observe', 'to make the data heavier', 'to colour it in'], answer: 'to build explanations for what they observe', difficulty: 2 },
        { id: 'Y3-SCI-H01-q4', type: 'short', prompt: 'When the same thing happens again and again in your data, you have found a ___ .', answer: 'pattern', difficulty: 2 },
        { id: 'Y3-SCI-H01-q5', type: 'mcq', prompt: 'Weather records show it rains most in winter. What did the data help the scientist do?', options: ['develop an explanation about rain', 'make the rain stop', 'count the clouds'], answer: 'develop an explanation about rain', difficulty: 2 },
        { id: 'Y3-SCI-H01-q6', type: 'mcq', prompt: 'Which is the best way to compare a whole year of rainfall at a glance?', options: ['a column graph', 'a single number', 'a word like "rainy"'], answer: 'a column graph', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-H02',
    title: 'Science solves problems',
    year: '3',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S3H02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'When people understand how the world works, they can use that knowledge to solve problems.',
        'Scientists learnt that cold slows germs, so people invented fridges to keep food safe, and they learnt how sunlight can hurt skin, so they made sunscreen.',
        'Almost every helpful thing around you — clean water, safe bridges, warm clothes — started with science.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from the problem of spoiling food to the fridge solution',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Problem: food spoils' }, { text: 'Science: cold slows germs' }, { text: 'Idea: keep food cold' }, { text: 'Solution: the fridge' }] },
        },
        {
          brief: 'Scene of science solving problems: clean water, light, shelter and grown food',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'bottle', label: 'Clean water' }, { icon: 'bulb', label: 'Light at night' }, { icon: 'house', label: 'Safe shelter' }, { icon: 'sprout', label: 'Grown food' }], caption: 'Science turns ideas into things that help people.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-H02-q1', type: 'mcq', prompt: 'Why do we keep food in the fridge?', options: ['because the cold slows germs and keeps food fresh', 'because the fridge adds heat', 'because food likes the dark'], answer: 'because the cold slows germs and keeps food fresh', difficulty: 1 },
        { id: 'Y3-SCI-H02-q2', type: 'mcq', prompt: 'Sunlight can hurt our skin. Science helped solve this problem by inventing ___ .', options: ['sunscreen', 'chocolate', 'balloons'], answer: 'sunscreen', difficulty: 1 },
        { id: 'Y3-SCI-H02-q3', type: 'mcq', prompt: 'How do people use science to solve problems?', options: ['by studying how things work and testing ideas', 'by guessing and never checking', 'by hoping problems go away'], answer: 'by studying how things work and testing ideas', difficulty: 2 },
        { id: 'Y3-SCI-H02-q4', type: 'short', prompt: 'Science helps make the ___ we drink clean and safe.', answer: 'water', difficulty: 1 },
        { id: 'Y3-SCI-H02-q5', type: 'mcq', prompt: 'Engineers studied materials and heat. What did that help them build?', options: ['bridges that are strong and safe', 'toys that float', 'walls that sing'], answer: 'bridges that are strong and safe', difficulty: 2 },
        { id: 'Y3-SCI-H02-q6', type: 'mcq', prompt: 'Warm jackets keep us warm in winter. Which idea explains why?', options: ['warm clothes trap heat so our bodies stay warm', 'jackets make the cold go away by themselves', 'jackets are made of clouds'], answer: 'warm clothes trap heat so our bodies stay warm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I01',
    title: 'Questions & predictions',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A good science question is one you can test by watching, measuring or doing an experiment.',
        'Before you test, you make a prediction — what you think will happen, based on what you have already observed.',
        'Predictions are brave guesses with reasons behind them, and testing them is how you find out if you were right.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from observing a pattern to asking, predicting and testing',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Observe a pattern' }, { text: 'Ask a testable question' }, { text: 'Make a prediction' }, { text: 'Test it with data' }] },
        },
        {
          brief: 'Bar chart comparing plant height in a sunny spot versus a shady spot',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Sunny spot', value: 18 }, { label: 'Shady spot', value: 9 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I01-q1', type: 'mcq', prompt: 'Which is a good testable science question?', options: ['Does more water make bean seeds sprout faster?', 'Why is blue the best colour?', 'How old is the moon?'], answer: 'Does more water make bean seeds sprout faster?', difficulty: 1 },
        { id: 'Y3-SCI-I01-q2', type: 'mcq', prompt: 'A prediction is ___ .', options: ['what you think will happen, based on what you already know', 'a random guess with no reason', 'the final result of your test'], answer: 'what you think will happen, based on what you already know', difficulty: 1 },
        { id: 'Y3-SCI-I01-q3', type: 'mcq', prompt: 'Your ice block melts faster on the footpath than on grass. What is a good question to test?', options: ['Does the ground surface change how fast ice melts?', 'Is my ice block yummy?', 'Who made the footpath?'], answer: 'Does the ground surface change how fast ice melts?', difficulty: 2 },
        { id: 'Y3-SCI-I01-q4', type: 'short', prompt: '"I think the ice will melt faster on the footpath because it is warmer there." Before testing, this is called a ___ .', answer: 'prediction', difficulty: 2 },
        { id: 'Y3-SCI-I01-q5', type: 'mcq', prompt: 'What should a prediction be based on?', options: ['things you have observed or already know', 'whatever your friend shouts', 'the number on your shoe'], answer: 'things you have observed or already know', difficulty: 1 },
        { id: 'Y3-SCI-I01-q6', type: 'mcq', prompt: 'Which question can you test with a science experiment?', options: ['Does temperature change how fast sugar dissolves in water?', 'Which colour is prettiest?', 'Who is the best singer?'], answer: 'Does temperature change how fast sugar dissolves in water?', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I02',
    title: 'Planning fair investigations',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A fair test changes only ONE thing and keeps everything else exactly the same.',
        'That way, when the result changes, you know the one thing you changed caused it.',
        'Real scientists also plan for safety — no tasting, wear goggles, and follow the steps carefully.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of the steps of a fair investigation plan',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Ask a question' }, { text: 'Change only one thing' }, { text: 'Keep everything else the same' }, { text: 'Measure and record' }] },
        },
        {
          brief: 'Safety scene with goggles, a stop sign and a timer',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Wear goggles' }, { icon: 'stop-sign', label: 'Never taste it' }, { icon: 'timer', label: 'Follow the timing' }], caption: 'Safe scientists plan first and protect themselves.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I02-q1', type: 'mcq', prompt: 'In a fair test, you change ___ .', options: ['only one thing', 'everything at once', 'nothing at all'], answer: 'only one thing', difficulty: 1 },
        { id: 'Y3-SCI-I02-q2', type: 'mcq', prompt: 'You want to know if water temperature changes how fast sugar dissolves. What should you change?', options: ['the water temperature', 'the amount of sugar', 'the size of the cup'], answer: 'the water temperature', difficulty: 2 },
        { id: 'Y3-SCI-I02-q3', type: 'mcq', prompt: 'Why do we keep everything else the same in a fair test?', options: ['so we know the one thing we changed caused the result', 'to make the test harder', 'because we ran out of cups'], answer: 'so we know the one thing we changed caused the result', difficulty: 2 },
        { id: 'Y3-SCI-I02-q4', type: 'mcq', prompt: 'Which is a safe science rule?', options: ['never taste or smell the materials you are testing', 'run quickly around the room', 'wear your best clothes'], answer: 'never taste or smell the materials you are testing', difficulty: 1 },
        { id: 'Y3-SCI-I02-q5', type: 'short', prompt: 'In a fair test you change one thing and keep everything else the ___ .', answer: 'same', difficulty: 1 },
        { id: 'Y3-SCI-I02-q6', type: 'mcq', prompt: 'Before starting an experiment, a careful scientist ___ .', options: ['reads the plan and follows the safety rules', 'skips all the steps', 'starts blindfolded'], answer: 'reads the plan and follows the safety rules', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I03',
    title: 'Measuring with instruments',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I03' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Scientists measure carefully with scaled instruments like thermometers for temperature, rulers for length and jugs for volume.',
        'Read the number the line or pointer sits on, and always write the unit too — 25°C, 9 cm or 250 mL.',
        'Careful measuring means your data is honest and everyone can trust it.',
      ],
      illustrations: [
        {
          brief: 'Thermometer showing 25 degrees Celsius to read',
          ready: true,
          diagram: { kind: 'thermometer', min: 0, max: 50, value: 25, unit: '°C' },
        },
        {
          brief: 'Metric ladder for millimetres, centimetres, metres and kilometres',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['mm', 'cm', 'm', 'km'], highlight: 1 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I03-q1', type: 'mcq', prompt: 'The red line on the thermometer sits at 25. What is the temperature?', options: ['25°C', '25 cm', '25 mL'], answer: '25°C', difficulty: 1 },
        { id: 'Y3-SCI-I03-q2', type: 'mcq', prompt: 'Water in the jug reaches the 250 mL line. How much water is in the jug?', options: ['250 mL', '250 cm', '250 g'], answer: '250 mL', difficulty: 1 },
        { id: 'Y3-SCI-I03-q3', type: 'mcq', prompt: 'A pencil ends exactly at the 9 cm mark. How long is the pencil?', options: ['9 cm', '9 m', '9 L'], answer: '9 cm', difficulty: 2 },
        { id: 'Y3-SCI-I03-q4', type: 'short', prompt: 'What instrument do we use to measure temperature?', answer: 'thermometer', difficulty: 1 },
        { id: 'Y3-SCI-I03-q5', type: 'mcq', prompt: 'Which unit do you use to measure the mass of a handful of flour?', options: ['grams', 'litres', 'degrees'], answer: 'grams', difficulty: 2 },
        { id: 'Y3-SCI-I03-q6', type: 'mcq', prompt: 'After measuring, what is the honest way to record your result?', options: ['the number AND the unit, like 9 cm', 'just the number', 'nothing at all'], answer: 'the number AND the unit, like 9 cm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I04',
    title: 'Showing data in tables & graphs',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I04' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A table tidies data into rows and columns, and a column graph shows amounts as bars so you can compare them at a glance.',
        'The tallest bar shows the biggest amount, and models with labelled parts help us show how things work.',
        'When data is organised well, the pattern is easy to spot.',
      ],
      illustrations: [
        {
          brief: 'Bar chart of favourite fruits with different counts',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'Apple', value: 6 }, { label: 'Banana', value: 4 }, { label: 'Grapes', value: 7 }, { label: 'Orange', value: 3 }] },
        },
        {
          brief: 'Dot plot of bean sprout heights in centimetres',
          ready: true,
          diagram: { kind: 'dot-plot', values: [5, 7, 7, 9, 9, 9, 10], unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I04-q1', type: 'mcq', prompt: 'A table is used to ___ .', options: ['organise data in rows and columns', 'hide the data', 'mix all the data together'], answer: 'organise data in rows and columns', difficulty: 1 },
        { id: 'Y3-SCI-I04-q2', type: 'mcq', prompt: 'In a column graph, the bar that shows the biggest amount is ___ .', options: ['the tallest bar', 'the shortest bar', 'the first bar'], answer: 'the tallest bar', difficulty: 1 },
        { id: 'Y3-SCI-I04-q3', type: 'mcq', prompt: 'Data: apples 6, bananas 4, grapes 7. Which fruit did most students pick?', options: ['grapes', 'apples', 'bananas'], answer: 'grapes', difficulty: 1 },
        { id: 'Y3-SCI-I04-q4', type: 'mcq', prompt: 'Which is best for comparing amounts at a glance?', options: ['a column graph', 'a single number', 'a whisper'], answer: 'a column graph', difficulty: 2 },
        { id: 'Y3-SCI-I04-q5', type: 'short', prompt: 'The carrot bar is taller than the pea bar. Which vegetable did more students choose?', answer: 'carrots', difficulty: 2 },
        { id: 'Y3-SCI-I04-q6', type: 'mcq', prompt: 'A model of a flower with labelled parts is a good way to ___ .', options: ['show and learn the parts of the flower', 'hide the flower', 'make the flower grow'], answer: 'show and learn the parts of the flower', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I05',
    title: 'Comparing findings & concluding',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I05' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'After a test, compare your findings with other groups and check that everyone ran a fair test.',
        'Then look at the data and draw a conclusion — a statement about what you learned.',
        'The best scientists end by asking a brand-new question to test next time.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from predicting and testing to comparing, checking fairness and concluding',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Predict' }, { text: 'Test' }, { text: 'Compare with others' }, { text: 'Check fairness' }, { text: 'Conclude' }] },
        },
        {
          brief: 'Bar chart comparing my group height results with another group',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'My group', value: 12 }, { label: 'Other group', value: 15 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I05-q1', type: 'mcq', prompt: 'After a test, comparing your results with other groups helps you ___ .', options: ['check your findings and improve your conclusion', 'hide your work', 'stop thinking about it'], answer: 'check your findings and improve your conclusion', difficulty: 2 },
        { id: 'Y3-SCI-I05-q2', type: 'mcq', prompt: 'Your friend changed TWO things in their test. Their results ___ .', options: ['might not be fair, so be careful comparing them', 'are definitely correct', 'do not matter at all'], answer: 'might not be fair, so be careful comparing them', difficulty: 2 },
        { id: 'Y3-SCI-I05-q3', type: 'mcq', prompt: 'A conclusion is ___ .', options: ['what you learned from your data', 'a question you ask at the start', 'the equipment you used'], answer: 'what you learned from your data', difficulty: 1 },
        { id: 'Y3-SCI-I05-q4', type: 'short', prompt: 'You predicted the ice would melt in 6 minutes, and it melted in 6 minutes. Your prediction was ___ .', answer: 'correct', difficulty: 1 },
        { id: 'Y3-SCI-I05-q5', type: 'mcq', prompt: 'After drawing a conclusion, a good scientist thinks of ___ .', options: ['a new question to test next', 'a way to never test again', 'nothing to do'], answer: 'a new question to test next', difficulty: 2 },
        { id: 'Y3-SCI-I05-q6', type: 'mcq', prompt: 'Your data shows that plants with more water grew taller. Which is a fair conclusion?', options: ['in this test, more water led to taller growth', 'every plant needs exactly 10 litres of water', 'water does nothing for plants'], answer: 'in this test, more water led to taller growth', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-SCI-I06',
    title: 'Sharing findings',
    year: '3',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S3I06' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Findings are not meant to be kept secret — scientists share them so others can learn and check the work.',
        'You can communicate with words, labelled diagrams, graphs, photos and digital tools.',
        'Using scientific words like "temperature", "melt" and "predict" makes your sharing clear and grown-up.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of the parts of a science report',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Title' }, { text: 'What I did' }, { text: 'What I found' }, { text: 'What I learned' }] },
        },
        {
          brief: 'Scene of sharing tools: writing a report, drawing a graph, taking photos and talking',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'Write a report' }, { icon: 'bar-chart', label: 'Draw a graph' }, { icon: 'phone', label: 'Take photos' }, { icon: 'mic', label: 'Talk about it' }], caption: 'Findings can be shared in many ways.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-SCI-I06-q1', type: 'mcq', prompt: 'Why do scientists share their findings?', options: ['so other people can learn from them and check the work', 'to keep them a secret', 'to fill up their notebooks with nothing'], answer: 'so other people can learn from them and check the work', difficulty: 1 },
        { id: 'Y3-SCI-I06-q2', type: 'mcq', prompt: 'Which is a scientific word to use in a report about heating water?', options: ['temperature', 'gobbledygook', 'rainbow'], answer: 'temperature', difficulty: 1 },
        { id: 'Y3-SCI-I06-q3', type: 'mcq', prompt: 'Which can help you communicate your findings?', options: ['a labelled diagram', 'a closed box', 'a blank wall'], answer: 'a labelled diagram', difficulty: 1 },
        { id: 'Y3-SCI-I06-q4', type: 'short', prompt: 'A picture with labels showing the parts of your experiment is called a labelled ___ .', answer: 'diagram', difficulty: 2 },
        { id: 'Y3-SCI-I06-q5', type: 'mcq', prompt: 'Which order makes a good report?', options: ['what I did, what I found, what I learned', 'what I learned, what I found, what I did', 'only the title'], answer: 'what I did, what I found, what I learned', difficulty: 2 },
        { id: 'Y3-SCI-I06-q6', type: 'mcq', prompt: 'Digital tools like a computer can help you ___ .', options: ['type your report and make graphs', 'make the data disappear', 'do the experiment for you'], answer: 'type your report and make graphs', difficulty: 1 },
      ],
    },
  },
];
