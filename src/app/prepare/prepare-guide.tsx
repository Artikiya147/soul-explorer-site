"use client";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Print = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path
      d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BODY_STEPS = [
  "Sleep well the night before, if you can. Rested is better than wired.",
  "Eat lightly beforehand, enough to be comfortable, not so much you feel heavy.",
  "Go easy on caffeine that morning, so your body can soften.",
  "Wear something loose and warm. Bodies cool as they relax deeply.",
];

const DAY_STEPS = [
  "Allow 4–5 hours and nothing pressing afterward, give yourself space to land.",
  "For online (BQH): a quiet room, a bed or sofa, headphones, and a stable connection.",
  "Have water nearby and your list of questions within reach.",
  "Afterward, be gentle. Drink water, rest, and let the insights keep unfolding.",
];

export function PrepareGuide() {
  return (
    <div className="guide-page grain">
      <main className="guide">
        <div className="guide-head">
          <a className="brand" href="/">
            Soul Explorer<span className="dot">.</span>
          </a>
          <span className="kicker">a gentle guide</span>
          <h1>
            How to prepare for your <em>session</em>
          </h1>
          <div className="guide-toolbar no-print">
            <button className="btn btn-primary" onClick={() => window.print()}>
              Save as PDF / Print <Print />
            </button>
            <a className="btn-ghost" href="/qhht">
              ← Back to QHHT
            </a>
          </div>
        </div>

        <section>
          <p
            style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontSize: "clamp(19px,2vw,24px)",
              lineHeight: 1.5,
              color: "var(--ink)",
            }}
          >
            There is nothing you need to do to be &ldquo;ready.&rdquo; Your soul already is. This
            guide is simply here to help you arrive soft, open, and unhurried.
          </p>
        </section>

        <section>
          <h2>
            <span className="n">one</span> Write your questions
          </h2>
          <p>
            The heart of your session is your list of questions, everything you&apos;d ask if you
            could speak directly to the wisest part of yourself. Don&apos;t edit or rank them.
            Write freely in the days before; the important ones rise to the top on their own.
          </p>
          <p>
            Consider questions about your <strong>body</strong> (symptoms, energy, sleep), your{" "}
            <strong>relationships</strong>, your <strong>purpose</strong> and path, and anything
            that&apos;s felt unexplained for a long time. A few starting lines:
          </p>
          <div className="q-lines">
            {Array.from({ length: 5 }).map((_, i) => (
              <div className="q-line" key={i} />
            ))}
          </div>
        </section>

        <section>
          <h2>
            <span className="n">two</span> Prepare your body
          </h2>
          <ul>
            {BODY_STEPS.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>
            <span className="n">three</span> Prepare your heart
          </h2>
          <p>
            The single most helpful thing you can bring is a willingness to trust whatever comes,
            without deciding in advance what it should look like. Some people see vivid scenes;
            others feel, hear, or simply know. There is no wrong way, and no such thing as
            &ldquo;doing it badly.&rdquo;
          </p>
          <p>
            In the days before, you might gently set an intention:{" "}
            <em>I am open to receiving exactly what I need.</em> That&apos;s enough.
          </p>
        </section>

        <section>
          <h2>
            <span className="n">four</span> On the day
          </h2>
          <ul>
            {DAY_STEPS.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="guide-close">
          When you&apos;re ready, I&apos;ll be here.
          <span className="sig">Alex</span>
        </div>

        <div className="guide-toolbar no-print" style={{ marginTop: 46 }}>
          <a className="btn btn-primary" href="/booking">
            Book your session <Arrow />
          </a>
          <a className="btn-ghost" href="/">
            Back to Soul Explorer
          </a>
        </div>
      </main>
    </div>
  );
}
