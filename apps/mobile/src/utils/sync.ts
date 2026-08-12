import * as Crypto from 'expo-crypto';
import { supabase } from './supabase';
import { pushPlanSnapshot } from './plan-store';
import { buildPlan, schoolWeekFromDate } from '../planner';
import type { PersistedAppState } from './persistence';
import type { ChildProfile } from '../types/curriculum';
import type { NaplanResult } from '../types/naplan';

/**
 * Mirror the app's on-device state to Supabase when signed in:
 *   - one `families` row per account (owner = signed-in user) + membership
 *   - the single child profile as a `children` row (upsert by id)
 *   - progress as `progress_event` rows: completed topics (kind 'completion'),
 *     earned badges (kind 'badge') and NAPLAN results (kind 'answer')
 *
 * Pushes are idempotent: child is upserted by id and progress events are only
 * inserted when their `kind:ref` is not already present, so re-pushing the
 * whole local state never duplicates rows. Pulls reconstruct the local state
 * from the DB (source of truth for a signed-in account).
 *
 * RLS scopes everything to the user's own families/children (see
 * supabase/migrations/20260812000200_full_schema.sql).
 */

const COMPLETION_KIND = 'completion';
const BADGE_KIND = 'badge';
const RESULT_KIND = 'answer';

async function currentUserId(): Promise<string | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session?.user.id ?? null;
}

async function ensureFamily(): Promise<{ familyId: string } | { error: string }> {
  if (!supabase) return { error: 'Supabase is not configured.' };
  const uid = await currentUserId();
  if (!uid) return { error: 'Not signed in.' };

  const { data: existing, error: listError } = await supabase
    .from('families')
    .select('id')
    .eq('owner_user_id', uid)
    .limit(1);
  if (listError) return { error: listError.message };
  if (existing && existing.length > 0) {
    return { familyId: existing[0].id as string };
  }

  const { data } = await supabase.auth.getSession();
  const sess = data.session;
  const meta = sess?.user?.user_metadata ?? {};
  const name =
    meta?.full_name ?? meta?.name ?? sess?.user?.email?.split('@')[0] ?? 'My family';

  const { data: fam, error: famError } = await supabase
    .from('families')
    .insert({ name: `${name}'s family`, owner_user_id: uid })
    .select('id')
    .single();
  if (famError || !fam) return { error: famError?.message ?? 'Could not create family.' };

  const { error: memberError } = await supabase
    .from('family_members')
    .insert({ family_id: fam.id, user_id: uid });
  if (memberError) return { error: memberError.message };

  return { familyId: fam.id as string };
}

export type PullResult = { state: Partial<PersistedAppState>; error?: string };

/**
 * Load the signed-in account's child + progress from Supabase. Returns an
 * empty `state` when signed out, not configured, or no child exists yet.
 */
export async function pullState(): Promise<PullResult> {
  if (!supabase) return { state: {} };
  const uid = await currentUserId();
  if (!uid) return { state: {} };

  const { data: children, error: childrenError } = await supabase
    .from('children')
    .select('*')
    .order('created_at', { ascending: true })
    .limit(1);
  if (childrenError) return { state: {}, error: childrenError.message };
  if (!children || children.length === 0) return { state: {} };

  const row = children[0];
  const child: ChildProfile = {
    id: row.id as string,
    name: row.name as string,
    avatar: (row.avatar as string | null) ?? 'bilby-green',
    state: row.state as string,
    year: row.year as ChildProfile['year'],
    subjects: Array.isArray(row.subjects) ? (row.subjects as ChildProfile['subjects']) : [],
    createdAt: row.created_at as string,
    joinWeek: typeof row.join_week === 'number' && row.join_week >= 1 ? row.join_week : 1,
    replanned: Boolean(row.replanned),
  };

  const { data: events, error: eventsError } = await supabase
    .from('progress_event')
    .select('kind, ref, payload')
    .eq('child_id', row.id);
  if (eventsError) return { state: { child }, error: eventsError.message };

  const completedTopicIds: string[] = [];
  const earnedBadges: string[] = [];
  const naplanResults: NaplanResult[] = [];
  for (const ev of events ?? []) {
    if (ev.kind === COMPLETION_KIND && typeof ev.ref === 'string') completedTopicIds.push(ev.ref);
    else if (ev.kind === BADGE_KIND && typeof ev.ref === 'string') earnedBadges.push(ev.ref);
    else if (ev.kind === RESULT_KIND && isNaplanResult(ev.payload)) naplanResults.push(ev.payload);
  }
  naplanResults.sort((a, b) => b.completedAt.localeCompare(a.completedAt));

  return {
    state: {
      child,
      completedTopicIds,
      earnedBadges,
      naplanResults,
      dbFamilyId: row.family_id as string,
      dbChildId: row.id as string,
      dbOwnerUserId: uid,
    },
  };
}

