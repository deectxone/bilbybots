-- The subject-pill progress feature added a 'started' progress_event kind
-- (lesson read, reached the practice test) alongside the existing
-- 'completion' kind, but progress_event.kind's check constraint still only
-- allowed ('xp', 'answer', 'completion', 'badge'). Since sync.ts pushes all
-- of a child's pending progress events (started + completion + badge +
-- answer) in one batch insert, any 'started' row made the WHOLE insert
-- violate the constraint and fail — so no progress at all (not just
-- 'started' events) was being persisted to Supabase for any child with a
-- lesson in progress.

alter table public.progress_event drop constraint if exists progress_event_kind_check;
alter table public.progress_event
  add constraint progress_event_kind_check check (kind in ('xp', 'answer', 'completion', 'badge', 'started'));
