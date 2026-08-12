import type { Topic } from '../../types/curriculum';

/**
 * Year 10 Mathematics, full topic bank.
 * Source of truth for scope: docs/content/year-7-10/mathematics.md (AC v9.0).
 * Every topic carries its AC9M10xxx content-description code and a rendered
 * `diagram` per illustration slot (see src/components/illustrations/diagrams.tsx)
 * instead of a placeholder. Each assignment carries 6 questions (nominal pace)
 * / 4 (compact pace), per docs/specs/adaptive-pacing.md's depth-compression model.
 */
export const YEAR10_MATHEMATICS_TOPICS: Topic[] = [
  // ---------- Number (1 CD) ----------
  {
    id: 'Y10-MAT-NN01',
    title: 'Approximations of real numbers',
    year: '10',
    subject: 'mathematics',
    strand: 'Number',
    cd: [{ ac: 'AC9M10N01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'When you round or truncate a real number before calculating, the answer drifts from the exact result. Using π ≈ 3.14 across many steps makes the error accumulate, a real concern in engineering and finance.',
        'Compare the exact representation with the approximation to see the impact. Knowing when accuracy matters (bank balances, medical doses) versus when it does not (a rough measurement) is part of numerate judgement.',
      ],
      illustrations: [
        {
          brief: 'A number line showing π ≈ 3.14 against its exact value',
          ready: true,
          diagram: { kind: 'number-line', min: 3, max: 3.2, marks: [{ value: 3.14, label: '3.14 approx' }, { value: 3.14159, label: 'π exact' }] },
        },
        {
          brief: 'Bars showing a one-step error growing over many steps',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '1 step', value: 1 }, { label: '5 steps', value: 5 }, { label: '20 steps', value: 20 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-NN01-q1', type: 'mcq', prompt: 'Using 3.14 instead of π is an example of…', options: ['Approximation', 'Exact representation', 'Truncation of an integer'], answer: 'Approximation', difficulty: 1 },
        { id: 'Y10-MAT-NN01-q2', type: 'mcq', prompt: 'Repeatedly rounding before calculating tends to…', options: ['Build up error over time', 'Always make the answer exact', 'Remove all error'], answer: 'Build up error over time', difficulty: 1 },
        { id: 'Y10-MAT-NN01-q3', type: 'mcq', prompt: 'Truncating means…', options: ['Cutting digits off without rounding', 'Rounding to the nearest whole', 'Doubling the number'], answer: 'Cutting digits off without rounding', difficulty: 2 },
        { id: 'Y10-MAT-NN01-q4', type: 'mcq', prompt: 'Where does accuracy matter most?', options: ['Medical doses and bank balances', 'Estimating a crowd size', 'Guessing a distance'], answer: 'Medical doses and bank balances', difficulty: 1 },
        { id: 'Y10-MAT-NN01-q5', type: 'mcq', prompt: '3.14159 rounded to 2 decimal places is…', options: ['3.14', '3.15', '3.10'], answer: '3.14', difficulty: 2 },
        { id: 'Y10-MAT-NN01-q6', type: 'mcq', prompt: 'Comparing an approximation with the exact value tells you…', options: ['The size of the error', 'The exact answer', 'Nothing useful'], answer: 'The size of the error', difficulty: 2 },
      ],
    },
  },
  // ---------- Algebra (5 CDs) ----------
  {
    id: 'Y10-MAT-AL01',
    title: 'Algebraic techniques, expansion, factorisation & equations',
    year: '10',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M10A01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Factorising is expansion in reverse. x² + 5x + 6 = (x + 2)(x + 3), and completing the square rewrites a quadratic as a perfect square plus a constant, the completed square form (x + h)² + k.',
        'Apply the exponent laws to algebraic terms with positive and negative integer exponents, then solve equations algebraically.',
      ],
      illustrations: [
        {
          brief: 'A balance scale weighing x² + 5x + 6 against (x + 2)(x + 3)',
          ready: true,
          diagram: { kind: 'balance-scale', left: 'x² + 5x + 6', right: '(x + 2)(x + 3)', balanced: true },
        },
        {
          brief: 'A flowchart of completing the square',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'x² + 6x + 2' },
              { text: 'Halve 6 → 3, square → 9' },
              { text: '(x + 3)² − 9 + 2' },
              { text: '(x + 3)² − 7' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-AL01-q1', type: 'mcq', prompt: 'x² + 5x + 6 factorises to…', options: ['(x + 2)(x + 3)', '(x + 1)(x + 6)', '(x + 2)(x + 2)'], answer: '(x + 2)(x + 3)', difficulty: 2 },
        { id: 'Y10-MAT-AL01-q2', type: 'mcq', prompt: 'The completed square form of a quadratic is…', options: ['(x + h)² + k', 'ax² + bx + c', 'x(x + 1)'], answer: '(x + h)² + k', difficulty: 2 },
        { id: 'Y10-MAT-AL01-q3', type: 'short', prompt: 'x³ × x⁻² simplifies to what power of x? (answer x^n)', answer: 'x^1', difficulty: 2 },
        { id: 'Y10-MAT-AL01-q4', type: 'mcq', prompt: 'Factorising is the reverse of…', options: ['Expanding', 'Rounding', 'Measuring'], answer: 'Expanding', difficulty: 1 },
        { id: 'Y10-MAT-AL01-q5', type: 'mcq', prompt: 'To complete the square on x² + 6x you halve 6, square it, and…', options: ['Add 9 (then balance by subtracting)', 'Just add 9', 'Ignore it'], answer: 'Add 9 (then balance by subtracting)', difficulty: 3 },
        { id: 'Y10-MAT-AL01-q6', type: 'mcq', prompt: 'x⁴ ÷ x⁴ equals…', options: ['1', 'x', '0'], answer: '1', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-MAT-AL02',
    title: 'Linear inequalities & simultaneous equations',
    year: '10',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M10A02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A linear inequality in 2 variables, like 2x + 3y < 24, shades a whole region of the Cartesian plane. Test a point (like (0, 0)) to decide which side to shade.',
        'Simultaneous equations share a solution that satisfies both at once. Graphically, the solution is the point where the two lines cross, the break-even point in a business problem.',
      ],
      illustrations: [
        {
          brief: 'Two lines crossing at (2, 4) on a quadrant grid',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 6,
            points: [
              { x: 0, y: 0, label: 'y = 2x' },
              { x: 2, y: 4, label: 'Intersection (2,4)' },
              { x: 5, y: 3, label: 'y = 8 − x' },
            ],
          },
        },
        {
          brief: 'A bar showing the break-even point for two quotes',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '$', items: [{ label: 'Quote A', value: 4 }, { label: 'Quote B', value: 4 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-AL02-q1', type: 'mcq', prompt: 'The solution of simultaneous linear equations is where…', options: ['The two lines cross', 'The lines are parallel', 'The graph starts'], answer: 'The two lines cross', difficulty: 1 },
        { id: 'Y10-MAT-AL02-q2', type: 'mcq', prompt: 'To check which side of 2x + 3y < 24 to shade, you test…', options: ['A point like (0, 0)', 'The letter of the graph', 'Nothing at all'], answer: 'A point like (0, 0)', difficulty: 2 },
        { id: 'Y10-MAT-AL02-q3', type: 'mcq', prompt: 'Does the point (3, 5) satisfy 2y < x²?', options: ['Yes, 10 < 9 is false', 'No, 10 < 9 is false', 'Cannot be tested'], answer: 'No, 10 < 9 is false', difficulty: 3 },
        { id: 'Y10-MAT-AL02-q4', type: 'mcq', prompt: 'The "break-even point" in a business problem is where…', options: ['Costs equal revenue', 'Revenue is zero', 'Costs double'], answer: 'Costs equal revenue', difficulty: 2 },
        { id: 'Y10-MAT-AL02-q5', type: 'mcq', prompt: 'An inequality 12m + 21s ≤ 150 with m and s whole numbers has solutions that are…', options: ['Whole number pairs', 'Only m = 0', 'No solutions'], answer: 'Whole number pairs', difficulty: 2 },
        { id: 'Y10-MAT-AL02-q6', type: 'mcq', prompt: 'If y = 2x and y = 8 − x, the intersection has…', options: ['x = 2, y = 4', 'x = 4, y = 8', 'x = 0, y = 8'], answer: 'x = 2, y = 4', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-AL03',
    title: 'Exponential relations & equations',
    year: '10',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M10A03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'In an exponential relation the dependent variable multiplies by a constant ratio each step, doubling, halving, growing 10% at a time. A table of values with a constant ratio reveals it instantly.',
        'The graph rises or falls steeply and the algebraic form is y = a × bˣ. Solve related equations by rewriting with the same base where possible, using digital tools when not.',
      ],
      illustrations: [
        {
          brief: 'Points of y = 2ˣ rising steeply',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 10,
            points: [
              { x: 0, y: 1, label: '(0,1)' },
              { x: 1, y: 2, label: '(1,2)' },
              { x: 2, y: 4, label: '(2,4)' },
              { x: 3, y: 8, label: '(3,8)' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-AL03-q1', type: 'mcq', prompt: 'In a table, a constant ratio between consecutive values signals…', options: ['An exponential relation', 'A linear relation', 'No relation'], answer: 'An exponential relation', difficulty: 2 },
        { id: 'Y10-MAT-AL03-q2', type: 'short', prompt: 'For y = 2ˣ, what is y when x = 4?', answer: '16', difficulty: 1 },
        { id: 'Y10-MAT-AL03-q3', type: 'mcq', prompt: 'A population doubling each year follows…', options: ['Exponential growth', 'Linear growth', 'No change'], answer: 'Exponential growth', difficulty: 1 },
        { id: 'Y10-MAT-AL03-q4', type: 'mcq', prompt: '2ˣ = 8. What is x?', answer: '3', difficulty: 2 },
        { id: 'Y10-MAT-AL03-q5', type: 'mcq', prompt: 'y = a × bˣ is the general form of…', options: ['An exponential function', 'A straight line', 'A circle'], answer: 'An exponential function', difficulty: 1 },
        { id: 'Y10-MAT-AL03-q6', type: 'mcq', prompt: 'In exponential decay, the values…', options: ['Multiply by a ratio less than 1', 'Double each step', 'Stay constant'], answer: 'Multiply by a ratio less than 1', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-AL04',
    title: 'Modelling growth & decay',
    year: '10',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M10A04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Choose the right model for change: linear functions have constant first differences, quadratics have constant second differences, and exponentials have a constant ratio. Growth and decay situations, compound interest, radioactive decay, populations, are exponential.',
        'Doubling time and half-life describe exponential change: how long to double, or to halve. Model the situation, interpret the solution, evaluate the model and report assumptions.',
      ],
      illustrations: [
        {
          brief: 'Bars comparing linear and exponential growth over time',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Linear (year 4)', value: 5 }, { label: 'Exponential (year 4)', value: 16 }] },
        },
        {
          brief: 'The growth-modelling cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Identify the model type' },
              { text: 'Write the equation' },
              { text: 'Solve numerically or graphically' },
              { text: 'Evaluate & report' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-AL04-q1', type: 'mcq', prompt: 'Constant first differences signal…', options: ['Linear functions', 'Quadratic functions', 'Exponential functions'], answer: 'Linear functions', difficulty: 2 },
        { id: 'Y10-MAT-AL04-q2', type: 'mcq', prompt: 'Constant second differences signal…', options: ['Quadratic functions', 'Linear functions', 'Exponential functions'], answer: 'Quadratic functions', difficulty: 2 },
        { id: 'Y10-MAT-AL04-q3', type: 'mcq', prompt: 'Half-life is the time for a quantity to…', options: ['Halve', 'Double', 'Quadruple'], answer: 'Halve', difficulty: 1 },
        { id: 'Y10-MAT-AL04-q4', type: 'mcq', prompt: 'Compound interest is best modelled by…', options: ['Exponential growth', 'A straight line', 'A circle'], answer: 'Exponential growth', difficulty: 2 },
        { id: 'Y10-MAT-AL04-q5', type: 'short', prompt: 'A substance halves every 5 years. After one half-life, what fraction remains? (answer as a fraction)', answer: '1/2', difficulty: 1 },
        { id: 'Y10-MAT-AL04-q6', type: 'mcq', prompt: 'The final step of modelling growth is to…', options: ['Evaluate the model and report', 'Stop at the equation', 'Ignore the answer'], answer: 'Evaluate the model and report', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-MAT-AL05',
    title: 'Functions, relations & digital experimentation',
    year: '10',
    subject: 'mathematics',
    strand: 'Algebra',
    cd: [{ ac: 'AC9M10A05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Digital tools let you experiment with functions: zoom in to find where two graphs cross (like x² = 2ˣ), apply transformations, and locate axis intercepts with a bisection algorithm.',
        'Make and test conjectures, then generalise the patterns you see. This experimental loop, hypothesise, test, refine, generalise, is how mathematicians and machine learners work.',
      ],
      illustrations: [
        {
          brief: 'Points where y = x² might meet y = 2ˣ',
          ready: true,
          diagram: {
            kind: 'quadrant-grid',
            range: 10,
            points: [
              { x: 2, y: 4, label: 'x² = 2ˣ at (2,4)' },
              { x: 4, y: 16, label: '(4,16)' },
            ],
          },
        },
        {
          brief: 'A flowchart of the experimental loop',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Make a conjecture' },
              { text: 'Test with digital tools' },
              { text: 'Refine the idea' },
              { text: 'Generalise the pattern' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-AL05-q1', type: 'mcq', prompt: 'Zooming a graph to refine a crossing point is an example of…', options: ['Using digital tools to experiment', 'Rounding an integer', 'Measuring a length'], answer: 'Using digital tools to experiment', difficulty: 1 },
        { id: 'Y10-MAT-AL05-q2', type: 'mcq', prompt: 'A bisection algorithm is used to locate…', options: ['Approximate intercepts', 'Exact circle areas', 'Random colours'], answer: 'Approximate intercepts', difficulty: 2 },
        { id: 'Y10-MAT-AL05-q3', type: 'mcq', prompt: 'A conjecture is…', options: ['A testable guess about a pattern', 'The final answer', 'A graph type'], answer: 'A testable guess about a pattern', difficulty: 1 },
        { id: 'Y10-MAT-AL05-q4', type: 'mcq', prompt: 'x² = 2ˣ is satisfied when…', options: ['x = 2 and x = 4', 'Only x = 0', 'No values'], answer: 'x = 2 and x = 4', difficulty: 2 },
        { id: 'Y10-MAT-AL05-q5', type: 'mcq', prompt: 'Generalising a pattern means…', options: ['Stating the rule that fits many cases', 'Forgetting the data', 'Drawing one example'], answer: 'Stating the rule that fits many cases', difficulty: 2 },
        { id: 'Y10-MAT-AL05-q6', type: 'mcq', prompt: 'Functions underpin machine learning because they…', options: ['Transform data and define models', 'Draw only circles', 'Replace all numbers'], answer: 'Transform data and define models', difficulty: 2 },
      ],
    },
  },
  // ---------- Measurement (5 CDs) ----------
  {
    id: 'Y10-MAT-ME01',
    title: 'Surface area & volume of composite objects',
    year: '10',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M10M01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A composite object is built from simpler solids, prisms, cylinders, spheres and pyramids. Its volume is the sum of its parts; its surface area must only count the faces actually visible on the outside.',
        'Estimate first, then calculate precisely. Real decisions, how much rainwater a roof can save, whether to hire extra freezer space, come down to these sums.',
      ],
      illustrations: [
        {
          brief: 'Bars showing the parts of a composite volume adding up',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'cm³', items: [{ label: 'Prism', value: 40 }, { label: 'Cylinder', value: 25 }, { label: 'Total', value: 65 }] },
        },
        {
          brief: 'The rectangular base of one prism part',
          ready: true,
          diagram: { kind: 'rectangle-area', length: 8, width: 5, unit: 'cm' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ME01-q1', type: 'mcq', prompt: 'The volume of a composite object is…', options: ['The sum of its parts’ volumes', 'Only the biggest part', 'A random guess'], answer: 'The sum of its parts’ volumes', difficulty: 1 },
        { id: 'Y10-MAT-ME01-q2', type: 'mcq', prompt: 'For surface area, joined faces that are hidden are…', options: ['Not counted', 'Counted twice', 'Doubled'], answer: 'Not counted', difficulty: 2 },
        { id: 'Y10-MAT-ME01-q3', type: 'short', prompt: 'A prism of 40 cm³ sits on a cylinder of 25 cm³. What is the total volume?', answer: '65', difficulty: 1 },
        { id: 'Y10-MAT-ME01-q4', type: 'mcq', prompt: 'Estimating surface area first is useful because it…', options: ['Checks your exact answer is reasonable', 'Replaces all maths', 'Is always exact'], answer: 'Checks your exact answer is reasonable', difficulty: 1 },
        { id: 'Y10-MAT-ME01-q5', type: 'mcq', prompt: 'A cylinder’s volume uses the formula…', options: ['V = πr²h', 'V = 2πr', 'V = πd'], answer: 'V = πr²h', difficulty: 1 },
        { id: 'Y10-MAT-ME01-q6', type: 'mcq', prompt: 'Choosing a rainwater tank’s size uses…', options: ['Volume calculations', 'Only perimeter', 'Colour choices'], answer: 'Volume calculations', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ME02',
    title: 'Logarithmic scales',
    year: '10',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M10M02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A logarithmic scale is calibrated in orders of magnitude, each equal step multiplies the quantity by 10 (or another factor) instead of adding a fixed amount. It tames data that spans huge ranges.',
        'The Richter, decibel and pH scales are logarithmic: an earthquake of magnitude 7 is 10 times the amplitude of magnitude 6. Reading such graphs requires knowing the scale is not linear.',
      ],
      illustrations: [
        {
          brief: 'A number line showing a log scale step from 1 to 10 to 100',
          ready: true,
          diagram: { kind: 'number-line', min: 0, max: 3, marks: [{ value: 0, label: '10⁰ = 1' }, { value: 1, label: '10¹ = 10' }, { value: 2, label: '10² = 100' }, { value: 3, label: '10³ = 1000' }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ME02-q1', type: 'mcq', prompt: 'On a logarithmic scale, equal steps represent…', options: ['Multiplication by a fixed factor', 'Adding a fixed amount', 'No change'], answer: 'Multiplication by a fixed factor', difficulty: 2 },
        { id: 'Y10-MAT-ME02-q2', type: 'mcq', prompt: 'The Richter scale is…', options: ['Logarithmic', 'Linear', 'Random'], answer: 'Logarithmic', difficulty: 1 },
        { id: 'Y10-MAT-ME02-q3', type: 'mcq', prompt: 'A magnitude 7 quake has amplitude how many times a magnitude 6 quake?', options: ['10 times', '7 times', '1 time'], answer: '10 times', difficulty: 2 },
        { id: 'Y10-MAT-ME02-q4', type: 'mcq', prompt: 'Logarithmic scales are most useful for data that…', options: ['Spans a huge range of values', 'Only has small values', 'Is always zero'], answer: 'Spans a huge range of values', difficulty: 1 },
        { id: 'Y10-MAT-ME02-q5', type: 'mcq', prompt: 'Which uses a logarithmic scale?', options: ['Decibel scale', 'A ruler in cm', 'Counting eggs'], answer: 'Decibel scale', difficulty: 1 },
        { id: 'Y10-MAT-ME02-q6', type: 'mcq', prompt: 'The pH scale measures acidity on a…', options: ['Logarithmic scale', 'Linear scale', 'Colour scale'], answer: 'Logarithmic scale', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ME03',
    title: 'Pythagoras & trigonometry in 3D practical problems',
    year: '10',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M10M03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Practical problems ask you to decompose a 3D situation into 2D right-angled triangles. The diagonal of a box uses Pythagoras in two stages, and bearings use trigonometry with angles from north.',
        'Angles of elevation and depression measure up or down from the horizontal. A clinometer measures the elevation, and trigonometry turns it into a height.',
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
          brief: 'Bars showing the 3-4-5 triangle sides',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Adjacent', value: 3 }, { label: 'Opposite', value: 4 }, { label: 'Hypotenuse', value: 5 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ME03-q1', type: 'mcq', prompt: 'Angle of elevation is measured…', options: ['Up from the horizontal', 'Down from the horizontal', 'From the side'], answer: 'Up from the horizontal', difficulty: 1 },
        { id: 'Y10-MAT-ME03-q2', type: 'mcq', prompt: 'Angle of depression is measured…', options: ['Down from the horizontal', 'Up from the horizontal', 'From the ground'], answer: 'Down from the horizontal', difficulty: 1 },
        { id: 'Y10-MAT-ME03-q3', type: 'short', prompt: 'A right triangle has legs 6 and 8. What is the hypotenuse?', answer: '10', difficulty: 1 },
        { id: 'Y10-MAT-ME03-q4', type: 'mcq', prompt: 'A 3D diagonal is found by…', options: ['Decomposing into 2D right triangles', 'Adding all sides once', 'Drawing a circle'], answer: 'Decomposing into 2D right triangles', difficulty: 2 },
        { id: 'Y10-MAT-ME03-q5', type: 'mcq', prompt: 'Bearings are measured…', options: ['From north, clockwise', 'From the equator', 'Randomly'], answer: 'From north, clockwise', difficulty: 2 },
        { id: 'Y10-MAT-ME03-q6', type: 'mcq', prompt: 'A clinometer measures…', options: ['Angles of inclination', 'Lengths only', 'Weights'], answer: 'Angles of inclination', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ME04',
    title: 'Measurement errors & accuracy',
    year: '10',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M10M04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Every measurement carries error, a ruler’s limits, a sensor’s tolerance. In research, compounded errors can produce biased findings, and in finance, truncating cents across millions of customers adds up.',
        'Analysing the instrument and method is part of judging the accuracy of a result. When a number matters, ask how it was measured and how big the error could be.',
      ],
      illustrations: [
        {
          brief: 'A number line showing a measured value with error bars',
          ready: true,
          diagram: { kind: 'number-line', min: 9, max: 11, marks: [{ value: 10, label: 'measured 10 ± 1' }] },
        },
        {
          brief: 'Bars showing error growing with each compounding step',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: '1 step', value: 1 }, { label: '1000 steps', value: 1000 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ME04-q1', type: 'mcq', prompt: 'Measurement errors can lead to…', options: ['Biased findings', 'Perfect results', 'No results at all'], answer: 'Biased findings', difficulty: 1 },
        { id: 'Y10-MAT-ME04-q2', type: 'mcq', prompt: 'Compounding errors happen when…', options: ['Errors build up over repeated steps', 'Errors cancel perfectly', 'No measurement occurs'], answer: 'Errors build up over repeated steps', difficulty: 2 },
        { id: 'Y10-MAT-ME04-q3', type: 'mcq', prompt: 'To judge a result’s accuracy you should…', options: ['Analyse the measuring instrument and method', 'Ignore how it was measured', 'Guess'], answer: 'Analyse the measuring instrument and method', difficulty: 1 },
        { id: 'Y10-MAT-ME04-q4', type: 'mcq', prompt: 'Truncating cents across millions of customers…', options: ['Adds up to real differences', 'Changes nothing', 'Is impossible'], answer: 'Adds up to real differences', difficulty: 2 },
        { id: 'Y10-MAT-ME04-q5', type: 'mcq', prompt: 'Sensor limitations in autonomous vehicles relate to…', options: ['Measurement error', 'Colour choice', 'Fuel type'], answer: 'Measurement error', difficulty: 1 },
        { id: 'Y10-MAT-ME04-q6', type: 'mcq', prompt: 'A result measured as 10 ± 1 is probably between…', options: ['9 and 11', '1 and 10', '0 and 1'], answer: '9 and 11', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ME05',
    title: 'Modelling proportion & scaling',
    year: '10',
    subject: 'mathematics',
    strand: 'Measurement',
    cd: [{ ac: 'AC9M10M05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Proportion and scaling solve practical problems: reading a plan or elevation to make building decisions, or estimating a 3D print’s scale factor by measuring one dimension against a known real value.',
        'The modelling cycle applies: formulate the problem, interpret the solution in the situation, evaluate and modify the model, then report assumptions and findings.',
      ],
      illustrations: [
        {
          brief: 'A bar comparing a plan length with the actual length',
          ready: true,
          diagram: { kind: 'bar-compare', unit: 'm', items: [{ label: 'Plan', value: 1 }, { label: 'Actual', value: 100 }] },
        },
        {
          brief: 'The scaling-modelling cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Formulate the scaling problem' },
              { text: 'Find the scale factor' },
              { text: 'Interpret in the situation' },
              { text: 'Evaluate & report' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ME05-q1', type: 'short', prompt: 'A plan uses scale 1 : 100. A wall is 4 cm on the plan. What is the actual length in metres?', answer: '4', difficulty: 2 },
        { id: 'Y10-MAT-ME05-q2', type: 'mcq', prompt: 'To estimate an object’s scale you…', options: ['Measure one dimension and compare it to the known real value', 'Guess the weight', 'Count its colours'], answer: 'Measure one dimension and compare it to the known real value', difficulty: 1 },
        { id: 'Y10-MAT-ME05-q3', type: 'mcq', prompt: 'Evaluating a scaling model means…', options: ['Checking it fits the real situation', 'Deleting all measurements', 'Making it bigger forever'], answer: 'Checking it fits the real situation', difficulty: 2 },
        { id: 'Y10-MAT-ME05-q4', type: 'short', prompt: 'A real car is 4 m long and the model is 0.2 m. What is the scale factor?', answer: '20', difficulty: 2 },
        { id: 'Y10-MAT-ME05-q5', type: 'mcq', prompt: 'Building codes for escalators are applied using…', options: ['Scales and proportions', 'Colour schemes', 'Random choices'], answer: 'Scales and proportions', difficulty: 2 },
        { id: 'Y10-MAT-ME05-q6', type: 'mcq', prompt: 'Reporting assumptions and findings is…', options: ['Part of the modelling process', 'Optional and skipped', 'Impossible'], answer: 'Part of the modelling process', difficulty: 1 },
      ],
    },
  },
  // ---------- Space (3 CDs) ----------
  {
    id: 'Y10-MAT-SP01',
    title: 'Deductive reasoning & geometric proofs',
    year: '10',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M10SP01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A proof uses a sequence of logically connected statements to show something is always true, unlike a practical demonstration, which just shows one example. Placing two triangles on top of each other is a demonstration; a congruence test is a proof.',
        'From proven theorems you deduce new results: the base angles of an isosceles triangle are equal, the angle sum of a triangle is 180°. Each step follows from the one before.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of a proof as connected steps',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'State what is given' },
              { text: 'Apply a theorem' },
              { text: 'Logical next step' },
              { text: 'Conclusion (therefore)' },
            ],
          },
        },
        {
          brief: 'Two congruent triangles as an icon scene',
          ready: true,
          diagram: { kind: 'icon-scene', items: [{ icon: 'triangle-shape', label: 'ABC' }, { icon: 'triangle-shape', label: 'DEF' }], caption: 'Congruence proven by tests, not by eye' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-SP01-q1', type: 'mcq', prompt: 'A proof is different from a demonstration because a proof…', options: ['Shows it is always true', 'Shows one example only', 'Needs no reasoning'], answer: 'Shows it is always true', difficulty: 2 },
        { id: 'Y10-MAT-SP01-q2', type: 'mcq', prompt: 'Proving triangles congruent requires…', options: ['A congruence test', 'Stacking them on top of each other', 'Just looking closely'], answer: 'A congruence test', difficulty: 2 },
        { id: 'Y10-MAT-SP01-q3', type: 'mcq', prompt: 'The base angles of an isosceles triangle are…', options: ['Equal', 'Always different', 'Always 90°'], answer: 'Equal', difficulty: 1 },
        { id: 'Y10-MAT-SP01-q4', type: 'mcq', prompt: 'A proof is best written as…', options: ['A sequence of logically connected statements', 'One unexplained claim', 'A picture alone'], answer: 'A sequence of logically connected statements', difficulty: 1 },
        { id: 'Y10-MAT-SP01-q5', type: 'mcq', prompt: 'Deducing a property from a theorem means…', options: ['Working it out from what is already proven', 'Guessing randomly', 'Measuring every time'], answer: 'Working it out from what is already proven', difficulty: 2 },
        { id: 'Y10-MAT-SP01-q6', type: 'mcq', prompt: 'The angle sum of a triangle is…', options: ['180°', '360°', '90°'], answer: '180°', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-MAT-SP02',
    title: 'Networks & connectedness',
    year: '10',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M10SP02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A network is a set of nodes (vertices) connected by edges (links), modelling real relationships, transport routes, social networks, electrical wiring, food webs. Interpreting a network means asking what the nodes and edges represent.',
        'Connectedness asks whether everything is linked and how. Euler’s formula V + E = F + 2 ties together the vertices, edges and faces of any network drawn on a flat surface.',
      ],
      illustrations: [
        {
          brief: 'A 2 by 2 dot array as simple network nodes',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 2, label: 'Network nodes' },
        },
        {
          brief: 'Bars showing vertices, edges and faces for Euler’s formula',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Faces', value: 4 }, { label: 'Vertices', value: 4 }, { label: 'Edges', value: 6 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-SP02-q1', type: 'mcq', prompt: 'In a network, the nodes are also called…', options: ['Vertices', 'Edges', 'Faces'], answer: 'Vertices', difficulty: 1 },
        { id: 'Y10-MAT-SP02-q2', type: 'mcq', prompt: 'The links between network nodes are called…', options: ['Edges', 'Vertices', 'Centres'], answer: 'Edges', difficulty: 1 },
        { id: 'Y10-MAT-SP02-q3', type: 'mcq', prompt: 'Euler’s formula states…', options: ['F + V = E + 2', 'F + E = V', 'F × V = E'], answer: 'F + V = E + 2', difficulty: 2 },
        { id: 'Y10-MAT-SP02-q4', type: 'mcq', prompt: 'A railway map is best modelled as…', options: ['A network', 'A single line', 'A circle'], answer: 'A network', difficulty: 1 },
        { id: 'Y10-MAT-SP02-q5', type: 'mcq', prompt: 'Connectedness describes…', options: ['Whether everything in the network is linked', 'The colour of the network', 'The page size'], answer: 'Whether everything in the network is linked', difficulty: 2 },
        { id: 'Y10-MAT-SP02-q6', type: 'mcq', prompt: 'A food web showing species relationships is…', options: ['A network diagram', 'A bar chart', 'A pie chart'], answer: 'A network diagram', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-SP03',
    title: 'Algorithms & digital tools for spatial problems',
    year: '10',
    subject: 'mathematics',
    strand: 'Space',
    cd: [{ ac: 'AC9M10SP03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Spatial problems, routing, coverage, designing a floor plan to reduce congestion, are solved by defining the problem, decomposing it, and applying algorithms with digital tools.',
        'Design, test and refine: build the algorithm (as a flowchart or pseudocode), validate it with test cases, and justify the solution in terms of the original problem.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of the algorithm design process',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Define the spatial problem' },
              { text: 'Decompose it' },
              { text: 'Design the algorithm' },
              { text: 'Test, refine & justify' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-SP03-q1', type: 'mcq', prompt: 'The first step of solving a spatial problem with an algorithm is…', options: ['Defining the problem', 'Printing a map', 'Guessing'], answer: 'Defining the problem', difficulty: 1 },
        { id: 'Y10-MAT-SP03-q2', type: 'mcq', prompt: 'Decomposing a problem means…', options: ['Breaking it into smaller parts', 'Making it bigger', 'Ignoring it'], answer: 'Breaking it into smaller parts', difficulty: 1 },
        { id: 'Y10-MAT-SP03-q3', type: 'mcq', prompt: 'Validating an algorithm means…', options: ['Testing it with test cases', 'Deleting it', 'Colouring it in'], answer: 'Testing it with test cases', difficulty: 2 },
        { id: 'Y10-MAT-SP03-q4', type: 'mcq', prompt: 'Choosing the most efficient route uses…', options: ['Network algorithms', 'Colour schemes', 'Coin flips'], answer: 'Network algorithms', difficulty: 2 },
        { id: 'Y10-MAT-SP03-q5', type: 'mcq', prompt: 'An algorithm can be described as…', options: ['Pseudocode or a flowchart', 'A random picture', 'A single number'], answer: 'Pseudocode or a flowchart', difficulty: 1 },
        { id: 'Y10-MAT-SP03-q6', type: 'mcq', prompt: 'The final step is to…', options: ['Communicate and justify the solution', 'Stop forever', 'Discard the work'], answer: 'Communicate and justify the solution', difficulty: 1 },
      ],
    },
  },
  // ---------- Statistics (5 CDs) ----------
  {
    id: 'Y10-MAT-ST01',
    title: 'Analysing statistical claims in the media',
    year: '10',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M10ST01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Statistical reports in the media deserve a critical eye: broken axes, scales that do not start at zero, and samples that do not represent the population can all mislead.',
        'Ask about the source and size of the sample, whether the data supports the claim, and the ethical implications of how the data is presented. Identifying bias is also central to fairness in machine learning.',
      ],
      illustrations: [
        {
          brief: 'A bar chart with a broken axis suggested by uneven bars',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Claim', value: 3 }, { label: 'Data', value: 3 }] },
        },
        {
          brief: 'A flowchart for evaluating a media claim',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Check the sample' },
              { text: 'Check the display' },
              { text: 'Check the claim' },
              { text: 'Judge bias & ethics' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ST01-q1', type: 'mcq', prompt: 'A graph with an axis that does not start at zero may be…', options: ['Misleading', 'Always accurate', 'Impossible'], answer: 'Misleading', difficulty: 1 },
        { id: 'Y10-MAT-ST01-q2', type: 'mcq', prompt: 'A claim backed by data from a non-representative sample is…', options: ['Weak, even if it sounds strong', 'Always trustworthy', 'Impossible to question'], answer: 'Weak, even if it sounds strong', difficulty: 2 },
        { id: 'Y10-MAT-ST01-q3', type: 'mcq', prompt: 'When reading a media stat you should first…', options: ['Check the sample source and size', 'Believe it', 'Skim past it'], answer: 'Check the sample source and size', difficulty: 1 },
        { id: 'Y10-MAT-ST01-q4', type: 'mcq', prompt: 'Bias in machine learning matters because it can…', options: ['Create unfair or inaccurate outcomes', 'Make models prettier', 'Speed up nothing'], answer: 'Create unfair or inaccurate outcomes', difficulty: 2 },
        { id: 'Y10-MAT-ST01-q5', type: 'mcq', prompt: 'Ethical reporting of infection statistics considers…', options: ['Rates per head of population', 'Only the raw total', 'Nothing at all'], answer: 'Rates per head of population', difficulty: 2 },
        { id: 'Y10-MAT-ST01-q6', type: 'mcq', prompt: 'Data sovereignty for Indigenous data means…', options: ['Communities control their own data', 'Anyone can reuse it', 'The data is secret'], answer: 'Communities control their own data', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ST02',
    title: 'Comparing continuous data distributions',
    year: '10',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M10ST02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Continuous data distributions are compared with box plots, histograms and dot plots, discussing centre, spread, shape and outliers. Box plots summarise a data set with the five-number summary.',
        'Discuss symmetry, skew and modality, is the distribution balanced, stretched to one side, or with more than one hump? Handling outliers thoughtfully is important in machine learning too.',
      ],
      illustrations: [
        {
          brief: 'A dot plot of a continuous data set',
          ready: true,
          diagram: { kind: 'dot-plot', values: [3, 4, 4, 5, 5, 5, 6, 6, 7, 9] },
        },
        {
          brief: 'Centres and spread of two data sets compared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '', items: [{ label: 'Set A median', value: 5 }, { label: 'Set B median', value: 7 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ST02-q1', type: 'mcq', prompt: 'A box plot is built from…', options: ['The five-number summary', 'The mean only', 'The mode only'], answer: 'The five-number summary', difficulty: 1 },
        { id: 'Y10-MAT-ST02-q2', type: 'mcq', prompt: '"Skew" describes…', options: ['Whether a distribution leans to one side', 'The colour of the graph', 'The sample size'], answer: 'Whether a distribution leans to one side', difficulty: 2 },
        { id: 'Y10-MAT-ST02-q3', type: 'mcq', prompt: 'A distribution with two humps is…', options: ['Bimodal', 'Unimodal', 'Symmetric'], answer: 'Bimodal', difficulty: 2 },
        { id: 'Y10-MAT-ST02-q4', type: 'short', prompt: 'For data 3, 4, 4, 5, 5, 5, 6, 6, 7, 9, what is the median?', answer: '5', difficulty: 2 },
        { id: 'Y10-MAT-ST02-q5', type: 'mcq', prompt: 'An outlier that is extreme can…', options: ['Unduly influence a model', 'Never matter', 'Only matter in drawings'], answer: 'Unduly influence a model', difficulty: 2 },
        { id: 'Y10-MAT-ST02-q6', type: 'mcq', prompt: 'Histograms, dot plots and box plots all display…', options: ['Distributions of numerical data', 'Only categories', 'Only colours'], answer: 'Distributions of numerical data', difficulty: 1 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ST03',
    title: 'Scatterplots & association between variables',
    year: '10',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M10ST03' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A scatterplot shows the association between two numerical variables: strength (tight clustering), direction (positive or negative) and linearity (how straight the pattern is).',
        'Association is not the same as cause and effect, ice cream sales and drownings both rise in summer, but one does not cause the other. Use a line of good fit by eye to gauge reliability of predictions.',
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
        { id: 'Y10-MAT-ST03-q1', type: 'mcq', prompt: 'A scatterplot shows the association between…', options: ['Two numerical variables', 'One category', 'A single value'], answer: 'Two numerical variables', difficulty: 1 },
        { id: 'Y10-MAT-ST03-q2', type: 'mcq', prompt: 'Association does NOT automatically mean…', options: ['Cause and effect', 'A pattern', 'Two variables'], answer: 'Cause and effect', difficulty: 1 },
        { id: 'Y10-MAT-ST03-q3', type: 'mcq', prompt: 'Tight clustering on a clear trend suggests…', options: ['A strong association', 'No association', 'A broken graph'], answer: 'A strong association', difficulty: 1 },
        { id: 'Y10-MAT-ST03-q4', type: 'mcq', prompt: 'A line of good fit helps you…', options: ['Judge reliability of predictions', 'Colour the graph', 'Count the points'], answer: 'Judge reliability of predictions', difficulty: 2 },
        { id: 'Y10-MAT-ST03-q5', type: 'mcq', prompt: 'A negative association means…', options: ['As one rises, the other falls', 'Both always rise', 'No pattern'], answer: 'As one rises, the other falls', difficulty: 1 },
        { id: 'Y10-MAT-ST03-q6', type: 'mcq', prompt: 'Ice cream sales and drownings both rise in summer, this shows…', options: ['Association, not causation', 'Clear causation', 'No relationship at all'], answer: 'Association, not causation', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ST04',
    title: 'Two-way tables & categorical relationships',
    year: '10',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M10ST04' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Two-way tables organise data by two categorical variables at once, like junior versus senior students and their survey responses. Percentages and proportions in the cells reveal patterns.',
        'Compare groups by looking at proportions rather than raw counts: if juniors answer "yes" in a higher proportion than seniors, there is an association between year level and response.',
      ],
      illustrations: [
        {
          brief: 'A 2 by 2 dot array as a two-way table grid',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 2, label: 'Two-way table' },
        },
        {
          brief: 'Proportions of two groups compared',
          ready: true,
          diagram: { kind: 'bar-compare', unit: '%', items: [{ label: 'Juniors yes', value: 60 }, { label: 'Seniors yes', value: 40 }] },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ST04-q1', type: 'mcq', prompt: 'A two-way table shows…', options: ['Two categorical variables at once', 'One number repeated', 'Only pictures'], answer: 'Two categorical variables at once', difficulty: 1 },
        { id: 'Y10-MAT-ST04-q2', type: 'mcq', prompt: 'To compare groups in a two-way table you use…', options: ['Percentages and proportions', 'Only raw totals', 'Nothing'], answer: 'Percentages and proportions', difficulty: 2 },
        { id: 'Y10-MAT-ST04-q3', type: 'mcq', prompt: 'If juniors say "yes" in a higher proportion than seniors, there is…', options: ['A possible association', 'Proof of causation', 'No data'], answer: 'A possible association', difficulty: 2 },
        { id: 'Y10-MAT-ST04-q4', type: 'mcq', prompt: 'A Likert scale response is…', options: ['Categorical (ordered)', 'Always continuous', 'A length in metres'], answer: 'Categorical (ordered)', difficulty: 2 },
        { id: 'Y10-MAT-ST04-q5', type: 'mcq', prompt: 'Recording a litter survey by day of week uses…', options: ['Two categorical variables', 'One continuous variable', 'No variables'], answer: 'Two categorical variables', difficulty: 1 },
        { id: 'Y10-MAT-ST04-q6', type: 'mcq', prompt: 'Reading a two-way table you should compare…', options: ['Proportions within groups', 'Only the biggest number', 'The table’s title'], answer: 'Proportions within groups', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-ST05',
    title: 'Statistical investigations with bivariate data',
    year: '10',
    subject: 'mathematics',
    strand: 'Statistics',
    cd: [{ ac: 'AC9M10ST05' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'A bivariate investigation collects two variables over time through observation, experiment or measurement, then graphs, interprets and analyses the data to answer the research question.',
        'Report findings with consideration of the limitations of any inferences, interpolation and extrapolation beyond the data, and the validity of the sample, bound what you can honestly claim.',
      ],
      illustrations: [
        {
          brief: 'The bivariate investigation cycle as a flowchart',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Pose the question' },
              { text: 'Collect bivariate data' },
              { text: 'Graph & analyse' },
              { text: 'Report with limitations' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-ST05-q1', type: 'mcq', prompt: 'A bivariate investigation collects…', options: ['Two variables together', 'One variable only', 'Only categories'], answer: 'Two variables together', difficulty: 1 },
        { id: 'Y10-MAT-ST05-q2', type: 'mcq', prompt: 'Extrapolating far beyond the data is…', options: ['Risky and should be flagged', 'Always exact', 'Impossible'], answer: 'Risky and should be flagged', difficulty: 2 },
        { id: 'Y10-MAT-ST05-q3', type: 'mcq', prompt: 'Interpolation means…', options: ['Estimating within the range of the data', 'Estimating outside the data', 'Ignoring the data'], answer: 'Estimating within the range of the data', difficulty: 2 },
        { id: 'Y10-MAT-ST05-q4', type: 'mcq', prompt: 'A good report states…', options: ['Findings and their limitations', 'Only one number', 'Nothing'], answer: 'Findings and their limitations', difficulty: 1 },
        { id: 'Y10-MAT-ST05-q5', type: 'mcq', prompt: 'Data validity depends on…', options: ['How the data was collected', 'The graph’s colour', 'The report’s length'], answer: 'How the data was collected', difficulty: 2 },
        { id: 'Y10-MAT-ST05-q6', type: 'mcq', prompt: 'Investigating "is there a relationship between vaccines and immunity" uses…', options: ['Bivariate data analysis', 'Only single numbers', 'Colour sorting'], answer: 'Bivariate data analysis', difficulty: 2 },
      ],
    },
  },
  // ---------- Probability (2 CDs) ----------
  {
    id: 'Y10-MAT-PR01',
    title: 'Conditional probability',
    year: '10',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M10P01' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Conditional probability is the chance of an event given that another has already happened, the language of "if … then", "given", "of", "knowing that". P(rain | cloudy) means the probability of rain given it is cloudy.',
        'Two-way tables and tree diagrams help you avoid the classic mistake of treating dependent events as independent. Conditional probability underpins natural language processing and recommendation systems.',
      ],
      illustrations: [
        {
          brief: 'Pie fractions showing P(rain given cloudy)',
          ready: true,
          diagram: { kind: 'pie-fraction', pies: [{ slices: 10, filled: 7, label: 'P(rain | cloudy) = 7/10' }] },
        },
        {
          brief: 'A 2 by 2 grid for a two-way table of events',
          ready: true,
          diagram: { kind: 'dot-array', rows: 2, cols: 2, label: 'Two-way table' },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-PR01-q1', type: 'mcq', prompt: 'Conditional probability is the chance of an event…', options: ['Given another event has happened', 'With no conditions', 'That never happens'], answer: 'Given another event has happened', difficulty: 1 },
        { id: 'Y10-MAT-PR01-q2', type: 'mcq', prompt: 'The phrase "P(rain given cloudy)" means…', options: ['Chance of rain when it is cloudy', 'Chance of clouds when it rains', 'No chance at all'], answer: 'Chance of rain when it is cloudy', difficulty: 1 },
        { id: 'Y10-MAT-PR01-q3', type: 'mcq', prompt: 'A common mistake is…', options: ['Treating dependent events as independent', 'Using two-way tables', 'Drawing tree diagrams'], answer: 'Treating dependent events as independent', difficulty: 2 },
        { id: 'Y10-MAT-PR01-q4', type: 'mcq', prompt: 'A tree diagram is useful for…', options: ['Representing conditional probabilities', 'Measuring length', 'Counting colours'], answer: 'Representing conditional probabilities', difficulty: 2 },
        { id: 'Y10-MAT-PR01-q5', type: 'mcq', prompt: 'Drawing without replacement makes events…', options: ['Dependent', 'Independent', 'Certain'], answer: 'Dependent', difficulty: 1 },
        { id: 'Y10-MAT-PR01-q6', type: 'mcq', prompt: 'Recommendation systems rely heavily on…', options: ['Conditional probability', 'Coin flips', 'Random guessing'], answer: 'Conditional probability', difficulty: 2 },
      ],
    },
  },
  {
    id: 'Y10-MAT-PR02',
    title: 'Simulations of conditional probability',
    year: '10',
    subject: 'mathematics',
    strand: 'Probability',
    cd: [{ ac: 'AC9M10P02' }],
    learn: {
      learnTimeMin: 12,
      body: [
        'Simulations model conditional probability, sampling with or without replacement, dependent events, and counter-intuitive puzzles like the three-door problem or the birthday problem.',
        'Run many trials with digital tools, interpret the relative frequencies, and recognise when differences between sampling methods become negligible with large samples. Simulations drive real decisions in insurance, queueing and supply.',
      ],
      illustrations: [
        {
          brief: 'A flowchart of running a probability simulation',
          ready: true,
          diagram: {
            kind: 'flowchart',
            steps: [
              { text: 'Model the events' },
              { text: 'Run many trials' },
              { text: 'Collect frequencies' },
              { text: 'Interpret results' },
            ],
          },
        },
      ],
    },
    assignment: {
      nominalCount: 6,
      compactCount: 4,
      questions: [
        { id: 'Y10-MAT-PR02-q1', type: 'mcq', prompt: 'The three-door problem is a famous example of…', options: ['Counter-intuitive conditional probability', 'Simple addition', 'A measurement error'], answer: 'Counter-intuitive conditional probability', difficulty: 2 },
        { id: 'Y10-MAT-PR02-q2', type: 'mcq', prompt: 'With large samples, sampling with or without replacement…', options: ['Makes little difference', 'Is always identical', 'Is impossible'], answer: 'Makes little difference', difficulty: 2 },
        { id: 'Y10-MAT-PR02-q3', type: 'mcq', prompt: 'Simulations are used in insurance to model…', options: ['Risk and decision-making', 'Colours', 'Page numbers'], answer: 'Risk and decision-making', difficulty: 1 },
        { id: 'Y10-MAT-PR02-q4', type: 'mcq', prompt: 'Dependent events change how probability is…', options: ['Calculated', 'Coloured', 'Skipped'], answer: 'Calculated', difficulty: 1 },
        { id: 'Y10-MAT-PR02-q5', type: 'mcq', prompt: 'The birthday problem shows that with about 23 people, two sharing a birthday is…', options: ['More likely than most expect', 'Impossible', 'Guaranteed'], answer: 'More likely than most expect', difficulty: 2 },
        { id: 'Y10-MAT-PR02-q6', type: 'mcq', prompt: 'After a simulation you should…', options: ['Interpret the results in context', 'Discard the data', 'Stop thinking'], answer: 'Interpret the results in context', difficulty: 1 },
      ],
    },
  },
];
