"use client";

import { useState } from "react";

type Step = "welcome" | 1 | 2 | 3 | 4 | "confirm";

const THEMES = [
  "Purpose & path",
  "Relationships",
  "Parenthood",
  "Life transition",
  "Health & body",
  "Career & creativity",
  "Spiritual path",
  "Something I can't name yet",
];

const SENSITIVITY = [
  "Yes, highly sensitive (HSP)",
  "Yes, neurodivergent",
  "Both",
  "I'm not sure",
  "I'd rather not say",
];

const INTEGRATION = [
  "Journaling",
  "Reflection",
  "Conversation",
  "Alone time",
  "Movement / body",
  "Meditation",
  "Creative expression",
  "I'm still discovering",
];

const MAX_NUMS = 7;

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function validEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export function QuestionnaireFlow() {
  const [step, setStep] = useState<Step>("welcome");

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [tob, setTob] = useState("");
  const [pob, setPob] = useState("");
  const [email, setEmail] = useState("");

  const [why, setWhy] = useState("");
  const [themes, setThemes] = useState<string[]>([]);
  const [themeOther, setThemeOther] = useState("");
  const [relations, setRelations] = useState("");

  const [numbers, setNumbers] = useState<number[]>([]);

  const [sensitivity, setSensitivity] = useState("");
  const [care, setCare] = useState("");
  const [integration, setIntegration] = useState<string[]>([]);
  const [photoName, setPhotoName] = useState("");

  const [err, setErr] = useState("");
  const [refId, setRefId] = useState("");

  function toggleTheme(t: string) {
    setThemes((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }
  function toggleIntegration(t: string) {
    setIntegration((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  }
  function toggleNumber(n: number) {
    setNumbers((prev) => {
      if (prev.includes(n)) return prev.filter((x) => x !== n);
      if (prev.length >= MAX_NUMS) return prev;
      return [...prev, n];
    });
  }

  function goTo(target: Step) {
    setErr("");
    if (target === 2 && !validateStep1()) return;
    if (target === 3 && !validateStep2()) return;
    if (target === 4 && !validateStep3()) return;
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateStep1() {
    if (!name.trim()) return fail("Please enter your birth name.");
    if (!dob.trim()) return fail("Please enter your date of birth.");
    if (!pob.trim()) return fail("Please enter your place of birth.");
    if (!validEmail(email.trim())) return fail("Please enter a valid email address.");
    return true;
  }
  function validateStep2() {
    if (!why.trim()) return fail("Please share what brings you here.");
    return true;
  }
  function validateStep3() {
    if (numbers.length < MAX_NUMS) return fail("Please choose all 7 numbers.");
    return true;
  }
  function fail(msg: string) {
    setErr(msg);
    return false;
  }

  function submit() {
    const allThemes = [...themes];
    if (themeOther.trim()) allThemes.push(themeOther.trim());
    const themeStr = allThemes.join(", ");
    const integrationStr = integration.join(", ");
    const sortedNums = [...numbers].sort((a, b) => a - b);

    const ref = (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
    ).toUpperCase();
    setRefId(ref);

    const record = {
      ref,
      name,
      dob,
      tob: tob.trim() || "unknown",
      pob,
      email,
      why,
      theme: themeStr,
      relations,
      numbers: sortedNums,
      sensitivity,
      care,
      integration: integrationStr,
    };
    try {
      localStorage.setItem("sx_questionnaire", JSON.stringify(record));
    } catch {}

    const body = [
      "SOUL READING QUESTIONNAIRE",
      "─────────────────────────",
      `Reference: ${ref}`,
      `Name: ${record.name}`,
      `Date of birth: ${record.dob}`,
      `Time of birth: ${record.tob}`,
      `Place of birth: ${record.pob}`,
      `Email: ${record.email}`,
      "",
      `NUMBERS: ${record.numbers.join(", ")}`,
      "",
      "WHAT BRINGS THEM HERE:",
      record.why,
      "",
      record.theme ? `THEMES: ${record.theme}` : "",
      record.relations ? `RELATIONSHIPS: ${record.relations}` : "",
      "",
      record.sensitivity ? `SENSITIVITY: ${record.sensitivity}` : "",
      record.care ? `PLEASE APPROACH WITH CARE: ${record.care}` : "",
      record.integration ? `INTEGRATES VIA: ${record.integration}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:hello@soul-explorer.com?subject=${encodeURIComponent(
      `Soul Reading Questionnaire ${record.name} [${ref}]`
    )}&body=${encodeURIComponent(body)}`;

    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      window.location.href = mailto;
    }, 600);
  }

  const progressIndex = typeof step === "number" ? step - 1 : step === "confirm" ? 4 : -1;

  return (
    <div className="q-page grain">
      {step === "welcome" && (
        <section className="qhero">
          <div className="qhero-inner">
            <a className="q-logo" href="/">
              Soul Explorer<span className="dot">.</span>
            </a>
            <h1>
              Preparing your <em>soul reading.</em>
            </h1>
            <p className="lede">
              Before your Oracle + Soul Field reading, a few things help Liora meet you exactly
              where you are. There are no right or wrong answers, only your truth.
            </p>
            <button className="btn btn-primary" onClick={() => goTo(1)}>
              Begin my questionnaire <Arrow />
            </button>
            <p className="q-note">All information is kept private and used only for your reading.</p>
          </div>
        </section>
      )}

      {typeof step === "number" && (
        <>
          <div className="q-prog" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} style={{ display: "contents" }}>
                <span className={`q-prog-dot${i === progressIndex ? " on" : ""}${i < progressIndex ? " done" : ""}`} />
                {i < 3 && <span className="q-prog-line" />}
              </span>
            ))}
          </div>

          <div className="q-shell">
            {step === 1 && (
              <div className="q-step">
                <p className="q-eyebrow">Step 1 of 4 · Personal information</p>
                <h2 className="q-head">
                  Who <em>are</em> you, in this life?
                </h2>
                <p className="q-sub">
                  Your birth details anchor the reading to your soul&apos;s specific frequency in
                  this incarnation.
                </p>

                <div className="q-field">
                  <label>
                    Full birth name <span className="opt">(first, middle if any, last)</span>
                  </label>
                  <input
                    className="q-input"
                    type="text"
                    placeholder="As it appears on your birth certificate"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="q-row">
                  <div className="q-field">
                    <label>Date of birth</label>
                    <input
                      className="q-input"
                      type="text"
                      placeholder="DD / MM / YYYY"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                  <div className="q-field">
                    <label>
                      Time of birth <span className="opt">(approximate is fine)</span>
                    </label>
                    <input
                      className="q-input"
                      type="text"
                      placeholder="e.g. 14:30 or 'unknown'"
                      value={tob}
                      onChange={(e) => setTob(e.target.value)}
                    />
                  </div>
                </div>

                <div className="q-field">
                  <label>
                    Place of birth <span className="opt">(city / country)</span>
                  </label>
                  <input
                    className="q-input"
                    type="text"
                    placeholder="e.g. Milan, Italy"
                    value={pob}
                    onChange={(e) => setPob(e.target.value)}
                  />
                </div>

                <div className="q-field">
                  <label>
                    Your email <span className="opt">(to receive your reading)</span>
                  </label>
                  <input
                    className="q-input"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="q-err">{err}</div>
                <div className="q-nav">
                  <span></span>
                  <button className="btn btn-primary" onClick={() => goTo(2)}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="q-step">
                <p className="q-eyebrow">Step 2 of 4 · Context &amp; intention</p>
                <h2 className="q-head">
                  What <em>brings</em> you here?
                </h2>
                <p className="q-sub">
                  This is where you set the direction. Write as little or as much as feels
                  right.
                </p>

                <div className="q-field">
                  <label>What brings you to this reading right now?</label>
                  <textarea
                    className="q-textarea"
                    placeholder="What's happening in your life, what you're sensing, what brought you to this moment…"
                    value={why}
                    onChange={(e) => setWhy(e.target.value)}
                  />
                </div>

                <div className="q-field">
                  <label>
                    Is there a specific theme you feel called to explore?{" "}
                    <span className="opt">(optional)</span>
                  </label>
                  <div className="q-chips">
                    {THEMES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`q-chip${themes.includes(t) ? " sel" : ""}`}
                        onClick={() => toggleTheme(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <input
                    className="q-input"
                    type="text"
                    placeholder="Or describe your own theme…"
                    style={{ marginTop: 12 }}
                    value={themeOther}
                    onChange={(e) => setThemeOther(e.target.value)}
                  />
                </div>

                <div className="q-field">
                  <label>
                    Are there significant relationships you&apos;d like included?{" "}
                    <span className="opt">(optional)</span>
                  </label>
                  <textarea
                    className="q-textarea"
                    style={{ minHeight: 72 }}
                    placeholder="e.g. 'My mother Sara', 'My partner Marco' first name and relationship is enough"
                    value={relations}
                    onChange={(e) => setRelations(e.target.value)}
                  />
                </div>

                <div className="q-err">{err}</div>
                <div className="q-nav">
                  <button className="q-back" onClick={() => goTo(1)}>
                    ← Back
                  </button>
                  <button className="btn btn-primary" onClick={() => goTo(3)}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="q-step">
                <p className="q-eyebrow">Step 3 of 4 · The sacred numbers</p>
                <h2 className="q-head">
                  Let the numbers <em>choose you.</em>
                </h2>

                <div className="ceremony">
                  <div className="ceremony-stars"></div>
                  <span className="kf">before you choose</span>
                  <p>Don&apos;t decide, don&apos;t associate them with favourite numbers or important dates.</p>
                  <ul className="ceremony-list">
                    <li>Take a breath. Come into presence.</li>
                    <li>Rest your hand on your heart, your womb, or the earth.</li>
                    <li>
                      Ask: <em style={{ color: "var(--lavender-soft)" }}>&ldquo;What is true now?&rdquo;</em>
                    </li>
                    <li>Let the numbers rise on their own.</li>
                  </ul>
                </div>

                <div className="num-counter">
                  <div className="count">{numbers.length}</div>
                  <div className="label">of 7 chosen</div>
                </div>

                <div className="num-grid">
                  {Array.from({ length: 44 }, (_, i) => i + 1).map((n) => {
                    const sel = numbers.includes(n);
                    const disabled = !sel && numbers.length >= MAX_NUMS;
                    return (
                      <div
                        key={n}
                        className={`num-card${sel ? " sel" : ""}${disabled ? " disabled" : ""}`}
                        onClick={() => toggleNumber(n)}
                      >
                        {n}
                      </div>
                    );
                  })}
                </div>

                <div className="q-err" style={{ textAlign: "center", marginTop: 16 }}>
                  {err}
                </div>
                <div className="q-nav">
                  <button className="q-back" onClick={() => goTo(2)}>
                    ← Back
                  </button>
                  <button className="btn btn-primary" onClick={() => goTo(4)}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="q-step">
                <p className="q-eyebrow">Step 4 of 4 · Sensitivity &amp; how you receive</p>
                <h2 className="q-head">
                  How do you <em>receive?</em>
                </h2>
                <p className="q-sub">This helps me deliver your reading in a way that truly lands for you.</p>

                <div className="q-field">
                  <label>
                    Do you consider yourself highly sensitive or neurodivergent?{" "}
                    <span className="opt">(optional)</span>
                  </label>
                  <div className="q-chips">
                    {SENSITIVITY.map((s) => (
                      <button
                        type="button"
                        key={s}
                        className={`q-chip${sensitivity === s ? " sel" : ""}`}
                        onClick={() => setSensitivity(sensitivity === s ? "" : s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="q-field">
                  <label>
                    Is there anything you&apos;d like me to approach with extra care, or avoid?{" "}
                    <span className="opt">(optional)</span>
                  </label>
                  <textarea
                    className="q-textarea"
                    style={{ minHeight: 72 }}
                    placeholder="Any topic, theme or approach you'd prefer I handle gently or leave aside…"
                    value={care}
                    onChange={(e) => setCare(e.target.value)}
                  />
                </div>

                <div className="q-field">
                  <label>How do you usually integrate insights?</label>
                  <div className="q-chips">
                    {INTEGRATION.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={`q-chip${integration.includes(t) ? " sel" : ""}`}
                        onClick={() => toggleIntegration(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="q-field">
                  <label>
                    A recent photo of you <span className="opt">(optional, no filters, natural light)</span>
                  </label>
                  <label className="q-photo">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? "")}
                    />
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C4B5A0" strokeWidth="1.4">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p>Tap to add a photo, it helps Liora connect with your current field</p>
                    <div className="uploaded">{photoName && `✓ ${photoName}`}</div>
                  </label>
                </div>

                <div className="q-nav">
                  <button className="q-back" onClick={() => goTo(3)}>
                    ← Back
                  </button>
                  <button className="btn btn-primary" onClick={submit}>
                    Send my questionnaire <Arrow />
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {step === "confirm" && (
        <div className="q-confirm">
          <div className="q-confirm-head">
            <div className="seal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>
              Your reading is being <em>prepared.</em>
            </h2>
            <p>
              Everything has been received. Alessandra will be in touch with next steps. In the
              meantime you&apos;ve done beautifully.
            </p>
          </div>

          <div className="q-summary">
            <h4>Your answers at a glance</h4>
            {[
              { k: "Reference", v: refId },
              { k: "Name", v: name },
              { k: "Date of birth", v: dob + (tob && tob !== "unknown" ? ` · ${tob}` : "") },
              { k: "Place of birth", v: pob },
              { k: "Your 7 numbers", v: [...numbers].sort((a, b) => a - b).join(" · ") },
              { k: "Themes", v: [...themes, themeOther.trim()].filter(Boolean).join(", ") },
              { k: "Intention", v: why.length > 120 ? why.slice(0, 117) + "…" : why },
            ]
              .filter((r) => r.v && r.v.trim())
              .map((r) => (
                <div className="item" key={r.k}>
                  <span className="key">{r.k}</span>
                  <span className="val">{r.v}</span>
                </div>
              ))}
          </div>

          <div className="q-actions">
            <a
              className="btn btn-primary"
              href={`/booking?questionnaire=${encodeURIComponent(refId)}`}
            >
              Book your session <Arrow />
            </a>
            <a className="btn-ghost" href="/">
              ← Return to Soul Explorer
            </a>
            <p className="note">With warmth, Alessandra &amp; Liora ✦</p>
          </div>
        </div>
      )}
    </div>
  );
}
