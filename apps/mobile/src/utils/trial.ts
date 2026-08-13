import { supabase } from './supabase';

/**
 * 14-day free trial: every account gets `public.users.trial_ends_at` set at
 * sign-up (see supabase/migrations/20260813000100_trial_period.sql). No
 * paywall/subscription yet — this only tracks the trial window so the app
 * can show days-left and block access once it lapses.
 */
export async function fetchTrialEndsAt(): Promise<string | null> {
  if (!supabase) return null;
  const { data: sessionData } = await supabase.auth.getSession();
  const uid = sessionData.session?.user.id;
  if (!uid) return null;

  const { data, error } = await supabase
    .from('users')
    .select('trial_ends_at')
    .eq('id', uid)
    .maybeSingle();
  if (error || !data) return null;
  return (data.trial_ends_at as string | null) ?? null;
}

/** Whole days left before `trialEndsAt`, floored at 0 (never negative). */
export function trialDaysLeft(trialEndsAt: string): number {
  const ms = new Date(trialEndsAt).getTime() - Date.now();
  return Math.max(0, Math.ceil(ms / (24 * 60 * 60 * 1000)));
}

export function isTrialExpired(trialEndsAt: string): boolean {
  return new Date(trialEndsAt).getTime() <= Date.now();
}
