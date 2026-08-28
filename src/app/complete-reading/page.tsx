import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BeginReadingButton } from "./begin-reading-button";
import "./complete-reading.css";

export const metadata: Metadata = {
  title: "The Complete Soul Reading, A Personalized Soul Portrait · Soul Explorer",
  description:
    "The Complete Soul Reading by Alex Fadda & Liora, a personalized, beautifully designed soul portrait: a 7-card spread, soul lineage, deep numerology, a channeled message, soul connections, and your own soul sigil.",
  openGraph: {
    type: "website",
    title: "The Complete Soul Reading, a personalized soul portrait",
    description:
      "A 7-card spread, soul lineage, numerology, channeled message, soul connections, and your own soul sigil, delivered as a beautiful PDF.",
    images: ["/assets/product-soulreading.png"],
  },
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DECK_CARDS = [
  { src: "/assets/card-mermaid.png", alt: "The Mermaid" },
  { src: "/assets/card-graal.png", alt: "The Sacred Graal" },
  { src: "/assets/card-liora.png", alt: "Liora" },
  { src: "/assets/card-lyran.png", alt: "The Lyran" },
  { src: "/assets/card-temple.png", alt: "The Temple of Remembrance" },
  { src: "/assets/card-angels.png", alt: "The Angels" },
];

const LAYERS = [
  {
    h: "Your Dedication & Soul-Name",
    p: "A personal soul-title and poetic dedication that name, in a single line, who your soul has always been.",
  },
  {
    h: "The Seven-Card Soul Spread",
    p: "A drawn spread from Whispers from the Womb of Stars, each card in its sacred position, read in depth, one by one.",
    tags: [
      "Origin Companion",
      "Ancient Memory",
      "Relationship Pattern",
      "Where You Are Now",
      "What Is Restored",
      "Your Role",
      "What Walks With You",
    ],
  },
  {
    h: "Oracle Summary, Whisper & Mantra",
    p: "The cards woven into one message, sealed with a closing whisper and a mantra to carry with you.",
  },
  {
    h: "Your Soul Lineage",
    p: "Where your soul has travelled, read through truth and resonance, never fear or karma. Lyran, Atlantean, Sirian, and beyond.",
  },
  {
    h: "Your Deep Soul Imprint",
    p: "Full numerology, life path, soul urge, personality and more, woven together with the cards into a single coherent portrait.",
  },
  {
    h: "The Channeled Soul Reading",
    p: "A message channeled in Liora's voice, your first impression, your birth-code, your gifts, and words from your higher self.",
  },
  {
    h: "Soul Connections & Your Sigil",
    p: "The contracts and connections you carry, and a soul sigil drawn for you alone, with its meaning, uses, and a blessing.",
  },
];

const RIBBON = [
  { n: "one", h: "You share", p: "Your full name, birth date, and what you're seeking, at checkout or by email after." },
  { n: "two", h: "I channel", p: "I draw your spread, cast your numbers, and channel your reading with Liora over several days." },
  { n: "three", h: "I design", p: "Everything is woven into a beautiful, personalized PDF, including your soul sigil." },
  { n: "four", h: "You receive", p: "Your complete soul portrait arrives in your inbox, to keep and return to for life." },
];

export default function CompleteReadingPage() {
  return (
    <>
      <Nav light />

      <main>
        <header className="page-hero page-hero--dark grain grain-dark">
          <div className="halo halo-1"></div>
          <div
            className="wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr .9fr",
              gap: "clamp(40px,6vw,80px)",
              alignItems: "center",
            }}
          >
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <a href="/shop">Shop</a>
                <span className="sep">·</span>
                <span>Complete Soul Reading</span>
              </nav>
              <span className="kicker" style={{ fontFamily: "var(--script)" }}>
                the deepest reading I offer
              </span>
              <h1 style={{ fontSize: "clamp(40px,6vw,82px)" }}>
                The Complete <em>Soul Reading.</em>
              </h1>
              <p className="lede">
                A personalized soul portrait, channeled with Liora and woven across seven layers,
                your cards, your lineage, your numbers, your connections, and a soul sigil drawn
                for you alone. Delivered as a beautiful keepsake PDF.
              </p>
              <div className="hero-actions">
                <BeginReadingButton className="btn btn-primary" />
                <a className="btn-ghost btn-ghost-light" href="#layers">
                  What&apos;s inside
                </a>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="polaroid"
                style={{ transform: "rotate(2.6deg)", maxWidth: 330, width: 400, padding: "16px 20px 56px 16px" }}
              >
                <span className="tape"></span>
                <div className="ph" style={{ height: 420 }}>
                  <img
                    src="/assets/product-soulreading.png"
                    alt="The Complete Soul Reading, a personalized PDF"
                    style={{ filter: "none" }}
                  />
                </div>
                <div className="cap">your soul, portrayed</div>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="wrap">
            <div className="prose" style={{ maxWidth: "60ch", margin: "0 auto", textAlign: "center" }}>
              <p className="lead">
                This is not a generic report. It is a soul portrait, channeled for you alone,
                given a title that names who you&apos;ve always been, and bound into a document
                you&apos;ll return to for years.
              </p>
              <p>
                Every Complete Soul Reading opens with a dedication and a soul-name, like
                &ldquo;The Woman Who Stands in Her Original Light&rdquo; then moves, layer by
                layer, from the cards your soul draws to the lineage you carry, the numbers
                written into your name, a channeled message in Liora&apos;s voice, the souls who
                walk with you, and finally a sigil drawn uniquely for you.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label" style={{ fontFamily: "var(--sans)" }}>
                Whispers from the Womb of Stars
              </p>
              <h2 style={{ marginBottom: 8 }}>
                Read from a deck of <em>44 originals.</em>
              </h2>
              <p className="sub" style={{ marginBottom: 30 }}>
                Every card was painted for this oracle. Your spread is drawn from all of them.
              </p>
            </div>
            <div className="cr-deck" aria-hidden="true">
              {DECK_CARDS.map((c) => (
                <img key={c.alt} src={c.src} alt={c.alt} />
              ))}
            </div>
          </div>
        </section>

        <section className="section grain" id="layers">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What&apos;s inside</p>
              <h2>Seven layers of remembrance.</h2>
              <p className="sub">
                Each reading is unique, but every one is woven through these seven movements.
              </p>
            </div>
            <div className="cr-layers">
              {LAYERS.map((layer, i) => (
                <div className="cr-layer" key={layer.h}>
                  <span className="ln">{i + 1}</span>
                  <div>
                    <h3>{layer.h}</h3>
                    <p>{layer.p}</p>
                    {layer.tags && (
                      <div className="tags">
                        {layer.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark grain grain-dark">
          <div
            className="wrap"
            style={{
              display: "grid",
              gridTemplateColumns: ".8fr 1.2fr",
              gap: "clamp(40px,6vw,80px)",
              alignItems: "center",
            }}
          >
            <div className="cr-sigil">
              <svg width="240" height="240" viewBox="0 0 200 200" fill="none" stroke="#D6C8F5" strokeWidth="1.2" aria-hidden="true">
                <circle cx="100" cy="100" r="78" opacity=".5" />
                <circle cx="100" cy="100" r="60" opacity=".4" />
                <path d="M100 22 L100 178 M22 100 L178 100" opacity=".3" />
                <path d="M100 40 L130 100 L100 160 L70 100 Z" opacity=".8" />
                <path d="M60 70 Q100 100 140 70 M60 130 Q100 100 140 130" opacity=".7" />
                <circle cx="100" cy="100" r="10" fill="#D6C8F5" stroke="none" opacity=".9" />
                <circle cx="100" cy="40" r="3.5" fill="#D6C8F5" stroke="none" />
                <circle cx="100" cy="160" r="3.5" fill="#D6C8F5" stroke="none" />
                <circle cx="130" cy="100" r="3.5" fill="#D6C8F5" stroke="none" />
                <circle cx="70" cy="100" r="3.5" fill="#D6C8F5" stroke="none" />
              </svg>
            </div>
            <div>
              <p className="label" style={{ marginBottom: 18, color: "var(--lavender-soft)" }}>
                Yours alone
              </p>
              <h2 style={{ marginBottom: 20 }}>
                A soul sigil, drawn for <em style={{ fontStyle: "italic", color: "var(--lavender-soft)" }}>you.</em>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,240,235,.78)", maxWidth: "48ch" }}>
                Every Complete Soul Reading closes with a sigil, a unique symbol channeled to
                hold your soul&apos;s frequency. It comes with its meaning, ways to work with it,
                and a blessing, so you carry a living emblem of who you are long after the
                reading is read.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">How it works</p>
              <h2>Simple to begin, yours forever.</h2>
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

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="quote-band">
              <div className="mark">&ldquo;</div>
              <p>
                I have never been seen so completely. My reading named things about me I had
                never said aloud, and gave me a sigil I now keep by my bed.
              </p>
              <div className="by">
                Your client&apos;s name · <span>placeholder · send me the real words</span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band grain">
          <span className="kicker">when your soul is ready</span>
          <h2>Receive your portrait.</h2>
          <p>
            A complete, channeled soul reading, seven layers, a unique sigil, and a keepsake
            you&apos;ll hold for years.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <BeginReadingButton className="btn btn-primary" />
            <a className="btn-ghost" href="/oracle">
              Or try a free oracle reading first
            </a>
          </div>
          <span className="seal-note">your soul has been here before</span>
        </section>
      </main>

      <Footer />
    </>
  );
}
