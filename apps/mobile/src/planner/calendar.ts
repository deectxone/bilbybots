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
