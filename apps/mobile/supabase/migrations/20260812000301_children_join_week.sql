-- Persist the parent-set join week + re-planning flag on the child so the
-- adaptive-pacing plan input survives across devices.

alter table public.children
  add column if not exists join_week integer not null default 1,
  add column if not exists replanned boolean not null default false;
