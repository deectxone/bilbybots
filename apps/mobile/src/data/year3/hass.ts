import type { Topic } from '../../types/curriculum';

export const YEAR3_HASS_TOPICS: Topic[] = [
  {
    id: 'Y3-HASS-HI01',
    title: 'Changes to the local community',
    year: '3',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS3K01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Our local community — the town or suburb where we live — is always growing and changing: new houses, shops, roads and parks appear, and old buildings find new uses.',
        'Every change has a cause (the reason it happened, like more families moving in) and an effect (what happens because of it, like a new school being built).',
        'People from many different backgrounds help build our community — building homes, growing food, teaching, baking and lending a hand when someone needs it.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from a cause to its effect: new families, more houses, a new shop, a growing community',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'New families move in' }, { text: 'More houses are built' }, { text: 'A new shop opens' }, { text: 'The community grows' }] },
        },
        {
          brief: 'Scene of diverse community contributions: builders, food, school and helpers',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'house', label: 'Builders build homes' }, { icon: 'bowl', label: 'Shops sell food' }, { icon: 'book', label: 'Schools teach' }, { icon: 'people', label: 'Helpers lend a hand' }], caption: 'People from many different backgrounds work together to build a strong community.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-HI01-q1', type: 'mcq', prompt: 'A new shopping centre opens in town. What is the most likely effect?', options: ['more people shop nearby', 'the town gets colder', 'the school closes forever'], answer: 'more people shop nearby', difficulty: 1 },
        { id: 'Y3-HASS-HI01-q2', type: 'mcq', prompt: 'Which is an example of a cause of change in a community?', options: ['a new family moves into the street', 'the sky is blue', 'Monday follows Sunday'], answer: 'a new family moves into the street', difficulty: 1 },
        { id: 'Y3-HASS-HI01-q3', type: 'mcq', prompt: 'Many families move into a suburb. An effect of this might be that…', options: ['more children need school places', 'no children live there anymore', 'the schools get smaller'], answer: 'more children need school places', difficulty: 2 },
        { id: 'Y3-HASS-HI01-q4', type: 'short', prompt: 'The reason a change happens is called the ___ .', answer: 'cause', difficulty: 2 },
        { id: 'Y3-HASS-HI01-q5', type: 'mcq', prompt: 'How do people from different backgrounds contribute to a community?', options: ['they bring new skills, food and ideas that help everyone', 'they all do exactly the same job', 'they never take part'], answer: 'they bring new skills, food and ideas that help everyone', difficulty: 2 },
        { id: 'Y3-HASS-HI01-q6', type: 'short', prompt: 'A new school is built because the old one was crowded. What do we call the change that happens because of the old school being full?', answer: 'effect', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-HASS-HI02',
    title: "Australia's identity & symbols",
    year: '3',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS3K02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        "Australia has special symbols that stand for our country: the Australian flag, our national colours of green and gold, the golden wattle flower, and our animal emblems — the kangaroo and the emu.",
        'We also have special days when we come together to celebrate or remember, like Australia Day, ANZAC Day and NAIDOC Week, each marking something important about who we are.',
        'The different people, places and stories across our nation make Australia\u2019s identity rich and varied — and each one of us is a part of it.',
      ],
      illustrations: [
        {
          brief: 'Scene of national symbols: the flag, the golden wattle, the anthem and special days on the calendar',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'flag', label: 'National flag' }, { icon: 'tree', label: 'Golden wattle' }, { icon: 'music-note', label: 'Anthem' }, { icon: 'calendar', label: 'Special days' }], caption: 'Symbols, emblems and special days help shape Australia\u2019s identity.' },
        },
        {
          brief: 'Flowchart of how we mark ANZAC Day from dawn service to remembering',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Dawn service' }, { text: 'People gather together' }, { text: 'Remember those who served' }, { text: 'March through the town' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-HI02-q1', type: 'mcq', prompt: 'Which animal is an emblem of Australia?', options: ['the kangaroo', 'the polar bear', 'the lion'], answer: 'the kangaroo', difficulty: 1 },
        { id: 'Y3-HASS-HI02-q2', type: 'mcq', prompt: "What are Australia's national colours?", options: ['green and gold', 'red and blue', 'black and white'], answer: 'green and gold', difficulty: 1 },
        { id: 'Y3-HASS-HI02-q3', type: 'mcq', prompt: 'Which flower is Australia\u2019s national floral emblem?', options: ['the golden wattle', 'the rose', 'the tulip'], answer: 'the golden wattle', difficulty: 2 },
        { id: 'Y3-HASS-HI02-q4', type: 'short', prompt: 'On which special day do Australians remember the soldiers who served in war?', answer: 'ANZAC Day', difficulty: 2 },
        { id: 'Y3-HASS-HI02-q5', type: 'mcq', prompt: 'Why do Australians come together on special days?', options: ['to celebrate and remember things that are important to our nation', 'to stay home alone', 'to keep quiet and forget'], answer: 'to celebrate and remember things that are important to our nation', difficulty: 2 },
        { id: 'Y3-HASS-HI02-q6', type: 'mcq', prompt: 'The Australian flag shows…', options: ['the Union Jack and the stars of the Southern Cross', 'a map of Australia', 'a picture of an emu'], answer: 'the Union Jack and the stars of the Southern Cross', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y3-HASS-GE01',
    title: "Australia's states, territories & neighbours",
    year: '3',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS3K03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        "Australia is made of six states — New South Wales, Victoria, Queensland, South Australia, Western Australia and Tasmania — and two mainland territories, the Northern Territory and the Australian Capital Territory.",
        'Before that, and still today, Australia is also home to many First Nations Countries/Places — the traditional lands cared for by Aboriginal and Torres Strait Islander peoples.',
        'Our close neighbours include New Zealand across the Tasman Sea, Papua New Guinea to the north and Indonesia to our north-west, some just a short flight away.',
      ],
      illustrations: [
        {
          brief: 'Scene of Australia as six states, two territories, with neighbours reached by plane and ship',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Six states' }, { icon: 'flag', label: 'Two mainland territories' }, { icon: 'plane', label: 'Short flight' }, { icon: 'ship', label: 'Across the sea' }], caption: 'Six states, two mainland territories and neighbours near and far.' },
        },
        {
          brief: 'Flowchart from Australia to its states and territories, First Nations Countries/Places and neighbouring countries',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Australia' }, { text: 'Six states and two mainland territories' }, { text: 'Many First Nations Countries/Places' }, { text: 'Neighbouring countries' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-GE01-q1', type: 'mcq', prompt: 'How many states does Australia have?', options: ['six', 'four', 'ten'], answer: 'six', difficulty: 1 },
        { id: 'Y3-HASS-GE01-q2', type: 'mcq', prompt: 'Which is one of Australia\u2019s mainland territories?', options: ['the Northern Territory', 'New Zealand', 'Tasmania'], answer: 'the Northern Territory', difficulty: 1 },
        { id: 'Y3-HASS-GE01-q3', type: 'mcq', prompt: 'Which country is a close neighbour of Australia?', options: ['New Zealand', 'Canada', 'Brazil'], answer: 'New Zealand', difficulty: 1 },
        { id: 'Y3-HASS-GE01-q4', type: 'short', prompt: 'What is the capital city of Australia, located in the Australian Capital Territory?', answer: 'Canberra', difficulty: 1 },
        { id: 'Y3-HASS-GE01-q5', type: 'mcq', prompt: 'First Nations Countries/Places are…', options: ['the traditional lands cared for by Aboriginal and Torres Strait Islander peoples', 'the names of a few big cities', 'new suburbs with no people'], answer: 'the traditional lands cared for by Aboriginal and Torres Strait Islander peoples', difficulty: 2 },
        { id: 'Y3-HASS-GE01-q6', type: 'mcq', prompt: 'Which of these is closest to Australia?', options: ['Papua New Guinea', 'Italy', 'Mexico'], answer: 'Papua New Guinea', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y3-HASS-GE02',
    title: 'First Nations interconnection with Country/Place',
    year: '3',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS3K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 10,
      body: [
        'For Aboriginal and Torres Strait Islander peoples, Country/Place is much more than land — it is home, and it is connected to family, stories, culture and identity.',
        'This interconnection is shown in many ways: seasonal calendars that track when foods are ready, Dreaming stories that carry knowledge, and art, dance and song that share what Country means.',
        'People care for Country by taking only what is needed and keeping places healthy, so the connection continues for future generations.',
      ],
      illustrations: [
        {
          brief: 'Scene of interconnection with Country: the land, the seasons, and art, dance and song',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Country/Place' }, { icon: 'sun', label: 'Seasonal calendars' }, { icon: 'picture-frame', label: 'Art' }, { icon: 'music-note', label: 'Dance and song' }], caption: 'Interconnection with Country is shown through seasons, stories, art, dance and song.' },
        },
        {
          brief: 'Flowchart of seasonal knowledge being watched, shared and passed on',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Watch the signs of the seasons' }, { text: 'Know what the land provides' }, { text: 'Take only what is needed' }, { text: 'Pass knowledge to the next generation' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-GE02-q1', type: 'mcq', prompt: 'For First Nations Australians, Country/Place is connected to…', options: ['family, stories and culture', 'only the roads', 'nothing important'], answer: 'family, stories and culture', difficulty: 1 },
        { id: 'Y3-HASS-GE02-q2', type: 'mcq', prompt: 'Seasonal calendars help First Nations peoples know…', options: ['when foods are ready and what the land provides', 'the time the bus comes', 'the price of things in the shop'], answer: 'when foods are ready and what the land provides', difficulty: 1 },
        { id: 'Y3-HASS-GE02-q3', type: 'mcq', prompt: 'Which shows knowledge of Country being passed on?', options: ['elders sharing stories with children', 'throwing rubbish on the land', 'never talking about Country'], answer: 'elders sharing stories with children', difficulty: 2 },
        { id: 'Y3-HASS-GE02-q4', type: 'short', prompt: 'Art, dance and song are ways First Nations peoples ___ their connection to Country.', answer: 'share', difficulty: 2 },
        { id: 'Y3-HASS-GE02-q5', type: 'mcq', prompt: 'Caring for Country means…', options: ['taking only what is needed and keeping the land healthy', 'taking as much as possible', 'leaving rubbish behind'], answer: 'taking only what is needed and keeping the land healthy', difficulty: 2 },
        { id: 'Y3-HASS-GE02-q6', type: 'mcq', prompt: 'The Dreaming is important to many First Nations Australians because it…', options: ['carries knowledge, stories and ways of caring for Country', 'is a type of food', 'is a kind of boat'], answer: 'carries knowledge, stories and ways of caring for Country', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y3-HASS-GE03',
    title: 'Comparing Australia & neighbouring countries',
    year: '3',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS3K05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Every place has natural features (like rivers, mountains and beaches), managed features (like farms and parks people look after) and constructed features (like houses, bridges and roads people build).',
        'When we compare Australia with a neighbour like New Zealand or Indonesia, we find similarities — both have beaches, farms and towns — and differences, like different mountains, weather and ways of building.',
        'Noticing what is the same and what is different helps us understand and respect how people live in other places.',
      ],
      illustrations: [
        {
          brief: 'Scene of natural, managed and constructed features with a beach, farm, house and tree',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'wave', label: 'Natural: beach' }, { icon: 'tree', label: 'Natural: forest' }, { icon: 'sprout', label: 'Managed: farm' }, { icon: 'house', label: 'Constructed: home' }], caption: 'Natural, managed and constructed features make up a place.' },
        },
        {
          brief: 'Bar chart comparing the population of Australia, Indonesia and New Zealand',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'million people', items: [{ label: 'Australia', value: 26 }, { label: 'Indonesia', value: 278 }, { label: 'New Zealand', value: 5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-GE03-q1', type: 'mcq', prompt: 'Which is a natural feature?', options: ['a river', 'a house', 'a bridge'], answer: 'a river', difficulty: 1 },
        { id: 'Y3-HASS-GE03-q2', type: 'mcq', prompt: 'Which is a constructed feature?', options: ['a bridge', 'a mountain', 'a river'], answer: 'a bridge', difficulty: 1 },
        { id: 'Y3-HASS-GE03-q3', type: 'mcq', prompt: 'A farm where people grow crops is a ___ feature.', options: ['managed', 'natural', 'invisible'], answer: 'managed', difficulty: 2 },
        { id: 'Y3-HASS-GE03-q4', type: 'short', prompt: 'Roads, houses and bridges are examples of ___ features.', answer: 'constructed', difficulty: 2 },
        { id: 'Y3-HASS-GE03-q5', type: 'mcq', prompt: 'What do Australia and New Zealand both have?', options: ['beaches and farms', 'exactly the same weather', 'no towns at all'], answer: 'beaches and farms', difficulty: 2 },
        { id: 'Y3-HASS-GE03-q6', type: 'mcq', prompt: 'Comparing two places helps us…', options: ['understand and respect how people live in different places', 'make one of the places disappear', 'forget about our own home'], answer: 'understand and respect how people live in different places', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-HASS-CI01',
    title: 'Rules: who makes them & why',
    year: '3',
    subject: 'hass',
    strand: 'Civics and Citizenship',
    cd: [{ ac: 'AC9HS3K06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Rules are made by the people in charge of a place: your family at home, your teacher at school, and the government for the whole country.',
        'Rules keep us safe and make sure everyone is treated fairly — that is why we have rules about crossing the road, taking turns and sharing.',
        'When rules are not followed, there are consequences: not wearing a helmet means you are less safe, and ignoring a game\u2019s rules means no one can play fairly.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from following rules to staying safe, and from breaking rules to consequences',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Follow the rule' }, { text: 'Everyone stays safe and fair' }, { text: 'Break the rule' }, { text: 'There are consequences' }] },
        },
        {
          brief: 'Scene of rules at school and on the road: traffic light, stop sign, sharing and game rules',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'traffic-light', label: 'Road rules' }, { icon: 'stop-sign', label: 'Stay safe' }, { icon: 'people', label: 'Take turns fairly' }, { icon: 'ball', label: 'Game rules' }], caption: 'Rules keep us safe and make things fair.' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-CI01-q1', type: 'mcq', prompt: 'Who makes the rules at school?', options: ['your teacher', 'a king in another country', 'the weather'], answer: 'your teacher', difficulty: 1 },
        { id: 'Y3-HASS-CI01-q2', type: 'mcq', prompt: 'Why do we have rules?', options: ['to keep people safe and treat everyone fairly', 'to make things harder on purpose', 'for no reason at all'], answer: 'to keep people safe and treat everyone fairly', difficulty: 1 },
        { id: 'Y3-HASS-CI01-q3', type: 'mcq', prompt: 'What might happen if no one followed the rules of a game?', options: ['the game would not be fair', 'the game would be more fun for everyone', 'everyone would win'], answer: 'the game would not be fair', difficulty: 2 },
        { id: 'Y3-HASS-CI01-q4', type: 'short', prompt: 'The result of breaking a rule is called a ___ .', answer: 'consequence', difficulty: 2 },
        { id: 'Y3-HASS-CI01-q5', type: 'mcq', prompt: 'Who makes the rules for the whole country?', options: ['the government', 'your pet dog', 'the supermarket'], answer: 'the government', difficulty: 2 },
        { id: 'Y3-HASS-CI01-q6', type: 'mcq', prompt: 'A rule about crossing the road safely exists because…', options: ['it keeps people safe', 'it makes walking slower on purpose', 'roads do not need any rules'], answer: 'it keeps people safe', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-HASS-CI02',
    title: 'Participating in communities',
    year: '3',
    subject: 'hass',
    strand: 'Civics and Citizenship',
    cd: [{ ac: 'AC9HS3K07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A community is a group of people who share a place, like your school, your neighbourhood or your sporting team.',
        'People participate because helping out makes communities stronger, fairer and more fun for everyone — by volunteering, joining clubs, caring for the environment or having a say.',
        'You can participate too: clean up a park, join a team, help a neighbour or share your ideas at school — every little contribution counts.',
      ],
      illustrations: [
        {
          brief: 'Scene of people participating: joining a team, planting trees, helping others and coming together',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Come together' }, { icon: 'tree', label: 'Plant a tree' }, { icon: 'ball', label: 'Join a team' }, { icon: 'smiley', label: 'Help others' }], caption: 'Everyone can play a part in their community.' },
        },
        {
          brief: 'Flowchart from joining in to a stronger community',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Join a club' }, { text: 'Help others' }, { text: 'Care for the environment' }, { text: 'A stronger, fairer community' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-HASS-CI02-q1', type: 'mcq', prompt: 'Which is an example of participating in your community?', options: ['helping clean up a local park', 'staying home alone', 'ignoring your neighbours'], answer: 'helping clean up a local park', difficulty: 1 },
        { id: 'Y3-HASS-CI02-q2', type: 'mcq', prompt: 'A community is…', options: ['a group of people who share a place like a school or neighbourhood', 'just one single person', 'a type of food'], answer: 'a group of people who share a place like a school or neighbourhood', difficulty: 1 },
        { id: 'Y3-HASS-CI02-q3', type: 'mcq', prompt: 'Why do people volunteer?', options: ['to help make their community stronger and fairer', 'to make things worse', 'because it never helps anyone'], answer: 'to help make their community stronger and fairer', difficulty: 2 },
        { id: 'Y3-HASS-CI02-q4', type: 'short', prompt: 'When you give your time to help others without being paid, you are ___ .', answer: 'volunteering', difficulty: 2 },
        { id: 'Y3-HASS-CI02-q5', type: 'mcq', prompt: 'Which is a way a Year 3 student can contribute?', options: ['joining a sports team or helping a neighbour', 'changing the rules of the country', 'never taking part'], answer: 'joining a sports team or helping a neighbour', difficulty: 2 },
        { id: 'Y3-HASS-CI02-q6', type: 'mcq', prompt: 'When lots of people take part, a community becomes…', options: ['stronger, fairer and more fun', 'smaller and lonelier', 'quiet and separate'], answer: 'stronger, fairer and more fun', difficulty: 1 },
      ],
    },
  },
];
