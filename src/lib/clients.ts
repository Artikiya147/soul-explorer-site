import { journeyFor } from "./journey";
import { createClient } from "./supabase/client";

export type SessionType = "QHHT" | "BQH" | "QMV" | "Soul Reading" | "Discovery Call" | "Studio";

export type EmailLogEntry = {
  id: string;
  date: string;
  subject: string;
  note?: string;
};

export type StepLogEntry = {
  id: string;
  date: string;
  stepId: string;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  sessionType: SessionType;
  sessionDate?: string;
  stepId: string;
  notes?: string;
  welcomedAt?: string;
  createdAt: string;
  updatedAt: string;
  emailLog: EmailLogEntry[];
  stepLog: StepLogEntry[];
};

export const CLIENTS_CHANGE_EVENT = "sx-clients-change";

function notify() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(CLIENTS_CHANGE_EVENT));
  }
}

type ClientRow = {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  session_type: string;
  step_id: string;
  session_date: string | null;
  notes: string | null;
  welcomed_at: string | null;
  created_at: string;
  updated_at: string;
};

type StepLogRow = { id: string; step_id: string; changed_at: string };
type EmailLogRow = { id: string; template_id: string; subject: string | null; sent_at: string };

function fromRow(row: ClientRow, stepLog: StepLogRow[], emailLog: EmailLogRow[]): Client {
  return {
    id: row.id,
    name: row.full_name,
    email: row.email ?? "",
    phone: row.phone ?? undefined,
    sessionType: row.session_type as SessionType,
    sessionDate: row.session_date ?? undefined,
    stepId: row.step_id,
    notes: row.notes ?? undefined,
    welcomedAt: row.welcomed_at ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    stepLog: stepLog.map((s) => ({ id: s.id, date: s.changed_at, stepId: s.step_id })),
    emailLog: emailLog.map((e) => ({ id: e.id, date: e.sent_at, subject: e.template_id, note: e.subject ?? undefined })),
  };
}

export async function clientsGet(): Promise<Client[]> {
  const supabase = createClient();
  const { data: rows, error } = await supabase
    .from("pipeline_clients")
    .select("*")
    .order("created_at", { ascending: false });
  if (error || !rows) return [];

  const ids = rows.map((r) => r.id);
  const [{ data: steps }, { data: emails }] = await Promise.all([
    supabase.from("pipeline_step_log").select("*").in("client_id", ids).order("changed_at"),
    supabase.from("pipeline_email_log").select("*").in("client_id", ids).order("sent_at", { ascending: false }),
  ]);

  return rows.map((row) =>
    fromRow(
      row,
      (steps ?? []).filter((s) => s.client_id === row.id),
      (emails ?? []).filter((e) => e.client_id === row.id)
    )
  );
}

export async function clientGet(id: string): Promise<Client | undefined> {
  const clients = await clientsGet();
  return clients.find((c) => c.id === id);
}

export async function clientAdd(input: {
  name: string;
  email: string;
  phone?: string;
  sessionType: SessionType;
  sessionDate?: string;
  notes?: string;
}): Promise<Client | undefined> {
  const supabase = createClient();
  const firstStep = journeyFor(input.sessionType)[0].id;

  const { data: row, error } = await supabase
    .from("pipeline_clients")
    .insert({
      full_name: input.name,
      email: input.email,
      phone: input.phone,
      session_type: input.sessionType,
      session_date: input.sessionDate || null,
      notes: input.notes,
      step_id: firstStep,
    })
    .select()
    .single();
  if (error || !row) return undefined;

  const { data: stepRow } = await supabase
    .from("pipeline_step_log")
    .insert({ client_id: row.id, step_id: firstStep })
    .select()
    .single();

  notify();
  return fromRow(row, stepRow ? [stepRow] : [], []);
}

export async function clientUpdate(id: string, patch: Partial<Client>) {
  const supabase = createClient();
  const update: Record<string, unknown> = {};
  if (patch.name !== undefined) update.full_name = patch.name;
  if (patch.email !== undefined) update.email = patch.email;
  if (patch.phone !== undefined) update.phone = patch.phone;
  if (patch.sessionDate !== undefined) update.session_date = patch.sessionDate || null;
  if (patch.notes !== undefined) update.notes = patch.notes;
  if (patch.welcomedAt !== undefined) update.welcomed_at = patch.welcomedAt;
  update.updated_at = new Date().toISOString();

  await supabase.from("pipeline_clients").update(update).eq("id", id);
  notify();
}

export async function clientSetStep(id: string, stepId: string) {
  const supabase = createClient();
  await supabase
    .from("pipeline_clients")
    .update({ step_id: stepId, updated_at: new Date().toISOString() })
    .eq("id", id);
  await supabase.from("pipeline_step_log").insert({ client_id: id, step_id: stepId });
  notify();
}

export async function clientLogEmail(id: string, subject: string, note?: string) {
  const supabase = createClient();
  await supabase
    .from("pipeline_email_log")
    .insert({ client_id: id, template_id: subject, subject: note });
  await supabase
    .from("pipeline_clients")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", id);
  notify();
}

export async function clientMarkWelcomed(id: string) {
  await clientUpdate(id, { welcomedAt: new Date().toISOString() });
}

export async function clientRemove(id: string) {
  const supabase = createClient();
  await supabase.from("pipeline_clients").delete().eq("id", id);
  notify();
}
