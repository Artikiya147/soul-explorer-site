import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MediaSlots } from "@/components/media-slots";
import { SubscriptionCompare } from "@/components/subscription-compare";
import { HeroEditOverlay } from "@/components/hero-edit-overlay";
import { resolvePageMedia } from "@/lib/resolve-media";
import "@/styles/plugin-pages.css";

export const metadata: Metadata = {
  title: "La Postina · Email Marketing Built for Practitioners · Soul Explorer Studio",
  description:
    "Pay per email sent, not per subscriber. La Postina is real, working email marketing software for practitioners and coaches who need to reach their list without a monthly SaaS bill.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M22 2 11 13" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" strokeLinejoin="round" />
  </svg>
);

const IcUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" />
    <circle cx="10" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
  </svg>
);

const IcWand = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M15 4V2M15 16v-2M8 9h2M20 9h2M17.8 11.8 19 13M15 9l-4 4M3 21l9-9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.8 6.2 19 5" strokeLinecap="round" />
  </svg>
);

const IcLayout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IcCart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L5 2H2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
  </svg>
);

const IcShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcSparkle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" strokeLinecap="round" />
  </svg>
);

const IcCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-4 2-2 4 4-2 2-4Z" strokeLinejoin="round" />
  </svg>
);

const IcSwatch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const FEATURES = [
  {
    icon: <IcSend />,
    title: "Pay per email, not per subscriber",
    body: "Built on Amazon SES, so cost scales with how many emails you actually send, not how many names are sitting quietly on your list. No monthly SaaS fee just to exist.",
  },
  {
    icon: <IcUsers />,
    title: "Contacts, lists & segments",
    body: "A real subscribe form for your site, contacts organized into lists, and segments so a welcome sequence, a client list, and a newsletter never get sent the same thing by accident.",
  },
  {
    icon: <IcLayout />,
    title: "Campaigns, templates & automations",
    body: "Design once, send often. Save templates, build a welcome sequence that runs itself, and send one-off campaigns when you have something worth saying.",
  },
  {
    icon: <IcWand />,
    title: "AI-assisted writing",
    body: "When the blank page wins, an AI assistant drafts a first pass from a few words of direction, in your voice, that you edit rather than write from scratch.",
  },
  {
    icon: <IcCart />,
    title: "Canva & shop-aware",
    body: "Pull designs in from Canva, and if your shop runs on WooCommerce, campaigns can reach the people who've actually bought from you.",
  },
  {
    icon: <IcShield />,
    title: "GDPR built in",
    body: "Consent, unsubscribe, and data-handling tools are part of the plugin itself, not a separate compliance project you have to bolt on.",
  },
  {
    icon: <IcSparkle />,
    title: "AI-generated images",
    body: "Campaign and social imagery generated with Gemini's image model (nicknamed \"Nano Banana\"), for a fraction of the cost of a stock subscription or a photographer for every send.",
  },
  {
    icon: <IcCompass />,
    title: "Reads your brand for you",
    body: "Point it at your own website, and it studies your colors, your words, your tone, then helps shape a real email strategy and a voice that actually sounds like you.",
  },
  {
    icon: <IcSwatch />,
    title: "Ready-made template packs",
    body: "Branded campaign and sticker templates you can drop your own words into, styled to a niche rather than a generic newsletter layout.",
  },
];

