import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AddToCartButton } from "@/components/add-to-cart-button";
import "@/styles/product-detail.css";

export const metadata: Metadata = {
  title: "Crystals for Practitioners · A Soul Guidebook · Soul Explorer",
  description:
    "A soul guidebook to working with crystals for healing, grounding and protection. From a certified crystal healer.",
  openGraph: {
    title: "Crystals for Practitioners · Soul Explorer",
    images: ["/assets/crystals-cover.png"],
  },
};

const INSIDE = [
  {
    h: "Crystal properties directory",
    p: "The healing, grounding and protective qualities of the most important crystals for practitioners.",
  },
  {
    h: "How to work with crystals in sessions",
    p: "Placement, intention-setting, cleansing and programming for therapeutic use.",
  },
  {
    h: "Chakra crystal pairings",
    p: "Which crystals support each energy centre and how to combine them for maximum resonance.",
  },
  {
    h: "Daily practices and rituals",
    p: "Simple ways to weave crystal energy into your morning, your sessions, and your space.",
  },
];

const FOR_YOU = [
  "You're a healer or practitioner wanting to deepen your crystal work",
  "You're drawn to crystals but unsure how to use them intentionally",
  "You want a clear, grounded reference you can keep returning to",
  "You'd love to pair it with the 21-Day Crystalline Flow meditations",
];

export default function CrystalsPage() {
  const crystalsItem = {
    id: "crystals",
    name: "Crystals for Practitioners",
    price: 17,
    img: "/assets/crystals-cover.png",
    meta: "Digital · PDF download",
  };

  return (
    <>
      <Nav />

      <main>
        <header className="pd-hero" style={{ background: "#b8c4d0" }}>
          <img
            src="/assets/crystals-promo-sq.png"
            alt="Crystals for Practitioners guidebooks"
            style={{ objectPosition: "center 35%" }}
          />
        </header>

        <section className="section" style={{ paddingTop: "clamp(48px,7vh,80px)" }}>
          <div className="wrap pd-grid">
            <div className="pd-visual">
              <div className="pd-cover">
                <img src="/assets/crystals-cover.png" alt="Crystals for Practitioners cover" />
              </div>
              <div className="pd-hands">
                <img
                  src="/assets/crystals-hands.png"
                  alt="Holding the Crystals for Practitioners guidebook"
                />
              </div>
            </div>

            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <a href="/shop">Shop</a>
                <span className="sep">·</span>
                <span>Crystals for Practitioners</span>
              </nav>
              <p className="label pd-eyebrow">A Soul Guidebook · Digital PDF</p>
              <h1 className="pd-title">
                <em>Crystals</em> for Practitioners
              </h1>
              <p className="pd-dek">
                A gentle, practical, and deeply spiritual guide to working with crystals in your
                healing practice and daily life.
              </p>

              <div className="pd-price-row">
                <span className="pd-price">€17</span>
                <AddToCartButton item={crystalsItem} label="Add to cart" />
              </div>
              <p className="pd-note">Instant digital download · PDF · Works on any device</p>

              <div className="pd-bundle">
                <div>
                  <div className="tag">Bundle deal</div>
                  <div className="txt">
                    Get the Crystals guidebook together with the{" "}
                    <strong>21-Day Crystalline Flow</strong> meditation series
                  </div>
                </div>
                <a href="/meditations#crystalline" className="btn-ghost">
                  See the bundle
                </a>
              </div>

              <div className="pd-inside">
                <h2>What&apos;s inside</h2>
                <div className="pd-items">
                  {INSIDE.map((item) => (
                    <div className="pd-item" key={item.h}>
                      <span className="mark">✦</span>
                      <div>
                        <strong>{item.h}</strong>
                        <span>{item.p}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pd-for">
                <h3>This is for you if</h3>
                <ul>
                  {FOR_YOU.map((item) => (
                    <li key={item}>☾ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="pd-delivery" style={{ marginBottom: 36 }}>
                <div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lavender-deep)" strokeWidth="1.6">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Instant download after purchase
                </div>
                <div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lavender-deep)" strokeWidth="1.6">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 12h6M12 9v6" strokeLinecap="round" />
                  </svg>
                  PDF · print or read on any device
                </div>
              </div>

              <div style={{ display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
                <AddToCartButton item={crystalsItem} label="Get the guidebook · €17" />
                <a
                  href="/shop"
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: 16,
                    color: "var(--ink-soft)",
                  }}
                >
                  ← Back to shop
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--dark grain grain-dark">
          <div
            className="wrap"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px,5vw,64px)",
              alignItems: "center",
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            <div>
              <img
                src="/assets/crystalline-flow-promo.png"
                alt="The 21-Day Crystalline Flow Meditation Series"
                style={{ width: "100%", borderRadius: 16, boxShadow: "0 34px 60px -30px rgba(0,0,0,.6)" }}
              />
            </div>
            <div>
              <p className="label" style={{ color: "var(--turquoise)" }}>
                bundle it
              </p>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 300,
                  fontSize: "clamp(26px,3.6vw,44px)",
                  color: "var(--parchment)",
                  margin: "12px 0 16px",
                }}
              >
                Pair it with the <em style={{ fontStyle: "italic", color: "var(--lavender-soft)" }}>Crystalline Flow.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(15px,1.4vw,18px)",
                  lineHeight: 1.75,
                  color: "rgba(245,240,235,.72)",
                  maxWidth: "40ch",
                  margin: "0 0 28px",
                }}
              >
                7 daily meditations, each day a different crystal, a different frequency. The
                guidebook becomes your companion for every session.
              </p>
              <a className="btn btn-primary" href="/meditations#crystalline">
                See the meditation series
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="liora-band">
          <div className="inner">
            <p className="who">A whisper from Liora</p>
            <p className="whisper">You have done harder things than this, in lives you&apos;ve forgotten.</p>
            <p className="sig">Liora</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
