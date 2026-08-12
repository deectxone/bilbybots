# Years 1–5 — Mathematics topics

Source of truth: Australian Curriculum v9.0, Mathematics F–10 (strands: Number,
Algebra, Measurement, Space, Statistics, Probability). Every content description
for Years 1–5 is covered below and mirrored in
`apps/mobile/src/data/year{1,2,3,4,5}/mathematics.ts`.

Per AC v9.0 the Years 1–5 band carries the following content descriptions
(codes verified against ACARA v9.0 F–6 curriculum content):

| Year | Number | Algebra | Measurement | Space | Statistics | Probability | Total |
|------|-------:|--------:|------------:|------:|-----------:|------------:|------:|
| 1    | 6      | 2       | 3           | 2     | 2          | 0           | 15    |
| 2    | 6      | 3       | 5           | 2     | 2          | 0           | 18    |
| 3    | 7      | 3       | 6           | 2     | 3          | 2           | 23    |
| 4    | 9      | 2       | 4           | 3     | 3          | 2           | 23    |
| 5    | 10     | 2       | 4           | 3     | 3          | 2           | 24    |

Each topic below is one unit (**lesson + quick-check + assignment**) tagged with
its CD codes. Topic ids follow `Y<year>-MAT-<strand><NN>`. Every topic ships 6
assignment questions at nominal pace and 4 under compact pace (adaptive pacing,
see `docs/specs/adaptive-pacing.md`). Illustration slots render real vector
diagrams via `src/components/illustrations/diagrams.tsx` (no emoji placeholders).
Probability has no CDs in Years 1–2; the 3 strands below start in Year 3.

---

## Year 1 — Mathematics topics

### Y1-MAT-NN01 · Numbers to 120 & place value
- CDs: `AC9M1N01`
- Learn: recognise, represent and order numbers to at least 120; numerals,
  number lines and 100-charts; place value to 120 (hundreds, tens, ones).
- Assignment: 6 questions (order, compare, represent, read numerals).

### Y1-MAT-NN02 · Partitioning numbers & tens/ones
- CDs: `AC9M1N02`
- Learn: partition one- and two-digit numbers different ways; two-digit
  numbers as tens and ones.
- Assignment: 6 questions (partition, build with tens/ones, missing parts).

### Y1-MAT-NN03 · Equal groups & skip counting
- CDs: `AC9M1N03`
- Learn: quantify collections to 120 by partitioning into equal groups and
  skip counting (2s, 5s, 10s).
- Assignment: 6 questions (skip count, count equal groups).

### Y1-MAT-NN04 · Add & subtract within 20
- CDs: `AC9M1N04`
- Learn: add/subtract numbers within 20 using materials, part-part-whole
  knowledge to 10 and strategies (count on, doubles, near-doubles, friends to 10).
- Assignment: 6 questions (computation, word problems, strategies).

### Y1-MAT-NN05 · Money & additive situations (modelling)
- CDs: `AC9M1N05`
- Learn: mathematical modelling to solve practical additive problems incl.
  simple money transactions (shopping with coins).
- Assignment: 6 questions (price sums, giving change, choosing operations).

### Y1-MAT-NN06 · Equal sharing & grouping (modelling)
- CDs: `AC9M1N06`
- Learn: modelling to solve practical problems involving equal sharing and
  grouping (fair shares of a collection).
- Assignment: 6 questions (share equally, group into equal sets).

### Y1-MAT-AL01 · Number patterns & skip counting
- CDs: `AC9M1A01`
- Learn: recognise, continue and create pattern sequences with numbers,
  symbols, shapes and objects formed by skip counting.
- Assignment: 6 questions (continue patterns, state rule, create).

### Y1-MAT-AL02 · Repeating patterns
- CDs: `AC9M1A02`
- Learn: recognise, continue and create repeating patterns, identifying the
  repeating unit (core).
- Assignment: 6 questions (find the core, continue, create ABAB/ABC).

### Y1-MAT-ME01 · Comparing length, mass, capacity, duration
- CDs: `AC9M1M01`
- Learn: compare directly/indirectly and order objects/events using attributes
  of length, mass, capacity and duration.
