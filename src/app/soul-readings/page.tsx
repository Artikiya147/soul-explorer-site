import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FaqAccordion } from "../qhht/faq-accordion";
import { SoulMap } from "./soul-map";
import "./soul-readings.css";

export const metadata: Metadata = {
  title: "Soul Readings, Channeled Guidance, Astrology & Numerology · Soul Explorer",
  description:
    "Soul Readings with Alex Fadda, channeled guidance woven with astrology and numerology. Clarity on what's moving through your life, and why.",
};

const WOVEN = [
  {
    title: "Channeling",
    body: "I tune to the field around you and let guidance come through, impressions, words, images, and the steady presence of those who walk with you.",
  },
  {
    title: "Astrology",
    body: "Your birth chart as a map of timing and temperament, the transits you're moving through, and the gifts written into your sky.",
  },
  {
    title: "Numerology",
    body: "The numbers in your name and birth date, your life path, your personal year, the quiet structure beneath your story.",
  },
];

const HOW = [
  { n: "one", h: "You share", p: "Your birth date, time and place, and what you're seeking clarity on." },
  { n: "two", h: "I prepare", p: "I cast your chart and numbers and sit with your question before we meet." },
  { n: "three", h: "We meet", p: "A live reading where guidance is delivered and you can ask anything that arises." },
  { n: "four", h: "You keep it", p: "A recording of your reading, to return to as the season unfolds." },
];

const RECEIVE = [
  {
    n: 1,
    title: "Oracle card spread",
    body: "Three cards drawn for your soul's current chapter, with the full channeled interpretation from the Whispers deck.",
  },
  {
    n: 2,
    title: "Soul field reading",
    body: "A channeled message from Liora woven with your astrology, numerology and the patterns alive in you right now.",
  },
  {
    n: 3,
    title: "Channeled seal",
    body: "A personal symbol drawn for you, an energetic anchor to carry with you.",
  },
  {
    n: 4,
    title: "Session recording",
    body: "The full live reading recorded so you can return to every word as many times as you need.",
  },
];

