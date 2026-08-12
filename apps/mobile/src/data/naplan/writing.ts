import type { NaplanPrompt } from '../../types/naplan';

/**
 * Original NAPLAN-style WRITING prompts (ACARA's released prompts are
 * Excluded Material and cannot be reused — every prompt below is our own
 * wording). Real NAPLAN gives Y3/5 a different prompt pool from Y7/9, and
 * a sitting is always ONE prompt of ONE text type (narrative or
 * persuasive). Here the app randomly draws one prompt from the matching
 * pool each time a practice test is built, so repeat sessions see variety.
 *
 * id must contain the substring 'Y35' or 'Y79' — buildNaplanTest() in
 * tests.ts filters the pool on that substring, it is not cosmetic.
 */
export const WRITING_PROMPTS: NaplanPrompt[] = [
  // ---- Year 3 / 5 pool -----------------------------------------------
  {
    id: 'WP-Y35-NARR-01',
    textType: 'narrative',
    title: 'A Surprising Morning',
    text:
      'One morning, something strange happened in the school yard. Write a story about what happened and what you did next.',
  },
  {
    id: 'WP-Y35-NARR-02',
    textType: 'narrative',
    title: 'The Door That Wasn’t There Before',
    text:
      'You are exploring somewhere familiar when you notice a door you have never seen before. Write a story about what happens when you open it.',
  },
  {
    id: 'WP-Y35-NARR-03',
    textType: 'narrative',
    title: 'The Smallest Helper',
    text:
      'Write a story about a very small creature who does something very big. It could be an ant, a mouse, a beetle — you decide.',
  },
  {
    id: 'WP-Y35-PERS-01',
    textType: 'persuasive',
    title: 'A Garden for Every School',
    text:
      'Should every school have a vegetable garden? Write a persuasive text to convince your principal that your school should — or should not — build one.',
  },
  {
    id: 'WP-Y35-PERS-02',
    textType: 'persuasive',
    title: 'Pets at School',
    text:
      'Some students think it would be great to bring a class pet to school. Write a persuasive text arguing for or against having a pet in the classroom.',
  },
  {
    id: 'WP-Y35-PERS-03',
    textType: 'persuasive',
    title: 'The Best School Excursion',
    text:
      'Your class can go on one excursion this year. Write a persuasive text convincing your teacher and classmates where you should go and why.',
  },
  // ---- Year 7 / 9 pool -----------------------------------------------
  {
    id: 'WP-Y79-NARR-01',
    textType: 'narrative',
    title: 'The Choice',
    text:
      'Write a story about a character who must make a difficult decision. Show how the choice they make changes what happens.',
  },
  {
    id: 'WP-Y79-NARR-02',
    textType: 'narrative',
    title: 'The Last Message',
    text:
      'Your character finds an old message meant for someone else — a letter, a note, a voicemail, a text. Write a story about what they do once they read or hear it.',
  },
  {
    id: 'WP-Y79-NARR-03',
    textType: 'narrative',
    title: 'Out of Time',
    text:
      'Write a story that takes place in the final hour before something important happens. Build the tension as the deadline gets closer.',
  },
  {
    id: 'WP-Y79-PERS-01',
    textType: 'persuasive',
    title: 'Year-Round School',
    text:
      'Some people argue that long school holidays should be replaced with shorter breaks spread throughout the year. Write a persuasive text arguing for or against this idea.',
  },
  {
    id: 'WP-Y79-PERS-02',
    textType: 'persuasive',
    title: 'Should Homework Be Optional?',
    text:
      'Some schools are considering making homework optional rather than compulsory. Write a persuasive text arguing for or against this change.',
  },
  {
    id: 'WP-Y79-PERS-03',
    textType: 'persuasive',
    title: 'Phones in the Classroom',
    text:
      'Some schools ban mobile phones completely, while others allow students to use them in class. Write a persuasive text arguing which approach your school should take.',
  },
];

/** Original self-marking rubric criteria — our own wording for the published
 * NAPLAN writing criteria (audience, text structure, ideas, vocabulary,
 * cohesion, sentence structure, spelling, punctuation). */
export const WRITING_RUBRIC: ReadonlyArray<{ id: string; label: string }> = [
  { id: 'audience', label: 'I kept my purpose and audience in mind' },
  { id: 'structure', label: 'My writing has a clear beginning, middle and end' },
  { id: 'ideas', label: 'My ideas are developed with detail and examples' },
  { id: 'vocabulary', label: 'I used words that make my writing vivid and precise' },
  { id: 'cohesion', label: 'My ideas connect smoothly from one sentence to the next' },
  { id: 'sentences', label: 'My sentences are varied and complete' },
  { id: 'spelling', label: 'I checked my spelling' },
  { id: 'punctuation', label: 'I used capitals and punctuation correctly' },
];
