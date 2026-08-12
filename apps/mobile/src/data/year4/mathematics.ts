import type { Topic } from '../../types/curriculum';

/**
 * Year 4 Mathematics, full topic bank.
 * Source of truth for scope: docs/content/year-4/mathematics.md (AC v9.0).
 * Every topic here carries its AC9M4xxx content-description code and a
 * rendered `diagram` per illustration slot (see
 * src/components/illustrations/diagrams.tsx) instead of a placeholder.
 * Each assignment carries 6 questions (nominal pace) / 4 (compact pace),
 * per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR4_MATHEMATICS_TOPICS: Topic[] = [
  {
    id: 'Y4-MAT-NN01',
    title: 'Decimals: tenths & hundredths',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Decimals are place-value houses for tiny numbers! Digits after the decimal point are tenths and hundredths, smaller than 1 but just as important.',
        '0.7 and 0.70 show the same amount, because one tenth is ten hundredths. Reading prices like $3.45 uses hundredths too.',
      ],
      illustrations: [
        {
          brief: 'Decimals 0.25, 0.5 and 0.75 placed on a number line from 0 to 1',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 1,
            marks: [
              { value: 0.25, label: '0.25 = 25/100' },
              { value: 0.5, label: '0.5' },
              { value: 0.75, label: '0.75' },
            ],
          },
        },
        {
          brief: 'Fraction bar showing 7 of 10 parts shaded as 7/10 = 0.7',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 10, filled: 7, label: '7/10 = 0.7' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN01-q1', type: 'mcq', prompt: 'Which fraction is equal to 0.3?', options: ['3/10', '3/100', '30/10'], answer: '3/10', difficulty: 1 },
        { id: 'Y4-MAT-NN01-q2', type: 'short', prompt: 'Write 0.25 as a fraction of hundredths.', answer: '25/100', difficulty: 2 },
        { id: 'Y4-MAT-NN01-q3', type: 'mcq', prompt: 'Which decimal equals 7/10?', options: ['0.07', '0.7', '7.0'], answer: '0.7', difficulty: 1 },
        { id: 'Y4-MAT-NN01-q4', type: 'short', prompt: 'Write 0.08 as a fraction of hundredths.', answer: '8/100', difficulty: 2 },
        { id: 'Y4-MAT-NN01-q5', type: 'mcq', prompt: 'Which is bigger: 0.4 or 0.04?', options: ['0.4', '0.04', "They're equal"], answer: '0.4', difficulty: 2 },
        { id: 'Y4-MAT-NN01-q6', type: 'short', prompt: '0.6 is equal to how many hundredths?', answer: '60', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN02',
    title: 'Odd & even numbers',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Even numbers can be split into two equal groups, like 8 and 8! Odd numbers always leave one lonely one over.',
        'Look at the last digit: if it is 0, 2, 4, 6 or 8, the number is even. You can check any number, even a huge one.',
      ],
      illustrations: [
        {
          brief: '3×3 dot array showing 9 dots with one dot left over as odd',
          ready: true,
          diagram: { kind: 'dot-array', rows: 3, cols: 3, label: '9 = 4 + 4 + 1 leftover (odd)' },
        },
        {
          brief: 'Even vs odd last-digit sorting scene',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'go-circle', label: '0, 2, 4, 6, 8' }, { icon: 'stop-sign', label: '1, 3, 5, 7, 9' }], caption: 'Even numbers vs odd numbers' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN02-q1', type: 'mcq', prompt: 'Which of these is an even number?', options: ['17', '24', '33', '51'], answer: '24', difficulty: 1 },
        { id: 'Y4-MAT-NN02-q2', type: 'mcq', prompt: 'Which of these is an odd number?', options: ['12', '38', '45', '60'], answer: '45', difficulty: 1 },
        { id: 'Y4-MAT-NN02-q3', type: 'short', prompt: 'Is 19 even or odd?', answer: 'odd', difficulty: 1 },
        { id: 'Y4-MAT-NN02-q4', type: 'mcq', prompt: 'An even number plus an even number is always…', options: ['Even', 'Odd'], answer: 'Even', difficulty: 2 },
        { id: 'Y4-MAT-NN02-q5', type: 'mcq', prompt: 'What is the next even number after 46?', options: ['47', '48', '49'], answer: '48', difficulty: 1 },
        { id: 'Y4-MAT-NN02-q6', type: 'mcq', prompt: 'Which digit at the end of a number means it is odd?', options: ['2', '4', '7'], answer: '7', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN03',
    title: 'Equivalent fractions & decimals',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Equivalent fractions look different but show the same amount, 1/2, 2/4 and 0.5 are all the same slice of pizza!',
        'Decimals and fractions are secret twins: 0.25 and 1/4 mean the same thing. Spotting the twins makes maths feel like a treasure hunt.',
      ],
      illustrations: [
        {
          brief: 'Pie slices showing 2/4 and 1/2 are the same amount',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 4, filled: 2, label: '2/4' },
              { slices: 2, filled: 1, label: '1/2' },
            ],
          },
        },
        {
          brief: 'Fraction bar showing 1 of 4 parts shaded as 1/4 = 0.25',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 4, filled: 1, label: '1/4 = 0.25' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN03-q1', type: 'mcq', prompt: 'Which fraction is equivalent to 1/2?', options: ['3/8', '3/6', '2/5'], answer: '3/6', difficulty: 2 },
        { id: 'Y4-MAT-NN03-q2', type: 'mcq', prompt: 'Which decimal equals 2/5?', options: ['0.2', '0.4', '0.5'], answer: '0.4', difficulty: 2 },
        { id: 'Y4-MAT-NN03-q3', type: 'short', prompt: 'What decimal equals 1/4?', answer: '0.25', difficulty: 2 },
        { id: 'Y4-MAT-NN03-q4', type: 'short', prompt: '0.75 equals what fraction in simplest form?', answer: '3/4', difficulty: 2 },
        { id: 'Y4-MAT-NN03-q5', type: 'mcq', prompt: 'Which pair shows the same amount?', options: ['1/4 = 0.25', '1/2 = 0.25', '3/4 = 0.5'], answer: '1/4 = 0.25', difficulty: 2 },
        { id: 'Y4-MAT-NN03-q6', type: 'mcq', prompt: 'Which fraction is equivalent to 1/4?', options: ['2/8', '3/4', '2/5'], answer: '2/8', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN04',
    title: 'Counting by fractions & mixed numerals',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Count on in fractions just like you count in ones: 1/2, 1, 1 1/2, 2, 2 1/2…',
        'A mixed numeral squeezes a whole number and a fraction together, like 2 1/2. When you have 4 quarters, that is exactly 1 whole!',
      ],
      illustrations: [
        {
          brief: 'Number line counting in halves from 1/2 up to 2 1/2',
          ready: true,
          diagram: {
            kind: 'number-line',
            min: 0,
            max: 3,
            marks: [
              { value: 0.5, label: '1/2' },
              { value: 1, label: '1' },
              { value: 1.5, label: '1 1/2' },
              { value: 2, label: '2' },
              { value: 2.5, label: '2 1/2' },
            ],
          },
        },
        {
          brief: 'Fraction bar showing 4 of 4 parts shaded as 4/4 = 1',
          ready: true,
          diagram: { kind: 'fraction-bar', bars: [{ segments: 4, filled: 4, label: '4/4 = 1' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN04-q1', type: 'short', prompt: 'Count in quarters: 1/4, 1/2, 3/4, __', answer: '1', difficulty: 1 },
        { id: 'Y4-MAT-NN04-q2', type: 'short', prompt: '2 1/2 + 1/2 = ?', answer: '3', difficulty: 2 },
        { id: 'Y4-MAT-NN04-q3', type: 'mcq', prompt: 'Which mixed numeral equals 5/4?', options: ['1 1/4', '1 2/4', '2 1/4'], answer: '1 1/4', difficulty: 2 },
        { id: 'Y4-MAT-NN04-q4', type: 'short', prompt: 'Count in halves: 1/2, 1, 1 1/2, 2, __', answer: '2 1/2', difficulty: 2 },
        { id: 'Y4-MAT-NN04-q5', type: 'mcq', prompt: '3/3 is the same as which whole number?', options: ['1', '3', '1/3'], answer: '1', difficulty: 1 },
        { id: 'Y4-MAT-NN04-q6', type: 'short', prompt: 'What is 1 3/4 + 1/4?', answer: '2', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN05',
    title: 'Multiplying & dividing by 10, 100, 1000',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N05' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Multiplying by 10 slides every digit one place to the left, the whole place-value house shifts!',
        'Dividing by 10 slides digits right instead, so 3400 ÷ 100 = 34. Watch the digits travel and the answer appears.',
      ],
      illustrations: [
        {
          brief: 'Place-value house showing 456 in hundreds, tens and ones',
          ready: true,
          diagram: { kind: 'place-value', digits: '456', labels: ['H', 'T', 'O'] },
        },
        {
          brief: '34 sliding left on the place-value mat when multiplied by 10',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'coin', label: '34' }, { icon: 'arrow-right', label: '× 10' }, { icon: 'coin', label: '340' }], caption: 'Multiplying by 10 shifts every digit one place left' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN05-q1', type: 'short', prompt: '34 × 10 = ?', answer: '340', difficulty: 1 },
        { id: 'Y4-MAT-NN05-q2', type: 'short', prompt: '5600 ÷ 100 = ?', answer: '56', difficulty: 2 },
        { id: 'Y4-MAT-NN05-q3', type: 'mcq', prompt: '7 × 100 = ?', options: ['70', '700', '7000'], answer: '700', difficulty: 1 },
        { id: 'Y4-MAT-NN05-q4', type: 'short', prompt: '5.4 × 10 = ?', answer: '54', difficulty: 2 },
        { id: 'Y4-MAT-NN05-q5', type: 'short', prompt: '300 ÷ 10 = ?', answer: '30', difficulty: 1 },
        { id: 'Y4-MAT-NN05-q6', type: 'mcq', prompt: '9000 ÷ 1000 = ?', options: ['9', '90', '900'], answer: '9', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN06',
    title: 'Efficient computation strategies',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N06' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Smart mathematicians look for shortcuts before they start! Adding 9 is easy if you add 10 and take 1 away.',
        'Doubling and halving, making friendly tens and breaking numbers apart all make big sums feel small. Your brain is a calculator!',
      ],
      illustrations: [
        {
          brief: 'Flowchart for the friendly-ten trick: add 10, take 1 away',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Want to add 9?' },
              { text: 'Add 10 first' },
              { text: 'Take 1 away' },
              { text: 'Done!' },
            ],
          },
        },
        {
          brief: '5×4 dot array showing the breaking-apart strategy',
          ready: true,
          diagram: { kind: 'dot-array', rows: 5, cols: 4, label: '5 × 4 = 20' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN06-q1', type: 'mcq', prompt: '99 + 17 is easy to do as…', options: ['100 + 16', '99 + 10', '100 + 17'], answer: '100 + 16', difficulty: 2 },
        { id: 'Y4-MAT-NN06-q2', type: 'short', prompt: 'Adding 9 is easier as add 10, then take away 1. So 15 + 9 = ?', answer: '24', difficulty: 2 },
        { id: 'Y4-MAT-NN06-q3', type: 'mcq', prompt: 'To add 9 quickly, you could…', options: ['Add 10 then subtract 1', 'Add 10 then add 1', 'Subtract 10 then add 1'], answer: 'Add 10 then subtract 1', difficulty: 1 },
        { id: 'Y4-MAT-NN06-q4', type: 'short', prompt: '6 × 4 = 24, so double it: 12 × 4 = ?', answer: '48', difficulty: 2 },
        { id: 'Y4-MAT-NN06-q5', type: 'mcq', prompt: '250 + 250 + 250 + 250 is the same as…', options: ['250 × 4', '250 × 3', '250 × 5'], answer: '250 × 4', difficulty: 2 },
        { id: 'Y4-MAT-NN06-q6', type: 'short', prompt: '5 × 18 is the same as 10 × 9. What is 10 × 9?', answer: '90', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN07',
    title: 'Estimation & rounding (financial)',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N07' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When you shop, you do not always need the exact total, "about how much" is plenty. Round $4.80 up to $5 and the sums get friendly.',
        'Rounding to the nearest dollar makes estimating a trolley of groceries quick, so you can check if you have enough money to pay.',
      ],
      illustrations: [
        {
          brief: 'Number line rounding $4.80 up to $5 and $7.55 up to $8',
          ready: true,
          diagram: { kind: 'number-line', min: 4, max: 8, marks: [{ value: 4.8, label: '$4.80 → $5' }, { value: 7.55, label: '$7.55 → $8' }] },
        },
        {
          brief: 'Price tag rounded to the nearest dollar',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'price-tag', label: '$4.80' }, { icon: 'arrow-right', label: 'Round' }, { icon: 'coin', label: '$5' }], caption: 'Round each price, then add' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN07-q1', type: 'mcq', prompt: 'Round $4.80 to the nearest dollar.', options: ['$4', '$5', '$8'], answer: '$5', difficulty: 1 },
        { id: 'Y4-MAT-NN07-q2', type: 'short', prompt: 'Round $12.40 to the nearest dollar.', answer: '$12', difficulty: 1 },
        { id: 'Y4-MAT-NN07-q3', type: 'mcq', prompt: 'Best estimate for $19.80 + $11.20?', options: ['About $30', 'About $31', 'About $20'], answer: 'About $31', difficulty: 2 },
        { id: 'Y4-MAT-NN07-q4', type: 'short', prompt: 'Round $7.55 to the nearest dollar.', answer: '$8', difficulty: 2 },
        { id: 'Y4-MAT-NN07-q5', type: 'mcq', prompt: 'Items cost $6.80 and $8.40. Best estimate of the total?', options: ['About $15', 'About $16', 'About $20'], answer: 'About $15', difficulty: 2 },
        { id: 'Y4-MAT-NN07-q6', type: 'mcq', prompt: 'Rounding to the nearest dollar makes shopping totals easier to…', options: ['Add up quickly', 'Make exact', 'Ignore'], answer: 'Add up quickly', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN08',
    title: 'Modelling: additive & multiplicative (financial)',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N08' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Real-life money problems can be solved by adding or multiplying. Buying 3 pens at $2 each is 3 × $2, not $2 + $3!',
        'Look for the story in the numbers: is it "put together" (add) or "lots of groups" (multiply)? Choose the right tool and the answer steps out.',
      ],
      illustrations: [
        {
          brief: 'Bar compare of 1, 2 and 3 pens at $2 each',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: '1 pen', value: 2 }, { label: '2 pens', value: 4 }, { label: '3 pens', value: 6 }] },
        },
        {
          brief: 'Shopping scene: 3 pens times $2 equals $6',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'cart', label: '3 pens' }, { icon: 'price-tag', label: '$2 each' }, { icon: 'coin', label: '3 × $2 = $6' }], caption: 'Lots of equal groups means multiply' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN08-q1', type: 'short', prompt: '3 pens cost $2 each. What is the total cost?', answer: '$6', difficulty: 1 },
        { id: 'Y4-MAT-NN08-q2', type: 'mcq', prompt: 'A cake costs $5 and juice costs $3. What is the total?', options: ['$8', '$15', '$2'], answer: '$8', difficulty: 1 },
        { id: 'Y4-MAT-NN08-q3', type: 'short', prompt: '4 packs of 5 stickers: how many stickers altogether?', answer: '20', difficulty: 1 },
        { id: 'Y4-MAT-NN08-q4', type: 'mcq', prompt: 'You save $4 a week for 5 weeks. How much have you saved?', options: ['$9', '$20', '$45'], answer: '$20', difficulty: 1 },
        { id: 'Y4-MAT-NN08-q5', type: 'short', prompt: '5 friends each bring $6. How much money altogether?', answer: '$30', difficulty: 2 },
        { id: 'Y4-MAT-NN08-q6', type: 'mcq', prompt: 'Which story needs multiplication?', options: ['Buying 4 bags with 3 apples in each', 'Sharing 12 marbles between 4 friends', 'Finding how many more than 3 is 8'], answer: 'Buying 4 bags with 3 apples in each', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-NN09',
    title: 'Algorithms with addition & multiplication',
    year: '4',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M4N09' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Algorithms are clever step-by-step recipes for big sums. When adding, always start with the ones column and carry leftovers to the next.',
        'Breaking multiplication into tens and ones keeps it tidy, 5 × 24 is 5 × 20 plus 5 × 4. Follow the steps and you can not get lost.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: start in the ones column, add, carry if needed',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Start in the ones column' },
              { text: 'Add the ones' },
              { text: 'Carry the tens if needed' },
              { text: 'Finish the sum' },
            ],
          },
        },
        {
          brief: '3×4 dot array showing 3 × 4 = 12',
          ready: true,
          diagram: { kind: 'dot-array', rows: 3, cols: 4, label: '3 × 4 = 12' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-NN09-q1', type: 'mcq', prompt: 'In 456 + 231, which column do you add first?', options: ['Ones', 'Tens', 'Hundreds'], answer: 'Ones', difficulty: 1 },
        { id: 'Y4-MAT-NN09-q2', type: 'short', prompt: '23 × 3 = ?', answer: '69', difficulty: 2 },
        { id: 'Y4-MAT-NN09-q3', type: 'mcq', prompt: 'When the ones column adds to 15, you…', options: ['Carry 1 ten', 'Leave it', 'Carry 15'], answer: 'Carry 1 ten', difficulty: 2 },
        { id: 'Y4-MAT-NN09-q4', type: 'short', prompt: '34 × 2 = ?', answer: '68', difficulty: 1 },
        { id: 'Y4-MAT-NN09-q5', type: 'mcq', prompt: '5 × 24 = 5 × 20 + 5 × 4. What is the total?', options: ['100 + 20 = 120', '25 + 20 = 45', '5 + 24 = 29'], answer: '100 + 20 = 120', difficulty: 2 },
        { id: 'Y4-MAT-NN09-q6', type: 'short', prompt: '12 × 4 = ?', answer: '48', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-AL01',
    title: 'Unknowns in equations (add & subtract)',
    year: '4',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M4A01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A mystery number hides in an equation, find it and the scale balances!',
        'To find the mystery, undo what was done: if □ + 4 = 9, do 9 − 4. Addition and subtraction are perfect opposites.',
      ],
      illustrations: [
        {
          brief: 'Balance scale with a mystery number plus 4 on one side and 9 on the other',
          ready: true,
          diagram: { kind: 'balance-scale', left: '□ + 4', right: '9', balanced: true },
        },
        {
          brief: 'Undoing addition with subtraction to find the mystery number',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'calc', label: '□ + 4 = 9' }, { icon: 'arrow-right', label: '9 − 4' }, { icon: 'box', label: '□ = 5' }], caption: 'Undo the add to find the mystery' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-AL01-q1', type: 'short', prompt: 'Solve: □ + 4 = 9', answer: '5', difficulty: 1 },
        { id: 'Y4-MAT-AL01-q2', type: 'short', prompt: 'Solve: 12 − □ = 7', answer: '5', difficulty: 2 },
        { id: 'Y4-MAT-AL01-q3', type: 'mcq', prompt: 'Solve: □ − 3 = 8', options: ['5', '11', '24'], answer: '11', difficulty: 2 },
        { id: 'Y4-MAT-AL01-q4', type: 'short', prompt: 'Solve: 6 + □ = 13', answer: '7', difficulty: 1 },
        { id: 'Y4-MAT-AL01-q5', type: 'mcq', prompt: 'Solve: 20 − □ = 20', options: ['0', '1', '20'], answer: '0', difficulty: 1 },
        { id: 'Y4-MAT-AL01-q6', type: 'short', prompt: 'Solve: □ + 25 = 40', answer: '15', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-AL02',
    title: 'Multiplication facts to 10 × 10',
    year: '4',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M4A02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Knowing your times tables up to 10 × 10 is like having a superpower, the facts come fast and you can break apart harder ones.',
        'If you know 3 × 8 = 24, then 6 × 8 is double: 48! Build new facts from ones you already know.',
      ],
      illustrations: [
        {
          brief: '7×8 dot array showing the fact 7 × 8 = 56',
          ready: true,
          diagram: { kind: 'dot-array', rows: 7, cols: 8, label: '7 × 8 = 56' },
        },
        {
          brief: '10×10 dot array showing 10 × 10 = 100',
          ready: true,
          diagram: { kind: 'dot-array', rows: 10, cols: 10, label: '10 × 10 = 100' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-AL02-q1', type: 'short', prompt: '7 × 8 = ?', answer: '56', difficulty: 2 },
        { id: 'Y4-MAT-AL02-q2', type: 'mcq', prompt: '6 × 6 = ?', options: ['12', '30', '36'], answer: '36', difficulty: 1 },
        { id: 'Y4-MAT-AL02-q3', type: 'short', prompt: '9 × 9 = ?', answer: '81', difficulty: 1 },
        { id: 'Y4-MAT-AL02-q4', type: 'mcq', prompt: '4 × 7 = ?', options: ['28', '32', '47'], answer: '28', difficulty: 1 },
        { id: 'Y4-MAT-AL02-q5', type: 'short', prompt: '10 × 10 = ?', answer: '100', difficulty: 1 },
        { id: 'Y4-MAT-AL02-q6', type: 'mcq', prompt: '3 × 8 = 24, so double it: 6 × 8 = ?', options: ['32', '48', '24'], answer: '48', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ME01',
    title: 'Scaled measurement',
    year: '4',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M4M01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A scale is a number ladder on a tool like a ruler or thermometer, each mark is a step!',
        'Read between the marks to measure carefully: a pencil halfway between 10 cm and 20 cm is 15 cm long. Little steps make big measurements.',
      ],
      illustrations: [
        {
          brief: 'A thermometer reading 24°C on its scale',
          ready: true,
          diagram: { kind: 'thermometer', min: 0, max: 40, value: 24, unit: '°C' },
        },
        {
          brief: 'A metric ladder climbing from m down to cm',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['m', 'cm', 'mm'], highlight: 1 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ME01-q1', type: 'short', prompt: 'How many millimetres are in 1 centimetre?', answer: '10', difficulty: 1 },
        { id: 'Y4-MAT-ME01-q2', type: 'mcq', prompt: 'A pencil sits halfway between 10 cm and 20 cm on a ruler. How long is it?', options: ['15 cm', '12 cm', '25 cm'], answer: '15 cm', difficulty: 2 },
        { id: 'Y4-MAT-ME01-q3', type: 'short', prompt: 'A pencil is 7 cm long. How many millimetres is that?', answer: '70', difficulty: 2 },
        { id: 'Y4-MAT-ME01-q4', type: 'mcq', prompt: 'The thermometer shows 24°C. Which two numbers is it between on the scale?', options: ['20 and 30', '10 and 20', '30 and 40'], answer: '20 and 30', difficulty: 2 },
        { id: 'Y4-MAT-ME01-q5', type: 'mcq', prompt: 'A scale shows 2.5 kg. Which two whole kilogram marks is it between?', options: ['2 and 3', '1 and 2', '3 and 4'], answer: '2 and 3', difficulty: 2 },
        { id: 'Y4-MAT-ME01-q6', type: 'short', prompt: '100 centimetres equals how many metres?', answer: '1', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ME02',
    title: 'Perimeter & area',
    year: '4',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M4M02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Area is the flat space inside a shape; perimeter is the distance all the way around the edge.',
        'For a rectangle, area = length × width. Walk around the outside and add every side to find the perimeter.',
      ],
      illustrations: [
        {
          brief: 'A tiled rectangle 6 m long and 4 m wide',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'm' },
        },
        {
          brief: 'A tiled rectangle 5 cm long and 3 cm wide',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 5, width: 3, unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ME02-q1', type: 'short', prompt: 'A rectangle is 6 m long and 4 m wide. What is its area?', answer: '24', difficulty: 1 },
        { id: 'Y4-MAT-ME02-q2', type: 'short', prompt: 'A rectangle is 5 cm long and 3 cm wide. What is its perimeter?', answer: '16', difficulty: 2 },
        { id: 'Y4-MAT-ME02-q3', type: 'mcq', prompt: 'A square has side length 4 m. What is its area?', options: ['8', '12', '16'], answer: '16', difficulty: 1 },
        { id: 'Y4-MAT-ME02-q4', type: 'mcq', prompt: 'A rectangle is 7 m long and 2 m wide. What is its perimeter?', options: ['9', '14', '18'], answer: '18', difficulty: 2 },
        { id: 'Y4-MAT-ME02-q5', type: 'short', prompt: 'A rectangle has area 20 m² and length 5 m. What is its width?', answer: '4', difficulty: 2 },
        { id: 'Y4-MAT-ME02-q6', type: 'mcq', prompt: 'Area is measured in…', options: ['Square units', 'Metres', 'Litres'], answer: 'Square units', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ME03',
    title: 'Duration & am/pm',
    year: '4',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M4M03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'The clock splits the day into two halves: "am" for the morning and "pm" for the afternoon and evening.',
        'Count on in minutes and hours to find how long things take, a movie from 1:00pm to 2:30pm runs for 90 minutes.',
      ],
      illustrations: [
        {
          brief: 'Clock scene: 1:00pm, then 90 minutes later at 2:30pm',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'clock', label: '1:00pm' }, { icon: 'arrow-right', label: '90 min' }, { icon: 'clock', label: '2:30pm' }], caption: 'Count on from 1:00pm to 2:30pm' },
        },
        {
          brief: 'Elapsed-time number line from 1:00pm to 2:30pm',
          ready: true,
          diagram: { kind: 'number-line', min: 13, max: 14.5, marks: [{ value: 13, label: '1:00' }, { value: 14.5, label: '2:30' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ME03-q1', type: 'short', prompt: 'A movie starts at 1:00pm and ends at 2:30pm. How many minutes did it last?', answer: '90', difficulty: 2 },
        { id: 'Y4-MAT-ME03-q2', type: 'mcq', prompt: '10:00am is in the…', options: ['Morning', 'Afternoon', 'Evening'], answer: 'Morning', difficulty: 1 },
        { id: 'Y4-MAT-ME03-q3', type: 'short', prompt: 'Lunch is at 12:30pm. How many minutes after 12:00pm is that?', answer: '30', difficulty: 1 },
        { id: 'Y4-MAT-ME03-q4', type: 'mcq', prompt: 'School starts at 9:00am and finishes at 3:00pm. How many hours is that?', options: ['6', '12', '8'], answer: '6', difficulty: 2 },
        { id: 'Y4-MAT-ME03-q5', type: 'mcq', prompt: '45 minutes after 10:15am is…', options: ['10:45am', '11:00am', '10:60am'], answer: '11:00am', difficulty: 2 },
        { id: 'Y4-MAT-ME03-q6', type: 'short', prompt: 'A bus trip takes 35 minutes and leaves at 4:20pm. When does it arrive?', answer: '4:55pm', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ME04',
    title: 'Angle types',
    year: '4',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M4M04' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Angles are turns between two lines. Less than a quarter turn is acute, a quarter turn is a right angle, and more than that is obtuse.',
        'A straight angle is two right angles together, 180°! Spot angles everywhere: in clock hands, scissors and corners.',
      ],
      illustrations: [
        {
          brief: 'An acute angle, a right angle and an obtuse angle around a point',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'point', angles: [30, 90, 60] },
        },
        {
          brief: 'Angles on a straight line showing 120° and 60°',
          ready: true,
          diagram: { kind: 'angle-diagram', style: 'straight', angles: [120, 60] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ME04-q1', type: 'mcq', prompt: 'An acute angle is…', options: ['Less than 90°', 'Exactly 90°', 'More than 90°'], answer: 'Less than 90°', difficulty: 1 },
        { id: 'Y4-MAT-ME04-q2', type: 'mcq', prompt: 'A right angle measures exactly…', options: ['90°', '180°', '45°'], answer: '90°', difficulty: 1 },
        { id: 'Y4-MAT-ME04-q3', type: 'mcq', prompt: 'An obtuse angle is…', options: ['Between 90° and 180°', 'Less than 90°', 'Exactly 180°'], answer: 'Between 90° and 180°', difficulty: 1 },
        { id: 'Y4-MAT-ME04-q4', type: 'mcq', prompt: 'A straight angle measures…', options: ['180°', '90°', '360°'], answer: '180°', difficulty: 2 },
        { id: 'Y4-MAT-ME04-q5', type: 'mcq', prompt: 'Which angle is obtuse?', options: ['45°', '120°', '90°'], answer: '120°', difficulty: 2 },
        { id: 'Y4-MAT-ME04-q6', type: 'short', prompt: 'An angle of 70° is acute, right or obtuse?', answer: 'acute', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-SP01',
    title: 'Composite shapes',
    year: '4',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M4SP01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A composite shape is a big shape built from smaller ones, like two rectangles pushed together into an L!',
        'Split it into simple shapes, find each area, then add them up. Small parts, big whole.',
      ],
      illustrations: [
        {
          brief: 'Flowchart: split the composite shape, find each area, add',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Split into rectangles' },
              { text: 'Find each area' },
              { text: 'Add the areas' },
              { text: 'Total!' },
            ],
          },
        },
        {
          brief: 'A tiled rectangle 6 m by 4 m, one part of a composite shape',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-SP01-q1', type: 'mcq', prompt: 'A shape made from two rectangles pushed together is called…', options: ['Composite', 'Circular', 'Triangular'], answer: 'Composite', difficulty: 1 },
        { id: 'Y4-MAT-SP01-q2', type: 'short', prompt: 'A 4 m by 3 m rectangle plus a 4 m by 2 m rectangle: what is the total area?', answer: '20', difficulty: 2 },
        { id: 'Y4-MAT-SP01-q3', type: 'mcq', prompt: 'To find the area of a composite shape, you…', options: ['Split it into simpler shapes', 'Guess', 'Measure the perimeter'], answer: 'Split it into simpler shapes', difficulty: 1 },
        { id: 'Y4-MAT-SP01-q4', type: 'short', prompt: 'Two squares, each 2 m by 2 m, are joined. What is the total area?', answer: '8', difficulty: 2 },
        { id: 'Y4-MAT-SP01-q5', type: 'mcq', prompt: 'An L-shape is made of a 5 by 2 rectangle and a 3 by 2 rectangle. What is the total area?', options: ['10', '6', '16'], answer: '16', difficulty: 2 },
        { id: 'Y4-MAT-SP01-q6', type: 'mcq', prompt: 'The perimeter of a composite shape is found by…', options: ['Adding all the outside edges', 'Adding only two sides', 'Multiplying length by width'], answer: 'Adding all the outside edges', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-SP02',
    title: 'Grid references',
    year: '4',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M4SP02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Maps use grids of rows and columns, and grid references give every square a secret address!',
        'Move across first, then up, just like (2,3) means 2 across and 3 up. Follow the address and find the treasure.',
      ],
      illustrations: [
        {
          brief: 'Treasure hunt grid with points A and B marked',
          ready: true,
          diagram: { kind: 'quadrant-grid', range: 5, points: [{ x: 2, y: 3, label: 'A' }, { x: 4, y: 1, label: 'B' }] },
        },
        {
          brief: 'Map scene: move across first, then up',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'map', label: 'Across first' }, { icon: 'arrow-right', label: 'Then up' }, { icon: 'flag', label: 'Treasure!' }], caption: 'Follow the grid reference to the treasure' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-SP02-q1', type: 'mcq', prompt: 'A treasure is at (3,2) on the grid. How many steps across (x)?', options: ['3', '2', '5'], answer: '3', difficulty: 1 },
        { id: 'Y4-MAT-SP02-q2', type: 'short', prompt: 'A point is at (2,4). How many steps up is it?', answer: '4', difficulty: 1 },
        { id: 'Y4-MAT-SP02-q3', type: 'mcq', prompt: 'In the reference (5,3), which number is the "across" step?', options: ['5', '3'], answer: '5', difficulty: 2 },
        { id: 'Y4-MAT-SP02-q4', type: 'short', prompt: 'From (1,1), move 3 across and 2 up. What are the new coordinates?', answer: '(4,3)', difficulty: 2 },
        { id: 'Y4-MAT-SP02-q5', type: 'mcq', prompt: 'Moving 2 squares up changes which number in the reference?', options: ['The second number', 'The first number', 'Nothing'], answer: 'The second number', difficulty: 2 },
        { id: 'Y4-MAT-SP02-q6', type: 'mcq', prompt: 'Grid references are most useful for…', options: ['Finding locations on a map', 'Measuring area', 'Adding numbers'], answer: 'Finding locations on a map', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-SP03',
    title: 'Symmetry',
    year: '4',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M4SP03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A shape has symmetry when it can fold in half and both sides match perfectly, like a butterfly!',
        'The fold is the line of symmetry. A square has 4 of them, but a shape like the letter R has none. Search for lines everywhere.',
      ],
      illustrations: [
        {
          brief: 'Mirror scene: fold along the line and both sides match',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'mirror', label: 'Fold' }, { icon: 'arrow-right', label: 'Both sides match' }, { icon: 'check-box', label: 'Symmetric!' }], caption: 'Fold along the line, both sides match' },
        },
        {
          brief: 'Points mirrored across the vertical axis on a grid',
          ready: true,
          diagram: { kind: 'quadrant-grid', range: 4, points: [{ x: 2, y: 1, label: 'A' }, { x: -2, y: 1, label: 'A' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-SP03-q1', type: 'mcq', prompt: 'A butterfly has a line of symmetry…', options: ['Down the middle', 'On one wing only', 'None'], answer: 'Down the middle', difficulty: 1 },
        { id: 'Y4-MAT-SP03-q2', type: 'mcq', prompt: 'How many lines of symmetry does a square have?', options: ['1', '2', '4'], answer: '4', difficulty: 2 },
        { id: 'Y4-MAT-SP03-q3', type: 'short', prompt: 'How many lines of symmetry does a rectangle have?', answer: '2', difficulty: 2 },
        { id: 'Y4-MAT-SP03-q4', type: 'mcq', prompt: 'A shape is symmetrical if it can be…', options: ['Folded to match exactly', 'Stretched', 'Coloured'], answer: 'Folded to match exactly', difficulty: 1 },
        { id: 'Y4-MAT-SP03-q5', type: 'mcq', prompt: 'Which capital letter has a vertical line of symmetry?', options: ['A', 'R', 'F'], answer: 'A', difficulty: 2 },
        { id: 'Y4-MAT-SP03-q6', type: 'short', prompt: 'How many lines of symmetry does the letter A have?', answer: '1', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ST01',
    title: 'Many-to-one data displays',
    year: '4',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M4ST01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'When numbers are big, one picture can stand for many, like one star meaning 5 books! That is a many-to-one scale.',
        'Multiply the pictures by what each one stands for, and the real total appears. Big data, small graph.',
      ],
      illustrations: [
        {
          brief: 'Bar compare of books borrowed across three days',
          ready: true,
          diagram: { kind: 'bar-compare', unit: ' books', items: [{ label: 'Mon', value: 15 }, { label: 'Tue', value: 20 }, { label: 'Wed', value: 10 }] },
        },
        {
          brief: 'Pictogram scene: one symbol stands for many votes',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'newspaper', label: '1 symbol = 5 votes' }, { icon: 'magnifier', label: 'Read the scale' }, { icon: 'bar-chart', label: 'Multiply' }], caption: 'Multiply the symbols by the scale' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ST01-q1', type: 'mcq', prompt: 'One picture stands for 4 children and there are 3 pictures. How many children?', options: ['12', '7', '4'], answer: '12', difficulty: 2 },
        { id: 'Y4-MAT-ST01-q2', type: 'mcq', prompt: 'One square stands for 5 votes. 20 votes need how many squares?', options: ['4', '5', '15'], answer: '4', difficulty: 2 },
        { id: 'Y4-MAT-ST01-q3', type: 'short', prompt: 'One face stands for 2 students. 5 faces stand for how many students?', answer: '10', difficulty: 1 },
        { id: 'Y4-MAT-ST01-q4', type: 'mcq', prompt: '"One picture = 10 animals" is a many-to-one scale because…', options: ['One symbol stands for more than one item', 'One symbol is exactly one item', 'The pictures are big'], answer: 'One symbol stands for more than one item', difficulty: 2 },
        { id: 'Y4-MAT-ST01-q5', type: 'short', prompt: 'One star stands for 3 books. 6 stars stand for how many books?', answer: '18', difficulty: 1 },
        { id: 'Y4-MAT-ST01-q6', type: 'mcq', prompt: 'Why do we use many-to-one scales?', options: ['To show large numbers on small graphs', 'To make graphs harder', 'To hide the data'], answer: 'To show large numbers on small graphs', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ST02',
    title: 'Analysing displays & distribution',
    year: '4',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M4ST02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A dot plot or graph shows your data at a glance, and the most common value has a name: the mode!',
        'Look at the tallest bar or the biggest pile of dots to spot what happened most often. Reading graphs is like solving a picture puzzle.',
      ],
      illustrations: [
        {
          brief: 'Dot plot of scores 2, 2, 2, 3, 4 with mode 2',
          ready: true,
          diagram: { kind: 'dot-plot', values: [2, 2, 2, 3, 4] },
        },
        {
          brief: 'Bar compare of the same scores: 2 appears three times',
          ready: true,
          diagram: { kind: 'bar-compare', items: [{ label: 'Score 2', value: 3 }, { label: 'Score 3', value: 1 }, { label: 'Score 4', value: 1 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ST02-q1', type: 'mcq', prompt: 'In the scores 2, 2, 2, 3, 4, what is the most common score?', options: ['2', '3', '4'], answer: '2', difficulty: 1 },
        { id: 'Y4-MAT-ST02-q2', type: 'short', prompt: 'In the scores 1, 3, 3, 3, 5, what is the mode?', answer: '3', difficulty: 1 },
        { id: 'Y4-MAT-ST02-q3', type: 'short', prompt: 'In the scores 4, 4, 5, 6, 6, how many data points are there?', answer: '5', difficulty: 1 },
        { id: 'Y4-MAT-ST02-q4', type: 'mcq', prompt: 'The tallest bar on a graph shows…', options: ['The most common value', 'The smallest value', 'The average'], answer: 'The most common value', difficulty: 1 },
        { id: 'Y4-MAT-ST02-q5', type: 'mcq', prompt: 'In the scores 2, 3, 3, 4, 5, what is the mode?', options: ['2', '3', '5'], answer: '3', difficulty: 1 },
        { id: 'Y4-MAT-ST02-q6', type: 'mcq', prompt: 'Analysing a graph helps you…', options: ['Spot patterns and make conclusions', 'Guess randomly', 'Ignore the data'], answer: 'Spot patterns and make conclusions', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-ST03',
    title: 'Statistical investigations',
    year: '4',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M4ST03' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'A statistical investigation follows a path: pose a question, collect data, analyse it, then share what you found.',
        'Ask "What is our class\'s favourite lunch order?", tally the answers, graph them, and make your conclusion. You are a real data detective!',
      ],
      illustrations: [
        {
          brief: 'Survey → analyse → communicate flow',
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
        {
          brief: 'Data detective scene from survey to findings',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'clipboard', label: 'Survey' }, { icon: 'magnifier', label: 'Analyse' }, { icon: 'trophy', label: 'Findings' }], caption: 'From question to conclusion' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-ST03-q1', type: 'mcq', prompt: 'What is the first step of a statistical investigation?', options: ['Pose a question', 'Draw a graph', 'Answer it'], answer: 'Pose a question', difficulty: 1 },
        { id: 'Y4-MAT-ST03-q2', type: 'mcq', prompt: 'After collecting data, what comes next?', options: ['Analyse it', 'Stop', 'Guess'], answer: 'Analyse it', difficulty: 1 },
        { id: 'Y4-MAT-ST03-q3', type: 'mcq', prompt: 'Which is a good investigation question?', options: ['"What is the class\'s favourite fruit?"', '"What is 2 + 2?"', '"Is maths fun?"'], answer: '"What is the class\'s favourite fruit?"', difficulty: 1 },
        { id: 'Y4-MAT-ST03-q4', type: 'mcq', prompt: 'To collect everyone\'s lunch order, you could use a…', options: ['Survey', 'Ruler', 'Thermometer'], answer: 'Survey', difficulty: 1 },
        { id: 'Y4-MAT-ST03-q5', type: 'mcq', prompt: 'The final step of an investigation is to…', options: ['Communicate findings', 'Pose a question', 'Collect data'], answer: 'Communicate findings', difficulty: 1 },
        { id: 'Y4-MAT-ST03-q6', type: 'short', prompt: 'A class survey has 24 students and each student votes once. How many tallies should there be in total?', answer: '24', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y4-MAT-PR01',
    title: 'Likelihood ordering & independent events',
    year: '4',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M4P01' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Every chance event sits somewhere on the scale from impossible to certain. Winning the lottery is unlikely; the sun rising is certain.',
        'Independent events do not change each other\'s chances, a coin landing heads the first time does not make tails more likely next time!',
      ],
      illustrations: [
        {
          brief: 'Probability meter with events from impossible to certain',
          ready: true,
          diagram: { kind: 'probability-scale', markers: [{ value: 0, label: 'roll a 7' }, { value: 0.5, label: 'coin heads' }, { value: 1, label: 'sun rises' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-PR01-q1', type: 'mcq', prompt: 'Which event is certain?', options: ['The sun rising tomorrow', 'Flipping heads', 'Rolling a 7 on a die'], answer: 'The sun rising tomorrow', difficulty: 1 },
        { id: 'Y4-MAT-PR01-q2', type: 'mcq', prompt: 'Rolling a 7 on a standard die is…', options: ['Impossible', 'Certain', 'Likely'], answer: 'Impossible', difficulty: 1 },
        { id: 'Y4-MAT-PR01-q3', type: 'mcq', prompt: 'Which event is least likely?', options: ['Getting heads on a coin', 'Winning the lottery', 'The sun rising'], answer: 'Winning the lottery', difficulty: 1 },
        { id: 'Y4-MAT-PR01-q4', type: 'short', prompt: 'A coin lands heads, then you flip it again. Is the chance of heads the same, less or more than the first flip?', answer: 'same', difficulty: 2 },
        { id: 'Y4-MAT-PR01-q5', type: 'mcq', prompt: '"It will snow in the desert" is best described as…', options: ['Impossible', 'Certain', 'Likely'], answer: 'Impossible', difficulty: 2 },
        { id: 'Y4-MAT-PR01-q6', type: 'mcq', prompt: 'Two independent events…', options: ['Do not affect each other\'s chances', 'Always happen together', 'Never happen'], answer: 'Do not affect each other\'s chances', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y4-MAT-PR02',
    title: 'Repeated chance experiments',
    year: '4',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M4P02' }],
    learn: {
      learnTimeMin: 10,
      body: [
        'Run a chance experiment many times and record every trial, the more you run, the closer the results get to what you predicted.',
        'Flip a coin 100 times and you will usually see about 50 heads and 50 tails. Compare what happened with what you expected.',
      ],
      illustrations: [
        {
          brief: 'Bar compare of 100 coin flips: about 52 heads and 48 tails',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Heads', value: 52 }, { label: 'Tails', value: 48 }] },
        },
        {
          brief: 'Chance experiment scene: flip, record, compare',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'burst', label: '50 flips' }, { icon: 'bar-chart', label: 'Record' }, { icon: 'magnifier', label: 'Compare' }], caption: 'Run many trials, then compare with the prediction' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y4-MAT-PR02-q1', type: 'mcq', prompt: 'Flipping a coin 50 times and recording results is a…', options: ['Chance experiment', 'Measurement', 'Survey'], answer: 'Chance experiment', difficulty: 1 },
        { id: 'Y4-MAT-PR02-q2', type: 'short', prompt: 'Each single flip of a coin in an experiment is called a…', answer: 'trial', difficulty: 2 },
        { id: 'Y4-MAT-PR02-q3', type: 'mcq', prompt: 'More trials usually make results closer to…', options: ['The predicted probability', 'The first result', 'Zero'], answer: 'The predicted probability', difficulty: 2 },
        { id: 'Y4-MAT-PR02-q4', type: 'mcq', prompt: 'A coin is flipped 100 times. About how many heads would you expect?', options: ['About 50', 'About 100', 'About 10'], answer: 'About 50', difficulty: 1 },
        { id: 'Y4-MAT-PR02-q5', type: 'short', prompt: 'A 4-colour spinner is spun 40 times, with every colour equally likely. About how many times each colour?', answer: '10', difficulty: 2 },
        { id: 'Y4-MAT-PR02-q6', type: 'mcq', prompt: 'Comparing observed results with predicted results helps you…', options: ['Check how close the experiment was', 'Change the rules', 'Do nothing useful'], answer: 'Check how close the experiment was', difficulty: 1 },
      ],
    },
  },
];
