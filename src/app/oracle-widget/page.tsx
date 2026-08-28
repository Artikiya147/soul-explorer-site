import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MediaSlots } from "@/components/media-slots";
import { HeroEditOverlay } from "@/components/hero-edit-overlay";
import { StepFlow } from "@/components/step-flow";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { resolvePageMedia } from "@/lib/resolve-media";
import "@/styles/plugin-pages.css";

export const metadata: Metadata = {
  title: "Oracle Widget · A Reading Tool Built Around Your Deck · Soul Explorer Studio",
  description:
    "An embeddable oracle reading widget for your own site, your own deck, your own voice, and a real way to turn a visitor into a lead before they ever book a call.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcCards = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="6" width="12" height="16" rx="2" transform="rotate(-8 10 14)" />
    <rect x="8" y="4" width="12" height="16" rx="2" />
  </svg>
);

const IcPalette = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-.9-.5-1.3-.3-.3-.5-.7-.5-1.2 0-.9.7-1.5 1.5-1.5H16a4 4 0 0 0 4-4c0-4.4-3.6-8-8-8Z" strokeLinejoin="round" />
    <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="10.5" cy="7" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IcMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcSparkle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" strokeLinecap="round" />
  </svg>
);

const IcShare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.6 10.6 15.4 6.4M8.6 13.4 15.4 17.6" strokeLinecap="round" />
  </svg>
);

const IcCode = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcVoice = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v4M8 22h8" strokeLinecap="round" />
  </svg>
);

const IcShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
    <path d="M12 8v5M12 16h.01" strokeLinecap="round" />
  </svg>
);

const IcDeck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="6" width="12" height="16" rx="2" transform="rotate(-8 10 14)" />
    <rect x="8" y="4" width="12" height="16" rx="2" />
  </svg>
);

const FEATURES = [
  {
    icon: <IcCards />,
    title: "As many decks as you like",
    body: "Not a generic tarot embed, the widget is built around whichever deck you actually read from, your cards, your keywords, your meanings. Read from more than one? Add as many decks as you like and switch between them.",
  },
  {
    icon: <IcPalette />,
    title: "Matches your site",
    body: "Colors, fonts and tone are configured to your brand, so it feels like a room inside your site, not a plugin bolted onto it.",
  },
  {
    icon: <IcMail />,
    title: "Email capture, built in",
    body: "The reading unlocks after an email address, the same gentle exchange, a reading for an invitation to stay in touch, already proven on Soul Explorer itself.",
  },
  {
    icon: <IcSparkle />,
    title: "AI readings, trained in your voice",
    body: "The AI isn't generic. It's trained on your own original readings and the way you actually speak, prepared with an invocation of protection and resonance before any training ever begins. When it's connected, it writes a personal message drawn from the cards, in your voice, not a stranger's. When it isn't, a genuinely good templated reading generator, no AI needed, keeps working anyway. And if Whispers from the Womb of Stars speaks to you, you're welcome to use my own 44-card deck as your own, if you feel the connection.",
    wide: true,
  },
  {
    icon: <IcShare />,
    title: "Share-to-image",
    body: "Readings can be saved as a shareable image, the kind of soft, personal content people actually post, carrying your site's name along with it.",
  },
  {
    icon: <IcCode />,
    title: "One script tag",
    body: "Self-contained, no dependencies. It drops into any page, any platform, wherever your practice already lives online.",
  },
];

const STEPS = [
  {
    icon: <IcVoice />,
    title: "Your readings, your voice",
    body: "You share your own original readings and how you actually speak, the real material the AI will learn from.",
  },
  {
    icon: <IcShield />,
    title: "An invocation, first",
    body: "Before any training begins, an invocation of protection and resonance prepares the field the AI is built within.",
  },
  {
    icon: <IcSparkle />,
    title: "Trained in that voice",
    body: "The AI learns to write the way you do, not a generic stranger's voice pasted onto your deck.",
  },
  {
    icon: <IcDeck />,
    title: "Or use my own deck",
    body: "If Whispers from the Womb of Stars speaks to you, you're welcome to use the real 44-card deck as your own.",
  },
];

