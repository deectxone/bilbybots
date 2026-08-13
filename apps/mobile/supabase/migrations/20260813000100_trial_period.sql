-- 14-day free trial: every account gets a trial_ends_at stamp at sign-up.
-- The app reads its own row (public.users, RLS: "users: read own") to show
-- days-left in the header and gate access once the trial lapses. Paywall /
-- real subscriptions are out of scope for now (see AGENTS.md roadmap note);
-- this only tracks the trial window.

alter table public.users
  add column if not exists trial_ends_at timestamptz not null default (now() + interval '14 days');

-- Re-create the sign-up trigger so new users get an explicit trial window
-- (the column default already covers this, but be explicit for clarity and
-- so this migration stays correct if the default is ever changed).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, display_name, trial_ends_at)
  values (
    new.id,
    new.email,
    coalesce(
      new.raw_user_meta_data->>'full_name',
      new.raw_user_meta_data->>'name',
      split_part(coalesce(new.email, ''), '@', 1)
    ),
    now() + interval '14 days'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
