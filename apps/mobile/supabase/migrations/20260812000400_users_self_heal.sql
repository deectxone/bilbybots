-- Backfill public.users for auth users that signed in before the
-- on_auth_user_created trigger existed (their family/child sync fails on the
-- families.owner_user_id -> public.users FK), and let the app self-heal its
-- own users row going forward (RLS-scoped insert of auth.uid() = id).

insert into public.users (id, email, display_name)
select
  u.id,
  u.email,
  coalesce(
    u.raw_user_meta_data->>'full_name',
    u.raw_user_meta_data->>'name',
    split_part(coalesce(u.email, ''), '@', 1)
  )
from auth.users u
on conflict (id) do nothing;

drop policy if exists "users: insert own" on public.users;
create policy "users: insert own" on public.users
  for insert with check (auth.uid() = id);
