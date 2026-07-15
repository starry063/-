create table if not exists public.wanxiang_user_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.wanxiang_user_state enable row level security;

create policy "wanxiang_select_own_state"
  on public.wanxiang_user_state
  for select
  using (auth.uid() = user_id);

create policy "wanxiang_insert_own_state"
  on public.wanxiang_user_state
  for insert
  with check (auth.uid() = user_id);

create policy "wanxiang_update_own_state"
  on public.wanxiang_user_state
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
