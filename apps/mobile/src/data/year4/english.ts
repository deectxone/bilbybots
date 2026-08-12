import type { Topic } from '../../types/curriculum';

/**
 * Year 4 English, full topic bank.
 * Source of truth for scope: docs/content/year-1-5/english.md (AC v9.0).
 * Every topic carries its AC9E4xxx content-description code and a rendered
 * `diagram` per illustration slot (see src/components/illustrations/diagrams.tsx)
 * instead of a placeholder. Each assignment carries 6 questions (nominal pace)
 * / 4 (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR4_ENGLISH_TOPICS: Topic[] = [
  {
    id: 'Y4-ENG-LA01',
    title: 'Formal & informal language',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Talking to a friend is different from writing to your principal, that is the magic of formal and informal language!',
        'Informal language is relaxed, like "Hey, wanna come over?", while formal language is polite and careful, like "Would you like to visit?"',
        'Great writers pick the right style for the person they are talking to.',
      ],
      illustrations: [
        {
          brief: 'Informal chat bubble vs formal letter envelope',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'chat-bubble', label: 'Hey mate!' },
              { icon: 'envelope', label: 'Dear Sir,' },
            ],
            caption: 'Informal vs formal, choose the style for your audience',
          },
        },
        {
          brief: 'Flowchart: think about who you are writing to',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Who am I writing to?' },
              { text: 'Friend? Use informal' },
              { text: 'Teacher? Use formal' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA01-q1', type: 'mcq', prompt: 'Which sentence is informal?', options: ['Would you please pass the water?', 'Grab us a drink, mate!', 'May I have a glass of water, please?'], answer: 'Grab us a drink, mate!', difficulty: 1 },
        { id: 'Y4-ENG-LA01-q2', type: 'mcq', prompt: 'Which sentence would you write to your principal?', options: ["Hey, what's up?", 'Dear Principal, I am writing to request...', 'Wanna meet up after school?'], answer: 'Dear Principal, I am writing to request...', difficulty: 2 },
        { id: 'Y4-ENG-LA01-q3', type: 'short', prompt: 'Write the informal word for "going to", as in "I am ___ run."', answer: 'gonna', difficulty: 2 },
        { id: 'Y4-ENG-LA01-q4', type: 'mcq', prompt: 'An email to your grandma should mostly use...', options: ['informal slang', 'formal, polite language', 'texting shortcuts'], answer: 'formal, polite language', difficulty: 2 },
        { id: 'Y4-ENG-LA01-q5', type: 'mcq', prompt: 'Which word is the informal one?', options: ['assist', 'help', 'request'], answer: 'help', difficulty: 2 },
        { id: 'Y4-ENG-LA01-q6', type: 'short', prompt: 'What kind of language do we use with close friends, formal or informal?', answer: 'informal', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA02',
    title: 'Subjective vs objective language',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Subjective language shares opinions and feelings, like "That movie was amazing!"',
        'Objective language reports facts without feelings, like "The movie lasted 92 minutes."',
        'Being able to tell them apart makes you a detective of language!',
      ],
      illustrations: [
        {
          brief: 'Balance scale weighing a fact against an opinion',
          ready: true,
          diagram: {
            kind: 'balance-scale',
            left: 'Fact: "It rained 3 mm."',
            right: 'Opinion: "Rain is the best!"',
            balanced: false,
          },
        },
        {
          brief: 'Eye icon for feelings and newspaper icon for true facts',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'eye', label: 'feels & thinks' },
              { icon: 'newspaper', label: 'true facts' },
            ],
            caption: 'Subjective = opinion · Objective = fact',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA02-q1', type: 'mcq', prompt: 'Which sentence is objective (a fact)?', options: ['Ice cream is the tastiest treat.', 'The ice cream melted in the sun.', 'Ice cream is so dreamy!'], answer: 'The ice cream melted in the sun.', difficulty: 1 },
        { id: 'Y4-ENG-LA02-q2', type: 'mcq', prompt: 'Which sentence is subjective (an opinion)?', options: ['The bus arrived at 8:15.', 'The bus holds forty people.', 'The bus driver is wonderful.'], answer: 'The bus driver is wonderful.', difficulty: 1 },
        { id: 'Y4-ENG-LA02-q3', type: 'short', prompt: 'Is "Chocolate is delicious" a fact or an opinion?', answer: 'opinion', difficulty: 1 },
        { id: 'Y4-ENG-LA02-q4', type: 'mcq', prompt: 'A weather report saying "Temperatures reached 31 degrees" is...', options: ['subjective', 'objective'], answer: 'objective', difficulty: 2 },
        { id: 'Y4-ENG-LA02-q5', type: 'mcq', prompt: 'Which word is a clue that a sentence is subjective?', options: ['measured', 'wonderful', 'recorded'], answer: 'wonderful', difficulty: 2 },
        { id: 'Y4-ENG-LA02-q6', type: 'short', prompt: 'Is "The park has three swings" a fact or an opinion?', answer: 'fact', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA03',
    title: 'Text stages & language features',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Texts are built in stages, like a house is built with rooms!',
        'A report starts with classification, then describes features. A narrative has an orientation, a complication and a resolution.',
        'Spotting the stages helps you understand and write any text.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of narrative stages: orientation, complication, resolution',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Orientation' },
              { text: 'Complication' },
              { text: 'Resolution' },
            ],
          },
        },
        {
          brief: 'Flowchart of procedure stages: goal, steps in order, result',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Goal' },
              { text: 'Steps in order' },
              { text: 'Result' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA03-q1', type: 'mcq', prompt: 'Which stage of a narrative introduces the characters and setting?', options: ['Orientation', 'Complication', 'Resolution'], answer: 'Orientation', difficulty: 1 },
        { id: 'Y4-ENG-LA03-q2', type: 'mcq', prompt: 'In a procedure, what comes first?', options: ['the goal', 'the steps', 'the result'], answer: 'the goal', difficulty: 2 },
        { id: 'Y4-ENG-LA03-q3', type: 'short', prompt: 'Name the narrative stage where the problem or trouble happens.', answer: 'complication', difficulty: 2 },
        { id: 'Y4-ENG-LA03-q4', type: 'mcq', prompt: 'A report that begins "Wombats are Australian marsupials" is at the...', options: ['description stage', 'classification stage', 'conclusion stage'], answer: 'classification stage', difficulty: 2 },
        { id: 'Y4-ENG-LA03-q5', type: 'mcq', prompt: 'Which stage ties up the story at the end?', options: ['orientation', 'complication', 'resolution'], answer: 'resolution', difficulty: 2 },
        { id: 'Y4-ENG-LA03-q6', type: 'short', prompt: 'Name the stage that describes what something looks like in a report.', answer: 'description', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA04',
    title: 'Text connectives & topic associations',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Text connectives are the glue that sequences and links your ideas, like first, then and finally.',
        'Conditional words like because, although and unless join ideas in clever ways.',
        'Topic words also travel in teams, think "kangaroo, joey, pouch"!',
      ],
      illustrations: [
        {
          brief: 'Number line sequencing connectives: first, then, next, finally',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 3,
            marks: [
              { value: 0, label: 'First' },
              { value: 1, label: 'Then' },
              { value: 2, label: 'Next' },
              { value: 3, label: 'Finally' },
            ],
          },
        },
        {
          brief: 'Connectives and linked topic words scene',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bolt', label: 'because' },
              { icon: 'link', label: 'although' },
              { icon: 'train-engine', label: 'first → finally' },
            ],
            caption: 'Connectives link and sequence ideas',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA04-q1', type: 'mcq', prompt: 'Which connective best starts the last step of a recipe?', options: ['First', 'Finally', 'Suddenly'], answer: 'Finally', difficulty: 1 },
        { id: 'Y4-ENG-LA04-q2', type: 'mcq', prompt: 'We went inside ____ it started to rain.', options: ['because', 'but', 'or'], answer: 'because', difficulty: 1 },
        { id: 'Y4-ENG-LA04-q3', type: 'short', prompt: 'Choose the connective: "She kept practising ____ she became really good." (until / but)', answer: 'until', difficulty: 2 },
        { id: 'Y4-ENG-LA04-q4', type: 'mcq', prompt: 'Which group of words belongs together?', options: ['shovel, seeds, hose', 'spoon, kite, torch', 'bank, pizza, moon'], answer: 'shovel, seeds, hose', difficulty: 2 },
        { id: 'Y4-ENG-LA04-q5', type: 'mcq', prompt: 'Which connective shows time order?', options: ['meanwhile', 'although', 'therefore'], answer: 'meanwhile', difficulty: 2 },
        { id: 'Y4-ENG-LA04-q6', type: 'short', prompt: 'Add a connective to complete: "____ you practise every day, you will improve."', answer: 'If', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA05',
    title: 'Online navigation features',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Websites have special signposts to help you find your way, just like road signs!',
        'Headlines tell you what a page is about, menus list your choices, and links jump you to new pages.',
        'Learning these features makes you a super-savvy explorer of online texts.',
      ],
      illustrations: [
        {
          brief: 'Online signposts: search, links and menu icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'magnifier', label: 'search' },
              { icon: 'link', label: 'links' },
              { icon: 'phone', label: 'menu' },
            ],
            caption: 'Online signposts that help you navigate',
          },
        },
        {
          brief: 'Flowchart: tap the menu, choose a topic, follow the link',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Tap the menu' },
              { text: 'Choose a topic' },
              { text: 'Follow the link' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA05-q1', type: 'mcq', prompt: 'What do you click to jump to another page?', options: ['a link', 'a headline', 'a caption'], answer: 'a link', difficulty: 1 },
        { id: 'Y4-ENG-LA05-q2', type: 'mcq', prompt: 'A drop-down menu lets you...', options: ['choose from a list of options', 'read the whole page', 'zoom into a photo'], answer: 'choose from a list of options', difficulty: 2 },
        { id: 'Y4-ENG-LA05-q3', type: 'short', prompt: 'Name the feature that lets you type words to find things on a website.', answer: 'search bar', difficulty: 2 },
        { id: 'Y4-ENG-LA05-q4', type: 'mcq', prompt: 'A headline is...', options: ['a short title that tells you what the page is about', 'the button that goes back', 'a photo of the writer'], answer: 'a short title that tells you what the page is about', difficulty: 1 },
        { id: 'Y4-ENG-LA05-q5', type: 'mcq', prompt: 'Which part of a page is usually best at grabbing attention first?', options: ['the headline and main image', 'the tiny fine print', 'the copyright note'], answer: 'the headline and main image', difficulty: 3 },
        { id: 'Y4-ENG-LA05-q6', type: 'short', prompt: 'Name the button that takes you back to the page you saw before.', answer: 'back button', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA06',
    title: 'Complex sentences',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A complex sentence has one main clause and a smaller dependent clause that leans on it, joined by words like because, when and if.',
        'In "We cheered when the goal was scored", "We cheered" is the main idea and "when the goal was scored" adds the detail.',
        'Complex sentences make your writing sound grown-up and rich.',
      ],
      illustrations: [
        {
          brief: 'Flowchart joining a main clause with a dependent clause',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Main clause: We cheered' },
              { text: '+ when' },
              { text: 'Dependent clause: the goal' },
            ],
          },
        },
        {
          brief: 'Subordinating conjunctions: because, when, if',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bolt', label: 'because' },
              { icon: 'clock', label: 'when' },
              { icon: 'traffic-light', label: 'if' },
            ],
            caption: 'Subordinating conjunctions join clauses',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA06-q1', type: 'mcq', prompt: 'Which sentence is complex?', options: ['The dog barked loudly.', 'The dog barked because the doorbell rang.', 'The dog barked and the cat ran.'], answer: 'The dog barked because the doorbell rang.', difficulty: 2 },
        { id: 'Y4-ENG-LA06-q2', type: 'mcq', prompt: 'In "I read when I am bored", which word joins the clauses?', options: ['read', 'when', 'bored'], answer: 'when', difficulty: 1 },
        { id: 'Y4-ENG-LA06-q3', type: 'short', prompt: 'Join these with a subordinating conjunction: "She smiled. She saw the puppy."', answer: 'She smiled when she saw the puppy.', difficulty: 3 },
        { id: 'Y4-ENG-LA06-q4', type: 'mcq', prompt: 'Which part is the dependent clause in "We stayed inside because it was raining"?', options: ['We stayed inside', 'because it was raining'], answer: 'because it was raining', difficulty: 2 },
        { id: 'Y4-ENG-LA06-q5', type: 'mcq', prompt: 'A main clause can...', options: ['stand alone as a complete idea', 'never appear without a comma', 'only have one word'], answer: 'stand alone as a complete idea', difficulty: 2 },
        { id: 'Y4-ENG-LA06-q6', type: 'short', prompt: 'Which word could join: "___ you finish your chores, you can play." (When / And)', answer: 'When', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA07',
    title: 'Direct & reported speech',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Direct speech repeats someone\'s exact words inside quotation marks: "I love cake," said Mia.',
        'Reported speech retells the words without quotes: Mia said she loved cake.',
        'You choose direct speech to feel the moment, and reported speech to keep the story moving fast.',
      ],
      illustrations: [
        {
          brief: 'Chat bubble with direct quote next to a quill with reported version',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'chat-bubble', label: '"I love cake!"' },
              { icon: 'quill', label: 'Mia said she loved cake.' },
            ],
            caption: 'Direct speech vs reported speech',
          },
        },
        {
          brief: 'Flowchart: drop the quotes, shift the tense',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Direct: "I am cold."' },
              { text: 'Drop the quotes' },
              { text: 'Shift the tense' },
              { text: 'Reported: she was cold.' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA07-q1', type: 'mcq', prompt: 'Which sentence uses direct speech?', options: ['Ben said he was tired.', '"I am tired," said Ben.', 'Ben said that he felt tired.'], answer: '"I am tired," said Ben.', difficulty: 1 },
        { id: 'Y4-ENG-LA07-q2', type: 'mcq', prompt: 'Reported speech usually...', options: ['uses quotation marks', 'retells the words without quotes', 'is only used in poems'], answer: 'retells the words without quotes', difficulty: 1 },
        { id: 'Y4-ENG-LA07-q3', type: 'short', prompt: 'Change to reported speech: "I love cake," said Mia.', answer: 'Mia said she loved cake.', difficulty: 3 },
        { id: 'Y4-ENG-LA07-q4', type: 'mcq', prompt: 'Which is the reported version of "We won!" shouted Tom?', options: ['Tom said they had won.', '"We won!" said Tom.', 'Tom shouted the winning.'], answer: 'Tom said they had won.', difficulty: 3 },
        { id: 'Y4-ENG-LA07-q5', type: 'mcq', prompt: 'In direct speech, someone\'s exact words are shown with...', options: ['quotation marks', 'full stops only', 'brackets'], answer: 'quotation marks', difficulty: 1 },
        { id: 'Y4-ENG-LA07-q6', type: 'short', prompt: 'Change to reported speech: "I am hungry," said Zoe.', answer: 'Zoe said she was hungry.', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA08',
    title: 'Adverb groups & prepositional phrases',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Adverb groups tell us how, when or where something happens, like "very quietly" or "at sunset".',
        'Prepositional phrases begin with a little word like under, behind or in: "The ball rolled under the bed."',
        'They sprinkle extra detail into your sentences like glitter!',
      ],
      illustrations: [
        {
          brief: 'Examples of circumstantial detail: under the tree, in the morning, very quickly',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'tree', label: 'under the tree' },
              { icon: 'clock', label: 'in the morning' },
              { icon: 'runner', label: 'very quickly' },
            ],
            caption: 'Circumstantial details in sentences',
          },
        },
        {
          brief: 'Flowchart of adverb groups and prepositional phrases adding detail',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Adverb group: how' },
              { text: 'Preposition: where' },
              { text: 'Phrase: when' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA08-q1', type: 'mcq', prompt: 'Which is a prepositional phrase?', options: ['under the bed', 'slowly walked', 'bright red'], answer: 'under the bed', difficulty: 1 },
        { id: 'Y4-ENG-LA08-q2', type: 'mcq', prompt: 'Which word starts a prepositional phrase?', options: ['behind', 'and', 'very'], answer: 'behind', difficulty: 1 },
        { id: 'Y4-ENG-LA08-q3', type: 'short', prompt: 'Find the prepositional phrase: "The cat slept on the warm rug."', answer: 'on the warm rug', difficulty: 2 },
        { id: 'Y4-ENG-LA08-q4', type: 'mcq', prompt: 'Which is an adverb group?', options: ['very quickly', 'under the sea', 'two small dogs'], answer: 'very quickly', difficulty: 1 },
        { id: 'Y4-ENG-LA08-q5', type: 'mcq', prompt: 'An adverb group "at midnight" tells...', options: ['when it happened', 'where it happened', 'how it happened'], answer: 'when it happened', difficulty: 2 },
        { id: 'Y4-ENG-LA08-q6', type: 'short', prompt: 'Add a prepositional phrase: "The bird sat ___ ."', answer: 'on the branch', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA09',
    title: 'Past, present & future tense',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Tense plants your verbs in time: past, present or future.',
        'Yesterday I walked, today I walk, tomorrow I will walk, see the verb change?',
        'Choosing the right tense keeps your writing clear and true.',
      ],
      illustrations: [
        {
          brief: 'Number line of tense: past, present, future',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 2,
            marks: [
              { value: 0, label: 'past' },
              { value: 1, label: 'present' },
              { value: 2, label: 'future' },
            ],
          },
        },
        {
          brief: 'Verb tense moves through time: walked, walks, will walk',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'timer', label: 'walked' },
              { icon: 'clock', label: 'walks' },
              { icon: 'rocket', label: 'will walk' },
            ],
            caption: 'Verb tense moves through time',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA09-q1', type: 'mcq', prompt: 'Which verb is in the future tense?', options: ['will build', 'built', 'builds'], answer: 'will build', difficulty: 1 },
        { id: 'Y4-ENG-LA09-q2', type: 'mcq', prompt: 'The present tense of "ran" is...', options: ['runs', 'run', 'will run'], answer: 'runs', difficulty: 2 },
        { id: 'Y4-ENG-LA09-q3', type: 'short', prompt: 'Write the past tense of "sing".', answer: 'sang', difficulty: 2 },
        { id: 'Y4-ENG-LA09-q4', type: 'mcq', prompt: '"Mia will plant the seeds tomorrow." What tense?', options: ['past', 'present', 'future'], answer: 'future', difficulty: 1 },
        { id: 'Y4-ENG-LA09-q5', type: 'mcq', prompt: 'Which sentence is in the present tense?', options: ['The dog barked all night.', 'The dog barks at the postie.', 'The dog will bark at the postie.'], answer: 'The dog barks at the postie.', difficulty: 2 },
        { id: 'Y4-ENG-LA09-q6', type: 'short', prompt: 'Change to past tense: "They play at the park."', answer: 'They played at the park.', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA10',
    title: 'Image framing & salience',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA10' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Photographers and illustrators make choices that change the story a picture tells!',
        'A close-up frames one thing and makes it feel important, and the most eye-catching part is called the salience.',
        'Where something is placed, centre, corner or far away, also changes what you notice first.',
      ],
      illustrations: [
        {
          brief: 'Framing and salience: close-up, salience and detail icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'picture-frame', label: 'close-up' },
              { icon: 'eye', label: 'salience' },
              { icon: 'magnifier', label: 'detail' },
            ],
            caption: 'Framing and salience guide your eye',
          },
        },
        {
          brief: 'What grabs attention first: bright, big and centred',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'eye', label: 'you see this first' },
              { icon: 'sun', label: 'bright & big' },
              { icon: 'picture-frame', label: 'the edges cut off' },
            ],
            caption: 'What grabs your attention first?',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA10-q1', type: 'mcq', prompt: 'A close-up shot of a character\'s face makes the character feel...', options: ['important and near', 'far away and tiny', 'invisible'], answer: 'important and near', difficulty: 2 },
        { id: 'Y4-ENG-LA10-q2', type: 'mcq', prompt: 'Salience is...', options: ['the part of an image that stands out most', 'the date a photo was taken', 'the caption under a picture'], answer: 'the part of an image that stands out most', difficulty: 2 },
        { id: 'Y4-ENG-LA10-q3', type: 'short', prompt: 'Name the quality that makes one part of a picture grab your attention first.', answer: 'salience', difficulty: 3 },
        { id: 'Y4-ENG-LA10-q4', type: 'mcq', prompt: 'An object placed in the middle of a picture usually...', options: ['gets the most attention', 'is hidden', 'looks tiny'], answer: 'gets the most attention', difficulty: 1 },
        { id: 'Y4-ENG-LA10-q5', type: 'mcq', prompt: 'Framing a subject with a close-up, cut-off edge tells us to...', options: ['look closely at that subject', 'ignore the subject', 'read the caption'], answer: 'look closely at that subject', difficulty: 2 },
        { id: 'Y4-ENG-LA10-q6', type: 'short', prompt: 'What does a close-up frame focus on?', answer: 'the details of one subject', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA11',
    title: 'Synonyms, antonyms & vocabulary',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA11' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Synonyms are words that mean almost the same thing, big and huge are twins!',
        'Antonyms are opposites, big and small clash!',
        'Collecting both makes your vocabulary sparkle and your writing sing.',
      ],
      illustrations: [
        {
          brief: 'Quick and fast are synonyms; slow is the antonym',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'cube', label: 'quick' },
              { icon: 'rocket', label: 'fast' },
              { icon: 'train-car', label: 'slow' },
            ],
            caption: 'Synonyms quick/fast · antonym slow',
          },
        },
        {
          brief: 'Happy and joyful are synonyms; sad is the antonym',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bolt', label: 'happy' },
              { icon: 'sun', label: 'joyful' },
              { icon: 'raincloud', label: 'sad' },
            ],
            caption: 'Synonyms happy/joyful · antonym sad',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA11-q1', type: 'mcq', prompt: 'Which word is a synonym of "quick"?', options: ['fast', 'slow', 'huge'], answer: 'fast', difficulty: 1 },
        { id: 'Y4-ENG-LA11-q2', type: 'mcq', prompt: 'Which word is an antonym of "shiny"?', options: ['bright', 'dull', 'clean'], answer: 'dull', difficulty: 1 },
        { id: 'Y4-ENG-LA11-q3', type: 'short', prompt: 'Write a synonym for "happy".', answer: 'glad', difficulty: 2 },
        { id: 'Y4-ENG-LA11-q4', type: 'mcq', prompt: 'Which pair are antonyms?', options: ['begin, start', 'hot, cold', 'small, little'], answer: 'hot, cold', difficulty: 2 },
        { id: 'Y4-ENG-LA11-q5', type: 'mcq', prompt: 'Which word is an antonym of "ancient"?', options: ['modern', 'old', 'ancient'], answer: 'modern', difficulty: 2 },
        { id: 'Y4-ENG-LA11-q6', type: 'short', prompt: 'Write an antonym for "loud".', answer: 'quiet', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LA12',
    title: 'Punctuating dialogue',
    year: '4',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E4LA12' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Dialogue punctuation is the road rules for speech: quotation marks hug the spoken words, and a comma or end mark sits inside.',
        'The first spoken word starts with a capital, and the speaker\'s name sits outside the speech marks.',
        '"Let\'s go," said Tom, see how the comma sits inside the quotes?',
      ],
      illustrations: [
        {
          brief: 'Flowchart of the pattern for punctuating dialogue',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: '" + capital letter' },
              { text: 'spoken words' },
              { text: 'comma or ?! inside' },
              { text: '" + said Tom.' },
            ],
          },
        },
        {
          brief: 'Chat bubble with speech marks next to a quill naming the speaker',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'chat-bubble', label: '"Hello!"' },
              { icon: 'quill', label: 'said Mia.' },
            ],
            caption: 'Speech marks hug the spoken words',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LA12-q1', type: 'mcq', prompt: 'Which sentence is punctuated correctly?', options: ['"Time for bed!" Mum said.', '"Time for bed! Mum said."', '"Time for bed" !Mum said.'], answer: '"Time for bed!" Mum said.', difficulty: 1 },
        { id: 'Y4-ENG-LA12-q2', type: 'mcq', prompt: 'In "Let\'s go," said Tom, the comma sits...', options: ['inside the quotation marks', 'outside the quotation marks', 'after the word said'], answer: 'inside the quotation marks', difficulty: 2 },
        { id: 'Y4-ENG-LA12-q3', type: 'short', prompt: 'What punctuation marks wrap around the exact spoken words?', answer: 'quotation marks', difficulty: 1 },
        { id: 'Y4-ENG-LA12-q4', type: 'mcq', prompt: 'The first word spoken inside the speech marks should...', options: ['start with a capital letter', 'be in brackets', 'never be a verb'], answer: 'start with a capital letter', difficulty: 1 },
        { id: 'Y4-ENG-LA12-q5', type: 'mcq', prompt: 'The words "said Zoe" usually appear...', options: ['outside the quotation marks', 'inside the quotation marks', 'between the letters of a word'], answer: 'outside the quotation marks', difficulty: 2 },
        { id: 'Y4-ENG-LA12-q6', type: 'short', prompt: 'Punctuate this correctly: I am ready she said', answer: '"I am ready," she said.', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LE01',
    title: 'Similar storylines across contexts',
    year: '4',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E4LE01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Stories from different places and times often share the same bones, the quest, the trickster, the rescue.',
        'First Nations Australian storytelling and stories from around the world both hold up big ideas like courage, family and looking after Country.',
        'When we notice the same storylines everywhere, we see how connected humans are.',
      ],
      illustrations: [
        {
          brief: 'Globe, book and people icons for shared storylines across cultures',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'globe', label: 'everywhere' },
              { icon: 'book', label: 'shared storylines' },
              { icon: 'people', label: 'family & courage' },
            ],
            caption: 'Similar storylines, different places',
          },
        },
        {
          brief: 'Flowchart of the quest storyline',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Hero leaves home' },
              { text: 'Faces a challenge' },
              { text: 'Grows and returns' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LE01-q1', type: 'mcq', prompt: 'A quest story almost always has...', options: ['a journey and a goal', 'no characters', 'only one setting'], answer: 'a journey and a goal', difficulty: 1 },
        { id: 'Y4-ENG-LE01-q2', type: 'mcq', prompt: 'Trickster stories often star...', options: ['a clever animal who plays tricks', 'a giant mountain', 'a talking car'], answer: 'a clever animal who plays tricks', difficulty: 2 },
        { id: 'Y4-ENG-LE01-q3', type: 'short', prompt: 'Name the story pattern where a hero travels to reach a goal.', answer: 'quest', difficulty: 2 },
        { id: 'Y4-ENG-LE01-q4', type: 'mcq', prompt: 'Stories from different countries can share...', options: ['the same storylines and ideas', 'nothing at all', 'the same spelling'], answer: 'the same storylines and ideas', difficulty: 2 },
        { id: 'Y4-ENG-LE01-q5', type: 'mcq', prompt: 'A common theme in First Nations Australian stories is...', options: ['caring for Country and respecting elders', 'growing vegetables', 'building machines'], answer: 'caring for Country and respecting elders', difficulty: 3 },
        { id: 'Y4-ENG-LE01-q6', type: 'short', prompt: 'Name one big idea that storylines across cultures often explore.', answer: 'courage', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LE02',
    title: 'Effects of structures & language features',
    year: '4',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E4LE02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Authors choose their words and structures on purpose to make you feel something!',
        'Short sentences speed up a chase, while long sentences slow a story down like honey.',
        'Repetition beats a drum of emphasis, and a well-placed question makes readers curious.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of language features and their effects',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Short sentences' },
              { text: '→ fast and tense' },
              { text: 'Repetition' },
              { text: '→ emphasis' },
            ],
          },
        },
        {
          brief: 'Features create effects: fast, slow and curious',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'runner', label: 'short = fast' },
              { icon: 'bowl', label: 'long = slow' },
              { icon: 'bulb', label: 'question = curious' },
            ],
            caption: 'Features create effects',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LE02-q1', type: 'mcq', prompt: 'A row of very short sentences makes a scene feel...', options: ['tense and fast', 'sleepy and long', 'happy and bright'], answer: 'tense and fast', difficulty: 2 },
        { id: 'Y4-ENG-LE02-q2', type: 'mcq', prompt: 'Repeating a phrase, like "Never give up", builds...', options: ['emphasis', 'confusion', 'silence'], answer: 'emphasis', difficulty: 1 },
        { id: 'Y4-ENG-LE02-q3', type: 'short', prompt: 'Name one feeling an author can create with sentence structure.', answer: 'tension', difficulty: 3 },
        { id: 'Y4-ENG-LE02-q4', type: 'mcq', prompt: 'An author writes "Suddenly, everything went quiet." The word "Suddenly" creates...', options: ['suspense', 'boredom', 'weather'], answer: 'suspense', difficulty: 2 },
        { id: 'Y4-ENG-LE02-q5', type: 'mcq', prompt: 'A list of three items ("The bag held a compass, a map and a torch.") builds...', options: ['a quick rhythm', 'a slower, grander feel', 'a colour'], answer: 'a quick rhythm', difficulty: 3 },
        { id: 'Y4-ENG-LE02-q6', type: 'short', prompt: 'Why might an author use short, sharp sentences in a scene?', answer: 'to build tension', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LE03',
    title: 'Making stories engaging',
    year: '4',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E4LE03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'To hook readers, authors build characters you care about, settings you can feel, and a problem that keeps growing.',
        'Plot tension rises like a wave, the trouble gets bigger until the big moment.',
        'Every page should make you want to turn the next one!',
      ],
      illustrations: [
        {
          brief: 'Flowchart of rising plot tension',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Character wants something' },
              { text: 'A problem appears' },
              { text: 'The problem grows' },
              { text: 'Big moment' },
            ],
          },
        },
        {
          brief: 'The three hooks: character, setting and growing problem',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'smiley', label: 'character you like' },
              { icon: 'house', label: 'setting you feel' },
              { icon: 'bolt', label: 'problem that grows' },
            ],
            caption: 'The three hooks of an engaging story',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LE03-q1', type: 'mcq', prompt: 'Readers care about a story more when...', options: ['they care about the character', 'there are no characters', 'the setting is empty'], answer: 'they care about the character', difficulty: 1 },
        { id: 'Y4-ENG-LE03-q2', type: 'mcq', prompt: 'Rising tension makes readers want to...', options: ['keep reading', 'close the book', 'sleep'], answer: 'keep reading', difficulty: 1 },
        { id: 'Y4-ENG-LE03-q3', type: 'short', prompt: 'Name the part of a story that keeps getting bigger until the climax.', answer: 'the problem', difficulty: 2 },
        { id: 'Y4-ENG-LE03-q4', type: 'mcq', prompt: 'A writer makes a setting engaging by...', options: ['adding sensory details', 'using no describing words', 'making it always dark'], answer: 'adding sensory details', difficulty: 2 },
        { id: 'Y4-ENG-LE03-q5', type: 'mcq', prompt: 'A cliffhanger ends a chapter at...', options: ['an exciting moment that is not finished', 'a finished happy ending', 'the very last page of the book'], answer: 'an exciting moment that is not finished', difficulty: 2 },
        { id: 'Y4-ENG-LE03-q6', type: 'short', prompt: 'Why do authors give their characters a challenge to face?', answer: 'so the character can grow and change', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LE04',
    title: 'Literary devices & word play',
    year: '4',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E4LE04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Writers juggle words for fun and meaning: similes compare with "like" or "as", and onomatopoeia makes words sound like the noise, crash, buzz, splash!',
        'Rhyme, puns and exaggeration ("I\'ve told you a million times!") are word play too.',
        'These tricks make writing sparkle and stick in your head.',
      ],
      illustrations: [
        {
          brief: 'Onomatopoeia: crash, splash and rhyme',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bolt', label: 'Crash!' },
              { icon: 'droplet', label: 'Splash!' },
              { icon: 'music-note', label: 'Rhyme' },
            ],
            caption: 'Onomatopoeia makes words sound like the action',
          },
        },
        {
          brief: 'Simile example: as cold as ice',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'chat-bubble', label: 'as cold as ice' },
              { icon: 'go-circle', label: '= simile' },
            ],
            caption: 'Similes compare with like or as',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LE04-q1', type: 'mcq', prompt: '"The water shimmered like silk" is a...', options: ['simile', 'rhyme', 'pun'], answer: 'simile', difficulty: 1 },
        { id: 'Y4-ENG-LE04-q2', type: 'mcq', prompt: 'Buzz, sizzle and crash are examples of...', options: ['onomatopoeia', 'similes', 'antonyms'], answer: 'onomatopoeia', difficulty: 1 },
        { id: 'Y4-ENG-LE04-q3', type: 'short', prompt: 'Finish the simile: "as quiet as a ___"', answer: 'mouse', difficulty: 1 },
        { id: 'Y4-ENG-LE04-q4', type: 'mcq', prompt: '"I\'m so hungry I could eat a horse" is...', options: ['exaggeration', 'a true fact', 'a recipe'], answer: 'exaggeration', difficulty: 2 },
        { id: 'Y4-ENG-LE04-q5', type: 'mcq', prompt: 'Which pair of words rhyme?', options: ['moon, spoon', 'moon, tree', 'moon, night'], answer: 'moon, spoon', difficulty: 1 },
        { id: 'Y4-ENG-LE04-q6', type: 'short', prompt: 'What device compares two things using "like" or "as"?', answer: 'simile', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LE05',
    title: 'Creating literary texts',
    year: '4',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E4LE05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Now it is your turn to be the author! Creating a literary text means planning a storyline, characters and a setting, then drafting and polishing.',
        'Give your character a want and a problem, and drop them into a setting full of sensory detail.',
        'Your first draft can be messy, revision is where the story becomes great.',
      ],
      illustrations: [
        {
          brief: 'Flowchart from plan to published story',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Plan the storyline' },
              { text: 'Draft the scenes' },
              { text: 'Revise & polish' },
              { text: 'Share your story' },
            ],
          },
        },
        {
          brief: 'Develop character, setting and storyline icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'smiley', label: 'character' },
              { icon: 'house', label: 'setting' },
              { icon: 'map', label: 'storyline' },
            ],
            caption: 'Develop character, setting and storyline',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LE05-q1', type: 'mcq', prompt: 'The very first step of creating a story is...', options: ['planning the storyline', 'printing it', 'sharing it'], answer: 'planning the storyline', difficulty: 1 },
        { id: 'Y4-ENG-LE05-q2', type: 'mcq', prompt: 'A memorable character usually has...', options: ['a want and a problem', 'no feelings', 'only a name'], answer: 'a want and a problem', difficulty: 2 },
        { id: 'Y4-ENG-LE05-q3', type: 'short', prompt: 'Name one of the three things you develop when creating a literary text.', answer: 'setting', difficulty: 2 },
        { id: 'Y4-ENG-LE05-q4', type: 'mcq', prompt: 'To make a setting vivid, you can describe...', options: ['what it looks, sounds and smells like', 'only the time it opens', 'its price'], answer: 'what it looks, sounds and smells like', difficulty: 1 },
        { id: 'Y4-ENG-LE05-q5', type: 'mcq', prompt: 'When you revise a draft, you...', options: ['improve the words and ideas', 'print more copies', 'rename the font'], answer: 'improve the words and ideas', difficulty: 2 },
        { id: 'Y4-ENG-LE05-q6', type: 'short', prompt: 'Give your character one problem to solve.', answer: 'They have lost their way home.', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY01',
    title: 'Texts from different times',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A diary from 1900 and a blog from today both record days, but they sound and look totally different!',
        'Comparing texts from different times with the same purpose shows us how events, language and technology have changed.',
        'Old recipes, news and letters are time machines on paper.',
      ],
      illustrations: [
        {
          brief: 'Newspaper from then vs phone from now',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'newspaper', label: 'then: formal print' },
              { icon: 'phone', label: 'now: photos & video' },
            ],
            caption: 'Same purpose, different times',
          },
        },
        {
          brief: 'Ship from 1870 vs plane flying today',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'ship', label: 'sailed in 1870' },
              { icon: 'plane', label: 'flies today' },
            ],
            caption: 'How travel texts have changed',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY01-q1', type: 'mcq', prompt: 'An old newspaper from 1900 would probably use...', options: ['formal, old-fashioned language', 'emojis and hashtags', 'short video clips'], answer: 'formal, old-fashioned language', difficulty: 2 },
        { id: 'Y4-ENG-LY01-q2', type: 'mcq', prompt: 'A modern news story online often includes...', options: ['photos, videos and links', 'only text with no headings', 'sealed envelopes'], answer: 'photos, videos and links', difficulty: 1 },
        { id: 'Y4-ENG-LY01-q3', type: 'short', prompt: 'Name one way a text about travel from today differs from one from 1900.', answer: 'it has photos', difficulty: 3 },
        { id: 'Y4-ENG-LY01-q4', type: 'mcq', prompt: 'Comparing old and new texts with the same purpose helps us...', options: ['see how things have changed', 'forget the old days', 'copy exactly'], answer: 'see how things have changed', difficulty: 1 },
        { id: 'Y4-ENG-LY01-q5', type: 'mcq', prompt: 'A diary from 1900 and a blog from today both...', options: ['record daily events', 'use the same emojis', 'are always printed'], answer: 'record daily events', difficulty: 2 },
        { id: 'Y4-ENG-LY01-q6', type: 'short', prompt: 'What do an old recipe and a modern recipe both include?', answer: 'ingredients and steps', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY02',
    title: 'Listening for key points',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Great listeners hunt for the key points, the who, what, when, where and why!',
        'You might be listening to follow a task or to join a discussion, so your brain should be on the lookout the whole time.',
        'Acknowledge other people\'s ideas ("Great point!") and build on them ("And also...").',
      ],
      illustrations: [
        {
          brief: 'Listen for key points: what, who, when, where',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'eye', label: 'what' },
              { icon: 'people', label: 'who' },
              { icon: 'clock', label: 'when' },
              { icon: 'map', label: 'where' },
            ],
            caption: 'Listen for the key points',
          },
        },
        {
          brief: 'Flowchart: the path of a great listener',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Listen closely' },
              { text: 'Note the key points' },
              { text: 'Ask a question' },
              { text: 'Extend the idea' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY02-q1', type: 'mcq', prompt: 'While listening for key points you should...', options: ['hunt for the main ideas', 'draw all the time', 'plan what to have for lunch'], answer: 'hunt for the main ideas', difficulty: 1 },
        { id: 'Y4-ENG-LY02-q2', type: 'mcq', prompt: 'Saying "I agree, and also..." helps you...', options: ['extend someone\'s idea', 'finish early', 'avoid listening'], answer: 'extend someone\'s idea', difficulty: 2 },
        { id: 'Y4-ENG-LY02-q3', type: 'short', prompt: 'Which "w" question asks for a reason?', answer: 'why', difficulty: 1 },
        { id: 'Y4-ENG-LY02-q4', type: 'mcq', prompt: 'Your teacher says: "Bring a hat, water and sunscreen." The key point is...', options: ['bring sun-safety things', 'bring a hat only', 'stay inside'], answer: 'bring sun-safety things', difficulty: 2 },
        { id: 'Y4-ENG-LY02-q5', type: 'mcq', prompt: 'Which phrase acknowledges an opinion?', options: ['That\'s a great point.', 'What\'s for lunch?', 'Shhh.'], answer: 'That\'s a great point.', difficulty: 2 },
        { id: 'Y4-ENG-LY02-q6', type: 'short', prompt: 'Name one thing you can do to show you were really listening.', answer: 'ask a question', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY03',
    title: 'Characteristic features of text types',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Each text type carries its own toolkit! Imaginative texts use characters and plot, informative texts use facts and headings, and persuasive texts use opinions and reasons.',
        'Spot the toolkit and you can name the text type, and build one yourself.',
        'A recipe and a poster both inform, but they organise their features differently.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: text types and their features',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Imaginative → characters & plot' },
              { text: 'Informative → facts & headings' },
              { text: 'Persuasive → opinions & reasons' },
            ],
          },
        },
        {
          brief: 'Book, newspaper and speaker icons for three text types',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'book', label: 'imaginative' },
              { icon: 'newspaper', label: 'informative' },
              { icon: 'speaker', label: 'persuasive' },
            ],
            caption: 'Three text types, three toolkits',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY03-q1', type: 'mcq', prompt: 'A persuasive text includes...', options: ['opinions and reasons', 'only lists of dates', 'a recipe'], answer: 'opinions and reasons', difficulty: 1 },
        { id: 'Y4-ENG-LY03-q2', type: 'mcq', prompt: 'An informative text mostly gives...', options: ['facts', 'fairy tale characters', 'advertising'], answer: 'facts', difficulty: 1 },
        { id: 'Y4-ENG-LY03-q3', type: 'short', prompt: 'Which text type uses characters and a plot?', answer: 'imaginative', difficulty: 2 },
        { id: 'Y4-ENG-LY03-q4', type: 'mcq', prompt: 'Headings and captions are typical of...', options: ['informative texts', 'persuasive adverts', 'nursery rhymes'], answer: 'informative texts', difficulty: 2 },
        { id: 'Y4-ENG-LY03-q5', type: 'mcq', prompt: 'An advertisement that says "Buy now, you won\'t regret it!" is...', options: ['persuasive', 'a fairy tale', 'an index'], answer: 'persuasive', difficulty: 2 },
        { id: 'Y4-ENG-LY03-q6', type: 'short', prompt: 'Name the text type of a recipe that lists steps in order.', answer: 'procedure', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY04',
    title: 'Reading different text types',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Skilled readers carry three tools: sound out words with phonics, use word meaning (semantic clues), and use grammar, like "that word must be a verb."',
        'Different texts ask different things of you: a poem asks you to feel, an instruction asks you to do, an explanation asks you to understand.',
        'When something doesn\'t make sense, great readers re-read and self-correct.',
      ],
      illustrations: [
        {
          brief: 'Three tools for tricky words: sound, meaning, sense',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'speaker', label: 'sound it out' },
              { icon: 'book', label: 'check the meaning' },
              { icon: 'brain', label: 'make sense' },
            ],
            caption: 'Three tools for tricky words',
          },
        },
        {
          brief: 'Flowchart: the self-correcting loop',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Read the sentence' },
              { text: 'Does it make sense?' },
              { text: 'No → re-read & fix' },
              { text: 'Yes → keep going' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY04-q1', type: 'mcq', prompt: 'If a sentence does not make sense, a good reader...', options: ['re-reads it', 'skips every word', 'shouts it'], answer: 're-reads it', difficulty: 1 },
        { id: 'Y4-ENG-LY04-q2', type: 'mcq', prompt: 'Using what a word means to figure it out is called...', options: ['semantic knowledge', 'a dream', 'a heading'], answer: 'semantic knowledge', difficulty: 3 },
        { id: 'Y4-ENG-LY04-q3', type: 'short', prompt: 'What do you use to sound out a new word?', answer: 'phonics', difficulty: 1 },
        { id: 'Y4-ENG-LY04-q4', type: 'mcq', prompt: 'Self-correcting means...', options: ['fixing a reading mistake', 'never reading again', 'skipping pages'], answer: 'fixing a reading mistake', difficulty: 2 },
        { id: 'Y4-ENG-LY04-q5', type: 'mcq', prompt: 'Reading a poem and reading a set of instructions needs...', options: ['different reading strategies', 'the exact same speed', 'no thinking'], answer: 'different reading strategies', difficulty: 2 },
        { id: 'Y4-ENG-LY04-q6', type: 'short', prompt: 'Name one thing to do when a word looks too tricky.', answer: 'sound it out', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY05',
    title: 'Comprehension & evaluation',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Literal questions hide in the text, you can point to the answer.',
        'Inference is detective work: you use clues to work out what is not written. If she grabs an umbrella, you infer it will rain.',
        'Evaluating means judging, is this text clear, fair and true? You are the judge now!',
      ],
      illustrations: [
        {
          brief: 'Find it, hunt for clues, infer the meaning icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'eye', label: 'find it in the text' },
              { icon: 'magnifier', label: 'hunt for clues' },
              { icon: 'brain', label: 'infer the meaning' },
            ],
            caption: 'Literal → infer → evaluate',
          },
        },
        {
          brief: 'Flowchart: the comprehension journey',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Read the text' },
              { text: 'Literal: what is stated?' },
              { text: 'Infer: what do clues say?' },
              { text: 'Evaluate: clear & fair?' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY05-q1', type: 'mcq', prompt: '"The dog barked all night." According to the text, the dog barked...', options: ['at night', 'at noon', 'never'], answer: 'at night', difficulty: 1 },
        { id: 'Y4-ENG-LY05-q2', type: 'mcq', prompt: 'An inference is...', options: ['working out meaning that is not stated', 'copying the exact words', 'counting the pages'], answer: 'working out meaning that is not stated', difficulty: 1 },
        { id: 'Y4-ENG-LY05-q3', type: 'short', prompt: 'Mia put on her raincoat. What weather can you infer?', answer: 'rain', difficulty: 2 },
        { id: 'Y4-ENG-LY05-q4', type: 'mcq', prompt: 'Evaluating a text means...', options: ['judging how good or useful it is', 'colouring the pictures', 'reading backwards'], answer: 'judging how good or useful it is', difficulty: 2 },
        { id: 'Y4-ENG-LY05-q5', type: 'mcq', prompt: '"He packed a towel and a snorkel." What can you infer?', options: ['he is going swimming', 'he is going to school', 'he is baking'], answer: 'he is going swimming', difficulty: 2 },
        { id: 'Y4-ENG-LY05-q6', type: 'short', prompt: 'Give one reason you might judge an information text as good.', answer: 'the facts are clear and true', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY06',
    title: 'Publishing with complex sentences',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Publishing is when your writing goes out into the world, so make it shine!',
        'Check your complex sentences, keep one tense throughout, swap tired words for sparkling synonyms, and fix the spelling.',
        'Visual features like headings, pictures and neat layout invite readers in.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: the publishing journey',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Plan' },
              { text: 'Draft with complex sentences' },
              { text: 'Edit: tense, synonyms, spelling' },
              { text: 'Publish with visual features' },
            ],
          },
        },
        {
          brief: 'Checks before you publish: sentences, synonyms, tense',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'check-box', label: 'complex sentences' },
              { icon: 'quill', label: 'synonyms' },
              { icon: 'eye', label: 'one tense' },
            ],
            caption: 'Checks before you publish',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY06-q1', type: 'mcq', prompt: 'A complex sentence contains...', options: ['a main clause and a dependent clause', 'only one word', 'only questions'], answer: 'a main clause and a dependent clause', difficulty: 2 },
        { id: 'Y4-ENG-LY06-q2', type: 'mcq', prompt: 'Before publishing, a good writer checks...', options: ['spelling and punctuation', 'the size of the paper', 'the colour of the chair'], answer: 'spelling and punctuation', difficulty: 1 },
        { id: 'Y4-ENG-LY06-q3', type: 'short', prompt: 'Replace "good" with a stronger synonym in "a good performance".', answer: 'brilliant', difficulty: 2 },
        { id: 'Y4-ENG-LY06-q4', type: 'mcq', prompt: 'Using synonyms when you publish helps you...', options: ['avoid repeating the same word', 'hide your meaning', 'write less'], answer: 'avoid repeating the same word', difficulty: 2 },
        { id: 'Y4-ENG-LY06-q5', type: 'mcq', prompt: 'Which visual feature can help a published text?', options: ['a clear heading', 'invisible ink', 'no pictures at all'], answer: 'a clear heading', difficulty: 1 },
        { id: 'Y4-ENG-LY06-q6', type: 'short', prompt: 'Name one thing to keep the same while writing a whole text.', answer: 'the tense', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY07',
    title: 'Structured oral presentations',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A structured presentation has a clear shape: a lively opening, key points in the middle, and a strong closing.',
        'Plan it, rehearse it out loud, then deliver it with a clear, steady voice and eyes on your audience.',
        'Use objective language to report facts and subjective language when you share your own opinion.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: the shape of a presentation',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Opening' },
              { text: 'Key points' },
              { text: 'Closing' },
            ],
          },
        },
        {
          brief: 'Ways to deliver: mic, timer and eye icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'mic', label: 'speak clearly' },
              { icon: 'timer', label: 'rehearse' },
              { icon: 'eye', label: 'look at the audience' },
            ],
            caption: 'Ways to deliver like a star',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY07-q1', type: 'mcq', prompt: 'A structured presentation begins with...', options: ['a clear opening', 'a long nap', 'the closing'], answer: 'a clear opening', difficulty: 1 },
        { id: 'Y4-ENG-LY07-q2', type: 'mcq', prompt: 'Rehearsing your presentation helps you...', options: ['speak more smoothly', 'forget your topic', 'talk faster forever'], answer: 'speak more smoothly', difficulty: 1 },
        { id: 'Y4-ENG-LY07-q3', type: 'short', prompt: 'Name the final part of a structured presentation.', answer: 'closing', difficulty: 2 },
        { id: 'Y4-ENG-LY07-q4', type: 'mcq', prompt: 'Speaking clearly and not too fast helps...', options: ['the audience understand', 'hide your ideas', 'confuse everyone'], answer: 'the audience understand', difficulty: 2 },
        { id: 'Y4-ENG-LY07-q5', type: 'mcq', prompt: 'In an informative talk, you mostly use...', options: ['objective language', 'shouting', 'secret codes'], answer: 'objective language', difficulty: 2 },
        { id: 'Y4-ENG-LY07-q6', type: 'short', prompt: 'Give one way to keep an audience interested.', answer: 'ask a question', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY08',
    title: 'Joined writing fluency',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Joined-up writing links letters into flowing words, but only when every letter is clear and the same size.',
        'Fluency means your hand flows without stopping, and automaticity means you stop thinking about forming letters and think about your ideas instead.',
        'Neat, even handwriting shows you care about your reader!',
      ],
      illustrations: [
        {
          brief: 'The three rules of joined writing: join, even size, legible',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'pen', label: 'join the letters' },
              { icon: 'ruler', label: 'even size' },
              { icon: 'check-box', label: 'legible & neat' },
            ],
            caption: 'The three rules of joined writing',
          },
        },
        {
          brief: 'Flowchart: becoming a fluent writer',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Form the letter' },
              { text: 'Join to the next' },
              { text: 'Keep the size even' },
              { text: 'Flow without stopping' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY08-q1', type: 'mcq', prompt: 'Joined letters should be...', options: ['clear and even in size', 'huge and wobbly', 'joined every fifth letter'], answer: 'clear and even in size', difficulty: 1 },
        { id: 'Y4-ENG-LY08-q2', type: 'mcq', prompt: 'Fluency in handwriting means...', options: ['writing smoothly without stopping', 'writing as fast as possible in scribbles', 'never writing'], answer: 'writing smoothly without stopping', difficulty: 2 },
        { id: 'Y4-ENG-LY08-q3', type: 'short', prompt: 'What should be the same for every letter you write?', answer: 'size', difficulty: 1 },
        { id: 'Y4-ENG-LY08-q4', type: 'mcq', prompt: 'Automaticity in writing means...', options: ['not thinking about each letter as you form it', 'thinking about each letter for ten seconds', 'typing on a phone'], answer: 'not thinking about each letter as you form it', difficulty: 3 },
        { id: 'Y4-ENG-LY08-q5', type: 'mcq', prompt: 'The best writing speed for neatness is...', options: ['steady and controlled', 'as fast as you can', 'glacial and tiny'], answer: 'steady and controlled', difficulty: 2 },
        { id: 'Y4-ENG-LY08-q6', type: 'short', prompt: 'Name one thing that makes handwriting easy to read.', answer: 'even spacing', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY09',
    title: 'Multisyllabic complex words',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big words are just small chunks joined together! Split them into syllables: mi-cro-scope, in-ter-est-ing.',
        'Sound out each chunk, look for familiar letter patterns, then blend the chunks back together.',
        'Suddenly those "tall" words become climbable mountains.',
      ],
      illustrations: [
        {
          brief: 'Dot array showing understand split into 3 syllables',
          ready: true,
          diagram: {
            kind: 'dot-array',
            rows: 1,
            cols: 3,
            label: 'un-der-stand = 3 syllables',
          },
        },
        {
          brief: 'Train of syllable chunks: mi-cro-scope',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'train-engine', label: 'mi-' },
              { icon: 'train-car', label: 'cro-' },
              { icon: 'train-car', label: 'scope' },
            ],
            caption: 'Chunk a long word into syllables',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY09-q1', type: 'mcq', prompt: 'How many syllables in "together"?', options: ['2', '3', '4'], answer: '3', difficulty: 1 },
        { id: 'Y4-ENG-LY09-q2', type: 'mcq', prompt: 'Butterfly split into syllables is...', options: ['but-ter-fly', 'butt-er-fl-y', 'bu-tterfly'], answer: 'but-ter-fly', difficulty: 1 },
        { id: 'Y4-ENG-LY09-q3', type: 'short', prompt: 'How many syllables in "elephant"?', answer: '3', difficulty: 2 },
        { id: 'Y4-ENG-LY09-q4', type: 'mcq', prompt: 'Which word has four syllables?', options: ['interesting', 'kangaroo', 'computer'], answer: 'interesting', difficulty: 2 },
        { id: 'Y4-ENG-LY09-q5', type: 'mcq', prompt: 'Unbelievable can be chunked as...', options: ['un-be-liev-a-ble', 'unbe-lieve-able', 'u-n-b-l'], answer: 'un-be-liev-a-ble', difficulty: 3 },
        { id: 'Y4-ENG-LY09-q6', type: 'short', prompt: 'Write "chocolate" in syllables.', answer: 'cho-co-late', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY10',
    title: 'Spelling complex words',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY10' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Spelling tricky words takes a plan! Look for letter patterns and double letters (beginning, swimming), and know your prefixes and suffixes.',
        'Suffix rules help: run + ing = running (double the n!), happy becomes happily (the y changes to i).',
        'Word families and word origins, like Greek and Latin roots, are spelling treasure maps.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: a spelling plan for tricky words',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Say the word' },
              { text: 'Chunk it into parts' },
              { text: 'Check base & suffix rule' },
              { text: 'Write and check' },
            ],
          },
        },
        {
          brief: 'Prefixes, suffix rules and word families icons',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'bolt', label: 're- = again' },
              { icon: 'check-box', label: 'swim + ing' },
              { icon: 'book', label: 'word families' },
            ],
            caption: 'Patterns, prefixes and suffix rules',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY10-q1', type: 'mcq', prompt: 'Which spelling is correct?', options: ['beginning', 'begining', 'begginning'], answer: 'beginning', difficulty: 2 },
        { id: 'Y4-ENG-LY10-q2', type: 'mcq', prompt: 'When adding -ing to "run", you...', options: ['double the n', 'drop the r', 'add a q'], answer: 'double the n', difficulty: 1 },
        { id: 'Y4-ENG-LY10-q3', type: 'short', prompt: 'Spell "swim + ing".', answer: 'swimming', difficulty: 2 },
        { id: 'Y4-ENG-LY10-q4', type: 'mcq', prompt: 'The prefix "re-" in "redo" means...', options: ['again', 'under', 'before'], answer: 'again', difficulty: 1 },
        { id: 'Y4-ENG-LY10-q5', type: 'mcq', prompt: 'Which is the correct spelling?', options: ['happily', 'happyly', 'hapiily'], answer: 'happily', difficulty: 2 },
        { id: 'Y4-ENG-LY10-q6', type: 'short', prompt: 'Add -ed to "jump" to make the past tense.', answer: 'jumped', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-ENG-LY11',
    title: 'High-frequency words & homophones',
    year: '4',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E4LY11' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Homophones sound the same but are spelled differently and mean different things, there, their and they\'re are famous triplets!',
        'The sentence gives you the clues: "Put it over there", "That is their hat", "They\'re coming now".',
        'Check the context and you will always pick the right twin.',
      ],
      illustrations: [
        {
          brief: 'there, their and they\'re in little scenes',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'house', label: 'their house' },
              { icon: 'arrow-right', label: 'over there' },
              { icon: 'smiley', label: 'they\'re here' },
            ],
            caption: 'their · there · they\'re',
          },
        },
        {
          brief: 'hear vs here scene',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'music-note', label: 'hear the tune' },
              { icon: 'map', label: 'here on the map' },
            ],
            caption: 'hear vs here',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-ENG-LY11-q1', type: 'mcq', prompt: 'Put the book over ___', options: ['there', 'their', 'they\'re'], answer: 'there', difficulty: 1 },
        { id: 'Y4-ENG-LY11-q2', type: 'mcq', prompt: '___ coming to dinner at six.', options: ['They\'re', 'There', 'Their'], answer: 'They\'re', difficulty: 1 },
        { id: 'Y4-ENG-LY11-q3', type: 'short', prompt: 'Which word: "I can ___ the music playing." (hear / here)', answer: 'hear', difficulty: 1 },
        { id: 'Y4-ENG-LY11-q4', type: 'mcq', prompt: 'The dog wagged ___ tail.', options: ['its', 'it\'s', 'its\''], answer: 'its', difficulty: 2 },
        { id: 'Y4-ENG-LY11-q5', type: 'mcq', prompt: 'I ate ___ much cake!', options: ['too', 'to', 'two'], answer: 'too', difficulty: 1 },
        { id: 'Y4-ENG-LY11-q6', type: 'short', prompt: 'Choose the right word: "___ are twenty students in class." (There / Their / They\'re)', answer: 'There', difficulty: 2 },
      ],
    },
  },
];
