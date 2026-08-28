import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ContactForm } from "./contact-form";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact · Soul Explorer",
  description:
    "Get in touch with Alex Fadda, or book a QHHT, BQH, Soul Reading or Soul Systems session directly.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Z" strokeLinejoin="round" />
    <path d="M8.5 9.5c0 3.5 2.5 6 6 6 .4 0 .8-.4.8-.9l-.2-1.3-2-1-.9.9a5 5 0 0 1-2.4-2.4l.9-.9-1-2-1.3-.2c-.5 0-.9.4-.9.8Z" />
  </svg>
);

const IcMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const IcCal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" strokeLinecap="round" />
  </svg>
);

const SOCIALS = [
  { label: "@alexsoulexplorer", href: "#" },
  { label: "@webstylist.studio", href: "#" },
  { label: "Skool Community", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
];

const SESSIONS = [
  {
    tag: "In person · Italy",
    name: "QHHT",
    desc: "Past life regression and higher-self dialogue. For deep healing, clarity, or the feeling that something is waiting to be released.",
    price: "from €350",
    href: "/qhht",
  },
  {
    tag: "Online · Worldwide",
    name: "BQH",
    desc: "The same depth as QHHT, held over video. No travel needed, ideal if you're not in Italy or simply prefer your own space.",
    price: "from €350",
    href: "/bqh",
  },
  {
    tag: "Online · 90 minutes",
    name: "Soul Reading",
    desc: "Channeled guidance with astrology and numerology. For clarity on your season, your patterns, and your next true step.",
    price: "€130",
    href: "/soul-readings",
  },
  {
    tag: "Full arc · 3 sessions",
    name: "Soul Systems",
    desc: "Reading, QHHT, and QMV. The complete arc for those called to build from their mission, practitioners, creatives, founders.",
    price: "On request",
    href: "/soul-systems",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav light />

      <main>
        <header className="page-hero page-hero--taupe grain">
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Contact</span>
            </nav>
            <span className="kicker">let&apos;s begin</span>
            <h1>
              Get in touch, <em>or book directly.</em>
            </h1>
            <p className="lede">
              Whether you know exactly what you need or you&apos;re still
              finding the words, I&apos;m here. Send a message, book a
              session, or simply say hello.
            </p>
          </div>
        </header>

        <section className="section section--dark2 grain grain-dark">
          <div className="wrap contact-grid">
            <div>
              <p className="label" style={{ color: "var(--lavender-soft)" }}>
                Find me here
              </p>
              <div className="contact-card">
                <div className="contact-row">
                  <span className="contact-ic">
                    <IcWhatsapp />
                  </span>
                  <div>
                    <p className="contact-row-label">WhatsApp</p>
                    <a href="https://wa.me/447915607621">+44 7915 607621</a>
                    <p className="contact-row-sub">
                      International · tap to message
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-ic">
                    <IcMail />
                  </span>
                  <div>
                    <p className="contact-row-label">Email</p>
                    <a href="mailto:alex@soul-explorer.com">
                      alex@soul-explorer.com
                    </a>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-ic">
                    <IcClock />
                  </span>
                  <div>
                    <p className="contact-row-label">Response time</p>
                    <p className="contact-row-sub">
                      I reply to every message within 48 hours. For session
                      questions, I prefer a real conversation over quick
                      answers.
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-ic">
                    <IcPin />
                  </span>
                  <div>
                    <p className="contact-row-label">Location</p>
                    <p className="contact-row-sub">
                      In-person sessions: Italy &amp; Thailand
                      <br />
                      Online sessions: worldwide
                    </p>
                    <p className="contact-row-meta">P.Iva 04149780126</p>
                  </div>
                </div>
                <div className="contact-row">
                  <span className="contact-ic">
                    <IcCal />
                  </span>
                  <div>
                    <p className="contact-row-label">Book directly</p>
                    <a href="#book">Use the booking flow below</a>
                    <p className="contact-row-sub">
                      to choose your session, pick a date, and secure your
                      time.
                    </p>
                  </div>
                </div>
              </div>

              <p
                className="label"
                style={{ color: "var(--lavender-soft)", marginTop: 32 }}
              >
                Follow the journey
              </p>
              <div className="contact-socials">
                {SOCIALS.map((s) => (
                  <a href={s.href} key={s.label}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="label" style={{ color: "var(--lavender-soft)" }}>
                Send a message
              </p>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Not sure which session?</p>
              <h2>
                Every journey starts with a <em>free call.</em>
              </h2>
              <p className="sub">
                A 20-minute discovery call is free. We talk, I listen, and
                together we find what&apos;s right for you, no pressure, no
                obligation.
              </p>
            </div>
            <div className="contact-sessions">
              {SESSIONS.map((s) => (
                <a className="contact-session-card" href={s.href} key={s.name}>
                  <span className="tag">{s.tag}</span>
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                  <span className="price">{s.price}</span>
                </a>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a className="btn btn-primary" href="/booking">
                Book a free discovery call <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section section--tint" id="book">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Book your session</p>
              <h2>
                Ready when <em>you are.</em>
              </h2>
            </div>
            <div className="contact-booking-embed">
              <iframe
                src="https://soul-explorer.com/booking-embed/"
                title="Book a session with Soul Explorer"
              />
            </div>
            <p className="contact-trouble">
              Having trouble?{" "}
              <a href="https://wa.me/447915607621">Message me on WhatsApp</a>
            </p>
          </div>
        </section>

        <div className="contact-ticker">
          <div className="contact-ticker-track">
            <span>your soul has been here before ✦ the timing is always right ✦ trust what called you here ✦ </span>
            <span>your soul has been here before ✦ the timing is always right ✦ trust what called you here ✦ </span>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