- Assignment: 6 questions (compare, order, "which is longer/heavier/holds more").

### Y1-MAT-ME02 · Measuring length with informal units
- CDs: `AC9M1M02`
- Learn: measure length of shapes/objects using uniform informal units used
  end-to-end (paper clips, cubes, footprints).
- Assignment: 6 questions (measure, compare lengths, choose unit).

### Y1-MAT-ME03 · Days, weeks, months & hours
- CDs: `AC9M1M03`
- Learn: describe duration/sequence of events using years, months, weeks,
  days and hours; read simple timetables of the school day.
- Assignment: 6 questions (order days, months, durations, before/after).

### Y1-MAT-SP01 · Recognising & classifying shapes
- CDs: `AC9M1SP01`
- Learn: make, compare and classify familiar shapes; recognise shapes/objects
  in the environment.
- Assignment: 6 questions (name shapes, classify, find in environment).

### Y1-MAT-SP02 · Directions & movement
- CDs: `AC9M1SP02`
- Learn: give and follow directions to move people/objects to different
  locations within a space (left/right, forwards/backwards, up/down).
- Assignment: 6 questions (follow directions, give directions, describe path).

### Y1-MAT-ST01 · Collecting data (categorical)
- CDs: `AC9M1ST01`
- Learn: acquire and record data for categorical variables (favourite fruit,
  pets) using tallies, drawings, lists and digital tools.
- Assignment: 6 questions (collect, record, read a tally).

### Y1-MAT-ST02 · One-to-one data displays
- CDs: `AC9M1ST02`
- Learn: represent collected categorical data using one-to-one displays
  (picture graphs, object graphs); compare frequencies.
- Assignment: 6 questions (build/read a picture graph, compare counts).

---

## Year 2 — Mathematics topics

### Y2-MAT-NN01 · Numbers to 1000 & place value
- CDs: `AC9M2N01`
- Learn: recognise, represent and order numbers to at least 1000; place value
  (hundreds, tens, ones); number lines and charts.
- Assignment: 6 questions (order, compare, represent, read numerals to 1000).

### Y2-MAT-NN02 · Partitioning 3-digit numbers & zero
- CDs: `AC9M2N02`
- Learn: partition, rearrange, regroup and rename two-/three-digit numbers
  standard and non-standard; role of the zero digit.
- Assignment: 6 questions (regroup, rename, explain zero).

### Y2-MAT-NN03 · Halves, quarters & eighths
- CDs: `AC9M2N03`
- Learn: one-half as one of 2 equal parts; connect halves, quarters and
  eighths through repeated halving.
- Assignment: 6 questions (recognise fractions, repeated halving).

### Y2-MAT-NN04 · Add & subtract one-/two-digit numbers
- CDs: `AC9M2N04`
- Learn: add/subtract using number sentences, part-part-whole reasoning and
  strategies (counting on/back, jump, split).
- Assignment: 6 questions (computation, missing numbers, word problems).

### Y2-MAT-NN05 · Multiplication & division basics
- CDs: `AC9M2N05`
- Learn: multiply/divide by one-digit numbers using repeated addition, equal
  grouping, arrays and partitioning.
- Assignment: 6 questions (arrays, groups, repeated addition, sharing).

### Y2-MAT-NN06 · Modelling: additive & multiplicative problems
- CDs: `AC9M2N06`
- Learn: modelling to solve practical additive/multiplicative problems,
  including money.
- Assignment: 6 questions (shopping, sharing, choosing operations).

### Y2-MAT-AL01 · Additive patterns
- CDs: `AC9M2A01`
- Learn: recognise, describe and create additive patterns that increase or
  decrease by a constant amount; find missing elements.
- Assignment: 6 questions (continue, find missing, describe rule).

### Y2-MAT-AL02 · Addition facts to 20
- CDs: `AC9M2A02`
- Learn: recall addition facts to 20; extend to related subtraction facts.
- Assignment: 6 questions (recall facts, fact families).

### Y2-MAT-AL03 · Twos multiplication facts
- CDs: `AC9M2A03`
- Learn: recall twos multiplication facts; related division facts using
  doubling and halving.
