"use client";

import { useEffect, useState } from "react";
import {
  practicesGet,
  practiceAdd,
  practiceUpdate,
  practiceRemove,
  PRACTICES_CHANGE_EVENT,
  type Practice,
  type PracticeKind,
} from "@/lib/practices";
import {
  docTypesGet,
  docTypeAdd,
  docTypeUpdate,
  docTypeRemove,
  DOC_TYPES_CHANGE_EVENT,
  type DocTypeMeta,
  type SignatureMode,
} from "@/lib/doc-types";

type ImgEntry = { kind: "image"; filename: string; uploadedAt: string };
type MediaManifest = Record<string, ImgEntry | { kind: "video"; videoId: string; uploadedAt: string }>;

function assetUrl(entry?: ImgEntry) {
  if (!entry) return undefined;
  return `/uploads/${entry.filename}?v=${encodeURIComponent(entry.uploadedAt)}`;
}

function useMediaManifest() {
  const [manifest, setManifest] = useState<MediaManifest>({});
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/media").then((r) => r.json()).then((d) => setManifest(d.manifest || {}));
  }, []);

  async function upload(slotId: string, file: File) {
    setBusy(slotId);
    const fd = new FormData();
    fd.append("slot", slotId);
    fd.append("file", file);
    const res = await fetch("/api/media", { method: "POST", body: fd });
    const data = await res.json();
    setBusy(null);
    if (res.ok) setManifest((m) => ({ ...m, [slotId]: data.entry }));
  }

  async function remove(slotId: string) {
    setBusy(slotId);
    await fetch(`/api/media?slot=${encodeURIComponent(slotId)}`, { method: "DELETE" });
    setBusy(null);
    setManifest((m) => {
      const next = { ...m };
      delete next[slotId];
      return next;
    });
  }

  return { manifest, busy, upload, remove };
}

const BACKUP_KEYS = [
  "sx_admin_practices",
  "sx_admin_doctypes",
  "sx_admin_docs",
  "sx_admin_clients",
  "sx_cart",
  "sx_orders",
];

