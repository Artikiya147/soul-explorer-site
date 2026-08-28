"use client";

import { useState } from "react";

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!validEmail(v)) {
      setMsg("A whisper needs somewhere to land, please enter a valid email.");
      return;
    }
    try {
      localStorage.setItem("sx_news_email", v);
    } catch {}
    setMsg("You're on the list. Watch for the first whisper soon.");
    setEmail("");
  }

  return (
    <form className="env-form" onSubmit={submit}>
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        Send me whispers
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="env-msg">{msg}</div>
    </form>
  );
}
