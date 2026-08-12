import type { Topic } from '../../types/curriculum';

/**
 * Year 5 English, full topic bank.
 * Source of truth for scope: docs/content/year-1-5/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E5xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons, never bulk-copy syllabus text).
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR5_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y5-ENG-LA01',
    title: 'Language for social roles & relationships',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'The words you choose tell people who you are talking to and how close you are. You might say "G\'day, what\'s up?" to your mate but "Good morning, how can I help you?" to the school office.',
        'Matching your words to the person and the situation is called register, your register quietly announces the relationship before your message even lands.',
      ],
      illustrations: [
        { brief: 'Two greetings side by side: casual for a mate vs formal for a principal', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"G\'day, what\'s up?"' }, { icon: 'envelope', label: '"Dear Principal,"' }], caption: 'Same idea, different registers' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA01-q1', type: 'mcq', prompt: 'Which greeting best fits a talk with your teacher in class?', options: ['G\'day, what\'s up?', 'Hello, Mrs Chen, may I ask a question?'], answer: 'Hello, Mrs Chen, may I ask a question?', difficulty: 1 },
        { id: 'Y5-ENG-LA01-q2', type: 'mcq', prompt: 'The level of formality we match to a person and situation is called…', options: ['Register', 'Rhyme', 'Rhythm'], answer: 'Register', difficulty: 1 },
        { id: 'Y5-ENG-LA01-q3', type: 'mcq', prompt: 'Casual language full of slang and shortened words usually signals…', options: ['A close, familiar relationship', 'A formal business meeting', 'A court case'], answer: 'A close, familiar relationship', difficulty: 1 },
        { id: 'Y5-ENG-LA01-q4', type: 'mcq', prompt: 'Which sentence sounds the most formal?', options: ['Grab us a drink, will ya?', 'Would you mind passing me a drink, please?', 'Pass the drink.'], answer: 'Would you mind passing me a drink, please?', difficulty: 2 },
        { id: 'Y5-ENG-LA01-q5', type: 'short', prompt: 'What is it called when we change our language to fit the person and the situation?', answer: 'register', difficulty: 2 },
        { id: 'Y5-ENG-LA01-q6', type: 'mcq', prompt: 'A polite, complete sentence like "Excuse me, could you help me?" signals a relationship that is…', options: ['Distant or respectful', 'Very close and casual', 'Playful and teasing'], answer: 'Distant or respectful', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA02',
    title: 'Beyond bare assertions',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'An assertion is a claim like "Recycling is important." A BARE assertion just states it, anyone can ask "Why?" and you would be stuck.',
        'Level up by adding reasons, evidence and what others think, and by checking an authoritative source, so your reader can actually trust your claim.',
      ],
      illustrations: [
        { brief: 'Building a claim up from a bare assertion to a fully supported one', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Claim: "Recycling helps."' }, { text: 'Reason: it saves resources' }, { text: 'Evidence: report from the EPA' }, { text: 'Name where it came from' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA02-q1', type: 'mcq', prompt: 'A "bare assertion" is a claim that…', options: ['Has no support or evidence', 'Has many sources', 'Is always true'], answer: 'Has no support or evidence', difficulty: 1 },
        { id: 'Y5-ENG-LA02-q2', type: 'mcq', prompt: 'Which sentence supports the claim "Spiders are helpful"?', options: ['Spiders have eight legs.', 'Spiders eat thousands of pest insects each year.', 'Some spiders are red.'], answer: 'Spiders eat thousands of pest insects each year.', difficulty: 1 },
        { id: 'Y5-ENG-LA02-q3', type: 'mcq', prompt: 'An "authoritative source" is…', options: ['A reliable expert or trusted reference', 'Any opinion from anyone', 'A made-up website'], answer: 'A reliable expert or trusted reference', difficulty: 2 },
        { id: 'Y5-ENG-LA02-q4', type: 'mcq', prompt: 'Writing "According to the Wildlife Foundation…" is an example of…', options: ['Acknowledging a source', 'A bare assertion', 'A rhyme'], answer: 'Acknowledging a source', difficulty: 2 },
        { id: 'Y5-ENG-LA02-q5', type: 'short', prompt: 'A claim with no evidence is called a ______ assertion.', answer: 'bare', difficulty: 2 },
        { id: 'Y5-ENG-LA02-q6', type: 'mcq', prompt: 'Which addition makes this claim stronger? "We should walk to school. ___"', options: ['...because it is better for the planet and our health.', '...and also we should.', '...or maybe not.'], answer: '...because it is better for the planet and our health.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA03',
    title: 'Language features across modes',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A text can be spoken (a podcast), written (a report) or multimodal, words plus pictures and sound together. Each "mode" uses language in its own special way.',
        'Every mode is also organised into stages: a speech opens with a greeting, a report opens with an introduction. Knowing the stages helps you follow along.',
      ],
      illustrations: [
        { brief: 'Three modes of text with their typical language features', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'Spoken (podcast)' }, { icon: 'pen', label: 'Written (report)' }, { icon: 'phone', label: 'Multimodal (app)' }], caption: 'Three modes of text' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA03-q1', type: 'mcq', prompt: 'A podcast that you only listen to is mainly a…', options: ['Spoken text', 'Written text', 'Silent text'], answer: 'Spoken text', difficulty: 1 },
        { id: 'Y5-ENG-LA03-q2', type: 'mcq', prompt: 'A text combining words, images and sound is called…', options: ['Multimodal', 'Monologue', 'Outline'], answer: 'Multimodal', difficulty: 1 },
        { id: 'Y5-ENG-LA03-q3', type: 'mcq', prompt: 'The organised parts of a text, like a greeting, then a body, then a goodbye, are its…', options: ['Stages', 'Decorations', 'Margins'], answer: 'Stages', difficulty: 2 },
        { id: 'Y5-ENG-LA03-q4', type: 'mcq', prompt: 'A report with headings and a labelled diagram is mostly a…', options: ['Multimodal text', 'A chant', 'A whisper'], answer: 'Multimodal text', difficulty: 1 },
        { id: 'Y5-ENG-LA03-q5', type: 'short', prompt: 'Name one stage a spoken presentation usually opens with.', answer: 'greeting', difficulty: 2 },
        { id: 'Y5-ENG-LA03-q6', type: 'mcq', prompt: 'Knowing a text\'s characteristic stages mainly helps a reader or listener…', options: ['Predict what comes next', 'Skip the beginning', 'Ignore all headings'], answer: 'Predict what comes next', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA04',
    title: 'Cohesion: sentence & paragraph starting points',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Cohesion is the glue that joins your sentences and paragraphs. One powerful glue is how you START a sentence, whatever comes first is what the reader notices most.',
        'Want the spotlight on the problem? Start with it: "The flood came fast." Want the spotlight on the setting? Start with it: "On the dry riverbank, the flood came fast."',
      ],
      illustrations: [
        { brief: 'The same sentence with two different starting points', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Start: "The flood came fast."' }, { text: 'Start: "On the dry riverbank, the flood came fast."' }, { text: 'What gets the spotlight changes' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA04-q1', type: 'mcq', prompt: 'Putting "The flood came fast" at the START of the sentence makes the reader focus on…', options: ['The flood', 'The weather', 'Nothing at all'], answer: 'The flood', difficulty: 2 },
        { id: 'Y5-ENG-LA04-q2', type: 'mcq', prompt: 'Which sentence starts with a time detail?', options: ['At dawn, the bells rang.', 'The bells rang at dawn.', 'Bells are loud.'], answer: 'At dawn, the bells rang.', difficulty: 1 },
        { id: 'Y5-ENG-LA04-q3', type: 'mcq', prompt: 'Starting a paragraph with a topic sentence mainly helps…', options: ['Signal what the paragraph is about', 'Hide the main idea', 'Make it longer'], answer: 'Signal what the paragraph is about', difficulty: 1 },
        { id: 'Y5-ENG-LA04-q4', type: 'mcq', prompt: 'Moving a key idea to the front of a sentence gives it…', options: ['Prominence', 'A spelling error', 'A smaller size'], answer: 'Prominence', difficulty: 2 },
        { id: 'Y5-ENG-LA04-q5', type: 'short', prompt: 'Move the key detail to the front: "The puppy chewed my shoes at midnight." Begin with "At midnight".', answer: 'At midnight, the puppy chewed my shoes.', difficulty: 2 },
        { id: 'Y5-ENG-LA04-q6', type: 'mcq', prompt: 'Writers carefully choose sentence starting points to…', options: ['Create cohesion and control emphasis', 'Confuse the reader', 'Use more pages'], answer: 'Create cohesion and control emphasis', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA05',
    title: 'Complex sentences for effect',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A complex sentence holds a main clause that stands alone, plus a dependent clause that adds more: "While the rain hammered the roof, the kittens slept."',
        'Writers use them on purpose, the extra idea first builds suspense, and saved for last it lands the surprise. Complex sentences make writing flow like music instead of bumps.',
      ],
      illustrations: [
        { brief: 'A complex sentence built like a train with a main engine and dependent carriage', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'train-engine', label: 'Main: the kittens slept' }, { icon: 'train-car', label: 'Dependent: while the rain hammered' }], caption: 'A complex sentence rides like a train' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA05-q1', type: 'mcq', prompt: 'A complex sentence contains…', options: ['A main clause and at least one dependent clause', 'Only a single word', 'Two unrelated ideas with no link'], answer: 'A main clause and at least one dependent clause', difficulty: 1 },
        { id: 'Y5-ENG-LA05-q2', type: 'mcq', prompt: 'In "While the rain hammered the roof, the kittens slept," which is the main clause?', options: ['the kittens slept', 'While the rain hammered the roof', 'the rain'], answer: 'the kittens slept', difficulty: 2 },
        { id: 'Y5-ENG-LA05-q3', type: 'mcq', prompt: 'Which word can begin a dependent clause?', options: ['Because', 'And', 'Very'], answer: 'Because', difficulty: 1 },
        { id: 'Y5-ENG-LA05-q4', type: 'mcq', prompt: 'Putting the dependent clause first ("When the lights went out…") is used to…', options: ['Build suspense before the main action', 'Hide the main clause', 'Remove punctuation'], answer: 'Build suspense before the main action', difficulty: 2 },
        { id: 'Y5-ENG-LA05-q5', type: 'short', prompt: 'Combine into one complex sentence using "while": "The phone rang." + "I was eating dinner."', answer: 'While I was eating dinner, the phone rang.', difficulty: 3 },
        { id: 'Y5-ENG-LA05-q6', type: 'mcq', prompt: 'Which sentence is a complex sentence?', options: ['The cat slept.', 'Because the game was on, the crowd cheered.', 'Tom and I ran.'], answer: 'Because the game was on, the crowd cheered.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA06',
    title: 'Expanded noun groups',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A noun group grows around a noun. "The dog" becomes "the scruffy, mud-caked dog" and then "the scruffy, mud-caked dog from next door".',
        'Add describing words before the noun, or extra bits after it like "with the torn ear" or "who won the show", to pack real detail into every sentence.',
      ],
      illustrations: [
        { brief: 'A noun group expanding step by step', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'The dog' }, { text: 'the scruffy, mud-caked dog' }, { text: 'the scruffy, mud-caked dog from next door' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA06-q1', type: 'mcq', prompt: 'Which is an expanded noun group?', options: ['a bright, buzzing beehive in the tall gum tree', 'a beehive', 'the tree'], answer: 'a bright, buzzing beehive in the tall gum tree', difficulty: 1 },
        { id: 'Y5-ENG-LA06-q2', type: 'mcq', prompt: 'Which word is the noun in "the sleepy tabby cat"?', options: ['cat', 'sleepy', 'the'], answer: 'cat', difficulty: 1 },
        { id: 'Y5-ENG-LA06-q3', type: 'short', prompt: 'What do we call the group of words built around a noun to describe it?', answer: 'noun group', difficulty: 2 },
        { id: 'Y5-ENG-LA06-q4', type: 'mcq', prompt: 'Adding "with the torn ear" AFTER the noun is another way to…', options: ['Expand the noun group', 'Shorten the sentence', 'Remove detail'], answer: 'Expand the noun group', difficulty: 2 },
        { id: 'Y5-ENG-LA06-q5', type: 'mcq', prompt: 'Which phrase could be added to "the kite" to give more detail?', options: ['which my aunt made', 'yesterday', 'quickly'], answer: 'which my aunt made', difficulty: 2 },
        { id: 'Y5-ENG-LA06-q6', type: 'mcq', prompt: 'Writers expand noun groups mainly to…', options: ['Give fuller, more precise description', 'Use fewer words', 'Avoid commas'], answer: 'Give fuller, more precise description', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA07',
    title: 'Sequence of images affects meaning',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'In a comic, a film or a slideshow, the ORDER of images changes the story. A cat picture, then a broken vase, then a dog picture tells a very different tale from cat, dog, then broken vase.',
        'Viewers follow the sequence frame by frame, so each picture builds meaning on the one before it, order is the storyteller.',
      ],
      illustrations: [
        { brief: 'Three frames that tell a cause-and-effect story through their order', ready: true, diagram: { kind: 'flowchart', steps: [{ text: '[Cat sits near shelf]' }, { text: '[Broken vase on floor]' }, { text: '[Dog looks shocked]' }, { text: 'Order makes the reader guess who did it' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA07-q1', type: 'mcq', prompt: 'In a wordless comic, the meaning of the story mostly comes from…', options: ['The order of the images', 'The page number', 'The font used'], answer: 'The order of the images', difficulty: 1 },
        { id: 'Y5-ENG-LA07-q2', type: 'mcq', prompt: 'Two sequences using the same pictures in a different order can tell…', options: ['Different stories', 'The exact same story always', 'No story at all'], answer: 'Different stories', difficulty: 2 },
        { id: 'Y5-ENG-LA07-q3', type: 'mcq', prompt: 'Which order makes the reader think the cat caused the mess?', options: ['[Cat] then [broken vase]', '[Broken vase] then [cat]', '[Dog] then [sun]'], answer: '[Cat] then [broken vase]', difficulty: 2 },
        { id: 'Y5-ENG-LA07-q4', type: 'mcq', prompt: 'In a film, a slow zoom on a character\'s face, then a cut to the door, is used to…', options: ['Make the viewer wonder what the character is thinking', 'Randomly fill time', 'Hide the plot completely'], answer: 'Make the viewer wonder what the character is thinking', difficulty: 2 },
        { id: 'Y5-ENG-LA07-q5', type: 'short', prompt: 'Order these for cause then effect: a) bin tipped over, b) dog bumps the bin. Write just the letters.', answer: 'b, a', difficulty: 3 },
        { id: 'Y5-ENG-LA07-q6', type: 'mcq', prompt: 'Viewers usually read a sequence of images in a storyboard…', options: ['From left to right, in order', 'From back to front', 'In no order at all'], answer: 'From left to right, in order', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA08',
    title: 'Precise vocabulary & word history',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Precise words say exactly what you mean. In a science report, "evaporates" beats "goes away"; in a recipe, "fold gently" beats "mix a bit".',
        'Words also carry history: "astronaut" comes from Greek for "star sailor", and "kangaroo" entered English from Guugu Yimithirr. Knowing a word\'s roots helps you guess new words.',
      ],
      illustrations: [
        { brief: 'The word "astronaut" unpacked into its Greek roots', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'telescope', label: 'astro = star' }, { icon: 'ship', label: 'naut = sailor' }], caption: 'astronaut = star sailor' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA08-q1', type: 'mcq', prompt: 'Which word is more precise for a science report about water drying up?', options: ['Evaporates', 'Goes', 'Disappears'], answer: 'Evaporates', difficulty: 1 },
        { id: 'Y5-ENG-LA08-q2', type: 'mcq', prompt: '"Astronaut" comes from Greek words meaning…', options: ['star sailor', 'moon flyer', 'space truck'], answer: 'star sailor', difficulty: 2 },
        { id: 'Y5-ENG-LA08-q3', type: 'mcq', prompt: 'Specialist words used by experts in a subject are called…', options: ['Technical terms', 'Slang', 'Shortcuts'], answer: 'Technical terms', difficulty: 1 },
        { id: 'Y5-ENG-LA08-q4', type: 'short', prompt: 'The root "aqua" (as in aquarium, aquatic) means…', answer: 'water', difficulty: 1 },
        { id: 'Y5-ENG-LA08-q5', type: 'mcq', prompt: 'Knowing a word\'s history and roots mainly helps readers…', options: ['Guess the meaning of unfamiliar words', 'Spell everything perfectly', 'Read faster only'], answer: 'Guess the meaning of unfamiliar words', difficulty: 2 },
        { id: 'Y5-ENG-LA08-q6', type: 'mcq', prompt: 'Which sentence uses the more precise word?', options: ['The team constructed a model tower.', 'The team made a model tower.', 'The team did a tower.'], answer: 'The team constructed a model tower.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LA09',
    title: 'Commas & apostrophes for possession',
    year: '5',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E5LA09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Commas after prepositional phrases show where the extra detail ends: "In the morning, we surf." and "With a flick of her wrist, she bowled."',
        'Apostrophes show ownership. One owner: "the girl\'s bag". More than one owner (plural possession): "the girls\' bags", the apostrophe slides after the s.',
      ],
      illustrations: [
        { brief: 'One owner vs many owners with the apostrophe placed correctly', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ball', label: "the bowler's ball" }, { icon: 'ball', label: "the bowlers' balls" }], caption: 'One owner vs many owners' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LA09-q1', type: 'mcq', prompt: 'For "the girls\' basketball" (two or more girls), the apostrophe goes…', options: ['After the s: girls\'', 'Before the s: girl\'s', 'No apostrophe at all'], answer: 'After the s: girls\'', difficulty: 2 },
        { id: 'Y5-ENG-LA09-q2', type: 'mcq', prompt: 'Which shows ONE owner?', options: ["the dog's bone", "the dogs' bone", "the dogs bone"], answer: "the dog's bone", difficulty: 1 },
        { id: 'Y5-ENG-LA09-q3', type: 'mcq', prompt: 'Add the missing comma: "In the morning we surf."', options: ['In the morning, we surf.', 'In, the morning we surf.', 'In the morning we, surf.'], answer: 'In the morning, we surf.', difficulty: 1 },
        { id: 'Y5-ENG-LA09-q4', type: 'mcq', prompt: 'In "With a flick of her wrist, she bowled," the words before the comma are a…', options: ['Prepositional phrase', 'Noun', 'Verb'], answer: 'Prepositional phrase', difficulty: 2 },
        { id: 'Y5-ENG-LA09-q5', type: 'short', prompt: 'Rewrite for plural possession: "The bone belongs to the dogs."', answer: "the dogs' bone", difficulty: 2 },
        { id: 'Y5-ENG-LA09-q6', type: 'mcq', prompt: 'If two parents share one car, we write…', options: ["our parents' car", "our parent's car", "our parents car"], answer: "our parents' car", difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y5-ENG-LE01',
    title: 'Literary texts & contexts',
    year: '5',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E5LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Stories carry the world they come from. A novel from 1930s Australia, a Dreaming story told by First Nations peoples for thousands of years, and a tale from Japan all grow from different times, places and cultures.',
        'Read respectfully: the historical, social and cultural context helps you understand what characters value, why events happen, and what the story is really about.',
      ],
      illustrations: [
        { brief: 'A "context postcard" linking a story to its time, place and culture', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Story' }, { icon: 'map', label: 'Place' }, { icon: 'clock', label: 'Time' }, { icon: 'people', label: 'Culture' }], caption: 'Context shapes a story\'s meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LE01-q1', type: 'mcq', prompt: 'A story\'s context includes…', options: ['Its time, place and culture', 'Its page count', 'Its font only'], answer: 'Its time, place and culture', difficulty: 1 },
        { id: 'Y5-ENG-LE01-q2', type: 'mcq', prompt: 'Reading First Nations Australian and world literature respectfully means…', options: ['Understanding the culture and context the story comes from', 'Skipping the beginning', 'Judging characters only by modern rules'], answer: 'Understanding the culture and context the story comes from', difficulty: 2 },
        { id: 'Y5-ENG-LE01-q3', type: 'mcq', prompt: 'A story written in a drought-stricken Australian town in the 1930s might feature…', options: ['Little rain and hard choices about water', 'Endless snowfall', 'Space rockets'], answer: 'Little rain and hard choices about water', difficulty: 2 },
        { id: 'Y5-ENG-LE01-q4', type: 'short', prompt: 'What do we call the setting in time, place and culture that shapes a story?', answer: 'context', difficulty: 1 },
        { id: 'Y5-ENG-LE01-q5', type: 'mcq', prompt: 'Characters\' values and choices in a story make most sense when you know…', options: ['The historical and cultural context', 'The number of chapters', 'The publisher'], answer: 'The historical and cultural context', difficulty: 2 },
        { id: 'Y5-ENG-LE01-q6', type: 'mcq', prompt: 'Dreaming stories told by First Nations Australian peoples teach…', options: ['Cultural knowledge and values, passed across generations', 'Only the alphabet', 'Only maths sums'], answer: 'Cultural knowledge and values, passed across generations', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LE02',
    title: 'Opinions using literary terms',
    year: '5',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E5LE02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Instead of "I just liked it", a sharp opinion uses literary terms: "The author builds suspense through a cliffhanger" or "The simile makes the desert feel alive".',
        'Then give your evidence, quote the part of the text that shows it, and listen to others\' views with an open mind, because different readers notice different things.',
      ],
      illustrations: [
        { brief: 'Building a literary opinion from claim to evidence', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Opinion: "The ending rocks!"' }, { text: 'Use a literary term: the cliffhanger' }, { text: 'Evidence: quote from the text' }, { text: 'Listen to other views' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LE02-q1', type: 'mcq', prompt: 'Which opinion uses a literary term?', options: ['The cliffhanger made me desperate to read on', 'The book was nice', 'I liked chapter two'], answer: 'The cliffhanger made me desperate to read on', difficulty: 1 },
        { id: 'Y5-ENG-LE02-q2', type: 'mcq', prompt: 'Supporting an opinion with a quote from the text is giving…', options: ['Evidence', 'An apology', 'A guess'], answer: 'Evidence', difficulty: 1 },
        { id: 'Y5-ENG-LE02-q3', type: 'mcq', prompt: '"The author uses personification to bring the storm alive", personification is…', options: ['A literary device', 'A page number', 'A type of font'], answer: 'A literary device', difficulty: 1 },
        { id: 'Y5-ENG-LE02-q4', type: 'short', prompt: 'What do we call the structure of a story, the way its parts are arranged? (Clue: starts with "pl")', answer: 'plot', difficulty: 2 },
        { id: 'Y5-ENG-LE02-q5', type: 'mcq', prompt: 'When another reader disagrees with your opinion, a good response is…', options: ['"Interesting, what part of the text made you think that?"', '"You\'re wrong, period."', 'To stop listening'], answer: '"Interesting, what part of the text made you think that?"', difficulty: 2 },
        { id: 'Y5-ENG-LE02-q6', type: 'mcq', prompt: 'Opinions presented with literary terms and evidence are…', options: ['Easier to understand and discuss', 'Always confusing', 'Impossible to disagree with'], answer: 'Easier to understand and discuss', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LE03',
    title: 'Point of view',
    year: '5',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E5LE03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Who tells the story changes the story. First person ("I crept through the door") drops you inside one character\'s head; third person uses "she", "he" and "they"; an omniscient narrator knows everyone\'s thoughts.',
        'The same school camp could be thrilling to one character and terrifying to another, point of view shapes what you see, what you believe, and how you feel.',
      ],
      illustrations: [
        { brief: 'Three points of view looking at the same scene', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'First person "I"' }, { icon: 'people', label: 'Third person "she"' }, { icon: 'book', label: 'Omniscient: all minds' }], caption: 'Whose eyes tell the story?' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LE03-q1', type: 'mcq', prompt: 'A story told with "I" and "we" is written in…', options: ['First person', 'Third person', 'A recipe'], answer: 'First person', difficulty: 1 },
        { id: 'Y5-ENG-LE03-q2', type: 'mcq', prompt: 'A story told with "she", "he" and "they" is written in…', options: ['Third person', 'First person', 'Numbers'], answer: 'Third person', difficulty: 1 },
        { id: 'Y5-ENG-LE03-q3', type: 'mcq', prompt: 'A narrator who knows every character\'s secret thoughts is…', options: ['Omniscient', 'Sleepy', 'Silent'], answer: 'Omniscient', difficulty: 2 },
        { id: 'Y5-ENG-LE03-q4', type: 'mcq', prompt: 'The same event told by two different characters could…', options: ['Give different interpretations and responses', 'Never differ', 'Be identical in every way'], answer: 'Give different interpretations and responses', difficulty: 2 },
        { id: 'Y5-ENG-LE03-q5', type: 'short', prompt: 'In "The boat rocked and I gripped the rail," whose thoughts are we inside?', answer: 'the first-person narrator (I)', difficulty: 2 },
        { id: 'Y5-ENG-LE03-q6', type: 'mcq', prompt: 'Choosing first person usually makes readers feel…', options: ['Closer to that character', 'Completely detached', 'Unable to understand anything'], answer: 'Closer to that character', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LE04',
    title: 'Imagery & sound devices',
    year: '5',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E5LE04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Writers paint with words. A simile compares using "like" or "as" (the fire glowed like a sunset); a metaphor says one thing IS another (the fire was a hungry beast); personification gives objects human actions (the fire swallowed the log).',
        'Sound devices add music: rhyme, rhythm, alliteration (silent, silver stars) and onomatopoeia (crackle, whoosh, hiss), poets and songwriters use them constantly.',
      ],
      illustrations: [
        { brief: 'Simile, metaphor, personification and onomatopoeia as picture and sound cards', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sun', label: '"glowed like a sunset" simile' }, { icon: 'wind', label: '"the wind howled" personification' }, { icon: 'wave', label: '"crackle, hiss" onomatopoeia' }], caption: 'Imagery and sound devices' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LE04-q1', type: 'mcq', prompt: '"The rain fell like silver needles" is a…', options: ['Simile', 'Fact', 'Heading'], answer: 'Simile', difficulty: 1 },
        { id: 'Y5-ENG-LE04-q2', type: 'mcq', prompt: '"The wind howled at the window" gives the wind a human action, this is…', options: ['Personification', 'A list', 'A number'], answer: 'Personification', difficulty: 2 },
        { id: 'Y5-ENG-LE04-q3', type: 'mcq', prompt: '"The night was a velvet blanket" (no "like" or "as") is a…', options: ['Metaphor', 'Simile', 'Rhyme'], answer: 'Metaphor', difficulty: 2 },
        { id: 'Y5-ENG-LE04-q4', type: 'mcq', prompt: '"Sizzle" and "crackle" are examples of…', options: ['Onomatopoeia', 'Alliteration', 'An antonym'], answer: 'Onomatopoeia', difficulty: 1 },
        { id: 'Y5-ENG-LE04-q5', type: 'short', prompt: 'Which device repeats starting sounds, as in "slippery, silver snake"?', answer: 'alliteration', difficulty: 2 },
        { id: 'Y5-ENG-LE04-q6', type: 'mcq', prompt: 'Imagery and sound devices mainly make writing…', options: ['More vivid and powerful', 'Shorter', 'Impossible to read'], answer: 'More vivid and powerful', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LE05',
    title: 'Creating literary texts with figurative language',
    year: '5',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E5LE05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Now you get to make it glow. Plan a storyline with a character you care about, then add figurative language where it matters, a simile for a scary moment, personification for an angry storm.',
        'Experiment bravely: write a wild draft, then edit, swap flat words for vivid ones and cut anything that slows the action, until your words sing.',
      ],
      illustrations: [
        { brief: 'A writing-flow from planning to editing a story with figurative language', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan the storyline' }, { text: 'Add figurative language' }, { text: 'Draft' }, { text: 'Edit & publish' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LE05-q1', type: 'mcq', prompt: 'Adding a simile to describe a character\'s face is an example of…', options: ['Using figurative language', 'Removing all detail', 'Deleting the character'], answer: 'Using figurative language', difficulty: 1 },
        { id: 'Y5-ENG-LE05-q2', type: 'mcq', prompt: 'Which line uses personification well in a story?', options: ['The waves danced onto the shore', 'The waves are wet', 'The waves go up'], answer: 'The waves danced onto the shore', difficulty: 1 },
        { id: 'Y5-ENG-LE05-q3', type: 'mcq', prompt: 'When editing, swapping "good" for "brilliant" is…', options: ['Choosing more vivid words', 'Making a spelling error', 'Removing all detail'], answer: 'Choosing more vivid words', difficulty: 2 },
        { id: 'Y5-ENG-LE05-q4', type: 'mcq', prompt: 'A story\'s "storyline" includes…', options: ['The events and how they unfold', 'Only the cover', 'The page numbers'], answer: 'The events and how they unfold', difficulty: 2 },
        { id: 'Y5-ENG-LE05-q5', type: 'short', prompt: 'Name the device: "His eyes were twin fires." (no "like" or "as")', answer: 'metaphor', difficulty: 2 },
        { id: 'Y5-ENG-LE05-q6', type: 'mcq', prompt: 'Editing a draft mainly helps you…', options: ['Strengthen your figurative language and flow', 'Make it exactly the same', 'Skip the plot'], answer: 'Strengthen your figurative language and flow', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (10 CDs) ----------
  {
    id: 'Y5-ENG-LY01',
    title: 'Texts reflect time & place',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A letter from the 1800s, a wartime newsreel and today\'s online news each speak from their own time and place, their words, technology and concerns reveal the era they were made in.',
        'Ask: what does this text tell me about when and where it was created? The answers are clues about history, technology and values.',
      ],
      illustrations: [
        { brief: 'Then-and-now texts carrying clues about their time and place', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: '1900: telegraphs' }, { icon: 'phone', label: 'Today: apps' }, { icon: 'map', label: 'Place' }], caption: 'Texts carry their time and place' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY01-q1', type: 'mcq', prompt: 'A 1900s newspaper would probably mention…', options: ['Horse-drawn carts and telegraphs', 'Streaming videos', 'Smartphones'], answer: 'Horse-drawn carts and telegraphs', difficulty: 1 },
        { id: 'Y5-ENG-LY01-q2', type: 'mcq', prompt: 'Words like "wireless" and "telegram" in a text suggest it was written…', options: ['Long ago, before modern phones', 'Today', 'In the future'], answer: 'Long ago, before modern phones', difficulty: 2 },
        { id: 'Y5-ENG-LY01-q3', type: 'mcq', prompt: 'A text about bushfires in a remote 1920s town reflects its…', options: ['Place and time', 'Colour', 'Weight'], answer: 'Place and time', difficulty: 1 },
        { id: 'Y5-ENG-LY01-q4', type: 'mcq', prompt: 'Comparing a 1950s ad with today\'s ad for the same product mainly reveals…', options: ['How values and technology changed', 'Nothing at all', 'Only spelling changes'], answer: 'How values and technology changed', difficulty: 2 },
        { id: 'Y5-ENG-LY01-q5', type: 'short', prompt: 'To uncover a text\'s era, ask: "When and ______ was it made?"', answer: 'where', difficulty: 1 },
        { id: 'Y5-ENG-LY01-q6', type: 'mcq', prompt: 'Reading old and new texts about the same place helps you see…', options: ['How the place and its people changed over time', 'That nothing ever changes', 'Only how printing works'], answer: 'How the place and its people changed over time', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY02',
    title: 'Interaction skills: paraphrase & question',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Paraphrasing means putting someone\'s idea into your own words, "So you\'re saying we should rehome the puppy to a farm?", to check you truly understood.',
        'Smart questions do heavy lifting: clarifying questions untangle confusion, and probing questions like "What makes you say that?" ask for reasons. Together they keep a conversation honest and deep.',
      ],
      illustrations: [
        { brief: 'Paraphrase and question prompts for a live discussion', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"So you mean..."' }, { icon: 'magnifier', label: '"What makes you say that?"' }, { icon: 'people', label: 'Listen, then respond' }], caption: 'Paraphrase and question' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY02-q1', type: 'mcq', prompt: 'Putting someone\'s idea into your own words to check understanding is…', options: ['Paraphrasing', 'Interrupting', 'Shouting'], answer: 'Paraphrasing', difficulty: 1 },
        { id: 'Y5-ENG-LY02-q2', type: 'mcq', prompt: '"What makes you say that?" is a question that asks for…', options: ['Reasons or evidence', 'A snack', 'Silence'], answer: 'Reasons or evidence', difficulty: 2 },
        { id: 'Y5-ENG-LY02-q3', type: 'mcq', prompt: 'A clarifying question helps you…', options: ['Understand a confusing point before responding', 'End the conversation', 'Win an argument'], answer: 'Understand a confusing point before responding', difficulty: 1 },
        { id: 'Y5-ENG-LY02-q4', type: 'mcq', prompt: 'Which paraphrase matches "We should build a bigger library"?', options: ['"So you think our library needs more space."', '"So you hate books."', '"So the library is closed."'], answer: '"So you think our library needs more space."', difficulty: 2 },
        { id: 'Y5-ENG-LY02-q5', type: 'short', prompt: 'You ask "Why do you think that?" to ask for a ______.', answer: 'reason', difficulty: 1 },
        { id: 'Y5-ENG-LY02-q6', type: 'mcq', prompt: 'Justifying an opinion means…', options: ['Giving reasons that support it', 'Repeating it louder', 'Ignoring others'], answer: 'Giving reasons that support it', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY03',
    title: 'Features to meet purpose',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every text type has a toolbox of features that help it do its job. A persuasive ad uses emotive words and a call to action; an info-text uses headings, captions and diagrams; a story uses dialogue and description.',
        'Explain WHY a feature is there: "The bold red \'SALE NOW!\' banner is there to grab attention and make you act fast."',
      ],
      illustrations: [
        { brief: 'Three text types matched to the features that meet their purpose', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Inform: headings, diagrams' }, { icon: 'cart', label: 'Persuade: slogans, call to action' }, { icon: 'music-note', label: 'Entertain: story, rhyme' }], caption: 'Features match purpose' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY03-q1', type: 'mcq', prompt: 'Bold slogans and a call to action mainly help a text…', options: ['Persuade its audience', 'Confuse readers', 'Avoid the topic'], answer: 'Persuade its audience', difficulty: 1 },
        { id: 'Y5-ENG-LY03-q2', type: 'mcq', prompt: 'Headings, captions and diagrams mainly help a text…', options: ['Inform and help readers find facts', 'Entertain with jokes', 'Scare readers'], answer: 'Inform and help readers find facts', difficulty: 1 },
        { id: 'Y5-ENG-LY03-q3', type: 'mcq', prompt: 'Explaining WHY a feature is used means connecting it to…', options: ['The text\'s purpose', 'The number of pages', 'The font used'], answer: 'The text\'s purpose', difficulty: 2 },
        { id: 'Y5-ENG-LY03-q4', type: 'mcq', prompt: 'A story uses dialogue and description to…', options: ['Help readers imagine characters and events', 'List statistics', 'Sell products'], answer: 'Help readers imagine characters and events', difficulty: 2 },
        { id: 'Y5-ENG-LY03-q5', type: 'short', prompt: 'A sentence that tells the reader what to do next, like "Buy now!", is a call to ______.', answer: 'action', difficulty: 2 },
        { id: 'Y5-ENG-LY03-q6', type: 'mcq', prompt: 'A diagram in a science report is a feature that exists to…', options: ['Explain information visually', 'Replace the title', 'Hide the facts'], answer: 'Explain information visually', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY04',
    title: 'Skimming & scanning',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'You do not have to read every word of everything. Skim to get the gist fast, run your eyes over headings, first lines and images to catch the general idea.',
        'Scan when you hunt for one thing: a date, a name, a phone number, let your eyes jump until the target jumps out. Confirming means reading that exact spot closely to be sure it is right.',
      ],
      illustrations: [
        { brief: 'Three reading strategies: skim for gist, scan for a fact, confirm by close reading', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'magnifier', label: 'Skim: gist' }, { icon: 'eye', label: 'Scan: one fact' }, { icon: 'check-box', label: 'Confirm: read closely' }], caption: 'Three ways to read' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY04-q1', type: 'mcq', prompt: 'Getting the general idea of a page quickly is called…', options: ['Skimming', 'Singing', 'Counting'], answer: 'Skimming', difficulty: 1 },
        { id: 'Y5-ENG-LY04-q2', type: 'mcq', prompt: 'Hunting for a specific date in an article is…', options: ['Scanning', 'Skimming', 'Colouring in'], answer: 'Scanning', difficulty: 2 },
        { id: 'Y5-ENG-LY04-q3', type: 'mcq', prompt: 'After scanning for a fact, reading that exact part closely to check it is right is…', options: ['Confirming', 'Skipping', 'Guessing'], answer: 'Confirming', difficulty: 2 },
        { id: 'Y5-ENG-LY04-q4', type: 'mcq', prompt: 'When you skim, you most look at…', options: ['Headings, first lines and images', 'Every single word in order', 'Only the last page'], answer: 'Headings, first lines and images', difficulty: 1 },
        { id: 'Y5-ENG-LY04-q5', type: 'short', prompt: 'You need the opening time of the pool on page 3 of a flyer. Should you skim or scan?', answer: 'scan', difficulty: 2 },
        { id: 'Y5-ENG-LY04-q6', type: 'mcq', prompt: 'Choosing skim, scan or close reading should depend on…', options: ['Your purpose for reading', 'The book\'s colour', 'The day of the week'], answer: 'Your purpose for reading', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY05',
    title: 'Comprehension & evaluation',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Active readers build meaning two ways: literal meaning is exactly what the text says; inferred meaning is what you work out from the clues. Then come the big questions, is this information reliable? Is the reasoning fair?',
        'Evaluating means judging: who wrote this, why, and would I trust it? A random blog and a government website are not equal sources.',
      ],
      illustrations: [
        { brief: 'Building literal and inferred meaning, then evaluating the source', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'crystal-ball', label: 'Infer: read between the lines' }, { icon: 'check-box', label: 'Evaluate: is it reliable?' }, { icon: 'magnifier', label: 'Who wrote this and why?' }], caption: 'Build meaning, then judge it' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY05-q1', type: 'mcq', prompt: '"It rained all day." is a literal fact you…', options: ['Read directly from the text', 'Had to guess', 'Inferred from music'], answer: 'Read directly from the text', difficulty: 1 },
        { id: 'Y5-ENG-LY05-q2', type: 'mcq', prompt: 'Working out "the match was cancelled" from clues like "the field flooded" is…', options: ['Inferring', 'Skimming', 'Spelling'], answer: 'Inferring', difficulty: 2 },
        { id: 'Y5-ENG-LY05-q3', type: 'mcq', prompt: 'Evaluating a text means judging…', options: ['How reliable and fair its information is', 'Its page numbers', 'Its cover colour'], answer: 'How reliable and fair its information is', difficulty: 2 },
        { id: 'Y5-ENG-LY05-q4', type: 'mcq', prompt: 'Which source would you trust most for facts about the moon landing?', options: ['NASA\'s official website', 'An anonymous comment', 'A comic about aliens'], answer: 'NASA\'s official website', difficulty: 2 },
        { id: 'Y5-ENG-LY05-q5', type: 'short', prompt: 'What do we call meaning that the text implies but does not say directly?', answer: 'inference', difficulty: 2 },
        { id: 'Y5-ENG-LY05-q6', type: 'mcq', prompt: 'A good question to ask while evaluating a text is…', options: ['Who wrote this and why?', 'What font is it?', 'Is it long enough?'], answer: 'Who wrote this and why?', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY06',
    title: 'Publishing with noun groups & dialogue',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'When you publish, make your writing shine. Use text connectives (first, meanwhile, as a result) to glue ideas, expanded noun groups to paint detail, and technical vocabulary to show you know your topic.',
        'Dialogue needs correct punctuation: "We made it!" shouted Maya., capitals, commas and quotation marks each have a job.',
      ],
      illustrations: [
        { brief: 'A writing-process flow through to publishing with noun groups and dialogue', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan' }, { text: 'Draft with noun groups & dialogue' }, { text: 'Revise' }, { text: 'Publish the polished text' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY06-q1', type: 'mcq', prompt: 'Which word is a text connective?', options: ['Meanwhile', 'Jumping', 'Purple'], answer: 'Meanwhile', difficulty: 1 },
        { id: 'Y5-ENG-LY06-q2', type: 'mcq', prompt: 'Which sentence punctuates dialogue correctly?', options: ['"We made it!" shouted Maya.', '"We made it" shouted Maya.', 'We made it shouted Maya.'], answer: '"We made it!" shouted Maya.', difficulty: 2 },
        { id: 'Y5-ENG-LY06-q3', type: 'mcq', prompt: 'An expanded noun group in a published report might look like…', options: ['the ancient, sun-bleached sails on the reef wreck', 'the sails', 'it'], answer: 'the ancient, sun-bleached sails on the reef wreck', difficulty: 1 },
        { id: 'Y5-ENG-LY06-q4', type: 'mcq', prompt: 'Technical vocabulary in a science report helps show…', options: ['Expert knowledge of the topic', 'You ran out of words', 'Nothing at all'], answer: 'Expert knowledge of the topic', difficulty: 2 },
        { id: 'Y5-ENG-LY06-q5', type: 'short', prompt: 'What punctuation marks surround a character\'s spoken words?', answer: 'quotation marks', difficulty: 1 },
        { id: 'Y5-ENG-LY06-q6', type: 'mcq', prompt: 'Publishing a written text usually means…', options: ['Creating a final, polished version', 'Throwing your draft away unread', 'Only writing a title'], answer: 'Creating a final, polished version', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY07',
    title: 'Spoken presentations',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A strong talk is planned: pick your key ideas, add elaborated detail with extra examples and explanations, and structure it with a clear opening, middle and close.',
        'Then rehearse your delivery, speak clearly, slow down for the big ideas, vary your tone and volume, and use slides or props to support, never to read from.',
      ],
      illustrations: [
        { brief: 'A rehearsal checklist for a spoken presentation', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'mic', label: 'Speak clearly' }, { icon: 'speaker', label: 'Volume' }, { icon: 'clock', label: 'Pace' }, { icon: 'bulb', label: 'Elaborate ideas' }], caption: 'Plan, rehearse, deliver' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY07-q1', type: 'mcq', prompt: 'Elaborated ideas in a presentation mean…', options: ['Ideas with extra examples and detail', 'One-word answers', 'Silence'], answer: 'Ideas with extra examples and detail', difficulty: 2 },
        { id: 'Y5-ENG-LY07-q2', type: 'mcq', prompt: 'Slides in a presentation should…', options: ['Support what you say', 'Be read out word-for-word', 'Replace all talking'], answer: 'Support what you say', difficulty: 1 },
        { id: 'Y5-ENG-LY07-q3', type: 'mcq', prompt: 'Which is a delivery feature you can rehearse?', options: ['Tone, pace and volume', 'Font of your notes', 'The classroom colour'], answer: 'Tone, pace and volume', difficulty: 1 },
        { id: 'Y5-ENG-LY07-q4', type: 'mcq', prompt: 'A complex sentence in a speech ("Because the creek had flooded, the bridge closed.") helps…', options: ['Link ideas smoothly while speaking', 'Confuse the audience', 'Shorten the speech'], answer: 'Link ideas smoothly while speaking', difficulty: 2 },
        { id: 'Y5-ENG-LY07-q5', type: 'short', prompt: 'A presentation needs a clear opening, middle and ______.', answer: 'close', difficulty: 1 },
        { id: 'Y5-ENG-LY07-q6', type: 'mcq', prompt: 'Rehearsing a presentation before delivering it mainly helps you…', options: ['Gain confidence and improve delivery', 'Forget the topic', 'Run out of time'], answer: 'Gain confidence and improve delivery', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY08',
    title: 'Letter patterns with different pronunciations',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Tricky letter patterns make the same letters say different sounds. "ea" sounds different in beach, bread and great; "ough" sounds different in though, through, cough and tough.',
        'Use every tool you have: sound it out, check the word parts (morphemes), and try the word in a sentence, one of your attempts will click.',
      ],
      illustrations: [
        { brief: 'Grapheme cards showing the same letter patterns with different sounds', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'ea: beach, bread, great' }, { icon: 'bookmark', label: 'ough: though, through, tough' }], caption: 'Same letters, different sounds' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY08-q1', type: 'mcq', prompt: 'Which word says "ea" differently from "beach"?', options: ['Bread', 'Sneak', 'Reach'], answer: 'Bread', difficulty: 2 },
        { id: 'Y5-ENG-LY08-q2', type: 'mcq', prompt: '"ough" in "tough" sounds like…', options: ['uff', 'oh', 'ow'], answer: 'uff', difficulty: 2 },
        { id: 'Y5-ENG-LY08-q3', type: 'mcq', prompt: 'Which word rhymes with "though"?', options: ['Go', 'Cough', 'Plough'], answer: 'Go', difficulty: 2 },
        { id: 'Y5-ENG-LY08-q4', type: 'mcq', prompt: 'The letters "ough" can be pronounced…', options: ['Several different ways', 'Exactly one way', 'Not at all'], answer: 'Several different ways', difficulty: 1 },
        { id: 'Y5-ENG-LY08-q5', type: 'short', prompt: 'The "ea" in "bread" sounds like the vowel in which word: "bed" or "bee"?', answer: 'bed', difficulty: 2 },
        { id: 'Y5-ENG-LY08-q6', type: 'mcq', prompt: 'When a word\'s letters sound different from what you expect, the best strategy is…', options: ['Try sound it out, word parts and context together', 'Give up and skip it', 'Change the letters'], answer: 'Try sound it out, word parts and context together', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY09',
    title: 'Building new words',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'New words are built from old parts. Start with a base word (print), add a prefix (reprint) or a suffix (printer, printable), and watch new words pop out.',
        'Word origins help too, "tele" means far (telephone, television), so you can guess "telescope" means far-seeing. Build boldly, then check your spelling against the patterns you know.',
      ],
      illustrations: [
        { brief: 'A base word branching into new words with prefixes and suffixes', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'base: print' }, { text: 'prefix: reprint' }, { text: 'suffix: printer' }, { text: 'suffix: printable' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY09-q1', type: 'mcq', prompt: 'Adding the suffix "-er" to "teach" makes…', options: ['A person who teaches', 'A smaller teacher', 'A type of chalk'], answer: 'A person who teaches', difficulty: 1 },
        { id: 'Y5-ENG-LY09-q2', type: 'mcq', prompt: 'The prefix "re-" in "rebuild" means…', options: ['Again', 'Not', 'Very'], answer: 'Again', difficulty: 1 },
        { id: 'Y5-ENG-LY09-q3', type: 'mcq', prompt: '"tele" in "telephone" and "television" means…', options: ['Far', 'Near', 'Loud'], answer: 'Far', difficulty: 2 },
        { id: 'Y5-ENG-LY09-q4', type: 'short', prompt: 'Build a new word: add the prefix "un-" to "kind".', answer: 'unkind', difficulty: 1 },
        { id: 'Y5-ENG-LY09-q5', type: 'mcq', prompt: 'A "base word" is…', options: ['The main word that prefixes and suffixes attach to', 'A type of punctuation', 'A whole paragraph'], answer: 'The main word that prefixes and suffixes attach to', difficulty: 2 },
        { id: 'Y5-ENG-LY09-q6', type: 'mcq', prompt: 'Which word can be built from the base "print" plus a suffix?', options: ['Printer', 'Happiness', 'Rainbow'], answer: 'Printer', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-ENG-LY10',
    title: 'Less common plurals & suffixes',
    year: '5',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E5LY10' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Most plurals just add "s", but some words play by their own rules: mouse → mice, child → children, octopus → octopuses, sheep → sheep, ox → oxen.',
        'Suffixes also change a word\'s job: "compare" (verb) → "comparison" (noun) → "comparative" (adjective). Watch the spelling shifts: happy → happiness, careful → carelessness.',
      ],
      illustrations: [
        { brief: 'Irregular plurals that break the "add s" rule', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: 'mouse → mice' }, { icon: 'fish', label: 'sheep → sheep' }, { icon: 'ball', label: 'child → children' }], caption: 'Plurals with their own rules' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-ENG-LY10-q1', type: 'mcq', prompt: 'The plural of "mouse" is…', options: ['Mice', 'Mouses', 'Mouse'], answer: 'Mice', difficulty: 1 },
        { id: 'Y5-ENG-LY10-q2', type: 'mcq', prompt: 'The plural of "sheep" is…', options: ['Sheep', 'Sheeps', 'Sheepes'], answer: 'Sheep', difficulty: 1 },
        { id: 'Y5-ENG-LY10-q3', type: 'mcq', prompt: 'The plural of "child" is…', options: ['Children', 'Childs', 'Childes'], answer: 'Children', difficulty: 1 },
        { id: 'Y5-ENG-LY10-q4', type: 'mcq', prompt: 'Adding "-ness" to "happy" (spelled happiness) changes a…', options: ['Word from an adjective to a noun', 'Noun into a verb', 'Number into a word'], answer: 'Word from an adjective to a noun', difficulty: 2 },
        { id: 'Y5-ENG-LY10-q5', type: 'short', prompt: 'The plural of "tooth" is…', answer: 'teeth', difficulty: 1 },
        { id: 'Y5-ENG-LY10-q6', type: 'mcq', prompt: 'Less common plurals (mice, oxen) are ones you…', options: ['Learn as special cases, not by just adding "s"', 'Always spell with "es"', 'Never use'], answer: 'Learn as special cases, not by just adding "s"', difficulty: 2 },
      ],
    },
  },
];
