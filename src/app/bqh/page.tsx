import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FaqAccordion } from "../qhht/faq-accordion";
import { SHOW_TESTIMONIALS } from "@/lib/testimonials-flag";
import "./bqh.css";

export const metadata: Metadata = {
  title: "BQH · Beyond Quantum Healing Online — Soul Explorer",
  description:
    "Beyond Quantum Healing with Alex Fadda: the online sister of QHHT, held over video from your own home. From 350€, includes your recording.",
};

const CHECKS = [
  "A quiet room where you won't be disturbed for a few hours",
  "A bed or sofa where you can lie down comfortably",
  "Headphones or earbuds, so my voice stays close",
  "A stable internet connection and a laptop or phone",
  "Water nearby, and a blanket, bodies cool as they relax",
  "Your list of questions, and an open heart",
];

const RIBBON = [
  { n: "one", h: "We connect", p: "A video call opens our time together. We talk through your story and your questions, unhurried." },
  { n: "two", h: "You settle", p: "You lie back in your own space with headphones in. My voice guides you down into the quiet." },
  { n: "three", h: "You journey", p: "Lifetimes surface; your higher self comes forward to answer and, where right, to heal." },
  { n: "four", h: "You keep it", p: "The whole session is recorded and sent to you, to return to whenever you need." },
];

const TESTIMONIALS = [
  "I worried online couldn't go deep. I went further from my own bed than I ever imagined possible.",
  "Different continent, same magic. Alex held the space so completely I forgot there was a screen.",
  "Doing it at home meant I could simply stay in the feeling afterward. No journey back, just rest.",
];

