import type { Topic } from '../../types/curriculum';

/**
 * Year 3 English, full topic bank.
 * Scope mirrors the Australian Curriculum v9.0 content descriptions for
 * Year 3 (AC9E3xxx), strands Language / Literature / Literacy. Every topic
 * carries its ACARA code and a rendered `diagram` per illustration slot
 * (see src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR3_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (11 CDs) ----------
  {
    id: 'Y3-ENG-LA01',
    title: 'Social conventions & turn-taking',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'When we talk with friends, we take turns, one person speaks, then waits, then the next person speaks. This is a social convention, an unwritten rule that helps conversations work.',
        'Turn-taking changes with the situation. In a chat with a mate you can jump in quickly, but in a formal discussion you wait for your turn and speak politely.',
        'Good listeners wait, look and then share, that is how teamwork grows.',
      ],
      illustrations: [
        { brief: 'The flow of a polite conversation: listen, wait, share, let others have a turn', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Listen carefully' }, { text: 'Wait for your turn' }, { text: 'Share your idea' }, { text: 'Let someone else have a turn' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA01-q1', type: 'mcq', prompt: 'What is turn-taking in a conversation?', options: ['Speaking at the same time as everyone', 'Speaking one at a time and waiting your turn', 'Never talking at all', 'Only the teacher talks'], answer: 'Speaking one at a time and waiting your turn', difficulty: 1 },
        { id: 'Y3-ENG-LA01-q2', type: 'mcq', prompt: 'Which action shows good turn-taking?', options: ['Shouting over a friend', 'Interrupting to give the answer', 'Waiting until the speaker finishes', 'Talking while someone reads'], answer: 'Waiting until the speaker finishes', difficulty: 1 },
        { id: 'Y3-ENG-LA01-q3', type: 'mcq', prompt: 'In a formal discussion, how do you get a turn to speak?', options: ['Call out the answer', 'Wave and shout', 'Raise your hand and wait to be asked', 'Stand on the chair'], answer: 'Raise your hand and wait to be asked', difficulty: 2 },
        { id: 'Y3-ENG-LA01-q4', type: 'mcq', prompt: 'Which conversation is more formal?', options: ['Chatting with a friend at lunch', 'Talking with the principal at assembly', 'Whispering in the playground', 'Laughing in the hallway'], answer: 'Talking with the principal at assembly', difficulty: 1 },
        { id: 'Y3-ENG-LA01-q5', type: 'mcq', prompt: 'Why do we take turns when talking?', options: ['So everyone gets a chance to share and be heard', 'To make the talking longer', 'Because the teacher says so', 'To practise writing'], answer: 'So everyone gets a chance to share and be heard', difficulty: 1 },
        { id: 'Y3-ENG-LA01-q6', type: 'short', prompt: 'What is the term for the unwritten rules of behaviour, like taking turns, that help a group work together?', answer: 'social conventions', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA02',
    title: 'Evaluation & emotion language (modal verbs)',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Modal verbs are helper words that show how strong or weak a message is: "must" is strong, "should" is medium, and "could" or "might" are gentle.',
        'Choosing the right modal changes how forceful we sound. "You must go" is a rule, while "You could go" is just a suggestion.',
        'Using modal verbs well helps us share opinions politely and say how sure we feel.',
      ],
      illustrations: [
        { brief: 'Modal verbs on a force scale: must (strong), should (medium), could (gentle)', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bolt', label: 'must, strong' }, { icon: 'sun', label: 'should, medium' }, { icon: 'wind', label: 'could, gentle' }], caption: 'Modal verbs change how forceful a message sounds.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA02-q1', type: 'mcq', prompt: 'Which modal verb sounds the most forceful?', options: ['must', 'should', 'could', 'might'], answer: 'must', difficulty: 1 },
        { id: 'Y3-ENG-LA02-q2', type: 'mcq', prompt: 'Which modal verb is the gentlest suggestion?', options: ['could', 'should', 'must', 'shall'], answer: 'could', difficulty: 1 },
        { id: 'Y3-ENG-LA02-q3', type: 'mcq', prompt: 'Which sentence sounds like a firm rule?', options: ['You could tidy your room.', 'You might tidy your room.', 'You must tidy your room.', 'You may tidy your room.'], answer: 'You must tidy your room.', difficulty: 1 },
        { id: 'Y3-ENG-LA02-q4', type: 'mcq', prompt: '"You should wear a hat." This sentence is best described as...', options: ['a strong order', 'a firm piece of advice', 'a wild guess', 'a question'], answer: 'a firm piece of advice', difficulty: 2 },
        { id: 'Y3-ENG-LA02-q5', type: 'mcq', prompt: 'Which sentence uses a modal verb to make a gentle offer?', options: ['You will come with me.', 'You must come with me.', 'You could come with me if you like.', 'You are coming with me.'], answer: 'You could come with me if you like.', difficulty: 2 },
        { id: 'Y3-ENG-LA02-q6', type: 'short', prompt: 'Fill the gap with the strong modal verb: "You ___ wear your helmet, it is the law."', answer: 'must', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA03',
    title: 'Language features for purpose',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Writers pick language features to match their purpose. A report uses headings and facts, a recipe uses numbered steps, and an advertisement uses bold words and exciting questions.',
        'When you know the purpose, to inform, persuade or entertain, you know which features to look for.',
        'Spotting features like captions, bullet points and labels helps you read faster and understand more.',
      ],
      illustrations: [
        { brief: 'Three text types with the features that match their purpose', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: 'report, headings & facts' }, { icon: 'clipboard', label: 'recipe, numbered steps' }, { icon: 'price-tag', label: 'advert, bold words' }], caption: 'Features match the purpose.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA03-q1', type: 'mcq', prompt: 'A book about koalas uses headings and captions. Its main purpose is to...', options: ['entertain', 'inform', 'persuade', 'confuse'], answer: 'inform', difficulty: 1 },
        { id: 'Y3-ENG-LA03-q2', type: 'mcq', prompt: 'An advertisement uses bold words and exciting questions to...', options: ['make you buy or choose something', 'teach you a fact', 'tell a funny story', 'give directions'], answer: 'make you buy or choose something', difficulty: 1 },
        { id: 'Y3-ENG-LA03-q3', type: 'mcq', prompt: 'Numbered steps are a feature you would most likely find in a...', options: ['fairy tale', 'recipe', 'poster', 'poem'], answer: 'recipe', difficulty: 1 },
        { id: 'Y3-ENG-LA03-q4', type: 'mcq', prompt: 'Bullet points help a reader by...', options: ['listing ideas clearly', 'hiding the main point', 'making the text longer', 'rhyming words'], answer: 'listing ideas clearly', difficulty: 2 },
        { id: 'Y3-ENG-LA03-q5', type: 'mcq', prompt: 'Which feature best matches the purpose of persuading?', options: ['a list of facts with dates', 'strong words like "best" and "must-have"', 'a quiet description of a tree', 'a set of map labels'], answer: 'strong words like "best" and "must-have"', difficulty: 2 },
        { id: 'Y3-ENG-LA03-q6', type: 'short', prompt: 'What is the main purpose of a text that uses facts and headings, like an encyclopedia page?', answer: 'to inform', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA04',
    title: 'Paragraphs',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A paragraph is a group of sentences all about one main idea. When the idea changes, you start a new paragraph.',
        'Paragraphs are like little teams, each team holds sentences that belong together, which makes our writing clear and easy to read.',
        'Writers start a new paragraph for a new idea, a new person talking, or a new time or place.',
      ],
      illustrations: [
        { brief: 'Three boxes each holding one paragraph with its own main idea', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: 'Paragraph 1: the dog' }, { icon: 'box', label: 'Paragraph 2: the park' }, { icon: 'box', label: 'Paragraph 3: the walk home' }], caption: 'Each paragraph holds one main idea.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA04-q1', type: 'mcq', prompt: 'What is a paragraph?', options: ['one long sentence', 'a group of sentences about one main idea', 'a list of spelling words', 'the title of a story'], answer: 'a group of sentences about one main idea', difficulty: 1 },
        { id: 'Y3-ENG-LA04-q2', type: 'mcq', prompt: 'When should you start a new paragraph?', options: ['after every word', 'when you begin a new main idea', 'never', 'only at the end'], answer: 'when you begin a new main idea', difficulty: 1 },
        { id: 'Y3-ENG-LA04-q3', type: 'mcq', prompt: 'Read: "My dog is playful. He loves chasing balls. On Sunday we went to the beach." Where should a new paragraph start?', options: ['after "playful"', 'after "balls"', 'after "Sunday"', 'never'], answer: 'after "balls"', difficulty: 3 },
        { id: 'Y3-ENG-LA04-q4', type: 'mcq', prompt: 'Paragraphs make writing easier to read because they...', options: ['group related ideas together', 'mix up the ideas', 'use the same word everywhere', 'hide the main idea'], answer: 'group related ideas together', difficulty: 1 },
        { id: 'Y3-ENG-LA04-q5', type: 'mcq', prompt: 'Which group of sentences could be one paragraph?', options: ['All about a puppy\u2019s tricks.', 'One sentence about a dog, one about pizza, one about a rocket.', 'Words sorted alphabetically.', 'A list of names.'], answer: 'All about a puppy\u2019s tricks.', difficulty: 2 },
        { id: 'Y3-ENG-LA04-q6', type: 'short', prompt: 'Finish the sentence: "I start a new paragraph when I write about a new ___."', answer: 'idea', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA05',
    title: 'Layout & navigation',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Layout is how a text is arranged on a page or screen. Headings, labels and menus help us find our way around like signposts.',
        'Digital texts use navigation tools, menus, buttons, search boxes and links, so readers can jump straight to what they need.',
        'Words like "next", "back" and "home" are part of navigation too.',
      ],
      illustrations: [
        { brief: 'A reader following the signposts of a text: heading, menu, then jump to the page', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Read the heading' }, { text: 'Check the menu or contents' }, { text: 'Jump to the section you need' }, { text: 'Found it!' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA05-q1', type: 'mcq', prompt: 'What is the purpose of a heading?', options: ['to tell what the section is about', 'to make the text longer', 'to hide the topic', 'to list facts'], answer: 'to tell what the section is about', difficulty: 1 },
        { id: 'Y3-ENG-LA05-q2', type: 'mcq', prompt: 'In a digital book, where would you look to jump straight to a chapter?', options: ['the title', 'the menu or contents', 'the back cover', 'a picture'], answer: 'the menu or contents', difficulty: 1 },
        { id: 'Y3-ENG-LA05-q3', type: 'mcq', prompt: 'Which feature names a part of a diagram, like the "stem" on a plant diagram?', options: ['caption', 'label', 'heading', 'menu'], answer: 'label', difficulty: 2 },
        { id: 'Y3-ENG-LA05-q4', type: 'mcq', prompt: 'The words "next", "back" and "home" on a website are called...', options: ['navigation words', 'spelling words', 'adjectives', 'verbs'], answer: 'navigation words', difficulty: 2 },
        { id: 'Y3-ENG-LA05-q5', type: 'mcq', prompt: 'Where would you find a list of all the chapters and their page numbers in a print book?', options: ['the contents page', 'the cover', 'a picture', 'the last word'], answer: 'the contents page', difficulty: 1 },
        { id: 'Y3-ENG-LA05-q6', type: 'short', prompt: 'What feature at the top of a section tells you what that section is about?', answer: 'heading', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA06',
    title: 'Subject & verb agreement',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA06' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'The subject of a sentence is who or what is doing the action. The verb is the action word. They must agree, a singular subject needs a singular verb, and a plural subject needs a plural verb.',
        '"The dog barks" is correct, but "The dogs barks" is not, the dogs (plural) need "bark".',
        'Checking that the subject and verb agree makes our sentences sound right.',
      ],
      illustrations: [
        { brief: 'A dog barks and dogs bark, showing the subject and verb matching', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: 'The dog barks' }, { icon: 'paw', label: 'The dogs bark' }], caption: 'Match the subject and verb.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA06-q1', type: 'mcq', prompt: 'Which sentence is correct?', options: ['The dog barks loudly.', 'The dog bark loudly.', 'The dogs barks loudly.', 'The dog barking loudly.'], answer: 'The dog barks loudly.', difficulty: 1 },
        { id: 'Y3-ENG-LA06-q2', type: 'mcq', prompt: 'Which sentence is correct?', options: ['The birds flies away.', 'The birds fly away.', 'The bird fly away.', 'The birds flying away.'], answer: 'The birds fly away.', difficulty: 1 },
        { id: 'Y3-ENG-LA06-q3', type: 'mcq', prompt: 'Choose the correct verb: "My sister ___ to music."', options: ['dance', 'dances', 'dancing', 'danced'], answer: 'dances', difficulty: 1 },
        { id: 'Y3-ENG-LA06-q4', type: 'mcq', prompt: 'Choose the correct verb: "The children ___ in the pool."', options: ['swims', 'swimming', 'swim', 'swimmed'], answer: 'swim', difficulty: 1 },
        { id: 'Y3-ENG-LA06-q5', type: 'mcq', prompt: 'Which word makes this sentence correct? "The stars ___ in the night sky."', options: ['shines', 'shining', 'shine', 'shoned'], answer: 'shine', difficulty: 2 },
        { id: 'Y3-ENG-LA06-q6', type: 'short', prompt: 'Fill the gap: "The cats ___ on the mat." (sit or sits)', answer: 'sit', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA07',
    title: 'Verbs: doing, feeling, thinking, saying, relating',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA07' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Verbs are doing words, but they do more than one job. Some verbs are about doing (run, build), feeling (love, worry), thinking (think, wonder), or saying (say, whisper).',
        'Relating verbs like "is", "are", "have" and "seem" link ideas together, like "The sky is blue" or "I have a pet".',
        'Naming the type of verb helps us understand what is really happening in a sentence.',
      ],
      illustrations: [
        { brief: 'Five verbs doing different jobs: doing, feeling, thinking, saying, relating', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'runner', label: 'doing, run' }, { icon: 'smiley', label: 'feeling, love' }, { icon: 'brain', label: 'thinking, wonder' }, { icon: 'chat-bubble', label: 'saying, whisper' }, { icon: 'link', label: 'relating, is' }], caption: 'Verbs do different jobs.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA07-q1', type: 'mcq', prompt: 'Which word is a doing verb?', options: ['run', 'happy', 'blue', 'slowly'], answer: 'run', difficulty: 1 },
        { id: 'Y3-ENG-LA07-q2', type: 'mcq', prompt: '"Mia wondered why the sky is blue." The word "wondered" is a ___ verb.', options: ['thinking', 'doing', 'relating', 'saying'], answer: 'thinking', difficulty: 2 },
        { id: 'Y3-ENG-LA07-q3', type: 'mcq', prompt: 'Which verb shows feeling?', options: ['climb', 'adore', 'jump', 'write'], answer: 'adore', difficulty: 1 },
        { id: 'Y3-ENG-LA07-q4', type: 'mcq', prompt: '"Dad whispered the secret." The verb "whispered" is a ___ verb.', options: ['saying', 'doing', 'thinking', 'relating'], answer: 'saying', difficulty: 2 },
        { id: 'Y3-ENG-LA07-q5', type: 'mcq', prompt: 'Which sentence uses a relating verb?', options: ['The dog ran fast.', 'The sky is blue.', 'Ben shouted loudly.', 'Anna thought quietly.'], answer: 'The sky is blue.', difficulty: 3 },
        { id: 'Y3-ENG-LA07-q6', type: 'short', prompt: 'Write the verb in this sentence: "I have a red bike."', answer: 'have', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA08',
    title: 'Verb tense',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA08' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Verb tense anchors a sentence in time. Past tense happened already (walked), present tense is happening now (walks), and future tense is still to come (will walk).',
        'Staying in one tense keeps a story clear, if we jump between "ran" and "will run", readers get lost.',
        'Signal words help: yesterday (past), today (present), tomorrow (future).',
      ],
      illustrations: [
        { brief: 'A time line from yesterday to tomorrow with the matching verb tense', ready: true, diagram: { kind: 'number-line', min: 0, max: 2, marks: [{ value: 0, label: 'yesterday, walked' }, { value: 1, label: 'today, walk' }, { value: 2, label: 'tomorrow, will walk' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA08-q1', type: 'mcq', prompt: 'Which word is in the past tense?', options: ['walked', 'walks', 'will walk', 'walking'], answer: 'walked', difficulty: 1 },
        { id: 'Y3-ENG-LA08-q2', type: 'mcq', prompt: '"Tomorrow we ___ to the beach." Which verb makes the future tense?', options: ['went', 'go', 'will go', 'going'], answer: 'will go', difficulty: 1 },
        { id: 'Y3-ENG-LA08-q3', type: 'mcq', prompt: 'Which sentence is in the present tense?', options: ['She played the piano.', 'She plays the piano.', 'She will play the piano.', 'She played a game.'], answer: 'She plays the piano.', difficulty: 1 },
        { id: 'Y3-ENG-LA08-q4', type: 'mcq', prompt: 'Change to past tense: "I eat an apple."', options: ['I eat an apple.', 'I ate an apple.', 'I will eat an apple.', 'I am eating an apple.'], answer: 'I ate an apple.', difficulty: 2 },
        { id: 'Y3-ENG-LA08-q5', type: 'mcq', prompt: 'Which sentence is in the future tense?', options: ['We visited Grandma.', 'We visit Grandma.', 'We will visit Grandma.', 'We visited the park.'], answer: 'We will visit Grandma.', difficulty: 1 },
        { id: 'Y3-ENG-LA08-q6', type: 'short', prompt: 'Write the past tense of "jump".', answer: 'jumped', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA09',
    title: 'Images extend meaning',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA09' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Images do more than decorate a page, they add meaning the words alone cannot give. A picture can show a character\u2019s feelings, a setting detail, or a clue about what happens next.',
        'Words might say "it was a quiet street" while the picture shows dark shadows and a worried face, the image deepens the mood.',
        'Writers and illustrators work together so words and pictures tell one richer story.',
      ],
      illustrations: [
        { brief: 'The words say "a quiet street" while the picture shows dark shadows and a worried face', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'the words say "a quiet street"' }, { icon: 'eye', label: 'the picture shows dark shadows' }], caption: 'Images add meaning beyond the words.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA09-q1', type: 'mcq', prompt: 'A picture can add meaning by showing...', options: ['a character\u2019s feelings', 'only the page number', 'nothing at all', 'just decoration'], answer: 'a character\u2019s feelings', difficulty: 1 },
        { id: 'Y3-ENG-LA09-q2', type: 'mcq', prompt: 'The words say "It was a happy day" but the picture shows dark clouds. The image tells us...', options: ['the day may turn gloomy', 'the day is sunny', 'nothing new', 'the page is wet'], answer: 'the day may turn gloomy', difficulty: 2 },
        { id: 'Y3-ENG-LA09-q3', type: 'mcq', prompt: 'Why do illustrators add details like a pet in the background?', options: ['to add extra meaning for the reader', 'to fill empty space', 'to make reading harder', 'because they have to'], answer: 'to add extra meaning for the reader', difficulty: 2 },
        { id: 'Y3-ENG-LA09-q4', type: 'mcq', prompt: 'An image of a character holding a teddy bear tightly might suggest they feel...', options: ['brave', 'scared or nervous', 'bored', 'hungry'], answer: 'scared or nervous', difficulty: 2 },
        { id: 'Y3-ENG-LA09-q5', type: 'mcq', prompt: 'Words say "the garden was full of life" and the picture shows bees, flowers and birds. The image...', options: ['adds detail to help us picture the garden', 'changes the meaning completely', 'shows a different place', 'has no effect'], answer: 'adds detail to help us picture the garden', difficulty: 2 },
        { id: 'Y3-ENG-LA09-q6', type: 'short', prompt: 'What can an illustration show that words might leave out? (A picture can add extra ___ to a story.)', answer: 'meaning', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA10',
    title: 'Topic & technical vocabulary; multiple meanings',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA10' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Many words have more than one meaning. "Trunk" can be the stem of a tree or the storage space in a car; "light" can be a lamp or the opposite of heavy.',
        'The sentence around the word tells you which meaning is right. "Turn on the light" and "the box is light" use the same word in different ways.',
        'Topic and technical words have special jobs, in a science report, words like "evaporation" and "habitat" carry exact meaning.',
      ],
      illustrations: [
        { brief: 'One word, two meanings: the trunk of a tree and the trunk of a car', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'tree', label: 'tree trunk' }, { icon: 'suitcase', label: 'car trunk' }], caption: 'One word, two meanings.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA10-q1', type: 'mcq', prompt: '"The elephant\u2019s trunk is long." Here "trunk" means...', options: ['the elephant\u2019s nose', 'a car part', 'a suitcase', 'a tree stem'], answer: 'the elephant\u2019s nose', difficulty: 1 },
        { id: 'Y3-ENG-LA10-q2', type: 'mcq', prompt: '"Put the bag in the trunk." Here "trunk" means...', options: ['the storage space in a car', 'an elephant\u2019s nose', 'a tree stem', 'a river bank'], answer: 'the storage space in a car', difficulty: 1 },
        { id: 'Y3-ENG-LA10-q3', type: 'mcq', prompt: 'Which word has a different meaning in "The bat flew at night" and "Swing the bat"?', options: ['bat', 'flew', 'night', 'swing'], answer: 'bat', difficulty: 1 },
        { id: 'Y3-ENG-LA10-q4', type: 'mcq', prompt: 'In a science text, a word like "habitat" is called...', options: ['technical vocabulary', 'a rhyming word', 'an action verb', 'a connecting word'], answer: 'technical vocabulary', difficulty: 2 },
        { id: 'Y3-ENG-LA10-q5', type: 'mcq', prompt: '"The rock star sang" and "The star twinkled." The word "star" means...', options: ['a famous singer in the first, a bright dot in the sky in the second', 'the same thing both times', 'a planet both times', 'an animal both times'], answer: 'a famous singer in the first, a bright dot in the sky in the second', difficulty: 3 },
        { id: 'Y3-ENG-LA10-q6', type: 'short', prompt: 'In the sentence "Turn off the light", what does "light" mean, a lamp or the opposite of heavy?', answer: 'a lamp', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LA11',
    title: 'Apostrophes: contractions & possession',
    year: '3',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E3LA11' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Apostrophes have two important jobs. They show where letters are missing in contractions: "do not" becomes "don\u2019t" and "I am" becomes "I\u2019m".',
        'Apostrophes also show possession, who owns something. "Sam\u2019s hat" is the hat that belongs to Sam.',
        'For more than one owner, the apostrophe goes after the s: "the girls\u2019 hats" belongs to many girls.',
      ],
      illustrations: [
        { brief: 'A contraction losing letters and a possession showing who owns the hat', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: 'don\u2019t = do not' }, { icon: 'envelope', label: 'Sam\u2019s hat' }], caption: 'Apostrophes show missing letters or possession.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LA11-q1', type: 'mcq', prompt: 'Which is the contraction of "do not"?', options: ['don\u2019t', 'dont', 'do\u2019nt', 'donot'], answer: 'don\u2019t', difficulty: 1 },
        { id: 'Y3-ENG-LA11-q2', type: 'mcq', prompt: 'In "Sam\u2019s hat", the apostrophe shows...', options: ['possession (the hat belongs to Sam)', 'a missing letter', 'a new paragraph', 'a question'], answer: 'possession (the hat belongs to Sam)', difficulty: 1 },
        { id: 'Y3-ENG-LA11-q3', type: 'mcq', prompt: '"The girls\u2019 hats" means...', options: ['hats belonging to more than one girl', 'one girl\u2019s hat', 'a hat named Girls', 'hats with no owner'], answer: 'hats belonging to more than one girl', difficulty: 3 },
        { id: 'Y3-ENG-LA11-q4', type: 'mcq', prompt: 'Which sentence is correct?', options: ['It\u2019s my turn now.', 'Its my turn now.', 'Its\u2019 my turn now.', 'Itts my turn now.'], answer: 'It\u2019s my turn now.', difficulty: 2 },
        { id: 'Y3-ENG-LA11-q5', type: 'short', prompt: 'Write the contraction of "I will".', answer: 'I\u2019ll', difficulty: 1 },
        { id: 'Y3-ENG-LA11-q6', type: 'short', prompt: 'Add the apostrophe to show the book belongs to one teacher: "the ___ book".', answer: 'teacher\u2019s', difficulty: 2 },
      ],
    },
  },

  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y3-ENG-LE01',
    title: 'Characters, events, settings in context',
    year: '3',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E3LE01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Stories grow from the place and people who tell them. We can discuss characters, events and settings in books by First Nations Australian authors and by writers from all over the world.',
        'Setting helps us understand characters, a character in a desert story faces different challenges than one in a rainforest story.',
        'We read with respect and curiosity, noticing how culture, country and tradition shape each story.',
      ],
      illustrations: [
        { brief: 'Stories from Country and from around the world, showing how setting shapes them', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'world authors' }, { icon: 'map', label: 'Country & culture' }], caption: 'Stories grow from place and culture.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LE01-q1', type: 'mcq', prompt: 'The setting of a story is...', options: ['where and when the story happens', 'who is in the story', 'what happens in the story', 'the moral of the story'], answer: 'where and when the story happens', difficulty: 1 },
        { id: 'Y3-ENG-LE01-q2', type: 'mcq', prompt: 'A character who must cross a hot, dry desert faces challenges about...', options: ['finding water', 'building a snowman', 'sailing a ship', 'reading a map of the city'], answer: 'finding water', difficulty: 2 },
        { id: 'Y3-ENG-LE01-q3', type: 'mcq', prompt: 'When reading a story by an author from another country, we should...', options: ['read with respect and curiosity', 'laugh at the differences', 'say it is wrong', 'only look at the pictures'], answer: 'read with respect and curiosity', difficulty: 1 },
        { id: 'Y3-ENG-LE01-q4', type: 'mcq', prompt: 'First Nations Australian stories are often connected to...', options: ['Country and the land', 'only city streets', 'other planets', 'computer games'], answer: 'Country and the land', difficulty: 2 },
        { id: 'Y3-ENG-LE01-q5', type: 'mcq', prompt: 'Which question helps you think about the setting of a story?', options: ['Where and when does this story happen?', 'How many words are on the page?', 'Who printed the book?', 'What is the author\u2019s address?'], answer: 'Where and when does this story happen?', difficulty: 1 },
        { id: 'Y3-ENG-LE01-q6', type: 'short', prompt: 'What do we call the person who writes a story?', answer: 'author', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LE02',
    title: 'Connections to character experiences',
    year: '3',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E3LE02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Great readers connect what happens to characters with their own lives. "The character felt nervous on her first day, I felt that way too!"',
        'Sharing these connections helps us understand characters better and enjoy stories more.',
        'We can also compare characters with each other or with people we know.',
      ],
      illustrations: [
        { brief: 'A character and the reader linked by a shared feeling', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'the character' }, { icon: 'arrow-right', label: 'connects to' }, { icon: 'smiley', label: 'my own experience' }], caption: 'Character experiences can connect to ours.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LE02-q1', type: 'mcq', prompt: 'When you connect a character\u2019s feelings to your own, you...', options: ['understand the character better', 'forget the story', 'skip the reading', 'change the author'], answer: 'understand the character better', difficulty: 1 },
        { id: 'Y3-ENG-LE02-q2', type: 'mcq', prompt: 'The character missed her old school. You felt the same way when you moved. This is a...', options: ['connection to the character', 'spelling mistake', 'new setting', 'rhyme'], answer: 'connection to the character', difficulty: 2 },
        { id: 'Y3-ENG-LE02-q3', type: 'mcq', prompt: 'Connecting your own experiences to a story helps you...', options: ['care more about what happens', 'read faster only', 'memorise every word', 'draw better'], answer: 'care more about what happens', difficulty: 1 },
        { id: 'Y3-ENG-LE02-q4', type: 'mcq', prompt: 'Which sentence shows a personal connection?', options: ['"The character was brave, and I was brave when I spoke in assembly."', '"The character was brave."', '"Brave starts with B."', '"Bravery is a noun."'], answer: '"The character was brave, and I was brave when I spoke in assembly."', difficulty: 2 },
        { id: 'Y3-ENG-LE02-q5', type: 'mcq', prompt: 'After reading, sharing your connection with a partner helps you...', options: ['think more deeply about the story', 'finish the book faster', 'practise spelling', 'count the pages'], answer: 'think more deeply about the story', difficulty: 2 },
        { id: 'Y3-ENG-LE02-q6', type: 'short', prompt: 'What do we call it when you link a character\u2019s experience to your own life?', answer: 'a connection', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LE03',
    title: 'Author language & mood',
    year: '3',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E3LE03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Authors choose words and pictures carefully to make readers feel a certain mood. "The sun sparkled" feels happy; "the dark cave echoed" feels scary.',
        'Words like shimmered, crept and howled create strong feelings in the reader.',
        'Noticing an author\u2019s word choices helps us understand how the story makes us feel and why.',
      ],
      illustrations: [
        { brief: 'Two moods side by side: a happy sparkly scene and a scary dark cave', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'happy, "sun sparkled"' }, { icon: 'raincloud', label: 'scary, "dark cave echoed"' }], caption: 'Word choices create mood.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LE03-q1', type: 'mcq', prompt: '"The gentle breeze whispered through the trees." This sentence creates a...', options: ['calm, peaceful mood', 'scary mood', 'angry mood', 'boring mood'], answer: 'calm, peaceful mood', difficulty: 1 },
        { id: 'Y3-ENG-LE03-q2', type: 'mcq', prompt: 'Which word helps create a scary mood?', options: ['howled', 'smiled', 'sparkled', 'sang'], answer: 'howled', difficulty: 1 },
        { id: 'Y3-ENG-LE03-q3', type: 'mcq', prompt: '"The puppy tumbled happily in the sunshine." The mood is...', options: ['joyful', 'gloomy', 'frightening', 'sad'], answer: 'joyful', difficulty: 1 },
        { id: 'Y3-ENG-LE03-q4', type: 'mcq', prompt: 'An author writes "The old house groaned in the storm." The word "groaned" makes the house seem...', options: ['alive and eerie', 'soft and fluffy', 'tiny and light', 'wet and cold'], answer: 'alive and eerie', difficulty: 3 },
        { id: 'Y3-ENG-LE03-q5', type: 'mcq', prompt: 'Which pair of words would best create a happy mood?', options: ['sparkled, giggled', 'creaked, shadowy', 'howled, storm', 'cold, lonely'], answer: 'sparkled, giggled', difficulty: 2 },
        { id: 'Y3-ENG-LE03-q6', type: 'short', prompt: 'Write one word that creates a happy mood to fill the gap: "The garden glowed in the warm ___." (sun or sunshine)', answer: 'sunshine', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LE04',
    title: 'Literary devices: rhythm & onomatopoeia',
    year: '3',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E3LE04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Poets use rhythm, a steady beat of strong and soft sounds, so their poems feel musical when read aloud.',
        'Onomatopoeia is a word that sounds like the noise it names: buzz, splash, crash, pop. Writers use it to bring sound to life on the page.',
        'Listen for rhythm and sound words the next time you read a poem or a story, the words are playing a game with your ears!',
      ],
      illustrations: [
        { brief: 'Rhythm as a beat and onomatopoeia words that sound like their noises', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: 'rhythm, the beat' }, { icon: 'burst', label: 'onomatopoeia, crash!' }], caption: 'Rhythm and sound words bring writing to life.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LE04-q1', type: 'mcq', prompt: 'Which word is onomatopoeia (it sounds like the noise it makes)?', options: ['buzz', 'table', 'gently', 'mountain'], answer: 'buzz', difficulty: 1 },
        { id: 'Y3-ENG-LE04-q2', type: 'mcq', prompt: 'Rhythm in a poem is...', options: ['the beat made by strong and soft sounds', 'the way words are spelled', 'the title of the poem', 'the shape of the letters'], answer: 'the beat made by strong and soft sounds', difficulty: 3 },
        { id: 'Y3-ENG-LE04-q3', type: 'mcq', prompt: '"The rain went drip, drop on the roof." The words "drip" and "drop" are examples of...', options: ['onomatopoeia', 'rhythm only', 'rhyming', 'silent letters'], answer: 'onomatopoeia', difficulty: 1 },
        { id: 'Y3-ENG-LE04-q4', type: 'mcq', prompt: 'Which sentence uses onomatopoeia?', options: ['The bee buzzed past my ear.', 'The bee was small.', 'The bee flew quickly.', 'I saw a bee.'], answer: 'The bee buzzed past my ear.', difficulty: 1 },
        { id: 'Y3-ENG-LE04-q5', type: 'mcq', prompt: 'Reading a poem with strong rhythm aloud makes the poem feel...', options: ['musical and lively', 'heavy and slow only', 'impossible to read', 'like a list'], answer: 'musical and lively', difficulty: 2 },
        { id: 'Y3-ENG-LE04-q6', type: 'short', prompt: 'Write the onomatopoeia word for the sound a balloon makes when it bursts: ___!', answer: 'pop', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LE05',
    title: 'Creating imaginative texts',
    year: '3',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E3LE05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When we write imaginative texts, we become authors! We choose characters, a setting, a problem and how the story is solved.',
        'We can borrow and adapt language features we love, exciting verbs, sound words, and a problem that keeps readers turning pages.',
        'After writing, authors edit to make the story clearer and more exciting before sharing it.',
      ],
      illustrations: [
        { brief: 'The steps for building an imaginative story from characters to editing', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Choose your characters' }, { text: 'Choose a setting' }, { text: 'Add a problem' }, { text: 'Resolve it' }, { text: 'Edit and share' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LE05-q1', type: 'mcq', prompt: 'Which of these belongs in an imaginative story?', options: ['a problem to solve', 'a list of facts about animals', 'a recipe', 'a bus timetable'], answer: 'a problem to solve', difficulty: 1 },
        { id: 'Y3-ENG-LE05-q2', type: 'mcq', prompt: 'The setting of an imaginative story tells us...', options: ['where and when it happens', 'who is in it', 'the problem only', 'the ending only'], answer: 'where and when it happens', difficulty: 1 },
        { id: 'Y3-ENG-LE05-q3', type: 'mcq', prompt: 'To make your story exciting, you could...', options: ['use a big problem and an interesting character', 'write only one word', 'copy a dictionary', 'list your ideas without a story'], answer: 'use a big problem and an interesting character', difficulty: 1 },
        { id: 'Y3-ENG-LE05-q4', type: 'mcq', prompt: '"The dragon sneezed a shower of sparks." This sentence is imaginative because it...', options: ['creates a picture in the reader\u2019s mind', 'lists facts', 'gives directions', 'is a real event'], answer: 'creates a picture in the reader\u2019s mind', difficulty: 2 },
        { id: 'Y3-ENG-LE05-q5', type: 'mcq', prompt: 'Editing your story means...', options: ['checking and improving it', 'writing it faster', 'reading someone else\u2019s book', 'starting a new topic'], answer: 'checking and improving it', difficulty: 1 },
        { id: 'Y3-ENG-LE05-q6', type: 'short', prompt: 'In one or two words, what is the problem in a story called that the characters must solve?', answer: 'a complication', difficulty: 2 },
      ],
    },
  },

  // ---------- Literacy (12 CDs) ----------
  {
    id: 'Y3-ENG-LY01',
    title: 'Same purpose, different audiences',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A text can have the same purpose but different audiences. An email to your best friend and a letter to your principal both ask for a day off, but they sound very different!',
        'We change our words and tone to suit the audience, casual and friendly for a mate, polite and careful for an adult we respect.',
        'Thinking about who will read your text helps you choose the right language.',
      ],
      illustrations: [
        { brief: 'The same message written for a friend and for the principal', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: 'email to a friend, "hey!"' }, { icon: 'envelope', label: 'letter to the principal, "Dear Ms Ali"' }], caption: 'Same message, different audience.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY01-q1', type: 'mcq', prompt: 'The audience of a text is...', options: ['who it is written for', 'who wrote it', 'where it was printed', 'how long it is'], answer: 'who it is written for', difficulty: 1 },
        { id: 'Y3-ENG-LY01-q2', type: 'mcq', prompt: 'You write to a friend about your weekend. Which style fits best?', options: ['casual and friendly', 'very formal and stiff', 'official and legal', 'silent'], answer: 'casual and friendly', difficulty: 1 },
        { id: 'Y3-ENG-LY01-q3', type: 'mcq', prompt: 'You write the same news to your school principal. Which style fits best?', options: ['polite and respectful', 'very casual with slang', 'a text message style', 'full of emojis'], answer: 'polite and respectful', difficulty: 1 },
        { id: 'Y3-ENG-LY01-q4', type: 'mcq', prompt: 'Why might the same story sound different for different audiences?', options: ['because we adjust our words to suit the reader', 'because words change meaning randomly', 'because the audience never matters', 'because all texts are identical'], answer: 'because we adjust our words to suit the reader', difficulty: 3 },
        { id: 'Y3-ENG-LY01-q5', type: 'mcq', prompt: 'A birthday invitation to your cousin would use...', options: ['a friendly, excited tone', 'an angry tone', 'a mysterious tone', 'no tone at all'], answer: 'a friendly, excited tone', difficulty: 2 },
        { id: 'Y3-ENG-LY01-q6', type: 'short', prompt: 'What do we call the person or group that a text is written for?', answer: 'the audience', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY02',
    title: 'Conversations & discussions',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Good conversations need listening as well as talking. We listen to understand, then respond to what the other person said.',
        'In discussions we share information and ideas, ask questions, and build on what others say: "I agree with Mia because..."',
        'Sticking to the topic and giving everyone a chance helps a discussion work for everyone.',
      ],
      illustrations: [
        { brief: 'The flow of a good discussion: listen, think, share, respond', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Listen carefully' }, { text: 'Think about what was said' }, { text: 'Share an idea' }, { text: 'Respond to others' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY02-q1', type: 'mcq', prompt: 'A good listener...', options: ['waits and then responds to what was said', 'talks the whole time', 'interrupts to share', 'ignores the speaker'], answer: 'waits and then responds to what was said', difficulty: 1 },
        { id: 'Y3-ENG-LY02-q2', type: 'mcq', prompt: 'Which sentence helps build on someone else\u2019s idea?', options: ['"I agree with Mia because..."', '"That is boring."', '"My turn only."', '"Shh."'], answer: '"I agree with Mia because..."', difficulty: 1 },
        { id: 'Y3-ENG-LY02-q3', type: 'mcq', prompt: 'When you want to share your own idea in a group, you should...', options: ['wait for a turn and connect to the topic', 'talk over everyone', 'change the topic', 'whisper to one person'], answer: 'wait for a turn and connect to the topic', difficulty: 1 },
        { id: 'Y3-ENG-LY02-q4', type: 'mcq', prompt: 'Asking a question during a discussion...', options: ['helps everyone understand better', 'ends the discussion', 'is always rude', 'stops you from listening'], answer: 'helps everyone understand better', difficulty: 2 },
        { id: 'Y3-ENG-LY02-q5', type: 'mcq', prompt: 'In a discussion, sticking to the topic means...', options: ['your ideas stay connected to the conversation', 'you talk about anything', 'you never speak', 'you repeat one word'], answer: 'your ideas stay connected to the conversation', difficulty: 2 },
        { id: 'Y3-ENG-LY02-q6', type: 'short', prompt: 'What do you do with your ears when someone is speaking, talk or listen?', answer: 'listen', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY03',
    title: 'Audience & purpose through features',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'You can spot the audience and purpose of a text by its features. Big pictures and short words suit young readers; long sentences and hard words suit older readers.',
        'Features like headings, captions and maps help us identify the purpose, to inform, persuade or entertain.',
        'An advertisement uses "BUY NOW!" while a dictionary uses alphabetical order, the features give the game away.',
      ],
      illustrations: [
        { brief: 'Features that reveal audience and purpose: pictures, facts and persuasion', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'big pictures = young readers' }, { icon: 'newspaper', label: 'facts = to inform' }, { icon: 'price-tag', label: 'BUY NOW = to persuade' }], caption: 'Features reveal audience and purpose.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY03-q1', type: 'mcq', prompt: 'A picture book with big bright pictures and short words is mostly for...', options: ['young children', 'university students', 'builders', 'no one'], answer: 'young children', difficulty: 1 },
        { id: 'Y3-ENG-LY03-q2', type: 'mcq', prompt: 'A text with facts, headings and captions mostly has the purpose to...', options: ['inform', 'persuade', 'entertain only', 'confuse'], answer: 'inform', difficulty: 1 },
        { id: 'Y3-ENG-LY03-q3', type: 'mcq', prompt: 'Which feature is a clue that a text is persuading you to buy something?', options: ['"BUY NOW, only $5!"', 'a list of facts about volcanoes', 'a map of Australia', 'a recipe'], answer: '"BUY NOW, only $5!"', difficulty: 1 },
        { id: 'Y3-ENG-LY03-q4', type: 'mcq', prompt: 'A story with funny characters and an exciting plot mostly aims to...', options: ['entertain', 'inform', 'persuade', 'record'], answer: 'entertain', difficulty: 1 },
        { id: 'Y3-ENG-LY03-q5', type: 'mcq', prompt: 'A science textbook uses long sentences and technical words. Its audience is likely...', options: ['students learning the topic', 'babies', 'people who cannot read', 'only cartoon fans'], answer: 'students learning the topic', difficulty: 2 },
        { id: 'Y3-ENG-LY03-q6', type: 'short', prompt: 'What is the purpose of a text that tries to make you buy or do something?', answer: 'to persuade', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY04',
    title: 'Reading range of texts',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Strong readers use three kinds of knowledge: phonic (sounding out letters), semantic (does it make sense?) and grammatical (does it sound right?).',
        'When a word is tricky, we can sound it out, look at the letters, and check whether the sentence makes sense.',
        'Good readers also re-read and self-correct, going back to fix a mistake is a sign of a smart reader.',
      ],
      illustrations: [
        { brief: 'The toolkit for reading a tricky word: sound it out, check meaning, check grammar', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Read the tricky word' }, { text: 'Sound it out (phonic)' }, { text: 'Check the meaning (semantic)' }, { text: 'Does it sound right? (grammatical)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY04-q1', type: 'mcq', prompt: 'Which strategy helps you work out a tricky word?', options: ['sound it out', 'skip it forever', 'look away', 'guess every time'], answer: 'sound it out', difficulty: 1 },
        { id: 'Y3-ENG-LY04-q2', type: 'mcq', prompt: 'Checking "does it make sense?" uses your...', options: ['semantic knowledge', 'muscle power', 'picture only', 'finger strength'], answer: 'semantic knowledge', difficulty: 3 },
        { id: 'Y3-ENG-LY04-q3', type: 'mcq', prompt: 'If you read a sentence wrong, a good reader will...', options: ['go back and self-correct', 'stop reading forever', 'skip the page', 'read faster'], answer: 'go back and self-correct', difficulty: 1 },
        { id: 'Y3-ENG-LY04-q4', type: 'mcq', prompt: 'Which sentence makes sense?', options: ['The dog barked at the cat.', 'The dog barked the homework.', 'The dog barked a bicycle.', 'The dog barked a mountain.'], answer: 'The dog barked at the cat.', difficulty: 1 },
        { id: 'Y3-ENG-LY04-q5', type: 'mcq', prompt: 'Reading a wide range of texts means...', options: ['reading different kinds: stories, reports, poems, instructions', 'reading the same book every day', 'reading only picture books', 'reading only one page'], answer: 'reading different kinds: stories, reports, poems, instructions', difficulty: 1 },
        { id: 'Y3-ENG-LY04-q6', type: 'short', prompt: 'What do we call it when you go back to fix a reading mistake? (self-___)', answer: 'self-correct', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY05',
    title: 'Comprehension & evaluation',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Literal questions have answers right there in the text: "What colour was the hat?", the text says red.',
        'Inferred meanings are worked out from clues: the text says "Mia grabbed an umbrella" so we infer it might rain.',
        'We also evaluate texts, do we agree with the author? Would we change the ending? What makes this text good?',
      ],
      illustrations: [
        { brief: 'Literal answers are in the text while inferences use clues', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'magnifier', label: 'literal, right in the text' }, { icon: 'bulb', label: 'infer, from clues' }], caption: 'Literal answers are in the text; inferences use clues.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY05-q1', type: 'mcq', prompt: 'A literal question asks about...', options: ['information right in the text', 'a guess', 'another book', 'the author\u2019s dreams'], answer: 'information right in the text', difficulty: 1 },
        { id: 'Y3-ENG-LY05-q2', type: 'mcq', prompt: 'The text says "The sky went dark." You infer that...', options: ['a storm may be coming', 'it is midday', 'it is summer', 'the text is a poem'], answer: 'a storm may be coming', difficulty: 1 },
        { id: 'Y3-ENG-LY05-q3', type: 'mcq', prompt: '"Tom yawned and rubbed his eyes." You can infer that Tom is...', options: ['tired', 'angry', 'hungry', 'excited'], answer: 'tired', difficulty: 1 },
        { id: 'Y3-ENG-LY05-q4', type: 'mcq', prompt: 'Which question is an inference question?', options: ['Why did the character feel nervous?', 'What colour was the door?', 'Who was at the door?', 'Where did the story start?'], answer: 'Why did the character feel nervous?', difficulty: 2 },
        { id: 'Y3-ENG-LY05-q5', type: 'mcq', prompt: 'Evaluating a text means...', options: ['forming your own opinion about it', 'copying it out', 'memorising it', 'skipping it'], answer: 'forming your own opinion about it', difficulty: 2 },
        { id: 'Y3-ENG-LY05-q6', type: 'short', prompt: 'Write the word that means "understood from clues, not stated directly."', answer: 'inferred', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY06',
    title: 'Publishing written texts',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Publishing is the final stage of writing: we plan, draft, edit and then publish our work for others to read.',
        'A published text uses clear layout, headings and pictures that help the reader, and correct spelling and punctuation.',
        'Simple paragraphs, correct tense and neat presentation make our published writing something to be proud of.',
      ],
      illustrations: [
        { brief: 'The writing journey from plan to published text', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan' }, { text: 'Draft' }, { text: 'Edit' }, { text: 'Publish' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY06-q1', type: 'mcq', prompt: 'What is the correct order for writing a text?', options: ['plan, draft, edit, publish', 'publish, draft, plan', 'edit, publish, plan', 'draft, publish, edit, plan'], answer: 'plan, draft, edit, publish', difficulty: 1 },
        { id: 'Y3-ENG-LY06-q2', type: 'mcq', prompt: 'When you edit your writing, you...', options: ['fix and improve it', 'only draw pictures', 'throw it away', 'copy a friend\u2019s work'], answer: 'fix and improve it', difficulty: 1 },
        { id: 'Y3-ENG-LY06-q3', type: 'mcq', prompt: 'A published text should have...', options: ['correct spelling and punctuation', 'no paragraphs', 'scribbled words', 'no title'], answer: 'correct spelling and punctuation', difficulty: 1 },
        { id: 'Y3-ENG-LY06-q4', type: 'mcq', prompt: 'Adding a heading to your published text helps the reader...', options: ['know what it is about', 'ignore the topic', 'count the words', 'memorise it'], answer: 'know what it is about', difficulty: 1 },
        { id: 'Y3-ENG-LY06-q5', type: 'mcq', prompt: 'Before publishing, checking that each paragraph holds one main idea is part of...', options: ['editing', 'planning only', 'colouring', 'counting'], answer: 'editing', difficulty: 2 },
        { id: 'Y3-ENG-LY06-q6', type: 'short', prompt: 'What is it called when you share your finished, neat writing with others?', answer: 'publishing', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY07',
    title: 'Oral & multimodal presentations',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A short presentation has a clear structure: a beginning that hooks the listener, a middle with details, and an end that wraps up.',
        'Good speakers use tone, pace, pitch and volume, changing how fast, high or loud they speak to keep the audience interested.',
        'Rehearsing before you present builds confidence and helps you remember your ideas.',
      ],
      illustrations: [
        { brief: 'A speaker with a mic, a clock for pace, and the audience', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'speak clearly' }, { icon: 'clock', label: 'steady pace' }, { icon: 'people', label: 'the audience' }], caption: 'Presentations need structure, voice and rehearsal.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY07-q1', type: 'mcq', prompt: 'A good presentation starts with...', options: ['a beginning that hooks the listener', 'the middle only', 'the very last word', 'a blank screen'], answer: 'a beginning that hooks the listener', difficulty: 1 },
        { id: 'Y3-ENG-LY07-q2', type: 'mcq', prompt: 'Speaking at a steady pace means...', options: ['not too fast and not too slow', 'as fast as possible', 'as slow as possible', 'only in whispers'], answer: 'not too fast and not too slow', difficulty: 1 },
        { id: 'Y3-ENG-LY07-q3', type: 'mcq', prompt: 'Which of these helps keep the audience interested?', options: ['changing your tone and volume', 'reading every word in a flat voice', 'mumbling', 'turning your back'], answer: 'changing your tone and volume', difficulty: 1 },
        { id: 'Y3-ENG-LY07-q4', type: 'mcq', prompt: 'Rehearsing your presentation helps you...', options: ['remember your ideas and feel confident', 'forget your topic', 'talk forever', 'lose your voice'], answer: 'remember your ideas and feel confident', difficulty: 1 },
        { id: 'Y3-ENG-LY07-q5', type: 'mcq', prompt: 'A multimodal presentation uses more than words, such as...', options: ['pictures, sound or video', 'only text', 'only silence', 'only the cover'], answer: 'pictures, sound or video', difficulty: 3 },
        { id: 'Y3-ENG-LY07-q6', type: 'short', prompt: 'What do we call practising your presentation before you give it?', answer: 'rehearsing', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY08',
    title: 'Joined handwriting',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Joined handwriting means writing words with letters that flow together using clear joins.',
        'Letters should be clearly formed and consistent in size, tall letters like b and h reach up, while short letters like a and o stay small.',
        'Sitting tall, holding the pen correctly and leaving even spacing help your joined writing look tidy.',
      ],
      illustrations: [
        { brief: 'A pen flowing letters together and a ruler showing even size', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'letters flow with joins' }, { icon: 'ruler', label: 'consistent size & spacing' }], caption: 'Clear joins and even size make writing easy to read.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY08-q1', type: 'mcq', prompt: 'Joined handwriting means...', options: ['letters flow together with joins', 'all letters are capitals', 'letters never touch', 'only the first letter is written'], answer: 'letters flow together with joins', difficulty: 1 },
        { id: 'Y3-ENG-LY08-q2', type: 'mcq', prompt: 'Why should letters be consistent in size?', options: ['so writing is clear and easy to read', 'so writing is faster', 'because it looks fancy only', 'so nobody reads it'], answer: 'so writing is clear and easy to read', difficulty: 1 },
        { id: 'Y3-ENG-LY08-q3', type: 'mcq', prompt: 'Which letter should be taller than the others in a well-formed word?', options: ['b', 'a', 'o', 'c'], answer: 'b', difficulty: 2 },
        { id: 'Y3-ENG-LY08-q4', type: 'mcq', prompt: 'Even spacing between letters helps...', options: ['words look neat and readable', 'words disappear', 'letters fall over', 'writing get faster automatically'], answer: 'words look neat and readable', difficulty: 1 },
        { id: 'Y3-ENG-LY08-q5', type: 'mcq', prompt: 'To write neatly, you should...', options: ['sit tall and hold your pen correctly', 'slouch and grip hard', 'push the paper away', 'write with your eyes closed'], answer: 'sit tall and hold your pen correctly', difficulty: 1 },
        { id: 'Y3-ENG-LY08-q6', type: 'short', prompt: 'What do we call writing where letters are joined and flow together?', answer: 'joined handwriting', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY09',
    title: 'Multisyllabic words',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big words are made of syllables, the beats we clap. "Elephant" has three beats: e-le-phant.',
        'We blend the syllables together to read a word (el-e-phant → elephant) and segment it to spell it (elephant → e-le-phant).',
        'Using phoneme\u2013grapheme knowledge and clapping syllables helps us read and write longer words confidently.',
      ],
      illustrations: [
        { brief: 'The word elephant split into its three syllables', ready: true, diagram: { kind: 'dot-array', rows: 1, cols: 3, label: 'e-le-phant = 3 beats' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY09-q1', type: 'mcq', prompt: 'How many syllables are in "elephant"? (clap it!)', options: ['3', '2', '4', '1'], answer: '3', difficulty: 1 },
        { id: 'Y3-ENG-LY09-q2', type: 'mcq', prompt: 'How many syllables in "kangaroo"? (kan-ga-roo)', options: ['3', '2', '5', '1'], answer: '3', difficulty: 1 },
        { id: 'Y3-ENG-LY09-q3', type: 'mcq', prompt: 'How many syllables in "cat"?', options: ['1', '2', '3', '4'], answer: '1', difficulty: 1 },
        { id: 'Y3-ENG-LY09-q4', type: 'mcq', prompt: 'Segmenting a word like "butterfly" into "but-ter-fly" helps us...', options: ['spell and read it more easily', 'make it louder', 'make it longer', 'forget it'], answer: 'spell and read it more easily', difficulty: 1 },
        { id: 'Y3-ENG-LY09-q5', type: 'mcq', prompt: 'When you blend "rain" and "bow" you get...', options: ['rainbow', 'rainbo', 'bowrain', 'rainbowy'], answer: 'rainbow', difficulty: 2 },
        { id: 'Y3-ENG-LY09-q6', type: 'short', prompt: 'Clap the word "tomorrow". How many syllables does it have?', answer: '3', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY10',
    title: 'Base words, prefixes & suffixes',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY10' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A base word is the main part of a word. We can add prefixes (before) and suffixes (after) to build new words.',
        '"Play" + "re-" makes "replay" (play again). "Play" + "-ful" makes "playful" (full of play).',
        'Knowing the base word and the small parts helps us read and understand new words we have never seen before.',
      ],
      illustrations: [
        { brief: 'Building new words by adding a prefix and a suffix to the base word play', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'base word: play' }, { text: '+ re- → replay' }, { text: '+ -ful → playful' }, { text: 'new words from one base!' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY10-q1', type: 'mcq', prompt: 'What is the base word in "unhappy"?', options: ['happy', 'un', 'happ', 'y'], answer: 'happy', difficulty: 1 },
        { id: 'Y3-ENG-LY10-q2', type: 'mcq', prompt: 'Adding "re-" to "build" makes...', options: ['rebuild', 'buildre', 'rebuilding only', 'builded'], answer: 'rebuild', difficulty: 1 },
        { id: 'Y3-ENG-LY10-q3', type: 'mcq', prompt: 'What does "re-" usually mean?', options: ['again', 'not', 'before', 'full of'], answer: 'again', difficulty: 2 },
        { id: 'Y3-ENG-LY10-q4', type: 'mcq', prompt: 'The suffix "-ful" in "playful" mostly means...', options: ['full of', 'not', 'again', 'small'], answer: 'full of', difficulty: 2 },
        { id: 'Y3-ENG-LY10-q5', type: 'mcq', prompt: 'If you know the base word "happy", you can work out "happiness" means...', options: ['the state of being happy', 'a kind of game', 'a type of bird', 'something blue'], answer: 'the state of being happy', difficulty: 3 },
        { id: 'Y3-ENG-LY10-q6', type: 'short', prompt: 'What do we call the part added to the end of a base word, like "-ful"? (a s___)', answer: 'suffix', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY11',
    title: 'Spelling: less common patterns',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY11' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Some sounds have less common spellings. The sound /sh/ can be written "sh" (shell) but also "ch" (chef) or "ti" (station).',
        'The sound /or/ can be "or" (for), "oor" (door), "ore" (more) or "aw" (saw).',
        'Looking carefully at letter patterns and collecting tricky words helps us spell words that do not follow the simple rules.',
      ],
      illustrations: [
        { brief: 'Words that share a sound but use different letter patterns', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'shell, chef, station, /sh/' }, { icon: 'bulb', label: 'for, door, more, saw, /or/' }], caption: 'Less common spelling patterns.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY11-q1', type: 'mcq', prompt: 'Which word spells the /sh/ sound with the letters "ti"?', options: ['station', 'shell', 'ship', 'wish'], answer: 'station', difficulty: 2 },
        { id: 'Y3-ENG-LY11-q2', type: 'mcq', prompt: 'In "chef", which letters make the /sh/ sound?', options: ['ch', 'sh', 'ti', 'th'], answer: 'ch', difficulty: 2 },
        { id: 'Y3-ENG-LY11-q3', type: 'mcq', prompt: 'Which word has the /or/ sound spelled "aw"?', options: ['saw', 'for', 'more', 'door'], answer: 'saw', difficulty: 2 },
        { id: 'Y3-ENG-LY11-q4', type: 'mcq', prompt: 'Which word spells /or/ with "ore"?', options: ['more', 'saw', 'door', 'for'], answer: 'more', difficulty: 2 },
        { id: 'Y3-ENG-LY11-q5', type: 'mcq', prompt: 'When you meet a tricky spelling pattern, a good idea is to...', options: ['collect and practise pattern words', 'give up', 'spell it any way', 'write it backwards'], answer: 'collect and practise pattern words', difficulty: 1 },
        { id: 'Y3-ENG-LY11-q6', type: 'short', prompt: 'Write a word where "kn" spells the /n/ sound, like the word for the joint in your leg: k___', answer: 'knee', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-ENG-LY12',
    title: 'High-frequency words & homophones',
    year: '3',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E3LY12' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'High-frequency words appear again and again in our reading, words like the, was, they, said and because. Knowing them by sight makes us fluent readers.',
        'Homophones are words that sound the same but have different spellings and meanings: their/there/they\u2019re and to/too/two.',
        'We choose the right spelling by thinking about meaning: "Their dog" (belonging), "over there" (a place), "they\u2019re going" (they are).',
      ],
      illustrations: [
        { brief: 'The homophones there, their, they\u2019re shown with their different meanings', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'there, a place' }, { icon: 'paw', label: 'their, belonging' }, { icon: 'people', label: 'they\u2019re, they are' }], caption: 'Homophones: same sound, different spelling.' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-ENG-LY12-q1', type: 'mcq', prompt: 'Which word fits: "The book is over ___."', options: ['there', 'their', 'they\u2019re', 'theyre'], answer: 'there', difficulty: 1 },
        { id: 'Y3-ENG-LY12-q2', type: 'mcq', prompt: 'Which word fits: "___ dog is barking." (it belongs to them)', options: ['Their', 'There', 'They\u2019re', 'Theire'], answer: 'Their', difficulty: 1 },
        { id: 'Y3-ENG-LY12-q3', type: 'mcq', prompt: 'Which word fits: "___ going to the beach." (they are)', options: ['They\u2019re', 'Their', 'There', 'Ther'], answer: 'They\u2019re', difficulty: 1 },
        { id: 'Y3-ENG-LY12-q4', type: 'mcq', prompt: 'Which word fits: "I have ___ dogs." (the number)', options: ['two', 'to', 'too', 'tow'], answer: 'two', difficulty: 1 },
        { id: 'Y3-ENG-LY12-q5', type: 'mcq', prompt: 'Which word fits: "I want ___ go home."', options: ['to', 'too', 'two', 'tow'], answer: 'to', difficulty: 1 },
        { id: 'Y3-ENG-LY12-q6', type: 'short', prompt: 'Write the homophone that means "belonging to them": th___', answer: 'their', difficulty: 1 },
      ],
    },
  },
];
