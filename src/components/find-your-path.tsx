"use client";

import { useState } from "react";

type Outcome = "qhht" | "bqh" | "readings" | "oracle";

type Option = {
  glyph: string;
  label: string;
  weights: Partial<Record<Outcome, number>>;
};

type Question = {
  before: string;
  em: string;
  after: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    before: "What are you most ",
    em: "longing",
    after: " for?",
    options: [
      { glyph: "☾", label: "To heal something deep", weights: { qhht: 2, bqh: 2 } },
      { glyph: "✦", label: "Clarity & direction", weights: { readings: 2 } },
      { glyph: "✷", label: "To understand my purpose", weights: { qhht: 2 } },
      { glyph: "❍", label: "Just to begin, gently", weights: { oracle: 2 } },
    ],
  },
  {
    before: "How do you like to go ",
    em: "inward",
    after: "?",
    options: [
      { glyph: "☉", label: "Deeply, all at once", weights: { qhht: 2, bqh: 2 } },
      { glyph: "✧", label: "As a gentle conversation", weights: { readings: 2 } },
      { glyph: "☾", label: "Lightly, with curiosity", weights: { oracle: 2 } },
      { glyph: "✦", label: "I'm honestly not sure yet", weights: { qhht: 1, readings: 1 } },
    ],
  },
  {
    before: "And ",
    em: "where",
    after: " are you?",
    options: [
      { glyph: "✷", label: "I can travel to you in person", weights: { qhht: 3 } },
      { glyph: "❍", label: "Far away, online only", weights: { bqh: 2, readings: 1 } },
      { glyph: "✦", label: "Anywhere, I'm flexible", weights: { readings: 1, oracle: 1 } },
      { glyph: "☾", label: "Just exploring for now", weights: { oracle: 2 } },
    ],
  },
];

const RESULTS: Record<
  Outcome,
  {
    eyebrow: string;
    before: string;
    em: string;
    body: string;
    cta: { href: string; label: string };
    secondary: { href: string; label: string };
  }
> = {
  qhht: {
    eyebrow: "your path is",
    before: "",
    em: "QHHT",
    body: "You're ready to go all the way in. A full in-person quantum healing session, past lives, your higher self, and the root of what you came to understand.",
    cta: { href: "/qhht", label: "Explore QHHT" },
    secondary: { href: "/oracle", label: "Or pull a free card first" },
  },
  bqh: {
    eyebrow: "your path is",
    before: "BQH · ",
    em: "Online",
    body: "The same depth as a full regression, held over video from the comfort of your own home, wherever in the world you are.",
    cta: { href: "/bqh", label: "Explore BQH online" },
    secondary: { href: "/oracle", label: "Or pull a free card first" },
  },
  readings: {
    eyebrow: "your path is",
    before: "A Soul ",
    em: "Reading",
    body: "You're seeking clarity more than a deep dive. A channeled reading woven with astrology and numerology will name the season you're in, and the next true step.",
    cta: { href: "/soul-readings", label: "Explore readings" },
    secondary: { href: "/oracle", label: "Or pull a free card first" },
  },
  oracle: {
    eyebrow: "begin gently with",
    before: "A Free ",
    em: "Oracle Reading",
    body: "You're curious, and that's the perfect place to start. Draw three cards and let Liora whisper back what your soul already knows, no commitment, just a doorway.",
    cta: { href: "/oracle", label: "Pull your cards" },
    secondary: { href: "/qhht", label: "Or read about the sessions" },
  },
};

const OUTCOME_ORDER: Outcome[] = ["qhht", "bqh", "readings", "oracle"];

function pickWinner(scores: Record<Outcome, number>): Outcome {
  let winner: Outcome = "oracle";
  let best = -1;
  for (const key of OUTCOME_ORDER) {
    if (scores[key] > best) {
      best = scores[key];
      winner = key;
    }
  }
  return winner;
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function FindYourPath() {
  const [step, setStep] = useState<number | "result">(0);
  const [scores, setScores] = useState<Record<Outcome, number>>({
    qhht: 0,
    bqh: 0,
    readings: 0,
    oracle: 0,
  });

  function choose(option: Option) {
    const next: Record<Outcome, number> = { ...scores };
    for (const key of OUTCOME_ORDER) {
      next[key] += option.weights[key] ?? 0;
    }
    setScores(next);
    if (typeof step === "number" && step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setStep("result");
    }
  }

  function restart() {
    setScores({ qhht: 0, bqh: 0, readings: 0, oracle: 0 });
    setStep(0);
  }

  const result = step === "result" ? RESULTS[pickWinner(scores)] : null;

  return (
    <section className="fyp-section">
      <div className="wrap">
        <div className="sec-head">
          <p className="label">Not sure where to begin?</p>
          <h2 className="h2">Find your path</h2>
          <p className="scr">
            three quiet questions, and I&apos;ll point you toward the doorway
            that fits where you actually are right now
          </p>
        </div>
        <div className="fyp">
          <div className="stagey">
            <div className="fyp-progress" aria-hidden="true">
              {QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={`pd${step === i ? " on" : ""}${
                    typeof step === "number" ? (i < step ? " done" : "") : " done"
                  }`}
                />
              ))}
            </div>
            {typeof step === "number" && (
              <div className="fyp-step active">
                <p className="q">
                  {QUESTIONS[step].before}
                  <em>{QUESTIONS[step].em}</em>
                  {QUESTIONS[step].after}
                </p>
                <div className="fyp-opts">
                  {QUESTIONS[step].options.map((opt) => (
                    <button
                      key={opt.label}
                      className="fyp-opt"
                      onClick={() => choose(opt)}
                    >
                      <span className="gl">{opt.glyph}</span> {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {result && (
              <div className="fyp-result">
                <div className="rec-eyebrow">{result.eyebrow}</div>
                <h3>
                  {result.before}
                  <em>{result.em}</em>
                </h3>
                <p>{result.body}</p>
                <div className="row">
                  <a className="btn btn-primary" href={result.cta.href}>
                    {result.cta.label}
                    <Arrow />
                  </a>
                  <a
                    className="btn-ghost"
                    href={result.secondary.href}
                    style={{ alignSelf: "center" }}
                  >
                    {result.secondary.label}
                  </a>
                </div>
                <button className="fyp-restart" onClick={restart}>
                  ↺ Start over
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