const FAQS = [
  {
    q: "Is online really as deep as in person?",
    a: "Yes. Sometimes even more because you are more relaxed at home on your couch or bed and once you're relaxed with your eyes closed and headphones in, the room dissolves, what matters is my voice and your inner world, and both travel perfectly over a call. Many people go remarkably deep at home.",
  },
  {
    q: "What if my connection drops?",
    a: "It rarely affects the work. If it happens, we simply reconnect and continue, you remain in your relaxed state, and I guide you back. We'll have a backup way to reach each other agreed in advance.",
  },
  {
    q: "What platform do we use?",
    a: "A simple, secure video call, the link comes with your booking confirmation. No special software or account is needed beyond clicking the link.",
  },
  {
    q: "Which time zone are you in?",
    a: "Sessions are booked in your local time through the calendar, and I work across time zones. We'll always confirm the exact time together before we meet.",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{ color: "var(--lavender-soft)" }}>
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function BQHPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark bqh-hero grain grain-dark">
          <div className="wrap">
            <div className="ph-text">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>Sessions</span>
                <span className="sep">·</span>
                <span>BQH Online</span>
              </nav>
              <span className="kicker">wherever you are in the world</span>
              <h1>
                BQH, the same depth, from your <em>own home.</em>
              </h1>
              <p className="lede">
                Beyond Quantum Healing is the online sister of QHHT, a
                regression and higher-self session held over video,
                designed to reach the same depths without you leaving
                your room.
              </p>
              <p className="lede">
                Maybe you&apos;re stuck somewhere you can&apos;t quite
                name, carrying a hurt that has no clear beginning. Maybe
                you&apos;ve always felt different, awake in a world that
                mostly stays asleep, and you&apos;re ready to understand
                why, wherever you are.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/booking">
                  Book an online session <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#how">
                  How online works
                </a>
              </div>
            </div>
            <div className="ph-art">
              <div
                className="photo-clean"
                style={{ maxWidth: 440, width: "100%", height: 540, transform: "rotate(3deg)" }}
              >
                <img src="/assets/bqh-hero.png" alt="A peaceful home space" />
              </div>
            </div>
          </div>
        </header>

        {/* WHAT IT IS */}
        <section className="section">
          <div
            className="wrap"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}
          >
            <div>
              <p className="label" style={{ marginBottom: 20 }}>
                What it is
              </p>
              <div className="prose">
                <p className="lead">
                  BQH, Beyond Quantum Healing, was developed by Candace
                  Craw-Goldman, a longtime colleague of Dolores Cannon,
                  for a world that needed this work to travel.
                </p>
                <p>
                  It carries the heart of quantum regression: a deep
                  relaxed state, the remembering of other lifetimes, and
                  a conversation with your own <strong>higher self</strong>.
                  What changes is only the room, we meet over a video
                  call, and you rest in your own familiar space.
                </p>
                <p>
                  For many, home is where they go <em>deepest</em>. Your
                  own bed, your own light, no journey to make afterwards,
                  just the soft return to a life you never had to leave.
                </p>
                <p>
                  Along the way you may meet the{" "}
                  <strong>guides, angels and loved ones</strong> who walk
                  beside you, and see the lessons still asking to be
                  learned. Speaking through your higher self, we scan
                  your <strong>etheric and energetic body</strong> for
                  what&apos;s blocking you, and reveal the mission you
                  came here to live.
                </p>
              </div>
            </div>
            <div>
              <div
                className="polaroid"
                style={{ transform: "rotate(-2.4deg)", maxWidth: 400, margin: "0 auto" }}
              >
                <span className="tape"></span>
                <div className="ph" style={{ height: 430 }}>
                  <img src="/assets/candace.jpg" alt="Candace Craw-Goldman" />
                </div>
                <div className="cap">Candace Craw-Goldman</div>
              </div>
            </div>
          </div>
        </section>

        {/* QHHT vs BQH */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">QHHT or BQH?</p>
              <h2>Two doors, the same room.</h2>
              <p className="sub">
                They share a lineage and a depth. The right one is simply
                the one you can actually get to.
              </p>
            </div>
            <div className="tiers" style={{ maxWidth: 840, margin: "0 auto" }}>
              <div className="tier">
                <span className="t-meta">In person</span>
                <h3 className="t-name">QHHT</h3>
                <ul>
                  <li>
                    <Check />
                    We share the same physical space
                  </li>
                  <li>
                    <Check />
                    A single, immersive 4–5 hour day
                  </li>
                  <li>
                    <Check />
                    Best if you can travel to me
                  </li>
                </ul>
                <a className="btn-ghost" href="/qhht">
                  Read about QHHT
                </a>
              </div>
              <div className="tier feature">
                <span className="t-meta" style={{ color: "var(--lavender-soft)" }}>
                  Online · anywhere
                </span>
                <h3 className="t-name">BQH</h3>
                <ul>
                  <li>
                    <Check />
                    We meet over a video call
                  </li>
                  <li>
                    <Check />
                    You rest in your own home
                  </li>
                  <li>
                    <Check />
                    Open to souls across the world
                  </li>
                </ul>
                <a className="btn btn-primary" href="/booking">
                  Book BQH
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW ONLINE WORKS */}
        <section className="section" id="how">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">How online works</p>
              <h2>Held closely, even across a screen.</h2>
            </div>
            <div className="ribbon">
              {RIBBON.map((r) => (
                <div className="r" key={r.n}>
                  <div className="n">{r.n}</div>
                  <h4>{r.h}</h4>
                  <p>{r.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU NEED */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap">
            <div className="section-head">
              <p className="label">To prepare your space</p>
              <h2>A little is all you need.</h2>
            </div>
            <div className="checks" style={{ maxWidth: 880 }}>
              {CHECKS.map((c) => (
                <div className="check" style={{ color: "rgba(245,240,235,.82)" }} key={c}>
                  <Check />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="label" style={{ marginBottom: 16 }}>
              The investment
            </p>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(40px,6vw,72px)",
                lineHeight: 1,
                color: "var(--ink)",
              }}
            >
              BQH Online{" "}
              <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>
                from 350€
              </em>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink-soft)",
                margin: "18px auto 32px",
                maxWidth: "46ch",
              }}
            >
              A complete session of around 3–4 hours, your personal
              recording, and time to integrate together afterward. One
              session stands whole on its own.
            </p>
            <a className="btn btn-primary" href="/booking">
              Book your online session <Arrow />
            </a>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {SHOW_TESTIMONIALS && (
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">In their words</p>
              <h2>Held closely, across the world.</h2>
            </div>
            <div className="tgrid">
              {TESTIMONIALS.map((t) => (
                <article className="tcard" key={t}>
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t}&rdquo;</blockquote>
                  <div className="who">
                    <span className="av"></span>
                    <div>
                      <div className="nm">Your client&apos;s name</div>
                      <div className="mt">BQH · placeholder</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 22 }}>
              <span className="tplace">
                Placeholder, send me your real testimonials to drop in
              </span>
            </p>
          </div>
        </section>
        )}

        {/* FAQ */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Gentle answers</p>
              <h2>About working online.</h2>
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">across any distance</span>
          <h2>Meet yourself, from home.</h2>
          <p>
            Distance has never been the obstacle. When you&apos;re ready,
            we begin with a simple conversation.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn btn-primary" href="/booking">
              Book a discovery call <Arrow />
            </a>
            <a className="btn-ghost" href="/oracle">
              Or pull a free oracle card
            </a>
          </div>
          <span className="seal-note">your soul has been here before</span>
        </section>
      </main>

      <Footer />
    </>
  );
}
