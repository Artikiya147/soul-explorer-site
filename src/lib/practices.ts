import { createClient } from "./supabase/client";

export type PracticeKind = "session" | "studio";

export type Practice = {
  id: string;
  name: string;
  fullName: string;
  sessionNoun: string;
  accent: string;
  providerName: string;
  providerEmail: string;
  providerPhone: string;
  providerAddress: string;
  brand: string;
  clientSignLabel: string;
  providerSignLabel: string;
  logoImage?: string;
  kind: PracticeKind;
  /** true for the four built-in practices — kept for reference, not enforced anywhere. */
  builtin?: boolean;
};

export const PRACTICES_CHANGE_EVENT = "sx-practices-change";

const DEFAULT_PRACTICES: Practice[] = [
  {
    id: "qhht",
    name: "QHHT",
    fullName: "Quantum Healing Hypnosis Technique",
    sessionNoun: "QHHT session",
    accent: "#2fbfb6",
    providerName: "Alessandra Fadda",
    providerEmail: "alex@soul-explorer.com",
    providerPhone: "+44 7915 607621",
    providerAddress: "Via Gino de Rizzoli 9 · 21013 Gallarate (VA) · Italia",
    brand: "Soul Explorer",
    clientSignLabel: "Client",
    providerSignLabel: "Practitioner",
    logoImage: "/assets/logo-wordmark-light.png",
    kind: "session",
    builtin: true,
  },
  {
    id: "qmv",
    name: "QMV",
    fullName: "QMV — Quantum Multidimensional Vision",
    sessionNoun: "QMV journey",
    accent: "#b08ccc",
    providerName: "Alessandra Fadda",
    providerEmail: "alex@soul-explorer.com",
    providerPhone: "+44 7915 607621",
    providerAddress: "Via Gino de Rizzoli 9 · 21013 Gallarate (VA) · Italia",
    brand: "Soul Explorer",
    clientSignLabel: "Client",
    providerSignLabel: "Practitioner",
    kind: "session",
    builtin: true,
  },
  {
    id: "bqh",
    name: "BQH",
    fullName: "Beyond Quantum Healing",
    sessionNoun: "BQH session",
    accent: "#9cbdb4",
    providerName: "Alessandra Fadda",
    providerEmail: "alex@soul-explorer.com",
    providerPhone: "+44 7915 607621",
    providerAddress: "Via Gino de Rizzoli 9 · 21013 Gallarate (VA) · Italia",
    brand: "Soul Explorer",
    clientSignLabel: "Client",
    providerSignLabel: "Practitioner",
    kind: "session",
    builtin: true,
  },
  {
    id: "studio",
    name: "Studio",
    fullName: "AF Webstylist — Web Design",
    sessionNoun: "progetto",
    accent: "#cdb99a",
    providerName: "Alessandra Fadda",
    providerEmail: "info@af-webstylist.com",
    providerPhone: "+44 7915 607621",
    providerAddress: "Largo Giardino 1, 21052 Busto Arsizio (VA) · Italia",
    brand: "AF Webstylist",
    clientSignLabel: "Cliente",
    providerSignLabel: "Fornitore",
    kind: "studio",
    builtin: true,
  },
];

function notify() {
  if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent(PRACTICES_CHANGE_EVENT));
}

type PracticeRow = {
  id: string;
  name: string;
  full_name: string;
  session_noun: string | null;
  accent: string | null;
  provider_name: string | null;
  provider_email: string | null;
  provider_phone: string | null;
  provider_address: string | null;
  brand: string | null;
  client_sign_label: string | null;
  provider_sign_label: string | null;
  logo_image: string | null;
  kind: PracticeKind;
  builtin: boolean;
};

