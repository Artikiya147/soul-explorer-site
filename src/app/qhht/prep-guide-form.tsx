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

const GUIDE_URL = "/guides/how-to-prepare-for-your-session.pdf";

export function PrepGuideForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validEmail(email)) {
      setError("A guide needs somewhere to land, please enter a valid email.");
      return;
    }
    setError("");
    try {
      const list = JSON.parse(localStorage.getItem("sx_guide_leads") || "[]");
      list.unshift({ email, date: new Date().toISOString() });
      localStorage.setItem("sx_guide_leads", JSON.stringify(list));
    } catch {}
    setSent(true);
    window.open(GUIDE_URL, "_blank");
  }

  if (sent) {
    return (
      <p className="prep-sent">
        It&apos;s on its way — the guide just opened in a new tab. Keep an
        eye out for it too.{" "}
        <a href={GUIDE_URL} target="_blank" rel="noopener noreferrer">
          Open it again
        </a>
      </p>
    );
  }

  return (
    <form className="prep-form" onSubmit={submit}>
      <input
        type="email"
        placeholder="your@email.com"
        aria-label="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-light" type="submit">
        Send me the guide <Arrow />
      </button>
      {error && <p className="prep-error">{error}</p>}
    </form>
  );
}
