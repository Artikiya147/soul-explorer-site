import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { MeditationPlayer } from "./audio-player";
import { SHOW_TESTIMONIALS } from "@/lib/testimonials-flag";
import "./meditations.css";

export const metadata: Metadata = {
  title: "The Meditation Series, Guided Journeys · Soul Explorer",
  description:
    "The Soul Explorer guided meditation series, journeys for sleep, healing, past-life recall and meeting your higher self. Preview free; the full library lives in the community.",
};

const STATS = [
  { icon: "🔮", label: "7 meditations" },
  { icon: "💎", label: "7 crystals" },
  { icon: "✦", label: "21 days" },
  { icon: "☾", label: "Andromedan anchors" },
];

const CRYSTAL_DAYS = [
  { n: 1, title: "Intention Setting", meta: "Clear Quartz · Alignment with soul direction" },
  { n: 2, title: "Grounding & Centering", meta: "Smoky Quartz · Stability" },
  { n: 3, title: "Self-Love & Empowerment", meta: "Rose Quartz · Worthiness" },
  { n: 4, title: "Healing & Releasing", meta: "Amethyst · Release & renewal" },
  { n: 5, title: "Chakra Balancing", meta: "Fluorite · Harmonic resonance" },
  { n: 6, title: "Manifestation & Abundance", meta: "Citrine · Calling in aligned opportunities" },
  { n: 7, title: "Crystal Light Waterfall · Andromedan Transmission", meta: "Celestite · Total recharge, sealing the week" },
];

const FULL_SERIES = [
  {
    day: "01",
    weekday: "Monday",
    title: "Intention Setting Meditation",
    body: "This meditation aligns you with your true direction. Through guided breath and visualization, you'll connect with a heart-centered intention that becomes your compass for the next days ahead. Your intention doesn't need to be perfect, it only needs to be true for you right now.",
    dur: "08 min",
    free: true,
  },
  {
    day: "02",
    weekday: "Tuesday",
    title: "Grounding & Centering Meditation",
    body: "Root Deep, Rise Steady. This meditation connects you to the deep, nourishing stability of the Earth while aligning you with the clarity of the stars. It's your anchor for the days when you feel scattered or unsteady, bringing you back to your core.",
    dur: "06 min",
    free: false,
  },
  {
    day: "03",
    weekday: "Wednesday",
    title: "Self-Love & Empowerment Meditation",
    body: "This meditation opens you to unconditional self-love and awakens your inner courage. It's a reminder that your worth is not something to earn, it is the truth you already carry. With each breath, you'll strengthen your connection to your heart's light, releasing self-doubt and stepping fully into your own presence.",
    dur: "06 min",
    free: false,
  },
  {
    day: "04",
    weekday: "Thursday",
    title: "Healing & Releasing Meditation",
    body: "Let the Light Wash Through You. This meditation guides you to release what no longer serves you, old emotions, patterns, or heaviness, and make space for renewal. Using the imagery of flowing light, you'll allow stagnant energy to dissolve, leaving you refreshed and open to new possibilities.",
    dur: "05 min",
    free: false,
  },
  {
    day: "05",
    weekday: "Friday",
    title: "Chakra Balancing Meditation",
    body: "Align Your Inner Spectrum. This meditation harmonizes your seven energy centers, bringing your whole system into balance. By aligning your chakras, you create space for energy to flow freely and for clarity to rise naturally. As you move through each center, you'll feel both grounded and expanded, fully connected to your inner harmony.",
    dur: "07 min",
    free: false,
  },
  {
    day: "06",
    weekday: "Saturday",
    title: "Manifestation & Abundance Meditation",
    body: "Call in What is Aligned. This meditation focuses your energy on attracting the opportunities, resources, and experiences that match your highest good. Through visualization and intention, you'll step into the feeling of already having what you desire, making it easier for it to find its way to you.",
    dur: "07 min",
    free: false,
  },
  {
    day: "07",
    weekday: "Sunday",
    title: "Crystal Light Waterfall Meditation",
    body: "Receive the Andromedan Transmission. This meditation immerses you in the crystalline waters of the Andromedan current, cleansing, recharging, and activating your field. Through the waterfall of light, you'll feel any remaining heaviness dissolve as your energy is replenished with pure, high-frequency light.",
    dur: "08 min",
    free: false,
  },
];

const TESTIMONIALS = [
  "I haven't slept through the night in years. 'Sleep Among the Stars' is the only thing that works.",
  "The past-life meditation gave me a glimpse I haven't stopped thinking about. So gentle, so real.",
  "Alex's voice feels like being tucked in by the universe. I reach for these every single day.",
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
  </svg>
);