- Assignment: 6 questions (2× facts, doubles, halves).

### Y2-MAT-ME01 · Measuring with informal units
- CDs: `AC9M2M01`
- Learn: measure/compare length, capacity, mass using appropriate uniform
  informal units.
- Assignment: 6 questions (measure, compare, choose a unit).

### Y2-MAT-ME02 · Fractions of shapes & events
- CDs: `AC9M2M02`
- Learn: identify common uses and represent halves, quarters and eighths in
  relation to shapes, objects and events.
- Assignment: 6 questions (halve/quarter shapes, halves of events).

### Y2-MAT-ME03 · Calendars & days between dates
- CDs: `AC9M2M03`
- Learn: identify the date; determine the number of days between events using
  calendars.
- Assignment: 6 questions (read calendars, count days, today/tomorrow).

### Y2-MAT-ME04 · Analogue clocks: hour, half, quarter
- CDs: `AC9M2M04`
- Learn: recognise and read analogue time to the hour, half-hour and
  quarter-hour.
- Assignment: 6 questions (read clocks, draw hands, match times).

### Y2-MAT-ME05 · Turns: quarter, half, three-quarter, full
- CDs: `AC9M2M05`
- Learn: identify, describe and demonstrate quarter, half, three-quarter and
  full measures of turn.
- Assignment: 6 questions (describe turns, turn a shape, clockwise/anti).

### Y2-MAT-SP01 · Shapes by sides & spatial terms
- CDs: `AC9M2SP01`
- Learn: recognise, compare and classify shapes by number of sides using
  terms like opposite, parallel, curved, straight.
- Assignment: 6 questions (sort by sides, use spatial terms).

### Y2-MAT-SP02 · Maps & pathways
- CDs: `AC9M2SP02`
- Learn: locate positions in 2D representations of a familiar space; move by
  following directions and pathways.
- Assignment: 6 questions (locate on map, follow pathway, give directions).

### Y2-MAT-ST01 · Surveys & data tables
- CDs: `AC9M2ST01`
- Learn: acquire data for categorical variables through surveys, observation,
  experiments and digital tools; display using lists and tables.
- Assignment: 6 questions (survey, record in table, read data).

### Y2-MAT-ST02 · Different data displays
- CDs: `AC9M2ST02`
- Learn: create different graphical representations using software; compare
  representations and describe features.
- Assignment: 6 questions (create, compare displays, describe features).

---

## Year 3 — Mathematics topics

### Y3-MAT-NN01 · Numbers beyond 10 000
- CDs: `AC9M3N01`
- Learn: recognise, represent and order natural numbers using naming/writing
  conventions for numerals beyond 10 000; place value (ten-thousands).
- Assignment: 6 questions (order, represent, rename large numbers).

### Y3-MAT-NN02 · Unit fractions
- CDs: `AC9M3N02`
- Learn: recognise/represent unit fractions 1/2, 1/3, 1/4, 1/5, 1/10 and
  their multiples; combine same-denominator fractions to make the whole.
- Assignment: 6 questions (name unit fractions, combine to whole).

### Y3-MAT-NN03 · Add & subtract two-/three-digit numbers
- CDs: `AC9M3N03`
- Learn: add/subtract using place value to partition, rearrange and regroup.
- Assignment: 6 questions (column strategies, regrouping, word problems).

### Y3-MAT-NN04 · Multiply & divide one-/two-digit numbers
- CDs: `AC9M3N04`
- Learn: multiply/divide one- and two-digit numbers, representing problems
  with number sentences, diagrams and arrays.
- Assignment: 6 questions (arrays, number sentences, word problems).

### Y3-MAT-NN05 · Estimation
- CDs: `AC9M3N05`
- Learn: estimate quantities in collections; use estimates to check
  reasonableness of calculations.
- Assignment: 6 questions (estimate quantities, round to check).

### Y3-MAT-NN06 · Modelling: additive & multiplicative (financial)
- CDs: `AC9M3N06`
- Learn: mathematical modelling for practical additive/multiplicative
  problems including financial contexts.
- Assignment: 6 questions (model a scenario, choose operations, money).

