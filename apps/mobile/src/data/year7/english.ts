import type { Topic } from '../../types/curriculum';

/**
 * Year 7 English, full topic bank.
 * Source of truth for scope: docs/content/year-7-10/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E7xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons, never bulk-copy syllabus text).
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR7_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y7-ENG-LA01',
    title: 'Language variation, dialect, register & jargon',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every group of English speakers has its own flavour of the language, Aussie slang with a mate, careful courtroom English, a surfer\'s jargon, a Scottish dialect. None of these is "wrong" English; each is a variety suited to its speakers and situation.',
        'Register is how formal or casual your language is right now; dialect is tied to where you are from or which community you belong to. Skilled speakers slide between registers on purpose.',
      ],
      illustrations: [
        { brief: 'A formality thermometer sliding from mates-talk to courtroom English', ready: true, diagram: { kind: 'thermometer', min: 0, max: 10, value: 9, unit: '/10 formal' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA01-q1', type: 'mcq', prompt: 'A doctor using words like "laceration" instead of "cut" is using…', options: ['Slang', 'Jargon', 'A dialect'], answer: 'Jargon', difficulty: 1 },
        { id: 'Y7-ENG-LA01-q2', type: 'mcq', prompt: 'A regional variety of English tied to where someone grew up is called a…', options: ['Register', 'Dialect', 'Jargon'], answer: 'Dialect', difficulty: 1 },
        { id: 'Y7-ENG-LA01-q3', type: 'mcq', prompt: '"Register" refers to…', options: ['How formal or casual language is for the situation', 'A speaker\'s home town', 'A type of punctuation'], answer: 'How formal or casual language is for the situation', difficulty: 1 },
        { id: 'Y7-ENG-LA01-q4', type: 'mcq', prompt: 'A speaker using a non-standard dialect is…', options: ['Speaking incorrectly', 'Using a valid variety of English', 'Making a spelling mistake'], answer: 'Using a valid variety of English', difficulty: 2 },
        { id: 'Y7-ENG-LA01-q5', type: 'mcq', prompt: 'Switching from texting slang to a formal job application shows a shift in…', options: ['Register', 'Genre only', 'Font'], answer: 'Register', difficulty: 2 },
        { id: 'Y7-ENG-LA01-q6', type: 'mcq', prompt: 'Technical words specific to a profession or hobby (like "offside" in football) are called…', options: ['Jargon', 'A dialect', 'A metaphor'], answer: 'Jargon', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA02',
    title: 'Persuasive & evaluative language',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Persuasive writers choose evaluative words on purpose, "outstanding" instead of "good", "disastrous" instead of "bad", to push you toward their opinion without seeming to argue at all.',
        'Spotting evaluative language is the first step to reading critically: ask whether a word is describing a fact or nudging your judgement.',
      ],
      illustrations: [
        { brief: 'A balance scale weighing a neutral word against a loaded, evaluative word', ready: true, diagram: { kind: 'balance-scale', left: '"okay"', right: '"outstanding"', balanced: false } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA02-q1', type: 'mcq', prompt: 'Which word is evaluative rather than neutral?', options: ['Building', 'Magnificent', 'Concrete'], answer: 'Magnificent', difficulty: 1 },
        { id: 'Y7-ENG-LA02-q2', type: 'mcq', prompt: 'Evaluative language is used mainly to…', options: ['Nudge the reader\'s judgement', 'State a measurement', 'List a date'], answer: 'Nudge the reader\'s judgement', difficulty: 1 },
        { id: 'Y7-ENG-LA02-q3', type: 'mcq', prompt: '"The plan was a total disaster" uses evaluative language to suggest…', options: ['A strongly negative judgement', 'A neutral fact', 'A question'], answer: 'A strongly negative judgement', difficulty: 2 },
        { id: 'Y7-ENG-LA02-q4', type: 'mcq', prompt: 'Reading critically for evaluative language means asking…', options: ['Is this word describing a fact or pushing an opinion?', 'How many syllables does this word have?', 'What font is used?'], answer: 'Is this word describing a fact or pushing an opinion?', difficulty: 2 },
        { id: 'Y7-ENG-LA02-q5', type: 'short', prompt: 'Give one evaluative (opinion-loaded) synonym for the neutral word "good".', answer: 'outstanding', difficulty: 2 },
        { id: 'Y7-ENG-LA02-q6', type: 'mcq', prompt: 'A persuasive review that only uses neutral, factual words would be…', options: ['Less persuasive', 'More persuasive', 'Identical in effect'], answer: 'Less persuasive', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA03',
    title: 'Text structures across genres',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'As texts get more sophisticated, their "skeletons" get more varied, a feature article might blend narrative and fact, a blog post might mix opinion with instructions.',
        'Recognising a hybrid structure helps you predict what is coming and judge whether the author is informing, persuading, or entertaining you (often more than one at once).',
      ],
      illustrations: [
        { brief: 'A flowchart of a hybrid feature-article structure', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Hook, a personal anecdote' }, { text: 'Facts & evidence' }, { text: 'Expert quote' }, { text: 'Call to reflect' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA03-q1', type: 'mcq', prompt: 'A text that blends storytelling with factual reporting is called a…', options: ['Hybrid text', 'Pure narrative', 'A glossary'], answer: 'Hybrid text', difficulty: 1 },
        { id: 'Y7-ENG-LA03-q2', type: 'mcq', prompt: 'A feature article opening with a personal anecdote is using that stage to…', options: ['Hook the reader\'s interest', 'List a bibliography', 'End the article'], answer: 'Hook the reader\'s interest', difficulty: 1 },
        { id: 'Y7-ENG-LA03-q3', type: 'mcq', prompt: 'Recognising a text\'s structure mainly helps a reader…', options: ['Predict what is coming and judge its purpose', 'Ignore the content', 'Count the paragraphs only'], answer: 'Predict what is coming and judge its purpose', difficulty: 2 },
        { id: 'Y7-ENG-LA03-q4', type: 'mcq', prompt: 'A blog post that mixes opinion with step-by-step instructions is an example of…', options: ['A hybrid structure', 'A pure recipe', 'A single-purpose text'], answer: 'A hybrid structure', difficulty: 2 },
        { id: 'Y7-ENG-LA03-q5', type: 'mcq', prompt: 'A text can serve more than one purpose at once, such as…', options: ['Informing and persuading together', 'Never having any purpose', 'Only ever entertaining'], answer: 'Informing and persuading together', difficulty: 2 },
        { id: 'Y7-ENG-LA03-q6', type: 'mcq', prompt: 'An expert quote embedded in a feature article mainly serves to…', options: ['Add credibility to the claims', 'End the sentence', 'Replace the headline'], answer: 'Add credibility to the claims', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA04',
    title: 'Cohesion, paragraphing & cohesive devices',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A strong paragraph opens with a topic sentence that names its main idea, then every other sentence supports it, like spokes pointing back to a wheel\'s hub.',
        'Cohesive devices (however, therefore, this shows, as a result) act as signposts, telling the reader exactly how one idea connects to the next.',
      ],
      illustrations: [
        { brief: 'A paragraph flowchart: topic sentence hub with supporting sentence spokes', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Topic sentence (main idea)' }, { text: 'Supporting detail + cohesive device' }, { text: 'Supporting detail + cohesive device' }, { text: 'Concluding link to next paragraph' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA04-q1', type: 'mcq', prompt: 'A topic sentence usually appears…', options: ['At the start of a paragraph, naming its main idea', 'Only at the very end of an essay', 'Never in formal writing'], answer: 'At the start of a paragraph, naming its main idea', difficulty: 1 },
        { id: 'Y7-ENG-LA04-q2', type: 'mcq', prompt: 'Which word is a cohesive device signalling a result?', options: ['Therefore', 'Purple', 'Yesterday'], answer: 'Therefore', difficulty: 1 },
        { id: 'Y7-ENG-LA04-q3', type: 'mcq', prompt: 'Cohesive devices like "however" and "as a result" mainly act as…', options: ['Signposts linking ideas together', 'Spelling corrections', 'Titles'], answer: 'Signposts linking ideas together', difficulty: 2 },
        { id: 'Y7-ENG-LA04-q4', type: 'mcq', prompt: 'A paragraph where every sentence supports one main idea is…', options: ['Well-structured and cohesive', 'Disorganised', 'Missing a topic entirely'], answer: 'Well-structured and cohesive', difficulty: 2 },
        { id: 'Y7-ENG-LA04-q5', type: 'short', prompt: 'Give one cohesive device that signals a contrast between two ideas.', answer: 'however', difficulty: 2 },
        { id: 'Y7-ENG-LA04-q6', type: 'mcq', prompt: 'Which sentence would best follow "The trial was a success" to show cohesion?', options: ['As a result, the program will expand next year.', 'The weather was mild that day.', 'Cats are popular pets.'], answer: 'As a result, the program will expand next year.', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA05',
    title: 'Clause combining, compound & complex sentences',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Two equal ideas joined by "and", "but" or "or" make a compound sentence, both halves could stand alone. A complex sentence instead joins a main idea to a dependent one using words like "because", "although" or "when".',
        'Choosing compound versus complex changes the relationship you signal between ideas, equal partners, or one idea leaning on another.',
      ],
      illustrations: [
        { brief: 'Two sentence-building blocks: equal halves joined vs a leaning dependent clause', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'link', label: 'Compound: equal + equal' }, { icon: 'triangle-shape', label: 'Complex: main + dependent' }], caption: 'Two ways to combine clauses' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA05-q1', type: 'mcq', prompt: '"She trained hard, and she won the race" is a…', options: ['Compound sentence', 'Complex sentence', 'Sentence fragment'], answer: 'Compound sentence', difficulty: 1 },
        { id: 'Y7-ENG-LA05-q2', type: 'mcq', prompt: '"Although it rained, the match continued" is a…', options: ['Compound sentence', 'Complex sentence', 'Simple sentence'], answer: 'Complex sentence', difficulty: 1 },
        { id: 'Y7-ENG-LA05-q3', type: 'mcq', prompt: 'A compound sentence joins…', options: ['Two ideas that could each stand alone', 'A dependent clause to a main clause', 'A single word to a full sentence'], answer: 'Two ideas that could each stand alone', difficulty: 2 },
        { id: 'Y7-ENG-LA05-q4', type: 'mcq', prompt: 'Which word typically begins a dependent clause in a complex sentence?', options: ['Because', 'And', 'But'], answer: 'Because', difficulty: 1 },
        { id: 'Y7-ENG-LA05-q5', type: 'short', prompt: 'Combine using "because": "The game was cancelled. It was raining."', answer: 'The game was cancelled because it was raining.', difficulty: 3 },
        { id: 'Y7-ENG-LA05-q6', type: 'mcq', prompt: 'A complex sentence signals that one idea…', options: ['Depends on or explains another', 'Is completely unrelated to another', 'Must be deleted'], answer: 'Depends on or explains another', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA06',
    title: 'Modality, showing certainty & obligation',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Modal words let you dial certainty up or down: "it will rain" sounds sure, "it might rain" hedges, "it must rain eventually" claims necessity. Modal verbs (can, might, must, should) and adverbs (certainly, possibly) both do this job.',
        'Writers choose modality carefully, a scientist says "the data suggests", not "the data proves", to stay honest about how sure they really are.',
      ],
      illustrations: [
        { brief: 'A certainty scale from impossible to certain marked with modal words', ready: true, diagram: { kind: 'probability-scale', markers: [{ value: 0.2, label: 'might' }, { value: 0.6, label: 'should' }, { value: 0.95, label: 'must' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA06-q1', type: 'mcq', prompt: 'Which word shows the highest certainty?', options: ['Might', 'Could', 'Must'], answer: 'Must', difficulty: 1 },
        { id: 'Y7-ENG-LA06-q2', type: 'mcq', prompt: '"The data suggests a link" instead of "the data proves a link" shows the writer is…', options: ['Being cautious about certainty', 'Absolutely certain', 'Making a joke'], answer: 'Being cautious about certainty', difficulty: 2 },
        { id: 'Y7-ENG-LA06-q3', type: 'mcq', prompt: 'A modal adverb showing low certainty is…', options: ['Possibly', 'Certainly', 'Definitely'], answer: 'Possibly', difficulty: 1 },
        { id: 'Y7-ENG-LA06-q4', type: 'mcq', prompt: '"You should apologise" mainly expresses…', options: ['Obligation or advice', 'Pure fact', 'A question'], answer: 'Obligation or advice', difficulty: 2 },
        { id: 'Y7-ENG-LA06-q5', type: 'mcq', prompt: 'Modality lets a writer…', options: ['Adjust how certain or obligatory a statement sounds', 'Change the spelling of a word', 'Delete a paragraph'], answer: 'Adjust how certain or obligatory a statement sounds', difficulty: 2 },
        { id: 'Y7-ENG-LA06-q6', type: 'short', prompt: 'Give one modal verb that expresses strong obligation (starts with "m").', answer: 'must', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA07',
    title: 'Multimodal & visual design features',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Layout, font size, colour and image placement are not decoration, a huge red headline screams urgency, a clean grid of white space feels calm and trustworthy.',
        'Multimodal texts (webpages, posters, video) combine words, images and sound so that each mode adds something the others cannot do alone.',
      ],
      illustrations: [
        { brief: 'A webpage layout with headline, image and body text labelled by design choice', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: 'Bold headline' }, { icon: 'picture-frame', label: 'Image' }, { icon: 'clipboard', label: 'Body text' }], caption: 'Design choices shape meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA07-q1', type: 'mcq', prompt: 'A huge, bold, red headline is a design choice that usually signals…', options: ['Urgency or importance', 'Calm and rest', 'Nothing at all'], answer: 'Urgency or importance', difficulty: 1 },
        { id: 'Y7-ENG-LA07-q2', type: 'mcq', prompt: 'A multimodal text combines…', options: ['Words, images and/or sound', 'Only plain black text', 'Only numbers'], answer: 'Words, images and/or sound', difficulty: 1 },
        { id: 'Y7-ENG-LA07-q3', type: 'mcq', prompt: 'A clean layout with lots of white space tends to feel…', options: ['Calm and trustworthy', 'Chaotic and urgent', 'Angry'], answer: 'Calm and trustworthy', difficulty: 2 },
        { id: 'Y7-ENG-LA07-q4', type: 'mcq', prompt: 'When an image adds emotional impact that the caption alone could not, it is…', options: ['Working as a mode alongside the words', 'Purely decorative and meaningless', 'A spelling error'], answer: 'Working as a mode alongside the words', difficulty: 2 },
        { id: 'Y7-ENG-LA07-q5', type: 'mcq', prompt: 'Placing the most important image at the top of a poster mainly helps…', options: ['Draw the viewer\'s eye first', 'Hide the message', 'Save ink'], answer: 'Draw the viewer\'s eye first', difficulty: 2 },
        { id: 'Y7-ENG-LA07-q6', type: 'mcq', prompt: 'Analysing visual design features means asking…', options: ['Why did the creator make this layout/colour choice?', 'What is the file size?', 'How many words are on the page?'], answer: 'Why did the creator make this layout/colour choice?', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA08',
    title: 'Figurative language, extended metaphor & symbolism',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA08' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'An extended metaphor keeps developing one comparison across several sentences or a whole poem, "life is a journey" might return again and again as roads, maps and detours.',
        'A symbol is an object standing for a bigger idea, a dove for peace, a storm for inner turmoil. Writers plant symbols to say more than their literal words state.',
      ],
      illustrations: [
        { brief: 'A journey-as-life extended metaphor traced across a winding road', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: '"a winding road"' }, { icon: 'flag', label: '"a fork ahead"' }, { icon: 'suitcase', label: '"packing regrets"' }], caption: 'One metaphor developed across a text' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA08-q1', type: 'mcq', prompt: 'An extended metaphor…', options: ['Develops one comparison across several lines or a whole text', 'Only appears once, briefly', 'Is always a simile'], answer: 'Develops one comparison across several lines or a whole text', difficulty: 1 },
        { id: 'Y7-ENG-LA08-q2', type: 'mcq', prompt: 'A dove used to represent peace is an example of a…', options: ['Symbol', 'Statistic', 'Fact'], answer: 'Symbol', difficulty: 1 },
        { id: 'Y7-ENG-LA08-q3', type: 'mcq', prompt: 'A storm representing a character\'s inner turmoil is an example of…', options: ['Symbolism', 'Alliteration', 'A comma splice'], answer: 'Symbolism', difficulty: 2 },
        { id: 'Y7-ENG-LA08-q4', type: 'mcq', prompt: 'In "life is a journey", if the poem keeps returning to roads and detours, this shows…', options: ['The metaphor is being extended', 'A spelling error', 'A change of topic'], answer: 'The metaphor is being extended', difficulty: 2 },
        { id: 'Y7-ENG-LA08-q5', type: 'mcq', prompt: 'A symbol says more than its literal meaning because it…', options: ['Represents a larger idea beyond the object itself', 'Only describes its own appearance', 'Is always a fact'], answer: 'Represents a larger idea beyond the object itself', difficulty: 2 },
        { id: 'Y7-ENG-LA08-q6', type: 'mcq', prompt: 'Allusion is when a text…', options: ['Briefly references another well-known text or event', 'Uses only short sentences', 'Avoids figurative language entirely'], answer: 'Briefly references another well-known text or event', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LA09',
    title: 'Punctuation for clarity & effect, semicolon, colon & dash',
    year: '7',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E7LA09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A semicolon joins two closely related independent sentences without "and" (The storm hit; the town went dark). A colon introduces a list or explanation (She packed one thing: her diary). A dash creates a dramatic pause or interruption.',
        'Each mark creates a slightly different rhythm and emphasis, choosing between them is a craft decision, not just a rule to follow.',
      ],
      illustrations: [
        { brief: 'Three punctuation marks shown with their distinct jobs', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'link', label: 'Semicolon: joins related ideas' }, { icon: 'arrow-right', label: 'Colon: introduces a list' }, { icon: 'burst', label: 'Dash: dramatic pause' }], caption: 'Advanced punctuation, different jobs' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LA09-q1', type: 'mcq', prompt: 'Which sentence uses a semicolon correctly?', options: ['The storm hit; the town went dark.', 'The storm hit; and the town went dark.', 'The storm; hit the town went dark.'], answer: 'The storm hit; the town went dark.', difficulty: 2 },
        { id: 'Y7-ENG-LA09-q2', type: 'mcq', prompt: 'A colon is most often used to…', options: ['Introduce a list or explanation', 'Join two unrelated sentences', 'Replace a full stop everywhere'], answer: 'Introduce a list or explanation', difficulty: 1 },
        { id: 'Y7-ENG-LA09-q3', type: 'mcq', prompt: 'Which sentence correctly uses a colon?', options: ['She packed one thing: her diary.', 'She packed: one thing her diary.', 'She: packed one thing her diary.'], answer: 'She packed one thing: her diary.', difficulty: 2 },
        { id: 'Y7-ENG-LA09-q4', type: 'mcq', prompt: 'A dash in a sentence typically creates…', options: ['A dramatic pause or interruption', 'A silent letter', 'A rhyme'], answer: 'A dramatic pause or interruption', difficulty: 2 },
        { id: 'Y7-ENG-LA09-q5', type: 'mcq', prompt: 'A semicolon joins two…', options: ['Closely related independent sentences', 'Single unrelated words', 'List items only'], answer: 'Closely related independent sentences', difficulty: 2 },
        { id: 'Y7-ENG-LA09-q6', type: 'mcq', prompt: 'Choosing a semicolon over a full stop between two related sentences mainly signals…', options: ['A closer connection between the ideas', 'The end of the paragraph', 'A spelling correction'], answer: 'A closer connection between the ideas', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y7-ENG-LE01',
    title: 'Responding to literature across contexts',
    year: '7',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E7LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Stories carry the fingerprints of when and where they were made, a novel written by a First Nations Australian author, or one from another country and era, reflects real historical and cultural experience.',
        'Reading widely across contexts builds empathy: you start to see how a character\'s world shapes their choices in ways your own world might not.',
      ],
      illustrations: [
        { brief: 'A world map with book icons marking diverse story origins', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'World texts' }, { icon: 'book', label: 'First Nations authors' }, { icon: 'people', label: 'Diverse voices' }], caption: 'Literature reflects real contexts' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LE01-q1', type: 'mcq', prompt: 'Reading literature from many historical and cultural contexts mainly helps a reader…', options: ['Build empathy for different experiences', 'Avoid learning anything new', 'Only read one kind of story'], answer: 'Build empathy for different experiences', difficulty: 1 },
        { id: 'Y7-ENG-LE01-q2', type: 'mcq', prompt: 'A character\'s choices in a historical novel are best understood by considering…', options: ['The context they lived in', 'The book\'s price', 'The publisher\'s logo'], answer: 'The context they lived in', difficulty: 1 },
        { id: 'Y7-ENG-LE01-q3', type: 'mcq', prompt: 'A story\'s historical and cultural context can shape…', options: ['Character choices, values and events', 'Only the book\'s cover art', 'Nothing about the plot'], answer: 'Character choices, values and events', difficulty: 2 },
        { id: 'Y7-ENG-LE01-q4', type: 'mcq', prompt: 'Reading a First Nations Australian author\'s work helps readers understand…', options: ['A distinct cultural perspective and experience', 'Only fictional creatures', 'A random unrelated topic'], answer: 'A distinct cultural perspective and experience', difficulty: 2 },
        { id: 'Y7-ENG-LE01-q5', type: 'mcq', prompt: 'Comparing a character\'s decision to what you might choose today can reveal…', options: ['How context shapes what feels normal or right', 'Nothing useful', 'A spelling rule'], answer: 'How context shapes what feels normal or right', difficulty: 2 },
        { id: 'Y7-ENG-LE01-q6', type: 'mcq', prompt: 'Responding to literature "in context" means considering…', options: ['The time, place and culture the text reflects', 'Only the final page', 'The size of the font'], answer: 'The time, place and culture the text reflects', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LE02',
    title: 'Comparing texts across forms',
    year: '7',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E7LE02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The same theme, say, courage, can appear in a poem, a short story and a film, each shaping it differently through the tools available to that form.',
        'Comparing forms sharpens your sense of craft: a poem might compress courage into one striking image, while a film shows it through actors\' expressions and music.',
      ],
      illustrations: [
        { brief: 'Bar-compare of how much space three forms give to a shared theme', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Poem', value: 2 }, { label: 'Short story', value: 5 }, { label: 'Film', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LE02-q1', type: 'mcq', prompt: 'A poem tends to explore a theme through…', options: ['Compressed, striking images', 'Two hours of dialogue', 'Camera angles'], answer: 'Compressed, striking images', difficulty: 1 },
        { id: 'Y7-ENG-LE02-q2', type: 'mcq', prompt: 'A film can show courage using tools a poem cannot, such as…', options: ['Actors\' expressions and music', 'Rhyme', 'Line breaks'], answer: 'Actors\' expressions and music', difficulty: 2 },
        { id: 'Y7-ENG-LE02-q3', type: 'mcq', prompt: 'Comparing the same theme across different forms mainly reveals…', options: ['How each form\'s tools shape meaning differently', 'That all forms are identical', 'Nothing about craft'], answer: 'How each form\'s tools shape meaning differently', difficulty: 2 },
        { id: 'Y7-ENG-LE02-q4', type: 'mcq', prompt: 'A short story usually has more room than a poem to develop…', options: ['Plot and character detail', 'Nothing extra', 'Rhyme scheme'], answer: 'Plot and character detail', difficulty: 2 },
        { id: 'Y7-ENG-LE02-q5', type: 'mcq', prompt: 'A useful comparison question across forms is…', options: ['What tools does this form use to convey the theme?', 'How many pages does it have?', 'What colour is the cover?'], answer: 'What tools does this form use to convey the theme?', difficulty: 2 },
        { id: 'Y7-ENG-LE02-q6', type: 'mcq', prompt: 'Two texts sharing a theme but told through different forms are said to…', options: ['Represent the theme differently', 'Have no relationship at all', 'Be plagiarised'], answer: 'Represent the theme differently', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LE03',
    title: "An author's craft, structure & language choices",
    year: '7',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E7LE03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Authors make deliberate choices, starting mid-action, withholding a character\'s name, using short sentences in a tense scene, and each choice shapes how we feel and what we understand.',
        'Asking "why did the author choose this?" turns reading into detective work: every structural and language decision is a clue to meaning.',
      ],
      illustrations: [
        { brief: 'A flowchart showing how a craft choice leads to a reader effect', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Author\'s choice (e.g. short sentences)' }, { text: 'Effect on the reader (tension)' }, { text: 'Meaning created' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LE03-q1', type: 'mcq', prompt: 'Short, clipped sentences in a chase scene mainly create a feeling of…', options: ['Tension and speed', 'Calm and rest', 'Boredom'], answer: 'Tension and speed', difficulty: 1 },
        { id: 'Y7-ENG-LE03-q2', type: 'mcq', prompt: 'An author starting a story mid-action (in medias res) mainly aims to…', options: ['Grab the reader\'s attention immediately', 'Confuse the reader on purpose forever', 'Skip the plot entirely'], answer: 'Grab the reader\'s attention immediately', difficulty: 2 },
        { id: 'Y7-ENG-LE03-q3', type: 'mcq', prompt: 'Withholding a character\'s name for several pages is a structural choice that can build…', options: ['Mystery or suspense', 'A recipe', 'A footnote'], answer: 'Mystery or suspense', difficulty: 2 },
        { id: 'Y7-ENG-LE03-q4', type: 'mcq', prompt: 'Asking "why did the author choose this?" is a strategy for…', options: ['Analysing craft and meaning', 'Skimming quickly', 'Ignoring the text'], answer: 'Analysing craft and meaning', difficulty: 2 },
        { id: 'Y7-ENG-LE03-q5', type: 'mcq', prompt: 'A long, flowing sentence describing a peaceful lake most likely aims for a feeling of…', options: ['Calm', 'Panic', 'Anger'], answer: 'Calm', difficulty: 1 },
        { id: 'Y7-ENG-LE03-q6', type: 'mcq', prompt: 'Every structural and language decision an author makes is best understood as…', options: ['A deliberate clue to meaning', 'A random accident', 'Irrelevant to the story'], answer: 'A deliberate clue to meaning', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LE04',
    title: 'Poetic techniques, form & sound',
    year: '7',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E7LE04' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'A poem\'s form (free verse, sonnet, ballad) is a container that shapes meaning, a strict rhyme scheme can feel playful or trap a speaker\'s emotion inside rigid lines.',
        'Sound devices (assonance, consonance, rhythm) work alongside imagery so a poem is felt in the mouth and ear, not just understood in the mind.',
      ],
      illustrations: [
        { brief: 'A ladder of poetic forms from free verse to strict rhyme scheme', ready: true, diagram: { kind: 'metric-ladder', units: ['Free verse', 'Ballad', 'Sonnet'], highlight: 2 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LE04-q1', type: 'mcq', prompt: 'A poem with no fixed rhyme or metre is written in…', options: ['Free verse', 'A strict sonnet', 'A limerick only'], answer: 'Free verse', difficulty: 1 },
        { id: 'Y7-ENG-LE04-q2', type: 'mcq', prompt: 'Repeating a vowel sound within nearby words ("the light of the fire") is…', options: ['Assonance', 'Alliteration', 'A metaphor'], answer: 'Assonance', difficulty: 2 },
        { id: 'Y7-ENG-LE04-q3', type: 'mcq', prompt: 'A strict rhyme scheme can create a feeling of the speaker\'s emotion being…', options: ['Trapped or contained within rigid lines', 'Completely unrestricted', 'Not present at all'], answer: 'Trapped or contained within rigid lines', difficulty: 2 },
        { id: 'Y7-ENG-LE04-q4', type: 'mcq', prompt: 'A poem\'s "form" refers to…', options: ['Its overall structural pattern (e.g. free verse, sonnet)', 'The topic it discusses', 'The author\'s name'], answer: 'Its overall structural pattern (e.g. free verse, sonnet)', difficulty: 1 },
        { id: 'Y7-ENG-LE04-q5', type: 'mcq', prompt: 'Sound devices in poetry work alongside imagery to…', options: ['Make the poem felt in the ear as well as understood', 'Remove all meaning', 'Replace punctuation'], answer: 'Make the poem felt in the ear as well as understood', difficulty: 2 },
        { id: 'Y7-ENG-LE04-q6', type: 'mcq', prompt: 'Repeating a consonant sound within a line ("blank and bleak") is…', options: ['Consonance', 'Rhyme', 'Hyperbole'], answer: 'Consonance', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LE05',
    title: 'Creating literary texts, experimenting with viewpoint',
    year: '7',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E7LE05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Point of view is a lens: first person ("I") puts the reader inside one mind, third person can zoom out to show everything, second person ("you") pulls the reader into the action directly.',
        'Rewriting a familiar scene from a new viewpoint, or trying a literary device you have never used, is a powerful way to discover what point of view can do.',
      ],
      illustrations: [
        { brief: 'A camera lens metaphor for first, second and third person viewpoints', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Choose a scene' }, { text: 'Try first, second and third person' }, { text: 'Compare the effect on the reader' }, { text: 'Select and refine' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LE05-q1', type: 'mcq', prompt: 'A story told using "I" is written in…', options: ['First person', 'Second person', 'Third person'], answer: 'First person', difficulty: 1 },
        { id: 'Y7-ENG-LE05-q2', type: 'mcq', prompt: 'A narrator who can describe every character\'s thoughts is using…', options: ['Third person omniscient point of view', 'Strict first person only', 'No point of view at all'], answer: 'Third person omniscient point of view', difficulty: 2 },
        { id: 'Y7-ENG-LE05-q3', type: 'mcq', prompt: 'Second-person narration addresses the reader as…', options: ['"You"', '"I"', '"They"'], answer: '"You"', difficulty: 1 },
        { id: 'Y7-ENG-LE05-q4', type: 'mcq', prompt: 'Rewriting a scene from a new viewpoint mainly helps a writer discover…', options: ['What that point of view reveals or hides', 'The correct spelling of every word', 'Nothing new'], answer: 'What that point of view reveals or hides', difficulty: 2 },
        { id: 'Y7-ENG-LE05-q5', type: 'mcq', prompt: 'First-person narration puts the reader…', options: ['Inside one character\'s mind and limited knowledge', 'Nowhere at all', 'Inside every character\'s mind at once'], answer: 'Inside one character\'s mind and limited knowledge', difficulty: 2 },
        { id: 'Y7-ENG-LE05-q6', type: 'mcq', prompt: 'Experimenting with a new literary device while drafting is valuable because it…', options: ['Expands a writer\'s toolkit', 'Guarantees a perfect first draft', 'Removes the need to edit'], answer: 'Expands a writer\'s toolkit', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (9 CDs) ----------
  {
    id: 'Y7-ENG-LY01',
    title: 'Analysing representation in texts',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every text represents its subject in a particular way, a news photo choosing an angle, a documentary choosing which voices to include. Representation is never neutral; it is always a choice.',
        'Ask who is shown, who is left out, and what impression that creates, the gaps in a text can matter as much as what is included.',
      ],
      illustrations: [
        { brief: 'A camera frame showing what is included vs cropped out of a scene', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'picture-frame', label: 'What\'s shown' }, { icon: 'magnifier', label: 'What\'s left out' }], caption: 'Representation is always a choice' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY01-q1', type: 'mcq', prompt: 'Representation in a text refers to…', options: ['How a subject or person is chosen to be shown', 'The page count only', 'The publisher\'s address'], answer: 'How a subject or person is chosen to be shown', difficulty: 1 },
        { id: 'Y7-ENG-LY01-q2', type: 'mcq', prompt: 'A documentary that only interviews one side of an issue mainly shows…', options: ['A selective representation', 'A perfectly balanced view', 'No point of view at all'], answer: 'A selective representation', difficulty: 2 },
        { id: 'Y7-ENG-LY01-q3', type: 'mcq', prompt: 'Asking who is left out of a text is useful because…', options: ['Gaps can reveal bias or a particular viewpoint', 'It never matters', 'It only affects spelling'], answer: 'Gaps can reveal bias or a particular viewpoint', difficulty: 2 },
        { id: 'Y7-ENG-LY01-q4', type: 'mcq', prompt: 'A news photo is chosen and cropped by…', options: ['A deliberate editorial choice', 'Pure random chance', 'The camera alone with no human input'], answer: 'A deliberate editorial choice', difficulty: 2 },
        { id: 'Y7-ENG-LY01-q5', type: 'mcq', prompt: 'Representation in texts is described as "never neutral" because…', options: ['Every choice about what to include shapes meaning', 'All texts are identical', 'Texts have no creators'], answer: 'Every choice about what to include shapes meaning', difficulty: 2 },
        { id: 'Y7-ENG-LY01-q6', type: 'mcq', prompt: 'A key question when analysing representation is…', options: ['Who is shown, and who is left out?', 'What font is used?', 'How long is the text?'], answer: 'Who is shown, and who is left out?', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY02',
    title: 'Listening & interacting in discussion',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Building on others\' ideas in a discussion means genuinely listening, then extending or respectfully challenging what was said, "building on what Sam said, I\'d also add…"',
        'Good group discussion is a shared construction, not a competition to speak the most; the best contributions connect to what came before.',
      ],
      illustrations: [
        { brief: 'A discussion chain where each speaker links back to the last', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: 'Speaker 1' }, { icon: 'link', label: 'Builds on it' }, { icon: 'chat-bubble', label: 'Speaker 2' }], caption: 'Discussion as a shared chain of ideas' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY02-q1', type: 'mcq', prompt: '"Building on what Sam said, I\'d also add…" is an example of…', options: ['Extending another speaker\'s idea', 'Interrupting rudely', 'Changing the subject'], answer: 'Extending another speaker\'s idea', difficulty: 1 },
        { id: 'Y7-ENG-LY02-q2', type: 'mcq', prompt: 'A group discussion works best when contributions…', options: ['Connect to what came before', 'Are all unrelated to each other', 'Come from only one speaker'], answer: 'Connect to what came before', difficulty: 2 },
        { id: 'Y7-ENG-LY02-q3', type: 'mcq', prompt: 'Respectfully challenging an idea in discussion means…', options: ['Disagreeing while still engaging with the reasoning', 'Ignoring the other speaker entirely', 'Refusing to speak'], answer: 'Disagreeing while still engaging with the reasoning', difficulty: 2 },
        { id: 'Y7-ENG-LY02-q4', type: 'mcq', prompt: 'Genuine listening in a discussion requires…', options: ['Following the speaker\'s meaning, not just waiting to talk', 'Thinking about something else entirely', 'Repeating your own point regardless'], answer: 'Following the speaker\'s meaning, not just waiting to talk', difficulty: 2 },
        { id: 'Y7-ENG-LY02-q5', type: 'mcq', prompt: 'A discussion described as a "shared construction" suggests ideas are…', options: ['Built together across the group', 'Owned by a single speaker only', 'Never allowed to change'], answer: 'Built together across the group', difficulty: 2 },
        { id: 'Y7-ENG-LY02-q6', type: 'mcq', prompt: 'Speaking the most in a discussion is…', options: ['Not the same as contributing the best ideas', 'Always the goal', 'The only way to succeed'], answer: 'Not the same as contributing the best ideas', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY03',
    title: 'Structure & language features working together',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A text\'s structure (its stages) and its language features (word choices, sentence patterns) are a team, a persuasive speech structures reasons in a build-up, and its language leans on rhetorical questions to match.',
        'Analysing purpose means checking whether structure and language pull in the same direction for the intended audience.',
      ],
      illustrations: [
        { brief: 'A flowchart linking structure choice, language choice and audience effect', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Structure (build-up of reasons)' }, { text: 'Language (rhetorical questions)' }, { text: 'Audience persuaded' } ] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY03-q1', type: 'mcq', prompt: 'A persuasive speech that builds up reasons and uses rhetorical questions is aligning…', options: ['Structure and language toward the same purpose', 'Two unrelated random choices', 'Nothing in particular'], answer: 'Structure and language toward the same purpose', difficulty: 2 },
        { id: 'Y7-ENG-LY03-q2', type: 'mcq', prompt: 'A rhetorical question in a speech is designed to…', options: ['Make the audience think without expecting a spoken answer', 'Require an immediate written response', 'End the speech'], answer: 'Make the audience think without expecting a spoken answer', difficulty: 1 },
        { id: 'Y7-ENG-LY03-q3', type: 'mcq', prompt: 'Analysing a text\'s purpose involves checking whether…', options: ['Structure and language features work together for the audience', 'Only the font matches the topic', 'The page numbers are correct'], answer: 'Structure and language features work together for the audience', difficulty: 2 },
        { id: 'Y7-ENG-LY03-q4', type: 'mcq', prompt: 'An instructional text\'s numbered steps exist mainly to help the reader…', options: ['Follow a process in the correct order', 'Feel persuaded', 'Feel entertained'], answer: 'Follow a process in the correct order', difficulty: 1 },
        { id: 'Y7-ENG-LY03-q5', type: 'mcq', prompt: 'A text aimed at a teenage audience often uses…', options: ['Language and references relevant to that audience', 'Formal legal terminology only', 'No structure at all'], answer: 'Language and references relevant to that audience', difficulty: 2 },
        { id: 'Y7-ENG-LY03-q6', type: 'mcq', prompt: 'When structure and language features do not match a text\'s stated purpose, the text is likely…', options: ['Less effective at achieving its purpose', 'Automatically more persuasive', 'Impossible to read'], answer: 'Less effective at achieving its purpose', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY04',
    title: 'Reading strategy, navigating a range of texts',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Different purposes call for different reading strategies, skim a webpage to see if it is useful, scan a textbook index for one fact, then read closely once you find the right source.',
        'Efficient readers do not read everything at the same speed; they match their strategy to what they actually need.',
      ],
      illustrations: [
        { brief: 'A flowchart choosing a reading strategy based on purpose', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'What is my purpose?', decision: true }, { text: 'Skim for overview' }, { text: 'Scan for a fact' }, { text: 'Read closely for detail' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY04-q1', type: 'mcq', prompt: 'Skimming a webpage before reading it fully mainly helps you…', options: ['Judge whether it is worth reading closely', 'Memorise every word', 'Print the page'], answer: 'Judge whether it is worth reading closely', difficulty: 1 },
        { id: 'Y7-ENG-LY04-q2', type: 'mcq', prompt: 'Scanning an index for a keyword is most useful when you want…', options: ['One specific fact quickly', 'To read the whole book slowly', 'To memorise the contents page'], answer: 'One specific fact quickly', difficulty: 1 },
        { id: 'Y7-ENG-LY04-q3', type: 'mcq', prompt: 'An efficient reader matches their strategy to…', options: ['Their purpose for reading', 'The book\'s cover colour', 'Random chance'], answer: 'Their purpose for reading', difficulty: 2 },
        { id: 'Y7-ENG-LY04-q4', type: 'mcq', prompt: 'Reading closely is most appropriate when you need to…', options: ['Understand fine detail or analyse language', 'Quickly decide if a source is relevant', 'Find a single date fast'], answer: 'Understand fine detail or analyse language', difficulty: 2 },
        { id: 'Y7-ENG-LY04-q5', type: 'mcq', prompt: 'Evaluating a source\'s structural features (headings, references) before using it helps a reader judge…', options: ['Its reliability and relevance', 'Its font size only', 'Nothing useful'], answer: 'Its reliability and relevance', difficulty: 2 },
        { id: 'Y7-ENG-LY04-q6', type: 'mcq', prompt: 'Reading every text at exactly the same slow pace is usually…', options: ['Inefficient for most purposes', 'The only correct approach', 'Required for skimming'], answer: 'Inefficient for most purposes', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY05',
    title: 'Comprehension strategies, monitoring & inferring',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Monitoring your comprehension means noticing when meaning breaks down, "wait, that doesn\'t make sense", and pausing to re-read, look up a word, or ask a question.',
        'Inferring builds on clues the text gives without spelling everything out; strong readers combine what the text says with what they already know.',
      ],
      illustrations: [
        { brief: 'A reader pausing mid-page with a question mark, then re-reading', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Read' }, { icon: 'magnifier', label: 'Notice confusion' }, { icon: 'rotate-arrow', label: 'Re-read & clarify' }], caption: 'Monitoring meaning while reading' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY05-q1', type: 'mcq', prompt: 'Noticing that a sentence no longer makes sense and re-reading it is called…', options: ['Monitoring comprehension', 'Skimming', 'Predicting'], answer: 'Monitoring comprehension', difficulty: 1 },
        { id: 'Y7-ENG-LY05-q2', type: 'mcq', prompt: 'Inferring meaning means combining text clues with…', options: ['What you already know', 'The book\'s page count', 'The font used'], answer: 'What you already know', difficulty: 2 },
        { id: 'Y7-ENG-LY05-q3', type: 'mcq', prompt: 'A reader who pauses to look up an unfamiliar word is using which strategy?', options: ['Monitoring comprehension', 'Ignoring the problem', 'Skimming past it forever'], answer: 'Monitoring comprehension', difficulty: 1 },
        { id: 'Y7-ENG-LY05-q4', type: 'mcq', prompt: 'A text that never states a character is scared, but describes trembling hands, requires the reader to…', options: ['Infer the character\'s feeling', 'Ignore the clue entirely', 'Reread the title'], answer: 'Infer the character\'s feeling', difficulty: 2 },
        { id: 'Y7-ENG-LY05-q5', type: 'mcq', prompt: 'Strong comprehension strategies help a reader build…', options: ['Both literal and inferred meaning', 'Only the page count', 'Only spelling accuracy'], answer: 'Both literal and inferred meaning', difficulty: 2 },
        { id: 'Y7-ENG-LY05-q6', type: 'mcq', prompt: 'Which is the best next step when meaning breaks down mid-sentence?', options: ['Pause and re-read for clarity', 'Skip the rest of the book', 'Ignore it and keep the same pace'], answer: 'Pause and re-read for clarity', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY06',
    title: 'Planning, drafting & publishing persuasive texts',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'A persuasive text is built, not just written, plan your strongest reasons, draft an argument that builds toward them, then revise for evaluative language and cohesive devices.',
        'Publishing is the final polish: check that structure, language and evidence all point toward convincing your intended audience.',
      ],
      illustrations: [
        { brief: 'A persuasive-writing process wheel: plan → draft → revise → publish', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan strongest reasons' }, { text: 'Draft the argument' }, { text: 'Revise language & cohesion' }, { text: 'Publish' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY06-q1', type: 'mcq', prompt: 'Planning a persuasive text before drafting mainly helps a writer…', options: ['Organise their strongest reasons first', 'Skip the need for evidence', 'Avoid choosing a topic'], answer: 'Organise their strongest reasons first', difficulty: 1 },
        { id: 'Y7-ENG-LY06-q2', type: 'mcq', prompt: 'Revising a persuasive draft for evaluative language means…', options: ['Checking word choices actively influence the reader', 'Deleting all opinions', 'Removing every fact'], answer: 'Checking word choices actively influence the reader', difficulty: 2 },
        { id: 'Y7-ENG-LY06-q3', type: 'mcq', prompt: 'Publishing a persuasive text is the stage where a writer…', options: ['Gives it a final polish for the audience', 'First brainstorms ideas', 'Chooses a topic'], answer: 'Gives it a final polish for the audience', difficulty: 1 },
        { id: 'Y7-ENG-LY06-q4', type: 'mcq', prompt: 'A strong persuasive draft should have structure and evidence that…', options: ['Both point toward convincing the audience', 'Contradict each other', 'Are unrelated to the topic'], answer: 'Both point toward convincing the audience', difficulty: 2 },
        { id: 'Y7-ENG-LY06-q5', type: 'mcq', prompt: 'Cohesive devices in a persuasive text mainly help…', options: ['Link reasons smoothly to build the argument', 'Add random new topics', 'Replace the need for evidence'], answer: 'Link reasons smoothly to build the argument', difficulty: 2 },
        { id: 'Y7-ENG-LY06-q6', type: 'mcq', prompt: 'The very first step in the persuasive writing process is usually…', options: ['Planning', 'Publishing', 'Final proofreading'], answer: 'Planning', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY07',
    title: 'Planning & delivering spoken presentations',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A spoken presentation needs the same planning as writing, plus performance choices, pitch, tone, pace, volume and eye contact all shape how convincing you sound.',
        'Rehearsing aloud (not just reading silently) is the only way to catch awkward phrasing and build genuine confidence before the real delivery.',
      ],
      illustrations: [
        { brief: 'A rehearsal cycle: plan, practise aloud, get feedback, refine', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan ideas & structure' }, { text: 'Rehearse aloud' }, { text: 'Get feedback' }, { text: 'Refine delivery' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY07-q1', type: 'mcq', prompt: 'Rehearsing a speech aloud (not just reading it silently) mainly helps a speaker…', options: ['Catch awkward phrasing and build confidence', 'Memorise the audience\'s names', 'Avoid needing any structure'], answer: 'Catch awkward phrasing and build confidence', difficulty: 1 },
        { id: 'Y7-ENG-LY07-q2', type: 'mcq', prompt: 'Eye contact during a presentation mainly helps…', options: ['Engage and connect with the audience', 'Speed up the talk', 'Replace slides entirely'], answer: 'Engage and connect with the audience', difficulty: 1 },
        { id: 'Y7-ENG-LY07-q3', type: 'mcq', prompt: 'Varying pace during a speech, slowing for a key point, mainly helps…', options: ['Emphasise the most important idea', 'Confuse the audience', 'Shorten the speech automatically'], answer: 'Emphasise the most important idea', difficulty: 2 },
        { id: 'Y7-ENG-LY07-q4', type: 'mcq', prompt: 'A spoken presentation requires planning similar to writing, plus…', options: ['Performance choices like pitch and pace', 'No planning at all', 'Only visual slides'], answer: 'Performance choices like pitch and pace', difficulty: 2 },
        { id: 'Y7-ENG-LY07-q5', type: 'mcq', prompt: 'Speaking in a flat, unchanging tone throughout a speech tends to…', options: ['Lose audience engagement', 'Increase excitement', 'Improve clarity automatically'], answer: 'Lose audience engagement', difficulty: 2 },
        { id: 'Y7-ENG-LY07-q6', type: 'mcq', prompt: 'Feedback after a rehearsal is most useful for…', options: ['Refining delivery before the real presentation', 'Replacing the need to present at all', 'Choosing a new topic'], answer: 'Refining delivery before the real presentation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY08',
    title: 'Word knowledge, morphemes & etymology',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A morpheme is the smallest unit of meaning in a word, "unbreakable" splits into un- (not) + break (base) + -able (can be done). Knowing morphemes lets you decode words you have never seen.',
        'Etymology traces a word\'s history, many English words travelled from Latin, Greek, French or other languages, and their origin often hints at their meaning.',
      ],
      illustrations: [
        { brief: 'A word broken into morpheme building blocks', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: 'un-' }, { icon: 'box', label: 'break' }, { icon: 'box', label: '-able' }], caption: 'Morphemes: the smallest units of meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY08-q1', type: 'short', prompt: 'How many morphemes are in "unbreakable" (un + break + able)?', answer: '3', difficulty: 1 },
        { id: 'Y7-ENG-LY08-q2', type: 'mcq', prompt: 'A morpheme is…', options: ['The smallest unit of meaning in a word', 'A type of punctuation', 'A full sentence'], answer: 'The smallest unit of meaning in a word', difficulty: 1 },
        { id: 'Y7-ENG-LY08-q3', type: 'mcq', prompt: 'Etymology is the study of…', options: ['A word\'s history and origin', 'Sentence punctuation', 'Paragraph length'], answer: 'A word\'s history and origin', difficulty: 1 },
        { id: 'Y7-ENG-LY08-q4', type: 'mcq', prompt: 'Knowing that "-able" means "can be done" helps you guess the meaning of…', options: ['Readable', 'Reader', 'Reading only'], answer: 'Readable', difficulty: 2 },
        { id: 'Y7-ENG-LY08-q5', type: 'mcq', prompt: 'Many English words originate from…', options: ['Latin, Greek, French and other languages', 'Only modern English', 'No traceable source at all'], answer: 'Latin, Greek, French and other languages', difficulty: 2 },
        { id: 'Y7-ENG-LY08-q6', type: 'mcq', prompt: 'Breaking an unfamiliar word into its morphemes mainly helps you…', options: ['Decode its likely meaning', 'Change its pronunciation only', 'Ignore it completely'], answer: 'Decode its likely meaning', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-ENG-LY09',
    title: 'Building technical & subject-specific vocabulary',
    year: '7',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E7LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Every subject has its own precise vocabulary, "photosynthesis" in science, "variable" in maths, "colonisation" in history, and using the exact term shows real understanding, not a vague approximation.',
        'Building technical vocabulary means noticing new terms, checking their precise meaning, and practising using them correctly in your own sentences.',
      ],
      illustrations: [
        { brief: 'A vocabulary notebook collecting subject-specific terms', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Notice a new term' }, { icon: 'book', label: 'Check its meaning' }, { icon: 'pen', label: 'Use it correctly' }], caption: 'Building precise technical vocabulary' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-ENG-LY09-q1', type: 'mcq', prompt: 'Using the precise technical term instead of a vague one usually shows…', options: ['Stronger understanding of the topic', 'Weaker understanding', 'Nothing about understanding'], answer: 'Stronger understanding of the topic', difficulty: 1 },
        { id: 'Y7-ENG-LY09-q2', type: 'mcq', prompt: '"Variable" is technical vocabulary most associated with…', options: ['Mathematics', 'Poetry', 'Cooking'], answer: 'Mathematics', difficulty: 1 },
        { id: 'Y7-ENG-LY09-q3', type: 'mcq', prompt: 'Building technical vocabulary includes…', options: ['Checking a new term\'s precise meaning', 'Avoiding new words entirely', 'Replacing all nouns with pronouns'], answer: 'Checking a new term\'s precise meaning', difficulty: 2 },
        { id: 'Y7-ENG-LY09-q4', type: 'mcq', prompt: '"Colonisation" is technical vocabulary most associated with…', options: ['History', 'Mathematics', 'Music'], answer: 'History', difficulty: 1 },
        { id: 'Y7-ENG-LY09-q5', type: 'mcq', prompt: 'Practising a new technical term in your own sentence mainly helps you…', options: ['Consolidate and remember its correct use', 'Forget it faster', 'Avoid using it again'], answer: 'Consolidate and remember its correct use', difficulty: 2 },
        { id: 'Y7-ENG-LY09-q6', type: 'mcq', prompt: 'A vague word like "thing" instead of a precise technical term usually…', options: ['Weakens the clarity of the writing', 'Strengthens the writing', 'Has no effect'], answer: 'Weakens the clarity of the writing', difficulty: 2 },
      ],
    },
  },
];
