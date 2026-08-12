# Years 7–10 — Mathematics topics

Source of truth: Australian Curriculum v9.0, Mathematics F–10 (strands: Number N,
Algebra A, Measurement M, Space SP, Statistics ST, Probability P). Every content
description for Years 7–10 is covered below and mirrored in
`apps/mobile/src/data/year{7,8,9,10}/mathematics.ts`.

Per AC v9.0 the Year 7–10 band carries the following content descriptions:

| Year | Number | Algebra | Measurement | Space | Statistics | Probability | Total |
|------|-------:|--------:|------------:|------:|-----------:|------------:|------:|
| 7    | 9      | 6       | 6           | 4     | 3          | 2           | 30    |
| 8    | 5      | 4       | 7           | 4     | 4          | 3           | 27    |
| 9    | 4      | 4       | 5           | 4     | 4          | 2           | 23    |
| 10   | 1      | 5       | 5           | 3     | 5          | 2           | 21    |

Each topic below is one unit (**lesson + quick-check + assignment**) tagged with
its CD codes. Topic ids follow `Y<year>-MAT-<strand><NN>`. Every topic ships 6
assignment questions at nominal pace and 4 under compact pace (adaptive pacing,
see `docs/specs/adaptive-pacing.md`). Illustration slots render real vector
diagrams via `src/components/illustrations/diagrams.tsx` (no emoji placeholders).

---

## Year 7 — Mathematics topics

### Y7-MAT-NN01 · Squares, square roots & perfect squares
- CDs: `AC9M7N01`
- Learn: perfect squares and square roots as inverse operations; using squares
  and square roots to solve problems (e.g. side length from area).
- Illustrations: a 6 × 6 dot array; a number line showing √9, √49, √81.
- Assignment: 6/4 — compute squares and square roots, apply to area problems.

### Y7-MAT-NN02 · Prime factorisation & index notation
- CDs: `AC9M7N02`
- Learn: unique prime factorisation of natural numbers; exponent/index notation
  (2³ × 3 for 24); using exponents to keep factorisations compact.
- Illustrations: a factor-tree flowchart breaking 24 into 2³ × 3.
- Assignment: 6/4 — factorise, write in index notation, evaluate powers.

### Y7-MAT-NN03 · Place value & powers of ten
- CDs: `AC9M7N03`
- Learn: place value and the power-of-ten structure of the base-10 system
  (10⁰ = 1, 10¹ = 10, 10² = 100…); writing numbers as sums of place-value parts.
- Illustrations: a place-value house for 4 207 labelled with powers of ten.
- Assignment: 6/4 — expand numbers, convert powers of ten, identify digit values.

### Y7-MAT-NN04 · Equivalent rational numbers on the number line
- CDs: `AC9M7N04`
- Learn: fractions, decimals and percentages as equivalent representations of
  the same amount; ordering and comparing rational numbers on a number line.
- Illustrations: a number line with ¼ = 0.25, ½ = 0.5, ¾ = 0.75; equivalent pies.
- Assignment: 6/4 — convert between forms, order rational numbers.

### Y7-MAT-NN05 · Rounding & estimation
- CDs: `AC9M7N05`
- Learn: rounding to a chosen accuracy; estimating to check reasonableness of
  exact answers; choosing accuracy to suit the context.
- Illustrations: a number line showing 19.9 rounding to 20.
- Assignment: 6/4 — round, estimate products/sums, judge reasonableness.

### Y7-MAT-NN06 · Four operations with positive rational numbers
- CDs: `AC9M7N06`
- Learn: adding, subtracting, multiplying and dividing positive fractions and
  decimals; estimating first and choosing efficient strategies.
- Illustrations: a fraction bar for ½ + ⅓ = 5/6; pies for ½ and ⅓.
- Assignment: 6/4 — compute with fractions/decimals, solve word problems.

### Y7-MAT-NN07 · Integers — comparing, ordering, adding & subtracting
- CDs: `AC9M7N07`
- Learn: the integer number line; adding/subtracting integers including
  subtracting negatives; comparing and ordering negative numbers.
- Illustrations: a thermometer dipping below zero; a number line with −6 and 3.
- Assignment: 6/4 — add/subtract integers, order and compare negatives.

### Y7-MAT-NN08 · Ratios
- CDs: `AC9M7N08`
- Learn: ratios as comparisons of same-unit quantities; simplifying ratios;
  sharing a total in a given ratio.
- Illustrations: a bar comparison of a 2 : 3 red-to-blue ratio.
- Assignment: 6/4 — simplify ratios, solve proportional shares.

### Y7-MAT-NN09 · Modelling with rational numbers & percentages
- CDs: `AC9M7N09`
- Learn: mathematical modelling with rational numbers and percentages in
  practical and financial contexts; formulate, choose strategies, solve,
  interpret and check.
- Illustrations: a modelling-process flowchart; a bar showing a 25% discount.
- Assignment: 6/4 — model percentage and money problems end-to-end.

