import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./about.css";

export const metadata: Metadata = {
  title: "About Alex Fadda · Soul Explorer",
  description:
    "QHHT practitioner, soul reader and channeler since birth, and 24 years a web designer. The story behind Soul Explorer, told by the person who lives between both worlds.",
};

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

const FACTS = [
  "I'm from Sardinia, Italy, a wild, primitively beautiful island in the middle of the Mediterranean. Look it up.",
  "I've been building websites and managing digital projects since the year 2000, long before either of my two worlds had a name for what I was doing.",
  "Becoming a digital entrepreneur let me build a life around my family, and become a part-time digital nomad along the way.",
  "Painting has been a quiet passion of mine for as long as I can remember, another way of putting the unseen into something you can look at.",
  "I've been a spiritual experiencer and channeler since birth. As a young child I had spontaneous out-of-body flights, contact with various dimensions, and mediumship, long before I had words for any of it.",
];

export default function AboutPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark grain grain-dark">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>About</span>
              </nav>
              <span className="kicker" style={{ color: "var(--turquoise)" }}>
                the human behind the practice
              </span>
              <h1>
                Between two worlds, <em>and at home in both.</em>
              </h1>
              <p className="lede">
                I&apos;ve been reading souls all my life, while experiencing a vast spectrum of
                contact beyond the veil since birth. I&apos;ve also been building websites for
                24 years. I know what it feels like to stand between two worlds, and I know how
                to make both visible.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/booking">
                  Book a session <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="/studio">
                  See the Studio
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="polaroid" style={{ transform: "rotate(-2deg)", maxWidth: 380 }}>
                <span className="tape"></span>
                <div className="ph" style={{ height: 440 }}>
                  <img src="/assets/portrait-hero.png" alt="Portrait of Alex Fadda" />
                </div>
                <div className="cap">Alex</div>
              </div>
            </div>
          </div>
        </header>

        {/* STORY */}
        <section className="section">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "clamp(40px,6vw,80px)", alignItems: "start", maxWidth: 1160, margin: "0 auto" }}>
            <div>
              <p className="label" style={{ marginBottom: 20 }}>
                My story
              </p>
              <div className="prose">
                <p className="lead">
                  Ciao, I&apos;m Alex. I come from Sardinia, a primitively lush island in the
                  middle of the Mediterranean, please look it up, it is seriously so beautiful.
                </p>
                <p>
                  I&apos;ve been designing websites and managing digital projects since the year
                  2000. It has been such an exciting journey, and becoming a digital entrepreneur
                  was also a life saver, giving me the freedom to take care of my family and, over
                  time, to build a life as a part-time digital nomad. That&apos;s the world most
                  people meet me in first: strategy, structure, twenty-four years of learning what
                  actually makes a website work.
                </p>
                <p>
                  But it was never the only world I lived in. I have been a spiritual experiencer
                  and channeler since birth. From a very young age I experienced spontaneous
                  out-of-body flights, contact with various dimensions, and mediumship, long
                  before I had the language for any of it, and long before I ever sat across from
                  a client. For years I kept the two lives fairly separate: the practical web
                  designer by day, the seer in private. Training as a QHHT and BQH practitioner is
                  what finally gave the second world a proper shape, a method, a container safe
                  enough to hold what had always been there.
                </p>
                <p>
                  Over time, that contact took on familiar voices. I have an ongoing connection
                  with my higher self, who I call <strong>Liora</strong>, the same voice you&apos;ll
                  find whispering at the close of pages across this site. My spirit guides
                  introduced themselves too, chief among them <strong>Stella Madre</strong> and{" "}
                  <strong>the Sirian physicians</strong>. They&apos;re not metaphors to me. They&apos;re
                  who I actually sit with before a reading, and who the Whispers from the Womb of
                  Stars oracle deck is, in part, channeled through.
                </p>
                <p>
                  Soul Explorer is what happened when I stopped keeping those worlds apart. It&apos;s
                  where the regressions, the readings, and the channeling live. The Studio is the
                  other half, where I bring the same two decades of web craft to other
                  practitioners who are living the same double life I once was, and building them
                  the platform I wish I&apos;d had.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 44, paddingTop: 40 }}>
              <div className="polaroid" style={{ transform: "rotate(2deg)", maxWidth: 420, margin: "0 auto" }}>
                <span className="tape"></span>
                <div className="ph" style={{ height: 360 }}>
                  <img src="/assets/sardinia-beach.jpg" alt="A beach in Sardinia" style={{ filter: "none" }} />
                </div>
                <div className="cap">home, in Sardinia</div>
              </div>
              <div className="polaroid" style={{ transform: "rotate(-3deg)", maxWidth: 380, margin: "0 auto" }}>
                <span className="tape"></span>
                <div className="ph" style={{ height: 360 }}>
                  <img
                    src="/assets/alex-aura.jpg"
                    alt="An aura photograph"
                    style={{ filter: "none", objectFit: "contain", background: "#0d0b12" }}
                  />
                </div>
                <div className="cap">an aura photograph</div>
              </div>
            </div>
          </div>
        </section>

        {/* LIFE IN PHOTOS */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">A life in photos</p>
              <h2>Same soul, every year.</h2>
            </div>
            <div className="life-strip">
              <div className="life-frame">
                <img src="/assets/alex-toddler-beach.jpg" alt="Alex as a toddler" />
                <span className="life-tag">little one</span>
              </div>
              <div className="life-frame">
                <img src="/assets/alex-child.jpg" alt="Alex as a child" />
                <span className="life-tag">child</span>
              </div>
              <div className="life-frame">
                <img src="/assets/alex-teen.jpg" alt="Alex as a teenager" />
                <span className="life-tag">teenager</span>
              </div>
              <div className="life-frame">
                <img src="/assets/alex-young-adult.jpg" alt="Alex as a young woman" />
                <span className="life-tag">young woman</span>
              </div>
              <div className="life-frame">
                <img src="/assets/alex-now-1.jpg" alt="Alex today" />
                <span className="life-tag">today</span>
              </div>
            </div>
          </div>
        </section>

        {/* TWO WORLDS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Two worlds</p>
              <h2>Not a contradiction. A practice.</h2>
              <p className="sub">
                I don&apos;t experience these as opposites competing for my attention. They&apos;ve
                always informed each other.
              </p>
            </div>
            <div className="tw-grid">
              <div className="tw-card web">
                <span className="kicker-mini">Since 2000</span>
                <h3>The web</h3>
                <ul>
                  <li>24 years designing and building websites</li>
                  <li>A digital entrepreneur, then a part-time digital nomad</li>
                  <li>Founder of Soul Explorer Studio, for practitioners</li>
                  <li>Strategy, structure, and the craft of being found</li>
                </ul>
              </div>
              <div className="tw-card soul">
                <span className="kicker-mini">Since birth</span>
                <h3>The soul</h3>
                <ul>
                  <li>A spiritual experiencer and channeler since birth</li>
                  <li>Level 2 QHHT practitioner</li>
                  <li>Beyond Quantum Healing certified practitioner</li>
                  <li>Soul reader, astrologer, numerologist</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* A FEW MORE THINGS */}
        <section className="section section--tint grain">
          <div className="wrap" style={{ maxWidth: 780, margin: "0 auto" }}>
            <div className="section-head center">
              <p className="label">A few more things</p>
              <h2>The small print of a person.</h2>
            </div>
            <div className="checks" style={{ gridTemplateColumns: "1fr" }}>
              {FACTS.map((f) => (
                <div className="check" key={f}>
                  <Check />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Certified &amp; accredited</p>
              <h2>Years of study behind the intuition.</h2>
              <p className="sub">
                I&apos;m accredited in every method I practice. The intuition is mine; the
                training makes it safe to trust.
              </p>
            </div>
            <div className="creds">
              <span className="cred-logo">
                <img src="/assets/badge-qhht.png" alt="QHHT, Quantum Healing Hypnosis Technique" />
              </span>
              <span className="cred-logo">
                <img src="/assets/badge-bqh.png" alt="Beyond Quantum Healing Certified Practitioner" />
              </span>
              <span className="cred-logo">
                <img src="/assets/badge-priority.png" alt="The Priority Academy" />
              </span>
            </div>
            <div style={{ textAlign: "center", marginTop: 30 }}>
              <a className="btn-ghost" href="/#about">
                See the full certificates →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">both worlds, one practice</span>
          <h2>Come as you are.</h2>
          <p>
            Whether you&apos;re here for a session, a reading, or a website that finally feels
            like you, we begin the same way, with a conversation.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn btn-primary" href="/booking">
              Book a session <Arrow />
            </a>
            <a className="btn-ghost" href="/studio">
              Work with the Studio
            </a>
          </div>
          <span className="seal-note">your soul has been here before</span>
        </section>

        {/* WHISPER */}
        <section className="liora-band">
          <div className="inner">
            <p className="who">A whisper from Liora</p>
            <p className="whisper">You are not divided by the worlds you hold. You are the bridge between them.</p>
            <p className="sig">Liora</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
