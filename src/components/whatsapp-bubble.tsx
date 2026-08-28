"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "447915607621";
const CONTACT_EMAIL = "alex@soul-explorer.com";
const DEFAULT_MESSAGE = "Hi Alex, I have a question about Soul Explorer.";

const PAGE_MESSAGES: Record<string, string> = {
  "/qhht": "Hi Alex, I have a question about QHHT.",
  "/bqh": "Hi Alex, I have a question about BQH online sessions.",
  "/qmv": "Hi Alex, I have a question about QMV.",
  "/soul-readings": "Hi Alex, I have a question about Soul Readings.",
  "/soul-systems": "Hi Alex, I have a question about Soul Systems.",
  "/studio": "Hi Alex, I have a question about Soul Explorer Studio.",
  "/oracle": "Hi Alex, I have a question about the Oracle reading.",
  "/meditations": "Hi Alex, I have a question about the meditations.",
  "/community": "Hi Alex, I have a question about the community.",
  "/shop": "Hi Alex, I have a question about something in the shop.",
  "/booking": "Hi Alex, I'd like help booking a session.",
  "/about": "Hi Alex, I'd like to know more about you and your work.",
  "/contact": "Hi Alex, I have a question.",
  "/blog": "Hi Alex, I have a question about a journal post.",
};

function messageFor(pathname: string): string {
  if (PAGE_MESSAGES[pathname]) return PAGE_MESSAGES[pathname];
  const match = Object.keys(PAGE_MESSAGES).find(
    (path) => path !== "/" && pathname.startsWith(`${path}/`)
  );
  return match ? PAGE_MESSAGES[match] : DEFAULT_MESSAGE;
}

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

const ChatIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path
      d="M16.02 3C9.4 3 4.03 8.37 4.03 15c0 2.23.6 4.32 1.66 6.12L3 29l8.1-2.63a11.9 11.9 0 0 0 4.92 1.06h.01c6.61 0 11.98-5.37 11.98-12S22.63 3 16.02 3Z"
      fill="currentColor"
    />
    <path
      d="M22.4 18.34c-.34-.17-2-.99-2.32-1.1-.31-.11-.54-.17-.76.17-.22.34-.87 1.1-1.07 1.32-.2.22-.4.25-.73.08-.34-.17-1.43-.53-2.72-1.68-1.01-.9-1.68-2.01-1.88-2.35-.2-.34-.02-.52.15-.7.15-.15.34-.4.5-.6.17-.2.22-.34.34-.57.11-.22.06-.43-.03-.6-.08-.17-.76-1.84-1.05-2.52-.28-.66-.56-.57-.76-.58l-.65-.01c-.22 0-.6.08-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.68 1.23 3.31 1.4 3.54.17.22 2.42 3.7 5.86 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2-.82 2.28-1.6.28-.79.28-1.47.2-1.6-.08-.14-.31-.22-.65-.4Z"
      fill="var(--parchment, #F5F0EB)"
    />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

export function WhatsAppBubble() {
  const pathname = usePathname();
  const message = messageFor(pathname ?? "/");
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tell me your name first.");
      return;
    }
    if (!validEmail(email)) {
      setError("That doesn't look like a valid email.");
      return;
    }
    if (!note.trim()) {
      setError("Say a little about what's on your mind.");
      return;
    }
    setError("");
    const subject = `Message from ${name} via soul-explorer.com`;
    const body = `${note}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <div className="wa-wrap">
      {open && (
        <div className="wa-panel">
          <button
            className="wa-panel-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <p className="wa-panel-title">Get in touch</p>
          <a
            className="wa-panel-cta"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <p className="wa-panel-sub">Not online right now? Leave a message.</p>
          {sent ? (
            <p className="wa-panel-sent">
              Thank you, {name.split(" ")[0] || "friend"} — your email app
              should have opened with your message ready to send.
            </p>
          ) : (
            <form className="wa-panel-form" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your name"
                aria-label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="you@email.com"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="What's on your mind…"
                aria-label="Message"
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
              {error && <p className="wa-panel-error">{error}</p>}
              <button className="btn-ghost" type="submit">
                Send by email
              </button>
            </form>
          )}
        </div>
      )}
      <button
        className="wa-bubble"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp or leave a message"
      >
        <span className="wa-tip">Chat on WhatsApp</span>
        <ChatIcon />
      </button>
    </div>
  );
}