### Y7-MAT-AL01 · Formulas & substitution
- CDs: `AC9M7A01`
- Learn: variables in everyday formulas (A = l × w, P = 2(l + w), d = s × t);
  substituting values to find an unknown.
- Illustrations: a 6 m × 4 m rectangle; a balance scale weighing A = l × w vs 24.
- Assignment: 6/4 — substitute into formulas and solve.

### Y7-MAT-AL02 · Formulating algebraic expressions
- CDs: `AC9M7A02`
- Learn: translating word phrases into algebraic expressions; constants,
  variables, operations and brackets; the effect of brackets on order.
- Illustrations: a balance scale for 2n + 3 = n + n + 3; a translation flowchart.
- Assignment: 6/4 — convert words to algebra, evaluate expressions.

### Y7-MAT-AL03 · Solving linear equations
- CDs: `AC9M7A03`
- Learn: equations as balances; solving one-step and two-step linear equations;
  verifying solutions by substitution.
- Illustrations: a balance scale for x + 3 = 9; a solving-and-verifying flowchart.
- Assignment: 6/4 — solve linear equations and verify.

### Y7-MAT-AL04 · Relationships between variables & graphs
- CDs: `AC9M7A04`
- Learn: graphs of functions linking two variables; reading distance–time and
  other authentic graphs; describing increasing/decreasing/constant trends.
- Illustrations: points of y = x; a bar comparison of speeds.
- Assignment: 6/4 — read graphs, describe trends and relationships.

### Y7-MAT-AL05 · Tables of values & plotting points
- CDs: `AC9M7A05`
- Learn: capturing growing patterns as rules; building tables of values and
  plotting the (x, y) points on the Cartesian plane.
- Illustrations: plotted points for y = 2x; a 4 × 2 dot array labelled y = 2x.
- Assignment: 6/4 — complete tables, plot points, extend patterns.

### Y7-MAT-AL06 · Formulas & variation with digital tools
- CDs: `AC9M7A06`
- Learn: formulas with several variables; systematic variation of one variable
  and its effect on the result, explored with digital tools.
- Illustrations: a square with a doubled side; a side-vs-area ×2/×4 bar.
- Assignment: 6/4 — predict variation effects (e.g. doubling side quadruples area).

### Y7-MAT-ME01 · Area of triangles & parallelograms
- CDs: `AC9M7M01`
- Learn: area of a triangle = ½ × base × height and parallelogram = base ×
  height; height measured at right angles to the base.
- Illustrations: a 6 cm × 4 cm rectangle, the double of the triangle example.
- Assignment: 6/4 — compute areas, identify base/height pairs.

### Y7-MAT-ME02 · Volume of right prisms
- CDs: `AC9M7M02`
- Learn: volume of right prisms = area of base × height, including rectangular
  and triangular prisms.
- Illustrations: the rectangular base of a prism, 6 cm × 4 cm.
- Assignment: 6/4 — find volumes of rectangular and triangular prisms.

### Y7-MAT-ME03 · π and circles
- CDs: `AC9M7M03`
- Learn: the ratio π linking diameter and circumference (C = πd = 2πr);
  π ≈ 3.14; using the formulas to find circumference.
- Illustrations: a number line showing π ≈ 3.14; a diameter-vs-circumference bar.
- Assignment: 6/4 — use C = πd / C = 2πr, know π ≈ 3.14.

### Y7-MAT-ME04 · Parallel lines & transversals
- CDs: `AC9M7M04`
- Learn: corresponding, alternate and co-interior angles formed by a transversal
  across parallel lines; Z/U/C letter-shape patterns.
- Illustrations: straight angles of 120° and 60°; vertically opposite 60° angles.
- Assignment: 6/4 — identify angle relationships, compute missing angles.

### Y7-MAT-ME05 · Angle sums of triangles & polygons
- CDs: `AC9M7M05`
- Learn: interior angle sum of a triangle = 180°; general polygon rule
  (n − 2) × 180° by triangulation.
- Illustrations: angles 60° + 80° + 40° on a straight line totalling 180°.
- Assignment: 6/4 — find missing angles in triangles and polygons.

### Y7-MAT-ME06 · Modelling with ratios
- CDs: `AC9M7M06`
- Learn: ratio models in recipes, maps and mixtures; map scales; solving and
  checking modelled ratio problems.
- Illustrations: a ratio-modelling flowchart; a map-vs-ground bar.
- Assignment: 6/4 — solve scale and ratio-model problems.

### Y7-MAT-SP01 · Representing objects in 2D
- CDs: `AC9M7SP01`
- Learn: nets, plans and elevations as 2D representations of 3D objects; the
  strengths and limits of each representation.
- Illustrations: an icon-scene of a 3D object, its net and its views.
- Assignment: 6/4 — match nets to objects, interpret plans/elevations.

