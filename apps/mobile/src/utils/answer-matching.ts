const NUMERIC_ANSWER = /^-?\d+(\.\d+)?$/;

/** Pure numeric comparison, tolerating thousands separators (spaces/commas). */
function normalizeNumeric(s: string): string {
  return s.replace(/[\s,]/g, '');
}

/**
 * Canonical form for free-text answers:
 *   - trimmed + lowercased
 *   - runs of whitespace collapsed to a single space ("a  b" → "a b")
 *   - spaces around commas removed ("-8, -3, 0, 5" → "-8,-3,0,5")
 * This makes list/ordering answers tolerant of the way a kid types them
 * ("-8,-3,0,5" matches "-8, -3, 0, 5"), while word answers still compare
 * meaningfully.
 */
export function normalizeAnswer(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ',');
}

/** True when two free-text answers match (numeric-tolerant + whitespace-tolerant). */
export function isAnswerCorrect(given: string, expected: string): boolean {
  const actual = normalizeAnswer(given);
  const expectedNorm = normalizeAnswer(expected);

  const givenDigits = normalizeNumeric(actual);
  const expectedDigits = normalizeNumeric(expectedNorm);
  if (NUMERIC_ANSWER.test(givenDigits) && NUMERIC_ANSWER.test(expectedDigits)) {
    return givenDigits === expectedDigits;
  }
  return actual === expectedNorm;
}
