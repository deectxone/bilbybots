import type { Topic } from '../../types/curriculum';

/**
 * Year 2 HASS, full topic bank.
 * Source of truth: docs/content/year-1-5/hass.md (AC v9.0; strands History and
 * Geography for Year 2's four knowledge CDs).
 * Y2-HASS-GE02 (AC9HS2K04) touches First Nations connection to Country/Place
 * and carries `sensitivity: true`, it is written to established, general
 * facts only pending a community-protocol review (see AGENTS.md). Every topic
 * renders real vector diagrams (see
 * src/components/illustrations/diagrams.tsx) and ships 6 assignment questions
 * at nominal pace / 4 under compact pace. Skills AC9HS2S01–S06 are woven into
 * each lesson and its questions, not listed in `cd`.
 */
export const YEAR2_HASS_TOPICS: Topic[] = [
  // ---------- History ----------
  {
    id: 'Y2-HASS-HI01',
    title: 'Why local places and people matter',
    year: '2',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS2K01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Some places and people in our local area are special to us, a library where we read, a park where friends meet, or a kind helper who keeps our street safe.',
        'A place can be important for social reasons (where family and friends come together), cultural reasons (where traditions and celebrations happen), or spiritual reasons (a quiet, special place that means a lot to people).',
        'When we learn why a place matters, we can care for it so it stays special for years to come, and telling others about it keeps its story alive!',
      ],
      illustrations: [
        { brief: 'Local places that matter: a library, a park and a meeting place', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Library' }, { icon: 'tree', label: 'Park' }, { icon: 'people', label: 'Friends meet' }], caption: 'Some local places are special to us' } },
        { brief: 'Flowchart: why a place is important, visit it, learn its story, care for it', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Find a special place' }, { text: 'Learn its story' }, { text: 'Tell others why it matters' }, { text: 'Care for it together' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-HASS-HI01-q1', type: 'mcq', prompt: 'A place is important for social reasons if it…', options: ['brings family and friends together', 'has no people at all', 'is very far away'], answer: 'brings family and friends together', difficulty: 1 },
        { id: 'Y2-HASS-HI01-q2', type: 'mcq', prompt: 'A place is important for cultural reasons if…', options: ['traditions and celebrations happen there', 'it is empty', 'it is hard to find'], answer: 'traditions and celebrations happen there', difficulty: 2 },
        { id: 'Y2-HASS-HI01-q3', type: 'mcq', prompt: 'A quiet place that means a lot to people in a deep way has…', options: ['spiritual significance', 'no value', 'the fastest swings'], answer: 'spiritual significance', difficulty: 3 },
        { id: 'Y2-HASS-HI01-q4', type: 'mcq', prompt: 'When we know why a place matters, we can…', options: ['care for it and keep it special', 'ignore it', 'leave rubbish there'], answer: 'care for it and keep it special', difficulty: 1 },
        { id: 'Y2-HASS-HI01-q5', type: 'mcq', prompt: 'Which question helps you find out why a place is important?', options: ['"What does this place mean to people?"', '"How tall is the fence?"', '"What colour is the door?"'], answer: '"What does this place mean to people?"', difficulty: 2 },
        { id: 'Y2-HASS-HI01-q6', type: 'short', prompt: 'Name one kind person or place that is important in your local area.', answer: 'e.g. a volunteer, a library, a park or a helper', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-HASS-HI02',
    title: 'How technology changed people\u2019s lives',
    year: '2',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS2K02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Long ago there were no washing machines, mobile phones or cars, so people washed clothes by hand, walked or rode horses, and sent letters that took days to arrive.',
        'New technology changed life in four big ways: at home (washing machines and fridges), at work (fast machines), for travel (trains, cars and planes) and for communication (telephones and the internet).',
        'Comparing how things worked long ago with today shows us just how much clever invention can change everyday life!',
      ],
      illustrations: [
        { brief: 'Old and new technology: letter, train and mobile phone', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'envelope', label: 'Letters then' }, { icon: 'train-engine', label: 'Travel then' }, { icon: 'phone', label: 'Phones now' }], caption: 'Technology changed how we talk and travel' } },
        { brief: 'Flowchart: letter sent by hand in the past, message sent by phone now', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Long ago: write a letter' }, { text: 'Send it by horse or train' }, { text: 'Wait days for an answer' }, { text: 'Now: message on a phone' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-HASS-HI02-q1', type: 'mcq', prompt: 'Long ago, before washing machines, people washed clothes…', options: ['by hand', 'with a robot', 'in a plane'], answer: 'by hand', difficulty: 1 },
        { id: 'Y2-HASS-HI02-q2', type: 'mcq', prompt: 'Which is an example of new technology for travel?', options: ['A car or a train', 'A pencil', 'A bed'], answer: 'A car or a train', difficulty: 1 },
        { id: 'Y2-HASS-HI02-q3', type: 'mcq', prompt: 'A letter sent long ago usually took…', options: ['days to arrive', 'one second', 'no time at all'], answer: 'days to arrive', difficulty: 2 },
        { id: 'Y2-HASS-HI02-q4', type: 'mcq', prompt: 'Mobile phones changed communication because people can now…', options: ['talk or message someone far away quickly', 'wash dishes', 'grow vegetables'], answer: 'talk or message someone far away quickly', difficulty: 2 },
        { id: 'Y2-HASS-HI02-q5', type: 'mcq', prompt: 'A washing machine is a new technology that helps people at…', options: ['home', 'the moon', 'school camps only'], answer: 'home', difficulty: 1 },
        { id: 'Y2-HASS-HI02-q6', type: 'short', prompt: 'Name one way travel changed from long ago to today.', answer: 'horses changed to cars and trains', difficulty: 2 },
      ],
    },
  },
  // ---------- Geography ----------
  {
    id: 'Y2-HASS-GE01',
    title: 'Places from street to state',
    year: '2',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS2K03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You can draw your street on a small map, then zoom out to show your town, then your state or territory, and then all of Australia.',
        'These zoomed-out maps fit together like nesting dolls: your street is part of your town, your town is part of your state, and your state is part of Australia.',
        'Zooming out shows how each little place is connected to a bigger place, and a map or a globe helps you see the whole picture!',
      ],
      illustrations: [
        { brief: 'Flowchart zooming out from street to town to state to Australia', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'My street' }, { text: 'My town' }, { text: 'My state' }, { text: 'Australia' }] } },
        { brief: 'Maps at different scales: a house, a town map and a globe', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'My street' }, { icon: 'map', label: 'My state' }, { icon: 'globe', label: 'Australia' }], caption: 'Small places fit inside bigger places' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-HASS-GE01-q1', type: 'mcq', prompt: 'Your street is part of your…', options: ['town', 'shoe', 'breakfast'], answer: 'town', difficulty: 1 },
        { id: 'Y2-HASS-GE01-q2', type: 'mcq', prompt: 'Your town is part of your…', options: ['state or territory', 'backpack', 'lunchbox'], answer: 'state or territory', difficulty: 1 },
        { id: 'Y2-HASS-GE01-q3', type: 'mcq', prompt: 'Which is the BIGGEST place?', options: ['Australia', 'Your street', 'Your town'], answer: 'Australia', difficulty: 1 },
        { id: 'Y2-HASS-GE01-q4', type: 'mcq', prompt: 'Zooming out on a map shows you…', options: ['how small places fit inside bigger places', 'a tiny corner only', 'nothing new'], answer: 'how small places fit inside bigger places', difficulty: 2 },
        { id: 'Y2-HASS-GE01-q5', type: 'mcq', prompt: 'Which tool shows the whole picture of Australia?', options: ['A map or a globe', 'A spoon', 'A rubber band'], answer: 'A map or a globe', difficulty: 2 },
        { id: 'Y2-HASS-GE01-q6', type: 'short', prompt: 'Put these in order from smallest to biggest: state, street, Australia, town.', answer: 'street, town, state, Australia', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-HASS-GE02',
    title: 'First Nations connection to Country/Place',
    year: '2',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS2K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 10,
      body: [
        'For tens of thousands of years, First Nations Australians have cared for their Country/Place, the land, rivers, plants and animals that connect to their family, stories and culture.',
        'This connection is passed down through generations and shown through stories, art, songs and ceremonies, and by caring for the land and water.',
        'Country is much more than land, it is family, home and belonging, and it is precious to the people who care for it.',
      ],
      illustrations: [
        { brief: 'Country cared for over generations: land, water and a special place', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'tree', label: 'Land' }, { icon: 'droplet', label: 'Water' }, { icon: 'sun', label: 'Sky' }], caption: 'First Nations Australians care for Country/Place' } },
        { brief: 'Flowchart: how connection to Country is shared and cared for', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Country/Place connects family and stories' }, { text: 'Passed down through generations' }, { text: 'Shown in stories, art and song' }, { text: 'Cared for with respect' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-HASS-GE02-q1', type: 'mcq', prompt: 'First Nations Australians have cared for Country/Place for…', options: ['tens of thousands of years', 'one week', 'a single day'], answer: 'tens of thousands of years', difficulty: 2 },
        { id: 'Y2-HASS-GE02-q2', type: 'mcq', prompt: 'Country/Place includes…', options: ['the land, rivers, plants and animals', 'only buildings', 'only toys'], answer: 'the land, rivers, plants and animals', difficulty: 1 },
        { id: 'Y2-HASS-GE02-q3', type: 'mcq', prompt: 'Connection to Country/Place is passed down through…', options: ['generations', 'the post', 'a single season'], answer: 'generations', difficulty: 2 },
        { id: 'Y2-HASS-GE02-q4', type: 'mcq', prompt: 'Which is a way connection to Country/Place is shown?', options: ['Stories, art, song and ceremony', 'Shopping lists', 'Traffic lights'], answer: 'Stories, art, song and ceremony', difficulty: 2 },
        { id: 'Y2-HASS-GE02-q5', type: 'mcq', prompt: 'Caring for the land and water is a way of…', options: ['showing respect for Country/Place', 'making noise', 'playing a game'], answer: 'showing respect for Country/Place', difficulty: 1 },
        { id: 'Y2-HASS-GE02-q6', type: 'short', prompt: 'To First Nations Australians, Country is more than land, it is also what?', answer: 'family, home and belonging', difficulty: 3 },
      ],
    },
  },
];
