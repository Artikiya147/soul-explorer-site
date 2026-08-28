create table pipeline_library_items (
  id uuid primary key default extensions.uuid_generate_v4(),
  practice_id text not null references pipeline_practices(id) on delete cascade,
  doc_type_id text not null references pipeline_doc_types(id) on delete cascade,
  heading text not null,
  body text not null default '',
  category text,
  is_default boolean not null default true,
  created_at timestamptz not null default now()
);

create index pipeline_library_items_practice_doctype_idx
  on pipeline_library_items(practice_id, doc_type_id);

alter table pipeline_library_items enable row level security;

create policy "authenticated full access" on pipeline_library_items
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
