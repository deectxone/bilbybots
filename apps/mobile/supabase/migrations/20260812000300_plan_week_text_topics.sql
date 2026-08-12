-- plan_week.topics was authored as uuid[] before topic content lived in the
-- DB; topics are keyed by authored string ids (e.g. "Y6-MAT-NN01") today.
-- Widen the column to text[] so the app can persist planner snapshots now.

alter table public.plan_week
  alter column topics type text[] using topics::text[];