### Y7-MAT-SP02 · Classifying triangles, quadrilaterals & polygons
- CDs: `AC9M7SP02`
- Learn: classifying triangles by sides and angles; the quadrilateral family
  (squares, rectangles, rhombuses, parallelograms, trapeziums, kites); multiple
  names for one shape.
- Illustrations: three triangle icons labelled equilateral/isosceles/scalene.
- Assignment: 6/4 — classify shapes and justify using properties.

### Y7-MAT-SP03 · Transformations using coordinates
- CDs: `AC9M7SP03`
- Learn: describing translations, reflections and rotations with coordinates;
  how reflections flip x- or y-signs.
- Illustrations: point A reflected across the x-axis; point P translated.
- Assignment: 6/4 — apply transformations to coordinates.

### Y7-MAT-SP04 · Algorithms to sort & classify shapes
- CDs: `AC9M7SP04`
- Learn: designing and describing algorithms with decisions that sort and
  classify shapes by attributes.
- Illustrations: a flowchart with a decision diamond sorting shapes.
- Assignment: 6/4 — trace and explain shape-sorting algorithms.

### Y7-MAT-ST01 · Measures of central tendency
- CDs: `AC9M7ST01`
- Learn: mean, median, mode and range; choosing the right measure, including
  the median's resistance to outliers.
- Illustrations: a dot plot; a mean/median/mode comparison bar.
- Assignment: 6/4 — compute and choose summary statistics.

### Y7-MAT-ST02 · Numerical data displays
- CDs: `AC9M7ST02`
- Learn: dot plots, stem-and-leaf plots and column graphs; describing shape,
  centre, spread and outliers.
- Illustrations: a dot plot with an outlier; column counts of the same data.
- Assignment: 6/4 — build and interpret displays, describe distributions.

### Y7-MAT-ST03 · Statistical investigations
- CDs: `AC9M7ST03`
- Learn: the investigation cycle (question → variable → collect → analyse);
  discrete vs continuous numerical variables.
- Illustrations: the investigation cycle as a flowchart.
- Assignment: 6/4 — classify variables, plan and report investigations.

### Y7-MAT-PR01 · Sample spaces & single-stage probability
- CDs: `AC9M7P01`
- Learn: sample spaces for single-stage events; probability as favourable ÷
  total; predicting relative frequencies.
- Illustrations: a probability scale; pie fractions for P(4) and P(even).
- Assignment: 6/4 — list sample spaces, assign probabilities.

### Y7-MAT-PR02 · Repeated chance experiments & simulations
- CDs: `AC9M7P02`
- Learn: running repeated experiments and simulations; comparing predictions
  with observed results; the law of large numbers.
- Illustrations: a predicted-vs-observed heads bar.
- Assignment: 6/4 — explain differences between predicted and observed.

---

## Year 8 — Mathematics topics

### Y8-MAT-NN01 · Irrational numbers in applied contexts
- CDs: `AC9M8N01`
- Learn: recognising irrational numbers (√2, π) in applied contexts; decimals
  that never terminate or repeat.
- Illustrations: zoomed number lines for √2 ≈ 1.414 and π ≈ 3.14.
- Assignment: 6/4 — identify irrationals, use √2 in diagonal problems.

### Y8-MAT-NN02 · Exponent laws
- CDs: `AC9M8N02`
- Learn: exponent laws for multiplication, division and powers of powers;
  the zero exponent (10⁰ = 1).
- Illustrations: the growing powers of 2; a flowchart applying 2³ × 2².
- Assignment: 6/4 — apply exponent laws to numbers and variables.

### Y8-MAT-NN03 · Terminating & recurring decimals
- CDs: `AC9M8N03`
- Learn: terminating vs recurring decimals; recognising which fractions
  terminate by their denominator's factors (2s and 5s).
- Illustrations: a number line comparing ¼ = 0.25 with ⅓ = 0.333…
- Assignment: 6/4 — convert fractions to decimals, classify terminal/recurring.

### Y8-MAT-NN04 · Four operations with integers & rational numbers
- CDs: `AC9M8N04`
- Learn: sign rules for multiplying and dividing integers; combining integer
  rules with fractions and decimals.
- Illustrations: a number line showing −3 × 2 = −6 and −3 × −2 = 6.
- Assignment: 6/4 — compute with signed rational numbers.

### Y8-MAT-NN05 · Modelling with rational numbers & percentages
- CDs: `AC9M8N05`
- Learn: financial modelling with percentages (GST, discounts, mark-ups);
  formulate → choose calculation → solve → check in context.
- Illustrations: a percentage-modelling flowchart; a $50 → $55 GST bar.
- Assignment: 6/4 — model GST, discounts and sequential percentage changes.

### Y8-MAT-AL01 · Linear expressions — expand, factorise, rearrange
- CDs: `AC9M8A01`
- Learn: expanding brackets via the distributive law; factorising common
  factors; simplifying linear expressions using algebraic properties.
- Illustrations: a balance scale for 3(x + 2) = 3x + 6; an area model.
- Assignment: 6/4 — expand, factorise and simplify linear expressions.

