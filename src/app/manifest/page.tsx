import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AddToCartButton } from "@/components/add-to-cart-button";
import "@/styles/product-detail.css";
import "./manifest.css";

export const metadata: Metadata = {
  title: "The 12-Month Soul Manifestation Protocol · Soul Explorer",
  description:
    "A master guidebook to manifest from the soul, month by month. 12 months of soul-aligned intention, ritual and quantum activation.",
  openGraph: {
    title: "The 12-Month Soul Manifestation Protocol",
    description: "Manifest from the soul, month by month.",
    images: ["/assets/manifest-cover.png"],
  },
};

const INSIDE = [
  {
    h: "12 monthly soul protocols",
    p: "One for each month, aligned to the energy of the season and the lunar cycle.",
  },
  {
    h: "6-step manifestation framework",
    p: "A repeatable, soul-rooted process that bypasses the ego and speaks directly to what you're becoming.",
  },
  {
    h: "Quantum activation practices",
    p: "Guided intentions, rituals and prompts for each month's unique frequency.",
  },
  {
    h: "Soul alignment journaling",
    p: "Space to write, reflect and track what shifts as you move through the year.",
  },
];

const FOR_YOU = [
  "You've tried to manifest and it hasn't worked the way the mainstream promises",
  "You want a practice rooted in soul-alignment rather than hustle",
  "You're ready to commit to a full year of intentional, cyclic growth",
  "You want something beautiful to hold and return to",
];

export default function ManifestPage() {
  const manifestItem = {
    id: "manifest",
    name: "Manifestation Protocol",
    price: 17,
    img: "/assets/manifest-cover.png",
    meta: "Digital · PDF download",
  };
  const crystalsItem = {
    id: "crystals",
    name: "Crystals Guidebook",
    price: 17,
    img: "/assets/crystals-cover.png",
    meta: "Digital · PDF download",
  };
  const medBundleItem = {
    id: "med-bundle",
    name: "Meditation Series Bundle",
    price: 37,
    meta: "Digital · 7 guided journeys",
  };

  return (
    <>
      <Nav light />

      <main>
        <header className="pd-hero">
          <img
            src="/assets/manifest-hero.png"
            alt="The 12-Month Soul Manifestation Protocol guidebooks"
          />
        </header>

        <section className="section" style={{ paddingTop: "clamp(48px,7vh,80px)" }}>
          <div className="wrap pd-grid">
            <div className="pd-visual">
              <div className="pd-cover">
                <img
                  src="/assets/manifest-cover.png"
                  alt="The 12-Month Soul Manifestation Protocol cover"
                />
              </div>
              <div className="pd-hands">
                <img
                  src="/assets/manifest-hands.png"
                  alt="Holding the Manifestation Protocol guidebook"
                />
              </div>
            </div>

            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <a href="/shop">Shop</a>
                <span className="sep">·</span>
                <span>Manifestation Protocol</span>
              </nav>
              <p className="label pd-eyebrow">Master Guidebook · Digital PDF</p>
              <h1 className="pd-title">
                The 12-Month Soul <em>Manifestation Protocol</em>
              </h1>
              <p className="pd-dek">
                A master guidebook to manifest from the soul, not the mind, month by month,
                cycle by cycle.
              </p>

              <div className="pd-price-row">
                <span className="pd-price">€17</span>
                <AddToCartButton item={manifestItem} label="Add to cart" />
              </div>
              <p className="pd-note">
                Instant digital download · PDF · Works on any device
              </p>

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

              <div className="pd-delivery">
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
                <div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lavender-deep)" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" strokeLinecap="round" />
                  </svg>
                  Keep it forever, use it every year
                </div>
              </div>

              <div className="pd-cta">
                <AddToCartButton item={manifestItem} label="Get the guidebook · €17" />
                <a className="pd-back" href="/shop">
                  ← Back to shop
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint grain">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="label">Also in the shop</p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 300,
                fontSize: "clamp(26px,3.8vw,44px)",
                margin: "12px 0 32px",
              }}
            >
              More to explore.
            </h2>
            <div className="shop-grid" style={{ maxWidth: 760, margin: "0 auto" }}>
              <article className="product">
                <div className="cover contain">
                  <img src="/assets/crystals-cover.png" alt="Crystals for Practitioners" />
                  <span className="tag">PDF</span>
                </div>
                <div className="product-body">
                  <h3>Crystals for Practitioners</h3>
                  <p>
                    A soul guidebook for a new way to working with crystals for healing,
                    grounding and protection.
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€17</span>
                    <AddToCartButton item={crystalsItem} label="Add" variant="add" />
                  </div>
                </div>
              </article>
              <article className="product">
                <div className="cover moon-cover">
                  <span>☾</span>
                  <span className="tag">Audio</span>
                </div>
                <div className="product-body">
                  <h3>Meditation Series Bundle</h3>
                  <p>All 7 daily guided soul journeys, yours forever. Download and return anytime.</p>
                  <div className="product-foot">
                    <span className="product-price">€37</span>
                    <AddToCartButton item={medBundleItem} label="Add" variant="add" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="liora-band">
          <div className="inner">
            <p className="who">A whisper from Liora</p>
            <p className="whisper">You are not lost. You are on your way back.</p>
            <p className="sig">Liora</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
