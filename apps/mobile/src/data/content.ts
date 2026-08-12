import type { Topic, SubjectId } from '../types/curriculum';
import { YEAR1_MATHEMATICS_TOPICS } from './year1/mathematics';
import { YEAR1_ENGLISH_TOPICS } from './year1/english';
import { YEAR1_SCIENCE_TOPICS } from './year1/science';
import { YEAR1_HASS_TOPICS } from './year1/hass';
import { YEAR2_MATHEMATICS_TOPICS } from './year2/mathematics';
import { YEAR2_ENGLISH_TOPICS } from './year2/english';
import { YEAR2_SCIENCE_TOPICS } from './year2/science';
import { YEAR2_HASS_TOPICS } from './year2/hass';
import { YEAR3_MATHEMATICS_TOPICS } from './year3/mathematics';
import { YEAR3_ENGLISH_TOPICS } from './year3/english';
import { YEAR3_SCIENCE_TOPICS } from './year3/science';
import { YEAR3_HASS_TOPICS } from './year3/hass';
import { YEAR4_MATHEMATICS_TOPICS } from './year4/mathematics';
import { YEAR4_ENGLISH_TOPICS } from './year4/english';
import { YEAR4_SCIENCE_TOPICS } from './year4/science';
import { YEAR4_HASS_TOPICS } from './year4/hass';
import { YEAR5_MATHEMATICS_TOPICS } from './year5/mathematics';
import { YEAR5_ENGLISH_TOPICS } from './year5/english';
import { YEAR5_SCIENCE_TOPICS } from './year5/science';
import { YEAR5_HASS_TOPICS } from './year5/hass';
import { YEAR6_MATHEMATICS_TOPICS } from './year6/mathematics';
import { YEAR6_ENGLISH_TOPICS } from './year6/english';
import { YEAR6_SCIENCE_TOPICS } from './year6/science';
import { YEAR6_HASS_TOPICS } from './year6/hass';
import { YEAR7_MATHEMATICS_TOPICS } from './year7/mathematics';
import { YEAR7_ENGLISH_TOPICS } from './year7/english';
import { YEAR7_SCIENCE_TOPICS } from './year7/science';
import { YEAR7_HISTORY_TOPICS } from './year7/history';
import { YEAR8_MATHEMATICS_TOPICS } from './year8/mathematics';
import { YEAR8_ENGLISH_TOPICS } from './year8/english';
import { YEAR8_SCIENCE_TOPICS } from './year8/science';
import { YEAR8_HISTORY_TOPICS } from './year8/history';
import { YEAR9_MATHEMATICS_TOPICS } from './year9/mathematics';
import { YEAR9_ENGLISH_TOPICS } from './year9/english';
import { YEAR9_SCIENCE_TOPICS } from './year9/science';
import { YEAR9_HISTORY_TOPICS } from './year9/history';
import { YEAR10_MATHEMATICS_TOPICS } from './year10/mathematics';
import { YEAR10_ENGLISH_TOPICS } from './year10/english';
import { YEAR10_SCIENCE_TOPICS } from './year10/science';
import { YEAR10_HISTORY_TOPICS } from './year10/history';

/**
 * Year-aware content bank for Years 1–10. The authored lessons, illustrations
 * and assignments in `src/data/yearN/*` are production content (real AC v9.0
 * aligned lessons, not placeholders). What *is* still a facade is week
 * selection: the real adaptive-pacing planner (`docs/specs/adaptive-pacing.md`)
 * will decide which topics land in which week from the child's join date and
 * term calendar; until that's wired up, each subject's week just serves its
 * topics in curriculum order.
 *
 * Primary History topics are authored under the existing `hass` subject id
 * (the AC v9.0 HASS content-description codes, e.g. AC9HS1K01), a proper
 * History/Geography/Civics/Economics split is a follow-up type change, and
 * secondary History topics (e.g. AC9HH7K01) share the same `hass` id today.
 */
