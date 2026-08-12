import type { Topic } from '../../types/curriculum';

/**
 * Year 6 HASS, full knowledge-strand topic bank (History, Geography, Civics
 * & Citizenship, Economics & Business). Source of truth:
 * docs/content/year-6/hass.md (AC v9.0). Skills CDs (AC9HS6S01–S07) are
 * woven into these knowledge units per the source doc, not authored
 * separately.
 * `Y6-HASS-HI02` carries `sensitivity: true`, it touches First Nations
 * Australians' experiences and is written to established, general facts
 * only, pending a community-protocol review before release (see AGENTS.md
 * child-safety/accuracy constraints).
 */
export const YEAR6_HASS_TOPICS: Topic[] = [
  // ---------- History (3 CDs) ----------
  {
    id: 'Y6-HASS-HI01',
    title: 'Federation & the Constitution',
    year: '6',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS6K01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Before 1901, Australia was six separate British colonies, each with its own laws and even its own money. On 1 January 1901, they joined together as one nation, Federation, under a new Constitution.',
        'The Constitution set up Australia\'s system of government: a Parliament that makes laws, with power shared between the new national government and the states.',
      ],
      illustrations: [
        { brief: 'The six colonies agreeing to federate, and 1901 celebrations', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Six colonies' }, { icon: 'people', label: 'Agree to unite' }, { icon: 'flag', label: '1901 Federation' }], caption: 'Six colonies became one nation' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-HI01-q1', type: 'short', prompt: 'In what year did Australia federate?', answer: '1901', difficulty: 1 },
        { id: 'Y6-HASS-HI01-q2', type: 'mcq', prompt: 'Before Federation, Australia was made up of…', options: ['One colony', 'Six separate colonies', 'Ten territories'], answer: 'Six separate colonies', difficulty: 1 },
        { id: 'Y6-HASS-HI01-q3', type: 'mcq', prompt: "Australia's Constitution mainly set up…", options: ["The nation's system of government", 'A new flag design only', 'A sporting competition'], answer: "The nation's system of government", difficulty: 2 },
        { id: 'Y6-HASS-HI01-q4', type: 'mcq', prompt: 'Under the Constitution, power is shared between…', options: ['The national government and the states', 'Only one single leader', 'No government at all'], answer: 'The national government and the states', difficulty: 2 },
        { id: 'Y6-HASS-HI01-q5', type: 'mcq', prompt: 'Federation means the six colonies…', options: ['Joined together as one nation', 'Went to war with each other', 'Became separate countries'], answer: 'Joined together as one nation', difficulty: 1 },
        { id: 'Y6-HASS-HI01-q6', type: 'mcq', prompt: "Australia's Parliament, created by the Constitution, is responsible for…", options: ['Making laws', 'Selling groceries', 'Building roads only'], answer: 'Making laws', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-HASS-HI02',
    title: 'Citizenship & democracy through the 20th century',
    year: '6',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS6K02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 14,
      body: [
        "Who could vote and be counted as a citizen changed a great deal across the 20th century. Women won the right to vote in federal elections in 1902, one of the earliest countries in the world to grant this, though at the time this right was not extended equally to all women.",
        'First Nations Australians faced a long struggle for equal citizenship rights: they were not included in the official national population count until a 1967 referendum changed the Constitution, and voting rights for First Nations Australians in federal elections were only fully secured in the 1960s. Migrants arriving throughout the century also reshaped who called Australia home.',
      ],
      illustrations: [
        {
          brief: 'A citizenship timeline: 1902 women vote federally → 1962–65 First Nations voting rights secured → 1967 referendum',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: '1901 Federation' },
              { text: '1902 Women win the federal vote' },
              { text: '1962–65 First Nations voting rights secured' },
              { text: '1967 Referendum: First Nations Australians counted' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-HI02-q1', type: 'short', prompt: 'In what year did a referendum change the Constitution to count First Nations Australians in the population?', answer: '1967', difficulty: 2 },
        { id: 'Y6-HASS-HI02-q2', type: 'mcq', prompt: 'Citizenship and voting rights in Australia during the 20th century…', options: ['Never changed', 'Changed significantly for different groups over time', 'Only changed for one group'], answer: 'Changed significantly for different groups over time', difficulty: 1 },
        { id: 'Y6-HASS-HI02-q3', type: 'short', prompt: 'In what year did women win the right to vote in federal elections?', answer: '1902', difficulty: 2 },
        { id: 'Y6-HASS-HI02-q4', type: 'mcq', prompt: 'By the 1960s, federal voting rights for First Nations Australians were…', options: ['Fully secured', 'Never achieved', 'The same as in 1901'], answer: 'Fully secured', difficulty: 2 },
        { id: 'Y6-HASS-HI02-q5', type: 'mcq', prompt: 'The 1967 referendum is significant because it…', options: ['Changed the Constitution regarding First Nations Australians', 'Created the state of Victoria', 'Ended Federation'], answer: 'Changed the Constitution regarding First Nations Australians', difficulty: 2 },
        { id: 'Y6-HASS-HI02-q6', type: 'mcq', prompt: 'Migrants arriving throughout the 20th century mostly…', options: ['Reshaped who called Australia home', 'Had no effect on Australian society', 'Were not allowed to become citizens ever'], answer: 'Reshaped who called Australia home', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-HASS-HI03',
    title: 'Migration to Australia since Federation',
    year: '6',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS6K03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Since Federation, millions of people have migrated to Australia seeking safety, jobs, family reunions or a fresh start, including large waves of migration from Europe after World War II and, more recently, from across the Asia region.',
        'Each wave of migration has changed Australian society, its food, languages, festivals and neighbourhoods all carry the stories of the people who moved here.',
      ],
      illustrations: [
        { brief: 'A migration journey map with a "stories wall" of families', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'suitcase', label: 'Pack up' }, { icon: 'ship', label: 'Journey' }, { icon: 'house', label: 'New home' }], caption: 'Migration journeys that shaped modern Australia' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-HI03-q1', type: 'mcq', prompt: 'Migration to Australia since Federation has mainly been driven by people seeking…', options: ['Safety, jobs and a fresh start', 'Nothing in particular', 'Only tourism'], answer: 'Safety, jobs and a fresh start', difficulty: 1 },
        { id: 'Y6-HASS-HI03-q2', type: 'mcq', prompt: 'A large wave of migration to Australia occurred after…', options: ['World War II', 'The invention of the internet', 'The first Olympic Games'], answer: 'World War II', difficulty: 2 },
        { id: 'Y6-HASS-HI03-q3', type: 'mcq', prompt: 'More recent migration to Australia has increasingly come from…', options: ['The Asia region', 'Nowhere, migration has stopped', 'Only one country'], answer: 'The Asia region', difficulty: 2 },
        { id: 'Y6-HASS-HI03-q4', type: 'mcq', prompt: 'Migration has changed Australian society by influencing…', options: ['Food, languages and festivals', 'Nothing about daily life', 'Only sport'], answer: 'Food, languages and festivals', difficulty: 1 },
        { id: 'Y6-HASS-HI03-q5', type: 'mcq', prompt: 'A family migration case study is useful for understanding…', options: ['Real motivations and effects behind migration', 'Only statistics with no stories', 'Nothing historical'], answer: 'Real motivations and effects behind migration', difficulty: 2 },
        { id: 'Y6-HASS-HI03-q6', type: 'mcq', prompt: 'Migration stories are typically shaped by…', options: ["People's personal reasons for moving", 'Random chance only', 'A single shared reason for everyone'], answer: "People's personal reasons for moving", difficulty: 2 },
      ],
    },
  },
  // ---------- Geography (2 CDs) ----------
  {
    id: 'Y6-HASS-GE01',
    title: 'The Asia region',
    year: '6',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS6K04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The Asia region is enormous and incredibly diverse, from the snowy Himalayas to tropical islands to megacities of tens of millions of people, and it sits just to the north of Australia.',
        "Understanding a region's location means being able to describe it relative to somewhere else, Indonesia, for example, is Australia's nearest neighbour to the north.",
      ],
      illustrations: [
        { brief: 'A big Asia map with Australia beside it', ready: true, diagram: { kind: 'quadrant-grid', range: 5, points: [{ x: 0, y: -2, label: 'Australia' }, { x: 1, y: 3, label: 'Asia region' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-GE01-q1', type: 'mcq', prompt: "Australia's nearest neighbour to the north is…", options: ['Indonesia', 'Canada', 'Brazil'], answer: 'Indonesia', difficulty: 1 },
        { id: 'Y6-HASS-GE01-q2', type: 'mcq', prompt: 'The Asia region includes landscapes ranging from…', options: ['Snowy mountains to tropical islands', 'Only deserts', 'Only cities'], answer: 'Snowy mountains to tropical islands', difficulty: 1 },
        { id: 'Y6-HASS-GE01-q3', type: 'mcq', prompt: 'Describing a place\'s "relative location" means describing it…', options: ['Compared to somewhere else', 'By its exact colour on a map', 'By its population only'], answer: 'Compared to somewhere else', difficulty: 2 },
        { id: 'Y6-HASS-GE01-q4', type: 'mcq', prompt: 'A megacity in the Asia region would typically have…', options: ['Tens of millions of people', 'Fewer than 100 people', 'No people at all'], answer: 'Tens of millions of people', difficulty: 2 },
        { id: 'Y6-HASS-GE01-q5', type: 'mcq', prompt: 'A map scale is used to help readers understand…', options: ['Real-world distances', 'The map\'s colour scheme', 'The artist\'s name'], answer: 'Real-world distances', difficulty: 2 },
        { id: 'Y6-HASS-GE01-q6', type: 'mcq', prompt: 'The Asia region is best described as…', options: ['Geographically diverse', 'Completely uniform everywhere', 'Entirely uninhabited'], answer: 'Geographically diverse', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-HASS-GE02',
    title: "Australia's interconnections with other countries",
    year: '6',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS6K05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Australia is connected to the rest of the world in countless ways, the food we export, the holidays we take, the products we import, and the families that span multiple countries.',
        'These connections change people and places on both ends: a mining export can create jobs here, while affecting the environment or economy somewhere else.',
      ],
      illustrations: [
        { brief: 'A "connections web": exports, holidays, food, sport', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'World' }, { icon: 'plane', label: 'Travel' }, { icon: 'gift-box', label: 'Exports' }, { icon: 'bowl', label: 'Food' }, { icon: 'ball', label: 'Sport' }], caption: "Australia's connections with the world" } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-GE02-q1', type: 'mcq', prompt: 'An example of an interconnection between Australia and another country is…', options: ['Exporting food', 'A closed border with no trade at all', 'Nothing, Australia is isolated'], answer: 'Exporting food', difficulty: 1 },
        { id: 'Y6-HASS-GE02-q2', type: 'mcq', prompt: 'A mining export can affect…', options: ['Both jobs in Australia and the environment elsewhere', 'Nothing outside the mine', 'Only the weather'], answer: 'Both jobs in Australia and the environment elsewhere', difficulty: 2 },
        { id: 'Y6-HASS-GE02-q3', type: 'mcq', prompt: 'Families with relatives overseas are an example of…', options: ['A family/social interconnection', 'A type of export', 'A government policy'], answer: 'A family/social interconnection', difficulty: 2 },
        { id: 'Y6-HASS-GE02-q4', type: 'mcq', prompt: 'Tourism is a type of interconnection because it involves…', options: ['People, money and culture moving between countries', 'Nothing crossing borders', 'Only maps'], answer: 'People, money and culture moving between countries', difficulty: 2 },
        { id: 'Y6-HASS-GE02-q5', type: 'mcq', prompt: 'Interconnections between countries can change…', options: ['Both people and places', 'Nothing at all', 'Only flags'], answer: 'Both people and places', difficulty: 2 },
        { id: 'Y6-HASS-GE02-q6', type: 'mcq', prompt: 'Importing products from overseas is an example of…', options: ['An economic interconnection', 'A type of holiday', 'A sport'], answer: 'An economic interconnection', difficulty: 1 },
      ],
    },
  },
  // ---------- Civics & Citizenship (2 CDs) ----------
  {
    id: 'Y6-HASS-CV01',
    title: 'Democratic institutions & the Westminster system',
    year: '6',
    subject: 'hass',
    strand: 'Civics & Citizenship',
    cd: [{ ac: 'AC9HS6K06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Australia's system of government has three parts: Parliament (makes laws), the Executive (puts laws into action) and the Judiciary (interprets laws and settles disputes), a structure borrowed from Britain's Westminster system.",
        'Underneath these institutions sit shared democratic values, like fairness, equality and freedom of speech, that guide how decisions are made.',
      ],
      illustrations: [
        {
          brief: 'Parliament House cutaway: Parliament / Executive / Judiciary',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Parliament, makes laws' }, { text: 'Executive, carries out laws' }, { text: 'Judiciary, interprets laws' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-CV01-q1', type: 'mcq', prompt: 'Which arm of government makes laws?', options: ['Parliament', 'Judiciary', 'Executive'], answer: 'Parliament', difficulty: 1 },
        { id: 'Y6-HASS-CV01-q2', type: 'mcq', prompt: 'Which arm of government interprets laws and settles disputes?', options: ['Judiciary', 'Parliament', 'Executive'], answer: 'Judiciary', difficulty: 1 },
        { id: 'Y6-HASS-CV01-q3', type: 'mcq', prompt: 'Which arm of government carries out and administers laws?', options: ['Executive', 'Judiciary', 'Parliament'], answer: 'Executive', difficulty: 2 },
        { id: 'Y6-HASS-CV01-q4', type: 'mcq', prompt: "Australia's system of government is based on…", options: ['The Westminster system', 'A monarchy with no parliament', 'No formal system'], answer: 'The Westminster system', difficulty: 2 },
        { id: 'Y6-HASS-CV01-q5', type: 'mcq', prompt: 'Fairness, equality and freedom of speech are examples of…', options: ['Democratic values', 'Sporting rules', 'Types of currency'], answer: 'Democratic values', difficulty: 2 },
        { id: 'Y6-HASS-CV01-q6', type: 'mcq', prompt: 'Splitting government into three separate arms mainly helps to…', options: ['Share power and provide checks and balances', 'Make government slower for no reason', 'Give all power to one person'], answer: 'Share power and provide checks and balances', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y6-HASS-CV02',
    title: 'Three levels of government',
    year: '6',
    subject: 'hass',
    strand: 'Civics & Citizenship',
    cd: [{ ac: 'AC9HS6K07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Australia has three levels of government, like a layered cake: Federal (defence, immigration), State/Territory (schools, hospitals, police), and Local (parks, rubbish collection, libraries).',
        'Each level is responsible for different services, knowing who runs what helps you understand who to ask when something needs fixing.',
      ],
      illustrations: [
        { brief: 'A three-layer cake diagram labelled with each level\'s services', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Federal, defence, immigration' }, { text: 'State/Territory, schools, hospitals' }, { text: 'Local, parks, rubbish collection' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-CV02-q1', type: 'mcq', prompt: 'Which level of government usually looks after local parks and rubbish collection?', options: ['Federal', 'State', 'Local'], answer: 'Local', difficulty: 1 },
        { id: 'Y6-HASS-CV02-q2', type: 'mcq', prompt: 'Which level of government usually runs public schools and hospitals?', options: ['State/Territory', 'Federal', 'Local'], answer: 'State/Territory', difficulty: 1 },
        { id: 'Y6-HASS-CV02-q3', type: 'mcq', prompt: 'Which level of government is responsible for national defence?', options: ['Federal', 'Local', 'State'], answer: 'Federal', difficulty: 2 },
        { id: 'Y6-HASS-CV02-q4', type: 'mcq', prompt: 'Australia has how many levels of government?', options: ['Three', 'One', 'Five'], answer: 'Three', difficulty: 1 },
        { id: 'Y6-HASS-CV02-q5', type: 'mcq', prompt: 'Immigration policy is mainly handled by the…', options: ['Federal government', 'Local council', 'School'], answer: 'Federal government', difficulty: 2 },
        { id: 'Y6-HASS-CV02-q6', type: 'mcq', prompt: 'Knowing which level of government is responsible for a service helps citizens…', options: ['Know who to contact about an issue', 'Nothing useful', 'Avoid voting'], answer: 'Know who to contact about an issue', difficulty: 2 },
      ],
    },
  },
  // ---------- Economics & Business (1 CD) ----------
  {
    id: 'Y6-HASS-EC01',
    title: 'Consumer & financial choices',
    year: '6',
    subject: 'hass',
    strand: 'Economics & Business',
    cd: [{ ac: 'AC9HS6K08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Lots of things influence what we choose to buy, advertising, price, what our friends have, and how good the quality is. Noticing these influences helps you make more informed choices.',
        'A simple save/spend/give plan for pocket money is one strategy for making thoughtful financial choices instead of spending everything right away.',
      ],
      illustrations: [
        { brief: 'A save/spend/give decision wheel', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'piggy-bank', label: 'Save' }, { icon: 'shopping-bag', label: 'Spend' }, { icon: 'gift-box', label: 'Give' }], caption: 'A simple strategy for financial choices' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-HASS-EC01-q1', type: 'mcq', prompt: 'Which of these is an influence on consumer choices?', options: ['Advertising', 'The weather last year', 'Nothing influences choices'], answer: 'Advertising', difficulty: 1 },
        { id: 'Y6-HASS-EC01-q2', type: 'mcq', prompt: 'In a save/spend/give plan, "save" means…', options: ['Setting money aside for later', 'Spending it all immediately', 'Giving all of it away'], answer: 'Setting money aside for later', difficulty: 1 },
        { id: 'Y6-HASS-EC01-q3', type: 'mcq', prompt: 'Comparing price and quality before buying something is an example of…', options: ['An informed consumer choice', 'An impulsive choice', 'Ignoring the decision'], answer: 'An informed consumer choice', difficulty: 2 },
        { id: 'Y6-HASS-EC01-q4', type: 'mcq', prompt: 'Peer influence on spending means…', options: ['What friends have can affect your choices', 'Friends never affect choices', 'Only ads matter'], answer: 'What friends have can affect your choices', difficulty: 2 },
        { id: 'Y6-HASS-EC01-q5', type: 'mcq', prompt: 'A simple budget sheet helps you…', options: ['Plan how to use your money', 'Spend without thinking', 'Avoid saving entirely'], answer: 'Plan how to use your money', difficulty: 2 },
        { id: 'Y6-HASS-EC01-q6', type: 'mcq', prompt: 'Noticing influences on your choices (ads, price, friends) mainly helps you…', options: ['Make more informed decisions', 'Spend more without thinking', 'Ignore your budget'], answer: 'Make more informed decisions', difficulty: 2 },
      ],
    },
  },
];
