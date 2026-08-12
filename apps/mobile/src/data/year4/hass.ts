import type { Topic } from '../../types/curriculum';

/**
 * Year 4 HASS — full knowledge-strand topic bank (History, Geography, Civics
 * & Citizenship). Source of truth: docs/content/year-1-5/hass.md (AC v9.0).
 * Skills CDs (AC9HS4S01–S07) are woven into these knowledge units per the
 * source doc, not authored separately.
 * `Y4-HASS-HI01`, `Y4-HASS-HI04` and `Y4-HASS-GE02` carry
 * `sensitivity: true` — they touch First Nations Australians' histories,
 * cultures and Country/Place, and are written to established, general facts
 * only, pending a community-protocol review before release (see AGENTS.md
 * child-safety/accuracy constraints). HI04 also presents the differing views
 * of contact (colonisation vs invasion) factually and respectfully.
 */
export const YEAR4_HASS_TOPICS: Topic[] = [
  // ---------- History (4 CDs) ----------
  {
    id: 'Y4-HASS-HI01',
    title: 'First Nations Australians: diversity & connection',
    year: '4',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS4K01' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'Before the First Fleet ever arrived, Australia was already home to hundreds of different First Nations groups, each with its own languages, stories and ways of living — and First Nations Australians are among the world\'s oldest continuous cultures.',
        'Their connection to Country and Place is deep and special: Country means the land, water and sky, and caring for it is part of who they are. First Nations Australians have lived on and cared for Country for tens of thousands of years, and many communities still do today.',
      ],
      illustrations: [
        {
          brief: 'Many different First Nations groups on one map, all connected to Country',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Many groups' }, { icon: 'map', label: 'Country & Place' }, { icon: 'tree', label: 'Cared for' }], caption: 'Hundreds of First Nations groups, all connected to Country' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-HI01-q1', type: 'mcq', prompt: 'Before British colonisation, Australia was home to…', options: ['Hundreds of different First Nations groups', 'One single group', 'Exactly two groups'], answer: 'Hundreds of different First Nations groups', difficulty: 1 },
        { id: 'Y4-HASS-HI01-q2', type: 'short', prompt: 'What is the special name First Nations Australians use for the land and sea they belong to and care for?', answer: 'Country', difficulty: 1 },
        { id: 'Y4-HASS-HI01-q3', type: 'mcq', prompt: 'First Nations Australians have lived in Australia for…', options: ['Tens of thousands of years', 'Only a few hundred years', 'Since the First Fleet arrived'], answer: 'Tens of thousands of years', difficulty: 2 },
        { id: 'Y4-HASS-HI01-q4', type: 'mcq', prompt: 'A "connection to Country" means…', options: ['Caring for and belonging to the land, water and sky', 'Only visiting a place once', 'Living in one house forever'], answer: 'Caring for and belonging to the land, water and sky', difficulty: 2 },
        { id: 'Y4-HASS-HI01-q5', type: 'mcq', prompt: 'First Nations cultures pass on knowledge about Country through…', options: ['Stories, songs and dance', 'Only written books', 'Text messages'], answer: 'Stories, songs and dance', difficulty: 2 },
        { id: 'Y4-HASS-HI01-q6', type: 'mcq', prompt: 'First Nations Australians who care for their Country today show that their connection has been…', options: ['Continuous for tens of thousands of years', 'Recently created', 'Only in one small place'], answer: 'Continuous for tens of thousands of years', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-HASS-HI02',
    title: 'Why the first colony was established (1788)',
    year: '4',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS4K02' }],
    learn: {
      learnTimeMin: 11,
      body: [
        'In the 1700s, Britain\'s prisons were overcrowded with people convicted of crimes, and the British government needed somewhere to send them. Britain also wanted a base to protect its trade in the region.',
        'So in 1788, the First Fleet — 11 ships carrying convicts, soldiers and supplies — sailed across the world and arrived at Sydney Cove, where the first British colony was set up.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of why the colony was established, ending at 1788',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: "Britain's prisons are overcrowded" }, { text: 'Britain needs a place to send convicts' }, { text: 'Britain also wants to protect its trade' }, { text: '1788: the First Fleet arrives at Sydney Cove' }] },
        },
        {
          brief: 'The First Fleet sailing to Australia with a map and flag',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ship', label: 'First Fleet' }, { icon: 'map', label: 'To Australia' }, { icon: 'flag', label: 'British colony' }], caption: 'Eleven ships sailed to set up the first colony' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-HI02-q1', type: 'short', prompt: 'In what year did the First Fleet arrive in Australia?', answer: '1788', difficulty: 1 },
        { id: 'Y4-HASS-HI02-q2', type: 'mcq', prompt: 'The first British colony was set up partly because Britain\'s prisons were…', options: ['Overcrowded', 'Empty', 'Too expensive to build'], answer: 'Overcrowded', difficulty: 1 },
        { id: 'Y4-HASS-HI02-q3', type: 'mcq', prompt: 'The First Fleet carried mainly…', options: ['Convicts, soldiers and supplies', 'Only farmers', 'Only tourists'], answer: 'Convicts, soldiers and supplies', difficulty: 1 },
        { id: 'Y4-HASS-HI02-q4', type: 'mcq', prompt: 'Britain also wanted a base in Australia to protect its…', options: ['Trade routes', 'Ice cream shops', 'Gold mines'], answer: 'Trade routes', difficulty: 2 },
        { id: 'Y4-HASS-HI02-q5', type: 'mcq', prompt: 'The first British settlement was set up at…', options: ['Sydney Cove', 'Darwin', 'Perth'], answer: 'Sydney Cove', difficulty: 2 },
        { id: 'Y4-HASS-HI02-q6', type: 'mcq', prompt: 'How many ships were in the First Fleet?', options: ['Eleven', 'Two', 'Fifty'], answer: 'Eleven', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-HASS-HI03',
    title: 'Life in the early colony',
    year: '4',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS4K03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Life in the early colony was tough. Officials like the governor kept law and order, while convicts did a lot of the building and farming that got the new settlement started.',
        'Food was often in short supply, crops sometimes failed, and many people lived in small huts and tents. But the people of the colony kept going, building a community almost from nothing.',
      ],
      illustrations: [
        {
          brief: 'Officials and convicts building huts and farming in the early colony',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Officials & convicts' }, { icon: 'house', label: 'Huts & tents' }, { icon: 'bowl', label: 'Scarce food' }], caption: 'Building a colony from almost nothing' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-HI03-q1', type: 'short', prompt: 'What name was given to people sent to Australia from Britain as punishment?', answer: 'Convicts', difficulty: 1 },
        { id: 'Y4-HASS-HI03-q2', type: 'mcq', prompt: 'Officials like the governor were responsible for…', options: ['Keeping law and order', 'Doing all the farming alone', 'Returning home quickly'], answer: 'Keeping law and order', difficulty: 1 },
        { id: 'Y4-HASS-HI03-q3', type: 'mcq', prompt: 'Convicts helped build the colony by doing jobs like…', options: ['Building and farming', 'Flying planes', 'Teaching in universities'], answer: 'Building and farming', difficulty: 2 },
        { id: 'Y4-HASS-HI03-q4', type: 'mcq', prompt: 'In the early colony, food was often…', options: ['In short supply', 'Delivered fresh daily', 'Free for everyone'], answer: 'In short supply', difficulty: 2 },
        { id: 'Y4-HASS-HI03-q5', type: 'mcq', prompt: 'Many of the first colonists lived in…', options: ['Small huts and tents', 'Tall apartment blocks', 'Stone castles'], answer: 'Small huts and tents', difficulty: 2 },
        { id: 'Y4-HASS-HI03-q6', type: 'mcq', prompt: 'Life in the colony was different for different people — officials and convicts had…', options: ['Very different daily experiences', 'Exactly the same life', 'No rules at all'], answer: 'Very different daily experiences', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-HASS-HI04',
    title: 'Effects of contact on First Nations Australians',
    year: '4',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS4K04' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 12,
      body: [
        'When the First Fleet arrived in 1788, a time of contact began between British colonists and First Nations Australians. For First Nations people, this contact brought very big changes — the loss of land and Country, new diseases, and conflicts.',
        'Different people describe these events in different ways: some call the arrival "settlement" or "colonisation", while many First Nations Australians describe it as an invasion. Through all of it, First Nations communities showed great strength, and today they continue to live, care for and connect with their Country.',
      ],
      illustrations: [
        {
          brief: 'A gentle scene of change over time and the strength of First Nations communities',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Country & Place' }, { icon: 'arrow-right', label: 'Change over time' }, { icon: 'people', label: 'Community strength' }], caption: 'Contact changed lives, and First Nations communities kept their strength' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-HI04-q1', type: 'mcq', prompt: 'After 1788, First Nations Australians\' access to their land and Country…', options: ['Changed and was often lost', 'Stayed exactly the same', 'Grew larger'], answer: 'Changed and was often lost', difficulty: 1 },
        { id: 'Y4-HASS-HI04-q2', type: 'mcq', prompt: 'New diseases brought by the colonists made some First Nations communities…', options: ['Very sick', 'Stronger', 'Completely unchanged'], answer: 'Very sick', difficulty: 2 },
        { id: 'Y4-HASS-HI04-q3', type: 'mcq', prompt: 'Conflict between colonists and First Nations people led to…', options: ['Loss of land and lives', 'Everyone becoming friends overnight', 'No changes at all'], answer: 'Loss of land and lives', difficulty: 2 },
        { id: 'Y4-HASS-HI04-q4', type: 'mcq', prompt: 'Some people call the arrival of the First Fleet "settlement" or "colonisation", while many First Nations Australians describe it as…', options: ['Invasion', 'A peaceful party', 'Nothing important'], answer: 'Invasion', difficulty: 3 },
        { id: 'Y4-HASS-HI04-q5', type: 'short', prompt: 'In what year did the First Fleet arrive, beginning the time of contact between colonists and First Nations people?', answer: '1788', difficulty: 2 },
        { id: 'Y4-HASS-HI04-q6', type: 'mcq', prompt: 'Despite the hardships of contact, First Nations Australians today…', options: ['Continue to live, connect with and care for their Country', 'No longer live in Australia', 'Have lost all their languages and cultures'], answer: 'Continue to live, connect with and care for their Country', difficulty: 3 },
      ],
    },
  },
  // ---------- Geography (2 CDs) ----------
  {
    id: 'Y4-HASS-GE01',
    title: 'Environments, vegetation & water',
    year: '4',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS4K05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Environments are places where living things are connected — plants, animals, people, water and soil all depend on each other. Rainforests, deserts, savannas and rivers are all examples of different environments.',
        'In Australia, native vegetation and water sources keep people and animals alive, and it is the same on other continents like Africa. When we understand these environments, we understand how to look after them.',
      ],
      illustrations: [
        {
          brief: 'Rainfall comparison between Sydney (Australia) and Cairo (Africa)',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'mm per year', items: [{ label: 'Sydney (Australia)', value: 1200 }, { label: 'Cairo (Africa)', value: 25 }] },
        },
        {
          brief: 'Vegetation and water supporting life on two continents',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'tree', label: 'Native plants' }, { icon: 'droplet', label: 'Water' }, { icon: 'map', label: 'Two continents' }], caption: 'Vegetation and water support people and animals' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-GE01-q1', type: 'mcq', prompt: 'Which of these is a natural environment?', options: ['A rainforest', 'A shopping centre', 'A school building'], answer: 'A rainforest', difficulty: 1 },
        { id: 'Y4-HASS-GE01-q2', type: 'mcq', prompt: 'All living things — people, plants and animals — need what to survive?', options: ['Water', 'Only toys', 'Only screens'], answer: 'Water', difficulty: 1 },
        { id: 'Y4-HASS-GE01-q3', type: 'mcq', prompt: 'Native vegetation helps by…', options: ['Giving animals food and shelter', 'Blocking all the rain', 'Making loud noises'], answer: 'Giving animals food and shelter', difficulty: 2 },
        { id: 'Y4-HASS-GE01-q4', type: 'mcq', prompt: 'Rivers and other water sources are important to people for…', options: ['Drinking and growing food', 'Nothing at all', 'Only swimming in winter'], answer: 'Drinking and growing food', difficulty: 2 },
        { id: 'Y4-HASS-GE01-q5', type: 'short', prompt: 'The lesson compares Australia\'s environments with which other continent?', answer: 'Africa', difficulty: 2 },
        { id: 'Y4-HASS-GE01-q6', type: 'mcq', prompt: 'Environments matter to people and animals because they…', options: ['Provide food, water and shelter', 'Are only nice to look at', 'Only matter in holiday photos'], answer: 'Provide food, water and shelter', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-HASS-GE02',
    title: 'Sustainable use of resources',
    year: '4',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS4K06' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 11,
      body: [
        'Some resources, like sunlight, wind and water, can be renewed by nature, while others, like coal and oil, are used much faster than they can ever be replaced.',
        'Using resources carefully so they last for the future is called sustainable use. First Nations Australians have shown custodial responsibility for Country for tens of thousands of years — caring for land and water so everything can keep growing — and we can all learn from that care.',
      ],
      illustrations: [
        {
          brief: 'Water use compared with the tap running vs turned off',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'L per week', items: [{ label: 'Tap left running', value: 160 }, { label: 'Tap turned off', value: 40 }] },
        },
        {
          brief: 'Sustainable habits: recycling and caring for the environment',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'recycle', label: 'Recycle' }, { icon: 'sprout', label: 'New growth' }, { icon: 'droplet', label: 'Save water' }], caption: 'Sustainable use keeps resources growing' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-GE02-q1', type: 'short', prompt: 'What do we call a resource, like sunlight or wind, that nature can replace?', answer: 'renewable', difficulty: 1 },
        { id: 'Y4-HASS-GE02-q2', type: 'mcq', prompt: 'Which of these is a non-renewable resource?', options: ['Coal', 'Sunlight', 'Wind'], answer: 'Coal', difficulty: 1 },
        { id: 'Y4-HASS-GE02-q3', type: 'mcq', prompt: 'Which of these is a renewable resource?', options: ['Sunlight', 'Coal', 'Natural gas'], answer: 'Sunlight', difficulty: 1 },
        { id: 'Y4-HASS-GE02-q4', type: 'mcq', prompt: '"Sustainable use" of a resource means…', options: ['Using it so it lasts for the future', 'Using it all up quickly', 'Never using it at all'], answer: 'Using it so it lasts for the future', difficulty: 2 },
        { id: 'Y4-HASS-GE02-q5', type: 'mcq', prompt: 'Caring for land and water so they keep growing is an example of…', options: ['Custodial responsibility', 'Wasting resources', 'A brand-new idea'], answer: 'Custodial responsibility', difficulty: 2 },
        { id: 'Y4-HASS-GE02-q6', type: 'mcq', prompt: 'Which is a way to use water sustainably?', options: ['Turning off the tap while brushing your teeth', 'Leaving the tap running all day', 'Pouring full water bottles onto the footpath'], answer: 'Turning off the tap while brushing your teeth', difficulty: 3 },
      ],
    },
  },
  // ---------- Civics & Citizenship (3 CDs) ----------
  {
    id: 'Y4-HASS-CI01',
    title: 'Rules vs laws',
    year: '4',
    subject: 'hass',
    strand: 'Civics and Citizenship',
    cd: [{ ac: 'AC9HS4K07' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Rules are made by groups for the people in that group — like a family rule or a classroom rule. Laws are made by the government and apply to everyone in the country.',
        'Police and courts make sure laws are followed, and laws help keep us safe and treat everyone fairly. The big difference: breaking a rule affects your group, but breaking a law affects the whole community.',
      ],
      illustrations: [
        {
          brief: 'Rules for groups vs laws for the whole country',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'stop-sign', label: 'Rules' }, { icon: 'lock', label: 'Laws' }, { icon: 'people', label: 'Everyone' }], caption: 'Rules guide groups; laws guide the whole country' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-CI01-q1', type: 'mcq', prompt: 'Rules and laws both…', options: ['Guide how people behave', 'Only apply to adults', 'Only exist at school'], answer: 'Guide how people behave', difficulty: 1 },
        { id: 'Y4-HASS-CI01-q2', type: 'short', prompt: 'Who makes the laws for a whole country?', answer: 'the government', difficulty: 1 },
        { id: 'Y4-HASS-CI01-q3', type: 'mcq', prompt: 'Rules in a game apply to…', options: ['The people playing the game', 'Everyone in the whole country', 'Only the referee'], answer: 'The people playing the game', difficulty: 1 },
        { id: 'Y4-HASS-CI01-q4', type: 'mcq', prompt: 'A key difference between rules and laws is that laws…', options: ['Apply to everyone and are enforced by police and courts', 'Only apply at school', 'Can be ignored freely'], answer: 'Apply to everyone and are enforced by police and courts', difficulty: 2 },
        { id: 'Y4-HASS-CI01-q5', type: 'mcq', prompt: 'Who has to follow a law like the road safety law?', options: ['Everyone in the country', 'Only drivers in one town', 'Only children'], answer: 'Everyone in the country', difficulty: 2 },
        { id: 'Y4-HASS-CI01-q6', type: 'mcq', prompt: 'Laws are important because they…', options: ['Keep people safe and help everyone live fairly', 'Only exist to punish people', 'Are only needed for games'], answer: 'Keep people safe and help everyone live fairly', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-HASS-CI02',
    title: 'Local government & community services',
    year: '4',
    subject: 'hass',
    strand: 'Civics and Citizenship',
    cd: [{ ac: 'AC9HS4K08' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Your local government — also called the council — is the level of government closest to you. It looks after local parks, libraries, footpaths, rubbish collection and local roads.',
        'Community members use these services every day, and we can contribute too, by caring for shared places and joining local groups. The council helps the local area run smoothly for everyone.',
      ],
      illustrations: [
        {
          brief: 'Local council services: parks, libraries and rubbish collection',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'tree', label: 'Parks' }, { icon: 'book', label: 'Libraries' }, { icon: 'recycle', label: 'Rubbish collection' }], caption: 'Your council: parks, libraries and rubbish collection' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-CI02-q1', type: 'short', prompt: 'What is another name for the local government in your area?', answer: 'council', difficulty: 1 },
        { id: 'Y4-HASS-CI02-q2', type: 'mcq', prompt: 'Which service is usually provided by local government?', options: ['Local parks and rubbish collection', 'Defending the country', 'Printing money'], answer: 'Local parks and rubbish collection', difficulty: 1 },
        { id: 'Y4-HASS-CI02-q3', type: 'mcq', prompt: 'The local council looks after…', options: ['Local roads, parks and libraries', 'Only things far away', 'National defence'], answer: 'Local roads, parks and libraries', difficulty: 2 },
        { id: 'Y4-HASS-CI02-q4', type: 'mcq', prompt: 'Community members can contribute to local services by…', options: ['Caring for shared spaces and joining in', 'Ignoring the park', 'Only using services at home'], answer: 'Caring for shared spaces and joining in', difficulty: 2 },
        { id: 'Y4-HASS-CI02-q5', type: 'mcq', prompt: 'One way to contribute to your community is to…', options: ['Help keep a local park tidy', 'Leave rubbish everywhere', 'Never use the library'], answer: 'Help keep a local park tidy', difficulty: 2 },
        { id: 'Y4-HASS-CI02-q6', type: 'mcq', prompt: 'Local government is different from federal government because it…', options: ['Makes decisions for a local area', 'Runs the whole country alone', 'Only works in other countries'], answer: 'Makes decisions for a local area', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-HASS-CI03',
    title: 'Diversity & identity',
    year: '4',
    subject: 'hass',
    strand: 'Civics and Citizenship',
    cd: [{ ac: 'AC9HS4K09' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Everyone belongs to lots of different groups — families, school groups, sport teams, cultural communities and religious groups. These groups are part of who you are and help shape your identity.',
        'Australia is diverse, which means people come from many different cultures and backgrounds. When we learn about and respect different groups, everyone feels welcome and included.',
      ],
      illustrations: [
        {
          brief: 'Many different groups — family, sport, culture — as one community',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Family' }, { icon: 'ball', label: 'Sport' }, { icon: 'flag', label: 'Culture' }], caption: 'Many groups, one shared community' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-HASS-CI03-q1', type: 'short', prompt: 'Your family, your school and your sport team are all examples of what you belong to?', answer: 'groups', difficulty: 1 },
        { id: 'Y4-HASS-CI03-q2', type: 'mcq', prompt: 'Diversity means…', options: ['People have different backgrounds and cultures', 'Everyone is exactly the same', 'Only one culture exists'], answer: 'People have different backgrounds and cultures', difficulty: 1 },
        { id: 'Y4-HASS-CI03-q3', type: 'mcq', prompt: 'Belonging to different groups helps shape your…', options: ['Identity', 'Shoe size', 'Age'], answer: 'Identity', difficulty: 2 },
        { id: 'Y4-HASS-CI03-q4', type: 'mcq', prompt: 'Which of these is a social group you could belong to?', options: ['A sports club or reading group', 'A type of fruit', 'A type of weather'], answer: 'A sports club or reading group', difficulty: 2 },
        { id: 'Y4-HASS-CI03-q5', type: 'mcq', prompt: 'People around Australia celebrate different festivals, which shows the country\'s…', options: ['Diversity', 'Uniformity', 'Boredom'], answer: 'Diversity', difficulty: 2 },
        { id: 'Y4-HASS-CI03-q6', type: 'mcq', prompt: 'Respecting people from different cultural, religious and social groups helps…', options: ['Everyone feel welcome and included', 'Only one group feel special', 'People leave the country'], answer: 'Everyone feel welcome and included', difficulty: 3 },
      ],
    },
  },
];
