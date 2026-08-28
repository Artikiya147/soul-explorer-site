"use client";

import { useEffect, useState } from "react";
import { COTD_DECK, cotdIndexForDate, type CotdCard } from "./deck";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Sigil = () => (
  <svg className="sig-art" viewBox="0 0 100 100" fill="none" stroke="#D6C8F5" strokeWidth="1.3">
    <circle cx="50" cy="50" r="30" opacity=".7" />
    <circle cx="50" cy="50" r="20" opacity=".5" />
    <path d="M50 8 L53 44 L50 50 L47 44 Z" fill="#D6C8F5" stroke="none" />
    <path d="M50 92 L53 56 L50 50 L47 56 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
    <path d="M8 50 L44 47 L50 50 L44 53 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
    <path d="M92 50 L56 47 L50 50 L56 53 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
    <circle cx="50" cy="50" r="3" fill="#D6C8F5" stroke="none" />
  </svg>
);

const EMPHASIS = /(\bStars?\b|Light|Memory|Womb|Veil|Soul|Mother|Moon|Self|Comet|Tide|Thread|Heart)/;

function emphasizedName(name: string) {
  return name.split(EMPHASIS).map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  );
}

export function TodayCard() {
  const [card, setCard] = useState<CotdCard | null>(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setCard(COTD_DECK[cotdIndexForDate(now)]);
    setDate(
      now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  if (!card) return <div className="cotd" style={{ minHeight: 340 }} />;

  return (
    <div className="cotd">
      <div className="cotd-card">
        <Sigil />
        <div className="nm">{card.name}</div>
        <div className="kw">{card.kw}</div>
      </div>
      <div className="cotd-body">
        <p className="date">{date}</p>
        <h2>{emphasizedName(card.name)}</h2>
        <p className="msg">{card.msg}</p>
        <p className="liora-sig">Liora</p>
        <div style={{ marginTop: 30, display: "flex", gap: 18, flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="/oracle">
            Pull a full three-card reading <Arrow />
          </a>
          <a className="btn-ghost" href="/community" style={{ alignSelf: "center" }}>
            Join the circle
          </a>
        </div>
        <p
          style={{
            fontFamily: "var(--hand)",
            fontSize: 19,
            color: "var(--ink-soft)",
            marginTop: 22,
          }}
        >
          come back tomorrow, the deck turns with the day ✦
        </p>
      </div>
    </div>
  );
}
