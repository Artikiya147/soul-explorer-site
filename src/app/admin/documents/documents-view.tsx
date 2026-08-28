"use client";

import { useEffect, useRef, useState } from "react";
import {
  docTypesFor,
  practiceOf,
  docsGet,
  docAdd,
  docUpdate,
  docRemove,
  docDuplicate,
  docRefill,
  type GeneratedDoc,
  type DocBlock,
  type DocTypeMeta,
  type Practice,
} from "@/lib/doc-builder";
import {
  libraryGet,
  libraryAdd,
  libraryUpdate,
  libraryRemove,
  type LibraryItem,
} from "@/lib/doc-library";
import { clientsGet, clientLogEmail, type Client } from "@/lib/clients";

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function newId(prefix: string) {
  return `${prefix}-` + Math.random().toString(36).slice(2, 9);
}

export function DocumentsView({ practice }: { practice: string }) {
  const [docType, setDocType] = useState<string>("");
  const [availableTypes, setAvailableTypes] = useState<DocTypeMeta[]>([]);
  const [docs, setDocs] = useState<GeneratedDoc[] | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    refresh();
    clientsGet().then(setClients);
    window.addEventListener("sx-docs-change", refresh);
    return () => window.removeEventListener("sx-docs-change", refresh);
  }, []);

  useEffect(() => {
    docTypesFor(practice).then((types) => {
      setAvailableTypes(types);
      setDocType(types[0]?.id || "");
    });
    setActiveId(null);
  }, [practice]);

  function refresh() {
    docsGet().then(setDocs);
  }

  if (docs === null) return null;

  const scoped = docs.filter((d) => d.practice === practice && d.docType === docType);
  const active = docs.find((d) => d.id === activeId) || null;

  return (
    <div className="doc-wrap">
      <div className="doc-type-tabs doc-noprint">
        {availableTypes.map((t) => (
          <button
            key={t.id}
            className={docType === t.id ? "active" : ""}
            onClick={() => {
              setDocType(t.id);
              setActiveId(null);
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p className="doc-type-blurb doc-noprint">{availableTypes.find((t) => t.id === docType)?.blurb}</p>

      <div className="doc-body">
        <div className="doc-list-col doc-noprint">
          {active ? (
            <>
              <ClientPickerCard doc={active} clients={clients} />
              <LibraryPanel practice={practice} docType={docType} doc={active} onBack={() => setActiveId(null)} />
            </>
          ) : (
            <>
              <NewDocForm
                practice={practice}
                docType={docType}
                clients={clients}
                onCreated={(id) => setActiveId(id)}
              />
              {scoped.length === 0 ? (
                <p className="doc-empty">No documents yet for this practice and type.</p>
              ) : (
                <div className="doc-list">
                  {scoped.map((d) => (
                    <button key={d.id} className="doc-row" onClick={() => setActiveId(d.id)}>
                      <h4>{d.clientName}</h4>
                      <p>{d.sessionDate ? formatDate(d.sessionDate) + " · " : ""}updated {formatDate(d.updatedAt)}</p>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="doc-preview-col">
          {active ? (
            <DocEditor doc={active} onClose={() => setActiveId(null)} />
          ) : (
            <div className="doc-preview-empty">
              <p>Select a document on the left, or create a new one for this client.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NewDocForm({
  practice,
  docType,
  clients,
  onCreated,
}: {
  practice: string;
  docType: string;
  clients: Client[];
  onCreated: (id: string) => void;
}) {
  const [clientId, setClientId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sessionDate, setSessionDate] = useState(todayISO());

  const selectedClient = clients.find((c) => c.id === clientId);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const finalName = selectedClient ? selectedClient.name : name.trim();
    if (!finalName) return;
    const doc = await docAdd({
      practice,
      docType,
      clientId: selectedClient?.id,
      clientName: finalName,
      clientEmail: selectedClient?.email || email.trim() || undefined,
      sessionDate: selectedClient?.sessionDate || sessionDate,
    });
    if (!doc) return;
    setName("");
    setEmail("");
    setClientId("");
    onCreated(doc.id);
  }

  return (
    <form className="doc-new-form" onSubmit={submit}>
      <p className="doc-new-label">New document</p>
      {clients.length > 0 && (
        <select value={clientId} onChange={(e) => { setClientId(e.target.value); setName(""); }}>
          <option value="">— Type a new name instead —</option>
          {clients.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
      )}
      {!clientId && (
        <>
          <input placeholder="Client name" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder="Email (optional)" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </>
      )}
      <input type="date" value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} />
      <button className="btn btn-primary" type="submit">+ Create</button>
    </form>
  );
}

/* ===================== CLIENT PICKER (sidebar) ===================== */

function ClientPickerCard({ doc, clients }: { doc: GeneratedDoc; clients: Client[] }) {
  return (
    <div className="doc-client-card">
      <p className="doc-new-label">Client</p>
      <select
        value={doc.clientId || ""}
        onChange={(e) => {
          const c = clients.find((x) => x.id === e.target.value);
          docUpdate(doc.id, {
            clientId: c?.id,
            clientName: c ? c.name : doc.clientName,
            clientEmail: c?.email,
            sessionDate: c?.sessionDate || doc.sessionDate,
          });
        }}
      >
        <option value="">— none —</option>
        {clients.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <button className="btn-ghost doc-refill-btn" onClick={() => docRefill(doc.id)}>
        Re-fill placeholders
      </button>
    </div>
  );
}

/* ===================== LIBRARY PANEL ===================== */

function LibraryPanel({
  practice,
  docType,
  doc,
  onBack,
}: {
  practice: string;
  docType: string;
  doc: GeneratedDoc;
  onBack: () => void;
}) {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [fHeading, setFHeading] = useState("");
  const [fBody, setFBody] = useState("");
  const [fCategory, setFCategory] = useState("");

  useEffect(() => {
    libraryGet(practice, docType).then(setItems);
    setQuery("");
    setCategory("all");
    closeForm();
  }, [practice, docType]);

  function refresh() {
    libraryGet(practice, docType).then(setItems);
  }

  function closeForm() {
    setFormOpen(false);
    setEditingId(null);
    setFHeading("");
    setFBody("");
    setFCategory("");
  }

  function startEdit(item: LibraryItem) {
    setEditingId(item.id);
    setFHeading(item.heading);
    setFBody(item.body);
    setFCategory(item.category || "");
    setFormOpen(true);
  }

  async function saveForm(e: React.FormEvent) {
    e.preventDefault();
    const heading = fHeading.trim();
    if (!heading) return;
    if (editingId) {
      await libraryUpdate(practice, docType, editingId, { heading, body: fBody, category: fCategory });
    } else {
      await libraryAdd(practice, docType, { heading, body: fBody, category: fCategory });
    }
    refresh();
    closeForm();
  }

  async function deleteItem(id: string) {
    if (!confirm("Remove this from your library? Documents that already used it keep their own copy.")) return;
    await libraryRemove(practice, docType, id);
    refresh();
  }

  function addToDoc(item: LibraryItem) {
    const next: DocBlock[] = [
      ...doc.blocks,
      { id: newId("b"), heading: item.heading, body: item.body, included: true, sourceId: item.id },
    ];
    docUpdate(doc.id, { blocks: next });
  }

  const categories = Array.from(new Set(items.map((i) => i.category).filter(Boolean))) as string[];
  const inDocSourceIds = new Set(doc.blocks.map((b) => b.sourceId).filter(Boolean));
  const q = query.trim().toLowerCase();
  const visible = items.filter((i) => {
    const matchQ = !q || i.heading.toLowerCase().includes(q) || i.body.toLowerCase().includes(q);
    const matchCat = category === "all" || i.category === category;
    return matchQ && matchCat;
  });

  return (
    <div className="doc-lib">
      <button className="doc-lib-back" onClick={onBack}>← All documents</button>

      <input
        className="doc-lib-search"
        type="search"
        placeholder="Search this library…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {categories.length > 0 && (
        <div className="doc-lib-pills">
          <button className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} className={category === c ? "active" : ""} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      )}

      <p className="doc-lib-label">Library</p>
      <div className="doc-lib-list">
        {visible.length === 0 ? (
          <p className="doc-empty">Nothing matches.</p>
        ) : (
          visible.map((item) => {
            const inDoc = inDocSourceIds.has(item.id);
            return (
              <div key={item.id} className={`doc-lib-card${inDoc ? " in-doc" : ""}`}>
                <button
                  type="button"
                  className="doc-lib-card-main"
                  onClick={() => !inDoc && addToDoc(item)}
                  disabled={inDoc}
                >
                  <span className="doc-lib-card-name">{item.heading}</span>
                  {item.category && <span className="doc-lib-card-cat">{item.category}</span>}
                </button>
                <div className="doc-lib-card-actions">
                  <button type="button" title="Edit" onClick={() => startEdit(item)}>✎</button>
                  <button type="button" title="Delete" onClick={() => deleteItem(item.id)}>×</button>
                </div>
                <span className="doc-lib-plus">{inDoc ? "✓" : "+"}</span>
              </div>
            );
          })
        )}
      </div>

      <div className="doc-lib-bottom">
        {!formOpen ? (
          <button className="doc-lib-add-toggle" onClick={() => setFormOpen(true)}>
            + Add new section to library
          </button>
        ) : (
          <form className="doc-lib-form" onSubmit={saveForm}>
            <input placeholder="Heading *" value={fHeading} onChange={(e) => setFHeading(e.target.value)} autoFocus />
            <textarea placeholder="Body text" rows={4} value={fBody} onChange={(e) => setFBody(e.target.value)} />
            <input placeholder="Category (optional)" value={fCategory} onChange={(e) => setFCategory(e.target.value)} />
            <div className="doc-lib-form-actions">
              <button type="submit" className="btn btn-primary btn-sm">{editingId ? "Save changes" : "Save to library"}</button>
              <button type="button" className="btn-ghost" onClick={closeForm}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

/* ===================== INLINE EDITABLE TEXT ===================== */

function Editable({
  value,
  onCommit,
  placeholder,
  className,
  as: Tag = "div",
}: {
  value: string;
  onCommit: (v: string) => void;
  placeholder?: string;
  className?: string;
  as?: "div" | "h2" | "p";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.textContent !== value) {
      el.textContent = value;
    }
  }, [value]);

  return (
    <Tag
      ref={ref as never}
      className={`doc-editable${className ? " " + className : ""}`}
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const text = (e.currentTarget.innerText || "").replace(/\n+$/, "");
        onCommit(text);
      }}
    />
  );
}

/* ===================== LOGO (letterhead) ===================== */

type ImgEntry = { kind: "image"; filename: string; uploadedAt: string };
type MediaManifest = Record<string, ImgEntry | { kind: "video"; videoId: string; uploadedAt: string }>;

function assetUrl(entry?: ImgEntry) {
  if (!entry) return undefined;
  return `/uploads/${entry.filename}?v=${encodeURIComponent(entry.uploadedAt)}`;
}

function useMediaManifest() {
  const [manifest, setManifest] = useState<MediaManifest>({});

  useEffect(() => {
    fetch("/api/media")
      .then((r) => r.json())
      .then((d) => setManifest(d.manifest || {}));
  }, []);

  return manifest;
}

/* ===================== DOCUMENT EDITOR (paper) ===================== */

function DocEditor({ doc, onClose }: { doc: GeneratedDoc; onClose: () => void }) {
  const [p, setP] = useState<Practice | null>(null);
  const [docTypeMeta, setDocTypeMeta] = useState<DocTypeMeta | null>(null);
  const [sessionDate, setSessionDate] = useState(doc.sessionDate || "");
  const manifest = useMediaManifest();

  useEffect(() => {
    setSessionDate(doc.sessionDate || "");
  }, [doc.id, doc.sessionDate]);

  useEffect(() => {
    practiceOf(doc.practice).then(setP);
    docTypesFor(doc.practice).then((types) => {
      setDocTypeMeta(types.find((t) => t.id === doc.docType) ?? null);
    });
  }, [doc.practice, doc.docType]);

  if (!p || !docTypeMeta) return null;

  function updateBlock(id: string, patch: Partial<DocBlock>) {
    docUpdate(doc.id, { blocks: doc.blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)) });
  }

  function removeBlock(id: string) {
    docUpdate(doc.id, { blocks: doc.blocks.filter((b) => b.id !== id) });
  }

  function moveBlock(id: string, dir: -1 | 1) {
    const i = doc.blocks.findIndex((b) => b.id === id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= doc.blocks.length) return;
    const next = [...doc.blocks];
    [next[i], next[j]] = [next[j], next[i]];
    docUpdate(doc.id, { blocks: next });
  }

  function markSent() {
    if (doc.clientId) {
      clientLogEmail(doc.clientId, `${docTypeMeta!.label} sent`);
    }
  }

  const logoEntry = manifest[`doc-cover-logo-${p.id}`];
  const customLogo = logoEntry?.kind === "image" ? assetUrl(logoEntry) : undefined;
  const isSoulExplorer = p.brand === "Soul Explorer";

  return (
    <div className="doc-editor" style={{ ["--doc-accent" as string]: p.accent }}>
      <div className="doc-editor-toolbar doc-noprint">
        <button className="btn-ghost" onClick={onClose}>← Back</button>
        <div className="doc-editor-actions">
          <button className="btn-ghost" onClick={markSent}>Log as sent to client</button>
          <button
            className="btn-ghost"
            onClick={async () => {
              const copy = await docDuplicate(doc.id);
              if (copy) onClose();
            }}
          >
            Duplicate
          </button>
          <button className="btn btn-primary" onClick={() => window.print()}>Print / Save as PDF</button>
          <button
            className="doc-delete"
            onClick={() => {
              if (confirm("Delete this document? This can't be undone.")) {
                docRemove(doc.id);
                onClose();
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="doc-paper" id="paper">
        <div className="ph-head">
          <div>
            {customLogo ? (
              <img className="ph-logo" src={customLogo} alt={p.brand} />
            ) : p.logoImage ? (
              <img className="ph-logo" src={p.logoImage} alt={p.brand} />
            ) : isSoulExplorer ? (
              <div className="ph-brand">soul <em>explorer</em></div>
            ) : (
              <div className="ph-brand">{p.brand}</div>
            )}
            <div className="ph-caption">{p.name}</div>
          </div>
          <div className="ph-right">
            {p.providerName}<br />{p.providerEmail}<br />{p.providerPhone}<br />{p.providerAddress}
          </div>
        </div>

        <Editable
          as="div"
          className="doc-title"
          value={doc.title}
          placeholder="Document title"
          onCommit={(v) => docUpdate(doc.id, { title: v })}
        />
        <div className="doc-orn"><span className="orn-line" /><span className="orn-dot" /><span className="orn-line" /></div>
        <Editable
          as="div"
          className="doc-intro"
          value={doc.intro}
          placeholder="Introduction…"
          onCommit={(v) => docUpdate(doc.id, { intro: v })}
        />

        {doc.blocks.length === 0 && (
          <div className="doc-block-empty doc-noprint">← Add sections from the library on the left.</div>
        )}

        {doc.blocks.map((b, i) => (
          <div className="sec" key={b.id}>
            <div className="sec-ctl doc-noprint">
              <button type="button" onClick={() => moveBlock(b.id, -1)} disabled={i === 0} title="↑">↑</button>
              <button type="button" onClick={() => moveBlock(b.id, 1)} disabled={i === doc.blocks.length - 1} title="↓">↓</button>
              <button type="button" className="rm" onClick={() => removeBlock(b.id)} title="×">×</button>
            </div>
            <div className="sec-num">{String(i + 1).padStart(2, "0")}</div>
            <Editable
              as="div"
              className="sec-title"
              value={b.heading}
              placeholder="Section title"
              onCommit={(v) => updateBlock(b.id, { heading: v })}
            />
            <Editable
              as="div"
              className="sec-body"
              value={b.body}
              placeholder="Write here…"
              onCommit={(v) => updateBlock(b.id, { body: v })}
            />
          </div>
        ))}

        {docTypeMeta.signature !== "none" && (
          <div className="sigs">
            {docTypeMeta.signature === "both" && (
              <div>
                <div className="sig-role">{p.providerSignLabel}</div>
                <div className="sig-line" />
                <div className="sig-cap">{p.providerName}</div>
              </div>
            )}
            <div>
              <div className="sig-role">{p.clientSignLabel}</div>
              <div className="sig-line" />
              <div className="sig-cap">{doc.clientName || "Signature"}</div>
            </div>
          </div>
        )}

        <div className="doc-foot">
          <span>{p.brand}</span>
          <span>{docTypeMeta.label}</span>
          <span className="doc-noprint">
            <input
              type="date"
              value={sessionDate}
              onChange={(e) => {
                setSessionDate(e.target.value);
                docUpdate(doc.id, { sessionDate: e.target.value });
              }}
            />
          </span>
          <span className="doc-print-only">{formatDate(doc.updatedAt)}</span>
        </div>
      </div>
    </div>
  );
}
