-- Rework pipeline_* tables to be tenant-scoped, so the same schema can
-- later serve multiple practitioner clients (each a "site"), not just
-- soul-explorer.com. Applied immediately after the initial schema, with
-- zero real data yet, so a clean drop + recreate is simplest and safest.

drop table if exists pipeline_documents;
drop table if exists pipeline_email_log;
drop table if exists pipeline_step_log;
drop table if exists pipeline_doc_types;
drop table if exists pipeline_practices;
drop table if exists pipeline_clients;

create table pipeline_sites (
  id uuid primary key default extensions.uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  owner_user_id uuid references auth.users(id),
  created_at timestamptz not null default now()
);

create table pipeline_site_members (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  user_id uuid not null references auth.users(id),
  role text not null default 'owner' check (role in ('owner','editor','viewer')),
  unique (site_id, user_id)
);

create table pipeline_clients (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  session_type text not null default 'QHHT',
  step_id text not null default 'contact',
  session_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table pipeline_step_log (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  client_id uuid not null references pipeline_clients(id) on delete cascade,
  step_id text not null,
  changed_at timestamptz not null default now()
);

create table pipeline_email_log (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  client_id uuid not null references pipeline_clients(id) on delete cascade,
  template_id text not null,
  subject text,
  sent_at timestamptz not null default now()
);

create table pipeline_practices (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  slug text not null,
  name text not null,
  full_name text not null,
  session_noun text,
  accent text,
  provider_name text,
  provider_email text,
  provider_phone text,
  provider_address text,
  brand text,
  client_sign_label text,
  provider_sign_label text,
  logo_image text,
  kind text not null default 'session' check (kind in ('session','studio')),
  builtin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (site_id, slug)
);

create table pipeline_doc_types (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  slug text not null,
  label text not null,
  blurb text,
  kind text not null default 'session' check (kind in ('session','studio')),
  signature text not null default 'none' check (signature in ('both','client','none')),
  title text,
  intro text,
  builtin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (site_id, slug)
);

create table pipeline_documents (
  id uuid primary key default extensions.uuid_generate_v4(),
  site_id uuid not null references pipeline_sites(id) on delete cascade,
  client_id uuid references pipeline_clients(id) on delete set null,
  practice_id uuid references pipeline_practices(id),
  doc_type_id uuid references pipeline_doc_types(id),
  title text,
  intro text,
  sections jsonb not null default '[]'::jsonb,
  client_name text,
  session_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index pipeline_clients_site_id_idx on pipeline_clients(site_id);
create index pipeline_step_log_client_id_idx on pipeline_step_log(client_id);
create index pipeline_email_log_client_id_idx on pipeline_email_log(client_id);
create index pipeline_practices_site_id_idx on pipeline_practices(site_id);
create index pipeline_doc_types_site_id_idx on pipeline_doc_types(site_id);
create index pipeline_documents_site_id_idx on pipeline_documents(site_id);
create index pipeline_site_members_user_id_idx on pipeline_site_members(user_id);

-- RLS: every table scoped to sites the current user is a member of.
-- pipeline_site_members' own policy checks user_id = auth.uid() directly
-- (never subqueries itself — a self-subquery here causes Postgres
-- "infinite recursion" errors, and since every other table's policy
-- subqueries this one, that breaks RLS reads schema-wide, not just here).
alter table pipeline_sites enable row level security;
alter table pipeline_site_members enable row level security;
alter table pipeline_clients enable row level security;
alter table pipeline_step_log enable row level security;
alter table pipeline_email_log enable row level security;
alter table pipeline_practices enable row level security;
alter table pipeline_doc_types enable row level security;
alter table pipeline_documents enable row level security;

create policy "member sites visible" on pipeline_sites
  for select using (
    id in (select site_id from pipeline_site_members where user_id = auth.uid())
  );
create policy "owner can update site" on pipeline_sites
  for update using (owner_user_id = auth.uid());

create policy "own memberships visible" on pipeline_site_members
  for select using (user_id = auth.uid());

create policy "site members full access" on pipeline_clients
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
create policy "site members full access" on pipeline_step_log
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
create policy "site members full access" on pipeline_email_log
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
create policy "site members full access" on pipeline_practices
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
create policy "site members full access" on pipeline_doc_types
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
create policy "site members full access" on pipeline_documents
  for all using (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()))
  with check (site_id in (select site_id from pipeline_site_members where user_id = auth.uid()));
