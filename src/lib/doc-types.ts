import type { PracticeKind } from "./practices";
import { practiceOf } from "./practices";
import { createClient } from "./supabase/client";

export type SignatureMode = "both" | "client" | "none";

export type DocTypeMeta = {
  id: string;
  label: string;
  blurb: string;
  /** applies to every practice of this kind */
  kind: PracticeKind;
  signature: SignatureMode;
  /** ALL-CAPS document title, shown centered under the letterhead. May contain {client} {practitioner} {practice} {practiceShort} {brand} {date} tokens. */
  title: string;
  /** Opening paragraph. Same tokens as title. */
  intro: string;
  builtin?: boolean;
};

export const DOC_TYPES_CHANGE_EVENT = "sx-doctypes-change";

const DEFAULT_DOC_TYPES: DocTypeMeta[] = [
  {
    id: "waiver",
    label: "Waiver & Consent",
    blurb: "Liability release and informed consent, signed before the session.",
    kind: "session",
    signature: "both",
    title: "RESPONSIBILITIES AND LIABILITY RELEASE",
    intro:
      'Liability Release and Informed Consent for a {practice} session with {practitioner}.\n\nI, ____________________, hereinafter referred to as the "Client", voluntarily agree to participate in a {practice} session with {practitioner}, hereinafter referred to as the "Practitioner". By signing below, I acknowledge and agree to the following terms and conditions:',
    builtin: true,
  },
  {
    id: "release",
    label: "Media & Recording Release",
    blurb: "Separate, optional consent to use audio/video/testimonial publicly.",
    kind: "session",
    signature: "both",
    title: "IMAGE, AUDIO & VIDEO RELEASE",
    intro:
      "Consent to the use of audio, video and testimonial material relating to the {practice} session held with {practitioner}.\n\nI, ____________________, authorise the use of the material indicated below on the terms that follow. This consent is entirely optional and does not affect the session in any way.",
    builtin: true,
  },
  {
    id: "disclaimer",
    label: "Disclaimer",
    blurb: "What the practice is and isn't — for a client to read before booking.",
    kind: "session",
    signature: "none",
    title: "DISCLAIMER",
    intro: "Important information about the nature of the services offered by {brand}. Please read before booking a session.",
    builtin: true,
  },
  {
    id: "welcome",
    label: "Welcome on Board",
    blurb: "The full onboarding letter — next steps, what to expect, investment.",
    kind: "session",
    signature: "none",
    title: "WELCOME ON BOARD",
    intro:
      "{client}, I am glad you chose to take this journey.\n\nHere is everything about your {practice} session on {date}: how we prepare, what happens during our meeting, and what you receive afterwards.",
    builtin: true,
  },
  {
    id: "prep",
    label: "Preparation Guide",
    blurb: "A gentle guide for the days and hours before the session.",
    kind: "session",
    signature: "none",
    title: "HOW TO PREPARE FOR YOUR SESSION",
    intro:
      "A gentle guide for {client} — {practice} session on {date}.\n\nYou do not need to do anything special to “succeed”. You only need to arrive rested, curious, and with your questions in your pocket.",
    builtin: true,
  },
  {
    id: "intake",
    label: "Intake Questionnaire",
    blurb: "Client history, health, and questions for the session — filled in advance.",
    kind: "session",
    signature: "client",
    title: "INTAKE QUESTIONNAIRE",
    intro: "To be completed and returned at least 5 days before the {practice} session. Take your time: there are no wrong answers and everything is confidential.",
    builtin: true,
  },
  {
    id: "transcript",
    label: "Session Transcript",
    blurb: "Structured notes captured live or written up right after.",
    kind: "session",
    signature: "none",
    title: "SESSION TRANSCRIPT",
    intro:
      "Client: {client} · Practice: {practiceShort} · Date: {date} · Practitioner: {practitioner}\n\nConfidential document, prepared for the client's benefit. P = Practitioner, C = Client, HS = Higher Self.",
    builtin: true,
  },
  {
    id: "analysis",
    label: "Final Analysis",
    blurb: "The written summary you send the client afterward.",
    kind: "session",
    signature: "none",
    title: "SESSION ANALYSIS",
    intro:
      "For {client} — {practice} session on {date}.\n\nThis document gathers what emerged and accompanies you in the integration. Read it without hurry, even several times weeks apart.",
    builtin: true,
  },
  {
    id: "practitioner",
    label: "Practitioner Onboarding Pack",
    blurb: "Your own step-by-step method, from first contact to delivery.",
    kind: "session",
    signature: "none",
    title: "PRACTITIONER ONBOARDING",
    intro: "The complete path, step by step, from first contact to delivery of the analysis. Designed for practitioners who want an orderly, repeatable method.",
    builtin: true,
  },
  {
    id: "studio_brief",
    label: "Project Brief",
    blurb: "Goals, audience, content and timing — the alignment document.",
    kind: "studio",
    signature: "none",
    title: "BRIEF DI PROGETTO",
    intro: "Cliente: {client} · Data: {date}\n\nDocumento di allineamento: obiettivi, contenuti, tempi.",
    builtin: true,
  },
  {
    id: "studio_handover",
    label: "Handover & Training",
    blurb: "Everything the client needs to run the site on their own.",
    kind: "studio",
    signature: "none",
    title: "CONSEGNA DEL PROGETTO",
    intro: "Cliente: {client} · Data: {date}\n\nTutto quello che ti serve per gestire il sito in autonomia.",
    builtin: true,
  },
];

