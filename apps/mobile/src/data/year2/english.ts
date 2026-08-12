import type { Topic } from '../../types/curriculum';

/**
 * Year 2 English — full topic bank.
 * Source of truth for scope: docs/content/year-1-5/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E2xxx
 * content-description code. Each lesson is original authored content (we
 * reference CD codes, never bulk-copy syllabus text). Each assignment carries
 * 6 questions (nominal pace) / 4 (compact pace), per
 * docs/specs/adaptive-pacing.md's depth-compression model. Every illustration
 * slot renders a real vector `diagram` (see
 * src/components/illustrations/diagrams.tsx) — icon-scene scenes for English,
 * never emoji.
 */
export const YEAR2_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (10 CDs) ----------
  {
    id: 'Y2-ENG-LA01',
    title: 'Interpersonal language choices',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'The words you choose can change with who you are talking to and what your job is in the conversation.',
        'Asking a teacher "Please may I sharpen my pencil?" sounds very different from "Hey, can I borrow your sharpener?" to a friend.',
        'Using please, thank you and a kind voice helps everyone feel safe and respected.',
      ],
      illustrations: [
        {
          brief: 'Polite request to a teacher versus a casual request to a friend',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"Please may I…"' }, { icon: 'people', label: 'to a teacher' }, { icon: 'chat-bubble', label: '"Hey, got a pencil?"' }], caption: 'Words change with the person you are talking to' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA01-q1', type: 'mcq', prompt: 'Which is a polite way to ask a friend for a turn on the swing?', options: ['May I please have a turn when you finish?', 'Give me the swing now!', 'I want the swing.'], answer: 'May I please have a turn when you finish?', difficulty: 1 },
        { id: 'Y2-ENG-LA01-q2', type: 'mcq', prompt: 'Which word makes a request more polite?', options: ['Please', 'Now', 'Mine'], answer: 'Please', difficulty: 1 },
        { id: 'Y2-ENG-LA01-q3', type: 'short', prompt: 'Add one word to make this request polite: "_____ may I go to the toilet?"', answer: 'Please', difficulty: 1 },
        { id: 'Y2-ENG-LA01-q4', type: 'mcq', prompt: 'When you talk to a teacher, your words usually need to be…', options: ['Respectful and polite', 'Very loud', 'Exactly like talking to a pet'], answer: 'Respectful and polite', difficulty: 2 },
        { id: 'Y2-ENG-LA01-q5', type: 'mcq', prompt: 'Which sentence sounds like a command, not a polite request?', options: ['Pass the glue!', 'Could you please pass the glue?', 'May I have the glue, please?'], answer: 'Pass the glue!', difficulty: 2 },
        { id: 'Y2-ENG-LA01-q6', type: 'mcq', prompt: 'In a shop, a shopkeeper might greet you by saying…', options: ['"Can I help you find something?"', '"Gimme your money!"', '"No talking!"'], answer: '"Can I help you find something?"', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA02',
    title: 'Language for appreciation & preference',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'When a story makes you smile, you can say why with words like "favourite" and "because".',
        '"I love the sleepy bear because he is so funny!" — that is an opinion with a reason.',
        'Giving a reason makes your opinion stronger and helps others understand you.',
      ],
      illustrations: [
        {
          brief: 'A book, a burst star and a smiley showing an opinion plus a reason',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: '"My favourite part…"' }, { icon: 'burst', label: 'because…' }, { icon: 'smiley', label: '"I love it!"' }], caption: 'Opinions sound stronger with a reason' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA02-q1', type: 'mcq', prompt: 'Which sentence gives a REASON for liking a book?', options: ['I like the book because the turtle is brave.', 'The book has a cover.', 'I read it at school.'], answer: 'I like the book because the turtle is brave.', difficulty: 1 },
        { id: 'Y2-ENG-LA02-q2', type: 'mcq', prompt: 'Which word joins your favourite thing with your reason?', options: ['because', 'the', 'at'], answer: 'because', difficulty: 1 },
        { id: 'Y2-ENG-LA02-q3', type: 'short', prompt: 'What word means the one you like best of all?', answer: 'favourite', difficulty: 1 },
        { id: 'Y2-ENG-LA02-q4', type: 'mcq', prompt: '"I love the song because it is bouncy." The reason here is…', options: ['it is bouncy', 'I love the song', 'the song'], answer: 'it is bouncy', difficulty: 2 },
        { id: 'Y2-ENG-LA02-q5', type: 'mcq', prompt: 'When you say "I prefer cats to dogs", you mean you…', options: ['like cats more than dogs', 'like dogs more than cats', 'do not like animals'], answer: 'like cats more than dogs', difficulty: 2 },
        { id: 'Y2-ENG-LA02-q6', type: 'mcq', prompt: 'Which is the BEST way to share appreciation of a friend\'s drawing?', options: ['"That is beautiful! I love the colours."', '"It is okay, I guess."', '"Drawing is easy."'], answer: '"That is beautiful! I love the colours."', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA03',
    title: 'Text organisation & language features',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Different kinds of texts are built in different ways.',
        'A story has a beginning, a middle and an end, but a recipe has steps in order, and a report groups facts under headings.',
        'Looking at how a text is organised helps you know what it is trying to do.',
      ],
      illustrations: [
        {
          brief: 'Flowchart of a story: beginning, middle and end',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Beginning — meet the characters' }, { text: 'Middle — something happens' }, { text: 'End — how it wraps up' }] },
        },
        {
          brief: 'A story, a recipe and a report as three different text shapes',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'story' }, { icon: 'clipboard', label: 'recipe steps' }, { icon: 'newspaper', label: 'report' }], caption: 'Purpose shapes how a text is built' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA03-q1', type: 'mcq', prompt: 'A story is usually organised into…', options: ['A beginning, a middle and an end', 'Only one long sentence', 'A list of ingredients'], answer: 'A beginning, a middle and an end', difficulty: 1 },
        { id: 'Y2-ENG-LA03-q2', type: 'mcq', prompt: 'Instructions for building a toy are best organised as…', options: ['Steps in the right order', 'A rhyming poem', 'A list of your friends'], answer: 'Steps in the right order', difficulty: 2 },
        { id: 'Y2-ENG-LA03-q3', type: 'mcq', prompt: 'A book about koalas that groups facts under headings is called…', options: ['A report', 'A recipe', 'A song'], answer: 'A report', difficulty: 2 },
        { id: 'Y2-ENG-LA03-q4', type: 'short', prompt: 'In a recipe, the steps must go in the right…', answer: 'order', difficulty: 1 },
        { id: 'Y2-ENG-LA03-q5', type: 'mcq', prompt: 'The way a text is organised mostly depends on its…', options: ['purpose', 'colour', 'the length of the title'], answer: 'purpose', difficulty: 2 },
        { id: 'Y2-ENG-LA03-q6', type: 'mcq', prompt: 'Which text would most likely use numbered steps?', options: ['How to make a paper plane', 'A story about a dragon', 'A poem about the rain'], answer: 'How to make a paper plane', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA04',
    title: 'Cohesion: pronouns & omitted words',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Pronouns like he, she, it and they are word-helpers that stop us repeating names.',
        '"Ben fed the dog. He loved it." — here "he" means Ben and "it" means the dog.',
        'Sometimes we can even leave a word out because the reader can guess it, and the text stays smooth.',
      ],
      illustrations: [
        {
          brief: 'A linking chain showing "Ben" → "he" and "the dog" → "it"',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: '"Ben"' }, { icon: 'link', label: '"he"' }, { icon: 'paw', label: '"the dog" → "it"' }], caption: 'Pronouns point back to the same idea' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA04-q1', type: 'mcq', prompt: 'In "Mia ate her apple. She was happy," the word "She" means…', options: ['Mia', 'the apple', 'a teacher'], answer: 'Mia', difficulty: 1 },
        { id: 'Y2-ENG-LA04-q2', type: 'mcq', prompt: 'Which word is a pronoun?', options: ['he', 'quickly', 'table'], answer: 'he', difficulty: 1 },
        { id: 'Y2-ENG-LA04-q3', type: 'short', prompt: 'What pronoun could replace "the book" in "The book is heavy"?', answer: 'it', difficulty: 1 },
        { id: 'Y2-ENG-LA04-q4', type: 'mcq', prompt: 'In "Max won the race. He cheered loudly," the word "He" saves us from repeating…', options: ['Max', 'the race', 'loudly'], answer: 'Max', difficulty: 2 },
        { id: 'Y2-ENG-LA04-q5', type: 'mcq', prompt: '"The bird sang and [the bird] flew away." The missing words are…', options: ['the bird', 'sang and', 'away'], answer: 'the bird', difficulty: 2 },
        { id: 'Y2-ENG-LA04-q6', type: 'mcq', prompt: 'Using pronouns instead of repeating names makes writing…', options: ['smoother and easier to read', 'longer and confusing', 'louder'], answer: 'smoother and easier to read', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA05',
    title: 'Navigating print & screen texts',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Books and apps have signposts that help you find things fast.',
        'In a book you can use the contents page and the index, and on a screen you tap menus, buttons and links.',
        'Knowing how to navigate means you never get lost in a big text.',
      ],
      illustrations: [
        {
          brief: 'A book contents page, a magnifier, and a screen link',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'contents & index' }, { icon: 'magnifier', label: 'find it fast' }, { icon: 'arrow-right', label: 'tap the link' }], caption: 'Signposts help you find your way' },
        },
        {
          brief: 'A phone screen with a menu, a drop-down list and a web link',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'phone', label: 'menu' }, { icon: 'box', label: 'drop-down list' }, { icon: 'globe', label: 'a web link' }], caption: 'Screens are full of buttons to tap' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA05-q1', type: 'mcq', prompt: 'Where would you look to find which page a chapter starts on?', options: ['The contents page', 'The cover', 'The last page'], answer: 'The contents page', difficulty: 1 },
        { id: 'Y2-ENG-LA05-q2', type: 'mcq', prompt: 'The index at the back of a book lists…', options: ['topics and the pages where you find them', 'the author\'s birthday', 'your friends'], answer: 'topics and the pages where you find them', difficulty: 2 },
        { id: 'Y2-ENG-LA05-q3', type: 'short', prompt: 'What do you tap on a screen to jump to another page?', answer: 'link', difficulty: 2 },
        { id: 'Y2-ENG-LA05-q4', type: 'mcq', prompt: 'A drop-down menu on a website lets you…', options: ['choose from a list of options', 'draw a picture', 'ring a bell'], answer: 'choose from a list of options', difficulty: 2 },
        { id: 'Y2-ENG-LA05-q5', type: 'mcq', prompt: 'The small words or pictures you tap to move around on a screen are called…', options: ['links or buttons', 'pizza', 'chapters'], answer: 'links or buttons', difficulty: 1 },
        { id: 'Y2-ENG-LA05-q6', type: 'mcq', prompt: 'If you tap a link by mistake on a website, you can usually…', options: ['go back with the back button', 'never fix it', 'throw the computer'], answer: 'go back with the back button', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA06',
    title: 'Compound sentences',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA06' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A compound sentence joins two short sentences with a joining word like and, but or so.',
        '"The sun came out" + "we played outside" becomes "The sun came out, so we played outside."',
        'Use and to add, but to surprise, and so to show what happens next.',
      ],
      illustrations: [
        {
          brief: 'Two ideas connected by the joining word "so" on train cars',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'train-car', label: '"The sun came out"' }, { icon: 'train-engine', label: '"so"' }, { icon: 'train-car', label: '"we played outside"' }], caption: 'Two ideas joined by a joining word' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA06-q1', type: 'mcq', prompt: 'Which sentence is a compound sentence?', options: ['The dog barked, and the cat ran.', 'The dog barked.', 'The dog.'], answer: 'The dog barked, and the cat ran.', difficulty: 1 },
        { id: 'Y2-ENG-LA06-q2', type: 'mcq', prompt: 'Which joining word shows a surprise or difference?', options: ['but', 'and', 'so'], answer: 'but', difficulty: 2 },
        { id: 'Y2-ENG-LA06-q3', type: 'mcq', prompt: 'Join "It was raining" and "we took an umbrella" using "so":', options: ['It was raining, so we took an umbrella.', 'It was raining so and we took an umbrella.', 'It was raining but we took an umbrella.'], answer: 'It was raining, so we took an umbrella.', difficulty: 2 },
        { id: 'Y2-ENG-LA06-q4', type: 'short', prompt: 'Fill in the joining word: "I was hungry, ______ I ate a sandwich."', answer: 'so', difficulty: 1 },
        { id: 'Y2-ENG-LA06-q5', type: 'mcq', prompt: 'Which joining word adds another idea?', options: ['and', 'but', 'so'], answer: 'and', difficulty: 1 },
        { id: 'Y2-ENG-LA06-q6', type: 'mcq', prompt: '"I wanted to go out, but it was stormy." The word "but" shows…', options: ['a difference or surprise', 'the same thing happening', 'nothing at all'], answer: 'a difference or surprise', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA07',
    title: 'Noun groups & verb groups',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA07' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You can grow a noun into a noun group by adding describing words: "dog" can become "the big, fluffy dog".',
        'A verb group grows too: "ran" can become "was running" or "has been running".',
        'Growing word groups makes your writing juicy and full of detail.',
      ],
      illustrations: [
        {
          brief: 'Blocks building up the noun group "the fluffy dog"',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: '"the"' }, { icon: 'box', label: '"fluffy"' }, { icon: 'box', label: '"dog"' }], caption: 'A noun group grows one word at a time' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA07-q1', type: 'mcq', prompt: 'Which is a noun group?', options: ['the tiny brave mouse', 'quickly', 'ran'], answer: 'the tiny brave mouse', difficulty: 1 },
        { id: 'Y2-ENG-LA07-q2', type: 'mcq', prompt: 'In "the shiny red bike", the describing words are…', options: ['shiny red', 'the bike', 'shiny bike'], answer: 'shiny red', difficulty: 2 },
        { id: 'Y2-ENG-LA07-q3', type: 'mcq', prompt: 'Which is a verb group?', options: ['was running', 'a hat', 'beautiful'], answer: 'was running', difficulty: 2 },
        { id: 'Y2-ENG-LA07-q4', type: 'short', prompt: 'In "She was sleeping", the verb group is…', answer: 'was sleeping', difficulty: 2 },
        { id: 'Y2-ENG-LA07-q5', type: 'mcq', prompt: 'A noun group usually starts with a small helper word like…', options: ['the, a, an', 'and, but, so', 'quickly, sadly'], answer: 'the, a, an', difficulty: 2 },
        { id: 'Y2-ENG-LA07-q6', type: 'mcq', prompt: 'Why do writers build noun groups?', options: ['To add detail so readers can picture things better', 'To make writing shorter', 'To hide information'], answer: 'To add detail so readers can picture things better', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA08',
    title: 'Images add or multiply meaning',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA08' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Pictures are not just for pretty — they add meaning and sometimes multiply it.',
        'A picture can show you what a strange new word looks like, or add a surprise that the words never mention.',
        'Looking closely at pictures makes you a super reader.',
      ],
      illustrations: [
        {
          brief: 'A picture frame and an eye looking closely beside an open book',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'the picture' }, { icon: 'eye', label: 'look closely' }, { icon: 'book', label: 'the words' }], caption: 'Words and pictures work together' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA08-q1', type: 'mcq', prompt: 'Why do information books include pictures?', options: ['To show what the words mean', 'To make the book heavy', 'To hide the words'], answer: 'To show what the words mean', difficulty: 1 },
        { id: 'Y2-ENG-LA08-q2', type: 'mcq', prompt: 'When a picture shows something the words never say, the picture is…', options: ['adding new meaning', 'being silly', 'a mistake'], answer: 'adding new meaning', difficulty: 2 },
        { id: 'Y2-ENG-LA08-q3', type: 'mcq', prompt: 'In a story, a picture of a sad face under words that say "The zoo is fun" tells you…', options: ['the character may not be having fun', 'the zoo is very loud', 'nothing at all'], answer: 'the character may not be having fun', difficulty: 2 },
        { id: 'Y2-ENG-LA08-q4', type: 'mcq', prompt: 'A picture of a strange new animal next to its name helps you…', options: ['know what it looks like', 'learn to add numbers', 'skip the page'], answer: 'know what it looks like', difficulty: 1 },
        { id: 'Y2-ENG-LA08-q5', type: 'short', prompt: 'What part of a page shows meaning with shapes and colours instead of words?', answer: 'picture', difficulty: 1 },
        { id: 'Y2-ENG-LA08-q6', type: 'mcq', prompt: '"Multiply meaning" means the words and picture together tell…', options: ['even more than each one alone', 'less than each one alone', 'the same thing twice'], answer: 'even more than each one alone', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA09',
    title: 'Vocabulary choices for topic',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA09' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Different topics use different special words.',
        'On a farm you might say "tractor" and "paddock"; at the beach you might say "waves" and "shells".',
        'Choosing the right words for your topic helps your readers see exactly what you mean.',
      ],
      illustrations: [
        {
          brief: 'A sunny beach scene with topic words: waves, fish and shells',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: 'at the beach' }, { icon: 'wave', label: '"waves"' }, { icon: 'fish', label: '"fish"' }], caption: 'Topic words paint the right picture' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA09-q1', type: 'mcq', prompt: 'Which words belong to a "doctor" topic?', options: ['stethoscope, bandage', 'tractor, paddock', 'telescope, planet'], answer: 'stethoscope, bandage', difficulty: 1 },
        { id: 'Y2-ENG-LA09-q2', type: 'mcq', prompt: 'For a story about space, which words fit best?', options: ['rocket, planet', 'pizza, plate', 'pencil, ruler'], answer: 'rocket, planet', difficulty: 1 },
        { id: 'Y2-ENG-LA09-q3', type: 'mcq', prompt: 'Choosing a strong, exact word instead of a boring one helps readers…', options: ['picture the topic better', 'run faster', 'forget the topic'], answer: 'picture the topic better', difficulty: 2 },
        { id: 'Y2-ENG-LA09-q4', type: 'short', prompt: 'Which word is more exact for "went" in a space story — "zoomed" or "walked"?', answer: 'zoomed', difficulty: 1 },
        { id: 'Y2-ENG-LA09-q5', type: 'mcq', prompt: 'A report about the ocean should mostly use words like…', options: ['waves, tide, fish', 'school, desk, bell', 'engine, brake, wheel'], answer: 'waves, tide, fish', difficulty: 1 },
        { id: 'Y2-ENG-LA09-q6', type: 'mcq', prompt: '"Experiment with vocabulary" means…', options: ['trying different word choices to see which fits best', 'throwing words in the bin', 'never changing a word'], answer: 'trying different word choices to see which fits best', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LA10',
    title: 'Capital letters in titles & commas in lists',
    year: '2',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E2LA10' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Titles start with capital letters to show they are important, like "The Big Red Bus".',
        'Commas in a list keep items separate: "I packed socks, a hat and a book."',
        'A comma is a little pause between the items in a list.',
      ],
      illustrations: [
        {
          brief: 'A bookmark with a title using capitals, and list items separated by commas',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'bookmark', label: '"The Big Red Bus"' }, { icon: 'box', label: 'socks' }, { icon: 'box', label: 'hat' }, { icon: 'box', label: 'book' }], caption: 'Capitals for titles, commas between list items' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LA10-q1', type: 'mcq', prompt: 'Which is the correct title?', options: ['The Big Red Bus', 'the big red bus', 'The big red bus'], answer: 'The Big Red Bus', difficulty: 1 },
        { id: 'Y2-ENG-LA10-q2', type: 'mcq', prompt: 'Which sentence uses commas correctly in a list?', options: ['I packed socks, a hat and a book.', 'I packed socks a hat and a book.', 'I, packed socks, a hat, a book.'], answer: 'I packed socks, a hat and a book.', difficulty: 1 },
        { id: 'Y2-ENG-LA10-q3', type: 'short', prompt: 'What punctuation mark separates items in a list?', answer: 'comma', difficulty: 1 },
        { id: 'Y2-ENG-LA10-q4', type: 'mcq', prompt: 'Where do the capital letters go in a title?', options: ['At the start of the important words', 'Nowhere', 'In the middle only'], answer: 'At the start of the important words', difficulty: 2 },
        { id: 'Y2-ENG-LA10-q5', type: 'mcq', prompt: '"We saw dogs, cats and birds." How many animals are in the list?', options: ['three', 'two', 'four'], answer: 'three', difficulty: 1 },
        { id: 'Y2-ENG-LA10-q6', type: 'mcq', prompt: 'Which sentence has correct list punctuation?', options: ['I like apples, pears and grapes.', 'I like apples pears and grapes.', 'I like, apples pears, and grapes.'], answer: 'I like apples, pears and grapes.', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y2-ENG-LE01',
    title: 'Characters & settings across cultures',
    year: '2',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E2LE01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Stories come from all over the world, and they are precious gifts.',
        'Australia\'s First Nations peoples are the world\'s oldest continuing cultures, and their stories often share deep knowledge about Country and caring for the land.',
        'Characters in stories from different places may live in very different settings — snowy lands, deserts or rainforests — but all of them can be brave and kind.',
      ],
      illustrations: [
        {
          brief: 'A globe, an open book and a group of people, showing stories from everywhere',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'stories from everywhere' }, { icon: 'book', label: 'sharing culture' }, { icon: 'people', label: 'brave & kind characters' }], caption: 'Every culture has special stories' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LE01-q1', type: 'mcq', prompt: 'Australia\'s First Nations peoples are known for…', options: ['the world\'s oldest continuing cultures and caring for Country', 'the newest culture in the world', 'never telling stories'], answer: 'the world\'s oldest continuing cultures and caring for Country', difficulty: 1 },
        { id: 'Y2-ENG-LE01-q2', type: 'mcq', prompt: 'A story from a snowy country might have a setting with…', options: ['snow, ice and warm coats', 'desert and camels', 'only swimming pools'], answer: 'snow, ice and warm coats', difficulty: 1 },
        { id: 'Y2-ENG-LE01-q3', type: 'mcq', prompt: 'Characters in stories from different cultures are…', options: ['able to be brave and kind, just like us', 'exactly the same in every way', 'not like people at all'], answer: 'able to be brave and kind, just like us', difficulty: 2 },
        { id: 'Y2-ENG-LE01-q4', type: 'mcq', prompt: 'First Nations Australian stories often teach about…', options: ['Country and caring for the land', 'how to use a phone', 'the price of toys'], answer: 'Country and caring for the land', difficulty: 2 },
        { id: 'Y2-ENG-LE01-q5', type: 'short', prompt: 'The time and place where a story happens is called its…', answer: 'setting', difficulty: 2 },
        { id: 'Y2-ENG-LE01-q6', type: 'mcq', prompt: 'Reading stories from many cultures helps you…', options: ['understand and respect different ways of living', 'only learn one way to live', 'stop reading forever'], answer: 'understand and respect different ways of living', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LE02',
    title: 'Features of literary texts',
    year: '2',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E2LE02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Stories are made of features: characters (who is in it), settings (where it happens) and the events that happen along the way.',
        'When you say what you like, give a reason — "I love the dragon because she is funny."',
        'Knowing the features helps you talk about any story you read.',
      ],
      illustrations: [
        {
          brief: 'Characters, a setting and a burst star showing the events of a story',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'characters' }, { icon: 'house', label: 'setting' }, { icon: 'burst', label: 'the events' }], caption: 'The pieces that make up a story' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LE02-q1', type: 'mcq', prompt: 'In a story, the characters are…', options: ['the people or animals in it', 'the cover', 'the last page'], answer: 'the people or animals in it', difficulty: 1 },
        { id: 'Y2-ENG-LE02-q2', type: 'mcq', prompt: 'The setting of a story is…', options: ['where and when it happens', 'the title', 'the author\'s name'], answer: 'where and when it happens', difficulty: 1 },
        { id: 'Y2-ENG-LE02-q3', type: 'mcq', prompt: 'Which is a reason to prefer a book?', options: ['"I like the bunny because she is brave."', '"The book has pages."', '"I read it at school."'], answer: '"I like the bunny because she is brave."', difficulty: 1 },
        { id: 'Y2-ENG-LE02-q4', type: 'short', prompt: 'The place where a story happens is called the…', answer: 'setting', difficulty: 2 },
        { id: 'Y2-ENG-LE02-q5', type: 'mcq', prompt: 'When we describe what happens in a story, we are talking about…', options: ['the events', 'the font', 'the page numbers'], answer: 'the events', difficulty: 2 },
        { id: 'Y2-ENG-LE02-q6', type: 'mcq', prompt: 'Giving a reason with your opinion makes it…', options: ['stronger and clearer', 'weaker', 'impossible'], answer: 'stronger and clearer', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LE03',
    title: 'How language presents characters & settings',
    year: '2',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E2LE03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'The words an author chooses paint characters and places.',
        '"The tiny, fierce mouse" feels very different from "the huge, sleepy bear".',
        'When you meet a character, hunt for the words that show what they are like.',
      ],
      illustrations: [
        {
          brief: 'Two word cards contrasting a tiny fierce mouse with a huge sleepy bear',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: '"tiny, fierce mouse"' }, { icon: 'arrow-right', label: 'vs' }, { icon: 'paw', label: '"huge, sleepy bear"' }], caption: 'Words change how we see characters' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LE03-q1', type: 'mcq', prompt: '"The enormous, grumpy giant" — which words describe the giant?', options: ['enormous, grumpy', 'the giant', 'the'], answer: 'enormous, grumpy', difficulty: 1 },
        { id: 'Y2-ENG-LE03-q2', type: 'mcq', prompt: '"The peaceful forest" sounds…', options: ['quiet and calm', 'noisy and wild', 'very cold'], answer: 'quiet and calm', difficulty: 2 },
        { id: 'Y2-ENG-LE03-q3', type: 'mcq', prompt: '"The bustling city" is full of…', options: ['busy people and noise', 'silence', 'snow'], answer: 'busy people and noise', difficulty: 3 },
        { id: 'Y2-ENG-LE03-q4', type: 'short', prompt: 'Which word in "the tiny, fierce mouse" tells you the mouse is bold?', answer: 'fierce', difficulty: 2 },
        { id: 'Y2-ENG-LE03-q5', type: 'mcq', prompt: 'Authors use describing words to help readers…', options: ['picture characters and places clearly', 'count the pages', 'finish faster'], answer: 'picture characters and places clearly', difficulty: 2 },
        { id: 'Y2-ENG-LE03-q6', type: 'mcq', prompt: 'Two authors describe the same place: one says "the gloomy forest", the other "the cheerful forest". This shows…', options: ['words can present the same place differently', 'one author made a mistake', 'forests are always gloomy'], answer: 'words can present the same place differently', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LE04',
    title: 'Rhythmic sound & word patterns',
    year: '2',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E2LE04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Poems, chants and songs love patterns of sound.',
        'Rhyming words end the same way (cat, hat), and rhythm is the beat you can clap along to.',
        'Listen for the bounce — you can even make up your own pattern!',
      ],
      illustrations: [
        {
          brief: 'A music note, a burst star for the beat and a speaker for rhythm',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: '"cat, hat, mat"' }, { icon: 'burst', label: 'clap the beat' }, { icon: 'speaker', label: 'hear the rhythm' }], caption: 'Sound patterns make words dance' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LE04-q1', type: 'mcq', prompt: 'Which pair of words rhymes?', options: ['sun, fun', 'sun, sand', 'sun, sea'], answer: 'sun, fun', difficulty: 1 },
        { id: 'Y2-ENG-LE04-q2', type: 'mcq', prompt: 'The beat you can clap along to in a poem is called…', options: ['rhythm', 'rhyme', 'spelling'], answer: 'rhythm', difficulty: 2 },
        { id: 'Y2-ENG-LE04-q3', type: 'mcq', prompt: 'Which word rhymes with "blue"?', options: ['glue', 'glow', 'grey'], answer: 'glue', difficulty: 1 },
        { id: 'Y2-ENG-LE04-q4', type: 'mcq', prompt: '"Silly Sally sang softly" uses a pattern of…', options: ['the same starting sound', 'rhyming endings', 'long words only'], answer: 'the same starting sound', difficulty: 3 },
        { id: 'Y2-ENG-LE04-q5', type: 'mcq', prompt: 'In a song, the part that repeats again and again is the…', options: ['chorus', 'page number', 'picture'], answer: 'chorus', difficulty: 2 },
        { id: 'Y2-ENG-LE04-q6', type: 'mcq', prompt: '"Tick tock, tick tock" is an example of a…', options: ['rhythmic word pattern', 'spelling rule', 'number pattern'], answer: 'rhythmic word pattern', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LE05',
    title: 'Creating literary texts',
    year: '2',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E2LE05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'You can become the author! Take a story you love and change something — a new character, a different ending, or a surprise twist.',
        'When you adapt a story, you keep what works and add your own brave ideas.',
        'Then read your story again and make it even better.',
      ],
      illustrations: [
        {
          brief: 'A pen, a favourite book and a burst star showing adding a twist',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'write your own' }, { icon: 'book', label: 'a story you love' }, { icon: 'burst', label: 'add a twist' }], caption: 'Adapt a story to make it yours' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LE05-q1', type: 'mcq', prompt: 'To "adapt" a story means to…', options: ['change it to make your own version', 'copy it exactly with no changes', 'forget it'], answer: 'change it to make your own version', difficulty: 2 },
        { id: 'Y2-ENG-LE05-q2', type: 'mcq', prompt: 'Which would make a good new twist on "Goldilocks"?', options: ['The bears come home to find a robot Goldilocks', 'Goldilocks eats porridge', 'The bears live in a forest'], answer: 'The bears come home to find a robot Goldilocks', difficulty: 2 },
        { id: 'Y2-ENG-LE05-q3', type: 'mcq', prompt: 'When you create your own story, a good first step is to plan…', options: ['the characters and what happens', 'the cover price', 'nothing'], answer: 'the characters and what happens', difficulty: 1 },
        { id: 'Y2-ENG-LE05-q4', type: 'short', prompt: 'To change a story to make your own version is to ______ it.', answer: 'adapt', difficulty: 2 },
        { id: 'Y2-ENG-LE05-q5', type: 'mcq', prompt: 'In a retelling of "The Three Little Pigs", making the wolf friendly is…', options: ['a new twist', 'a spelling mistake', 'copying the whole book'], answer: 'a new twist', difficulty: 2 },
        { id: 'Y2-ENG-LE05-q6', type: 'mcq', prompt: 'After you finish writing your own story, a good idea is to…', options: ['read it again and make it even better', 'throw it away immediately', 'never share it'], answer: 'read it again and make it even better', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (12 CDs) ----------
  {
    id: 'Y2-ENG-LY01',
    title: 'Similar topics in different texts',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'The same topic can be told in many ways.',
        'A book about dinosaurs might be an information report with facts, or a story about a dino who loses his tooth.',
        'Comparing how different texts talk about the same thing makes you a smarter reader.',
      ],
      illustrations: [
        {
          brief: 'A newspaper of facts and a story book about dinosaurs side by side',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: 'facts about dinos' }, { icon: 'book', label: 'a dino story' }], caption: 'Same topic, different kinds of texts' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY01-q1', type: 'mcq', prompt: 'A story about space and an information book about space both tell us…', options: ['about space, in different ways', 'nothing at all', 'only about pizza'], answer: 'about space, in different ways', difficulty: 1 },
        { id: 'Y2-ENG-LY01-q2', type: 'mcq', prompt: 'An information text about spiders would mostly give…', options: ['facts like legs and webs', 'a made-up wizard', 'only songs'], answer: 'facts like legs and webs', difficulty: 1 },
        { id: 'Y2-ENG-LY01-q3', type: 'mcq', prompt: 'A story about a spider might give…', options: ['a character with feelings and adventures', 'only the words "legs" and "web"', 'a weather forecast'], answer: 'a character with feelings and adventures', difficulty: 2 },
        { id: 'Y2-ENG-LY01-q4', type: 'short', prompt: 'If you want facts about sharks, which text helps most — a story or an information book?', answer: 'an information book', difficulty: 1 },
        { id: 'Y2-ENG-LY01-q5', type: 'mcq', prompt: 'Two texts about the same topic can still be different because of their…', options: ['purpose and how they tell it', 'page colour always', 'font size only'], answer: 'purpose and how they tell it', difficulty: 2 },
        { id: 'Y2-ENG-LY01-q6', type: 'mcq', prompt: 'A poster, a song and a story can all be about the ocean. They are…', options: ['different text types with the same topic', 'exactly the same text', 'all reports'], answer: 'different text types with the same topic', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY02',
    title: 'Interaction skills',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Being a good talker is about listening too!',
        'Look at the speaker, show you are listening, and build on their ideas — "Great idea! What if we add…?"',
        'When you give instructions, say the steps clearly and in order.',
      ],
      illustrations: [
        {
          brief: 'Listeners, a chat bubble adding an idea, and a speaker speaking clearly',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'listen with your eyes' }, { icon: 'chat-bubble', label: 'add your idea' }, { icon: 'speaker', label: 'speak clearly' }], caption: 'Good talkers are good listeners too' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY02-q1', type: 'mcq', prompt: 'When a friend is speaking, a good listener…', options: ['looks and listens carefully', 'talks over them', 'walks away'], answer: 'looks and listens carefully', difficulty: 1 },
        { id: 'Y2-ENG-LY02-q2', type: 'mcq', prompt: 'To "extend" a friend\'s idea means to…', options: ['build on it and add more', 'copy it and say nothing', 'forget it'], answer: 'build on it and add more', difficulty: 2 },
        { id: 'Y2-ENG-LY02-q3', type: 'mcq', prompt: 'Which sentence extends someone\'s idea?', options: ['"That is a great idea — what if we add a tunnel?"', '"No."', '"Whatever."'], answer: '"That is a great idea — what if we add a tunnel?"', difficulty: 2 },
        { id: 'Y2-ENG-LY02-q4', type: 'short', prompt: 'To give clear instructions, put the steps in the right…', answer: 'order', difficulty: 1 },
        { id: 'Y2-ENG-LY02-q5', type: 'mcq', prompt: 'Which instruction is clearest?', options: ['"First, press the green button, then wait."', '"Do the thing."', '"Maybe press something."'], answer: '"First, press the green button, then wait."', difficulty: 1 },
        { id: 'Y2-ENG-LY02-q6', type: 'mcq', prompt: 'If you disagree with a friend\'s idea, the kind way is to…', options: ['say your different idea politely', 'shout over them', 'stop talking forever'], answer: 'say your different idea politely', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY03',
    title: 'Purpose & audience',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Every text has a purpose — why it was made — and an audience — who it is for.',
        'A letter to your grandma uses different words than a note to a friend.',
        'Asking "Who is this for?" and "Why?" helps you understand any text.',
      ],
      illustrations: [
        {
          brief: 'A letter to Gran, a phone text to a friend and a book for the class',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'envelope', label: 'a letter to Gran' }, { icon: 'phone', label: 'a text to a friend' }, { icon: 'book', label: 'for the whole class' }], caption: 'Different audiences, different words' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY03-q1', type: 'mcq', prompt: 'The "audience" of a text is…', options: ['who it is for', 'the author', 'the price'], answer: 'who it is for', difficulty: 1 },
        { id: 'Y2-ENG-LY03-q2', type: 'mcq', prompt: 'The "purpose" of a recipe is to…', options: ['tell you how to make something', 'make you laugh', 'sell a house'], answer: 'tell you how to make something', difficulty: 1 },
        { id: 'Y2-ENG-LY03-q3', type: 'mcq', prompt: 'A party invitation to your best friend would be…', options: ['friendly and casual', 'a long formal letter', 'a list of laws'], answer: 'friendly and casual', difficulty: 2 },
        { id: 'Y2-ENG-LY03-q4', type: 'short', prompt: 'The purpose of a sign that says "Danger: deep water" is to…', answer: 'warn people', difficulty: 2 },
        { id: 'Y2-ENG-LY03-q5', type: 'mcq', prompt: 'A text that tries to make you want to buy something has the purpose of…', options: ['persuading you', 'teaching you to read', 'counting to ten'], answer: 'persuading you', difficulty: 2 },
        { id: 'Y2-ENG-LY03-q6', type: 'mcq', prompt: 'A story written to entertain has an audience of…', options: ['readers who want to enjoy it', 'only scientists', 'nobody'], answer: 'readers who want to enjoy it', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY04',
    title: 'Fluent reading',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Fluent readers read in smooth phrases, not word by word — like a bouncy ball rolling along.',
        'If a sentence sounds wrong, good readers stop, re-read and fix it.',
        'The more you practise, the smoother and braver your reading gets!',
      ],
      illustrations: [
        {
          brief: 'A speaker reading aloud smoothly, an open book and a re-read arrow',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'speaker', label: 'read aloud smoothly' }, { icon: 'book', label: 'in phrases' }, { icon: 'rotate-arrow', label: 're-read & fix' }], caption: 'Fluent reading sounds smooth and steady' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY04-q1', type: 'mcq', prompt: 'Reading "in phrases" means…', options: ['reading groups of words smoothly together', 'reading one letter at a time', 'reading backwards'], answer: 'reading groups of words smoothly together', difficulty: 2 },
        { id: 'Y2-ENG-LY04-q2', type: 'mcq', prompt: 'If a sentence does not sound right, a good reader…', options: ['stops, re-reads and fixes it', 'keeps going and ignores it', 'closes the book forever'], answer: 'stops, re-reads and fixes it', difficulty: 1 },
        { id: 'Y2-ENG-LY04-q3', type: 'mcq', prompt: 'Which sounds most like fluent reading?', options: ['"Once upon a time, there was a…"', '"O-nce u-pon a t-ime"', '"Once…upon…a…time…"'], answer: '"Once upon a time, there was a…"', difficulty: 1 },
        { id: 'Y2-ENG-LY04-q4', type: 'short', prompt: 'If you read "The cat barked" but it should be "The dog barked", what should you do?', answer: 're-read', difficulty: 2 },
        { id: 'Y2-ENG-LY04-q5', type: 'mcq', prompt: 'Practising reading helps you get…', options: ['smoother and faster', 'slower forever', 'more tired always'], answer: 'smoother and faster', difficulty: 1 },
        { id: 'Y2-ENG-LY04-q6', type: 'mcq', prompt: 'Which is NOT a good habit of fluent readers?', options: ['Pointing at every single letter', 'Reading in smooth phrases', 'Pausing at full stops'], answer: 'Pointing at every single letter', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY05',
    title: 'Comprehension strategies',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Super readers use secret strategies: picture it in your head, guess what comes next, and connect it to your own life.',
        'When a word is tricky, stop and ask, "Does that make sense?"',
        'These moves turn words into meaning.',
      ],
      illustrations: [
        {
          brief: 'A brain to picture it, a crystal ball to predict and a magnifier to question',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'brain', label: 'picture it' }, { icon: 'crystal-ball', label: 'predict' }, { icon: 'magnifier', label: 'question' }], caption: 'Strategies unlock meaning' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY05-q1', type: 'mcq', prompt: '"Visualising" means…', options: ['making a picture in your head', 'turning pages fast', 'closing your eyes to sleep'], answer: 'making a picture in your head', difficulty: 2 },
        { id: 'Y2-ENG-LY05-q2', type: 'mcq', prompt: 'Predicting means…', options: ['guessing what might happen next', 'reading the last page first only', 'counting the words'], answer: 'guessing what might happen next', difficulty: 1 },
        { id: 'Y2-ENG-LY05-q3', type: 'mcq', prompt: 'Connecting a story to your own life helps you…', options: ['understand and remember it better', 'finish sooner', 'skip pages'], answer: 'understand and remember it better', difficulty: 2 },
        { id: 'Y2-ENG-LY05-q4', type: 'short', prompt: 'To check you understand, you can ask, "Does that make…"', answer: 'sense', difficulty: 1 },
        { id: 'Y2-ENG-LY05-q5', type: 'mcq', prompt: '"The dog was soaked. It had been raining hard." What does "soaked" mean here?', options: ['very wet', 'very dry', 'very fast'], answer: 'very wet', difficulty: 2 },
        { id: 'Y2-ENG-LY05-q6', type: 'mcq', prompt: 'After you read a page, "summarising" means…', options: ['saying the main idea in your own words', 'copying every word', 'reading it backwards'], answer: 'saying the main idea in your own words', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY06',
    title: 'Creating texts for familiar audiences',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'You can write texts for people you know!',
        'A get-well card for a friend or a poster for the classroom both need a clear start, good ideas and tidy punctuation.',
        'After you write, read it again and make it even better — that is editing.',
      ],
      illustrations: [
        {
          brief: 'A pen to write, a check box to check and an envelope to send',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'write it' }, { icon: 'check-box', label: 'check it' }, { icon: 'envelope', label: 'send it to someone you know' }], caption: 'Write for a real audience, then edit' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY06-q1', type: 'mcq', prompt: 'A get-well card for a friend should…', options: ['say something kind and make them smile', 'be a list of facts about weather', 'be super long and boring'], answer: 'say something kind and make them smile', difficulty: 1 },
        { id: 'Y2-ENG-LY06-q2', type: 'mcq', prompt: 'A poster for the classroom should have…', options: ['a clear message and big, tidy writing', 'tiny secret writing', 'no words at all'], answer: 'a clear message and big, tidy writing', difficulty: 1 },
        { id: 'Y2-ENG-LY06-q3', type: 'mcq', prompt: '"Editing" your writing means…', options: ['reading it again and improving it', 'crumpling it up', 'copying it without looking'], answer: 'reading it again and improving it', difficulty: 2 },
        { id: 'Y2-ENG-LY06-q4', type: 'short', prompt: 'If your sentence is about the past, should you use "go" or "went"?', answer: 'went', difficulty: 2 },
        { id: 'Y2-ENG-LY06-q5', type: 'mcq', prompt: 'Which sentence has correct punctuation?', options: ['Where is my hat?', 'where is my hat', 'Where is my hat'], answer: 'Where is my hat?', difficulty: 1 },
        { id: 'Y2-ENG-LY06-q6', type: 'mcq', prompt: 'Which is a correct simple sentence about a rainy day?', options: ['The rain fell on the roof.', 'rain roof the on fell', 'the rain? fell roof'], answer: 'The rain fell on the roof.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY07',
    title: 'Oral presentations',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY07' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'When you present to your class, your voice is your superpower.',
        'Speak clearly, not too fast, and use different tones to keep your audience interested.',
        'Practise your talk so you feel brave and ready!',
      ],
      illustrations: [
        {
          brief: 'A microphone, a speaker and a timer showing how to present well',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'speak clearly' }, { icon: 'speaker', label: 'loud enough' }, { icon: 'timer', label: 'not too fast' }], caption: 'Your voice is a superpower' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY07-q1', type: 'mcq', prompt: 'A good presenter speaks…', options: ['clearly and loud enough to be heard', 'as fast as possible', 'so quietly nobody can hear'], answer: 'clearly and loud enough to be heard', difficulty: 1 },
        { id: 'Y2-ENG-LY07-q2', type: 'mcq', prompt: 'Changing your tone when you present helps…', options: ['keep the audience interested', 'make it shorter', 'hide your voice'], answer: 'keep the audience interested', difficulty: 2 },
        { id: 'Y2-ENG-LY07-q3', type: 'mcq', prompt: 'Before you present, practising helps you feel…', options: ['brave and ready', 'more scared', 'sleepy'], answer: 'brave and ready', difficulty: 1 },
        { id: 'Y2-ENG-LY07-q4', type: 'short', prompt: 'Should a presentation be said quickly or at a good pace?', answer: 'a good pace', difficulty: 1 },
        { id: 'Y2-ENG-LY07-q5', type: 'mcq', prompt: 'A good presentation usually has…', options: ['a clear start, middle and end', 'only one long sentence', 'no plan at all'], answer: 'a clear start, middle and end', difficulty: 2 },
        { id: 'Y2-ENG-LY07-q6', type: 'mcq', prompt: 'During your talk, looking at your audience helps them…', options: ['feel included and stay focused', 'go to sleep', 'look away'], answer: 'feel included and stay focused', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY08',
    title: 'Handwriting fluency',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY08' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Tidy handwriting is a skill you can build!',
        'Keep your letters the right size, leave a little space between words, and sit each letter on the line.',
        'The more you practise, the smoother and more automatic your writing becomes.',
      ],
      illustrations: [
        {
          brief: 'A pen, a ruler for the writing line and a check box for spacing',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'clear letters' }, { icon: 'ruler', label: 'sit on the line' }, { icon: 'check-box', label: 'space between words' }], caption: 'Practise makes handwriting smooth' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY08-q1', type: 'mcq', prompt: 'Where should your letters sit when you write?', options: ['On the line', 'Floating above the line', 'Anywhere they like'], answer: 'On the line', difficulty: 1 },
        { id: 'Y2-ENG-LY08-q2', type: 'mcq', prompt: 'Between words you should leave…', options: ['a small space', 'no space', 'a huge gap that fills the page'], answer: 'a small space', difficulty: 1 },
        { id: 'Y2-ENG-LY08-q3', type: 'mcq', prompt: 'Letters that are too big and letters that are too small make writing…', options: ['hard to read', 'easier to read', 'more magical'], answer: 'hard to read', difficulty: 2 },
        { id: 'Y2-ENG-LY08-q4', type: 'short', prompt: 'Handwriting gets smoother when you…', answer: 'practise', difficulty: 1 },
        { id: 'Y2-ENG-LY08-q5', type: 'mcq', prompt: 'Capital letters are used at the…', options: ['start of sentences', 'middle of every word', 'end of every sentence'], answer: 'start of sentences', difficulty: 1 },
        { id: 'Y2-ENG-LY08-q6', type: 'mcq', prompt: 'The best way to improve your handwriting is…', options: ['to practise carefully and often', 'to write once a year', 'to press super hard with the pencil'], answer: 'to practise carefully and often', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY09',
    title: 'Complex sound manipulation',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Sounds are like LEGO bricks you can build and swap.',
        'Blend sounds together to make a word, split a word into its sounds, or swap one sound to make a new word: "cat" → "cap" → "map".',
        'Playing with sounds makes you a word wizard!',
      ],
      illustrations: [
        {
          brief: 'Sound bricks: blend sounds, swap a sound and make a new word',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: '"c-a-t" → cat' }, { icon: 'rotate-arrow', label: 'swap a sound' }, { icon: 'burst', label: 'make a new word' }], caption: 'Blend, segment and swap sounds' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY09-q1', type: 'mcq', prompt: 'Which word do you get when you blend the sounds /s/, /u/, /n/?', options: ['sun', 'run', 'sad'], answer: 'sun', difficulty: 1 },
        { id: 'Y2-ENG-LY09-q2', type: 'mcq', prompt: 'Change the /k/ sound in "cat" to /h/ to get…', options: ['hat', 'car', 'mat'], answer: 'hat', difficulty: 1 },
        { id: 'Y2-ENG-LY09-q3', type: 'mcq', prompt: 'Swap the first sound of "pet" to /g/ to get…', options: ['get', 'net', 'pen'], answer: 'get', difficulty: 2 },
        { id: 'Y2-ENG-LY09-q4', type: 'short', prompt: 'If you take the /b/ off the start of "bat", what word is left?', answer: 'at', difficulty: 2 },
        { id: 'Y2-ENG-LY09-q5', type: 'mcq', prompt: '"Segmenting" a word means…', options: ['splitting it into separate sounds', 'making it longer', 'writing it backwards'], answer: 'splitting it into separate sounds', difficulty: 2 },
        { id: 'Y2-ENG-LY09-q6', type: 'mcq', prompt: 'Which word has three sounds?', options: ['so', 'sit', 'stamp'], answer: 'sit', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY10',
    title: 'Phoneme–grapheme matches',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY10' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Some sounds are spelled with two letters — digraphs like "ai" in rain and "ee" in bee.',
        'Some letters are silent, like the "k" in "knife".',
        'When you meet a new word, look for the letter team that makes each sound.',
      ],
      illustrations: [
        {
          brief: 'Grapheme cards showing the digraphs "ai", "ee" and the silent "k"',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'bookmark', label: '"ai" in rain' }, { icon: 'bookmark', label: '"ee" in bee' }, { icon: 'bookmark', label: '"kn" — "k" is silent' }], caption: 'Letter teams make one sound' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY10-q1', type: 'mcq', prompt: 'Which two letters make the /ee/ sound in "bee"?', options: ['ee', 'be', 'bb'], answer: 'ee', difficulty: 1 },
        { id: 'Y2-ENG-LY10-q2', type: 'mcq', prompt: 'In "rain", which two letters make the long "ai" sound?', options: ['ai', 'ra', 'in'], answer: 'ai', difficulty: 2 },
        { id: 'Y2-ENG-LY10-q3', type: 'mcq', prompt: 'In "knife", the "k" is…', options: ['silent — we say "nife"', 'said loudly', 'the loudest sound'], answer: 'silent — we say "nife"', difficulty: 2 },
        { id: 'Y2-ENG-LY10-q4', type: 'short', prompt: 'What sound does the "k" make in the word "knee"?', answer: 'no sound (silent)', difficulty: 2 },
        { id: 'Y2-ENG-LY10-q5', type: 'mcq', prompt: 'Which word has a silent letter?', options: ['lamb', 'hand', 'sand'], answer: 'lamb', difficulty: 2 },
        { id: 'Y2-ENG-LY10-q6', type: 'mcq', prompt: 'A digraph is…', options: ['two letters that make one sound', 'three letters that make two sounds', 'a very long word'], answer: 'two letters that make one sound', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY11',
    title: 'Spelling patterns & unpredictable words',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY11' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Some words are tricky because they do not sound the way they look — like "said", "was" and "people".',
        'You can learn these heart words by sight and practise them little and often.',
        'Knowing spelling patterns helps too, so you can work out how to write tricky words.',
      ],
      illustrations: [
        {
          brief: 'A lock, a brain and a check box showing how to learn tricky words',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'lock', label: 'tricky words' }, { icon: 'brain', label: 'learn them by sight' }, { icon: 'check-box', label: 'practise little & often' }], caption: 'Heart words you just have to remember' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY11-q1', type: 'mcq', prompt: 'Which spelling is correct?', options: ['said', 'sade', 'sed'], answer: 'said', difficulty: 1 },
        { id: 'Y2-ENG-LY11-q2', type: 'mcq', prompt: 'Which spelling is correct?', options: ['people', 'pepole', 'peeple'], answer: 'people', difficulty: 2 },
        { id: 'Y2-ENG-LY11-q3', type: 'mcq', prompt: 'A tricky word like "was" is hard because…', options: ['it does not sound how it looks', 'it has ten letters', 'it is only used once'], answer: 'it does not sound how it looks', difficulty: 2 },
        { id: 'Y2-ENG-LY11-q4', type: 'short', prompt: 'Spell the word that is the past of "go".', answer: 'went', difficulty: 2 },
        { id: 'Y2-ENG-LY11-q5', type: 'mcq', prompt: 'Which is the correct spelling?', options: ['they', 'thay', 'thei'], answer: 'they', difficulty: 1 },
        { id: 'Y2-ENG-LY11-q6', type: 'mcq', prompt: 'To remember tricky words, a good plan is…', options: ['practise them a little bit often', 'never look at them', 'only guess'], answer: 'practise them a little bit often', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-ENG-LY12',
    title: 'Morphemic word families (prefixes & suffixes)',
    year: '2',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E2LY12' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Words grow like plants! A base word like "play" can grow into "playing", "plays" and "replay".',
        'A prefix like "re-" means "again" and a suffix like "-ing" gets added to the end.',
        'Building word families helps you read and write many new words.',
      ],
      illustrations: [
        {
          brief: 'Three sprouts showing the base word "play" growing into "playing" and "replay"',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'sprout', label: '"play"' }, { icon: 'sprout', label: '"playing"' }, { icon: 'sprout', label: '"replay"' }], caption: 'Words grow from a base word' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-ENG-LY12-q1', type: 'mcq', prompt: 'A prefix goes…', options: ['before the base word', 'after the base word', 'nowhere at all'], answer: 'before the base word', difficulty: 1 },
        { id: 'Y2-ENG-LY12-q2', type: 'mcq', prompt: 'A suffix goes…', options: ['after the base word', 'before the base word', 'in the middle of a base word'], answer: 'after the base word', difficulty: 1 },
        { id: 'Y2-ENG-LY12-q3', type: 'mcq', prompt: '"replay" means…', options: ['play again', 'not play', 'play first'], answer: 'play again', difficulty: 2 },
        { id: 'Y2-ENG-LY12-q4', type: 'short', prompt: 'Add the suffix "-ing" to "jump".', answer: 'jumping', difficulty: 1 },
        { id: 'Y2-ENG-LY12-q5', type: 'mcq', prompt: 'Which is a word family of "care"?', options: ['careful, careless, caring', 'carpet, card, cart', 'there, where, here'], answer: 'careful, careless, caring', difficulty: 2 },
        { id: 'Y2-ENG-LY12-q6', type: 'mcq', prompt: 'Knowing the base word "paint" helps you understand…', options: ['painter, painting, repaint', 'pine, pin, pit', 'crane, plane, mane'], answer: 'painter, painting, repaint', difficulty: 2 },
      ],
    },
  },
];