export function SettingsView() {
  const [practices, setPractices] = useState<Practice[]>([]);
  const [docTypes, setDocTypes] = useState<DocTypeMeta[]>([]);
  const [showNewPractice, setShowNewPractice] = useState(false);
  const [showNewDocType, setShowNewDocType] = useState<PracticeKind | null>(null);
  const media = useMediaManifest();

  useEffect(() => {
    const refreshP = () => { practicesGet().then(setPractices); };
    const refreshD = () => { docTypesGet().then(setDocTypes); };
    refreshP();
    refreshD();
    window.addEventListener(PRACTICES_CHANGE_EVENT, refreshP);
    window.addEventListener(DOC_TYPES_CHANGE_EVENT, refreshD);
    return () => {
      window.removeEventListener(PRACTICES_CHANGE_EVENT, refreshP);
      window.removeEventListener(DOC_TYPES_CHANGE_EVENT, refreshD);
    };
  }, []);

  function downloadBackup() {
    const data: Record<string, unknown> = {};
    for (const k of BACKUP_KEYS) {
      try {
        const raw = localStorage.getItem(k);
        if (raw) data[k] = JSON.parse(raw);
      } catch {}
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `soul-explorer-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function importBackup(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        for (const k of BACKUP_KEYS) {
          if (data[k] !== undefined) localStorage.setItem(k, JSON.stringify(data[k]));
        }
        window.location.reload();
      } catch {
        alert("This file doesn't look like a valid backup.");
      }
    };
    reader.readAsText(file);
  }

  function eraseAll() {
    if (!confirm("Erase all data (clients, documents, practices, templates)? This can't be undone. Back up first.")) return;
    for (const k of BACKUP_KEYS) localStorage.removeItem(k);
    window.location.reload();
  }

  return (
    <div className="set-wrap">
      <section className="set-section">
        <div className="set-section-head">
          <h2>Practices</h2>
          <p>Your modalities — holistic sessions or Studio for web design. Add as many as you like, each with its own logo.</p>
        </div>
        <div className="set-grid">
          {practices.map((p) => (
            <PracticeCard
              key={p.id}
              practice={p}
              onDelete={() => practiceRemove(p.id)}
              logoEntry={media.manifest[`doc-cover-logo-${p.id}`] as ImgEntry | undefined}
              logoBusy={media.busy === `doc-cover-logo-${p.id}`}
              onUploadLogo={(f) => media.upload(`doc-cover-logo-${p.id}`, f)}
              onRemoveLogo={() => media.remove(`doc-cover-logo-${p.id}`)}
            />
          ))}
          <button className="set-add-card" onClick={() => setShowNewPractice(true)}>
            + New practice
          </button>
        </div>
        {showNewPractice && (
          <NewPracticeForm
            onClose={() => setShowNewPractice(false)}
            onCreated={() => setShowNewPractice(false)}
          />
        )}
      </section>

      {(["session", "studio"] as PracticeKind[]).map((kind) => (
        <section className="set-section" key={kind}>
          <div className="set-section-head">
            <h2>{kind === "session" ? "Document templates — Sessions" : "Document templates — Studio"}</h2>
            <p>
              {kind === "session"
                ? "Apply to every session-type practice (QHHT, QMV, BQH and any new holistic technique)."
                : "Apply to the Studio practice."}
            </p>
          </div>
          <div className="set-doctype-list">
            {docTypes.filter((t) => t.kind === kind).map((t) => (
              <DocTypeCard key={t.id} docType={t} onDelete={() => docTypeRemove(t.id)} />
            ))}
          </div>
          {showNewDocType === kind ? (
            <NewDocTypeForm kind={kind} onClose={() => setShowNewDocType(null)} onCreated={() => setShowNewDocType(null)} />
          ) : (
            <button className="doc-lib-add-toggle" onClick={() => setShowNewDocType(kind)}>
              + New document template
            </button>
          )}
        </section>
      ))}

      <section className="set-section">
        <div className="set-section-head">
          <h2>Data</h2>
          <p>Data lives only in this browser. Back up after every session and keep it alongside the recordings.</p>
        </div>
        <div className="set-data-row">
          <button className="btn" onClick={downloadBackup}>↧ Download JSON backup</button>
          <label className="btn set-import-btn">
            ↥ Import backup
            <input
              type="file"
              accept="application/json"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) importBackup(f);
                e.target.value = "";
              }}
            />
          </label>
          <button className="btn set-erase-btn" onClick={eraseAll}>Erase everything</button>
        </div>
      </section>
    </div>
  );
}

function PracticeCard({
  practice,
  onDelete,
  logoEntry,
  logoBusy,
  onUploadLogo,
  onRemoveLogo,
}: {
  practice: Practice;
  onDelete: () => void;
  logoEntry?: ImgEntry;
  logoBusy: boolean;
  onUploadLogo: (file: File) => void;
  onRemoveLogo: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(practice);

  useEffect(() => setForm(practice), [practice]);

  function save() {
    practiceUpdate(practice.id, form);
  }

  const logoUrl = assetUrl(logoEntry);

  return (
    <div className="set-card">
      <div className="set-card-head">
        <span className="set-card-dot" style={{ background: practice.accent }} />
        <span className="set-card-name">{practice.name}</span>
        <span className="set-card-kind">{practice.kind === "studio" ? "studio" : "session"}</span>
        <button className="set-card-toggle" onClick={() => setOpen(!open)}>{open ? "–" : "+"}</button>
      </div>
      <div className="set-card-logo-row">
        {logoUrl ? (
          <img src={logoUrl} alt={practice.name} className="set-card-logo-thumb" />
        ) : (
          <span className="set-card-no-logo">no logo</span>
        )}
        <label className={`btn-ghost set-logo-upload${logoBusy ? " busy" : ""}`}>
          {logoBusy ? "Uploading…" : "Upload logo"}
          <input
            type="file"
            accept="image/*"
            disabled={logoBusy}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onUploadLogo(f);
              e.target.value = "";
            }}
          />
        </label>
        {logoEntry && (
          <button type="button" className="set-logo-remove" onClick={onRemoveLogo}>×</button>
        )}
      </div>
      {open && (
        <div className="set-card-body">
          <label>Short name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onBlur={save} /></label>
          <label>Full name<input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} onBlur={save} /></label>
          <label>What a session is called<input value={form.sessionNoun} onChange={(e) => setForm({ ...form, sessionNoun: e.target.value })} onBlur={save} /></label>
          <label>Accent color<input type="color" value={form.accent} onChange={(e) => { const next = { ...form, accent: e.target.value }; setForm(next); practiceUpdate(practice.id, next); }} /></label>
          <label>Brand in header<input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} onBlur={save} /></label>
          <label>Practitioner name<input value={form.providerName} onChange={(e) => setForm({ ...form, providerName: e.target.value })} onBlur={save} /></label>
          <label>Email<input value={form.providerEmail} onChange={(e) => setForm({ ...form, providerEmail: e.target.value })} onBlur={save} /></label>
          <label>Phone<input value={form.providerPhone} onChange={(e) => setForm({ ...form, providerPhone: e.target.value })} onBlur={save} /></label>
          <label>Address<input value={form.providerAddress} onChange={(e) => setForm({ ...form, providerAddress: e.target.value })} onBlur={save} /></label>
          <label>Client signature label<input value={form.clientSignLabel} onChange={(e) => setForm({ ...form, clientSignLabel: e.target.value })} onBlur={save} /></label>
          <label>Your signature label<input value={form.providerSignLabel} onChange={(e) => setForm({ ...form, providerSignLabel: e.target.value })} onBlur={save} /></label>
          <button
            className="cli-delete"
            onClick={() => {
              if (confirm(`Delete the practice "${practice.name}"? Documents already created stay, but you won't be able to create new ones for this practice.`)) {
                onDelete();
              }
            }}
          >
            Delete practice
          </button>
        </div>
      )}
    </div>
  );
}

