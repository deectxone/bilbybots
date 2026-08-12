import type { Topic } from '../../types/curriculum';

/**
 * Year 3 Mathematics, full topic bank.
 * Scope mirrors the Australian Curriculum v9.0 content descriptions for
 * Year 3 (AC9M3xxx). Every topic carries its ACARA code and a rendered
 * `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR3_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y3-MAT-NN01',
    title: 'Numbers beyond 10 000',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Numbers keep going beyond 10 000, ten thousand is ten lots of one thousand!',
        'Each digit still has its own place: ten-thousands, thousands, hundreds, tens and ones.',
        'Read them left to right, place by place, and even the biggest numbers stop feeling scary.',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 15 640 on each floor',
          ready: true,
          diagram: { kind: 'place-value', digits: '15640', labels: ['TTh', 'Th', 'H', 'T', 'O'] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN01-q1', type: 'mcq', prompt: 'Which digit is in the thousands place in 6 342?', options: ['6', '3', '4', '2'], answer: '3', difficulty: 1 },
        { id: 'Y3-MAT-NN01-q2', type: 'short', prompt: 'How many tens are in 240?', answer: '24', difficulty: 2 },
        { id: 'Y3-MAT-NN01-q3', type: 'mcq', prompt: 'Which number is the largest?', options: ['9 999', '10 000', '10 001'], answer: '10 001', difficulty: 2 },
        { id: 'Y3-MAT-NN01-q4', type: 'mcq', prompt: '10 000 is the same as how many thousands?', options: ['10', '100', '1 000'], answer: '10', difficulty: 1 },
        { id: 'Y3-MAT-NN01-q5', type: 'short', prompt: 'What number comes right after 9 999?', answer: '10 000', difficulty: 1 },
        { id: 'Y3-MAT-NN01-q6', type: 'mcq', prompt: 'Which digit is in the ten-thousands place in 24 860?', options: ['2', '4', '8', '6'], answer: '2', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN02',
    title: 'Unit fractions',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A unit fraction is one piece of a whole cut into equal parts, like one slice of a pizza cut into quarters.',
        '1/2, 1/3, 1/4 and 1/10 are all unit fractions because the top number is always 1.',
        'The bigger the bottom number, the smaller each piece, so 1/10 is tinier than 1/2!',
      ],
      illustrations: [
        {
          brief: 'Pie slices showing one quarter and one third',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: '1/4' }, { slices: 3, filled: 1, label: '1/3' }] },
        },
        {
          brief: 'A fraction bar with one of ten pieces filled',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 10, filled: 1, label: '1/10' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN02-q1', type: 'mcq', prompt: 'Which fraction is one quarter?', options: ['1/4', '1/2', '1/3'], answer: '1/4', difficulty: 1 },
        { id: 'Y3-MAT-NN02-q2', type: 'mcq', prompt: 'Which is bigger: 1/2 or 1/4?', options: ['1/2', '1/4', "They're equal"], answer: '1/2', difficulty: 2 },
        { id: 'Y3-MAT-NN02-q3', type: 'short', prompt: 'A pizza is cut into 4 equal slices and you eat one. What fraction do you eat?', answer: '1/4', difficulty: 1 },
        { id: 'Y3-MAT-NN02-q4', type: 'mcq', prompt: 'Which of these is a unit fraction?', options: ['2/3', '1/5', '3/4'], answer: '1/5', difficulty: 1 },
        { id: 'Y3-MAT-NN02-q5', type: 'mcq', prompt: 'A chocolate bar has 10 equal pieces. One piece is what fraction?', options: ['1/10', '1/5', '1/2'], answer: '1/10', difficulty: 1 },
        { id: 'Y3-MAT-NN02-q6', type: 'mcq', prompt: 'Which is the smallest: 1/2, 1/3 or 1/10?', options: ['1/2', '1/3', '1/10'], answer: '1/10', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN03',
    title: 'Add & subtract two-/three-digit numbers',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Add and subtract big numbers by lining up the place values, ones under ones, tens under tens, hundreds under hundreds.',
        'When a column makes ten or more, regroup (carry) that ten into the next column.',
        'Estimate the answer first, then do the exact sum, and you will know if you landed on the right number.',
      ],
      illustrations: [
        { brief: 'A number line adding 150 and 120 to reach 270', ready: true, diagram: { kind: 'number-line', min: 0, max: 400, marks: [{ value: 270, label: '150 + 120' }] } },
        { brief: 'Place-value boxes holding 436', ready: true, diagram: { kind: 'place-value', digits: '436', labels: ['H', 'T', 'O'] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN03-q1', type: 'short', prompt: '250 + 340 = ?', answer: '590', difficulty: 1 },
        { id: 'Y3-MAT-NN03-q2', type: 'short', prompt: '600 − 250 = ?', answer: '350', difficulty: 2 },
        { id: 'Y3-MAT-NN03-q3', type: 'mcq', prompt: '345 + 227 = ?', options: ['562', '572', '672'], answer: '572', difficulty: 2 },
        { id: 'Y3-MAT-NN03-q4', type: 'mcq', prompt: '700 − 468 = ?', options: ['232', '332', '242'], answer: '232', difficulty: 3 },
        { id: 'Y3-MAT-NN03-q5', type: 'short', prompt: '120 + 230 = ?', answer: '350', difficulty: 1 },
        { id: 'Y3-MAT-NN03-q6', type: 'short', prompt: '1000 − 640 = ?', answer: '360', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN04',
    title: 'Multiply & divide one-/two-digit numbers',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Multiplication is quick adding of equal groups, 3 groups of 4 makes 12.',
        'Division shares into equal groups, so 12 shared between 3 is 4.',
        'Knowing your 2, 3, 4, 5 and 10 times tables makes both super fast.',
      ],
      illustrations: [
        { brief: 'A 3 by 4 dot array showing 3 × 4 = 12', ready: true, diagram: { kind: 'dot-array', rows: 3, cols: 4, label: '3 × 4 = 12' } },
        { brief: 'A 4 by 5 dot array showing 4 × 5 = 20', ready: true, diagram: { kind: 'dot-array', rows: 4, cols: 5, label: '4 × 5 = 20' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN04-q1', type: 'short', prompt: '4 × 5 = ?', answer: '20', difficulty: 1 },
        { id: 'Y3-MAT-NN04-q2', type: 'short', prompt: '3 × 6 = ?', answer: '18', difficulty: 2 },
        { id: 'Y3-MAT-NN04-q3', type: 'short', prompt: '20 ÷ 5 = ?', answer: '4', difficulty: 2 },
        { id: 'Y3-MAT-NN04-q4', type: 'mcq', prompt: '5 × 10 = ?', options: ['50', '15', '5'], answer: '50', difficulty: 1 },
        { id: 'Y3-MAT-NN04-q5', type: 'short', prompt: '12 ÷ 3 = ?', answer: '4', difficulty: 2 },
        { id: 'Y3-MAT-NN04-q6', type: 'mcq', prompt: '3 × 3 = ?', options: ['6', '9', '12'], answer: '9', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN05',
    title: 'Estimation',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Estimation means making a clever guess that is close to the real answer, like about how many sweets are in a jar.',
        'Round numbers to friendly amounts first (to the nearest 10), then add or subtract.',
        'Estimating before you calculate helps you spot silly mistakes in your exact answer.',
      ],
      illustrations: [
        { brief: 'Rounding benchmarks: 47 → 50 and 73 → 70', ready: true, diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 47, label: '47 → 50' }, { value: 73, label: '73 → 70' }] } },
        { brief: 'Two jars of lollies each holding about 50', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Jar A', value: 48 }, { label: 'Jar B', value: 52 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN05-q1', type: 'short', prompt: 'Round 47 to the nearest 10.', answer: '50', difficulty: 1 },
        { id: 'Y3-MAT-NN05-q2', type: 'mcq', prompt: 'About how much is 48 + 73?', options: ['About 120', 'About 100', 'About 200'], answer: 'About 120', difficulty: 2 },
        { id: 'Y3-MAT-NN05-q3', type: 'short', prompt: 'Round 82 to the nearest 10.', answer: '80', difficulty: 1 },
        { id: 'Y3-MAT-NN05-q4', type: 'mcq', prompt: 'The jar holds 48 lollies. About how many lollies is that?', options: ['About 50', 'About 100', 'About 20'], answer: 'About 50', difficulty: 1 },
        { id: 'Y3-MAT-NN05-q5', type: 'mcq', prompt: 'Best estimate for 190 + 310?', options: ['About 400', 'About 500', 'About 300'], answer: 'About 500', difficulty: 2 },
        { id: 'Y3-MAT-NN05-q6', type: 'mcq', prompt: 'Estimation is handy because it gives a…', options: ['Quick, close answer', 'Wrong answer', 'Exact answer'], answer: 'Quick, close answer', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN06',
    title: 'Modelling: additive & multiplicative (financial)',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Money maths is everywhere, buying lunch, saving pocket money and counting change.',
        'Adding, subtracting and multiplying dollars and cents helps you plan what you can really buy.',
        'Modelling means using maths to answer a real money question, then checking your answer makes sense.',
      ],
      illustrations: [
        { brief: 'A school-canteen price list comparing lunch and a drink', ready: true, diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Lunch', value: 6 }, { label: 'Drink', value: 2 }] } },
        {
          brief: 'Flowchart planning a purchase: add the prices, check the money',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'How much do I want to buy?' },
              { text: 'Add the prices' },
              { text: 'Do I have enough money?', decision: true },
              { text: 'Communicate the plan' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN06-q1', type: 'short', prompt: 'A sandwich costs $4 and a drink costs $2. What is the total cost in dollars?', answer: '6', difficulty: 1 },
        { id: 'Y3-MAT-NN06-q2', type: 'mcq', prompt: 'You have $10 and lunch costs $6. How much change do you get?', options: ['$4', '$6', '$16'], answer: '$4', difficulty: 1 },
        { id: 'Y3-MAT-NN06-q3', type: 'short', prompt: 'A book costs $7. Two books cost how many dollars?', answer: '14', difficulty: 1 },
        { id: 'Y3-MAT-NN06-q4', type: 'mcq', prompt: 'You save $5 a week. How much do you have after 3 weeks?', options: ['$8', '$15', '$12'], answer: '$15', difficulty: 2 },
        { id: 'Y3-MAT-NN06-q5', type: 'short', prompt: 'Chips cost $3 and you give the shopkeeper $5. What is your change in dollars?', answer: '2', difficulty: 2 },
        { id: 'Y3-MAT-NN06-q6', type: 'mcq', prompt: 'Modelling a money problem starts with…', options: ['Turning it into maths', 'Counting to ten', 'Drawing a picture only'], answer: 'Turning it into maths', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-NN07',
    title: 'Algorithms: sequences & decisions',
    year: '3',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M3N07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'An algorithm is a set of steps you follow in order to finish a task, like a recipe or a treasure-map trail.',
        'Some steps are decisions: "Is the number even? If yes, go one way; if no, go the other."',
        'Following the steps in the same order every time gives you the same, correct answer.',
      ],
      illustrations: [
        {
          brief: 'Flowchart deciding if a number is even or odd',
          ready: true,
          diagram: { kind: 'flowchart', steps: [{ text: 'Start with a number' }, { text: 'Is it divisible by 2?', decision: true }, { text: 'Even' }] },
        },
        { brief: 'Counting in fives on a number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 30, marks: [{ value: 5, label: '5' }, { value: 10, label: '10' }, { value: 15, label: '15' }, { value: 20, label: '20' }, { value: 25, label: '25' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-NN07-q1', type: 'mcq', prompt: 'Following the flowchart, is 12 even or odd?', options: ['Even', 'Odd'], answer: 'Even', difficulty: 1 },
        { id: 'Y3-MAT-NN07-q2', type: 'mcq', prompt: 'A set of steps used to solve a problem is called an…', options: ['Algorithm', 'Adjective', 'Angle'], answer: 'Algorithm', difficulty: 1 },
        { id: 'Y3-MAT-NN07-q3', type: 'mcq', prompt: 'In a flowchart, a question like "Is it even?" is a…', options: ['Decision', 'Step', 'Circle'], answer: 'Decision', difficulty: 2 },
        { id: 'Y3-MAT-NN07-q4', type: 'mcq', prompt: 'Following the flowchart, is 9 even or odd?', options: ['Even', 'Odd'], answer: 'Odd', difficulty: 1 },
        { id: 'Y3-MAT-NN07-q5', type: 'mcq', prompt: 'If you shuffle the steps of an algorithm out of order, it will…', options: ['Still work fine', 'Be confusing and wrong', 'Be faster'], answer: 'Be confusing and wrong', difficulty: 2 },
        { id: 'Y3-MAT-NN07-q6', type: 'short', prompt: 'What is the next number in the sequence 5, 10, 15, 20, __?', answer: '25', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-AL01',
    title: 'Inverse operations & unknowns',
    year: '3',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M3A01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Addition and subtraction are opposites, they undo each other, so 7 + 5 = 12 means 12 − 5 = 7.',
        'Multiplication and division are opposites too: 6 × 4 = 24 means 24 ÷ 4 = 6.',
        'Use the opposite operation to find a missing number, like the box in 8 + □ = 12.',
      ],
      illustrations: [
        { brief: 'Balance scale with a mystery number and 12 balancing', ready: true, diagram: { kind: 'balance-scale', left: '□ + 5', right: '12', balanced: true } },
        { brief: 'Number line showing 8 + 4 = 12', ready: true, diagram: { kind: 'number-line', min: 0, max: 20, marks: [{ value: 12, label: '8 + □ = 12' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-AL01-q1', type: 'short', prompt: '8 + □ = 12. What is the mystery number?', answer: '4', difficulty: 1 },
        { id: 'Y3-MAT-AL01-q2', type: 'short', prompt: '□ + 5 = 12. What is the mystery number?', answer: '7', difficulty: 2 },
        { id: 'Y3-MAT-AL01-q3', type: 'short', prompt: '□ × 3 = 21. What is the mystery number?', answer: '7', difficulty: 2 },
        { id: 'Y3-MAT-AL01-q4', type: 'mcq', prompt: 'If 7 + 5 = 12, then 12 − 5 = ?', options: ['7', '5', '6'], answer: '7', difficulty: 1 },
        { id: 'Y3-MAT-AL01-q5', type: 'mcq', prompt: 'Which pair are inverse operations?', options: ['Addition and subtraction', 'Addition and addition', 'Subtraction and subtraction'], answer: 'Addition and subtraction', difficulty: 1 },
        { id: 'Y3-MAT-AL01-q6', type: 'short', prompt: '24 ÷ □ = 6. What is the mystery number?', answer: '4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-AL02',
    title: 'Efficient mental strategies',
    year: '3',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M3A02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Your brain can do maths faster than a calculator when you know clever tricks!',
        'Counting on is handy: 58 + 7 is 58, then 5 more makes 63, then 2 more makes 65.',
        'Bridging to 10 and doubling help too, 6 + 7 is the same as 6 + 6 + 1.',
      ],
      illustrations: [
        { brief: 'Counting on from 58 to 65 on a number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 65, label: '58 + 7 = 65' }] } },
        { brief: 'A 3 by 4 dot array showing double 6', ready: true, diagram: { kind: 'dot-array', rows: 3, cols: 4, label: '6 + 6 = 12' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-AL02-q1', type: 'short', prompt: '58 + 7 = ?', answer: '65', difficulty: 2 },
        { id: 'Y3-MAT-AL02-q2', type: 'short', prompt: '25 + 25 = ?', answer: '50', difficulty: 1 },
        { id: 'Y3-MAT-AL02-q3', type: 'short', prompt: '9 + 9 = ?', answer: '18', difficulty: 1 },
        { id: 'Y3-MAT-AL02-q4', type: 'mcq', prompt: '60 + 40 = ?', options: ['100', '90', '80'], answer: '100', difficulty: 1 },
        { id: 'Y3-MAT-AL02-q5', type: 'short', prompt: '300 + 400 = ?', answer: '700', difficulty: 1 },
        { id: 'Y3-MAT-AL02-q6', type: 'mcq', prompt: 'The quickest mental trick for 98 + 99 is…', options: ['Round both to 100, then adjust', 'Count one by one', 'Write it out each time'], answer: 'Round both to 100, then adjust', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-AL03',
    title: 'Multiplication facts (3, 4, 5, 10)',
    year: '3',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M3A03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Your 3, 4, 5 and 10 times tables are superpowers, 3 × 4, 4 × 5 and 10 × 7 are your friends!',
        'Count in groups to find the answer: 4, 8, 12, 16, so 4 × 4 = 16.',
        'Knowing these facts by heart makes bigger maths much easier later on.',
      ],
      illustrations: [
        { brief: 'A 4 by 4 dot array showing 4 × 4 = 16', ready: true, diagram: { kind: 'dot-array', rows: 4, cols: 4, label: '4 × 4 = 16' } },
        { brief: 'Counting in tens: 10 × 3 and 10 × 4 on a number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 50, marks: [{ value: 30, label: '10 × 3' }, { value: 40, label: '10 × 4' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-AL03-q1', type: 'short', prompt: '3 × 4 = ?', answer: '12', difficulty: 1 },
        { id: 'Y3-MAT-AL03-q2', type: 'short', prompt: '4 × 5 = ?', answer: '20', difficulty: 1 },
        { id: 'Y3-MAT-AL03-q3', type: 'short', prompt: '5 × 5 = ?', answer: '25', difficulty: 2 },
        { id: 'Y3-MAT-AL03-q4', type: 'short', prompt: '10 × 7 = ?', answer: '70', difficulty: 1 },
        { id: 'Y3-MAT-AL03-q5', type: 'mcq', prompt: 'Which number is in the 3 times table?', options: ['12', '11', '14'], answer: '12', difficulty: 2 },
        { id: 'Y3-MAT-AL03-q6', type: 'mcq', prompt: '4 × 8 = ?', options: ['32', '28', '40'], answer: '32', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME01',
    title: 'Metric units & estimation',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Millimetres, centimetres, metres and kilometres all measure length, think rulers and tape measures.',
        'Estimating first helps you choose the right unit: a pencil is about 15 cm and a classroom about 8 m.',
        'One metre is 100 centimetres, and one kilometre is 1000 metres.',
      ],
      illustrations: [
        { brief: 'The metric ladder: mm → cm → m → km', ready: true, diagram: { kind: 'metric-ladder', units: ['mm', 'cm', 'm', 'km'], highlight: 2 } },
        { brief: 'Estimating a pencil at 15 cm and a desk at 150 cm', ready: true, diagram: { kind: 'number-line', min: 0, max: 200, marks: [{ value: 15, label: 'pencil 15 cm' }, { value: 150, label: 'desk 150 cm' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME01-q1', type: 'mcq', prompt: 'Which unit best measures the length of a pencil?', options: ['cm', 'km', 'm'], answer: 'cm', difficulty: 1 },
        { id: 'Y3-MAT-ME01-q2', type: 'short', prompt: 'How many centimetres are in one metre?', answer: '100', difficulty: 1 },
        { id: 'Y3-MAT-ME01-q3', type: 'short', prompt: 'How many metres are in one kilometre?', answer: '1000', difficulty: 2 },
        { id: 'Y3-MAT-ME01-q4', type: 'mcq', prompt: 'A classroom is about 8…', options: ['m', 'cm', 'mm'], answer: 'm', difficulty: 1 },
        { id: 'Y3-MAT-ME01-q5', type: 'mcq', prompt: 'Which is the longest: 1 cm, 1 m or 1 km?', options: ['1 km', '1 m', '1 cm'], answer: '1 km', difficulty: 2 },
        { id: 'Y3-MAT-ME01-q6', type: 'mcq', prompt: 'To measure a tiny marble you would use…', options: ['mm', 'km'], answer: 'mm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME02',
    title: 'Measuring with metric instruments',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Rulers, tape measures, kitchen scales and jugs are tools that measure length, mass and capacity.',
        'Read the number where the needle or line stops, and always check the unit on the scale.',
        'Reading a thermometer tells you the temperature in degrees Celsius.',
      ],
      illustrations: [
        { brief: 'A thermometer reading 40°C on a hot day', ready: true, diagram: { kind: 'thermometer', min: 0, max: 100, value: 40, unit: '°C' } },
        { brief: 'The mass ladder: grams, kilograms, tonnes', ready: true, diagram: { kind: 'metric-ladder', units: ['g', 'kg', 't'], highlight: 1 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME02-q1', type: 'mcq', prompt: 'Which tool measures temperature?', options: ['Thermometer', 'Ruler', 'Scales'], answer: 'Thermometer', difficulty: 1 },
        { id: 'Y3-MAT-ME02-q2', type: 'short', prompt: 'A thermometer measures temperature in degrees ___.', answer: 'Celsius', difficulty: 1 },
        { id: 'Y3-MAT-ME02-q3', type: 'mcq', prompt: 'The thermometer shows 40°C. What does it read?', options: ['40°C', '4°C', '100°C'], answer: '40°C', difficulty: 1 },
        { id: 'Y3-MAT-ME02-q4', type: 'mcq', prompt: 'Which tool measures how much something weighs?', options: ['Kitchen scales', 'Ruler', 'Tape measure'], answer: 'Kitchen scales', difficulty: 1 },
        { id: 'Y3-MAT-ME02-q5', type: 'short', prompt: 'How many grams are in one kilogram?', answer: '1000', difficulty: 2 },
        { id: 'Y3-MAT-ME02-q6', type: 'mcq', prompt: 'A bucket holds 5 litres of water. This measures its…', options: ['Capacity', 'Length', 'Mass'], answer: 'Capacity', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME03',
    title: 'Units of time',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Time is measured in seconds, minutes, hours, days, weeks, months and years.',
        'One minute has 60 seconds, and one hour has 60 minutes.',
        'Knowing these facts helps you work out how long things take, like a 45-minute lesson or a 2-hour movie.',
      ],
      illustrations: [
        { brief: 'A number line marking 60 seconds in one minute', ready: true, diagram: { kind: 'number-line', min: 0, max: 60, marks: [{ value: 60, label: '1 minute = 60 s' }] } },
        { brief: 'A clock and a timer showing one hour equals 60 minutes', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: '1 hour' }, { icon: 'timer', label: '60 min' }], caption: '1 hour = 60 minutes' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME03-q1', type: 'short', prompt: 'How many minutes are in one hour?', answer: '60', difficulty: 1 },
        { id: 'Y3-MAT-ME03-q2', type: 'short', prompt: 'How many seconds are in one minute?', answer: '60', difficulty: 1 },
        { id: 'Y3-MAT-ME03-q3', type: 'mcq', prompt: 'Which is the longest: a minute, an hour or a day?', options: ['A day', 'An hour', 'A minute'], answer: 'A day', difficulty: 1 },
        { id: 'Y3-MAT-ME03-q4', type: 'short', prompt: 'How many days are in one week?', answer: '7', difficulty: 1 },
        { id: 'Y3-MAT-ME03-q5', type: 'mcq', prompt: '2 hours is the same as how many minutes?', options: ['120', '100', '90'], answer: '120', difficulty: 2 },
        { id: 'Y3-MAT-ME03-q6', type: 'mcq', prompt: 'About how many days are in one year?', options: ['365', '300', '100'], answer: '365', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME04',
    title: 'Analogue & digital clocks to the minute',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'On an analogue clock the big hand counts minutes and the little hand counts hours.',
        'Digital clocks show the time with numbers, like 3:45, and the minute part counts up to 59.',
        'Half past 3 (3:30) is the same time on both clocks, just shown in a different way!',
      ],
      illustrations: [
        { brief: 'An analogue clock and a digital clock both showing 3:45', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: 'analogue' }, { icon: 'timer', label: '3:45' }], caption: 'Same time, two clocks' } },
        { brief: 'Counting 45 minutes on a number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 60, marks: [{ value: 45, label: '45 min' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME04-q1', type: 'mcq', prompt: 'Half past 3 is written…', options: ['3:30', '3:15', '3:45'], answer: '3:30', difficulty: 1 },
        { id: 'Y3-MAT-ME04-q2', type: 'mcq', prompt: 'On an analogue clock, the big hand counts…', options: ['Minutes', 'Hours', 'Days'], answer: 'Minutes', difficulty: 2 },
        { id: 'Y3-MAT-ME04-q3', type: 'short', prompt: 'Quarter past 4 is written 4:__.', answer: '15', difficulty: 2 },
        { id: 'Y3-MAT-ME04-q4', type: 'mcq', prompt: 'Which is later: 2:45 or 2:15?', options: ['2:45', '2:15'], answer: '2:45', difficulty: 1 },
        { id: 'Y3-MAT-ME04-q5', type: 'short', prompt: 'How many minutes are in a quarter of an hour?', answer: '15', difficulty: 2 },
        { id: 'Y3-MAT-ME04-q6', type: 'mcq', prompt: '3:45 on a digital clock means how many minutes past 3?', options: ['45', '15', '35'], answer: '45', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME05',
    title: 'Angles as turn',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'An angle is how much something turns, like a door swinging open or a child turning around.',
        'A quarter turn makes a right angle, and a half turn is two right angles in a row.',
        'Turning all the way around is a full turn, that is 360 degrees.',
      ],
      illustrations: [
        { brief: 'Four quarter turns adding to a full circle', ready: true, diagram: { kind: 'angle-diagram', style: 'point', angles: [90, 90, 90, 90] } },
        { brief: 'Two right angles making a straight line', ready: true, diagram: { kind: 'angle-diagram', style: 'straight', angles: [90, 90] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME05-q1', type: 'mcq', prompt: 'A quarter turn makes an angle called a…', options: ['Right angle', 'Full turn', 'Straight line'], answer: 'Right angle', difficulty: 1 },
        { id: 'Y3-MAT-ME05-q2', type: 'mcq', prompt: 'A half turn is how many right angles?', options: ['2', '1', '4'], answer: '2', difficulty: 1 },
        { id: 'Y3-MAT-ME05-q3', type: 'short', prompt: 'A full turn is how many degrees?', answer: '360', difficulty: 2 },
        { id: 'Y3-MAT-ME05-q4', type: 'mcq', prompt: 'Turning all the way around in a circle is a…', options: ['Full turn', 'Quarter turn', 'Half turn'], answer: 'Full turn', difficulty: 1 },
        { id: 'Y3-MAT-ME05-q5', type: 'short', prompt: 'A quarter turn is how many degrees?', answer: '90', difficulty: 2 },
        { id: 'Y3-MAT-ME05-q6', type: 'mcq', prompt: 'The corner of a book is a…', options: ['Right angle', 'Half turn', 'Full turn'], answer: 'Right angle', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ME06',
    title: 'Dollars & cents',
    year: '3',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M3M06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Money comes in dollars and cents, 100 cents make one dollar.',
        'Prices look like $4.75: the dollars come first, then the cents after the point.',
        'Adding and subtracting money is just adding and subtracting with dollars and cents.',
      ],
      illustrations: [
        { brief: 'A coin and a piggy bank showing 100 cents make $1', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'coin', label: '100¢ = $1' }, { icon: 'piggy-bank', label: 'save up' }], caption: '100 cents make one dollar' } },
        { brief: 'Comparing the price of a toy and a drink', ready: true, diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Toy', value: 4.75 }, { label: 'Drink', value: 2.25 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ME06-q1', type: 'short', prompt: 'How many cents make one dollar?', answer: '100', difficulty: 1 },
        { id: 'Y3-MAT-ME06-q2', type: 'mcq', prompt: '$4.75 has how many cents?', options: ['75', '4', '475'], answer: '75', difficulty: 2 },
        { id: 'Y3-MAT-ME06-q3', type: 'short', prompt: '$5.00 − $2.25 = $__?', answer: '2.75', difficulty: 3 },
        { id: 'Y3-MAT-ME06-q4', type: 'mcq', prompt: 'Which is more: $3.50 or $3.05?', options: ['$3.50', '$3.05'], answer: '$3.50', difficulty: 2 },
        { id: 'Y3-MAT-ME06-q5', type: 'short', prompt: 'How many dollars is 200 cents?', answer: '2', difficulty: 1 },
        { id: 'Y3-MAT-ME06-q6', type: 'mcq', prompt: 'A toy costs $4.75 and a drink $2.25. What is the total?', options: ['$7.00', '$6.50', '$7.50'], answer: '$7.00', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-SP01',
    title: 'Objects & features',
    year: '3',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M3SP01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Objects around you have features, edges, corners, faces and angles.',
        'Prisms, pyramids and cylinders are 3D objects; circles, squares and triangles are flat 2D shapes.',
        'Look for shapes hiding in everyday things: a dice is a cube and a can is a cylinder.',
      ],
      illustrations: [
        { brief: 'A cube, a triangular prism and a sphere arranged as everyday objects', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: 'cube' }, { icon: 'triangle-shape', label: 'prism' }, { icon: 'ball', label: 'sphere' }], caption: '3D objects all around us' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-SP01-q1', type: 'mcq', prompt: 'A dice is shaped like a…', options: ['Cube', 'Cylinder', 'Pyramid'], answer: 'Cube', difficulty: 1 },
        { id: 'Y3-MAT-SP01-q2', type: 'mcq', prompt: 'A can of beans is shaped like a…', options: ['Cylinder', 'Cube', 'Sphere'], answer: 'Cylinder', difficulty: 1 },
        { id: 'Y3-MAT-SP01-q3', type: 'mcq', prompt: 'A ball is shaped like a…', options: ['Sphere', 'Cube', 'Pyramid'], answer: 'Sphere', difficulty: 1 },
        { id: 'Y3-MAT-SP01-q4', type: 'mcq', prompt: 'A flat shape with 3 sides is a…', options: ['Triangle', 'Square', 'Circle'], answer: 'Triangle', difficulty: 1 },
        { id: 'Y3-MAT-SP01-q5', type: 'short', prompt: 'How many corners (vertices) does a square have?', answer: '4', difficulty: 1 },
        { id: 'Y3-MAT-SP01-q6', type: 'mcq', prompt: 'A pyramid has a pointy top called its…', options: ['Apex', 'Edge', 'Face'], answer: 'Apex', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-SP02',
    title: 'Maps of familiar environments',
    year: '3',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M3SP02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A map is a bird\u2019s-eye drawing of a place, like your classroom or playground.',
        'Maps use symbols, labels and simple grids so you can find places and give directions.',
        'Follow a route on the map from one place to another, and your directions will lead the way!',
      ],
      illustrations: [
        { brief: 'A simple grid map with a library, playground and office', ready: true, diagram: { kind: 'quadrant-grid', range: 4, points: [{ x: 2, y: 2, label: 'Library' }, { x: -2, y: 1, label: 'Playground' }, { x: 1, y: -3, label: 'Office' }] } },
        { brief: 'A map with a flag marking the starting point', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'map' }, { icon: 'flag', label: 'start' }], caption: 'Follow the route on the map' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-SP02-q1', type: 'mcq', prompt: 'On the map, the Playground is which direction from the centre?', options: ['Left', 'Right', 'Down'], answer: 'Left', difficulty: 2 },
        { id: 'Y3-MAT-SP02-q2', type: 'mcq', prompt: 'A map is usually drawn looking…', options: ['From above (bird\u2019s-eye)', 'From the side', 'Upside down'], answer: 'From above (bird\u2019s-eye)', difficulty: 2 },
        { id: 'Y3-MAT-SP02-q3', type: 'mcq', prompt: 'Symbols on a map help you…', options: ['Find places without using words', 'Colour the map', 'Make the map bigger'], answer: 'Find places without using words', difficulty: 1 },
        { id: 'Y3-MAT-SP02-q4', type: 'mcq', prompt: 'Which place is closest to the centre (0,0)?', options: ['Playground (-2,1)', 'Library (2,2)', 'Office (1,-3)'], answer: 'Playground (-2,1)', difficulty: 2 },
        { id: 'Y3-MAT-SP02-q5', type: 'mcq', prompt: 'To travel from the Library to the Office you mainly head…', options: ['Down and right', 'Up and left', 'Straight up'], answer: 'Down and right', difficulty: 2 },
        { id: 'Y3-MAT-SP02-q6', type: 'mcq', prompt: 'A map of your classroom is a map of a ___ environment.', options: ['Familiar', 'Unknown', 'Imaginary'], answer: 'Familiar', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ST01',
    title: 'Collecting categorical & discrete data',
    year: '3',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M3ST01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Data is information you collect, like the favourite pets or colours in your class.',
        'Categorical data sorts things into groups, like "dog", "cat" or "fish".',
        'Discrete data is counted in whole numbers, like how many children are away each day.',
      ],
      illustrations: [
        { brief: 'A column graph of class pets', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Dogs', value: 8 }, { label: 'Cats', value: 5 }, { label: 'Fish', value: 2 }] } },
        { brief: 'A dot plot of children away each day', ready: true, diagram: { kind: 'dot-plot', values: [1, 2, 2, 3, 3, 3] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ST01-q1', type: 'mcq', prompt: 'Favourite pets sorted into "dog", "cat" and "fish" is ___ data.', options: ['Categorical', 'Discrete', 'Circular'], answer: 'Categorical', difficulty: 1 },
        { id: 'Y3-MAT-ST01-q2', type: 'mcq', prompt: 'In the graph, which pet was the most popular?', options: ['Dogs', 'Cats', 'Fish'], answer: 'Dogs', difficulty: 1 },
        { id: 'Y3-MAT-ST01-q3', type: 'short', prompt: 'In the graph (Dogs 8, Cats 5, Fish 2), how many children chose Dogs?', answer: '8', difficulty: 1 },
        { id: 'Y3-MAT-ST01-q4', type: 'short', prompt: 'How many more children chose Dogs than Fish?', answer: '6', difficulty: 2 },
        { id: 'Y3-MAT-ST01-q5', type: 'mcq', prompt: 'Counting whole numbers, like students away each day, is ___ data.', options: ['Discrete', 'Categorical', 'Uncountable'], answer: 'Discrete', difficulty: 2 },
        { id: 'Y3-MAT-ST01-q6', type: 'short', prompt: 'Dogs 8 + Cats 5 + Fish 2 = how many children all together?', answer: '15', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ST02',
    title: 'Comparing data displays',
    year: '3',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M3ST02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Column graphs, picture graphs and dot plots all show data, comparing them helps you spot patterns.',
        'Look for which column is tallest (the most) and which is shortest (the fewest).',
        'Different displays can tell the same story, so always check the labels to read them correctly.',
      ],
      illustrations: [
        { brief: 'A column graph of books read each day', ready: true, diagram: { kind: 'bar-compare', unit: 'books', items: [{ label: 'Mon', value: 3 }, { label: 'Tue', value: 5 }, { label: 'Wed', value: 2 }] } },
        { brief: 'A dot plot of test scores', ready: true, diagram: { kind: 'dot-plot', values: [3, 4, 4, 5, 5, 5] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ST02-q1', type: 'short', prompt: 'In the graph, on which day were the fewest books read?', answer: 'Wed', difficulty: 2 },
        { id: 'Y3-MAT-ST02-q2', type: 'mcq', prompt: 'The tallest column on a graph shows…', options: ['The most', 'The least', 'The same'], answer: 'The most', difficulty: 1 },
        { id: 'Y3-MAT-ST02-q3', type: 'short', prompt: 'How many books were read on Tuesday?', answer: '5', difficulty: 1 },
        { id: 'Y3-MAT-ST02-q4', type: 'mcq', prompt: 'A dot plot shows each data point as a…', options: ['Dot', 'Bar', 'Slice'], answer: 'Dot', difficulty: 1 },
        { id: 'Y3-MAT-ST02-q5', type: 'mcq', prompt: 'Which display is best for comparing two small groups?', options: ['A dot plot', 'A map', 'A fraction'], answer: 'A dot plot', difficulty: 2 },
        { id: 'Y3-MAT-ST02-q6', type: 'short', prompt: 'Mon 3 + Tue 5 + Wed 2 = how many books all together?', answer: '10', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-ST03',
    title: 'Guided statistical investigations',
    year: '3',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M3ST03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A statistical investigation answers a question by collecting and reading data.',
        'Pose a question, collect the data, make a display, then say what you found.',
        'With a grown-up guiding you, you can investigate anything, like the most popular ice-cream flavour!',
      ],
      illustrations: [
        {
          brief: 'Flowchart of an investigation: question, data, display, findings',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Collect data' },
              { text: 'Make a display' },
              { text: 'Share the findings' },
            ],
          },
        },
        { brief: 'A column graph of favourite ice-cream flavours', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Choc', value: 6 }, { label: 'Vanilla', value: 4 }, { label: 'Straw', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-ST03-q1', type: 'mcq', prompt: 'The first step of an investigation is to…', options: ['Pose a question', 'Draw a graph', 'Share findings'], answer: 'Pose a question', difficulty: 1 },
        { id: 'Y3-MAT-ST03-q2', type: 'mcq', prompt: 'Which is a good question to investigate?', options: ['What is our class\u2019s favourite ice-cream flavour?', 'Why is the sky blue?', 'Is 2 bigger than 1?'], answer: 'What is our class\u2019s favourite ice-cream flavour?', difficulty: 1 },
        { id: 'Y3-MAT-ST03-q3', type: 'mcq', prompt: 'After collecting data you should…', options: ['Make a display like a graph', 'Stop working', 'Ask the same question again'], answer: 'Make a display like a graph', difficulty: 1 },
        { id: 'Y3-MAT-ST03-q4', type: 'short', prompt: 'In the graph (Choc 6, Vanilla 4, Straw 2), which flavour won?', answer: 'Choc', difficulty: 1 },
        { id: 'Y3-MAT-ST03-q5', type: 'mcq', prompt: 'The final step of an investigation is to…', options: ['Share your findings', 'Collect more data', 'Pose a question'], answer: 'Share your findings', difficulty: 1 },
        { id: 'Y3-MAT-ST03-q6', type: 'short', prompt: 'How many children chose Vanilla in the graph?', answer: '4', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y3-MAT-PR01',
    title: 'Chance language',
    year: '3',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M3P01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Chance words describe how likely something is, impossible, unlikely, even chance, likely and certain.',
        'Rolling a 7 on a die is impossible, but getting heads or tails on a coin is an even chance.',
        'Putting events on a chance line helps you compare them fairly.',
      ],
      illustrations: [
        { brief: 'A chance scale from impossible to certain with three events', ready: true, diagram: { kind: 'probability-scale', markers: [{ value: 0, label: 'roll a 7' }, { value: 0.5, label: 'coin = heads' }, { value: 1, label: 'sun rises' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-PR01-q1', type: 'mcq', prompt: 'Which word means the event will always happen?', options: ['Certain', 'Impossible', 'Unlikely'], answer: 'Certain', difficulty: 1 },
        { id: 'Y3-MAT-PR01-q2', type: 'mcq', prompt: 'Rolling a 7 on a six-sided die is…', options: ['Impossible', 'Certain', 'Even chance'], answer: 'Impossible', difficulty: 1 },
        { id: 'Y3-MAT-PR01-q3', type: 'mcq', prompt: 'Flipping a coin and getting heads is…', options: ['An even chance', 'Impossible', 'Certain'], answer: 'An even chance', difficulty: 2 },
        { id: 'Y3-MAT-PR01-q4', type: 'mcq', prompt: 'The sun rising tomorrow is…', options: ['Certain', 'Impossible', 'Unlikely'], answer: 'Certain', difficulty: 1 },
        { id: 'Y3-MAT-PR01-q5', type: 'mcq', prompt: 'Winning a raffle when you have 1 of 100 tickets is…', options: ['Unlikely', 'Certain', 'Impossible'], answer: 'Unlikely', difficulty: 2 },
        { id: 'Y3-MAT-PR01-q6', type: 'short', prompt: 'Which chance word is the opposite of "certain"?', answer: 'impossible', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y3-MAT-PR02',
    title: 'Repeated chance experiments',
    year: '3',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M3P02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Run a chance experiment many times, like flipping a coin or rolling a die, and record each result.',
        'The more trials you do, the closer your results come to what you predicted.',
        'Compare what you expected with what actually happened to see how chance behaves.',
      ],
      illustrations: [
        { brief: 'Recording 20 coin flips as heads and tails counts', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'Heads', value: 12 }, { label: 'Tails', value: 8 }] } },
        { brief: 'A dot plot of six die rolls', ready: true, diagram: { kind: 'dot-plot', values: [1, 2, 2, 3, 3, 3] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y3-MAT-PR02-q1', type: 'short', prompt: 'You flip a coin 20 times and get 12 heads. How many tails?', answer: '8', difficulty: 2 },
        { id: 'Y3-MAT-PR02-q2', type: 'mcq', prompt: 'The more trials you run, the closer results get to the…', options: ['Predicted chance', 'First flip', 'Biggest number'], answer: 'Predicted chance', difficulty: 1 },
        { id: 'Y3-MAT-PR02-q3', type: 'mcq', prompt: 'Running a chance experiment again and again is called doing…', options: ['Trials', 'Homework', 'A map'], answer: 'Trials', difficulty: 1 },
        { id: 'Y3-MAT-PR02-q4', type: 'short', prompt: 'You roll a die 6 times, predicting each number once. You roll 3 twice. How many extra rolls of 3 is that?', answer: '1', difficulty: 2 },
        { id: 'Y3-MAT-PR02-q5', type: 'mcq', prompt: 'After an experiment you compare what happened with what you…', options: ['Predicted', 'Drew', 'Ate'], answer: 'Predicted', difficulty: 1 },
        { id: 'Y3-MAT-PR02-q6', type: 'mcq', prompt: 'A fair coin flipped many times should land on heads about…', options: ['Half the time', 'Always', 'Never'], answer: 'Half the time', difficulty: 2 },
      ],
    },
  },
];
