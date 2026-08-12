import { supabase } from './supabase';
import type { PlanSnapshot } from '../planner';

export type PlanStoreResult = { ok: true } | { ok: false; error: string };

/**
 * Persist an adaptive-pacing snapshot to `plan_snapshot` + `plan_week`
 * (docs/specs/adaptive-pacing.md §4 Step 4 / §7). Snapshots are immutable and
 * versioned: if the child's latest snapshot already has the same `input_hash`,
 * the write is skipped so re-pushes never duplicate rows. Old snapshots are
 * kept (archived) rather than deleted, so "why this plan?" stays answerable.
 */
export async function pushPlanSnapshot(childId: string, snapshot: PlanSnapshot): Promise<PlanStoreResult> {
  if (!supabase) return { ok: true };

  const { data: latest, error: latestError } = await supabase
    .from('plan_snapshot')
    .select('input_hash')
    .eq('child_id', childId)
    .order('generated_at', { ascending: false })
    .limit(1);
  if (latestError) return { ok: false, error: latestError.message };
  if (latest && latest.length > 0 && latest[0].input_hash === snapshot.inputHash) {
    return { ok: true };
  }

  const { data: inserted, error: insertError } = await supabase
    .from('plan_snapshot')
    .insert({
      child_id: childId,
      algorithm_version: snapshot.algorithmVersion,
      input_hash: snapshot.inputHash,
      coverage_pct: snapshot.coverage.pct,
    })
    .select('id')
    .single();
  if (insertError || !inserted) {
    return { ok: false, error: insertError?.message ?? 'Could not save plan snapshot.' };
  }

  const rows = snapshot.weeks.flatMap((w) => {
    const bySubject = new Map<string, { topics: string[]; counts: Record<string, number> }>();
    for (const e of w.entries) {
      const group = bySubject.get(e.topic.subject) ?? { topics: [], counts: {} };
      group.topics.push(e.topic.id);
      group.counts[e.topic.id] = e.questionCount;
      bySubject.set(e.topic.subject, group);
    }
    return [...bySubject.entries()].map(([subject, g]) => ({
      snapshot_id: inserted.id,
      week_index: w.week,
      subject,
      topics: g.topics,
      question_counts: g.counts,
    }));
  });

  if (rows.length > 0) {
    const { error: weeksError } = await supabase.from('plan_week').insert(rows);
    if (weeksError) return { ok: false, error: weeksError.message };
  }

  return { ok: true };
}
