-- Contact messages from the in-app "Contact us" form.
-- Run this once in Supabase Dashboard → SQL Editor (or `supabase db push`).
--
-- The app inserts rows as the `anon` role (pre-sign-in visitors) or the
-- `authenticated` role (signed-in users), carrying the signed-in user's email
-- when available. There is deliberately no public SELECT policy: you read the
-- submissions from the dashboard Table Editor (the service role bypasses RLS).

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Anyone can submit a contact message"
  on public.contact_messages
  for insert
  with check (true);
