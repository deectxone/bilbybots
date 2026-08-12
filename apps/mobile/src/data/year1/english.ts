import type { Topic } from '../../types/curriculum';

/**
 * Year 1 English — full topic bank.
 * Source of truth for scope: docs/content/year-1-5/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E1xxx
 * content-description code and a rendered `diagram` per illustration slot
 * (see src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model. Vocabulary
 * and sentence patterns stay simple for six-year-olds, with clear,
 * unambiguous answers.
 */
export const YEAR1_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (10 CDs) ----------
  {
    id: 'Y1-ENG-LA01',
    title: 'Interaction: language, faces & gestures',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Your face and body talk too! A big smile says hello, and a frown says you are not sure.',
        'When you ask a question, your voice goes up at the end, and when you tell someone what to do, you use a big clear voice.',
        'Pointing, nodding and waving are gestures that help your words travel even further.',
      ],
      illustrations: [
        {
          brief: 'A smiley, a chat-bubble and people showing that faces, words and gestures work together',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'smiley', label: 'a smile says hello' }, { icon: 'chat-bubble', label: 'asking a question' }, { icon: 'people', label: 'nodding yes' }], caption: 'Faces, words and gestures work together' },
        },
        {
          brief: 'Flow of a friendly talk: ask, wait and listen, answer kindly',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Ask your question' }, { text: 'Wait and listen' }, { text: 'Answer kindly' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA01-q1', type: 'mcq', prompt: 'Which face shows you are happy to see someone?', options: ['a smiley face', 'a frown', 'a sleepy face'], answer: 'a smiley face', difficulty: 1 },
        { id: 'Y1-ENG-LA01-q2', type: 'mcq', prompt: 'You want a drink. What is the best way to ask?', options: ['"Can I have some water, please?"', '"Gimme water now!"', 'pointing and shouting'], answer: '"Can I have some water, please?"', difficulty: 1 },
        { id: 'Y1-ENG-LA01-q3', type: 'mcq', prompt: 'When you nod your head, you are saying…', options: ['yes', 'no', 'maybe'], answer: 'yes', difficulty: 1 },
        { id: 'Y1-ENG-LA01-q4', type: 'mcq', prompt: 'When your voice goes up at the end of a sentence, it sounds like a…', options: ['question', 'command', 'whisper'], answer: 'question', difficulty: 2 },
        { id: 'Y1-ENG-LA01-q5', type: 'short', prompt: 'Shaking your head usually means no or yes?', answer: 'no', difficulty: 1 },
        { id: 'Y1-ENG-LA01-q6', type: 'mcq', prompt: 'Which sentence is a command (telling someone what to do)?', options: ['"Please put your bag away."', '"What is your name?"', '"I like your bag."'], answer: '"Please put your bag away."', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA02',
    title: 'Language for likes, dislikes & preferences',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Saying what you like and do not like is easy and powerful - "I like dogs because they are fluffy."',
        '"Because" is the magic word that tells why you feel the way you do.',
        'You can say "I like", "I do not like" and "I would rather" to share your choices with others.',
      ],
      illustrations: [
        {
          brief: 'A smiley, a bowl and a burst showing "I like" plus a reason with "because"',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'smiley', label: 'I like' }, { icon: 'bowl', label: 'because it is tasty' }, { icon: 'burst', label: 'yum!' }], caption: 'Say what you like and tell why with "because"' },
        },
        {
          brief: 'Flow of sharing a preference: think of a favourite, say "I like", add why',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Think of a favourite' }, { text: 'Say "I like…"' }, { text: 'Add why with "because"' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA02-q1', type: 'mcq', prompt: 'Which sentence tells a reason for liking something?', options: ['"I like dogs because they are fluffy."', '"I like dogs."', '"The dog is barking."'], answer: '"I like dogs because they are fluffy."', difficulty: 2 },
        { id: 'Y1-ENG-LA02-q2', type: 'short', prompt: 'The magic word that tells why you like something is ____.', answer: 'because', difficulty: 1 },
        { id: 'Y1-ENG-LA02-q3', type: 'mcq', prompt: '"I do not like spiders." tells us something you…', options: ['do not like', 'love', 'want to hold'], answer: 'do not like', difficulty: 1 },
        { id: 'Y1-ENG-LA02-q4', type: 'mcq', prompt: 'Which phrase shares a preference between two choices?', options: ['"I would rather swim."', '"It is raining."', '"I am six."'], answer: '"I would rather swim."', difficulty: 2 },
        { id: 'Y1-ENG-LA02-q5', type: 'mcq', prompt: 'You like swimming best of all. What do you say?', options: ['"I would rather swim than anything!"', '"I am tired."', '"Where is my hat?"'], answer: '"I would rather swim than anything!"', difficulty: 2 },
        { id: 'Y1-ENG-LA02-q6', type: 'short', prompt: 'Fill in the blank: "I like dogs ____ they are friendly."', answer: 'because', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA03',
    title: 'Text organisation by purpose',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA03' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A story starts with once upon a time, and a report gives you facts in order.',
        'Writers pick a shape for their text - first, then, next, last for a recount, and a clear start, middle and end for a story.',
        'When you know the shape, reading is like following a treasure map.',
      ],
      illustrations: [
        {
          brief: 'A book, a newspaper and a chat-bubble showing stories, reports and opinions have different jobs',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'story' }, { icon: 'newspaper', label: 'report' }, { icon: 'chat-bubble', label: 'opinion' }], caption: 'Different jobs, different text shapes' },
        },
        {
          brief: 'Flow of a recount in order: first, then, next, last',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'First' }, { text: 'Then' }, { text: 'Next' }, { text: 'Last' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA03-q1', type: 'mcq', prompt: 'Which words often start a story?', options: ['"Once upon a time…"', '"The answer is 5."', '"Look at the map."'], answer: '"Once upon a time…"', difficulty: 1 },
        { id: 'Y1-ENG-LA03-q2', type: 'mcq', prompt: 'A story is told in order: start, middle and…', options: ['end', 'side', 'top'], answer: 'end', difficulty: 1 },
        { id: 'Y1-ENG-LA03-q3', type: 'mcq', prompt: 'A recount is told in order: first, then, next and…', options: ['last', 'maybe', 'again'], answer: 'last', difficulty: 2 },
        { id: 'Y1-ENG-LA03-q4', type: 'mcq', prompt: 'Which text tells you real facts about frogs?', options: ['a book that informs', 'a joke book', 'a lullaby'], answer: 'a book that informs', difficulty: 2 },
        { id: 'Y1-ENG-LA03-q5', type: 'short', prompt: 'The very first part of a story is called the ____.', answer: 'beginning', difficulty: 1 },
        { id: 'Y1-ENG-LA03-q6', type: 'mcq', prompt: 'Which order is a recount?', options: ['first, then, next, last', 'middle, start, end', 'backwards, forwards, sideways'], answer: 'first, then, next, last', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA04',
    title: 'Repetition, rhyme & rhythm for cohesion',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA04' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Rhyming words sound the same at the end, like cat and hat, hop and top.',
        'Repeating a line again and again, like "Row, row, row your boat", makes a chant that is easy to join.',
        'The rhythm is the beat you can clap, and it holds the whole song together!',
      ],
      illustrations: [
        {
          brief: 'A music note, a burst and a paw showing rhyme, rhythm and clapping in a chant',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: 'rhyme' }, { icon: 'burst', label: 'rhythm' }, { icon: 'paw', label: 'clap, clap' }], caption: 'Rhyme, rhythm and repetition hold chants together' },
        },
        {
          brief: 'Flow of joining a chant: listen to the beat, clap the rhythm, join the repeating words',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Listen to the beat' }, { text: 'Clap the rhythm' }, { text: 'Join the repeating words' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA04-q1', type: 'mcq', prompt: 'Which two words rhyme?', options: ['cat and hat', 'cat and dog', 'sun and sky'], answer: 'cat and hat', difficulty: 1 },
        { id: 'Y1-ENG-LA04-q2', type: 'mcq', prompt: 'Which two words rhyme?', options: ['hop and top', 'hop and run', 'hop and jump'], answer: 'hop and top', difficulty: 1 },
        { id: 'Y1-ENG-LA04-q3', type: 'mcq', prompt: 'Saying "Row, row, row" over and over is called…', options: ['repetition', 'shopping', 'skipping'], answer: 'repetition', difficulty: 2 },
        { id: 'Y1-ENG-LA04-q4', type: 'mcq', prompt: 'The beat you can clap in a song is the…', options: ['rhythm', 'ending', 'title'], answer: 'rhythm', difficulty: 2 },
        { id: 'Y1-ENG-LA04-q5', type: 'short', prompt: 'Which word rhymes with "moon"? (boom or milk)', answer: 'boom', difficulty: 2 },
        { id: 'Y1-ENG-LA04-q6', type: 'mcq', prompt: 'Which chant has repetition?', options: ['"Clap, clap, clap your hands"', '"The sky is blue today"', '"I am six years old"'], answer: '"Clap, clap, clap your hands"', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA05',
    title: 'Print & screen text features',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA05' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Books have clues to help you: page numbers at the bottom and a contents page at the front.',
        'Big headings tell you what a part is about, and pictures help you guess what is coming.',
        'On a screen, buttons and links are little doors - tap them to go to the next page!',
      ],
      illustrations: [
        {
          brief: 'A book, a magnifier and a go-circle showing page numbers, headings and the next-page button',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'page numbers' }, { icon: 'magnifier', label: 'headings' }, { icon: 'go-circle', label: 'next button' }], caption: 'Clues in books and on screens' },
        },
        {
          brief: 'Flow of navigating a text: find the heading, look at the pictures, turn the page',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Find the heading' }, { text: 'Look at the pictures' }, { text: 'Turn the page or tap the button' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA05-q1', type: 'mcq', prompt: 'Where do you usually find page numbers?', options: ['at the bottom of the page', 'in the sky', 'on the ceiling'], answer: 'at the bottom of the page', difficulty: 2 },
        { id: 'Y1-ENG-LA05-q2', type: 'mcq', prompt: 'A big title at the top of a page that tells what it is about is a…', options: ['heading', 'pencil', 'sock'], answer: 'heading', difficulty: 2 },
        { id: 'Y1-ENG-LA05-q3', type: 'mcq', prompt: 'The contents page at the front of a book tells you…', options: ['what is inside and on which page', 'what to eat for lunch', 'the weather'], answer: 'what is inside and on which page', difficulty: 2 },
        { id: 'Y1-ENG-LA05-q4', type: 'mcq', prompt: 'On a screen, you tap a button to…', options: ['go to the next page', 'draw a picture', 'eat a snack'], answer: 'go to the next page', difficulty: 1 },
        { id: 'Y1-ENG-LA05-q5', type: 'mcq', prompt: 'Which part of a book shows a list of what is inside?', options: ['the contents page', 'the cover', 'the very last page'], answer: 'the contents page', difficulty: 2 },
        { id: 'Y1-ENG-LA05-q6', type: 'short', prompt: 'The number at the bottom of the page is the ___ number.', answer: 'page', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA06',
    title: 'Simple sentences (independent clauses)',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA06' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A sentence is a whole idea that makes sense on its own, like "The cat slept."',
        'It starts with a capital letter, ends with a full stop, and usually has a who and a what happens.',
        'One sentence holds one idea - say it big and clear, just like you!',
      ],
      illustrations: [
        {
          brief: 'A cat, a bolt and a check-box showing the who, the what-happens and one whole idea',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cat', label: 'Who - the cat' }, { icon: 'bolt', label: 'What - it slept' }, { icon: 'check-box', label: 'One whole idea' }], caption: 'A sentence has a who and a what happens' },
        },
        {
          brief: 'Flow of building a sentence: capital letter, whole idea, full stop',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Start with a capital letter' }, { text: 'Write the whole idea' }, { text: 'End with a full stop' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA06-q1', type: 'mcq', prompt: 'Which one is a full sentence?', options: ['The dog ran.', 'the dog ran', 'running fast'], answer: 'The dog ran.', difficulty: 1 },
        { id: 'Y1-ENG-LA06-q2', type: 'mcq', prompt: 'A sentence should start with a…', options: ['capital letter', 'small letter', 'full stop'], answer: 'capital letter', difficulty: 1 },
        { id: 'Y1-ENG-LA06-q3', type: 'mcq', prompt: 'Which word completes the sentence "The bird ___."?', options: ['flew', 'and', 'the'], answer: 'flew', difficulty: 2 },
        { id: 'Y1-ENG-LA06-q4', type: 'mcq', prompt: 'What does a telling sentence usually end with?', options: ['a full stop', 'a flower', 'a shoe'], answer: 'a full stop', difficulty: 1 },
        { id: 'Y1-ENG-LA06-q5', type: 'short', prompt: 'A whole idea that makes sense on its own is a ____.', answer: 'sentence', difficulty: 1 },
        { id: 'Y1-ENG-LA06-q6', type: 'mcq', prompt: 'Which one tells ONE idea?', options: ['The sun is shining.', 'Sun morning then to', 'And but the'], answer: 'The sun is shining.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA07',
    title: 'Nouns, verbs, adjectives, adverbs',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA07' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Nouns name people, places and things - like Mum, park and ball.',
        'Verbs are doing words like run and jump, and adjectives are describing words like big, red and fluffy.',
        'Adverbs tell more about the doing, like "slowly" and "loudly" - that is the whole word team!',
      ],
      illustrations: [
        {
          brief: 'People, a runner and a cat showing nouns, verbs and adjectives as word teams',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'nouns - names' }, { icon: 'runner', label: 'verbs - doing' }, { icon: 'cat', label: 'adjectives - fluffy' }], caption: 'Nouns, verbs and adjectives are word teams' },
        },
        {
          brief: 'Flow of finding word types: naming word, doing word, describing word',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Find the naming word (noun)' }, { text: 'Find the doing word (verb)' }, { text: 'Find a describing word (adjective)' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA07-q1', type: 'mcq', prompt: 'Which word is a noun (a thing)?', options: ['ball', 'run', 'quickly'], answer: 'ball', difficulty: 1 },
        { id: 'Y1-ENG-LA07-q2', type: 'mcq', prompt: 'Which word is a verb (a doing word)?', options: ['jump', 'table', 'red'], answer: 'jump', difficulty: 1 },
        { id: 'Y1-ENG-LA07-q3', type: 'mcq', prompt: 'Which word is an adjective (a describing word)?', options: ['fluffy', 'jump', 'Mum'], answer: 'fluffy', difficulty: 1 },
        { id: 'Y1-ENG-LA07-q4', type: 'mcq', prompt: 'In "The dog barked loudly", which word is the verb?', options: ['barked', 'dog', 'loudly'], answer: 'barked', difficulty: 2 },
        { id: 'Y1-ENG-LA07-q5', type: 'mcq', prompt: 'In "The dog barked loudly", which word tells HOW the dog barked?', options: ['loudly', 'dog', 'barked'], answer: 'loudly', difficulty: 3 },
        { id: 'Y1-ENG-LA07-q6', type: 'short', prompt: 'Which word is a noun in "The cat sleeps on the bed"? (cat or sleeps)', answer: 'cat', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA08',
    title: 'How images add meaning',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA08' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Pictures are part of the story too - they show you things the words do not say.',
        'A sad face in a picture can tell you a character is unhappy, even before you read the words.',
        'In a report, a diagram can show you how a plant grows much faster than words alone could.',
      ],
      illustrations: [
        {
          brief: 'A picture-frame, an eye and a magnifier showing how images add meaning to words',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'a sad face in the picture' }, { icon: 'eye', label: 'look closely' }, { icon: 'magnifier', label: 'find the clues' }], caption: 'Images add meaning to words' },
        },
        {
          brief: 'Flow of reading a picture: look, think what it shows, join it with the words',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Look at the picture' }, { text: 'Think about what it shows' }, { text: 'Put it together with the words' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA08-q1', type: 'mcq', prompt: 'A picture of a sad rabbit tells you the rabbit is feeling…', options: ['sad', 'happy', 'sleepy'], answer: 'sad', difficulty: 1 },
        { id: 'Y1-ENG-LA08-q2', type: 'mcq', prompt: 'Images in a text help you…', options: ['understand the story better', 'forget the story', 'only eat snacks'], answer: 'understand the story better', difficulty: 1 },
        { id: 'Y1-ENG-LA08-q3', type: 'mcq', prompt: 'A picture of a big smiling sun tells you the day is…', options: ['sunny and happy', 'dark and scary', 'raining cats'], answer: 'sunny and happy', difficulty: 2 },
        { id: 'Y1-ENG-LA08-q4', type: 'mcq', prompt: 'The words say "The dog is fast." Which picture matches?', options: ['a dog running fast', 'a sleeping cat', 'a swimming fish'], answer: 'a dog running fast', difficulty: 2 },
        { id: 'Y1-ENG-LA08-q5', type: 'mcq', prompt: 'In a book about plants, a labelled diagram helps you…', options: ['see the parts of a plant', 'sing a song', 'tie your shoes'], answer: 'see the parts of a plant', difficulty: 2 },
        { id: 'Y1-ENG-LA08-q6', type: 'short', prompt: 'Pictures in a story that the artist draws are called ____.', answer: 'illustrations', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA09',
    title: 'Vocabulary of learning-area topics',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA09' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Every learning area has its own special words - maths has "add" and "tens", and science has "grow" and "seed".',
        'When you hear words like "map" and "sea", you know you are learning about places.',
        'Collecting topic words is like collecting treasure for your brain!',
      ],
      illustrations: [
        {
          brief: 'A calculator, a sprout and a map showing the special words of maths, science and places',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'calc', label: 'maths - add' }, { icon: 'sprout', label: 'science - seed' }, { icon: 'map', label: 'places - map' }], caption: 'Each learning area has its own words' },
        },
        {
          brief: 'Flow of learning topic words: listen, match to the area, use in a sentence',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Listen for the topic words' }, { text: 'Match them to the learning area' }, { text: 'Use them in a sentence' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA09-q1', type: 'mcq', prompt: 'Which words belong to maths?', options: ['add, tens, number', 'paint, song, dance', 'map, sea, city'], answer: 'add, tens, number', difficulty: 1 },
        { id: 'Y1-ENG-LA09-q2', type: 'mcq', prompt: 'Which words belong to science?', options: ['seed, grow, plant', 'run, jump, hop', 'red, blue, green'], answer: 'seed, grow, plant', difficulty: 1 },
        { id: 'Y1-ENG-LA09-q3', type: 'mcq', prompt: '"Map", "sea" and "city" are words about…', options: ['places', 'food', 'toys'], answer: 'places', difficulty: 1 },
        { id: 'Y1-ENG-LA09-q4', type: 'mcq', prompt: 'The word "minus" belongs to which learning area?', options: ['maths', 'science', 'music'], answer: 'maths', difficulty: 2 },
        { id: 'Y1-ENG-LA09-q5', type: 'mcq', prompt: 'The words "stem", "leaf" and "root" are about…', options: ['plants', 'trains', 'clothes'], answer: 'plants', difficulty: 2 },
        { id: 'Y1-ENG-LA09-q6', type: 'short', prompt: 'In science, a tiny plant grows from a ____.', answer: 'seed', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LA10',
    title: 'Punctuation & capital letters',
    year: '1',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E1LA10' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A full stop ends a telling sentence, a question mark ends a question, and an exclamation mark shows big feelings like "Wow!"',
        'Capital letters start every sentence and every special name, like Sam, Rex and Australia.',
        'Fix up your writing with these little marks and it will sparkle!',
      ],
      illustrations: [
        {
          brief: 'A check-box, chat-bubble and burst showing the full stop, question mark and exclamation mark',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'check-box', label: 'full stop .' }, { icon: 'chat-bubble', label: 'question mark ?' }, { icon: 'burst', label: 'exclamation mark !' }], caption: 'Full stops, question marks and exclamation marks' },
        },
        {
          brief: 'Flow of fixing punctuation: capital letter, sentence, ending mark',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Start with a capital letter' }, { text: 'Write the sentence' }, { text: 'End with the right mark' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LA10-q1', type: 'mcq', prompt: 'Which word is written correctly with a capital letter?', options: ['Sam', 'sam', 'sAm'], answer: 'Sam', difficulty: 1 },
        { id: 'Y1-ENG-LA10-q2', type: 'mcq', prompt: 'Which mark ends a question?', options: ['?', '.', '!'], answer: '?', difficulty: 1 },
        { id: 'Y1-ENG-LA10-q3', type: 'mcq', prompt: '"Wow! That rocket is huge!" ends with a…', options: ['exclamation mark', 'question mark', 'comma'], answer: 'exclamation mark', difficulty: 2 },
        { id: 'Y1-ENG-LA10-q4', type: 'mcq', prompt: 'Which sentence is written correctly?', options: ['The cat is asleep.', 'the cat is asleep.', 'The cat is asleep'], answer: 'The cat is asleep.', difficulty: 2 },
        { id: 'Y1-ENG-LA10-q5', type: 'mcq', prompt: 'Which word needs a capital letter because it is a special name?', options: ['Australia', 'the', 'run'], answer: 'Australia', difficulty: 1 },
        { id: 'Y1-ENG-LA10-q6', type: 'short', prompt: 'What mark goes at the end of "What is your name____"? (write the mark)', answer: '?', difficulty: 1 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y1-ENG-LE01',
    title: 'Characters, settings & events in literature',
    year: '1',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E1LE01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Every story has people or animals we follow - they are the characters.',
        'The setting is where and when the story happens, like a bush river bank or a city park.',
        'First Nations Australian storytellers share special knowledge of Country through stories that have been passed down for a very long time, and stories from all over the world help us understand each other.',
      ],
      illustrations: [
        {
          brief: 'People, a tree and a burst showing characters, a bush setting and the big event',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'characters' }, { icon: 'tree', label: 'setting - the bush' }, { icon: 'burst', label: 'the big event' }], caption: 'Characters, setting and events make a story' },
        },
        {
          brief: 'Flow of story parts: who is in it, where it happens, what happens',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Who is in the story?' }, { text: 'Where does it happen?' }, { text: 'What happens?' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LE01-q1', type: 'mcq', prompt: 'The people or animals in a story are called the…', options: ['characters', 'settings', 'pages'], answer: 'characters', difficulty: 1 },
        { id: 'Y1-ENG-LE01-q2', type: 'mcq', prompt: 'Where a story happens - like a beach or a house - is the…', options: ['setting', 'cover', 'ending'], answer: 'setting', difficulty: 1 },
        { id: 'Y1-ENG-LE01-q3', type: 'mcq', prompt: 'A story set by a billabong in the Australian bush has a setting of…', options: ['Country (the bush)', 'the moon', 'under the sea'], answer: 'Country (the bush)', difficulty: 2 },
        { id: 'Y1-ENG-LE01-q4', type: 'mcq', prompt: 'The things that happen in a story, like finding a lost puppy, are the…', options: ['events', 'page numbers', 'letters'], answer: 'events', difficulty: 2 },
        { id: 'Y1-ENG-LE01-q5', type: 'mcq', prompt: 'Writers use words and pictures so you feel like you know the…', options: ['characters', 'book spine', 'price tag'], answer: 'characters', difficulty: 2 },
        { id: 'Y1-ENG-LE01-q6', type: 'short', prompt: 'The main person or animal in a story is the main ____.', answer: 'character', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LE02',
    title: 'Responding to literary texts',
    year: '1',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E1LE02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'After a story, share how it made you feel - "I was excited when the cat found her way home!"',
        'Connecting to the story means thinking, "That happened to me too!"',
        'Your feelings and ideas about a book are always worth sharing.',
      ],
      illustrations: [
        {
          brief: 'A smiley, people and a chat-bubble showing sharing feelings and ideas about a story',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'smiley', label: 'I felt happy' }, { icon: 'people', label: 'let us share' }, { icon: 'chat-bubble', label: 'it made me think' }], caption: 'Share how a story makes you feel' },
        },
        {
          brief: 'Flow of responding: listen, connect to yourself, share your response',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Listen to the story' }, { text: 'Think of how it connects to you' }, { text: 'Share your response' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LE02-q1', type: 'mcq', prompt: 'After reading a story, you can share your…', options: ['feelings and ideas', 'shoes', 'breakfast'], answer: 'feelings and ideas', difficulty: 1 },
        { id: 'Y1-ENG-LE02-q2', type: 'mcq', prompt: '"That story reminds me of my own dog!" is a…', options: ['connection to your own experience', 'maths sum', 'spelling test'], answer: 'connection to your own experience', difficulty: 2 },
        { id: 'Y1-ENG-LE02-q3', type: 'mcq', prompt: 'If a character in a story feels scared, you might feel…', options: ['scared or worried for them', 'hungry', 'sleepy'], answer: 'scared or worried for them', difficulty: 2 },
        { id: 'Y1-ENG-LE02-q4', type: 'mcq', prompt: 'A good way to respond to a book you loved is to say…', options: ['"I really liked that story!"', '"Pass the pencil."', '"What is for lunch?"'], answer: '"I really liked that story!"', difficulty: 1 },
        { id: 'Y1-ENG-LE02-q5', type: 'mcq', prompt: 'Talking about a story with your friends is called…', options: ['discussing it', 'sleeping', 'erasing it'], answer: 'discussing it', difficulty: 2 },
        { id: 'Y1-ENG-LE02-q6', type: 'short', prompt: 'If a story makes you happy, you can say it made you feel ____.', answer: 'happy', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LE03',
    title: 'Plot, character & setting',
    year: '1',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E1LE03' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'The plot is the plan of the story - first this happens, then that, then a big finish.',
        'Characters are the ones in the story, and the setting is where they are.',
        'Naming these three story parts helps you tell your friends what a book is about!',
      ],
      illustrations: [
        {
          brief: 'People, a house and an arrow-right showing characters, setting and the plot moving forward',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'characters' }, { icon: 'house', label: 'setting' }, { icon: 'arrow-right', label: 'plot - what happens' }], caption: 'Plot, characters and setting' },
        },
        {
          brief: 'Flow of story parts: setting, characters, then plot in order',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Setting - where it happens' }, { text: 'Characters - who is in it' }, { text: 'Plot - first, next, last' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LE03-q1', type: 'mcq', prompt: 'The plot of a story is the…', options: ['things that happen in order', 'cover of the book', 'name of the author'], answer: 'things that happen in order', difficulty: 2 },
        { id: 'Y1-ENG-LE03-q2', type: 'mcq', prompt: 'Who are the characters in a story?', options: ['the people or animals in it', 'the pages', 'the full stops'], answer: 'the people or animals in it', difficulty: 1 },
        { id: 'Y1-ENG-LE03-q3', type: 'mcq', prompt: 'A story about a bear in a cave: the setting is…', options: ['the cave', 'the bear', 'the story title'], answer: 'the cave', difficulty: 1 },
        { id: 'Y1-ENG-LE03-q4', type: 'mcq', prompt: 'What happens first in a story is usually at the…', options: ['beginning', 'middle', 'very end'], answer: 'beginning', difficulty: 1 },
        { id: 'Y1-ENG-LE03-q5', type: 'mcq', prompt: 'What happens last in a story is at the…', options: ['end', 'start', 'cover'], answer: 'end', difficulty: 1 },
        { id: 'Y1-ENG-LE03-q6', type: 'short', prompt: 'The plan of what happens in a story is called the ____.', answer: 'plot', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LE04',
    title: 'Poems, chants, rhymes & alliteration',
    year: '1',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E1LE04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Poems and chants play with sounds - rhyming words tickle your ears, like "frog on a log".',
        'Alliteration is when words start with the same sound, like "six silky snakes".',
        'You can make up your own chant, and its beat will belong to you!',
      ],
      illustrations: [
        {
          brief: 'A music note, a mic and a burst showing rhyme, chants and alliteration',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: 'rhyme' }, { icon: 'mic', label: 'chant' }, { icon: 'burst', label: 'alliteration - six snakes' }], caption: 'Play with rhyme and sound patterns' },
        },
        {
          brief: 'Flow of inventing a chant: listen, find the pattern, make up your own',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Listen to the sounds' }, { text: 'Find the rhyme or pattern' }, { text: 'Make up your own chant' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LE04-q1', type: 'mcq', prompt: 'Which pair rhymes?', options: ['frog and log', 'frog and tree', 'frog and bird'], answer: 'frog and log', difficulty: 1 },
        { id: 'Y1-ENG-LE04-q2', type: 'mcq', prompt: '"Six silky snakes slide" starts with the same sound again and again. This is called…', options: ['alliteration', 'lunchtime', 'handwriting'], answer: 'alliteration', difficulty: 2 },
        { id: 'Y1-ENG-LE04-q3', type: 'mcq', prompt: 'Which phrase has alliteration?', options: ['big brown bears', 'a cat and a hat', 'one, two, three'], answer: 'big brown bears', difficulty: 2 },
        { id: 'Y1-ENG-LE04-q4', type: 'mcq', prompt: 'A word that rhymes with "fun" is…', options: ['run', 'dog', 'sky'], answer: 'run', difficulty: 1 },
        { id: 'Y1-ENG-LE04-q5', type: 'mcq', prompt: 'A chant with a strong beat that people clap along to is like a…', options: ['song you can join in', 'shopping list', 'maths problem'], answer: 'song you can join in', difficulty: 2 },
        { id: 'Y1-ENG-LE04-q6', type: 'short', prompt: 'Which word rhymes with "night"? (light or cup)', answer: 'light', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LE05',
    title: 'Retelling & adapting stories',
    year: '1',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E1LE05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'To retell a story, say it in order: first, next, then, last - just like a storyteller!',
        'You can adapt a story by changing a character or the setting, like making the three pigs live in the city.',
        'Keep the characters and the plot, and the story is still the same old friend.',
      ],
      illustrations: [
        {
          brief: 'A cat, a house and an arrow-right showing keeping characters but changing the setting',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cat', label: 'same characters' }, { icon: 'house', label: 'new setting - city' }, { icon: 'arrow-right', label: 'retell it' }], caption: 'Keep the characters, change the setting' },
        },
        {
          brief: 'Flow of a retelling: set the scene, main events, problem, ending',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'First - set the scene' }, { text: 'Next - the main events' }, { text: 'Then - the problem' }, { text: 'Last - how it ends' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LE05-q1', type: 'mcq', prompt: 'To retell a story, you should tell it…', options: ['in order', 'backwards', 'without an ending'], answer: 'in order', difficulty: 1 },
        { id: 'Y1-ENG-LE05-q2', type: 'mcq', prompt: 'Adapting a story means…', options: ['changing part of it, like a new setting', 'throwing it away', 'forgetting the characters'], answer: 'changing part of it, like a new setting', difficulty: 2 },
        { id: 'Y1-ENG-LE05-q3', type: 'mcq', prompt: 'If you retell "The Three Little Pigs" in the city, what changed?', options: ['the setting', 'the pigs are now cars', 'the whole idea of pigs'], answer: 'the setting', difficulty: 2 },
        { id: 'Y1-ENG-LE05-q4', type: 'mcq', prompt: 'Which words often start a retelling of a fairy tale?', options: ['"Once upon a time"', '"See you later"', '"Please and thank you"'], answer: '"Once upon a time"', difficulty: 1 },
        { id: 'Y1-ENG-LE05-q5', type: 'mcq', prompt: 'In a retelling, you should keep the…', options: ['characters and the main plot', 'only the ending', 'just the pictures'], answer: 'characters and the main plot', difficulty: 2 },
        { id: 'Y1-ENG-LE05-q6', type: 'short', prompt: 'Telling a story again in your own words is called a ____.', answer: 'retelling', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (15 CDs) ----------
  {
    id: 'Y1-ENG-LY01',
    title: 'Text purposes',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Every text has a job - a recipe tells you how to cook, a story makes you smile, and a poster makes you want to join in.',
        'The clues are in the words and pictures, so look for them!',
        'When you know the job of a text, reading is easier and smarter.',
      ],
      illustrations: [
        {
          brief: 'A book, a map and a speaker showing that every text has a purpose',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'story - to entertain' }, { icon: 'map', label: 'map - to show the way' }, { icon: 'speaker', label: 'announcement - to tell you' }], caption: 'Every text has a purpose' },
        },
        {
          brief: 'Flow of spotting purpose: look at the text, ask its job, match the clues',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Look at the text' }, { text: 'Ask "what is its job?"' }, { text: 'Match the clues to the purpose' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY01-q1', type: 'mcq', prompt: 'A recipe book is made to…', options: ['tell you how to cook', 'tell a made-up story', 'sell you a toy'], answer: 'tell you how to cook', difficulty: 2 },
        { id: 'Y1-ENG-LY01-q2', type: 'mcq', prompt: 'A story about a friendly dragon is made to…', options: ['entertain you', 'give a weather report', 'be a maths test'], answer: 'entertain you', difficulty: 1 },
        { id: 'Y1-ENG-LY01-q3', type: 'mcq', prompt: 'A poster that says "Come to the school fair!" wants you to…', options: ['join in and come along', 'go to sleep', 'do homework'], answer: 'join in and come along', difficulty: 2 },
        { id: 'Y1-ENG-LY01-q4', type: 'mcq', prompt: 'The purpose of a text is its…', options: ['job or reason for being made', 'colour', 'size'], answer: 'job or reason for being made', difficulty: 2 },
        { id: 'Y1-ENG-LY01-q5', type: 'mcq', prompt: 'A book that tells real facts about koalas is made to…', options: ['inform you', 'make you sneeze', 'be a song'], answer: 'inform you', difficulty: 1 },
        { id: 'Y1-ENG-LY01-q6', type: 'short', prompt: 'The job of a text is called its ____.', answer: 'purpose', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY02',
    title: 'Interaction skills',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Good talking is a game of pass it on - I say my turn, then it is yours.',
        'Active listening means looking at the speaker, waiting, and thinking about their words.',
        'You can respond with "I agree" or ask a question to keep the talk going!',
      ],
      illustrations: [
        {
          brief: 'People, an eye and a chat-bubble showing turn-taking and active listening',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'taking turns' }, { icon: 'eye', label: 'look and listen' }, { icon: 'chat-bubble', label: 'your turn to speak' }], caption: 'Turn-taking and active listening' },
        },
        {
          brief: 'Flow of a good conversation: listen, wait, speak clearly, respond',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Listen carefully' }, { text: 'Wait for your turn' }, { text: 'Speak clearly' }, { text: 'Respond kindly' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY02-q1', type: 'mcq', prompt: 'When it is your friend\'s turn to talk, you should…', options: ['listen and wait', 'talk over them', 'sing loudly'], answer: 'listen and wait', difficulty: 1 },
        { id: 'Y1-ENG-LY02-q2', type: 'mcq', prompt: 'Active listening means you are…', options: ['watching and thinking about the words', 'closing your eyes to sleep', 'drawing on your shoe'], answer: 'watching and thinking about the words', difficulty: 2 },
        { id: 'Y1-ENG-LY02-q3', type: 'mcq', prompt: 'A good way to respond to a friend is…', options: ['"That is a great idea!"', '"Not now."', 'shouting over them'], answer: '"That is a great idea!"', difficulty: 1 },
        { id: 'Y1-ENG-LY02-q4', type: 'mcq', prompt: 'Turn-taking means you…', options: ['each get a chance to speak', 'only you talk', 'never talk'], answer: 'each get a chance to speak', difficulty: 1 },
        { id: 'Y1-ENG-LY02-q5', type: 'mcq', prompt: 'Speaking clearly helps others…', options: ['understand your words', 'finish your lunch', 'forget what you said'], answer: 'understand your words', difficulty: 1 },
        { id: 'Y1-ENG-LY02-q6', type: 'short', prompt: 'Waiting for your turn to talk is called turn-____.', answer: 'taking', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY03',
    title: 'Imaginative, informative & persuasive',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Imaginative texts are made-up stories, informative texts give real facts, and persuasive texts try to make you agree.',
        '"The unicorn flew over the rainbow" is imaginative; "Koalas eat leaves" is informative; "Choose our club!" is persuasive.',
        'Spotting the three types makes you a text detective!',
      ],
      illustrations: [
        {
          brief: 'A picture-frame, a newspaper and a speaker showing the three kinds of texts',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'imaginative - made up' }, { icon: 'newspaper', label: 'informative - real facts' }, { icon: 'speaker', label: 'persuasive - win you over' }], caption: 'Three kinds of texts' },
        },
        {
          brief: 'Flow of sorting a text: made up, real facts, or wanting agreement',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Is it made up?' }, { text: 'Is it real facts?' }, { text: 'Does it want you to agree?' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY03-q1', type: 'mcq', prompt: 'A made-up story about a talking fish is…', options: ['imaginative', 'informative', 'persuasive'], answer: 'imaginative', difficulty: 1 },
        { id: 'Y1-ENG-LY03-q2', type: 'mcq', prompt: '"Apples grow on trees." is…', options: ['informative', 'imaginative', 'persuasive'], answer: 'informative', difficulty: 2 },
        { id: 'Y1-ENG-LY03-q3', type: 'mcq', prompt: 'A text that says "Please come to my party!" wants you to…', options: ['agree and come', 'do a maths sum', 'close the book'], answer: 'agree and come', difficulty: 2 },
        { id: 'Y1-ENG-LY03-q4', type: 'mcq', prompt: 'Which is a real fact about dogs?', options: ['Dogs have wet noses.', 'Dogs are the best.', 'Dogs wear superhero capes.'], answer: 'Dogs have wet noses.', difficulty: 2 },
        { id: 'Y1-ENG-LY03-q5', type: 'mcq', prompt: 'A poster with real facts about recycling is…', options: ['informative', 'imaginative', 'a fairy tale'], answer: 'informative', difficulty: 2 },
        { id: 'Y1-ENG-LY03-q6', type: 'short', prompt: 'A made-up story from your imagination is ____ (imaginative or informative)?', answer: 'imaginative', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY04',
    title: 'Reading decodable & authentic texts',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Sound out words you know the parts of - c-a-t makes "cat"!',
        'Read a little group of words together so your reading flows like a stream, not a choppy train.',
        'If a sentence stops making sense, stop, go back, and fix it - that is what smart readers do.',
      ],
      illustrations: [
        {
          brief: 'A magnifier, a book and a rotate-arrow showing sounding out, reading and fixing mistakes',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'magnifier', label: 'sound it out' }, { icon: 'book', label: 'read the words' }, { icon: 'rotate-arrow', label: 'go back and fix it' }], caption: 'Sound it out, read smoothly, fix mistakes' },
        },
        {
          brief: 'Flow of reading: sound out, read smoothly, check meaning, fix',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Sound out the word' }, { text: 'Read the sentence smoothly' }, { text: 'Check it makes sense' }, { text: 'Fix it if not' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY04-q1', type: 'mcq', prompt: 'c-a-t sounds out to…', options: ['cat', 'dog', 'hat'], answer: 'cat', difficulty: 1 },
        { id: 'Y1-ENG-LY04-q2', type: 'mcq', prompt: 'If your reading stops making sense, you should…', options: ['stop and go back to fix it', 'keep going no matter what', 'close the book forever'], answer: 'stop and go back to fix it', difficulty: 2 },
        { id: 'Y1-ENG-LY04-q3', type: 'mcq', prompt: 'Reading a few words together smoothly is called…', options: ['fluency/phrasing', 'skipping', 'shouting'], answer: 'fluency/phrasing', difficulty: 2 },
        { id: 'Y1-ENG-LY04-q4', type: 'mcq', prompt: 'Which words can you sound out?', options: ['cat, hop, sit', 'the, was, said', 'Australia'], answer: 'cat, hop, sit', difficulty: 1 },
        { id: 'Y1-ENG-LY04-q5', type: 'mcq', prompt: 'When you read "The big dog ran", you should read it…', options: ['smoothly, like talking', 'one letter at a time', 'super fast with no pause'], answer: 'smoothly, like talking', difficulty: 2 },
        { id: 'Y1-ENG-LY04-q6', type: 'short', prompt: 'What word do the sounds c-a-t make?', answer: 'cat', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY05',
    title: 'Comprehension strategies',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Good readers make movies in their minds - close your eyes and picture the scene!',
        'Before you read, guess what might happen next. After you read, say the story in one small sentence.',
        'Ask yourself "Why did that happen?" to figure out things the words do not say out loud.',
      ],
      illustrations: [
        {
          brief: 'An eye, a crystal-ball and a brain showing visualising, predicting and questioning',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'visualise - picture it' }, { icon: 'crystal-ball', label: 'predict - what next' }, { icon: 'brain', label: 'question - why?' }], caption: 'Picture it, predict and ask questions' },
        },
        {
          brief: 'Flow of comprehension: predict, picture the scene, summarise',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Predict what comes next' }, { text: 'Picture the scene' }, { text: 'Summarise in one sentence' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY05-q1', type: 'mcq', prompt: 'Making a picture in your mind as you read is called…', options: ['visualising', 'singing', 'counting'], answer: 'visualising', difficulty: 2 },
        { id: 'Y1-ENG-LY05-q2', type: 'mcq', prompt: 'Guessing what might happen next before you read it is…', options: ['predicting', 'erasing', 'sleeping'], answer: 'predicting', difficulty: 1 },
        { id: 'Y1-ENG-LY05-q3', type: 'mcq', prompt: 'Telling the main idea of a story in one short sentence is…', options: ['summarising', 'drawing', 'hopping'], answer: 'summarising', difficulty: 2 },
        { id: 'Y1-ENG-LY05-q4', type: 'mcq', prompt: 'The story says "Mia hugged her teddy tight." What might Mia be feeling?', options: ['scared or needing comfort', 'hungry for a hot dog', 'ready to do maths'], answer: 'scared or needing comfort', difficulty: 2 },
        { id: 'Y1-ENG-LY05-q5', type: 'mcq', prompt: 'Asking "Why did that happen?" helps you…', options: ['understand the story better', 'find your shoes', 'skip the story'], answer: 'understand the story better', difficulty: 2 },
        { id: 'Y1-ENG-LY05-q6', type: 'short', prompt: 'A story that reminds you of something that happened to you is a ____ to your own life.', answer: 'connection', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY06',
    title: 'Creating short written texts',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY06' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You can write a short text like a recount of your weekend - "On Saturday I went to the beach."',
        'Re-read your writing like a checker: does it make sense, does it start with a capital, and does it end with a full stop?',
        'Fix it up and your writing shines!',
      ],
      illustrations: [
        {
          brief: 'A pen, an eye and a check-box showing write, re-read and fix up',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'write it' }, { icon: 'eye', label: 're-read it' }, { icon: 'check-box', label: 'fix it up' }], caption: 'Write, re-read, fix up' },
        },
        {
          brief: 'Flow of writing a short text: write, re-read, fix, share',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Write your ideas in sentences' }, { text: 'Re-read your work' }, { text: 'Fix capitals and full stops' }, { text: 'Share it' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY06-q1', type: 'mcq', prompt: 'Which is written correctly?', options: ['On Saturday I went to the beach.', 'on saturday i went to the beach', 'On saturday I went to the beach'], answer: 'On Saturday I went to the beach.', difficulty: 2 },
        { id: 'Y1-ENG-LY06-q2', type: 'mcq', prompt: 'After you write, a good thing to do is…', options: ['re-read and fix mistakes', 'throw it away', 'never look again'], answer: 're-read and fix mistakes', difficulty: 1 },
        { id: 'Y1-ENG-LY06-q3', type: 'mcq', prompt: 'A sentence should start with…', options: ['a capital letter', 'a small letter', 'a picture'], answer: 'a capital letter', difficulty: 1 },
        { id: 'Y1-ENG-LY06-q4', type: 'mcq', prompt: 'Which sentence has a full stop at the end?', options: ['The dog ran.', 'The dog ran', 'the dog ran'], answer: 'The dog ran.', difficulty: 2 },
        { id: 'Y1-ENG-LY06-q5', type: 'mcq', prompt: '"I went to the park. I played on the swings." This tells…', options: ['what you did in order', 'a weather report', 'a recipe'], answer: 'what you did in order', difficulty: 2 },
        { id: 'Y1-ENG-LY06-q6', type: 'short', prompt: 'Fix the spelling: "I hav a cat." should spell ____ instead of "hav".', answer: 'have', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY07',
    title: 'Oral presentations',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY07' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A talk has three parts: a hello at the start, your ideas in the middle, and a "thank you" at the end.',
        'Speak slowly and loudly enough, and look at your friends while you talk.',
        'You can hold up a picture to make your talk even better!',
      ],
      illustrations: [
        {
          brief: 'A mic, people and a picture-frame showing clear speaking, eye contact and a prop',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'speak clearly' }, { icon: 'people', label: 'look at your friends' }, { icon: 'picture-frame', label: 'show a picture' }], caption: 'Open, middle and end - with a big smile' },
        },
        {
          brief: 'Flow of a talk: opening, middle, ending',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Opening - say hello and your topic' }, { text: 'Middle - share your ideas' }, { text: 'Ending - say thank you' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY07-q1', type: 'mcq', prompt: 'What do you do at the start of your talk?', options: ['say hello and your topic', 'run away', 'close your eyes'], answer: 'say hello and your topic', difficulty: 1 },
        { id: 'Y1-ENG-LY07-q2', type: 'mcq', prompt: 'The middle of your talk is where you…', options: ['share your ideas', 'say goodbye', 'sit down silently'], answer: 'share your ideas', difficulty: 1 },
        { id: 'Y1-ENG-LY07-q3', type: 'mcq', prompt: 'At the end of a talk, it is good to…', options: ['say thank you to your audience', 'start again from the beginning', 'forget the ending'], answer: 'say thank you to your audience', difficulty: 2 },
        { id: 'Y1-ENG-LY07-q4', type: 'mcq', prompt: 'When you present, you should speak…', options: ['slowly and clearly', 'so quietly no one hears', 'all in one breath super fast'], answer: 'slowly and clearly', difficulty: 1 },
        { id: 'Y1-ENG-LY07-q5', type: 'mcq', prompt: 'While you talk, you should look at…', options: ['your audience', 'your shoes', 'the ceiling'], answer: 'your audience', difficulty: 1 },
        { id: 'Y1-ENG-LY07-q6', type: 'short', prompt: 'The very first part of your talk is called the ____.', answer: 'opening', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY08',
    title: 'Handwriting (unjoined letters)',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY08' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Letters sit on the line like little people on the ground - tall ones like "b" and "d" reach up high.',
        'In Year 1 you write letters one by one, not joined together, so everyone can read your words.',
        'Take your time, form each letter neatly, and your writing will be a treat to read!',
      ],
      illustrations: [
        {
          brief: 'A pen, a ruler and a check-box showing neat unjoined letters on the line',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'form each letter' }, { icon: 'ruler', label: 'stay on the line' }, { icon: 'check-box', label: 'neat and clear' }], caption: 'Neat unjoined letters on the line' },
        },
        {
          brief: 'Flow of forming a letter: start right, form neatly, stay on the line',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Start at the right spot' }, { text: 'Form the letter neatly' }, { text: 'Keep it on the line' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY08-q1', type: 'mcq', prompt: 'In Year 1, your handwriting letters should be…', options: ['unjoined and neat', 'joined in one long line', 'scribbly'], answer: 'unjoined and neat', difficulty: 1 },
        { id: 'Y1-ENG-LY08-q2', type: 'mcq', prompt: 'Tall letters like "b" and "d" reach up to…', options: ['the top line', 'the bottom of the page', 'the ceiling'], answer: 'the top line', difficulty: 2 },
        { id: 'Y1-ENG-LY08-q3', type: 'mcq', prompt: 'Which word is written with a capital letter at the start?', options: ['Sam', 'sam', 'sAM'], answer: 'Sam', difficulty: 1 },
        { id: 'Y1-ENG-LY08-q4', type: 'mcq', prompt: 'Letters should sit on the…', options: ['line', 'ceiling', 'corner'], answer: 'line', difficulty: 1 },
        { id: 'Y1-ENG-LY08-q5', type: 'mcq', prompt: 'When you write, you should…', options: ['take your time and be neat', 'rush and scribble', 'close your eyes'], answer: 'take your time and be neat', difficulty: 1 },
        { id: 'Y1-ENG-LY08-q6', type: 'short', prompt: 'The opposite of joined-up letters are ____ letters.', answer: 'unjoined', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY09',
    title: 'Segmenting words into phonemes',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY09' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Breaking a word into its sounds is like popping a bubble - c-a-t has three sounds.',
        'Some words start with two sounds squished together, like "s-t" in "stop" - that is a blend.',
        'Tap the sounds on your fingers and you will hear them clearly!',
      ],
      illustrations: [
        {
          brief: 'A burst, a paw and an arrow-right showing popping and tapping out sounds in a word',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'burst', label: 'pop the sounds' }, { icon: 'paw', label: 'tap your fingers' }, { icon: 'arrow-right', label: 's-t-o-p' }], caption: 'Tap out the sounds in words' },
        },
        {
          brief: 'Flow of segmenting: say the word slowly, tap each sound, count',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Say the word slowly' }, { text: 'Tap each sound' }, { text: 'Count the sounds' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY09-q1', type: 'mcq', prompt: 'How many sounds (phonemes) are in "cat"? c-a-t', options: ['3', '2', '5'], answer: '3', difficulty: 1 },
        { id: 'Y1-ENG-LY09-q2', type: 'mcq', prompt: 'How many sounds are in "dog"? d-o-g', options: ['3', '4', '2'], answer: '3', difficulty: 1 },
        { id: 'Y1-ENG-LY09-q3', type: 'mcq', prompt: 'The "s-t" at the start of "stop" is called a…', options: ['consonant blend', 'full stop', 'capital letter'], answer: 'consonant blend', difficulty: 2 },
        { id: 'Y1-ENG-LY09-q4', type: 'mcq', prompt: 'How many sounds are in "fish"? f-i-sh', options: ['3', '4', '2'], answer: '3', difficulty: 2 },
        { id: 'Y1-ENG-LY09-q5', type: 'mcq', prompt: 'Which word starts with a consonant blend?', options: ['stop', 'cat', 'sun'], answer: 'stop', difficulty: 2 },
        { id: 'Y1-ENG-LY09-q6', type: 'short', prompt: 'c-a-t has ____ sounds.', answer: '3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY10',
    title: 'Manipulating phonemes',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY10' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Swap one sound and you get a new word - change the "c" in "cat" to "h" and you get "hat"!',
        'Take the first sound away from "bat" and "at" is left.',
        'Add a sound to the start of "at" and you can make "cat" or "hat" - sounds are building blocks!',
      ],
      illustrations: [
        {
          brief: 'A cat, an arrow-right and a burst showing swapping a sound to make a new word',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cat', label: 'cat' }, { icon: 'arrow-right', label: 'swap a sound' }, { icon: 'burst', label: 'hat!' }], caption: 'Swap a sound, make a new word' },
        },
        {
          brief: 'Flow of changing a word: say it, change one sound, say the new word',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Say the word' }, { text: 'Change one sound' }, { text: 'Say the new word' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY10-q1', type: 'mcq', prompt: 'Change the first sound in "cat" to "h". What is the new word?', options: ['hat', 'cut', 'cap'], answer: 'hat', difficulty: 1 },
        { id: 'Y1-ENG-LY10-q2', type: 'mcq', prompt: 'Change the first sound in "sun" to "r". What is the new word?', options: ['run', 'sum', 'sand'], answer: 'run', difficulty: 1 },
        { id: 'Y1-ENG-LY10-q3', type: 'mcq', prompt: 'Take the "b" off the start of "bat". What is left?', options: ['at', 'ab', 'ba'], answer: 'at', difficulty: 2 },
        { id: 'Y1-ENG-LY10-q4', type: 'mcq', prompt: 'Add "c" to the start of "at". What is the new word?', options: ['cat', 'at', 'hat'], answer: 'cat', difficulty: 1 },
        { id: 'Y1-ENG-LY10-q5', type: 'mcq', prompt: 'Change the middle sound in "pin" to "a". What is the new word?', options: ['pan', 'pun', 'pot'], answer: 'pan', difficulty: 2 },
        { id: 'Y1-ENG-LY10-q6', type: 'short', prompt: 'Change the first sound of "dog" to "f". The new word is ____.', answer: 'fog', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY11',
    title: 'Short/long vowels & blends',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY11' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Short vowels say their quick sound, like "a" in cat, while long vowels say their name, like "a" in cake.',
        'A digraph is two letters making one sound, like "sh" in ship or "ee" in bee.',
        'Blends like "fl" in flag squeeze two sounds together - try them and the word pops out!',
      ],
      illustrations: [
        {
          brief: 'A cat, a ship and a flag showing a short vowel, a digraph and a blend',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cat', label: 'a in cat - short' }, { icon: 'ship', label: 'sh in ship - digraph' }, { icon: 'flag', label: 'fl in flag - blend' }], caption: 'Short vowels, digraphs and blends' },
        },
        {
          brief: 'Flow of using patterns: say the word, find the pattern, read or write it',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Say the word' }, { text: 'Find the vowel or blend pattern' }, { text: 'Read or write the word' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY11-q1', type: 'mcq', prompt: 'Which word has the short "a" sound?', options: ['cat', 'cake', 'day'], answer: 'cat', difficulty: 2 },
        { id: 'Y1-ENG-LY11-q2', type: 'mcq', prompt: '"sh" in "ship" is a…', options: ['digraph (two letters, one sound)', 'blend (two sounds)', 'capital letter'], answer: 'digraph (two letters, one sound)', difficulty: 2 },
        { id: 'Y1-ENG-LY11-q3', type: 'mcq', prompt: 'Which word starts with the blend "fl"?', options: ['flag', 'fish', 'fog'], answer: 'flag', difficulty: 1 },
        { id: 'Y1-ENG-LY11-q4', type: 'mcq', prompt: '"ee" in "bee" makes one sound. Which word has the same long "e" sound?', options: ['see', 'sun', 'bed'], answer: 'see', difficulty: 2 },
        { id: 'Y1-ENG-LY11-q5', type: 'mcq', prompt: 'Which word has a long vowel that says its name?', options: ['cake', 'cat', 'cap'], answer: 'cake', difficulty: 2 },
        { id: 'Y1-ENG-LY11-q6', type: 'short', prompt: 'Two letters that make one sound, like "sh", are called a ____.', answer: 'digraph', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY12',
    title: 'Letters, sounds & syllables',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY12' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'One letter can play more than one part - "g" sounds different in "go" and "gym".',
        'A syllable is a beat in a word, and every syllable has a vowel sound - "but-ter-fly" has three beats.',
        'Clap the beats and count them - "elephant" has three claps!',
      ],
      illustrations: [
        {
          brief: 'A paw, a music note and a burst showing clapping beats and counting syllables',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: 'clap each beat' }, { icon: 'music-note', label: 'one beat = one vowel sound' }, { icon: 'burst', label: 'el-e-phant - three claps' }], caption: 'Syllables are the beats in words' },
        },
        {
          brief: 'Flow of counting syllables: say it slowly, clap each beat, count',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Say the word slowly' }, { text: 'Clap each beat' }, { text: 'Count the syllables' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY12-q1', type: 'mcq', prompt: 'How many syllables are in "cat"? (c-at)', options: ['1', '2', '3'], answer: '1', difficulty: 1 },
        { id: 'Y1-ENG-LY12-q2', type: 'mcq', prompt: 'How many syllables are in "butterfly"? (but-ter-fly)', options: ['3', '1', '5'], answer: '3', difficulty: 2 },
        { id: 'Y1-ENG-LY12-q3', type: 'mcq', prompt: 'Every syllable must have a…', options: ['vowel sound', 'capital letter', 'full stop'], answer: 'vowel sound', difficulty: 2 },
        { id: 'Y1-ENG-LY12-q4', type: 'mcq', prompt: 'How many syllables are in "elephant"? (el-e-phant)', options: ['3', '2', '4'], answer: '3', difficulty: 2 },
        { id: 'Y1-ENG-LY12-q5', type: 'mcq', prompt: 'The letter "g" sounds different in "go" than in…', options: ['gym', 'got', 'gum'], answer: 'gym', difficulty: 2 },
        { id: 'Y1-ENG-LY12-q6', type: 'short', prompt: 'The beats in a word are called ____.', answer: 'syllables', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY13',
    title: 'Spelling with common letter patterns',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY13' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Spelling is easier when you know the patterns - "ck" at the end like "duck", and "ai" like "rain".',
        'Say the word, think of the pattern, then write the letters down.',
        'Practise a little each day and your spelling power grows!',
      ],
      illustrations: [
        {
          brief: 'A droplet, a lock and a check-box showing the ai, oo and ck spelling patterns',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'droplet', label: 'rain - ai' }, { icon: 'lock', label: 'look - oo' }, { icon: 'check-box', label: 'duck - ck' }], caption: 'Spelling patterns help you write words' },
        },
        {
          brief: 'Flow of spelling: say the word, think of the pattern, write, check',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Say the word' }, { text: 'Think of the letter pattern' }, { text: 'Write it' }, { text: 'Check it' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY13-q1', type: 'mcq', prompt: 'Which spelling is correct?', options: ['duck', 'duk', 'dck'], answer: 'duck', difficulty: 1 },
        { id: 'Y1-ENG-LY13-q2', type: 'mcq', prompt: 'Which spelling is correct?', options: ['rain', 'rane', 'ran'], answer: 'rain', difficulty: 2 },
        { id: 'Y1-ENG-LY13-q3', type: 'mcq', prompt: 'Which word starts with the "sh" pattern?', options: ['shop', 'stop', 'slop'], answer: 'shop', difficulty: 1 },
        { id: 'Y1-ENG-LY13-q4', type: 'mcq', prompt: 'Which word is spelled correctly?', options: ['look', 'luk', 'loook'], answer: 'look', difficulty: 1 },
        { id: 'Y1-ENG-LY13-q5', type: 'mcq', prompt: 'Which word has "ee" like in "see"?', options: ['tree', 'ten', 'tap'], answer: 'tree', difficulty: 2 },
        { id: 'Y1-ENG-LY13-q6', type: 'short', prompt: 'Fix the spelling: "The duk swam." should spell ____ instead of "duk".', answer: 'duck', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY14',
    title: 'High-frequency words',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY14' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Some words pop up in almost every book - words like "the", "and", "was", "said" and "you".',
        'These words often cannot be sounded out, so we learn to know them in a flash - like old friends!',
        'Spot them in your reading, then write them - you will see them everywhere!',
      ],
      illustrations: [
        {
          brief: 'An eye, a book and a pen showing spotting, reading and writing tricky words',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'spot them in a flash' }, { icon: 'book', label: 'see them in books' }, { icon: 'pen', label: 'write them too' }], caption: 'Learn tricky words in a flash' },
        },
        {
          brief: 'Flow of learning a sight word: look, say, write, use it',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Look at the word' }, { text: 'Say it' }, { text: 'Write it' }, { text: 'Use it in a sentence' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY14-q1', type: 'mcq', prompt: 'Which is a high-frequency word you see in almost every book?', options: ['the', 'butterfly', 'Australia'], answer: 'the', difficulty: 1 },
        { id: 'Y1-ENG-LY14-q2', type: 'mcq', prompt: 'Which word is often tricky to sound out, so we learn it by sight?', options: ['said', 'cat', 'hop'], answer: 'said', difficulty: 2 },
        { id: 'Y1-ENG-LY14-q3', type: 'mcq', prompt: 'Which sentence uses the sight word "was" correctly?', options: ['The dog was in the yard.', 'The dog was jump.', 'Was the dog and.'], answer: 'The dog was in the yard.', difficulty: 2 },
        { id: 'Y1-ENG-LY14-q4', type: 'mcq', prompt: 'Which word is a high-frequency word?', options: ['and', 'giraffe', 'sparkle'], answer: 'and', difficulty: 1 },
        { id: 'Y1-ENG-LY14-q5', type: 'mcq', prompt: 'Which sentence uses "you" correctly?', options: ['You are my friend.', 'You is my friend.', 'The you friend.'], answer: 'You are my friend.', difficulty: 2 },
        { id: 'Y1-ENG-LY14-q6', type: 'short', prompt: 'Complete the sentence: "I ___ to the shop with Mum."', answer: 'went', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-ENG-LY15',
    title: 'Morphemes & word families',
    year: '1',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E1LY15' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Add a little ending and a word becomes a family! "Jump" grows into "jumps", "jumped" and "jumping".',
        '"s" can make a noun more than one, like "cat" to "cats", and "ed" and "ing" change the time of a doing word.',
        'Look for word families and your brain will grow stronger.',
      ],
      illustrations: [
        {
          brief: 'A runner, an arrow-right and a burst showing a word growing into a family',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'runner', label: 'jump' }, { icon: 'arrow-right', label: 'add endings' }, { icon: 'burst', label: 'jumps, jumped, jumping' }], caption: 'Word families grow from one word' },
        },
        {
          brief: 'Flow of building a word family: base word, add endings, make the family',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Start with the base word' }, { text: 'Add "s", "ed" or "ing"' }, { text: 'Make the word family' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-ENG-LY15-q1', type: 'mcq', prompt: 'Which is a word family?', options: ['jump, jumps, jumped, jumping', 'jump, run, hop', 'jump, boat, tree'], answer: 'jump, jumps, jumped, jumping', difficulty: 2 },
        { id: 'Y1-ENG-LY15-q2', type: 'mcq', prompt: 'Add "s" to "cat" to make it more than one. What do you get?', options: ['cats', 'cates', 'cat'], answer: 'cats', difficulty: 1 },
        { id: 'Y1-ENG-LY15-q3', type: 'mcq', prompt: 'What does adding "ed" to "walk" give you?', options: ['walked', 'walks', 'walking'], answer: 'walked', difficulty: 1 },
        { id: 'Y1-ENG-LY15-q4', type: 'mcq', prompt: 'Which word means walking right now?', options: ['walking', 'walked', 'walk'], answer: 'walking', difficulty: 2 },
        { id: 'Y1-ENG-LY15-q5', type: 'mcq', prompt: 'The base word in "jumping" is…', options: ['jump', 'jumping', 'ing'], answer: 'jump', difficulty: 2 },
        { id: 'Y1-ENG-LY15-q6', type: 'short', prompt: 'Add "ing" to "jump". The new word is ____.', answer: 'jumping', difficulty: 2 },
      ],
    },
  },
];
