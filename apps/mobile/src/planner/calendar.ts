import { DEFAULT_PLANNER_CONFIG } from './types';

/**
 * School-year calendar for "which week is it now?" (spec §3.2). Defaults to a
 * NSW-ish 40-week year starting the Monday on/before 31 Jan. Overridable so a
 * real per-state term calendar can be supplied later.
 */
export interface CalendarOptions {
  totalWeeks?: number;
  /** Term 1 start date. Defaults to the last Monday on/before 31 Jan. */
  termStart?: Date;
}

export function schoolWeekFromDate(date: Date = new Date(), opts: CalendarOptions = {}): number {
  const totalWeeks = opts.totalWeeks ?? DEFAULT_PLANNER_CONFIG.totalWeeks;
  const start = opts.termStart ?? mondayOnOrBefore(new Date(2026, 0, 31));
  const ms = date.getTime() - start.getTime();
  const week = Math.floor(ms / (7 * 24 * 60 * 60 * 1000)) + 1;
  return Math.max(1, Math.min(totalWeeks, week));
}

export function mondayOnOrBefore(d: Date): Date {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  const dow = x.getDay();
  x.setDate(x.getDate() - ((dow + 6) % 7));
  return x;
}

/** Australian school-year structure: 4 terms, 10 teaching weeks each, ~2-week breaks between. */
export const TERMS_PER_YEAR = 4;
export const WEEKS_PER_TERM = 10;
export const BREAK_WEEKS_BETWEEN_TERMS = 2;

export interface SchoolTermInfo {
  /** 1..4, or null outside the teaching year (e.g. summer holidays). */
  term: number | null;
  /** Week within the current term (1..10), or null in a break. */
  weekInTerm: number | null;
  /** Days until the next term break starts (0 if in a break or summer). */
  daysToBreak: number;
  /** Days until Term 1 of the next school year starts (0 when in summer break). */
  daysToNextYear: number;
  /** True during a term break (including summer). */
  inBreak: boolean;
  /** True after the final term has finished (summer holidays). */
  inSummer: boolean;
}

const DAY = 24 * 60 * 60 * 1000;

/**
 * Describe where today sits in the Australian school year, for a fun "X more
 * days until break" countdown. Follows the same termStart used by the planner
 * (defaults to the last Monday on/before 31 Jan).
 */
export function schoolTermFromDate(date: Date = new Date(), opts: CalendarOptions = {}): SchoolTermInfo {
  const start = opts.termStart ?? mondayOnOrBefore(new Date(2026, 0, 31));
  const now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  const startOfDay = new Date(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0);

  // Teaching week number (1-based), clamped like the planner.
  const rawWeek = Math.floor((now.getTime() - startOfDay.getTime()) / (7 * DAY)) + 1;

  // Position within a repeating [term + break] cycle.
  const cycleWeeks = WEEKS_PER_TERM + BREAK_WEEKS_BETWEEN_TERMS;
  const cycleIndex = Math.floor((rawWeek - 1) / cycleWeeks); // 0..3 for term 1..4
  const withinCycle = ((rawWeek - 1) % cycleWeeks) + 1; // 1..12

  const term = withinCycle <= WEEKS_PER_TERM ? cycleIndex + 1 : null;
  const weekInTerm = withinCycle <= WEEKS_PER_TERM ? withinCycle : null;
  const inBreak = withinCycle > WEEKS_PER_TERM;

  // After term 4's break we're in summer (teaching year over).
  const inSummer = cycleIndex >= TERMS_PER_YEAR - 1 && inBreak;

  let daysToBreak = 0;
  let daysToNextYear = 0;
  if (term !== null) {
    // Weeks remaining in this term (incl. partial final week) -> days.
    const weeksLeft = WEEKS_PER_TERM - weekInTerm! + 1;
    daysToBreak = weeksLeft * 7 - ((now.getDay() + 6) % 7);
    daysToBreak = Math.max(1, daysToBreak);
  } else if (inSummer) {
    // Next year starts ~10 weeks after term 4 ends (summer break).
    daysToNextYear = Math.max(1, (10 - (withinCycle - WEEKS_PER_TERM)) * 7);
  }

  return { term, weekInTerm, daysToBreak, daysToNextYear, inBreak, inSummer };
}
