import type { Topic } from '../../types/curriculum';

/**
 * Year 8 English — full topic bank.
 * Source of truth for scope: docs/content/year-7-10/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E8xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons — never bulk-copy syllabus text).
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR8_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y8-ENG-LA01',
    title: 'Language, identity & power',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The way someone speaks can signal who they are — their community, generation or background — and it can also be judged unfairly by others who expect only one "correct" way to talk.',
        'Language carries power: whoever controls the "standard" version of a language often controls whose voice gets taken seriously in schools, courts and media.',
      ],
      illustrations: [
        { brief: 'A balance scale weighing "standard" English against a community dialect', ready: true, diagram: { kind: 'balance-scale', left: 'Standard English', right: 'Community dialect', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA01-q1', type: 'mcq', prompt: 'A person\'s way of speaking can signal their…', options: ['Community, generation or background', 'Exact age in years', 'Height'], answer: 'Community, generation or background', difficulty: 1 },
        { id: 'Y8-ENG-LA01-q2', type: 'mcq', prompt: 'Judging a non-standard dialect as "incorrect" English reflects…', options: ['A social bias, not a linguistic fact', 'An objective grammar rule', 'A spelling error'], answer: 'A social bias, not a linguistic fact', difficulty: 2 },
        { id: 'Y8-ENG-LA01-q3', type: 'mcq', prompt: 'The idea that language carries "power" means…', options: ['Some varieties are treated as more prestigious or credible', 'All varieties are always treated identically', 'Language has no social effect'], answer: 'Some varieties are treated as more prestigious or credible', difficulty: 2 },
        { id: 'Y8-ENG-LA01-q4', type: 'mcq', prompt: 'A "standard" form of a language is best understood as…', options: ['One socially favoured variety among many valid ones', 'The only correct form of the language', 'A form with no history'], answer: 'One socially favoured variety among many valid ones', difficulty: 2 },
        { id: 'Y8-ENG-LA01-q5', type: 'mcq', prompt: 'Codeswitching between a home dialect and standard English at school shows…', options: ['Flexible control over language for context', 'A grammar mistake', 'Confusion about language'], answer: 'Flexible control over language for context', difficulty: 2 },
        { id: 'Y8-ENG-LA01-q6', type: 'mcq', prompt: 'Studying language and identity helps readers understand…', options: ['Why speech can be judged unfairly', 'Nothing about society', 'Only spelling rules'], answer: 'Why speech can be judged unfairly', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA02',
    title: 'Rhetorical devices',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Rhetorical devices are persuasion tools: repetition drums an idea into memory, the rule of three makes a list feel complete ("blood, sweat and tears"), and rhetorical questions make an audience answer silently in their own head.',
        'Recognising these devices in speeches and ads means you can enjoy their craft while staying alert to how they are steering you.',
      ],
      illustrations: [
        { brief: 'Three rhetorical devices shown with a famous-style example each', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'burst', label: 'Repetition' }, { icon: 'trophy', label: 'Rule of three' }, { icon: 'magnifier', label: 'Rhetorical question' }], caption: 'Tools of persuasion' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA02-q1', type: 'mcq', prompt: '"Blood, sweat and tears" is an example of…', options: ['The rule of three', 'A rhetorical question', 'Onomatopoeia'], answer: 'The rule of three', difficulty: 1 },
        { id: 'Y8-ENG-LA02-q2', type: 'mcq', prompt: 'A rhetorical question is designed to…', options: ['Prompt the audience to silently agree', 'Demand a written answer', 'Confuse the listener'], answer: 'Prompt the audience to silently agree', difficulty: 1 },
        { id: 'Y8-ENG-LA02-q3', type: 'mcq', prompt: 'Repeating a key phrase across a speech mainly aims to…', options: ['Drum the idea into the audience\'s memory', 'Fill time with no purpose', 'Confuse the listener'], answer: 'Drum the idea into the audience\'s memory', difficulty: 2 },
        { id: 'Y8-ENG-LA02-q4', type: 'mcq', prompt: 'Recognising rhetorical devices in an advertisement mainly helps a viewer…', options: ['Stay alert to how they are being persuaded', 'Automatically dislike the ad', 'Ignore the ad entirely'], answer: 'Stay alert to how they are being persuaded', difficulty: 2 },
        { id: 'Y8-ENG-LA02-q5', type: 'mcq', prompt: 'The rule of three makes a list feel…', options: ['Complete and satisfying', 'Incomplete', 'Confusing'], answer: 'Complete and satisfying', difficulty: 2 },
        { id: 'Y8-ENG-LA02-q6', type: 'short', prompt: 'Name the rhetorical device where a question is asked without expecting a spoken answer.', answer: 'rhetorical question', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA03',
    title: 'Text structures adapted for purpose',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Writers bend familiar structures to fit new purposes — a "listicle" borrows a report\'s ordered format but adds personality and humour; a podcast script borrows narrative stages but is built to be heard, not seen.',
        'Every adaptation is a trade-off: gaining engagement or accessibility might mean losing some formal precision.',
      ],
      illustrations: [
        { brief: 'A flowchart showing a report structure adapted into a listicle', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Traditional report structure' }, { text: 'Adapt: add numbering, humour, images' }, { text: 'New hybrid form: the listicle' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA03-q1', type: 'mcq', prompt: 'A "listicle" adapts which traditional structure?', options: ['A report', 'A sonnet', 'A recipe only'], answer: 'A report', difficulty: 1 },
        { id: 'Y8-ENG-LA03-q2', type: 'mcq', prompt: 'A podcast script is built to be…', options: ['Heard, not seen', 'Read silently only', 'Ignored entirely'], answer: 'Heard, not seen', difficulty: 1 },
        { id: 'Y8-ENG-LA03-q3', type: 'mcq', prompt: 'Adapting a formal structure for a casual audience often trades…', options: ['Some formal precision for greater engagement', 'Nothing at all', 'Meaning for length only'], answer: 'Some formal precision for greater engagement', difficulty: 2 },
        { id: 'Y8-ENG-LA03-q4', type: 'mcq', prompt: 'A hybrid text structure combines features from…', options: ['More than one traditional text type', 'Only one fixed type, unchanged', 'No recognisable structure'], answer: 'More than one traditional text type', difficulty: 2 },
        { id: 'Y8-ENG-LA03-q5', type: 'mcq', prompt: 'Analysing why a writer adapted a structure means asking…', options: ['What purpose and audience shaped this choice?', 'What font was used?', 'How many pages are there?'], answer: 'What purpose and audience shaped this choice?', difficulty: 2 },
        { id: 'Y8-ENG-LA03-q6', type: 'mcq', prompt: 'A numbered "top 10" article borrowing report-style organisation but adding jokes is an example of…', options: ['Structural adaptation', 'A completely new invention with no precedent', 'A grammar error'], answer: 'Structural adaptation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA04',
    title: 'Cohesion — linking paragraphs & nominalisation',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Beyond single sentences, whole paragraphs need linking — a strong opening sentence in paragraph two can echo the last idea of paragraph one, keeping the whole essay feeling like one connected argument.',
        'Nominalisation turns a verb into a noun ("the city expanded" becomes "the expansion of the city"), letting writers refer back to a whole idea in just a few words — useful for dense, cohesive academic writing.',
      ],
      illustrations: [
        { brief: 'A chain linking paragraph endings to the next paragraph\'s opening idea', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Paragraph 1 ends: "...caused rapid growth."' }, { text: 'Paragraph 2 opens: "This expansion..."' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA04-q1', type: 'short', prompt: 'Turn the verb "expanded" into its nominalised (noun) form.', answer: 'expansion', difficulty: 2 },
        { id: 'Y8-ENG-LA04-q2', type: 'mcq', prompt: 'Nominalisation converts a…', options: ['Verb into a noun', 'Noun into a verb', 'Adjective into a pronoun'], answer: 'Verb into a noun', difficulty: 1 },
        { id: 'Y8-ENG-LA04-q3', type: 'mcq', prompt: 'Opening paragraph two by echoing the last idea of paragraph one mainly builds…', options: ['Cohesion across the whole text', 'A grammar error', 'A new unrelated topic'], answer: 'Cohesion across the whole text', difficulty: 2 },
        { id: 'Y8-ENG-LA04-q4', type: 'mcq', prompt: '"The expansion of the city caused traffic problems" uses nominalisation to…', options: ['Refer back to a whole idea concisely', 'Avoid using any nouns', 'Make the sentence longer with no benefit'], answer: 'Refer back to a whole idea concisely', difficulty: 2 },
        { id: 'Y8-ENG-LA04-q5', type: 'mcq', prompt: 'Nominalisation is especially common in…', options: ['Dense, formal academic writing', 'Casual text messages only', 'Nursery rhymes exclusively'], answer: 'Dense, formal academic writing', difficulty: 2 },
        { id: 'Y8-ENG-LA04-q6', type: 'mcq', prompt: 'Linking paragraphs across a whole essay mainly helps the reader…', options: ['Follow one connected argument', 'Forget the topic', 'Notice unrelated ideas'], answer: 'Follow one connected argument', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA05',
    title: 'Complex sentences — embedding for elaboration',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Embedding a clause inside another sentence packs in extra information without starting a new sentence — "The policy, which had been debated for years, finally passed."',
        'Skilled writers stack multiple embedded and subordinate clauses to build genuinely complex, information-dense sentences — but overdo it and clarity suffers, so balance is key.',
      ],
      illustrations: [
        { brief: 'A sentence with a nested embedded clause shown as a box within a box', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: 'Main clause' }, { icon: 'box', label: 'Embedded clause inside' }], caption: 'Clauses nested for elaboration' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA05-q1', type: 'mcq', prompt: 'In "The policy, which had been debated for years, finally passed," the embedded clause is…', options: ['which had been debated for years', 'The policy', 'finally passed'], answer: 'which had been debated for years', difficulty: 1 },
        { id: 'Y8-ENG-LA05-q2', type: 'mcq', prompt: 'Embedding a clause inside a sentence mainly allows a writer to…', options: ['Add extra information without starting a new sentence', 'Avoid using commas ever', 'Shorten the sentence to one word'], answer: 'Add extra information without starting a new sentence', difficulty: 1 },
        { id: 'Y8-ENG-LA05-q3', type: 'mcq', prompt: 'Stacking too many embedded clauses in one sentence risks…', options: ['Reducing clarity for the reader', 'Automatically improving the writing', 'Making punctuation unnecessary'], answer: 'Reducing clarity for the reader', difficulty: 2 },
        { id: 'Y8-ENG-LA05-q4', type: 'mcq', prompt: 'A sentence with a main clause and a subordinate clause is called a…', options: ['Complex sentence', 'Simple sentence', 'Sentence fragment'], answer: 'Complex sentence', difficulty: 1 },
        { id: 'Y8-ENG-LA05-q5', type: 'short', prompt: 'Combine using an embedded clause starting with "who": "The teacher was calm. The teacher had years of experience."', answer: 'The teacher, who had years of experience, was calm.', difficulty: 3 },
        { id: 'Y8-ENG-LA05-q6', type: 'mcq', prompt: 'Balancing sentence complexity with clarity mainly means…', options: ['Using embedding only where it genuinely adds useful detail', 'Embedding as many clauses as physically possible', 'Never using embedded clauses'], answer: 'Using embedding only where it genuinely adds useful detail', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA06',
    title: 'Nominalisation & abstract nouns for tone',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Abstract nouns name ideas rather than things you can touch — "justice", "freedom", "growth". Leaning on abstract nouns and nominalisations gives writing a formal, objective, almost official tone.',
        'Compare "the government decided to reduce spending" (concrete, active) with "the decision to reduce spending" (abstract, nominalised) — the second sounds more like a policy report.',
      ],
      illustrations: [
        { brief: 'A concrete verb sentence rewritten as an abstract nominalised sentence', ready: true, diagram: { kind: 'balance-scale', left: 'decided (verb, concrete)', right: 'decision (noun, abstract)', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA06-q1', type: 'mcq', prompt: 'Which is an abstract noun?', options: ['Freedom', 'Table', 'Dog'], answer: 'Freedom', difficulty: 1 },
        { id: 'Y8-ENG-LA06-q2', type: 'mcq', prompt: 'Using more abstract nouns and nominalisations tends to make a text sound…', options: ['More formal and objective', 'More casual and playful', 'Impossible to read'], answer: 'More formal and objective', difficulty: 2 },
        { id: 'Y8-ENG-LA06-q3', type: 'mcq', prompt: '"The decision to reduce spending" is a nominalised version of…', options: ['"The government decided to reduce spending"', 'A completely unrelated sentence', 'A question'], answer: '"The government decided to reduce spending"', difficulty: 2 },
        { id: 'Y8-ENG-LA06-q4', type: 'mcq', prompt: 'An abstract noun names…', options: ['An idea or quality, not a physical object', 'Only a physical, touchable object', 'A punctuation mark'], answer: 'An idea or quality, not a physical object', difficulty: 1 },
        { id: 'Y8-ENG-LA06-q5', type: 'mcq', prompt: 'A policy report leaning heavily on abstract nouns like "growth" and "development" is aiming for a tone that is…', options: ['Official and formal', 'Playful and childish', 'Angry and emotional'], answer: 'Official and formal', difficulty: 2 },
        { id: 'Y8-ENG-LA06-q6', type: 'short', prompt: 'Turn the verb "grow" into its abstract noun form.', answer: 'growth', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA07',
    title: 'Multimodal texts — visual & audio interplay',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In a film or game, music can contradict the visuals on purpose — cheerful music over a sad scene creates unsettling irony rather than simple sadness.',
        'Analysing multimodal texts means noticing how sound, image and words interact: do they reinforce one message, or create tension between two?',
      ],
      illustrations: [
        { brief: 'A scene where cheerful music plays against a sad image, creating irony', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'music-note', label: 'Cheerful music' }, { icon: 'raincloud', label: 'Sad scene' }], caption: 'Modes can clash on purpose for effect' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA07-q1', type: 'mcq', prompt: 'Cheerful music playing over a sad film scene mainly creates…', options: ['Unsettling irony', 'Simple, matching sadness', 'No effect at all'], answer: 'Unsettling irony', difficulty: 2 },
        { id: 'Y8-ENG-LA07-q2', type: 'mcq', prompt: 'Analysing a multimodal text means noticing how…', options: ['Sound, image and words interact', 'Only the words matter', 'Only the running time matters'], answer: 'Sound, image and words interact', difficulty: 1 },
        { id: 'Y8-ENG-LA07-q3', type: 'mcq', prompt: 'When music and image reinforce the same feeling, the effect on the viewer is usually…', options: ['A clear, unified emotional message', 'Confusion', 'Irony'], answer: 'A clear, unified emotional message', difficulty: 2 },
        { id: 'Y8-ENG-LA07-q4', type: 'mcq', prompt: 'A game\'s sound effects working alongside its visuals is an example of…', options: ['Multiple modes combining for meaning', 'A single, isolated mode', 'A text with no design choices'], answer: 'Multiple modes combining for meaning', difficulty: 1 },
        { id: 'Y8-ENG-LA07-q5', type: 'mcq', prompt: 'Tension created between two modes (e.g. happy music, sad image) is a deliberate technique used to…', options: ['Provoke a more complex emotional response', 'Simplify the scene', 'Remove all meaning'], answer: 'Provoke a more complex emotional response', difficulty: 2 },
        { id: 'Y8-ENG-LA07-q6', type: 'mcq', prompt: 'A key analytical question for multimodal texts is…', options: ['Do the modes reinforce or contradict each other?', 'How long is the running time?', 'What is the file format?'], answer: 'Do the modes reinforce or contradict each other?', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA08',
    title: 'Figurative language & extended symbolism',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA08' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'A single symbol can shift meaning across a text — a caged bird might first suggest sadness, then later transform into a symbol of hope once it is freed.',
        'Tracking how figurative language evolves across a text (not just spotting one device) shows a much deeper understanding of an author\'s craft.',
      ],
      illustrations: [
        { brief: 'A symbol\'s meaning shifting across a story\'s beginning, middle and end', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Caged bird = sadness (beginning)' }, { text: 'Bird struggles (middle)' }, { text: 'Freed bird = hope (end)' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA08-q1', type: 'mcq', prompt: 'A symbol whose meaning changes across a text shows…', options: ['A deliberate evolution of meaning', 'A writing mistake', 'A random accident'], answer: 'A deliberate evolution of meaning', difficulty: 2 },
        { id: 'Y8-ENG-LA08-q2', type: 'mcq', prompt: 'Tracking figurative language across a whole text (not just once) demonstrates…', options: ['Deeper analysis of an author\'s craft', 'A surface-level reading only', 'A lack of understanding'], answer: 'Deeper analysis of an author\'s craft', difficulty: 2 },
        { id: 'Y8-ENG-LA08-q3', type: 'mcq', prompt: 'A caged bird symbol that later becomes a symbol of hope once freed shows…', options: ['Symbolism developing with the plot', 'A printing error', 'An unrelated detail'], answer: 'Symbolism developing with the plot', difficulty: 2 },
        { id: 'Y8-ENG-LA08-q4', type: 'mcq', prompt: 'An extended symbol is most powerful when it…', options: ['Connects meaningfully to the text\'s themes', 'Appears once and is never mentioned again', 'Has no connection to the plot'], answer: 'Connects meaningfully to the text\'s themes', difficulty: 2 },
        { id: 'Y8-ENG-LA08-q5', type: 'mcq', prompt: 'Recognising a recurring symbol across a novel requires a reader to…', options: ['Notice patterns across the whole text', 'Only read the first page', 'Ignore all imagery'], answer: 'Notice patterns across the whole text', difficulty: 2 },
        { id: 'Y8-ENG-LA08-q6', type: 'mcq', prompt: 'An allusion to a well-known myth within a modern story mainly works to…', options: ['Add layered meaning by connecting to a familiar story', 'Confuse the reader for no reason', 'Replace the plot entirely'], answer: 'Add layered meaning by connecting to a familiar story', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LA09',
    title: 'Punctuation in complex sentences',
    year: '8',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E8LA09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Longer, more complex sentences need punctuation to stay readable — commas mark off embedded clauses, semicolons separate related independent clauses in a list, and brackets add an aside without derailing the main sentence.',
        'Punctuation in a complex sentence is a map for the reader\'s breath and attention — get it wrong and the sentence collapses into confusion.',
      ],
      illustrations: [
        { brief: 'A long complex sentence annotated with punctuation roles', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'link', label: 'Commas mark clauses' }, { icon: 'box', label: 'Brackets add an aside' }], caption: 'Punctuation guides the reader through complexity' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LA09-q1', type: 'mcq', prompt: 'Commas around an embedded clause mainly help the reader…', options: ['See where the extra information starts and ends', 'Ignore the clause entirely', 'Add a new sentence'], answer: 'See where the extra information starts and ends', difficulty: 1 },
        { id: 'Y8-ENG-LA09-q2', type: 'mcq', prompt: 'Brackets in a sentence are used to add…', options: ['An aside without derailing the main sentence', 'The sentence\'s main subject', 'A new paragraph'], answer: 'An aside without derailing the main sentence', difficulty: 1 },
        { id: 'Y8-ENG-LA09-q3', type: 'mcq', prompt: 'A semicolon can separate items in a list when the items themselves…', options: ['Already contain commas', 'Are single short words only', 'Never need punctuation'], answer: 'Already contain commas', difficulty: 2 },
        { id: 'Y8-ENG-LA09-q4', type: 'mcq', prompt: 'Incorrect punctuation in a long, complex sentence most often causes…', options: ['Confusion about how ideas relate', 'Improved clarity automatically', 'No effect on meaning'], answer: 'Confusion about how ideas relate', difficulty: 2 },
        { id: 'Y8-ENG-LA09-q5', type: 'mcq', prompt: 'Which sentence uses commas correctly around an embedded clause?', options: ['The bridge, which was built in 1932, is heritage-listed.', 'The bridge which, was built in 1932 is heritage-listed.', 'The bridge, which was built in 1932 is, heritage-listed.'], answer: 'The bridge, which was built in 1932, is heritage-listed.', difficulty: 2 },
        { id: 'Y8-ENG-LA09-q6', type: 'mcq', prompt: 'Punctuation in a complex sentence functions like a…', options: ['Map guiding the reader\'s attention and pauses', 'Decoration with no real function', 'Replacement for all vocabulary'], answer: 'Map guiding the reader\'s attention and pauses', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (5 CDs) ----------
  {
    id: 'Y8-ENG-LE01',
    title: 'Literature reflecting diverse identities',
    year: '8',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E8LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Literature from diverse identities, times and cultures — including First Nations Australian and world authors — expands whose experience gets to be seen as central to a story.',
        'Reading beyond your own background trains you to recognise a perspective different from your own without dismissing it, which is a genuine literacy skill.',
      ],
      illustrations: [
        { brief: 'A bookshelf of diverse authors and perspectives', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'First Nations authors' }, { icon: 'globe', label: 'World authors' }, { icon: 'people', label: 'Diverse identities' }], caption: 'Whose story gets centred?' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LE01-q1', type: 'mcq', prompt: 'Reading literature from diverse identities and cultures mainly expands…', options: ['Whose experience is seen as central to a story', 'The number of pages a book has', 'Nothing meaningful'], answer: 'Whose experience is seen as central to a story', difficulty: 1 },
        { id: 'Y8-ENG-LE01-q2', type: 'mcq', prompt: 'Recognising a perspective different from your own without dismissing it is a…', options: ['Genuine literacy and empathy skill', 'Sign of confusion', 'Grammar rule'], answer: 'Genuine literacy and empathy skill', difficulty: 2 },
        { id: 'Y8-ENG-LE01-q3', type: 'mcq', prompt: 'A novel by a First Nations Australian author can offer readers…', options: ['A distinct cultural and historical perspective', 'An identical experience to every other novel', 'No new perspective at all'], answer: 'A distinct cultural and historical perspective', difficulty: 2 },
        { id: 'Y8-ENG-LE01-q4', type: 'mcq', prompt: 'A text\'s historical context can shape…', options: ['The values, conflicts and choices it represents', 'Only its cover design', 'Nothing about its content'], answer: 'The values, conflicts and choices it represents', difficulty: 2 },
        { id: 'Y8-ENG-LE01-q5', type: 'mcq', prompt: 'Comparing your own experience to a character\'s from a different culture can reveal…', options: ['Both differences and shared human experiences', 'That no comparison is ever possible', 'Nothing of value'], answer: 'Both differences and shared human experiences', difficulty: 2 },
        { id: 'Y8-ENG-LE01-q6', type: 'mcq', prompt: 'Reading widely across identities and cultures is valuable mainly because it…', options: ['Builds a broader understanding of human experience', 'Guarantees a higher test score only', 'Has no real benefit'], answer: 'Builds a broader understanding of human experience', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LE02',
    title: 'Comparing representations of an issue',
    year: '8',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E8LE02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Two texts about the same real issue — say, growing up in a new country — can represent it in very different lights depending on the author\'s own experience and choices.',
        'Comparing representations means asking not just "what happens" but "whose feelings and values are centred, and whose are left in the background?"',
      ],
      illustrations: [
        { brief: 'Two book covers on the same theme compared side by side', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Text A tone', value: 4 }, { label: 'Text B tone', value: 7 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LE02-q1', type: 'mcq', prompt: 'Two texts about the same real-world issue can represent it differently because of…', options: ['The author\'s own experience and choices', 'A printing error', 'Random chance only'], answer: 'The author\'s own experience and choices', difficulty: 1 },
        { id: 'Y8-ENG-LE02-q2', type: 'mcq', prompt: 'A useful comparison question is…', options: ['Whose feelings and values are centred in this text?', 'How many chapters does it have?', 'What is the book\'s price?'], answer: 'Whose feelings and values are centred in this text?', difficulty: 2 },
        { id: 'Y8-ENG-LE02-q3', type: 'mcq', prompt: 'Comparing representations of the same experience across texts mainly builds…', options: ['A fuller, more critical understanding of the issue', 'A single fixed opinion with no nuance', 'Confusion with no benefit'], answer: 'A fuller, more critical understanding of the issue', difficulty: 2 },
        { id: 'Y8-ENG-LE02-q4', type: 'mcq', prompt: 'If one text centres a migrant\'s hope and another centres their hardship, this shows…', options: ['Different representational choices about the same experience', 'That one text is simply wrong', 'That both texts are identical'], answer: 'Different representational choices about the same experience', difficulty: 2 },
        { id: 'Y8-ENG-LE02-q5', type: 'mcq', prompt: 'Analysing representation across texts involves looking beyond plot to consider…', options: ['Tone, emphasis and whose voice is heard', 'Only the number of pages', 'Only the font size'], answer: 'Tone, emphasis and whose voice is heard', difficulty: 2 },
        { id: 'Y8-ENG-LE02-q6', type: 'mcq', prompt: 'A text that leaves an important perspective in the background is making a…', options: ['Deliberate representational choice', 'Random accident with no meaning', 'Grammatical error'], answer: 'Deliberate representational choice', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LE03',
    title: 'How authors position readers',
    year: '8',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E8LE03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Authors "position" readers by controlling what we know and when — revealing a villain\'s tragic backstory late can shift our sympathy even after disliking them for chapters.',
        'Structure and language work together to position us: which character\'s thoughts we access, and which words describe them, both steer our judgement.',
      ],
      illustrations: [
        { brief: 'A flowchart showing a reveal shifting reader sympathy', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Reader dislikes the villain' }, { text: 'Author reveals tragic backstory' }, { text: 'Reader sympathy shifts' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LE03-q1', type: 'mcq', prompt: '"Positioning" a reader means an author…', options: ['Controls what we know and when, to shape our judgement', 'Randomly arranges chapters with no purpose', 'Only changes the font'], answer: 'Controls what we know and when, to shape our judgement', difficulty: 1 },
        { id: 'Y8-ENG-LE03-q2', type: 'mcq', prompt: 'Revealing a villain\'s tragic backstory late in a novel mainly aims to…', options: ['Shift the reader\'s sympathy', 'End the story immediately', 'Remove the villain from the plot'], answer: 'Shift the reader\'s sympathy', difficulty: 2 },
        { id: 'Y8-ENG-LE03-q3', type: 'mcq', prompt: 'Giving readers access to only one character\'s thoughts tends to…', options: ['Align the reader\'s sympathy with that character', 'Have no effect on sympathy', 'Automatically make that character the villain'], answer: 'Align the reader\'s sympathy with that character', difficulty: 2 },
        { id: 'Y8-ENG-LE03-q4', type: 'mcq', prompt: 'Word choice describing a character (e.g. "cunning" vs "clever") can…', options: ['Shape how positively or negatively a reader judges them', 'Never influence a reader\'s judgement', 'Only affect spelling'], answer: 'Shape how positively or negatively a reader judges them', difficulty: 2 },
        { id: 'Y8-ENG-LE03-q5', type: 'mcq', prompt: 'Analysing how an author positions readers means examining…', options: ['Structure and language choices together', 'Only the book\'s title', 'Only the number of characters'], answer: 'Structure and language choices together', difficulty: 2 },
        { id: 'Y8-ENG-LE03-q6', type: 'mcq', prompt: 'Recognising that you have been "positioned" by a text mainly helps a reader…', options: ['Read more critically and independently', 'Trust every text completely', 'Stop reading altogether'], answer: 'Read more critically and independently', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LE04',
    title: 'Poetic & dramatic techniques for effect',
    year: '8',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E8LE04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In drama, a pause, a spotlight or a character speaking directly to the audience (an aside) all carry meaning just as much as the dialogue does.',
        'In poetry, enjambment (running a sentence past the line break) can create momentum or surprise, while a full stop mid-line forces an abrupt halt.',
      ],
      illustrations: [
        { brief: 'A stage with a spotlight and an aside labelled for dramatic effect', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bulb', label: 'Spotlight' }, { icon: 'chat-bubble', label: 'Aside to audience' }], caption: 'Staging choices carry meaning too' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LE04-q1', type: 'mcq', prompt: 'A character speaking directly to the audience, unheard by other characters, is called an…', options: ['Aside', 'Alliteration', 'Epilogue'], answer: 'Aside', difficulty: 1 },
        { id: 'Y8-ENG-LE04-q2', type: 'mcq', prompt: 'Running a sentence past the end of a poetic line without a pause is called…', options: ['Enjambment', 'A stanza break', 'A rhyme'], answer: 'Enjambment', difficulty: 2 },
        { id: 'Y8-ENG-LE04-q3', type: 'mcq', prompt: 'A full stop placed mid-line in a poem tends to create…', options: ['An abrupt halt or emphasis', 'A smooth, flowing rhythm', 'No effect at all'], answer: 'An abrupt halt or emphasis', difficulty: 2 },
        { id: 'Y8-ENG-LE04-q4', type: 'mcq', prompt: 'A spotlight on a single actor during a scene mainly signals…', options: ['That character\'s importance in this moment', 'A technical error', 'The end of the play'], answer: "That character's importance in this moment", difficulty: 2 },
        { id: 'Y8-ENG-LE04-q5', type: 'mcq', prompt: 'Enjambment can create a feeling of…', options: ['Momentum or surprise as the sentence carries on', 'A definite, final stop', 'A change of topic entirely'], answer: 'Momentum or surprise as the sentence carries on', difficulty: 2 },
        { id: 'Y8-ENG-LE04-q6', type: 'mcq', prompt: 'Dramatic and poetic techniques both use structural choices (pauses, breaks, staging) to…', options: ['Shape meaning and effect beyond the words alone', 'Replace the need for any dialogue', 'Have no impact on the audience'], answer: 'Shape meaning and effect beyond the words alone', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LE05',
    title: 'Creating texts that experiment with structure & voice',
    year: '8',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E8LE05' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Structure does not have to run in order — telling a story out of sequence (starting at the end, then flashing back) can build suspense that a straight timeline cannot.',
        'Voice is a character\'s (or narrator\'s) personality on the page — word choice, sentence length and attitude combine to make writing sound distinctly like one person.',
      ],
      illustrations: [
        { brief: 'A story timeline reordered: ending shown first, then flashback', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Show the ending first' }, { text: 'Flash back to the beginning' }, { text: 'Build to the middle events' }, { text: 'Return to the ending, now understood' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LE05-q1', type: 'mcq', prompt: 'Telling a story out of chronological order (e.g. ending first, then flashback) mainly builds…', options: ['Suspense or a fresh perspective', 'Automatic confusion with no benefit', 'A grammar error'], answer: 'Suspense or a fresh perspective', difficulty: 2 },
        { id: 'Y8-ENG-LE05-q2', type: 'mcq', prompt: 'A narrator\'s "voice" refers to…', options: ['Their distinct personality shown through word choice and tone', 'The volume of their speech', 'The font used to print the text'], answer: 'Their distinct personality shown through word choice and tone', difficulty: 1 },
        { id: 'Y8-ENG-LE05-q3', type: 'mcq', prompt: 'A flashback in a narrative structure is used to…', options: ['Reveal earlier events that explain the present', 'Predict the ending', 'Replace the need for a plot'], answer: 'Reveal earlier events that explain the present', difficulty: 2 },
        { id: 'Y8-ENG-LE05-q4', type: 'mcq', prompt: 'Short, blunt sentences from a narrator would most likely suggest a voice that is…', options: ['Terse or matter-of-fact', 'Flowery and elaborate', 'Completely silent'], answer: 'Terse or matter-of-fact', difficulty: 2 },
        { id: 'Y8-ENG-LE05-q5', type: 'mcq', prompt: 'Experimenting with non-chronological structure is valuable because it…', options: ['Reveals what a different structure can achieve', 'Guarantees a better story every time', 'Removes the need for planning'], answer: 'Reveals what a different structure can achieve', difficulty: 2 },
        { id: 'Y8-ENG-LE05-q6', type: 'mcq', prompt: 'A consistent, recognisable voice across a piece of writing helps a reader…', options: ['Feel like one distinct personality is speaking', 'Forget who is narrating', 'Notice only spelling errors'], answer: 'Feel like one distinct personality is speaking', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (9 CDs) ----------
  {
    id: 'Y8-ENG-LY01',
    title: 'Analysing representation for audience',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The same real event can be reported very differently depending on the intended audience — a children\'s news bulletin softens language a tabloid might sensationalise.',
        'Analysing representation for audience means comparing how the same subject is shaped, simplified or dramatised for different groups of readers or viewers.',
      ],
      illustrations: [
        { brief: 'The same event reported for two different audiences, compared', ready: true, diagram: { kind: 'bar-compare', unit: '% dramatic language', items: [{ label: 'Kids\' news', value: 2 }, { label: 'Tabloid', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY01-q1', type: 'mcq', prompt: 'A children\'s news bulletin reporting the same event as a tabloid will likely…', options: ['Use softer, simpler language', 'Use identical dramatic language', 'Refuse to report it at all'], answer: 'Use softer, simpler language', difficulty: 1 },
        { id: 'Y8-ENG-LY01-q2', type: 'mcq', prompt: 'Analysing representation for audience means comparing…', options: ['How the same subject is shaped for different readers', 'Only the number of words used', 'Only the publication date'], answer: 'How the same subject is shaped for different readers', difficulty: 2 },
        { id: 'Y8-ENG-LY01-q3', type: 'mcq', prompt: 'A tabloid headline using dramatic, sensational language is a choice made to…', options: ['Grab attention for its audience', 'Accidentally mislead with no intent', 'Meet a strict factual standard'], answer: 'Grab attention for its audience', difficulty: 2 },
        { id: 'Y8-ENG-LY01-q4', type: 'mcq', prompt: 'The same real event covered by two outlets for different audiences can result in…', options: ['Different tone and emphasis, even if facts overlap', 'Identical articles every time', 'No possible differences'], answer: 'Different tone and emphasis, even if facts overlap', difficulty: 2 },
        { id: 'Y8-ENG-LY01-q5', type: 'mcq', prompt: 'A key question when analysing media representation is…', options: ['Who is this written for, and how does that shape it?', 'What font is used?', 'How many words are in the headline?'], answer: 'Who is this written for, and how does that shape it?', difficulty: 2 },
        { id: 'Y8-ENG-LY01-q6', type: 'mcq', prompt: 'Simplifying complex information for a younger audience often means…', options: ['Adjusting vocabulary and detail level', 'Changing the actual facts to be false', 'Removing the topic entirely'], answer: 'Adjusting vocabulary and detail level', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY02',
    title: 'Effective discussion, debate & collaboration',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A structured debate has clear roles — an opening argument, rebuttal, and closing summary — and each speaker must listen closely enough to respond directly, not just repeat prepared notes.',
        'Collaborative discussion works best when group members share airtime fairly and actively build a shared understanding rather than just defending fixed positions.',
      ],
      illustrations: [
        { brief: 'A debate structure: opening, rebuttal, closing', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Opening argument' }, { text: 'Rebuttal — respond directly' }, { text: 'Closing summary' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY02-q1', type: 'mcq', prompt: 'A rebuttal in a debate should mainly…', options: ['Respond directly to the opposing argument', 'Repeat your opening speech word for word', 'Ignore what the other side said'], answer: 'Respond directly to the opposing argument', difficulty: 1 },
        { id: 'Y8-ENG-LY02-q2', type: 'mcq', prompt: 'A collaborative discussion works best when group members…', options: ['Share airtime fairly and build shared understanding', 'One person speaks the entire time', 'Everyone defends a fixed position with no listening'], answer: 'Share airtime fairly and build shared understanding', difficulty: 2 },
        { id: 'Y8-ENG-LY02-q3', type: 'mcq', prompt: 'A closing summary in a debate should…', options: ['Reinforce the strongest points made', 'Introduce a brand-new argument', 'Apologise for speaking'], answer: 'Reinforce the strongest points made', difficulty: 2 },
        { id: 'Y8-ENG-LY02-q4', type: 'mcq', prompt: 'Listening closely enough to respond directly (rather than repeating prepared notes) shows…', options: ['Genuine engagement in the debate', 'A lack of preparation', 'Poor discussion skills'], answer: 'Genuine engagement in the debate', difficulty: 2 },
        { id: 'Y8-ENG-LY02-q5', type: 'mcq', prompt: 'A key difference between a debate and a collaborative discussion is…', options: ['A debate has opposing sides; collaboration builds shared understanding', 'They are exactly identical activities', 'Debate never involves listening'], answer: 'A debate has opposing sides; collaboration builds shared understanding', difficulty: 2 },
        { id: 'Y8-ENG-LY02-q6', type: 'mcq', prompt: 'An opening argument in a debate mainly aims to…', options: ['Establish your position clearly', 'Respond to points not yet made', 'End the debate'], answer: 'Establish your position clearly', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY03',
    title: 'Structure & language across modes',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The same content can be reshaped for print, audio or video, and each mode demands different structural choices — a podcast needs verbal signposting ("next, let\'s look at…") that a printed heading does silently.',
        'Analysing across modes means asking how the same purpose gets achieved through totally different structural tools.',
      ],
      illustrations: [
        { brief: 'The same content adapted across print, audio and video modes', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: 'Print: headings' }, { icon: 'speaker', label: 'Audio: verbal signposts' }, { icon: 'picture-frame', label: 'Video: visual cues' }], caption: 'Same purpose, different structural tools' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY03-q1', type: 'mcq', prompt: 'A podcast needs verbal signposting like "next, let\'s look at…" because listeners…', options: ['Cannot see a printed heading', 'Always read a transcript first', 'Never need any structure'], answer: 'Cannot see a printed heading', difficulty: 1 },
        { id: 'Y8-ENG-LY03-q2', type: 'mcq', prompt: 'Adapting the same content across print, audio and video mainly changes…', options: ['The structural tools used to achieve the same purpose', 'The core purpose itself, always', 'Nothing meaningful'], answer: 'The structural tools used to achieve the same purpose', difficulty: 2 },
        { id: 'Y8-ENG-LY03-q3', type: 'mcq', prompt: 'A video documentary can use visual cues that a printed article cannot, such as…', options: ['Camera framing and on-screen text', 'Headings and paragraphs', 'Page numbers'], answer: 'Camera framing and on-screen text', difficulty: 2 },
        { id: 'Y8-ENG-LY03-q4', type: 'mcq', prompt: 'Analysing structure across modes means asking…', options: ['How does this mode achieve its purpose with its own tools?', 'Which mode is always superior?', 'What is the file size?'], answer: 'How does this mode achieve its purpose with its own tools?', difficulty: 2 },
        { id: 'Y8-ENG-LY03-q5', type: 'mcq', prompt: 'A printed report uses headings; a spoken presentation achieves the same organising function with…', options: ['Verbal transitions and signposting phrases', 'Nothing at all — spoken texts have no structure', 'Only silence'], answer: 'Verbal transitions and signposting phrases', difficulty: 2 },
        { id: 'Y8-ENG-LY03-q6', type: 'mcq', prompt: 'Language features (like word choice and tone) adapted for a mode should still…', options: ['Serve the text\'s overall purpose and audience', 'Ignore the audience completely', 'Remain unchanged regardless of mode'], answer: "Serve the text's overall purpose and audience", difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY04',
    title: 'Reading strategy for complex texts',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'As texts get denser — a research article, a classic novel with archaic language — good readers slow down, break long sentences into chunks, and use context clues before reaching for a dictionary.',
        'Selecting the right strategy for a complex text also means knowing when to reread, when to look something up, and when to keep reading and let meaning emerge later.',
      ],
      illustrations: [
        { brief: 'A decision flowchart for tackling a dense or archaic sentence', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Sentence is confusing', decision: true }, { text: 'Break it into chunks' }, { text: 'Use context clues' }, { text: 'Look up only if still unclear' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY04-q1', type: 'mcq', prompt: 'Breaking a long, dense sentence into smaller chunks mainly helps a reader…', options: ['Manage complexity and build understanding', 'Skip the sentence entirely', 'Avoid ever rereading'], answer: 'Manage complexity and build understanding', difficulty: 1 },
        { id: 'Y8-ENG-LY04-q2', type: 'mcq', prompt: 'Using context clues before reaching for a dictionary is a strategy that mainly saves…', options: ['Time while still building meaning', 'The need to ever understand the word', 'Nothing at all'], answer: 'Time while still building meaning', difficulty: 2 },
        { id: 'Y8-ENG-LY04-q3', type: 'mcq', prompt: 'A classic novel with archaic language often requires a reader to…', options: ['Slow down and adjust their reading pace', 'Read at exactly the same pace as a text message', 'Skip every unfamiliar word'], answer: 'Slow down and adjust their reading pace', difficulty: 2 },
        { id: 'Y8-ENG-LY04-q4', type: 'mcq', prompt: 'Choosing to keep reading and let meaning emerge later is a valid strategy when…', options: ['A single unclear detail is not essential to the main idea', 'Every single word must be understood immediately', 'The text has no plot'], answer: 'A single unclear detail is not essential to the main idea', difficulty: 2 },
        { id: 'Y8-ENG-LY04-q5', type: 'mcq', prompt: 'Selecting a reading strategy for a complex text depends on…', options: ['The reader\'s purpose and the text\'s difficulty', 'Random chance only', 'The book\'s cover colour'], answer: "The reader's purpose and the text's difficulty", difficulty: 2 },
        { id: 'Y8-ENG-LY04-q6', type: 'mcq', prompt: 'Rereading a confusing passage is most useful when…', options: ['The passage is important to overall understanding', 'The text has already ended', 'It is never useful'], answer: 'The passage is important to overall understanding', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY05',
    title: 'Comprehension — synthesising across texts',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Synthesising means combining information from several sources into one coherent understanding — not just listing what each text says separately.',
        'Two sources might disagree; noticing and explaining that disagreement is itself part of building a fuller, more critical understanding of a topic.',
      ],
      illustrations: [
        { brief: 'Multiple source icons combining into a single understanding icon', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Source A' }, { icon: 'newspaper', label: 'Source B' }, { icon: 'brain', label: 'Combined understanding' }], caption: 'Synthesising multiple sources' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY05-q1', type: 'mcq', prompt: 'Synthesising information from multiple sources means…', options: ['Combining them into one coherent understanding', 'Reading only the first source', 'Ignoring every source but one'], answer: 'Combining them into one coherent understanding', difficulty: 1 },
        { id: 'Y8-ENG-LY05-q2', type: 'mcq', prompt: 'When two sources disagree, a critical reader should…', options: ['Notice and try to explain the disagreement', 'Assume one source is always lying', 'Ignore both sources completely'], answer: 'Notice and try to explain the disagreement', difficulty: 2 },
        { id: 'Y8-ENG-LY05-q3', type: 'mcq', prompt: 'Simply listing what each separate source says, without connecting them, is…', options: ['Not yet true synthesis', 'The complete definition of synthesis', 'Impossible to do'], answer: 'Not yet true synthesis', difficulty: 2 },
        { id: 'Y8-ENG-LY05-q4', type: 'mcq', prompt: 'Building a fuller understanding of a topic often requires…', options: ['Considering multiple perspectives together', 'Trusting only a single opinion', 'Avoiding all research'], answer: 'Considering multiple perspectives together', difficulty: 2 },
        { id: 'Y8-ENG-LY05-q5', type: 'mcq', prompt: 'Explicit meaning in a text is…', options: ['Directly stated', 'Always hidden', 'Never present'], answer: 'Directly stated', difficulty: 1 },
        { id: 'Y8-ENG-LY05-q6', type: 'mcq', prompt: 'Implicit meaning in a text is…', options: ['Suggested but not directly stated', 'Always false', 'The same as explicit meaning'], answer: 'Suggested but not directly stated', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY06',
    title: 'Planning, drafting & editing for purpose',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Editing is more than fixing typos — it means checking whether every paragraph still serves the text\'s stated purpose and cutting anything that does not.',
        'A useful editing pass asks one question per read-through: first structure, then language choices, then punctuation and spelling — trying to fix everything at once usually misses things.',
      ],
      illustrations: [
        { brief: 'Three separate editing passes: structure, language, then punctuation', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Pass 1: structure & purpose' }, { text: 'Pass 2: language & tone' }, { text: 'Pass 3: punctuation & spelling' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY06-q1', type: 'mcq', prompt: 'Editing for structure mainly checks whether…', options: ['Every paragraph serves the text\'s purpose', 'Every word is spelled correctly', 'The font is consistent'], answer: "Every paragraph serves the text's purpose", difficulty: 1 },
        { id: 'Y8-ENG-LY06-q2', type: 'mcq', prompt: 'Doing separate editing passes (structure, then language, then punctuation) mainly helps because…', options: ['Trying to fix everything at once misses things', 'It is required by law', 'It makes editing slower with no benefit'], answer: 'Trying to fix everything at once misses things', difficulty: 2 },
        { id: 'Y8-ENG-LY06-q3', type: 'mcq', prompt: 'A paragraph that no longer serves a text\'s purpose during editing should usually be…', options: ['Cut or revised', 'Left unchanged regardless', 'Made longer automatically'], answer: 'Cut or revised', difficulty: 2 },
        { id: 'Y8-ENG-LY06-q4', type: 'mcq', prompt: 'Editing is best understood as…', options: ['More than fixing typos — reshaping for purpose', 'Only correcting spelling mistakes', 'Optional and rarely useful'], answer: 'More than fixing typos — reshaping for purpose', difficulty: 2 },
        { id: 'Y8-ENG-LY06-q5', type: 'mcq', prompt: 'Drafting comes before editing because…', options: ['You need a full draft before deciding what to refine', 'Editing always happens first', 'Drafting and editing are the same step'], answer: 'You need a full draft before deciding what to refine', difficulty: 2 },
        { id: 'Y8-ENG-LY06-q6', type: 'mcq', prompt: 'Checking punctuation and spelling is usually best left until…', options: ['After structure and language have been revised', 'Before any drafting begins', 'It should never be checked'], answer: 'After structure and language have been revised', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY07',
    title: 'Spoken presentations using rhetorical choices',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A strong spoken presentation deploys rhetorical choices deliberately — a rule-of-three list for impact, a pause before the key statistic, a rhetorical question to open.',
        'Structural choices matter too: opening with a striking fact, then building the case, then closing with a memorable call to action gives a talk a shape the audience can follow.',
      ],
      illustrations: [
        { brief: 'A speech structure: striking opener, build the case, memorable close', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Striking opening fact' }, { text: 'Build the case with evidence' }, { text: 'Memorable closing call to action' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY07-q1', type: 'mcq', prompt: 'Opening a speech with a striking fact mainly aims to…', options: ['Grab the audience\'s attention immediately', 'Confuse the audience on purpose', 'Delay the main topic indefinitely'], answer: "Grab the audience's attention immediately", difficulty: 1 },
        { id: 'Y8-ENG-LY07-q2', type: 'mcq', prompt: 'Pausing right before revealing a key statistic mainly serves to…', options: ['Build anticipation and emphasis', 'Signal the speech has ended', 'Confuse the listener'], answer: 'Build anticipation and emphasis', difficulty: 2 },
        { id: 'Y8-ENG-LY07-q3', type: 'mcq', prompt: 'A memorable call to action at the end of a speech mainly aims to…', options: ['Inspire the audience to act', 'Summarise the weather', 'Apologise for speaking'], answer: 'Inspire the audience to act', difficulty: 2 },
        { id: 'Y8-ENG-LY07-q4', type: 'mcq', prompt: 'Using a rule-of-three list in a speech is a rhetorical choice that mainly creates…', options: ['A sense of completeness and impact', 'Confusion about the number of points', 'A grammar error'], answer: 'A sense of completeness and impact', difficulty: 2 },
        { id: 'Y8-ENG-LY07-q5', type: 'mcq', prompt: 'A clear structure (opener, case, close) mainly helps an audience…', options: ['Follow the shape of the argument', 'Forget the main point', 'Ignore the speaker\'s delivery'], answer: 'Follow the shape of the argument', difficulty: 2 },
        { id: 'Y8-ENG-LY07-q6', type: 'mcq', prompt: 'Deliberately choosing rhetorical devices for a speech (rather than using them by accident) shows…', options: ['Purposeful, planned persuasive craft', 'A lack of preparation', 'An accidental error'], answer: 'Purposeful, planned persuasive craft', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY08',
    title: 'Word knowledge — morphology & etymology for spelling',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Knowing that "-tion" turns a verb into a noun (act → action, create → creation) lets you spell and use a whole family of related words with confidence.',
        'Etymology can also explain "odd" spellings — "psychology" keeps its silent "p" because it comes from the Greek "psyche" (mind/soul).',
      ],
      illustrations: [
        { brief: 'A word family tree built from one root with different suffixes', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'sprout', label: 'act (root)' }, { icon: 'box', label: 'action, active, actor' }], caption: 'One root, a whole word family' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY08-q1', type: 'short', prompt: 'Add "-tion" to turn the verb "create" into a noun.', answer: 'creation', difficulty: 2 },
        { id: 'Y8-ENG-LY08-q2', type: 'mcq', prompt: '"Psychology" keeps a silent "p" because it comes from the Greek word for…', options: ['Mind/soul', 'Water', 'Light'], answer: 'Mind/soul', difficulty: 2 },
        { id: 'Y8-ENG-LY08-q3', type: 'mcq', prompt: 'Knowing the suffix "-tion" usually signals…', options: ['A noun formed from a verb', 'A plural noun', 'A comparative adjective'], answer: 'A noun formed from a verb', difficulty: 1 },
        { id: 'Y8-ENG-LY08-q4', type: 'mcq', prompt: 'Recognising a word family (act, action, active, actor) mainly helps you…', options: ['Spell and use related words with confidence', 'Forget the base word', 'Avoid using suffixes'], answer: 'Spell and use related words with confidence', difficulty: 2 },
        { id: 'Y8-ENG-LY08-q5', type: 'mcq', prompt: 'An "odd" English spelling can often be explained by…', options: ['The word\'s etymology (origin)', 'Pure random chance with no explanation', 'A universal spelling rule with no exceptions'], answer: "The word's etymology (origin)", difficulty: 2 },
        { id: 'Y8-ENG-LY08-q6', type: 'mcq', prompt: 'Morphology is the study of…', options: ['How words are built from meaningful parts', 'Sentence-level punctuation', 'Paragraph structure'], answer: 'How words are built from meaningful parts', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-ENG-LY09',
    title: 'Building subject-specific vocabulary',
    year: '8',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E8LY09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'As subjects get more advanced, so does their vocabulary — "hypothesis" in science, "coefficient" in maths, "perspective" in art — each term carries precise meaning that a vague substitute cannot.',
        'A strong technical vocabulary lets you read advanced texts confidently and express complex ideas concisely instead of circling around them in plain words.',
      ],
      illustrations: [
        { brief: 'A vocabulary bridge connecting a vague phrase to its precise technical term', ready: true, diagram: { kind: 'balance-scale', left: 'A guess that might be true', right: 'hypothesis', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-ENG-LY09-q1', type: 'mcq', prompt: '"Hypothesis" is technical vocabulary most associated with…', options: ['Science', 'Music', 'Sport'], answer: 'Science', difficulty: 1 },
        { id: 'Y8-ENG-LY09-q2', type: 'mcq', prompt: 'A precise technical term is generally preferred over a vague phrase because it…', options: ['Expresses the idea more concisely and accurately', 'Is always shorter regardless of accuracy', 'Confuses the reader on purpose'], answer: 'Expresses the idea more concisely and accurately', difficulty: 2 },
        { id: 'Y8-ENG-LY09-q3', type: 'mcq', prompt: '"Coefficient" is technical vocabulary most associated with…', options: ['Mathematics', 'History', 'Drama'], answer: 'Mathematics', difficulty: 1 },
        { id: 'Y8-ENG-LY09-q4', type: 'mcq', prompt: 'A strong technical vocabulary mainly helps a reader…', options: ['Read advanced texts in that subject confidently', 'Avoid ever reading complex texts', 'Ignore subject-specific meaning'], answer: 'Read advanced texts in that subject confidently', difficulty: 2 },
        { id: 'Y8-ENG-LY09-q5', type: 'mcq', prompt: 'Using "perspective" precisely in an art analysis, instead of "the way it looks", shows…', options: ['More precise, disciplinary understanding', 'A spelling mistake', 'A less accurate description'], answer: 'More precise, disciplinary understanding', difficulty: 2 },
        { id: 'Y8-ENG-LY09-q6', type: 'mcq', prompt: 'Building subject-specific vocabulary across school years mainly supports…', options: ['Expressing complex ideas concisely', 'Making writing longer with no benefit', 'Avoiding all technical topics'], answer: 'Expressing complex ideas concisely', difficulty: 2 },
      ],
    },
  },
];
