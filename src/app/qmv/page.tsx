import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./qmv.css";

export const metadata: Metadata = {
  title: "QMV · Quantum Mission Visualization — Soul Explorer",
  description:
    "QMV with Alex Fadda: the third session of the Soul Systems Arc. A guided hypnotic journey to the future timeline your soul already belongs to.",
};

const ARC = [
  {
    n: "01",
    title: "Soul Reading",
    body: "Establishing your lineage, your gifts, and the seeds of your mission. The map is drawn before anything else begins.",
    href: "/soul-readings",
    current: false,
  },
  {
    n: "02",
    title: "QHHT · Blueprint Restoration",
    body: "Clearing the distortions, the old patterns, the contracts that don't belong. Activating the present mission from a clean foundation.",
    href: "/qhht",
    current: false,
  },
  {
    n: "03",
    title: "QMV · Quantum Mission Visualization",
    body: "Navigating to the aligned future timeline and activating it. The mission becomes real, not imagined. This is where it lands.",
    href: "/qmv",
    current: true,
  },
];

const PREREQS = [
  "Completed their Soul Reading — lineage, gifts, mission seeds established",
  "Completed a QHHT or BQH session — distortions cleared, present mission activated",
  "Written their Blue Ink vision statement and created their visual anchors from the Manifestation Protocol",
];

const PHASES = [
  {
    n: "Phase one",
    title: "Preparation and Induction",
    time: "5 to 10 minutes",
    body: "Breath-based, slow, grounding. You are brought into the body before being lifted out of ordinary awareness. Progressive relaxation softens the jaw, releases the shoulders, quiets the analytical mind. When stillness arrives — slower breath, a softening of the face — the journey begins.",
  },
  {
    n: "Phase two",
    title: "Transition to the Ship",
    time: "10 minutes",
    body: "You are guided to a beautiful place on Earth — somewhere your soul holds. From there, you turn around. Your ship is waiting. It has always been yours. You approach, place your finger on the panel beside the door. It reads you. Recognises you. You step inside, find your seat, and lift off. Through atmosphere, through cloud, through the boundary between worlds — and into the wormhole. A corridor of light between what was and what is possible.",
  },
  {
    n: "Phase three",
    title: "The Screens",
    time: "10 to 15 minutes",
    body: "On the other side of the wormhole, a large curved screen appears — or several windows, side by side, a control panel of possibilities. Each shows a version of your future. Your Blue Ink vision statement is read aloud, slowly. Your body responds. One window brightens. Something shifts, or pulls, or warms. That is the one. You move toward it.",
  },
  {
    n: "Phase four",
    title: "Activation and the Future Self Speaks",
    time: "15 to 20 minutes",
    body: "You step through the window. Into the timeline. Feel your feet on the ground of that future. Your Higher Self comes forward — the part of you that exists beyond time, that has always known this was possible. Then your future aligned self arrives: the you who lives fully in this timeline, who has integrated everything, who is building from wholeness. They speak. What did you do to get here? What do you want me to remember?",
  },
  {
    n: "Phase five",
    title: "Return and Integration",
    time: "≈14 additional minutes",
    body: "You thank your Higher Self and your future self. You carry everything back with you — it does not stay behind. A gentle count from five to one returns you to the room. Water. Silence. Then you share what wants to be shared. After the session, the full Energy Hygiene Protocol is completed together, sealing the field before you re-enter ordinary life.",
  },
];

const CONCEPTS = [
  {
    tag: "The Beautiful Place",
    body: "An earthly anchor. Ground before lift-off. The body needs to know it is safe before it can travel.",
  },
  {
    tag: "The Wormhole",
    body: "A passage between timelines. Colours deepen. Sound fades to a low hum. The shift in the body marks the crossing.",
  },
  {
    tag: "The Screens",
    body: "Timelines as visible windows. The body — not the mind — does the choosing. When it brightens, you know.",
  },
];

