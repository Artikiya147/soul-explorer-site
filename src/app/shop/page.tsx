import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AddToCartButton } from "@/components/add-to-cart-button";
import "./shop.css";

export const metadata: Metadata = {
  title: "Shop, Sessions, Readings & Guidebooks · Soul Explorer",
  description:
    "Book sessions and readings, and download guidebooks, the Soul Journey, BQH online, soul readings, and the Manifestation & Crystals guidebooks.",
  openGraph: {
    type: "website",
    title: "Shop, Soul Explorer",
    description: "Sessions, readings and guidebooks.",
    images: ["/assets/portrait-hero.png"],
  },
};

const TRACKS = [
  {
    id: "med-intention",
    name: "Intention Setting Meditation",
    title: "Intention Setting",
    desc: "Clear the noise and set your soul's direction for the week, aligned with Clear Quartz.",
    glyph: "☾",
  },
  {
    id: "med-grounding",
    name: "Grounding & Centering Meditation",
    title: "Grounding & Centering",
    desc: "Come home to your body, stable and rooted, held by the steadying frequency of Smoky Quartz.",
    glyph: "✦",
  },
  {
    id: "med-selflove",
    name: "Self-Love & Empowerment Meditation",
    title: "Self-Love & Empowerment",
    desc: "Meet your own worthiness directly, with Rose Quartz opening the way back to yourself.",
    glyph: "❍",
  },
];