function fromRow(row: PracticeRow): Practice {
  return {
    id: row.id,
    name: row.name,
    fullName: row.full_name,
    sessionNoun: row.session_noun ?? "",
    accent: row.accent ?? "#8a8f7a",
    providerName: row.provider_name ?? "",
    providerEmail: row.provider_email ?? "",
    providerPhone: row.provider_phone ?? "",
    providerAddress: row.provider_address ?? "",
    brand: row.brand ?? "",
    clientSignLabel: row.client_sign_label ?? "Client",
    providerSignLabel: row.provider_sign_label ?? "Practitioner",
    logoImage: row.logo_image ?? undefined,
    kind: row.kind,
    builtin: row.builtin,
  };
}

function toRow(p: Partial<Practice>) {
  const row: Record<string, unknown> = {};
  if (p.name !== undefined) row.name = p.name;
  if (p.fullName !== undefined) row.full_name = p.fullName;
  if (p.sessionNoun !== undefined) row.session_noun = p.sessionNoun;
  if (p.accent !== undefined) row.accent = p.accent;
  if (p.providerName !== undefined) row.provider_name = p.providerName;
  if (p.providerEmail !== undefined) row.provider_email = p.providerEmail;
  if (p.providerPhone !== undefined) row.provider_phone = p.providerPhone;
  if (p.providerAddress !== undefined) row.provider_address = p.providerAddress;
  if (p.brand !== undefined) row.brand = p.brand;
  if (p.clientSignLabel !== undefined) row.client_sign_label = p.clientSignLabel;
  if (p.providerSignLabel !== undefined) row.provider_sign_label = p.providerSignLabel;
  if (p.logoImage !== undefined) row.logo_image = p.logoImage;
  if (p.kind !== undefined) row.kind = p.kind;
  return row;
}

let seedAttempted = false;

export async function practicesGet(): Promise<Practice[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("pipeline_practices").select("*").order("created_at");
  if (error) return DEFAULT_PRACTICES;

  if ((!data || data.length === 0) && !seedAttempted) {
    seedAttempted = true;
    const { error: seedError } = await supabase.from("pipeline_practices").insert(
      DEFAULT_PRACTICES.map((p) => ({ id: p.id, builtin: true, ...toRow(p) }))
    );
    if (!seedError) {
      const { data: seeded } = await supabase.from("pipeline_practices").select("*").order("created_at");
      return (seeded ?? []).map(fromRow);
    }
  }

  return (data ?? []).map(fromRow);
}

export async function practiceOf(id: string): Promise<Practice> {
  const list = await practicesGet();
  return list.find((p) => p.id === id) || list[0];
}

function slugify(name: string) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "practice";
}

export async function practiceAdd(input: {
  name: string;
  fullName?: string;
  sessionNoun?: string;
  accent?: string;
  kind: PracticeKind;
}): Promise<Practice | undefined> {
  const supabase = createClient();
  const list = await practicesGet();
  let id = slugify(input.name);
  let n = 2;
  while (list.some((p) => p.id === id)) {
    id = `${slugify(input.name)}-${n++}`;
  }
  const first = list[0];
  const practice: Practice = {
    id,
    name: input.name,
    fullName: input.fullName || input.name,
    sessionNoun: input.sessionNoun || `${input.name} session`,
    accent: input.accent || "#8a8f7a",
    providerName: first?.providerName || "Alessandra Fadda",
    providerEmail: first?.providerEmail || "",
    providerPhone: first?.providerPhone || "",
    providerAddress: first?.providerAddress || "",
    brand: input.kind === "studio" ? input.name : "Soul Explorer",
    clientSignLabel: "Client",
    providerSignLabel: "Practitioner",
    kind: input.kind,
  };
  const { data, error } = await supabase
    .from("pipeline_practices")
    .insert({ id: practice.id, ...toRow(practice) })
    .select()
    .single();
  if (error || !data) return undefined;
  notify();
  return fromRow(data);
}

export async function practiceUpdate(id: string, patch: Partial<Practice>) {
  const supabase = createClient();
  await supabase.from("pipeline_practices").update(toRow(patch)).eq("id", id);
  notify();
}

export async function practiceRemove(id: string) {
  const supabase = createClient();
  await supabase.from("pipeline_practices").delete().eq("id", id);
  notify();
}