### Y8-MAT-AL02 · Linear relations, equations & inequalities
- CDs: `AC9M8A02`
- Learn: linear relations graphing as straight lines; solving linear equations;
  inequalities with ranges of solutions shown on a number line.
- Illustrations: points of y = 2x + 1; a number line showing x > 6.
- Assignment: 6/4 — solve equations/inequalities, verify solutions.

### Y8-MAT-AL03 · Modelling with linear relations
- CDs: `AC9M8A03`
- Learn: linear models for steady change (phone plans); solving and reviewing
  whether the straight-line model fits.
- Illustrations: points of the plan model y = 5x + 10; a modelling flowchart.
- Assignment: 6/4 — build and review linear models for real situations.

### Y8-MAT-AL04 · Experimenting with linear functions
- CDs: `AC9M8A04`
- Learn: experimenting with slope and intercept using graphing tools; making,
  testing and generalising conjectures about patterns.
- Illustrations: points of the steeper line y = 2x; slopes 1, 2, 3 compared.
- Assignment: 6/4 — predict graph changes, test conjectures.

### Y8-MAT-ME01 · Area & perimeter of composite shapes
- CDs: `AC9M8M01`
- Learn: splitting composite shapes into simpler shapes for area; perimeter as
  the distance around the outside edges only.
- Illustrations: a rectangle part of a composite shape; part areas summing.
- Assignment: 6/4 — compute areas and perimeters of composite shapes.

### Y8-MAT-ME02 · Volume & capacity of right prisms
- CDs: `AC9M8M02`
- Learn: volume and capacity of right prisms; converting between cm³ and
  litres (1 L = 1000 cm³).
- Illustrations: a prism base; a metric ladder of mL/cm³/L.
- Assignment: 6/4 — find volumes/capacities, convert units.

### Y8-MAT-ME03 · Area of circles & sectors
- CDs: `AC9M8M03`
- Learn: A = πr²; sector area as a fraction of the circle (e.g. 90° = quarter).
- Illustrations: a number line showing π in A = πr²; a 90° quarter pie.
- Assignment: 6/4 — compute circle and sector areas.

### Y8-MAT-ME04 · Perimeter of circles & sectors
- CDs: `AC9M8M04`
- Learn: circumference C = πd = 2πr; sector perimeter as arc length plus two
  radii; arc length as a fraction of the circumference.
- Illustrations: a diameter-vs-circumference bar; a quarter-arc pie.
- Assignment: 6/4 — compute circumferences and sector perimeters.

### Y8-MAT-ME05 · Congruent figures & constructions
- CDs: `AC9M8M05`
- Learn: congruence as identical size and shape; constructing congruent shapes
  with ruler, protractor and compasses; checking congruence by sides and angles.
- Illustrations: a reflection mirror scene; equal side-length bars.
- Assignment: 6/4 — identify and construct congruent figures.

### Y8-MAT-ME06 · Similar figures & scale factors
- CDs: `AC9M8M06`
- Learn: similar figures with equal angles and sides in the same ratio; scale
  factors scaling lengths (k), areas (k²) and volumes (k³).
- Illustrations: side 2 vs 4 bars; side-factor vs area-factor bars.
- Assignment: 6/4 — find and apply scale factors.

### Y8-MAT-ME07 · Applying similarity & modelling
- CDs: `AC9M8M07`
- Learn: applying similarity in maps, models and photographs; modelling with a
  single scale factor and checking against the real object.
- Illustrations: a 1 : 24 model icon-scene; a similarity-modelling flowchart.
- Assignment: 6/4 — solve scale-model and shadow problems.

### Y8-MAT-SP01 · Transformations of 2D shapes
- CDs: `AC9M8SP01`
- Learn: translation, reflection, rotation and enlargement; congruent vs similar
  results of transformation combinations.
- Illustrations: point A reflected to A′; point P translated to P′.
- Assignment: 6/4 — apply transformations and classify outcomes.

### Y8-MAT-SP02 · Transformations & tessellations
- CDs: `AC9M8SP02`
- Learn: tessellations as gap-free, overlap-free tilings; using transformations
  to build repeating tile patterns; angles summing to 360° at each vertex.
- Illustrations: a tile-pattern dot array; a rotate-and-tile icon scene.
- Assignment: 6/4 — identify and construct tessellations.

### Y8-MAT-SP03 · Pythagoras & right-angled triangles
- CDs: `AC9M8SP03`
- Learn: Pythagoras' theorem a² + b² = c²; finding missing sides; checking the
  hypotenuse is the longest side.
- Illustrations: a 3-4-5 triangle sketch; bars for 3² + 4² = 5².
- Assignment: 6/4 — find missing sides in right-angled triangles.

### Y8-MAT-SP04 · Creating algorithms to solve geometric problems
- CDs: `AC9M8SP04`
- Learn: algorithms with decisions that identify congruence or similarity of
  shapes; describing how the algorithm works.