export default function ShopPage() {
  return (
    <>
      <Nav />

      <main>
        <header className="page-hero grain">
          <div className="halo halo-1"></div>
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Shop</span>
            </nav>
            <span className="kicker">everything in one place</span>
            <h1>
              The <em>shop.</em>
            </h1>
            <p className="lede">
              Sessions and readings to book, and guidebooks to keep. Each one a different doorway
              into the same remembering.
            </p>
          </div>
        </header>

        {/* SESSIONS & READINGS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Sessions &amp; readings</p>
              <h2>Begin the deeper work.</h2>
            </div>
            <div className="shop-grid">
              <article className="product">
                <div className="cover">
                  <a href="/qhht">
                    <img src="/assets/vintage.png" alt="The Soul Journey, past-life imagery" />
                  </a>
                  <span className="tag">Signature</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/qhht" style={{ textDecoration: "none", color: "inherit" }}>
                      The Soul Journey
                    </a>
                  </h3>
                  <p>
                    A full QHHT session and soul reading woven into one, past lives, your higher
                    self, and your map.{" "}
                    <a href="/qhht" style={{ color: "var(--lavender-deep)", textDecoration: "none" }}>
                      See what&apos;s inside →
                    </a>
                  </p>
                  <div className="product-foot">
                    <span className="product-price">
                      €350 <small>from</small>
                    </span>
                    <AddToCartButton
                      item={{
                        id: "journey",
                        name: "The Soul Journey",
                        price: 350,
                        img: "/assets/vintage.png",
                        meta: "QHHT + Soul Reading",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>

              <article className="product">
                <div className="cover">
                  <a href="/bqh">
                    <img src="/assets/bqh-hero.png" alt="BQH online, restful home imagery" />
                  </a>
                  <span className="tag">Online</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/bqh" style={{ textDecoration: "none", color: "inherit" }}>
                      BQH · Online Session
                    </a>
                  </h3>
                  <p>
                    Beyond Quantum Healing over video, the same depth, from the comfort of your
                    own home, anywhere.{" "}
                    <a href="/bqh" style={{ color: "var(--lavender-deep)", textDecoration: "none" }}>
                      See what&apos;s inside →
                    </a>
                  </p>
                  <div className="product-foot">
                    <span className="product-price">
                      €350 <small>from</small>
                    </span>
                    <AddToCartButton
                      item={{
                        id: "bqh",
                        name: "BQH Online Session",
                        price: 350,
                        img: "/assets/bqh-hero.png",
                        meta: "Online · ~3–4 hrs",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>

              <article className="product">
                <div className="cover">
                  <a href="/soul-readings">
                    <img src="/assets/reading-cover.png" alt="Soul reading, celestial imagery" />
                  </a>
                  <span className="tag">Reading</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/soul-readings" style={{ textDecoration: "none", color: "inherit" }}>
                      Soul Reading
                    </a>
                  </h3>
                  <p>
                    Channeled guidance woven with astrology and numerology, clarity on the season
                    you&apos;re in.{" "}
                    <a href="/soul-readings" style={{ color: "var(--lavender-deep)", textDecoration: "none" }}>
                      See what&apos;s inside →
                    </a>
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€130</span>
                    <AddToCartButton
                      item={{
                        id: "reading",
                        name: "Soul Reading",
                        price: 130,
                        img: "/assets/reading-cover.png",
                        meta: "Live · with recording",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>

              <article className="product">
                <div className="cover">
                  <a href="/complete-reading">
                    <img src="/assets/product-soulreading.png" alt="Complete Soul Reading" />
                  </a>
                  <span className="tag">Digital</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/complete-reading" style={{ textDecoration: "none", color: "inherit" }}>
                      Complete Soul Reading
                    </a>
                  </h3>
                  <p>
                    A personalized soul portrait: 7-card spread, lineage, numerology, a channeled
                    message &amp; your own soul sigil.{" "}
                    <a href="/complete-reading" style={{ color: "var(--lavender-deep)", textDecoration: "none" }}>
                      See what&apos;s inside →
                    </a>
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€222</span>
                    <AddToCartButton
                      item={{
                        id: "lettura",
                        name: "Complete Soul Reading",
                        price: 222,
                        img: "/assets/product-soulreading.png",
                        meta: "Digital · personalized PDF",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>
            </div>
            <p className="shop-note">
              Sessions are confirmed and scheduled with you after checkout.
            </p>
          </div>
        </section>

        {/* GUIDEBOOKS */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Guidebooks</p>
              <h2>Take a piece of it home.</h2>
              <p className="sub">
                Downloadable guidebooks to work with in your own time. Add to cart, or download
                the free ones instantly.
              </p>
            </div>
            <div className="shop-grid" style={{ maxWidth: 1080, margin: "0 auto" }}>
              <article className="product">
                <div className="cover">
                  <a href="/manifest">
                    <img
                      src="/assets/manifest-square.png"
                      alt="The 12-Month Soul Manifestation Protocol"
                    />
                  </a>
                  <span className="tag">PDF</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/manifest" style={{ textDecoration: "none", color: "inherit" }}>
                      The Manifestation Protocol
                    </a>
                  </h3>
                  <p>
                    The 12-Month Soul Manifestation Protocol, a master guidebook to manifest from
                    the soul, month by month.
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€17</span>
                    <AddToCartButton
                      item={{
                        id: "manifest",
                        name: "Manifestation Guidebook",
                        price: 17,
                        img: "/assets/manifest-cover.png",
                        meta: "Digital · PDF download",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>

              <article className="product">
                <div className="cover contain">
                  <a href="/crystals">
                    <img src="/assets/crystals-cover.png" alt="Crystals for Practitioners" />
                  </a>
                  <span className="tag">PDF</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/crystals" style={{ textDecoration: "none", color: "inherit" }}>
                      Crystals for Practitioners
                    </a>
                  </h3>
                  <p>
                    A gentle guide to working with crystals for healing, grounding and
                    protection, from a certified crystal healer.
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€17</span>
                    <AddToCartButton
                      item={{
                        id: "crystals",
                        name: "Crystals Guidebook",
                        price: 17,
                        img: "/assets/crystals-cover.png",
                        meta: "Digital · PDF download",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>

              <article className="product">
                <div className="cover">
                  <a href="/oracle-widget">
                    <img src="/assets/card-liora.png" alt="Whispers Oracle Deck" />
                  </a>
                  <span className="tag">Digital</span>
                </div>
                <div className="product-body">
                  <h3>
                    <a href="/oracle-widget" style={{ textDecoration: "none", color: "inherit" }}>
                      Whispers Oracle Deck
                    </a>
                  </h3>
                  <p>
                    All 44 card images from the real deck, full resolution, ready to upload into
                    your own oracle widget.
                  </p>
                  <div className="product-foot">
                    <span className="product-price">€44</span>
                    <AddToCartButton
                      item={{
                        id: "oracle-deck-digital",
                        name: "Whispers Oracle Deck (Digital)",
                        price: 44,
                        img: "/assets/card-liora.png",
                        meta: "Digital · 44 card images, full resolution",
                      }}
                      label="Add"
                      variant="add"
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* MEDITATIONS */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap">
            <div className="section-head center" style={{ marginBottom: "clamp(32px,5vw,52px)" }}>
              <p className="label" style={{ color: "var(--lavender-soft)" }}>
                guided journeys
              </p>
              <h2 style={{ color: "var(--parchment)" }}>
                The Meditation <em>Series.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(15px,1.4vw,18px)",
                  color: "rgba(245,240,235,.72)",
                  maxWidth: "48ch",
                  margin: "14px auto 0",
                  lineHeight: 1.75,
                }}
              >
                Each meditation is a portal. Come back as many times as you need.
              </p>
            </div>

            <div className="bundle-card">
              <div>
                <span className="bundle-best">Best value</span>
                <h3>
                  The Full Series <em>Bundle</em>
                </h3>
                <p>
                  All 7 meditations of the Crystalline Flow series, intention, grounding,
                  self-love, healing, chakra balance, manifestation and the closing Crystal Light
                  Waterfall. Yours forever, download and return anytime.
                </p>
                <ul className="bundle-list">
                  <li>
                    <span>✦</span> Full series (7 guided journeys)
                  </li>
                  <li>
                    <span>✦</span> Downloadable audio files
                  </li>
                  <li>
                    <span>✦</span> Also included in Skool community
                  </li>
                </ul>
                <div className="bundle-price-row">
                  <span className="bundle-price">
                    €37 <small>€63</small>
                  </span>
                  <AddToCartButton
                    item={{
                      id: "med-bundle",
                      name: "Meditation Series Bundle",
                      price: 37,
                      meta: "Digital · 7 guided journeys",
                    }}
                    label="Add to cart"
                  />
                </div>
              </div>
              <div className="bundle-grid">
                <div className="bundle-tile">
                  <div className="glyph">☾</div>
                  <div className="nm">Intention Setting</div>
                </div>
                <div className="bundle-tile">
                  <div className="glyph">✦</div>
                  <div className="nm">Chakra Balancing</div>
                </div>
                <div className="bundle-tile">
                  <div className="glyph">❍</div>
                  <div className="nm">Healing &amp; Releasing</div>
                </div>
                <div className="bundle-tile">
                  <div className="glyph">✷</div>
                  <div className="nm">+ 4 more</div>
                </div>
              </div>
            </div>

            <p className="track-note">or buy individually · €9 each</p>
            <div className="shop-grid" style={{ maxWidth: 880, margin: "0 auto" }}>
              {TRACKS.map((t) => (
                <article className="product track-card" key={t.id}>
                  <a href="/meditations" className="cover" style={{ textDecoration: "none" }}>
                    <span>{t.glyph}</span>
                  </a>
                  <div className="product-body">
                    <h3>
                      <a href="/meditations" style={{ textDecoration: "none", color: "inherit" }}>
                        {t.title}
                      </a>
                    </h3>
                    <p>{t.desc}</p>
                    <div className="product-foot">
                      <span className="product-price">€9</span>
                      <AddToCartButton
                        item={{ id: t.id, name: t.name, price: 9, meta: "Digital · audio download" }}
                        label="Add"
                        variant="add"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="med-more">
              <a href="/meditations">Preview free meditations on the Meditations page →</a>
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Certified &amp; accredited</p>
              <h2>Trained, and held to a standard.</h2>
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
