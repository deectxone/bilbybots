-- BilbyBots full Supabase schema (tables, auth trigger, RLS).
-- Run this once in Supabase Dashboard -> SQL Editor. Idempotent, so it is
-- safe to run even after the earlier contact_messages migration was applied.
--
-- Model mirrors docs/architecture.md (section 5). RLS scopes every family
-- table by "families the current user belongs to", and child data by "children
-- of those families" (docs/architecture.md section 5 / section 7).
--
-- Writes to the curriculum content tables (curriculum/topic/lesson/question/
-- assignment/badge) are deliberately restricted to the service role; the app
-- reads them as an authenticated user. The owner reads contact submissions in
-- the dashboard Table Editor.

-- ============================================================
-- 1. Contact form
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  with check (true);

-- ============================================================
-- 2. Users (mirrors auth.users, auto-created on sign-up)
-- ============================================================
create table if not exists public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text,
  role text not null default 'parent' check (role in ('parent', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.users enable row level security;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(coalesce(new.email, ''), '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

drop policy if exists "users: read own" on public.users;
create policy "users: read own" on public.users
  for select using (auth.uid() = id);
drop policy if exists "users: update own" on public.users;
create policy "users: update own" on public.users
  for update using (auth.uid() = id);

-- ============================================================
-- 3. Families + membership
-- ============================================================
create table if not exists public.families (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  owner_user_id uuid not null references public.users (id) on delete cascade,
  plan_tier text not null default 'lite' check (plan_tier in ('lite', 'pro')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.families enable row level security;

create table if not exists public.family_members (
  family_id uuid not null references public.families (id) on delete cascade,
  user_id uuid not null references public.users (id) on delete cascade,
  role text not null default 'parent',
  created_at timestamptz not null default now(),
  primary key (family_id, user_id)
);

alter table public.family_members enable row level security;

-- ============================================================
-- 4. Children
-- ============================================================
create table if not exists public.children (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families (id) on delete cascade,
  name text not null,
  avatar text,
  state text not null default 'nsw',
  year text not null,
  subjects jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.children enable row level security;

-- ============================================================
-- 5. Curriculum content (read-only to the app)
-- ============================================================
create table if not exists public.curriculum (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  version text not null,
  learning_area text not null,
  strand text,
  sub_strand text,
  cd_text text not null,
  elaborations jsonb not null default '[]'::jsonb,
  achievement_standard_id text,
  state_mapping jsonb not null default '{}'::jsonb
);

alter table public.curriculum enable row level security;

create table if not exists public.topic (
  id uuid primary key default gen_random_uuid(),
  curriculum_codes text[] not null default '{}',
  title text not null,
  learning_area text not null,
  prereq_topic_ids uuid[] not null default '{}',
  nominal_questions integer not null default 0,
  min_depth_questions integer not null default 0
);

alter table public.topic enable row level security;

create table if not exists public.lesson (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topic (id) on delete cascade,
  title text not null,
  body_json jsonb not null default '{}'::jsonb,
  media_refs jsonb not null default '[]'::jsonb
);

alter table public.lesson enable row level security;

create table if not exists public.assignment (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references public.topic (id) on delete cascade,
  questions_meta jsonb not null default '{}'::jsonb,
  depth_level integer not null default 1
);

alter table public.assignment enable row level security;

create table if not exists public.question (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references public.lesson (id) on delete cascade,
  assignment_id uuid references public.assignment (id) on delete cascade,
  prompt text not null,
  type text not null,
  options jsonb,
  answer text,
  difficulty integer not null default 1,
  check (num_nonnulls(lesson_id, assignment_id) = 1)
);

alter table public.question enable row level security;

-- ============================================================
-- 6. Planning (adaptive pacing)
-- ============================================================
create table if not exists public.plan_snapshot (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children (id) on delete cascade,
  algorithm_version text not null,
  input_hash text not null,
  coverage_pct numeric not null default 100,
  generated_at timestamptz not null default now(),
  approved_at timestamptz
);

alter table public.plan_snapshot enable row level security;

create table if not exists public.plan_week (
  id uuid primary key default gen_random_uuid(),
  snapshot_id uuid not null references public.plan_snapshot (id) on delete cascade,
  week_index integer not null,
  subject text not null,
  topics uuid[] not null default '{}',
  question_counts jsonb not null default '{}'::jsonb
);

alter table public.plan_week enable row level security;

-- ============================================================
-- 7. Progress + badges
-- ============================================================
create table if not exists public.progress_event (
  id uuid primary key default gen_random_uuid(),
  child_id uuid not null references public.children (id) on delete cascade,
  kind text not null check (kind in ('xp', 'answer', 'completion', 'badge')),
  ref text,
  payload jsonb not null default '{}'::jsonb,
  ts timestamptz not null default now()
);

alter table public.progress_event enable row level security;

create table if not exists public.badge (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  icon text,
  criteria text
);

alter table public.badge enable row level security;

create table if not exists public.child_badge (
  child_id uuid not null references public.children (id) on delete cascade,
  badge_id uuid not null references public.badge (id) on delete cascade,
  earned_at timestamptz not null default now(),
  primary key (child_id, badge_id)
);

alter table public.child_badge enable row level security;

-- ============================================================
-- 8. Subscription
-- ============================================================
create table if not exists public.subscription (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.families (id) on delete cascade,
  tier text not null default 'lite' check (tier in ('lite', 'pro')),
  started_at timestamptz not null default now(),
  renews_at timestamptz,
  provider text
);

alter table public.subscription enable row level security;

-- ============================================================
-- 9. RLS helper functions + updated_at maintenance
-- ============================================================
create or replace function public.user_family_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select fm.family_id
  from public.family_members fm
  where fm.user_id = auth.uid();
$$;

create or replace function public.user_child_ids()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select c.id
  from public.children c
  where c.family_id in (select public.user_family_ids());
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_updated_at on public.users;
create trigger users_updated_at before update on public.users
  for each row execute function public.set_updated_at();

drop trigger if exists families_updated_at on public.families;
create trigger families_updated_at before update on public.families
  for each row execute function public.set_updated_at();

drop trigger if exists children_updated_at on public.children;
create trigger children_updated_at before update on public.children
  for each row execute function public.set_updated_at();

-- ============================================================
-- 10. RLS policies
-- ============================================================
drop policy if exists "families: members read" on public.families;
create policy "families: members read" on public.families
  for select using (id in (select public.user_family_ids()));
drop policy if exists "families: owner inserts" on public.families;
create policy "families: owner inserts" on public.families
  for insert with check (auth.uid() = owner_user_id);
drop policy if exists "families: owner updates" on public.families;
create policy "families: owner updates" on public.families
  for update using (auth.uid() = owner_user_id);

drop policy if exists "family_members: read own" on public.family_members;
create policy "family_members: read own" on public.family_members
  for select using (user_id = auth.uid());
drop policy if exists "family_members: owner manages" on public.family_members;
create policy "family_members: owner manages" on public.family_members
  for all
  using (family_id in (select f.id from public.families f where f.owner_user_id = auth.uid()))
  with check (family_id in (select f.id from public.families f where f.owner_user_id = auth.uid()));

drop policy if exists "children: family access" on public.children;
create policy "children: family access" on public.children
  for all
  using (family_id in (select public.user_family_ids()))
  with check (family_id in (select public.user_family_ids()));

drop policy if exists "plan_snapshot: child access" on public.plan_snapshot;
create policy "plan_snapshot: child access" on public.plan_snapshot
  for all
  using (child_id in (select public.user_child_ids()))
  with check (child_id in (select public.user_child_ids()));

drop policy if exists "plan_week: via snapshot" on public.plan_week;
create policy "plan_week: via snapshot" on public.plan_week
  for all
  using (snapshot_id in (select ps.id from public.plan_snapshot ps where ps.child_id in (select public.user_child_ids())))
  with check (snapshot_id in (select ps.id from public.plan_snapshot ps where ps.child_id in (select public.user_child_ids())));

drop policy if exists "progress_event: child access" on public.progress_event;
create policy "progress_event: child access" on public.progress_event
  for all
  using (child_id in (select public.user_child_ids()))
  with check (child_id in (select public.user_child_ids()));

drop policy if exists "child_badge: child access" on public.child_badge;
create policy "child_badge: child access" on public.child_badge
  for all
  using (child_id in (select public.user_child_ids()))
  with check (child_id in (select public.user_child_ids()));

drop policy if exists "subscription: family access" on public.subscription;
create policy "subscription: family access" on public.subscription
  for all
  using (family_id in (select public.user_family_ids()))
  with check (family_id in (select public.user_family_ids()));

drop policy if exists "curriculum: read" on public.curriculum;
create policy "curriculum: read" on public.curriculum
  for select to authenticated using (true);
drop policy if exists "topic: read" on public.topic;
create policy "topic: read" on public.topic
  for select to authenticated using (true);
drop policy if exists "lesson: read" on public.lesson;
create policy "lesson: read" on public.lesson
  for select to authenticated using (true);
drop policy if exists "assignment: read" on public.assignment;
create policy "assignment: read" on public.assignment
  for select to authenticated using (true);
drop policy if exists "question: read" on public.question;
create policy "question: read" on public.question
  for select to authenticated using (true);
drop policy if exists "badge: read" on public.badge;
create policy "badge: read" on public.badge
  for select to authenticated using (true);

-- ============================================================
-- 11. Indexes for the query paths above
-- ============================================================
create index if not exists family_members_user_idx on public.family_members (user_id);
create index if not exists family_members_family_idx on public.family_members (family_id);
create index if not exists children_family_idx on public.children (family_id);
create index if not exists plan_snapshot_child_idx on public.plan_snapshot (child_id);
create index if not exists progress_event_child_ts_idx on public.progress_event (child_id, ts);
create index if not exists child_badge_child_idx on public.child_badge (child_id);
