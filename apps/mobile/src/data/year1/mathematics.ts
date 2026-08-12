import type { Topic } from '../../types/curriculum';

/**
 * Year 1 Mathematics — full topic bank.
 * Source of truth for scope: Australian Curriculum v9.0 (AC9M1xxx) content
 * descriptions for Number, Algebra, Measurement, Space and Statistics.
 * Every topic here carries its AC9M1xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model. Arithmetic
 * stays within 0-20 for addition/subtraction and skip counting in 2s/5s/10s
 * up to 120, so answers stay unambiguous for six-year-olds.
 */
export const YEAR1_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y1-MAT-NN01',
    title: 'Numbers to 120 & place value',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You are a number champion! In Year 1 you can count all the way to 120 and beyond.',
        'Every number is built from tens and ones - 47 has 4 tens and 7 ones, just like two handfuls of ten and a few fingers left over.',
        'Read it, say it, write it - big numbers are friendly once you know their place.',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 47 as tens and ones',
          ready: true,
          diagram: { kind: 'place-value', digits: '47', labels: ['T', 'O'] },
        },
        {
          brief: 'A number line from 0 to 120 with 60 marked on the way up',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 120, marks: [{ value: 60, label: '60' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN01-q1', type: 'mcq', prompt: 'What number comes right after 119?', options: ['120', '121', '129'], answer: '120', difficulty: 2 },
        { id: 'Y1-MAT-NN01-q2', type: 'mcq', prompt: 'How many tens are in 60?', options: ['6', '60', '0'], answer: '6', difficulty: 1 },
        { id: 'Y1-MAT-NN01-q3', type: 'short', prompt: 'Write the number that comes after 99.', answer: '100', difficulty: 2 },
        { id: 'Y1-MAT-NN01-q4', type: 'mcq', prompt: 'Which number is bigger: 85 or 58?', options: ['85', '58', "They're the same"], answer: '85', difficulty: 1 },
        { id: 'Y1-MAT-NN01-q5', type: 'short', prompt: 'How many ones are in 47?', answer: '7', difficulty: 1 },
        { id: 'Y1-MAT-NN01-q6', type: 'mcq', prompt: 'What is 10 more than 45?', options: ['46', '55', '50'], answer: '55', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-NN02',
    title: 'Partitioning numbers & tens/ones',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Split numbers into parts and they feel easier - 37 is 30 and 7 put together.',
        'The tens are the big bites and the ones are the small bites. Pull a number apart and pop it back together!',
        'Partitioning is your superpower, and it will help you add later on.',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 37 as tens and ones',
          ready: true,
          diagram: { kind: 'place-value', digits: '37', labels: ['T', 'O'] },
        },
        {
          brief: 'A number line showing 30 plus 7 lands on 37',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 40, marks: [{ value: 30, label: '30' }, { value: 37, label: '37' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN02-q1', type: 'mcq', prompt: '24 is 2 tens and how many ones?', options: ['4', '2', '40'], answer: '4', difficulty: 1 },
        { id: 'Y1-MAT-NN02-q2', type: 'mcq', prompt: '5 tens and 3 ones make which number?', options: ['53', '35', '8'], answer: '53', difficulty: 1 },
        { id: 'Y1-MAT-NN02-q3', type: 'short', prompt: '36 = 30 + __', answer: '6', difficulty: 1 },
        { id: 'Y1-MAT-NN02-q4', type: 'mcq', prompt: 'Which number has 8 tens and 2 ones?', options: ['82', '28', '802'], answer: '82', difficulty: 2 },
        { id: 'Y1-MAT-NN02-q5', type: 'short', prompt: '4 tens and 5 ones is the number __.', answer: '45', difficulty: 2 },
        { id: 'Y1-MAT-NN02-q6', type: 'mcq', prompt: 'In 67, the digit 6 is worth...', options: ['6 tens', '6 ones', '6 hundreds'], answer: '6 tens', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-NN03',
    title: 'Equal groups & skip counting',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Skip counting is like jumping in big steps - 2, 4, 6, 8!',
        'Equal groups have the same number in each group, like 2 groups of 5 apples.',
        'Counting in 2s, 5s and 10s lets you count heaps of things super fast.',
      ],
      illustrations: [
        {
          brief: 'A 2 by 5 dot array showing two equal groups of 5',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 5, label: '2 groups of 5 = 10' },
        },
        {
          brief: 'A number line hopping in 5s from 0 to 20',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 5, label: '5' }, { value: 10, label: '10' }, { value: 15, label: '15' }, { value: 20, label: '20' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN03-q1', type: 'short', prompt: 'Skip count in 2s: 2, 4, 6, 8, __.', answer: '10', difficulty: 1 },
        { id: 'Y1-MAT-NN03-q2', type: 'mcq', prompt: 'Skip count in 5s: 5, 10, 15, __.', options: ['20', '16', '25'], answer: '20', difficulty: 1 },
        { id: 'Y1-MAT-NN03-q3', type: 'mcq', prompt: 'Skip count in 10s: 10, 20, 30, 40, __.', options: ['50', '44', '45'], answer: '50', difficulty: 1 },
        { id: 'Y1-MAT-NN03-q4', type: 'mcq', prompt: '3 bikes each have 2 wheels. How many wheels altogether?', options: ['6', '5', '8'], answer: '6', difficulty: 2 },
        { id: 'Y1-MAT-NN03-q5', type: 'mcq', prompt: 'Which number comes next: 60, 70, 80, __?', options: ['90', '81', '100'], answer: '90', difficulty: 2 },
        { id: 'Y1-MAT-NN03-q6', type: 'short', prompt: 'Skip count in 5s to finish: 5, 10, 15, 20, __.', answer: '25', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-NN04',
    title: 'Add & subtract within 20',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N04' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Adding and subtracting is just joining and taking away - 9 + 6 makes 15.',
        'Count on your fingers, hop along a number line, or count on in your head.',
        'Every time you get one right, your maths muscles grow bigger!',
      ],
      illustrations: [
        {
          brief: 'A number line showing 9 then hopping 6 more to land on 15',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 9, label: '9' }, { value: 15, label: '9 + 6 = 15' }] },
        },
        {
          brief: 'A balance scale showing 15 balances 9 + 6',
          ready: true,
          diagram: { kind: 'balance-scale', left: '15', right: '9 + 6', balanced: true },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN04-q1', type: 'short', prompt: '7 + 8 = __', answer: '15', difficulty: 1 },
        { id: 'Y1-MAT-NN04-q2', type: 'short', prompt: '12 - 5 = __', answer: '7', difficulty: 2 },
        { id: 'Y1-MAT-NN04-q3', type: 'mcq', prompt: 'What is 9 + 6?', options: ['15', '14', '16'], answer: '15', difficulty: 1 },
        { id: 'Y1-MAT-NN04-q4', type: 'mcq', prompt: 'What is 16 - 9?', options: ['7', '6', '5'], answer: '7', difficulty: 2 },
        { id: 'Y1-MAT-NN04-q5', type: 'short', prompt: '11 + 8 = __', answer: '19', difficulty: 1 },
        { id: 'Y1-MAT-NN04-q6', type: 'mcq', prompt: 'What is 14 - 8?', options: ['6', '5', '7'], answer: '6', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-NN05',
    title: 'Money & additive situations (modelling)',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Australian money is fun to know - coins come in 5c, 10c, 20c, 50c and more.',
        'A 5c coin and a 10c coin together make 15c. Add coins up and buy little things at a pretend shop!',
        'Money maths helps you in real life, like counting your pocket money.',
      ],
      illustrations: [
        {
          brief: 'A 5c coin plus a 10c coin joining to make 15c',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'coin', label: '5c' }, { icon: 'coin', label: '10c' }, { icon: 'coin', label: '15c' }], caption: '5c + 10c = 15c' },
        },
        {
          brief: 'A number line landing on 15c after adding the two coins',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 15, label: '15c' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN05-q1', type: 'mcq', prompt: 'A 5c coin plus a 10c coin makes how many cents?', options: ['15', '20', '10'], answer: '15', difficulty: 1 },
        { id: 'Y1-MAT-NN05-q2', type: 'mcq', prompt: 'Which coin is worth the most?', options: ['20c', '10c', '5c'], answer: '20c', difficulty: 1 },
        { id: 'Y1-MAT-NN05-q3', type: 'short', prompt: '10 + 5 = __', answer: '15', difficulty: 1 },
        { id: 'Y1-MAT-NN05-q4', type: 'mcq', prompt: 'A pencil costs 10c and a sticker costs 5c. How much together?', options: ['15c', '5c', '20c'], answer: '15c', difficulty: 2 },
        { id: 'Y1-MAT-NN05-q5', type: 'mcq', prompt: 'Which coin is worth the least?', options: ['5c', '10c', '20c'], answer: '5c', difficulty: 1 },
        { id: 'Y1-MAT-NN05-q6', type: 'mcq', prompt: 'Two 5c coins make how many cents?', options: ['10c', '5c', '15c'], answer: '10c', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-NN06',
    title: 'Equal sharing & grouping (modelling)',
    year: '1',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M1N06' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Sharing fairly means everyone gets the same - 6 apples shared between 2 friends gives each 3.',
        'Grouping is the other way round: putting things into equal teams.',
        'You already share like a champion - think of food, toys and jobs!',
      ],
      illustrations: [
        {
          brief: 'A 2 by 3 dot array showing 6 shared into two groups of 3',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 3, label: '6 shared into 2 groups of 3' },
        },
        {
          brief: 'A balance scale showing 6 balances 3 + 3',
          ready: true,
          diagram: { kind: 'balance-scale', left: '6', right: '3 + 3', balanced: true },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-NN06-q1', type: 'mcq', prompt: '6 apples shared between 2 friends. Each friend gets...', options: ['3', '2', '6'], answer: '3', difficulty: 1 },
        { id: 'Y1-MAT-NN06-q2', type: 'mcq', prompt: '8 cookies shared between 4 children. Each child gets...', options: ['2', '4', '8'], answer: '2', difficulty: 2 },
        { id: 'Y1-MAT-NN06-q3', type: 'short', prompt: '10 shared into 2 equal groups. Each group has __.', answer: '5', difficulty: 2 },
        { id: 'Y1-MAT-NN06-q4', type: 'mcq', prompt: '6 lollies shared between 3 friends. Each friend gets...', options: ['2', '3', '6'], answer: '2', difficulty: 2 },
        { id: 'Y1-MAT-NN06-q5', type: 'short', prompt: '12 shared into 2 equal groups. Each group has __.', answer: '6', difficulty: 2 },
        { id: 'Y1-MAT-NN06-q6', type: 'mcq', prompt: '10 counters put into 5 equal groups. Each group has...', options: ['2', '5', '10'], answer: '2', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-AL01',
    title: 'Number patterns & skip counting',
    year: '1',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M1A01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Number patterns march along with a rule - 2, 4, 6, 8 adds 2 each time.',
        'Find the rule, then keep going! You can predict what comes next without counting one by one.',
        'Patterns are everywhere, even in the songs you sing.',
      ],
      illustrations: [
        {
          brief: 'A number line hopping in 2s from 0 to 10',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 2, label: '2' }, { value: 4, label: '4' }, { value: 6, label: '6' }, { value: 8, label: '8' }, { value: 10, label: '10' }] },
        },
        {
          brief: 'A bar chart of the pattern 2, 4, 6, 8 getting bigger each term',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: '1st', value: 2 }, { label: '2nd', value: 4 }, { label: '3rd', value: 6 }, { label: '4th', value: 8 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-AL01-q1', type: 'short', prompt: 'Continue the pattern: 2, 4, 6, 8, __.', answer: '10', difficulty: 1 },
        { id: 'Y1-MAT-AL01-q2', type: 'mcq', prompt: 'What is the rule for 5, 10, 15, 20?', options: ['Add 5', 'Add 2', 'Add 10'], answer: 'Add 5', difficulty: 1 },
        { id: 'Y1-MAT-AL01-q3', type: 'mcq', prompt: 'What comes next: 3, 6, 9, 12, __?', options: ['15', '13', '18'], answer: '15', difficulty: 2 },
        { id: 'Y1-MAT-AL01-q4', type: 'short', prompt: 'Continue the pattern: 10, 20, 30, __.', answer: '40', difficulty: 1 },
        { id: 'Y1-MAT-AL01-q5', type: 'mcq', prompt: 'What is the rule for 2, 4, 6, 8?', options: ['Add 2', 'Add 5', 'Add 1'], answer: 'Add 2', difficulty: 1 },
        { id: 'Y1-MAT-AL01-q6', type: 'mcq', prompt: 'Which number is missing: 5, 10, __, 20?', options: ['15', '14', '16'], answer: '15', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-AL02',
    title: 'Repeating patterns',
    year: '1',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M1A02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A repeating pattern has a part that keeps coming back - like cat, dog, cat, dog.',
        'Name the pattern to grow your brain: AB, AB, AB or AAB, AAB.',
        'Say it out loud, then continue it - you will never get stuck!',
      ],
      illustrations: [
        {
          brief: 'A paw-ball paw-ball ABAB repeating pattern row',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'paw', label: 'A' }, { icon: 'ball', label: 'B' }, { icon: 'paw', label: 'A' }, { icon: 'ball', label: 'B' }], caption: 'ABAB repeating pattern' },
        },
        {
          brief: 'Flow of steps for continuing a repeating pattern',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Look for the part that repeats' }, { text: 'Name the pattern (like AB)' }, { text: 'Continue the pattern' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-AL02-q1', type: 'mcq', prompt: 'What comes next: red, blue, red, blue, __?', options: ['red', 'blue', 'yellow'], answer: 'red', difficulty: 1 },
        { id: 'Y1-MAT-AL02-q2', type: 'mcq', prompt: 'Circle, square, circle, __ - what comes next in this ABAB pattern?', options: ['square', 'circle', 'triangle'], answer: 'square', difficulty: 2 },
        { id: 'Y1-MAT-AL02-q3', type: 'mcq', prompt: 'What comes next: A, A, B, A, A, __?', options: ['B', 'A', 'C'], answer: 'B', difficulty: 2 },
        { id: 'Y1-MAT-AL02-q4', type: 'mcq', prompt: 'The part of a repeating pattern that keeps repeating is called the...', options: ['core', 'cover', 'colour'], answer: 'core', difficulty: 2 },
        { id: 'Y1-MAT-AL02-q5', type: 'mcq', prompt: 'Which pattern is ABAB?', options: ['Cat, dog, cat, dog', 'Cat, cat, dog, dog', 'Cat, dog, dog, cat'], answer: 'Cat, dog, cat, dog', difficulty: 2 },
        { id: 'Y1-MAT-AL02-q6', type: 'mcq', prompt: 'What comes next: star, moon, star, moon, __?', options: ['star', 'moon', 'sun'], answer: 'star', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-MAT-ME01',
    title: 'Comparing length, mass, capacity & duration',
    year: '1',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M1M01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Compare things by lining them up - the pencil is longer than the crayon.',
        'Hold two things and feel: the brick is heavier, the feather is lighter.',
        'Some things hold more water, and some moments last longer. Comparing is easy and fun!',
      ],
      illustrations: [
        {
          brief: 'A bar chart comparing a pencil at 5 blocks and a crayon at 3 blocks',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'blocks', items: [{ label: 'Pencil', value: 5 }, { label: 'Crayon', value: 3 }] },
        },
        {
          brief: 'A brick and a ball scene showing the brick is heavier',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: 'brick' }, { icon: 'ball', label: 'ball' }], caption: 'The brick is heavier than the ball' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-ME01-q1', type: 'mcq', prompt: 'Which is longer: a pencil or a crayon?', options: ['pencil', 'crayon', "They're the same"], answer: 'pencil', difficulty: 1 },
        { id: 'Y1-MAT-ME01-q2', type: 'mcq', prompt: 'Which is heavier: a brick or a ball?', options: ['brick', 'ball', "They're the same"], answer: 'brick', difficulty: 1 },
        { id: 'Y1-MAT-ME01-q3', type: 'mcq', prompt: 'Which holds more water: a cup or a bucket?', options: ['bucket', 'cup', "They're the same"], answer: 'bucket', difficulty: 1 },
        { id: 'Y1-MAT-ME01-q4', type: 'mcq', prompt: 'Which is heavier: an elephant or a mouse?', options: ['elephant', 'mouse', "They're the same"], answer: 'elephant', difficulty: 1 },
        { id: 'Y1-MAT-ME01-q5', type: 'mcq', prompt: 'Which takes longer: a minute or an hour?', options: ['an hour', 'a minute', "They're the same"], answer: 'an hour', difficulty: 2 },
        { id: 'Y1-MAT-ME01-q6', type: 'mcq', prompt: 'Which is longer: a giraffe or a dog?', options: ['giraffe', 'dog', "They're the same"], answer: 'giraffe', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-MAT-ME02',
    title: 'Measuring length with informal units',
    year: '1',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M1M02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Measure anything with little units you can carry - paperclips, blocks or hand spans.',
        'A book that is 5 blocks long is 5 blocks long, no matter who measures it!',
        'Line up your units carefully, count them, and you are a real measurer.',
      ],
      illustrations: [
        {
          brief: 'A bar chart comparing a desk at 6 blocks and a chair at 4 blocks',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'blocks', items: [{ label: 'Desk', value: 6 }, { label: 'Chair', value: 4 }] },
        },
        {
          brief: 'A ruler, a block and a hand-span scene for informal units',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'paperclips' }, { icon: 'box', label: 'blocks' }, { icon: 'paw', label: 'hand spans' }], caption: 'Measure with paperclips, blocks or hand spans' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-ME02-q1', type: 'mcq', prompt: 'A pencil is about 6 paperclips long. A crayon is about 3 paperclips long. Which is longer?', options: ['pencil', 'crayon', "They're the same"], answer: 'pencil', difficulty: 1 },
        { id: 'Y1-MAT-ME02-q2', type: 'short', prompt: 'A book is 5 blocks long. Two books end to end are __ blocks long.', answer: '10', difficulty: 2 },
        { id: 'Y1-MAT-ME02-q3', type: 'mcq', prompt: 'Which measuring unit is bigger: a paperclip or a hand span?', options: ['hand span', 'paperclip', "They're the same"], answer: 'hand span', difficulty: 2 },
        { id: 'Y1-MAT-ME02-q4', type: 'short', prompt: 'A table is 8 blocks long and a chair is 5 blocks long. The table is __ blocks longer.', answer: '3', difficulty: 2 },
        { id: 'Y1-MAT-ME02-q5', type: 'mcq', prompt: 'Using paperclips, a longer object needs...', options: ['more paperclips', 'fewer paperclips', 'the same number'], answer: 'more paperclips', difficulty: 1 },
        { id: 'Y1-MAT-ME02-q6', type: 'mcq', prompt: 'Which is best to measure the classroom desk: hand spans or paperclips?', options: ['hand spans', 'paperclips', "They're the same"], answer: 'hand spans', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-ME03',
    title: 'Days, weeks, months & hours',
    year: '1',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M1M03' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'The week has 7 days and the year has 12 months - say them in order like a song.',
        'A clock tells the hours, and the days march on: Monday, Tuesday, Wednesday...',
        'You are getting cleverer at time every single day!',
      ],
      illustrations: [
        {
          brief: 'A calendar and a clock scene for days, weeks, months and hours',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'calendar', label: '7 days in a week' }, { icon: 'clock', label: 'hours' }], caption: 'Days, weeks, months and hours' },
        },
        {
          brief: 'Flow of days in order: Monday, Tuesday, Wednesday',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Monday' }, { text: 'Tuesday' }, { text: 'Wednesday' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-ME03-q1', type: 'mcq', prompt: 'How many days are in one week?', options: ['7', '5', '12'], answer: '7', difficulty: 1 },
        { id: 'Y1-MAT-ME03-q2', type: 'mcq', prompt: 'Which day comes after Monday?', options: ['Tuesday', 'Sunday', 'Wednesday'], answer: 'Tuesday', difficulty: 1 },
        { id: 'Y1-MAT-ME03-q3', type: 'mcq', prompt: 'How many months are in one year?', options: ['12', '10', '7'], answer: '12', difficulty: 1 },
        { id: 'Y1-MAT-ME03-q4', type: 'mcq', prompt: 'Which is longer: a day or a week?', options: ['a week', 'a day', "They're the same"], answer: 'a week', difficulty: 1 },
        { id: 'Y1-MAT-ME03-q5', type: 'mcq', prompt: 'The short hand on a clock shows the...', options: ['hours', 'minutes', 'seconds'], answer: 'hours', difficulty: 2 },
        { id: 'Y1-MAT-ME03-q6', type: 'mcq', prompt: "Lunch is at 12 o'clock. Which shows 12 o'clock?", options: ['12:00', '12:30', '2:00'], answer: '12:00', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-MAT-SP01',
    title: 'Recognising & classifying shapes',
    year: '1',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M1SP01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Look at a shape and count its sides - a triangle has 3 and a square has 4.',
        'Some shapes are flat like a paper square, and some pop out like a cube you can hold.',
        'Sort shapes into groups and you will spot their secret patterns.',
      ],
      illustrations: [
        {
          brief: 'A triangle, square, cube and ball scene for flat and solid shapes',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'triangle-shape', label: 'triangle' }, { icon: 'picture-frame', label: 'square' }, { icon: 'cube', label: 'cube' }, { icon: 'ball', label: 'ball' }], caption: 'Flat shapes and solid shapes' },
        },
        {
          brief: 'A bar chart sorting shapes: 3 triangles, 2 circles, 1 square',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'triangles', value: 3 }, { label: 'circles', value: 2 }, { label: 'squares', value: 1 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-SP01-q1', type: 'mcq', prompt: 'Which shape has 3 sides?', options: ['triangle', 'square', 'circle'], answer: 'triangle', difficulty: 1 },
        { id: 'Y1-MAT-SP01-q2', type: 'mcq', prompt: 'Which shape has 4 equal sides?', options: ['square', 'triangle', 'circle'], answer: 'square', difficulty: 1 },
        { id: 'Y1-MAT-SP01-q3', type: 'mcq', prompt: 'A ball is like which solid shape?', options: ['sphere', 'cube', 'cone'], answer: 'sphere', difficulty: 2 },
        { id: 'Y1-MAT-SP01-q4', type: 'mcq', prompt: 'How many corners does a square have?', options: ['4', '3', '0'], answer: '4', difficulty: 1 },
        { id: 'Y1-MAT-SP01-q5', type: 'short', prompt: 'Which shape has no corners?', answer: 'circle', difficulty: 1 },
        { id: 'Y1-MAT-SP01-q6', type: 'mcq', prompt: 'A tissue box is like which solid shape?', options: ['cube', 'sphere', 'triangle'], answer: 'cube', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-SP02',
    title: 'Directions & movement',
    year: '1',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M1SP02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Give and follow directions like a treasure hunt - forward, back, left and right.',
        'Turn a quarter turn, then another, and you can spin all the way around.',
        'You can guide a friend to the door just by using clever direction words!',
      ],
      illustrations: [
        {
          brief: 'A treasure-hunt path: forward 3, turn left, forward 2',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Forward 3 steps' }, { text: 'Turn left' }, { text: 'Forward 2 steps' }] },
        },
        {
          brief: 'A walker and direction arrows scene for forward, back, left and right',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'walker', label: 'walk forward' }, { icon: 'arrow-right', label: 'turn right' }, { icon: 'traffic-light', label: 'left or right?' }], caption: 'Forward, back, left and right' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-SP02-q1', type: 'mcq', prompt: 'You are facing the front of the room. Which way is behind you?', options: ['the opposite way', 'up', 'to the side'], answer: 'the opposite way', difficulty: 1 },
        { id: 'Y1-MAT-SP02-q2', type: 'mcq', prompt: 'How many quarter turns make a full turn all the way around?', options: ['4', '2', '1'], answer: '4', difficulty: 2 },
        { id: 'Y1-MAT-SP02-q3', type: 'mcq', prompt: 'You walk forward 3 steps, then back 2 steps. How many steps from where you started?', options: ['1', '5', '3'], answer: '1', difficulty: 2 },
        { id: 'Y1-MAT-SP02-q4', type: 'mcq', prompt: 'The cat sits on top of the box. The cat is...', options: ['above the box', 'below the box', 'next door'], answer: 'above the box', difficulty: 1 },
        { id: 'Y1-MAT-SP02-q5', type: 'mcq', prompt: 'To reach the door on your left, you should turn...', options: ['left', 'right', 'around'], answer: 'left', difficulty: 1 },
        { id: 'Y1-MAT-SP02-q6', type: 'mcq', prompt: 'When you go up the stairs, you move...', options: ['up', 'down', 'sideways'], answer: 'up', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y1-MAT-ST01',
    title: 'Collecting data (categorical)',
    year: '1',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M1ST01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Ask a question, collect the answers, and you are collecting data - like a mini scientist.',
        '"What is your favourite pet?" is a great question to ask your friends.',
        'Write tallies or marks, then count them up to find the winner!',
      ],
      illustrations: [
        {
          brief: 'A bar chart tallying favourite pets: Dog 5, Cat 3, Fish 2',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'Dog', value: 5 }, { label: 'Cat', value: 3 }, { label: 'Fish', value: 2 }] },
        },
        {
          brief: 'Flow of a survey: ask, collect, count',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Ask a question' }, { text: 'Collect the answers' }, { text: 'Count the tallies' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-ST01-q1', type: 'mcq', prompt: 'We ask friends about their favourite pet and write tallies. This is called...', options: ['collecting data', 'playing a game', 'drawing a house'], answer: 'collecting data', difficulty: 1 },
        { id: 'Y1-MAT-ST01-q2', type: 'mcq', prompt: 'Survey: Dog 5, Cat 3, Fish 2. Which pet was the most popular?', options: ['Dog', 'Cat', 'Fish'], answer: 'Dog', difficulty: 1 },
        { id: 'Y1-MAT-ST01-q3', type: 'mcq', prompt: 'A question with answers like red, blue, green collects...', options: ['categorical data', 'dinosaur data', 'weather data'], answer: 'categorical data', difficulty: 2 },
        { id: 'Y1-MAT-ST01-q4', type: 'short', prompt: 'Dog got 5 tallies and Cat got 3. How many more tallies for Dog?', answer: '2', difficulty: 2 },
        { id: 'Y1-MAT-ST01-q5', type: 'mcq', prompt: 'What is a good way to record answers from a survey?', options: ['tally marks', 'guessing', 'hiding them'], answer: 'tally marks', difficulty: 1 },
        { id: 'Y1-MAT-ST01-q6', type: 'mcq', prompt: 'Dog 5 + Cat 3 + Fish 2. How many friends answered all together?', options: ['10', '8', '5'], answer: '10', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y1-MAT-ST02',
    title: 'One-to-one data displays',
    year: '1',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M1ST02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A picture graph shows data with pictures - one picture for one child.',
        'Count the pictures to see which fruit was the favourite, at a glance!',
        'Reading a graph is like reading a secret code - you have the key!',
      ],
      illustrations: [
        {
          brief: 'A picture graph of favourite fruit: Apple 3, Banana 2, Orange 1',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'Apple', value: 3 }, { label: 'Banana', value: 2 }, { label: 'Orange', value: 1 }] },
        },
        {
          brief: 'Flow of reading a picture graph: look, count, compare',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Look at the pictures' }, { text: 'Count each row' }, { text: 'Compare to find the most' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y1-MAT-ST02-q1', type: 'mcq', prompt: 'In a one-to-one picture graph, each picture stands for...', options: ['1 child', '2 children', '10 children'], answer: '1 child', difficulty: 1 },
        { id: 'Y1-MAT-ST02-q2', type: 'short', prompt: 'The picture graph shows Apple 3, Banana 2, Orange 1. How many children chose apple?', answer: '3', difficulty: 1 },
        { id: 'Y1-MAT-ST02-q3', type: 'mcq', prompt: 'Which fruit did the fewest children choose?', options: ['orange', 'banana', 'apple'], answer: 'orange', difficulty: 1 },
        { id: 'Y1-MAT-ST02-q4', type: 'short', prompt: 'Apple 3 and Banana 2 together. How many children chose apple or banana?', answer: '5', difficulty: 2 },
        { id: 'Y1-MAT-ST02-q5', type: 'mcq', prompt: 'Why are picture graphs handy?', options: ['they make data easy to see and compare', 'they are for drawing only', 'they cannot show numbers'], answer: 'they make data easy to see and compare', difficulty: 2 },
        { id: 'Y1-MAT-ST02-q6', type: 'mcq', prompt: 'The graph shows 4 children chose dogs and 2 chose cats. Which was the most popular?', options: ['dogs', 'cats', "They're the same"], answer: 'dogs', difficulty: 1 },
      ],
    },
  },
];
