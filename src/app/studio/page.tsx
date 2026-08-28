import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./studio.css";

export const metadata: Metadata = {
  title: "Soul Explorer Studio, the Practice Platform for Practitioners",
  description:
    "Not just a website. A complete practice platform, booking, shop, oracle tools, questionnaires and email marketing, built by Alex Fadda, 22 years of web design and a decade of soul work.",
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IcCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
  </svg>
);
const IcBag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);
const IcCards = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="5" width="10" height="15" rx="1.5" transform="rotate(-8 9 12.5)" />
    <rect x="9" y="6" width="10" height="15" rx="1.5" />
  </svg>
);
const IcForm = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 8h8M8 12h8M8 16h5" strokeLinecap="round" />
  </svg>
);
const IcMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcCourse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" strokeLinejoin="round" />
    <path d="M7 10.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-5.5" />
  </svg>
);
const IcDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 2h9l5 5v15H6z" strokeLinejoin="round" />
    <path d="M15 2v5h5" strokeLinejoin="round" />
    <path d="M9 13h6M9 17h6M9 9h2" strokeLinecap="round" />
  </svg>
);

const PLATFORM = [
  { icon: <IcCalendar />, title: "Booking", body: "Sessions, discovery calls and courses booked straight onto your calendar, no back-and-forth email, no third-party link that sends people away from your site.", href: "/booking-tool" },
  { icon: <IcBag />, title: "Shop", body: "Sell readings, guidebooks, meditations and digital offerings directly from your own home online, not rented shelf space on somebody else's marketplace.", href: "/shop" },
  { icon: <IcCards />, title: "Oracle & interactive tools", body: "A bespoke interactive experience built around your own deck, your own voice, your own magic, the kind of free tool that turns a stranger into a seeker into a client.", href: "/oracle-widget" },
  { icon: <IcForm />, title: "Questionnaires", body: "Client intake woven into the booking flow itself, so you arrive at every reading or session already knowing exactly what they're carrying.", href: "/questionnaire" },
  { icon: <IcMail />, title: "Email marketing", body: "Welcome sequences and a whisper-style newsletter, built in from day one, so the souls who find you once keep finding their way back.", href: "/la-postina" },
  { icon: <IcDoc />, title: "Proposals & contracts", body: "Session packages, agreements, and onboarding, all in one polished link, launching soon inside every Studio platform.", href: "/proposal-builder", soon: true },
  { icon: <IcCourse />, title: "Courses", body: "A space to teach what only you know, self-paced or live, launching soon inside every Studio platform.", soon: true },
];

const METHOD = [
  { n: "one", title: "Oracle Reading", body: "We begin by listening. A channeled reading, woven with your astrology and numerology, surfaces what you're actually building, and why, before a single pixel is placed." },
  { n: "two", title: "Regression", body: "A QHHT or BQH session clears what's distorted and activates the mission underneath. The old story that no longer fits gets released, not carried into the design." },
  { n: "three", title: "QMV Manifestation", body: "You navigate to the timeline your practice already belongs to, and activate it. The site we build after this isn't a guess. It's already been located." },
];