const WEEK_TOPIC_COUNT = 3;

const bankByYear: Partial<Record<Topic['year'], Partial<Record<SubjectId, Topic[]>>>> = {
  '1': {
    mathematics: YEAR1_MATHEMATICS_TOPICS,
    english: YEAR1_ENGLISH_TOPICS,
    science: YEAR1_SCIENCE_TOPICS,
    hass: YEAR1_HASS_TOPICS,
  },
  '2': {
    mathematics: YEAR2_MATHEMATICS_TOPICS,
    english: YEAR2_ENGLISH_TOPICS,
    science: YEAR2_SCIENCE_TOPICS,
    hass: YEAR2_HASS_TOPICS,
  },
  '3': {
    mathematics: YEAR3_MATHEMATICS_TOPICS,
    english: YEAR3_ENGLISH_TOPICS,
    science: YEAR3_SCIENCE_TOPICS,
    hass: YEAR3_HASS_TOPICS,
  },
  '4': {
    mathematics: YEAR4_MATHEMATICS_TOPICS,
    english: YEAR4_ENGLISH_TOPICS,
    science: YEAR4_SCIENCE_TOPICS,
    hass: YEAR4_HASS_TOPICS,
  },
  '5': {
    mathematics: YEAR5_MATHEMATICS_TOPICS,
    english: YEAR5_ENGLISH_TOPICS,
    science: YEAR5_SCIENCE_TOPICS,
    hass: YEAR5_HASS_TOPICS,
  },
  '6': {
    mathematics: YEAR6_MATHEMATICS_TOPICS,
    english: YEAR6_ENGLISH_TOPICS,
    science: YEAR6_SCIENCE_TOPICS,
    hass: YEAR6_HASS_TOPICS,
  },
  '7': {
    mathematics: YEAR7_MATHEMATICS_TOPICS,
    english: YEAR7_ENGLISH_TOPICS,
    science: YEAR7_SCIENCE_TOPICS,
    hass: YEAR7_HISTORY_TOPICS,
  },
  '8': {
    mathematics: YEAR8_MATHEMATICS_TOPICS,
    english: YEAR8_ENGLISH_TOPICS,
    science: YEAR8_SCIENCE_TOPICS,
    hass: YEAR8_HISTORY_TOPICS,
  },
  '9': {
    mathematics: YEAR9_MATHEMATICS_TOPICS,
    english: YEAR9_ENGLISH_TOPICS,
    science: YEAR9_SCIENCE_TOPICS,
    hass: YEAR9_HISTORY_TOPICS,
  },
  '10': {
    mathematics: YEAR10_MATHEMATICS_TOPICS,
    english: YEAR10_ENGLISH_TOPICS,
    science: YEAR10_SCIENCE_TOPICS,
    hass: YEAR10_HISTORY_TOPICS,
  },
};

const isYearBank = (year: string): year is Topic['year'] => year in bankByYear;

/** This week's topics per subject, in curriculum order (pending the real planner). */
export function buildWeekPlan(year: string): Topic[] {
  if (!isYearBank(year)) return [];
  const yearBank = bankByYear[year]!;
  return Object.values(yearBank).flatMap((topics) => topics.slice(0, WEEK_TOPIC_COUNT));
}

/** Full authored bank for a year + subject, used by the Progress screen for coverage %. */
export function fullYearBank(year: string, subject: SubjectId): Topic[] {
  if (!isYearBank(year)) return [];
  return bankByYear[year]![subject] ?? [];
}

/** True when a year has any authored curriculum content (Years 1–10 today). */
export function hasYearContent(year: string): boolean {
  return isYearBank(year) && Object.values(bankByYear[year]!).some((b) => b.length > 0);
}

/** Legacy alias used by callers keyed to Year 6 only. */
export function fullYear6Bank(subject: SubjectId): Topic[] {
  return fullYearBank('6', subject);
}
