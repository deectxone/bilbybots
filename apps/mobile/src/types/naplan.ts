/**
 * NAPLAN practice-track types.
 *
 * Mirrors the design in `docs/specs/naplan-test-spec.md`: original
 * "NAPLAN-style" items (never ACARA items — see `naplan-research.md` for the
 * FOI-licence wall) that replicate the real test's structure: domains, item
 * types, durations and locked sections.
 */

export type NaplanYear = '3' | '5' | '7' | '9';

export type NaplanDomain = 'reading' | 'writing' | 'conventions' | 'numeracy';

/**
 * Item types supported by the runner. Real NAPLAN also uses drag-and-drop,
 * hot-spot and audio dictation (spelling) — those land in Phase 2; the facade
 * ships mcq / multi / text / proofread.
 */
export type NaplanItemType = 'mcq' | 'multi' | 'text' | 'proofread';

/** The text a reading question relates to (original, authored stimulus). */
export interface NaplanStimulus {
  id: string;
  title: string;
  body: string[];
}

export interface NaplanItem {
  id: string;
  domain: NaplanDomain;
  year: NaplanYear;
  itemType: NaplanItemType;
  prompt: string;
  /** Options for mcq / multi / proofread. */
  options?: string[];
  /** Correct answer: an option string (mcq/proofread), a text string, or the set of option strings (multi). */
  answer: string | string[];
  /** Skill tag for the results breakdown, e.g. "number & algebra", "spelling". */
  skill: string;
  difficulty: 1 | 2 | 3;
  /** Reading only — the stimulus this item belongs to. */
  stimulusId?: string;
  /** Numeracy only — tool allowed for this item (Y7/9 calculator section). */
  tool?: 'calculator' | 'ruler' | 'protractor';
}

export interface NaplanSection {
  title: string;
  itemIds: string[];
  /** Once the child passes this section they cannot return to it. */
  locked: boolean;
}

export interface NaplanPrompt {
  id: string;
  textType: 'narrative' | 'persuasive';
  title: string;
  text: string;
}

export interface NaplanTest {
  id: string;
  domain: NaplanDomain;
  year: NaplanYear;
  title: string;
  /** Official duration for this domain/year (minutes). */
  durationMin: number;
  sections: NaplanSection[];
  /** Writing only. */
  promptId?: string;
  /** False = shortened facade sample; the real bank ships via the content pipeline. */
  fullLength: boolean;
}

export type NaplanMode = 'practice' | 'timed';

export interface NaplanResult {
  testId: string;
  domain: NaplanDomain;
  year: NaplanYear;
  mode: NaplanMode;
  answers: Record<string, string | string[]>;
  /** itemId -> marked correct. Writing is rubric-based, so it has no items. */
  correct: number;
  total: number;
  /** Writing only: rubric criteria self-marked true. */
  rubric?: string[];
  completedAt: string;
}