### Y3-MAT-NN07 · Algorithms: sequences & decisions
- CDs: `AC9M3N07`
- Learn: follow and create algorithms — sequences of steps and decisions —
  to investigate numbers; describe patterns.
- Assignment: 6 questions (trace an algorithm, build one, spot decision).

### Y3-MAT-AL01 · Inverse operations & unknowns
- CDs: `AC9M3A01`
- Learn: addition/subtraction as inverse operations; find unknown values in
  number sentences.
- Assignment: 6 questions (fact families, missing values).

### Y3-MAT-AL02 · Efficient mental strategies
- CDs: `AC9M3A02`
- Learn: extend addition/subtraction facts to 20 into efficient mental
  strategies for larger numbers.
- Assignment: 6 questions (strategies, near-compatible numbers).

### Y3-MAT-AL03 · Multiplication facts (3, 4, 5, 10)
- CDs: `AC9M3A03`
- Learn: recall 3, 4, 5 and 10 multiplication facts; related division facts.
- Assignment: 6 questions (recall facts, division links).

### Y3-MAT-ME01 · Metric units & estimation
- CDs: `AC9M3M01`
- Learn: identify metric units for everyday items; use familiar measurements
  to make estimates.
- Assignment: 6 questions (choose units, estimate lengths/masses).

### Y3-MAT-ME02 · Measuring with metric instruments
- CDs: `AC9M3M02`
- Learn: measure/compare length, mass, capacity with labelled instruments
  (ruler, scales, measuring jug).
- Assignment: 6 questions (read instruments, compare, convert simple).

### Y3-MAT-ME03 · Units of time
- CDs: `AC9M3M03`
- Learn: relationships between formal time units (days, hours, minutes,
  seconds) to compare durations.
- Assignment: 6 questions (convert time units, compare durations).

### Y3-MAT-ME04 · Analogue & digital clocks to the minute
- CDs: `AC9M3M04`
- Learn: relationship between hours/minutes on analogue and digital clocks;
  read time to the nearest minute.
- Assignment: 6 questions (read to the minute, am/pm, convert).

### Y3-MAT-ME05 · Angles as turn
- CDs: `AC9M3M05`
- Learn: angles as measures of turn; compare angles with right angles in
  everyday situations.
- Assignment: 6 questions (right angles, more/less than right).

### Y3-MAT-ME06 · Dollars & cents
- CDs: `AC9M3M06`
- Learn: relationships between dollars and cents; represent money values in
  different ways.
- Assignment: 6 questions (convert, represent, count money).

### Y3-MAT-SP01 · Objects & features
- CDs: `AC9M3SP01`
- Learn: make, compare and classify objects, identifying key features that
  suit their uses (prisms, pyramids, cylinders).
- Assignment: 6 questions (name 3D shapes, match use to feature).

### Y3-MAT-SP02 · Maps of familiar environments
- CDs: `AC9M3SP02`
- Learn: interpret and create 2D representations of familiar environments,
  locating landmarks and objects.
- Assignment: 6 questions (read maps, locate landmarks, create simple map).

### Y3-MAT-ST01 · Collecting categorical & discrete data
- CDs: `AC9M3ST01`
- Learn: acquire data for categorical/discrete numerical variables; record
  with frequency tables and spreadsheets.
- Assignment: 6 questions (collect, tally, frequency tables).

### Y3-MAT-ST02 · Comparing data displays
- CDs: `AC9M3ST02`
- Learn: create/compare different graphical representations of data sets;
  interpret data in context.
- Assignment: 6 questions (bar/column graphs, compare, interpret).

### Y3-MAT-ST03 · Guided statistical investigations
- CDs: `AC9M3ST03`
- Learn: conduct guided statistical investigations (collect, represent,
  interpret).
- Assignment: 6 questions (design steps, read results, conclude).

### Y3-MAT-PR01 · Chance language
- CDs: `AC9M3P01`
- Learn: identify practical activities/events involving chance; describe
  outcomes as likely, unlikely, certain, impossible.
- Assignment: 6 questions (classify likelihood, everyday events).

### Y3-MAT-PR02 · Repeated chance experiments
- CDs: `AC9M3P02`
- Learn: conduct repeated chance experiments; record results and discuss
  variation.