const PROTOCOL = [
  "Crystal pyramid invocation to open the session",
  "Council, SaLuSa, and guides called into the container",
  "Field sealed before client re-enters ordinary life",
  "14 additional minutes: book 90 total",
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function QMVPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark qmv-hero grain grain-dark">
          <div className="wrap">
            <div className="ph-text">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>Soul Systems</span>
                <span className="sep">·</span>
                <span>QMV</span>
              </nav>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--sans)",
                  fontSize: 11,
                  letterSpacing: "2px",
                  color: "var(--turquoise)",
                  border: "1px solid rgba(92,225,230,.25)",
                  background: "rgba(92,225,230,.1)",
                  borderRadius: 30,
                  padding: "7px 16px",
                }}
              >
                Session Three · Soul Systems Arc
              </span>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontWeight: 600,
                  fontSize: "clamp(20px,2.2vw,28px)",
                  letterSpacing: ".01em",
                  color: "var(--turquoise)",
                  marginTop: 16,
                }}
              >
                Quantum Mission Visualization
              </p>
              <h1 style={{ marginTop: 14 }}>
                QMV: the timeline your soul already <em>recognises.</em>
              </h1>
              <p className="lede">
                QMV (Quantum Mission Visualization) is a guided hypnosis
                session, your future-life counterpart to QHHT. Not the
                timeline fear would choose. Not the one conditioning
                expects. You navigate to the future your soul already
                belongs to, and activate it from inside.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/booking">
                  Book Soul Systems <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#phases">
                  How it works
                </a>
              </div>
            </div>
            <div className="ph-art">
              <div className="photo-clean" style={{ maxWidth: 400, width: "100%", height: 480 }}>
                <img src="/assets/qmv-ship.png" alt="A ship waiting between timelines" />
              </div>
            </div>
          </div>
        </header>

        {/* THE ARC */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The Soul Systems Arc</p>
              <h2>
                Three sessions. One <em>complete journey.</em>
              </h2>
              <p className="sub">
                QMV is the third and culminating session. By the time
                you arrive here, the ground has already been prepared.
              </p>
            </div>
            <div className="steps" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              {ARC.map((a) => (
                <div
                  key={a.n}
                  style={{
                    borderRadius: 10,
                    border: a.current
                      ? "1px solid var(--lavender-deep)"
                      : "1px solid rgba(196,181,160,.5)",
                    background: a.current ? "rgba(126,114,168,.06)" : "#fbf7f1",
                    padding: "clamp(24px,2.6vw,32px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontWeight: 500,
                      fontSize: 48,
                      color: a.current
                        ? "var(--lavender-deep)"
                        : "rgba(155,142,196,.35)",
                    }}
                  >
                    {a.n}
                  </span>
                  <h4 style={{ marginTop: 10 }}>{a.title}</h4>
                  <p style={{ marginTop: 8 }}>{a.body}</p>
                  {a.current ? (
                    <span
                      className="cred-chip"
                      style={{ marginTop: 14, display: "inline-block" }}
                    >
                      You are here
                    </span>
                  ) : (
                    <a className="btn-ghost" href={a.href} style={{ marginTop: 14, display: "inline-block" }}>
                      Learn more
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="section section--tint grain">
          <div
            className="wrap"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
          >
            <div>
              <p className="label" style={{ marginBottom: 20 }}>
                What it is
              </p>
              <h2 className="h2" style={{ marginBottom: 24 }}>
                You don&apos;t construct the future. <em>You locate it.</em>
              </h2>
              <div className="prose">
                <p>
                  Using a guided hypnotic state, QMV takes you to a ship,
                  your ship, the one that has always been yours, and
                  through a wormhole passage between timelines. On the
                  other side, a series of screens appears, each showing a
                  version of your future.
                </p>
                <p>
                  Your body does the choosing. Not your mind. Not your
                  fear. When the right timeline lights up, you step
                  through and stand inside it. Your Higher Self and your
                  future aligned self are there to meet you. They speak.
                  You listen. You remember.
                </p>
                <p>
                  You return carrying that future with you. The choices
                  that follow feel different when you&apos;ve already
                  stood in the place they&apos;re heading.
                </p>
              </div>
            </div>
            <div
              style={{
                background: "var(--dark)",
                borderRadius: 20,
                padding: "clamp(20px,2.6vw,32px)",
                width: "100%",
                minWidth: 435,
                maxWidth: 849,
              }}
            >
              <div className="photo-clean" style={{ width: "100%", aspectRatio: "1 / 1" }}>
                <img src="/assets/qmv-portal.png" alt="QMV, Quantum Mission Visualisation" />
              </div>
              <p
                style={{
                  marginTop: 28,
                  fontFamily: "var(--sans)",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--turquoise-deep)",
                }}
              >
                Before this session, the client has
              </p>
              <ul
                style={{
                  marginTop: 16,
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {PREREQS.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      gap: 11,
                      alignItems: "flex-start",
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(245,240,235,.82)",
                    }}
                  >
                    <span style={{ color: "var(--turquoise-deep)", flex: "0 0 auto" }}>
                      <Check />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 14, fontSize: 14, color: "rgba(245,240,235,.6)" }}>
                → Trust is already established. The container is
                already built.
              </p>
            </div>
          </div>
        </section>

        {/* THE SESSION */}
        <section className="section" id="phases">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The session</p>
              <h2>
                Five phases. <em>One arc.</em>
              </h2>
              <p className="sub">
                A full QMV session runs 65 to 80 minutes. Book 90 minutes
                so the integration has room to breathe.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: 24,
                marginTop: 48,
              }}
            >
              {PHASES.map((p, i) => {
                const isLast = i === PHASES.length - 1;
                return (
                  <div
                    key={p.title}
                    className={isLast ? "" : "tier"}
                    style={
                      isLast
                        ? {
                            gridColumn: "1 / -1",
                            background: "var(--dark)",
                            borderRadius: 8,
                            padding: "clamp(28px,3vw,40px)",
                          }
                        : undefined
                    }
                  >
                    <span
                      className={isLast ? undefined : "t-meta"}
                      style={
                        isLast
                          ? {
                              fontFamily: "var(--sans)",
                              fontWeight: 700,
                              fontSize: 11,
                              letterSpacing: ".2em",
                              textTransform: "uppercase",
                              color: "var(--turquoise-deep)",
                            }
                          : undefined
                      }
                    >
                      {p.n}
                    </span>
                    <h3
                      className={isLast ? undefined : "t-name"}
                      style={{
                        fontSize: 24,
                        marginTop: isLast ? 8 : 0,
                        fontFamily: "var(--serif)",
                        fontStyle: isLast ? "normal" : "italic",
                        color: isLast ? "var(--parchment)" : undefined,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        marginTop: 10,
                        color: isLast ? "rgba(245,240,235,.78)" : undefined,
                      }}
                    >
                      {p.body}
                    </p>
                    <p
                      style={{
                        marginTop: 10,
                        fontFamily: "var(--script)",
                        fontSize: 18,
                        color: "var(--turquoise-deep)",
                      }}
                    >
                      {p.time}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FROM THE SESSION SCRIPT */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap">
            <div className="quote-band">
              <div className="mark">&ldquo;</div>
              <p>
                Your ship is waiting in stillness. It has always been
                yours. Notice its shape. Its light. Its presence. As you
                approach, a door opens. Place your finger on the panel.
                Feel it read you, recognise you. This ship knows exactly
                who you are. You belong here.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 20,
                marginTop: 48,
              }}
            >
              {CONCEPTS.map((c) => (
                <article
                  key={c.tag}
                  style={{
                    border: "1px solid rgba(196,181,160,.28)",
                    borderRadius: 10,
                    padding: "24px 22px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--script)",
                      fontSize: 24,
                      color: "var(--turquoise-deep)",
                    }}
                  >
                    {c.tag}
                  </div>
                  <p style={{ fontSize: 15, color: "rgba(245,240,235,.74)", marginTop: 8 }}>
                    {c.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER THE SESSION */}
        <section className="section section--tint grain">
          <div
            className="wrap"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
          >
            <div>
              <p className="label" style={{ marginBottom: 20 }}>
                After the session
              </p>
              <h2 className="h2" style={{ marginBottom: 24 }}>
                What comes next is <em>chosen, not guessed at.</em>
              </h2>
              <div className="prose">
                <p>
                  The choices that follow QMV feel different. Not
                  because something magical happened to you, but because
                  you have already stood inside the place you are
                  heading. The body remembers what the mind cannot plan
                  its way to.
                </p>
                <p>
                  The integration material from your session becomes the
                  companion to your ongoing Manifestation Protocol
                  practice. The Blue Ink statement you wrote before the
                  session takes on new weight, you have seen where it
                  leads. The Studio, if that is part of your path,
                  begins from this place.
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#fbf7f1",
                border: "1px solid rgba(196,181,160,.5)",
                borderRadius: 20,
                padding: "clamp(20px,2.6vw,32px)",
                width: "100%",
                minWidth: 435,
                maxWidth: 849,
              }}
            >
              <div className="photo-clean" style={{ width: "100%", aspectRatio: "1 / 1" }}>
                <img src="/assets/ssa-promo.png" alt="SSA, Soul System Architecture" />
              </div>
              <p
                style={{
                  marginTop: 28,
                  fontFamily: "var(--sans)",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--lavender-deep)",
                }}
              >
                Energy Hygiene Protocol
              </p>
              <p style={{ marginTop: 10, fontSize: 14, color: "var(--ink-soft)" }}>
                After the depth of a QMV session, the field is open.
                Practitioner and client complete this together, sealing
                the space that was held between you.
              </p>
              <ul
                style={{
                  marginTop: 16,
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {PROTOCOL.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      gap: 11,
                      alignItems: "flex-start",
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "var(--ink)",
                    }}
                  >
                    <span style={{ color: "var(--lavender-deep)", flex: "0 0 auto" }}>
                      ☾
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CLOSING QUOTE */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(22px,2.6vw,32px)",
                color: "var(--parchment)",
                lineHeight: 1.4,
              }}
            >
              &ldquo;This script is a living document. Refine it through
              practice. Trust your channel. The words on this page are a
              foundation, not a cage.&rdquo;
            </p>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--sans)",
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "var(--lavender-soft)",
              }}
            >
              Alex Fadda · Soul Systems Architecture
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">begin the arc</span>
          <h2>
            Ready to locate <em>your timeline?</em>
          </h2>
          <p>
            The Soul Systems arc begins with a Soul Reading. From there,
            the journey builds. Each session opens the next.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn btn-primary" href="/booking">
              Book Soul Systems <Arrow />
            </a>
            <a className="btn-ghost" href="/soul-systems">
              See the full arc
            </a>
          </div>
          <span className="seal-note">
            QMV is Session Three · follows Soul Reading and QHHT · book
            individually or as a complete arc
          </span>
        </section>
      </main>

      <Footer />
    </>
  );
}
