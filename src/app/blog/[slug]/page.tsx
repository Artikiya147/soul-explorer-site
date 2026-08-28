import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { getPost, relatedPosts, POSTS } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const fullTitle = post.title + post.titleEm;
  return {
    title: `${fullTitle} · Soul Explorer Journal`,
    description: post.excerpt,
    authors: [{ name: "Alex Fadda" }],
    alternates: { canonical: `https://soul-explorer.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: fullTitle,
      description: post.dek,
      url: `https://soul-explorer.com/blog/${post.slug}`,
      images: ["https://soul-explorer.com/assets/portrait-hero.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title + post.titleEm,
    description: post.excerpt,
    author: { "@type": "Person", name: "Alex Fadda" },
    publisher: { "@type": "Organization", name: "Soul Explorer" },
    image: "https://soul-explorer.com/assets/portrait-hero.png",
    mainEntityOfPage: `https://soul-explorer.com/blog/${post.slug}`,
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <main>
        {/* ARTICLE HERO */}
        <header className="page-hero grain" style={{ paddingBottom: 40 }}>
          <div className="article">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <a href="/blog">Journal</a>
              <span className="sep">·</span>
              <span>{post.category}</span>
            </nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                fontFamily: "var(--sans)",
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--taupe)",
                marginBottom: 18,
              }}
            >
              <span style={{ color: "var(--lavender-deep)", fontWeight: 600 }}>{post.category}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--taupe)" }}></span>
              <span>{post.featured ? `Featured · ${post.readTime}` : post.readTime}</span>
              {post.draft && (
                <>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--taupe)" }}></span>
                  <span className="tplace" style={{ textTransform: "none", letterSpacing: "normal" }}>
                    draft, awaiting your edit
                  </span>
                </>
              )}
            </div>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.04, letterSpacing: "-.01em", margin: 0 }}>
              {post.title}
              <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>{post.titleEm}</em>
            </h1>
            <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(19px,2vw,24px)", lineHeight: 1.5, color: "var(--ink-soft)", margin: "22px 0 0" }}>
              {post.dek}
            </p>
          </div>
        </header>

        {/* COVER */}
        <div className="article-cover">
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
              fontSize: 12,
              letterSpacing: ".06em",
            }}
          >
            article cover pending
          </div>
        </div>

        {/* BODY */}
        <article className="article">
          <div className="prose">
            {post.body.map((block, i) => {
              if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
              if (block.type === "quote") return <blockquote key={i}>{block.text}</blockquote>;
              if (block.type === "closing")
                return (
                  <p key={i} style={{ fontStyle: "italic", color: "var(--ink)" }}>
                    {block.text}
                  </p>
                );
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="author-card">
            <span className="av">
              <img src="/assets/portrait-hero.png" alt="Alex Fadda" />
            </span>
            <div>
              <div className="nm">Alex Fadda</div>
              <div className="bio">
                QHHT practitioner, soul reader and channeler, guiding souls home through
                regression, readings and the space between worlds.
              </div>
            </div>
          </div>
        </article>

        {/* MORE / CTA */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Keep reading</p>
              <h2>More from the Journal.</h2>
            </div>
            <div className="post-grid">
              {related.map((p) => (
                <a className="post" href={`/blog/${p.slug}`} key={p.slug}>
                  <div className="cover">
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
                      }}
                    >
                      Post cover
                    </div>
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
            <div style={{ textAlign: "center", marginTop: 46 }}>
              <a className="btn-ghost" href="/blog">
                ← Back to the Journal
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
