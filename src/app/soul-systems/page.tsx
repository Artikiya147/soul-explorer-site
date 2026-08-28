import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { OrbitDiagram } from "./orbit-diagram";
import "./soul-systems.css";

export const metadata: Metadata = {
  title: "Soul Systems · The Three-Part Practitioner Arc — Soul Explorer",
  description:
    "Soul Systems with Alex Fadda: reading, session, visualization, the conclusive step before any website work begins. Know yourself first, then build.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCircles = () => (
  <svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="80" stroke="#B9AFD6" strokeWidth="1" opacity=".5" />
    <circle cx="100" cy="100" r="55" stroke="#B9AFD6" strokeWidth="1" opacity=".65" />
    <circle cx="100" cy="100" r="6" fill="#B9AFD6" />
    <line x1="100" y1="20" x2="100" y2="180" stroke="#B9AFD6" strokeWidth="1" opacity=".4" />
    <line x1="20" y1="100" x2="180" y2="100" stroke="#B9AFD6" strokeWidth="1" opacity=".4" />
  </svg>
);

const IconHexagram = () => (
  <svg viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="70" stroke="#B9AFD6" strokeWidth="1" opacity=".4" />
    <polygon points="100,40 152,132 48,132" stroke="#B9AFD6" strokeWidth="1" opacity=".7" />
    <polygon points="100,160 48,68 152,68" stroke="#B9AFD6" strokeWidth="1" opacity=".7" />
    <circle cx="100" cy="100" r="5" fill="#B9AFD6" />
  </svg>
);

const IconPortal = () => (
  <svg viewBox="0 0 200 200" fill="none">
    <ellipse cx="100" cy="100" rx="80" ry="80" stroke="#5CE1E6" strokeWidth="1" opacity=".3" />
    <ellipse cx="100" cy="100" rx="58" ry="58" stroke="#5CE1E6" strokeWidth="1" opacity=".45" />
    <ellipse cx="100" cy="100" rx="34" ry="34" stroke="#5CE1E6" strokeWidth="1" opacity=".6" />
    <rect x="90" y="26" width="20" height="20" stroke="#5CE1E6" strokeWidth="1" opacity=".7" />
    <circle cx="100" cy="100" r="4" fill="#5CE1E6" />
  </svg>
);

