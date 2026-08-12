import type { Topic } from '../../types/curriculum';

/**
 * Year 6 English, full topic bank.
 * Source of truth for scope: docs/content/year-6/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E6xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons, never bulk-copy syllabus text).
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR6_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y6-ENG-LA01',
    title: 'Formal & informal language',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Language changes depending on who you are talking to. You would text a friend "omw!" but write "I am on my way" to your principal.',
        'The more formal the situation, the more careful and complete our words become, think of it like a thermometer sliding from casual to formal.',
      ],
      illustrations: [
        { brief: 'Two phone conversations side by side: mates vs principal', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"omw!"' }, { icon: 'envelope', label: '"I am on my way."' }], caption: 'Same message, different formality' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA01-q1', type: 'mcq', prompt: 'Which sentence is more formal?', options: ['Gonna be late, soz!', 'I will arrive shortly; apologies for the delay.'], answer: 'I will arrive shortly; apologies for the delay.', difficulty: 1 },
        { id: 'Y6-ENG-LA01-q2', type: 'mcq', prompt: 'Texting a close friend usually uses…', options: ['Formal language', 'Informal language'], answer: 'Informal language', difficulty: 1 },
        { id: 'Y6-ENG-LA01-q3', type: 'mcq', prompt: 'Which greeting suits a formal letter to a school principal?', options: ['Hey!', 'Dear Principal Smith,', "What's up"], answer: 'Dear Principal Smith,', difficulty: 1 },
        { id: 'Y6-ENG-LA01-q4', type: 'mcq', prompt: 'Slang and abbreviations (like "gonna", "soz") usually signal…', options: ['A formal report', 'Informal, casual language', 'A legal document'], answer: 'Informal, casual language', difficulty: 1 },
        { id: 'Y6-ENG-LA01-q5', type: 'mcq', prompt: 'Which situation calls for the most formal language?', options: ['Chatting with a sibling', 'A speech to the whole school', 'A note to a friend'], answer: 'A speech to the whole school', difficulty: 2 },
        { id: 'Y6-ENG-LA01-q6', type: 'mcq', prompt: '"Could you please pass the water?" instead of "Pass the water" shows…', options: ['More formality/politeness', 'Less formality', 'No difference'], answer: 'More formality/politeness', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA02',
    title: 'Objective vs subjective language & bias',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Objective language sticks to facts a robot could check ("the team scored 3 goals"). Subjective language shares feelings and opinions ("what an amazing game!").',
        'Spotting bias means noticing when a writer picks loaded words to sway you rather than just inform you.',
      ],
      illustrations: [
        { brief: 'A robot (objective) and an excited fan (subjective) reporting the same game', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'robot', label: '"Final score: 3–1."' }, { icon: 'smiley', label: '"An UNBELIEVABLE win!!"' }], caption: 'Same game, objective vs subjective report' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA02-q1', type: 'mcq', prompt: '"The match had 22 players" is…', options: ['A fact (objective)', 'An opinion (subjective)'], answer: 'A fact (objective)', difficulty: 1 },
        { id: 'Y6-ENG-LA02-q2', type: 'mcq', prompt: '"That was the best goal ever scored" is…', options: ['A fact (objective)', 'An opinion (subjective)'], answer: 'An opinion (subjective)', difficulty: 1 },
        { id: 'Y6-ENG-LA02-q3', type: 'mcq', prompt: '"The train arrived at 9:05am" is…', options: ['A fact (objective)', 'An opinion (subjective)'], answer: 'A fact (objective)', difficulty: 1 },
        { id: 'Y6-ENG-LA02-q4', type: 'mcq', prompt: 'A biased sentence tries to…', options: ['Only inform the reader', 'Sway the reader toward one view', 'Ask a question'], answer: 'Sway the reader toward one view', difficulty: 2 },
        { id: 'Y6-ENG-LA02-q5', type: 'mcq', prompt: 'Which word choice sounds more biased/loaded?', options: ['The politician spoke', 'The politician ranted', 'The politician commented'], answer: 'The politician ranted', difficulty: 2 },
        { id: 'Y6-ENG-LA02-q6', type: 'mcq', prompt: 'A news report using only objective language would avoid…', options: ['Dates and numbers', 'Emotive opinion words', 'Names of people involved'], answer: 'Emotive opinion words', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA03',
    title: 'Text structure & stages',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Every kind of text has a skeleton. A report has an intro + facts grouped in sections; a story climbs to a climax like a mountain; a persuasive text builds up reasons toward a call to action.',
        'Knowing the stages helps you both read faster (you know what is coming) and write better (you know what to include).',
      ],
      illustrations: [
        { brief: 'A narrative mountain: orientation → complication → climax → resolution', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Orientation, who, where, when' }, { text: 'Complication, the problem' }, { text: 'Climax, the turning point' }, { text: 'Resolution, how it ends' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA03-q1', type: 'mcq', prompt: 'The part of a story where the problem is finally solved is the…', options: ['Orientation', 'Complication', 'Resolution'], answer: 'Resolution', difficulty: 1 },
        { id: 'Y6-ENG-LA03-q2', type: 'mcq', prompt: 'A report is usually structured by…', options: ['Rhyming couplets', 'Grouped facts under headings', 'A single long paragraph'], answer: 'Grouped facts under headings', difficulty: 1 },
        { id: 'Y6-ENG-LA03-q3', type: 'mcq', prompt: 'The part of a story that introduces who, where and when is the…', options: ['Orientation', 'Climax', 'Resolution'], answer: 'Orientation', difficulty: 1 },
        { id: 'Y6-ENG-LA03-q4', type: 'mcq', prompt: 'A persuasive text usually ends with a…', options: ['Call to action', 'Character list', 'Weather report'], answer: 'Call to action', difficulty: 2 },
        { id: 'Y6-ENG-LA03-q5', type: 'mcq', prompt: 'The turning point of highest tension in a story is the…', options: ['Orientation', 'Climax', 'Complication'], answer: 'Climax', difficulty: 2 },
        { id: 'Y6-ENG-LA03-q6', type: 'mcq', prompt: 'Knowing a text\'s typical stages mainly helps a reader…', options: ['Predict what comes next', 'Ignore the content', 'Skip punctuation'], answer: 'Predict what comes next', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA04',
    title: 'Cohesion & word associations',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Cohesion is the glue that holds a text together, repeating a key word on purpose, or using related words (dog… puppy… it… the animal) so ideas link smoothly.',
        'Without cohesion, writing feels like disconnected sentences bumping into each other.',
      ],
      illustrations: [
        { brief: 'Linking-chain diagram connecting related words across sentences', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: '"dog"' }, { icon: 'link', label: '"it"' }, { icon: 'link', label: '"the animal"' }], caption: 'Word chains keep ideas connected' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA04-q1', type: 'mcq', prompt: 'Which word could replace "the puppy" later in a paragraph without losing meaning?', options: ['It', 'Purple', 'Tomorrow'], answer: 'It', difficulty: 1 },
        { id: 'Y6-ENG-LA04-q2', type: 'mcq', prompt: 'Cohesion in writing mainly helps ideas…', options: ['Link smoothly together', 'Become longer', 'Use bigger words'], answer: 'Link smoothly together', difficulty: 1 },
        { id: 'Y6-ENG-LA04-q3', type: 'mcq', prompt: 'Repeating a key term on purpose across paragraphs is an example of…', options: ['Cohesion', 'A spelling mistake', 'A comma splice'], answer: 'Cohesion', difficulty: 2 },
        { id: 'Y6-ENG-LA04-q4', type: 'mcq', prompt: 'Which pair of words are related (word associations) with "ocean"?', options: ['Waves, tide', 'Pencil, desk', 'Guitar, drum'], answer: 'Waves, tide', difficulty: 1 },
        { id: 'Y6-ENG-LA04-q5', type: 'mcq', prompt: 'Writing without cohesion tends to feel…', options: ['Smooth and connected', 'Disconnected and choppy', 'Exactly the same'], answer: 'Disconnected and choppy', difficulty: 2 },
        { id: 'Y6-ENG-LA04-q6', type: 'mcq', prompt: '"The storm arrived. It flooded the street.", what does "it" refer back to?', options: ['The street', 'The storm', 'Nothing'], answer: 'The storm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA05',
    title: 'Embedded clauses & complex sentences',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An embedded clause is tucked inside a sentence to add extra detail, "The dog, which was soaked from the rain, shook itself dry."',
        'Embedding clauses lets you combine short, choppy sentences into one elegant, information-rich sentence.',
      ],
      illustrations: [
        { brief: 'Sentence built like a train, with an embedded clause as an extra carriage', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'train-engine', label: '"The dog"' }, { icon: 'train-car', label: '"which was soaked,"' }, { icon: 'train-car', label: '"shook itself dry."' }], caption: 'An embedded clause rides inside the sentence' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA05-q1', type: 'short', prompt: 'Combine: "The book was old. The book fell apart." Use an embedded clause starting with "which".', answer: 'The book, which was old, fell apart.', difficulty: 3 },
        { id: 'Y6-ENG-LA05-q2', type: 'mcq', prompt: 'An embedded clause is usually set off by…', options: ['Commas', 'Exclamation marks', 'Nothing at all'], answer: 'Commas', difficulty: 2 },
        { id: 'Y6-ENG-LA05-q3', type: 'mcq', prompt: 'In "The cat, which was hungry, meowed loudly," the embedded clause is…', options: ['which was hungry', 'The cat', 'meowed loudly'], answer: 'which was hungry', difficulty: 2 },
        { id: 'Y6-ENG-LA05-q4', type: 'mcq', prompt: 'Embedding clauses mainly helps writers…', options: ['Combine ideas into one elegant sentence', 'Use fewer words overall', 'Avoid commas'], answer: 'Combine ideas into one elegant sentence', difficulty: 2 },
        { id: 'Y6-ENG-LA05-q5', type: 'mcq', prompt: 'A sentence with an embedded clause is called a…', options: ['Simple sentence', 'Complex sentence', 'Fragment'], answer: 'Complex sentence', difficulty: 2 },
        { id: 'Y6-ENG-LA05-q6', type: 'mcq', prompt: 'Which sentence uses an embedded clause?', options: ['The dog barked.', 'The dog, who was tired, barked once.', 'The dog barked and ran.'], answer: 'The dog, who was tired, barked once.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA06',
    title: 'Verb choice, tenses & adverb groups',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        '"Walked" is fine, but "trudged", "sprinted" or "tiptoed" paint a much clearer picture, strong verbs do more work than a verb plus an adverb.',
        'Keep your tense consistent through a piece of writing (all past, or all present) so readers never get confused about when things are happening.',
      ],
      illustrations: [
        { brief: 'A paint palette of strong verbs replacing "walked"', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'walker', label: '"walked"' }, { icon: 'runner', label: '"sprinted", "tiptoed", "trudged"' }], caption: 'Choose a stronger, more precise verb' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA06-q1', type: 'short', prompt: 'Replace "walked quietly" with one strong verb.', answer: 'tiptoed', difficulty: 2 },
        { id: 'Y6-ENG-LA06-q2', type: 'mcq', prompt: 'Which sentence mixes tenses incorrectly?', options: ['She ran fast and jumped high.', 'She ran fast and jumps high.', 'She runs fast and jumps high.'], answer: 'She ran fast and jumps high.', difficulty: 2 },
        { id: 'Y6-ENG-LA06-q3', type: 'mcq', prompt: 'Which is the strongest verb for "walked slowly and sadly"?', options: ['Trudged', 'Went', 'Moved'], answer: 'Trudged', difficulty: 2 },
        { id: 'Y6-ENG-LA06-q4', type: 'mcq', prompt: 'An adverb group tells you more about…', options: ['A noun only', 'How, when, or where something happened', 'Nothing useful'], answer: 'How, when, or where something happened', difficulty: 2 },
        { id: 'Y6-ENG-LA06-q5', type: 'mcq', prompt: 'Keeping tense consistent means…', options: ['Mixing past and present freely', 'Sticking to one time frame through a piece of writing', 'Only using present tense ever'], answer: 'Sticking to one time frame through a piece of writing', difficulty: 2 },
        { id: 'Y6-ENG-LA06-q6', type: 'short', prompt: 'Replace "ran quickly" with one strong verb.', answer: 'sprinted', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA07',
    title: 'Images, figures, tables, diagrams, maps & graphs',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Pictures, maps, tables and graphs are not just decoration, a good diagram can explain something faster than a paragraph of words.',
        'When reading, ask: what does this visual add that the words alone do not?',
      ],
      illustrations: [
        { brief: 'An annotated textbook page with a weather map, bar graph and diagram', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Text' }, { icon: 'map', label: 'Map' }, { icon: 'bar-chart', label: 'Graph' }, { icon: 'picture-frame', label: 'Diagram' }], caption: 'Visuals working alongside words' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA07-q1', type: 'mcq', prompt: 'A weather map mostly helps a reader understand…', options: ['A recipe', 'Where a storm is heading', 'A maths sum'], answer: 'Where a storm is heading', difficulty: 1 },
        { id: 'Y6-ENG-LA07-q2', type: 'mcq', prompt: 'A table in an info-text is most useful for…', options: ['Organising data for quick comparison', 'Decoration only', 'Replacing the title'], answer: 'Organising data for quick comparison', difficulty: 2 },
        { id: 'Y6-ENG-LA07-q3', type: 'mcq', prompt: 'A diagram with labelled parts (like a plant cross-section) helps readers…', options: ['See structure that is hard to describe in words alone', 'Skip reading the text', 'Add more page numbers'], answer: 'See structure that is hard to describe in words alone', difficulty: 2 },
        { id: 'Y6-ENG-LA07-q4', type: 'mcq', prompt: 'A bar graph in a report is best for showing…', options: ['A comparison between categories', 'A single opinion', 'A story plot'], answer: 'A comparison between categories', difficulty: 2 },
        { id: 'Y6-ENG-LA07-q5', type: 'mcq', prompt: 'When reading a visual, a good question to ask is…', options: ['What does this add that the words alone do not?', 'What colour is it?', 'How big is the page?'], answer: 'What does this add that the words alone do not?', difficulty: 1 },
        { id: 'Y6-ENG-LA07-q6', type: 'mcq', prompt: 'A map in a text is most useful for showing…', options: ['Location and direction', 'A sequence of events', 'A character\'s feelings'], answer: 'Location and direction', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA08',
    title: 'Vivid & emotive vocabulary (figurative language)',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A simile compares using "like" or "as" (brave as a lion). A metaphor says one thing IS another (he is a lion in battle). Personification gives human traits to objects (the wind howled).',
        'Hyperbole is deliberate exaggeration ("I have told you a million times!"), writers use these devices to make ideas feel bigger and more vivid.',
      ],
      illustrations: [
        { brief: 'Idioms shown literally vs figuratively for comic contrast', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cat', label: 'Literal cats' }, { icon: 'raincloud', label: '"raining cats and dogs"' }], caption: 'Idioms are not meant literally' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA08-q1', type: 'mcq', prompt: '"The stars danced in the sky" is an example of…', options: ['Simile', 'Personification', 'Hyperbole'], answer: 'Personification', difficulty: 2 },
        { id: 'Y6-ENG-LA08-q2', type: 'mcq', prompt: '"As brave as a lion" is a…', options: ['Simile', 'Metaphor', 'Onomatopoeia'], answer: 'Simile', difficulty: 1 },
        { id: 'Y6-ENG-LA08-q3', type: 'mcq', prompt: '"He is a lion in battle" (without "like" or "as") is a…', options: ['Simile', 'Metaphor', 'Idiom'], answer: 'Metaphor', difficulty: 2 },
        { id: 'Y6-ENG-LA08-q4', type: 'mcq', prompt: '"I have told you a million times!" is an example of…', options: ['Hyperbole', 'A fact', 'Alliteration'], answer: 'Hyperbole', difficulty: 1 },
        { id: 'Y6-ENG-LA08-q5', type: 'mcq', prompt: '"It\'s raining cats and dogs" is an example of a(n)…', options: ['Idiom', 'Fact', 'Table'], answer: 'Idiom', difficulty: 1 },
        { id: 'Y6-ENG-LA08-q6', type: 'mcq', prompt: 'Figurative language is mainly used to…', options: ['Make writing more vivid and engaging', 'Make writing shorter', 'Replace all facts'], answer: 'Make writing more vivid and engaging', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LA09',
    title: 'The comma',
    year: '6',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E6LA09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Commas separate items in a list (apples, pears, and mangoes), split a dependent clause from the main sentence (After the bell rang, we went outside), and set off dialogue ("Stop," she said).',
        'A missing comma can change meaning entirely, "Let’s eat, Grandpa" vs "Let’s eat Grandpa" is the classic warning!',
      ],
      illustrations: [
        { brief: 'Stop-and-go signposts marking where commas belong in a sentence', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'stop-sign', label: '"After the bell rang,"' }, { icon: 'go-circle', label: '"we went outside."' }], caption: 'A comma is a small pause sign' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LA09-q1', type: 'short', prompt: 'Add the missing comma: "After the bell rang we went outside."', answer: 'After the bell rang, we went outside.', difficulty: 2 },
        { id: 'Y6-ENG-LA09-q2', type: 'mcq', prompt: 'Which sentence uses the comma correctly for dialogue?', options: ['"Stop" she said.', '"Stop," she said.'], answer: '"Stop," she said.', difficulty: 1 },
        { id: 'Y6-ENG-LA09-q3', type: 'mcq', prompt: 'Which sentence uses list commas correctly?', options: ['I bought apples pears and mangoes.', 'I bought apples, pears, and mangoes.', 'I, bought apples pears, and mangoes.'], answer: 'I bought apples, pears, and mangoes.', difficulty: 1 },
        { id: 'Y6-ENG-LA09-q4', type: 'mcq', prompt: '"Let\'s eat, Grandpa" vs "Let\'s eat Grandpa" shows that a missing comma can…', options: ['Change meaning completely', 'Never matter', 'Only affect spelling'], answer: 'Change meaning completely', difficulty: 2 },
        { id: 'Y6-ENG-LA09-q5', type: 'mcq', prompt: 'A comma after an introductory clause (like "After the bell rang,") signals…', options: ['A short pause before the main clause', 'The end of the sentence', 'A question'], answer: 'A short pause before the main clause', difficulty: 2 },
        { id: 'Y6-ENG-LA09-q6', type: 'mcq', prompt: 'In dialogue, the comma usually goes…', options: ['Inside the closing quotation mark', 'Outside the quotation mark only', 'Never near quotation marks'], answer: 'Inside the closing quotation mark', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y6-ENG-LE01',
    title: 'Responding to literature across contexts',
    year: '6',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E6LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Stories come from everywhere, First Nations Australian storytellers, and authors across Australia and the world. A story's context (when, where, and who wrote it) shapes how characters act and what events mean.",
        'When you respond to a story, connect what happens to the world it came from, a character’s choices often make more sense once you know their context.',
      ],
      illustrations: [
        { brief: 'A "context postcard" linking a story to its time, place and culture', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Story' }, { icon: 'map', label: 'Where' }, { icon: 'clock', label: 'When' }, { icon: 'people', label: 'Who' }], caption: 'Context shapes a story’s meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LE01-q1', type: 'mcq', prompt: 'Knowing when and where a story was written mostly helps you understand…', options: ['The page count', 'Why characters think and act as they do', 'The font used'], answer: 'Why characters think and act as they do', difficulty: 1 },
        { id: 'Y6-ENG-LE01-q2', type: 'mcq', prompt: 'A story\'s "context" refers to…', options: ['Its time, place and culture of origin', 'The number of chapters', 'The book\'s cover colour'], answer: 'Its time, place and culture of origin', difficulty: 1 },
        { id: 'Y6-ENG-LE01-q3', type: 'mcq', prompt: 'Reading stories from First Nations Australian storytellers and authors worldwide helps readers…', options: ['See a wider range of perspectives', 'Read only one kind of story', 'Avoid learning anything new'], answer: 'See a wider range of perspectives', difficulty: 2 },
        { id: 'Y6-ENG-LE01-q4', type: 'mcq', prompt: 'A character\'s unusual choice might make more sense once you know…', options: ['The book\'s price', 'Their historical or cultural context', 'The illustrator\'s name'], answer: 'Their historical or cultural context', difficulty: 2 },
        { id: 'Y6-ENG-LE01-q5', type: 'mcq', prompt: 'Responding thoughtfully to literature means connecting events to…', options: ['The context they came from', 'Nothing outside the page', 'Only the ending'], answer: 'The context they came from', difficulty: 2 },
        { id: 'Y6-ENG-LE01-q6', type: 'mcq', prompt: 'Two stories about war from different cultures might differ because of…', options: ['Their different contexts and perspectives', 'A printing error', 'Random chance only'], answer: 'Their different contexts and perspectives', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LE02',
    title: 'Similarities & differences across texts',
    year: '6',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E6LE02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Two stories about the same topic, like two versions of Cinderella, can share a plot but differ hugely in setting, character or message.',
        'Comparing texts sharpens your thinking: what did each author choose to keep, change, or add?',
      ],
      illustrations: [
        { brief: 'Two fairy tale retellings compared side by side', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Story A', value: 3 }, { label: 'Story B', value: 3 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LE02-q1', type: 'mcq', prompt: 'Comparing two versions of the same tale is most useful for spotting…', options: ['Spelling mistakes', 'What each author chose to change', 'The book’s price'], answer: 'What each author chose to change', difficulty: 1 },
        { id: 'Y6-ENG-LE02-q2', type: 'mcq', prompt: 'Two texts can share the same plot but differ in…', options: ['Setting, character or message', 'Nothing at all', 'Only the font'], answer: 'Setting, character or message', difficulty: 1 },
        { id: 'Y6-ENG-LE02-q3', type: 'mcq', prompt: 'A useful question when comparing texts on the same theme is…', options: ['What did each author add or change?', 'How many pages does it have?', 'What colour is the cover?'], answer: 'What did each author add or change?', difficulty: 2 },
        { id: 'Y6-ENG-LE02-q4', type: 'mcq', prompt: 'Retelling a classic story in a new setting is an example of…', options: ['Plagiarism', 'Adapting a familiar plot', 'A spelling error'], answer: 'Adapting a familiar plot', difficulty: 2 },
        { id: 'Y6-ENG-LE02-q5', type: 'mcq', prompt: 'Comparing a book to its film adaptation often reveals…', options: ['Differences in how the story is told', 'That they are always identical', 'Nothing worth noticing'], answer: 'Differences in how the story is told', difficulty: 2 },
        { id: 'Y6-ENG-LE02-q6', type: 'mcq', prompt: 'A Venn diagram is a useful tool for comparing texts because it shows…', options: ['Shared and different features at once', 'Only differences', 'Only similarities'], answer: 'Shared and different features at once', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LE03',
    title: "An author's style",
    year: '6',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E6LE03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'An author’s style is like a fingerprint, the sentence rhythm, word choices and humour that make their writing recognisable even without a name on the cover.',
        'One author might write short, punchy sentences full of jokes; another might write long, flowing, descriptive ones.',
      ],
      illustrations: [
        { brief: '"Author fingerprints" showing sentence rhythm, word choice, humour', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'Author' }, { icon: 'music-note', label: 'Rhythm' }, { icon: 'book', label: 'Word choice' }, { icon: 'smiley', label: 'Humour' }], caption: 'What makes a writer’s style recognisable' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LE03-q1', type: 'mcq', prompt: 'An author who always writes short, funny sentences has a style that is…', options: ['Formal and long-winded', 'Punchy and humorous', 'Unreadable'], answer: 'Punchy and humorous', difficulty: 1 },
        { id: 'Y6-ENG-LE03-q2', type: 'mcq', prompt: 'An author\'s "style" refers to…', options: ['The recognisable choices that make their writing distinct', 'The book\'s font', 'The publisher\'s name'], answer: 'The recognisable choices that make their writing distinct', difficulty: 1 },
        { id: 'Y6-ENG-LE03-q3', type: 'mcq', prompt: 'Two of the same author\'s books feeling similar is usually because of their…', options: ['Style', 'Price', 'Page count'], answer: 'Style', difficulty: 1 },
        { id: 'Y6-ENG-LE03-q4', type: 'mcq', prompt: 'An author who writes long, flowing, descriptive sentences has a style that is…', options: ['Punchy and terse', 'Descriptive and flowing', 'Empty of detail'], answer: 'Descriptive and flowing', difficulty: 2 },
        { id: 'Y6-ENG-LE03-q5', type: 'mcq', prompt: 'Word choice is part of an author\'s style because it affects…', options: ['How the writing feels to read', 'The cover design', 'The shipping cost'], answer: 'How the writing feels to read', difficulty: 2 },
        { id: 'Y6-ENG-LE03-q6', type: 'mcq', prompt: 'Recognising an unnamed passage as a particular author\'s work relies on spotting their…', options: ['Style', 'Handwriting', 'Signature'], answer: 'Style', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LE04',
    title: 'Sound & imagery in poetry',
    year: '6',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E6LE04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Poets use sound on purpose: rhyme (cat/hat), rhythm (a beat you can tap), alliteration (slippery, silver snake) and onomatopoeia (crash, buzz, sizzle).',
        'Imagery is language that paints a picture in your mind, "the storm clawed at the windows" makes you feel the wind, not just read about it.',
      ],
      illustrations: [
        { brief: 'A stormy sea poem with sound-words and imagery hotspots highlighted', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'wave', label: '"crash!"' }, { icon: 'wind', label: '"howl"' }, { icon: 'bolt', label: '"sizzle"' }], caption: 'Sound words make a poem felt, not just read' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LE04-q1', type: 'mcq', prompt: '"Buzz" and "sizzle" are examples of…', options: ['Rhyme', 'Onomatopoeia', 'A metaphor'], answer: 'Onomatopoeia', difficulty: 1 },
        { id: 'Y6-ENG-LE04-q2', type: 'mcq', prompt: '"Slippery, silver snake" repeats the same starting sound, this is…', options: ['Alliteration', 'A simile', 'A comma splice'], answer: 'Alliteration', difficulty: 1 },
        { id: 'Y6-ENG-LE04-q3', type: 'mcq', prompt: '"Cat" and "hat" at the end of two lines is an example of…', options: ['Rhyme', 'Onomatopoeia', 'Personification'], answer: 'Rhyme', difficulty: 1 },
        { id: 'Y6-ENG-LE04-q4', type: 'mcq', prompt: 'Imagery in a poem is language that…', options: ['Paints a picture in the reader\'s mind', 'Only lists facts', 'Avoids description entirely'], answer: 'Paints a picture in the reader\'s mind', difficulty: 2 },
        { id: 'Y6-ENG-LE04-q5', type: 'mcq', prompt: 'A beat you can tap along to while reading a poem is its…', options: ['Rhythm', 'Rhyme', 'Font'], answer: 'Rhythm', difficulty: 2 },
        { id: 'Y6-ENG-LE04-q6', type: 'mcq', prompt: '"The storm clawed at the windows" uses imagery to make the reader…', options: ['Feel the force of the wind, not just read about it', 'Ignore the weather', 'Learn a maths fact'], answer: 'Feel the force of the wind, not just read about it', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LE05',
    title: 'Creating literary texts',
    year: '6',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E6LE05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'You can borrow a plot structure, setting or character type from a story you love, then twist it into something new and yours.',
        'A storyboard planner (beginning, problem, events, ending) helps organise ideas before you start writing full sentences.',
      ],
      illustrations: [
        {
          brief: 'A storyboard planner: orientation → problem → events → resolution',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Borrow: pick a story you love' }, { text: 'Twist: change setting or character' }, { text: 'Plan: storyboard the new plot' }, { text: 'Write & edit' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LE05-q1', type: 'mcq', prompt: 'Adapting a familiar fairy tale into a sci-fi setting is an example of…', options: ['Plagiarism', 'Borrowing and twisting a structure', 'A spelling rule'], answer: 'Borrowing and twisting a structure', difficulty: 1 },
        { id: 'Y6-ENG-LE05-q2', type: 'mcq', prompt: 'A storyboard planner is most useful for…', options: ['Organising ideas before writing full sentences', 'Replacing the need to write at all', 'Checking spelling only'], answer: 'Organising ideas before writing full sentences', difficulty: 1 },
        { id: 'Y6-ENG-LE05-q3', type: 'mcq', prompt: 'Which is a literary device you might "experiment with" while creating a text?', options: ['Metaphor', 'A page number', 'A margin'], answer: 'Metaphor', difficulty: 2 },
        { id: 'Y6-ENG-LE05-q4', type: 'mcq', prompt: 'Editing a draft after writing it helps you…', options: ['Improve and refine your writing', 'Make it exactly the same', 'Skip the planning stage'], answer: 'Improve and refine your writing', difficulty: 2 },
        { id: 'Y6-ENG-LE05-q5', type: 'mcq', prompt: 'A storyboard usually plans the…', options: ['Beginning, problem, events and ending', 'Font size only', 'Page count only'], answer: 'Beginning, problem, events and ending', difficulty: 1 },
        { id: 'Y6-ENG-LE05-q6', type: 'mcq', prompt: 'Changing a story\'s character from a knight to an astronaut, while keeping the same quest plot, is an example of…', options: ['Adapting setting and character', 'A grammar rule', 'Plagiarism'], answer: 'Adapting setting and character', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (9 CDs) ----------
  {
    id: 'Y6-ENG-LY01',
    title: 'Texts & their contexts',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A newspaper front page from 1990 looks and reads very differently from one today, texts reflect the time, place and audience they were made for.',
        'Comparing an old ad to a new one reveals how values and expectations change over time.',
      ],
      illustrations: [
        { brief: 'A newspaper front page then-and-now comparison', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: '1990' }, { icon: 'phone', label: 'Today' }], caption: 'How the same kind of text changes over time' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY01-q1', type: 'mcq', prompt: 'A text’s features (layout, vocabulary, images) are shaped by…', options: ['Random chance', 'Its time, place and audience', 'The author’s handwriting'], answer: 'Its time, place and audience', difficulty: 1 },
        { id: 'Y6-ENG-LY01-q2', type: 'mcq', prompt: 'Comparing an old advertisement to a modern one mostly reveals…', options: ['How values and expectations have changed', 'Nothing worth noticing', 'Only spelling changes'], answer: 'How values and expectations have changed', difficulty: 2 },
        { id: 'Y6-ENG-LY01-q3', type: 'mcq', prompt: 'A 1990s newspaper front page would likely differ from today\'s mainly because of…', options: ['Changes in technology, style and audience expectations', 'Random luck', 'The alphabet changing'], answer: 'Changes in technology, style and audience expectations', difficulty: 2 },
        { id: 'Y6-ENG-LY01-q4', type: 'mcq', prompt: 'A media text made for children will usually differ in language from one made for…', options: ['Adults', 'Nobody', 'Itself'], answer: 'Adults', difficulty: 1 },
        { id: 'Y6-ENG-LY01-q5', type: 'mcq', prompt: 'Examining "context" in a media text means considering…', options: ['When, where and for whom it was made', 'Only the title', 'Only the page count'], answer: 'When, where and for whom it was made', difficulty: 2 },
        { id: 'Y6-ENG-LY01-q6', type: 'mcq', prompt: 'Old and new versions of the same kind of text (e.g. adverts) help us see…', options: ['How society and values shift over time', 'That texts never change', 'Only spelling rules'], answer: 'How society and values shift over time', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY02',
    title: 'Interaction & discussion skills',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Good discussion is a two-way street: paraphrase what someone said to check you understood, ask clarifying questions, and support your own ideas with reasons.',
        'Matching your formality to the discussion (a class debate vs chatting with a friend) shows awareness of your audience.',
      ],
      illustrations: [
        { brief: 'Conversation turn-taking cards for a classroom discussion', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: 'Speak' }, { icon: 'eye', label: 'Listen' }, { icon: 'magnifier', label: 'Question' }, { icon: 'people', label: 'Respond' }], caption: 'Listen, paraphrase, question, respond' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY02-q1', type: 'mcq', prompt: 'Restating someone’s idea in your own words to check understanding is called…', options: ['Interrupting', 'Paraphrasing', 'Ignoring'], answer: 'Paraphrasing', difficulty: 1 },
        { id: 'Y6-ENG-LY02-q2', type: 'mcq', prompt: 'Supporting your opinion in a discussion is strongest when you…', options: ['Give reasons or evidence', 'Speak the loudest', 'Repeat yourself'], answer: 'Give reasons or evidence', difficulty: 2 },
        { id: 'Y6-ENG-LY02-q3', type: 'mcq', prompt: 'Asking a clarifying question in a discussion helps you…', options: ['Better understand a point before responding', 'End the conversation', 'Change the subject'], answer: 'Better understand a point before responding', difficulty: 1 },
        { id: 'Y6-ENG-LY02-q4', type: 'mcq', prompt: 'A formal class debate calls for a different tone than…', options: ['Chatting with a friend at lunch', 'A written report', 'A textbook'], answer: 'Chatting with a friend at lunch', difficulty: 1 },
        { id: 'Y6-ENG-LY02-q5', type: 'mcq', prompt: 'Good listening in a discussion includes…', options: ['Waiting for your turn to interrupt', 'Genuinely following what the speaker says', 'Thinking about something else'], answer: 'Genuinely following what the speaker says', difficulty: 2 },
        { id: 'Y6-ENG-LY02-q6', type: 'mcq', prompt: '"Turn-taking" in discussion means…', options: ['Everyone gets a fair chance to speak', 'Only one person ever speaks', 'Speaking over others'], answer: 'Everyone gets a fair chance to speak', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY03',
    title: 'Analysing text structures & features for purpose',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every text choice serves a purpose, a persuasive advert uses bold colours and emotive words to convince you; an info-text uses headings and diagrams to help you find facts fast.',
        'Ask: who is this text for, and how do its structure and language work to influence or inform that audience?',
      ],
      illustrations: [
        { brief: 'A colour-coded persuasive advert with structure/purpose labels', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Structure (headline, image, call to action)' }, { text: 'Purpose (persuade)' }, { text: 'Audience (who sees it)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY03-q1', type: 'mcq', prompt: 'Bold colours and emotive slogans in an advert are there to…', options: ['Persuade the audience to buy', 'Fill up space', 'Follow spelling rules'], answer: 'Persuade the audience to buy', difficulty: 1 },
        { id: 'Y6-ENG-LY03-q2', type: 'mcq', prompt: 'Headings and subheadings in an info-text mainly help readers…', options: ['Find facts quickly', 'Ignore the content', 'Add more pictures'], answer: 'Find facts quickly', difficulty: 1 },
        { id: 'Y6-ENG-LY03-q3', type: 'mcq', prompt: 'A key question when analysing any text\'s purpose is…', options: ['Who is this text for, and why was it made?', 'What font is used?', 'How many pages does it have?'], answer: 'Who is this text for, and why was it made?', difficulty: 2 },
        { id: 'Y6-ENG-LY03-q4', type: 'mcq', prompt: 'A recipe\'s numbered steps and ingredient list exist to help the reader…', options: ['Follow the process accurately', 'Feel persuaded to cook', 'Feel entertained'], answer: 'Follow the process accurately', difficulty: 2 },
        { id: 'Y6-ENG-LY03-q5', type: 'mcq', prompt: 'An advert aimed at children often uses…', options: ['Bright colours and simple, exciting language', 'Dense legal language', 'No images at all'], answer: 'Bright colours and simple, exciting language', difficulty: 2 },
        { id: 'Y6-ENG-LY03-q6', type: 'mcq', prompt: 'A text\'s structure and language features work together to…', options: ['Meet its purpose and engage its audience', 'Waste space', 'Confuse every reader'], answer: 'Meet its purpose and engage its audience', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY04',
    title: 'Reading with strategy, selecting & navigating texts',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A table of contents, glossary, headings and subheadings are a map for a text, use them to jump straight to the information you need instead of reading everything.',
        'Good readers choose their reading strategy (skim, scan, read closely) based on their purpose.',
      ],
      illustrations: [
        { brief: 'A contents/glossary treasure map for a non-fiction book', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bookmark', label: 'Contents' }, { icon: 'magnifier', label: 'Headings' }, { icon: 'book', label: 'Glossary' }], caption: 'Navigate a text like a map' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY04-q1', type: 'mcq', prompt: 'To quickly find what a word means in a non-fiction book, check the…', options: ['Glossary', 'Front cover', 'Page numbers'], answer: 'Glossary', difficulty: 1 },
        { id: 'Y6-ENG-LY04-q2', type: 'mcq', prompt: 'To find which chapter covers a topic, check the…', options: ['Table of contents', 'Back cover blurb', 'Font size'], answer: 'Table of contents', difficulty: 1 },
        { id: 'Y6-ENG-LY04-q3', type: 'mcq', prompt: '"Skimming" a text means…', options: ['Reading quickly for the general idea', 'Reading every word slowly', 'Not reading at all'], answer: 'Reading quickly for the general idea', difficulty: 2 },
        { id: 'Y6-ENG-LY04-q4', type: 'mcq', prompt: '"Scanning" a text means…', options: ['Looking for a specific piece of information', 'Memorising the whole page', 'Reading it backwards'], answer: 'Looking for a specific piece of information', difficulty: 2 },
        { id: 'Y6-ENG-LY04-q5', type: 'mcq', prompt: 'Choosing how to read (skim, scan, closely) should depend on…', options: ['Your purpose for reading', 'The book\'s colour', 'Random choice'], answer: 'Your purpose for reading', difficulty: 2 },
        { id: 'Y6-ENG-LY04-q6', type: 'mcq', prompt: 'Subheadings within a chapter mainly help a reader…', options: ['Navigate to a specific section', 'Decorate the page', 'Replace the glossary'], answer: 'Navigate to a specific section', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY05',
    title: 'Comprehension strategies',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Strong readers actively work while they read: visualising the scene, predicting what happens next, connecting to things they know, summarising, and questioning as they go.',
        'These strategies help you build both the literal meaning (what the text says) and the inferred meaning (what it implies but does not say directly).',
      ],
      illustrations: [
        {
          brief: 'Six strategy icons applied to a short passage',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Visualise' }, { icon: 'crystal-ball', label: 'Predict' }, { icon: 'link', label: 'Connect' }, { icon: 'clipboard', label: 'Summarise' }, { icon: 'magnifier', label: 'Question' }], caption: 'Active reading strategies' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY05-q1', type: 'mcq', prompt: 'Working out something the text implies but never states directly is called…', options: ['Predicting', 'Inferring', 'Skimming'], answer: 'Inferring', difficulty: 2 },
        { id: 'Y6-ENG-LY05-q2', type: 'mcq', prompt: 'Forming a picture in your mind while reading is called…', options: ['Visualising', 'Summarising', 'Scanning'], answer: 'Visualising', difficulty: 1 },
        { id: 'Y6-ENG-LY05-q3', type: 'mcq', prompt: 'Guessing what happens next based on clues so far is called…', options: ['Predicting', 'Inferring', 'Editing'], answer: 'Predicting', difficulty: 1 },
        { id: 'Y6-ENG-LY05-q4', type: 'mcq', prompt: 'Retelling the main points of a text in fewer words is…', options: ['Summarising', 'Visualising', 'Questioning'], answer: 'Summarising', difficulty: 1 },
        { id: 'Y6-ENG-LY05-q5', type: 'mcq', prompt: 'Linking a story to something you already know or have experienced is…', options: ['Connecting', 'Predicting', 'Skimming'], answer: 'Connecting', difficulty: 1 },
        { id: 'Y6-ENG-LY05-q6', type: 'mcq', prompt: 'Comprehension strategies help build both literal meaning and…', options: ['Inferred meaning', 'Page numbers', 'Font style'], answer: 'Inferred meaning', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY06',
    title: 'Writing & publishing multimodal texts',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Writing is a process: plan, draft, revise, edit, then publish, each stage has a job, and skipping straight to "final" rarely produces your best work.',
        'A multimodal text combines words with images, layout or sound, think a picture book, a slideshow, or an illustrated report.',
      ],
      illustrations: [
        {
          brief: 'A writing-process wheel: plan → draft → revise → edit → publish',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Plan' }, { text: 'Draft' }, { text: 'Revise & edit' }, { text: 'Publish' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY06-q1', type: 'mcq', prompt: 'Which stage comes right before publishing?', options: ['Planning', 'Revising & editing', 'Choosing a topic'], answer: 'Revising & editing', difficulty: 1 },
        { id: 'Y6-ENG-LY06-q2', type: 'mcq', prompt: 'A multimodal text combines words with…', options: ['Images, layout or sound', 'Nothing else', 'Only more words'], answer: 'Images, layout or sound', difficulty: 1 },
        { id: 'Y6-ENG-LY06-q3', type: 'mcq', prompt: 'The very first stage of the writing process is…', options: ['Planning', 'Publishing', 'Editing'], answer: 'Planning', difficulty: 1 },
        { id: 'Y6-ENG-LY06-q4', type: 'mcq', prompt: 'Skipping straight from an idea to a "final" draft usually…', options: ['Produces your best writing', 'Skips useful revision', 'Is required by all writers'], answer: 'Skips useful revision', difficulty: 2 },
        { id: 'Y6-ENG-LY06-q5', type: 'mcq', prompt: 'A slideshow with words and images is an example of a…', options: ['Multimodal text', 'Single-mode text', 'Spoken-only text'], answer: 'Multimodal text', difficulty: 1 },
        { id: 'Y6-ENG-LY06-q6', type: 'mcq', prompt: 'Editing a draft mainly focuses on…', options: ['Fixing and improving what you\'ve written', 'Starting over from nothing', 'Choosing a new topic'], answer: 'Fixing and improving what you\'ve written', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY07',
    title: 'Spoken & multimodal presentations',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A great spoken presentation is planned like writing, organise your ideas, then rehearse how you will say them: pitch, tone, pace and volume all carry meaning.',
        'Visual or digital features (slides, props) should support what you are saying, not distract from it.',
      ],
      illustrations: [
        { brief: 'A rehearsal mirror with pitch, tone, pace and volume labelled', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'Speak' }, { icon: 'speaker', label: 'Volume' }, { icon: 'clock', label: 'Pace' }, { icon: 'music-note', label: 'Tone' }], caption: 'Delivery choices that carry meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY07-q1', type: 'mcq', prompt: 'Speaking too fast in a presentation mostly hurts your…', options: ['Pace', 'Slide colours', 'Handwriting'], answer: 'Pace', difficulty: 1 },
        { id: 'Y6-ENG-LY07-q2', type: 'mcq', prompt: 'Rehearsing a presentation before delivering it helps you…', options: ['Improve pacing and confidence', 'Forget the topic', 'Make it longer'], answer: 'Improve pacing and confidence', difficulty: 1 },
        { id: 'Y6-ENG-LY07-q3', type: 'mcq', prompt: 'Slides in a presentation should mainly…', options: ['Support what you are saying', 'Replace the need to speak', 'Distract the audience'], answer: 'Support what you are saying', difficulty: 2 },
        { id: 'Y6-ENG-LY07-q4', type: 'mcq', prompt: 'Speaking too quietly in a large room mostly affects your…', options: ['Volume', 'Spelling', 'Slide design'], answer: 'Volume', difficulty: 1 },
        { id: 'Y6-ENG-LY07-q5', type: 'mcq', prompt: 'Varying your pitch and tone while speaking helps…', options: ['Keep the audience engaged', 'Confuse the listener on purpose', 'Nothing at all'], answer: 'Keep the audience engaged', difficulty: 2 },
        { id: 'Y6-ENG-LY07-q6', type: 'mcq', prompt: 'A good spoken presentation is planned…', options: ['Like a piece of writing, with organised ideas', 'With no preparation at all', 'Only using slides, no speaking'], answer: 'Like a piece of writing, with organised ideas', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY08',
    title: 'Phonic knowledge for complex words',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'By Year 6, words get trickier, "ph" makes an "f" sound (phone), "ough" can sound many ways (though, through, tough). Knowing these patterns helps you decode unfamiliar words.',
        'The same knowledge works in reverse for spelling: hearing a sound and knowing which letters usually represent it.',
      ],
      illustrations: [
        { brief: 'Grapheme cards showing tricky letter-sound patterns', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bookmark', label: '"ph" → /f/' }, { icon: 'bookmark', label: '"ough" → many sounds' }], caption: 'Same letters, different sounds' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY08-q1', type: 'short', prompt: 'What sound does "ph" make in "phone"?', answer: 'f', difficulty: 1 },
        { id: 'Y6-ENG-LY08-q2', type: 'mcq', prompt: 'Which word contains the "ph" makes "f" pattern?', options: ['Dolphin', 'Happen', 'Pretty'], answer: 'Dolphin', difficulty: 1 },
        { id: 'Y6-ENG-LY08-q3', type: 'mcq', prompt: 'The letters "ough" can be pronounced…', options: ['Only one way, always', 'Many different ways depending on the word', 'Silently in every word'], answer: 'Many different ways depending on the word', difficulty: 2 },
        { id: 'Y6-ENG-LY08-q4', type: 'mcq', prompt: 'Knowing grapheme–phoneme patterns mainly helps you…', options: ['Decode and spell unfamiliar words', 'Draw better pictures', 'Speak louder'], answer: 'Decode and spell unfamiliar words', difficulty: 2 },
        { id: 'Y6-ENG-LY08-q5', type: 'mcq', prompt: 'A "grapheme" is…', options: ['A letter or letter group representing a sound', 'A type of punctuation', 'A kind of sentence'], answer: 'A letter or letter group representing a sound', difficulty: 2 },
        { id: 'Y6-ENG-LY08-q6', type: 'mcq', prompt: 'Which word rhymes with "though" (using the same "ough" sound)?', options: ['Go', 'Cow', 'Tough'], answer: 'Go', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-ENG-LY09',
    title: 'Spelling, word origins & word-building',
    year: '6',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E6LY09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "Many English words are built from Latin or Greek roots, 'aqua' means water (aquarium, aquatic), 'photo' means light (photograph, photosynthesis).",
        'Prefixes and suffixes attach to base words to change their meaning (un + happy = unhappy) or their word type (happy + ness = happiness).',
      ],
      illustrations: [
        { brief: 'A roots chart: aqua = water, photo = light', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'droplet', label: '"aqua" = water' }, { icon: 'book', label: 'aquarium, aquatic' }], caption: 'Roots unlock the meaning of new words' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-ENG-LY09-q1', type: 'short', prompt: 'The root "photo" means…', answer: 'light', difficulty: 2 },
        { id: 'Y6-ENG-LY09-q2', type: 'short', prompt: 'Add a suffix to "happy" to make it a noun meaning the state of being happy.', answer: 'happiness', difficulty: 2 },
        { id: 'Y6-ENG-LY09-q3', type: 'short', prompt: 'The root "aqua" means…', answer: 'water', difficulty: 1 },
        { id: 'Y6-ENG-LY09-q4', type: 'mcq', prompt: 'Adding the prefix "un-" to "happy" changes its meaning to…', options: ['Not happy', 'Very happy', 'A type of happy'], answer: 'Not happy', difficulty: 1 },
        { id: 'Y6-ENG-LY09-q5', type: 'mcq', prompt: 'A prefix is added…', options: ['Before a base word', 'After a base word', 'In the middle of a base word'], answer: 'Before a base word', difficulty: 1 },
        { id: 'Y6-ENG-LY09-q6', type: 'mcq', prompt: 'Knowing that "photo" means light helps you guess the meaning of…', options: ['Photosynthesis', 'Telephone', 'Bicycle'], answer: 'Photosynthesis', difficulty: 2 },
      ],
    },
  },
];