- Assignment: 6 questions (predict, record, compare runs).

---

## Year 4 — Mathematics topics

### Y4-MAT-NN01 · Decimals: tenths & hundredths
- CDs: `AC9M4N01`
- Learn: place value to tenths/hundredths; decimal notation to name and
  represent decimals.
- Assignment: 6 questions (represent decimals, place value, compare).

### Y4-MAT-NN02 · Odd & even numbers
- CDs: `AC9M4N02`
- Learn: explain and use properties of odd and even numbers.
- Assignment: 6 questions (classify, use patterns of odd/even).

### Y4-MAT-NN03 · Equivalent fractions & decimals
- CDs: `AC9M4N03`
- Learn: equivalent fractions using related denominators; connect fractions
  and decimal notation.
- Assignment: 6 questions (equivalence, fraction↔decimal).

### Y4-MAT-NN04 · Counting by fractions & mixed numerals
- CDs: `AC9M4N04`
- Learn: count by fractions including mixed numerals; locate/represent on
  number lines.
- Assignment: 6 questions (count on in fractions, number lines).

### Y4-MAT-NN05 · Multiplying/dividing by 10, 100, 1000
- CDs: `AC9M4N05`
- Learn: solve problems multiplying/dividing natural numbers by multiples and
  powers of 10 using place value.
- Assignment: 6 questions (×/÷ 10/100/1000, place-value shifts).

### Y4-MAT-NN06 · Efficient computation strategies
- CDs: `AC9M4N06`
- Learn: efficient strategies for addition/subtraction and
  multiplication/division without remainder.
- Assignment: 6 questions (chosen strategy, split/compensate, column).

### Y4-MAT-NN07 · Estimation & rounding (financial)
- CDs: `AC9M4N07`
- Learn: choose/use estimation and rounding to check reasonableness,
  including financial transactions.
- Assignment: 6 questions (round, estimate totals, check change).

### Y4-MAT-NN08 · Modelling: additive & multiplicative (financial)
- CDs: `AC9M4N08`
- Learn: modelling practical problems in additive/multiplicative situations
  incl. financial contexts.
- Assignment: 6 questions (model scenarios, money, explain).

### Y4-MAT-NN09 · Algorithms with addition/multiplication
- CDs: `AC9M4N09`
- Learn: follow/create algorithms using addition or multiplication to
  generate sets of numbers; describe patterns.
- Assignment: 6 questions (trace, extend, describe pattern).

### Y4-MAT-AL01 · Unknowns in equations (add/sub)
- CDs: `AC9M4A01`
- Learn: find unknown values in numerical equations involving addition and
  subtraction using properties.
- Assignment: 6 questions (missing values, properties).

### Y4-MAT-AL02 · Multiplication facts to 10 × 10
- CDs: `AC9M4A02`
- Learn: recall multiplication facts up to 10 × 10 and related division facts.
- Assignment: 6 questions (recall facts, division links).

### Y4-MAT-ME01 · Scaled measurement
- CDs: `AC9M4M01`
- Learn: interpret unmarked/partial units when measuring length, mass,
  capacity, duration, temperature with scaled/digital instruments.
- Assignment: 6 questions (read scales, partial units, temperature).

### Y4-MAT-ME02 · Perimeter & area
- CDs: `AC9M4M02`
- Learn: ways of measuring/approximating perimeter and area of shapes using
  formal and informal units.
- Assignment: 6 questions (perimeter, area, units).

### Y4-MAT-ME03 · Duration & am/pm
- CDs: `AC9M4M03`
- Learn: solve problems involving duration of time, including am/pm and
  conversions between time units.
- Assignment: 6 questions (elapsed time, am/pm, convert).

### Y4-MAT-ME04 · Angle types
- CDs: `AC9M4M04`
- Learn: estimate/compare angles using names: acute, obtuse, straight,
  reflex, revolution.
- Assignment: 6 questions (name angles, compare to right angle).

### Y4-MAT-SP01 · Composite shapes
- CDs: `AC9M4SP01`
- Learn: represent and approximate composite shapes/objects using combinations
  of familiar shapes.
