import type { Topic } from '../../types/curriculum';

/**
 * Year 7 Mathematics, full topic bank.
 * Source of truth for scope: docs/content/year-7-10/mathematics.md (AC v9.0).
 * Every topic carries its AC9M7xxx content-description code and a rendered
 * `diagram` per illustration slot (see src/components/illustrations/diagrams.tsx)
 * instead of a placeholder. Each assignment carries 6 questions (nominal pace)
 * / 4 (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR7_MATHEMATICS_TOPICS: Topic[] = [
  // ---------- Number (9 CDs) ----------
  {
    id: 'Y7-MAT-NN01',
    title: 'Squares, square roots & perfect squares',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A perfect square is what you get when you multiply a whole number by itself, 16 = 4 × 4. The square root of a perfect square is the whole number you started with, so √16 = 4.',
        'Squares and square roots undo each other like pressing rewind: square 7 to get 49, then square-root 49 to get back to 7. This pair is handy for real problems, like finding the side length of a square from its area.',
      ],
      illustrations: [
        {
          brief: 'A 6 by 6 dot array showing that 36 is a perfect square',
          ready: true,
          diagram: { kind: 'dot-array', rows: 6, cols: 6, label: '6 × 6 = 36' },
        },
        {
          brief: 'A number line showing √9, √49 and √81',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 10,
            marks: [
              { value: 3, label: '√9' },
              { value: 7, label: '√49' },
              { value: 9, label: '√81' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN01-q1', type: 'mcq', prompt: 'What is √81?', options: ['9', '7', '11'], answer: '9', difficulty: 1 },
        { id: 'Y7-MAT-NN01-q2', type: 'short', prompt: 'What is 12 × 12?', answer: '144', difficulty: 1 },
        { id: 'Y7-MAT-NN01-q3', type: 'mcq', prompt: 'Which of these is a perfect square?', options: ['36', '48', '50'], answer: '36', difficulty: 1 },
        { id: 'Y7-MAT-NN01-q4', type: 'short', prompt: 'A square has area 49 m². What is its side length in metres?', answer: '7', difficulty: 2 },
        { id: 'Y7-MAT-NN01-q5', type: 'mcq', prompt: 'What is √25?', options: ['6', '5', '4'], answer: '5', difficulty: 1 },
        { id: 'Y7-MAT-NN01-q6', type: 'mcq', prompt: 'Squaring and square-rooting undo each other. What is √(8 × 8)?', options: ['64', '16', '8'], answer: '8', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN02',
    title: 'Prime factorisation & index notation',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Any natural number can be broken into a unique product of prime numbers, this is its prime factorisation. 24 = 2 × 2 × 2 × 3, which we write with exponent notation as 2³ × 3.',
        'Exponent notation counts how many times a number is multiplied by itself: 2³ means 2 × 2 × 2. Using exponents keeps big factorisations short and neat.',
      ],
      illustrations: [
        {
          brief: 'A factor-tree flowchart breaking 24 down to 2³ × 3',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Start with 24' },
              { text: 'Is it even?', decision: true },
              { text: '24 = 2 × 12' },
              { text: '24 = 2 × 2 × 6' },
              { text: '24 = 2 × 2 × 2 × 3 = 2³ × 3' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN02-q1', type: 'mcq', prompt: 'Which is the prime factorisation of 8?', options: ['2³', '2² × 3', '4 × 2'], answer: '2³', difficulty: 2 },
        { id: 'Y7-MAT-NN02-q2', type: 'short', prompt: 'What is 5³?', answer: '125', difficulty: 1 },
        { id: 'Y7-MAT-NN02-q3', type: 'mcq', prompt: 'Which of these is a prime number?', options: ['21', '23', '27'], answer: '23', difficulty: 1 },
        { id: 'Y7-MAT-NN02-q4', type: 'mcq', prompt: 'What is the prime factorisation of 18?', options: ['2 × 3²', '2² × 3', '3 × 6'], answer: '2 × 3²', difficulty: 3 },
        { id: 'Y7-MAT-NN02-q5', type: 'short', prompt: 'What is 2⁴?', answer: '16', difficulty: 1 },
        { id: 'Y7-MAT-NN02-q6', type: 'mcq', prompt: 'In 3⁴, how many times is 3 multiplied by itself?', options: ['3', '4', '12'], answer: '4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN03',
    title: 'Place value & powers of ten',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every digit has a value based on its place, 4 207 means 4 thousands, 2 hundreds, 0 tens and 7 ones. With powers of ten we write this as 4 × 10³ + 2 × 10² + 0 × 10¹ + 7 × 10⁰.',
        'The place-value system works because each place is 10 times bigger than the one to its right: 10⁰ = 1, 10¹ = 10, 10² = 100 and so on.',
      ],
      illustrations: [
        {
          brief: 'The place-value house for 4 207 labelled with powers of ten',
          ready: true,
          diagram: { kind: 'place-value', digits: '4207', labels: ['10³', '10²', '10¹', '10⁰'] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN03-q1', type: 'short', prompt: 'Write 10⁴ as a whole number.', answer: '10000', difficulty: 1 },
        { id: 'Y7-MAT-NN03-q2', type: 'mcq', prompt: 'In 4 207, which digit is in the hundreds place?', options: ['2', '0', '4'], answer: '2', difficulty: 1 },
        { id: 'Y7-MAT-NN03-q3', type: 'short', prompt: 'Write 5 × 10³ as a whole number.', answer: '5000', difficulty: 2 },
        { id: 'Y7-MAT-NN03-q4', type: 'mcq', prompt: 'What does 10⁰ equal?', options: ['0', '1', '9'], answer: '1', difficulty: 2 },
        { id: 'Y7-MAT-NN03-q5', type: 'short', prompt: 'How many zeros are in the number ten thousand (10 000)?', answer: '4', difficulty: 1 },
        { id: 'Y7-MAT-NN03-q6', type: 'mcq', prompt: 'The digit 3 in 3 × 10² has a value of…', options: ['300', '500', '900'], answer: '300', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN04',
    title: 'Equivalent rational numbers on the number line',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The same amount can wear three different costumes: 0.5, 1/2 and 50% all mean exactly the same thing. Being fluent at swapping between fraction, decimal and percentage is a genuine superpower.',
        'Putting rational numbers on a number line in their simplest form, like 3/4 = 0.75, makes comparing and ordering them easy.',
      ],
      illustrations: [
        {
          brief: 'A number line showing 1/4, 1/2 and 3/4 as decimals',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 1,
            marks: [
              { value: 0.25, label: '1/4 = 0.25' },
              { value: 0.5, label: '1/2 = 0.5' },
              { value: 0.75, label: '3/4 = 0.75' },
            ],
          },
        },
        {
          brief: 'Two pies showing 1/2 is the same as 2/4',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 2, filled: 1, label: '1/2' },
              { slices: 4, filled: 2, label: '2/4' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN04-q1', type: 'mcq', prompt: 'Which fraction is equivalent to 0.5?', options: ['1/2', '1/3', '3/4'], answer: '1/2', difficulty: 1 },
        { id: 'Y7-MAT-NN04-q2', type: 'short', prompt: 'Write 3/4 as a decimal.', answer: '0.75', difficulty: 2 },
        { id: 'Y7-MAT-NN04-q3', type: 'mcq', prompt: 'Which decimal equals 25%?', options: ['0.25', '0.5', '0.75'], answer: '0.25', difficulty: 1 },
        { id: 'Y7-MAT-NN04-q4', type: 'short', prompt: 'Write 0.4 as a fraction in simplest form.', answer: '2/5', difficulty: 3 },
        { id: 'Y7-MAT-NN04-q5', type: 'mcq', prompt: 'Which of these is the largest number?', options: ['0.7', '3/4', '0.65'], answer: '3/4', difficulty: 2 },
        { id: 'Y7-MAT-NN04-q6', type: 'short', prompt: 'Order from smallest to largest: 0.6, 0.55, 0.7', answer: '0.55, 0.6, 0.7', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN05',
    title: 'Rounding & estimation',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Rounding is cutting a number to a chosen accuracy: 3.75 rounds to 3.8 to one decimal place. Which accuracy is "right" depends on the situation, money needs cents, a survey might only need the nearest whole.',
        'Estimation is rounding before you calculate, to check your exact answer is reasonable. If 19.9 × 4.1 should be about 80, an answer of 8 or 800 is a red flag.',
      ],
      illustrations: [
        {
          brief: 'A number line showing 19.9 rounding up to 20',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 19,
            max: 21,
            marks: [
              { value: 19.9, label: '19.9 → 20' },
              { value: 20, label: '20' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN05-q1', type: 'mcq', prompt: 'Round 3.75 to one decimal place.', options: ['3.8', '4.0', '3.6'], answer: '3.8', difficulty: 2 },
        { id: 'Y7-MAT-NN05-q2', type: 'short', prompt: 'Estimate 19.9 × 4.1 by rounding each number to the nearest whole, then multiplying. What is the estimate?', answer: '80', difficulty: 2 },
        { id: 'Y7-MAT-NN05-q3', type: 'mcq', prompt: 'Round 12.46 to one decimal place.', options: ['12.5', '13.0', '12.0'], answer: '12.5', difficulty: 2 },
        { id: 'Y7-MAT-NN05-q4', type: 'mcq', prompt: 'A shop price is $27.83. Rounded to the nearest dollar it is…', options: ['$28', '$27', '$30'], answer: '$28', difficulty: 1 },
        { id: 'Y7-MAT-NN05-q5', type: 'short', prompt: 'Round 0.07 to one decimal place.', answer: '0.1', difficulty: 2 },
        { id: 'Y7-MAT-NN05-q6', type: 'mcq', prompt: 'Which is the best estimate for 51.2 + 38.9?', options: ['90', '50', '140'], answer: '90', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN06',
    title: 'Four operations with positive rational numbers',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Fractions, decimals and percentages are all the same rational family, so the four operations work on all of them. For fractions: multiply straight across, and divide by turning the second fraction upside down and multiplying.',
        'Estimate first, then pick the strategy that fits: 1/2 + 1/3 needs a common denominator of 6, while 0.5 + 0.25 is a quick mental decimal.',
      ],
      illustrations: [
        {
          brief: 'A fraction bar showing 1/2 + 1/3 = 5/6',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 6, filled: 5, label: '1/2 + 1/3 = 5/6' }] },
        },
        {
          brief: 'Two pies: 1/2 and 1/3',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 2, filled: 1, label: '1/2' },
              { slices: 3, filled: 1, label: '1/3' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN06-q1', type: 'short', prompt: '1/2 + 1/3 = ?', answer: '5/6', difficulty: 2 },
        { id: 'Y7-MAT-NN06-q2', type: 'mcq', prompt: '2/5 × 3/4 = ?', options: ['6/20', '5/9', '8/15'], answer: '6/20', difficulty: 3 },
        { id: 'Y7-MAT-NN06-q3', type: 'short', prompt: '0.6 × 0.5 = ?', answer: '0.3', difficulty: 2 },
        { id: 'Y7-MAT-NN06-q4', type: 'short', prompt: '3/4 ÷ 1/2 = ? (write your answer as a decimal)', answer: '1.5', difficulty: 3 },
        { id: 'Y7-MAT-NN06-q5', type: 'mcq', prompt: '1/4 + 1/5 = ?', options: ['9/20', '2/9', '2/20'], answer: '9/20', difficulty: 3 },
        { id: 'Y7-MAT-NN06-q6', type: 'short', prompt: 'What is 50% of 64?', answer: '32', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN07',
    title: 'Integers, comparing, ordering, adding & subtracting',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Integers are whole numbers and their negatives. Adding a negative moves left on the number line; subtracting a negative moves right, so 6 − (−2) = 6 + 2 = 8.',
        'When comparing, the further left a number sits on the number line, the smaller it is: −6 < −1 even though 6 is bigger than 1.',
      ],
      illustrations: [
        {
          brief: 'A thermometer dipping to −4°C below zero',
          ready: true,
          diagram: { kind: 'thermometer', min: -10, max: 30, value: -4, unit: '°C' },
        },
        {
          brief: 'A number line showing −6 and 3',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: -8,
            max: 8,
            marks: [
              { value: -6, label: '−6' },
              { value: 3, label: '3' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN07-q1', type: 'short', prompt: '−5 + 8 = ?', answer: '3', difficulty: 1 },
        { id: 'Y7-MAT-NN07-q2', type: 'short', prompt: '−3 − 4 = ?', answer: '-7', difficulty: 2 },
        { id: 'Y7-MAT-NN07-q3', type: 'mcq', prompt: 'Which number is smaller: −6 or −1?', options: ['−6', '−1'], answer: '−6', difficulty: 1 },
        { id: 'Y7-MAT-NN07-q4', type: 'short', prompt: 'Order from smallest to largest: −2, 5, 0, −7', answer: '-7, -2, 0, 5', difficulty: 2 },
        { id: 'Y7-MAT-NN07-q5', type: 'short', prompt: '6 − (−2) = ?', answer: '8', difficulty: 2 },
        { id: 'Y7-MAT-NN07-q6', type: 'mcq', prompt: '−7 + 2 = ?', options: ['−5', '5', '−9'], answer: '−5', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN08',
    title: 'Ratios',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N08' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A ratio compares quantities using the same units, written like 2 : 3. If a ratio is 2 red marbles for every 3 blue, it describes the relationship, not the actual count.',
        'Ratios simplify like fractions: 6 : 4 simplifies to 3 : 2 by dividing both sides by 2. To share a total in a ratio, add the parts, then split the total proportionally.',
      ],
      illustrations: [
        {
          brief: 'A bar comparison of a 2 : 3 ratio of red to blue',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Red', value: 2 }, { label: 'Blue', value: 3 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN08-q1', type: 'mcq', prompt: 'Simplify 6 : 4.', options: ['3 : 2', '2 : 3', '6 : 4'], answer: '3 : 2', difficulty: 1 },
        { id: 'Y7-MAT-NN08-q2', type: 'short', prompt: 'A ratio is 2 : 3 and the first part is 10. What is the second part?', answer: '15', difficulty: 2 },
        { id: 'Y7-MAT-NN08-q3', type: 'short', prompt: '$30 is shared between two friends in the ratio 1 : 2. What is the larger share in dollars?', answer: '20', difficulty: 2 },
        { id: 'Y7-MAT-NN08-q4', type: 'mcq', prompt: 'Simplify 10 : 15.', options: ['2 : 3', '3 : 2', '5 : 10'], answer: '2 : 3', difficulty: 1 },
        { id: 'Y7-MAT-NN08-q5', type: 'mcq', prompt: 'A class has boys and girls in the ratio 3 : 1 with 24 students in total. How many girls are there?', options: ['6', '7', '9'], answer: '6', difficulty: 3 },
        { id: 'Y7-MAT-NN08-q6', type: 'mcq', prompt: 'Simplify 12 : 8.', options: ['3 : 2', '4 : 3', '6 : 4'], answer: '3 : 2', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-NN09',
    title: 'Modelling with rational numbers & percentages',
    year: '7',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M7N09' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Modelling turns a real problem into maths: decide what to calculate, pick the strategy, solve it, then check the answer makes sense in the real world.',
        'Percentages power everyday money maths, a 25% off sale means paying 75% of the price, and 10% of a bill is a handy starting point for tips and GST-style calculations.',
      ],
      illustrations: [
        {
          brief: 'The modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Formulate the problem' },
              { text: 'Choose a strategy' },
              { text: 'Solve' },
              { text: 'Interpret & check in context' },
            ],
          },
        },
        {
          brief: 'A bar showing $80 dropping to $60 after a 25% discount',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Original', value: 80 }, { label: 'After 25% off', value: 60 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-NN09-q1', type: 'short', prompt: 'A jacket costs $50 and is 20% off. What do you pay in dollars?', answer: '40', difficulty: 2 },
        { id: 'Y7-MAT-NN09-q2', type: 'mcq', prompt: 'What is the first step of mathematical modelling?', options: ['Formulate the problem', 'Draw a graph', 'Guess an answer'], answer: 'Formulate the problem', difficulty: 1 },
        { id: 'Y7-MAT-NN09-q3', type: 'mcq', prompt: 'An $80 backpack has 25% off. What is the new price?', options: ['$60', '$55', '$75'], answer: '$60', difficulty: 2 },
        { id: 'Y7-MAT-NN09-q4', type: 'short', prompt: 'What is 10% of 250?', answer: '25', difficulty: 1 },
        { id: 'Y7-MAT-NN09-q5', type: 'mcq', prompt: 'A 10% tip on a $48 meal is…', options: ['$4.80', '$48', '$9.60'], answer: '$4.80', difficulty: 2 },
        { id: 'Y7-MAT-NN09-q6', type: 'mcq', prompt: 'After solving a modelled problem, the last step should be…', options: ['Check the answer makes sense in context', 'Delete your working', 'Start a new problem'], answer: 'Check the answer makes sense in context', difficulty: 2 },
      ],
    },
  },
  // ---------- Algebra (6 CDs) ----------
  {
    id: 'Y7-MAT-AL01',
    title: 'Formulas & substitution',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A formula is a rule using variables that links quantities, area A = l × w uses variables for length and width. Substituting means replacing the variables with real numbers and calculating.',
        'Pick the right formula for the job: perimeter P = 2(l + w) for a fence, area A = l × w for turf, distance d = s × t for a road trip.',
      ],
      illustrations: [
        {
          brief: 'A 6 m by 4 m rectangle showing area 24 m²',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'm' },
        },
        {
          brief: 'A balance scale weighing A = l × w against 24',
          ready: true,
          diagram: { kind: 'balance-scale', left: 'A = l × w', right: '24', balanced: true },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL01-q1', type: 'short', prompt: 'Using A = l × w, find A when l = 5 and w = 3.', answer: '15', difficulty: 1 },
        { id: 'Y7-MAT-AL01-q2', type: 'short', prompt: 'Using P = 2(l + w), find P when l = 6 and w = 4.', answer: '20', difficulty: 2 },
        { id: 'Y7-MAT-AL01-q3', type: 'mcq', prompt: 'A car travels at 60 km/h for 3 hours. Using d = s × t, the distance is…', options: ['180 km', '20 km', '63 km'], answer: '180 km', difficulty: 1 },
        { id: 'Y7-MAT-AL01-q4', type: 'short', prompt: 'Using A = l × w, find A when l = 7 and w = 2.', answer: '14', difficulty: 1 },
        { id: 'Y7-MAT-AL01-q5', type: 'mcq', prompt: 'Substituting x = 4 into y = 2x + 3 gives…', options: ['11', '8', '12'], answer: '11', difficulty: 2 },
        { id: 'Y7-MAT-AL01-q6', type: 'mcq', prompt: 'Which operation is used in the formula d = s × t?', options: ['Multiplication', 'Addition', 'Division'], answer: 'Multiplication', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-AL02',
    title: 'Formulating algebraic expressions',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An expression is a phrase in maths made of constants (numbers), variables (letters like n or x), operations and brackets, "three more than double a number" becomes 2n + 3.',
        'Brackets change the order: "the sum of x and 5, doubled" is 2(x + 5), not 2x + 5. Translating words into algebra is all about reading the sentence structure carefully.',
      ],
      illustrations: [
        {
          brief: 'A balance scale showing 2n + 3 equals n + n + 3',
          ready: true,
          diagram: { kind: 'balance-scale', left: '2n + 3', right: 'n + n + 3', balanced: true },
        },
        {
          brief: 'A flowchart for translating words into algebra',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Read the phrase' },
              { text: 'Pick the variable' },
              { text: 'Translate words → operations' },
              { text: 'Add brackets where needed' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL02-q1', type: 'mcq', prompt: '"Three more than twice a number n" as an expression is…', options: ['2n + 3', '3n + 2', '2 + n × 3'], answer: '2n + 3', difficulty: 1 },
        { id: 'Y7-MAT-AL02-q2', type: 'mcq', prompt: '"Seven less than x" is…', options: ['x − 7', '7 − x', 'x + 7'], answer: 'x − 7', difficulty: 2 },
        { id: 'Y7-MAT-AL02-q3', type: 'mcq', prompt: '"The sum of x and 5, then doubled" is…', options: ['2(x + 5)', '2x + 5', 'x + 10'], answer: '2(x + 5)', difficulty: 3 },
        { id: 'Y7-MAT-AL02-q4', type: 'mcq', prompt: 'Which expression means "half of y"?', options: ['y ÷ 2', '2y', 'y + 2'], answer: 'y ÷ 2', difficulty: 1 },
        { id: 'Y7-MAT-AL02-q5', type: 'mcq', prompt: 'If n = 5, what is the value of 2n + 3?', options: ['13', '10', '8'], answer: '13', difficulty: 2 },
        { id: 'Y7-MAT-AL02-q6', type: 'mcq', prompt: 'Which phrase matches x − 9?', options: ['Nine less than a number', 'Nine times a number', 'A number divided by nine'], answer: 'Nine less than a number', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-AL03',
    title: 'Solving linear equations',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An equation is a balance: whatever is on the left equals whatever is on the right. To solve, undo the operations in reverse order, subtract before adding back, divide before multiplying back.',
        'Verifying means substituting your solution back into the original equation to check that both sides really are equal.',
      ],
      illustrations: [
        {
          brief: 'A balance scale weighing x + 3 against 9',
          ready: true,
          diagram: { kind: 'balance-scale', left: 'x + 3', right: '9', balanced: true },
        },
        {
          brief: 'A flowchart solving x + 3 = 9 then verifying',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'x + 3 = 9' },
              { text: 'Subtract 3 from both sides' },
              { text: 'x = 6' },
              { text: 'Verify: 6 + 3 = 9 ✓' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL03-q1', type: 'short', prompt: 'Solve x + 3 = 9.', answer: '6', difficulty: 1 },
        { id: 'Y7-MAT-AL03-q2', type: 'short', prompt: 'Solve 2x = 14.', answer: '7', difficulty: 1 },
        { id: 'Y7-MAT-AL03-q3', type: 'short', prompt: 'Solve x − 5 = 4.', answer: '9', difficulty: 1 },
        { id: 'Y7-MAT-AL03-q4', type: 'short', prompt: 'Solve 3x + 1 = 10.', answer: '3', difficulty: 2 },
        { id: 'Y7-MAT-AL03-q5', type: 'mcq', prompt: 'To verify that x = 6 solves x + 3 = 9, you check that…', options: ['6 + 3 = 9', '6 × 3 = 9', '6 − 3 = 9'], answer: '6 + 3 = 9', difficulty: 2 },
        { id: 'Y7-MAT-AL03-q6', type: 'short', prompt: 'Solve x ÷ 2 = 6.', answer: '12', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-AL04',
    title: 'Relationships between variables & graphs',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Graphs of functions show how two variables connect. On a distance–time graph, a steeper line means moving faster, a flat line means stopped, and the shape of the line tells the whole story of the trip.',
        'Reading authentic data graphs, phone plans, temperatures, growth, lets you describe the relationship: increasing, decreasing, constant, or changing speed.',
      ],
      illustrations: [
        {
          brief: 'Points of y = x on a quadrant grid',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 8,
            points: [
              { x: 0, y: 0, label: 'A' },
              { x: 2, y: 2, label: 'B' },
              { x: 4, y: 4, label: 'C' },
              { x: 6, y: 6, label: 'D' },
            ],
          },
        },
        {
          brief: 'Bar comparison of stationary, walking and running speeds',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Stationary', value: 2 }, { label: 'Walking', value: 4 }, { label: 'Running', value: 8 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL04-q1', type: 'mcq', prompt: 'On a distance–time graph, a flat (horizontal) line means…', options: ['Stopped', 'Moving fastest', 'Going backwards'], answer: 'Stopped', difficulty: 1 },
        { id: 'Y7-MAT-AL04-q2', type: 'mcq', prompt: 'A steeper line on a distance–time graph means…', options: ['Faster speed', 'Slower speed', 'Same speed'], answer: 'Faster speed', difficulty: 1 },
        { id: 'Y7-MAT-AL04-q3', type: 'mcq', prompt: 'On the graph y = x, as x doubles, y…', options: ['Also doubles', 'Stays the same', 'Halves'], answer: 'Also doubles', difficulty: 2 },
        { id: 'Y7-MAT-AL04-q4', type: 'mcq', prompt: 'A graph that goes downhill from left to right shows…', options: ['A decreasing relationship', 'An increasing relationship', 'No relationship'], answer: 'A decreasing relationship', difficulty: 2 },
        { id: 'Y7-MAT-AL04-q5', type: 'short', prompt: 'On the graph y = x, what is y when x = 5?', answer: '5', difficulty: 1 },
        { id: 'Y7-MAT-AL04-q6', type: 'mcq', prompt: '"As x increases, y increases" is a description of…', options: ['Trend or direction', 'Colour', 'Page number'], answer: 'Trend or direction', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-AL05',
    title: 'Tables of values & plotting points',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A growing pattern can be captured as a rule, then a table of values: for the rule y = 2x, when x = 1, 2, 3…, y = 2, 4, 6…',
        'Each row of the table is a point (x, y) you can plot on the Cartesian plane. Plot all the points and you can see the pattern take shape.',
      ],
      illustrations: [
        {
          brief: 'Points (1,2), (2,4), (3,6), (4,8) for y = 2x',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 9,
            points: [
              { x: 1, y: 2, label: '(1,2)' },
              { x: 2, y: 4, label: '(2,4)' },
              { x: 3, y: 6, label: '(3,6)' },
              { x: 4, y: 8, label: '(4,8)' },
            ],
          },
        },
        {
          brief: 'A 4 by 2 dot array labelled y = 2x',
          ready: true,
          diagram: { kind: 'dot-array', rows: 4, cols: 2, label: 'y = 2x' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL05-q1', type: 'short', prompt: 'For y = 2x, what is y when x = 4?', answer: '8', difficulty: 1 },
        { id: 'Y7-MAT-AL05-q2', type: 'short', prompt: 'For y = x + 2, what is y when x = 5?', answer: '7', difficulty: 1 },
        { id: 'Y7-MAT-AL05-q3', type: 'mcq', prompt: 'The row x = 3, y = 6 in the table for y = 2x is plotted at the point…', options: ['(3,6)', '(6,3)', '(3,3)'], answer: '(3,6)', difficulty: 2 },
        { id: 'Y7-MAT-AL05-q4', type: 'mcq', prompt: 'Which rule makes y = 3 when x = 1, and y = 6 when x = 2?', options: ['y = 3x', 'y = x + 2', 'y = x + 3'], answer: 'y = 3x', difficulty: 2 },
        { id: 'Y7-MAT-AL05-q5', type: 'short', prompt: 'Pattern: 2, 4, 6, 8, 10. What is the 6th term?', answer: '12', difficulty: 1 },
        { id: 'Y7-MAT-AL05-q6', type: 'mcq', prompt: 'In a table of values, each row becomes…', options: ['A point on the Cartesian plane', 'A whole graph by itself', 'A formula'], answer: 'A point on the Cartesian plane', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-AL06',
    title: 'Formulas & variation with digital tools',
    year: '7',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M7A06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Formulas can hold several variables, the area of a rectangle uses two (l and w). Changing one variable systematically shows how it drives the result, something spreadsheets and graphing tools make instant.',
        'Doubling one variable does not always double the answer: double the side length of a square and the area quadruples, because area involves squaring.',
      ],
      illustrations: [
        {
          brief: 'A square labelled with a doubled side and its area',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 8, width: 8, unit: 'm' },
        },
        {
          brief: 'A bar showing side doubling → area quadrupling',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '×', items: [{ label: 'Side doubles', value: 2 }, { label: 'Area quadruples', value: 4 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-AL06-q1', type: 'mcq', prompt: 'Double the side length of a square. Its area becomes…', options: ['4 times as big', '2 times as big', '8 times as big'], answer: '4 times as big', difficulty: 2 },
        { id: 'Y7-MAT-AL06-q2', type: 'mcq', prompt: 'In A = l × w, doubling both l and w makes A…', options: ['4 times as big', '2 times as big', 'Stay the same'], answer: '4 times as big', difficulty: 3 },
        { id: 'Y7-MAT-AL06-q3', type: 'mcq', prompt: 'In d = s × t, if speed doubles and time stays the same, distance…', options: ['Doubles', 'Halves', 'Stays the same'], answer: 'Doubles', difficulty: 1 },
        { id: 'Y7-MAT-AL06-q4', type: 'mcq', prompt: 'A spreadsheet is handy for formulas because it…', options: ['Recalculates instantly when a variable changes', 'Counts your homework', 'Draws only pictures'], answer: 'Recalculates instantly when a variable changes', difficulty: 2 },
        { id: 'Y7-MAT-AL06-q5', type: 'short', prompt: 'In A = l × w, if l = 3 and w = 3, what is A?', answer: '9', difficulty: 1 },
        { id: 'Y7-MAT-AL06-q6', type: 'mcq', prompt: 'Systematically changing one variable and watching the result is called studying…', options: ['Variation', 'Estimation', 'Symmetry'], answer: 'Variation', difficulty: 2 },
      ],
    },
  },
  // ---------- Measurement (6 CDs) ----------
  {
    id: 'Y7-MAT-ME01',
    title: 'Area of triangles & parallelograms',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A triangle is half of a rectangle with the same base and height, so area = ½ × base × height. A parallelogram is a rectangle that has been pushed sideways, so area = base × height.',
        'Height is always measured at right angles to the base, not along the slanted side.',
      ],
      illustrations: [
        {
          brief: 'A 6 cm by 4 cm rectangle, the double of the triangle example',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME01-q1', type: 'short', prompt: 'A triangle has base 6 cm and height 4 cm. What is its area in cm²?', answer: '12', difficulty: 2 },
        { id: 'Y7-MAT-ME01-q2', type: 'short', prompt: 'A parallelogram has base 5 cm and height 3 cm. What is its area in cm²?', answer: '15', difficulty: 1 },
        { id: 'Y7-MAT-ME01-q3', type: 'short', prompt: 'A triangle has base 10 cm and height 8 cm. What is its area in cm²?', answer: '40', difficulty: 2 },
        { id: 'Y7-MAT-ME01-q4', type: 'mcq', prompt: 'A triangle is best described as…', options: ['Half of a rectangle with the same base and height', 'A whole rectangle', 'Double a rectangle'], answer: 'Half of a rectangle with the same base and height', difficulty: 2 },
        { id: 'Y7-MAT-ME01-q5', type: 'short', prompt: 'A parallelogram has base 7 m and height 2 m. What is its area in m²?', answer: '14', difficulty: 1 },
        { id: 'Y7-MAT-ME01-q6', type: 'mcq', prompt: 'Area is measured in…', options: ['Square units', 'Cubic units', 'Kilogram units'], answer: 'Square units', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ME02',
    title: 'Volume of right prisms',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A prism is a 3D shape with the same cross-section all the way through. Its volume is area of the base × height.',
        'For a rectangular prism that is length × width × height. For a triangular prism, first find the area of the triangular end (½ × base × height), then multiply by the length.',
      ],
      illustrations: [
        {
          brief: 'The rectangular base of a prism, 6 cm by 4 cm',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME02-q1', type: 'short', prompt: 'A rectangular prism is 5 cm × 4 cm × 3 cm. What is its volume in cm³?', answer: '60', difficulty: 1 },
        { id: 'Y7-MAT-ME02-q2', type: 'short', prompt: 'A prism has base area 12 cm² and height 5 cm. What is its volume in cm³?', answer: '60', difficulty: 2 },
        { id: 'Y7-MAT-ME02-q3', type: 'short', prompt: 'A cube has edges of length 3 cm. What is its volume in cm³?', answer: '27', difficulty: 2 },
        { id: 'Y7-MAT-ME02-q4', type: 'mcq', prompt: 'For a triangular prism, you first find the area of…', options: ['The triangular end (base)', 'A square side', 'The length only'], answer: 'The triangular end (base)', difficulty: 2 },
        { id: 'Y7-MAT-ME02-q5', type: 'short', prompt: 'A triangular prism has a base area of 8 cm² and length 10 cm. What is its volume in cm³?', answer: '80', difficulty: 2 },
        { id: 'Y7-MAT-ME02-q6', type: 'mcq', prompt: 'Volume is measured in…', options: ['Cubic units', 'Square units', 'Metres only'], answer: 'Cubic units', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ME03',
    title: 'π and circles',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'π (pi) is the special number that connects a circle’s diameter to its circumference: C = π × d. Since the diameter is double the radius, C = 2πr too.',
        'π is about 3.14, slightly bigger than 3. No matter the circle’s size, the circumference is always a bit more than 3 times the diameter.',
      ],
      illustrations: [
        {
          brief: 'A number line showing π ≈ 3.14 between 3 and 4',
          ready: true,
          diagram: { kind: 'number-line', min: 3, max: 4, marks: [{ value: 3.14, label: 'π ≈ 3.14' }] },
        },
        {
          brief: 'A bar showing the circumference is about 3.14 times the diameter',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '×', items: [{ label: 'Diameter', value: 1 }, { label: 'Circumference', value: 3.14 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME03-q1', type: 'short', prompt: 'A circle has diameter 10 cm. Using C = πd with π = 3.14, what is its circumference in cm?', answer: '31.4', difficulty: 2 },
        { id: 'Y7-MAT-ME03-q2', type: 'mcq', prompt: 'Which is the closest value of π?', options: ['3.14', '3.5', '4.2'], answer: '3.14', difficulty: 1 },
        { id: 'Y7-MAT-ME03-q3', type: 'short', prompt: 'A circle has radius 3 cm. What is its diameter in cm?', answer: '6', difficulty: 1 },
        { id: 'Y7-MAT-ME03-q4', type: 'mcq', prompt: 'The circumference of a circle is always…', options: ['Just over 3 times the diameter', 'Exactly 3 times the diameter', 'The same as the diameter'], answer: 'Just over 3 times the diameter', difficulty: 2 },
        { id: 'Y7-MAT-ME03-q5', type: 'mcq', prompt: 'Which formula links circumference and radius?', options: ['C = 2πr', 'C = πr', 'C = 2r'], answer: 'C = 2πr', difficulty: 2 },
        { id: 'Y7-MAT-ME03-q6', type: 'short', prompt: 'Using C = πd with π = 3.14 and d = 5, what is C?', answer: '15.7', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ME04',
    title: 'Parallel lines & transversals',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'When parallel lines are crossed by a transversal, three angle relationships appear: corresponding angles are equal, alternate angles are equal, and co-interior angles add to 180°.',
        'Spot the letter shapes: corresponding angles sit in matching corners, alternate angles sit on opposite sides of the transversal (Z shape), and co-interior angles sit between the parallel lines on the same side (U or C shape).',
      ],
      illustrations: [
        {
          brief: 'Angles on a straight line adding to 180°, 120° and 60°',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'straight', angles: [120, 60] },
        },
        {
          brief: 'Vertically opposite equal angles of 60°',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'vertical', angles: [60, 60] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME04-q1', type: 'mcq', prompt: 'Corresponding angles formed by a transversal across parallel lines are…', options: ['Equal', 'Always 90°', 'Always different'], answer: 'Equal', difficulty: 1 },
        { id: 'Y7-MAT-ME04-q2', type: 'short', prompt: 'Co-interior angles on parallel lines add to how many degrees?', answer: '180', difficulty: 1 },
        { id: 'Y7-MAT-ME04-q3', type: 'mcq', prompt: 'One co-interior angle is 120°. The other is…', options: ['60°', '120°', '90°'], answer: '60°', difficulty: 2 },
        { id: 'Y7-MAT-ME04-q4', type: 'mcq', prompt: 'Alternate angles lie on…', options: ['Opposite sides of the transversal', 'The same line only', 'Outside the parallel lines'], answer: 'Opposite sides of the transversal', difficulty: 2 },
        { id: 'Y7-MAT-ME04-q5', type: 'short', prompt: 'If one corresponding angle is 75°, the matching corresponding angle is how many degrees?', answer: '75', difficulty: 2 },
        { id: 'Y7-MAT-ME04-q6', type: 'mcq', prompt: 'The shape formed by alternate angles is often described as…', options: ['A Z shape', 'An X shape', 'A square'], answer: 'A Z shape', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ME05',
    title: 'Angle sums of triangles & polygons',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The three interior angles of any triangle add to exactly 180°. Knowing two angles instantly gives you the third.',
        'Any polygon can be sliced into triangles from one vertex, a quadrilateral makes 2 triangles (2 × 180 = 360°), a pentagon makes 3 (540°). The pattern for n sides is (n − 2) × 180°.',
      ],
      illustrations: [
        {
          brief: 'Three angles, 60°, 80° and 40°, totalling 180°',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'straight', angles: [60, 80, 40] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME05-q1', type: 'short', prompt: 'A triangle has angles 60° and 80°. What is the third angle in degrees?', answer: '40', difficulty: 1 },
        { id: 'Y7-MAT-ME05-q2', type: 'short', prompt: 'The interior angles of a triangle add to how many degrees?', answer: '180', difficulty: 1 },
        { id: 'Y7-MAT-ME05-q3', type: 'mcq', prompt: 'The interior angles of a quadrilateral add to…', options: ['360°', '180°', '540°'], answer: '360°', difficulty: 1 },
        { id: 'Y7-MAT-ME05-q4', type: 'mcq', prompt: 'A pentagon (5 sides) has an interior angle sum of…', options: ['540°', '360°', '720°'], answer: '540°', difficulty: 2 },
        { id: 'Y7-MAT-ME05-q5', type: 'short', prompt: 'An isosceles triangle has two equal angles of 45°. What is the third angle in degrees?', answer: '90', difficulty: 2 },
        { id: 'Y7-MAT-ME05-q6', type: 'mcq', prompt: 'A hexagon (6 sides) has an interior angle sum of…', options: ['720°', '540°', '900°'], answer: '720°', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ME06',
    title: 'Modelling with ratios',
    year: '7',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M7M06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Ratio models appear in recipes, maps, mixtures and money. A map scale of 1 : 100 000 means 1 cm on the map equals 100 000 cm (1 km) on the ground.',
        'The modelling steps are the same as always: formulate the problem with a ratio, solve by scaling both parts, then check your answer against the real situation.',
      ],
      illustrations: [
        {
          brief: 'The ratio-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Find the ratio in the problem' },
              { text: 'Scale both parts equally' },
              { text: 'Solve' },
              { text: 'Check against real life' },
            ],
          },
        },
        {
          brief: 'A bar showing map 1 cm equalling 2 km on the ground',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Map (cm)', value: 1 }, { label: 'Ground (km)', value: 2 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ME06-q1', type: 'short', prompt: 'Map scale: 1 cm = 2 km. A 4 cm gap on the map is how many km?', answer: '8', difficulty: 1 },
        { id: 'Y7-MAT-ME06-q2', type: 'short', prompt: 'A recipe needs flour and sugar in the ratio 3 : 1. How many cups of sugar for 12 cups of flour?', answer: '4', difficulty: 2 },
        { id: 'Y7-MAT-ME06-q3', type: 'mcq', prompt: 'A model car is built at a scale of 1 : 24. The real car is 4.8 m long. How long is the model?', options: ['0.2 m', '2 m', '48 m'], answer: '0.2 m', difficulty: 3 },
        { id: 'Y7-MAT-ME06-q4', type: 'mcq', prompt: 'A paint mix uses 2 parts blue to 5 parts white. Using 10 litres of white, how much blue do you need?', options: ['4 L', '25 L', '7 L'], answer: '4 L', difficulty: 2 },
        { id: 'Y7-MAT-ME06-q5', type: 'mcq', prompt: 'When scaling a ratio, both parts must be…', options: ['Multiplied by the same number', 'Added together', 'Kept exactly the same'], answer: 'Multiplied by the same number', difficulty: 2 },
        { id: 'Y7-MAT-ME06-q6', type: 'mcq', prompt: 'Simplify the ratio 5 : 25.', options: ['1 : 5', '5 : 1', '1 : 4'], answer: '1 : 5', difficulty: 1 },
      ],
    },
  },
  // ---------- Space (4 CDs) ----------
  {
    id: 'Y7-MAT-SP01',
    title: 'Representing objects in 2D',
    year: '7',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M7SP01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        '3D objects can be drawn in 2D in different ways: nets (flattened shapes that fold up) and plans or elevations (views from above and the side). Each representation shows different information.',
        'A net shows exactly how a shape is built but is hard to picture folded; a sketch shows the whole object but can hide faces. Choosing the best representation depends on the job.',
      ],
      illustrations: [
        {
          brief: 'One 3D object shown as a sketch, a net and a view',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'cube', label: '3D object' },
              { icon: 'box', label: 'Net' },
              { icon: 'picture-frame', label: 'Views' },
            ],
            caption: 'One object, many 2D representations',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-SP01-q1', type: 'mcq', prompt: 'A net is best described as…', options: ['A flattened shape that folds into a 3D object', 'A 3D drawing of an object', 'A top-down photo'], answer: 'A flattened shape that folds into a 3D object', difficulty: 1 },
        { id: 'Y7-MAT-SP01-q2', type: 'mcq', prompt: 'How many squares are in the net of a cube?', options: ['6', '4', '8'], answer: '6', difficulty: 1 },
        { id: 'Y7-MAT-SP01-q3', type: 'mcq', prompt: 'A "plan view" shows an object…', options: ['From directly above', 'From the side', 'From underneath only'], answer: 'From directly above', difficulty: 2 },
        { id: 'Y7-MAT-SP01-q4', type: 'mcq', prompt: 'A disadvantage of a 3D sketch is that it…', options: ['Can hide some faces', 'Shows no shape at all', 'Is always a net'], answer: 'Can hide some faces', difficulty: 2 },
        { id: 'Y7-MAT-SP01-q5', type: 'mcq', prompt: 'The main advantage of a net over a sketch is that it…', options: ['Shows every face laid out flat', 'Shows colours better', 'Is always smaller'], answer: 'Shows every face laid out flat', difficulty: 2 },
        { id: 'Y7-MAT-SP01-q6', type: 'mcq', prompt: 'An architect choosing a plan view is most interested in…', options: ['The layout from above', 'The wall decorations', 'The weight of the building'], answer: 'The layout from above', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-SP02',
    title: 'Classifying triangles, quadrilaterals & polygons',
    year: '7',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M7SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Triangles are classified by sides (equilateral 3 equal, isosceles 2 equal, scalene 0 equal) and by angles (acute, right, obtuse). Quadrilaterals have their own family tree: squares, rectangles, rhombuses, parallelograms, trapeziums and kites.',
        'A shape can have two names at once, a square is also a rectangle (4 right angles) and also a rhombus (4 equal sides). Classification is about which properties you focus on.',
      ],
      illustrations: [
        {
          brief: 'Three triangles labelled equilateral, isosceles and scalene',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'triangle-shape', label: 'Equilateral' },
              { icon: 'triangle-shape', label: 'Isosceles' },
              { icon: 'triangle-shape', label: 'Scalene' },
            ],
            caption: 'Classifying triangles by their sides',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-SP02-q1', type: 'mcq', prompt: 'A triangle with three equal sides is…', options: ['Equilateral', 'Isosceles', 'Scalene'], answer: 'Equilateral', difficulty: 1 },
        { id: 'Y7-MAT-SP02-q2', type: 'mcq', prompt: 'A triangle with two equal sides is…', options: ['Isosceles', 'Equilateral', 'Scalene'], answer: 'Isosceles', difficulty: 1 },
        { id: 'Y7-MAT-SP02-q3', type: 'mcq', prompt: 'A quadrilateral with 4 right angles and 4 equal sides is a…', options: ['Square', 'Trapezium', 'Kite'], answer: 'Square', difficulty: 1 },
        { id: 'Y7-MAT-SP02-q4', type: 'mcq', prompt: 'A triangle with one 90° angle is…', options: ['Right-angled', 'Acute', 'Obtuse'], answer: 'Right-angled', difficulty: 1 },
        { id: 'Y7-MAT-SP02-q5', type: 'mcq', prompt: 'Every square is also…', options: ['A rectangle and a rhombus', 'Only a trapezium', 'A triangle'], answer: 'A rectangle and a rhombus', difficulty: 2 },
        { id: 'Y7-MAT-SP02-q6', type: 'mcq', prompt: 'A quadrilateral with exactly one pair of parallel sides is a…', options: ['Trapezium', 'Parallelogram', 'Square'], answer: 'Trapezium', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-SP03',
    title: 'Transformations using coordinates',
    year: '7',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M7SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Transformations can be described with coordinates. A translation slides every point by the same amount: (x, y) → (x + 2, y + 3) slides 2 right and 3 up.',
        'A reflection across the x-axis flips the y-sign: (3, 2) → (3, −2). Across the y-axis it flips the x-sign: (3, 2) → (−3, 2). A rotation turns the whole shape around a fixed point.',
      ],
      illustrations: [
        {
          brief: 'Point A (3,2) reflected across the x-axis to A′ (3,−2)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 6,
            points: [
              { x: 3, y: 2, label: 'A (3,2)' },
              { x: 3, y: -2, label: 'A′ (3,−2)' },
            ],
          },
        },
        {
          brief: 'Point P (1,1) translated to P′ (3,4)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 6,
            points: [
              { x: 1, y: 1, label: 'P (1,1)' },
              { x: 3, y: 4, label: 'P′ (3,4)' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-SP03-q1', type: 'short', prompt: 'Reflect the point (3, 2) across the x-axis. Write the new coordinates as x, y.', answer: '3, -2', difficulty: 2 },
        { id: 'Y7-MAT-SP03-q2', type: 'short', prompt: 'Translate the point (1, 2) by 2 right and 3 up. Write the new coordinates as x, y.', answer: '3, 5', difficulty: 1 },
        { id: 'Y7-MAT-SP03-q3', type: 'mcq', prompt: 'Reflecting across the y-axis, the point (3, 2) becomes…', options: ['(−3, 2)', '(3, −2)', '(−3, −2)'], answer: '(−3, 2)', difficulty: 2 },
        { id: 'Y7-MAT-SP03-q4', type: 'mcq', prompt: 'A reflection across the x-axis changes the sign of the…', options: ['y-coordinate', 'x-coordinate', 'both coordinates'], answer: 'y-coordinate', difficulty: 1 },
        { id: 'Y7-MAT-SP03-q5', type: 'mcq', prompt: 'A translation slides a shape without…', options: ['Turning or flipping it', 'Moving it at all', 'Changing its position'], answer: 'Turning or flipping it', difficulty: 1 },
        { id: 'Y7-MAT-SP03-q6', type: 'short', prompt: 'Translate the point (4, 1) by 1 right and 2 up. Write the new coordinates as x, y.', answer: '5, 3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-SP04',
    title: 'Algorithms to sort & classify shapes',
    year: '7',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M7SP04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An algorithm is a step-by-step recipe with decisions. A shape-sorting algorithm asks questions like "Does it have 4 sides?" and branches to a different class for each answer.',
        'Describing how the algorithm works means explaining each decision and why the ordering of questions matters, the first question splits the shapes in the most useful way.',
      ],
      illustrations: [
        {
          brief: 'A flowchart with a decision diamond sorting shapes',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Does it have 4 sides?', decision: true },
              { text: 'Yes → quadrilateral' },
              { text: 'Are all angles right angles?', decision: true },
              { text: 'Rectangle' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-SP04-q1', type: 'mcq', prompt: 'In a shape-sorting algorithm, the first useful question might be…', options: ['Does it have 4 sides?', 'What is its colour?', 'Who drew it?'], answer: 'Does it have 4 sides?', difficulty: 1 },
        { id: 'Y7-MAT-SP04-q2', type: 'mcq', prompt: 'A decision in a flowchart is shown by a…', options: ['Diamond shape', 'Rectangle shape', 'Circle shape'], answer: 'Diamond shape', difficulty: 2 },
        { id: 'Y7-MAT-SP04-q3', type: 'mcq', prompt: 'A shape with 4 equal sides and 4 right angles is sorted as…', options: ['A square', 'A triangle', 'A pentagon'], answer: 'A square', difficulty: 2 },
        { id: 'Y7-MAT-SP04-q4', type: 'mcq', prompt: 'The order of questions in a sorting algorithm matters because…', options: ['The first split shapes the whole classification', 'The questions are random', 'Order never matters'], answer: 'The first split shapes the whole classification', difficulty: 2 },
        { id: 'Y7-MAT-SP04-q5', type: 'mcq', prompt: 'Describing how an algorithm works means…', options: ['Explaining each step and decision', 'Listing random shapes', 'Counting the shapes only'], answer: 'Explaining each step and decision', difficulty: 2 },
        { id: 'Y7-MAT-SP04-q6', type: 'mcq', prompt: 'An algorithm must end with…', options: ['A clear sorted answer for every shape', 'A brand new question', 'No output at all'], answer: 'A clear sorted answer for every shape', difficulty: 2 },
      ],
    },
  },
  // ---------- Statistics (3 CDs) ----------
  {
    id: 'Y7-MAT-ST01',
    title: 'Measures of central tendency',
    year: '7',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M7ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Central tendency summarises a data set with one typical value: the mean (average), median (middle when sorted) and mode (most common), plus the range (spread).',
        'Choose the right one for the data. The median resists outliers (a $1 million mansion barely moves it), while the mean gets pulled by extreme values, that is why house prices are reported with the median.',
      ],
      illustrations: [
        {
          brief: 'A dot plot of the values 4, 5, 5, 6, 6, 6, 7',
          ready: true,
          diagram: { kind: 'dot-plot', values: [4, 5, 5, 6, 6, 6, 7] },
        },
        {
          brief: 'The mean, median and mode of the same data set',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Mean', value: 5.57 }, { label: 'Median', value: 6 }, { label: 'Mode', value: 6 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ST01-q1', type: 'short', prompt: 'What is the mean of 4, 6 and 8?', answer: '6', difficulty: 1 },
        { id: 'Y7-MAT-ST01-q2', type: 'short', prompt: 'What is the median of 3, 5, 7, 9, 11?', answer: '7', difficulty: 1 },
        { id: 'Y7-MAT-ST01-q3', type: 'mcq', prompt: 'In the data 4, 5, 5, 6, 6, 6, 7, the mode is…', options: ['6', '5', '7'], answer: '6', difficulty: 1 },
        { id: 'Y7-MAT-ST01-q4', type: 'short', prompt: 'What is the range of 3, 8, 5, 12?', answer: '9', difficulty: 2 },
        { id: 'Y7-MAT-ST01-q5', type: 'mcq', prompt: 'A town’s house prices include one very expensive mansion. Which measure is least affected?', options: ['Median', 'Mean', 'Mode'], answer: 'Median', difficulty: 2 },
        { id: 'Y7-MAT-ST01-q6', type: 'mcq', prompt: 'The range tells you…', options: ['How spread out the data is', 'The most common value', 'The middle value'], answer: 'How spread out the data is', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ST02',
    title: 'Numerical data displays',
    year: '7',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M7ST02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Numerical data can be shown as dot plots, stem-and-leaf plots or column graphs. A stem-and-leaf plot keeps the actual values while sorting them, so you can read both the data and its shape.',
        'Describing a distribution means commenting on its shape (where it is clumped), its centre (typical value), its spread and any outliers (unusually small or large values).',
      ],
      illustrations: [
        {
          brief: 'A dot plot with a possible outlier at 9',
          ready: true,
          diagram: { kind: 'dot-plot', values: [3, 4, 4, 5, 5, 5, 6, 6, 7, 9] },
        },
        {
          brief: 'Column counts of the dot-plot values',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '3', value: 1 }, { label: '4', value: 2 }, { label: '5', value: 3 }, { label: '6', value: 2 }, { label: '7', value: 1 }, { label: '9', value: 1 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ST02-q1', type: 'mcq', prompt: 'In the dot plot 3, 4, 4, 5, 5, 5, 6, 6, 7, 9, the outlier is most likely…', options: ['9', '5', '3'], answer: '9', difficulty: 2 },
        { id: 'Y7-MAT-ST02-q2', type: 'mcq', prompt: 'A stem-and-leaf plot is useful because it…', options: ['Keeps the actual data values while sorting them', 'Hides the smallest value', 'Only works for words'], answer: 'Keeps the actual data values while sorting them', difficulty: 2 },
        { id: 'Y7-MAT-ST02-q3', type: 'mcq', prompt: 'The "shape" of a distribution refers to…', options: ['Where the values clump together', 'The colour of the graph', 'The page size'], answer: 'Where the values clump together', difficulty: 2 },
        { id: 'Y7-MAT-ST02-q4', type: 'short', prompt: 'In 3, 4, 4, 5, 5, 5, 6, 6, 7, 9, what is the most common value?', answer: '5', difficulty: 1 },
        { id: 'Y7-MAT-ST02-q5', type: 'mcq', prompt: 'An outlier is a value that is…', options: ['Unusually small or large compared with the rest', 'Always the mode', 'Exactly in the middle'], answer: 'Unusually small or large compared with the rest', difficulty: 1 },
        { id: 'Y7-MAT-ST02-q6', type: 'mcq', prompt: 'The "spread" of a distribution is best measured by the…', options: ['Range', 'Mode', 'Title'], answer: 'Range', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-ST03',
    title: 'Statistical investigations',
    year: '7',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M7ST03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A statistical investigation follows a cycle: pose a question, decide what to measure (a discrete or continuous numerical variable), collect the data, then analyse and report on shape and summary statistics.',
        'A continuous variable can take any value (height, time); a discrete variable takes separate values (number of pets, shoe size). Choosing the right variable and display decides how useful your findings are.',
      ],
      illustrations: [
        {
          brief: 'The investigation cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Choose a variable' },
              { text: 'Collect data' },
              { text: 'Analyse & report' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-ST03-q1', type: 'mcq', prompt: 'Which is a continuous numerical variable?', options: ['Height in cm', 'Number of siblings', 'Colour of shoes'], answer: 'Height in cm', difficulty: 2 },
        { id: 'Y7-MAT-ST03-q2', type: 'mcq', prompt: 'Which is a discrete numerical variable?', options: ['Number of pets', 'Mass in kg', 'Time to run 100 m'], answer: 'Number of pets', difficulty: 1 },
        { id: 'Y7-MAT-ST03-q3', type: 'mcq', prompt: 'The first step of a statistical investigation is…', options: ['Posing a question', 'Drawing a graph', 'Reporting findings'], answer: 'Posing a question', difficulty: 1 },
        { id: 'Y7-MAT-ST03-q4', type: 'mcq', prompt: 'Height in centimetres is continuous because it can…', options: ['Take any value within a range', 'Only be whole numbers', 'Only be a category'], answer: 'Take any value within a range', difficulty: 2 },
        { id: 'Y7-MAT-ST03-q5', type: 'mcq', prompt: 'After collecting data, an investigation should…', options: ['Analyse and report on shape and statistics', 'Stop immediately', 'Forget the question'], answer: 'Analyse and report on shape and statistics', difficulty: 2 },
        { id: 'Y7-MAT-ST03-q6', type: 'mcq', prompt: 'The best summary of an investigation is…', options: ['A clear report of what the data showed', 'A random guess', 'A single unexplained number'], answer: 'A clear report of what the data showed', difficulty: 2 },
      ],
    },
  },
  // ---------- Probability (2 CDs) ----------
  {
    id: 'Y7-MAT-PR01',
    title: 'Sample spaces & single-stage probability',
    year: '7',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M7P01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The sample space is the list of every possible outcome. For one coin: {Heads, Tails}. For one die: {1, 2, 3, 4, 5, 6}.',
        'If outcomes are equally likely, probability = favourable outcomes ÷ total outcomes. Rolling a 4 has probability 1/6, and the chance of an even number is 3/6 = 1/2.',
      ],
      illustrations: [
        {
          brief: 'A probability scale with roll-a-4, even number and certain',
          ready: true,
          diagram: {
            kind: 'probability-scale',
            markers: [
              { value: 0.17, label: 'roll a 4' },
              { value: 0.5, label: 'even number' },
              { value: 1, label: 'certain' },
            ],
          },
        },
        {
          brief: 'Two pie fractions: P(4) = 1/6 and P(even) = 3/6',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 6, filled: 1, label: 'P(4) = 1/6' },
              { slices: 6, filled: 3, label: 'P(even) = 3/6' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-PR01-q1', type: 'mcq', prompt: 'The sample space for one coin toss is…', options: ['{Heads, Tails}', '{1, 2, 3, 4, 5, 6}', '{Heads only}'], answer: '{Heads, Tails}', difficulty: 1 },
        { id: 'Y7-MAT-PR01-q2', type: 'mcq', prompt: 'The probability of rolling a 4 on a fair die is…', options: ['1/6', '1/4', '1/2'], answer: '1/6', difficulty: 1 },
        { id: 'Y7-MAT-PR01-q3', type: 'mcq', prompt: 'The probability of rolling an even number on a die is…', options: ['1/2', '1/3', '1/6'], answer: '1/2', difficulty: 1 },
        { id: 'Y7-MAT-PR01-q4', type: 'short', prompt: 'A bag has 3 red and 5 blue marbles. What is P(red) as a fraction?', answer: '3/8', difficulty: 2 },
        { id: 'Y7-MAT-PR01-q5', type: 'mcq', prompt: 'A sample space is…', options: ['The list of all possible outcomes', 'One particular outcome', 'A lucky guess'], answer: 'The list of all possible outcomes', difficulty: 1 },
        { id: 'Y7-MAT-PR01-q6', type: 'mcq', prompt: 'If an event has 2 favourable outcomes out of 8 equally likely outcomes, P = …', options: ['2/8', '8/2', '2/1'], answer: '2/8', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y7-MAT-PR02',
    title: 'Repeated chance experiments & simulations',
    year: '7',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M7P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A single trial is just a glimpse of chance. Run a coin 200 times and heads will land close to 100, the law of large numbers says more trials push observed results toward the predicted probability.',
        'Digital simulations let you run thousands of trials in seconds. The difference between predicted and observed is expected, and explaining why it shrinks with more trials is the whole point.',
      ],
      illustrations: [
        {
          brief: 'Predicted 100 heads vs observed 96 heads in 200 tosses',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Predicted heads', value: 100 }, { label: 'Observed heads', value: 96 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y7-MAT-PR02-q1', type: 'mcq', prompt: 'Flipping a fair coin 200 times, the predicted number of heads is…', options: ['100', '50', '200'], answer: '100', difficulty: 1 },
        { id: 'Y7-MAT-PR02-q2', type: 'mcq', prompt: 'Running more trials usually makes observed results…', options: ['Closer to the predicted probability', 'More unpredictable', 'Exactly identical to predictions'], answer: 'Closer to the predicted probability', difficulty: 2 },
        { id: 'Y7-MAT-PR02-q3', type: 'mcq', prompt: 'A simulation is powerful because it can…', options: ['Run thousands of trials quickly', 'Predict a single coin exactly', 'Ignore chance entirely'], answer: 'Run thousands of trials quickly', difficulty: 1 },
        { id: 'Y7-MAT-PR02-q4', type: 'short', prompt: 'You predict 100 heads in 200 tosses and observe 96. What is the difference?', answer: '4', difficulty: 2 },
        { id: 'Y7-MAT-PR02-q5', type: 'mcq', prompt: 'Observed results differing from predicted is…', options: ['Expected, especially with few trials', 'Proof the experiment is broken', 'Impossible'], answer: 'Expected, especially with few trials', difficulty: 2 },
        { id: 'Y7-MAT-PR02-q6', type: 'mcq', prompt: 'The reason more trials improve accuracy is called the…', options: ['Law of large numbers', 'Law of averages only', 'Rule of three'], answer: 'Law of large numbers', difficulty: 2 },
      ],
    },
  },
];
