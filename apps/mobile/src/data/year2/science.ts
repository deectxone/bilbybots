import type { Topic } from '../../types/curriculum';

/**
 * Year 2 Science, full topic bank.
 * Source of truth: docs/content/year-1-5/science.md (AC v9.0; strands Science
 * Understanding / Human Endeavour / Inquiry).
 * Y1–2 share the H01 + I01–I06 band content descriptions; U01–U03 are
 * Year-2-specific. Every topic renders real vector diagrams (see
 * src/components/illustrations/diagrams.tsx) and ships 6 assignment questions
 * at nominal pace / 4 under compact pace.
 * U01 references First Nations seasonal sky knowledge as general facts only,
 * no sensitivity flag (per docs/content/year-1-5/science.md).
 */
export const YEAR2_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (3 CDs) ----------
  {
    id: 'Y2-SCI-U01',
    title: 'Earth in the solar system & sky patterns',
    year: '2',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S2U01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Earth is a planet that travels around the Sun, and together they are part of our solar system.',
        'Watch the sky across a day and you will spot the pattern: the Sun rises, crosses the sky and sets, then the Moon and stars appear for the night.',
        'Some First Nations Australians have read the night sky for tens of thousands of years, watching special stars to know when the seasons change, that is clever science too!',
      ],
      illustrations: [
        { brief: 'The Sun, Earth and orbiting Moon showing Earth as a planet in the solar system', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Sun' }, { icon: 'globe', label: 'Earth' }, { icon: 'orbit', label: 'Moon orbits' }], caption: 'Earth is a planet in our solar system' } },
        { brief: 'The daily sky pattern: sunrise, crossing the sky, sunset, then night', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sun rises' }, { text: 'Sun crosses the sky' }, { text: 'Sun sets' }, { text: 'Moon and stars appear' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-U01-q1', type: 'mcq', prompt: 'Which planet do we live on?', options: ['The Sun', 'Earth', 'The Moon'], answer: 'Earth', difficulty: 1 },
        { id: 'Y2-SCI-U01-q2', type: 'mcq', prompt: 'The Sun is…', options: ['A star at the centre of our solar system', 'A planet', 'A moon'], answer: 'A star at the centre of our solar system', difficulty: 2 },
        { id: 'Y2-SCI-U01-q3', type: 'short', prompt: 'What do we call the path Earth takes as it travels around the Sun?', answer: 'orbit', difficulty: 2 },
        { id: 'Y2-SCI-U01-q4', type: 'mcq', prompt: 'In the daytime sky we mostly see the…', options: ['Sun', 'Stars only', 'Moon only'], answer: 'Sun', difficulty: 1 },
        { id: 'Y2-SCI-U01-q5', type: 'mcq', prompt: 'Which pattern happens every single day?', options: ['The Sun rises and sets', 'The Moon is always full', 'Stars disappear forever'], answer: 'The Sun rises and sets', difficulty: 1 },
        { id: 'Y2-SCI-U01-q6', type: 'short', prompt: 'After the Sun sets at night, what appears in the sky?', answer: 'the Moon and stars', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-U02',
    title: 'Sound & vibration',
    year: '2',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S2U02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Lots of actions make sounds, clapping, drumming, plucking a rubber band, and every sound starts with something vibrating (shaking very fast).',
        'Pluck a rubber band and hold it still: once it stops vibrating, the sound stops too!',
        'Sounds can be loud or soft and high or low, and your ears are the clever detectors that catch them all.',
      ],
      illustrations: [
        { brief: 'A plucked string, a speaker and an ear showing the sound path', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: 'Pluck' }, { icon: 'speaker', label: 'Speaker' }, { icon: 'mic', label: 'Your ear' }], caption: 'Vibrating things send sound to your ear' } },
        { brief: 'Flowchart from plucking a string to hearing the sound', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Pluck the string' }, { text: 'The string vibrates' }, { text: 'Sound travels through the air' }, { text: 'You hear the sound' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-U02-q1', type: 'mcq', prompt: 'Every sound is made by something…', options: ['vibrating (shaking very fast)', 'staying perfectly still', 'changing colour'], answer: 'vibrating (shaking very fast)', difficulty: 1 },
        { id: 'Y2-SCI-U02-q2', type: 'mcq', prompt: 'You pluck a rubber band and hear a sound. If you hold it still, the sound…', options: ['stops', 'gets louder', 'turns into music'], answer: 'stops', difficulty: 1 },
        { id: 'Y2-SCI-U02-q3', type: 'mcq', prompt: 'Which action makes a sound?', options: ['Clapping your hands', 'Sitting very still', 'Blinking'], answer: 'Clapping your hands', difficulty: 1 },
        { id: 'Y2-SCI-U02-q4', type: 'short', prompt: 'Sound is made when something does what, very fast?', answer: 'vibrates', difficulty: 2 },
        { id: 'Y2-SCI-U02-q5', type: 'short', prompt: "A drum's skin moves back and forth very fast. What is that called?", answer: 'vibrating', difficulty: 2 },
        { id: 'Y2-SCI-U02-q6', type: 'mcq', prompt: 'Sounds can be loud or soft, and they can also be high or…', options: ['low', 'tall', 'sweet'], answer: 'low', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-U03',
    title: 'Changing materials physically',
    year: '2',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S2U03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You can change how materials look and feel by bending, twisting, stretching or breaking them, but the material itself stays the same.',
        'A paper clip you bend is still a paper clip; stretch a rubber band and it is still a rubber band.',
        'Some changes can be undone, straighten the paper clip and it is a paper clip again, while breaking is usually much harder to fix.',
      ],
      illustrations: [
        { brief: 'A bent paper clip, a stretched rubber band and shaped clay', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bolt', label: 'Bent' }, { icon: 'triangle-shape', label: 'Stretched' }, { icon: 'cube', label: 'Shaped' }], caption: 'Bending, twisting and stretching changes the shape, not the material' } },
        { brief: 'Flowchart showing a bent paper clip being straightened back again', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Bend the paper clip' }, { text: 'It changes shape' }, { text: 'Straighten it again' }, { text: 'Same paper clip!' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-U03-q1', type: 'mcq', prompt: 'You twist a piece of modelling clay. The clay changes its…', options: ['shape', 'smell', 'name'], answer: 'shape', difficulty: 1 },
        { id: 'Y2-SCI-U03-q2', type: 'mcq', prompt: 'Stretching a rubber band changes its shape. What does the material stay?', options: ['the same rubber band', 'a new material', 'air'], answer: 'the same rubber band', difficulty: 2 },
        { id: 'Y2-SCI-U03-q3', type: 'mcq', prompt: 'Which action changes the shape of a plastic bottle?', options: ['Squashing it', 'Looking at it', 'Putting it on a shelf'], answer: 'Squashing it', difficulty: 1 },
        { id: 'Y2-SCI-U03-q4', type: 'short', prompt: 'Name one way to change the shape of a paper clip.', answer: 'bend it', difficulty: 1 },
        { id: 'Y2-SCI-U03-q5', type: 'mcq', prompt: 'After you straighten a bent paper clip, it is…', options: ['still a paper clip', 'made of wood', 'gone forever'], answer: 'still a paper clip', difficulty: 2 },
        { id: 'Y2-SCI-U03-q6', type: 'short', prompt: 'Is bending a paper clip reversible or irreversible?', answer: 'reversible', difficulty: 2 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (1 CD, Y1–2 band) ----------
  {
    id: 'Y2-SCI-H01',
    title: 'Science in daily life',
    year: '2',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S2H01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Science is all around you every day, cooking pancakes, packing your lunchbox, or checking the weather before you go out.',
        'People use patterns to make clever predictions: seeing dark clouds, you predict rain and grab an umbrella.',
        'Noticing patterns and making predictions is a superpower, the exact same trick scientists use!',
      ],
      illustrations: [
        { brief: 'Everyday scenes: home, cooking, weather and cleaning', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'Home' }, { icon: 'bowl', label: 'Cooking' }, { icon: 'sun', label: 'Weather' }, { icon: 'bottle', label: 'Cleaning' }], caption: 'Science is part of everyday life' } },
        { brief: 'Flowchart from spotting a pattern to acting on a prediction', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Spot a pattern (dark clouds)' }, { text: 'Predict rain' }, { text: 'Grab an umbrella' }, { text: 'Your prediction helped' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-H01-q1', type: 'mcq', prompt: 'Which is an example of science in daily life?', options: ['Using weather patterns to choose your clothes', 'Dreaming about nothing', 'Colouring a blank page'], answer: 'Using weather patterns to choose your clothes', difficulty: 1 },
        { id: 'Y2-SCI-H01-q2', type: 'mcq', prompt: 'You see dark grey clouds, so you predict…', options: ['it may rain', 'it will snow', 'the Sun will shine brighter'], answer: 'it may rain', difficulty: 1 },
        { id: 'Y2-SCI-H01-q3', type: 'mcq', prompt: 'A pattern is…', options: ['something that repeats and can help you predict', 'a random surprise', 'a type of food'], answer: 'something that repeats and can help you predict', difficulty: 2 },
        { id: 'Y2-SCI-H01-q4', type: 'short', prompt: 'What helps you make a good prediction?', answer: 'patterns', difficulty: 2 },
        { id: 'Y2-SCI-H01-q5', type: 'mcq', prompt: 'If the toast burns every morning at the same setting, you could predict…', options: ['it will burn again', 'it will freeze', 'nothing at all'], answer: 'it will burn again', difficulty: 2 },
        { id: 'Y2-SCI-H01-q6', type: 'mcq', prompt: 'Predicting rain from dark clouds is using…', options: ['a pattern you noticed', 'pure luck', 'a magic spell'], answer: 'a pattern you noticed', difficulty: 1 },
      ],
    },
  },
  // ---------- Science Inquiry (6 CDs, Y1–2 band) ----------
  {
    id: 'Y2-SCI-I01',
    title: 'Questions & predictions',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Scientists start with questions, like "Does a plant grow taller with more sunlight?", then make a prediction, a smart guess of what they think will happen.',
        'Good questions are ones you can test, and good predictions are based on what you already know.',
        'Predictions do not have to be right every time, testing them is how you learn something new!',
      ],
      illustrations: [
        { brief: 'Flowchart of a full investigation: question, prediction, test, learn', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ask a question' }, { text: 'Make a prediction' }, { text: 'Test it out' }, { text: 'Learn something new' }] } },
        { brief: 'A prediction crystal ball, a magnifier and a lightbulb idea', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'crystal-ball', label: 'Prediction' }, { icon: 'magnifier', label: 'Look closely' }, { icon: 'bulb', label: 'An idea' }], caption: 'Questions, predictions and tests' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I01-q1', type: 'mcq', prompt: 'Which question can you test?', options: ['Will a seed grow if it gets water and sun?', 'What is your favourite colour?', 'How old is the sky?'], answer: 'Will a seed grow if it gets water and sun?', difficulty: 1 },
        { id: 'Y2-SCI-I01-q2', type: 'mcq', prompt: 'A prediction is…', options: ['a smart guess about what might happen', 'a fact you already know for sure', 'a kind of food'], answer: 'a smart guess about what might happen', difficulty: 1 },
        { id: 'Y2-SCI-I01-q3', type: 'mcq', prompt: 'You think "the plant will grow 5 cm in a week". That is a…', options: ['prediction', 'question', 'conclusion'], answer: 'prediction', difficulty: 2 },
        { id: 'Y2-SCI-I01-q4', type: 'short', prompt: 'A scientist wants to learn about plants. What does she start with, a question or a report?', answer: 'a question', difficulty: 1 },
        { id: 'Y2-SCI-I01-q5', type: 'mcq', prompt: 'A good prediction is based on…', options: ['what you already know', 'a random guess', 'your favourite colour'], answer: 'what you already know', difficulty: 2 },
        { id: 'Y2-SCI-I01-q6', type: 'mcq', prompt: 'If your prediction turns out wrong, you should…', options: ['learn from it and try again', 'give up', 'hide it'], answer: 'learn from it and try again', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-I02',
    title: 'Safe investigation procedures',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Before any investigation, stop and plan: read the steps, get the right materials and listen to your teacher.',
        'Some materials need extra care, hot water, sharp tools or things you must never taste, so always follow the safety rules.',
        'Working safely means you can explore and discover, and everyone stays happy and unhurt.',
      ],
      illustrations: [
        { brief: 'Safety flowchart: plan, get materials, follow rules, tidy up', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Stop and read the steps' }, { text: 'Get safe materials' }, { text: 'Follow the rules' }, { text: 'Tidy up after' }] } },
        { brief: 'Safety icons: stop and plan, check the rules, safe materials', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'stop-sign', label: 'Stop and plan' }, { icon: 'check-box', label: 'Check the rules' }, { icon: 'box', label: 'Safe materials' }], caption: 'Safe steps for a safe investigation' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I02-q1', type: 'mcq', prompt: 'Before starting an investigation you should…', options: ['read the steps and safety rules', 'just start mixing everything', 'guess what to do'], answer: 'read the steps and safety rules', difficulty: 1 },
        { id: 'Y2-SCI-I02-q2', type: 'mcq', prompt: 'Which is a safe choice?', options: ['Wearing safety glasses when the rules say to', 'Tasting unknown powders', 'Running with a beaker'], answer: 'Wearing safety glasses when the rules say to', difficulty: 1 },
        { id: 'Y2-SCI-I02-q3', type: 'mcq', prompt: 'A rule says a liquid is "do not taste". You should…', options: ['never taste it', 'have a tiny taste', 'smell it with your tongue'], answer: 'never taste it', difficulty: 1 },
        { id: 'Y2-SCI-I02-q4', type: 'short', prompt: 'What should you do with the equipment after an investigation?', answer: 'tidy it up', difficulty: 1 },
        { id: 'Y2-SCI-I02-q5', type: 'mcq', prompt: 'Why do we have safety rules in science?', options: ['to keep everyone safe', 'to make it boring', 'to slow things down'], answer: 'to keep everyone safe', difficulty: 2 },
        { id: 'Y2-SCI-I02-q6', type: 'short', prompt: 'Name one thing you should do before you begin an experiment.', answer: 'read the steps', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-I03',
    title: 'Observations & recording',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Observing means looking, listening, smelling and touching carefully, like noticing a plant growing a little taller each day.',
        'Recording means writing or drawing what you see, or measuring it with tools like a ruler or a thermometer.',
        'You can even use digital tools, like a phone camera or a digital thermometer, to capture observations exactly as they happen.',
      ],
      illustrations: [
        { brief: 'A thermometer reading 25 degrees for recording temperature', ready: true, diagram: { kind: 'thermometer', min: 0, max: 40, value: 25, unit: '°C' } },
        { brief: 'Observe, measure and record with eye, ruler and clipboard', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Look closely' }, { icon: 'ruler', label: 'Measure' }, { icon: 'clipboard', label: 'Record it' }], caption: 'Observe, measure and record' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I03-q1', type: 'mcq', prompt: 'Which tool measures temperature?', options: ['A thermometer', 'A spoon', 'A pillow'], answer: 'A thermometer', difficulty: 1 },
        { id: 'Y2-SCI-I03-q2', type: 'mcq', prompt: 'Looking, listening and feeling very carefully is called…', options: ['observing', 'sleeping', 'forgetting'], answer: 'observing', difficulty: 1 },
        { id: 'Y2-SCI-I03-q3', type: 'short', prompt: 'A plant is 12 cm tall. What unit was the measurement in?', answer: 'cm', difficulty: 2 },
        { id: 'Y2-SCI-I03-q4', type: 'mcq', prompt: 'Writing down what you saw in a notebook is…', options: ['recording your observation', 'losing your work', 'a secret'], answer: 'recording your observation', difficulty: 1 },
        { id: 'Y2-SCI-I03-q5', type: 'mcq', prompt: 'Which tool measures how long or tall something is?', options: ['A ruler', 'A thermometer', 'A torch'], answer: 'A ruler', difficulty: 1 },
        { id: 'Y2-SCI-I03-q6', type: 'mcq', prompt: 'A phone camera can help you record observations by…', options: ['taking a photo', 'making the plant grow', 'drawing the sky'], answer: 'taking a photo', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-I04',
    title: 'Sorting data & patterns',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Sorting is putting things into groups, like sorting shells into big and small, or leaves by colour.',
        'When you sort observations into a table or a graph, patterns pop out: maybe more birds visited on rainy days than sunny days.',
        'Patterns help you describe what happened and predict what might happen next.',
      ],
      illustrations: [
        { brief: 'Bar chart of birds seen each day, showing a clear pattern', ready: true, diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Mon', value: 3 }, { label: 'Tue', value: 5 }, { label: 'Wed', value: 4 }, { label: 'Thu', value: 7 }] } },
        { brief: 'Flowchart from collecting observations to spotting a pattern', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Collect observations' }, { text: 'Sort into groups' }, { text: 'Make a table or graph' }, { text: 'Spot the pattern' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I04-q1', type: 'mcq', prompt: 'Sorting shells into big and small is…', options: ['sorting data into groups', 'a magic trick', 'cooking'], answer: 'sorting data into groups', difficulty: 1 },
        { id: 'Y2-SCI-I04-q2', type: 'mcq', prompt: 'In the bar chart (Mon 3, Tue 5, Wed 4, Thu 7), which day had the most birds?', options: ['Thu', 'Mon', 'Wed'], answer: 'Thu', difficulty: 2 },
        { id: 'Y2-SCI-I04-q3', type: 'short', prompt: 'In the bar chart, which day had the fewest birds?', answer: 'Mon', difficulty: 2 },
        { id: 'Y2-SCI-I04-q4', type: 'mcq', prompt: 'A pattern in your data helps you…', options: ['describe what happened and predict next', 'hide the data', 'stop observing'], answer: 'describe what happened and predict next', difficulty: 2 },
        { id: 'Y2-SCI-I04-q5', type: 'mcq', prompt: 'Putting leaves into piles by colour is a way of…', options: ['sorting and organising data', 'mixing everything', 'throwing them away'], answer: 'sorting and organising data', difficulty: 1 },
        { id: 'Y2-SCI-I04-q6', type: 'short', prompt: 'What can you spot more easily after sorting data, a pattern or a secret?', answer: 'a pattern', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-SCI-I05',
    title: 'Comparing predictions with observations',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'After you test a prediction, compare it with what really happened, did the plant grow the 5 cm you predicted, or more?',
        'Your prediction and your observation can match or be different, and either way you have learned something.',
        'Sometimes it helps to look at what a classmate observed too, and to think of a new question to test next.',
      ],
      illustrations: [
        { brief: 'Bar chart comparing predicted growth (5 cm) with observed growth (8 cm)', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Predicted', value: 5 }, { label: 'Observed', value: 8 }] } },
        { brief: 'Flowchart of predict, test, compare, then ask a new question', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Predict what will happen' }, { text: 'Do the test and observe' }, { text: 'Compare prediction with observation' }, { text: 'Learn and ask a new question' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I05-q1', type: 'mcq', prompt: 'You predicted the plant would grow 5 cm, but it grew 8 cm. That means…', options: ['the prediction and observation were different', 'the plant is invisible', 'you must hide the plant'], answer: 'the prediction and observation were different', difficulty: 2 },
        { id: 'Y2-SCI-I05-q2', type: 'mcq', prompt: 'Comparing means checking how things are…', options: ['alike or different', 'invisible', 'the same colour'], answer: 'alike or different', difficulty: 1 },
        { id: 'Y2-SCI-I05-q3', type: 'short', prompt: 'In the chart, was the observed growth more or less than predicted?', answer: 'more', difficulty: 1 },
        { id: 'Y2-SCI-I05-q4', type: 'mcq', prompt: 'If your prediction matches your observation, you can say…', options: ['your prediction was supported', 'the test failed', 'maths is over'], answer: 'your prediction was supported', difficulty: 3 },
        { id: 'Y2-SCI-I05-q5', type: 'mcq', prompt: "Looking at a classmate's observations can help you…", options: ['check your own results', 'copy without understanding', 'skip the test'], answer: 'check your own results', difficulty: 2 },
        { id: 'Y2-SCI-I05-q6', type: 'short', prompt: 'After a test, what is a good new thing to do?', answer: 'ask a new question', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-SCI-I06',
    title: 'Communicating observations',
    year: '2',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S2I06' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Sharing your observations is the last big step, you can tell a friend, draw a picture, or make a little poster.',
        'Use clear words like "the leaf was green and 12 cm long" so others can picture exactly what you saw.',
        'A good report tells the question, what you did, what you saw, and what you think it means.',
      ],
      illustrations: [
        { brief: 'A poster layout: question, what we did, what we saw, results', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Question' }, { icon: 'pen', label: 'What we did' }, { icon: 'picture-frame', label: 'What we saw' }, { icon: 'bar-chart', label: 'Results' }], caption: 'A clear report shares your observations' } },
        { brief: 'Flowchart of a report: question, method, findings, meaning', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Tell your question' }, { text: 'Explain what you did' }, { text: 'Share what you saw' }, { text: 'Say what you think' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-SCI-I06-q1', type: 'mcq', prompt: 'Sharing your observations with others is called…', options: ['communicating', 'hiding', 'sleeping'], answer: 'communicating', difficulty: 1 },
        { id: 'Y2-SCI-I06-q2', type: 'mcq', prompt: 'Which words are clearest for a report?', options: ['"The leaf was green and 12 cm long"', '"It was kind of a thing"', '"You had to be there"'], answer: '"The leaf was green and 12 cm long"', difficulty: 2 },
        { id: 'Y2-SCI-I06-q3', type: 'short', prompt: 'What should a good report always tell first, the question or the answer?', answer: 'the question', difficulty: 2 },
        { id: 'Y2-SCI-I06-q4', type: 'mcq', prompt: 'A good word for "what you saw and measured" in a report is…', options: ['observation', 'secret', 'snack'], answer: 'observation', difficulty: 2 },
        { id: 'Y2-SCI-I06-q5', type: 'mcq', prompt: 'Drawing a picture of what you saw is a way to…', options: ['communicate your observation', 'waste time', 'avoid science'], answer: 'communicate your observation', difficulty: 1 },
        { id: 'Y2-SCI-I06-q6', type: 'short', prompt: 'Name one way to share your observations with others.', answer: 'a poster', difficulty: 1 },
      ],
    },
  },
];
