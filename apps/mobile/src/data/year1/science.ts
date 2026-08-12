import type { Topic } from '../../types/curriculum';

/**
 * Year 1 Science, full topic bank.
 * Source of truth for scope: docs/content/year-1-5/science.md (AC v9.0;
 * strands Science understanding / Science as a human endeavour / Science
 * inquiry). Every topic carries its AC9S1xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model. Vocabulary
 * and sentence patterns stay simple for six-year-olds, with clear,
 * unambiguous answers. First Nations seasonal knowledge is referenced only
 * with respectful, general facts.
 */
export const YEAR1_SCIENCE_TOPICS: Topic[] = [
  // ---------- Science Understanding (3 CDs) ----------
  {
    id: 'Y1-SCI-U01',
    title: 'Living things & their needs',
    year: '1',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S1U01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'All living things, like you, a dog, a fish and a tree, need water, food and air to live and grow.',
        'Every creature has a home that gives it what it needs: a fish has water to swim in, a bird has a nest, and a tree gets light from the sun.',
        'When a living thing has everything it needs, it stays healthy and strong, just like you with your lunch and a good drink of water.',
      ],
      illustrations: [
        { brief: 'Water, food, air and shelter shown as the four needs of living things', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'droplet', label: 'Water' }, { icon: 'bowl', label: 'Food' }, { icon: 'sun', label: 'Air and light' }, { icon: 'house', label: 'Shelter' }], caption: 'Every living thing needs water, food, air and shelter' } },
        { brief: 'A fish, a tree and a cat each with the home that meets their needs', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'fish', label: 'A fish needs water' }, { icon: 'tree', label: 'A tree needs sun' }, { icon: 'cat', label: 'A cat needs shelter' }], caption: 'Each home gives living things what they need' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-U01-q1', type: 'mcq', prompt: 'What do all living things need to live and grow?', options: ['Water and food', 'A TV', 'A bed'], answer: 'Water and food', difficulty: 1 },
        { id: 'Y1-SCI-U01-q2', type: 'mcq', prompt: 'A fish needs its home to have lots of…', options: ['Water', 'Sandwiches', 'Blankets'], answer: 'Water', difficulty: 1 },
        { id: 'Y1-SCI-U01-q3', type: 'mcq', prompt: 'What does a plant get from the sun to help it grow?', options: ['Light', 'A hat', 'Music'], answer: 'Light', difficulty: 1 },
        { id: 'Y1-SCI-U01-q4', type: 'mcq', prompt: 'Where would a bird most likely make its home?', options: ['A nest high in a tree', 'Deep in the ocean', 'Inside a fridge'], answer: 'A nest high in a tree', difficulty: 1 },
        { id: 'Y1-SCI-U01-q5', type: 'short', prompt: 'What do all living things drink to stay alive?', answer: 'Water', difficulty: 1 },
        { id: 'Y1-SCI-U01-q6', type: 'mcq', prompt: 'A rabbit hiding in a burrow is using it for…', options: ['Shelter from cold and rain', 'A place to play games', 'A swimming pool'], answer: 'Shelter from cold and rain', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-SCI-U02',
    title: 'Daily & seasonal changes',
    year: '1',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S1U02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Every day the sun rises in the morning and sets at night, that is how we get daytime and night-time.',
        'Through the year, the seasons change: summer is hot, winter is cooler, and the weather, trees and animals change with them.',
        'For tens of thousands of years, First Nations Australians have watched the seasons closely to know when to hunt, fish and gather food.',
      ],
      illustrations: [
        { brief: 'A day flowing from morning, to bright day, to night', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Morning, sun rises' }, { text: 'Day, bright and warm' }, { text: 'Night, sun sets, stars out' }] } },
        { brief: 'A thermometer showing a hot summer day', ready: true, diagram: { kind: 'thermometer', min: 0, max: 40, value: 32, unit: '°C' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-U02-q1', type: 'mcq', prompt: 'When the sun comes up in the morning, it becomes…', options: ['Daytime', 'Night-time', 'Midnight'], answer: 'Daytime', difficulty: 1 },
        { id: 'Y1-SCI-U02-q2', type: 'mcq', prompt: 'What do we usually see in the sky at night?', options: ['Stars in the dark sky', 'The bright hot sun', 'Rainbows every night'], answer: 'Stars in the dark sky', difficulty: 1 },
        { id: 'Y1-SCI-U02-q3', type: 'mcq', prompt: 'In Australia, which season is usually the hottest?', options: ['Summer', 'Winter', 'Autumn'], answer: 'Summer', difficulty: 1 },
        { id: 'Y1-SCI-U02-q4', type: 'mcq', prompt: 'In winter, the weather is usually…', options: ['Cooler', 'The hottest of the year', 'Exactly like summer'], answer: 'Cooler', difficulty: 1 },
        { id: 'Y1-SCI-U02-q5', type: 'short', prompt: 'Which part of the day is dark, morning or night?', answer: 'night', difficulty: 1 },
        { id: 'Y1-SCI-U02-q6', type: 'mcq', prompt: 'When the sun is highest and brightest, it is usually…', options: ['The middle of the day', 'Midnight', 'Very early morning'], answer: 'The middle of the day', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-SCI-U03',
    title: 'Pushes and pulls',
    year: '1',
    subject: 'science',
    strand: 'Science understanding',
    cd: [{ ac: 'AC9S1U03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A push sends something away from you, and a pull brings it closer, like pushing a swing or pulling the door open.',
        'A strong push moves a ball further than a soft push, and the direction you push or pull changes where things go.',
        'Look at your toy, think, and you can predict what will happen: push hard and it zooms, pull gently and it rolls back.',
      ],
      illustrations: [
        { brief: 'Push moves a thing away and pull brings it closer', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Push, moves away' }, { text: 'Pull, comes closer' }, { text: 'Strong push, moves far' }] } },
        { brief: 'How far a ball rolls after a soft, medium and strong push', ready: true, diagram: { kind: 'bar-compare', unit: 'steps', items: [{ label: 'Soft push', value: 2 }, { label: 'Medium push', value: 5 }, { label: 'Strong push', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-U03-q1', type: 'mcq', prompt: 'To roll a toy car away from you, you would…', options: ['Push it', 'Pull it', 'Leave it still'], answer: 'Push it', difficulty: 1 },
        { id: 'Y1-SCI-U03-q2', type: 'mcq', prompt: 'When you pull a door towards you, the door…', options: ['Comes towards you', 'Moves away', 'Jumps up'], answer: 'Comes towards you', difficulty: 1 },
        { id: 'Y1-SCI-U03-q3', type: 'mcq', prompt: 'A strong push makes a ball roll…', options: ['Further', 'A tiny bit then stop', 'Nowhere at all'], answer: 'Further', difficulty: 1 },
        { id: 'Y1-SCI-U03-q4', type: 'mcq', prompt: 'In the chart, which push rolled the ball 9 steps?', options: ['Strong push', 'Soft push', 'Medium push'], answer: 'Strong push', difficulty: 2 },
        { id: 'Y1-SCI-U03-q5', type: 'short', prompt: 'What word means pressing something so it moves away from you?', answer: 'push', difficulty: 1 },
        { id: 'Y1-SCI-U03-q6', type: 'mcq', prompt: 'Pushing a soft lump of playdough can change its…', options: ['Shape', 'Colour', 'Smell'], answer: 'Shape', difficulty: 2 },
      ],
    },
  },
  // ---------- Science as a Human Endeavour (1 CD) ----------
  {
    id: 'Y1-SCI-H01',
    title: 'Science in daily life',
    year: '1',
    subject: 'science',
    strand: 'Science as a human endeavour',
    cd: [{ ac: 'AC9S1H01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Science is all around you, bakers measure ingredients, gardeners watch the weather, and farmers watch the seasons to decide when to plant.',
        'When you notice a pattern, you can predict what comes next: if dark clouds gather, rain is probably on its way.',
        'Noticing patterns and using them to predict is one of the cleverest things you can do, you are thinking like a scientist!',
      ],
      illustrations: [
        { brief: 'A baker, a gardener and a weather-watcher each using science in daily life', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bowl', label: 'Baking measures' }, { icon: 'sprout', label: 'Planting by season' }, { icon: 'raincloud', label: 'Watching weather' }], caption: 'People use science every single day' } },
        { brief: 'Dark clouds, then a prediction of rain, then grabbing an umbrella', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'See dark clouds' }, { text: 'Predict: rain is coming' }, { text: 'Grab an umbrella' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-H01-q1', type: 'mcq', prompt: 'A baker measures flour carefully because…', options: ['Measuring helps the food turn out right', 'Measuring is a game', 'Measuring does not matter at all'], answer: 'Measuring helps the food turn out right', difficulty: 2 },
        { id: 'Y1-SCI-H01-q2', type: 'mcq', prompt: 'Dark, grey clouds often mean…', options: ['Rain may be coming', 'The sun is hottest', 'It is definitely snow'], answer: 'Rain may be coming', difficulty: 1 },
        { id: 'Y1-SCI-H01-q3', type: 'mcq', prompt: 'Spotting a pattern helps you…', options: ['Predict what might happen next', 'Forget everything', 'Stop thinking'], answer: 'Predict what might happen next', difficulty: 1 },
        { id: 'Y1-SCI-H01-q4', type: 'mcq', prompt: 'A gardener who plants seeds after rain is using…', options: ['Knowledge about weather patterns', 'A lucky guess with no reason', 'Magic'], answer: 'Knowledge about weather patterns', difficulty: 2 },
        { id: 'Y1-SCI-H01-q5', type: 'short', prompt: 'You wake up and see dark clouds. What might be coming?', answer: 'Rain', difficulty: 1 },
        { id: 'Y1-SCI-H01-q6', type: 'mcq', prompt: 'Using a pattern to guess what happens next is called…', options: ['Predicting', 'Hiding', 'Shouting'], answer: 'Predicting', difficulty: 2 },
      ],
    },
  },
  // ---------- Science Inquiry (6 CDs) ----------
  {
    id: 'Y1-SCI-I01',
    title: 'Questions & predictions',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A scientist starts with a question like "What will happen if I give the plant more water?"',
        'A prediction is your best guess, made from what you already know, not a random wild guess.',
        'Ask what, why and what-if questions, then test them to find out for real!',
      ],
      illustrations: [
        { brief: 'Asking a question, then predicting, then trying it out', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Ask: what will happen?' }, { text: 'Predict from what you know' }, { text: 'Try it and see' }] } },
        { brief: 'A chat bubble asking "what if", a crystal ball predicting, and a magnifier finding out', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: 'Ask "what if…?"' }, { icon: 'crystal-ball', label: 'Predict' }, { icon: 'magnifier', label: 'Find out' }], caption: 'Question, predict, then find out' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I01-q1', type: 'mcq', prompt: 'Which is a good question for a science test?', options: ['What will happen if I pull the toy harder?', 'What is my favourite colour?', 'Can pancakes dance?'], answer: 'What will happen if I pull the toy harder?', difficulty: 2 },
        { id: 'Y1-SCI-I01-q2', type: 'mcq', prompt: 'A prediction is…', options: ['A guess based on what you already know', 'A wild guess with no reason', 'A wish'], answer: 'A guess based on what you already know', difficulty: 2 },
        { id: 'Y1-SCI-I01-q3', type: 'mcq', prompt: 'Leaves fell last autumn. What could you predict about next autumn?', options: ['Leaves will probably fall again', 'Leaves will turn into fish', 'Nothing will ever change'], answer: 'Leaves will probably fall again', difficulty: 2 },
        { id: 'Y1-SCI-I01-q4', type: 'mcq', prompt: 'You say "I think the ball will roll far." That is a…', options: ['Prediction', 'Question', 'Drawing'], answer: 'Prediction', difficulty: 1 },
        { id: 'Y1-SCI-I01-q5', type: 'mcq', prompt: '"What will happen if I push harder?" is a question about…', options: ['How a change affects the result', 'Your favourite game', 'What is for lunch'], answer: 'How a change affects the result', difficulty: 2 },
        { id: 'Y1-SCI-I01-q6', type: 'short', prompt: 'What do you call your best guess about what will happen in a test?', answer: 'A prediction', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-SCI-I02',
    title: 'Safe investigation procedures',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Before any investigation, plan for safety: no tasting, no touching hot things, and always ask a grown-up for help.',
        'Safe scientists follow the steps in order and use the right tools the right way.',
        'When everyone follows the safety rules, the investigation is fun and keeps everyone safe.',
      ],
      illustrations: [
        { brief: 'Planning safe steps, asking a grown-up, then testing the prediction', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan safe steps' }, { text: 'Ask a grown-up for help' }, { text: 'Test your prediction' }] } },
        { brief: 'A stop sign for tasting, a go circle for following steps, and a grown-up to ask', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'stop-sign', label: 'Never taste' }, { icon: 'go-circle', label: 'Follow the steps' }, { icon: 'people', label: 'Ask a grown-up' }], caption: 'Safety steps keep every investigation safe' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I02-q1', type: 'mcq', prompt: 'In science, you should taste things only when…', options: ['A teacher says it is safe', 'No one is looking', 'They smell nice'], answer: 'A teacher says it is safe', difficulty: 1 },
        { id: 'Y1-SCI-I02-q2', type: 'mcq', prompt: 'Touching something very hot in an experiment is…', options: ['Unsafe, ask a grown-up', 'The best way to test', 'Fine if you are quick'], answer: 'Unsafe, ask a grown-up', difficulty: 1 },
        { id: 'Y1-SCI-I02-q3', type: 'mcq', prompt: 'Following the steps of an experiment helps you…', options: ['Stay safe and get a fair result', 'Finish faster and make a mess', 'Skip the learning'], answer: 'Stay safe and get a fair result', difficulty: 2 },
        { id: 'Y1-SCI-I02-q4', type: 'mcq', prompt: 'An experiment needs you to push hard. The safe thing is to…', options: ['Ask a grown-up to help', 'Push as hard as you can alone', 'Close your eyes and push'], answer: 'Ask a grown-up to help', difficulty: 1 },
        { id: 'Y1-SCI-I02-q5', type: 'mcq', prompt: 'Which is a safe way to look closely at something small?', options: ['Use a magnifier', 'Put it in your mouth', 'Hold it right against your eye'], answer: 'Use a magnifier', difficulty: 1 },
        { id: 'Y1-SCI-I02-q6', type: 'short', prompt: 'If you are not sure an experiment step is safe, what should you do?', answer: 'Ask a grown-up', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-SCI-I03',
    title: 'Observations & recording',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Observing means looking, listening and noticing very carefully, not just a quick peek.',
        'Scientists record what they see with drawings, tallies or simple charts so nothing is forgotten.',
        'Tools like rulers, hand lenses and cameras help you measure and capture your observations.',
      ],
      illustrations: [
        { brief: 'Looking closely, zooming in with a magnifier, then recording on a clipboard', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Look closely' }, { icon: 'magnifier', label: 'Zoom in' }, { icon: 'clipboard', label: 'Record it' }], caption: 'Observe with your senses, then record what you notice' } },
        { brief: 'A bean sprout measured each day with a ruler', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Day 1', value: 1 }, { label: 'Day 3', value: 3 }, { label: 'Day 5', value: 6 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I03-q1', type: 'mcq', prompt: 'Observing a plant carefully means…', options: ['Looking and noticing closely', 'Guessing fast', 'Looking away'], answer: 'Looking and noticing closely', difficulty: 1 },
        { id: 'Y1-SCI-I03-q2', type: 'mcq', prompt: 'A ruler is best for measuring…', options: ['How tall something is', 'How loud something is', 'How it tastes'], answer: 'How tall something is', difficulty: 1 },
        { id: 'Y1-SCI-I03-q3', type: 'mcq', prompt: 'In the chart, how tall was the sprout on Day 5?', options: ['6 cm', '1 cm', '3 cm'], answer: '6 cm', difficulty: 2 },
        { id: 'Y1-SCI-I03-q4', type: 'mcq', prompt: 'Why do scientists draw or write what they observe?', options: ['So they can remember it later', 'To fill in time', 'Because drawing is the only fun part'], answer: 'So they can remember it later', difficulty: 1 },
        { id: 'Y1-SCI-I03-q5', type: 'mcq', prompt: 'A camera can help you…', options: ['Keep a picture of what you observed', 'Make the plant grow faster', 'Taste the leaf'], answer: 'Keep a picture of what you observed', difficulty: 2 },
        { id: 'Y1-SCI-I03-q6', type: 'short', prompt: 'Name one tool you can use to measure how tall a plant is.', answer: 'A ruler', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-SCI-I04',
    title: 'Sorting data & patterns',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Sorting things into groups helps you spot patterns, all the round leaves in one pile and all the long leaves in another.',
        'Putting your counts into a table or a picture makes the pattern easy to see.',
        'When you sort and order your data, hidden patterns pop out like magic!',
      ],
      illustrations: [
        { brief: 'Sorting into groups, counting each group, then spotting the pattern', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sort into groups' }, { text: 'Count each group' }, { text: 'Spot the pattern' }] } },
        { brief: 'Pets the class counted, shown as a simple chart', ready: true, diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Dogs', value: 4 }, { label: 'Cats', value: 3 }, { label: 'Fish', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I04-q1', type: 'mcq', prompt: 'Sorting leaves into round and long piles is a way to…', options: ['Organise your observations', 'Make a big mess', 'Decide which is prettiest'], answer: 'Organise your observations', difficulty: 1 },
        { id: 'Y1-SCI-I04-q2', type: 'mcq', prompt: 'In the pet chart, which pet did the class count the most?', options: ['Dogs (4)', 'Cats (3)', 'Fish (2)'], answer: 'Dogs (4)', difficulty: 1 },
        { id: 'Y1-SCI-I04-q3', type: 'mcq', prompt: 'A table helps you see data because it…', options: ['Puts numbers in neat rows and columns', 'Hides the numbers away', 'Mixes everything up'], answer: 'Puts numbers in neat rows and columns', difficulty: 2 },
        { id: 'Y1-SCI-I04-q4', type: 'mcq', prompt: 'When you sort objects, things that are the same go…', options: ['Together in one group', 'Anywhere at all', 'Into the bin'], answer: 'Together in one group', difficulty: 1 },
        { id: 'Y1-SCI-I04-q5', type: 'mcq', prompt: 'Ordering your measurements from smallest to biggest helps you…', options: ['Spot a pattern', 'Forget the numbers', 'Make a louder noise'], answer: 'Spot a pattern', difficulty: 2 },
        { id: 'Y1-SCI-I04-q6', type: 'short', prompt: 'You count 5 blue cars and 2 red cars. Which colour has more?', answer: 'Blue', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-SCI-I05',
    title: 'Comparing predictions with observations',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'After a test, compare your prediction with what you really saw, they may match, or you may learn something new.',
        'Thinking about fairness means keeping the test the same for everyone, like giving each plant the same light and water.',
        'Ending with a brand-new question is a sign you are a brilliant scientist!',
      ],
      illustrations: [
        { brief: 'Predicting, testing and observing, comparing the two, then asking a new question', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Predict what will happen' }, { text: 'Test it and observe' }, { text: 'Compare the two' }, { text: 'Ask a new question' }] } },
        { brief: 'Two plants kept fair with the same sun, the same water and the same measuring', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'Same sun' }, { icon: 'droplet', label: 'Same water' }, { icon: 'ruler', label: 'Measured the same' }], caption: 'A fair test keeps things the same for everyone' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I05-q1', type: 'mcq', prompt: 'After a test, you should compare…', options: ['Your prediction with what really happened', 'Your lunch with your friends lunch', 'Nothing at all'], answer: 'Your prediction with what really happened', difficulty: 1 },
        { id: 'Y1-SCI-I05-q2', type: 'mcq', prompt: 'You predicted the ball would roll far, but it stopped. That means…', options: ['You learned something new from your observation', 'You made a secret mistake', 'Science never works'], answer: 'You learned something new from your observation', difficulty: 2 },
        { id: 'Y1-SCI-I05-q3', type: 'mcq', prompt: 'For a fair plant test, each plant should get…', options: ['The same light and water', 'Different food every day', 'No water at all'], answer: 'The same light and water', difficulty: 1 },
        { id: 'Y1-SCI-I05-q4', type: 'mcq', prompt: 'Making a test fair means…', options: ['Keeping conditions the same so you can compare fairly', 'Changing everything at once', 'Guessing the answer'], answer: 'Keeping conditions the same so you can compare fairly', difficulty: 2 },
        { id: 'Y1-SCI-I05-q5', type: 'short', prompt: 'What is it called when you look at your prediction and what really happened side by side?', answer: 'Comparing', difficulty: 2 },
        { id: 'Y1-SCI-I05-q6', type: 'mcq', prompt: 'A great way to end an investigation is…', options: ['A new question to explore', 'Throwing away your notes', 'Forgetting what happened'], answer: 'A new question to explore', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-SCI-I06',
    title: 'Communicating observations',
    year: '1',
    subject: 'science',
    strand: 'Science inquiry',
    cd: [{ ac: 'AC9S1I06' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Scientists share what they found so others can learn too, with drawings, labels and clear sentences.',
        'Using science words like observe, predict and result makes your sharing clear and clever.',
        'A picture with labels can tell a whole story about what you discovered.',
      ],
      illustrations: [
        { brief: 'Writing a sentence, drawing a picture, then telling the class', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'Write a sentence' }, { icon: 'picture-frame', label: 'Draw a picture' }, { icon: 'speaker', label: 'Tell the class' }], caption: 'Share your findings with words and pictures' } },
        { brief: 'Observing carefully, recording it, then sharing with others', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Observe carefully' }, { text: 'Record words or pictures' }, { text: 'Share with others' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-SCI-I06-q1', type: 'mcq', prompt: 'Sharing your findings helps others…', options: ['Learn from your discovery', 'Forget what they knew', 'Skip their own learning'], answer: 'Learn from your discovery', difficulty: 1 },
        { id: 'Y1-SCI-I06-q2', type: 'mcq', prompt: 'Using the word predict in your report shows you know…', options: ['Science words', 'Magic spells', 'Song words'], answer: 'Science words', difficulty: 2 },
        { id: 'Y1-SCI-I06-q3', type: 'mcq', prompt: 'A labelled drawing of your experiment helps others…', options: ['See what you observed', 'Hear a loud sound', 'Smell the flower'], answer: 'See what you observed', difficulty: 1 },
        { id: 'Y1-SCI-I06-q4', type: 'mcq', prompt: 'What is the best way to tell the class what you found?', options: ['Use clear words and show your result', 'Shout the answer', 'Say "guess what" and walk away'], answer: 'Use clear words and show your result', difficulty: 2 },
        { id: 'Y1-SCI-I06-q5', type: 'mcq', prompt: 'To explain your experiment, you could write…', options: ['A clear sentence with science words', 'Nothing at all', 'Only a messy scribble'], answer: 'A clear sentence with science words', difficulty: 1 },
        { id: 'Y1-SCI-I06-q6', type: 'short', prompt: 'Which science word means guessing what will happen before a test, predict or observe?', answer: 'predict', difficulty: 2 },
      ],
    },
  },
];