- Illustrations: a flowchart checking whether a triangle is right-angled.
- Assignment: 6/4 — trace and explain geometric algorithms.

### Y8-MAT-ST01 · Data displays & categorical vs numerical
- CDs: `AC9M8ST01`
- Learn: distinguishing categorical from numerical data; choosing displays
  (bar charts vs dot/stem-and-leaf plots).
- Illustrations: a dot plot; a favourite-sports bar chart.
- Assignment: 6/4 — classify data types and choose displays.

### Y8-MAT-ST02 · Analysing distributions of numerical data
- CDs: `AC9M8ST02`
- Learn: describing shape, centre, spread and outliers; comparing data sets on
  those same features.
- Illustrations: a dot plot with an outlier; centres of two sets compared.
- Assignment: 6/4 — compare distributions using statistics.

### Y8-MAT-ST03 · Collecting representative samples
- CDs: `AC9M8ST03`
- Learn: samples vs populations; representative and random sampling; avoiding
  bias; larger samples being more trustworthy.
- Illustrations: a sampling-process flowchart; biased-vs-fair sample bars.
- Assignment: 6/4 — evaluate sampling methods for bias.

### Y8-MAT-ST04 · Conducting statistical investigations
- CDs: `AC9M8ST04`
- Learn: the full investigation cycle with fair sampling; reporting with
  evidence and reflection on fairness.
- Illustrations: the investigation cycle flowchart; an evidence dot plot.
- Assignment: 6/4 — plan, conduct and report an investigation.

### Y8-MAT-PR01 · Two-step chance experiments
- CDs: `AC9M8P01`
- Learn: sample spaces of combined outcomes (e.g. coin then die = 12 outcomes);
  assigning probabilities to compound outcomes.
- Illustrations: a 6 × 2 outcome array; a pie showing 3/12.
- Assignment: 6/4 — list compound outcomes, compute probabilities.

### Y8-MAT-PR02 · Complementary events
- CDs: `AC9M8P02`
- Learn: P(not A) = 1 − P(A); events and complements summing to 1; using the
  complement to simplify probability calculations.
- Illustrations: a probability scale at 0.4 and 0.6; complementary pies.
- Assignment: 6/4 — use complementary-event relationships.

### Y8-MAT-PR03 · Simulations of chance experiments
- CDs: `AC9M8P03`
- Learn: simulating chance with random numbers; comparing predicted probability
  with observed relative frequency; the law of large numbers.
- Illustrations: predicted-vs-observed bars; a simulation flowchart.
- Assignment: 6/4 — run simulations, compare relative frequencies.

---

## Year 9 — Mathematics topics

### Y9-MAT-NN01 · Real numbers & rational approximations
- CDs: `AC9M9N01`
- Learn: the real number system (rationals + irrationals); solving problems
  involving real numbers with digital tools; approximating irrationals.
- Illustrations: a number line with √2 ≈ 1.414 and π ≈ 3.14; an approximation bar.
- Assignment: 6/4 — classify numbers, approximate and estimate.

### Y9-MAT-NN02 · Exponent laws with positive integers
- CDs: `AC9M9N02`
- Learn: exponent laws applied to variables; scientific notation for very large
  numbers (4.2 × 10⁷).
- Illustrations: a product-law flowchart; a 4.2 × 10⁷ bar.
- Assignment: 6/4 — simplify powers, convert to/from scientific notation.

### Y9-MAT-NN03 · Percentages & financial mathematics
- CDs: `AC9M9N03`
- Learn: simple vs compound interest (I = Prt, A = P(1 + r)ⁿ); comparing
  financial options; sequential discounts.
- Illustrations: simple-vs-compound bars; an interest-modelling flowchart.
- Assignment: 6/4 — solve interest and discount problems, compare deals.

### Y9-MAT-NN04 · Financial applications
- CDs: `AC9M9N04`
- Learn: applying mathematics to money — comparing offers, best buys, budgets,
  GST and loan repayment tables; the modelling cycle.
- Illustrations: a financial-modelling flowchart; a two-plan comparison bar.
- Assignment: 6/4 — model and compare financial situations.

### Y9-MAT-AL01 · Simplifying algebraic expressions
- CDs: `AC9M9A01`
- Learn: combining like terms and applying index laws to simplify algebraic
  expressions.
- Illustrations: a balance scale for 3x² + 2x² = 5x²; a simplification flowchart.
- Assignment: 6/4 — simplify expressions with variables and powers.

### Y9-MAT-AL02 · Expanding binomial products & factorising
- CDs: `AC9M9A02`
- Learn: expanding (x + 2)(x + 3) by the distributive law (FOIL); special
  products (a + b)² and (a − b)(a + b); factorising as the reverse.
- Illustrations: a balance scale for (x + 2)(x + 3) = x² + 5x + 6; an area model.
- Assignment: 6/4 — expand and factorise quadratics.

### Y9-MAT-AL03 · Linear relationships in real-life situations
- CDs: `AC9M9A03`
- Learn: constant rate of change modelled as y = mx + b; finding gradient and
  intercept; solving and checking models.