export default function SoulSystemsPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark grain grain-dark">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>Studio</span>
                <span className="sep">·</span>
                <span>Soul Systems</span>
              </nav>
              <span className="kicker" style={{ color: "var(--turquoise)" }}>
                for practitioners · the conclusive step
              </span>
              <h1>
                Before you build, find what you&apos;re{" "}
                <em>actually building.</em>
              </h1>
              <p className="lede">
                Soul Systems is a three-part journey, reading, session,
                visualization, that comes before any website work
                begins.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/soul-readings">
                  Begin with a Soul Reading <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#why">
                  Why this order
                </a>
              </div>
            </div>
            <div>
              <div className="ss-hero-card">
                <span className="ss-hero-badge">the conclusive step</span>
                <div className="frame">
                  <img src="/assets/ssa-promo.png" alt="SSA, Soul System Architecture" />
                </div>
                <div className="caption">
                  <h3>Soul Systems</h3>
                  <p>Reading · Session · Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* WHY THIS ORDER */}
        <section className="section" id="why">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <p className="label" style={{ marginBottom: 16 }}>
                Why this order
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.2, color: "var(--lavender-deep)" }}>
                A website can only hold what you&apos;ve already found.
              </h2>
            </div>
            <div className="prose">
              <p>
                Maybe you&apos;ve already tried to write your own
                homepage and nothing sounded true. Maybe you can feel
                the work you&apos;re meant to do, but can&apos;t yet put
                it into words a stranger would understand.
              </p>
              <p>
                Most practitioners come ready to build. But a site built
                before the mission is clear ends up describing work
                that hasn&apos;t fully settled yet. It fits for a
                season, then needs redoing.
              </p>
              <p>
                The reading and the session aren&apos;t a detour from
                the website. They&apos;re the reason it will actually
                hold. Know yourself first, clear what&apos;s underneath,
                name what you&apos;re calling in. Then build.
              </p>
            </div>
          </div>
          <div className="ss-stats">
            <div className="stat">
              <div className="num">3</div>
              <span className="lbl">Sessions</span>
            </div>
            <div className="stat">
              <div className="num">1</div>
              <span className="lbl">Foundation</span>
            </div>
            <div className="stat">
              <div className="num">∞</div>
              <span className="lbl">Resonance</span>
            </div>
          </div>
        </section>

        {/* THE JOURNEY */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The journey</p>
              <h2>
                Three steps. <em>One foundation.</em>
              </h2>
            </div>

            <div className="ss-step ss-step--1">
              <div className="light">
                <span className="bignum">01</span>
                <p className="steplabel">Step one</p>
                <h3>
                  Soul <em>Reading</em>
                </h3>
                <p>
                  Astrology, numerology and channeled guidance, read
                  together. Who you are, where you come from, what&apos;s
                  moving through your life right now. The map that makes
                  everything else legible.
                </p>
                <div className="links">
                  <a href="/soul-readings">Explore Soul Readings →</a>
                </div>
              </div>
              <div className="dark">
                <div className="icon"><IconCircles /></div>
                <h4>Soul Reading</h4>
                <p className="cap">Astrology · Numerology · Channeled guidance</p>
              </div>
            </div>

            <div className="ss-step ss-step--2">
              <div className="light">
                <span className="bignum">02</span>
                <p className="steplabel">Step two</p>
                <h3>
                  QHHT or <em>BQH</em> Session
                </h3>
                <p>
                  Deep hypnosis to meet your higher self and the lives
                  that shaped this one, clearing what&apos;s distorted
                  and activating the mission underneath. Between this
                  session and the next, you&apos;ll do the Manifestation
                  Protocol homework, naming what you&apos;re calling in.
                </p>
                <div className="links">
                  <a href="/qhht">QHHT in person →</a>
                  <a href="/bqh">BQH online →</a>
                </div>
              </div>
              <div className="dark">
                <div className="icon"><IconHexagram /></div>
                <h4>Quantum Healing</h4>
                <p className="cap">QHHT · BQH · Past lives · Higher self</p>
              </div>
            </div>

            <div className="ss-step ss-step--3">
              <div className="light">
                <span className="bignum">03</span>
                <p className="steplabel" style={{ color: "var(--turquoise-deep)" }}>
                  The culminating step
                </p>
                <h3>
                  QMV · Quantum Mission{" "}
                  <em style={{ color: "var(--turquoise-deep)" }}>Visualization</em>
                </h3>
                <p>
                  The culminating session. You navigate to the timeline
                  your soul already recognises, and activate it, so what
                  comes next is chosen, not guessed at. This is where
                  the mission becomes real.
                </p>
                <div className="links">
                  <a href="/qmv" style={{ color: "var(--turquoise-deep)" }}>More on QMV →</a>
                </div>
              </div>
              <div className="dark">
                <div className="icon"><IconPortal /></div>
                <h4>Quantum Mission Visualization</h4>
                <p className="cap">Timeline activation · Soul mission</p>
              </div>
            </div>
          </div>
        </section>

        {/* QMV HIGHLIGHT */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <OrbitDiagram />
              <div className="ss-qmv-card">
                <div className="frame">
                  <img src="/assets/qmv-portal.png" alt="QMV, Quantum Mission Visualisation" />
                </div>
                <span className="pill">Regression</span>
              </div>
            </div>
            <div>
              <p className="label" style={{ color: "var(--turquoise)" }}>
                QMV · Quantum Mission Visualization
              </p>
              <h2 style={{ marginTop: 14 }}>
                You don&apos;t construct the future.{" "}
                <em style={{ color: "var(--turquoise-deep)" }}>You locate it.</em>
              </h2>
              <div className="prose" style={{ marginTop: 18 }}>
                <p style={{ color: "rgba(245,240,235,.78)" }}>
                  QMV is a guided hypnosis session, the culminating step of
                  the three. You navigate to the timeline your mission
                  already belongs to, the one your soul recognises when it
                  arrives there.
                </p>
                <p style={{ color: "rgba(245,240,235,.78)" }}>
                  What comes next after the session isn&apos;t decided,
                  it&apos;s activated. The choices that follow feel
                  different when you&apos;ve already stood in the place
                  they&apos;re heading.
                </p>
              </div>
              <div className="ss-quote">&ldquo;What comes next is chosen, not guessed at.&rdquo;</div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a className="btn btn-light" href="/qmv">
                  Full QMV details
                </a>
                <a className="btn-ghost btn-ghost-light" href="/booking">
                  Book Soul Systems
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* THEN, WE BUILD */}
        <section className="ss-build grain grain-dark">
          <img src="/assets/dancing-ladies.png" alt="" />
          <div className="inner">
            <p className="label" style={{ color: "rgba(245,240,235,.6)" }}>
              Then, we build
            </p>
            <h2 style={{ color: "var(--parchment)", marginTop: 10 }}>
              Only once the journey is complete,{" "}
              <em style={{ color: "var(--lavender-soft)" }}>Studio begins.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                color: "rgba(245,240,235,.74)",
                marginTop: 18,
                maxWidth: "52ch",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              This is where your practice gets its home online, built
              from what the reading, the session and the manifestation
              work actually revealed. The Studio is the conclusive step,
              not the first one.
            </p>
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
              <a className="btn btn-light" href="/studio">
                See how Studio works
              </a>
              <a className="btn-ghost btn-ghost-light" href="/soul-readings">
                Begin with a Soul Reading
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
