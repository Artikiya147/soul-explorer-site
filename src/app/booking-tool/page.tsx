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
  title: "Booking Tool for Practitioners · Real Calendar, Zoom & Whereby · Soul Explorer Studio",
  description:
    "A real booking system for practitioners and coaches, live Google Calendar availability, real Zoom or Whereby links, client intake, and payment, all on your own site, no Calendly subscription.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" />
  </svg>
);

const IcVideo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="m16 10 6-3v10l-6-3" strokeLinejoin="round" />
  </svg>
);

const IcForm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
  </svg>
);

const IcCard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

const IcBrand = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18" strokeLinecap="round" />
  </svg>
);

const IcBell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 3a5 5 0 0 0-5 5v3.5c0 1-.4 2-1 2.8L5 15.5h14L18 14.3c-.6-.8-1-1.8-1-2.8V8a5 5 0 0 0-5-5Z" strokeLinejoin="round" />
    <path d="M9.5 19a2.5 2.5 0 0 0 5 0" strokeLinecap="round" />
  </svg>
);

const FEATURES = [
  {
    icon: <IcCalendar />,
    title: "Real availability, not a guess",
    body: "Checks your actual Google Calendar before offering a time, so nothing gets double-booked into a slot you've already filled.",
  },
  {
    icon: <IcVideo />,
    title: "A real video link, automatically",
    body: "Zoom, Whereby, or Google Meet, a real meeting link is generated the moment a session is confirmed and emailed to both of you, no manual step.",
  },
  {
    icon: <IcForm />,
    title: "Intake, woven in",
    body: "Client intake forms open right from the confirmation, so you walk into every session already knowing what someone's carrying.",
  },
  {
    icon: <IcCard />,
    title: "Payment, handled",
    body: "Connects to your shop's checkout for deposits or full payment, so a booked session is a paid one, not a maybe.",
  },
  {
    icon: <IcBrand />,
    title: "Your services, your rules",
    body: "Set your own session types, durations, buffers, and business hours, exactly how your practice actually runs.",
  },
  {
    icon: <IcBell />,
    title: "Confirmations, without you",
    body: "Both of you get the details automatically, no back-and-forth email just to nail down a time.",
  },
];

export default async function BookingToolPage() {
  const { heroUrl, imageUrl, videoEmbedUrl } = await resolvePageMedia("booking-tool");

  return (
    <>
      <Nav light />

      <main>
        <header
          className={`page-hero page-hero--dark grain grain-dark pi-hero${heroUrl ? " pi-hero-uploaded" : ""}`}
          style={heroUrl ? ({ "--hero-img": `url(${heroUrl})` } as CSSProperties) : undefined}
        >
          <div className="halo halo-1"></div>
          <HeroEditOverlay slotId="booking-tool-hero" hasImage={!!heroUrl} />
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <a href="/studio">Studio</a>
              <span className="sep">·</span>
              <span>Booking Tool</span>
            </nav>
            <span className="kicker">for the Studio platform</span>
            <h1>
              A booking system that&apos;s actually <em>connected.</em>
            </h1>
            <p className="lede">
              Real Google Calendar availability, a real Zoom or Whereby link, client intake, and
              payment, all built into your own site. Not a link that sends people away to a
              third-party scheduler with someone else's branding on it.
            </p>
            <div className="pi-badges">
              <span>Real, in production</span>
              <span>Live calendar sync</span>
              <span>Zoom · Whereby · Meet</span>
              <span>Intake built in</span>
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
              imageSlotId="booking-tool-image"
              videoSlotId="booking-tool-video"
              imageLabel="Screenshot of the booking calendar, coming soon"
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
              <h2>Booking that actually knows your calendar.</h2>
              <p className="sub">
                No copy-pasted availability, no third-party page with somebody else's name on it,
                just a real connection to how your practice actually runs.
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
                style={{ "--fill-span": 2 } as CSSProperties}
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
              <h3>Built for practitioners whose calendar actually matters</h3>
              <ul>
                <li>
                  <span>☾</span> You've had someone book a slot you'd already filled, because a
                  scheduling link wasn't really talking to your real calendar.
                </li>
                <li>
                  <span>☾</span> You want the video link, the intake form, and the confirmation to
                  just happen, not become three separate things you send by hand.
                </li>
                <li>
                  <span>☾</span> You want a client's very first impression of booking with you to
                  feel like your practice, not a generic third-party scheduler.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The real comparison</p>
              <h2>Your calendar, without the extra login.</h2>
            </div>
            <SubscriptionCompare
              rows={[
                { name: "Booking & scheduling", elsewhere: "Calendly / Acuity" },
                { name: "Video meeting links", elsewhere: "A separate Zoom plan" },
                { name: "Client intake forms", elsewhere: "Typeform / Google Forms" },
              ]}
            />
          </div>
        </section>

        <section className="cta-band grain">
          <span className="kicker">already built, already working</span>
          <h2>Let&apos;s connect it to your calendar.</h2>
          <p>
            The Booking Tool is included as part of a Soul Explorer Studio platform, set up and
            connected to your real calendar and video accounts from day one.
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