export default async function OracleWidgetPage() {
  const { heroUrl, imageUrl, videoEmbedUrl } = await resolvePageMedia("oracle-widget");

  return (
    <>
      <Nav light />

      <main>
        <header
          className={`page-hero page-hero--dark grain grain-dark pi-hero${heroUrl ? " pi-hero-uploaded" : ""}`}
          style={heroUrl ? ({ "--hero-img": `url(${heroUrl})` } as CSSProperties) : undefined}
        >
          <div className="halo halo-1"></div>
          <HeroEditOverlay slotId="oracle-widget-hero" hasImage={!!heroUrl} />
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <a href="/studio">Studio</a>
              <span className="sep">·</span>
              <span>Oracle Widget</span>
            </nav>
            <span className="kicker">for the Studio platform</span>
            <h1>
              A reading tool that turns a <em>visitor into a seeker.</em>
            </h1>
            <p className="lede">
              The same free-reading experience that lives on Soul Explorer itself, an interactive
              oracle built around your own deck, offered as a real tool for other practitioners'
              sites. The kind of thing people actually stay for.
            </p>
            <div className="pi-badges">
              <span>Real, in production</span>
              <span>Your own deck</span>
              <span>Email capture built in</span>
              <span>AI + working fallback</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/studio#invest">
                Talk about adding this <Arrow />
              </a>
              <a className="btn-ghost btn-ghost-light" href="/oracle">
                Try the live version
              </a>
            </div>
          </div>
        </header>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <MediaSlots
              imageSlotId="oracle-widget-image"
              videoSlotId="oracle-widget-video"
              imageLabel="Screenshot of the widget on a client's site, coming soon"
              videoLabel="A short walkthrough video, coming soon"
              imageUrl={imageUrl}
              videoEmbedUrl={videoEmbedUrl}
            />
          </div>
        </section>

        <section className="section pi-glow">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What it does</p>
              <h2>A free reading is the best lead magnet a practitioner has.</h2>
              <p className="sub">
                Nobody signs up for a newsletter for its own sake. Everybody wants to know what
                the cards say.
              </p>
            </div>
            <div className="pi-grid">
              {FEATURES.map((f) => (
                <div className={`pi-card${f.wide ? " pi-card-wide" : ""}`} key={f.title}>
                  <div className="ic">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
              <a
                className="pi-card pi-card-filler"
                href="/studio#invest"
                style={{ "--fill-span": 1 } as CSSProperties}
              >
                <div className="ic">
                  <Arrow />
                </div>
                <h3>Want this on your site?</h3>
                <p>Talk to us about adding it as part of a Studio build.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">How the AI is prepared</p>
              <h2>Trained in your voice, not a stranger's.</h2>
              <p className="sub">
                From your own readings to a live reading tool, with a real invocation along the
                way.
              </p>
            </div>
            <StepFlow steps={STEPS} />
          </div>
        </section>

        <section className="section pi-glow">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Whispers from the Womb of Stars</p>
              <h2>
                The real deck, <em>if you want it.</em>
              </h2>
              <p className="sub">
                44 originals, each one painted, not generated. Yours to use if it speaks to you.
              </p>
            </div>
            <div className="pi-deck" aria-hidden="true">
              <img src="/assets/card-mermaid.png" alt="The Mermaid" />
              <img src="/assets/card-graal.png" alt="The Sacred Graal" />
              <img src="/assets/card-liora.png" alt="Liora" />
              <img src="/assets/card-lyran.png" alt="The Lyran" />
              <img src="/assets/card-temple.png" alt="The Temple of Remembrance" />
              <img src="/assets/card-angels.png" alt="The Angels" />
            </div>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: 17,
                  color: "var(--ink-soft)",
                  maxWidth: "48ch",
                  margin: "0 auto 22px",
                }}
              >
                All 44 card images, full resolution, yours to upload straight into your own
                widget. No commissioning an artist, no waiting.
              </p>
              <AddToCartButton
                item={{
                  id: "oracle-deck-digital",
                  name: "Whispers Oracle Deck (Digital)",
                  price: 44,
                  img: "/assets/card-liora.png",
                  meta: "Digital · 44 card images, full resolution",
                }}
                label="Get the digital deck · €44"
              />
            </div>
          </div>
        </section>

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="pi-for">
              <h3>For practitioners and coaches who want more than a contact form</h3>
              <ul>
                <li>
                  <span>☾</span> You already read cards, run a quiz, or have some kind of
                  diagnostic in your work, and want it living on your own site instead of buried
                  in a PDF or a DM.
                </li>
                <li>
                  <span>☾</span> You want a genuine reason for a stranger to give you their email,
                  not a discount code, an actual piece of your work.
                </li>
                <li>
                  <span>☾</span> You want something people screenshot and share, quiet, organic
                  reach that doesn't cost ad spend.
                </li>
                <li>
                  <span>☾</span> You'd rather not add yet another paid tool, Typeform, a quiz
                  builder, a separate landing page app, just to run one interactive experience.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-band grain">
          <span className="kicker">see it in action first</span>
          <h2>Try the reading it&apos;s built from.</h2>
          <p>
            The Oracle Widget is the same engine behind Soul Explorer's own free reading, rebuilt
            around your deck and your voice, as part of a Soul Explorer Studio platform.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <a className="btn btn-primary" href="/oracle">
              Try the live reading <Arrow />
            </a>
            <a className="btn-ghost" href="/studio">
              See the full platform
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
