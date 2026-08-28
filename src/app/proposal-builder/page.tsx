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
  title: "Proposals, Contracts & Onboarding for Practitioners · Coming to Soul Explorer Studio",
  description:
    "One place for proposals, contracts and client onboarding, adapted from a real web-design tool, so a practitioner or coach never has to stitch together a price list, a signature app, and an intake form separately again.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 2h9l5 5v15H6z" strokeLinejoin="round" />
    <path d="M15 2v5h5" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h6M9 9h2" strokeLinecap="round" />
  </svg>
);

const IcLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="m12 2 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" />
    <path d="m3 12 9 5 9-5M3 17l9 5 9-5" strokeLinejoin="round" />
  </svg>
);

const IcSign = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M3 17s2-1 3-3 1-4 3-4 1 4 3 4 2-3 3-3 1 2 3 2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21h18" strokeLinecap="round" />
  </svg>
);

const IcBrand = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18" strokeLinecap="round" />
  </svg>
);

const IcChecklist = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M9 6h11M9 12h11M9 18h11" strokeLinecap="round" />
    <path d="m4 6 1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FEATURES = [
  {
    icon: <IcLayers />,
    title: "Session & program packages",
    body: "Build tiered offers, single sessions, bundles, courses, or retreat spots, laid out clearly with what's included in each.",
  },
  {
    icon: <IcBrand />,
    title: "Your own brand, every time",
    body: "The same colors, fonts and voice as your site, so a proposal looks like it came from your practice, not a template everyone's seen.",
  },
  {
    icon: <IcDoc />,
    title: "One link to send",
    body: "No PDF attachments or awkward pricing screenshots, a single polished link a client can open, read, and actually understand.",
  },
  {
    icon: <IcSign />,
    title: "Contracts, built in",
    body: "Once a proposal's accepted, the agreement itself lives in the same place, no separate signature app, no chasing a PDF back and forth by email.",
  },
  {
    icon: <IcChecklist />,
    title: "Client onboarding, in one flow",
    body: "From accepted proposal to signed contract to \"here's what happens next,\" the whole beginning of a client relationship in one continuous, guided place.",
  },
];

export default async function ProposalBuilderPage() {
  const { heroUrl, imageUrl, videoEmbedUrl } = await resolvePageMedia("proposal-builder");

  return (
    <>
      <Nav light />

      <main>
        <header
          className={`page-hero page-hero--dark grain grain-dark pi-hero${heroUrl ? " pi-hero-uploaded" : ""}`}
          style={heroUrl ? ({ "--hero-img": `url(${heroUrl})` } as CSSProperties) : undefined}
        >
          <div className="halo halo-1"></div>
          <HeroEditOverlay slotId="proposal-builder-hero" hasImage={!!heroUrl} />
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <a href="/studio">Studio</a>
              <span className="sep">·</span>
              <span>Proposal Builder</span>
            </nav>
            <span className="kicker">coming to the Studio platform</span>
            <h1>
              Proposals, contracts, and onboarding, <em>all in one place.</em>
            </h1>
            <p className="lede">
              For years I've built proposals like this for my own web design clients, real
              packages, real pricing, a contract, and a clear next step, all in one link. Now
              I'm adapting the same tool for practitioners and coaches, so a session package or a
              course offer can look as considered as the work itself, from the first yes to the
              first appointment.
            </p>
            <div className="pi-badges">
              <span>In development</span>
              <span>Adapted from a real tool</span>
              <span>Coming to the Studio platform</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/studio#invest">
                Ask about early access <Arrow />
              </a>
              <a className="btn-ghost btn-ghost-light" href="#features">
                What it will do
              </a>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="wrap">
            <div className="pi-soon-band">
              <span className="tag">Not built yet</span>
              <p>
                This is a real tool I already use for AF-Webstylist, my web design practice,
                adapted for the very different rhythm of session-based, course-based, and
                retreat-based work. It&apos;s next in line for the Studio platform, not a
                someday-maybe idea.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <MediaSlots
              imageSlotId="proposal-builder-image"
              videoSlotId="proposal-builder-video"
              imageLabel="A sample proposal, once the practitioner version exists"
              videoLabel="A short walkthrough video, coming soon"
              imageUrl={imageUrl}
              videoEmbedUrl={videoEmbedUrl}
            />
          </div>
        </section>

        <section className="section section--tint grain pi-glow" id="features">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What it will do</p>
              <h2>The same clarity a proposal gives a web design client.</h2>
              <p className="sub">
                Adapted for sessions, packages, courses, and programs, instead of pages and
                sitemaps.
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
                <h3>Want early access?</h3>
                <p>Say the word and I&apos;ll bring you in as soon as it&apos;s ready.</p>
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="pi-for">
              <h3>Built for the moment right before someone says yes</h3>
              <ul>
                <li>
                  <span>☾</span> You've quoted a package in a message, a call, or a comment
                  thread, and watched it get lost before anyone actually committed.
                </li>
                <li>
                  <span>☾</span> You run tiers, single sessions vs. a full arc, one course module
                  vs. the whole program, and want that choice laid out clearly, not explained
                  every time.
                </li>
                <li>
                  <span>☾</span> You want the last thing a prospective client sees before booking
                  to feel as intentional as the work they're about to receive.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The real comparison</p>
              <h2>One tool instead of three subscriptions.</h2>
            </div>
            <SubscriptionCompare
              rows={[
                { name: "Proposals & pricing", elsewhere: "PandaDoc" },
                { name: "Contracts & e-signature", elsewhere: "HelloSign / DocuSign" },
                { name: "Client onboarding", elsewhere: "Dubsado / HoneyBook" },
              ]}
            />
          </div>
        </section>

        <section className="cta-band grain">
          <span className="kicker">be first to use it</span>
          <h2>Want early access when it&apos;s ready?</h2>
          <p>
            The Proposal Builder is being built for the Studio platform now. Say the word and
            I&apos;ll bring you in as soon as it&apos;s ready for a real practitioner to use.
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
