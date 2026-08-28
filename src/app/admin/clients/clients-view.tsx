"use client";

import { useEffect, useState } from "react";
import {
  clientsGet,
  clientAdd,
  clientSetStep,
  clientLogEmail,
  clientMarkWelcomed,
  clientUpdate,
  clientRemove,
  type Client,
  type SessionType,
} from "@/lib/clients";
import { journeyFor, journeyKindFor, stepLabel, type JourneyKind } from "@/lib/journey";
import { WELCOME_MESSAGE } from "@/lib/welcome-message";
import { EMAIL_TEMPLATES, fillEmail, type EmailTemplate } from "@/lib/emails";
import { PipelineView } from "./pipeline-view";

const SESSION_TYPES: SessionType[] = ["QHHT", "BQH", "QMV", "Soul Reading", "Discovery Call", "Studio"];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function ClientsView() {
  const [clients, setClients] = useState<Client[] | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [kind, setKind] = useState<JourneyKind>("session");
  const [mode, setMode] = useState<"list" | "pipeline">("list");

  useEffect(() => {
    refresh();
    window.addEventListener("sx-clients-change", refresh);
    return () => window.removeEventListener("sx-clients-change", refresh);
  }, []);

  function refresh() {
    clientsGet().then(setClients);
  }

  if (clients === null) return null;

  const scoped = clients.filter((c) => journeyKindFor(c.sessionType) === kind);
  const selected = clients.find((c) => c.id === selectedId) || null;

  function openFromPipeline(id: string) {
    setSelectedId(id);
    setMode("list");
  }

  return (
    <div className="cli-outer">
      <div className="cli-toolbar">
        <div className="cli-kind-toggle">
          <button className={kind === "session" ? "active" : ""} onClick={() => { setKind("session"); setSelectedId(null); }}>
            Sessions <span>QHHT · QMV · BQH</span>
          </button>
          <button className={kind === "studio" ? "active" : ""} onClick={() => { setKind("studio"); setSelectedId(null); }}>
            Studio <span>web design</span>
          </button>
        </div>
        <div className="cli-mode-toggle">
          <button className={mode === "list" ? "active" : ""} onClick={() => setMode("list")}>List</button>
          <button className={mode === "pipeline" ? "active" : ""} onClick={() => setMode("pipeline")}>Pipeline</button>
        </div>
      </div>

      {mode === "pipeline" ? (
        <PipelineView clients={scoped} kind={kind} onSelect={openFromPipeline} />
      ) : (
        <div className="cli-wrap">
          <div className="cli-list-col">
            <div className="cli-list-head">
              <p className="cli-list-count">{scoped.length} client{scoped.length === 1 ? "" : "s"}</p>
              <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
                + New client
              </button>
            </div>

            {scoped.length === 0 ? (
              <p className="cli-empty">No clients here yet.</p>
            ) : (
              <div className="cli-list">
                {scoped.map((c) => (
                  <button
                    key={c.id}
                    className={`cli-row${selectedId === c.id ? " active" : ""}`}
                    onClick={() => setSelectedId(c.id)}
                  >
                    <div>
                      <h4>{c.name}</h4>
                      <p>{c.sessionType} · {c.email}</p>
                    </div>
                    <span className="cli-stage-tag">{stepLabel(c.sessionType, c.stepId)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="cli-detail-col">
            {selected ? (
              <ClientDetail client={selected} onClose={() => setSelectedId(null)} />
            ) : (
              <div className="cli-detail-empty">
                <p>Select a client to see their details, or add a new one.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {showAdd && (
        <AddClientModal
          defaultKind={kind}
          onClose={() => setShowAdd(false)}
          onAdded={(id) => {
            setSelectedId(id);
            setShowAdd(false);
            setMode("list");
          }}
        />
      )}
    </div>
  );
}

function AddClientModal({
  defaultKind,
  onClose,
  onAdded,
}: {
  defaultKind: JourneyKind;
  onClose: () => void;
  onAdded: (id: string) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sessionType, setSessionType] = useState<SessionType>(defaultKind === "studio" ? "Studio" : "QHHT");
  const [sessionDate, setSessionDate] = useState("");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || submitting) return;
    setSubmitting(true);
    const client = await clientAdd({ name, email, phone, sessionType, sessionDate: sessionDate || undefined, notes });
    setSubmitting(false);
    if (client) onAdded(client.id);
  }

  return (
    <div className="cli-modal-backdrop" onClick={onClose}>
      <div className="cli-modal" onClick={(e) => e.stopPropagation()}>
        <h3>New client</h3>
        <form onSubmit={submit}>
          <input placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Phone (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <select value={sessionType} onChange={(e) => setSessionType(e.target.value as SessionType)}>
            {SESSION_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <input
            type="date"
            aria-label="Session date"
            value={sessionDate}
            onChange={(e) => setSessionDate(e.target.value)}
          />
          <textarea placeholder="Notes (optional)" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
          <div className="cli-modal-actions">
            <button type="button" className="btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? "Adding…" : "Add client"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ClientDetail({ client, onClose }: { client: Client; onClose: () => void }) {
  const [emailSubject, setEmailSubject] = useState("");
  const [notes, setNotes] = useState(client.notes || "");
  const [showWelcome, setShowWelcome] = useState(false);
  const [mailTemplate, setMailTemplate] = useState<EmailTemplate | null>(null);
  const [sessionDate, setSessionDate] = useState(client.sessionDate || "");

  useEffect(() => {
    setNotes(client.notes || "");
    setSessionDate(client.sessionDate || "");
  }, [client.id, client.notes, client.sessionDate]);

  function logEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!emailSubject.trim()) return;
    clientLogEmail(client.id, emailSubject.trim());
    setEmailSubject("");
  }

  const steps = journeyFor(client.sessionType);

  return (
    <div className="cli-detail">
      <button className="cli-close" onClick={onClose} aria-label="Close">×</button>
      <div className="cli-detail-head">
        <div>
          <h2>{client.name}</h2>
          <p>{client.sessionType} · {client.email}{client.phone ? ` · ${client.phone}` : ""}</p>
          <label className="cli-session-date">
            Session date
            <input
              type="date"
              value={sessionDate}
              onChange={(e) => {
                setSessionDate(e.target.value);
                clientUpdate(client.id, { sessionDate: e.target.value || undefined });
              }}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          <button className="btn btn-primary" onClick={() => setShowWelcome(true)}>
            Welcome on board
          </button>
          {client.welcomedAt && (
            <span className="cli-welcomed">✓ Sent {formatDate(client.welcomedAt)}</span>
          )}
        </div>
      </div>

      {showWelcome && (
        <WelcomeModal
          client={client}
          onClose={() => setShowWelcome(false)}
        />
      )}

      <section className="cli-section">
        <h3>Pipeline stage</h3>
        <p className="cli-section-hint">Drag cards on the Pipeline view, or set it directly here.</p>
        <div className="cli-stage-picker">
          {steps.map((s) => (
            <button
              key={s.id}
              className={`cli-stage-btn${client.stepId === s.id ? " active" : ""}`}
              onClick={() => clientSetStep(client.id, s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      <section className="cli-section">
        <h3>Notes</h3>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={() => clientUpdate(client.id, { notes })}
          placeholder="Anything worth remembering about this client…"
        />
      </section>

      <section className="cli-section">
        <h3>Email templates</h3>
        <div className="cli-mail-list">
          {EMAIL_TEMPLATES.map((t) => {
            const sent = [...client.emailLog].reverse().find((e) => e.subject === t.label);
            return (
              <div className="mini-row" key={t.id}>
                <div>
                  <p className="mini-name">{t.label}</p>
                  <p className="mini-meta">{sent ? "sent " + formatDate(sent.date) : "—"}</p>
                </div>
                <button className="btn-ghost" onClick={() => setMailTemplate(t)}>Open</button>
              </div>
            );
          })}
        </div>
      </section>

      {mailTemplate && (
        <MailModal client={client} template={mailTemplate} onClose={() => setMailTemplate(null)} />
      )}

      <section className="cli-section">
        <h3>Email log</h3>
        <form className="cli-email-form" onSubmit={logEmail}>
          <input
            placeholder="Log an email you sent (subject line)…"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
          />
          <button className="btn-ghost" type="submit">Log</button>
        </form>
        {client.emailLog.length === 0 ? (
          <p className="cli-empty-inline">No emails logged yet.</p>
        ) : (
          <ul className="cli-email-list">
            {client.emailLog.map((e) => (
              <li key={e.id}>
                <span>{e.subject}</span>
                <span className="cli-email-date">{formatDate(e.date)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="cli-section">
        <h3>Step history</h3>
        <ul className="cli-step-list">
          {client.stepLog.map((s) => (
            <li key={s.id}>
              <span>{stepLabel(client.sessionType, s.stepId)}</span>
              <span className="cli-email-date">{formatDate(s.date)}</span>
            </li>
          ))}
        </ul>
      </section>

      <button
        className="cli-delete"
        onClick={() => {
          if (confirm(`Remove ${client.name} from your client list? This can't be undone.`)) {
            clientRemove(client.id);
            onClose();
          }
        }}
      >
        Remove client
      </button>
    </div>
  );
}

function MailModal({
  client,
  template,
  onClose,
}: {
  client: Client;
  template: EmailTemplate;
  onClose: () => void;
}) {
  const [subject, setSubject] = useState(fillEmail(template.subject, client));
  const [body, setBody] = useState(fillEmail(template.body, client));
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(subject + "\n\n" + body).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function sendAndLog() {
    clientLogEmail(client.id, template.label);
    onClose();
  }

  return (
    <div className="cli-modal-backdrop" onClick={onClose}>
      <div className="cli-modal cli-welcome-modal" onClick={(e) => e.stopPropagation()}>
        <h3>{template.label}</h3>
        <div className="cli-mail-fields">
          <label>
            Subject
            <input value={subject} onChange={(e) => setSubject(e.target.value)} />
          </label>
          <label>
            Body
            <textarea rows={12} value={body} onChange={(e) => setBody(e.target.value)} />
          </label>
        </div>
        <p className="cli-section-hint">Copy into your mail client, then mark as sent.</p>
        <div className="cli-modal-actions">
          <button type="button" className="btn-ghost" onClick={copy}>
            {copied ? "Copied ✓" : "Copy"}
          </button>
          <a
            className="btn-ghost"
            href={`mailto:${client.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            onClick={sendAndLog}
          >
            Open in mail
          </a>
          <button type="button" className="btn btn-primary" onClick={sendAndLog}>
            Mark as sent
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(WELCOME_MESSAGE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function sendAndLog() {
    clientMarkWelcomed(client.id);
    clientLogEmail(client.id, "Client Welcome message");
    onClose();
  }

  return (
    <div className="cli-modal-backdrop" onClick={onClose}>
      <div className="cli-modal cli-welcome-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Welcome {client.name.split(" ")[0]}</h3>
        <pre className="cli-welcome-text">{WELCOME_MESSAGE}</pre>
        <div className="cli-modal-actions">
          <button type="button" className="btn-ghost" onClick={copy}>
            {copied ? "Copied ✓" : "Copy text"}
          </button>
          <a
            className="btn-ghost"
            href={`mailto:${client.email}?subject=${encodeURIComponent(
              "Welcome, " + client.name.split(" ")[0]
            )}&body=${encodeURIComponent(WELCOME_MESSAGE)}`}
            onClick={sendAndLog}
          >
            Open in email
          </a>
          <button type="button" className="btn btn-primary" onClick={sendAndLog}>
            Mark as sent
          </button>
        </div>
      </div>
    </div>
  );
}