- Illustrations: points of y = 8x; a linear-modelling flowchart.
- Assignment: 6/4 — build and use linear models in context.

### Y9-MAT-AL04 · Index laws & the zero exponent
- CDs: `AC9M9A04`
- Learn: zero and negative integer exponents (x⁰ = 1, x⁻² = 1/x²); scientific
  notation for tiny numbers (2.5 × 10⁻³ = 0.0025).
- Illustrations: powers of 2 shrinking to 2⁰ = 1; a 2.5 × 10⁻³ number line.
- Assignment: 6/4 — apply zero/negative exponents, convert small numbers.

### Y9-MAT-ME01 · Surface area & volume of prisms & cylinders
- CDs: `AC9M9M01`
- Learn: volume = area of base × height for prisms and cylinders (V = πr²h);
  surface area of cylinders as 2πr² + 2πrh.
- Illustrations: a cylinder-base rectangle stand-in; an SA-vs-volume bar.
- Assignment: 6/4 — compute SA and volume for prisms and cylinders.

### Y9-MAT-ME02 · Length, area, surface area & volume scale factors
- CDs: `AC9M9M02`
- Learn: scaling rules — lengths × k, areas × k², volumes × k³; predicting size
  changes without recalculating everything.
- Illustrations: length/area/volume factor bars (2, 4, 8).
- Assignment: 6/4 — apply scale-factor rules to lengths, areas, volumes.

### Y9-MAT-ME03 · Similarity, scale factors & applying similarity
- CDs: `AC9M9M03`
- Learn: similar triangles and indirect measurement (heights, shadows, scale
  models); solving with side ratios.
- Illustrations: a similar-triangles flowchart; a 2 : 3 side-ratio bar.
- Assignment: 6/4 — solve similar-triangle problems.

### Y9-MAT-ME04 · Pythagoras & trigonometric ratios
- CDs: `AC9M9M04`
- Learn: sin, cos, tan (SOHCAHTOA); choosing the right ratio; using Pythagoras
  when you have two sides but no angle.
- Illustrations: a right-triangle sketch; 3-4-5 side bars.
- Assignment: 6/4 — find sides and angles with trigonometry.

### Y9-MAT-ME05 · Practical applications of trigonometry
- CDs: `AC9M9M05`
- Learn: angles of elevation and depression; bearings; drawing and labelling the
  right triangle before choosing a ratio.
- Illustrations: a trig problem-solving flowchart; a tower-vs-shadow bar.
- Assignment: 6/4 — solve elevation, depression and bearing problems.

### Y9-MAT-SP01 · Similarity, congruence & transformations
- CDs: `AC9M9SP01`
- Learn: congruence vs similarity; transformations preserving or creating them;
  describing sequences of transformations.
- Illustrations: point A reflected; point P translated.
- Assignment: 6/4 — map shapes with transformation sequences.

### Y9-MAT-SP02 · Defining geometric properties & constructions
- CDs: `AC9M9SP02`
- Learn: precise definitions (parallelogram, rhombus, kite); constructions with
  compasses and straightedge; angle bisection and perpendiculars.
- Illustrations: a quadrilateral-sorting flowchart; three triangle icons.
- Assignment: 6/4 — apply definitions, describe constructions.

### Y9-MAT-SP03 · Coordinates, lines & shapes
- CDs: `AC9M9SP03`
- Learn: describing shapes with coordinates; horizontal/vertical lines (y = k,
  x = k); gradient as rise over run.
- Illustrations: triangle vertices (1,1), (3,1), (3,3) on a grid.
- Assignment: 6/4 — plot shapes, find gradients, describe lines.

### Y9-MAT-SP04 · Graphs & relations with digital tools
- CDs: `AC9M9SP04`
- Learn: experimenting with relations using graphing tools; making and testing
  conjectures; describing graph shape and intercepts.
- Illustrations: points of y = x² curving upward.
- Assignment: 6/4 — experiment with graphs, generalise patterns.

### Y9-MAT-ST01 · Comparing data representations
- CDs: `AC9M9ST01`
- Learn: choosing between column graphs, dot plots, stem-and-leaf and box plots;
  reading graphs critically (misleading scales and sources).
- Illustrations: a dot plot and a bar chart of the same data.
- Assignment: 6/4 — choose displays, critique graphs.

### Y9-MAT-ST02 · Comparing data sets
- CDs: `AC9M9ST02`
- Learn: the five-number summary and box plots; comparing centre, spread and
  outliers across groups.
- Illustrations: a dot plot; group medians compared.
- Assignment: 6/4 — build summaries, compare groups.

### Y9-MAT-ST03 · Bivariate data & scatterplots
- CDs: `AC9M9ST03`
- Learn: two variables measured together; positive/negative/no relationship;
  strength of association and lines of good fit by eye.
- Illustrations: points rising on a quadrant grid.
- Assignment: 6/4 — describe and interpret scatterplot associations.

