import type { NaplanItem } from '../types/naplan';

const NUMERIC_ANSWER = /^-?\d+(\.\d+)?$/;

/** Numeric answers tolerate thousands separators (spaces/commas) so a typed
 * "600 405" / "600,405" / "600405" all match. Non-numeric answers compare
 * trimmed + case-insensitive. Mirrors the lesson runner's marking. */
function normalizeNumeric(s: string): string {
  return s.replace(/[\s,]/g, '');
}

export function isItemCorrect(item: NaplanItem, given: string | string[] | undefined): boolean {
  if (given === undefined) return false;

  if (item.itemType === 'multi') {
    const expected = item.answer as string[];
    const actual = given as string[];
    if (expected.length !== actual.length) return false;
    const actualSet = new Set(actual);
    return expected.every((o) => actualSet.has(o));
  }

  const expected = item.answer as string;
  const actual = (given as string).trim().toLowerCase();
  const expectedNorm = expected.trim().toLowerCase();

  if (NUMERIC_ANSWER.test(actual) && NUMERIC_ANSWER.test(expectedNorm)) {
    return normalizeNumeric(actual) === normalizeNumeric(expectedNorm);
  }
  return actual === expectedNorm;
}
