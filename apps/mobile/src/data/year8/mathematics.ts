import type { Topic } from '../../types/curriculum';

/**
 * Year 8 Mathematics — full topic bank.
 * Source of truth for scope: docs/content/year-7-10/mathematics.md (AC v9.0).
 * Every topic carries its AC9M8xxx content-description code and a rendered
 * `diagram` per illustration slot (see src/components/illustrations/diagrams.tsx)
 * instead of a placeholder. Each assignment carries 6 questions (nominal pace)
 * / 4 (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR8_MATHEMATICS_TOPICS: Topic[] = [
  // ---------- Number (5 CDs) ----------
  {
    id: 'Y8-MAT-NN01',
    title: 'Irrational numbers in applied contexts',
    year: '8',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M8N01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Some numbers cannot be written as a fraction of whole numbers — they are irrational. √2 and π are famous examples: their decimal expansions go on forever without repeating.',
        'You meet them in real contexts: the diagonal of a square is √2 times its side, and every circle measurement uses π. Recognising them means not forcing them into neat fractions.',
      ],
      illustrations: [
        {
          brief: 'A zoomed number line showing √2 ≈ 1.414',
          ready: true,
          diagram: { kind: 'number-line', min: 1.4, max: 1.5, marks: [{ value: 1.414, label: '√2 ≈ 1.414' }] },
        },
        {
          brief: 'A zoomed number line showing π ≈ 3.14',
          ready: true,
          diagram: { kind: 'number-line', min: 3, max: 3.2, marks: [{ value: 3.1415, label: 'π ≈ 3.14' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-NN01-q1', type: 'mcq', prompt: 'Which of these is irrational?', options: ['√2', '√4', '√9'], answer: '√2', difficulty: 1 },
        { id: 'Y8-MAT-NN01-q2', type: 'mcq', prompt: 'An irrational number is one that…', options: ['Cannot be written as a simple fraction', 'Is always negative', 'Is a whole number'], answer: 'Cannot be written as a simple fraction', difficulty: 1 },
        { id: 'Y8-MAT-NN01-q3', type: 'mcq', prompt: 'π is irrational because its decimals…', options: ['Never end and never repeat', 'End after 2 places', 'Repeat 14 over and over'], answer: 'Never end and never repeat', difficulty: 2 },
        { id: 'Y8-MAT-NN01-q4', type: 'mcq', prompt: 'The diagonal of a square relates to its side by a factor of…', options: ['√2', '2', '√3'], answer: '√2', difficulty: 2 },
        { id: 'Y8-MAT-NN01-q5', type: 'mcq', prompt: 'Which of these is rational?', options: ['3/4', '√2', 'π'], answer: '3/4', difficulty: 1 },
        { id: 'Y8-MAT-NN01-q6', type: 'short', prompt: 'Is √16 rational or irrational? (Answer: rational or irrational)', answer: 'rational', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-NN02',
    title: 'Exponent laws',
    year: '8',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M8N02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Exponent laws shorten calculations: to multiply powers with the same base, add the exponents (2³ × 2² = 2⁵); to divide, subtract them (2⁵ ÷ 2³ = 2²); to raise a power to a power, multiply them ((2²)³ = 2⁶).',
        'Any number to the power of zero equals 1 — 10⁰ = 1, because dividing a number by itself always gives 1.',
      ],
      illustrations: [
        {
          brief: 'The powers of 2 growing: 2, 4, 8, 16',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '2¹', value: 2 }, { label: '2²', value: 4 }, { label: '2³', value: 8 }, { label: '2⁴', value: 16 }] },
        },
        {
          brief: 'A flowchart solving 2³ × 2² using the exponent law',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: '2³ × 2²' },
              { text: 'Same base → add exponents' },
              { text: '2⁵' },
              { text: '= 32' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-NN02-q1', type: 'short', prompt: '2³ × 2² = 2⁵. What is 2⁵?', answer: '32', difficulty: 2 },
        { id: 'Y8-MAT-NN02-q2', type: 'mcq', prompt: '5² ÷ 5 = …', options: ['5', '10', '20'], answer: '5', difficulty: 2 },
        { id: 'Y8-MAT-NN02-q3', type: 'short', prompt: 'What is 10⁰?', answer: '1', difficulty: 1 },
        { id: 'Y8-MAT-NN02-q4', type: 'mcq', prompt: 'Using the exponent law, 3² × 3³ = …', options: ['3⁵', '3⁶', '9⁵'], answer: '3⁵', difficulty: 1 },
        { id: 'Y8-MAT-NN02-q5', type: 'mcq', prompt: 'To divide powers with the same base, you…', options: ['Subtract the exponents', 'Add the exponents', 'Multiply the exponents'], answer: 'Subtract the exponents', difficulty: 2 },
        { id: 'Y8-MAT-NN02-q6', type: 'short', prompt: '(2²)³ = 2⁶. What is 2⁶?', answer: '64', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-NN03',
    title: 'Terminating & recurring decimals',
    year: '8',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M8N03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A terminating decimal stops: 1/4 = 0.25. A recurring decimal repeats forever: 1/3 = 0.333… and 5/6 = 0.8333…',
        'You can tell a lot from the denominator: if a fraction in simplest form has only 2s and 5s in its denominator, its decimal terminates. Otherwise it recurs.',
      ],
      illustrations: [
        {
          brief: 'A number line comparing 1/4 = 0.25 with 1/3 = 0.333…',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 0.5, marks: [{ value: 0.25, label: '1/4 = 0.25' }, { value: 0.333, label: '1/3 = 0.333…' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-NN03-q1', type: 'mcq', prompt: 'Which of these is a terminating decimal?', options: ['0.25', '0.333…', '0.666…'], answer: '0.25', difficulty: 1 },
        { id: 'Y8-MAT-NN03-q2', type: 'mcq', prompt: '1/3 written as a decimal is…', options: ['0.333…', '0.3', '0.35'], answer: '0.333…', difficulty: 1 },
        { id: 'Y8-MAT-NN03-q3', type: 'mcq', prompt: '3/4 = 0.75 terminates because its denominator (4) has only…', options: ['2s and 5s as factors', '3s and 7s as factors', 'No factors at all'], answer: '2s and 5s as factors', difficulty: 2 },
        { id: 'Y8-MAT-NN03-q4', type: 'mcq', prompt: '2/5 as a decimal is…', options: ['0.4', '0.5', '0.6'], answer: '0.4', difficulty: 1 },
        { id: 'Y8-MAT-NN03-q5', type: 'short', prompt: 'Write 7/8 as a decimal.', answer: '0.875', difficulty: 2 },
        { id: 'Y8-MAT-NN03-q6', type: 'mcq', prompt: 'A decimal that never ends and never repeats is called…', options: ['Irrational', 'Recurring', 'Terminating'], answer: 'Irrational', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-NN04',
    title: 'Four operations with integers & rational numbers',
    year: '8',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M8N04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Integer rules: multiplying or dividing two numbers with the same sign gives a positive; different signs give a negative. −3 × 4 = −12 but −3 × −4 = 12.',
        'These rules combine with fractions and decimals for problems like −2/3 × 6 or −7.5 + 2.5. Choose efficient strategies and check your sign at the end.',
      ],
      illustrations: [
        {
          brief: 'A number line showing −3 × 2 = −6 and −3 × −2 = 6',
          ready: true,
          diagram: { kind: 'number-line', min: -8, max: 8, marks: [{ value: -6, label: '−3 × 2 = −6' }, { value: 6, label: '−3 × −2 = 6' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-NN04-q1', type: 'short', prompt: '−3 × 4 = ?', answer: '-12', difficulty: 1 },
        { id: 'Y8-MAT-NN04-q2', type: 'short', prompt: '−12 ÷ 3 = ?', answer: '-4', difficulty: 2 },
        { id: 'Y8-MAT-NN04-q3', type: 'short', prompt: '−10 ÷ −2 = ?', answer: '5', difficulty: 2 },
        { id: 'Y8-MAT-NN04-q4', type: 'mcq', prompt: '−15 + 7 = ?', options: ['−8', '8', '−22'], answer: '−8', difficulty: 1 },
        { id: 'Y8-MAT-NN04-q5', type: 'short', prompt: '−2/3 × 6 = ?', answer: '-4', difficulty: 3 },
        { id: 'Y8-MAT-NN04-q6', type: 'mcq', prompt: 'Multiplying two negatives gives…', options: ['A positive', 'A negative', 'Zero'], answer: 'A positive', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-NN05',
    title: 'Modelling with rational numbers & percentages',
    year: '8',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M8N05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Financial problems are all about modelling: GST is 10%, so a $55 price tag usually means $50 of goods plus $5 of GST. Percentages can be added, discounted and compared.',
        'Model the problem first — write down what you know, choose the calculation (e.g. find 90% after a 10% discount), solve, then check the answer in the real context.',
      ],
      illustrations: [
        {
          brief: 'The percentage-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'List what is known' },
              { text: 'Choose the % calculation' },
              { text: 'Solve' },
              { text: 'Check in context' },
            ],
          },
        },
        {
          brief: 'A bar showing $50 becoming $55 with 10% GST',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Price', value: 50 }, { label: '+10% GST', value: 55 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-NN05-q1', type: 'short', prompt: 'A $60 jacket has 15% off. What is the new price in dollars?', answer: '51', difficulty: 2 },
        { id: 'Y8-MAT-NN05-q2', type: 'mcq', prompt: 'A price of $55 includes 10% GST. The price before GST is…', options: ['$50', '$49.50', '$60.50'], answer: '$50', difficulty: 3 },
        { id: 'Y8-MAT-NN05-q3', type: 'short', prompt: 'What is 30% of 90?', answer: '27', difficulty: 1 },
        { id: 'Y8-MAT-NN05-q4', type: 'mcq', prompt: 'After a 10% discount, you pay…', options: ['90% of the price', '10% of the price', '110% of the price'], answer: '90% of the price', difficulty: 2 },
        { id: 'Y8-MAT-NN05-q5', type: 'mcq', prompt: 'A store marks an item up by 20%, then discounts it by 20%. Compared with the original price…', options: ['It is not the same — it is lower', 'It is exactly the same', 'It is higher'], answer: 'It is not the same — it is lower', difficulty: 3 },
        { id: 'Y8-MAT-NN05-q6', type: 'short', prompt: 'What is 5% of 240?', answer: '12', difficulty: 1 },
      ],
    },
  },
  // ---------- Algebra (4 CDs) ----------
  {
    id: 'Y8-MAT-AL01',
    title: 'Linear expressions — expand, factorise, rearrange',
    year: '8',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M8A01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Expanding means removing brackets by multiplying each term inside: 3(x + 2) = 3x + 6. Factorising is the reverse — pulling out the common factor: 6x + 4 = 2(3x + 2).',
        'These are powered by the algebraic properties: the distributive law, the commutative and associative laws, the identity elements (adding 0, multiplying by 1) and inverses.',
      ],
      illustrations: [
        {
          brief: 'A balance scale weighing 3(x + 2) against 3x + 6',
          ready: true,
          diagram: { kind: 'balance-scale', left: '3(x + 2)', right: '3x + 6', balanced: true },
        },
        {
          brief: 'A 4 by 3 area model for expanding',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 4, width: 3, unit: '' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-AL01-q1', type: 'mcq', prompt: 'Expanding 3(x + 2) gives…', options: ['3x + 6', '3x + 2', 'x + 6'], answer: '3x + 6', difficulty: 1 },
        { id: 'Y8-MAT-AL01-q2', type: 'mcq', prompt: 'Factorising 6x + 4 gives…', options: ['2(3x + 2)', '3(2x + 4)', '2(3x + 4)'], answer: '2(3x + 2)', difficulty: 2 },
        { id: 'Y8-MAT-AL01-q3', type: 'mcq', prompt: 'Simplifying 3x + 2x gives…', options: ['5x', '6x', '4x'], answer: '5x', difficulty: 1 },
        { id: 'Y8-MAT-AL01-q4', type: 'mcq', prompt: 'Expanding 2(3x − 1) gives…', options: ['6x − 2', '6x − 1', '5x − 2'], answer: '6x − 2', difficulty: 1 },
        { id: 'Y8-MAT-AL01-q5', type: 'mcq', prompt: 'Expanding 5(x + y) gives…', options: ['5x + 5y', '5x + y', 'x + 5y'], answer: '5x + 5y', difficulty: 1 },
        { id: 'Y8-MAT-AL01-q6', type: 'mcq', prompt: 'The distributive law says a(b + c) = …', options: ['ab + ac', 'a + b + c', 'ab + c'], answer: 'ab + ac', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-AL02',
    title: 'Linear relations, equations & inequalities',
    year: '8',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M8A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A linear relation like y = 2x + 1 graphs as a straight line. Every point (x, y) on the line is a solution of the equation.',
        'Solving 3x + 2 = 11 means finding the x that makes it true — undo in reverse order. Inequalities like x − 4 > 2 have a whole range of solutions (x > 6), shown on a number line.',
      ],
      illustrations: [
        {
          brief: 'Points of y = 2x + 1 from (0,1) to (3,7)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 8,
            points: [
              { x: 0, y: 1, label: '(0,1)' },
              { x: 1, y: 3, label: '(1,3)' },
              { x: 2, y: 5, label: '(2,5)' },
              { x: 3, y: 7, label: '(3,7)' },
            ],
          },
        },
        {
          brief: 'A number line showing x > 6',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 10, marks: [{ value: 6, label: 'x > 6' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-AL02-q1', type: 'short', prompt: 'Solve 3x + 2 = 11.', answer: '3', difficulty: 2 },
        { id: 'Y8-MAT-AL02-q2', type: 'short', prompt: 'For y = 2x + 1, what is y when x = 3?', answer: '7', difficulty: 1 },
        { id: 'Y8-MAT-AL02-q3', type: 'mcq', prompt: 'The solutions of x − 4 > 2 are…', options: ['x > 6', 'x > 2', 'x = 6'], answer: 'x > 6', difficulty: 2 },
        { id: 'Y8-MAT-AL02-q4', type: 'mcq', prompt: 'A linear relation graphs as…', options: ['A straight line', 'A circle', 'A curve that doubles back'], answer: 'A straight line', difficulty: 1 },
        { id: 'Y8-MAT-AL02-q5', type: 'short', prompt: 'Verify: does x = 4 solve 2x + 1 = 11? Answer yes or no.', answer: 'no', difficulty: 2 },
        { id: 'Y8-MAT-AL02-q6', type: 'mcq', prompt: 'An inequality like x < 3 includes…', options: ['All numbers below 3', 'Only the number 3', 'No numbers at all'], answer: 'All numbers below 3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-AL03',
    title: 'Modelling with linear relations',
    year: '8',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M8A03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Linear models describe steady change: a phone plan costs a $10 connection fee plus $5 a month — that is y = 5x + 10. Once it is a formula, you can predict future costs.',
        'Model then review: solve the problem, then check whether the straight-line model really fits the situation (is change steady, or does it speed up?).',
      ],
      illustrations: [
        {
          brief: 'Points of the phone-plan model y = 5x + 10',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 45,
            points: [
              { x: 0, y: 10, label: '(0,10)' },
              { x: 2, y: 20, label: '(2,20)' },
              { x: 4, y: 30, label: '(4,30)' },
              { x: 6, y: 40, label: '(6,40)' },
            ],
          },
        },
        {
          brief: 'The linear-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Find the steady change (slope)' },
              { text: 'Find the starting value' },
              { text: 'Write the linear model' },
              { text: 'Solve & review' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-AL03-q1', type: 'short', prompt: 'A plan costs $10 connection fee plus $5 per month. What does 4 months cost in dollars?', answer: '30', difficulty: 2 },
        { id: 'Y8-MAT-AL03-q2', type: 'mcq', prompt: 'The $10 connection fee in y = 5x + 10 is the…', options: ['Starting value', 'Monthly change', 'Nothing at all'], answer: 'Starting value', difficulty: 2 },
        { id: 'Y8-MAT-AL03-q3', type: 'mcq', prompt: 'A linear model is best used when change is…', options: ['Steady and constant', 'Growing faster each step', 'Random'], answer: 'Steady and constant', difficulty: 2 },
        { id: 'Y8-MAT-AL03-q4', type: 'short', prompt: 'In y = 5x + 10, what is the cost after 2 months in dollars?', answer: '20', difficulty: 1 },
        { id: 'Y8-MAT-AL03-q5', type: 'mcq', prompt: 'Reviewing a model means…', options: ['Checking it fits the real situation', 'Deleting all numbers', 'Making it non-linear'], answer: 'Checking it fits the real situation', difficulty: 2 },
        { id: 'Y8-MAT-AL03-q6', type: 'mcq', prompt: 'If costs keep doubling each month, a linear model would be…', options: ['A poor fit', 'A perfect fit', 'Irrelevant'], answer: 'A poor fit', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-AL04',
    title: 'Experimenting with linear functions',
    year: '8',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M8A04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Using graphing tools, you can experiment: change the number multiplying x (the slope) and the line gets steeper; change the number added (the intercept) and the whole line shifts up or down.',
        'Making and testing conjectures — "if I double the slope, the line gets twice as steep" — and generalising patterns is how real mathematicians work with digital tools.',
      ],
      illustrations: [
        {
          brief: 'Points of a steeper line y = 2x',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 6,
            points: [
              { x: 0, y: 0, label: 'A' },
              { x: 1, y: 2, label: 'B' },
              { x: 2, y: 4, label: 'C' },
            ],
          },
        },
        {
          brief: 'Slopes 1, 2 and 3 compared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Slope 1', value: 1 }, { label: 'Slope 2', value: 2 }, { label: 'Slope 3', value: 3 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-AL04-q1', type: 'mcq', prompt: 'Increasing the slope of a line makes it…', options: ['Steeper', 'Flatter', 'Move left'], answer: 'Steeper', difficulty: 1 },
        { id: 'Y8-MAT-AL04-q2', type: 'mcq', prompt: 'In y = 3x + 2, changing the "+ 2" to "+ 8" shifts the line…', options: ['Up', 'Down', 'To be steeper'], answer: 'Up', difficulty: 2 },
        { id: 'Y8-MAT-AL04-q3', type: 'mcq', prompt: 'A conjecture is…', options: ['A testable guess about a pattern', 'A finished answer', 'A type of graph'], answer: 'A testable guess about a pattern', difficulty: 2 },
        { id: 'Y8-MAT-AL04-q4', type: 'mcq', prompt: 'Doubling the slope of y = x gives y = 2x, which makes the line…', options: ['Twice as steep', 'Half as steep', 'The same'], answer: 'Twice as steep', difficulty: 2 },
        { id: 'Y8-MAT-AL04-q5', type: 'mcq', prompt: 'The number added in y = 2x + 5 (the 5) is called the…', options: ['Intercept', 'Slope', 'Root'], answer: 'Intercept', difficulty: 2 },
        { id: 'Y8-MAT-AL04-q6', type: 'mcq', prompt: 'Experimenting with functions using digital tools is mainly about…', options: ['Discovering patterns and generalising', 'Memorising every graph', 'Avoiding maths'], answer: 'Discovering patterns and generalising', difficulty: 2 },
      ],
    },
  },
  // ---------- Measurement (7 CDs) ----------
  {
    id: 'Y8-MAT-ME01',
    title: 'Area & perimeter of composite shapes',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A composite shape is made of simpler shapes joined together. To find its area, split it into rectangles and triangles, find each area, then add. Perimeter is the distance all the way around — count only the outside edges.',
        'Look for the "cut": a house-shaped figure is a rectangle with a triangle on top. Splitting along a sensible line makes the maths easy.',
      ],
      illustrations: [
        {
          brief: 'One rectangle of a composite shape, 8 m by 5 m',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 8, width: 5, unit: 'm' },
        },
        {
          brief: 'Areas of two rectangles adding to a total',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'm²', items: [{ label: 'Rect A', value: 40 }, { label: 'Rect B', value: 12 }, { label: 'Total', value: 52 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME01-q1', type: 'short', prompt: 'A shape is a 6 × 4 rectangle plus a 3 × 2 rectangle. What is the total area?', answer: '30', difficulty: 2 },
        { id: 'Y8-MAT-ME01-q2', type: 'mcq', prompt: 'The first step for a composite shape’s area is to…', options: ['Split it into simpler shapes', 'Estimate its weight', 'Count its corners only'], answer: 'Split it into simpler shapes', difficulty: 1 },
        { id: 'Y8-MAT-ME01-q3', type: 'short', prompt: 'A rectangle is 10 m by 4 m. What is its perimeter in metres?', answer: '28', difficulty: 1 },
        { id: 'Y8-MAT-ME01-q4', type: 'mcq', prompt: 'Perimeter measures…', options: ['The distance around the outside', 'The space inside', 'The volume'], answer: 'The distance around the outside', difficulty: 1 },
        { id: 'Y8-MAT-ME01-q5', type: 'short', prompt: 'A square of side 5 m has what perimeter in metres?', answer: '20', difficulty: 1 },
        { id: 'Y8-MAT-ME01-q6', type: 'mcq', prompt: 'When finding a composite shape’s perimeter, you should…', options: ['Only count the outside edges, not internal joins', 'Count every internal line', 'Count the area first'], answer: 'Only count the outside edges, not internal joins', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME02',
    title: 'Volume & capacity of right prisms',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Volume measures the space inside a 3D object, capacity measures how much a container can hold. Both use the formula area of base × height for right prisms.',
        'Capacity is often swapped into litres: 1 L = 1000 cm³. So a fish tank 40 cm × 25 cm × 20 cm holds 20 000 cm³ = 20 litres of water.',
      ],
      illustrations: [
        {
          brief: 'A 6 cm by 4 cm base of a prism',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'cm' },
        },
        {
          brief: 'A metric ladder showing cm³ and litres',
          ready: true,
          diagram: { kind: 'metric-ladder', units: ['mL', 'cm³', 'L'], highlight: 1 },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME02-q1', type: 'short', prompt: 'A prism has base area 15 cm² and height 4 cm. What is its volume in cm³?', answer: '60', difficulty: 2 },
        { id: 'Y8-MAT-ME02-q2', type: 'short', prompt: 'How many cm³ are in 1 litre?', answer: '1000', difficulty: 1 },
        { id: 'Y8-MAT-ME02-q3', type: 'short', prompt: 'A tank is 40 cm × 25 cm × 20 cm. What is its volume in cm³?', answer: '20000', difficulty: 2 },
        { id: 'Y8-MAT-ME02-q4', type: 'mcq', prompt: 'Volume measures…', options: ['Space inside a 3D object', 'How heavy an object is', 'Length only'], answer: 'Space inside a 3D object', difficulty: 1 },
        { id: 'Y8-MAT-ME02-q5', type: 'mcq', prompt: '2000 cm³ in litres is…', options: ['2 L', '20 L', '200 L'], answer: '2 L', difficulty: 2 },
        { id: 'Y8-MAT-ME02-q6', type: 'mcq', prompt: 'Capacity is best described as…', options: ['How much a container can hold', 'The height of a container', 'The colour of a container'], answer: 'How much a container can hold', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME03',
    title: 'Area of circles & sectors',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The area of a circle is A = πr² — the square of the radius times π. A radius of 2 cm gives an area of about 12.6 cm².',
        'A sector is a "pizza slice" of a circle. Its area is the circle’s area multiplied by the fraction of the circle it covers: 90° is a quarter of 360°, so its sector has a quarter of the circle’s area.',
      ],
      illustrations: [
        {
          brief: 'A number line showing π ≈ 3.14 used in A = πr²',
          ready: true,
          diagram: { kind: 'number-line', min: 3, max: 4, marks: [{ value: 3.14, label: 'π' }] },
        },
        {
          brief: 'Pie fractions showing a 90° quarter sector',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: '90° = quarter' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME03-q1', type: 'short', prompt: 'Using A = πr² with π = 3.14, what is the area of a circle with radius 2 cm?', answer: '12.56', difficulty: 2 },
        { id: 'Y8-MAT-ME03-q2', type: 'short', prompt: 'Using A = πr² with π = 3.14, what is the area of a circle with radius 5 m?', answer: '78.5', difficulty: 2 },
        { id: 'Y8-MAT-ME03-q3', type: 'mcq', prompt: 'A sector of 90° covers what fraction of a circle?', options: ['1/4', '1/2', '1/3'], answer: '1/4', difficulty: 1 },
        { id: 'Y8-MAT-ME03-q4', type: 'mcq', prompt: 'Doubling the radius of a circle makes its area…', options: ['4 times as big', '2 times as big', 'The same'], answer: '4 times as big', difficulty: 2 },
        { id: 'Y8-MAT-ME03-q5', type: 'mcq', prompt: 'In A = πr², the "²" means the radius is…', options: ['Multiplied by itself', 'Added to itself', 'Doubled'], answer: 'Multiplied by itself', difficulty: 1 },
        { id: 'Y8-MAT-ME03-q6', type: 'mcq', prompt: 'A semicircle (half a circle) sector is…', options: ['180°', '90°', '60°'], answer: '180°', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME04',
    title: 'Perimeter of circles & sectors',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The perimeter of a circle (circumference) is C = πd or C = 2πr. The perimeter of a sector adds the curved arc length plus the two straight radii.',
        'The arc length is a fraction of the full circumference: a 90° sector (1/4 of the circle) has an arc length of 1/4 × 2πr.',
      ],
      illustrations: [
        {
          brief: 'A bar showing the circumference is about 3.14 times the diameter',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '×', items: [{ label: 'Diameter', value: 1 }, { label: 'Circumference', value: 3.14 }] },
        },
        {
          brief: 'Pie fractions marking a 90° arc as a quarter',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: 'arc = 1/4 of C' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME04-q1', type: 'short', prompt: 'Using C = πd with π = 3.14, what is the circumference of a circle with diameter 6 cm?', answer: '18.84', difficulty: 2 },
        { id: 'Y8-MAT-ME04-q2', type: 'mcq', prompt: 'The arc length of a quarter sector is…', options: ['1/4 of the circumference', 'The whole circumference', 'Half the circumference'], answer: '1/4 of the circumference', difficulty: 1 },
        { id: 'Y8-MAT-ME04-q3', type: 'short', prompt: 'A circle has radius 4 cm. Using C = 2πr with π = 3.14, what is its circumference?', answer: '25.12', difficulty: 2 },
        { id: 'Y8-MAT-ME04-q4', type: 'mcq', prompt: 'The perimeter of a sector includes…', options: ['The arc plus the two straight radii', 'Only the arc', 'Only the radii'], answer: 'The arc plus the two straight radii', difficulty: 2 },
        { id: 'Y8-MAT-ME04-q5', type: 'mcq', prompt: 'A semicircle’s arc length is…', options: ['Half the circumference', 'A quarter of the circumference', 'Twice the circumference'], answer: 'Half the circumference', difficulty: 2 },
        { id: 'Y8-MAT-ME04-q6', type: 'short', prompt: 'Using C = πd with π = 3.14 and d = 10, what is C?', answer: '31.4', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME05',
    title: 'Congruent figures & constructions',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Congruent figures are identical in size and shape — you can slide, flip or rotate one to land exactly on the other. They have matching sides and matching angles.',
        'You can construct congruent shapes with a ruler, protractor and compasses, and you can identify congruence by checking side lengths and angles rather than by eye.',
      ],
      illustrations: [
        {
          brief: 'A mirror icon representing reflection producing a congruent image',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'mirror', label: 'Flip' }, { icon: 'triangle-shape', label: 'Congruent' }], caption: 'Congruent by reflection' },
        },
        {
          brief: 'Two equal bars showing matching side lengths',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Side A', value: 5 }, { label: 'Side B', value: 5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME05-q1', type: 'mcq', prompt: 'Congruent figures are…', options: ['Identical in size and shape', 'The same colour', 'Always triangles'], answer: 'Identical in size and shape', difficulty: 1 },
        { id: 'Y8-MAT-ME05-q2', type: 'mcq', prompt: 'A reflection produces an image that is…', options: ['Congruent to the original', 'Always bigger', 'Never a mirror image'], answer: 'Congruent to the original', difficulty: 1 },
        { id: 'Y8-MAT-ME05-q3', type: 'mcq', prompt: 'Congruent shapes have…', options: ['Matching sides and matching angles', 'Matching colours only', 'No matching parts'], answer: 'Matching sides and matching angles', difficulty: 2 },
        { id: 'Y8-MAT-ME05-q4', type: 'mcq', prompt: 'Which tool is NOT used to construct congruent shapes?', options: ['A calculator with no ruler', 'Compasses', 'A protractor'], answer: 'A calculator with no ruler', difficulty: 2 },
        { id: 'Y8-MAT-ME05-q5', type: 'mcq', prompt: 'Two squares with side 4 cm are always…', options: ['Congruent', 'Similar only', 'Rotated 90° always'], answer: 'Congruent', difficulty: 1 },
        { id: 'Y8-MAT-ME05-q6', type: 'mcq', prompt: 'To check congruence you should compare…', options: ['Side lengths and angles', 'Only the outline colour', 'Where they are on the page'], answer: 'Side lengths and angles', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME06',
    title: 'Similar figures & scale factors',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M06' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Similar figures have the same shape but different sizes: their matching angles are equal and their matching sides are in the same ratio. That ratio is the scale factor.',
        'A scale factor of 2 doubles every side. Lengths scale by the factor, but areas scale by the factor squared — double the side, and area goes up 4 times.',
      ],
      illustrations: [
        {
          brief: 'Bars showing side length 2 vs 4 with scale factor 2',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'cm', items: [{ label: 'Small side', value: 2 }, { label: 'Big side', value: 4 }] },
        },
        {
          brief: 'A bar showing area scaling by the factor squared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '×', items: [{ label: 'Side factor', value: 2 }, { label: 'Area factor', value: 4 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME06-q1', type: 'mcq', prompt: 'Similar figures have…', options: ['The same shape with sides in the same ratio', 'Different shapes', 'No matching angles'], answer: 'The same shape with sides in the same ratio', difficulty: 1 },
        { id: 'Y8-MAT-ME06-q2', type: 'short', prompt: 'A scale factor of 3 turns a 2 cm side into how many cm?', answer: '6', difficulty: 1 },
        { id: 'Y8-MAT-ME06-q3', type: 'mcq', prompt: 'With a scale factor of 3, the area multiplies by…', options: ['9', '3', '6'], answer: '9', difficulty: 2 },
        { id: 'Y8-MAT-ME06-q4', type: 'mcq', prompt: 'A photo enlarged with scale factor 2 has sides…', options: ['Doubled', 'Quadrupled', 'The same'], answer: 'Doubled', difficulty: 1 },
        { id: 'Y8-MAT-ME06-q5', type: 'short', prompt: 'A 5 cm side with scale factor 4 becomes how many cm?', answer: '20', difficulty: 1 },
        { id: 'Y8-MAT-ME06-q6', type: 'mcq', prompt: 'Matching angles of similar figures are…', options: ['Equal', 'Always double', 'Never compared'], answer: 'Equal', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ME07',
    title: 'Applying similarity & modelling',
    year: '8',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M8M07' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Similarity is used in maps, models and photographs: a building photographed twice from the same angle gives similar triangles, so you can measure heights you cannot reach.',
        'Modelling with similarity means using the same scale factor for every part — measure one known length, then scale all the rest. Review your answer against the real object.',
      ],
      illustrations: [
        {
          brief: 'A model car built at scale 1 : 24',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'ruler', label: 'Scale 1:24' }, { icon: 'house', label: 'Model' }], caption: 'One scale, whole model' },
        },
        {
          brief: 'The similarity-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Find matching lengths' },
              { text: 'Work out the scale factor' },
              { text: 'Scale the unknown length' },
              { text: 'Check against real life' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ME07-q1', type: 'short', prompt: 'A model at scale 1 : 24 has a real car 4.8 m long. How long is the model in metres?', answer: '0.2', difficulty: 3 },
        { id: 'Y8-MAT-ME07-q2', type: 'short', prompt: 'A 2 m shadow and a 1 m pole give a height-to-shadow ratio of 2 : 1. A tree with a 5 m shadow is how many metres tall?', answer: '10', difficulty: 2 },
        { id: 'Y8-MAT-ME07-q3', type: 'mcq', prompt: 'Using similar triangles to measure a building relies on…', options: ['The same scale factor for matching lengths', 'Estimating by eye only', 'The building being a rectangle'], answer: 'The same scale factor for matching lengths', difficulty: 2 },
        { id: 'Y8-MAT-ME07-q4', type: 'mcq', prompt: 'A map is a scaled version of real land, so the map and the land are…', options: ['Similar', 'Congruent', 'Unrelated'], answer: 'Similar', difficulty: 1 },
        { id: 'Y8-MAT-ME07-q5', type: 'short', prompt: 'A photo is enlarged from 10 cm to 30 cm wide. What is the scale factor?', answer: '3', difficulty: 1 },
        { id: 'Y8-MAT-ME07-q6', type: 'mcq', prompt: 'The last step in modelling with similarity is to…', options: ['Check the answer against the real situation', 'Stop after measuring', 'Change the scale factor'], answer: 'Check the answer against the real situation', difficulty: 2 },
      ],
    },
  },
  // ---------- Space (4 CDs) ----------
  {
    id: 'Y8-MAT-SP01',
    title: 'Transformations of 2D shapes',
    year: '8',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M8SP01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Transformations describe how shapes move: translation slides without turning, reflection flips over a line, rotation turns around a point, and enlargement changes size by a scale factor.',
        'Two shapes are congruent if a combination of slides, flips and turns maps one exactly onto the other. Adding an enlargement makes them similar instead.',
      ],
      illustrations: [
        {
          brief: 'A point A (2,1) reflected to A′ (2,−1)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 4,
            points: [
              { x: 2, y: 1, label: 'A' },
              { x: 2, y: -1, label: 'A′' },
            ],
          },
        },
        {
          brief: 'A point P (1,1) translated to P′ (4,3)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 5,
            points: [
              { x: 1, y: 1, label: 'P' },
              { x: 4, y: 3, label: 'P′' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-SP01-q1', type: 'mcq', prompt: 'A reflection flips a shape over a…', options: ['Line (mirror line)', 'Point only', 'Circle'], answer: 'Line (mirror line)', difficulty: 1 },
        { id: 'Y8-MAT-SP01-q2', type: 'mcq', prompt: 'An enlargement changes a shape’s…', options: ['Size using a scale factor', 'Number of sides', 'Mirror image'], answer: 'Size using a scale factor', difficulty: 1 },
        { id: 'Y8-MAT-SP01-q3', type: 'mcq', prompt: 'Two congruent shapes are related by…', options: ['Translation, reflection and/or rotation', 'Enlargement only', 'Always scaling'], answer: 'Translation, reflection and/or rotation', difficulty: 2 },
        { id: 'Y8-MAT-SP01-q4', type: 'short', prompt: 'Reflect the point (2, 1) across the x-axis. Write the new coordinates as x, y.', answer: '2, -1', difficulty: 2 },
        { id: 'Y8-MAT-SP01-q5', type: 'mcq', prompt: 'A rotation turns a shape around…', options: ['A fixed point (centre)', 'Any moving point', 'Its shadow'], answer: 'A fixed point (centre)', difficulty: 1 },
        { id: 'Y8-MAT-SP01-q6', type: 'mcq', prompt: 'A shape enlarged by scale factor 3 and the original are…', options: ['Similar', 'Congruent', 'Identical'], answer: 'Similar', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-SP02',
    title: 'Transformations & tessellations',
    year: '8',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M8SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Tessellations are patterns of shapes that tile a surface with no gaps and no overlaps. Regular tessellations use congruent copies of one shape — triangles, squares and hexagons all tessellate.',
        'Transformations create tessellations: translate a pattern across the floor, rotate a motif, or reflect it to build larger repeating designs, just like floor tiles or a quilt.',
      ],
      illustrations: [
        {
          brief: 'A 3 by 2 dot array representing tiling units',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 3, label: 'Tile pattern' },
        },
        {
          brief: 'A rotate-arrow icon representing a repeating rotation motif',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'rotate-arrow', label: 'Rotate' }, { icon: 'triangle-shape', label: 'Tile' }], caption: 'Transformations build tessellations' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-SP02-q1', type: 'mcq', prompt: 'A tessellation is a pattern with…', options: ['No gaps and no overlaps', 'Lots of gaps', 'Only one tile that overlaps'], answer: 'No gaps and no overlaps', difficulty: 1 },
        { id: 'Y8-MAT-SP02-q2', type: 'mcq', prompt: 'Which regular shape tessellates?', options: ['Squares', 'Regular pentagons', 'Regular octagons'], answer: 'Squares', difficulty: 2 },
        { id: 'Y8-MAT-SP02-q3', type: 'mcq', prompt: 'Repeating a tile by sliding it is called…', options: ['Translating it', 'Reflecting it only', 'Enlarging it'], answer: 'Translating it', difficulty: 1 },
        { id: 'Y8-MAT-SP02-q4', type: 'mcq', prompt: 'A regular hexagon tessellates because at each corner the angles add to…', options: ['360°', '180°', '120°'], answer: '360°', difficulty: 3 },
        { id: 'Y8-MAT-SP02-q5', type: 'mcq', prompt: 'Which of these is a common real tessellation?', options: ['Floor tiles', 'A single flagpole', 'A tyre alone'], answer: 'Floor tiles', difficulty: 1 },
        { id: 'Y8-MAT-SP02-q6', type: 'mcq', prompt: 'To tessellate, the tiles must be…', options: ['Congruent copies arranged without gaps', 'All different sizes', 'Always enlarged'], answer: 'Congruent copies arranged without gaps', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-SP03',
    title: 'Pythagoras & right-angled triangles',
    year: '8',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M8SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Pythagoras’ theorem links the sides of a right-angled triangle: the square on the hypotenuse (the longest side) equals the sum of the squares on the other two sides — a² + b² = c².',
        'Use it to find a missing side: for sides 3 and 4, the hypotenuse is √(3² + 4²) = √25 = 5. Check your answer is sensible — the hypotenuse is always the longest side.',
      ],
      illustrations: [
        {
          brief: 'A 3-4-5 right triangle as a quadrant-grid sketch',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 4,
            points: [
              { x: 0, y: 0, label: '(0,0)' },
              { x: 3, y: 0, label: '(3,0)' },
              { x: 3, y: 4, label: '(3,4)' },
            ],
          },
        },
        {
          brief: 'Bars showing 3² + 4² = 9 + 16 = 25 = 5²',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '3²', value: 9 }, { label: '4²', value: 16 }, { label: '5²', value: 25 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-SP03-q1', type: 'short', prompt: 'In a right-angled triangle with sides 3 and 4, what is the hypotenuse?', answer: '5', difficulty: 2 },
        { id: 'Y8-MAT-SP03-q2', type: 'mcq', prompt: 'Pythagoras’ theorem says a² + b² = …', options: ['c²', 'a + b', '2c'], answer: 'c²', difficulty: 1 },
        { id: 'Y8-MAT-SP03-q3', type: 'short', prompt: 'In a right-angled triangle with legs 6 and 8, what is the hypotenuse?', answer: '10', difficulty: 2 },
        { id: 'Y8-MAT-SP03-q4', type: 'mcq', prompt: 'The hypotenuse is always…', options: ['The longest side', 'The shortest side', 'A horizontal line'], answer: 'The longest side', difficulty: 1 },
        { id: 'Y8-MAT-SP03-q5', type: 'mcq', prompt: 'Pythagoras’ theorem applies to…', options: ['Right-angled triangles only', 'Any triangle', 'Circles only'], answer: 'Right-angled triangles only', difficulty: 1 },
        { id: 'Y8-MAT-SP03-q6', type: 'short', prompt: 'A ladder is 5 m long and its base is 3 m from the wall. How high does it reach up the wall?', answer: '4', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y8-MAT-SP04',
    title: 'Creating algorithms to solve geometric problems',
    year: '8',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M8SP04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Algorithms in geometry are step-by-step recipes: measure, compute, compare, decide. To check if a triangle is right-angled, an algorithm tests whether a² + b² = c².',
        'Writing a clear algorithm means listing the steps in order, describing each decision, and checking the result. It is the same thinking used to code shapes in digital tools.',
      ],
      illustrations: [
        {
          brief: 'A flowchart checking whether a triangle is right-angled',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Find the longest side c' },
              { text: 'Compute a² + b²', decision: true },
              { text: 'Does a² + b² = c²?', decision: true },
              { text: 'Right-angled ✓' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-SP04-q1', type: 'mcq', prompt: 'The first step of a right-triangle-checking algorithm is to…', options: ['Find the longest side', 'Draw a circle', 'Guess the answer'], answer: 'Find the longest side', difficulty: 1 },
        { id: 'Y8-MAT-SP04-q2', type: 'mcq', prompt: 'If a = 5, b = 12, c = 13, then a² + b² = c²?', options: ['Yes — 25 + 144 = 169 = 13²', 'No — it is always wrong', 'Only sometimes'], answer: 'Yes — 25 + 144 = 169 = 13²', difficulty: 2 },
        { id: 'Y8-MAT-SP04-q3', type: 'mcq', prompt: 'An algorithm is best described as…', options: ['A step-by-step recipe', 'A single lucky guess', 'A picture with no steps'], answer: 'A step-by-step recipe', difficulty: 1 },
        { id: 'Y8-MAT-SP04-q4', type: 'mcq', prompt: 'Decisions in an algorithm are shown as…', options: ['Branches with yes/no answers', 'Random scribbles', 'Colour changes'], answer: 'Branches with yes/no answers', difficulty: 2 },
        { id: 'Y8-MAT-SP04-q5', type: 'mcq', prompt: 'For 6, 8, 10, does the algorithm conclude it is right-angled?', options: ['Yes — 36 + 64 = 100 = 10²', 'No', 'Cannot be checked'], answer: 'Yes — 36 + 64 = 100 = 10²', difficulty: 2 },
        { id: 'Y8-MAT-SP04-q6', type: 'mcq', prompt: 'The final step of a good algorithm is…', options: ['A clear output for every input', 'A new question', 'No output'], answer: 'A clear output for every input', difficulty: 2 },
      ],
    },
  },
  // ---------- Statistics (4 CDs) ----------
  {
    id: 'Y8-MAT-ST01',
    title: 'Data displays & categorical vs numerical',
    year: '8',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M8ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Categorical data falls into named groups (favourite sport), while numerical data is measured or counted (height, pets). Different data types need different displays: bar charts for categories, dot plots and stem-and-leaf plots for numbers.',
        'Distinguish variables by asking: can the values be added or averaged meaningfully? If yes, it is numerical. If the labels are just names, it is categorical.',
      ],
      illustrations: [
        {
          brief: 'A dot plot of numerical data',
          ready: true,
          diagram: { kind: 'dot-plot', values: [4, 4, 5, 6, 6, 7, 7, 7, 8] },
        },
        {
          brief: 'A bar chart comparing favourite sports',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Swim', value: 5 }, { label: 'Run', value: 8 }, { label: 'Cycle', value: 3 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ST01-q1', type: 'mcq', prompt: 'Which is categorical data?', options: ['Favourite colour', 'Height in cm', 'Number of pets'], answer: 'Favourite colour', difficulty: 1 },
        { id: 'Y8-MAT-ST01-q2', type: 'mcq', prompt: 'Which is numerical data?', options: ['Mass in kg', 'Favourite sport', 'Eye colour'], answer: 'Mass in kg', difficulty: 1 },
        { id: 'Y8-MAT-ST01-q3', type: 'mcq', prompt: 'A stem-and-leaf plot is best for…', options: ['Numerical data', 'Named categories', 'Pictures only'], answer: 'Numerical data', difficulty: 2 },
        { id: 'Y8-MAT-ST01-q4', type: 'mcq', prompt: 'A bar chart is most natural for…', options: ['Categorical data', 'Very long decimals', 'Random numbers'], answer: 'Categorical data', difficulty: 1 },
        { id: 'Y8-MAT-ST01-q5', type: 'mcq', prompt: 'The key test for numerical data is…', options: ['Whether values can be added meaningfully', 'Whether it is written in English', 'How many words it uses'], answer: 'Whether values can be added meaningfully', difficulty: 2 },
        { id: 'Y8-MAT-ST01-q6', type: 'mcq', prompt: 'Shoe size is…', options: ['Numerical (but discrete)', 'Categorical always', 'Neither'], answer: 'Numerical (but discrete)', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ST02',
    title: 'Analysing distributions of numerical data',
    year: '8',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M8ST02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Describing a distribution covers four things: shape (where the data clumps), centre (mean, median), spread (range) and outliers (unusual values that sit far from the rest).',
        'Comparing two data sets means comparing these same features side by side: which set is generally higher (centre), which varies more (spread), and what do the outliers tell you?',
      ],
      illustrations: [
        {
          brief: 'A dot plot with a clear outlier at 9',
          ready: true,
          diagram: { kind: 'dot-plot', values: [3, 4, 4, 5, 5, 5, 6, 6, 7, 9] },
        },
        {
          brief: 'Centres of two data sets compared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Set A mean', value: 5 }, { label: 'Set B mean', value: 7 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ST02-q1', type: 'mcq', prompt: 'The "shape" of a distribution describes…', options: ['Where values clump together', 'The colour of the chart', 'How many pages it uses'], answer: 'Where values clump together', difficulty: 1 },
        { id: 'Y8-MAT-ST02-q2', type: 'mcq', prompt: 'Spread is usually measured by the…', options: ['Range', 'Mode', 'Title'], answer: 'Range', difficulty: 1 },
        { id: 'Y8-MAT-ST02-q3', type: 'short', prompt: 'In 3, 4, 4, 5, 5, 5, 6, 6, 7, 9, what is the range?', answer: '6', difficulty: 2 },
        { id: 'Y8-MAT-ST02-q4', type: 'mcq', prompt: 'In 3, 4, 4, 5, 5, 5, 6, 6, 7, 9 the outlier is…', options: ['9', '5', '3'], answer: '9', difficulty: 2 },
        { id: 'Y8-MAT-ST02-q5', type: 'short', prompt: 'In 3, 4, 4, 5, 5, 5, 6, 6, 7, 9, what is the median?', answer: '5', difficulty: 2 },
        { id: 'Y8-MAT-ST02-q6', type: 'mcq', prompt: 'Comparing two data sets usually focuses on…', options: ['Centre, spread and outliers', 'Only the colour', 'Only the first value'], answer: 'Centre, spread and outliers', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ST03',
    title: 'Collecting representative samples',
    year: '8',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M8ST03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A sample is a smaller group used to make conclusions about a larger population. A representative sample reflects the whole population — in age, location and other key features.',
        'Random sampling avoids bias: if every student has the same chance of being picked, the sample is fair. Bigger samples are usually more trustworthy than tiny ones.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of the sampling process',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Define the population' },
              { text: 'Choose a fair sampling method' },
              { text: 'Collect the sample' },
              { text: 'Generalise with care' },
            ],
          },
        },
        {
          brief: 'A bar comparing a small biased sample with a fair sample',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Biased sample', value: 2 }, { label: 'Fair sample', value: 8 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ST03-q1', type: 'mcq', prompt: 'A representative sample…', options: ['Reflects the whole population', 'Picks only friends', 'Ignores everyone'], answer: 'Reflects the whole population', difficulty: 1 },
        { id: 'Y8-MAT-ST03-q2', type: 'mcq', prompt: 'Random sampling avoids bias because…', options: ['Everyone has the same chance of being picked', 'It picks the tallest first', 'It never works'], answer: 'Everyone has the same chance of being picked', difficulty: 1 },
        { id: 'Y8-MAT-ST03-q3', type: 'mcq', prompt: 'Asking only Year 8 sport stars about school lunches is…', options: ['Biased', 'Perfectly random', 'A census of all students'], answer: 'Biased', difficulty: 2 },
        { id: 'Y8-MAT-ST03-q4', type: 'mcq', prompt: 'In general, bigger samples are…', options: ['More trustworthy', 'Always useless', 'The same as small ones'], answer: 'More trustworthy', difficulty: 1 },
        { id: 'Y8-MAT-ST03-q5', type: 'mcq', prompt: 'The population is…', options: ['The whole group you want to learn about', 'One single person', 'Only your classmates'], answer: 'The whole group you want to learn about', difficulty: 2 },
        { id: 'Y8-MAT-ST03-q6', type: 'mcq', prompt: 'A fair way to pick a sample of 20 from 200 students is…', options: ['Using a random selection', 'Picking the first 20 to arrive', 'Choosing your friends'], answer: 'Using a random selection', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y8-MAT-ST04',
    title: 'Conducting statistical investigations',
    year: '8',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M8ST04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A full statistical investigation cycles through: pose a question, plan and collect data with a fair sample, organise and display it, analyse the shape and statistics, then report with evidence.',
        'A good report answers the original question, cites the summary statistics (mean, median, range), shows the displays, and reflects on whether the data collection was fair.',
      ],
      illustrations: [
        {
          brief: 'The full investigation cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Plan & collect data' },
              { text: 'Display & analyse' },
              { text: 'Report with evidence' },
            ],
          },
        },
        {
          brief: 'A dot plot used as investigation evidence',
          ready: true,
          diagram: { kind: 'dot-plot', values: [5, 6, 6, 7, 7, 7, 8, 8, 9] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-ST04-q1', type: 'mcq', prompt: 'The first step of a statistical investigation is…', options: ['Posing a question', 'Drawing the final graph', 'Buying a calculator'], answer: 'Posing a question', difficulty: 1 },
        { id: 'Y8-MAT-ST04-q2', type: 'mcq', prompt: 'A good report should…', options: ['Answer the question with evidence', 'Have no numbers', 'Hide the method'], answer: 'Answer the question with evidence', difficulty: 1 },
        { id: 'Y8-MAT-ST04-q3', type: 'mcq', prompt: 'Which belongs in a statistical report?', options: ['Mean, median and range', 'Only one random guess', 'A drawing of a cat'], answer: 'Mean, median and range', difficulty: 2 },
        { id: 'Y8-MAT-ST04-q4', type: 'mcq', prompt: 'The purpose of a display is to…', options: ['Reveal patterns in the data', 'Decorate the page', 'Replace the question'], answer: 'Reveal patterns in the data', difficulty: 1 },
        { id: 'Y8-MAT-ST04-q5', type: 'mcq', prompt: 'Reflecting on fairness at the end means checking…', options: ['Whether the sampling was fair and unbiased', 'Whether the graphs are pretty', 'Whether you used a pen'], answer: 'Whether the sampling was fair and unbiased', difficulty: 2 },
        { id: 'Y8-MAT-ST04-q6', type: 'mcq', prompt: 'Investigations should end by…', options: ['Reporting conclusions backed by data', 'Collecting more forever', 'Deleting all data'], answer: 'Reporting conclusions backed by data', difficulty: 1 },
      ],
    },
  },
  // ---------- Probability (3 CDs) ----------
  {
    id: 'Y8-MAT-PR01',
    title: 'Two-step chance experiments',
    year: '8',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M8P01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A two-step experiment (flip a coin, then roll a die) has outcomes that are pairs: (Heads, 3), (Tails, 5) and so on. Listing them all is the sample space, and there are 2 × 6 = 12 outcomes.',
        'If every outcome is equally likely, probability = favourable outcomes ÷ total outcomes. P(Heads, then even) = 3/12 because 3 of the 12 pairs have heads and an even number.',
      ],
      illustrations: [
        {
          brief: 'A 6 by 2 grid of coin-and-die outcomes',
          ready: true,
          diagram: { kind: 'dot-array', rows: 6, cols: 2, label: '12 outcomes' },
        },
        {
          brief: 'A pie fraction showing P = 3/12',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 12, filled: 3, label: '3/12' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-PR01-q1', type: 'short', prompt: 'Flipping a coin then rolling a die: how many outcomes are there?', answer: '12', difficulty: 1 },
        { id: 'Y8-MAT-PR01-q2', type: 'mcq', prompt: 'An outcome of the coin-and-die experiment looks like…', options: ['(Heads, 3)', '12', 'A single heads'], answer: '(Heads, 3)', difficulty: 1 },
        { id: 'Y8-MAT-PR01-q3', type: 'mcq', prompt: 'P(Heads, then 6) with a fair coin and die is…', options: ['1/12', '1/6', '1/2'], answer: '1/12', difficulty: 2 },
        { id: 'Y8-MAT-PR01-q4', type: 'mcq', prompt: 'P(Heads, then even) is…', options: ['3/12', '6/12', '1/12'], answer: '3/12', difficulty: 2 },
        { id: 'Y8-MAT-PR01-q5', type: 'short', prompt: 'A two-step experiment: spin a 4-sided spinner then toss a coin. How many outcomes?', answer: '8', difficulty: 2 },
        { id: 'Y8-MAT-PR01-q6', type: 'mcq', prompt: 'The "sample space" of an experiment is…', options: ['All possible outcomes listed', 'One lucky outcome', 'The equipment used'], answer: 'All possible outcomes listed', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-PR02',
    title: 'Complementary events',
    year: '8',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M8P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every event has a complement — everything that is NOT that event. P(not A) = 1 − P(A). If P(rain) = 0.4, then P(no rain) = 0.6.',
        'The sum of an event and its complement is always 1 (or 100%). Sometimes it is much easier to work out the complement and subtract it than to count the event directly.',
      ],
      illustrations: [
        {
          brief: 'A probability scale with complementary events at 0.4 and 0.6',
          ready: true,
          diagram: {
            kind: 'probability-scale',
            markers: [
              { value: 0.4, label: 'P(rain) = 0.4' },
              { value: 0.6, label: 'P(no rain) = 0.6' },
            ],
          },
        },
        {
          brief: 'Two complementary pie fractions adding to 1',
          ready: true,
          diagram: {
            kind: 'pie-fraction',
            pies: [
              { slices: 10, filled: 4, label: '0.4' },
              { slices: 10, filled: 6, label: '0.6' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-PR02-q1', type: 'short', prompt: 'If P(rain) = 0.4, what is P(no rain)?', answer: '0.6', difficulty: 1 },
        { id: 'Y8-MAT-PR02-q2', type: 'mcq', prompt: 'P(not A) = …', options: ['1 − P(A)', 'P(A) − 1', '1 + P(A)'], answer: '1 − P(A)', difficulty: 1 },
        { id: 'Y8-MAT-PR02-q3', type: 'short', prompt: 'An event has P = 0.85. What is P(not the event)?', answer: '0.15', difficulty: 2 },
        { id: 'Y8-MAT-PR02-q4', type: 'mcq', prompt: 'An event and its complement always add to…', options: ['1', '0', '100'], answer: '1', difficulty: 1 },
        { id: 'Y8-MAT-PR02-q5', type: 'mcq', prompt: 'The complement of "rolling an even number" is…', options: ['Rolling an odd number', 'Rolling a 2', 'Rolling over 3'], answer: 'Rolling an odd number', difficulty: 2 },
        { id: 'Y8-MAT-PR02-q6', type: 'short', prompt: 'P(win) = 0.7. What is P(not win)?', answer: '0.3', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y8-MAT-PR03',
    title: 'Simulations of chance experiments',
    year: '8',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M8P03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Simulations run a chance experiment many times using random numbers — a die roll can be simulated with the digits 1 to 6. Digital tools can run thousands of trials in seconds.',
        'Compare the predicted probability with the relative frequency from the simulation. With more trials, the relative frequency gets closer to the prediction — that is the law of large numbers.',
      ],
      illustrations: [
        {
          brief: 'Predicted 1/6 vs observed relative frequency',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Predicted', value: 1 }, { label: 'Observed (few)', value: 1.4 }, { label: 'Observed (many)', value: 1.1 }] },
        },
        {
          brief: 'A flowchart of running a simulation',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Model the experiment' },
              { text: 'Run many trials' },
              { text: 'Record relative frequency' },
              { text: 'Compare with prediction' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y8-MAT-PR03-q1', type: 'mcq', prompt: 'A simulation is mainly useful because it…', options: ['Runs many trials quickly', 'Predicts a single outcome exactly', 'Avoids all chance'], answer: 'Runs many trials quickly', difficulty: 1 },
        { id: 'Y8-MAT-PR03-q2', type: 'mcq', prompt: 'Relative frequency is…', options: ['The observed proportion of an outcome', 'The predicted answer always', 'A colour of a chart'], answer: 'The observed proportion of an outcome', difficulty: 2 },
        { id: 'Y8-MAT-PR03-q3', type: 'mcq', prompt: 'With more trials, relative frequency tends to…', options: ['Approach the predicted probability', 'Move away from it', 'Stay random forever'], answer: 'Approach the predicted probability', difficulty: 2 },
        { id: 'Y8-MAT-PR03-q4', type: 'mcq', prompt: 'The law of large numbers explains why…', options: ['More trials give more stable results', 'Fewer trials are better', 'Chance is predictable every time'], answer: 'More trials give more stable results', difficulty: 1 },
        { id: 'Y8-MAT-PR03-q5', type: 'mcq', prompt: 'A coin simulated with random digits could use…', options: ['0–1 for tails–heads', 'Only the digit 7', 'No digits at all'], answer: '0–1 for tails–heads', difficulty: 2 },
        { id: 'Y8-MAT-PR03-q6', type: 'mcq', prompt: 'After a simulation, you should…', options: ['Compare relative frequency with the prediction', 'Stop and guess', 'Forget the results'], answer: 'Compare relative frequency with the prediction', difficulty: 1 },
      ],
    },
  },
];