function notify() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(DOC_TYPES_CHANGE_EVENT));
}

type DocTypeRow = {
  id: string;
  label: string;
  blurb: string | null;
  kind: PracticeKind;
  signature: SignatureMode;
  title: string | null;
  intro: string | null;
  builtin: boolean;
};

function fromRow(row: DocTypeRow): DocTypeMeta {
  return {
    id: row.id,
    label: row.label,
    blurb: row.blurb ?? "",
    kind: row.kind,
    signature: row.signature,
    title: row.title ?? "",
    intro: row.intro ?? "",
    builtin: row.builtin,
  };
}

function toRow(t: Partial<DocTypeMeta>) {
  const row: Record<string, unknown> = {};
  if (t.label !== undefined) row.label = t.label;
  if (t.blurb !== undefined) row.blurb = t.blurb;
  if (t.kind !== undefined) row.kind = t.kind;
  if (t.signature !== undefined) row.signature = t.signature;
  if (t.title !== undefined) row.title = t.title;
  if (t.intro !== undefined) row.intro = t.intro;
  return row;
}

let seedAttempted = false;

export async function docTypesGet(): Promise<DocTypeMeta[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("pipeline_doc_types").select("*").order("created_at");
  if (error) return DEFAULT_DOC_TYPES;

  if ((!data || data.length === 0) && !seedAttempted) {
    seedAttempted = true;
    const { error: seedError } = await supabase.from("pipeline_doc_types").insert(
      DEFAULT_DOC_TYPES.map((t) => ({ id: t.id, builtin: true, ...toRow(t) }))
    );
    if (!seedError) {
      const { data: seeded } = await supabase.from("pipeline_doc_types").select("*").order("created_at");
      return (seeded ?? []).map(fromRow);
    }
  }

  return (data ?? []).map(fromRow);
}

export async function docTypeOf(id: string): Promise<DocTypeMeta | undefined> {
  return (await docTypesGet()).find((t) => t.id === id);
}

export async function docTypesFor(practiceId: string): Promise<DocTypeMeta[]> {
  const practice = await practiceOf(practiceId);
  const all = await docTypesGet();
  return all.filter((t) => t.kind === practice.kind);
}

function slugify(label: string) {
  const base = label
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "document";
}

export async function docTypeAdd(input: {
  label: string;
  blurb?: string;
  kind: PracticeKind;
  signature?: SignatureMode;
  title?: string;
  intro?: string;
}): Promise<DocTypeMeta | undefined> {
  const supabase = createClient();
  const list = await docTypesGet();
  let id = slugify(input.label);
  let n = 2;
  while (list.some((t) => t.id === id)) {
    id = `${slugify(input.label)}-${n++}`;
  }
  const docType: DocTypeMeta = {
    id,
    label: input.label,
    blurb: input.blurb || "",
    kind: input.kind,
    signature: input.signature || "none",
    title: input.title || input.label.toUpperCase(),
    intro: input.intro || "",
  };
  const { data, error } = await supabase
    .from("pipeline_doc_types")
    .insert({ id: docType.id, ...toRow(docType) })
    .select()
    .single();
  if (error || !data) return undefined;
  notify();
  return fromRow(data);
}

export async function docTypeUpdate(id: string, patch: Partial<DocTypeMeta>) {
  const supabase = createClient();
  await supabase.from("pipeline_doc_types").update(toRow(patch)).eq("id", id);
  notify();
}

export async function docTypeRemove(id: string) {
  const supabase = createClient();
  await supabase.from("pipeline_doc_types").delete().eq("id", id);
  notify();
}
