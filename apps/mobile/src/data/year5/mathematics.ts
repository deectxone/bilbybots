import type { Topic } from '../../types/curriculum';

/**
 * Year 5 Mathematics, full topic bank.
 * Source of truth for scope: docs/content/year-5/mathematics.md (AC v9.0).
 * Every topic here carries its AC9M5xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR5_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y5-MAT-NN01',
    title: 'Decimals beyond two places',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Decimals can go past hundredths all the way to thousandths, three places after the decimal point, like 0.436.',
        'Look at 0.046: the 4 is in the tenths place, the 6 is in the thousandths place. Every place is ten times smaller than the one before it, so you can read decimals tiny enough to measure a raindrop.',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 0.436 with tenths, hundredths and thousandths',
          ready: true,
          diagram: { kind: 'place-value', digits: '0436', labels: ['Ones', 'Tenths', 'Hundredths', 'Thousandths'] },
        },
        {
          brief: '0.5 and 0.05 placed on a number line to compare size',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 1, marks: [{ value: 0.05, label: '0.05' }, { value: 0.5, label: '0.5' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN01-q1', type: 'mcq', prompt: 'Which digit is in the thousandths place of 0.046?', options: ['0', '4', '6'], answer: '6', difficulty: 1 },
        { id: 'Y5-MAT-NN01-q2', type: 'short', prompt: 'Write 0.4 + 0.03 + 0.006 as a decimal.', answer: '0.436', difficulty: 2 },
        { id: 'Y5-MAT-NN01-q3', type: 'mcq', prompt: 'Which is bigger: 0.5 or 0.05?', options: ['0.5', '0.05', 'They are equal'], answer: '0.5', difficulty: 1 },
        { id: 'Y5-MAT-NN01-q4', type: 'mcq', prompt: 'What is 0.009 + 0.03?', options: ['0.012', '0.039', '0.309', '0.0309'], answer: '0.039', difficulty: 2 },
        { id: 'Y5-MAT-NN01-q5', type: 'short', prompt: 'Which digit is in the hundredths place of 2.348?', answer: '4', difficulty: 2 },
        { id: 'Y5-MAT-NN01-q6', type: 'mcq', prompt: 'Which is the smallest: 0.2, 0.125 or 0.25?', options: ['0.125', '0.2', '0.25'], answer: '0.125', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN02',
    title: 'Factors, multiples & divisibility',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A factor is a number that divides another exactly, and a multiple is the answer you get when you keep skip-counting. The factors of 12 are 1, 2, 3, 4, 6 and 12.',
        'Divisibility rules make this quick: a number is divisible by 2 if it is even, by 5 if it ends in 0 or 5, and by 10 if it ends in 0. You are building a toolbox to break numbers apart like a pro!',
      ],
      illustrations: [
        { brief: 'A 3 × 4 dot array showing 3 and 4 are factors of 12', ready: true, diagram: { kind: 'dot-array', rows: 3, cols: 4, label: '3 × 4 = 12' } },
        { brief: 'The multiples of 6 growing up to 24', ready: true, diagram: { kind: 'bar-compare', items: [{ label: '×1', value: 6 }, { label: '×2', value: 12 }, { label: '×3', value: 18 }, { label: '×4', value: 24 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN02-q1', type: 'mcq', prompt: 'Which number is a multiple of 6?', options: ['16', '18', '20', '25'], answer: '18', difficulty: 1 },
        { id: 'Y5-MAT-NN02-q2', type: 'mcq', prompt: 'Which of these is a factor of 36?', options: ['5', '7', '9', '10'], answer: '9', difficulty: 2 },
        { id: 'Y5-MAT-NN02-q3', type: 'short', prompt: 'What is the largest single-digit factor of 40?', answer: '8', difficulty: 2 },
        { id: 'Y5-MAT-NN02-q4', type: 'mcq', prompt: 'Which is a common multiple of 3 and 4?', options: ['7', '12', '15', '9'], answer: '12', difficulty: 2 },
        { id: 'Y5-MAT-NN02-q5', type: 'mcq', prompt: 'A number ending in 0 or 5 is always divisible by…', options: ['2', '3', '5'], answer: '5', difficulty: 1 },
        { id: 'Y5-MAT-NN02-q6', type: 'short', prompt: 'Is 42 divisible by 7? (answer yes or no)', answer: 'yes', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN03',
    title: 'Comparing & ordering fractions',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Fractions are easier to compare when they have the same denominator, the bottom number. Line them up on one number line and the order becomes obvious.',
        'Remember, when numerators are the same, a bigger denominator means a smaller fraction: 2/7 is smaller than 2/3. You have got this!',
      ],
      illustrations: [
        {
          brief: 'Fraction bars showing 1/2, 2/4 and 4/8 are the same amount',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 2, filled: 1, label: '1/2' }, { segments: 4, filled: 2, label: '2/4' }, { segments: 8, filled: 4, label: '4/8' }] },
        },
        {
          brief: 'Fractions 1/4, 1/2 and 3/4 placed on one number line',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 1, marks: [{ value: 0.25, label: '1/4' }, { value: 0.5, label: '1/2' }, { value: 0.75, label: '3/4' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN03-q1', type: 'mcq', prompt: 'Which fraction is equivalent to 3/5?', options: ['6/10', '3/10', '5/3'], answer: '6/10', difficulty: 2 },
        { id: 'Y5-MAT-NN03-q2', type: 'short', prompt: 'Order smallest to largest: 1/4, 1/3, 1/2', answer: '1/4, 1/3, 1/2', difficulty: 2 },
        { id: 'Y5-MAT-NN03-q3', type: 'mcq', prompt: 'Which is bigger: 2/3 or 1/2?', options: ['2/3', '1/2', 'They are equal'], answer: '2/3', difficulty: 1 },
        { id: 'Y5-MAT-NN03-q4', type: 'mcq', prompt: 'Which is the smallest: 2/5, 2/7 or 2/3?', options: ['2/5', '2/7', '2/3'], answer: '2/7', difficulty: 2 },
        { id: 'Y5-MAT-NN03-q5', type: 'short', prompt: 'Write 1/2 as an equivalent fraction with denominator 8.', answer: '4/8', difficulty: 2 },
        { id: 'Y5-MAT-NN03-q6', type: 'mcq', prompt: 'Which fraction is bigger: 4/5 or 3/4?', options: ['4/5', '3/4', 'They are equal'], answer: '4/5', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN04',
    title: 'Percentages',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Percent means "out of 100", so 25% is the same as 1/4 and 50% is the same as 1/2.',
        'To find a percentage of a quantity, divide by 100 to get 1%, then multiply. Finding 10% of 150 means 150 ÷ 10 = 15, watch it pop out in seconds!',
      ],
      illustrations: [
        {
          brief: 'Pies showing 25%, 50% and 75% shaded',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: '25%' }, { slices: 2, filled: 1, label: '50%' }, { slices: 4, filled: 3, label: '75%' }] },
        },
        { brief: 'A number line matching 25%, 50% and 75% to their positions', ready: true, diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 25, label: '25%' }, { value: 50, label: '50%' }, { value: 75, label: '75%' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN04-q1', type: 'short', prompt: 'What is 50% of 40?', answer: '20', difficulty: 1 },
        { id: 'Y5-MAT-NN04-q2', type: 'mcq', prompt: 'Which fraction equals 25%?', options: ['1/4', '1/5', '1/2'], answer: '1/4', difficulty: 1 },
        { id: 'Y5-MAT-NN04-q3', type: 'short', prompt: 'What is 10% of 150?', answer: '15', difficulty: 2 },
        { id: 'Y5-MAT-NN04-q4', type: 'mcq', prompt: 'What is 25% of 80?', options: ['20', '25', '40'], answer: '20', difficulty: 2 },
        { id: 'Y5-MAT-NN04-q5', type: 'mcq', prompt: 'What is 75% of 40?', options: ['10', '20', '30'], answer: '30', difficulty: 3 },
        { id: 'Y5-MAT-NN04-q6', type: 'mcq', prompt: '100% of anything equals…', options: ['the whole amount', 'half of it', 'nothing'], answer: 'the whole amount', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN05',
    title: 'Adding & subtracting fractions',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'To add or subtract fractions, they first need the same denominator, like getting two friends to bring the same sized slices to share.',
        'Once the bottoms match, you only add or subtract the tops: 1/2 + 1/4 becomes 2/4 + 1/4 = 3/4. Splitting a pizza has never felt so powerful!',
      ],
      illustrations: [
        { brief: 'Fraction bars showing 1/4 + 2/4 = 3/4', ready: true, diagram: { kind: 'fraction-bar', bars: [{ segments: 4, filled: 1, label: '1/4' }, { segments: 4, filled: 3, label: '3/4 together' }] } },
        { brief: 'Pie sharing: 1/4 plus 1/4 makes 1/2', ready: true, diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: '1/4' }, { slices: 4, filled: 2, label: '2/4 = 1/2' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN05-q1', type: 'short', prompt: 'What is 1/2 + 1/4?', answer: '3/4', difficulty: 2 },
        { id: 'Y5-MAT-NN05-q2', type: 'mcq', prompt: 'What is 5/8 − 2/8?', options: ['3/8', '7/8', '3/16'], answer: '3/8', difficulty: 1 },
        { id: 'Y5-MAT-NN05-q3', type: 'short', prompt: 'What is 1/3 + 1/6? (simplify your answer)', answer: '1/2', difficulty: 2 },
        { id: 'Y5-MAT-NN05-q4', type: 'mcq', prompt: 'Which fraction must you add to 1/2 to get 3/4?', options: ['1/4', '1/8', '1/2'], answer: '1/4', difficulty: 3 },
        { id: 'Y5-MAT-NN05-q5', type: 'mcq', prompt: 'What is 2/3 + 1/6?', options: ['5/6', '3/6', '3/9'], answer: '5/6', difficulty: 2 },
        { id: 'Y5-MAT-NN05-q6', type: 'mcq', prompt: 'What is 7/8 − 3/8?', options: ['4/8', '10/8', '4/0'], answer: '4/8', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN06',
    title: 'Multiplying larger numbers',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Big multiplication is friendlier when you split it up: 13 × 5 is 10 × 5 plus 3 × 5, which is 50 + 15 = 65.',
        'Whether you use the split trick or the written method, estimation is your safety net, 38 × 6 is about 40 × 6, so around 240. You can multiply numbers bigger than ever before!',
      ],
      illustrations: [
        { brief: 'A 5 × 13 dot array showing 13 × 5 = 65', ready: true, diagram: { kind: 'dot-array', rows: 5, cols: 13, label: '13 × 5 = 65' } },
        { brief: 'Splitting 13 × 5 into 10 × 5 and 3 × 5', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'calc', label: '10 × 5 = 50' }, { icon: 'calc', label: '3 × 5 = 15' }, { icon: 'coin', label: '50 + 15 = 65' }], caption: 'Split big multiplication into friendly chunks' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN06-q1', type: 'short', prompt: 'What is 13 × 5?', answer: '65', difficulty: 1 },
        { id: 'Y5-MAT-NN06-q2', type: 'mcq', prompt: 'What is 25 × 4?', options: ['80', '100', '120'], answer: '100', difficulty: 1 },
        { id: 'Y5-MAT-NN06-q3', type: 'short', prompt: 'What is 14 × 7?', answer: '98', difficulty: 2 },
        { id: 'Y5-MAT-NN06-q4', type: 'mcq', prompt: 'What is 32 × 3?', options: ['96', '66', '35'], answer: '96', difficulty: 2 },
        { id: 'Y5-MAT-NN06-q5', type: 'mcq', prompt: 'Which is the best estimate for 38 × 6?', options: ['about 120', 'about 240', 'about 480'], answer: 'about 240', difficulty: 2 },
        { id: 'Y5-MAT-NN06-q6', type: 'mcq', prompt: 'What is 12 × 8?', options: ['96', '94', '80'], answer: '96', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN07',
    title: 'Division with remainders',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Sometimes a number does not divide evenly, and the little bit left over is called the remainder. 22 ÷ 5 means 4 groups of 5 with 2 left over, so we write 4 r 2.',
        'The remainder is always smaller than the divisor, so you can always check your work. Sharing is fair, and you are the boss of the leftovers!',
      ],
      illustrations: [
        { brief: 'Sharing 22 cookies among 5 friends leaves 2 over', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'bowl', label: '22 cookies' }, { icon: 'people', label: '5 friends' }, { icon: 'go-circle', label: '4 each, 2 left' }], caption: '22 ÷ 5 = 4 r 2' } },
        { brief: 'Four full rows of 5 dots with 2 left over', ready: true, diagram: { kind: 'dot-array', rows: 4, cols: 5, label: '20 shared, 2 left over' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN07-q1', type: 'mcq', prompt: 'What is 25 ÷ 4?', options: ['6 r 1', '6 r 3', '5 r 5'], answer: '6 r 1', difficulty: 2 },
        { id: 'Y5-MAT-NN07-q2', type: 'short', prompt: 'What is 47 ÷ 5? (write the whole number then the remainder)', answer: '9 r 2', difficulty: 2 },
        { id: 'Y5-MAT-NN07-q3', type: 'short', prompt: 'What is 50 ÷ 7? (write the whole number then the remainder)', answer: '7 r 1', difficulty: 2 },
        { id: 'Y5-MAT-NN07-q4', type: 'mcq', prompt: 'What is 37 ÷ 6?', options: ['6 r 1', '6 r 5', '7 r 5'], answer: '6 r 1', difficulty: 1 },
        { id: 'Y5-MAT-NN07-q5', type: 'mcq', prompt: '22 cookies shared fairly between 5 kids, how many are left over?', options: ['2', '3', '4'], answer: '2', difficulty: 2 },
        { id: 'Y5-MAT-NN07-q6', type: 'mcq', prompt: 'After dividing, the remainder is always…', options: ['smaller than the divisor', 'bigger than the divisor', 'zero'], answer: 'smaller than the divisor', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN08',
    title: 'Checking reasonableness (financial)',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Before you pay, round the prices and estimate, a toy at $19.60 and a game at $32.10 are roughly $50 all up.',
        'Estimation is your quick-check superpower: if your exact answer is nowhere near your estimate, something went wrong. Money maths is easier when you know roughly what to expect!',
      ],
      illustrations: [
        { brief: 'Two price tags rounding to about $50 total', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'price-tag', label: '$19.60' }, { icon: 'price-tag', label: '$32.10' }, { icon: 'coin', label: '≈ $50' }], caption: 'Round each price, then add' } },
        { brief: 'Benchmarks showing $19.60 rounds to $20 and $32.10 rounds to $30', ready: true, diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 20, label: '$19.60 → $20' }, { value: 30, label: '$32.10 → $30' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN08-q1', type: 'mcq', prompt: 'A toy costs $19.60 and a game costs $32.10. Best estimate for the total?', options: ['about $50', 'about $60', 'about $40'], answer: 'about $50', difficulty: 2 },
        { id: 'Y5-MAT-NN08-q2', type: 'short', prompt: 'Round $24.70 to the nearest dollar.', answer: '25', difficulty: 1 },
        { id: 'Y5-MAT-NN08-q3', type: 'mcq', prompt: 'You have $45 and a jacket costs $48.95. Do you have enough?', options: ['Yes', 'No, you are short', 'Exactly'], answer: 'No, you are short', difficulty: 1 },
        { id: 'Y5-MAT-NN08-q4', type: 'mcq', prompt: 'Three lollies at $9.80 each, best estimate of the total?', options: ['about $30', 'about $27', 'about $20'], answer: 'about $30', difficulty: 2 },
        { id: 'Y5-MAT-NN08-q5', type: 'short', prompt: 'You pay $10 for an item costing $4.90. Estimate your change to the nearest dollar.', answer: '5', difficulty: 2 },
        { id: 'Y5-MAT-NN08-q6', type: 'mcq', prompt: 'Estimating first when buying is useful because it…', options: ['helps you check your answer makes sense', 'makes you slower', 'never helps'], answer: 'helps you check your answer makes sense', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN09',
    title: 'Modelling: additive & multiplicative (financial)',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Modelling means turning a real money problem into maths, then solving it and checking it makes sense. "4 packs of stickers at $6 each" becomes 4 × 6.',
        'Decide whether to add, subtract, multiply or divide, work it out, then look back, does the answer feel right for real life? You are solving problems just like a shopkeeper!',
      ],
      illustrations: [
        {
          brief: 'The modelling process flow for a money problem',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'What do we need to find?' },
              { text: 'Choose +, −, × or ÷' },
              { text: 'Solve the maths' },
              { text: 'Check it makes sense' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN09-q1', type: 'short', prompt: '4 packets of stickers cost $6 each. How much in total?', answer: '24', difficulty: 2 },
        { id: 'Y5-MAT-NN09-q2', type: 'mcq', prompt: 'You have $12 saved and get $8 more. How much do you have now?', options: ['$20', '$16', '$96'], answer: '$20', difficulty: 1 },
        { id: 'Y5-MAT-NN09-q3', type: 'mcq', prompt: '"3 packs of 5 marbles", which operation finds the total?', options: ['Multiplication', 'Addition', 'Subtraction'], answer: 'Multiplication', difficulty: 2 },
        { id: 'Y5-MAT-NN09-q4', type: 'mcq', prompt: 'You bought 10 pencils and gave away 4. How many are left?', options: ['6', '14', '4'], answer: '6', difficulty: 1 },
        { id: 'Y5-MAT-NN09-q5', type: 'short', prompt: 'Saving $5 a week for 6 weeks, how much have you saved?', answer: '30', difficulty: 1 },
        { id: 'Y5-MAT-NN09-q6', type: 'mcq', prompt: 'The first step when solving a money problem is to…', options: ['work out what you need to find', 'guess the answer', 'start calculating wildly'], answer: 'work out what you need to find', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-NN10',
    title: 'Algorithms with digital tools',
    year: '5',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M5N10' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Calculators, computers and spreadsheets all follow an algorithm, a clear set of steps, like a recipe for maths.',
        'You still need your brain in the driver seat: estimate first, then use the tool, then check your answer makes sense. You are the boss of the machine!',
      ],
      illustrations: [
        {
          brief: 'The steps to use a calculator safely',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Estimate the answer' },
              { text: 'Type the numbers' },
              { text: 'Choose the operation' },
              { text: 'Press = and check' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-NN10-q1', type: 'mcq', prompt: 'A calculator works by following a clear set of steps called an…', options: ['algorithm', 'adjective', 'angle'], answer: 'algorithm', difficulty: 1 },
        { id: 'Y5-MAT-NN10-q2', type: 'mcq', prompt: 'Which button clears your current entry on a calculator?', options: ['C or CE', '+', '√'], answer: 'C or CE', difficulty: 1 },
        { id: 'Y5-MAT-NN10-q3', type: 'short', prompt: 'Using your calculator, what is 234 × 5?', answer: '1170', difficulty: 2 },
        { id: 'Y5-MAT-NN10-q4', type: 'mcq', prompt: 'Checking a calculator answer with estimation helps you…', options: ['catch silly mistakes', 'use more batteries', 'make it slower'], answer: 'catch silly mistakes', difficulty: 1 },
        { id: 'Y5-MAT-NN10-q5', type: 'mcq', prompt: 'In a spreadsheet, a formula to add cells B2 and C2 is written…', options: ['=B2+C2', 'B2+C2', 'SUM B2 C2'], answer: '=B2+C2', difficulty: 2 },
        { id: 'Y5-MAT-NN10-q6', type: 'short', prompt: 'What is 999 + 1?', answer: '1000', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-AL01',
    title: 'Multiplication & division inverse',
    year: '5',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M5A01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Multiplication and division undo each other, they are inverse operations. If 6 × 7 = 42, then 42 ÷ 7 = 6.',
        'Knowing one fact gives you a whole family of facts for free. Learn to bounce between times tables and division and you will never be stuck!',
      ],
      illustrations: [
        { brief: 'A balance scale showing 6 × 7 balances 42', ready: true, diagram: { kind: 'balance-scale', left: '6 × 7', right: '42', balanced: true } },
        { brief: 'Multiplying and dividing by 7 getting back to where you started', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'rotate-arrow', label: '× 7' }, { icon: 'go-circle', label: '÷ 7' }], caption: 'Multiply by 7, then divide by 7 to get back' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-AL01-q1', type: 'mcq', prompt: 'If 6 × 7 = 42, what is 42 ÷ 7?', options: ['5', '6', '7'], answer: '6', difficulty: 1 },
        { id: 'Y5-MAT-AL01-q2', type: 'short', prompt: 'If 8 × 4 = 32, what is 32 ÷ 4?', answer: '8', difficulty: 1 },
        { id: 'Y5-MAT-AL01-q3', type: 'mcq', prompt: 'If 72 ÷ 9 = 8, what is 9 × 8?', options: ['72', '64', '81'], answer: '72', difficulty: 2 },
        { id: 'Y5-MAT-AL01-q4', type: 'mcq', prompt: 'Multiplication and division are…', options: ['inverse operations', 'exactly the same', 'unrelated'], answer: 'inverse operations', difficulty: 1 },
        { id: 'Y5-MAT-AL01-q5', type: 'short', prompt: 'What is 45 ÷ 9?', answer: '5', difficulty: 1 },
        { id: 'Y5-MAT-AL01-q6', type: 'mcq', prompt: 'What is 56 ÷ 8?', options: ['6', '7', '8'], answer: '7', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-AL02',
    title: 'Unknowns in equations (× & ÷)',
    year: '5',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M5A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An equation is like a balance scale, the two sides must stay level. When you see □ × 8 = 56, the box is hiding the number you need to find.',
        'Use the inverse to hunt the mystery number: □ × 6 = 42 means □ = 42 ÷ 6 = 7. Every unknown is a little detective puzzle, and you are the detective!',
      ],
      illustrations: [
        { brief: 'A balance scale holding □ × 8 balanced with 56', ready: true, diagram: { kind: 'balance-scale', left: '□ × 8', right: '56', balanced: true } },
        { brief: 'The mystery number □ = 7 found on a number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 10, marks: [{ value: 7, label: '□ = 7' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-AL02-q1', type: 'short', prompt: 'Solve: □ × 6 = 42', answer: '7', difficulty: 2 },
        { id: 'Y5-MAT-AL02-q2', type: 'mcq', prompt: 'Solve: □ × 8 = 56', options: ['6', '7', '8'], answer: '7', difficulty: 1 },
        { id: 'Y5-MAT-AL02-q3', type: 'short', prompt: 'Solve: □ ÷ 4 = 6', answer: '24', difficulty: 2 },
        { id: 'Y5-MAT-AL02-q4', type: 'mcq', prompt: 'Solve: □ × 9 = 63', options: ['6', '7', '8'], answer: '7', difficulty: 1 },
        { id: 'Y5-MAT-AL02-q5', type: 'mcq', prompt: 'Solve: 45 ÷ □ = 9', options: ['5', '9', '4'], answer: '5', difficulty: 2 },
        { id: 'Y5-MAT-AL02-q6', type: 'mcq', prompt: 'If □ × 5 = 35, then □ = ?', options: ['5', '6', '7'], answer: '7', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ME01',
    title: 'Choosing metric units',
    year: '5',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M5M01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Metric units are built in tens, so picking the right one matters: a marathon is in kilometres, an apple in grams, and a coin thickness in millimetres.',
        'Climb the ladder, km, m, cm, mm for length, and kg to g for mass, and you will always choose a unit that fits. Measure like a scientist!',
      ],
      illustrations: [
        { brief: 'The metric ladder from km down to mm', ready: true, diagram: { kind: 'metric-ladder', units: ['km', 'm', 'cm', 'mm'], highlight: 2 } },
        { brief: 'Matching real objects to their best unit', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'mm' }, { icon: 'ruler', label: 'cm' }, { icon: 'ruler', label: 'm' }, { icon: 'ruler', label: 'km' }], caption: 'Pick the unit that fits the size' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ME01-q1', type: 'mcq', prompt: 'Best unit for the distance of a marathon run?', options: ['kilometres', 'centimetres', 'millimetres'], answer: 'kilometres', difficulty: 1 },
        { id: 'Y5-MAT-ME01-q2', type: 'mcq', prompt: 'Best unit for the mass of one apple?', options: ['kilograms', 'grams', 'tonnes'], answer: 'grams', difficulty: 1 },
        { id: 'Y5-MAT-ME01-q3', type: 'short', prompt: '3 km = how many metres?', answer: '3000', difficulty: 1 },
        { id: 'Y5-MAT-ME01-q4', type: 'short', prompt: '2500 g = how many kilograms?', answer: '2.5', difficulty: 2 },
        { id: 'Y5-MAT-ME01-q5', type: 'mcq', prompt: 'Best unit for the thickness of a coin?', options: ['millimetres', 'metres', 'kilometres'], answer: 'millimetres', difficulty: 2 },
        { id: 'Y5-MAT-ME01-q6', type: 'mcq', prompt: 'Best unit for the capacity of a bathtub?', options: ['litres', 'millilitres', 'tonnes'], answer: 'litres', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ME02',
    title: 'Perimeter & area problems',
    year: '5',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M5M02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Perimeter is the distance around the outside, add up every side. Area is the flat space inside, and for a rectangle it is length × width.',
        'A 6m by 4m room has perimeter 20m (6+4+6+4) and area 24 m². Know the difference and you can fence a yard or tile a floor like a builder!',
      ],
      illustrations: [
        { brief: 'A 6m by 4m rectangle showing perimeter and area', ready: true, diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'm' } },
        { brief: 'Perimeter is the distance around, area is the space inside', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'perimeter' }, { icon: 'box', label: 'area' }], caption: 'Around the outside vs the space inside' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ME02-q1', type: 'short', prompt: 'A rectangle is 6m long and 4m wide. What is its perimeter?', answer: '20', difficulty: 2 },
        { id: 'Y5-MAT-ME02-q2', type: 'short', prompt: 'A rectangle is 6m long and 4m wide. What is its area?', answer: '24', difficulty: 2 },
        { id: 'Y5-MAT-ME02-q3', type: 'mcq', prompt: 'A square has side 5m. What is its area?', options: ['25 m²', '20 m²', '10 m²'], answer: '25 m²', difficulty: 1 },
        { id: 'Y5-MAT-ME02-q4', type: 'mcq', prompt: 'A rectangle is 8m long and its area is 40 m². What is its width?', options: ['4 m', '5 m', '6 m'], answer: '5 m', difficulty: 2 },
        { id: 'Y5-MAT-ME02-q5', type: 'mcq', prompt: 'Perimeter is the distance…', options: ['around the outside', 'inside the shape', 'across the diagonal'], answer: 'around the outside', difficulty: 1 },
        { id: 'Y5-MAT-ME02-q6', type: 'mcq', prompt: 'A rectangle is 7m long and 3m wide. What is its perimeter?', options: ['20 m', '21 m', '10 m'], answer: '20 m', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ME03',
    title: '12- & 24-hour time',
    year: '5',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M5M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The 24-hour clock skips the am and pm, after midday you just add 12, so 3:00 pm becomes 15:00.',
        'Going the other way, 20:15 means take away 12 to get 8:15 pm. Timetables and flight schedules use 24-hour time, so now you can read them like a traveller!',
      ],
      illustrations: [
        { brief: '3 pm, 6:30 pm and 8:15 pm placed on a 24-hour number line', ready: true, diagram: { kind: 'number-line', min: 0, max: 24, marks: [{ value: 15, label: '15:00 = 3pm' }, { value: 18.5, label: '18:30' }, { value: 20.25, label: '20:15' }] } },
        { brief: 'A 12-hour clock face next to a 24-hour digital readout', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: '12-hour' }, { icon: 'clock', label: '24-hour' }], caption: 'After 12:00 pm, add 12 to go 24-hour' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ME03-q1', type: 'mcq', prompt: '3:00 pm in 24-hour time is…', options: ['15:00', '03:00', '13:00'], answer: '15:00', difficulty: 2 },
        { id: 'Y5-MAT-ME03-q2', type: 'short', prompt: 'Write 6:30 pm in 24-hour time.', answer: '18:30', difficulty: 2 },
        { id: 'Y5-MAT-ME03-q3', type: 'mcq', prompt: '09:30 in 12-hour time is…', options: ['9:30 am', '9:30 pm', '19:30'], answer: '9:30 am', difficulty: 2 },
        { id: 'Y5-MAT-ME03-q4', type: 'short', prompt: 'Write 20:15 in 12-hour time.', answer: '8:15 pm', difficulty: 2 },
        { id: 'Y5-MAT-ME03-q5', type: 'mcq', prompt: 'Midday (12 o\'clock) in 24-hour time is…', options: ['12:00', '00:00', '24:00'], answer: '12:00', difficulty: 3 },
        { id: 'Y5-MAT-ME03-q6', type: 'mcq', prompt: '14:00 is the same as…', options: ['2:00 pm', '4:00 pm', '2:00 am'], answer: '2:00 pm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ME04',
    title: 'Measuring angles in degrees',
    year: '5',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M5M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Angles are measured in degrees with a protractor. A right angle is 90°, an acute angle is smaller, and an obtuse angle is between 90° and 180°.',
        'Angles on a straight line always add up to 180°. If one angle is 130°, the other must be 50°, spot it and the answer jumps out!',
      ],
      illustrations: [
        { brief: 'Angles of 130° and 50° sitting on a straight line', ready: true, diagram: { kind: 'angle-diagram', style: 'straight', angles: [130, 50] } },
        { brief: 'Four right angles around a point', ready: true, diagram: { kind: 'angle-diagram', style: 'point', angles: [90, 90, 90, 90] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ME04-q1', type: 'mcq', prompt: 'A right angle measures…', options: ['90°', '180°', '45°'], answer: '90°', difficulty: 1 },
        { id: 'Y5-MAT-ME04-q2', type: 'mcq', prompt: 'An angle smaller than 90° is called…', options: ['acute', 'obtuse', 'reflex'], answer: 'acute', difficulty: 1 },
        { id: 'Y5-MAT-ME04-q3', type: 'short', prompt: 'An obtuse angle is bigger than 90° but smaller than how many degrees?', answer: '180', difficulty: 2 },
        { id: 'Y5-MAT-ME04-q4', type: 'mcq', prompt: 'Angles on a straight line add to…', options: ['180°', '90°', '360°'], answer: '180°', difficulty: 1 },
        { id: 'Y5-MAT-ME04-q5', type: 'mcq', prompt: 'A quarter turn measures…', options: ['90°', '45°', '180°'], answer: '90°', difficulty: 2 },
        { id: 'Y5-MAT-ME04-q6', type: 'short', prompt: 'Two angles on a straight line: one is 110°. What is the other?', answer: '70', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-MAT-SP01',
    title: 'Nets of objects',
    year: '5',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M5SP01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A net is a 3D shape opened out flat along its edges, like a cardboard box cut apart and laid on the table.',
        'Count the faces to check a net: a cube opens into 6 squares, and a box (rectangular prism) opens into 6 rectangles. Fold it back in your mind and you are thinking like a 3D designer!',
      ],
      illustrations: [
        { brief: 'Cutting along the edges and opening a box out flat', ready: true, diagram: { kind: 'flowchart', steps: [{ text: 'Start with a box' }, { text: 'Cut along the edges' }, { text: 'Open it out flat' }, { text: 'That flat shape is the net' }] } },
        { brief: 'A box unfolding into a flat net', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: 'box' }, { icon: 'knife', label: 'cut edges' }, { icon: 'map', label: 'flat net' }], caption: 'Open a box out flat to see its net' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-SP01-q1', type: 'mcq', prompt: 'A cube has how many square faces?', options: ['4', '6', '8'], answer: '6', difficulty: 1 },
        { id: 'Y5-MAT-SP01-q2', type: 'mcq', prompt: 'A net is a 3D shape…', options: ['opened out flat along its edges', 'drawn from one side only', 'filled with water'], answer: 'opened out flat along its edges', difficulty: 1 },
        { id: 'Y5-MAT-SP01-q3', type: 'mcq', prompt: 'A net of a cube is made of how many squares?', options: ['6', '4', '8'], answer: '6', difficulty: 2 },
        { id: 'Y5-MAT-SP01-q4', type: 'mcq', prompt: 'A net of a rectangular prism (box) includes…', options: ['6 rectangles', '6 triangles', '4 squares'], answer: '6 rectangles', difficulty: 2 },
        { id: 'Y5-MAT-SP01-q5', type: 'mcq', prompt: 'A net of a triangular prism has how many triangles?', options: ['2', '3', '4'], answer: '2', difficulty: 3 },
        { id: 'Y5-MAT-SP01-q6', type: 'mcq', prompt: 'Cut a cardboard box along its edges and lay it flat, you get its…', options: ['net', 'netball', 'necktie'], answer: 'net', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-SP02',
    title: 'Grid coordinates',
    year: '5',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M5SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Coordinates tell you exactly where a point sits on a grid. The pair (5, 2) means go 5 across first, then 2 up.',
        'The first number is across (x) and the second is up (y), and (0,0) is the origin where they meet. Read maps and find treasure like a real explorer!',
      ],
      illustrations: [
        { brief: 'Treasure hunt map with points marked by coordinates', ready: true, diagram: { kind: 'quadrant-grid', range: 5, points: [{ x: 4, y: 3, label: 'Home' }, { x: 5, y: 2, label: 'Treasure' }, { x: 2, y: 4, label: 'Base' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-SP02-q1', type: 'mcq', prompt: 'In a coordinate pair, which number comes first?', options: ['x (across)', 'y (up)', 'it changes'], answer: 'x (across)', difficulty: 1 },
        { id: 'Y5-MAT-SP02-q2', type: 'mcq', prompt: 'The point (5, 2) means move…', options: ['5 across and 2 up', '2 across and 5 up', '5 across and 2 across'], answer: '5 across and 2 up', difficulty: 1 },
        { id: 'Y5-MAT-SP02-q3', type: 'short', prompt: 'Start at (0,0), move 4 right and 3 up. What coordinates are you at?', answer: '(4,3)', difficulty: 2 },
        { id: 'Y5-MAT-SP02-q4', type: 'mcq', prompt: 'Which point is further to the right: (2,5) or (5,2)?', options: ['(5,2)', '(2,5)', 'they are equal'], answer: '(5,2)', difficulty: 2 },
        { id: 'Y5-MAT-SP02-q5', type: 'short', prompt: 'What are the coordinates of a point 2 across and 4 up?', answer: '(2,4)', difficulty: 2 },
        { id: 'Y5-MAT-SP02-q6', type: 'mcq', prompt: 'The point where x = 0 and y = 0 is called the…', options: ['origin', 'centre of gravity', 'start line'], answer: 'origin', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-MAT-SP03',
    title: 'Transformations & symmetry',
    year: '5',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M5SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A shape can be transformed three ways: it can slide (translation), flip like a mirror (reflection), or turn around a point (rotation).',
        'A shape has a line of symmetry if you can fold it so both halves match exactly, a square has four! Move shapes around without changing their size and you are a shape-master.',
      ],
      illustrations: [
        { brief: 'One shape being reflected, rotated and translated', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'triangle-shape', label: 'shape' }, { icon: 'mirror', label: 'reflect' }, { icon: 'rotate-arrow', label: 'rotate' }, { icon: 'arrow-right', label: 'translate' }], caption: 'Reflect, rotate or slide, the size stays the same' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-SP03-q1', type: 'mcq', prompt: 'Flipping a shape like a mirror is called a…', options: ['reflection', 'rotation', 'translation'], answer: 'reflection', difficulty: 1 },
        { id: 'Y5-MAT-SP03-q2', type: 'mcq', prompt: 'A shape has a line of symmetry if you can fold it so the two halves…', options: ['match exactly', 'are different sizes', 'never touch'], answer: 'match exactly', difficulty: 1 },
        { id: 'Y5-MAT-SP03-q3', type: 'short', prompt: 'How many lines of symmetry does a square have?', answer: '4', difficulty: 2 },
        { id: 'Y5-MAT-SP03-q4', type: 'mcq', prompt: 'Sliding a shape without turning or flipping it is a…', options: ['translation', 'reflection', 'rotation'], answer: 'translation', difficulty: 1 },
        { id: 'Y5-MAT-SP03-q5', type: 'mcq', prompt: 'Turning a shape around a fixed point is a…', options: ['rotation', 'translation', 'reflection'], answer: 'rotation', difficulty: 1 },
        { id: 'Y5-MAT-SP03-q6', type: 'mcq', prompt: 'Which letter has a vertical line of symmetry?', options: ['A', 'B', 'C'], answer: 'A', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ST01',
    title: 'Data collection & mode',
    year: '5',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M5ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Data is information you collect, and a survey is a great way to gather it, tally up the answers as you go.',
        'The mode is the value that appears most often: in 4, 5, 5, 5, 6, 7 the mode is 5. Spotting the mode tells you what is most popular!',
      ],
      illustrations: [
        { brief: 'A dot plot of the values 4, 5, 5, 5, 6, 7 with 5 towering highest', ready: true, diagram: { kind: 'dot-plot', values: [4, 5, 5, 5, 6, 7] } },
        { brief: 'A tally of favourite colours', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'blue', value: 5 }, { label: 'red', value: 4 }, { label: 'green', value: 3 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ST01-q1', type: 'short', prompt: 'In the data 4, 5, 5, 5, 6, 7, what is the mode?', answer: '5', difficulty: 2 },
        { id: 'Y5-MAT-ST01-q2', type: 'mcq', prompt: 'The mode is the value that appears…', options: ['most often', 'least often', 'first'], answer: 'most often', difficulty: 1 },
        { id: 'Y5-MAT-ST01-q3', type: 'mcq', prompt: 'To find the class\'s favourite colour, the best method is…', options: ['a survey', 'guessing', 'a ruler'], answer: 'a survey', difficulty: 1 },
        { id: 'Y5-MAT-ST01-q4', type: 'short', prompt: 'In the data 2, 3, 3, 4, 3, 5, what is the mode?', answer: '3', difficulty: 2 },
        { id: 'Y5-MAT-ST01-q5', type: 'mcq', prompt: 'A tally of five is usually drawn as…', options: ['four lines with a diagonal across', 'five separate lines', 'a circle'], answer: 'four lines with a diagonal across', difficulty: 2 },
        { id: 'Y5-MAT-ST01-q6', type: 'mcq', prompt: 'Data you collect yourself is called…', options: ['primary data', 'second-hand data', 'a rumour'], answer: 'primary data', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ST02',
    title: 'Line graphs over time',
    year: '5',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M5ST02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A line graph is perfect for watching how something changes over time, time goes along the bottom, and the values climb the side.',
        'A line sloping up means values are rising, a line sloping down means falling, and a flat line means no change. Track the temperature or your plant\'s growth like a weather scientist!',
      ],
      illustrations: [
        { brief: 'A dot plot of one week of temperatures', ready: true, diagram: { kind: 'dot-plot', values: [20, 21, 24, 26, 25], unit: '°C' } },
        { brief: 'Temperature rising from Monday to Friday', ready: true, diagram: { kind: 'bar-compare', unit: '°C', items: [{ label: 'Mon', value: 20 }, { label: 'Tue', value: 21 }, { label: 'Wed', value: 24 }, { label: 'Thu', value: 26 }, { label: 'Fri', value: 25 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ST02-q1', type: 'mcq', prompt: 'A line graph is best for showing…', options: ['change over time', 'favourite colours', 'shoe sizes'], answer: 'change over time', difficulty: 1 },
        { id: 'Y5-MAT-ST02-q2', type: 'mcq', prompt: 'On a line graph, time usually goes on the…', options: ['bottom (x) axis', 'side (y) axis', 'it does not matter'], answer: 'bottom (x) axis', difficulty: 1 },
        { id: 'Y5-MAT-ST02-q3', type: 'mcq', prompt: 'A line sloping upwards means the value is…', options: ['increasing', 'decreasing', 'staying the same'], answer: 'increasing', difficulty: 1 },
        { id: 'Y5-MAT-ST02-q4', type: 'short', prompt: 'If the line on a graph stays flat, the value is…', answer: 'staying the same', difficulty: 2 },
        { id: 'Y5-MAT-ST02-q5', type: 'mcq', prompt: 'The highest point on a line graph shows…', options: ['the largest value', 'the smallest value', 'the start'], answer: 'the largest value', difficulty: 2 },
        { id: 'Y5-MAT-ST02-q6', type: 'short', prompt: 'The temperature was 20° at 9am and 24° at 12pm. Did it rise or fall?', answer: 'rise', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y5-MAT-ST03',
    title: 'Statistical investigations',
    year: '5',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M5ST03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A statistical investigation follows a path: pose a question, collect data, organise it, then share what you found.',
        'Ask the class their favourite sport, tally the answers, build a graph, and you can answer the question with real evidence. You are a data detective!',
      ],
      illustrations: [
        {
          brief: 'The survey → tally → graph → conclusion flow',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Collect data (survey)' },
              { text: 'Organise with a tally or graph' },
              { text: 'Communicate your findings' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-ST03-q1', type: 'mcq', prompt: 'The first step of a statistical investigation is to…', options: ['pose a question', 'draw a graph', 'tally the data'], answer: 'pose a question', difficulty: 1 },
        { id: 'Y5-MAT-ST03-q2', type: 'mcq', prompt: 'Asking every classmate their favourite sport is collecting data by…', options: ['survey', 'ruler', 'guess'], answer: 'survey', difficulty: 1 },
        { id: 'Y5-MAT-ST03-q3', type: 'mcq', prompt: 'After collecting data, you organise it with a…', options: ['tally or graph', 'question', 'conclusion'], answer: 'tally or graph', difficulty: 1 },
        { id: 'Y5-MAT-ST03-q4', type: 'mcq', prompt: 'The last step of an investigation is to…', options: ['communicate your findings', 'pose a question', 'collect more data'], answer: 'communicate your findings', difficulty: 1 },
        { id: 'Y5-MAT-ST03-q5', type: 'mcq', prompt: 'Which is a good statistical question?', options: ['What is our class\'s favourite sport?', 'Is 7 a lucky number?', 'What colour is the sky?'], answer: 'What is our class\'s favourite sport?', difficulty: 2 },
        { id: 'Y5-MAT-ST03-q6', type: 'mcq', prompt: '"How many pets do students in our class own?", to answer it you need to…', options: ['collect data', 'guess', 'choose a colour'], answer: 'collect data', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-PR01',
    title: 'Equally likely outcomes',
    year: '5',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M5P01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'On a fair die, every number from 1 to 6 has the same chance of landing face up, the outcomes are equally likely.',
        'A fair coin gives heads and tails equal chances, so each is 1/2. When every outcome has an equal chance, the maths is beautifully fair!',
      ],
      illustrations: [
        { brief: 'Roll a 3, flip heads and the sun rising placed on a probability scale', ready: true, diagram: { kind: 'probability-scale', markers: [{ value: 0.167, label: 'roll a 3' }, { value: 0.5, label: 'coin heads' }, { value: 1, label: 'sun rises' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-PR01-q1', type: 'mcq', prompt: 'On a fair die, the chance of rolling a 1, 2, 3, 4, 5 or 6 is…', options: ['equal for each number', 'higher for 6', 'lower for 1'], answer: 'equal for each number', difficulty: 1 },
        { id: 'Y5-MAT-PR01-q2', type: 'mcq', prompt: 'The probability of heads when you flip a fair coin is…', options: ['1/2', '1/3', '1/4'], answer: '1/2', difficulty: 1 },
        { id: 'Y5-MAT-PR01-q3', type: 'short', prompt: 'How many equally likely outcomes are there when you roll a fair die once?', answer: '6', difficulty: 1 },
        { id: 'Y5-MAT-PR01-q4', type: 'mcq', prompt: 'The probability of rolling a 3 on a fair die is…', options: ['1/6', '1/3', '1/2'], answer: '1/6', difficulty: 2 },
        { id: 'Y5-MAT-PR01-q5', type: 'mcq', prompt: 'A spinner has 4 equal parts. The chance of landing on any one part is…', options: ['1/4', '1/2', '1'], answer: '1/4', difficulty: 2 },
        { id: 'Y5-MAT-PR01-q6', type: 'mcq', prompt: 'When outcomes are equally likely, each outcome has…', options: ['the same chance', 'a different chance', 'no chance'], answer: 'the same chance', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y5-MAT-PR02',
    title: 'Frequency & estimation of likelihood',
    year: '5',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M5P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Frequency is how many times an event actually happens. Toss a pin 100 times and if it lands point-up 70 times, its estimated probability is about 0.7.',
        'The more trials you run, the closer the estimate gets to the true probability. Repeated experiments make your guessing super smart!',
      ],
      illustrations: [
        { brief: 'Comparing heads and tails counts from 20 coin flips', ready: true, diagram: { kind: 'bar-compare', unit: 'times', items: [{ label: 'Heads', value: 11 }, { label: 'Tails', value: 9 }] } },
        { brief: 'The estimated probability of a pin landing point-up', ready: true, diagram: { kind: 'probability-scale', markers: [{ value: 0.7, label: 'pin up' }, { value: 0.5, label: 'coin heads' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y5-MAT-PR02-q1', type: 'mcq', prompt: 'A pin is tossed 100 times and lands point-up 70 times. The estimated probability of landing point-up is about…', options: ['0.7', '0.3', '0.5'], answer: '0.7', difficulty: 2 },
        { id: 'Y5-MAT-PR02-q2', type: 'mcq', prompt: 'The more trials you run, the closer the estimated probability gets to the…', options: ['true probability', 'first result', 'number of players'], answer: 'true probability', difficulty: 1 },
        { id: 'Y5-MAT-PR02-q3', type: 'mcq', prompt: 'Frequency means how many times an event…', options: ['actually happens', 'is predicted', 'is forgotten'], answer: 'actually happens', difficulty: 1 },
        { id: 'Y5-MAT-PR02-q4', type: 'short', prompt: 'A spinner lands on blue 15 times out of 50. Write 15/50 as a decimal.', answer: '0.3', difficulty: 3 },
        { id: 'Y5-MAT-PR02-q5', type: 'mcq', prompt: 'If you roll a fair die 600 times, about how many sixes would you expect?', options: ['about 100', 'about 600', 'about 60'], answer: 'about 100', difficulty: 2 },
        { id: 'Y5-MAT-PR02-q6', type: 'mcq', prompt: 'Using the frequency of past results to estimate likelihood is called…', options: ['frequency-based estimation', 'pure guessing', 'wishful thinking'], answer: 'frequency-based estimation', difficulty: 2 },
      ],
    },
  },
];
