import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SHOW_TESTIMONIALS } from "@/lib/testimonials-flag";

export const metadata: Metadata = {
  title: "The Community, Courses & Circle on Skool · Soul Explorer",
  description:
    "Join the Soul Explorer community on Skool, courses, the meditation series, live circles and a gathering of souls remembering together.",
};

const COURSES = [
  {
    pill: "Foundations",
    title: "Remembering Who You Are",
    body: "A gentle first journey into past lives, the soul, and the intelligence that guides you, for the curious and the brand new.",
    meta: ["6 lessons", "Self-paced"],
  },
  {
    pill: "Practice",
    title: "The Art of Going Within",
    body: "Learn to reach the theta state on your own, self-hypnosis, breath and visualization to access your inner knowing between sessions.",
    meta: ["8 lessons", "+ audio"],
  },
  {
    pill: "Stars",
    title: "Reading Your Own Chart",
    body: "The astrology and numerology behind a soul reading, learn to map your own timing, gifts and seasons.",
    meta: ["7 lessons", "Workbook"],
  },
  {
    pill: "Series",
    title: "The Meditation Series",
    body: "The complete library of guided meditations, for sleep, healing, past-life recall and meeting your higher self.",
    meta: ["Ongoing"],
    link: { href: "/meditations", label: "Preview →" },
  },
];

const CHECKS = [
  "All courses, added to as the Circle grows",
  "The complete guided meditation series",
  "Monthly live circles & group meditations",
  "A kind, moderated space to ask and share",
  "Early access & member rates on sessions",
  "People who simply understand the journey",
];

const TESTIMONIALS = [
  "For the first time I'm not the 'strange one' for feeling all this. These are my people.",
  "The meditations alone are worth it. I fall asleep to them and wake up lighter.",
  "The live circles changed everything. Doing the work together is so much more powerful.",
];

const SKOOL_URL = "https://www.skool.com/soul-explorer-1840";

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

export default function CommunityPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <header className="page-hero grain">
          <div className="halo halo-1"></div>
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Explore</span>
              <span className="sep">·</span>
              <span>Community</span>
            </nav>
            <span className="kicker">you were never meant to do this alone</span>
            <h1>
              The Circle, where souls <em>remember together.</em>
            </h1>
            <p className="lede">
              A gathering place on Skool for everyone walking this path, with courses, the full
              meditation series, live circles, and people who speak your language.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={SKOOL_URL} target="_blank" rel="noopener">
                Join the community <Arrow />
              </a>
              <a className="btn-ghost" href="#courses">
                See what&apos;s inside
              </a>
            </div>
          </div>
        </header>

        {/* SKOOL BAND */}
        <section className="section">
          <div className="wrap">
            <div className="skool-band grain grain-dark" style={{ display: "block" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 48, alignItems: "center" }}>
                <div>
                  <p className="eyebrow">Hosted on Skool</p>
                  <h2>A home for the work between sessions.</h2>
                  <p>
                    Sessions are profound, and then life continues. The Circle is where the
                    remembering keeps happening: practices, teaching, and the warmth of others
                    who simply understand.
                  </p>
                  <div style={{ marginTop: 32, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
                    <a className="btn btn-light" href={SKOOL_URL} target="_blank" rel="noopener">
                      Enter the Circle <Arrow />
                    </a>
                  </div>
                  <img
                    src="/assets/cat-mascot.png"
                    alt=""
                    style={{ width: 90, marginTop: 14, display: "block" }}
                  />
                </div>
                <div className="skool-stats">
                  <div className="skool-stat">
                    <div className="v">5+</div>
                    <div className="k">Guided courses</div>
                  </div>
                  <div className="skool-stat">
                    <div className="v">∞</div>
                    <div className="k">Meditation series</div>
                  </div>
                  <div className="skool-stat">
                    <div className="v">Monthly</div>
                    <div className="k">Live circles</div>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20, marginTop: 44 }}>
                <img src="/assets/community-soul-cover.png" alt="Alex Fadda's Soul Explorer program for practitioners" style={{ width: "100%", borderRadius: 12, display: "block" }} />
                <img src="/assets/community-crystals-guide.png" alt="Crystals for Practitioners guidebook" style={{ width: "100%", borderRadius: 12, display: "block" }} />
                <img src="/assets/community-testimonials.png" alt="Things people are saying" style={{ width: "100%", borderRadius: 12, display: "block" }} />
                <img src="/assets/community-multidimensional.png" alt="The Multidimensional Mind course" style={{ width: "100%", borderRadius: 12, display: "block" }} />
                <img src="/assets/community-skool-screenshot.png" alt="A preview of the Skool classroom" style={{ width: "100%", borderRadius: 12, display: "block" }} />
                <img src="/assets/community-manifest-hands.png" alt="The Manifestation Protocol guidebook" style={{ width: "100%", borderRadius: 12, display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* COURSES */}
        <section className="section section--tint grain" id="courses">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Inside the Circle</p>
              <h2>Courses to walk you deeper in.</h2>
              <p className="sub">Draft titles, tell me your real courses and I&apos;ll set them here. Each opens inside Skool.</p>
            </div>
            <div className="course-grid">
              {COURSES.map((c) => (
                <article className="course" key={c.title}>
                  <div className="course-cover">
                    <span className="pill">{c.pill}</span>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(160deg,var(--parchment-2),var(--parchment-3))",
                        border: "1px dashed rgba(126,114,168,.35)",
                        color: "var(--lavender-deep)",
                        fontFamily: "var(--sans)",
                        fontSize: 11,
                        letterSpacing: ".06em",
                        textAlign: "center",
                        padding: 12,
                      }}
                    >
                      course cover pending
                    </div>
                  </div>
                  <div className="course-body">
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                    <div className="course-meta">
                      {c.meta.map((m, i) => (
                        <span key={m}>
                          {i > 0 && <span className="dot" style={{ marginRight: 14 }}></span>}
                          {m}
                        </span>
                      ))}
                      {c.link && (
                        <>
                          <span className="dot"></span>
                          <a href={c.link.href} style={{ color: "var(--lavender-deep)", textDecoration: "none" }}>
                            {c.link.label}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What membership holds</p>
              <h2>More than a course library, a living circle.</h2>
            </div>
            <div className="checks" style={{ maxWidth: 880, margin: "0 auto" }}>
              {CHECKS.map((c) => (
                <div className="check" key={c}>
                  <Check />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {SHOW_TESTIMONIALS && (
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">In their words</p>
              <h2>What the Circle feels like.</h2>
            </div>
            <div className="tgrid">
              {TESTIMONIALS.map((t) => (
                <article className="tcard" key={t}>
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t}&rdquo;</blockquote>
                  <div className="who">
                    <span className="av"></span>
                    <div>
                      <div className="nm">Your member&apos;s name</div>
                      <div className="mt">Member · placeholder</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 22 }}>
              <span className="tplace">Placeholder, send me your real member quotes to drop in</span>
            </p>
          </div>
        </section>
        )}

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">come in from the cold</span>
          <h2>Find your people.</h2>
          <p>The door is open, and there&apos;s a seat saved for you by the fire.</p>
          <div>
            <a className="btn btn-primary" href={SKOOL_URL} target="_blank" rel="noopener">
              Join Soul Explorer on Skool <Arrow />
            </a>
          </div>
          <span className="seal-note">we remember better together</span>
        </section>

        {/* WHISPER */}
        <section className="liora-band">
          <div className="inner">
            <p className="who">A whisper from Liora</p>
            <p className="whisper">The door you are looking for is the one you keep walking past.</p>
            <p className="sig">Liora</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