export default async function LaPostinaPage() {
  const { heroUrl, imageUrl, videoEmbedUrl } = await resolvePageMedia("la-postina");

  return (
    <>
      <Nav light />

      <main>
        <header
          className={`page-hero page-hero--dark grain grain-dark pi-hero${heroUrl ? " pi-hero-uploaded" : ""}`}
          style={heroUrl ? ({ "--hero-img": `url(${heroUrl})` } as CSSProperties) : undefined}
        >
          <div className="halo halo-1"></div>
          <HeroEditOverlay slotId="la-postina-hero" hasImage={!!heroUrl} />
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <a href="/studio">Studio</a>
              <span className="sep">·</span>
              <span>La Postina</span>
            </nav>
            <span className="kicker">for the Studio platform</span>
            <h1>
              Email marketing, built for a <em>practice, not a corporation.</em>
            </h1>
            <p className="lede">
              La Postina is real, working email software, not a mockup, built to send welcome
              sequences and newsletters without the monthly bill most tools charge just for
              having a list. It's one of the pieces every Soul Explorer Studio platform can
              include.
            </p>
            <div className="pi-badges">
              <span>Real, in production</span>
              <span>Pay-per-send · Amazon SES</span>
              <span>AI-assisted</span>
              <span>GDPR built in</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/studio#invest">
                Talk about adding this <Arrow />
              </a>
              <a className="btn-ghost btn-ghost-light" href="#features">
                See what it does
              </a>
            </div>
          </div>
        </header>

        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <MediaSlots
              imageSlotId="la-postina-image"
              videoSlotId="la-postina-video"
              imageLabel="Screenshot of La Postina's campaign editor, coming soon"
              videoLabel="A short walkthrough video, coming soon"
              imageUrl={imageUrl}
              videoEmbedUrl={videoEmbedUrl}
            />
          </div>
        </section>

        <section className="section pi-glow" id="features">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What it does</p>
              <h2>A full email platform, without the SaaS pricing.</h2>
              <p className="sub">
                Contacts, campaigns, automations, and the tools to write and design them, all in
                your own WordPress admin, nowhere else.
              </p>
            </div>
            <div className="pi-grid">
              {FEATURES.map((f) => (
                <div className="pi-card" key={f.title}>
                  <div className="ic">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
              <a
                className="pi-card pi-card-filler"
                href="/studio#invest"
                style={{ "--fill-span": 3 } as CSSProperties}
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

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="pi-for">
              <h3>Built for exactly this kind of practice</h3>
              <ul>
                <li>
                  <span>☾</span> You have a real list, clients, past students, people who bought
                  a reading, but no honest way to reach them without a bill you can't justify yet.
                </li>
                <li>
                  <span>☾</span> You'd rather send three emails a month that actually sound like
                  you than fight a template builder built for e-commerce.
                </li>
                <li>
                  <span>☾</span> Your following grows slowly and personally, so paying by
                  subscriber count punishes exactly the intimacy that makes your work work.
                </li>
                <li>
                  <span>☾</span> You want one admin, your own site, not another login and another
                  monthly charge to keep track of.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="pi-facts">
              <div className="pi-fact">
                <div className="num">0€</div>
                <div className="lbl">monthly fee just to hold a list of contacts</div>
              </div>
              <div className="pi-fact">
                <div className="num">Amazon SES</div>
                <div className="lbl">the same reliable infrastructure the big platforms run on</div>
              </div>
              <div className="pi-fact">
                <div className="num">1 admin</div>
                <div className="lbl">your contacts, campaigns, and shop, in the same WordPress dashboard</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The real comparison</p>
              <h2>One less bill to remember every month.</h2>
              <p className="sub">
                This is the whole point of a Studio build: the tools you'd otherwise rent forever
                come included instead.
              </p>
            </div>
            <SubscriptionCompare
              rows={[
                { name: "Email marketing", elsewhere: "Mailchimp / Flodesk" },
                { name: "Booking & scheduling", elsewhere: "Calendly / Acuity" },
                { name: "Stock or AI imagery", elsewhere: "A stock photo subscription" },
              ]}
            />
          </div>
        </section>

        <section className="cta-band grain">
          <span className="kicker">already built, already working</span>
          <h2>Let&apos;s add it to your practice.</h2>
          <p>
            La Postina is included as part of a Soul Explorer Studio platform, set up and
            connected to your site, ready to send from day one.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <a className="btn btn-primary" href="/studio#invest">
              Start a conversation <Arrow />
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
