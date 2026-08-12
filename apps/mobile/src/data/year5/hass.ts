import type { Topic } from '../../types/curriculum';

/**
 * Year 5 HASS, full knowledge-strand topic bank (History, Geography, Civics
 * & Citizenship, Economics & Business). Source of truth:
 * docs/content/year-1-5/hass.md (AC v9.0). Skills CDs (AC9HS5S01–S07) are
 * woven into these knowledge units per the source doc, not authored
 * separately.
 * `Y5-HASS-HI02` carries `sensitivity: true`, it touches First Nations
 * Australians' experiences of colonisation and is written to established,
 * general facts only, pending a community-protocol review before release
 * (see AGENTS.md child-safety/accuracy constraints).
 */
export const YEAR5_HASS_TOPICS: Topic[] = [
  // ---------- History (3 CDs) ----------
  {
    id: 'Y5-HASS-HI01',
    title: 'Why new British colonies began after 1800',
    year: '5',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS5K01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'After 1800, Britain kept starting new colonies in Australia, Van Diemen\'s Land, the Swan River colony, South Australia and more, and there were three big reasons: money, power and people.',
        'Colonies could grow wool and crops to trade (economic), they stretched Britain\'s empire and claimed important ports (political), and they gave convicts, free settlers and families a fresh start (social).',
      ],
      illustrations: [
        {
          brief: 'A colony-founding timeline: 1803 Van Diemen\'s Land → 1829 Swan River → 1836 South Australia → 1859 Queensland',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: '1803 Van Diemen\'s Land' },
              { text: '1829 Swan River colony (WA)' },
              { text: '1836 South Australia (planned, free settlers)' },
              { text: '1859 Queensland becomes a colony' },
            ],
          },
        },
        {
          brief: 'The three causes, money, power and people, as picture cards',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'coin', label: 'Economic: wool & crops to trade' },
              { icon: 'flag', label: 'Political: empire & ports' },
              { icon: 'house', label: 'Social: a fresh start for people' },
            ],
            caption: 'Money, power and people shaped new colonies',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-HI01-q1', type: 'mcq', prompt: 'Which of these is an ECONOMIC reason Britain started new colonies?', options: ['Trading wool and farm goods for money', 'Choosing a new flag', 'Organising a picnic'], answer: 'Trading wool and farm goods for money', difficulty: 1 },
        { id: 'Y5-HASS-HI01-q2', type: 'mcq', prompt: 'Which colony was started with careful planning for FREE settlers in 1836?', options: ['South Australia', 'Van Diemen\'s Land', 'Swan River'], answer: 'South Australia', difficulty: 3 },
        { id: 'Y5-HASS-HI01-q3', type: 'mcq', prompt: '"Extending Britain\'s empire and claiming important ports" is a ______ reason.', options: ['Political', 'Social', 'Musical'], answer: 'Political', difficulty: 2 },
        { id: 'Y5-HASS-HI01-q4', type: 'mcq', prompt: 'A SOCIAL reason for starting new colonies was to…', options: ['Give people a fresh start and new opportunities', 'Build bigger ships', 'Lower the price of tea'], answer: 'Give people a fresh start and new opportunities', difficulty: 2 },
        { id: 'Y5-HASS-HI01-q5', type: 'short', prompt: 'Name one British colony founded in Australia after 1800.', answer: 'Van Diemen\'s Land (accept Swan River, South Australia, Victoria or Queensland)', difficulty: 1 },
        { id: 'Y5-HASS-HI01-q6', type: 'mcq', prompt: 'New colonies helped Britain mainly by…', options: ['Adding trade, empire and fresh opportunities', 'Cancelling all travel', 'Removing every port'], answer: 'Adding trade, empire and fresh opportunities', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-HASS-HI02',
    title: 'Impact of the colonies on people and Country',
    year: '5',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS5K02' }],
    sensitivity: true,
    learn: {
      learnTimeMin: 10,
      body: [
        'First Nations Australians had lived on and cared for this land for tens of thousands of years. When the colonies grew, their lives changed in deep and lasting ways, land was taken over and Country was changed, and those impacts are still felt today.',
        'Colonists and convicts also faced a hard, unfamiliar life far from home, and the natural environment changed too: forests were cleared for farms, and animals like rabbits and foxes were brought from overseas.',
      ],
      illustrations: [
        {
          brief: 'A respectful before-and-after flow of colonial change on people and environment',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'For tens of thousands of years, First Nations peoples cared for Country' },
              { text: 'Colonies grew and land was taken over' },
              { text: 'Forests cleared, new animals introduced' },
              { text: 'Impacts were severe and lasting' },
            ],
          },
        },
        {
          brief: 'People, Country, land and water in a quiet scene of what the colonies changed',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'people', label: 'First Nations Australians' },
              { icon: 'tree', label: 'Country' },
              { icon: 'map', label: 'Land' },
              { icon: 'droplet', label: 'Waterways' },
            ],
            caption: 'Colonial change affected people and the environment',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-HI02-q1', type: 'mcq', prompt: 'Before the British colonies, First Nations Australians…', options: ['Had lived on and cared for the land for tens of thousands of years', 'Had just arrived', 'Never used the land'], answer: 'Had lived on and cared for the land for tens of thousands of years', difficulty: 1 },
        { id: 'Y5-HASS-HI02-q2', type: 'mcq', prompt: 'The growth of the colonies had what effect on First Nations Australians?', options: ['Deep and lasting changes to their lives and Country', 'No effect at all', 'Made life easier for everyone'], answer: 'Deep and lasting changes to their lives and Country', difficulty: 2 },
        { id: 'Y5-HASS-HI02-q3', type: 'mcq', prompt: 'One way the natural environment changed was…', options: ['Forests were cleared for farms', 'Nothing changed at all', 'New forests grew overnight'], answer: 'Forests were cleared for farms', difficulty: 1 },
        { id: 'Y5-HASS-HI02-q4', type: 'short', prompt: 'Which small animal was brought from overseas to Australia and later became a pest?', answer: 'rabbit (accept fox)', difficulty: 2 },
        { id: 'Y5-HASS-HI02-q5', type: 'mcq', prompt: 'Life for convicts in the colonies was…', options: ['Often very hard, with heavy work and strict rules', 'Always easy and comfortable', 'The same as back home'], answer: 'Often very hard, with heavy work and strict rules', difficulty: 2 },
        { id: 'Y5-HASS-HI02-q6', type: 'mcq', prompt: 'Today, First Nations Australians…', options: ['Continue to share their cultures and work for respect and healing', 'Have no connection to their history', 'Prefer to forget the past completely'], answer: 'Continue to share their cultures and work for respect and healing', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-HASS-HI03',
    title: 'People who helped shape the colonies',
    year: '5',
    subject: 'hass',
    strand: 'History',
    cd: [{ ac: 'AC9HS5K03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'The colonies were built by all kinds of people. William Barak, a Wurundjeri leader, worked for his people\'s rights and kept culture strong, while Caroline Chisholm helped newly arrived migrant families settle safely.',
        'Whole groups mattered too, free settlers, convicts, gold miners and migrants from many lands each changed their colony by bringing skills, ideas and hard work.',
      ],
      illustrations: [
        {
          brief: 'Significant individuals and groups as a portrait gallery',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'book', label: 'William Barak, Wurundjeri leader' },
              { icon: 'quill', label: 'Caroline Chisholm, helped settlers' },
              { icon: 'ship', label: 'Migrants arriving' },
              { icon: 'people', label: 'Groups built the colony' },
            ],
            caption: 'Individuals and groups shaped the colonies',
          },
        },
        {
          brief: 'How to judge a person\'s significance: contribution and impact',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Who is the person or group?' },
              { text: 'What did they do?' },
              { text: 'How did it change the colony?' },
              { text: 'Why does it matter today?' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-HI03-q1', type: 'mcq', prompt: 'Which groups helped build the Australian colonies after 1800?', options: ['Free settlers, convicts and migrants', 'Only one single family', 'Nobody at all'], answer: 'Free settlers, convicts and migrants', difficulty: 1 },
        { id: 'Y5-HASS-HI03-q2', type: 'mcq', prompt: 'William Barak was…', options: ['A Wurundjeri leader who worked for his people\'s rights', 'A type of sailing ship', 'A river in Tasmania'], answer: 'A Wurundjeri leader who worked for his people\'s rights', difficulty: 2 },
        { id: 'Y5-HASS-HI03-q3', type: 'mcq', prompt: 'Caroline Chisholm is remembered for…', options: ['Helping newly arrived migrants and families settle', 'Discovering gold', 'Designing the national flag'], answer: 'Helping newly arrived migrants and families settle', difficulty: 2 },
        { id: 'Y5-HASS-HI03-q4', type: 'short', prompt: 'What do we call people who move to a new country to live?', answer: 'migrants', difficulty: 1 },
        { id: 'Y5-HASS-HI03-q5', type: 'mcq', prompt: 'The gold miners who rushed to the goldfields changed the colonies by…', options: ['Bringing thousands of newcomers with new skills and ideas', 'Stopping all travel', 'Building roads to nowhere'], answer: 'Bringing thousands of newcomers with new skills and ideas', difficulty: 2 },
        { id: 'Y5-HASS-HI03-q6', type: 'mcq', prompt: 'To judge why a person or group was significant, the best question is…', options: ['What did they do, and how did it change the colony?', 'How tall were they?', 'What did they eat for lunch?'], answer: 'What did they do, and how did it change the colony?', difficulty: 3 },
      ],
    },
  },
  // ---------- Geography (2 CDs) ----------
  {
    id: 'Y5-HASS-GE01',
    title: 'How people shape places',
    year: '5',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS5K04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Places are not just landscapes, people shape them. First Nations Australians have managed Country for tens of thousands of years with deep knowledge of seasons, plants, animals and fire.',
        'Settlers cleared land and built towns and farms, and people from other countries have influenced places through trade, ideas and tourism, so every street and park carries the mark of the people who made it.',
      ],
      illustrations: [
        {
          brief: 'The mark people leave on a place, Country, communities, towns',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'tree', label: 'Country managed with care' },
              { icon: 'people', label: 'Communities' },
              { icon: 'house', label: 'Towns built' },
              { icon: 'map', label: 'The place' },
            ],
            caption: 'People leave their mark on places',
          },
        },
        {
          brief: 'How a colony-town population grew as more people arrived',
          ready: true,
          diagram: {
            kind: 'bar-compare',
            unit: 'people',
            items: [
              { label: '1850', value: 500 },
              { label: '1880', value: 5000 },
              { label: '1900', value: 20000 },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-GE01-q1', type: 'mcq', prompt: 'First Nations Australians have influenced Australian places by…', options: ['Managing Country with deep knowledge of seasons and fire', 'Building skyscrapers', 'Growing only one type of crop'], answer: 'Managing Country with deep knowledge of seasons and fire', difficulty: 1 },
        { id: 'Y5-HASS-GE01-q2', type: 'mcq', prompt: 'When settlers cleared land and built towns, they…', options: ['Changed the characteristics of the place', 'Left it exactly the same', 'Removed every sign of people'], answer: 'Changed the characteristics of the place', difficulty: 1 },
        { id: 'Y5-HASS-GE01-q3', type: 'mcq', prompt: 'People from other countries can influence an Australian place through…', options: ['Trade, ideas and tourism', 'Never visiting at all', 'Only through sport'], answer: 'Trade, ideas and tourism', difficulty: 2 },
        { id: 'Y5-HASS-GE01-q4', type: 'mcq', prompt: 'A town\'s population growing very quickly usually shows that…', options: ['More people moved there and changed the place', 'Nothing changed at all', 'Everyone left forever'], answer: 'More people moved there and changed the place', difficulty: 2 },
        { id: 'Y5-HASS-GE01-q5', type: 'short', prompt: 'When a community cleans up a park and plants trees, they are ______ a place.', answer: 'caring for (accept looking after)', difficulty: 2 },
        { id: 'Y5-HASS-GE01-q6', type: 'mcq', prompt: 'To compare how a place changed over time, a good skill is…', options: ['Looking at old and new maps and records', 'Guessing without any evidence', 'Ignoring the past'], answer: 'Looking at old and new maps and records', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-HASS-GE02',
    title: 'Managing Australian environments & severe weather',
    year: '5',
    subject: 'hass',
    strand: 'Geography',
    cd: [{ ac: 'AC9HS5K05' }],
    learn: {
      learnTimeMin: 11,
      body: [
        'Australia is beautiful but tough, bushfires, floods, droughts and cyclones are part of living here. That is why we plan: fire danger ratings and fuel-reduction burns help us get ready for bushfire season.',
        'During drought we manage water with restrictions and dams, against floods we build levees and raise homes, and before cyclones we follow warnings and strong building codes.',
      ],
      illustrations: [
        {
          brief: 'Average yearly rainfall across three very different Australian places',
          ready: true,
          diagram: {
            kind: 'bar-compare',
            unit: 'mm per year',
            items: [
              { label: 'Darwin', value: 1700 },
              { label: 'Sydney', value: 1200 },
              { label: 'Alice Springs', value: 280 },
            ],
          },
        },
        {
          brief: 'Getting bushfire-ready, step by step',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Check the fire danger rating' },
              { text: 'No fires on high-danger days' },
              { text: 'Prepare your home and a plan' },
              { text: 'Leave early if the rating is extreme' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-GE02-q1', type: 'mcq', prompt: 'Which of these is NOT a severe weather event we manage in Australia?', options: ['Blizzards in the outback', 'Bushfires', 'Cyclones'], answer: 'Blizzards in the outback', difficulty: 1 },
        { id: 'Y5-HASS-GE02-q2', type: 'mcq', prompt: 'A fuel-reduction burn is done to…', options: ['Reduce bushfire fuel before it becomes a big fire', 'Make the forest bigger', 'Cool the ocean'], answer: 'Reduce bushfire fuel before it becomes a big fire', difficulty: 2 },
        { id: 'Y5-HASS-GE02-q3', type: 'mcq', prompt: 'During a drought, water restrictions help us…', options: ['Use less water', 'Waste more water', 'Fill the ocean'], answer: 'Use less water', difficulty: 1 },
        { id: 'Y5-HASS-GE02-q4', type: 'mcq', prompt: 'Levees and raised homes are built mainly to protect against…', options: ['Floods', 'Bushfires', 'Earthquakes'], answer: 'Floods', difficulty: 1 },
        { id: 'Y5-HASS-GE02-q5', type: 'short', prompt: 'Name one way we prepare for a cyclone before it arrives.', answer: 'securing loose items (accept having an emergency kit, heeding warnings, or strong building codes)', difficulty: 2 },
        { id: 'Y5-HASS-GE02-q6', type: 'mcq', prompt: 'Why do Australians need to prepare for severe weather?', options: ['Because events like bushfires, floods and cyclones are part of living here', 'Because the weather is always gentle', 'Because there is never any danger'], answer: 'Because events like bushfires, floods and cyclones are part of living here', difficulty: 2 },
      ],
    },
  },
  // ---------- Civics & Citizenship (2 CDs) ----------
  {
    id: 'Y5-HASS-CI01',
    title: 'Australia\'s democracy: voting and representatives',
    year: '5',
    subject: 'hass',
    strand: 'Civics & Citizenship',
    cd: [{ ac: 'AC9HS5K06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'In a democracy, power belongs to the people. Australian citizens vote in elections to choose their representatives, and the people they choose make decisions and laws on behalf of everyone.',
        'Our democracy is built on shared values like freedom, fairness and respect for the rule of law, everyone is treated fairly, and the same rules apply to all.',
      ],
      illustrations: [
        {
          brief: 'The election journey from voting to law-making',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'People vote in an election' },
              { text: 'Votes are counted' },
              { text: 'Representatives are chosen' },
              { text: 'They make laws and decisions for everyone' },
            ],
          },
        },
        {
          brief: 'Voting, citizens, nation and rule of law',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'check-box', label: 'Voting' },
              { icon: 'people', label: 'Citizens' },
              { icon: 'flag', label: 'Australia' },
              { icon: 'lock', label: 'Rule of law' },
            ],
            caption: 'Voting, representatives and the rule of law',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-CI01-q1', type: 'mcq', prompt: 'In a democracy, the power to make decisions belongs to…', options: ['The people, through voting', 'One ruler with all the power', 'Nobody at all'], answer: 'The people, through voting', difficulty: 1 },
        { id: 'Y5-HASS-CI01-q2', type: 'mcq', prompt: 'An election is how we…', options: ['Choose our representatives', 'Pick the weather', 'Buy groceries'], answer: 'Choose our representatives', difficulty: 1 },
        { id: 'Y5-HASS-CI01-q3', type: 'mcq', prompt: 'Elected representatives make laws and decisions…', options: ['On behalf of the people', 'Only for themselves', 'Without asking anyone'], answer: 'On behalf of the people', difficulty: 2 },
        { id: 'Y5-HASS-CI01-q4', type: 'mcq', prompt: 'Freedom, fairness and respect for the rule of law are examples of…', options: ['Democratic values', 'Types of weather', 'Sports rules'], answer: 'Democratic values', difficulty: 2 },
        { id: 'Y5-HASS-CI01-q5', type: 'short', prompt: 'What is the word for a person chosen by voters to represent them?', answer: 'representative (accept member of parliament)', difficulty: 2 },
        { id: 'Y5-HASS-CI01-q6', type: 'mcq', prompt: 'When voters number candidates in order of preference, this is called…', options: ['Preferential voting', 'Skipping the election', 'Choosing by age'], answer: 'Preferential voting', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-HASS-CI02',
    title: 'Working together for civic goals',
    year: '5',
    subject: 'hass',
    strand: 'Civics & Citizenship',
    cd: [{ ac: 'AC9HS5K07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When people share a belief or a value, they can do amazing things together. A civic goal is a goal for the good of the community, like a cleaner park, a fundraising day, or a safer school crossing.',
        'Citizens work together by planning, volunteering and joining groups, and sometimes by signing a petition, and every small action adds up.',
      ],
      illustrations: [
        {
          brief: 'The journey of a civic goal from idea to celebration',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Choose a civic goal' },
              { text: 'Plan together' },
              { text: 'Take action: volunteer, fundraise' },
              { text: 'Celebrate and review' },
            ],
          },
        },
        {
          brief: 'Shared values, shared effort, achieved goal',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'people', label: 'Working together' },
              { icon: 'go-circle', label: 'Take action' },
              { icon: 'check-box', label: 'Goal achieved' },
              { icon: 'trophy', label: 'Celebrate' },
            ],
            caption: 'Shared goals, shared effort',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-CI02-q1', type: 'mcq', prompt: 'A civic goal is a goal that…', options: ['Helps the community', 'Only helps one person', 'Breaks a sports record'], answer: 'Helps the community', difficulty: 1 },
        { id: 'Y5-HASS-CI02-q2', type: 'mcq', prompt: 'A school fundraising day for a charity is an example of…', options: ['Citizens working together for a civic goal', 'A private secret', 'A weather event'], answer: 'Citizens working together for a civic goal', difficulty: 2 },
        { id: 'Y5-HASS-CI02-q3', type: 'mcq', prompt: 'A petition is a way for citizens to…', options: ['Ask many people to show support for a cause', 'Throw a party', 'Choose a haircut'], answer: 'Ask many people to show support for a cause', difficulty: 2 },
        { id: 'Y5-HASS-CI02-q4', type: 'mcq', prompt: 'Volunteering at a community clean-up shows…', options: ['Shared values put into action', 'That no one cares', 'That parks clean themselves'], answer: 'Shared values put into action', difficulty: 2 },
        { id: 'Y5-HASS-CI02-q5', type: 'short', prompt: 'Name one way citizens can work together for a civic goal.', answer: 'volunteering (accept fundraising, signing a petition, or joining a club)', difficulty: 1 },
        { id: 'Y5-HASS-CI02-q6', type: 'mcq', prompt: 'Which is the best first step for achieving a civic goal?', options: ['Identify the goal and plan how to reach it', 'Hope it happens by itself', 'Wait for someone else to do it'], answer: 'Identify the goal and plan how to reach it', difficulty: 2 },
      ],
    },
  },
  // ---------- Economics & Business (1 CD) ----------
  {
    id: 'Y5-HASS-EC01',
    title: 'Natural, human and capital resources',
    year: '5',
    subject: 'hass',
    strand: 'Economics & Business',
    cd: [{ ac: 'AC9HS5K08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Everything we use starts as a resource. Natural resources come from nature, water, soil, timber and minerals. Human resources are people\'s skills and effort, like a teacher\'s teaching or a baker\'s baking. Capital resources are things people make to help produce goods, like tools, machines and buildings.',
        'We use these resources to satisfy our NEEDS, food, water, shelter and clothing, the things we must have to live, and our WANTS, the things we would like but could live without.',
      ],
      illustrations: [
        {
          brief: 'The three types of resources as a picture set',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'tree', label: 'Natural: timber, water' },
              { icon: 'people', label: 'Human: skills & effort' },
              { icon: 'cog', label: 'Capital: tools & machines' },
            ],
            caption: 'Three types of resources',
          },
        },
        {
          brief: 'How resources become the goods and services that meet needs and wants',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Natural + human + capital resources' },
              { text: 'Used together to produce goods and services' },
              { text: 'Satisfy our needs and wants' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-HASS-EC01-q1', type: 'mcq', prompt: 'Water, soil, timber and minerals are…', options: ['Natural resources', 'Capital resources', 'Human resources'], answer: 'Natural resources', difficulty: 1 },
        { id: 'Y5-HASS-EC01-q2', type: 'mcq', prompt: 'A teacher\'s skills and a builder\'s effort are examples of…', options: ['Human resources', 'Natural resources', 'Weather'], answer: 'Human resources', difficulty: 2 },
        { id: 'Y5-HASS-EC01-q3', type: 'mcq', prompt: 'A tractor, a school building and a computer are…', options: ['Capital resources', 'Natural resources', 'Needs'], answer: 'Capital resources', difficulty: 2 },
        { id: 'Y5-HASS-EC01-q4', type: 'mcq', prompt: 'Which of these is a NEED?', options: ['Food and shelter', 'A video game', 'A skateboard'], answer: 'Food and shelter', difficulty: 1 },
        { id: 'Y5-HASS-EC01-q5', type: 'short', prompt: 'A want is something we would like but could live…', answer: 'without', difficulty: 1 },
        { id: 'Y5-HASS-EC01-q6', type: 'mcq', prompt: 'Combining natural, human and capital resources allows us to…', options: ['Produce the goods and services that satisfy needs and wants', 'Stop using anything at all', 'Make all needs disappear'], answer: 'Produce the goods and services that satisfy needs and wants', difficulty: 2 },
      ],
    },
  },
];