export type PushResult =
  | { ok: true; dbFamilyId?: string; dbChildId?: string; dbOwnerUserId?: string }
  | { ok: false; error: string };

/**
 * Mirror the local state to Supabase. No-op (ok) when signed out, not
 * configured, there is no child, or the persisted sync ids belong to a
 * different account (so one account's data is never pushed into another's).
 */
export async function pushState(state: PersistedAppState): Promise<PushResult> {
  if (!supabase) return { ok: true };
  if (!state.child) return { ok: true };

  const uid = await currentUserId();
  if (!uid) return { ok: true };
  if (state.dbOwnerUserId && state.dbOwnerUserId !== uid) return { ok: true };

  const fam = await ensureFamily();
  if ('error' in fam) return { ok: false, error: fam.error };

  const child = state.child;
  const dbChildId = state.dbChildId ?? Crypto.randomUUID();

  const { error: childError } = await supabase
    .from('children')
    .upsert(
      {
        id: dbChildId,
        family_id: fam.familyId,
        name: child.name,
        avatar: child.avatar,
        state: child.state,
        year: child.year,
        subjects: child.subjects,
        join_week: child.replanned ? schoolWeekFromDate() : child.joinWeek,
      },
      { onConflict: 'id' },
    );
  if (childError) return { ok: false, error: childError.message };

  const plan = buildPlan({
    year: child.year,
    subjects: child.subjects,
    joinWeek: child.replanned ? schoolWeekFromDate() : child.joinWeek,
    learnedTopicIds: child.replanned ? state.completedTopicIds : [],
  });
  const planResult = await pushPlanSnapshot(dbChildId, plan);
  if (!planResult.ok) return { ok: false, error: planResult.error };

  const refs: { kind: string; ref: string; payload?: unknown }[] = [
    ...state.completedTopicIds.map((id) => ({ kind: COMPLETION_KIND, ref: id })),
    ...state.earnedBadges.map((b) => ({ kind: BADGE_KIND, ref: b })),
    ...state.naplanResults.map((r) => ({
      kind: RESULT_KIND,
      ref: `${r.testId}:${r.completedAt}`,
      payload: r,
    })),
  ];

  if (refs.length > 0) {
    const { data: existingRows } = await supabase
      .from('progress_event')
      .select('kind, ref')
      .eq('child_id', dbChildId);
    const existing = new Set((existingRows ?? []).map((r) => `${r.kind}:${r.ref}`));
    const toInsert = refs
      .filter((r) => !existing.has(`${r.kind}:${r.ref}`))
      .map((r) => ({ child_id: dbChildId, kind: r.kind, ref: r.ref, payload: r.payload ?? {} }));
    if (toInsert.length > 0) {
      const { error: progressError } = await supabase.from('progress_event').insert(toInsert);
      if (progressError) return { ok: false, error: progressError.message };
    }
  }

  return { ok: true, dbFamilyId: fam.familyId, dbChildId, dbOwnerUserId: uid };
}

function isNaplanResult(value: unknown): value is NaplanResult {
  if (!value || typeof value !== 'object') return false;
  const r = value as Record<string, unknown>;
  return (
    typeof r.testId === 'string' &&
    typeof r.domain === 'string' &&
    typeof r.year === 'string' &&
    (r.mode === 'practice' || r.mode === 'timed') &&
    typeof r.correct === 'number' &&
    typeof r.total === 'number' &&
    typeof r.completedAt === 'string' &&
    typeof r.answers === 'object' &&
    r.answers !== null
  );
}
