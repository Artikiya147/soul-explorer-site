"use client";

import { useEffect, useRef, useState } from "react";
import { DECK, POSITIONS, type OracleCard } from "./deck";

type Step = "intro" | "q1" | "q2" | "q3" | "draw" | "gate" | "reading";
const STAGE: Record<Step, number> = { intro: 0, q1: 1, q2: 1, q3: 1, draw: 2, gate: 3, reading: 4 };

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Q1_OPTS = [
  { gl: "☾", val: "healing", label: "Healing, something aches" },
  { gl: "✦", val: "clarity", label: "Clarity, I need to see" },
  { gl: "✷", val: "purpose", label: "Purpose, why am I here" },
  { gl: "❍", val: "connection", label: "Connection, I feel alone" },
];
const Q2_OPTS = [
  { gl: "☉", val: "in my body", label: "In my body" },
  { gl: "♡", val: "in my heart", label: "In my heart" },
  { gl: "✧", val: "in my mind", label: "In my mind" },
  { gl: "☾", val: "in my dreams", label: "In my dreams" },
];
const Q3_OPTS = [
  { gl: "❉", val: "a long winter", label: "A long winter" },
  { gl: "✦", val: "a first thaw", label: "A first thaw" },
  { gl: "✷", val: "a full bloom", label: "A full bloom" },
  { gl: "☾", val: "a letting-go", label: "A letting-go" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function fallbackReading(
  name: string,
  intention: string,
  q2: string,
  q3: string,
  cards: OracleCard[]
) {
  const n = name || "beloved";
  const c = cards;
  const intent = intention ? `"${intention}"` : "something you could not quite name";
  const where = (q2 || "in the quiet of you").toLowerCase();
  const season = (q3 || "a tender season").toLowerCase();
  const hash =
    (c[0].key.charCodeAt(0) + c[1].key.charCodeAt(1) + c[2].key.charCodeAt(2)) % 5;

  if (hash === 0) {
    return `Dear ${n}, you came carrying ${intent}, and three presences arrived to answer each from a different direction.\n\n${c[0].name} came first, quietly. ${c[0].msg} It speaks to what you carry: the root beneath the weight.\n\n${c[1].name} came second, into the present moment. ${c[1].msg} You feel it ${where}. This is not against you. It is the current moving you truer.\n\n${c[2].name} arrived last, from ahead. ${c[2].msg} ${season.charAt(0).toUpperCase() + season.slice(1)} is exactly when this kind of light begins.\n\nThe stars heard you before you spoke.\n\nLiora`;
  }
  if (hash === 1) {
    return `To ${n}, who asked about ${intent}:\n\nThe first card that arrived, ${c[0].name}, carries this: ${c[0].msg} That is your answer's root.\n\nThen came ${c[1].name}, moving through your ${where}. ${c[1].msg} The feeling you have been living is not confusion, it is navigation.\n\nAnd finally, ${c[2].name} stands at the opening ahead. ${c[2].msg} In ${season}, that means something is very close now.\n\nTrust what you already knew before you drew these cards.\n\nLiora`;
  }
  if (hash === 2) {
    return `Dear ${n}, what you brought tonight, ${intent}, is older than you think.\n\n${c[0].name} speaks to the echo beneath it: ${c[0].msg} This is not a new wound. It is an old remembering asking to complete itself.\n\nIn the present, ${c[1].name} names what is moving through you right now. ${c[1].msg} You have been feeling this ${where}. That feeling is correct.\n\nWhat is being born: ${c[2].name}. ${c[2].msg} You are in ${season}. The timing is not an accident.\n\nNothing arriving now is arriving too early or too late.\n\nLiora`;
  }
  if (hash === 3) {
    return `Beloved ${n}, you said it lives ${where}. The cards agree.\n\nWhat you carry: ${c[0].name}. ${c[0].msg} The body holds what the mind has not yet translated.\n\nWhat is moving through you now: ${c[1].name}. ${c[1].msg} The discomfort is not a sign you are wrong, it is the sign you are changing.\n\nWhat is being born: ${c[2].name}. ${c[2].msg} In ${season}, something that has been forming quietly is almost ready to be named.\n\nListen to the body. It has always been the oracle.\n\nLiora`;
  }
  return `${n},\n\nYou drew ${c[0].name}. ${c[0].whisper}\n\nThen ${c[1].name}. ${c[1].whisper}\n\nAnd ${c[2].name}. ${c[2].whisper}\n\nThree whispers for a soul in ${season}, carrying ${intent}. They do not contradict each other. They are the same truth, spoken three ways.\n\nYou already know what they mean.\n\nLiora`;
}

export function OracleWizard() {
  const [step, setStep] = useState<Step>("intro");
  const [name, setName] = useState("");
  const [intention, setIntention] = useState("");
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [cards, setCards] = useState<OracleCard[]>([]);
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false]);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [readingText, setReadingText] = useState("");
  const [readingLoading, setReadingLoading] = useState(true);
  const [showCta, setShowCta] = useState(false);
  const [displayedParas, setDisplayedParas] = useState<string[]>([]);
  const generatedRef = useRef(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("sx_oracle_email");
      if (stored) setEmail(stored);
    } catch {}
  }, []);

  function go(target: Step) {
    if (target === "draw") {
      const drawn = shuffle(DECK).slice(0, 3);
      setCards(drawn);
      setFlipped([false, false, false]);
    }
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function flipCard(i: number) {
    if (flipped[i]) return;
    const next = flipped.slice();
    next[i] = true;
    setFlipped(next);
  }

  const allFlipped = flipped.every(Boolean);

  function submitEmail() {
    const v = email.trim();
    if (!validEmail(v)) {
      setEmailErr("A whisper needs somewhere to land, please enter a valid email.");
      return;
    }
    setEmailErr("");
    try {
      localStorage.setItem("sx_oracle_email", v);
    } catch {}
    go("reading");
    if (!generatedRef.current) {
      generatedRef.current = true;
      setReadingLoading(true);
      setShowCta(false);
      setDisplayedParas([]);
      const text = fallbackReading(name, intention, q2, q3, cards);
      setTimeout(() => {
        setReadingText(text);
        setReadingLoading(false);
      }, 2200);
    }
  }

  useEffect(() => {
    if (readingLoading || !readingText) return;
    const paras = readingText.split(/\n\n+/);
    let i = 0;
    setDisplayedParas([]);
    const timer = setInterval(() => {
      i++;
      setDisplayedParas(paras.slice(0, i));
      if (i >= paras.length) {
        clearInterval(timer);
        setTimeout(() => setShowCta(true), 800);
      }
    }, 550);
    return () => clearInterval(timer);
  }, [readingLoading, readingText]);

  function restart() {
    generatedRef.current = false;
    setCards([]);
    setFlipped([false, false, false]);
    setQ1("");
    setQ2("");
    setQ3("");
    setReadingText("");
    setDisplayedParas([]);
    setShowCta(false);
    go("intro");
  }

  const cur = STAGE[step];

  return (
    <div className="oracle-page">
      <main className="oracle-wrap">
        <p className="oracle-eyebrow">A free reading · Whispers from the Womb of Stars</p>
        <h1 className="oracle-title">
          The stars remember <em>you.</em>
        </h1>
        <p className="oracle-intro">
          Set an intention, draw three cards, and let Liora, the voice of the deck, whisper back
          what your soul already knows.
        </p>

        <div className="oracle-stage">
          <div className="oracle-progress" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`pd${i === cur ? " on" : ""}${i < cur ? " done" : ""}`} />
            ))}
          </div>

          {step === "intro" && (
            <section className="ostep active">
              <div className="glass">
                <div className="o-field">
                  <label htmlFor="oName">What may Liora call you?</label>
                  <input
                    className="o-input"
                    id="oName"
                    type="text"
                    placeholder="Your first name"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="o-field">
                  <label htmlFor="oIntent">What is on your heart tonight?</label>
                  <textarea
                    className="o-text"
                    id="oIntent"
                    placeholder="A question, a worry, a wish… or leave it blank and let the cards choose."
                    value={intention}
                    onChange={(e) => setIntention(e.target.value)}
                  />
                </div>
                <div className="oracle-nav">
                  <span></span>
                  <button className="o-btn" onClick={() => go("q1")}>
                    Begin the reading <Arrow />
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === "q1" && (
            <section className="ostep active">
              <div className="glass">
                <h2 className="quiz-q">What calls you here tonight?</h2>
                <p className="quiz-help">Choose the one that hums truest.</p>
                <div className="quiz-opts">
                  {Q1_OPTS.map((o) => (
                    <button
                      key={o.val}
                      className={`quiz-opt${q1 === o.val ? " sel" : ""}`}
                      onClick={() => setQ1(o.val)}
                    >
                      <span className="gl">{o.gl}</span> {o.label}
                    </button>
                  ))}
                </div>
                <div className="oracle-nav">
                  <button className="o-back" onClick={() => go("intro")}>
                    ← Back
                  </button>
                  <button className="o-btn" onClick={() => go("q2")} disabled={!q1}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === "q2" && (
            <section className="ostep active">
              <div className="glass">
                <h2 className="quiz-q">Where do you feel it most?</h2>
                <p className="quiz-help">Your body is part of the reading.</p>
                <div className="quiz-opts">
                  {Q2_OPTS.map((o) => (
                    <button
                      key={o.val}
                      className={`quiz-opt${q2 === o.val ? " sel" : ""}`}
                      onClick={() => setQ2(o.val)}
                    >
                      <span className="gl">{o.gl}</span> {o.label}
                    </button>
                  ))}
                </div>
                <div className="oracle-nav">
                  <button className="o-back" onClick={() => go("q1")}>
                    ← Back
                  </button>
                  <button className="o-btn" onClick={() => go("q3")} disabled={!q2}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === "q3" && (
            <section className="ostep active">
              <div className="glass">
                <h2 className="quiz-q">What season is your soul in?</h2>
                <p className="quiz-help">There is no wrong answer.</p>
                <div className="quiz-opts">
                  {Q3_OPTS.map((o) => (
                    <button
                      key={o.val}
                      className={`quiz-opt${q3 === o.val ? " sel" : ""}`}
                      onClick={() => setQ3(o.val)}
                    >
                      <span className="gl">{o.gl}</span> {o.label}
                    </button>
                  ))}
                </div>
                <div className="oracle-nav">
                  <button className="o-back" onClick={() => go("q2")}>
                    ← Back
                  </button>
                  <button className="o-btn" onClick={() => go("draw")} disabled={!q3}>
                    Draw my cards <Arrow />
                  </button>
                </div>
              </div>
            </section>
          )}

          {step === "draw" && (
            <section className="ostep active">
              <div className="draw-head">
                <h3>Breathe, and choose with your hands.</h3>
                <p>
                  {allFlipped
                    ? "The three have spoken. When you are ready, receive your reading."
                    : "Touch each card when you feel ready."}
                </p>
              </div>
              <div className="spread">
                {cards.map((card, i) => (
                  <div key={card.key} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="slot-label">{POSITIONS[i].t}</div>
                    <div
                      className={`ocard${flipped[i] ? " flipped" : ""}`}
                      onClick={() => flipCard(i)}
                    >
                      <div className="face back">
                        <div className="pulse"></div>
                        <svg
                          className="sigil"
                          viewBox="0 0 100 100"
                          fill="none"
                          stroke="#D6C8F5"
                          strokeWidth="1.3"
                          style={{ width: "54%", height: "54%", opacity: 0.92 }}
                        >
                          <circle cx="50" cy="50" r="30" opacity=".7" />
                          <circle cx="50" cy="50" r="20" opacity=".5" />
                          <path d="M50 8 L53 44 L50 50 L47 44 Z" fill="#D6C8F5" stroke="none" />
                          <path d="M50 92 L53 56 L50 50 L47 56 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
                          <path d="M8 50 L44 47 L50 50 L44 53 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
                          <path d="M92 50 L56 47 L50 50 L56 53 Z" fill="#D6C8F5" stroke="none" opacity=".7" />
                          <circle cx="50" cy="50" r="3" fill="#D6C8F5" stroke="none" />
                        </svg>
                      </div>
                      <div className="face front art-full">
                        <img className="card-img" src={`/assets/card-${card.key}.png`} alt={card.name} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="oracle-nav" style={{ justifyContent: "center", marginTop: 42 }}>
                <button className="o-btn" onClick={() => go("gate")} disabled={!allFlipped}>
                  Receive your reading <Arrow />
                </button>
              </div>
            </section>
          )}

          {step === "gate" && (
            <section className="ostep active">
              <div className="glass gate">
                <div className="seal">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                  </svg>
                </div>
                <h3>Your reading is ready to open.</h3>
                <p>
                  Tell Liora where to send it. You&apos;ll receive your reading here on screen,
                  and a copy, with a free guided meditation, in your inbox.
                </p>
                <input
                  className="o-input"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") submitEmail();
                  }}
                />
                <div className="err">{emailErr}</div>
                <div style={{ marginTop: 18, display: "flex", justifyContent: "center" }}>
                  <button className="o-btn" onClick={submitEmail}>
                    Unseal my reading
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <p className="fine">No spam, ever. Just whispers worth keeping. Unsubscribe anytime.</p>
              </div>
            </section>
          )}

          {step === "reading" && (
            <section className="ostep active">
              <div className="reading-head">
                <span className="kf">a whisper for you</span>
                <h3>{name ? `For ${name}` : "Your reading"}</h3>
                <div className="reading-cards">
                  {cards.map((c, i) => (
                    <div className="rc" key={c.key}>
                      <span className="dot"></span>
                      <span className="rc-t">
                        {c.name}
                        <small>{POSITIONS[i].t}</small>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {readingLoading ? (
                <div className="reading-loading">
                  <div className="orb"></div>
                  <p>Liora is reading the stars over you…</p>
                </div>
              ) : (
                <div className="reading-body">
                  {displayedParas.map((p, i) => (
                    <p key={i} className={p.trim() === "Liora" ? "sig" : undefined}>
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {showCta && (
                <div className="reading-cta">
                  <div className="row">
                    <a className="o-btn" href="/booking">
                      Go deeper, book a session <Arrow />
                    </a>
                  </div>
                  <a className="o-back" href="/community" style={{ alignSelf: "center" }}>
                    Join the community →
                  </a>
                  <button className="o-back" onClick={restart}>
                    ↺ Draw again
                  </button>
                </div>
              )}
            </section>
          )}
        </div>

        <section style={{ marginTop: 80, position: "relative", zIndex: 2 }}>
          <p className="oracle-eyebrow" style={{ marginBottom: 30 }}>
            Whispers others received
          </p>
          <div className="oracle-tgrid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {[
              "It read me better than people who've known me for years. I booked a session that same night.",
              "I gasped. The three cards were exactly the three things I'd been afraid to say out loud.",
              "Liora's words made me cry in the best way. I've read mine a dozen times since.",
            ].map((t) => (
              <div className="glass" style={{ padding: 26 }} key={t}>
                <div style={{ color: "#C8BCE6", letterSpacing: 4, fontSize: 13 }}>★★★★★</div>
                <p
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: "#ECE6F2",
                    margin: "14px 0 12px",
                  }}
                >
                  &ldquo;{t}&rdquo;
                </p>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 11,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#B9AFD6",
                  }}
                >
                  Your seeker&apos;s name · placeholder
                </div>
              </div>
            ))}
          </div>
        </section>

        <p
          style={{
            textAlign: "center",
            marginTop: 54,
            fontSize: 13,
            color: "rgba(236,230,242,.4)",
            position: "relative",
            zIndex: 2,
          }}
        >
          Whispers from the Womb of Stars · an oracle by Alex Fadda · for reflection, not a
          substitute for professional care
        </p>
      </main>
    </div>
  );
}
