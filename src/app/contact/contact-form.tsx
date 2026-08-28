"use client";

import { useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setError("Tell me your name first.");
      return;
    }
    if (!validEmail(email)) {
      setError("That doesn't look like a valid email.");
      return;
    }
    if (!message.trim()) {
      setError("Say a little about what's on your mind.");
      return;
    }
    setError("");
    try {
      const entry = { name, email, message, date: new Date().toISOString() };
      const existing = JSON.parse(localStorage.getItem("sx_contact_messages") || "[]");
      existing.unshift(entry);
      localStorage.setItem("sx_contact_messages", JSON.stringify(existing));
    } catch {}
    setSent(true);
  }

  if (sent) {
    return (
      <div className="contact-sent">
        <p>
          Thank you, {name.split(" ")[0] || "friend"}. Your message is on its
          way, I&apos;ll reply within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="co-row">
        <input
          type="text"
          placeholder="Alex"
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
      </div>
      <textarea
        placeholder="Tell me what's on your mind…"
        aria-label="Message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <p className="contact-error">{error}</p>}
      <button className="btn btn-primary" type="submit">
        Submit <Arrow />
      </button>
    </form>
  );
}
