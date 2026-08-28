import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { NewsletterForm } from "./newsletter-form";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "The Journal, Reflections on Souls, Past Lives & Healing · Soul Explorer",
  description:
    "The Soul Explorer journal, reflections and teachings on QHHT, past lives, soul readings, meditation and the journey back to yourself, by Alex Fadda.",
};

const CATEGORIES = ["All", "QHHT & Regression", "Soul Readings", "Past Lives", "Meditation", "The Journey"];

const FEATURED = POSTS.find((p) => p.featured)!;
const GRID_POSTS = POSTS.filter((p) => !p.featured);

function CoverPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg,var(--parchment-2),var(--parchment-3))",
        border: "1px dashed rgba(126,114,168,.35)",
        color: "var(--lavender-deep)",
        fontFamily: "var(--sans)",
        fontSize: 11,
        letterSpacing: ".06em",
        textAlign: "center",
        padding: 12,
      }}
    >
      {label}
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <header className="page-hero grain">
          <div className="halo halo-1"></div>
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Explore</span>
              <span className="sep">·</span>
              <span>Journal</span>
            </nav>
            <span className="kicker">field notes from between worlds</span>
            <h1>
              The <em>Journal.</em>
            </h1>
            <p className="lede">
              Reflections and gentle teachings on past lives, soul readings, meditation, and the
              long way home to yourself.
            </p>
          </div>
        </header>

        {/* LISTING */}
        <section className="section">
          <div className="wrap">
            <div className="cat-row">
              {CATEGORIES.map((c) => (
                <a className={`cat-chip${c === "All" ? " on" : ""}`} href="/blog" key={c}>
                  {c}
                </a>
              ))}
            </div>

            <a className="feat" href={`/blog/${FEATURED.slug}`}>
              <div>
                <div className="pmeta">
                  <span className="cat">{FEATURED.category}</span>
                  <span className="dot"></span>
                  <span>Featured</span>
                  <span className="dot"></span>
                  <span>{FEATURED.readTime}</span>
                </div>
                <span className="tag">start here</span>
                <h2>{FEATURED.title + FEATURED.titleEm}</h2>
                <p>{FEATURED.excerpt}</p>
                <span className="more">Read the story</span>
              </div>
              <div className="cover">
                <CoverPlaceholder label="Featured post cover, ethereal / past-life" />
              </div>
            </a>

            <div className="post-grid">
              {GRID_POSTS.map((p) => (
                <a className="post" href={`/blog/${p.slug}`} key={p.slug}>
                  <div className="cover">
                    <CoverPlaceholder label="Post cover" />
                  </div>
                  <div className="pmeta">
                    <span className="cat">{p.category}</span>
                    <span className="dot"></span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3>{p.title + p.titleEm}</h3>
                  <p>{p.excerpt}</p>
                  <span className="more">Read</span>
                </a>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 54 }}>
              <span className="tplace">
                Draft articles, ready for you to edit, replace or expand into the real Journal.
              </span>
            </p>
          </div>
        </section>

        {/* NEWSLETTER / ENVELOPE */}
        <section className="news-env-section grain grain-dark">
          <div className="news-env-head">
            <p className="label">Stay close</p>
            <h2>
              Whispers, in your <em>inbox.</em>
            </h2>
          </div>
          <div className="news-env">
            <div className="envelope">
              <div className="env-back"></div>
              <div className="env-liner">
                <CoverPlaceholder label="A soft inside image (optional)" />
              </div>
              <div className="env-flap-open"></div>
              <div className="env-card" style={{ transform: "translateY(-125px)" }}>
                <p className="env-eyebrow">The next whisper</p>
                <h3>
                  You are not behind. You are exactly where the next <em>chapter begins.</em>
                </h3>
                <NewsletterForm />
              </div>
              <div className="env-front"></div>
              <span className="env-brand">Soul Explorer</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
