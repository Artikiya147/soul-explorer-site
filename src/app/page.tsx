import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { FindYourPath } from "@/components/find-your-path";
import { SHOW_TESTIMONIALS } from "@/lib/testimonials-flag";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        {/* ================= 01 · HERO ================= */}
        <header className="hero">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="eyebrow hero-eyebrow">
                QHHT · Soul Readings · Past-Life Regression
              </p>
              <h1 className="display hero-display">
                Your soul
                <br />
                <span className="l2">has been</span>
                <br />
                <em>here before.</em>
              </h1>
              <p className="lede hero-lede">
                Past-life regression hypnosis, soul readings and future-life
                visualization with Alex Fadda, hypnotherapy that helps you
                remember who you are, and build the life that follows.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#letter">
                  Book a discovery call
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a className="btn-ghost" href="#offerings">
                  The offerings
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="polaroid hero-photo">
                <span className="tape"></span>
                <div className="ph">
                  <img
                    src="/assets/portrait-hero.png"
                    alt="Portrait of Alex Fadda"
                  />
                </div>
                <div className="cap">Alex Fadda</div>
                <div className="badge hero-badge">
                  20
                  <br />
                  26
                </div>
              </div>
              <span className="script hero-script">Soul Explorer</span>
            </div>
          </div>
          <div className="scroll-cue">
            <span className="ln"></span>
            <span>Scroll</span>
          </div>
        </header>

        {/* ================= 02 · DARK MOMENT ================= */}
        <section className="dark-moment grain grain-dark">
          <p className="big">This is where the remembering begins.</p>
          <div className="mini">
            <span className="eyebrow">
              A space held with care · since long before now
            </span>
          </div>
          <div className="dark-body">
            <p>
              Maybe you&apos;re stuck somewhere you can&apos;t quite name.
              Something hurts, and you&apos;re not sure why. You sense
              there&apos;s more to life than this, more to you than this,
              and some days it feels like you&apos;re the only one awake
              in a world still sleepwalking.
            </p>
            <p>
              In session, your own consciousness shows you what&apos;s
              there to resolve, past lives where a pattern first took
              hold, or a moment in this life that was never fully
              understood. You&apos;ll meet the lessons still asking to be
              learned, and the guides, angels and loved ones who walk
              beside you. Speaking through your higher self, we scan your
              etheric and energetic body for what&apos;s blocking you, and
              reveal the mission you came here to live.
            </p>
          </div>
          <div className="env-scene">
            <div className="env-body"></div>
            <div className="env-mouth"></div>
            <div className="env-poly">
              <img
                src="/design-assets/68dd30a9-3532-43d3-84a6-b15a2c8fabab.png"
                alt="Taking a photograph out of the envelope"
              />
            </div>
            <div className="env-flap"></div>
          </div>
        </section>

        {/* ================= 03 · OFFERINGS ================= */}
        <section className="offerings" id="offerings">
          <div className="wrap">
            <div className="sec-head">
              <p className="label">The Offerings</p>
              <h2 className="h2">
                <em>Three</em> ways in
              </h2>
              <p className="scr">choose what your soul is asking for</p>
            </div>
            <div className="offers">
              <article className="offer">
                <div className="polaroid">
                  <span
                    className="tape"
                    style={{ top: "-15px", left: "30px", transform: "rotate(-4deg)" }}
                  ></span>
                  <div className="ph">
                    <img
                      src="/assets/offer-journey.png"
                      alt="A past life, an ancient world"
                    />
                  </div>
                  <div className="cap">the deep journey</div>
                </div>
                <div className="offer-meta">
                  <span className="offer-tag">Hypnosis · In-Person</span>
                  <h3>QHHT</h3>
                  <p>
                    The Soul Journey: QHHT past-life regression hypnosis and
                    a soul reading, woven into one session, your past lives,
                    your higher self, and the map you came in with.
                  </p>
                  <div className="offer-foot">
                    <span className="offer-price">from 350€</span>
                    <a className="btn-ghost" href="/qhht">
                      Explore QHHT
                    </a>
                  </div>
                </div>
              </article>

              <article className="offer">
                <div className="polaroid">
                  <span
                    className="tape"
                    style={{ top: "-15px", right: "30px", transform: "rotate(3deg)" }}
                  ></span>
                  <div className="ph">
                    <img
                      src="/assets/offer-reading.png"
                      alt="A past life, another century"
                    />
                  </div>
                  <div className="cap">a reading</div>
                </div>
                <div className="offer-meta">
                  <span className="offer-tag">Reading · Online or In-Person</span>
                  <h3>Soul Reading</h3>
                  <p>
                    Channeled guidance, astrology and numerology read
                    together in one session, what&apos;s moving through
                    your life right now, and why.
                  </p>
                  <div className="offer-foot">
                    <span className="offer-price">130€</span>
                    <a className="btn-ghost" href="/soul-readings">
                      Explore readings
                    </a>
                  </div>
                </div>
              </article>

              <article className="offer">
                <div className="polaroid">
                  <span
                    className="tape"
                    style={{ top: "-15px", left: "40px", transform: "rotate(-2deg)" }}
                  ></span>
                  <div className="ph">
                    <img
                      src="/assets/offer-systems.png"
                      alt="A past life, temple, ruins, sea"
                    />
                  </div>
                  <div className="cap">the framework</div>
                </div>
                <div className="offer-meta">
                  <span className="offer-tag">For Practitioners · Website &amp; Business Build</span>
                  <h3>Soul Systems</h3>
                  <p>
                    A digital home for the practice you&apos;re building, a
                    reading, a session and a website, and the systems that
                    let people find you and book you. Many clients get here
                    after finding their own path through a session first.
                  </p>
                  <div className="offer-foot">
                    <span className="offer-price">on request</span>
                    <a className="btn-ghost" href="/soul-systems">
                      Explore
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <p className="offers-note">
              Many clients go on to train and practice this work
              themselves, that path starts with{" "}
              <a href="/soul-systems">Soul Systems</a>.
            </p>
          </div>
        </section>

        {/* ================= 03.5 · FIND YOUR PATH ================= */}
        <FindYourPath />

        {/* ================= 03.6 · CARD OF DAY TEASER ================= */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap" style={{ maxWidth: 760 }}>
            <a className="cotd-teaser" href="/today">
              <div className="mini">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="#D6C8F5"
                  strokeWidth="2"
                >
                  <circle cx="50" cy="50" r="28" opacity=".7" />
                  <path d="M50 12 L54 44 L50 50 L46 44 Z" fill="#D6C8F5" stroke="none" />
                  <circle cx="50" cy="50" r="3" fill="#D6C8F5" stroke="none" />
                </svg>
              </div>
              <div className="tx">
                <div className="k">Free · Card of the Day</div>
                <div className="h">Pull today&apos;s whisper from the stars</div>
              </div>
              <span className="go">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </section>

        {/* ================= 04 · HOW IT WORKS ================= */}
        <section className="how" id="how">
          <div className="how-bg" aria-hidden="true">
            <svg viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path
                d="M 120 260 Q 400 60 600 220 T 1000 90"
                fill="none"
                stroke="var(--turquoise-deep)"
                strokeWidth="1.5"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
              <circle cx="120" cy="260" r="4" fill="var(--turquoise-deep)" />
              <circle cx="600" cy="220" r="4" fill="var(--turquoise-deep)" />
              <circle cx="1000" cy="90" r="4" fill="var(--turquoise-deep)" />
              <circle cx="230" cy="90" r="2.5" fill="var(--lavender-deep)" opacity=".7" />
              <circle cx="760" cy="60" r="2" fill="var(--lavender-deep)" opacity=".6" />
              <circle cx="1140" cy="230" r="2.5" fill="var(--lavender-deep)" opacity=".6" />
              <circle cx="380" cy="330" r="2" fill="var(--turquoise-deep)" opacity=".5" />
            </svg>
          </div>
          <div className="wrap how-inner">
            <div className="how-head">
              <p className="label">How it works</p>
              <h2>You&apos;ve always sensed there was more. Here&apos;s why.</h2>
            </div>
            <div className="steps">
              <div className="step">
                <div className="num">
                  one<em>01</em>
                </div>
                <h4>We meet</h4>
                <p>
                  A discovery call, no pressure. We find the path that
                  fits where you are.
                </p>
                <span className="dash" />
              </div>
              <div className="step">
                <div className="num">
                  two<em>02</em>
                </div>
                <h4>We work together</h4>
                <p>
                  Your session or reading, held the way that fits what
                  you chose.
                </p>
                <span className="dash" />
              </div>
              <div className="step">
                <div className="num">
                  three<em>03</em>
                </div>
                <h4>You receive</h4>
                <p>
                  Your reading, your notes, a recording where there is
                  one, to return to whenever you need them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 05 · ABOUT ================= */}
        <section className="about" id="about">
          <div className="wrap about-grid">
            <div className="about-photo-wrap">
              <div className="polaroid about-photo">
                <span className="tape"></span>
                <div className="ph">
                  <img
                    src="/assets/portrait-hero.png"
                    alt="Portrait of Alex Fadda"
                  />
                </div>
                <div className="cap">Alex</div>
              </div>
              <span className="about-cred c1">
                <span className="pin">✦</span> Level 2 QHHT
              </span>
              <span className="about-cred c2">
                Soul Reader
                <br />+ Channeler
              </span>
              <span className="about-cred c3">
                24 years
                <br />
                building the web <span className="pin">✦</span>
              </span>
            </div>
            <div className="about-body">
              <p className="label">About Alex</p>
              <h2 className="h2">
                Between <em>two worlds</em>,
                <br />
                and at home in both.
              </h2>
              <p className="about-quote">
                &ldquo;I&apos;ve been reading souls all my life whilst
                experiencing a vast spectrum of contact beyond the veil,
                beyond dimensions since birth and I&apos;ve also been
                building websites for 24 years. I know what it feels like
                to stand between two worlds, and I know how to make both
                visible, this is why I have dedicated my life to help you
                remember yourself.&rdquo;
              </p>
              <p>
                Some people come for the regression. Some come for
                clarity, a reading, a thread they can&apos;t quite name.
                What I offer is presence, a space considered enough to
                hold whatever surfaces.
              </p>
              <div className="cred-row">
                <span className="cred-chip">Level 2 QHHT</span>
                <span className="cred-chip">Soul Reader</span>
                <span className="cred-chip">Channeler</span>
                <span className="cred-chip">Astrologer</span>
                <span className="cred-chip">Numerologist</span>
                <span className="cred-chip">24 yrs digital</span>
              </div>
              <p style={{ marginTop: 24 }}>
                <a className="btn-ghost" href="/about">
                  Read my full story →
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ================= 05.6 · CREDENTIALS ================= */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Certified &amp; accredited</p>
              <h2>Years of study behind the intuition.</h2>
              <p className="sub">
                I&apos;m accredited in every method I practice. The
                intuition is mine; the training makes it safe to trust.
              </p>
            </div>
            <div className="creds">
              <span className="cred-logo">
                <img
                  src="/assets/badge-qhht.png"
                  alt="QHHT, Quantum Healing Hypnosis Technique"
                />
              </span>
              <span className="cred-logo">
                <img
                  src="/assets/badge-bqh.png"
                  alt="Beyond Quantum Healing Certified Practitioner"
                />
              </span>
              <span className="cred-logo">
                <img
                  src="/assets/badge-priority.png"
                  alt="The Priority Academy"
                />
              </span>
            </div>
            <div
              className="cert-cards"
              style={{ marginTop: 54, maxWidth: 980, marginLeft: "auto", marginRight: "auto" }}
            >
              <a
                className="cert-card"
                href="/assets/cert-bqh.jpg"
                target="_blank"
                rel="noopener"
              >
                <div className="cert-thumb">
                  <img
                    src="/assets/cert-bqh.jpg"
                    alt="Beyond Quantum Healing certificate"
                  />
                </div>
                <div className="cc-name">Beyond Quantum Healing</div>
                <div className="cc-by">Certificate of Completion · 2026</div>
              </a>
              <a
                className="cert-card"
                href="/assets/cert-crystal.jpg"
                target="_blank"
                rel="noopener"
              >
                <div className="cert-thumb">
                  <img
                    src="/assets/cert-crystal.jpg"
                    alt="Crystal Healing certificate"
                  />
                </div>
                <div className="cc-name">Crystal Healing</div>
                <div className="cc-by">Certified Crystal Healer · 2024</div>
              </a>
              <a
                className="cert-card"
                href="/assets/cert-priority.png"
                target="_blank"
                rel="noopener"
              >
                <div className="cert-thumb">
                  <img
                    src="/assets/cert-priority.png"
                    alt="Meditation Practitioner &amp; Teacher, The Priority Academy"
                  />
                </div>
                <div className="cc-name">
                  Meditation Practitioner &amp; Teacher
                </div>
                <div className="cc-by">The Priority Academy · 2026</div>
              </a>
            </div>
          </div>
        </section>

        {/* ================= 05.5 · TESTIMONIALS ================= */}
        {SHOW_TESTIMONIALS && (
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">In their words</p>
              <h2>What they carried home.</h2>
            </div>
            <div className="tgrid">
              <article className="tcard">
                <div className="stars">★★★★★</div>
                <blockquote>
                  &ldquo;I came in with a pain my doctors couldn&apos;t
                  name. I left understanding where it began, and within a
                  week it had eased.&rdquo;
                </blockquote>
                <div className="who">
                  <span className="av"></span>
                  <div>
                    <div className="nm">Your client&apos;s name</div>
                    <div className="mt">QHHT · placeholder</div>
                  </div>
                </div>
              </article>
              <article className="tcard">
                <div className="stars">★★★★★</div>
                <blockquote>
                  &ldquo;She named the exact pattern I&apos;d been
                  circling for a decade. I left with language for my own
                  life.&rdquo;
                </blockquote>
                <div className="who">
                  <span className="av"></span>
                  <div>
                    <div className="nm">Your client&apos;s name</div>
                    <div className="mt">Soul Reading · placeholder</div>
                  </div>
                </div>
              </article>
              <article className="tcard">
                <div className="stars">★★★★★</div>
                <blockquote>
                  &ldquo;The most profound few hours of my life. I still
                  listen to my recording whenever I need to remember who I
                  am.&rdquo;
                </blockquote>
                <div className="who">
                  <span className="av"></span>
                  <div>
                    <div className="nm">Your client&apos;s name</div>
                    <div className="mt">BQH Online · placeholder</div>
                  </div>
                </div>
              </article>
            </div>
            <p style={{ textAlign: "center", marginTop: 22 }}>
              <span className="tplace">
                Placeholder, send me your real testimonials to drop in
              </span>
            </p>
          </div>
        </section>
        )}

        {/* ================= 06 · STUDIO ================= */}
        <section className="studio-band grain grain-dark" id="studio">
          <div className="studio-bg" aria-hidden="true">
            a home that holds it well
          </div>
          <div className="wrap studio-stack">
            <p className="eyebrow">
              Soul Explorer Studio · Web design for practitioners
            </p>
            <div className="polaroid studio-photo">
              <span className="tape"></span>
              <div className="ph">
                <img
                  src="/assets/offer-journey.png"
                  alt="A practice with a digital home"
                />
              </div>
              <div className="cap">made with care</div>
            </div>
            <h2>
              Your practice deserves a <em>digital home</em> that holds it
              well.
            </h2>
            <p>
              I build websites for practitioners who are ready to be
              found, the same hands behind this page. The site you&apos;re
              reading <em>is</em> the demonstration.
            </p>
            <div className="studio-actions">
              <a className="btn btn-light" href="/studio">
                Visit the Studio
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="btn-ghost btn-ghost-light" href="/studio">
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* ================= 07 · THE LETTER ================= */}
        <section className="letter" id="letter">
          <div className="letter-photo">
            <div className="polaroid">
              <span className="tape"></span>
              <div className="ph">
                <img
                  src="/assets/letter-yourself.png"
                  alt="The best investment you can make is in yourself"
                />
              </div>
            </div>
          </div>
          <div className="letter-sheet">
            <h2>Dear fellow explorer,</h2>
            <div className="letter-body">
              <p>
                If something brought you here, <em>trust that</em>.
                Nothing about this work is accidental, not the timing,
                not the pull, not the small voice that said{" "}
                <em>read a little further</em>.
              </p>
              <p>
                When you&apos;re ready, we&apos;ll begin with a
                conversation. No pressure, no performance. Just two
                souls, meeting at the right time.
              </p>
              <div className="letter-sign">
                <div className="sig">Alex Fadda</div>
                <div className="role">
                  Soul Explorer · QHHT · Soul Readings
                </div>
              </div>
            </div>
            <div className="seal">
              <a className="btn btn-primary" href="/booking">
                Book your discovery call
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="seal-note">it begins with a single call</span>
            </div>
          </div>
        </section>
      </main>

      {/* ================= LIORA WHISPER (sitewide) ================= */}
      <section className="liora-band">
        <div className="inner">
          <p className="who">A whisper from Liora</p>
          <p className="whisper">
            The part of you that worries is not the part of you that
            knows.
          </p>
          <p className="sig">Liora</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