function NewPracticeForm({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [name, setName] = useState("");
  const [kind, setKind] = useState<PracticeKind>("session");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    practiceAdd({ name: name.trim(), kind });
    onCreated();
  }

  return (
    <form className="doc-lib-form" onSubmit={submit} style={{ marginTop: 12 }}>
      <input placeholder="Practice name (e.g. Reiki, Access Bars…)" value={name} onChange={(e) => setName(e.target.value)} autoFocus />
      <select value={kind} onChange={(e) => setKind(e.target.value as PracticeKind)}>
        <option value="session">Holistic session (like QHHT)</option>
        <option value="studio">Studio / project (like Studio)</option>
      </select>
      <div className="doc-lib-form-actions">
        <button type="submit" className="btn btn-primary btn-sm">Create practice</button>
        <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

function DocTypeCard({ docType, onDelete }: { docType: DocTypeMeta; onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(docType);

  useEffect(() => setForm(docType), [docType]);

  function save() {
    docTypeUpdate(docType.id, form);
  }

  return (
    <div className="set-card">
      <button className="set-card-head" onClick={() => setOpen(!open)}>
        <span className="set-card-name">{docType.label}</span>
        <span className="set-card-kind">{docType.signature}</span>
      </button>
      {open && (
        <div className="set-card-body">
          <label>Label<input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} onBlur={save} /></label>
          <label>Short description<input value={form.blurb} onChange={(e) => setForm({ ...form, blurb: e.target.value })} onBlur={save} /></label>
          <label>Document title (UPPERCASE)<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} onBlur={save} /></label>
          <label>
            Intro text
            <textarea rows={4} value={form.intro} onChange={(e) => setForm({ ...form, intro: e.target.value })} onBlur={save} />
          </label>
          <p className="set-hint">Available tokens: {"{client} {practitioner} {practice} {practiceShort} {brand} {date}"}</p>
          <label>
            Signatures required
            <select
              value={form.signature}
              onChange={(e) => {
                const next = { ...form, signature: e.target.value as SignatureMode };
                setForm(next);
                docTypeUpdate(docType.id, next);
              }}
            >
              <option value="none">None</option>
              <option value="client">Client only</option>
              <option value="both">Client and practitioner</option>
            </select>
          </label>
          <button
            className="cli-delete"
            onClick={() => {
              if (confirm(`Delete the template "${docType.label}"?`)) onDelete();
            }}
          >
            Delete template
          </button>
        </div>
      )}
    </div>
  );
}

function NewDocTypeForm({
  kind,
  onClose,
  onCreated,
}: {
  kind: PracticeKind;
  onClose: () => void;
  onCreated: () => void;
}) {
  const [label, setLabel] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!label.trim()) return;
    docTypeAdd({ label: label.trim(), kind });
    onCreated();
  }

  return (
    <form className="doc-lib-form" onSubmit={submit} style={{ marginTop: 12 }}>
      <input placeholder="Template name (e.g. Reiki Consent)" value={label} onChange={(e) => setLabel(e.target.value)} autoFocus />
      <div className="doc-lib-form-actions">
        <button type="submit" className="btn btn-primary btn-sm">Create template</button>
        <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}