const FAQS = [
  {
    q: "What if I don't know my exact birth time?",
    a: "We can still do a great deal. An exact time sharpens certain details, but the channeled guidance and numerology don't depend on it, and much of astrology can be read without it. Bring what you have.",
  },
  {
    q: "How is this different from a session?",
    a: "A reading gives you clarity and guidance from the outside in, it's shorter and lighter. QHHT and BQH take you inward to remember and heal directly. Many begin with a reading and go deeper later.",
  },
  {
    q: "Can you predict my future?",
    a: "I read energies, timing and patterns, not fixed fate. You always hold free will. A reading shows the currents you're in so you can move with them consciously, rather than being carried.",
  },
  {
    q: "Can I ask about someone else?",
    a: "Readings centre on you and your path, that's where guidance flows most clearly and ethically. We can absolutely explore a relationship as it lives in your life, from your side of it.",
  },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function SoulReadingsPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <header style={{ background: "var(--parchment)" }}>
          <div className="sr-hero-photo">
            <img src="/assets/reading-hero.png" alt="1-1 Oracle Card Reading and Complete Soul Reading" />
          </div>
          <div style={{ textAlign: "center", padding: "clamp(40px,6vh,72px) var(--gutter) clamp(48px,7vh,84px)" }}>
            <nav className="breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: "center", marginBottom: 24 }}>
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Sessions</span>
              <span className="sep">·</span>
              <span>Soul Readings</span>
            </nav>
            <span className="kicker" style={{ color: "var(--turquoise)" }}>
              for clarity, now
            </span>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontSize: "clamp(38px,6vw,82px)",
                lineHeight: 1.1,
                letterSpacing: "-.01em",
                color: "var(--ink)",
                margin: "14px auto 22px",
                maxWidth: "20ch",
              }}
            >
              Soul Readings what&apos;s moving through your life,{" "}
              <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>and why.</em>
            </h1>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(16px,1.5vw,19px)",
                lineHeight: 1.75,
                color: "var(--ink-soft)",
                maxWidth: "48ch",
                margin: "0 auto 36px",
              }}
            >
              Channeled guidance woven with your astrology and numerology,
              a loving look at the season you&apos;re in, the patterns
              you&apos;re living, and the next true step.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <a className="btn btn-primary" href="/questionnaire">
                Begin your reading · 130€ <Arrow />
              </a>
              <a className="btn-ghost" href="#woven">
                What&apos;s woven in
              </a>
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
                What a reading is
              </p>
              <div className="prose">
                <p className="lead">
                  Maybe you keep circling the same pattern and can&apos;t
                  quite see why. Maybe a season is turning and you can
                  feel it, but can&apos;t yet name what&apos;s coming.
                </p>
                <p>
                  A reading is a conversation with the unseen, held on
                  your behalf, and offered back to you in plain, kind
                  language.
                </p>
                <p>
                  Not everyone is ready for a full regression, and not
                  every question needs one. Sometimes you simply need to{" "}
                  <strong>understand</strong> why this is happening now,
                  what the pattern is asking, where the door is.
                </p>
                <p>
                  I read the energy around you and channel what wants to
                  come through, then ground it with the maps that have
                  always tracked the soul: the <strong>stars you were
                  born under</strong> and the <strong>numbers you
                  carry</strong>. Together they tell a remarkably
                  coherent story.
                </p>
              </div>
            </div>
            <div>
              <div className="polaroid" style={{ transform: "rotate(2.4deg)", maxWidth: 400, margin: "0 auto" }}>
                <span className="tape"></span>
                <div className="sr-placeholder ph" style={{ height: 440 }}>
                  Astrology chart / celestial, intimate
                </div>
                <div className="cap">your chart, your story</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S WOVEN IN */}
        <section className="section section--tint grain" id="woven">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What&apos;s woven in</p>
              <h2>Three ways of listening.</h2>
              <p className="sub">
                No single language captures a soul. So I read with three
                at once, and let them speak to each other.
              </p>
            </div>
            <div className="course-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              {WOVEN.map((w) => (
                <div className="tier" key={w.title}>
                  <h3 className="t-name">{w.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink-soft)", marginTop: 8 }}>
                    {w.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOUL MAP */}
        <section className="section">
          <div
            className="wrap"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}
          >
            <SoulMap />
            <div>
              <p className="label" style={{ marginBottom: 20 }}>
                Your soul map
              </p>
              <div className="prose">
                <p className="lead">
                  Before we speak, I draw your map, the sky as it was the
                  moment you arrived, and the numbers woven through your
                  name and date.
                </p>
                <p>
                  It&apos;s not fortune-telling. It&apos;s a{" "}
                  <strong>portrait of patterns</strong>: the gifts you
                  were born holding, the timing of the season you&apos;re
                  in, and the lessons your soul set out to learn. When
                  the channeled guidance meets this map, the picture
                  becomes startlingly clear.
                </p>
                <p>
                  You&apos;ll leave understanding not just <em>what</em>{" "}
                  is happening, but the deeper <em>why</em>, written into
                  you from the very beginning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">How it works</p>
              <h2>Simple to begin, yours to keep.</h2>
            </div>
            <div className="ribbon">
              {HOW.map((r) => (
                <div className="r" key={r.n}>
                  <div className="n">{r.n}</div>
                  <h4>{r.h}</h4>
                  <p>{r.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU RECEIVE */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center" style={{ marginBottom: "clamp(36px,5vw,60px)" }}>
              <p className="label">what you take home</p>
              <h2>
                Your reading, <em>beautifully held.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(16px,1.5vw,19px)",
                  color: "var(--ink-soft)",
                  maxWidth: "48ch",
                  margin: "16px auto 0",
                  lineHeight: 1.7,
                }}
              >
                Every reading becomes a handcrafted PDF document, yours
                to return to whenever you need to remember.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(28px,5vw,64px)",
                alignItems: "center",
              }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 44px 80px -40px rgba(26,23,20,.55)",
                    transform: "rotate(-1.5deg)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <img
                    src="/assets/reading-cover.png"
                    alt="Complete Oracle and Soul Reading PDF cover"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: -18,
                    right: -14,
                    zIndex: 3,
                    background: "var(--parchment)",
                    borderRadius: 10,
                    padding: "12px 18px",
                    boxShadow: "0 22px 42px -22px rgba(26,23,20,.45)",
                    transform: "rotate(3deg)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "var(--taupe)",
                    }}
                  >
                    You receive
                  </div>
                  <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18, color: "var(--ink)", marginTop: 3 }}>
                    your own PDF
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {RECEIVE.map((r) => (
                  <div key={r.n} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span
                      style={{
                        flex: "0 0 auto",
                        width: 38,
                        height: 38,
                        borderRadius: "50%",
                        background: "var(--lavender)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--serif)",
                        fontStyle: "italic",
                        fontSize: 17,
                        color: "#2a2330",
                      }}
                    >
                      {r.n}
                    </span>
                    <div>
                      <div style={{ fontFamily: "var(--serif)", fontSize: 19, color: "var(--ink)", marginBottom: 4 }}>
                        {r.title}
                      </div>
                      <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{r.body}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 10 }}>
                  <a className="btn btn-primary" href="/questionnaire">
                    Begin your reading · 130€ <Arrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap">
            <div className="quote-band">
              <div className="mark" style={{ color: "var(--lavender-soft)" }}>&ldquo;</div>
              <p>
                She told me things about my year she had no way of
                knowing, and named the exact pattern I&apos;d been
                circling for a decade. I left with language for my own
                life.
              </p>
              <div className="by" style={{ color: "var(--lavender-soft)" }}>
                Your client&apos;s name ·{" "}
                <span className="tplace" style={{ verticalAlign: "middle", color: "var(--lavender-soft)", borderColor: "rgba(185,175,214,.5)" }}>
                  placeholder · send me the real words
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="label" style={{ marginBottom: 16 }}>
              The investment
            </p>
            <div style={{ fontFamily: "var(--serif)", fontSize: "clamp(40px,6vw,72px)", lineHeight: 1, color: "var(--ink)" }}>
              Soul Reading <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>130€</em>
            </div>
            <p style={{ fontSize: 16, color: "var(--ink-soft)", margin: "18px auto 32px", maxWidth: "46ch" }}>
              A full live reading with channeled guidance, astrology and
              numerology, plus your recording to keep. Available online,
              anywhere.
            </p>
            <a className="btn btn-primary" href="/questionnaire">
              Begin your reading <Arrow />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Gentle answers</p>
              <h2>Before your reading.</h2>
            </div>
            <FaqAccordion items={FAQS} />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">a curious heart</span>
          <h2>Let&apos;s read your season.</h2>
          <p>
            If something in you is asking to be understood, that&apos;s
            reason enough. Bring it.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn btn-primary" href="/booking">
              Book a reading <Arrow />
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
