import type { Topic } from '../../types/curriculum';

/**
 * Year 10 English, full topic bank.
 * Source of truth for scope: docs/content/year-7-10/english.md (AC v9.0,
 * strands Language/Literature/Literacy). Every topic carries its AC9E10xxx
 * content-description code (docs/specs/curriculum-research.md §4: cite
 * codes, author original lessons, never bulk-copy syllabus text).
 * Year 10 has 25 content descriptions: Language (9), Literature (8),
 * Literacy (8). Each assignment carries 6 questions (nominal pace) / 4
 * (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR10_ENGLISH_TOPICS: Topic[] = [
  // ---------- Language (9 CDs) ----------
  {
    id: 'Y10-ENG-LA01',
    title: 'Inclusive & exclusive language',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Words can throw the door open or shut it. Inclusive language ("we", "everyone", "your community") draws listeners in, while exclusive language, unexplained jargon, in-jokes, "of course you\'d know", quietly locks others out.',
        'Understanding how language includes or excludes, and how it empowers or disempowers people, lets you hear the social effect of every choice, and lets you choose language that opens doors deliberately rather than by accident.',
      ],
      illustrations: [
        { brief: 'A door that opens for inclusive language and closes for exclusive language', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: '"we", "everyone"' }, { icon: 'house', label: 'Included' }, { icon: 'lock', label: 'Excluded' }], caption: 'Language opens or shuts the door' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA01-q1', type: 'mcq', prompt: 'Inclusive language is language that…', options: ['Draws people in and makes them feel part of the group', 'Keeps everyone out on purpose', 'Only uses formal terms'], answer: 'Draws people in and makes them feel part of the group', difficulty: 1 },
        { id: 'Y10-ENG-LA01-q2', type: 'mcq', prompt: 'Unexplained jargon in a group setting can make an outsider feel…', options: ['Excluded or disempowered', 'Perfectly included', 'More powerful'], answer: 'Excluded or disempowered', difficulty: 1 },
        { id: 'Y10-ENG-LA01-q3', type: 'mcq', prompt: '"We", "everyone" and "your community" are examples of language that tends to…', options: ['Include the audience', 'Exclude the audience', 'Have no social effect'], answer: 'Include the audience', difficulty: 2 },
        { id: 'Y10-ENG-LA01-q4', type: 'mcq', prompt: 'Phrases like "as you know" or "of course" can subtly…', options: ['Assume shared knowledge and exclude those without it', 'Always include everyone', 'Remove all assumptions'], answer: 'Assume shared knowledge and exclude those without it', difficulty: 2 },
        { id: 'Y10-ENG-LA01-q5', type: 'short', prompt: 'Give one pronoun that typically marks inclusive language.', answer: 'we', difficulty: 2 },
        { id: 'Y10-ENG-LA01-q6', type: 'mcq', prompt: 'Recognising the social effect of language mainly helps a speaker…', options: ['Choose words that match their intended inclusion or exclusion', 'Avoid ever speaking', 'Ignore their audience'], answer: 'Choose words that match their intended inclusion or exclusion', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA02',
    title: 'Evaluation reveals values',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every act of evaluation carries fingerprints of the evaluator\'s values. When a reviewer calls a film "a triumph of spectacle over story", the praise and the criticism both reveal what that reviewer believes cinema should be.',
        'Values can surface explicitly ("this is wrong") or implicitly, buried in word choice, emphasis and what gets left unsaid. Analysing evaluation means reading through the judgement to the values underneath it.',
      ],
      illustrations: [
        { brief: 'A balance scale showing an explicit judgement and the values underneath it', ready: true, diagram: { kind: 'balance-scale', left: 'Explicit judgement', right: 'Underlying values', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA02-q1', type: 'mcq', prompt: 'A reviewer\'s evaluation of a text typically reveals…', options: ['The values they hold about what makes a text good', 'Only the page count', 'Nothing about the reviewer'], answer: 'The values they hold about what makes a text good', difficulty: 1 },
        { id: 'Y10-ENG-LA02-q2', type: 'mcq', prompt: 'Values can be revealed implicitly through…', options: ['Word choice, emphasis and what is left unsaid', 'Only the number of paragraphs', 'The font size'], answer: 'Word choice, emphasis and what is left unsaid', difficulty: 2 },
        { id: 'Y10-ENG-LA02-q3', type: 'mcq', prompt: 'A critic praising a film as "a triumph of spectacle over story" reveals…', options: ['Their belief that story matters most', 'Their dislike of all films', 'Nothing at all'], answer: 'Their belief that story matters most', difficulty: 2 },
        { id: 'Y10-ENG-LA02-q4', type: 'mcq', prompt: 'Analysing an evaluation mainly means…', options: ['Reading through the judgement to the values beneath', 'Counting the adjectives', 'Ignoring the reviewer entirely'], answer: 'Reading through the judgement to the values beneath', difficulty: 2 },
        { id: 'Y10-ENG-LA02-q5', type: 'mcq', prompt: 'Two critics evaluating the same book differently likely reflects…', options: ['Different underlying values about literature', 'A printing error', 'Random chance only'], answer: 'Different underlying values about literature', difficulty: 2 },
        { id: 'Y10-ENG-LA02-q6', type: 'mcq', prompt: 'Explicit evaluation states a judgement directly, while implicit evaluation…', options: ['Hides it in the choices of the writing', 'Never expresses any view', 'Only uses facts'], answer: 'Hides it in the choices of the writing', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA03',
    title: 'Evaluating structure & language for purpose',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Analysing a text at Year 10 means moving past "what devices does it use?" to "how effective are its text structures and language features at achieving its purpose?"',
        'Evaluation is a judgement backed by evidence: a political speech\'s call to action is effective only if its build-up of evidence and rhetorical force genuinely carries the audience there. You weigh each choice against the purpose.',
      ],
      illustrations: [
        { brief: 'A flowchart scoring each structural and language choice against the purpose', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Identify the purpose' }, { text: 'Examine structure & language choices' }, { text: 'Judge their effectiveness' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA03-q1', type: 'mcq', prompt: 'Evaluating a text\'s structure and language mainly means…', options: ['Judging how effective they are at achieving the purpose', 'Listing every device with no judgement', 'Counting the paragraphs'], answer: 'Judging how effective they are at achieving the purpose', difficulty: 1 },
        { id: 'Y10-ENG-LA03-q2', type: 'mcq', prompt: 'A strong evaluation of a speech\'s call to action is backed by…', options: ['Evidence about whether the build-up truly persuades', 'The speaker\'s age', 'The number of slides'], answer: 'Evidence about whether the build-up truly persuades', difficulty: 2 },
        { id: 'Y10-ENG-LA03-q3', type: 'mcq', prompt: 'A structure that confuses the audience of an instructional text would be judged…', options: ['Ineffective for its purpose', 'Perfect regardless', 'Unrelated to purpose'], answer: 'Ineffective for its purpose', difficulty: 2 },
        { id: 'Y10-ENG-LA03-q4', type: 'mcq', prompt: 'Evaluating effectiveness requires comparing a choice against…', options: ['The text\'s stated purpose', 'Random preferences', 'The longest text ever'], answer: "The text's stated purpose", difficulty: 2 },
        { id: 'Y10-ENG-LA03-q5', type: 'mcq', prompt: 'A feature may be impressive in isolation yet still fail if it…', options: ['Does not serve the text\'s purpose', 'Uses too many words', 'Appears more than once'], answer: "Does not serve the text's purpose", difficulty: 2 },
        { id: 'Y10-ENG-LA03-q6', type: 'short', prompt: 'Give one word for judging how well a text meets its purpose.', answer: 'effectiveness', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA04',
    title: 'Varying paragraphs & integrating images',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Paragraph structure does not have to be monotonous, an author can open paragraphs differently, vary their internal build, and shift sentence position to keep cohesion while the writing stays dynamic.',
        'Paragraphs and images can also be integrated: a paragraph can set up a claim that a photograph then confirms, or an image can lead into the paragraph that explains it. The pairing itself becomes a meaning-making structure.',
      ],
      illustrations: [
        { brief: 'A page layout where paragraphs and an image are woven together for meaning', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Paragraph claim' }, { icon: 'picture-frame', label: 'Supporting image' }, { icon: 'link', label: 'Integrated meaning' }], caption: 'Words and images working as one structure' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA04-q1', type: 'mcq', prompt: 'Varying paragraph openings across a text mainly helps…', options: ['Keep cohesion while avoiding monotonous rhythm', 'Break all connections between ideas', 'Remove the need for topic sentences'], answer: 'Keep cohesion while avoiding monotonous rhythm', difficulty: 2 },
        { id: 'Y10-ENG-LA04-q2', type: 'mcq', prompt: 'Integrating an image with a paragraph means…', options: ['Using the image and text to build meaning together', 'Placing a picture at random', 'Replacing all words with photos'], answer: 'Using the image and text to build meaning together', difficulty: 1 },
        { id: 'Y10-ENG-LA04-q3', type: 'mcq', prompt: 'A paragraph that sets up a claim, followed by a photograph that confirms it, is…', options: ['An integrated image–text structure', 'A grammar error', 'Two unrelated things'], answer: 'An integrated image–text structure', difficulty: 2 },
        { id: 'Y10-ENG-LA04-q4', type: 'mcq', prompt: 'Paragraphs and images can be integrated for…', options: ['Different purposes, such as informing or persuading', 'No purpose at all', 'Only page decoration'], answer: 'Different purposes, such as informing or persuading', difficulty: 2 },
        { id: 'Y10-ENG-LA04-q5', type: 'mcq', prompt: 'Cohesion between varied paragraphs is maintained mainly through…', options: ['Links that keep each paragraph connected to the flow', 'Random topic changes', 'Avoiding all connectives'], answer: 'Links that keep each paragraph connected to the flow', difficulty: 2 },
        { id: 'Y10-ENG-LA04-q6', type: 'mcq', prompt: 'The pairing of an image with the paragraph that explains it becomes…', options: ['A meaning-making structure in its own right', 'A spelling error', 'A page number'], answer: 'A meaning-making structure in its own right', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA05',
    title: 'Sentence structures that craft ideas',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Different sentence structures craft an idea differently, a long, branching sentence can build layers of reasoning, while a short, blunt one can deliver a verdict. The same idea changes shape depending on the sentence you build around it.',
        'Analysing and evaluating sentence structures means testing which structure most effectively expresses and crafts the idea the writer wants to land, and explaining how the structure does that work.',
      ],
      illustrations: [
        { brief: 'One idea shown through three different sentence structures with different effects', ready: true, diagram: { kind: 'balance-scale', left: 'Long, layered', right: 'Short, blunt', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA05-q1', type: 'mcq', prompt: 'A long, branching sentence is well suited to…', options: ['Building up layers of reasoning', 'Delivering a single blunt verdict', 'Ending all texts'], answer: 'Building up layers of reasoning', difficulty: 1 },
        { id: 'Y10-ENG-LA05-q2', type: 'mcq', prompt: 'A short, blunt sentence is often used to…', options: ['Deliver a verdict with impact', 'Develop complex logic', 'Lengthen the paragraph'], answer: 'Deliver a verdict with impact', difficulty: 1 },
        { id: 'Y10-ENG-LA05-q3', type: 'mcq', prompt: 'The same idea expressed through different sentence structures can…', options: ['Create different emphases and effects', 'Always produce identical meaning', 'Never be done'], answer: 'Create different emphases and effects', difficulty: 2 },
        { id: 'Y10-ENG-LA05-q4', type: 'mcq', prompt: 'Evaluating a sentence structure mainly means asking…', options: ['How effectively does it craft this particular idea?', 'How many words does it contain?', 'What font is it in?'], answer: 'How effectively does it craft this particular idea?', difficulty: 2 },
        { id: 'Y10-ENG-LA05-q5', type: 'mcq', prompt: 'A writer choosing a structure that buries the key idea in the middle is…', options: ['Making a craft choice that weakens emphasis', 'Automatically improving the sentence', 'Ignoring grammar entirely'], answer: 'Making a craft choice that weakens emphasis', difficulty: 2 },
        { id: 'Y10-ENG-LA05-q6', type: 'mcq', prompt: 'Putting the main idea at the start of a sentence tends to…', options: ['Give it immediate emphasis', 'Hide it from the reader', 'Remove its meaning'], answer: 'Give it immediate emphasis', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA06',
    title: 'Syntax, word order, meaning & style',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Syntax is the ordering of words in a sentence, and order is meaning. "Only I hit the ball" and "I only hit the ball" place the emphasis on entirely different words, the syntax decides which idea gets stressed.',
        'Style is also born in syntax: an author who front-loads with "Never had she felt so free" creates a different rhythm and tension than the flat "She had never felt so free." Analysing syntax means tracking how arrangement shapes both what is said and how it feels.',
      ],
      illustrations: [
        { brief: 'Two sentences with identical words but different word order and emphasis', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'link', label: '"Only I hit the ball."' }, { icon: 'rotate-arrow', label: '"I only hit the ball."' }], caption: 'Word order changes the meaning' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA06-q1', type: 'mcq', prompt: '"Only I hit the ball" emphasises that…', options: ['No one else hit it', 'Hitting was all that happened', 'Nothing happened'], answer: 'No one else hit it', difficulty: 1 },
        { id: 'Y10-ENG-LA06-q2', type: 'mcq', prompt: '"I only hit the ball" emphasises that…', options: ['Hitting was the only action', 'No one else was there', 'The ball was missed'], answer: 'Hitting was the only action', difficulty: 1 },
        { id: 'Y10-ENG-LA06-q3', type: 'mcq', prompt: 'Syntax refers to…', options: ['The ordering of words in a sentence', 'The colour of the text', 'The page size'], answer: 'The ordering of words in a sentence', difficulty: 1 },
        { id: 'Y10-ENG-LA06-q4', type: 'mcq', prompt: 'Front-loading a sentence with "Never had she felt so free" mainly creates…', options: ['Tension and a distinctive rhythm', 'Complete neutrality', 'A spelling error'], answer: 'Tension and a distinctive rhythm', difficulty: 2 },
        { id: 'Y10-ENG-LA06-q5', type: 'mcq', prompt: 'Analysing syntax means tracking how word order shapes…', options: ['Both the meaning and the style', 'Only the punctuation', 'The chapter count'], answer: 'Both the meaning and the style', difficulty: 2 },
        { id: 'Y10-ENG-LA06-q6', type: 'mcq', prompt: 'Two sentences using identical words can still differ in meaning because of…', options: ['Word order (syntax)', 'The font', 'The paper'], answer: 'Word order (syntax)', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA07',
    title: 'Still & moving images, evaluating choices',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every image is full of choices: framing, camera angle, lighting, colour, focus, and, in film, movement and editing. Each choice nudges how a subject is represented.',
        'Evaluating those choices means judging their effects on the representation: a low angle makes a subject loom powerful, warm light softens a scene, a close-up forces intimacy. Analysis connects the visible choice to the resulting meaning.',
      ],
      illustrations: [
        { brief: 'The same subject shot three ways, low angle, warm light, close-up, with effects', ready: true, diagram: { kind: 'bar-compare', unit: '/10 impact', items: [{ label: 'Low angle', value: 8 }, { label: 'Warm light', value: 5 }, { label: 'Close-up', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA07-q1', type: 'mcq', prompt: 'A low camera angle on a subject tends to make them seem…', options: ['Powerful or looming', 'Tiny and weak', 'Invisible'], answer: 'Powerful or looming', difficulty: 1 },
        { id: 'Y10-ENG-LA07-q2', type: 'mcq', prompt: 'A close-up shot mainly forces the viewer into…', options: ['Intimacy with the subject', 'Total distance', 'A maths equation'], answer: 'Intimacy with the subject', difficulty: 1 },
        { id: 'Y10-ENG-LA07-q3', type: 'mcq', prompt: 'Warm lighting in a scene tends to create…', options: ['A softer, more positive mood', 'A cold, hostile mood', 'No mood at all'], answer: 'A softer, more positive mood', difficulty: 2 },
        { id: 'Y10-ENG-LA07-q4', type: 'mcq', prompt: 'Evaluating an image choice means judging…', options: ['Its effect on how the subject is represented', 'Only its file size', 'The brand of camera'], answer: 'Its effect on how the subject is represented', difficulty: 2 },
        { id: 'Y10-ENG-LA07-q5', type: 'mcq', prompt: 'In a film, the pace of editing can influence…', options: ['The tension and energy of a scene', 'The spelling of the title', 'The page numbers'], answer: 'The tension and energy of a scene', difficulty: 2 },
        { id: 'Y10-ENG-LA07-q6', type: 'mcq', prompt: 'Colour grading across a whole film is a choice that mainly shapes…', options: ['The overall mood and representation', 'The dialogue length', 'The cast size'], answer: 'The overall mood and representation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA08',
    title: 'Technical & academic vocabulary for precision',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Academic writing demands precision, and precision is built from vocabulary, the right technical and academic term says in one word what a vague phrase would circle around in ten.',
        'Expanding your academic vocabulary means not just knowing more words but using them exactly: "assume", "assert" and "argue" are not interchangeable, and choosing between them changes the claim you are making.',
      ],
      illustrations: [
        { brief: 'A ladder from vague everyday wording up to precise academic terms', ready: true, diagram: { kind: 'metric-ladder', units: ['Vague', 'Precise', 'Academic'], highlight: 2 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA08-q1', type: 'mcq', prompt: 'Precision in academic writing mainly comes from…', options: ['Using technical and academic vocabulary exactly', 'Using the longest possible sentences', 'Avoiding all nouns'], answer: 'Using technical and academic vocabulary exactly', difficulty: 1 },
        { id: 'Y10-ENG-LA08-q2', type: 'mcq', prompt: '"Assume", "assert" and "argue" are NOT interchangeable because…', options: ['Each makes a different kind of claim', 'They are all the same word', 'One is a verb and one is a noun only'], answer: 'Each makes a different kind of claim', difficulty: 2 },
        { id: 'Y10-ENG-LA08-q3', type: 'mcq', prompt: 'A precise technical term is preferable to a vague phrase because it…', options: ['Says the idea in one exact word', 'Is always longer', 'Avoids any meaning'], answer: 'Says the idea in one exact word', difficulty: 2 },
        { id: 'Y10-ENG-LA08-q4', type: 'mcq', prompt: 'Using "hypothesise" instead of "guess" in a science report signals…', options: ['A precise, testable claim', 'A random hunch', 'A spelling mistake'], answer: 'A precise, testable claim', difficulty: 2 },
        { id: 'Y10-ENG-LA08-q5', type: 'mcq', prompt: 'Choosing the exact academic term for a concept mainly helps a writer…', options: ['Make claims that are clearly and accurately expressed', 'Make the text impossible to read', 'Avoid any argument'], answer: 'Make claims that are clearly and accurately expressed', difficulty: 2 },
        { id: 'Y10-ENG-LA08-q6', type: 'mcq', prompt: 'The difference between "criticise" and "evaluate" in academic writing is that…', options: ['Evaluate means weighing with evidence, not just fault-finding', 'They are exactly identical', 'Criticise is always positive'], answer: 'Evaluate means weighing with evidence, not just fault-finding', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LA09',
    title: 'Experimenting with punctuation',
    year: '10',
    subject: 'english',
    strand: 'Language',
    cd: [{ ac: 'AC9E10LA09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'By Year 10, punctuation is a creative instrument, not just a rulebook. A dash can withhold a revelation, a semicolon can hold two ideas in careful balance, and deliberate fragment punctuation can make a page breathe.',
        'Authors experiment with punctuation to shape rhythm, tone and silence, but the experiment only works if a reader still navigates the meaning. Understanding the conventions is what makes breaking them meaningful.',
      ],
      illustrations: [
        { brief: 'A sentence whose punctuation choices (dash, semicolon, ellipsis) are each annotated', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'burst', label: 'Dash, withholding' }, { icon: 'link', label: 'Semicolon, balance' }, { icon: 'clock', label: 'Ellipsis, pause' }], caption: 'Punctuation as a creative instrument' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LA09-q1', type: 'mcq', prompt: 'An ellipsis at the end of a sentence mainly signals…', options: ['A trailing pause or withheld thought', 'The end of the whole book', 'A maths sum'], answer: 'A trailing pause or withheld thought', difficulty: 1 },
        { id: 'Y10-ENG-LA09-q2', type: 'mcq', prompt: 'A dash placed right before a revelation mainly serves to…', options: ['Withhold and then release the idea dramatically', 'Hide the idea forever', 'End the paragraph'], answer: 'Withhold and then release the idea dramatically', difficulty: 2 },
        { id: 'Y10-ENG-LA09-q3', type: 'mcq', prompt: 'A semicolon holds two independent clauses in…', options: ['Careful balance with a close relationship', 'Complete randomness', 'Alphabetical order'], answer: 'Careful balance with a close relationship', difficulty: 2 },
        { id: 'Y10-ENG-LA09-q4', type: 'mcq', prompt: 'Experimental punctuation works best when the reader…', options: ['Can still navigate the meaning', 'Is left completely lost', 'Never notices it'], answer: 'Can still navigate the meaning', difficulty: 2 },
        { id: 'Y10-ENG-LA09-q5', type: 'mcq', prompt: 'Mastering punctuation conventions matters before experimenting because…', options: ['Breaking a rule only carries meaning if the rule is known', 'Rules never matter', 'Experimentation needs no understanding'], answer: 'Breaking a rule only carries meaning if the rule is known', difficulty: 2 },
        { id: 'Y10-ENG-LA09-q6', type: 'mcq', prompt: 'A key purpose of punctuation experimentation is shaping…', options: ['Rhythm, tone and silence', 'Only the margins', 'The font size'], answer: 'Rhythm, tone and silence', difficulty: 2 },
      ],
    },
  },
  // ---------- Literature (8 CDs) ----------
  {
    id: 'Y10-ENG-LE01',
    title: 'Representation & context, evaluating',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'By Year 10, you do not just spot representations, you evaluate how well they reflect their context. A First Nations Australian author\'s representation of place draws on cultural knowledge a distant author cannot replicate, and each choice can be weighed against its context.',
        'Evaluating representation means asking how accurately and honestly a text reflects the context it claims to represent, and what a representation gains or loses by being filtered through a particular author\'s experience.',
      ],
      illustrations: [
        { brief: 'A balance scale weighing a representation against the context it reflects', ready: true, diagram: { kind: 'balance-scale', left: 'The representation', right: 'Its context', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE01-q1', type: 'mcq', prompt: 'Evaluating a representation against its context means judging…', options: ['How well it reflects the reality it claims to show', 'Only its page count', 'The author\'s age'], answer: 'How well it reflects the reality it claims to show', difficulty: 1 },
        { id: 'Y10-ENG-LE01-q2', type: 'mcq', prompt: 'A First Nations Australian author\'s representation of place can draw on…', options: ['Cultural knowledge of Country and belonging', 'Nothing unique at all', 'Only fictional maps'], answer: 'Cultural knowledge of Country and belonging', difficulty: 2 },
        { id: 'Y10-ENG-LE01-q3', type: 'mcq', prompt: 'A representation of a group from an outside author may differ from an insider\'s because…', options: ['Each author\'s experience and context filters the portrayal', 'All authors write identically', 'Context has no effect'], answer: "Each author's experience and context filters the portrayal", difficulty: 2 },
        { id: 'Y10-ENG-LE01-q4', type: 'mcq', prompt: 'Evaluating representation mainly involves considering…', options: ['How the author\'s context shapes what is shown and missed', 'Only the book\'s cover', 'The number of chapters'], answer: "How the author's context shapes what is shown and missed", difficulty: 2 },
        { id: 'Y10-ENG-LE01-q5', type: 'mcq', prompt: 'A representation can be evaluated as more or less…', options: ['Faithful to the context it reflects', 'Expensive to print', 'Long in title'], answer: 'Faithful to the context it reflects', difficulty: 2 },
        { id: 'Y10-ENG-LE01-q6', type: 'mcq', prompt: 'Comparing an insider\'s and an outsider\'s representation of the same place can reveal…', options: ['What each context values and knows about that place', 'That both are completely identical', 'Nothing at all'], answer: 'What each context values and knows about that place', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE02',
    title: 'Reflecting on & extending interpretations',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Literature study is a conversation. A strong reader not only forms an interpretation but reflects on it, testing it against the text and against other readers\' views, and then extends it, building new insight on what others have noticed.',
        'Extending an interpretation might mean pushing a reading further, applying it to a different scene, or respectfully complicating it. The goal is depth: the shared conversation produces more than any single reader alone.',
      ],
      illustrations: [
        { brief: 'A chain of interpretations where each reader builds on the last', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'people', label: 'Another reader' }, { icon: 'chat-bubble', label: 'Their reading' }, { icon: 'link', label: 'You extend it' }], caption: 'Interpretation as a shared conversation' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE02-q1', type: 'mcq', prompt: 'Reflecting on your interpretation mainly means…', options: ['Testing it against the text and others\' views', 'Forgetting it immediately', 'Never revising it'], answer: "Testing it against the text and others' views", difficulty: 1 },
        { id: 'Y10-ENG-LE02-q2', type: 'mcq', prompt: 'Extending another reader\'s interpretation means…', options: ['Building new insight on top of their reading', 'Copying their words exactly', 'Rejecting it without thought'], answer: 'Building new insight on top of their reading', difficulty: 2 },
        { id: 'Y10-ENG-LE02-q3', type: 'mcq', prompt: 'A shared conversation about a text usually produces…', options: ['More depth than any single reader alone', 'Exactly one fixed answer', 'Nothing new'], answer: 'More depth than any single reader alone', difficulty: 2 },
        { id: 'Y10-ENG-LE02-q4', type: 'mcq', prompt: 'Respectfully complicating another reader\'s interpretation means…', options: ['Adding a nuance while engaging with their idea', 'Shouting over them', 'Ignoring the text'], answer: 'Adding a nuance while engaging with their idea', difficulty: 2 },
        { id: 'Y10-ENG-LE02-q5', type: 'mcq', prompt: 'A strong interpretation is one that…', options: ['Can be supported and developed with evidence', 'Has no connection to the text', 'Never changes'], answer: 'Can be supported and developed with evidence', difficulty: 2 },
        { id: 'Y10-ENG-LE02-q6', type: 'mcq', prompt: 'Extending an interpretation to a new scene is a way of…', options: ['Testing how far the reading holds', 'Ending the discussion', 'Removing evidence'], answer: 'Testing how far the reading holds', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE03',
    title: 'Aesthetic qualities & audience response',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The aesthetic qualities of a text, its structure, language features, literary devices and visual features, work together with the context in which you experience it to shape how you respond.',
        'A poem read aloud in a quiet room lands differently than one skimmed on a phone at a bus stop; an ending that felt bold in its era may feel familiar today. Analysing audience response means tracking how all these factors combine.',
      ],
      illustrations: [
        { brief: 'A flowchart: text qualities + experience context together produce the response', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Text qualities' }, { text: 'Context of experience' }, { text: 'Audience response' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE03-q1', type: 'mcq', prompt: 'Aesthetic qualities influencing response include…', options: ['Structure, language features and visual features', 'Only the book\'s price', 'The publisher\'s address'], answer: 'Structure, language features and visual features', difficulty: 1 },
        { id: 'Y10-ENG-LE03-q2', type: 'mcq', prompt: 'The context in which a text is experienced can…', options: ['Change how its qualities land on the audience', 'Never matter', 'Rewrite the text'], answer: 'Change how its qualities land on the audience', difficulty: 2 },
        { id: 'Y10-ENG-LE03-q3', type: 'mcq', prompt: 'A poem read aloud in a quiet room versus skimmed on a phone may produce…', options: ['A different emotional response', 'An identical response every time', 'No response at all'], answer: 'A different emotional response', difficulty: 2 },
        { id: 'Y10-ENG-LE03-q4', type: 'mcq', prompt: 'An ending that felt bold in its era may feel familiar today because…', options: ['Contexts and audience expectations change over time', 'Texts never age', 'Endings are irrelevant'], answer: 'Contexts and audience expectations change over time', difficulty: 2 },
        { id: 'Y10-ENG-LE03-q5', type: 'mcq', prompt: 'Analysing audience response means considering…', options: ['How text qualities and context combine to shape it', 'Only the word count', 'The book\'s weight'], answer: 'How text qualities and context combine to shape it', difficulty: 2 },
        { id: 'Y10-ENG-LE03-q6', type: 'mcq', prompt: 'A striking visual feature in a graphic novel mainly contributes to response by…', options: ['Shaping the mood and meaning beyond the words', 'Adding page numbers', 'Replacing the title'], answer: 'Shaping the mood and meaning beyond the words', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE04',
    title: 'Social, moral & ethical positions in literature',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Literature does not just tell stories, it takes positions. A novel can endorse or interrogate a social value, present a character whose choices raise moral questions, or test an ethical position by pushing it to its consequences.',
        'Evaluating these positions means judging them, not just describing them: is the position persuasive, consistent, fair? And do you agree with it? Literature gives you a safe arena to argue with big ideas.',
      ],
      illustrations: [
        { brief: 'A courtroom scale weighing the moral position a text endorses', ready: true, diagram: { kind: 'balance-scale', left: 'The text\'s position', right: 'Your evaluation', balanced: true } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE04-q1', type: 'mcq', prompt: 'Literature can "take a position" by…', options: ['Endorsing or interrogating a social value', 'Avoiding all ideas', 'Only describing weather'], answer: 'Endorsing or interrogating a social value', difficulty: 1 },
        { id: 'Y10-ENG-LE04-q2', type: 'mcq', prompt: 'A character whose choices raise moral questions mainly invites the reader to…', options: ['Judge those choices and the values behind them', 'Ignore the character entirely', 'Memorise the plot'], answer: 'Judge those choices and the values behind them', difficulty: 2 },
        { id: 'Y10-ENG-LE04-q3', type: 'mcq', prompt: 'Evaluating a text\'s ethical position means…', options: ['Judging whether it is persuasive, consistent and fair', 'Only listing plot events', 'Counting the chapters'], answer: 'Judging whether it is persuasive, consistent and fair', difficulty: 2 },
        { id: 'Y10-ENG-LE04-q4', type: 'mcq', prompt: 'A text can test an ethical position by…', options: ['Pushing it to its logical consequences in the plot', 'Never mentioning it', 'Ending the story early'], answer: 'Pushing it to its logical consequences in the plot', difficulty: 2 },
        { id: 'Y10-ENG-LE04-q5', type: 'mcq', prompt: 'A social position a text endorses may conflict with…', options: ['The reader\'s own values and context', 'The font size', 'The page count'], answer: "The reader's own values and context", difficulty: 2 },
        { id: 'Y10-ENG-LE04-q6', type: 'mcq', prompt: 'Reading literature as a "safe arena" for big ideas means…', options: ['Arguing with positions through the text', 'Never forming opinions', 'Avoiding all conflicts'], answer: 'Arguing with positions through the text', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE05',
    title: 'Intertextual connections & interpretation',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'No text stands alone. Intertextual connections tie a text to others, a retelling of a myth, a poem echoing a Shakespeare line, a novel that converses with a film, and each connection opens a new path of interpretation.',
        'Analysing how text structure, language features, literary devices and intertextual connections shape interpretation means asking what a reference adds: does it deepen a theme, invite comparison, or invite the reader to re-read both texts?',
      ],
      illustrations: [
        { brief: 'A text with threads connecting to the other texts it echoes', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'This text' }, { icon: 'link', label: 'Echoes a myth' }, { icon: 'globe', label: 'Speaks to world texts' }], caption: 'Interpretation opens through connections' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE05-q1', type: 'mcq', prompt: 'Intertextual connections are links…', options: ['Between a text and other texts it references or echoes', 'Between page numbers', 'Inside a single sentence'], answer: 'Between a text and other texts it references or echoes', difficulty: 1 },
        { id: 'Y10-ENG-LE05-q2', type: 'mcq', prompt: 'A retelling of a myth mainly adds interpretation by…', options: ['Inviting comparison with the original story', 'Removing all meaning', 'Lengthening the book'], answer: 'Inviting comparison with the original story', difficulty: 2 },
        { id: 'Y10-ENG-LE05-q3', type: 'mcq', prompt: 'A poem echoing a famous line of Shakespeare can…', options: ['Deepen its theme through the echo', 'Only affect the font', 'Confuse the page count'], answer: 'Deepen its theme through the echo', difficulty: 2 },
        { id: 'Y10-ENG-LE05-q4', type: 'mcq', prompt: 'Analysing interpretation through connections means asking…', options: ['What does this reference add to the reading?', 'How many pages are here?', 'What font is used?'], answer: 'What does this reference add to the reading?', difficulty: 2 },
        { id: 'Y10-ENG-LE05-q5', type: 'mcq', prompt: 'A strong intertextual connection can make a reader…', options: ['Re-read both texts with fresh eyes', 'Forget both texts', 'Stop reading forever'], answer: 'Re-read both texts with fresh eyes', difficulty: 2 },
        { id: 'Y10-ENG-LE05-q6', type: 'mcq', prompt: 'Text structure, language features and devices together shape…', options: ['How a reader interprets the text', 'Only the cover art', 'The publishing date'], answer: 'How a reader interprets the text', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE06',
    title: 'Voice across poetry, novels & film',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        '"Voice" is not just narration, it is a literary device that builds a distinct presence, and it works differently in different forms. A poem creates voice through line breaks and sound, a novel through narrator and prose rhythm, a film through performance and camera.',
        'Comparing how voice is used across poetry, novels and film reveals what each form makes possible: the same emotion can be evoked by a poet\'s intimate "I", a narrator\'s shifting perspective, or an actor\'s silent close-up.',
      ],
      illustrations: [
        { brief: 'A bar-compare of how strongly three forms can foreground a character\'s voice', ready: true, diagram: { kind: 'bar-compare', unit: '/10 voice', items: [{ label: 'Poetry', value: 9 }, { label: 'Novel', value: 8 }, { label: 'Film', value: 6 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE06-q1', type: 'mcq', prompt: 'A poem typically creates voice through…', options: ['Line breaks, sound and a speaker\'s presence', 'Camera angles', 'Page margins'], answer: "Line breaks, sound and a speaker's presence", difficulty: 1 },
        { id: 'Y10-ENG-LE06-q2', type: 'mcq', prompt: 'A novel typically creates voice through…', options: ['Narrator and prose rhythm', 'Cinematic lighting', 'Sound effects'], answer: 'Narrator and prose rhythm', difficulty: 1 },
        { id: 'Y10-ENG-LE06-q3', type: 'mcq', prompt: 'A film can create a character\'s voice through…', options: ['Performance and camera choices', 'Line breaks', 'Stanza structure'], answer: 'Performance and camera choices', difficulty: 2 },
        { id: 'Y10-ENG-LE06-q4', type: 'mcq', prompt: 'Comparing voice across forms mainly reveals…', options: ['What each form makes possible for evoking emotion', 'That all forms are identical', 'Nothing about craft'], answer: 'What each form makes possible for evoking emotion', difficulty: 2 },
        { id: 'Y10-ENG-LE06-q5', type: 'mcq', prompt: 'The same emotion can be evoked differently because…', options: ['Each form\'s tools for voice differ', 'Emotions cannot be evoked', 'Only film has tools'], answer: "Each form's tools for voice differ", difficulty: 2 },
        { id: 'Y10-ENG-LE06-q6', type: 'mcq', prompt: 'A silent close-up in film can function like…', options: ['A first-person "I" in a poem, intimate access to feeling', 'A page number', 'A stanza break'], answer: 'A first-person "I" in a poem, intimate access to feeling', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE07',
    title: 'Evaluating aesthetic qualities',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Evaluating the aesthetic qualities of a text is a developed critical act: you judge its artistic merit by weighing how structure, language, imagery and form combine to produce effect and meaning.',
        'An aesthetic evaluation is not a vague "I liked it", it is a reasoned argument. You point to the specific qualities, explain how they work, and judge whether the text achieves something striking, subtle, powerful or lasting.',
      ],
      illustrations: [
        { brief: 'A thermometer measuring the strength of a text\'s aesthetic qualities', ready: true, diagram: { kind: 'thermometer', min: 0, max: 10, value: 7, unit: '/10 aesthetic' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE07-q1', type: 'mcq', prompt: 'Evaluating aesthetic qualities means judging a text\'s…', options: ['Artistic merit through its craft and effect', 'Word count only', 'Publishing date'], answer: 'Artistic merit through its craft and effect', difficulty: 1 },
        { id: 'Y10-ENG-LE07-q2', type: 'mcq', prompt: 'A strong aesthetic evaluation is best described as…', options: ['A reasoned argument backed by specific qualities', 'A vague "I liked it"', 'A list of page numbers'], answer: 'A reasoned argument backed by specific qualities', difficulty: 2 },
        { id: 'Y10-ENG-LE07-q3', type: 'mcq', prompt: 'Weighing how structure, language, imagery and form combine is part of…', options: ['Evaluating aesthetic qualities', 'Counting syllables', 'Choosing a font'], answer: 'Evaluating aesthetic qualities', difficulty: 2 },
        { id: 'Y10-ENG-LE07-q4', type: 'mcq', prompt: 'A judgement that a text is "striking" is a claim about its…', options: ['Aesthetic achievement', 'Number of chapters', 'Binding quality'], answer: 'Aesthetic achievement', difficulty: 1 },
        { id: 'Y10-ENG-LE07-q5', type: 'mcq', prompt: 'An aesthetic evaluation must explain how qualities work, not just…', options: ['Name them and expect agreement', 'Quote them fully', 'Avoid them'], answer: 'Name them and expect agreement', difficulty: 2 },
        { id: 'Y10-ENG-LE07-q6', type: 'mcq', prompt: 'Two readers can reasonably disagree on aesthetic quality because…', options: ['Judgements are reasoned but shaped by taste and context', 'Only one answer is ever possible', 'Taste is always identical'], answer: 'Judgements are reasoned but shaped by taste and context', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LE08',
    title: 'Creating texts with a sustained voice',
    year: '10',
    subject: 'english',
    strand: 'Literature',
    cd: [{ ac: 'AC9E10LE08' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Creating a literary text at Year 10 means sustaining a voice, building one recognisable presence that holds across the whole piece, and selecting and adapting text structures, literary devices, and language, auditory or visual features to serve it.',
        'A sustained voice is not just consistency; it is purposeful. You choose every feature to reinforce that voice, then edit relentlessly so nothing breaks the spell, every sentence should feel like the same storyteller wrote it.',
      ],
      illustrations: [
        { brief: 'A flowchart: choose a voice, adapt features to it, edit to sustain it', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Choose a voice' }, { text: 'Adapt structures & devices to it' }, { text: 'Edit to sustain it' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LE08-q1', type: 'mcq', prompt: 'A "sustained voice" in a literary text means…', options: ['One recognisable presence holding across the whole piece', 'A different voice every paragraph', 'No voice at all'], answer: 'One recognisable presence holding across the whole piece', difficulty: 1 },
        { id: 'Y10-ENG-LE08-q2', type: 'mcq', prompt: 'Selecting text structures and devices for a created text should serve…', options: ['The voice and purpose of the piece', 'Random chance', 'The word count only'], answer: 'The voice and purpose of the piece', difficulty: 2 },
        { id: 'Y10-ENG-LE08-q3', type: 'mcq', prompt: 'Editing to sustain a voice mainly involves…', options: ['Removing anything that breaks the consistent presence', 'Adding random phrases', 'Avoiding revision'], answer: 'Removing anything that breaks the consistent presence', difficulty: 2 },
        { id: 'Y10-ENG-LE08-q4', type: 'mcq', prompt: 'Auditory and visual features can contribute to voice in…', options: ['Multimodal literary texts', 'Only printed dictionaries', 'No texts at all'], answer: 'Multimodal literary texts', difficulty: 2 },
        { id: 'Y10-ENG-LE08-q5', type: 'mcq', prompt: 'A voice is strongest when every feature…', options: ['Reinforces it rather than fighting it', 'Contradicts it', 'Is ignored'], answer: 'Reinforces it rather than fighting it', difficulty: 2 },
        { id: 'Y10-ENG-LE08-q6', type: 'mcq', prompt: 'The test of a sustained voice is whether a reader…', options: ['Feels one distinct storyteller throughout', 'Forgets the narrator', 'Notices only fonts'], answer: 'Feels one distinct storyteller throughout', difficulty: 2 },
      ],
    },
  },
  // ---------- Literacy (8 CDs) ----------
  {
    id: 'Y10-ENG-LY01',
    title: 'Evaluating representation in context',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'At Year 10 you analyse and evaluate how people, places, events and concepts are represented in texts, and how those representations reflect their contexts, including the role of stereotypes and the agendas behind a portrayal.',
        'Evaluation here means forming a judgement: is this representation fair, accurate, harmful or illuminating, given the context it comes from? You weigh the representation against both the text\'s context and your own critical standards.',
      ],
      illustrations: [
        { brief: 'A balance scale weighing a representation against fairness and context', ready: true, diagram: { kind: 'balance-scale', left: 'Stereotype', right: 'Fair representation', balanced: false } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY01-q1', type: 'mcq', prompt: 'Evaluating a representation in context means…', options: ['Judging its fairness and accuracy given where it comes from', 'Counting its words', 'Ignoring its context'], answer: 'Judging its fairness and accuracy given where it comes from', difficulty: 1 },
        { id: 'Y10-ENG-LY01-q2', type: 'mcq', prompt: 'A stereotype in a media text is a representation that…', options: ['Over-simplifies a group into a fixed, often unfair image', 'Shows a group in all its diversity', 'Avoids groups entirely'], answer: 'Over-simplifies a group into a fixed, often unfair image', difficulty: 2 },
        { id: 'Y10-ENG-LY01-q3', type: 'mcq', prompt: 'Evaluating representation mainly means asking…', options: ['Is this fair and accurate for its context?', 'What font is used?', 'How long is the clip?'], answer: 'Is this fair and accurate for its context?', difficulty: 2 },
        { id: 'Y10-ENG-LY01-q4', type: 'mcq', prompt: 'The agenda behind a portrayal can shape…', options: ['Which aspects of a group are shown and which are hidden', 'Only the run time', 'The sound quality'], answer: 'Which aspects of a group are shown and which are hidden', difficulty: 2 },
        { id: 'Y10-ENG-LY01-q5', type: 'mcq', prompt: 'A representation judged harmful usually…', options: ['Relies on stereotypes and distortion', 'Shows full complexity', 'Is perfectly neutral'], answer: 'Relies on stereotypes and distortion', difficulty: 2 },
        { id: 'Y10-ENG-LY01-q6', type: 'mcq', prompt: 'Evaluating representation combines the text\'s context with…', options: ['The reader\'s critical standards', 'Only the page count', 'The publisher\'s logo'], answer: "The reader's critical standards", difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY02',
    title: 'Explaining purposes & effects of spoken texts',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Listening at Year 10 means explaining how a spoken text is built: what its text structures and language features are, what purposes they serve, and what effects they produce on a listener.',
        'After analysing, you use interaction skills to discuss and present your own opinion about the text, moving from passive reception to an active, reasoned critical position.',
      ],
      illustrations: [
        { brief: 'A spoken text being unpacked: structure, purpose, effect, then your opinion', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Listen' }, { text: 'Explain structure & language effects' }, { text: 'Present your opinion' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY02-q1', type: 'mcq', prompt: 'Explaining a spoken text means describing…', options: ['Its structures, purposes and effects on listeners', 'Only its length', 'The speaker\'s outfit'], answer: 'Its structures, purposes and effects on listeners', difficulty: 1 },
        { id: 'Y10-ENG-LY02-q2', type: 'mcq', prompt: 'A language feature in a spoken text (like repetition) produces its effect by…', options: ['Shaping how listeners respond', 'Adding page numbers', 'Changing the font'], answer: 'Shaping how listeners respond', difficulty: 2 },
        { id: 'Y10-ENG-LY02-q3', type: 'mcq', prompt: 'The "purpose" of a spoken text refers to…', options: ['What the speaker aims to achieve', 'The microphone type', 'The room size'], answer: 'What the speaker aims to achieve', difficulty: 1 },
        { id: 'Y10-ENG-LY02-q4', type: 'mcq', prompt: 'Presenting your own opinion about a spoken text is strongest when it…', options: ['Builds on your analysis of its effects', 'Ignores the text', 'Repeats the speaker\'s words exactly'], answer: "Builds on your analysis of its effects", difficulty: 2 },
        { id: 'Y10-ENG-LY02-q5', type: 'mcq', prompt: 'The "effect" of a spoken text differs from its purpose because…', options: ['Effect is what actually happens to listeners; purpose is the aim', 'They are exactly the same', 'Effect only concerns spelling'], answer: 'Effect is what actually happens to listeners; purpose is the aim', difficulty: 2 },
        { id: 'Y10-ENG-LY02-q6', type: 'mcq', prompt: 'Interaction skills in discussing a spoken text include…', options: ['Presenting an opinion and responding to others', 'Never listening', 'Speaking over everyone'], answer: 'Presenting an opinion and responding to others', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY03',
    title: 'Values, beliefs & attitudes in language',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Language carries more than information, it carries values, beliefs and attitudes. Some are stated outright, but many are implicit, hidden in word choice, tone, and what a text takes for granted.',
        'Analysing and evaluating how language features represent values means noticing the implicit assumptions beneath the surface: a text that repeatedly calls a policy "bold" is quietly endorsing it, whatever it claims to be doing.',
      ],
      illustrations: [
        { brief: 'An iceberg: explicit language above the surface, hidden values beneath', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'book', label: 'Explicit words' }, { icon: 'droplet', label: 'Implicit values below' }], caption: 'Values often sit beneath the surface' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY03-q1', type: 'mcq', prompt: 'Values in a text can be represented…', options: ['Implicitly or explicitly', 'Only by numbers', 'Never at all'], answer: 'Implicitly or explicitly', difficulty: 1 },
        { id: 'Y10-ENG-LY03-q2', type: 'mcq', prompt: 'A text that repeatedly calls a policy "bold" is implicitly…', options: ['Endorsing that policy', 'Rejecting that policy', 'Staying neutral'], answer: 'Endorsing that policy', difficulty: 2 },
        { id: 'Y10-ENG-LY03-q3', type: 'mcq', prompt: 'Implicit values are often found in…', options: ['Word choice and what a text takes for granted', 'Only the title page', 'The binding'], answer: 'Word choice and what a text takes for granted', difficulty: 2 },
        { id: 'Y10-ENG-LY03-q4', type: 'mcq', prompt: 'An attitude can be represented by…', options: ['Tone, emphasis and language choices', 'Only the page count', 'The chapter order'], answer: 'Tone, emphasis and language choices', difficulty: 2 },
        { id: 'Y10-ENG-LY03-q5', type: 'mcq', prompt: 'Analysing how language represents values mainly means…', options: ['Uncovering the beliefs beneath the surface', 'Counting every noun', 'Ignoring tone'], answer: 'Uncovering the beliefs beneath the surface', difficulty: 2 },
        { id: 'Y10-ENG-LY03-q6', type: 'mcq', prompt: 'A text that takes a belief "for granted" is…', options: ['Treating it as obvious rather than arguing for it', 'Debating it fiercely', 'Rejecting it clearly'], answer: 'Treating it as obvious rather than arguing for it', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY04',
    title: 'How authors organise ideas for a purpose',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Organisation is strategy. How an author orders ideas, what comes first, what is saved for last, what is repeated and what is cut, is chosen to achieve a purpose with a particular audience.',
        'Analysing and evaluating organisation means asking whether the arrangement actually works: does this structure lead the reader where the author wants them to go, and could it be done more effectively?',
      ],
      illustrations: [
        { brief: 'A flowchart: purpose set, ideas arranged, then the arrangement evaluated', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Purpose' }, { text: 'Ideas arranged' }, { text: 'Evaluate the effect' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY04-q1', type: 'mcq', prompt: 'How an author organises ideas is best understood as…', options: ['A strategy chosen to achieve a purpose', 'A random accident', 'A spelling choice'], answer: 'A strategy chosen to achieve a purpose', difficulty: 1 },
        { id: 'Y10-ENG-LY04-q2', type: 'mcq', prompt: 'Saving a key idea for last in a text can…', options: ['Build to a strong climax or conclusion', 'Hide it forever', 'Remove its meaning'], answer: 'Build to a strong climax or conclusion', difficulty: 2 },
        { id: 'Y10-ENG-LY04-q3', type: 'mcq', prompt: 'Repeating an idea in different forms across a text mainly serves to…', options: ['Emphasise it for the audience', 'Confuse the reader', 'Fill empty pages'], answer: 'Emphasise it for the audience', difficulty: 2 },
        { id: 'Y10-ENG-LY04-q4', type: 'mcq', prompt: 'Evaluating an author\'s organisation means asking…', options: ['Does this arrangement achieve the purpose effectively?', 'What font is used?', 'How long is the title?'], answer: 'Does this arrangement achieve the purpose effectively?', difficulty: 2 },
        { id: 'Y10-ENG-LY04-q5', type: 'mcq', prompt: 'An arrangement that leads the reader where the author intends is…', options: ['Effective organisation', 'Failed organisation', 'Unrelated to purpose'], answer: 'Effective organisation', difficulty: 1 },
        { id: 'Y10-ENG-LY04-q6', type: 'mcq', prompt: 'Organisation and audience are connected because…', options: ['Different audiences respond best to different arrangements', 'Audience never matters', 'Organisation is fixed forever'], answer: 'Different audiences respond best to different arrangements', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY05',
    title: 'Integrating comprehension strategies for complex ideas',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Complex and abstract ideas need more than one strategy at a time, you visualise to hold a scene, question to test a claim, infer to reach implied meaning, and summarise to keep the thread. In Year 10 you integrate these strategies into one flexible reading process.',
        'Integrating strategies means deploying the right ones for the task and shifting between them as meaning demands, so that difficult texts yield both understanding and critical judgement.',
      ],
      illustrations: [
        { brief: 'A set of strategy gears meshing together to decode a complex idea', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'eye', label: 'Visualise' }, { icon: 'magnifier', label: 'Question' }, { icon: 'crystal-ball', label: 'Infer' }, { icon: 'brain', label: 'Integrate' }], caption: 'Strategies working together' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY05-q1', type: 'mcq', prompt: 'Integrating comprehension strategies means…', options: ['Using several strategies flexibly to interpret complex ideas', 'Using only one strategy forever', 'Reading without thinking'], answer: 'Using several strategies flexibly to interpret complex ideas', difficulty: 1 },
        { id: 'Y10-ENG-LY05-q2', type: 'mcq', prompt: 'Inferring is most useful when a text…', options: ['Implies meaning without stating it directly', 'States everything literally', 'Contains no ideas'], answer: 'Implies meaning without stating it directly', difficulty: 2 },
        { id: 'Y10-ENG-LY05-q3', type: 'mcq', prompt: 'Questioning a claim while reading mainly helps a reader…', options: ['Test its validity rather than accept it blindly', 'Stop reading', 'Memorise the words'], answer: 'Test its validity rather than accept it blindly', difficulty: 2 },
        { id: 'Y10-ENG-LY05-q4', type: 'mcq', prompt: 'Summarising complex ideas helps a reader…', options: ['Keep hold of the thread across a long text', 'Forget the main points', 'Count the pages'], answer: 'Keep hold of the thread across a long text', difficulty: 2 },
        { id: 'Y10-ENG-LY05-q5', type: 'mcq', prompt: 'An abstract idea is one that…', options: ['Exists as a concept rather than a physical thing', 'Can be picked up', 'Is only a number'], answer: 'Exists as a concept rather than a physical thing', difficulty: 2 },
        { id: 'Y10-ENG-LY05-q6', type: 'mcq', prompt: 'Shifting between strategies as meaning demands is a sign of…', options: ['An integrated, flexible reading process', 'Confusion', 'A fixed single approach'], answer: 'An integrated, flexible reading process', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY06',
    title: 'Creating texts that experiment with features',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY06' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Creating written and multimodal texts at Year 10 means experimenting, with text structures, language features, literary devices and multimodal features, to achieve specific purposes and audiences in imaginative, reflective, informative, persuasive, analytical and/or critical ways.',
        'Experimentation is not chaos: you plan how to organise, expand and develop ideas, then test how each feature serves the purpose, editing until the experiment lands.',
      ],
      illustrations: [
        { brief: 'An experiment lab: choose a feature to experiment with, test, and refine', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Plan ideas & purpose' }, { text: 'Experiment with features' }, { text: 'Edit & refine' }, { text: 'Publish' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY06-q1', type: 'mcq', prompt: 'Experimenting with text features in creating a text means…', options: ['Trying structures and devices to serve a purpose', 'Avoiding all features', 'Only copying one model'], answer: 'Trying structures and devices to serve a purpose', difficulty: 1 },
        { id: 'Y10-ENG-LY06-q2', type: 'mcq', prompt: 'A text can be imaginative, reflective, informative, persuasive, analytical and/or critical depending on…', options: ['The purposes and audiences being served', 'The font size', 'The page count'], answer: 'The purposes and audiences being served', difficulty: 2 },
        { id: 'Y10-ENG-LY06-q3', type: 'mcq', prompt: 'Experimentation is strongest when each feature…', options: ['Has been tested against the purpose', 'Is used at random', 'Never changes'], answer: 'Has been tested against the purpose', difficulty: 2 },
        { id: 'Y10-ENG-LY06-q4', type: 'mcq', prompt: 'Planning how to organise and develop ideas happens…', options: ['Before drafting, to give the experiment direction', 'Only after publishing', 'Never'], answer: 'Before drafting, to give the experiment direction', difficulty: 2 },
        { id: 'Y10-ENG-LY06-q5', type: 'mcq', prompt: 'A multimodal text combines writing with…', options: ['Visual, audio or digital features', 'Nothing at all', 'Only more writing'], answer: 'Visual, audio or digital features', difficulty: 1 },
        { id: 'Y10-ENG-LY06-q6', type: 'mcq', prompt: 'Editing an experimental text mainly involves…', options: ['Refining until the features land for the audience', 'Removing all purpose', 'Making it longer for no reason'], answer: 'Refining until the features land for the audience', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY07',
    title: 'Presentations that experiment with rhetorical devices',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A Year 10 presentation experiments with rhetorical devices, anaphora that drums a message home, antithesis that sets ideas in sharp contrast, a rhetorical question that hands the audience an unspoken answer.',
        'You plan how to organise and develop ideas so the devices build rather than decorate, then rehearse and deliver to engage audiences for the specific purpose of your talk.',
      ],
      illustrations: [
        { brief: 'A presentation building: organised ideas, rhetorical devices, engaging delivery', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'trophy', label: 'Rhetorical devices' }, { icon: 'mic', label: 'Engaging delivery' }, { icon: 'people', label: 'Audience' }], caption: 'Devices that build an engaging talk' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY07-q1', type: 'mcq', prompt: 'Anaphora is the rhetorical device of…', options: ['Repeating a phrase at the start of successive lines', 'Asking a question', 'Ending a speech'], answer: 'Repeating a phrase at the start of successive lines', difficulty: 2 },
        { id: 'Y10-ENG-LY07-q2', type: 'mcq', prompt: 'Antithesis sets two ideas in…', options: ['Sharp contrast for effect', 'Identical repetition', 'Random order'], answer: 'Sharp contrast for effect', difficulty: 2 },
        { id: 'Y10-ENG-LY07-q3', type: 'mcq', prompt: 'A rhetorical question in a presentation mainly aims to…', options: ['Make the audience answer silently in their own minds', 'Require a spoken response', 'End the talk'], answer: 'Make the audience answer silently in their own minds', difficulty: 1 },
        { id: 'Y10-ENG-LY07-q4', type: 'mcq', prompt: 'Rhetorical devices work best when they…', options: ['Build on organised ideas rather than decorate alone', 'Appear at random', 'Replace all content'], answer: 'Build on organised ideas rather than decorate alone', difficulty: 2 },
        { id: 'Y10-ENG-LY07-q5', type: 'mcq', prompt: 'Rehearsing delivery mainly helps a presenter…', options: ['Time the devices so they land on the audience', 'Avoid preparing', 'Shorten the speech to nothing'], answer: 'Time the devices so they land on the audience', difficulty: 2 },
        { id: 'Y10-ENG-LY07-q6', type: 'mcq', prompt: 'The purpose of a presentation should determine…', options: ['Which devices and organisation are chosen', 'The number of pages', 'The font only'], answer: 'Which devices and organisation are chosen', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-ENG-LY08',
    title: 'Manipulating spelling for effect',
    year: '10',
    subject: 'english',
    strand: 'Literacy',
    cd: [{ ac: 'AC9E10LY08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'At Year 10 you both master the spelling system and learn to manipulate it. Using knowledge of how English spelling works, roots, affixes, patterns, generalisations, lets you spell unfamiliar words correctly and also break spelling deliberately for effect.',
        'Manipulating spelling means crafting respellings that represent dialect, create humour, signal character or make a point. It is a writer\'s tool only when the reader recognises the deliberate deviation from the standard.',
      ],
      illustrations: [
        { brief: 'A standard spelling transformed into a deliberate effect for character', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'pen', label: 'Standard: "going to"' }, { icon: 'chat-bubble', label: 'Effect: "gonna"' }, { icon: 'smiley', label: 'Voice & humour' }], caption: 'Breaking spelling on purpose' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-ENG-LY08-q1', type: 'mcq', prompt: 'Using knowledge of roots and affixes mainly helps a writer…', options: ['Spell unfamiliar words correctly', 'Avoid all new words', 'Remove suffixes'], answer: 'Spell unfamiliar words correctly', difficulty: 1 },
        { id: 'Y10-ENG-LY08-q2', type: 'mcq', prompt: 'Manipulating standard spelling means…', options: ['Deviating from it deliberately for effect', 'Always making errors by accident', 'Never changing a word'], answer: 'Deviating from it deliberately for effect', difficulty: 2 },
        { id: 'Y10-ENG-LY08-q3', type: 'mcq', prompt: 'A respelling representing a character\'s dialect mainly works because…', options: ['The reader recognises the deliberate deviation from standard', 'It is the only correct spelling', 'It is random'], answer: 'The reader recognises the deliberate deviation from standard', difficulty: 2 },
        { id: 'Y10-ENG-LY08-q4', type: 'mcq', prompt: 'Spelling manipulation can create…', options: ['Dialect, humour, character and emphasis', 'Only confusion', 'Nothing at all'], answer: 'Dialect, humour, character and emphasis', difficulty: 2 },
        { id: 'Y10-ENG-LY08-q5', type: 'mcq', prompt: 'The difference between an error and a manipulation is…', options: ['Whether the deviation is deliberate and meaningful', 'The word\'s length', 'The font'], answer: 'Whether the deviation is deliberate and meaningful', difficulty: 2 },
        { id: 'Y10-ENG-LY08-q6', type: 'mcq', prompt: 'Mastering the spelling system before manipulating it matters because…', options: ['Deliberate breaks are only recognised against a known standard', 'Spelling never matters', 'Rules should always be broken'], answer: 'Deliberate breaks are only recognised against a known standard', difficulty: 2 },
      ],
    },
  },
];
