import type { Topic } from '../../types/curriculum';

/**
 * Year 6 Mathematics — full topic bank.
 * Source of truth for scope: docs/content/year-6/mathematics.md (AC v9.0).
 * Every topic here carries its AC9M6xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR6_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y6-MAT-NN01',
    title: 'Whole numbers up to millions & place value',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N01', state: { nsa: 'MA2-4NA-01' } }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Numbers can be tiny or giant! In Year 6 you can read them all the way up to the millions.',
        'Look at 3 204 587 — each digit has its own place: millions, hundred-thousands, ten-thousands, thousands, hundreds, tens, ones.',
        'Here comes a sneaky one: negative numbers. Temperatures below zero go below the line — and so do bank balances that are overdrawn!',
      ],
      illustrations: [
        {
          brief: 'The place-value house showing 3 204 587 on each floor',
          ready: true,
          diagram: {
            kind: 'place-value',
            digits: '3204587',
            labels: ['M', 'HTh', 'TTh', 'Th', 'H', 'T', 'O'],
          },
        },
        {
          brief: 'A thermometer dipping below zero in the snow',
          ready: true,
          diagram: { kind: 'thermometer', min: -10, max: 30, value: -4, unit: '°C' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN01-q1', type: 'mcq', prompt: 'Which digit is in the hundred-thousands place in 3 204 587?', options: ['2', '3', '0', '4'], answer: '2', difficulty: 1 },
        { id: 'Y6-MAT-NN01-q2', type: 'short', prompt: 'Write the number: six hundred thousand, four hundred and five.', answer: '600 405', difficulty: 2 },
        { id: 'Y6-MAT-NN01-q3', type: 'mcq', prompt: 'The temperature is −4°C and it drops another 3°C. What is it now?', options: ['−1°C', '−7°C', '7°C', '1°C'], answer: '−7°C', difficulty: 2 },
        { id: 'Y6-MAT-NN01-q4', type: 'mcq', prompt: 'Which number is bigger: −8 or −2?', options: ['−8', '−2', "They're equal"], answer: '−2', difficulty: 1 },
        { id: 'Y6-MAT-NN01-q5', type: 'mcq', prompt: 'Which digit is in the ten-thousands place in 3 204 587?', options: ['2', '0', '4', '5'], answer: '0', difficulty: 2 },
        { id: 'Y6-MAT-NN01-q6', type: 'short', prompt: 'Order from smallest to largest: 5, −3, −8, 0', answer: '-8, -3, 0, 5', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN02',
    title: 'Prime, composite & square numbers',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A prime number only has two factors: 1 and itself (like 7). A composite number has more than two factors (like 12 = 1×12, 2×6, 3×4).',
        'A square number is what you get when you multiply a number by itself — 4×4=16, so 16 is a square number. You can always arrange a square number into a perfect square of dots.',
      ],
      illustrations: [
        {
          brief: '4×4 dot array showing the square number 16',
          ready: true,
          diagram: { kind: 'dot-array', rows: 4, cols: 4, label: '4 × 4 = 16' },
        },
        {
          brief: 'Prime vs composite sorting scene',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'go-circle', label: '2, 3, 7…' }, { icon: 'stop-sign', label: '4, 6, 9…' }], caption: 'Prime numbers vs composite numbers' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN02-q1', type: 'mcq', prompt: 'Which of these is a prime number?', options: ['9', '15', '13', '21'], answer: '13', difficulty: 1 },
        { id: 'Y6-MAT-NN02-q2', type: 'mcq', prompt: 'Which of these is a square number?', options: ['18', '25', '30', '40'], answer: '25', difficulty: 1 },
        { id: 'Y6-MAT-NN02-q3', type: 'short', prompt: 'List one factor pair (other than 1×12) for 12.', answer: '2 x 6', difficulty: 2 },
        { id: 'Y6-MAT-NN02-q4', type: 'mcq', prompt: 'Is 17 prime or composite?', options: ['Prime', 'Composite'], answer: 'Prime', difficulty: 1 },
        { id: 'Y6-MAT-NN02-q5', type: 'short', prompt: 'What is 6 × 6?', answer: '36', difficulty: 1 },
        { id: 'Y6-MAT-NN02-q6', type: 'mcq', prompt: 'How many factors does any prime number have?', options: ['1', '2', '3'], answer: '2', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN03',
    title: 'Fractions — equivalence, comparing & ordering',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Equivalent fractions are twins that look different — 2/4 and 1/2 are the same amount!',
        'To compare fractions, give them matching bottoms (same denominator). Place them on one number line and their order becomes obvious.',
      ],
      illustrations: [
        {
          brief: 'Pie slices showing 1/2 and 2/4 are the same amount',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 2, filled: 1, label: '1/2' },
              { slices: 4, filled: 2, label: '2/4' },
            ],
          },
        },
        {
          brief: 'Fractions 1/2, 2/3 and 3/4 placed on one number line',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 1,
            marks: [
              { value: 0.5, label: '1/2' },
              { value: 0.667, label: '2/3' },
              { value: 0.75, label: '3/4' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN03-q1', type: 'mcq', prompt: 'Which fraction is equivalent to 1/2?', options: ['2/4', '2/3', '3/6', 'Both 2/4 and 3/6'], answer: 'Both 2/4 and 3/6', difficulty: 2 },
        { id: 'Y6-MAT-NN03-q2', type: 'mcq', prompt: 'Which fraction is smallest: 1/2, 2/3, 3/4?', options: ['1/2', '2/3', '3/4'], answer: '1/2', difficulty: 1 },
        { id: 'Y6-MAT-NN03-q3', type: 'short', prompt: 'What number goes in the box? 3/4 = □/8', answer: '6', difficulty: 2 },
        { id: 'Y6-MAT-NN03-q4', type: 'mcq', prompt: 'Which fraction is bigger: 2/3 or 3/4?', options: ['2/3', '3/4', "They're equal"], answer: '3/4', difficulty: 2 },
        { id: 'Y6-MAT-NN03-q5', type: 'short', prompt: 'Simplify 4/8 to its simplest form.', answer: '1/2', difficulty: 2 },
        { id: 'Y6-MAT-NN03-q6', type: 'short', prompt: 'Order smallest to largest: 3/4, 1/4, 1/2', answer: '1/4, 1/2, 3/4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN04',
    title: 'Adding & subtracting decimals',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Decimals have place value too — tenths and hundredths sit just after the decimal point, like the cents in a price ($4.75).',
        'Line up the decimal points before you add or subtract, then estimate first (round to the nearest dollar) to check your answer makes sense.',
      ],
      illustrations: [
        { brief: 'A price board with two items to add together', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'price-tag', label: '$4.75' }, { icon: 'price-tag', label: '$2.30' }, { icon: 'coin', label: '$7.05' }], caption: 'Line up the decimal points, then add' } },
        {
          brief: 'A number line estimating a decimal sum between whole numbers',
          ready: true,
          diagram: { kind: 'number-line', min: 6, max: 8, marks: [{ value: 7.05, label: '$7.05' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN04-q1', type: 'short', prompt: '$4.75 + $2.30 = ?', answer: '7.05', difficulty: 2 },
        { id: 'Y6-MAT-NN04-q2', type: 'short', prompt: '$10.00 − $6.45 = ?', answer: '3.55', difficulty: 2 },
        { id: 'Y6-MAT-NN04-q3', type: 'mcq', prompt: 'Which is the best estimate for $4.75 + $2.30?', options: ['About $5', 'About $7', 'About $10'], answer: 'About $7', difficulty: 1 },
        { id: 'Y6-MAT-NN04-q4', type: 'short', prompt: '$12.50 + $3.25 = ?', answer: '15.75', difficulty: 2 },
        { id: 'Y6-MAT-NN04-q5', type: 'short', prompt: '$20.00 − $8.65 = ?', answer: '11.35', difficulty: 2 },
        { id: 'Y6-MAT-NN04-q6', type: 'mcq', prompt: 'Which is larger: $4.05 or $4.50?', options: ['$4.05', '$4.50'], answer: '$4.50', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN05',
    title: 'Adding & subtracting fractions',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'To add or subtract fractions, they need the same denominator first — just like you can only add apples to apples, not apples to oranges.',
        'Two friends sharing a pizza: if one eats 1/4 and the other eats 2/4, together they ate 3/4 — leaving 1/4 in the box.',
      ],
      illustrations: [
        {
          brief: 'Pizza sharing: 1/4 + 2/4 = 3/4',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: '1/4' }, { slices: 4, filled: 3, label: '3/4 (both together)' }] },
        },
        { brief: 'Fraction bar showing 3/4 − 1/4 = 2/4', ready: true, diagram: { kind: 'fraction-bar', bars: [{ segments: 4, filled: 2, label: '2/4 left' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN05-q1', type: 'short', prompt: '1/4 + 2/4 = ?', answer: '3/4', difficulty: 1 },
        { id: 'Y6-MAT-NN05-q2', type: 'short', prompt: '3/4 − 1/4 = ?', answer: '2/4', difficulty: 1 },
        { id: 'Y6-MAT-NN05-q3', type: 'short', prompt: '1/2 + 1/4 = ? (write with denominator 4)', answer: '3/4', difficulty: 2 },
        { id: 'Y6-MAT-NN05-q4', type: 'short', prompt: '2/5 + 1/5 = ?', answer: '3/5', difficulty: 1 },
        { id: 'Y6-MAT-NN05-q5', type: 'short', prompt: '5/6 − 2/6 = ?', answer: '3/6', difficulty: 1 },
        { id: 'Y6-MAT-NN05-q6', type: 'short', prompt: '1/3 + 1/3 = ?', answer: '2/3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN06',
    title: 'Multiplying & dividing decimals by powers of ten',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        "When you multiply by 10, 100 or 1000, the digits shift left — they don't magically grow zeros, the whole place-value house slides!",
        'Dividing by a power of ten shifts the digits right instead, so 45.6 ÷ 10 = 4.56.',
      ],
      illustrations: [
        {
          brief: 'Digit cards sliding left on a place-value mat when ×10',
          ready: true,
          diagram: { kind: 'place-value', digits: '456', labels: ['H', 'T', 'O'] },
        },
        { brief: 'A checkout receipt for 10 identical items', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: '$4.56' }, { icon: 'cart', label: '× 10' }, { icon: 'coin', label: '$45.60' }], caption: 'Multiplying by 10 shifts every digit one place left' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN06-q1', type: 'short', prompt: '4.56 × 10 = ?', answer: '45.6', difficulty: 1 },
        { id: 'Y6-MAT-NN06-q2', type: 'short', prompt: '45.6 ÷ 10 = ?', answer: '4.56', difficulty: 1 },
        { id: 'Y6-MAT-NN06-q3', type: 'short', prompt: '3.2 × 100 = ?', answer: '320', difficulty: 2 },
        { id: 'Y6-MAT-NN06-q4', type: 'short', prompt: '7.2 ÷ 100 = ?', answer: '0.072', difficulty: 3 },
        { id: 'Y6-MAT-NN06-q5', type: 'short', prompt: '0.5 × 1000 = ?', answer: '500', difficulty: 2 },
        { id: 'Y6-MAT-NN06-q6', type: 'mcq', prompt: 'Dividing by 10 shifts every digit one place to the…', options: ['Left', 'Right'], answer: 'Right', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN07',
    title: 'Percentages, discounts & fractions of a quantity',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Percent means "out of 100". 25% of a shop item means the price drops by a quarter — 25% and 1/4 are the same amount.',
        'To find a fraction or percentage of a quantity, divide by the bottom number (or by 100), then multiply by the top number (or the percentage).',
      ],
      illustrations: [
        { brief: 'A sale sign: 25% off a $80 jacket', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'price-tag', label: '$80' }, { icon: 'burst', label: '25% off' }, { icon: 'coin', label: '$20 saved' }], caption: '25% of $80 = $20 off' } },
        {
          brief: 'Number line matching %, fraction and decimal',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 25, label: '25% = 1/4' }, { value: 50, label: '50% = 1/2' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN07-q1', type: 'short', prompt: 'What is 25% of $80?', answer: '20', difficulty: 2 },
        { id: 'Y6-MAT-NN07-q2', type: 'short', prompt: 'What is 1/3 of 90?', answer: '30', difficulty: 2 },
        { id: 'Y6-MAT-NN07-q3', type: 'mcq', prompt: 'Which fraction equals 50%?', options: ['1/4', '1/2', '1/3'], answer: '1/2', difficulty: 1 },
        { id: 'Y6-MAT-NN07-q4', type: 'short', prompt: 'What is 10% of 200?', answer: '20', difficulty: 1 },
        { id: 'Y6-MAT-NN07-q5', type: 'short', prompt: 'What is 50% of 36?', answer: '18', difficulty: 1 },
        { id: 'Y6-MAT-NN07-q6', type: 'mcq', prompt: '75% is equivalent to which fraction?', options: ['1/4', '3/4', '1/2'], answer: '3/4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN08',
    title: 'Estimation & approximation',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Sometimes an exact answer is not needed — "about how many" is good enough, like guessing the total of a shopping trolley before you reach the checkout.',
        'Round each number to a friendly benchmark first (nearest 10, nearest dollar), then do the easier sum.',
      ],
      illustrations: [
        { brief: 'Rounding benchmark chart', ready: true, diagram: { kind: 'number-line', min: 0, max: 100, marks: [{ value: 47, label: '47 → 50' }, { value: 82, label: '82 → 80' }] } },
        { brief: 'Estimating a shopping trolley bill', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cart', label: 'Prices' }, { icon: 'magnifier', label: 'Round each' }, { icon: 'coin', label: '≈ Total' }], caption: 'Round each price, then add' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN08-q1', type: 'mcq', prompt: 'Best estimate for 48 + 79?', options: ['About 90', 'About 130', 'About 200'], answer: 'About 130', difficulty: 1 },
        { id: 'Y6-MAT-NN08-q2', type: 'short', prompt: 'Round 47 to the nearest 10.', answer: '50', difficulty: 1 },
        { id: 'Y6-MAT-NN08-q3', type: 'mcq', prompt: 'A trip costs $19.60 + $32.10. Best estimate?', options: ['About $50', 'About $30', 'About $70'], answer: 'About $50', difficulty: 2 },
        { id: 'Y6-MAT-NN08-q4', type: 'mcq', prompt: 'Best estimate for 293 + 412?', options: ['About 500', 'About 700', 'About 900'], answer: 'About 700', difficulty: 2 },
        { id: 'Y6-MAT-NN08-q5', type: 'short', prompt: 'Round 82 to the nearest 10.', answer: '80', difficulty: 1 },
        { id: 'Y6-MAT-NN08-q6', type: 'mcq', prompt: 'Estimating is most useful when…', options: ['An exact answer is essential, like medicine dosage', 'A quick, good-enough check is all you need', 'Never — always calculate exactly'], answer: 'A quick, good-enough check is all you need', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-NN09',
    title: 'Mathematical modelling — real problems',
    year: '6',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M6N09' }],
    learn: {
      learnTimeMin: 14,
      body: [
        'Modelling means turning a real problem — like planning a school fundraiser — into maths, solving it, then checking the answer makes sense in real life.',
        'The process has four steps: formulate (what maths do I need?), solve, interpret (what does the number mean?), and communicate (explain it clearly).',
      ],
      illustrations: [
        {
          brief: 'Mini-project: plan a school fundraiser, following the modelling process boxes',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Formulate: how much do we need to raise?' },
              { text: 'Solve: how many $2 raffle tickets is that?' },
              { text: 'Interpret: is that realistic to sell?' },
              { text: 'Communicate: share the plan' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-NN09-q1', type: 'short', prompt: 'A fundraiser needs $200. Raffle tickets are $2 each. How many must be sold?', answer: '100', difficulty: 2 },
        { id: 'Y6-MAT-NN09-q2', type: 'mcq', prompt: 'Which step comes first in modelling?', options: ['Solve', 'Formulate', 'Communicate'], answer: 'Formulate', difficulty: 1 },
        { id: 'Y6-MAT-NN09-q3', type: 'mcq', prompt: 'Modelling starts by turning a real problem into…', options: ['A drawing', 'Maths', 'A story'], answer: 'Maths', difficulty: 1 },
        { id: 'Y6-MAT-NN09-q4', type: 'short', prompt: 'If tickets are $5 each and you need $150, how many must you sell?', answer: '30', difficulty: 2 },
        { id: 'Y6-MAT-NN09-q5', type: 'mcq', prompt: 'Which step checks that your answer makes sense in real life?', options: ['Formulate', 'Interpret', 'Solve'], answer: 'Interpret', difficulty: 2 },
        { id: 'Y6-MAT-NN09-q6', type: 'mcq', prompt: 'The last step, explaining your plan to others, is called…', options: ['Communicate', 'Formulate', 'Solve'], answer: 'Communicate', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-AL01',
    title: 'Patterns & rules',
    year: '6',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M6A01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A pattern rule tells you how to get from one term to the next — like adding 1/2 each time: 1/2, 1, 1 1/2, 2 …',
        'Spotting the rule lets you predict terms far down the pattern without drawing them all out.',
      ],
      illustrations: [
        { brief: 'Table mapping term number to value', ready: true, diagram: { kind: 'bar-compare', items: [{ label: 'T1', value: 0.5 }, { label: 'T2', value: 1 }, { label: 'T3', value: 1.5 }, { label: 'T4', value: 2 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-AL01-q1', type: 'short', prompt: 'Pattern: 1/2, 1, 1 1/2, 2, __. What comes next?', answer: '2 1/2', difficulty: 2 },
        { id: 'Y6-MAT-AL01-q2', type: 'short', prompt: 'Pattern: 3, 6, 9, 12, __. What comes next?', answer: '15', difficulty: 1 },
        { id: 'Y6-MAT-AL01-q3', type: 'short', prompt: 'Pattern: 2, 4, 6, 8, __.', answer: '10', difficulty: 1 },
        { id: 'Y6-MAT-AL01-q4', type: 'short', prompt: 'Pattern: 100, 90, 80, __.', answer: '70', difficulty: 1 },
        { id: 'Y6-MAT-AL01-q5', type: 'mcq', prompt: 'A pattern rule tells you…', options: ['How to get from one term to the next', 'The colour of the pattern', 'Nothing useful'], answer: 'How to get from one term to the next', difficulty: 1 },
        { id: 'Y6-MAT-AL01-q6', type: 'short', prompt: 'Pattern (double each time): 5, 10, 20, 40, __.', answer: '80', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-AL02',
    title: 'Unknown values & order of operations',
    year: '6',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M6A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'An equation is a balance scale — whatever you do to one side, you must do to the other to keep it level.',
        'Order of operations says: brackets first, then multiplication/division, then addition/subtraction — like traffic lights telling you what goes first.',
      ],
      illustrations: [
        { brief: 'Balance scale with a mystery number', ready: true, diagram: { kind: 'balance-scale', left: '□ + 5', right: '12', balanced: true } },
        { brief: '"Brackets first" traffic-light order of operations', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'traffic-light', label: '( ) → × ÷ → + −' }], caption: 'Brackets first, then × ÷, then + −' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-AL02-q1', type: 'short', prompt: 'Solve: □ + 5 = 12', answer: '7', difficulty: 1 },
        { id: 'Y6-MAT-AL02-q2', type: 'short', prompt: '(2 + 3) × 4 = ?', answer: '20', difficulty: 2 },
        { id: 'Y6-MAT-AL02-q3', type: 'short', prompt: '2 + 3 × 4 = ?', answer: '14', difficulty: 2 },
        { id: 'Y6-MAT-AL02-q4', type: 'short', prompt: 'Solve: □ × 3 = 21', answer: '7', difficulty: 2 },
        { id: 'Y6-MAT-AL02-q5', type: 'short', prompt: '10 − (2 + 3) = ?', answer: '5', difficulty: 2 },
        { id: 'Y6-MAT-AL02-q6', type: 'short', prompt: '(6 − 2) × 2 = ?', answer: '8', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-AL03',
    title: 'Algorithms — sequences & decisions',
    year: '6',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M6A03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'An algorithm is just a clear sequence of steps and decisions for solving a problem — like a recipe, but for maths.',
        'Follow the boxes (steps) and diamonds (decisions) in order, and you always land on the same answer.',
      ],
      illustrations: [
        {
          brief: 'Flowchart with decisions and steps to sort numbers odd/even',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Start with a number' },
              { text: 'Is it divisible by 2?', decision: true },
              { text: 'Even' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-AL03-q1', type: 'mcq', prompt: 'Following the flowchart, is 14 even or odd?', options: ['Even', 'Odd'], answer: 'Even', difficulty: 1 },
        { id: 'Y6-MAT-AL03-q2', type: 'mcq', prompt: 'A shape in a flowchart with a question in it is a…', options: ['Step', 'Decision', 'Loop'], answer: 'Decision', difficulty: 1 },
        { id: 'Y6-MAT-AL03-q3', type: 'mcq', prompt: 'A sequence of steps to solve a problem is called an…', options: ['Algorithm', 'Adjective', 'Angle'], answer: 'Algorithm', difficulty: 1 },
        { id: 'Y6-MAT-AL03-q4', type: 'mcq', prompt: 'Following the flowchart, is 21 even or odd?', options: ['Even', 'Odd'], answer: 'Odd', difficulty: 1 },
        { id: 'Y6-MAT-AL03-q5', type: 'mcq', prompt: 'A rectangle shape in a flowchart usually represents a…', options: ['Step', 'Decision'], answer: 'Step', difficulty: 2 },
        { id: 'Y6-MAT-AL03-q6', type: 'mcq', prompt: 'A diamond shape in a flowchart usually represents a…', options: ['Step', 'Decision'], answer: 'Decision', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ME01',
    title: 'Converting metric units',
    year: '6',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M6M01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Metric units are built in tens — climb the ladder from km to m to cm to mm, and each step multiplies or divides by 10, 100, or 1000.',
        'Mass (kg→g) and capacity (L→mL) work the same way — always by a power of ten.',
      ],
      illustrations: [
        { brief: 'A metric ladder: km → m → cm → mm', ready: true, diagram: { kind: 'metric-ladder', units: ['km', 'm', 'cm', 'mm'], highlight: 1 } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ME01-q1', type: 'short', prompt: 'Convert 2.5 km to metres.', answer: '2500', difficulty: 2 },
        { id: 'Y6-MAT-ME01-q2', type: 'short', prompt: 'Convert 350 cm to metres.', answer: '3.5', difficulty: 2 },
        { id: 'Y6-MAT-ME01-q3', type: 'mcq', prompt: 'Which unit best measures the mass of an apple?', options: ['kg', 'g', 't'], answer: 'g', difficulty: 1 },
        { id: 'Y6-MAT-ME01-q4', type: 'short', prompt: 'Convert 4000 m to km.', answer: '4', difficulty: 2 },
        { id: 'Y6-MAT-ME01-q5', type: 'short', prompt: 'Convert 1.2 kg to grams.', answer: '1200', difficulty: 2 },
        { id: 'Y6-MAT-ME01-q6', type: 'mcq', prompt: 'Which unit best measures the capacity of a bathtub?', options: ['mL', 'L', 'kL'], answer: 'L', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ME02',
    title: 'Area of a rectangle',
    year: '6',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M6M02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Area is the amount of flat space inside a shape. For a rectangle, area = length × width.',
        'Think of tiling a floor: count the tiles across, count the tiles down, then multiply.',
      ],
      illustrations: [
        { brief: 'A tiled rectangle, length 8, width 5', ready: true, diagram: { kind: 'rectangle-area', length: 8, width: 5, unit: 'm' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ME02-q1', type: 'short', prompt: 'A room is 8m long and 5m wide. What is its area?', answer: '40', difficulty: 1 },
        { id: 'Y6-MAT-ME02-q2', type: 'short', prompt: 'A garden has area 24m² and length 6m. What is its width?', answer: '4', difficulty: 2 },
        { id: 'Y6-MAT-ME02-q3', type: 'short', prompt: 'A rectangle is 10m long and 3m wide. What is its area?', answer: '30', difficulty: 1 },
        { id: 'Y6-MAT-ME02-q4', type: 'short', prompt: 'A square has side length 6m. What is its area?', answer: '36', difficulty: 2 },
        { id: 'Y6-MAT-ME02-q5', type: 'mcq', prompt: 'Area is measured in square units because it covers…', options: ['A flat 2D space', 'Only one dimension', 'Nothing — it is random'], answer: 'A flat 2D space', difficulty: 2 },
        { id: 'Y6-MAT-ME02-q6', type: 'short', prompt: 'A rectangle has area 20m² and width 4m. What is its length?', answer: '5', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ME03',
    title: 'Timetables & itineraries',
    year: '6',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M6M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A timetable lets you plan a trip by reading departure and arrival times, then working out how long the journey takes.',
        'Elapsed time = finish time − start time. Counting on in friendly chunks (to the next hour, then the rest) is easier than subtracting directly.',
      ],
      illustrations: [
        { brief: 'A bus timetable with several departure times', ready: true, diagram: { kind: 'bar-compare', unit: 'min', items: [{ label: 'Bus A', value: 15 }, { label: 'Bus B', value: 30 }, { label: 'Bus C', value: 45 }] } },
        { brief: 'Elapsed-time number line from 9:15am to 11:00am', ready: true, diagram: { kind: 'number-line', min: 9.25, max: 11, marks: [{ value: 9.25, label: '9:15' }, { value: 11, label: '11:00' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ME03-q1', type: 'short', prompt: 'A train leaves at 9:15am and arrives at 11:00am. How long is the trip (minutes)?', answer: '105', difficulty: 2 },
        { id: 'Y6-MAT-ME03-q2', type: 'mcq', prompt: 'Which bus takes the longest, per the chart (Bus A 15min, Bus B 30min, Bus C 45min)?', options: ['Bus A', 'Bus B', 'Bus C'], answer: 'Bus C', difficulty: 1 },
        { id: 'Y6-MAT-ME03-q3', type: 'short', prompt: 'A trip starts at 10:00am and ends at 12:45pm. How many minutes did it take?', answer: '165', difficulty: 3 },
        { id: 'Y6-MAT-ME03-q4', type: 'mcq', prompt: 'Bus A leaves at 8:15 and Bus B at 8:45. Which leaves first?', options: ['Bus A', 'Bus B'], answer: 'Bus A', difficulty: 1 },
        { id: 'Y6-MAT-ME03-q5', type: 'short', prompt: 'A train trip is 2 hours long. How many minutes is that?', answer: '120', difficulty: 1 },
        { id: 'Y6-MAT-ME03-q6', type: 'mcq', prompt: 'An itinerary is most useful for…', options: ['Planning the order and timing of activities', 'Cooking dinner', 'Nothing in particular'], answer: 'Planning the order and timing of activities', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ME04',
    title: 'Angles — relationships',
    year: '6',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M6M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Angles on a straight line always add up to 180°. Angles all the way around a point add up to 360°.',
        'Vertically opposite angles (across an X-crossing, like two intersecting streets) are always equal.',
      ],
      illustrations: [
        { brief: 'Angles on a straight line summing to 180°', ready: true, diagram: { kind: 'angle-diagram', style: 'straight', angles: [130, 50] } },
        { brief: 'Intersecting streets showing vertically opposite angles', ready: true, diagram: { kind: 'angle-diagram', style: 'point', angles: [90, 90, 90, 90] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ME04-q1', type: 'short', prompt: 'Two angles on a straight line: one is 130°. What is the other?', answer: '50', difficulty: 2 },
        { id: 'Y6-MAT-ME04-q2', type: 'short', prompt: 'Angles all the way around a point add to how many degrees?', answer: '360', difficulty: 1 },
        { id: 'Y6-MAT-ME04-q3', type: 'short', prompt: 'Vertically opposite angles are always what, compared to each other?', answer: 'equal', difficulty: 2 },
        { id: 'Y6-MAT-ME04-q4', type: 'mcq', prompt: 'Two angles on a straight line are 65° and __?', options: ['115°', '65°', '180°'], answer: '115°', difficulty: 2 },
        { id: 'Y6-MAT-ME04-q5', type: 'mcq', prompt: 'A right angle measures…', options: ['90°', '180°', '45°'], answer: '90°', difficulty: 1 },
        { id: 'Y6-MAT-ME04-q6', type: 'short', prompt: 'Three angles around a point are 90°, 90° and two equal angles. What is each remaining angle?', answer: '90', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y6-MAT-SP01',
    title: 'Cross-sections & right prisms',
    year: '6',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M6SP01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        "A cross-section is the flat shape you'd see if you sliced straight through a 3D object — like slicing a chocolate block and seeing a rectangle.",
        'A right prism has the same cross-section all the way along its length.',
      ],
      illustrations: [
        { brief: 'Slicing a chocolate block to reveal its cross-section', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'cube', label: 'Block' }, { icon: 'knife', label: 'Slice' }, { icon: 'triangle-shape', label: 'Cross-section' }], caption: 'Slice straight through — what shape do you see?' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-SP01-q1', type: 'mcq', prompt: 'Slicing straight through a cylinder (like a can) gives what cross-section?', options: ['Circle', 'Square', 'Triangle'], answer: 'Circle', difficulty: 2 },
        { id: 'Y6-MAT-SP01-q2', type: 'mcq', prompt: 'A right prism has the same ___ all along its length.', options: ['Colour', 'Cross-section', 'Weight'], answer: 'Cross-section', difficulty: 1 },
        { id: 'Y6-MAT-SP01-q3', type: 'mcq', prompt: 'Slicing straight through a cube gives what cross-section?', options: ['Square or rectangle', 'Circle', 'Triangle only'], answer: 'Square or rectangle', difficulty: 2 },
        { id: 'Y6-MAT-SP01-q4', type: 'mcq', prompt: 'Slicing along the length of a triangular-prism block (like a Toblerone) gives what shape?', options: ['A triangle', 'A rectangle', 'A circle'], answer: 'A rectangle', difficulty: 3 },
        { id: 'Y6-MAT-SP01-q5', type: 'mcq', prompt: "A prism's cross-section stays the same…", options: ['Only at one end', 'All along its length', 'Never'], answer: 'All along its length', difficulty: 1 },
        { id: 'Y6-MAT-SP01-q6', type: 'mcq', prompt: 'Slicing a cone parallel to its base gives what cross-section?', options: ['A circle', 'A square', 'A triangle'], answer: 'A circle', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y6-MAT-SP02',
    title: 'Cartesian plane — four quadrants',
    year: '6',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M6SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The Cartesian plane has 4 quadrants, split by two number lines crossing at (0,0). Points can now have negative coordinates too.',
        'A point (x, y) tells you how far to move sideways (x) and up/down (y) from the centre.',
      ],
      illustrations: [
        { brief: 'Treasure hunt map with points in all 4 quadrants', ready: true, diagram: { kind: 'quadrant-grid', range: 5, points: [{ x: 3, y: 2, label: 'A' }, { x: -2, y: 3, label: 'B' }, { x: -3, y: -2, label: 'C' }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-SP02-q1', type: 'short', prompt: 'What are the coordinates of point A on the map?', answer: '3, 2', difficulty: 2 },
        { id: 'Y6-MAT-SP02-q2', type: 'mcq', prompt: 'A point with a negative x and negative y is in which quadrant?', options: ['Top-right', 'Top-left', 'Bottom-left', 'Bottom-right'], answer: 'Bottom-left', difficulty: 2 },
        { id: 'Y6-MAT-SP02-q3', type: 'short', prompt: 'What are the coordinates of point B on the map?', answer: '-2, 3', difficulty: 2 },
        { id: 'Y6-MAT-SP02-q4', type: 'short', prompt: 'What are the coordinates of point C on the map?', answer: '-3, -2', difficulty: 2 },
        { id: 'Y6-MAT-SP02-q5', type: 'mcq', prompt: 'A point with a positive x and positive y is in which quadrant?', options: ['Top-right', 'Top-left', 'Bottom-right'], answer: 'Top-right', difficulty: 1 },
        { id: 'Y6-MAT-SP02-q6', type: 'mcq', prompt: 'Moving a point 2 units right changes which coordinate?', options: ['x', 'y'], answer: 'x', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-SP03',
    title: 'Transformations & tessellations',
    year: '6',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M6SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Translation slides a shape, reflection flips it like a mirror, and rotation turns it around a point.',
        'Combine transformations and repeat a shape with no gaps or overlaps, and you get a tessellation — like tiles on a floor.',
      ],
      illustrations: [
        { brief: 'A repeating tessellation pattern from a rotated stamp', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'triangle-shape', label: 'Shape' }, { icon: 'rotate-arrow', label: 'Rotate' }, { icon: 'mirror', label: 'Reflect' }, { icon: 'triangle-shape', label: 'Tiled pattern' }], caption: 'Rotate + reflect a shape to tile with no gaps' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-SP03-q1', type: 'mcq', prompt: 'Flipping a shape like a mirror is called a…', options: ['Translation', 'Reflection', 'Rotation'], answer: 'Reflection', difficulty: 1 },
        { id: 'Y6-MAT-SP03-q2', type: 'mcq', prompt: 'Tiles fitting together with no gaps or overlaps form a…', options: ['Tessellation', 'Fraction', 'Prism'], answer: 'Tessellation', difficulty: 1 },
        { id: 'Y6-MAT-SP03-q3', type: 'mcq', prompt: 'Sliding a shape without turning or flipping it is called a…', options: ['Translation', 'Reflection', 'Rotation'], answer: 'Translation', difficulty: 1 },
        { id: 'Y6-MAT-SP03-q4', type: 'mcq', prompt: 'Turning a shape around a fixed point is called a…', options: ['Translation', 'Rotation', 'Reflection'], answer: 'Rotation', difficulty: 1 },
        { id: 'Y6-MAT-SP03-q5', type: 'mcq', prompt: 'Combining transformations to repeat a shape with no gaps creates a…', options: ['Tessellation', 'Fraction', 'Angle'], answer: 'Tessellation', difficulty: 2 },
        { id: 'Y6-MAT-SP03-q6', type: 'mcq', prompt: 'A shape and its mirror image are related by a…', options: ['Reflection', 'Translation'], answer: 'Reflection', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ST01',
    title: 'Comparing data sets',
    year: '6',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M6ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Side-by-side displays let you compare two data sets at a glance — which team scored more, whose plants grew taller.',
        'Compare their mode (most common value), range (biggest minus smallest) and overall shape.',
      ],
      illustrations: [
        { brief: 'Side-by-side column graph comparing two class heights', ready: true, diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: '6A', value: 142 }, { label: '6B', value: 138 }] } },
        { brief: 'Dot plot of a set of test scores', ready: true, diagram: { kind: 'dot-plot', values: [6, 7, 7, 8, 8, 8, 9] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ST01-q1', type: 'short', prompt: 'In the dot plot (6,7,7,8,8,8,9), what is the mode?', answer: '8', difficulty: 2 },
        { id: 'Y6-MAT-ST01-q2', type: 'short', prompt: 'In the dot plot (6,7,7,8,8,8,9), what is the range?', answer: '3', difficulty: 2 },
        { id: 'Y6-MAT-ST01-q3', type: 'mcq', prompt: 'Comparing two data sets side by side mainly helps you see…', options: ['Which is bigger, more spread out, or more common', 'Nothing useful', 'Only the colours used'], answer: 'Which is bigger, more spread out, or more common', difficulty: 1 },
        { id: 'Y6-MAT-ST01-q4', type: 'short', prompt: 'In values (6,7,7,8,8,8,9), how many data points are there?', answer: '7', difficulty: 1 },
        { id: 'Y6-MAT-ST01-q5', type: 'mcq', prompt: '6A averaged 142cm and 6B averaged 138cm. Which class was taller on average?', options: ['6A', '6B'], answer: '6A', difficulty: 1 },
        { id: 'Y6-MAT-ST01-q6', type: 'short', prompt: 'What is the smallest value in the dot plot (6,7,7,8,8,8,9)?', answer: '6', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ST02',
    title: 'Statistics in the media',
    year: '6',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M6ST02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Adverts and news stories use statistics to persuade — "9 out of 10" sounds convincing, but always ask: out of how many people, and who chose them?',
        'A graph can mislead by starting its axis somewhere other than zero, making small differences look huge.',
      ],
      illustrations: [
        { brief: 'A "9 out of 10" style advert claim to critique', ready: true, diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: '"9 out of 10"' }, { icon: 'magnifier', label: 'Out of how many?' }], caption: 'Always ask how the statistic was measured' } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ST02-q1', type: 'mcq', prompt: 'A graph axis that skips zero can make differences look…', options: ['Smaller', 'Bigger than they are', 'The same'], answer: 'Bigger than they are', difficulty: 2 },
        { id: 'Y6-MAT-ST02-q2', type: 'mcq', prompt: '"9 out of 10 people agree" — what should you ask first?', options: ['What colour was the survey?', 'How many people were actually asked?', 'What day was it?'], answer: 'How many people were actually asked?', difficulty: 1 },
        { id: 'Y6-MAT-ST02-q3', type: 'mcq', prompt: 'A survey of only 5 people claiming to represent "everyone" is a warning sign because…', options: ['The sample is too small', 'It used too many colours', 'It was printed'], answer: 'The sample is too small', difficulty: 2 },
        { id: 'Y6-MAT-ST02-q4', type: 'mcq', prompt: 'Who paid for a survey can affect…', options: ['Nothing at all', 'How trustworthy the results might be', 'The weather'], answer: 'How trustworthy the results might be', difficulty: 2 },
        { id: 'Y6-MAT-ST02-q5', type: 'mcq', prompt: "A pie chart whose slices don't add to 100% is a sign of…", options: ['A careful graph', 'A misleading or incorrect graph', 'A pie chart is never wrong'], answer: 'A misleading or incorrect graph', difficulty: 2 },
        { id: 'Y6-MAT-ST02-q6', type: 'mcq', prompt: 'Before trusting a statistic in an ad, it helps to ask…', options: ['How was this measured, and by whom?', 'What font was used?', 'Nothing — always trust ads'], answer: 'How was this measured, and by whom?', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-ST03',
    title: 'Statistical investigations',
    year: '6',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M6ST03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        "A statistical investigation follows a path: pose a question, collect data, analyse it, then communicate what you found.",
        'For example: "What is the most popular lunch order in our class?" → survey → tally → graph → conclusion.',
      ],
      illustrations: [
        {
          brief: 'Survey → tally → graph → conclusion flow',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Collect data (survey)' },
              { text: 'Analyse (tally & graph)' },
              { text: 'Communicate findings' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-ST03-q1', type: 'mcq', prompt: 'What is the first step of a statistical investigation?', options: ['Draw a graph', 'Pose a question', 'Tally the data'], answer: 'Pose a question', difficulty: 1 },
        { id: 'Y6-MAT-ST03-q2', type: 'mcq', prompt: 'After collecting data, what comes next?', options: ['Communicate findings', 'Analyse it', 'Pose a question'], answer: 'Analyse it', difficulty: 1 },
        { id: 'Y6-MAT-ST03-q3', type: 'mcq', prompt: "Which is a good statistical question for a class investigation?", options: ["What is our class's favourite lunch order?", 'Why does the sun exist?', 'Is red the best colour?'], answer: "What is our class's favourite lunch order?", difficulty: 2 },
        { id: 'Y6-MAT-ST03-q4', type: 'mcq', prompt: 'After collecting survey data, a tally helps you…', options: ['Count how many chose each option', 'Ignore the data', 'Change the question'], answer: 'Count how many chose each option', difficulty: 1 },
        { id: 'Y6-MAT-ST03-q5', type: 'mcq', prompt: 'The final step of a statistical investigation is to…', options: ['Communicate findings', 'Pose a question', 'Collect data'], answer: 'Communicate findings', difficulty: 1 },
        { id: 'Y6-MAT-ST03-q6', type: 'mcq', prompt: 'A statistical investigation always starts with…', options: ['A graph', 'A question', 'A conclusion'], answer: 'A question', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-PR01',
    title: 'Probability scales',
    year: '6',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M6P01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Probability lives on a scale from 0 (impossible) to 1 (certain) — or 0% to 100%.',
        'You can place everyday events on the scale by estimating: rolling a 6 on a die is unlikely; the sun rising tomorrow is certain.',
      ],
      illustrations: [
        {
          brief: 'A probability meter from impossible to certain',
          ready: true,
          diagram: { kind: 'probability-scale', markers: [{ value: 0.17, label: 'roll a 6' }, { value: 0.5, label: 'coin = heads' }, { value: 1, label: 'sun rises' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-PR01-q1', type: 'mcq', prompt: 'What probability value means "certain"?', options: ['0', '0.5', '1'], answer: '1', difficulty: 1 },
        { id: 'Y6-MAT-PR01-q2', type: 'mcq', prompt: 'Flipping a coin and getting heads has probability…', options: ['0', '0.5', '1'], answer: '0.5', difficulty: 1 },
        { id: 'Y6-MAT-PR01-q3', type: 'mcq', prompt: 'An event that will never happen has probability…', options: ['0', '0.5', '1'], answer: '0', difficulty: 1 },
        { id: 'Y6-MAT-PR01-q4', type: 'mcq', prompt: 'Rolling a 6 on a fair die is…', options: ['Impossible', 'Unlikely but possible', 'Certain'], answer: 'Unlikely but possible', difficulty: 2 },
        { id: 'Y6-MAT-PR01-q5', type: 'short', prompt: 'Write 50% as a decimal probability.', answer: '0.5', difficulty: 2 },
        { id: 'Y6-MAT-PR01-q6', type: 'mcq', prompt: 'The sun rising tomorrow has probability closest to…', options: ['0', '0.5', '1'], answer: '1', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y6-MAT-PR02',
    title: 'Chance experiments & simulations',
    year: '6',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M6P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Run a chance experiment (rolling a die, flipping a coin) many times and record the results — the more trials, the closer the results get to the predicted probability.',
        'Compare what actually happened (observed) with what you expected (predicted) to see how close they were.',
      ],
      illustrations: [
        { brief: 'Recording 20 coin flips, comparing heads vs tails counts', ready: true, diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Heads', value: 11 }, { label: 'Tails', value: 9 }] } },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y6-MAT-PR02-q1', type: 'mcq', prompt: 'You flip a coin 20 times and get 11 heads, 9 tails. Predicted was 10/10. Which is closest to predicted?', options: ['Heads', 'Tails', 'Both equally close'], answer: 'Tails', difficulty: 2 },
        { id: 'Y6-MAT-PR02-q2', type: 'mcq', prompt: 'The more trials you run, the closer results usually get to the…', options: ['Predicted probability', 'First result', 'Number of players'], answer: 'Predicted probability', difficulty: 1 },
        { id: 'Y6-MAT-PR02-q3', type: 'mcq', prompt: 'Running more trials of a chance experiment usually makes results…', options: ['Less reliable', 'Closer to the predicted probability', 'Completely random'], answer: 'Closer to the predicted probability', difficulty: 2 },
        { id: 'Y6-MAT-PR02-q4', type: 'short', prompt: 'You flip a coin 10 times, predicting 5 heads. You get 6. What is the difference from predicted?', answer: '1', difficulty: 2 },
        { id: 'Y6-MAT-PR02-q5', type: 'mcq', prompt: 'A simulation is useful because it can run…', options: ['Only once', 'Many trials quickly', 'No trials at all'], answer: 'Many trials quickly', difficulty: 1 },
        { id: 'Y6-MAT-PR02-q6', type: 'mcq', prompt: 'Comparing observed results to predicted results helps you…', options: ['Check how close chance experiments matched expectations', 'Change the rules of probability', 'Nothing useful'], answer: 'Check how close chance experiments matched expectations', difficulty: 2 },
      ],
    },
  },
];