export default function MeditationsPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark grain grain-dark" style={{ paddingBottom: "clamp(52px,8vh,96px)" }}>
          <div className="halo halo-1"></div>
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>Explore</span>
                <span className="sep">·</span>
                <span>Meditations</span>
              </nav>
              <span className="kicker" style={{ color: "var(--turquoise)" }}>
                close your eyes, i&apos;ll guide you
              </span>
              <h1>
                The Meditation Series, journeys back to <em>yourself.</em>
              </h1>
              <p className="lede">
                A growing library of guided meditations in my voice, for deep rest, gentle
                healing, remembering past lives, and meeting the part of you that already knows.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#crystalline">
                  The 21-Day Crystalline Flow <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#listen">
                  Free preview
                </a>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 52px 90px -34px rgba(0,0,0,.7)", transform: "rotate(1.5deg)" }}>
                <img src="/assets/med-hero-card.png" alt="The 21-Day Crystalline Flow Meditation Series" style={{ width: "100%", display: "block" }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -14,
                  background: "rgba(245,240,235,.12)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(245,240,235,.2)",
                  borderRadius: 30,
                  padding: "10px 20px",
                  boxShadow: "0 18px 38px -18px rgba(0,0,0,.5)",
                  transform: "rotate(-3deg)",
                }}
              >
                <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15, color: "var(--parchment)" }}>
                  7 meditations · 3 weeks
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* CRYSTALLINE FLOW SERIES */}
        <section className="section" id="crystalline">
          <div className="wrap">
            <div className="section-head center" style={{ marginBottom: "clamp(32px,5vw,52px)" }}>
              <p className="label" style={{ color: "var(--turquoise)" }}>
                the featured series
              </p>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(28px,4vw,52px)" }}>
                The 21-Day <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>Crystalline Flow.</em>
              </h2>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(15px,1.4vw,18px)",
                  color: "var(--ink-soft)",
                  maxWidth: "52ch",
                  margin: "14px auto 0",
                  lineHeight: 1.75,
                }}
              >
                A living activation built by intention, breath, and light. Seven daily
                meditations, seven crystals, three full weeks of deepening alignment.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(28px,5vw,64px)",
                alignItems: "center",
                marginBottom: "clamp(40px,6vw,64px)",
              }}
            >
              <img
                src="/assets/crystalline-flow-wide.png"
                alt="The 21-Day Crystalline Flow"
                style={{ width: "100%", borderRadius: 16, boxShadow: "0 34px 60px -28px rgba(26,23,20,.38)" }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {STATS.map((s) => (
                  <div key={s.label} style={{ background: "var(--parchment-2)", borderRadius: 12, padding: 18, textAlign: "center" }}>
                    <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 15, color: "var(--ink)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, maxWidth: 880, margin: "0 auto 44px" }}>
              {CRYSTAL_DAYS.map((d) => (
                <div
                  key={d.n}
                  style={{
                    background: d.n === 7 ? "linear-gradient(135deg,rgba(92,225,230,.06),rgba(155,142,196,.1))" : "#fdfbf7",
                    border: d.n === 7 ? "1px solid rgba(92,225,230,.3)" : "1px solid rgba(196,181,160,.5)",
                    borderRadius: 12,
                    padding: "20px 22px",
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    gridColumn: d.n === 7 ? "1 / -1" : undefined,
                  }}
                >
                  <span
                    style={{
                      flex: "0 0 auto",
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: d.n === 7 ? "var(--turquoise)" : "var(--lavender)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--serif)",
                      fontSize: 14,
                      color: d.n === 7 ? "#1a1520" : "#2a2330",
                    }}
                  >
                    {d.n}
                  </span>
                  <div>
                    <div style={{ fontFamily: "var(--serif)", fontSize: 17, color: "var(--ink)", marginBottom: 3 }}>{d.title}</div>
                    <div style={{ fontSize: 12, color: "var(--taupe)" }}>{d.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 760, margin: "0 auto" }}>
              <div style={{ background: "var(--parchment-2)", border: "1px solid rgba(196,181,160,.6)", borderRadius: 16, padding: "28px 24px" }}>
                <p className="label" style={{ marginBottom: 10 }}>
                  Series only
                </p>
                <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--ink)", marginBottom: 8 }}>€37</div>
                <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 }}>
                  All 7 meditations, yours forever to download and return to anytime.
                </p>
                <a className="btn btn-primary" href="/shop" style={{ width: "100%", justifyContent: "center" }}>
                  Get the series <Arrow />
                </a>
              </div>
              <div style={{ background: "var(--dark)", border: "1px solid rgba(92,225,230,.3)", borderRadius: 16, padding: "28px 24px", position: "relative", overflow: "hidden" }}>
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: "var(--turquoise)",
                    color: "#1a1520",
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: 10,
                    letterSpacing: ".16em",
                    padding: "4px 12px",
                    borderRadius: 20,
                  }}
                >
                  Best value
                </div>
                <p className="label" style={{ marginBottom: 10, color: "var(--lavender-soft)" }}>
                  Series + Crystals guidebook
                </p>
                <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--parchment)", marginBottom: 8 }}>
                  €47 <small style={{ fontSize: 14, color: "rgba(245,240,235,.35)", textDecoration: "line-through" }}>€54</small>
                </div>
                <p style={{ fontSize: 14, color: "rgba(245,240,235,.65)", lineHeight: 1.6, marginBottom: 20 }}>
                  All 7 meditations plus the Crystals for Practitioners guidebook as your daily
                  companion.
                </p>
                <a className="btn btn-primary" href="/shop" style={{ width: "100%", justifyContent: "center" }}>
                  Get the bundle · €47 <Arrow />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FREE PREVIEW */}
        <section className="section" id="listen">
          <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "center" }}>
            <div>
              <p className="label" style={{ marginBottom: 18 }}>
                Free to begin
              </p>
              <h2 className="h2" style={{ marginBottom: 18 }}>
                A first journey, <em style={{ fontStyle: "italic", color: "var(--lavender-deep)" }}>on the house.</em>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--ink-soft)", maxWidth: "46ch", margin: "0 0 8px" }}>
                Begin with <strong>Intention Setting Meditation</strong>, a gentle descent into
                stillness, and a taste of how it feels to be guided by my voice.
              </p>
              <MeditationPlayer src="/audio/intention-setting.mp3" />
            </div>
            <div>
              <div className="polaroid" style={{ transform: "rotate(2.4deg)", maxWidth: 400, margin: "0 auto" }}>
                <span className="tape"></span>
                <div className="ph" style={{ height: 420 }}>
                  <img className="med-polaroid-photo" src="/assets/med-polaroid.png" alt="Serene meditation, starlit calm" />
                </div>
                <div className="cap">be still, and listen</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE FULL SERIES */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">The full series</p>
              <h2>The 21-Day Crystalline Flow Meditation Series</h2>
              <p className="sub">A Journey of Alignment, Renewal, and Soul-Directed Creation.</p>
              <p className="sub">One is yours free. The rest live inside the community, listen anytime, on any device.</p>
            </div>
            <div className="med-list">
              {FULL_SERIES.map((m) => (
                <div className={`med${m.free ? " free" : ""}`} key={m.day}>
                  <div className="idx">{m.day}</div>
                  <div className="m-main">
                    <h4>
                      {m.weekday} - {m.title}
                    </h4>
                    <p>{m.body}</p>
                  </div>
                  <div className="m-right">
                    <span className="dur">{m.dur}</span>
                    <span className="lock">{m.free ? <PlayIcon /> : <LockIcon />}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 46 }}>
              <a className="btn btn-primary" href="/community">
                Unlock the full series, join free <Arrow />
              </a>
              <p style={{ fontSize: 13, color: "var(--taupe)", marginTop: 14, fontStyle: "italic" }}>
                The series opens inside the community on Skool, alongside the courses and live
                circles.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        {SHOW_TESTIMONIALS && (
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">In their words</p>
              <h2>Carried by the voice.</h2>
            </div>
            <div className="tgrid">
              {TESTIMONIALS.map((t) => (
                <article className="tcard" key={t}>
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t}&rdquo;</blockquote>
                  <div className="who">
                    <span className="av"></span>
                    <div>
                      <div className="nm">Your listener&apos;s name</div>
                      <div className="mt">Series · placeholder</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p style={{ textAlign: "center", marginTop: 22 }}>
              <span className="tplace">Placeholder, send me your real listener quotes to drop in</span>
            </p>
          </div>
        </section>
        )}

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">whenever you need to come home</span>
          <h2>Let my voice carry you.</h2>
          <p>Rest is not a luxury on this path, it&apos;s how the remembering settles in.</p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn btn-primary" href="/community">
              Join the community <Arrow />
            </a>
            <a className="btn-ghost" href="/oracle">
              Or pull a free oracle card
            </a>
          </div>
          <span className="seal-note">be still, and remember</span>
        </section>

        {/* WHISPER */}
        <section className="liora-band">
          <div className="inner">
            <p className="who">A whisper from Liora</p>
            <p className="whisper">Be gentle. You are remembering something enormous.</p>
            <p className="sig">Liora</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
