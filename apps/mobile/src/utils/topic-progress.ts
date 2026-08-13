/**
 * Shared scoring rule for practice-test stars, used by both the lesson
 * screen (reward phase) and the week-plan subject pills (badge).
 */
export function starsForScore(correct: number, total: number): 1 | 2 | 3 {
  if (total <= 0 || correct === total) return 3;
  if (correct / total >= 0.5) return 2;
  return 1;
}
