-- Soul Explorer admin/pipeline schema
-- Backs the practitioner admin tool (client sales pipeline, documents,
-- practices, document templates) in soul-explorer-site.
-- Namespaced with a pipeline_ prefix — deliberately separate from the
-- existing clients/sessions/oracle_* tables, which back the live
-- Whispers Oracle and QHHT session tooling. Do not modify those here.

create table pipeline_clients (
  id uuid primary key default extensions.uuid_generate_v4(),
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
  client_id uuid not null references pipeline_clients(id) on delete cascade,
  step_id text not null,
  changed_at timestamptz not null default now()
);

create table pipeline_email_log (
  id uuid primary key default extensions.uuid_generate_v4(),
  client_id uuid not null references pipeline_clients(id) on delete cascade,
  template_id text not null,
  subject text,
  sent_at timestamptz not null default now()
);

create table pipeline_practices (
  id text primary key,
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
  updated_at timestamptz not null default now()
);

create table pipeline_doc_types (
  id text primary key,
  label text not null,
  blurb text,
  kind text not null default 'session' check (kind in ('session','studio')),
  signature text not null default 'none' check (signature in ('both','client','none')),
  title text,
  intro text,
  builtin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table pipeline_documents (
  id uuid primary key default extensions.uuid_generate_v4(),
  client_id uuid references pipeline_clients(id) on delete set null,
  practice_id text references pipeline_practices(id),
  doc_type_id text references pipeline_doc_types(id),
  title text,
  intro text,
  sections jsonb not null default '[]'::jsonb,
  client_name text,
  session_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index pipeline_step_log_client_id_idx on pipeline_step_log(client_id);
create index pipeline_email_log_client_id_idx on pipeline_email_log(client_id);
create index pipeline_documents_client_id_idx on pipeline_documents(client_id);

-- RLS: admin-only data. Locked to authenticated users until real
-- Supabase Auth is wired into the admin tool (it currently uses a
-- client-side password gate only) — service_role always bypasses RLS
-- for server-side API routes in the meantime.
alter table pipeline_clients enable row level security;
alter table pipeline_step_log enable row level security;
alter table pipeline_email_log enable row level security;
alter table pipeline_practices enable row level security;
alter table pipeline_doc_types enable row level security;
alter table pipeline_documents enable row level security;

create policy "authenticated full access" on pipeline_clients
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on pipeline_step_log
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on pipeline_email_log
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on pipeline_practices
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on pipeline_doc_types
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "authenticated full access" on pipeline_documents
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
