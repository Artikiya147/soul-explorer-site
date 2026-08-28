import { libraryGet } from "./doc-library";
import { practiceOf, type Practice } from "./practices";
import { docTypeOf } from "./doc-types";
import { createClient } from "./supabase/client";

export type { Practice } from "./practices";
export type { DocTypeMeta, SignatureMode } from "./doc-types";
export { practicesGet, practiceOf, practiceAdd, practiceUpdate, practiceRemove } from "./practices";
export { docTypesGet, docTypeOf, docTypesFor, docTypeAdd, docTypeUpdate, docTypeRemove } from "./doc-types";

export type DocBlock = {
  id: string;
  heading: string;
  body: string;
  included: boolean;
  /** id of the library item this block was copied from, if any — used to grey it out in the library list. */
  sourceId?: string;
};

export type GeneratedDoc = {
  id: string;
  practice: string;
  docType: string;
  clientId?: string;
  clientName: string;
  clientEmail?: string;
  sessionDate?: string;
  title: string;
  intro: string;
  blocks: DocBlock[];
  createdAt: string;
  updatedAt: string;
};

function formatDate(iso?: string): string {
  if (!iso) return "____________";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export function fillTemplate(str: string, practice: Practice, clientName: string, sessionDate?: string): string {
  return str
    .replace(/{client}/g, clientName || "____________")
    .replace(/{practitioner}/g, practice.providerName)
    .replace(/{practiceShort}/g, practice.name)
    .replace(/{practice}/g, practice.fullName)
    .replace(/{brand}/g, practice.brand)
    .replace(/{email}/g, practice.providerEmail)
    .replace(/{phone}/g, practice.providerPhone)
    .replace(/{date}/g, formatDate(sessionDate));
}

export const DOCS_CHANGE_EVENT = "sx-docs-change";

function notify() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(DOCS_CHANGE_EVENT));
  }
}

type DocRow = {
  id: string;
  client_id: string | null;
  practice_id: string | null;
  doc_type_id: string | null;
  title: string | null;
  intro: string | null;
  sections: DocBlock[];
  client_name: string | null;
  client_email: string | null;
  session_date: string | null;
  created_at: string;
  updated_at: string;
};

function fromRow(row: DocRow): GeneratedDoc {
  return {
    id: row.id,
    practice: row.practice_id ?? "",
    docType: row.doc_type_id ?? "",
    clientId: row.client_id ?? undefined,
    clientName: row.client_name ?? "",
    clientEmail: row.client_email ?? undefined,
    sessionDate: row.session_date ?? undefined,
    title: row.title ?? "",
    intro: row.intro ?? "",
    blocks: row.sections ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function docsGet(): Promise<GeneratedDoc[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("pipeline_documents")
    .select("*")
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data.map(fromRow);
}

export async function docGet(id: string): Promise<GeneratedDoc | undefined> {
  return (await docsGet()).find((d) => d.id === id);
}

export async function docAdd(input: {
  practice: string;
  docType: string;
  clientId?: string;
  clientName: string;
  clientEmail?: string;
  sessionDate?: string;
}): Promise<GeneratedDoc | undefined> {
  const supabase = createClient();
  const practice = await practiceOf(input.practice);
  const meta = await docTypeOf(input.docType);
  const library = await libraryGet(input.practice, input.docType);
  const defaults = library.filter((i) => i.isDefault);

  const blocks: DocBlock[] = defaults.map((i) => ({
    id: "b-" + Math.random().toString(36).slice(2, 9),
    heading: i.heading,
    body: i.body,
    included: true,
    sourceId: i.id,
  }));

  const { data, error } = await supabase
    .from("pipeline_documents")
    .insert({
      client_id: input.clientId || null,
      practice_id: input.practice,
      doc_type_id: input.docType,
      client_name: input.clientName,
      client_email: input.clientEmail,
      session_date: input.sessionDate || null,
      title: meta ? fillTemplate(meta.title, practice, input.clientName, input.sessionDate) : "",
      intro: meta ? fillTemplate(meta.intro, practice, input.clientName, input.sessionDate) : "",
      sections: blocks,
    })
    .select()
    .single();
  if (error || !data) return undefined;
  notify();
  return fromRow(data);
}

export async function docUpdate(id: string, patch: Partial<GeneratedDoc>) {
  const supabase = createClient();
  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (patch.title !== undefined) update.title = patch.title;
  if (patch.intro !== undefined) update.intro = patch.intro;
  if (patch.blocks !== undefined) update.sections = patch.blocks;
  if (patch.clientName !== undefined) update.client_name = patch.clientName;
  if (patch.clientEmail !== undefined) update.client_email = patch.clientEmail;
  if (patch.sessionDate !== undefined) update.session_date = patch.sessionDate || null;

  await supabase.from("pipeline_documents").update(update).eq("id", id);
  notify();
}

/** Re-runs the title/intro templates for the doc's current type and client name — matches "Ricompila i campi". */
export async function docRefill(id: string) {
  const doc = await docGet(id);
  if (!doc) return;
  const practice = await practiceOf(doc.practice);
  const meta = await docTypeOf(doc.docType);
  if (!meta) return;
  await docUpdate(id, {
    title: fillTemplate(meta.title, practice, doc.clientName, doc.sessionDate),
    intro: fillTemplate(meta.intro, practice, doc.clientName, doc.sessionDate),
  });
}

export async function docDuplicate(id: string): Promise<GeneratedDoc | undefined> {
  const supabase = createClient();
  const src = await docGet(id);
  if (!src) return undefined;

  const { data, error } = await supabase
    .from("pipeline_documents")
    .insert({
      client_id: src.clientId || null,
      practice_id: src.practice,
      doc_type_id: src.docType,
      client_name: src.clientName,
      client_email: src.clientEmail,
      session_date: src.sessionDate || null,
      title: src.title + " (copy)",
      intro: src.intro,
      sections: src.blocks,
    })
    .select()
    .single();
  if (error || !data) return undefined;
  notify();
  return fromRow(data);
}

export async function docRemove(id: string) {
  const supabase = createClient();
  await supabase.from("pipeline_documents").delete().eq("id", id);
  notify();
}