### Y9-MAT-ST04 · Statistical investigations & representative data
- CDs: `AC9M9ST04`
- Learn: posing a question, designing fair random sampling, collecting,
  analysing and reporting with evidence; evaluating the process.
- Illustrations: the investigation cycle flowchart.
- Assignment: 6/4 — run and evaluate a statistical investigation.

### Y9-MAT-PR01 · Multi-step chance experiments & simulations
- CDs: `AC9M9P01`
- Learn: combined sample spaces (two coins → 4 outcomes); simulations
  approaching theoretical probabilities; comparing the two.
- Illustrations: a 2 × 2 outcome grid; a pie showing P(HH) = ¼.
- Assignment: 6/4 — list compound outcomes, run simulations.

### Y9-MAT-PR02 · Theoretical & experimental probability
- CDs: `AC9M9P02`
- Learn: theoretical (favourable ÷ total) vs experimental probability; the law
  of large numbers bridging them.
- Illustrations: predicted-vs-observed bars for P(6) over 100 rolls.
- Assignment: 6/4 — compute both, explain convergence.

---

## Year 10 — Mathematics topics

### Y10-MAT-NN01 · Approximations of real numbers
- CDs: `AC9M10N01`
- Learn: the effect of using approximations of real numbers in repeated
  calculations; comparing results with exact representations; when accuracy
  matters (finance, medical doses).
- Illustrations: a number line comparing 3.14 with π; error-growth bars.
- Assignment: 6/4 — compare exact vs approximate results, judge impact.

### Y10-MAT-AL01 · Algebraic techniques — expansion, factorisation & equations
- CDs: `AC9M10A01`
- Learn: expanding, factorising and simplifying expressions; the completed
  square form (x + h)² + k; solving equations algebraically with exponent laws
  (positive and negative integer exponents) and the distributive property.
- Illustrations: a balance scale for x² + 5x + 6 = (x + 2)(x + 3); a
  completing-the-square flowchart.
- Assignment: 6/4 — factorise, complete the square, solve equations.

### Y10-MAT-AL02 · Linear inequalities & simultaneous equations
- CDs: `AC9M10A02`
- Learn: solving linear inequalities in 2 variables (shaded regions, test
  points); solving simultaneous linear equations and interpreting solutions
  graphically (break-even points) in context.
- Illustrations: two lines crossing at (2, 4); a break-even bar.
- Assignment: 6/4 — graph inequalities, solve and interpret simultaneous systems.

### Y10-MAT-AL03 · Exponential relations & equations
- CDs: `AC9M10A03`
- Learn: recognising exponential relations by constant ratio in tables;
  connecting algebraic (y = a × bˣ) and graphical representations; solving
  exponential equations with digital tools.
- Illustrations: points of y = 2ˣ rising steeply.
- Assignment: 6/4 — identify exponentials, solve related equations.

### Y10-MAT-AL04 · Modelling growth & decay
- CDs: `AC9M10A04`
- Learn: choosing between linear, quadratic and exponential models (constant
  first/second differences, constant ratio); doubling time and half-life;
  modelling, evaluating and reporting assumptions.
- Illustrations: linear-vs-exponential growth bars; a growth-modelling flowchart.
- Assignment: 6/4 — model growth/decay and evaluate the model.

### Y10-MAT-AL05 · Functions, relations & digital experimentation
- CDs: `AC9M10A05`
- Learn: experimenting with functions and relations using digital tools (zoom,
  bisection, transformations); making and testing conjectures and generalising
  patterns; functions underpinning machine learning.
- Illustrations: points where x² meets 2ˣ; the experimental-loop flowchart.
- Assignment: 6/4 — experiment with graphs, refine conjectures.

### Y10-MAT-ME01 · Surface area & volume of composite objects
- CDs: `AC9M10M01`
- Learn: volumes and surface areas of composite solids built from prisms and
  cylinders; estimating then calculating; practical decision-making.
- Illustrations: part volumes summing to a total; a prism-part base.
- Assignment: 6/4 — compute composite SA and volume, estimate first.

### Y10-MAT-ME02 · Logarithmic scales
- CDs: `AC9M10M02`
- Learn: logarithmic scales calibrated in orders of magnitude; interpreting
  Richter, decibel and pH scales; when log scales are (and are not) appropriate.
- Illustrations: a log-scale number line (10⁰, 10¹, 10², 10³).
- Assignment: 6/4 — interpret log-scale data and readings.

### Y10-MAT-ME03 · Pythagoras & trigonometry in 3D practical problems
- CDs: `AC9M10M03`
- Learn: applying Pythagoras and right-angled trigonometry to bearings, angles
  of elevation and depression; decomposing 3D problems into 2D triangles.
- Illustrations: a right-triangle sketch; 3-4-5 side bars.
- Assignment: 6/4 — solve navigation, elevation and 3D problems.

