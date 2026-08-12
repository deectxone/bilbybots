import type { Topic } from '../../types/curriculum';

/**
 * Year 2 Mathematics — full topic bank.
 * Source of truth for scope: docs/content/year-2/mathematics.md (AC v9.0).
 * Every topic here carries its AC9M2xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR2_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y2-MAT-NN01',
    title: 'Numbers to 1000 & place value',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big numbers are everywhere — you can count all the way to 1000!',
        'In 356, the 3 means 3 hundreds, the 5 means 5 tens, and the 6 means 6 ones.',
        'Place value is the secret code that tells you what each digit is really worth.',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 356 split into hundreds, tens and ones',
          ready: true,
          diagram: { kind: 'place-value', digits: '356', labels: ['H', 'T', 'O'] },
        },
        {
          brief: 'A number line from 0 to 1000 with 356, 500 and 750 marked on it',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 1000, marks: [{ value: 356, label: '356' }, { value: 500, label: '500' }, { value: 750, label: '750' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN01-q1', type: 'mcq', prompt: 'Which digit is in the hundreds place in 356?', options: ['3', '5', '6', '0'], answer: '3', difficulty: 1 },
        { id: 'Y2-MAT-NN01-q2', type: 'short', prompt: 'What is the value of the 5 in 356?', answer: '50', difficulty: 2 },
        { id: 'Y2-MAT-NN01-q3', type: 'mcq', prompt: 'Which number has a 4 in the tens place?', options: ['143', '268', '340'], answer: '143', difficulty: 2 },
        { id: 'Y2-MAT-NN01-q4', type: 'short', prompt: 'What number is 200 + 30 + 5?', answer: '235', difficulty: 1 },
        { id: 'Y2-MAT-NN01-q5', type: 'mcq', prompt: 'How many tens are in 270?', options: ['2', '7', '0'], answer: '7', difficulty: 2 },
        { id: 'Y2-MAT-NN01-q6', type: 'mcq', prompt: 'Which is the biggest number?', options: ['523', '325', '532'], answer: '532', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-NN02',
    title: 'Partitioning 3-digit numbers & zero',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'You can break a number into friendlier pieces — 352 is the same as 300 + 50 + 2.',
        'Zero is a sneaky placeholder: in 205 there are no tens, so zero holds their spot.',
        'Splitting numbers apart and putting them back together makes you a number hero.',
      ],
      illustrations: [
        {
          brief: 'Place-value house showing 205 with zero holding the tens spot',
          ready: true,
          diagram: { kind: 'place-value', digits: '205', labels: ['H', 'T', 'O'] },
        },
        {
          brief: 'A number line from 0 to 1000 with 205 and 352 marked on it',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 1000, marks: [{ value: 205, label: '205' }, { value: 352, label: '352' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN02-q1', type: 'short', prompt: 'Write 352 as hundreds + tens + ones.', answer: '300 + 50 + 2', difficulty: 2 },
        { id: 'Y2-MAT-NN02-q2', type: 'mcq', prompt: 'In 205, what does the 0 stand for?', options: ['Zero ones', 'Zero tens', 'Zero hundreds'], answer: 'Zero tens', difficulty: 2 },
        { id: 'Y2-MAT-NN02-q3', type: 'mcq', prompt: 'Which is the same as 500 + 40 + 3?', options: ['543', '534', '403'], answer: '543', difficulty: 1 },
        { id: 'Y2-MAT-NN02-q4', type: 'short', prompt: 'What is 700 + 0 + 9?', answer: '709', difficulty: 2 },
        { id: 'Y2-MAT-NN02-q5', type: 'mcq', prompt: 'How many ones are in 640?', options: ['0', '4', '6'], answer: '0', difficulty: 1 },
        { id: 'Y2-MAT-NN02-q6', type: 'mcq', prompt: 'Which number has 0 tens?', options: ['908', '980', '890'], answer: '908', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-NN03',
    title: 'Halves, quarters & eighths',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A half is one of two equal pieces, a quarter is one of four, and an eighth is one of eight.',
        'Two quarters make a half, and two eighths make a quarter — the pieces just need to be equal.',
        'Cutting pizzas and cakes into fair shares is one of the tastiest maths jobs around.',
      ],
      illustrations: [
        {
          brief: 'Fraction bars showing that 1/2, 2/4 and 4/8 are the same amount',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 2, filled: 1, label: '1/2' }, { segments: 4, filled: 2, label: '2/4' }, { segments: 8, filled: 4, label: '4/8' }] },
        },
        {
          brief: 'Pies showing a half, a quarter and an eighth',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 2, filled: 1, label: 'half' }, { slices: 4, filled: 1, label: 'quarter' }, { slices: 8, filled: 1, label: 'eighth' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN03-q1', type: 'mcq', prompt: 'How many quarters make a half?', options: ['1', '2', '4'], answer: '2', difficulty: 1 },
        { id: 'Y2-MAT-NN03-q2', type: 'mcq', prompt: 'How many eighths make a whole?', options: ['4', '6', '8'], answer: '8', difficulty: 1 },
        { id: 'Y2-MAT-NN03-q3', type: 'short', prompt: 'How many eighths make a quarter?', answer: '2', difficulty: 2 },
        { id: 'Y2-MAT-NN03-q4', type: 'mcq', prompt: 'Which piece is the biggest?', options: ['A half', 'A quarter', 'An eighth'], answer: 'A half', difficulty: 1 },
        { id: 'Y2-MAT-NN03-q5', type: 'mcq', prompt: 'A pizza cut into 8 equal slices — each slice is...', options: ['An eighth', 'A quarter', 'A half'], answer: 'An eighth', difficulty: 1 },
        { id: 'Y2-MAT-NN03-q6', type: 'short', prompt: 'How many eighths are the same as one half?', answer: '4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-NN04',
    title: 'Add & subtract one-/two-digit numbers',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Add when things come together, take away when they leave — you can use your fingers, tens frames or a number line.',
        '36 + 24 is easier when you add the tens first (30 + 20 = 50), then the ones (6 + 4 = 10), and put them together: 60.',
        'Every answer you check makes your maths brain stronger — give it a go!',
      ],
      illustrations: [
        {
          brief: 'A number line jumping from 36 to 60 to show 36 + 24 = 60',
          ready: true,
          diagram: { kind: 'number-line', min: 30, max: 70, marks: [{ value: 36, label: '36' }, { value: 60, label: '36 + 24 = 60' }] },
        },
        {
          brief: 'A number line showing 80 minus 28 landing on 52',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 52, label: '80 − 28 = 52' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN04-q1', type: 'short', prompt: '36 + 24 = ?', answer: '60', difficulty: 2 },
        { id: 'Y2-MAT-NN04-q2', type: 'short', prompt: '80 − 28 = ?', answer: '52', difficulty: 2 },
        { id: 'Y2-MAT-NN04-q3', type: 'mcq', prompt: 'Which number equals 45 + 35?', options: ['70', '80', '90'], answer: '80', difficulty: 2 },
        { id: 'Y2-MAT-NN04-q4', type: 'short', prompt: '24 + 15 = ?', answer: '39', difficulty: 1 },
        { id: 'Y2-MAT-NN04-q5', type: 'mcq', prompt: '50 − 23 = ?', options: ['27', '33', '37'], answer: '27', difficulty: 2 },
        { id: 'Y2-MAT-NN04-q6', type: 'mcq', prompt: 'There were 67 birds, then 12 flew away. How many are left?', options: ['55', '65', '79'], answer: '55', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-NN05',
    title: 'Multiplication & division basics',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N05' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'Multiplication is fast counting in equal groups — 3 groups of 4 is 3 × 4 = 12.',
        'Division shares things out fairly — if 12 apples are shared between 3 friends, each gets 4.',
        'Groups of dots are the perfect way to see both at once.',
      ],
      illustrations: [
        {
          brief: 'A 3 by 4 dot array showing 3 × 4 = 12',
          ready: true,
          diagram: { kind: 'dot-array', rows: 3, cols: 4, label: '3 × 4 = 12' },
        },
        {
          brief: 'A 2 by 6 dot array showing 2 × 6 = 12',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 6, label: '2 × 6 = 12' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN05-q1', type: 'mcq', prompt: '3 groups of 4 is...', options: ['7', '12', '15'], answer: '12', difficulty: 1 },
        { id: 'Y2-MAT-NN05-q2', type: 'short', prompt: '2 × 6 = ?', answer: '12', difficulty: 1 },
        { id: 'Y2-MAT-NN05-q3', type: 'mcq', prompt: '12 apples shared between 3 friends — each gets...', options: ['3', '4', '6'], answer: '4', difficulty: 2 },
        { id: 'Y2-MAT-NN05-q4', type: 'short', prompt: '10 dots in 2 equal groups — how many in each?', answer: '5', difficulty: 1 },
        { id: 'Y2-MAT-NN05-q5', type: 'mcq', prompt: 'Which is the same as 4 groups of 5?', options: ['4 + 5', '4 × 5', '5 − 4'], answer: '4 × 5', difficulty: 2 },
        { id: 'Y2-MAT-NN05-q6', type: 'short', prompt: '20 ÷ 4 = ?', answer: '5', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-MAT-NN06',
    title: 'Modelling: additive & multiplicative problems',
    year: '2',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M2N06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Real problems can be turned into maths — like working out how many cupcakes to bake for the party.',
        'Read carefully, choose the right operation, then check your answer makes sense.',
        'You are already a problem-solving superhero.',
      ],
      illustrations: [
        {
          brief: 'A four-step flow: read, choose, solve, check',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Read the problem' }, { text: 'Add, subtract or multiply?' }, { text: 'Solve it' }, { text: 'Check it makes sense' }] },
        },
        {
          brief: 'Apples adding up: 4 plus 3 more makes 7 in all',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'bowl', label: '4 apples' }, { icon: 'bowl', label: '3 more' }, { icon: 'bowl', label: '7 in all' }], caption: 'Add when things come together' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-NN06-q1', type: 'mcq', prompt: 'Sam has 5 stickers and gets 4 more. How many now?', options: ['9', '1', '20'], answer: '9', difficulty: 1 },
        { id: 'Y2-MAT-NN06-q2', type: 'mcq', prompt: 'A box holds 6 cupcakes. There are 2 boxes. How many cupcakes?', options: ['8', '12', '4'], answer: '12', difficulty: 2 },
        { id: 'Y2-MAT-NN06-q3', type: 'short', prompt: 'There are 9 kids and 3 join in. How many kids now?', answer: '12', difficulty: 1 },
        { id: 'Y2-MAT-NN06-q4', type: 'mcq', prompt: '10 biscuits shared between 5 friends — each gets...', options: ['5', '2', '10'], answer: '2', difficulty: 2 },
        { id: 'Y2-MAT-NN06-q5', type: 'mcq', prompt: 'To find how many apples are in 4 bags of 5, you...', options: ['Add 4 + 5', 'Multiply 4 × 5', 'Subtract 5 − 4'], answer: 'Multiply 4 × 5', difficulty: 2 },
        { id: 'Y2-MAT-NN06-q6', type: 'short', prompt: 'Mia finds 6 shells, drops 2, then finds 3 more. How many shells does she have?', answer: '7', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y2-MAT-AL01',
    title: 'Additive patterns',
    year: '2',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M2A01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A pattern repeats a rule — add the same number each time and you can predict what comes next.',
        '2, 4, 6, 8, 10 grows by adding 2 every step.',
        'Spotting the rule means you can skip ahead without counting everything.',
      ],
      illustrations: [
        {
          brief: 'A number line hopping by twos from 2 to 8',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 10, marks: [{ value: 2, label: '2' }, { value: 4, label: '4' }, { value: 6, label: '6' }, { value: 8, label: '8' }] },
        },
        {
          brief: 'Bar chart of the pattern 5, 10, 15, 20 growing by 5',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'T1', value: 5 }, { label: 'T2', value: 10 }, { label: 'T3', value: 15 }, { label: 'T4', value: 20 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-AL01-q1', type: 'short', prompt: 'Pattern: 5, 10, 15, 20, __. What comes next?', answer: '25', difficulty: 1 },
        { id: 'Y2-MAT-AL01-q2', type: 'short', prompt: 'Pattern: 2, 4, 6, 8, __.', answer: '10', difficulty: 1 },
        { id: 'Y2-MAT-AL01-q3', type: 'mcq', prompt: 'Pattern: 3, 6, 9, 12, __?', options: ['13', '15', '18'], answer: '15', difficulty: 1 },
        { id: 'Y2-MAT-AL01-q4', type: 'short', prompt: 'Pattern: 20, 18, 16, 14, __.', answer: '12', difficulty: 2 },
        { id: 'Y2-MAT-AL01-q5', type: 'mcq', prompt: 'What is the rule for 5, 10, 15, 20?', options: ['Add 5', 'Add 2', 'Add 10'], answer: 'Add 5', difficulty: 1 },
        { id: 'Y2-MAT-AL01-q6', type: 'mcq', prompt: 'Pattern: 1, 3, 5, 7, __?', options: ['8', '9', '10'], answer: '9', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-AL02',
    title: 'Addition facts to 20',
    year: '2',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M2A02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Addition facts are tiny number sentences you can say in a snap — like 7 + 8 = 15.',
        'Knowing your facts to 20 makes bigger maths much faster.',
        'Practise a little each day and they will stick like glue.',
      ],
      illustrations: [
        {
          brief: 'A number line showing 7 + 8 landing on 15',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 15, label: '7 + 8 = 15' }] },
        },
        {
          brief: 'A number line showing 9 + 4 landing on 13',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 13, label: '9 + 4 = 13' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-AL02-q1', type: 'short', prompt: '7 + 8 = ?', answer: '15', difficulty: 1 },
        { id: 'Y2-MAT-AL02-q2', type: 'mcq', prompt: '9 + 4 = ?', options: ['13', '14', '12'], answer: '13', difficulty: 1 },
        { id: 'Y2-MAT-AL02-q3', type: 'short', prompt: '6 + 9 = ?', answer: '15', difficulty: 1 },
        { id: 'Y2-MAT-AL02-q4', type: 'mcq', prompt: 'Which pair adds to 20?', options: ['12 + 7', '15 + 5', '13 + 8'], answer: '15 + 5', difficulty: 2 },
        { id: 'Y2-MAT-AL02-q5', type: 'short', prompt: '11 + 8 = ?', answer: '19', difficulty: 2 },
        { id: 'Y2-MAT-AL02-q6', type: 'mcq', prompt: '8 + 8 = ?', options: ['14', '16', '18'], answer: '16', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-AL03',
    title: 'Twos multiplication facts',
    year: '2',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M2A03' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Counting in twos — 2, 4, 6, 8, 10 — is the fastest way to count socks and shoes.',
        'Multiplying by 2 doubles a number: 2 × 7 = 14 is just 7 twice.',
        'Know your twos up to 20 and you will zip through double problems.',
      ],
      illustrations: [
        {
          brief: 'A 2 by 7 dot array showing 2 × 7 = 14',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 7, label: '2 × 7 = 14' },
        },
        {
          brief: 'A number line counting in twos from 2 to 10',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 10, marks: [{ value: 2, label: '2' }, { value: 4, label: '4' }, { value: 6, label: '6' }, { value: 8, label: '8' }, { value: 10, label: '10' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-AL03-q1', type: 'short', prompt: 'Count in twos: 2, 4, 6, 8, __.', answer: '10', difficulty: 1 },
        { id: 'Y2-MAT-AL03-q2', type: 'mcq', prompt: '2 × 6 = ?', options: ['8', '10', '12'], answer: '12', difficulty: 1 },
        { id: 'Y2-MAT-AL03-q3', type: 'short', prompt: 'How many shoes are in 5 pairs?', answer: '10', difficulty: 1 },
        { id: 'Y2-MAT-AL03-q4', type: 'mcq', prompt: '2 × 9 = ?', options: ['16', '18', '20'], answer: '18', difficulty: 2 },
        { id: 'Y2-MAT-AL03-q5', type: 'mcq', prompt: 'Multiplying a number by 2 makes it...', options: ['Twice as big', 'Half as big', 'The same'], answer: 'Twice as big', difficulty: 1 },
        { id: 'Y2-MAT-AL03-q6', type: 'short', prompt: '2 × 10 = ?', answer: '20', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ME01',
    title: 'Measuring with informal units',
    year: '2',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M2M01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Before rulers, people measured with anything handy — paperclips, blocks or hand spans.',
        'The desk is 9 blocks long because it takes 9 blocks laid end to end.',
        'Picking one unit and keeping it the same makes your measuring fair and easy to compare.',
      ],
      illustrations: [
        {
          brief: 'Bar chart comparing how many blocks long the desk, door and chair are',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'blocks', items: [{ label: 'Desk', value: 9 }, { label: 'Door', value: 12 }, { label: 'Chair', value: 4 }] },
        },
        {
          brief: 'Three blocks lined up to show informal measuring',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'box', label: '1 block' }, { icon: 'box', label: '1 block' }, { icon: 'ruler', label: '9 blocks long' }], caption: 'Line up the same unit, end to end' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ME01-q1', type: 'short', prompt: 'The desk is 9 blocks long and the chair is 4 blocks long. How many more blocks long is the desk?', answer: '5', difficulty: 2 },
        { id: 'Y2-MAT-ME01-q2', type: 'mcq', prompt: 'Which is longer — a desk 9 blocks long or a door 12 blocks long?', options: ['Desk', 'Door'], answer: 'Door', difficulty: 1 },
        { id: 'Y2-MAT-ME01-q3', type: 'mcq', prompt: 'For a fair comparison, you should use...', options: ['The same unit for both', 'Different units', 'Bigger units'], answer: 'The same unit for both', difficulty: 2 },
        { id: 'Y2-MAT-ME01-q4', type: 'short', prompt: 'A pencil measures 6 paperclips. Two pencils end to end measure how many paperclips?', answer: '12', difficulty: 2 },
        { id: 'Y2-MAT-ME01-q5', type: 'mcq', prompt: 'Which informal unit is likely the biggest?', options: ['A paperclip', 'A hand span', 'A block'], answer: 'A hand span', difficulty: 3 },
        { id: 'Y2-MAT-ME01-q6', type: 'short', prompt: 'The mat is 8 blocks long and the rug is 5 blocks long. What is the difference in blocks?', answer: '3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ME02',
    title: 'Fractions of shapes & events',
    year: '2',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M2M02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Shapes can be cut into fair pieces too — fold a square in half and you get two equal parts.',
        'Half of 8 dots is 4 dots, and half of 10 is 5.',
        'Fractions of shapes and amounts are everywhere, from sharing fruit to cutting sandwiches.',
      ],
      illustrations: [
        {
          brief: 'Pies showing a half and a quarter of a shape',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 2, filled: 1, label: 'half' }, { slices: 4, filled: 1, label: 'quarter' }] },
        },
        {
          brief: 'A fraction bar with half shaded',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 2, filled: 1, label: '1/2' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ME02-q1', type: 'mcq', prompt: 'Cutting a square fairly in half gives...', options: ['2 equal parts', '3 equal parts', '4 equal parts'], answer: '2 equal parts', difficulty: 1 },
        { id: 'Y2-MAT-ME02-q2', type: 'short', prompt: 'What is half of 8?', answer: '4', difficulty: 1 },
        { id: 'Y2-MAT-ME02-q3', type: 'mcq', prompt: 'A pizza is cut into 4 equal slices and you eat 1. What fraction did you eat?', options: ['1/4', '1/2', '3/4'], answer: '1/4', difficulty: 2 },
        { id: 'Y2-MAT-ME02-q4', type: 'short', prompt: 'What is half of 10?', answer: '5', difficulty: 1 },
        { id: 'Y2-MAT-ME02-q5', type: 'mcq', prompt: 'Which shows a fair half — a shape cut into equal or unequal parts?', options: ['Equal parts', 'Unequal parts'], answer: 'Equal parts', difficulty: 2 },
        { id: 'Y2-MAT-ME02-q6', type: 'mcq', prompt: 'Half of 6 cookies is how many?', options: ['2', '3', '6'], answer: '3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ME03',
    title: 'Calendars & days between dates',
    year: '2',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M2M03' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A calendar is a map of the year — 12 months, 52 weeks, and 7 days in every week.',
        'To find the days between dates, hop forward day by day on the calendar.',
        'Planning your birthday or a special trip is so much easier with a calendar.',
      ],
      illustrations: [
        {
          brief: 'A week on a calendar strip from Monday to Sunday',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'calendar', label: '7 days' }, { icon: 'calendar', label: '12 months' }, { icon: 'sun', label: 'Mon to Sun' }], caption: 'A week has 7 days' },
        },
        {
          brief: 'A days-of-the-week line with Monday, Wednesday, Friday and Sunday marked',
          ready: true,
          diagram: { kind: 'number-line', min: 1, max: 7, marks: [{ value: 1, label: 'Mon' }, { value: 3, label: 'Wed' }, { value: 5, label: 'Fri' }, { value: 7, label: 'Sun' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ME03-q1', type: 'short', prompt: 'How many days are in a week?', answer: '7', difficulty: 1 },
        { id: 'Y2-MAT-ME03-q2', type: 'mcq', prompt: 'Which comes first: Monday or Wednesday?', options: ['Monday', 'Wednesday'], answer: 'Monday', difficulty: 1 },
        { id: 'Y2-MAT-ME03-q3', type: 'short', prompt: 'If today is Wednesday, how many days until Friday?', answer: '2', difficulty: 2 },
        { id: 'Y2-MAT-ME03-q4', type: 'mcq', prompt: 'Which month comes right after March?', options: ['February', 'April', 'May'], answer: 'April', difficulty: 1 },
        { id: 'Y2-MAT-ME03-q5', type: 'mcq', prompt: 'Friday is 2 days before...', options: ['Saturday', 'Sunday', 'Monday'], answer: 'Sunday', difficulty: 2 },
        { id: 'Y2-MAT-ME03-q6', type: 'short', prompt: 'How many days are in a weekend (Saturday and Sunday)?', answer: '2', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ME04',
    title: 'Analogue clocks: hour, half & quarter',
    year: '2',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M2M04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'On an analogue clock, the short hand tells the hour and the long hand tells the minutes.',
        'Half past means the big hand is on the 6, quarter past means it is on the 3, and quarter to means it is on the 9.',
        'You can read the time like a pro when you know where those hands live.',
      ],
      illustrations: [
        {
          brief: 'Three clocks showing quarter past, half past and quarter to',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: 'quarter past' }, { icon: 'clock', label: 'half past' }, { icon: 'clock', label: 'quarter to' }], caption: 'The big hand points to 3, 6 or 9' },
        },
        {
          brief: 'A clock-face number line showing 3, 6 and 9 as quarter past, half past and quarter to',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 12, marks: [{ value: 3, label: '3 = quarter past' }, { value: 6, label: '6 = half past' }, { value: 9, label: '9 = quarter to' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ME04-q1', type: 'mcq', prompt: 'The big hand is on the 6 and the small hand is just past the 4. What time is it?', options: ['Half past 4', 'Quarter past 4', 'Half past 6'], answer: 'Half past 4', difficulty: 2 },
        { id: 'Y2-MAT-ME04-q2', type: 'mcq', prompt: 'The big hand on the 3 means it is...', options: ['Quarter past', 'Half past', 'Quarter to'], answer: 'Quarter past', difficulty: 1 },
        { id: 'Y2-MAT-ME04-q3', type: 'mcq', prompt: 'Half past 6 is the same as...', options: ['6:15', '6:30', '6:45'], answer: '6:30', difficulty: 1 },
        { id: 'Y2-MAT-ME04-q4', type: 'short', prompt: 'What time is quarter past 9?', answer: '9:15', difficulty: 2 },
        { id: 'Y2-MAT-ME04-q5', type: 'mcq', prompt: 'The big hand on the 9 means it is...', options: ['Quarter to', 'Quarter past', 'Half past'], answer: 'Quarter to', difficulty: 1 },
        { id: 'Y2-MAT-ME04-q6', type: 'short', prompt: 'The big hand is on the 12 and the small hand is on the 7. What time is it?', answer: '7 o\'clock', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ME05',
    title: 'Turns: quarter, half, three-quarter & full',
    year: '2',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M2M05' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'A turn can be a quarter, a half, three-quarters, or all the way around.',
        'A quarter turn is like turning from facing the front to facing the side.',
        'Four quarter turns make one full turn — spin all the way back to where you started!',
      ],
      illustrations: [
        {
          brief: 'Four quarter turns around a point making a full circle',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'point', angles: [90, 90, 90, 90] },
        },
        {
          brief: 'A half turn drawn as a straight line',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'straight', angles: [180] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ME05-q1', type: 'mcq', prompt: 'How many quarter turns make a full turn?', options: ['2', '3', '4'], answer: '4', difficulty: 1 },
        { id: 'Y2-MAT-ME05-q2', type: 'mcq', prompt: 'Two quarter turns make a...', options: ['Quarter turn', 'Half turn', 'Full turn'], answer: 'Half turn', difficulty: 2 },
        { id: 'Y2-MAT-ME05-q3', type: 'mcq', prompt: 'A half turn is the same as...', options: ['Two quarter turns', 'Three quarter turns', 'Four quarter turns'], answer: 'Two quarter turns', difficulty: 1 },
        { id: 'Y2-MAT-ME05-q4', type: 'short', prompt: 'How many half turns make a full turn?', answer: '2', difficulty: 2 },
        { id: 'Y2-MAT-ME05-q5', type: 'mcq', prompt: 'A three-quarter turn is...', options: ['More than a half turn', 'Less than a half turn', 'The same as a full turn'], answer: 'More than a half turn', difficulty: 2 },
        { id: 'Y2-MAT-ME05-q6', type: 'short', prompt: 'Turning all the way back to where you started is called a ... turn.', answer: 'full', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-SP01',
    title: 'Shapes by sides & spatial terms',
    year: '2',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M2SP01' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Shapes are named by their sides — a triangle has 3, a square has 4, and a pentagon has 5.',
        'A rectangle has 4 sides and 4 corners, with opposite sides the same length.',
        'Look closely and count the sides — you are a shape detective.',
      ],
      illustrations: [
        {
          brief: 'A triangle and a square labelled by how many sides they have',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'triangle-shape', label: 'Triangle: 3 sides' }, { icon: 'box', label: 'Square: 4 sides' }], caption: 'Count the sides to name the shape' },
        },
        {
          brief: 'Bar chart of sides: triangle 3, square 4, pentagon 5',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'Triangle', value: 3 }, { label: 'Square', value: 4 }, { label: 'Pentagon', value: 5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-SP01-q1', type: 'mcq', prompt: 'How many sides does a triangle have?', options: ['2', '3', '4'], answer: '3', difficulty: 1 },
        { id: 'Y2-MAT-SP01-q2', type: 'mcq', prompt: 'A shape with 4 sides is a...', options: ['Triangle', 'Square or rectangle', 'Circle'], answer: 'Square or rectangle', difficulty: 1 },
        { id: 'Y2-MAT-SP01-q3', type: 'mcq', prompt: 'A pentagon has how many sides?', options: ['3', '4', '5'], answer: '5', difficulty: 2 },
        { id: 'Y2-MAT-SP01-q4', type: 'mcq', prompt: 'Which shape has no straight sides?', options: ['Circle', 'Square', 'Triangle'], answer: 'Circle', difficulty: 1 },
        { id: 'Y2-MAT-SP01-q5', type: 'mcq', prompt: 'The bird flies above the tree. Which word tells where the bird is?', options: ['Above', 'Under', 'Inside'], answer: 'Above', difficulty: 1 },
        { id: 'Y2-MAT-SP01-q6', type: 'short', prompt: 'The pencil is between two books. Which word tells where it is?', answer: 'between', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y2-MAT-SP02',
    title: 'Maps & pathways',
    year: '2',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M2SP02' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A map is a bird\'s-eye view — you look down and see where everything is.',
        'To follow a pathway, read the clues: go forward, turn left, turn right, stop at the flag.',
        'Planning your route on a map makes you a real explorer.',
      ],
      illustrations: [
        {
          brief: 'A grid pathway from Start, turning right, then up to Home',
          ready: true,
          diagram: { kind: 'quadrant-grid', range: 3, points: [{ x: 0, y: 0, label: 'Start' }, { x: 2, y: 0, label: 'Turn right' }, { x: 2, y: 2, label: 'Home' }] },
        },
        {
          brief: 'Map icons: follow the path to the flag',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Map' }, { icon: 'arrow-right', label: 'Go forward' }, { icon: 'flag', label: 'Home' }], caption: 'Follow the path to the flag' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-SP02-q1', type: 'mcq', prompt: 'On a map you look at things...', options: ['Down from above (bird\'s-eye view)', 'From the side', 'From underneath'], answer: 'Down from above (bird\'s-eye view)', difficulty: 1 },
        { id: 'Y2-MAT-SP02-q2', type: 'mcq', prompt: 'On the grid, moving from (0,0) to (2,0) you go...', options: ['Right', 'Left', 'Up'], answer: 'Right', difficulty: 2 },
        { id: 'Y2-MAT-SP02-q3', type: 'short', prompt: 'The shop is to the right of the park. Which direction is the shop from the park?', answer: 'right', difficulty: 1 },
        { id: 'Y2-MAT-SP02-q4', type: 'mcq', prompt: 'A pathway on a map shows you...', options: ['Which way to go', 'The weather', 'Your favourite food'], answer: 'Which way to go', difficulty: 1 },
        { id: 'Y2-MAT-SP02-q5', type: 'mcq', prompt: 'Going forward two squares on a grid means...', options: ['Moving without turning', 'Turning left', 'Turning around'], answer: 'Moving without turning', difficulty: 2 },
        { id: 'Y2-MAT-SP02-q6', type: 'short', prompt: 'To reach Home on the grid you travel up two squares. Which direction do you move?', answer: 'up', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ST01',
    title: 'Surveys & data tables',
    year: '2',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M2ST01' }],
    learn: {
      learnTimeMin: 9,
      body: [
        'A survey asks a question and collects everyone\'s answers.',
        'Then you tally the answers and pop them into a table — one mark for each vote.',
        'Your table makes it easy to see which pet is the class favourite.',
      ],
      illustrations: [
        {
          brief: 'Bar chart of a class survey: dogs 7, cats 4, birds 3, fish 2',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'votes', items: [{ label: 'Dogs', value: 7 }, { label: 'Cats', value: 4 }, { label: 'Birds', value: 3 }, { label: 'Fish', value: 2 }] },
        },
        {
          brief: 'Survey flow: ask everyone, tally it, find the favourite',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Ask everyone' }, { icon: 'bar-chart', label: 'Tally it' }, { icon: 'people', label: 'Favourite!' }], caption: 'Survey, tally, then make a table' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ST01-q1', type: 'short', prompt: 'In the survey, 7 kids chose dogs. How many kids chose dogs?', answer: '7', difficulty: 1 },
        { id: 'Y2-MAT-ST01-q2', type: 'mcq', prompt: 'The survey got dogs 7, cats 4, birds 3, fish 2. Which pet got the most votes?', options: ['Dogs', 'Cats', 'Fish'], answer: 'Dogs', difficulty: 1 },
        { id: 'Y2-MAT-ST01-q3', type: 'mcq', prompt: 'The survey got dogs 7, cats 4, birds 3, fish 2. How many votes altogether?', options: ['14', '16', '18'], answer: '16', difficulty: 2 },
        { id: 'Y2-MAT-ST01-q4', type: 'short', prompt: 'How many more kids chose dogs (7) than cats (4)?', answer: '3', difficulty: 2 },
        { id: 'Y2-MAT-ST01-q5', type: 'mcq', prompt: 'One tally mark in a table stands for...', options: ['One vote', 'Ten votes', 'A picture'], answer: 'One vote', difficulty: 1 },
        { id: 'Y2-MAT-ST01-q6', type: 'mcq', prompt: 'A table helps you see the data...', options: ['More clearly and easily', 'Only if you guess', 'Not at all'], answer: 'More clearly and easily', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y2-MAT-ST02',
    title: 'Different data displays',
    year: '2',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M2ST02' }],
    learn: {
      learnTimeMin: 8,
      body: [
        'Data can be shown in different ways — picture graphs, dot plots and bar charts all tell the same story.',
        'Some displays use one dot or picture for each thing counted.',
        'Pick the display that makes your data easiest to read.',
      ],
      illustrations: [
        {
          brief: 'A dot plot of how many books each child read',
          ready: true,
          diagram: { kind: 'dot-plot', values: [1, 1, 2, 2, 2, 3, 3, 3, 3] },
        },
        {
          brief: 'A bar chart of books read each day of the week',
          ready: true,
          diagram: { kind: 'bar-compare', unit: ' books', items: [{ label: 'Mon', value: 3 }, { label: 'Tue', value: 5 }, { label: 'Wed', value: 2 }, { label: 'Thu', value: 4 }, { label: 'Fri', value: 6 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y2-MAT-ST02-q1', type: 'mcq', prompt: 'In the dot plot, how many dots are over the number 3?', options: ['3', '4', '2'], answer: '4', difficulty: 2 },
        { id: 'Y2-MAT-ST02-q2', type: 'mcq', prompt: 'Which display stacks dots above each value?', options: ['Dot plot', 'Bar chart', 'Number line'], answer: 'Dot plot', difficulty: 1 },
        { id: 'Y2-MAT-ST02-q3', type: 'short', prompt: 'In the bar chart, how many books were read on Tuesday (5)?', answer: '5', difficulty: 1 },
        { id: 'Y2-MAT-ST02-q4', type: 'mcq', prompt: 'The week\'s books were Mon 3, Tue 5, Wed 2, Thu 4, Fri 6. Which day had the most?', options: ['Friday', 'Monday', 'Wednesday'], answer: 'Friday', difficulty: 1 },
        { id: 'Y2-MAT-ST02-q5', type: 'mcq', prompt: 'The week\'s books were Mon 3, Tue 5, Wed 2, Thu 4, Fri 6. Which day had the fewest?', options: ['Wednesday', 'Monday', 'Friday'], answer: 'Wednesday', difficulty: 2 },
        { id: 'Y2-MAT-ST02-q6', type: 'mcq', prompt: 'The same data can be shown in...', options: ['Many different displays', 'Only one way', 'No other way'], answer: 'Many different displays', difficulty: 1 },
      ],
    },
  },
];