- Assignment: 6 questions (identify components, approximate area).

### Y4-MAT-SP02 · Grid references
- CDs: `AC9M4SP02`
- Learn: create/interpret grid reference systems; use references/directions
  to locate positions and pathways.
- Assignment: 6 questions (grid refs, describe pathway).

### Y4-MAT-SP03 · Symmetry
- CDs: `AC9M4SP03`
- Learn: recognise line and rotational symmetry; create symmetrical patterns
  and pictures.
- Assignment: 6 questions (lines of symmetry, rotational, create).

### Y4-MAT-ST01 · Many-to-one data displays
- CDs: `AC9M4ST01`
- Learn: acquire data using digital tools; represent with many-to-one
  pictographs and column graphs.
- Assignment: 6 questions (build/read many-to-one displays).

### Y4-MAT-ST02 · Analysing displays & distribution
- CDs: `AC9M4ST02`
- Learn: analyse effectiveness of different displays; discuss shape of
  distributions and variation.
- Assignment: 6 questions (compare displays, shape, variation).

### Y4-MAT-ST03 · Statistical investigations
- CDs: `AC9M4ST03`
- Learn: conduct statistical investigations via surveys; record, display,
  interpret and communicate.
- Assignment: 6 questions (survey steps, display, interpret, communicate).

### Y4-MAT-PR01 · Likelihood ordering & independent events
- CDs: `AC9M4P01`
- Learn: describe possible everyday events/outcomes; order by likelihood;
  identify independent vs dependent events.
- Assignment: 6 questions (order likelihood, independent/dependent).

### Y4-MAT-PR02 · Repeated chance experiments
- CDs: `AC9M4P02`
- Learn: conduct repeated chance experiments; observe relationships between
  outcomes; describe variation.
- Assignment: 6 questions (run experiments, record, compare).

---

## Year 5 — Mathematics topics

### Y5-MAT-NN01 · Decimals beyond two places
- CDs: `AC9M5N01`
- Learn: interpret, compare and order numbers with more than 2 decimal places
  using place value; represent on number lines.
- Assignment: 6 questions (order decimals, place value, number lines).

### Y5-MAT-NN02 · Factors, multiples & divisibility
- CDs: `AC9M5N02`
- Learn: express natural numbers as products of their factors; recognise
  multiples; determine divisibility.
- Assignment: 6 questions (factor pairs, multiples, divisibility rules).

### Y5-MAT-NN03 · Comparing & ordering fractions
- CDs: `AC9M5N03`
- Learn: compare/order fractions with same/related denominators incl. mixed
  numerals; represent on number lines.
- Assignment: 6 questions (compare, order, mixed numerals).

### Y5-MAT-NN04 · Percentages
- CDs: `AC9M5N04`
- Learn: 100% as the complete whole; use percentages to describe/compare
  relative size; connect to decimals/fractions.
- Assignment: 6 questions (percent↔decimal↔fraction, compare).

### Y5-MAT-NN05 · Adding & subtracting fractions
- CDs: `AC9M5N05`
- Learn: solve addition/subtraction of fractions with same/related
  denominators.
- Assignment: 6 questions (compute sums/differences, word problems).

### Y5-MAT-NN06 · Multiplying larger numbers
- CDs: `AC9M5N06`
- Learn: solve multiplication problems of larger numbers by one-/two-digit
  numbers, checking reasonableness.
- Assignment: 6 questions (column/strategies, estimate to check).

### Y5-MAT-NN07 · Division with remainders
- CDs: `AC9M5N07`
- Learn: solve division problems, interpreting remainders by context (whole
  numbers, decimals or fractions).
- Assignment: 6 questions (divide, interpret remainder, word problems).

### Y5-MAT-NN08 · Checking reasonableness (financial)
- CDs: `AC9M5N08`
- Learn: check/explain reasonableness of solutions incl. financial contexts
  using estimation strategies.
- Assignment: 6 questions (estimate, explain, budgets).

### Y5-MAT-NN09 · Modelling: additive & multiplicative (financial)
- CDs: `AC9M5N09`
- Learn: mathematical modelling for practical additive/multiplicative
  problems incl. financial contexts.