### Y10-MAT-ME04 · Measurement errors & accuracy
- CDs: `AC9M10M04`
- Learn: the impact of measurement errors on results; compounding errors in
  finance; analysing instruments and methods; judging accuracy in context.
- Illustrations: an error-bar number line; compounding-error bars.
- Assignment: 6/4 — analyse error sources and their impact.

### Y10-MAT-ME05 · Modelling proportion & scaling
- CDs: `AC9M10M05`
- Learn: proportion and scaling of objects (plans, elevations, 3D prints);
  evaluating and modifying models; reporting assumptions, methods and findings.
- Illustrations: a plan-vs-actual bar; a scaling-modelling flowchart.
- Assignment: 6/4 — solve scale/proportion problems and evaluate models.

### Y10-MAT-SP01 · Deductive reasoning & geometric proofs
- CDs: `AC9M10SP01`
- Learn: proofs as logically connected statements vs practical demonstrations;
  using congruence tests and theorems (base angles of isosceles triangles) to
  deduce results and solve spatial problems.
- Illustrations: a proof-as-steps flowchart; two congruent triangle icons.
- Assignment: 6/4 — construct proofs, deduce geometric properties.

### Y10-MAT-SP02 · Networks & connectedness
- CDs: `AC9M10SP02`
- Learn: interpreting networks (nodes + edges) in practical situations; Euler's
  formula F + V = E + 2; describing connectedness (rail, wiring, food webs).
- Illustrations: a network-nodes dot array; faces/vertices/edges bars.
- Assignment: 6/4 — interpret networks, apply Euler's formula.

### Y10-MAT-SP03 · Algorithms & digital tools for spatial problems
- CDs: `AC9M10SP03`
- Learn: defining and decomposing spatial problems; designing, testing and
  refining algorithms (pseudocode/flowcharts); routing and coverage; justifying
  solutions.
- Illustrations: an algorithm-design flowchart.
- Assignment: 6/4 — design, validate and justify spatial algorithms.

### Y10-MAT-ST01 · Analysing statistical claims in the media
- CDs: `AC9M10ST01`
- Learn: critically analysing claims, inferences and conclusions in media
  reports; ethical considerations and bias; misleading displays; data
  sovereignty.
- Illustrations: a claim-vs-data bar; an evaluate-the-claim flowchart.
- Assignment: 6/4 — critique media stats, identify bias.

### Y10-MAT-ST02 · Comparing continuous data distributions
- CDs: `AC9M10ST02`
- Learn: comparing distributions with box plots, histograms and dot plots;
  discussing centre, spread, shape, outliers; symmetry, skew and modality.
- Illustrations: a dot plot; two-set median comparison bars.
- Assignment: 6/4 — build/interpret box plots, describe distributions.

### Y10-MAT-ST03 · Scatterplots & association between variables
- CDs: `AC9M10ST03`
- Learn: constructing scatterplots and commenting on strength, direction and
  linearity of association; association vs causation; lines of good fit.
- Illustrations: rising points on a quadrant grid.
- Assignment: 6/4 — interpret associations, avoid causation fallacies.

### Y10-MAT-ST04 · Two-way tables & categorical relationships
- CDs: `AC9M10ST04`
- Learn: constructing two-way tables for two categorical variables; using
  percentages and proportions to find patterns and associations.
- Illustrations: a two-way-table grid; group-proportion bars.
- Assignment: 6/4 — build/read two-way tables, compare proportions.

### Y10-MAT-ST05 · Statistical investigations with bivariate data
- CDs: `AC9M10ST05`
- Learn: planning and conducting investigations of bivariate data; evaluating
  and reporting findings with the limitations of inferences (interpolation,
  extrapolation, validity).
- Illustrations: a bivariate investigation flowchart.
- Assignment: 6/4 — investigate bivariate data, report limitations.

### Y10-MAT-PR01 · Conditional probability
- CDs: `AC9M10P01`
- Learn: the language of "if … then", "given", "of", "knowing that"; dependent
  vs independent events; two-way tables and tree diagrams; conditional
  probability in NLP and recommendations.
- Illustrations: a pie for P(rain | cloudy); a two-way-table grid.
- Assignment: 6/4 — interpret and calculate conditional probabilities.

### Y10-MAT-PR02 · Simulations of conditional probability
- CDs: `AC9M10P02`
- Learn: designing and conducting repeated chance experiments and simulations
  with digital tools; sampling with/without replacement; counter-intuitive
  problems (three-door, birthday problem); interpreting results.
- Illustrations: a simulation-run flowchart.
- Assignment: 6/4 — run simulations, interpret conditional outcomes.

---

## Coverage check (programmatic)

Run from `apps/mobile`:

```sh
npx tsc --noEmit
```

The data files `year{7,8,9,10}/mathematics.ts` export one `Topic` per content
description; the app's pacing validator treats `covered == scope` as the
release gate, so the count of topic `cd` entries per year must equal the totals
in the table at the top of this file (30 / 27 / 23 / 21). Do not renumber or
drop ACARA codes.


