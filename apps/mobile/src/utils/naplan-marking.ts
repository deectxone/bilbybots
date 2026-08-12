import type { NaplanItem } from '../types/naplan';
import { isAnswerCorrect } from './answer-matching';

/** Multi-select items need exact option-set matching (order-insensitive). */
function isMultiCorrect(expected: string[], actual: string[]): boolean {
  if (expected.length !== actual.length) return false;
  const actualSet = new Set(actual);
  return expected.every((o) => actualSet.has(o));
}

export function isItemCorrect(item: NaplanItem, given: string | string[] | undefined): boolean {
  if (given === undefined) return false;

  if (item.itemType === 'multi') {
    return isMultiCorrect(item.answer as string[], given as string[]);
  }

  return isAnswerCorrect(given as string, item.answer as string);
}