- Assignment: 6 questions (model scenarios, money, explain choices).

### Y5-MAT-NN10 · Algorithms with digital tools
- CDs: `AC9M5N10`
- Learn: create/use algorithms with digital tools to experiment with factors,
  multiples and divisibility; describe patterns.
- Assignment: 6 questions (run algorithms, describe patterns).

### Y5-MAT-AL01 · Multiplication & division inverse
- CDs: `AC9M5A01`
- Learn: recognise multiplication/division as inverse operations; develop
  families of number facts.
- Assignment: 6 questions (fact families, inverse links).

### Y5-MAT-AL02 · Unknowns in equations (×/÷)
- CDs: `AC9M5A02`
- Learn: find unknown values in numerical equations involving multiplication
  and division.
- Assignment: 6 questions (missing values, properties).

### Y5-MAT-ME01 · Choosing metric units
- CDs: `AC9M5M01`
- Learn: choose appropriate metric units for length, mass, capacity; use
  smaller units for accuracy.
- Assignment: 6 questions (choose units, convert, precision).

### Y5-MAT-ME02 · Perimeter & area problems
- CDs: `AC9M5M02`
- Learn: solve practical problems involving perimeter/area of regular and
  irregular shapes using metric units.
- Assignment: 6 questions (perimeter/area problems, irregular shapes).

### Y5-MAT-ME03 · 12- & 24-hour time
- CDs: `AC9M5M03`
- Learn: compare 12-/24-hour time systems; solve conversion problems.
- Assignment: 6 questions (convert, compare, schedules).

### Y5-MAT-ME04 · Measuring angles in degrees
- CDs: `AC9M5M04`
- Learn: estimate, construct and measure angles in degrees using tools incl.
  protractor; relate to angle names.
- Assignment: 6 questions (estimate, measure, construct, name).

### Y5-MAT-SP01 · Nets of objects
- CDs: `AC9M5SP01`
- Learn: connect objects to their nets; build objects from nets using spatial
  and geometric reasoning.
- Assignment: 6 questions (match net to solid, build, visualise).

### Y5-MAT-SP02 · Grid coordinates
- CDs: `AC9M5SP02`
- Learn: construct a grid coordinate system to locate positions; use
  coordinates/directional language to describe position and movement.
- Assignment: 6 questions (read coordinates, plot, describe movement).

### Y5-MAT-SP03 · Transformations & symmetry
- CDs: `AC9M5SP03`
- Learn: describe/perform translations, reflections and rotations; recognise
  what changes/remains the same; identify symmetries.
- Assignment: 6 questions (translate/reflect/rotate, symmetry).

### Y5-MAT-ST01 · Data collection & mode
- CDs: `AC9M5ST01`
- Learn: acquire, validate and represent categorical/discrete numerical data
  using software; discuss distributions in terms of mode and shape.
- Assignment: 6 questions (collect/validate, mode, shape).

### Y5-MAT-ST02 · Line graphs over time
- CDs: `AC9M5ST02`
- Learn: interpret line graphs representing change over time; discuss
  relationships and conclusions.
- Assignment: 6 questions (read line graphs, trends, conclusions).

### Y5-MAT-ST03 · Statistical investigations
- CDs: `AC9M5ST03`
- Learn: plan and conduct statistical investigations, choosing displays,
  interpreting data, communicating findings.
- Assignment: 6 questions (plan, display, interpret, communicate).

### Y5-MAT-PR01 · Equally likely outcomes
- CDs: `AC9M5P01`
- Learn: list possible outcomes of chance experiments with equally likely
  outcomes; compare to those not equally likely.
- Assignment: 6 questions (list outcomes, equally likely).

### Y5-MAT-PR02 · Frequency & estimation of likelihood
- CDs: `AC9M5P02`
- Learn: conduct repeated chance experiments, record results, use frequency
  to compare outcomes and estimate likelihoods.
- Assignment: 6 questions (run experiments, frequency, estimate).

---

## Coverage check
- Year 1: 15/15 ✓ — Year 2: 18/18 ✓ — Year 3: 23/23 ✓ — Year 4: 23/23 ✓ —
  Year 5: 24/24 ✓.
