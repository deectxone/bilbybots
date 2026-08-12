import type { Topic } from '../../types/curriculum';

/**
 * Year 9 English — full topic bank.
 * Source of truth for scope: docs/content/year-7-10/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E9xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons — never bulk-copy syllabus text).
 * Year 9 has 23 content descriptions: Language (9), Literature (6),
 * Literacy (8). Each assignment carries 6 questions (nominal pace) / 4
 * (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR9_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y9-ENG-LA01',
    title: 'Language, power, relationships & roles',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The way you speak does more than carry information — it can lift someone up or shut them down. Jargon, titles, the pronoun you choose and who gets to interrupt all build the unspoken power structure of a conversation.',
        'Recognising how language empowers (or diminishes) relationships and roles is the first step to using your own words deliberately — and to noticing when others are using theirs on you.',
      ],
      illustrations: [
        { brief: 'A power ladder showing how language can elevate or diminish a speaker\'s role', ready: true, diagram: { kind: 'metric-ladder', units: ['Diminish', 'Include', 'Empower'], highlight: 2 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA01-q1', type: 'mcq', prompt: 'Language can "empower" a relationship or role by…', options: ['Giving a speaker status, respect or control', 'Removing all meaning from words', 'Making sentences shorter only'], answer: 'Giving a speaker status, respect or control', difficulty: 1 },
        { id: 'Y9-ENG-LA01-q2', type: 'mcq', prompt: 'Heavy use of unexplained jargon by a professional can make an outsider feel…', options: ['Excluded or powerless', 'Perfectly included', 'More powerful'], answer: 'Excluded or powerless', difficulty: 2 },
        { id: 'Y9-ENG-LA01-q3', type: 'mcq', prompt: 'Choosing "we" instead of "you" when giving an instruction tends to…', options: ['Include the speaker in the task, softening the demand', 'Make the sentence ungrammatical', 'Always remove authority'], answer: 'Include the speaker in the task, softening the demand', difficulty: 2 },
        { id: 'Y9-ENG-LA01-q4', type: 'mcq', prompt: 'Who gets to interrupt or set the topic in a discussion is part of…', options: ['The power dynamic built through language', 'A spelling rule', 'The alphabet only'], answer: 'The power dynamic built through language', difficulty: 2 },
        { id: 'Y9-ENG-LA01-q5', type: 'short', prompt: 'Give one word for language that is deliberately kept unclear to outsiders (starts with "j").', answer: 'jargon', difficulty: 2 },
        { id: 'Y9-ENG-LA01-q6', type: 'mcq', prompt: 'Recognising how language shapes roles helps a speaker…', options: ['Choose words that match their intended effect', 'Ignore the audience entirely', 'Avoid all formality forever'], answer: 'Choose words that match their intended effect', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA02',
    title: 'Evaluating — directly & indirectly',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'You can evaluate something head-on ("this plan is brilliant") or nudge a judgement sideways — an allusion quietly compares your subject to something grand, a single evocative adjective does the persuading, or a metaphor makes an argument feel inevitable.',
        'Indirect evaluation is often the craftiest: a critic who never says "bad" can still demolish a film by calling it "a 2003 time capsule that never unlocked its door".',
      ],
      illustrations: [
        { brief: 'A balance scale showing direct evaluation vs indirect devices (allusion, metaphor)', ready: true, diagram: { kind: 'balance-scale', left: '"It is excellent."', right: '"It echoes a golden era."', balanced: false } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA02-q1', type: 'mcq', prompt: 'An allusion works by…', options: ['Referencing something else to shape the reader\'s judgement', 'Stating the judgement word for word', 'Removing all opinion'], answer: "Referencing something else to shape the reader's judgement", difficulty: 1 },
        { id: 'Y9-ENG-LA02-q2', type: 'mcq', prompt: '"The hotel\'s "grand" architecture was a concrete poem to a forgotten decade" evaluates…', options: ['Indirectly, through metaphor and allusion', 'Directly, with a single judgement word', 'Not at all'], answer: 'Indirectly, through metaphor and allusion', difficulty: 2 },
        { id: 'Y9-ENG-LA02-q3', type: 'mcq', prompt: 'Evocative vocabulary is most likely to be used when a writer wants to…', options: ['Trigger a strong emotional response rather than a neutral fact', 'Report purely objective data', 'Avoid influencing the reader'], answer: 'Trigger a strong emotional response rather than a neutral fact', difficulty: 2 },
        { id: 'Y9-ENG-LA02-q4', type: 'mcq', prompt: 'A direct evaluation ("this is terrible") differs from an indirect one because it…', options: ['States the judgement openly instead of implying it', 'Is always more persuasive', 'Contains no opinion'], answer: 'States the judgement openly instead of implying it', difficulty: 2 },
        { id: 'Y9-ENG-LA02-q5', type: 'mcq', prompt: 'A metaphor can evaluate indirectly by…', options: ['Comparing the subject to something with built-in associations', 'Listing exact measurements', 'Repeating a number'], answer: 'Comparing the subject to something with built-in associations', difficulty: 2 },
        { id: 'Y9-ENG-LA02-q6', type: 'short', prompt: 'Give one device that evaluates indirectly by referencing another text or event.', answer: 'allusion', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA03',
    title: 'Adapting & subverting text structures',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Strong authors rarely just copy a structure — they bend it. A satirical news site borrows a serious headline format to mock it, a spoken-word poem borrows a speech\'s build-up and then breaks it with silence.',
        'When an author "subverts" a structure, they flip what an audience expects — playing with spoken, written, visual and multimodal elements at once to create a surprise that lands harder than plain conformity.',
      ],
      illustrations: [
        { brief: 'A flowchart: expected structure, then the author\'s subverted twist', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Audience expects a familiar structure' }, { text: 'Author adapts or breaks it' }, { text: 'Surprise changes the effect' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA03-q1', type: 'mcq', prompt: 'To "subvert" a text structure means to…', options: ['Upset or flip its expected conventions', 'Copy it exactly', 'Ignore all structure entirely'], answer: 'Upset or flip its expected conventions', difficulty: 1 },
        { id: 'Y9-ENG-LA03-q2', type: 'mcq', prompt: 'A satirical site borrowing a serious news layout mainly uses the familiar structure to…', options: ['Set up an expectation that the content then mocks', 'Look exactly like real news for no reason', 'Eliminate humour'], answer: 'Set up an expectation that the content then mocks', difficulty: 2 },
        { id: 'Y9-ENG-LA03-q3', type: 'mcq', prompt: 'Authors experiment with multimodal elements by combining…', options: ['Spoken, written, visual and audio choices together', 'Only text and nothing else', 'Only colour alone'], answer: 'Spoken, written, visual and audio choices together', difficulty: 2 },
        { id: 'Y9-ENG-LA03-q4', type: 'mcq', prompt: 'A poem that borrows a speech\'s build-up then breaks it with a sudden pause is an example of…', options: ['Subverting a structure for effect', 'Making a punctuation error', 'Refusing to plan'], answer: 'Subverting a structure for effect', difficulty: 2 },
        { id: 'Y9-ENG-LA03-q5', type: 'mcq', prompt: 'The main purpose of subverting a familiar structure is usually to…', options: ['Create surprise, irony or a fresh perspective', 'Make the text harder to read for no benefit', 'Prove no structures exist'], answer: 'Create surprise, irony or a fresh perspective', difficulty: 2 },
        { id: 'Y9-ENG-LA03-q6', type: 'mcq', prompt: 'Before an audience can feel a subversion, they must first…', options: ['Recognise the structure being played with', 'Forget all other texts', 'Read the ending first'], answer: 'Recognise the structure being played with', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA04',
    title: 'Cohesion — condensing & linking ideas',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Nominalisation condenses a whole action into a noun — "people protested" becomes "the protest" — letting you refer back to a big idea in one word. Text connectives ("furthermore", "by contrast", "as a result") then stitch ideas together across sentences and paragraphs.',
        'These devices work as a pair: nominalisation packs the ideas down, connectives show exactly how the packed ideas relate. Together they make dense, fluent, genuinely cohesive writing.',
      ],
      illustrations: [
        { brief: 'Packing a full idea into one noun, then linking it with a connective', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: '"protested"' }, { icon: 'box', label: '"the protest"' }, { icon: 'link', label: '"by contrast"' }], caption: 'Condense the idea, then link it' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA04-q1', type: 'short', prompt: 'Nominalise the action: "they debated" becomes "the…"', answer: 'debate', difficulty: 1 },
        { id: 'Y9-ENG-LA04-q2', type: 'mcq', prompt: 'Nominalisation condenses an idea by…', options: ['Turning a whole action or process into a single noun', 'Removing the subject entirely', 'Adding extra clauses'], answer: 'Turning a whole action or process into a single noun', difficulty: 2 },
        { id: 'Y9-ENG-LA04-q3', type: 'mcq', prompt: 'A text connective like "by contrast" mainly signals…', options: ['A shift to a contrasting idea', 'The end of the text', 'A spelling error'], answer: 'A shift to a contrasting idea', difficulty: 1 },
        { id: 'Y9-ENG-LA04-q4', type: 'mcq', prompt: 'Using nominalisation and text connectives together mainly builds…', options: ['Cohesion across dense, fluent writing', 'Longer sentences with no benefit', 'Confusion about the topic'], answer: 'Cohesion across dense, fluent writing', difficulty: 2 },
        { id: 'Y9-ENG-LA04-q5', type: 'mcq', prompt: 'Which connective best signals a result?', options: ['As a result', 'Similarly', 'Meanwhile'], answer: 'As a result', difficulty: 1 },
        { id: 'Y9-ENG-LA04-q6', type: 'mcq', prompt: 'Dense academic writing relies on nominalisation mainly to…', options: ['Refer back to large ideas concisely', 'Make every sentence short', 'Avoid connectives entirely'], answer: 'Refer back to large ideas concisely', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA05',
    title: 'Sentence variation for effect',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Deliberate sentence variation is a craft tool. A writer who has used long, flowing sentences can suddenly drop a single short sentence — or even a fragment like "No. Never." — and the break reads like a drumbeat.',
        'Fragments and standalone dependent clauses are usually "errors", but skilled authors break the pattern on purpose for emphasis, pace or voice. The effect only works because the surrounding sentences are so clearly complete.',
      ],
      illustrations: [
        { brief: 'A rhythm graph showing long sentences suddenly broken by a short fragment', ready: true, diagram: { kind: 'dot-plot', values: [2, 4, 6, 6, 1, 3, 5, 7], unit: ' words' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA05-q1', type: 'mcq', prompt: '"No. Never." appearing alone in a paragraph is an example of…', options: ['A deliberate fragment for emphasis', 'A mandatory grammar rule', 'An unavoidable error'], answer: 'A deliberate fragment for emphasis', difficulty: 2 },
        { id: 'Y9-ENG-LA05-q2', type: 'mcq', prompt: 'A short sentence after a run of long ones mainly creates…', options: ['Emphasis and a change of pace', 'Automatic confusion', 'A longer paragraph'], answer: 'Emphasis and a change of pace', difficulty: 1 },
        { id: 'Y9-ENG-LA05-q3', type: 'mcq', prompt: 'A fragment stands out mainly because it…', options: ['Breaks the pattern of complete sentences around it', 'Is always the longest sentence', 'Contains the most words'], answer: 'Breaks the pattern of complete sentences around it', difficulty: 2 },
        { id: 'Y9-ENG-LA05-q4', type: 'mcq', prompt: 'A writer who uses every sentence the same length is…', options: ['Missing the chance for rhythm and emphasis', 'Using the best possible craft', 'Guaranteed to persuade'], answer: 'Missing the chance for rhythm and emphasis', difficulty: 2 },
        { id: 'Y9-ENG-LA05-q5', type: 'short', prompt: 'Give one effect a deliberate sentence fragment can create (one word).', answer: 'emphasis', difficulty: 2 },
        { id: 'Y9-ENG-LA05-q6', type: 'mcq', prompt: 'For a fragment to feel deliberate rather than wrong, the writer usually needs…', options: ['Strong complete sentences around it to contrast', 'The fragment to contain every idea', 'No surrounding text at all'], answer: 'Strong complete sentences around it to contrast', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA06',
    title: 'Abstract nouns & nominalisation to summarise',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Abstract nouns name things you cannot touch — "progress", "conflict", "innovation". Nominalisation turns an action into one of these nouns ("the city grew" becomes "the growth of the city"), which lets a writer summarise an entire idea in a single word.',
        'This is how writers condense complex ideas: instead of re-explaining an event, they name it once and then build on that name. It is the engine of tight, analytical prose.',
      ],
      illustrations: [
        { brief: 'A long sentence folded into one abstract noun, then expanded again', ready: true, diagram: { kind: 'balance-scale', left: '"The team expanded operations."', right: '"The expansion…"', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA06-q1', type: 'mcq', prompt: 'Which is an abstract noun?', options: ['Progress', 'Pencil', 'River'], answer: 'Progress', difficulty: 1 },
        { id: 'Y9-ENG-LA06-q2', type: 'short', prompt: 'Nominalise the verb "innovate" into its abstract noun form.', answer: 'innovation', difficulty: 1 },
        { id: 'Y9-ENG-LA06-q3', type: 'mcq', prompt: 'Nominalisation mainly lets a writer…', options: ['Summarise a whole idea in a single noun', 'Remove the need for nouns entirely', 'Lengthen every sentence'], answer: 'Summarise a whole idea in a single noun', difficulty: 2 },
        { id: 'Y9-ENG-LA06-q4', type: 'mcq', prompt: '"The growth of the city caused traffic problems" names "growth" so the writer can…', options: ['Build on that idea in the next sentence', 'Avoid ever mentioning the city', 'Shorten the text to one word only'], answer: 'Build on that idea in the next sentence', difficulty: 2 },
        { id: 'Y9-ENG-LA06-q5', type: 'mcq', prompt: 'Analytical and academic writing leans on abstract nouns mainly because they…', options: ['Let complex ideas be named and then developed precisely', 'Make writing sound vague and empty', 'Prevent any summarising'], answer: 'Let complex ideas be named and then developed precisely', difficulty: 2 },
        { id: 'Y9-ENG-LA06-q6', type: 'mcq', prompt: 'An abstract noun names a concept that…', options: ['Exists as an idea rather than a touchable object', 'Can always be picked up and held', 'Is never used in writing'], answer: 'Exists as an idea rather than a touchable object', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA07',
    title: 'Symbols in still & moving images',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A symbol in an image works like a symbol in a poem — one object carries a bigger meaning. In a still photo, a single wilted flower might stand for loss; in a film, a character\'s mirror could grow cracked as their identity does.',
        'In moving images, symbols can develop: a colour recurs, a setting repeats, and each return adds meaning. Analysing image symbols means asking what the object is literally, and what it is being made to stand for.',
      ],
      illustrations: [
        { brief: 'A film-strip of one symbol (a door) meaning different things across scenes', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'A door = escape (scene 1)' }, { text: 'The same door = danger (scene 2)' }, { text: 'Symbol meaning deepens' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA07-q1', type: 'mcq', prompt: 'In visual texts, a symbol is an object that…', options: ['Carries a meaning beyond its literal self', 'Only means exactly what it is', 'Has no meaning at all'], answer: 'Carries a meaning beyond its literal self', difficulty: 1 },
        { id: 'Y9-ENG-LA07-q2', type: 'mcq', prompt: 'A wilting flower in a photograph can stand for…', options: ['Loss or decay', 'A maths formula', 'A weather forecast'], answer: 'Loss or decay', difficulty: 2 },
        { id: 'Y9-ENG-LA07-q3', type: 'mcq', prompt: 'When a film returns to the same symbol across scenes, the meaning often…', options: ['Deepens or shifts with the plot', 'Stays completely frozen forever', 'Disappears entirely'], answer: 'Deepens or shifts with the plot', difficulty: 2 },
        { id: 'Y9-ENG-LA07-q4', type: 'mcq', prompt: 'Analysing a visual symbol mainly requires asking…', options: ['What does this object represent beyond itself?', 'How many pixels are in the image?', 'What file format is used?'], answer: 'What does this object represent beyond itself?', difficulty: 2 },
        { id: 'Y9-ENG-LA07-q5', type: 'mcq', prompt: 'In moving images, symbols can "augment meaning" by…', options: ['Adding layers of association each time they appear', 'Removing all interpretation', 'Replacing the plot entirely'], answer: 'Adding layers of association each time they appear', difficulty: 2 },
        { id: 'Y9-ENG-LA07-q6', type: 'mcq', prompt: 'A recurring colour used to signal a character\'s changing state is…', options: ['A symbol developed through the moving image', 'A random technical accident', 'A punctuation mark'], answer: 'A symbol developed through the moving image', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA08',
    title: 'Vocabulary, style, mood & tone',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Mood is the feeling a text creates in you (tense, whimsical, bleak); tone is the attitude the writer or narrator takes (mocking, sincere, detached). Both are built word by word.',
        'Vocabulary does the heavy lifting: a "gleaming corridor" feels different from a "slick tunnel". Analysing how word choices create style means noticing the precise shades of meaning a writer has chosen — and what they could have chosen instead.',
      ],
      illustrations: [
        { brief: 'A thermometer of mood: from cold neutral words up to warm evocative ones', ready: true, diagram: { kind: 'thermometer', min: 0, max: 10, value: 8, unit: '/10 mood' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA08-q1', type: 'mcq', prompt: '"Tone" refers to the…', options: ['Attitude the writer or narrator takes', 'Number of pages', 'Font used in the text'], answer: 'Attitude the writer or narrator takes', difficulty: 1 },
        { id: 'Y9-ENG-LA08-q2', type: 'mcq', prompt: '"Mood" refers to the…', options: ['Feeling the text creates in the reader', 'Writer\'s biography', 'Book\'s cover design'], answer: 'Feeling the text creates in the reader', difficulty: 1 },
        { id: 'Y9-ENG-LA08-q3', type: 'mcq', prompt: 'A "gleaming corridor" versus a "slick tunnel" creates a difference in…', options: ['Mood and tone', 'Chapter count', 'Page numbering'], answer: 'Mood and tone', difficulty: 2 },
        { id: 'Y9-ENG-LA08-q4', type: 'mcq', prompt: 'Words like "smirked" instead of "smiled" mainly change the…', options: ['Tone of how the character is portrayed', 'Spelling of the sentence', 'Length of the paragraph'], answer: 'Tone of how the character is portrayed', difficulty: 2 },
        { id: 'Y9-ENG-LA08-q5', type: 'mcq', prompt: 'Analysing style through vocabulary means considering…', options: ['The shades of meaning a chosen word carries', 'Only the number of letters in each word', 'The paper\'s brand'], answer: 'The shades of meaning a chosen word carries', difficulty: 2 },
        { id: 'Y9-ENG-LA08-q6', type: 'short', prompt: 'Give one word that describes a mocking, sneering tone (starts with "sa").', answer: 'sarcastic', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LA09',
    title: 'Punctuation for referencing & citing',
    year: '9',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E9LA09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Quotation marks, brackets, commas and full stops do more than end sentences — they are the grammar of giving credit. Quotation marks tell a reader these are someone else\'s exact words; brackets frame a citation or an added note.',
        'Knowing who to cite, when to quote directly and when to report a source in your own words keeps your writing honest and makes your argument verifiable. Getting the punctuation wrong can accidentally make another person\'s words look like your own.',
      ],
      illustrations: [
        { brief: 'An annotated citation showing quotation marks, brackets and reference punctuation', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"Quote exactly"' }, { icon: 'box', label: '(Author, 2024)' }, { icon: 'book', label: 'Reference list' }], caption: 'Punctuation that gives credit' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LA09-q1', type: 'mcq', prompt: 'Quotation marks around words mainly signal…', options: ['These are someone else\'s exact words', 'The sentence is a question', 'The text has ended'], answer: "These are someone else's exact words", difficulty: 1 },
        { id: 'Y9-ENG-LA09-q2', type: 'mcq', prompt: 'Brackets around "(Author, 2024)" are used to…', options: ['Frame a citation or added note', 'Replace the title', 'Start the paragraph'], answer: 'Frame a citation or added note', difficulty: 1 },
        { id: 'Y9-ENG-LA09-q3', type: 'mcq', prompt: 'Directly quoting another person\'s words without quotation marks is…', options: ['Plagiarism risk, even if you name the source nearby', 'Always completely fine', 'Required by grammar'], answer: 'Plagiarism risk, even if you name the source nearby', difficulty: 2 },
        { id: 'Y9-ENG-LA09-q4', type: 'mcq', prompt: 'A writer chooses to "report" a source in their own words instead of quoting because…', options: ['The idea matters more than the exact wording', 'Quoting is always forbidden', 'Sources never matter'], answer: 'The idea matters more than the exact wording', difficulty: 2 },
        { id: 'Y9-ENG-LA09-q5', type: 'mcq', prompt: 'The punctuation in a citation mainly helps a reader…', options: ['Verify and find the source', 'Memorise the page colour', 'Ignore the reference'], answer: 'Verify and find the source', difficulty: 2 },
        { id: 'Y9-ENG-LA09-q6', type: 'short', prompt: 'Give one punctuation mark used to mark a direct quotation (starts with "q").', answer: 'quotation mark', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (6 CDs) ----------
  {
    id: 'Y9-ENG-LE01',
    title: 'Representations of people & places',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Literature by First Nations Australian authors and by wide-ranging Australian and world writers represents people and places through particular cultural lenses — what a character values, how a place is described, and whose history is centred all carry a context.',
        'Analysing these representations means asking not just what a text shows, but how its author\'s culture and era shaped what was shown — and comparing how different texts represent the same kind of person or place.',
      ],
      illustrations: [
        { brief: 'A world map with book icons marking representations from different contexts', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'globe', label: 'World authors' }, { icon: 'book', label: 'First Nations texts' }, { icon: 'people', label: 'People & places' }], caption: 'Representation carries its context' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE01-q1', type: 'mcq', prompt: 'How a text represents people and places is shaped by…', options: ['Its author\'s culture, era and context', 'Only the number of pages', 'Pure random chance'], answer: "Its author's culture, era and context", difficulty: 1 },
        { id: 'Y9-ENG-LE01-q2', type: 'mcq', prompt: 'A First Nations Australian author\'s work can offer readers…', options: ['A distinct cultural way of seeing place and belonging', 'An identical view to every other text', 'No cultural perspective at all'], answer: 'A distinct cultural way of seeing place and belonging', difficulty: 2 },
        { id: 'Y9-ENG-LE01-q3', type: 'mcq', prompt: 'Comparing representations of the same kind of person across texts can reveal…', options: ['Different cultural assumptions behind each portrayal', 'That all texts are identical', 'Nothing worth noticing'], answer: 'Different cultural assumptions behind each portrayal', difficulty: 2 },
        { id: 'Y9-ENG-LE01-q4', type: 'mcq', prompt: 'Analysing a representation mainly involves asking…', options: ['How has this author\'s context shaped this portrayal?', 'How many characters are there?', 'What font is the book printed in?'], answer: "How has this author's context shaped this portrayal?", difficulty: 2 },
        { id: 'Y9-ENG-LE01-q5', type: 'mcq', prompt: 'A "representation" of a place in a novel is…', options: ['A constructed version shaped by the author\'s choices', 'The literal, only true version', 'Unrelated to the author'], answer: "A constructed version shaped by the author's choices", difficulty: 2 },
        { id: 'Y9-ENG-LE01-q6', type: 'mcq', prompt: 'Reading texts from diverse cultural contexts mainly helps a reader…', options: ['Recognise that no representation is neutral', 'Memorise more place names', 'Avoid all other cultures'], answer: 'Recognise that no representation is neutral', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LE02',
    title: 'First impressions vs whole-text analysis',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Your first impression of a text is real and worth noticing — an opening line, an early scene, a first feeling about a character. But a first impression is only a starting point.',
        'A strong personal response compares that initial reaction with what a close reading of the whole text reveals: the character you first judged harshly may be reframed by the ending, and the ending re-reads the beginning.',
      ],
      illustrations: [
        { brief: 'A flowchart: initial impression, then whole-text re-reading changes it', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Record your first impression' }, { text: 'Analyse the whole text' }, { text: 'Compare — how did it change?' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE02-q1', type: 'mcq', prompt: 'A "personal response" to a text means…', options: ['Your own reaction, informed by analysis of the whole text', 'Copying a critic\'s words exactly', 'Ignoring the text entirely'], answer: 'Your own reaction, informed by analysis of the whole text', difficulty: 1 },
        { id: 'Y9-ENG-LE02-q2', type: 'mcq', prompt: 'Comparing initial impressions with later analysis mainly helps a reader…', options: ['See how the whole text re-shapes early reactions', 'Forget the beginning', 'Read only the ending'], answer: 'See how the whole text re-shapes early reactions', difficulty: 2 },
        { id: 'Y9-ENG-LE02-q3', type: 'mcq', prompt: 'A character you judge harshly early on may be reframed by…', options: ['Information revealed later in the text', 'The book\'s cover', 'The page count'], answer: 'Information revealed later in the text', difficulty: 2 },
        { id: 'Y9-ENG-LE02-q4', type: 'mcq', prompt: 'The strongest personal responses are usually built on…', options: ['Evidence from the whole text, not just the first pages', 'Only the first sentence', 'No reading at all'], answer: 'Evidence from the whole text, not just the first pages', difficulty: 2 },
        { id: 'Y9-ENG-LE02-q5', type: 'mcq', prompt: 'An ending that re-reads the beginning is an example of…', options: ['The whole text reshaping meaning', 'A printing error', 'A page-numbering issue'], answer: 'The whole text reshaping meaning', difficulty: 2 },
        { id: 'Y9-ENG-LE02-q6', type: 'mcq', prompt: 'A thoughtful personal response is most valuable when it…', options: ['Traces how your view developed across the text', 'Restates the blurb word for word', 'Avoids any evidence'], answer: 'Traces how your view developed across the text', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LE03',
    title: 'Why readers prefer certain texts',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Readers do not all prefer the same books, and the reasons are built into the texts — a fast-paced plot, a striking voice, ideas that challenge us, or characters we feel for. Different features appeal to different readers.',
        'Analysing what makes a text appealing means separating the features themselves (structure, style, ideas) from your personal taste, and explaining how the features create the appeal.',
      ],
      illustrations: [
        { brief: 'A bar-compare of text features that drive reader preference', ready: true, diagram: { kind: 'bar-compare', unit: '/10 appeal', items: [{ label: 'Plot', value: 8 }, { label: 'Voice', value: 6 }, { label: 'Ideas', value: 5 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE03-q1', type: 'mcq', prompt: 'A reader\'s preference for a text can be driven by…', options: ['Features like plot, voice and ideas', 'Only the number of pages', 'The book\'s weight'], answer: 'Features like plot, voice and ideas', difficulty: 1 },
        { id: 'Y9-ENG-LE03-q2', type: 'mcq', prompt: 'Analysing appeal mainly involves separating…', options: ['The text\'s features from your personal taste', 'The cover from the spine', 'Chapter numbers from pages'], answer: "The text's features from your personal taste", difficulty: 2 },
        { id: 'Y9-ENG-LE03-q3', type: 'mcq', prompt: 'A reader who loves fast pacing is responding mainly to the text\'s…', options: ['Structure and plot development', 'Font choice', 'Publisher'], answer: 'Structure and plot development', difficulty: 2 },
        { id: 'Y9-ENG-LE03-q4', type: 'mcq', prompt: 'Two readers preferring different novels on the same theme suggests…', options: ['Features appeal differently to different readers', 'One book is objectively unreadable', 'The texts are identical'], answer: 'Features appeal differently to different readers', difficulty: 2 },
        { id: 'Y9-ENG-LE03-q5', type: 'mcq', prompt: 'A striking narrative voice can make a text appealing because it…', options: ['Feels distinct and engaging to read', 'Shortens every chapter', 'Removes the plot'], answer: 'Feels distinct and engaging to read', difficulty: 2 },
        { id: 'Y9-ENG-LE03-q6', type: 'mcq', prompt: 'Explaining why you prefer one text over another is strongest when you…', options: ['Point to specific features that create the appeal', 'Just say "it\'s better" with no detail', 'Refuse to compare at all'], answer: 'Point to specific features that create the appeal', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LE04',
    title: 'Aesthetic qualities & author style',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Aesthetic qualities are the artistic properties of a text — how its language, rhythm and imagery combine to feel striking, beautiful, unsettling or powerful. Evaluating them means judging not just whether a text works, but how its style creates that effect.',
        'An author\'s style is the fingerprint of their aesthetic choices: the sentence rhythms, favoured imagery and recurring tones that make their writing recognisable, and appealing, in a particular way.',
      ],
      illustrations: [
        { brief: 'A ladder of aesthetic appreciation: plain, skilful, striking', ready: true, diagram: { kind: 'metric-ladder', units: ['Plain', 'Skilful', 'Striking'], highlight: 2 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE04-q1', type: 'mcq', prompt: '"Aesthetic qualities" in a text refers to…', options: ['Its artistic properties of style and effect', 'Its page count', 'Its price'], answer: 'Its artistic properties of style and effect', difficulty: 1 },
        { id: 'Y9-ENG-LE04-q2', type: 'mcq', prompt: 'Evaluating aesthetic qualities means judging…', options: ['How the style creates an effect, not just if it works', 'Only the number of chapters', 'The book\'s cover colour'], answer: 'How the style creates an effect, not just if it works', difficulty: 2 },
        { id: 'Y9-ENG-LE04-q3', type: 'mcq', prompt: 'An author\'s "style" is best described as…', options: ['The recognisable pattern of their aesthetic choices', 'The publisher\'s logo', 'The page numbering'], answer: 'The recognisable pattern of their aesthetic choices', difficulty: 2 },
        { id: 'Y9-ENG-LE04-q4', type: 'mcq', prompt: 'A text described as "striking" is being praised for its…', options: ['Aesthetic impact', 'Font size', 'Spelling errors'], answer: 'Aesthetic impact', difficulty: 1 },
        { id: 'Y9-ENG-LE04-q5', type: 'mcq', prompt: 'Recurring imagery across an author\'s work is evidence of…', options: ['A consistent, recognisable style', 'Random accidents only', 'A lack of skill'], answer: 'A consistent, recognisable style', difficulty: 2 },
        { id: 'Y9-ENG-LE04-q6', type: 'mcq', prompt: 'A strong evaluation of an author\'s style would cite…', options: ['Specific language choices and their effects', 'Only the book\'s sales figures', 'The author\'s home address'], answer: 'Specific language choices and their effects', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LE05',
    title: 'Extended metaphor, allegory & intertextuality',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Beyond a single image, literary devices can run through a whole text. An extended metaphor develops one comparison again and again; metonymy lets one part stand for the whole ("the crown" for the monarchy); allegory builds an entire story that maps onto a second meaning.',
        'Intertextual references tie a text to earlier texts — a modern poem echoing a myth, a film nodding to a classic novel. Analysing these devices means asking how each one deepens meaning beyond the literal story.',
      ],
      illustrations: [
        { brief: 'An allegory shown as two overlapping layers: literal story and hidden meaning', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Literal story' }, { icon: 'link', label: 'Intertextual echo' }, { icon: 'mirror', label: 'Hidden meaning' }], caption: 'One text, layered meanings' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE05-q1', type: 'mcq', prompt: '"The crown" used to mean the monarchy is an example of…', options: ['Metonymy', 'Alliteration', 'A comma'], answer: 'Metonymy', difficulty: 2 },
        { id: 'Y9-ENG-LE05-q2', type: 'mcq', prompt: 'An allegory is a story that…', options: ['Maps onto a second, hidden meaning', 'Has no plot at all', 'Only describes weather'], answer: 'Maps onto a second, hidden meaning', difficulty: 1 },
        { id: 'Y9-ENG-LE05-q3', type: 'mcq', prompt: 'An extended metaphor differs from a one-line metaphor because it…', options: ['Keeps developing the comparison across the text', 'Only appears once', 'Always rhymes'], answer: 'Keeps developing the comparison across the text', difficulty: 2 },
        { id: 'Y9-ENG-LE05-q4', type: 'mcq', prompt: 'An intertextual reference is when a text…', options: ['Connects to another known text to add meaning', 'Avoids all other texts', 'Only quotes the dictionary'], answer: 'Connects to another known text to add meaning', difficulty: 1 },
        { id: 'Y9-ENG-LE05-q5', type: 'mcq', prompt: 'Symbolism uses a concrete object to…', options: ['Represent an abstract idea', 'End the story', 'Replace the narrator'], answer: 'Represent an abstract idea', difficulty: 1 },
        { id: 'Y9-ENG-LE05-q6', type: 'mcq', prompt: 'Analysing these layered devices mainly helps a reader…', options: ['Uncover meanings beyond the literal story', 'Count the pages faster', 'Ignore the plot'], answer: 'Uncover meanings beyond the literal story', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LE06',
    title: 'Creating hybrid literary texts',
    year: '9',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E9LE06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'A hybrid literary text mixes conventions from more than one form — a narrative told partly as a screenplay, a poem embedded inside a short story, a novel that slides into journalism. The blend is deliberate, not accidental.',
        'Creating your own hybrid means choosing which conventions to borrow and why: each borrowed structure carries its own effects, and editing is where you test whether the mix actually works for your purpose and audience.',
      ],
      illustrations: [
        { brief: 'A flowchart: choose forms to blend, then edit the hybrid for effect', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Choose forms to blend' }, { text: 'Draft the hybrid text' }, { text: 'Test & edit the mix' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LE06-q1', type: 'mcq', prompt: 'A hybrid literary text is one that…', options: ['Blends conventions from more than one form', 'Uses only one fixed structure', 'Avoids all structure'], answer: 'Blends conventions from more than one form', difficulty: 1 },
        { id: 'Y9-ENG-LE06-q2', type: 'mcq', prompt: 'A narrative told partly as a screenplay borrows from…', options: ['Both prose fiction and drama', 'Only mathematics', 'No other form'], answer: 'Both prose fiction and drama', difficulty: 2 },
        { id: 'Y9-ENG-LE06-q3', type: 'mcq', prompt: 'Choosing which conventions to blend should depend on…', options: ['Your purpose and audience', 'Random chance only', 'The longest option always'], answer: 'Your purpose and audience', difficulty: 2 },
        { id: 'Y9-ENG-LE06-q4', type: 'mcq', prompt: 'Editing a hybrid text mainly involves…', options: ['Testing whether the blend works for the reader', 'Removing all structure', 'Avoiding revision entirely'], answer: 'Testing whether the blend works for the reader', difficulty: 2 },
        { id: 'Y9-ENG-LE06-q5', type: 'mcq', prompt: 'Each convention you borrow from another form carries…', options: ['Its own expected effects and associations', 'No meaning at all', 'Only formatting rules'], answer: 'Its own expected effects and associations', difficulty: 2 },
        { id: 'Y9-ENG-LE06-q6', type: 'mcq', prompt: 'A hybrid that blends forms unsuccessfully is usually one where…', options: ['The borrowed conventions fight rather than support each other', 'Every form is used perfectly equally', 'The text is too short'], answer: 'The borrowed conventions fight rather than support each other', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (8 CDs) ----------
  {
    id: 'Y9-ENG-LY01',
    title: 'How representations reflect contexts',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every representation of a person, place, event or concept carries traces of where it was made — the era\'s values, the outlet\'s agenda, the audience it targets. A public figure can be represented very differently in different media and different moments.',
        'Analysing this means connecting what a text shows with the context that shaped it: who made it, for whom, and what they wanted the viewer or reader to conclude.',
      ],
      illustrations: [
        { brief: 'The same figure represented in three different media contexts, compared', ready: true, diagram: { kind: 'bar-compare', unit: '/10 bias', items: [{ label: 'News', value: 4 }, { label: 'Satire', value: 7 }, { label: 'Advert', value: 8 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY01-q1', type: 'mcq', prompt: 'Representations reflect their context because they are shaped by…', options: ['The values, era and purpose they were made in', 'Nothing at all', 'Only the alphabet'], answer: 'The values, era and purpose they were made in', difficulty: 1 },
        { id: 'Y9-ENG-LY01-q2', type: 'mcq', prompt: 'The same public figure can be represented differently across media because…', options: ['Each outlet\'s context and agenda shapes the portrayal', 'All media are identical', 'People never change'], answer: "Each outlet's context and agenda shapes the portrayal", difficulty: 2 },
        { id: 'Y9-ENG-LY01-q3', type: 'mcq', prompt: 'Analysing a representation in context means asking…', options: ['Who made this, for whom, and with what goal?', 'What font is used?', 'How many words are in it?'], answer: 'Who made this, for whom, and with what goal?', difficulty: 2 },
        { id: 'Y9-ENG-LY01-q4', type: 'mcq', prompt: 'A representation from a different era may seem outdated because…', options: ['The values of its context differ from ours', 'It was made by aliens', 'Time changes nothing'], answer: 'The values of its context differ from ours', difficulty: 2 },
        { id: 'Y9-ENG-LY01-q5', type: 'mcq', prompt: 'Recognising that representations reflect context helps a viewer…', options: ['Read media critically rather than take it at face value', 'Trust every representation completely', 'Ignore all media'], answer: 'Read media critically rather than take it at face value', difficulty: 2 },
        { id: 'Y9-ENG-LY01-q6', type: 'mcq', prompt: 'A news report\'s choice of images and framing is part of its…', options: ['Representation shaped by editorial context', 'Page numbering system', 'Spelling rules'], answer: 'Representation shaped by editorial context', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY02',
    title: 'Listening critically to spoken texts',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Spoken texts position their listeners — a podcast narrator\'s tone, a politician\'s repetition, a comedian\'s timing all steer how you respond before you even decide what you think.',
        'Critical listening means analysing how the language features of a spoken text work on you, then using interaction skills to discuss and defend your own opinion of it rather than absorbing it passively.',
      ],
      illustrations: [
        { brief: 'A speaker positioning listeners, then listeners pushing back critically', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'speaker', label: 'Spoken text' }, { icon: 'eye', label: 'Analyse its effects' }, { icon: 'people', label: 'Discuss & respond' }], caption: 'Listen, analyse, then respond' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY02-q1', type: 'mcq', prompt: 'A spoken text can "position" listeners by…', options: ['Steering their response through tone and language', 'Printing the words', 'Numbering the pages'], answer: 'Steering their response through tone and language', difficulty: 1 },
        { id: 'Y9-ENG-LY02-q2', type: 'mcq', prompt: 'Critical listening mainly means…', options: ['Analysing how the text works on you before accepting it', 'Believing everything instantly', 'Covering your ears'], answer: 'Analysing how the text works on you before accepting it', difficulty: 2 },
        { id: 'Y9-ENG-LY02-q3', type: 'mcq', prompt: 'A politician repeating a key phrase is using language features to…', options: ['Drum the message into the audience', 'Make the speech shorter', 'Remove persuasion entirely'], answer: 'Drum the message into the audience', difficulty: 2 },
        { id: 'Y9-ENG-LY02-q4', type: 'mcq', prompt: 'Interaction skills in a discussion of a spoken text include…', options: ['Presenting and defending your own opinion', 'Never speaking at all', 'Ignoring what others say'], answer: 'Presenting and defending your own opinion', difficulty: 2 },
        { id: 'Y9-ENG-LY02-q5', type: 'mcq', prompt: 'Analysing a podcast\'s tone before judging its argument is important because…', options: ['Tone can steer agreement or doubt without any facts', 'Tone is irrelevant to persuasion', 'Podcasts have no tone'], answer: 'Tone can steer agreement or doubt without any facts', difficulty: 2 },
        { id: 'Y9-ENG-LY02-q6', type: 'mcq', prompt: 'The most critically engaged response to a persuasive speech is to…', options: ['Evaluate its techniques and form your own opinion', 'Applaud immediately', 'Repeat it word for word'], answer: 'Evaluate its techniques and form your own opinion', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY03',
    title: 'Language features representing a perspective',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A perspective on an issue, event, situation, individual or group is built from language choices — which facts are emphasised, which words are loaded, who gets named and who stays anonymous.',
        'Analysing a perspective means evaluating how the language features work together: a report that keeps calling a protest a "riot" is not just describing, it is representing through a particular lens.',
      ],
      illustrations: [
        { brief: 'A balance scale weighing neutral reporting against a loaded perspective', ready: true, diagram: { kind: 'balance-scale', left: '"A gathering took place."', right: '"An angry mob rallied."', balanced: false } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY03-q1', type: 'mcq', prompt: 'A perspective on an event is built mainly through…', options: ['Language choices like emphasis and word loading', 'The number of paragraphs', 'The paper\'s size'], answer: 'Language choices like emphasis and word loading', difficulty: 1 },
        { id: 'Y9-ENG-LY03-q2', type: 'mcq', prompt: 'Calling a protest a "riot" versus a "gathering" changes the…', options: ['Perspective represented', 'Alphabet order', 'Page count'], answer: 'Perspective represented', difficulty: 2 },
        { id: 'Y9-ENG-LY03-q3', type: 'mcq', prompt: 'A text that names some people and keeps others anonymous is making a…', options: ['Representational choice about who matters', 'Spelling error', 'Random accident'], answer: 'Representational choice about who matters', difficulty: 2 },
        { id: 'Y9-ENG-LY03-q4', type: 'mcq', prompt: 'Analysing a perspective means evaluating…', options: ['How language features combine to push one view', 'Only the headline font', 'The reading time'], answer: 'How language features combine to push one view', difficulty: 2 },
        { id: 'Y9-ENG-LY03-q5', type: 'mcq', prompt: 'Emphasising some facts and downplaying others is a technique for…', options: ['Representing a particular perspective', 'Staying perfectly neutral', 'Removing all opinion'], answer: 'Representing a particular perspective', difficulty: 2 },
        { id: 'Y9-ENG-LY03-q6', type: 'mcq', prompt: 'A "neutral" representation of a contested event is…', options: ['Practically impossible — every choice reflects some perspective', 'The only correct option', 'Easy to produce'], answer: 'Practically impossible — every choice reflects some perspective', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY04',
    title: 'Organising ideas across paragraphs',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A paragraph is a unit of thought: it opens with a contention, develops it with evidence and explanation, and links to the next idea. In extended texts, the order of whole paragraphs is itself an argument.',
        'Analysing the organisation of ideas means evaluating how paragraph order and internal structure shape meaning — why did the author build this point before that one, and what effect does that ordering have on the reader?',
      ],
      illustrations: [
        { brief: 'A paragraph building block: contention, evidence, explanation, link', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Contention (main idea)' }, { text: 'Evidence & explanation' }, { text: 'Link to next paragraph' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY04-q1', type: 'mcq', prompt: 'A strong paragraph typically opens with…', options: ['Its main contention or idea', 'A random unrelated fact', 'The conclusion'], answer: 'Its main contention or idea', difficulty: 1 },
        { id: 'Y9-ENG-LY04-q2', type: 'mcq', prompt: 'In an extended text, the order of paragraphs usually…', options: ['Builds an argument or line of reasoning', 'Is completely meaningless', 'Only affects spelling'], answer: 'Builds an argument or line of reasoning', difficulty: 2 },
        { id: 'Y9-ENG-LY04-q3', type: 'mcq', prompt: 'Analysing paragraph organisation means evaluating…', options: ['How order and structure shape meaning', 'Only the paragraph\'s length', 'The margin size'], answer: 'How order and structure shape meaning', difficulty: 2 },
        { id: 'Y9-ENG-LY04-q4', type: 'mcq', prompt: 'A paragraph that develops a point with evidence and explanation is…', options: ['Substantiating its contention', 'Ending the text', 'Changing the topic randomly'], answer: 'Substantiating its contention', difficulty: 2 },
        { id: 'Y9-ENG-LY04-q5', type: 'mcq', prompt: 'A text whose paragraphs could be reordered without changing meaning likely lacks…', options: ['A strong line of argument', 'Long words', 'Page numbers'], answer: 'A strong line of argument', difficulty: 2 },
        { id: 'Y9-ENG-LY04-q6', type: 'mcq', prompt: 'The link between paragraphs mainly helps the reader…', options: ['Follow how one idea develops into the next', 'Skip to the end', 'Count the words'], answer: 'Follow how one idea develops into the next', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY05',
    title: 'Comparing & contrasting across texts',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Comprehension strategies (visualising, predicting, connecting, summarising, monitoring, questioning, inferring) become even more powerful when applied across texts — comparing and contrasting what different sources claim and how they argue.',
        'Synthesising across texts means noticing agreement and conflict between sources, then building a position that accounts for both rather than simply picking one side.',
      ],
      illustrations: [
        { brief: 'Two source icons feeding into a comparison, with agreement and conflict labelled', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Text A' }, { icon: 'newspaper', label: 'Text B' }, { icon: 'brain', label: 'Compare & contrast' }], caption: 'Build meaning across sources' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY05-q1', type: 'mcq', prompt: 'Applying comprehension strategies across texts mainly involves…', options: ['Comparing and contrasting ideas and opinions between texts', 'Reading only one text', 'Ignoring all sources'], answer: 'Comparing and contrasting ideas and opinions between texts', difficulty: 1 },
        { id: 'Y9-ENG-LY05-q2', type: 'mcq', prompt: 'When two sources disagree, a critical reader should…', options: ['Notice the conflict and try to account for it', 'Assume both are automatically false', 'Pick one without reading the other'], answer: 'Notice the conflict and try to account for it', difficulty: 2 },
        { id: 'Y9-ENG-LY05-q3', type: 'mcq', prompt: 'A strong synthesis between texts builds a position that…', options: ['Accounts for agreement and conflict together', 'Ignores everything', 'Copies one source word for word'], answer: 'Accounts for agreement and conflict together', difficulty: 2 },
        { id: 'Y9-ENG-LY05-q4', type: 'mcq', prompt: 'Inferring while reading across texts means…', options: ['Working out implied meaning from the evidence given', 'Memorising the font', 'Counting words'], answer: 'Working out implied meaning from the evidence given', difficulty: 2 },
        { id: 'Y9-ENG-LY05-q5', type: 'mcq', prompt: 'Questioning a source while reading is valuable because it…', options: ['Keeps you critically engaged with its claims', 'Makes you stop reading forever', 'Removes the need to think'], answer: 'Keeps you critically engaged with its claims', difficulty: 2 },
        { id: 'Y9-ENG-LY05-q6', type: 'mcq', prompt: 'Comparing how two texts represent the same issue mainly reveals…', options: ['Different perspectives and choices worth analysing', 'That both are identical', 'Nothing meaningful'], answer: 'Different perspectives and choices worth analysing', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY06',
    title: 'Planning, creating, editing & publishing for purpose',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Creating a text in Year 9 means selecting everything for a purpose and audience — organising and expanding your ideas, then choosing text structures, language features, literary devices and multimodal features that fit.',
        'Editing and publishing turn the draft into the finished piece: checking that every choice still serves the purpose, tightening what wandered, and preparing the text for the audience who will actually receive it.',
      ],
      illustrations: [
        { brief: 'A creation flowchart: plan, draft with purpose, edit, publish', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan & expand ideas' }, { text: 'Draft with purpose & audience' }, { text: 'Edit for effect' }, { text: 'Publish' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY06-q1', type: 'mcq', prompt: 'Selecting text structures and language features should be driven by…', options: ['The purpose and audience of the text', 'Random chance', 'The word count only'], answer: 'The purpose and audience of the text', difficulty: 1 },
        { id: 'Y9-ENG-LY06-q2', type: 'mcq', prompt: 'Organising and expanding ideas happens mainly during…', options: ['Planning and drafting', 'Publishing only', 'Never'], answer: 'Planning and drafting', difficulty: 1 },
        { id: 'Y9-ENG-LY06-q3', type: 'mcq', prompt: 'Editing a draft mainly involves checking that…', options: ['Every choice still serves the text\'s purpose', 'The font is unusual', 'The text is as long as possible'], answer: "Every choice still serves the text's purpose", difficulty: 2 },
        { id: 'Y9-ENG-LY06-q4', type: 'mcq', prompt: 'A "literary device" a writer might select for effect is…', options: ['A metaphor', 'A page number', 'A margin'], answer: 'A metaphor', difficulty: 1 },
        { id: 'Y9-ENG-LY06-q5', type: 'mcq', prompt: 'Publishing is the stage where a writer…', options: ['Prepares the finished text for its real audience', 'First brainstorms ideas', 'Chooses a topic'], answer: 'Prepares the finished text for its real audience', difficulty: 2 },
        { id: 'Y9-ENG-LY06-q6', type: 'mcq', prompt: 'A text may be imaginative, reflective, informative, persuasive, analytical and/or critical — the mix chosen depends on…', options: ['The purpose the writer is trying to achieve', 'The font size', 'The page count'], answer: 'The purpose the writer is trying to achieve', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY07',
    title: 'Spoken & multimodal presentations for effect',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A presentation is a performance of ideas — you plan, create, rehearse and deliver, using language features, literary devices and voice (volume, tone, pitch and pace) to shape how the audience receives each point.',
        'In a multimodal presentation, slides and visuals work with your voice rather than against it. Rehearsing aloud is the only way to discover how the whole package lands together.',
      ],
      illustrations: [
        { brief: 'A rehearsal cycle: plan, rehearse aloud, refine, deliver', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan for purpose & audience' }, { text: 'Rehearse aloud' }, { text: 'Refine delivery' }, { text: 'Deliver' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY07-q1', type: 'mcq', prompt: 'Voice features in a presentation include…', options: ['Volume, tone, pitch and pace', 'Font choice only', 'Page numbering'], answer: 'Volume, tone, pitch and pace', difficulty: 1 },
        { id: 'Y9-ENG-LY07-q2', type: 'mcq', prompt: 'Pausing before a key point in a presentation mainly…', options: ['Gives it emphasis and lets it land', 'Confuses the audience', 'Ends the talk'], answer: 'Gives it emphasis and lets it land', difficulty: 2 },
        { id: 'Y9-ENG-LY07-q3', type: 'mcq', prompt: 'A multimodal presentation combines speech with…', options: ['Visual or digital features that support the message', 'Nothing else', 'Only silence'], answer: 'Visual or digital features that support the message', difficulty: 1 },
        { id: 'Y9-ENG-LY07-q4', type: 'mcq', prompt: 'Rehearsing aloud before delivering mainly helps a speaker…', options: ['Discover how the whole package lands together', 'Avoid preparing', 'Memorise the audience\'s names'], answer: "Discover how the whole package lands together", difficulty: 2 },
        { id: 'Y9-ENG-LY07-q5', type: 'mcq', prompt: 'Slides that repeat everything the speaker says word for word tend to…', options: ['Split the audience\'s attention', 'Always improve the talk', 'Replace the need to speak'], answer: "Split the audience's attention", difficulty: 2 },
        { id: 'Y9-ENG-LY07-q6', type: 'mcq', prompt: 'Selecting a literary device (like a rhetorical question) for a presentation is strongest when it…', options: ['Serves the purpose and engages the audience', 'Is used because it sounds fancy', 'Has no connection to the topic'], answer: 'Serves the purpose and engages the audience', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-ENG-LY08',
    title: 'Spelling for particular effects',
    year: '9',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E9LY08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Spelling is not just about being correct — writers manipulate it on purpose. A story might spell a character\'s accent phonetically ("nah, yer right, mate") to bring their voice to life, or respell words for humour or emphasis.',
        'Analysing spelling for effect means spotting when a deviation from standard spelling is a deliberate craft choice that carries meaning, rather than an error that needs fixing.',
      ],
      illustrations: [
        { brief: 'A dialogue scene with deliberately respelled words to capture accent', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'chat-bubble', label: '"gonna", "wanna"' }, { icon: 'smiley', label: 'Humour' }, { icon: 'people', label: 'Accent & voice' }], caption: 'Respellings that create character' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-ENG-LY08-q1', type: 'mcq', prompt: 'A writer spelling "you" as "ya" in dialogue mainly aims to…', options: ['Represent a character\'s accent or voice', 'Make a spelling mistake', 'Fill the page'], answer: "Represent a character's accent or voice", difficulty: 1 },
        { id: 'Y9-ENG-LY08-q2', type: 'mcq', prompt: 'Deliberate misspelling can be used for…', options: ['Characterisation, humour or emphasis', 'Only official documents', 'Nothing at all'], answer: 'Characterisation, humour or emphasis', difficulty: 2 },
        { id: 'Y9-ENG-LY08-q3', type: 'mcq', prompt: 'Phonetic respelling ("gonna", "wanna") in dialogue is a technique for…', options: ['Capturing how speech actually sounds', 'Winning a spelling test', 'Lengthening the book'], answer: 'Capturing how speech actually sounds', difficulty: 2 },
        { id: 'Y9-ENG-LY08-q4', type: 'mcq', prompt: 'To analyse a spelling deviation, a reader should ask…', options: ['Is this a deliberate choice carrying meaning?', 'How many letters does it have?', 'What font is it in?'], answer: 'Is this a deliberate choice carrying meaning?', difficulty: 2 },
        { id: 'Y9-ENG-LY08-q5', type: 'mcq', prompt: 'Spelling manipulated for humour often relies on…', options: ['Respellings that echo how words are pronounced', 'Perfect dictionary accuracy', 'Ignoring pronunciation'], answer: 'Respellings that echo how words are pronounced', difficulty: 2 },
        { id: 'Y9-ENG-LY08-q6', type: 'mcq', prompt: 'A phonetic misspelling in a formal report, with no craft purpose, is most likely…', options: ['An error, not an effect', 'A clever literary device', 'Required by law'], answer: 'An error, not an effect', difficulty: 2 },
      ],
    },
  },
];