export default function StudioPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="st-hero grain grain-dark">
          <div className="wrap">
            <div>
              <p className="eyebrow">Soul Explorer Studio · The practice platform for practitioners</p>
              <h1>
                Not just a website. A <em>complete practice</em>, built to hold you.
              </h1>
              <p>
                Booking, shop, oracle tools, questionnaires and email marketing, done for you and
                built into one calm home online. The same platform behind Soul Explorer itself,
                built by someone who lives in both worlds: 22 years of web design, and a decade
                of soul work.
              </p>
              <div className="st-actions">
                <a className="btn btn-primary" href="#invest">
                  Start a conversation <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#platform">
                  What&apos;s included
                </a>
              </div>
            </div>
            <div className="st-hero-art">
              <div className="polaroid st-poly" style={{ transform: "rotate(3deg)" }}>
                <span className="tape"></span>
                <div className="ph">
                  <img src="/assets/studio-polaroid.png" alt="A considered, editorial site" />
                </div>
                <div className="cap">your practice, online</div>
              </div>
              <span className="st-hero-script">made with care</span>
            </div>
          </div>
        </header>

        {/* BELIEF */}
        <section className="belief">
          <div className="wrap">
            <p className="label">The premise</p>
            <h2>
              A brochure isn&apos;t a business. Your site should be a{" "}
              <em>working practice</em>, not just a pretty page about one.
            </h2>
            <p className="belief-lede">
              Maybe you&apos;re stitching together a booking link, a
              Linktree and a template that never quite felt like you.
              Maybe you&apos;re losing clients in the gap between a DM
              and an actual appointment. A practice deserves a home that
              works as hard as you do.
            </p>
          </div>
        </section>

        {/* PLATFORM */}
        <section className="platform" id="platform">
          <div className="pf-head">
            <div className="inner">
              <p className="label">The platform</p>
              <h2>
                Everything your practice runs on, <em>in one place.</em>
              </h2>
            </div>
          </div>
          <div className="pf-grid">
            {PLATFORM.map((p) => {
              const Tag = p.href ? "a" : "div";
              return (
                <Tag
                  className={`pf-card${p.soon ? " soon" : ""}`}
                  key={p.title}
                  {...(p.href ? { href: p.href } : {})}
                >
                  {p.soon && <span className="soon-tag">Coming soon</span>}
                  <div className="ic">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </Tag>
              );
            })}
          </div>
        </section>

        {/* METHOD */}
        <section className="method">
          <div className="wrap">
            <div className="method-head">
              <p className="label">How I actually build</p>
              <h2>
                I don&apos;t start with a brief. I start with an{" "}
                <em>investigation.</em>
              </h2>
              <p>
                Before any design work begins, we find your true calling together, the same way
                I&apos;d guide any seeker home. This is the Soul Systems arc, applied to your
                business instead of your biography.
              </p>
            </div>
            <div className="method-steps">
              {METHOD.map((m) => (
                <div className="method-step" key={m.n}>
                  <span className="mn">{m.n}</span>
                  <h4>{m.title}</h4>
                  <p>{m.body}</p>
                </div>
              ))}
            </div>
            <div className="method-cta">
              <a className="btn-ghost btn-ghost-light" href="/soul-systems">
                See the full Soul Systems arc →
              </a>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="pkg-section grain grain-dark" id="packages">
          <div className="pkg-head">
            <p className="label">The offerings</p>
            <h2>
              Three ways to <em>work together.</em>
            </h2>
          </div>
          <div className="folder-wrap">
            <div className="folder-card">
              <span className="folder-tab">Package One</span>
              <div className="folder-body">
                <div className="folder-inner">
                  <div>
                    <h3 className="pkg-title">The Soul Page</h3>
                    <p className="pkg-desc">
                      For the practitioner who needs one page that does the quiet work, a landing
                      or sales page that holds a single offering with grace, and a real booking
                      flow behind it. Over two weeks we clarify the message, shape the words, and
                      build a page that feels like you and gently invites the right people in.
                    </p>
                    <div className="pkg-rows">
                      <div className="pkg-row">
                        <span className="k">Timeframe</span>
                        <span className="v">2 weeks</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Investment</span>
                        <span className="v">from €900</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Availability</span>
                        <span className="v">2 spots per month</span>
                      </div>
                    </div>
                    <a className="btn btn-primary pkg-cta" href="/booking">
                      Enquire about this <Arrow />
                    </a>
                  </div>
                  <div className="pkg-art">
                    <div className="pkg-polaroid" style={{ transform: "rotate(4deg)" }}>
                      <div className="ph">
                        <div className="ph-fill">a calm one-page mockup, or your work</div>
                      </div>
                      <div className="cap">one quiet page</div>
                    </div>
                    <svg className="pkg-thread" viewBox="0 0 120 150" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M60 4 C 90 30, 30 50, 70 80 S 30 120, 64 146" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="folder-card">
              <span className="folder-tab">Package Two</span>
              <div className="folder-body">
                <div className="folder-inner">
                  <div>
                    <h3 className="pkg-title">The Complete Practice</h3>
                    <p className="pkg-desc">
                      For the practitioner ready for a full working platform, not just a website.
                      We begin with the investigation, oracle reading, regression, QMV
                      manifestation, then build the whole home around what we find: booking,
                      shop, your own interactive oracle tool, questionnaires and email marketing,
                      all in one place, done for you.
                    </p>
                    <ul className="pkg-includes">
                      <li>
                        <Check /> Booking, shop &amp; questionnaires built in
                      </li>
                      <li>
                        <Check /> A bespoke oracle or interactive lead tool
                      </li>
                      <li>
                        <Check /> Email marketing set up and ready to send
                      </li>
                      <li>
                        <Check /> The full discovery journey, before we design
                      </li>
                    </ul>
                    <div className="pkg-rows">
                      <div className="pkg-row">
                        <span className="k">Timeframe</span>
                        <span className="v">6 weeks</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Investment</span>
                        <span className="v">from €2,800</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Availability</span>
                        <span className="v">1 spot per month</span>
                      </div>
                    </div>
                    <a className="btn btn-primary pkg-cta" href="/booking">
                      Enquire about this <Arrow />
                    </a>
                  </div>
                  <div className="pkg-art">
                    <div className="pkg-quote" style={{ transform: "rotate(3deg)" }}>
                      <svg className="clip" viewBox="0 0 26 64" fill="none" stroke="#8a8275" strokeWidth="2.4">
                        <path d="M13 60 L13 12 a8 8 0 0 1 0 0 M7 52 L7 14 a6 6 0 0 1 12 0 L19 46" strokeLinecap="round" />
                      </svg>
                      <p>Your presence is not what you say about yourself. It is what becomes true when you stop explaining.</p>
                      <div className="sig">Alex Fadda</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="folder-card">
              <span className="folder-tab">Package Three</span>
              <div className="folder-body">
                <div className="folder-inner">
                  <div>
                    <h3 className="pkg-title">The Tune-Up</h3>
                    <p className="pkg-desc">
                      One focused session together. Bring your biggest question, your
                      positioning, your homepage, your pricing, your about page, and we work
                      through it with fresh eyes and honest care. Perfect if you are mostly there
                      and simply need a clear outside perspective to carry you across the line.
                    </p>
                    <div className="pkg-rows">
                      <div className="pkg-row">
                        <span className="k">Timeframe</span>
                        <span className="v">90 minutes</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Investment</span>
                        <span className="v">from €150</span>
                      </div>
                      <div className="pkg-row">
                        <span className="k">Availability</span>
                        <span className="v">Rolling sessions</span>
                      </div>
                    </div>
                    <a className="btn btn-primary pkg-cta" href="/booking">
                      Enquire about this <Arrow />
                    </a>
                  </div>
                  <div className="pkg-art">
                    <div className="pkg-polaroid" style={{ transform: "rotate(3deg)" }}>
                      <div className="ph">
                        <div className="ph-fill">a site detail, or your work</div>
                      </div>
                      <div className="cap">a clear hour</div>
                    </div>
                    <div className="pkg-swatch">
                      <div className="chip"></div>
                      <div className="lab">
                        <b>Turquoise Soul</b>
                        <span>#5CE1E6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="st-process" id="process">
          <div className="wrap">
            <p className="label">How we work, day to day</p>
            <div className="pr-grid">
              <div className="pr-step">
                <div className="num">one</div>
                <h4>We meet</h4>
                <p>A call to understand your practice, your people, and the feeling you want to hold.</p>
              </div>
              <div className="pr-step">
                <div className="num">two</div>
                <h4>We investigate</h4>
                <p>Oracle reading, regression, QMV, we find your true calling before we design a thing.</p>
              </div>
              <div className="pr-step">
                <div className="num">three</div>
                <h4>I build</h4>
                <p>The full platform, section by section, shown to you as it takes shape.</p>
              </div>
              <div className="pr-step">
                <div className="num">four</div>
                <h4>You launch &amp; grow</h4>
                <p>Your home goes live, booking and email marketing already running, ready to be found.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="proof grain grain-dark">
          <div className="wrap">
            <div>
              <p className="eyebrow">The proof</p>
              <h2>
                The site you arrived through <em>is</em> the demonstration.
              </h2>
              <p>
                Soul Explorer was designed and built with the same hands, the same platform, the
                same care I&apos;ll bring to yours. Booking, oracle, meditations, shop, it&apos;s
                all here, and all live. If it made you feel something, that feeling is the work.
              </p>
              <div className="st-actions">
                <a className="btn btn-light" href="/">
                  See the practice site <Arrow />
                </a>
              </div>
            </div>
            <div className="proof-art">
              <div className="proof-env" style={{ transform: "rotate(-3deg)" }}>
                <img src="/assets/studio-envelope.png" alt="A site delivered like a letter" />
              </div>
            </div>
          </div>
        </section>

        {/* INVEST / CLOSE */}
        <section className="invest" id="invest">
          <p className="label">Work with me</p>
          <h2>Let&apos;s build your home.</h2>
          <p>
            A handful of practitioner platforms each season, by application, so each one gets
            the attention it deserves. Investment shared on our first call.
          </p>
          <div>
            <a className="btn btn-primary" href="/booking">
              Book a discovery call <Arrow />
            </a>
            <span className="seal-note">or write to hello@soul-explorer.com</span>
          </div>
        </section>

        {/* WHISPER */}
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
