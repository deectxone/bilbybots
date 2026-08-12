import type { Topic } from '../../types/curriculum';

/**
 * Year 9 Mathematics — full topic bank.
 * Source of truth for scope: docs/content/year-7-10/mathematics.md (AC v9.0).
 * Every topic carries its AC9M9xxx content-description code and a rendered
 * `diagram` per illustration slot (see src/components/illustrations/diagrams.tsx)
 * instead of a placeholder. Each assignment carries 6 questions (nominal pace)
 * / 4 (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR9_MATHEMATICS_TOPICS: Topic[] = [
  // ---------- Number (4 CDs) ----------
  {
    id: 'Y9-MAT-NN01',
    title: 'Real numbers & rational approximations',
    year: '9',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M9N01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Real numbers cover every value on the number line — rational numbers (fractions) and irrational numbers (like √2 and π). An approximation is a value close to the real number: √2 ≈ 1.414.',
        'In calculations you often round approximations to a sensible accuracy and estimate to check your answer is in the right ballpark.',
      ],
      illustrations: [
        {
          brief: 'A number line showing rational and irrational points',
          ready: true,
          diagram: { kind: 'number-line', min: 1.4, max: 3.2, marks: [{ value: 1.414, label: '√2 ≈ 1.414' }, { value: 3.14, label: 'π ≈ 3.14' }] },
        },
        {
          brief: 'A bar comparing 1.414 and 1.4 approximations of √2',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '√2', value: 1.414 }, { label: '1.4 approx', value: 1.4 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-NN01-q1', type: 'mcq', prompt: 'Which of these is a real number?', options: ['All of them', 'Only 3/4', 'Only √2'], answer: 'All of them', difficulty: 1 },
        { id: 'Y9-MAT-NN01-q2', type: 'short', prompt: 'What is √2 to 3 decimal places?', answer: '1.414', difficulty: 2 },
        { id: 'Y9-MAT-NN01-q3', type: 'mcq', prompt: 'An approximation is…', options: ['A value close to the real number', 'The exact answer always', 'A wrong guess'], answer: 'A value close to the real number', difficulty: 1 },
        { id: 'Y9-MAT-NN01-q4', type: 'mcq', prompt: 'Which set includes √2 and π?', options: ['Real numbers', 'Whole numbers', 'Natural numbers'], answer: 'Real numbers', difficulty: 1 },
        { id: 'Y9-MAT-NN01-q5', type: 'short', prompt: 'Estimate √10 using the squares 9 and 16. Is it closer to 3 or 4? (Answer 3 or 4)', answer: '3', difficulty: 2 },
        { id: 'Y9-MAT-NN01-q6', type: 'mcq', prompt: 'When estimating a calculation you usually…', options: ['Round first, then calculate', 'Calculate exactly, then guess', 'Skip the answer'], answer: 'Round first, then calculate', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-NN02',
    title: 'Exponent laws with positive integers',
    year: '9',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M9N02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The exponent laws apply to variables as well as numbers: x³ × x² = x⁵, x⁵ ÷ x² = x³, and (x²)³ = x⁶. Simplify expressions one law at a time.',
        'Scientific notation uses powers of ten to write very big and very small numbers compactly: 4.2 × 10⁷ is 42 000 000, and 3 × 10⁻³ is 0.003.',
      ],
      illustrations: [
        {
          brief: 'A flowchart applying the product law to x³ × x²',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'x³ × x²' },
              { text: 'Same base → add exponents' },
              { text: 'x⁵' },
            ],
          },
        },
        {
          brief: 'Bars showing 4.2 × 10⁷ as a big number',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '4.2 × 10⁷', value: 42 }, { label: 'millions', value: 42 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-NN02-q1', type: 'short', prompt: 'Simplify x³ × x². (Write as x^n)', answer: 'x^5', difficulty: 1 },
        { id: 'Y9-MAT-NN02-q2', type: 'short', prompt: 'Simplify x⁵ ÷ x². (Write as x^n)', answer: 'x^3', difficulty: 2 },
        { id: 'Y9-MAT-NN02-q3', type: 'short', prompt: 'Write 42 000 000 in scientific notation. (Format: a × 10^n)', answer: '4.2 × 10^7', difficulty: 2 },
        { id: 'Y9-MAT-NN02-q4', type: 'mcq', prompt: '(x²)³ = …', options: ['x⁶', 'x⁵', 'x⁸'], answer: 'x⁶', difficulty: 2 },
        { id: 'Y9-MAT-NN02-q5', type: 'short', prompt: 'Write 0.003 in scientific notation.', answer: '3 × 10^-3', difficulty: 2 },
        { id: 'Y9-MAT-NN02-q6', type: 'mcq', prompt: 'To multiply powers with the same base, you…', options: ['Add the exponents', 'Multiply the exponents', 'Divide the exponents'], answer: 'Add the exponents', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-NN03',
    title: 'Percentages & financial mathematics',
    year: '9',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M9N03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Simple interest is a fixed percentage of the original amount each year: I = P × r × t. Compound interest earns interest on interest: A = P(1 + r)ⁿ, so money grows faster over time.',
        'Financial decisions — loans, savings, discounts — are percentage problems in disguise. Modelling them lets you compare options and spot the better deal.',
      ],
      illustrations: [
        {
          brief: 'Bars showing simple vs compound interest growth',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Simple', value: 20 }, { label: 'Compound', value: 26 }] },
        },
        {
          brief: 'The interest-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Identify P, r and time' },
              { text: 'Choose simple or compound' },
              { text: 'Apply the formula' },
              { text: 'Interpret the total' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-NN03-q1', type: 'short', prompt: 'Simple interest on $1000 at 5% for 1 year is how many dollars?', answer: '50', difficulty: 1 },
        { id: 'Y9-MAT-NN03-q2', type: 'mcq', prompt: 'Compound interest means…', options: ['Interest is earned on interest', 'Interest never changes', 'Interest is always 0'], answer: 'Interest is earned on interest', difficulty: 1 },
        { id: 'Y9-MAT-NN03-q3', type: 'short', prompt: 'A $2000 investment earns 10% simple interest for 2 years. What is the interest in dollars?', answer: '400', difficulty: 2 },
        { id: 'Y9-MAT-NN03-q4', type: 'mcq', prompt: 'Over many years, compound interest grows…', options: ['Faster than simple interest', 'Slower than simple interest', 'Exactly the same'], answer: 'Faster than simple interest', difficulty: 2 },
        { id: 'Y9-MAT-NN03-q5', type: 'short', prompt: 'The formula A = P(1 + r)ⁿ uses r as the… (answer: rate as a decimal or percentage)', answer: 'rate', difficulty: 2 },
        { id: 'Y9-MAT-NN03-q6', type: 'mcq', prompt: 'A 10% discount followed by another 10% discount gives a total discount of…', options: ['19%', '20%', '10%'], answer: '19%', difficulty: 3 },
      ],
    },
  },
  {
    id: 'Y9-MAT-NN04',
    title: 'Financial applications',
    year: '9',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M9N04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Applying mathematics to money means modelling real situations: comparing bank offers, working out best buys, budgeting with GST, and interpreting repayment tables for loans.',
        'The modelling cycle keeps you honest: formulate the money problem, compute, and then interpret the result in context — is that weekly repayment realistic?',
      ],
      illustrations: [
        {
          brief: 'A flowchart of the financial modelling cycle',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Formulate the money problem' },
              { text: 'Compute with percentages' },
              { text: 'Compare options' },
              { text: 'Interpret in context' },
            ],
          },
        },
        {
          brief: 'A bar comparing two phone plans',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Plan A', value: 30 }, { label: 'Plan B', value: 25 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-NN04-q1', type: 'mcq', prompt: 'Comparing two phone plans to pick the cheaper one is an example of…', options: ['Applying mathematics to a financial situation', 'Pure algebra', 'Probability only'], answer: 'Applying mathematics to a financial situation', difficulty: 1 },
        { id: 'Y9-MAT-NN04-q2', type: 'short', prompt: 'A $40 item has 10% GST. What is the GST amount in dollars?', answer: '4', difficulty: 1 },
        { id: 'Y9-MAT-NN04-q3', type: 'mcq', prompt: 'Interpreting a loan repayment table involves reading…', options: ['The weekly or monthly repayment for a loan', 'Only the interest rate', 'Nothing at all'], answer: 'The weekly or monthly repayment for a loan', difficulty: 2 },
        { id: 'Y9-MAT-NN04-q4', type: 'short', prompt: 'A phone plan costs $25 per month. How much for 6 months in dollars?', answer: '150', difficulty: 1 },
        { id: 'Y9-MAT-NN04-q5', type: 'mcq', prompt: 'The last step of financial modelling is to…', options: ['Check the result makes sense in real life', 'Stop at the first number', 'Ignore the context'], answer: 'Check the result makes sense in real life', difficulty: 2 },
        { id: 'Y9-MAT-NN04-q6', type: 'mcq', prompt: 'A budget is best described as…', options: ['A plan for spending and saving money', 'A way to double money', 'A type of loan'], answer: 'A plan for spending and saving money', difficulty: 1 },
      ],
    },
  },
  // ---------- Algebra (4 CDs) ----------
  {
    id: 'Y9-MAT-AL01',
    title: 'Simplifying algebraic expressions',
    year: '9',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M9A01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Simplifying algebraic expressions means combining like terms and applying the index laws: 3x² + 2x² = 5x², and x² × x³ = x⁵. Like terms share the exact same variables and powers.',
        'Work term by term and keep the signs: 4x − 2x + 5y stays tidy only if you combine matching terms and leave the rest alone.',
      ],
      illustrations: [
        {
          brief: 'A balance scale weighing 3x² + 2x² against 5x²',
          ready: true,
          diagram: { kind: 'balance-scale', left: '3x² + 2x²', right: '5x²', balanced: true },
        },
        {
          brief: 'A flowchart simplifying step by step',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Group like terms' },
              { text: 'Apply index laws' },
              { text: 'Combine coefficients' },
              { text: 'Write the simplest form' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-AL01-q1', type: 'mcq', prompt: '3x² + 2x² = …', options: ['5x²', '5x⁴', '6x²'], answer: '5x²', difficulty: 1 },
        { id: 'Y9-MAT-AL01-q2', type: 'mcq', prompt: 'x² × x³ = …', options: ['x⁵', 'x⁶', '2x⁵'], answer: 'x⁵', difficulty: 2 },
        { id: 'Y9-MAT-AL01-q3', type: 'mcq', prompt: 'Which terms are like terms?', options: ['3x² and 5x²', '3x² and 3x', '3x² and 3y²'], answer: '3x² and 5x²', difficulty: 1 },
        { id: 'Y9-MAT-AL01-q4', type: 'short', prompt: 'Simplify 4x − 2x + 5y.', answer: '2x + 5y', difficulty: 2 },
        { id: 'Y9-MAT-AL01-q5', type: 'mcq', prompt: 'x⁶ ÷ x² = …', options: ['x⁴', 'x³', 'x⁸'], answer: 'x⁴', difficulty: 2 },
        { id: 'Y9-MAT-AL01-q6', type: 'mcq', prompt: 'Simplifying means…', options: ['Combining like terms into the neatest form', 'Making it longer', 'Adding letters at random'], answer: 'Combining like terms into the neatest form', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-AL02',
    title: 'Expanding binomial products & factorising',
    year: '9',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M9A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Expanding a binomial product uses the distributive law twice: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6. "FOIL" is a memory aid for the order.',
        'Special products come up often: (a + b)² = a² + 2ab + b² and (a − b)(a + b) = a² − b². Spotting them makes expanding instant.',
      ],
      illustrations: [
        {
          brief: 'A balance scale weighing (x + 2)(x + 3) against x² + 5x + 6',
          ready: true,
          diagram: { kind: 'balance-scale', left: '(x + 2)(x + 3)', right: 'x² + 5x + 6', balanced: true },
        },
        {
          brief: 'A 3 by 3 area model for a binomial product',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 3, width: 3, unit: '' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-AL02-q1', type: 'mcq', prompt: '(x + 2)(x + 3) expands to…', options: ['x² + 5x + 6', 'x² + 6x + 6', 'x² + 5x + 5'], answer: 'x² + 5x + 6', difficulty: 2 },
        { id: 'Y9-MAT-AL02-q2', type: 'mcq', prompt: '(a + b)² = …', options: ['a² + 2ab + b²', 'a² + b²', 'a² + ab + b²'], answer: 'a² + 2ab + b²', difficulty: 1 },
        { id: 'Y9-MAT-AL02-q3', type: 'mcq', prompt: '(a − b)(a + b) = …', options: ['a² − b²', 'a² + b²', 'a² − 2ab + b²'], answer: 'a² − b²', difficulty: 2 },
        { id: 'Y9-MAT-AL02-q4', type: 'short', prompt: 'Expand (x + 1)(x + 4).', answer: 'x^2 + 5x + 4', difficulty: 2 },
        { id: 'Y9-MAT-AL02-q5', type: 'mcq', prompt: 'FOIL is a memory aid for…', options: ['Expanding two brackets', 'Factorising a square', 'Adding fractions'], answer: 'Expanding two brackets', difficulty: 1 },
        { id: 'Y9-MAT-AL02-q6', type: 'mcq', prompt: 'The reverse of expanding is…', options: ['Factorising', 'Dividing by zero', 'Rounding'], answer: 'Factorising', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-AL03',
    title: 'Linear relationships in real-life situations',
    year: '9',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M9A03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Linear relationships model real situations with a constant rate of change: a car using 8 L per 100 km, or a phone plan with a fixed fee plus per-minute cost.',
        'Solve problems by finding the gradient (rate of change) and the y-intercept (starting value), then writing y = mx + b. Check your model against the real situation.',
      ],
      illustrations: [
        {
          brief: 'Points of a linear model y = 8x starting at 0',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 40,
            points: [
              { x: 0, y: 0, label: '(0,0)' },
              { x: 2, y: 16, label: '(2,16)' },
              { x: 4, y: 32, label: '(4,32)' },
            ],
          },
        },
        {
          brief: 'The linear-modelling process as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Find the rate of change' },
              { text: 'Find the starting value' },
              { text: 'Write y = mx + b' },
              { text: 'Solve & check in context' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-AL03-q1', type: 'short', prompt: 'A car uses 8 L per 100 km. How many litres for 400 km?', answer: '32', difficulty: 2 },
        { id: 'Y9-MAT-AL03-q2', type: 'mcq', prompt: 'In y = mx + b, m is the…', options: ['Rate of change (gradient)', 'Starting value', 'Number of steps'], answer: 'Rate of change (gradient)', difficulty: 1 },
        { id: 'Y9-MAT-AL03-q3', type: 'mcq', prompt: 'In y = mx + b, b is the…', options: ['y-intercept (starting value)', 'Gradient', 'Slope only'], answer: 'y-intercept (starting value)', difficulty: 1 },
        { id: 'Y9-MAT-AL03-q4', type: 'short', prompt: 'A plan charges $20 plus $0.5 per minute. What does 30 minutes cost in dollars?', answer: '35', difficulty: 2 },
        { id: 'Y9-MAT-AL03-q5', type: 'mcq', prompt: 'A linear model fits well when change is…', options: ['Constant per unit', 'Doubling each step', 'Random'], answer: 'Constant per unit', difficulty: 2 },
        { id: 'Y9-MAT-AL03-q6', type: 'mcq', prompt: 'Gradient is also called…', options: ['Rate of change', 'Starting point', 'Total amount'], answer: 'Rate of change', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-AL04',
    title: 'Index laws & the zero exponent',
    year: '9',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M9A04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The index laws extend to zero and negative exponents: any non-zero base to the power of zero is 1 (x⁰ = 1), and a negative exponent means a reciprocal (x⁻² = 1/x²).',
        'In scientific notation, negative exponents express tiny numbers: 2.5 × 10⁻³ = 0.0025. The exponent tells you how many places the decimal point moves.',
      ],
      illustrations: [
        {
          brief: 'Bars showing the powers of 2 shrinking to 2⁰ = 1',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '2³', value: 8 }, { label: '2²', value: 4 }, { label: '2¹', value: 2 }, { label: '2⁰', value: 1 }] },
        },
        {
          brief: 'A number line showing 2.5 × 10⁻³ = 0.0025',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 0.005, marks: [{ value: 0.0025, label: '0.0025' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-AL04-q1', type: 'short', prompt: 'What is x⁰ (for x not zero)?', answer: '1', difficulty: 1 },
        { id: 'Y9-MAT-AL04-q2', type: 'mcq', prompt: 'x⁻² is the same as…', options: ['1/x²', 'x²', '−x²'], answer: '1/x²', difficulty: 2 },
        { id: 'Y9-MAT-AL04-q3', type: 'short', prompt: 'Write 0.0025 in scientific notation.', answer: '2.5 × 10^-3', difficulty: 2 },
        { id: 'Y9-MAT-AL04-q4', type: 'mcq', prompt: 'A negative exponent means…', options: ['Take the reciprocal', 'The base is negative', 'Multiply by zero'], answer: 'Take the reciprocal', difficulty: 2 },
        { id: 'Y9-MAT-AL04-q5', type: 'mcq', prompt: '2.5 × 10³ equals…', options: ['2500', '0.0025', '25'], answer: '2500', difficulty: 1 },
        { id: 'Y9-MAT-AL04-q6', type: 'mcq', prompt: 'In scientific notation, the exponent shows…', options: ['How many places the decimal point moves', 'The colour of the number', 'The size of the base'], answer: 'How many places the decimal point moves', difficulty: 2 },
      ],
    },
  },
  // ---------- Measurement (5 CDs) ----------
  {
    id: 'Y9-MAT-ME01',
    title: 'Surface area & volume of prisms & cylinders',
    year: '9',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M9M01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Volume of a prism or cylinder is area of base × height. A cylinder’s base is a circle, so V = πr²h. Surface area is the total area of every face — for a cylinder that is 2πr² + 2πrh.',
        'Surface area answers "how much wrapping paper?", volume answers "how much does it hold?" — keep the two straight.',
      ],
      illustrations: [
        {
          brief: 'The circular base of a cylinder as a rectangle-area stand-in',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 6, width: 4, unit: 'cm' },
        },
        {
          brief: 'A bar comparing surface area and volume',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Surface area', value: 6 }, { label: 'Volume', value: 10 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ME01-q1', type: 'mcq', prompt: 'Volume of a cylinder uses the formula…', options: ['V = πr²h', 'V = 2πr', 'V = πdh'], answer: 'V = πr²h', difficulty: 1 },
        { id: 'Y9-MAT-ME01-q2', type: 'short', prompt: 'A prism has base area 20 cm² and height 6 cm. What is its volume in cm³?', answer: '120', difficulty: 1 },
        { id: 'Y9-MAT-ME01-q3', type: 'mcq', prompt: 'Surface area measures…', options: ['The total area of all the faces', 'The space inside', 'The weight'], answer: 'The total area of all the faces', difficulty: 1 },
        { id: 'Y9-MAT-ME01-q4', type: 'short', prompt: 'Using V = πr²h with π = 3.14, r = 2 and h = 5, what is V?', answer: '62.8', difficulty: 2 },
        { id: 'Y9-MAT-ME01-q5', type: 'mcq', prompt: 'Wrapping a present in paper uses…', options: ['Surface area thinking', 'Volume thinking', 'Probability'], answer: 'Surface area thinking', difficulty: 2 },
        { id: 'Y9-MAT-ME01-q6', type: 'mcq', prompt: 'A cylinder’s surface area includes…', options: ['Two circular ends and the curved side', 'Only the curved side', 'Only one end'], answer: 'Two circular ends and the curved side', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ME02',
    title: 'Length, area, surface area & volume scale factors',
    year: '9',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M9M02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'When a shape is enlarged by a scale factor k: lengths multiply by k, areas multiply by k², and volumes multiply by k³. Doubling a cube’s edge makes its volume 8 times bigger.',
        'These scaling rules let you predict size changes without recalculating everything — and spot mistakes in map and model work.',
      ],
      illustrations: [
        {
          brief: 'Bars showing length, area and volume scale factors',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '×', items: [{ label: 'Length', value: 2 }, { label: 'Area', value: 4 }, { label: 'Volume', value: 8 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ME02-q1', type: 'mcq', prompt: 'With a scale factor of 2, lengths multiply by…', options: ['2', '4', '8'], answer: '2', difficulty: 1 },
        { id: 'Y9-MAT-ME02-q2', type: 'mcq', prompt: 'With a scale factor of 2, areas multiply by…', options: ['4', '2', '8'], answer: '4', difficulty: 2 },
        { id: 'Y9-MAT-ME02-q3', type: 'mcq', prompt: 'With a scale factor of 2, volumes multiply by…', options: ['8', '4', '2'], answer: '8', difficulty: 2 },
        { id: 'Y9-MAT-ME02-q4', type: 'short', prompt: 'A scale factor of 3 makes a 4 cm² shape how many cm²?', answer: '36', difficulty: 2 },
        { id: 'Y9-MAT-ME02-q5', type: 'short', prompt: 'A scale factor of 3 makes a 5 cm³ shape how many cm³?', answer: '135', difficulty: 3 },
        { id: 'Y9-MAT-ME02-q6', type: 'mcq', prompt: 'The volume scale factor equals…', options: ['k³', 'k²', 'k'], answer: 'k³', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ME03',
    title: 'Similarity, scale factors & applying similarity',
    year: '9',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M9M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Similar figures share the same shape: matching angles are equal and matching sides are in the same ratio. Similar triangles are the basis of indirect measurement.',
        'Use similar triangles to measure what you cannot reach — the height of a tree or building — by comparing shadows or using a scale model.',
      ],
      illustrations: [
        {
          brief: 'A flowchart for solving with similar triangles',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Identify matching sides' },
              { text: 'Write the ratio' },
              { text: 'Solve for the unknown' },
              { text: 'Check in real life' },
            ],
          },
        },
        {
          brief: 'Bars showing a 2 : 3 side ratio',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'm', items: [{ label: 'Small side', value: 2 }, { label: 'Big side', value: 3 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ME03-q1', type: 'mcq', prompt: 'Similar figures have…', options: ['Equal angles and sides in the same ratio', 'Different angles', 'Equal areas always'], answer: 'Equal angles and sides in the same ratio', difficulty: 1 },
        { id: 'Y9-MAT-ME03-q2', type: 'short', prompt: 'A 3 m shadow and a 2 m shadow from a tree and a 1.5 m pole: how tall is the tree?', answer: '2.25', difficulty: 3 },
        { id: 'Y9-MAT-ME03-q3', type: 'mcq', prompt: 'Indirect measurement means…', options: ['Finding sizes without direct measuring', 'Guessing wildly', 'Using a broken ruler'], answer: 'Finding sizes without direct measuring', difficulty: 2 },
        { id: 'Y9-MAT-ME03-q4', type: 'short', prompt: 'Similar triangles have sides in the ratio 2 : 5. A side of 4 corresponds to what length?', answer: '10', difficulty: 2 },
        { id: 'Y9-MAT-ME03-q5', type: 'mcq', prompt: 'Two triangles with equal angles are…', options: ['Similar', 'Always congruent', 'Unrelated'], answer: 'Similar', difficulty: 1 },
        { id: 'Y9-MAT-ME03-q6', type: 'mcq', prompt: 'Shadow measurements rely on…', options: ['Similar triangles', 'Equal areas', 'Circumference only'], answer: 'Similar triangles', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ME04',
    title: 'Pythagoras & trigonometric ratios',
    year: '9',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M9M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Trigonometry links angles to side ratios in right-angled triangles: sin = opposite ÷ hypotenuse, cos = adjacent ÷ hypotenuse, tan = opposite ÷ adjacent (SOHCAHTOA).',
        'Choose the ratio that matches the sides you know and the side you need. Use Pythagoras (a² + b² = c²) when you have two sides but no angle.',
      ],
      illustrations: [
        {
          brief: 'A right triangle sketched on a quadrant grid',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 5,
            points: [
              { x: 0, y: 0, label: '(0,0)' },
              { x: 3, y: 0, label: '(3,0)' },
              { x: 3, y: 4, label: '(3,4)' },
            ],
          },
        },
        {
          brief: 'Bars showing the 3-4-5 side lengths',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Adjacent', value: 3 }, { label: 'Opposite', value: 4 }, { label: 'Hypotenuse', value: 5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ME04-q1', type: 'mcq', prompt: 'sin = …', options: ['opposite ÷ hypotenuse', 'adjacent ÷ hypotenuse', 'opposite ÷ adjacent'], answer: 'opposite ÷ hypotenuse', difficulty: 2 },
        { id: 'Y9-MAT-ME04-q2', type: 'mcq', prompt: 'cos = …', options: ['adjacent ÷ hypotenuse', 'opposite ÷ hypotenuse', 'opposite ÷ adjacent'], answer: 'adjacent ÷ hypotenuse', difficulty: 2 },
        { id: 'Y9-MAT-ME04-q3', type: 'mcq', prompt: 'tan = …', options: ['opposite ÷ adjacent', 'adjacent ÷ hypotenuse', 'hypotenuse ÷ opposite'], answer: 'opposite ÷ adjacent', difficulty: 2 },
        { id: 'Y9-MAT-ME04-q4', type: 'short', prompt: 'A right triangle has legs 3 and 4. What is the hypotenuse?', answer: '5', difficulty: 1 },
        { id: 'Y9-MAT-ME04-q5', type: 'mcq', prompt: 'Use Pythagoras when…', options: ['You have two sides but no angle', 'You have no right angle', 'You only have one side'], answer: 'You have two sides but no angle', difficulty: 2 },
        { id: 'Y9-MAT-ME04-q6', type: 'mcq', prompt: 'SOHCAHTOA is a memory aid for…', options: ['Trigonometric ratios', 'Prime numbers', 'Rounding rules'], answer: 'Trigonometric ratios', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ME05',
    title: 'Practical applications of trigonometry',
    year: '9',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M9M05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Trigonometry solves real problems: finding the height of a tower from its angle of elevation, or working out distances on a map using bearings.',
        'Draw a clear right-angled triangle for each problem, label the sides, choose the ratio, and check your answer makes sense against the real world.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of the trig problem-solving steps',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Draw the triangle' },
              { text: 'Label the sides' },
              { text: 'Choose the ratio' },
              { text: 'Solve & check' },
            ],
          },
        },
        {
          brief: 'A bar comparing a tower and its shadow',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'm', items: [{ label: 'Tower', value: 20 }, { label: 'Shadow', value: 11.5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ME05-q1', type: 'mcq', prompt: 'Angle of elevation is measured…', options: ['Up from the horizontal', 'Down from vertical', 'Around in a circle'], answer: 'Up from the horizontal', difficulty: 2 },
        { id: 'Y9-MAT-ME05-q2', type: 'short', prompt: 'A tower’s height and shadow are the opposite and adjacent sides of a right triangle. tan(60°) ≈ 1.732, shadow = 11.5 m. What is the height?', answer: '19.9', difficulty: 3 },
        { id: 'Y9-MAT-ME05-q3', type: 'mcq', prompt: 'The first step of a trig word problem is to…', options: ['Draw and label the triangle', 'Guess the answer', 'Round everything'], answer: 'Draw and label the triangle', difficulty: 1 },
        { id: 'Y9-MAT-ME05-q4', type: 'mcq', prompt: 'Bearings are angles measured…', options: ['From north, clockwise', 'From the horizon', 'Randomly'], answer: 'From north, clockwise', difficulty: 2 },
        { id: 'Y9-MAT-ME05-q5', type: 'mcq', prompt: 'After solving, you should…', options: ['Check the answer makes sense', 'Stop immediately', 'Change the question'], answer: 'Check the answer makes sense', difficulty: 1 },
        { id: 'Y9-MAT-ME05-q6', type: 'mcq', prompt: 'A right triangle has opposite = 3, hypotenuse = 5. sin = …', options: ['3/5', '4/5', '5/3'], answer: '3/5', difficulty: 2 },
      ],
    },
  },
  // ---------- Space (4 CDs) ----------
  {
    id: 'Y9-MAT-SP01',
    title: 'Similarity, congruence & transformations',
    year: '9',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M9SP01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Congruent shapes are identical in size and shape; similar shapes are the same shape but a different size. Transformations — reflection, rotation, translation — preserve congruence, while enlargement creates similarity.',
        'A sequence of transformations can map one shape onto another. Describing the sequence (e.g. "reflect then translate") is precise mathematical communication.',
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
          brief: 'A point P (1,1) translated to P′ (3,4)',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 5,
            points: [
              { x: 1, y: 1, label: 'P' },
              { x: 3, y: 4, label: 'P′' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-SP01-q1', type: 'mcq', prompt: 'Congruent shapes are…', options: ['Identical in size and shape', 'Same shape, any size', 'Always circles'], answer: 'Identical in size and shape', difficulty: 1 },
        { id: 'Y9-MAT-SP01-q2', type: 'mcq', prompt: 'Similar shapes are…', options: ['Same shape, different size', 'Identical in size', 'Unrelated'], answer: 'Same shape, different size', difficulty: 1 },
        { id: 'Y9-MAT-SP01-q3', type: 'mcq', prompt: 'Which transformation creates similarity, not congruence?', options: ['Enlargement', 'Reflection', 'Translation'], answer: 'Enlargement', difficulty: 2 },
        { id: 'Y9-MAT-SP01-q4', type: 'mcq', prompt: 'Reflecting then translating a shape produces an image that is…', options: ['Congruent to the original', 'Always smaller', 'Always rotated'], answer: 'Congruent to the original', difficulty: 2 },
        { id: 'Y9-MAT-SP01-q5', type: 'mcq', prompt: 'Describing a sequence of transformations means…', options: ['Listing them in order', 'Guessing', 'Measuring the colour'], answer: 'Listing them in order', difficulty: 2 },
        { id: 'Y9-MAT-SP01-q6', type: 'short', prompt: 'Reflect the point (3, 2) across the x-axis. Write the new coordinates as x, y.', answer: '3, -2', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-SP02',
    title: 'Defining geometric properties & constructions',
    year: '9',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M9SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Geometry is built on precise definitions: a parallelogram has two pairs of parallel sides, a rhombus has four equal sides, a kite has two pairs of adjacent equal sides.',
        'Constructions with compasses and straightedge prove geometric relationships — bisecting an angle, drawing a perpendicular — and reveal why the properties hold.',
      ],
      illustrations: [
        {
          brief: 'A flowchart sorting quadrilaterals by properties',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: '4 sides?' },
              { text: 'Two pairs parallel?' },
              { text: 'All sides equal?', decision: true },
              { text: 'Square or rhombus' },
            ],
          },
        },
        {
          brief: 'Three triangle icons labelled by type',
          ready: true,
          diagram: {
            kind: 'icon-scene',
            items: [
              { icon: 'triangle-shape', label: 'Equilateral' },
              { icon: 'triangle-shape', label: 'Isosceles' },
              { icon: 'triangle-shape', label: 'Scalene' },
            ],
            caption: 'Defined by side properties',
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-SP02-q1', type: 'mcq', prompt: 'A parallelogram is defined by…', options: ['Two pairs of parallel sides', 'One pair of equal sides', 'Four right angles'], answer: 'Two pairs of parallel sides', difficulty: 1 },
        { id: 'Y9-MAT-SP02-q2', type: 'mcq', prompt: 'A rhombus has…', options: ['Four equal sides', 'No equal sides', 'Exactly one right angle'], answer: 'Four equal sides', difficulty: 1 },
        { id: 'Y9-MAT-SP02-q3', type: 'mcq', prompt: 'A kite has…', options: ['Two pairs of adjacent equal sides', 'Four equal sides', 'Parallel opposite sides'], answer: 'Two pairs of adjacent equal sides', difficulty: 2 },
        { id: 'Y9-MAT-SP02-q4', type: 'mcq', prompt: 'Angle bisection means…', options: ['Splitting an angle into two equal parts', 'Doubling an angle', 'Deleting an angle'], answer: 'Splitting an angle into two equal parts', difficulty: 2 },
        { id: 'Y9-MAT-SP02-q5', type: 'mcq', prompt: 'A square is also a…', options: ['Rhombus and a rectangle', 'Trapezium only', 'Triangle'], answer: 'Rhombus and a rectangle', difficulty: 2 },
        { id: 'Y9-MAT-SP02-q6', type: 'mcq', prompt: 'A perpendicular line meets another line at…', options: ['90°', '45°', '180°'], answer: '90°', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-SP03',
    title: 'Coordinates, lines & shapes',
    year: '9',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M9SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The Cartesian plane lets you describe shapes precisely with coordinates. A horizontal line has the form y = k and a vertical line x = k.',
        'Describe a shape by listing its vertices as ordered pairs, and reason about lines by their gradient: rise over run.',
      ],
      illustrations: [
        {
          brief: 'Points (1,1), (3,1), (3,3) sketching a triangle',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 4,
            points: [
              { x: 1, y: 1, label: '(1,1)' },
              { x: 3, y: 1, label: '(3,1)' },
              { x: 3, y: 3, label: '(3,3)' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-SP03-q1', type: 'mcq', prompt: 'A horizontal line has the equation…', options: ['y = k', 'x = k', 'y = x'], answer: 'y = k', difficulty: 2 },
        { id: 'Y9-MAT-SP03-q2', type: 'mcq', prompt: 'A vertical line has the equation…', options: ['x = k', 'y = k', 'y = 0'], answer: 'x = k', difficulty: 2 },
        { id: 'Y9-MAT-SP03-q3', type: 'short', prompt: 'A line rises 4 units over a run of 2. What is its gradient?', answer: '2', difficulty: 2 },
        { id: 'Y9-MAT-SP03-q4', type: 'mcq', prompt: 'The point (2, 3) has x-coordinate…', options: ['2', '3', '5'], answer: '2', difficulty: 1 },
        { id: 'Y9-MAT-SP03-q5', type: 'mcq', prompt: 'Gradient is also known as…', options: ['Rise over run', 'Run over rise', 'Rise times run'], answer: 'Rise over run', difficulty: 1 },
        { id: 'Y9-MAT-SP03-q6', type: 'mcq', prompt: 'To describe a polygon with coordinates you list…', options: ['Its vertices in order', 'Its colours', 'Its area first'], answer: 'Its vertices in order', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-SP04',
    title: 'Graphs & relations with digital tools',
    year: '9',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M9SP04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Digital graphing tools plot relations instantly and let you experiment: change a coefficient and watch the curve respond. Patterns can be discovered and tested as conjectures.',
        'Graph a relation, describe its shape (straight line, curve, where it crosses the axes), and verify that the visual pattern matches the algebraic rule.',
      ],
      illustrations: [
        {
          brief: 'Points of y = x² curving upward',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 10,
            points: [
              { x: 0, y: 0, label: 'A' },
              { x: 1, y: 1, label: 'B' },
              { x: 2, y: 4, label: 'C' },
              { x: 3, y: 9, label: 'D' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-SP04-q1', type: 'mcq', prompt: 'Graphing tools are great for…', options: ['Experimenting and spotting patterns', 'Only drawing circles', 'Avoiding maths'], answer: 'Experimenting and spotting patterns', difficulty: 1 },
        { id: 'Y9-MAT-SP04-q2', type: 'mcq', prompt: 'The graph of y = x² is…', options: ['A U-shaped curve', 'A straight line', 'A circle'], answer: 'A U-shaped curve', difficulty: 2 },
        { id: 'Y9-MAT-SP04-q3', type: 'short', prompt: 'For y = x², what is y when x = 4?', answer: '16', difficulty: 1 },
        { id: 'Y9-MAT-SP04-q4', type: 'mcq', prompt: 'A conjecture is…', options: ['A testable guess about a pattern', 'The final answer', 'A graph type'], answer: 'A testable guess about a pattern', difficulty: 2 },
        { id: 'Y9-MAT-SP04-q5', type: 'mcq', prompt: 'Describing a graph means commenting on…', options: ['Shape and where it crosses the axes', 'Its colour', 'Its file size'], answer: 'Shape and where it crosses the axes', difficulty: 1 },
        { id: 'Y9-MAT-SP04-q6', type: 'mcq', prompt: 'Digital experimentation helps because changes are…', options: ['Instant and easy to compare', 'Slow and hidden', 'Impossible'], answer: 'Instant and easy to compare', difficulty: 2 },
      ],
    },
  },
  // ---------- Statistics (4 CDs) ----------
  {
    id: 'Y9-MAT-ST01',
    title: 'Comparing data representations',
    year: '9',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M9ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'The same data can be shown as a column graph, dot plot, stem-and-leaf plot or box plot — each reveals different things. Choosing the best display is part of clear communication.',
        'Analyse the source of data and the way it is presented: misleading scales and cherry-picked graphs are common in the media, so read critically.',
      ],
      illustrations: [
        {
          brief: 'A dot plot of a data set',
          ready: true,
          diagram: { kind: 'dot-plot', values: [4, 5, 5, 6, 6, 6, 7, 8] },
        },
        {
          brief: 'A bar chart of the same data',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '4', value: 1 }, { label: '5', value: 2 }, { label: '6', value: 3 }, { label: '7', value: 1 }, { label: '8', value: 1 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ST01-q1', type: 'mcq', prompt: 'A box plot is especially good at showing…', options: ['Spread and quartiles', 'Individual colours', 'Only totals'], answer: 'Spread and quartiles', difficulty: 2 },
        { id: 'Y9-MAT-ST01-q2', type: 'mcq', prompt: 'A misleading graph might…', options: ['Use a distorted scale', 'Show every value clearly', 'Have a title'], answer: 'Use a distorted scale', difficulty: 1 },
        { id: 'Y9-MAT-ST01-q3', type: 'mcq', prompt: 'The best display depends on…', options: ['The data and the message', 'Random choice', 'The page colour'], answer: 'The data and the message', difficulty: 1 },
        { id: 'Y9-MAT-ST01-q4', type: 'mcq', prompt: 'Reading a graph critically means…', options: ['Checking the scale and source', 'Believing everything', 'Ignoring labels'], answer: 'Checking the scale and source', difficulty: 2 },
        { id: 'Y9-MAT-ST01-q5', type: 'mcq', prompt: 'A dot plot is best for…', options: ['Small numerical data sets', 'Very large lists of names', 'Only pictures'], answer: 'Small numerical data sets', difficulty: 1 },
        { id: 'Y9-MAT-ST01-q6', type: 'mcq', prompt: 'Quartiles split data into…', options: ['Four parts', 'Two parts', 'Ten parts'], answer: 'Four parts', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ST02',
    title: 'Comparing data sets',
    year: '9',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M9ST02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Compare data sets using the five-number summary: minimum, lower quartile, median, upper quartile and maximum. Box plots make these five numbers visual.',
        'Compare the same features across groups: which group has the higher centre (median), which has more spread (range or interquartile range), and what do the whiskers reveal about outliers?',
      ],
      illustrations: [
        {
          brief: 'A dot plot of a data set',
          ready: true,
          diagram: { kind: 'dot-plot', values: [2, 3, 3, 4, 5, 5, 6, 7] },
        },
        {
          brief: 'Medians of two groups compared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Group A median', value: 5 }, { label: 'Group B median', value: 7 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ST02-q1', type: 'mcq', prompt: 'The five-number summary includes…', options: ['Min, lower quartile, median, upper quartile, max', 'Mean, mode and range only', 'Ten random numbers'], answer: 'Min, lower quartile, median, upper quartile, max', difficulty: 1 },
        { id: 'Y9-MAT-ST02-q2', type: 'mcq', prompt: 'The interquartile range is…', options: ['Upper quartile − lower quartile', 'Max − min', 'Median ÷ 2'], answer: 'Upper quartile − lower quartile', difficulty: 2 },
        { id: 'Y9-MAT-ST02-q3', type: 'mcq', prompt: 'A box plot is built from the…', options: ['Five-number summary', 'Mean only', 'Mode only'], answer: 'Five-number summary', difficulty: 2 },
        { id: 'Y9-MAT-ST02-q4', type: 'short', prompt: 'For data 2, 3, 3, 4, 5, 5, 6, 7, what is the median?', answer: '4.5', difficulty: 2 },
        { id: 'Y9-MAT-ST02-q5', type: 'mcq', prompt: 'Long whiskers in a box plot suggest…', options: ['Wide spread or possible outliers', 'No data', 'A perfect square'], answer: 'Wide spread or possible outliers', difficulty: 2 },
        { id: 'Y9-MAT-ST02-q6', type: 'mcq', prompt: 'Comparing groups, a higher median means…', options: ['A generally higher centre', 'More spread', 'More colours'], answer: 'A generally higher centre', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ST03',
    title: 'Bivariate data & scatterplots',
    year: '9',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M9ST03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Bivariate data has two variables measured together — like study time and test score. Scatterplots show each pair as a point.',
        'Describe the relationship: positive (both rise together), negative (one rises as the other falls) or no relationship. Strong clustering on a clear trend suggests a stronger association than scattered points.',
      ],
      illustrations: [
        {
          brief: 'Points rising from (1,2) to (6,9) on a quadrant grid',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 10,
            points: [
              { x: 1, y: 2, label: 'A' },
              { x: 2, y: 4, label: 'B' },
              { x: 3, y: 5, label: 'C' },
              { x: 4, y: 7, label: 'D' },
              { x: 5, y: 8, label: 'E' },
              { x: 6, y: 9, label: 'F' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-ST03-q1', type: 'mcq', prompt: 'Bivariate data involves…', options: ['Two variables measured together', 'One variable repeated', 'Only categories'], answer: 'Two variables measured together', difficulty: 1 },
        { id: 'Y9-MAT-ST03-q2', type: 'mcq', prompt: 'As x rises, y rises. This is a…', options: ['Positive relationship', 'Negative relationship', 'No relationship'], answer: 'Positive relationship', difficulty: 1 },
        { id: 'Y9-MAT-ST03-q3', type: 'mcq', prompt: 'A scatterplot shows…', options: ['Each pair of values as a point', 'Only averages', 'Only one number'], answer: 'Each pair of values as a point', difficulty: 1 },
        { id: 'Y9-MAT-ST03-q4', type: 'mcq', prompt: 'Points closely following a clear trend suggest…', options: ['A strong association', 'No data', 'A weak random scatter'], answer: 'A strong association', difficulty: 2 },
        { id: 'Y9-MAT-ST03-q5', type: 'mcq', prompt: 'A negative relationship means…', options: ['As one rises, the other falls', 'Both always rise', 'No pattern at all'], answer: 'As one rises, the other falls', difficulty: 1 },
        { id: 'Y9-MAT-ST03-q6', type: 'mcq', prompt: 'Scatterplots are best for…', options: ['Bivariate numerical data', 'Single categories', 'Word lists'], answer: 'Bivariate numerical data', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-ST04',
    title: 'Statistical investigations & representative data',
    year: '9',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M9ST04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A statistical investigation poses a question, designs a sampling plan that is random and representative, collects data, then analyses and reports with evidence.',
        'Evaluate the process too: was the sample fair, was the data collection consistent, and do the conclusions overreach the evidence? Statistical literacy means asking those questions.',
      ],
      illustrations: [
        {
          brief: 'The investigation cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose a question' },
              { text: 'Design fair sampling' },
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
        { id: 'Y9-MAT-ST04-q1', type: 'mcq', prompt: 'The first step of an investigation is…', options: ['Posing a question', 'Drawing the graph', 'Writing the report'], answer: 'Posing a question', difficulty: 1 },
        { id: 'Y9-MAT-ST04-q2', type: 'mcq', prompt: 'A representative sample…', options: ['Reflects the population fairly', 'Only picks friends', 'Ignores everyone'], answer: 'Reflects the population fairly', difficulty: 1 },
        { id: 'Y9-MAT-ST04-q3', type: 'mcq', prompt: 'Evaluating an investigation means…', options: ['Checking the sample and conclusions', 'Making it prettier', 'Forgetting the data'], answer: 'Checking the sample and conclusions', difficulty: 2 },
        { id: 'Y9-MAT-ST04-q4', type: 'mcq', prompt: 'Random sampling reduces…', options: ['Bias', 'The population', 'The number of questions'], answer: 'Bias', difficulty: 2 },
        { id: 'Y9-MAT-ST04-q5', type: 'mcq', prompt: 'Conclusions should…', options: ['Match the evidence, no more', 'Exaggerate wildly', 'Ignore the data'], answer: 'Match the evidence, no more', difficulty: 1 },
        { id: 'Y9-MAT-ST04-q6', type: 'mcq', prompt: 'Statistical literacy includes…', options: ['Questioning how data was collected', 'Believing all graphs', 'Never asking why'], answer: 'Questioning how data was collected', difficulty: 2 },
      ],
    },
  },
  // ---------- Probability (2 CDs) ----------
  {
    id: 'Y9-MAT-PR01',
    title: 'Multi-step chance experiments & simulations',
    year: '9',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M9P01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Multi-step experiments (tossing two coins, drawing then replacing a marble) have sample spaces of combined outcomes. Two coins give {HH, HT, TH, TT} — four equally likely outcomes.',
        'Simulations model the experiment many times, and the relative frequency approaches the theoretical probability as trials increase. Compare the two to check your model.',
      ],
      illustrations: [
        {
          brief: 'A 2 by 2 grid of two-coin outcomes',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 2, label: '4 outcomes' },
        },
        {
          brief: 'A pie fraction showing P(HH) = 1/4',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 4, filled: 1, label: 'P(HH) = 1/4' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-PR01-q1', type: 'short', prompt: 'Tossing two coins: how many equally likely outcomes?', answer: '4', difficulty: 1 },
        { id: 'Y9-MAT-PR01-q2', type: 'mcq', prompt: 'P(HH) when tossing two fair coins is…', options: ['1/4', '1/2', '1/3'], answer: '1/4', difficulty: 1 },
        { id: 'Y9-MAT-PR01-q3', type: 'mcq', prompt: 'The sample space for two coins is…', options: ['{HH, HT, TH, TT}', '{H, T}', '{HH, TT}'], answer: '{HH, HT, TH, TT}', difficulty: 1 },
        { id: 'Y9-MAT-PR01-q4', type: 'mcq', prompt: 'With many simulation trials, relative frequency tends to…', options: ['Approach the theoretical probability', 'Move far away', 'Stay at zero'], answer: 'Approach the theoretical probability', difficulty: 2 },
        { id: 'Y9-MAT-PR01-q5', type: 'short', prompt: 'P(at least one head) when tossing two coins (answer as a fraction)', answer: '3/4', difficulty: 2 },
        { id: 'Y9-MAT-PR01-q6', type: 'mcq', prompt: 'The purpose of a simulation here is to…', options: ['Verify the theoretical probability', 'Replace all maths', 'Guess randomly'], answer: 'Verify the theoretical probability', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y9-MAT-PR02',
    title: 'Theoretical & experimental probability',
    year: '9',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M9P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Theoretical probability is calculated from the sample space (favourable ÷ total). Experimental (empirical) probability comes from actually running trials — favourable results ÷ trials.',
        'For large numbers of trials the two converge, but for small samples they can differ. The law of large numbers is the bridge between them.',
      ],
      illustrations: [
        {
          brief: 'Predicted vs observed for 100 die rolls of P(6)',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Predicted 1/6', value: 16.7 }, { label: 'Observed (100 rolls)', value: 18 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y9-MAT-PR02-q1', type: 'mcq', prompt: 'Theoretical probability is found by…', options: ['Counting favourable ÷ total outcomes', 'Guessing', 'Running one trial'], answer: 'Counting favourable ÷ total outcomes', difficulty: 1 },
        { id: 'Y9-MAT-PR02-q2', type: 'mcq', prompt: 'Experimental probability is found by…', options: ['Running trials and counting results', 'Only theorising', 'Never collecting data'], answer: 'Running trials and counting results', difficulty: 1 },
        { id: 'Y9-MAT-PR02-q3', type: 'short', prompt: 'A die rolled 60 times lands on 6 eleven times. What is the experimental P(6)? (answer as a fraction)', answer: '11/60', difficulty: 2 },
        { id: 'Y9-MAT-PR02-q4', type: 'mcq', prompt: 'With more trials, experimental probability tends to…', options: ['Approach the theoretical value', 'Diverge', 'Become negative'], answer: 'Approach the theoretical value', difficulty: 2 },
        { id: 'Y9-MAT-PR02-q5', type: 'mcq', prompt: 'The bridge between theoretical and experimental probability is…', options: ['The law of large numbers', 'A lucky guess', 'Rounding'], answer: 'The law of large numbers', difficulty: 2 },
        { id: 'Y9-MAT-PR02-q6', type: 'mcq', prompt: 'Theoretical P(even) on a fair die is…', options: ['1/2', '1/3', '1/6'], answer: '1/2', difficulty: 1 },
      ],
    },
  },
];
