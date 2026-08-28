import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Phase } from "./phase";
import { FaqAccordion } from "./faq-accordion";
import { PrepGuideForm } from "./prep-guide-form";
import "./qhht.css";

export const metadata: Metadata = {
  title: "QHHT · Quantum Healing Hypnosis Technique — Soul Explorer",
  description:
    "QHHT with Alex Fadda: a guided hypnosis session to revisit past lives and speak with your own Subconscious. In person · from 350€, includes your recording.",
};

const CHECKS = [
  "A physical symptom that hasn't fully explained itself",
  "Fears or patterns that feel older than this life",
  "A relationship you can't quite place but deeply feel",
  "The question of why you're here, and what's next",
  "Grief, transition, or a threshold you're standing at",
  "A simple, honest longing to remember who you are",
];

const RIBBON = [
  { n: "before", h: "Prepare gently", p: "Rest the night before. Bring your questions and an open, curious heart. Eat lightly." },
  { n: "arrive", h: "We talk", p: "An unhurried conversation, usually 2 hours, to know you and shape your questions together." },
  { n: "journey", h: "The hypnosis", p: "Around 1.5–2 hours. You rest; I guide. Everything is recorded for you to keep." },
  { n: "after", h: "Integration", p: "We come back slowly and talk through what arrived. The unfolding continues for weeks." },
];

const FIELD_NOTES = [
  {
    tag: "the body",
    quote:
      "The pain in her shoulder is the weight she's carried for everyone else. She may put it down now. She has our permission, and she always had her own.",
    who: "the Subconscious, on chronic pain",
  },
  {
    tag: "the fear",
    quote:
      "She drowned, in the life before this one. That is why the water frightens her. It is finished now. She is safe. She can learn to float.",
    who: "the Subconscious, on a lifelong phobia",
  },
  {
    tag: "the purpose",
    quote:
      "He keeps asking what his purpose is, as if it were hidden. His purpose is the kindness he already gives without noticing. Tell him to notice.",
    who: "the Subconscious, on life purpose",
  },
];

const FAQS = [
  {
    q: "Will I be asleep, or aware?",
    a: "You'll be deeply relaxed but aware, it's the same drowsy state you pass through every night between waking and sleep. You stay in control the whole time, and most people remember a great deal afterwards.",
  },
  {
    q: "What if I don't see past lives?",
    a: "Experience varies, some people see vivid film, others feel, hear or simply know. There's no wrong way. Your Subconscious brings forward exactly what's needed, in the language your soul speaks.",
  },
  {
    q: 'Is it safe? Can I get "stuck"?',
    a: "Completely safe. You cannot get stuck, it's a natural state you enter and leave easily, and I'm with you the entire time, guiding gently.",
  },
  {
    q: "Do you guarantee healing?",
    a: "No honest practitioner can. Healing in QHHT comes from your own Subconscious, in alignment with what you're ready for and what serves your path. Many experience profound shifts; all are met with the truth they came for. QHHT complements, and never replaces, medical care.",
  },
  {
    q: "In person or online?",
    a: "QHHT is offered in person only, in Italy or during private retreats in Thailand. If you can't travel or need a session online, its sister method BQH, Beyond Quantum Healing, is designed for online sessions and reaches the same depths.",
  },
];

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

export default function QHHTPage() {
  return (
    <>
      <Nav light />

      <main>
        {/* HERO */}
        <header className="page-hero page-hero--dark qhht-hero grain grain-dark">
          <div className="wrap">
            <div className="ph-text">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="sep">·</span>
                <span>Sessions</span>
                <span className="sep">·</span>
                <span>QHHT</span>
              </nav>
              <span className="kicker">the quantum way home</span>
              <h1>
                QHHT: meeting the part of you that <em>already knows.</em>
              </h1>
              <p className="lede">
                The Quantum Healing Hypnosis Technique guides you into a
                deep, naturally occurring state, the same place you drift
                through each night, to remember other lifetimes and speak
                with your own inner knowing.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/booking">
                  Book a QHHT session <Arrow />
                </a>
                <a className="btn-ghost btn-ghost-light" href="#phases">
                  How a session unfolds
                </a>
              </div>
              <p className="qhht-location-note">
                QHHT is held in person, in Italy or during private retreats
                in Thailand. Need a session online?{" "}
                <a href="/bqh">Try BQH instead</a>.
              </p>
            </div>
            <div className="ph-art">
              <div className="polaroid" style={{ transform: "rotate(3deg)" }}>
                <span className="tape"></span>
                <div className="ph">
                  <img src="/assets/alex-face.png" alt="A past life, an ancient world" />
                </div>
                <div className="cap">a soul, remembered</div>
              </div>
            </div>
          </div>
        </header>

        {/* TORN PAPER · PAST LIVES */}
        <section className="torn-section">
          <div className="torn-text">
            <p className="label">Before this life</p>
            <h2 className="torn-head">
              You have lived before. Some of those lives still{" "}
              <em>echo in this one.</em>
            </h2>
            <p className="body">
              In the theta state the door opens on its own: a road you
              never walked, a face you somehow know, a name from a
              century you never studied. QHHT is the gentle return to who
              you have already been.
            </p>
            <div className="torn-actions">
              <a className="btn btn-primary" href="/booking">
                Begin the remembering <Arrow />
              </a>
              <a className="btn-ghost" href="#phases">
                How a session unfolds
              </a>
            </div>
          </div>
          <div className="torn-photo-wrap">
            <div
              className="torn-photo vintage"
              style={{ backgroundImage: "url(/assets/vintage.png)" }}
            >
              <img src="/assets/vintage.png" alt="A vintage past-life photograph" />
              <div className="vtint"></div>
              <div className="vfilter"></div>
            </div>
            <span className="torn-note" style={{ left: "58%", bottom: "9%" }}>
              a life you
              <br />
              once wore
            </span>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="section">
          <div
            className="wrap"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,6vw,90px)", alignItems: "start" }}
          >
            <div style={{ order: 2 }}>
              <p className="label" style={{ marginBottom: 20 }}>
                What it is
              </p>
              <div className="prose">
                <p className="lead">
                  QHHT was created by the late Dolores Cannon across
                  nearly fifty years of hypnosis work. It rests on one
                  quiet idea: a part of you has never forgotten who you
                  are.
                </p>
                <p>
                  In a session, I guide you into the{" "}
                  <strong>theta state</strong> the drowsy, in-between
                  place you pass through as you fall asleep and as you
                  wake. It isn&apos;t sleep, and it isn&apos;t ordinary
                  waking. It&apos;s the doorway through which memory,
                  image and feeling move freely.
                </p>
                <p>
                  From there, two things happen. You revisit{" "}
                  <strong>other lifetimes</strong> your soul has lived,
                  and then we invite forward the part Dolores called the{" "}
                  <strong>Subconscious</strong>: the vast, loving
                  intelligence that knows exactly why you came, and what
                  you&apos;re ready to release.
                </p>
                <p>
                  Along the way you may meet the{" "}
                  <strong>guides, angels and loved ones</strong> who walk
                  beside you, and see the lessons still asking to be
                  learned. Speaking through your Subconscious, we scan your{" "}
                  <strong>etheric and energetic body</strong> for what&apos;s
                  blocking you, and reveal the mission you came here to
                  live.
                </p>
              </div>
            </div>
            <div style={{ position: "relative", order: 1 }}>
              <div
                className="polaroid dolores-photo"
                style={{ transform: "rotate(2.4deg)", maxWidth: 400, margin: "0 auto" }}
              >
                <span className="tape"></span>
                <div className="ph" style={{ height: 440 }}>
                  <img
                    src="/assets/luminous-figure.png"
                    alt="A soul in a past life, ancient world"
                  />
                </div>
                <div className="cap">a lifetime remembered</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IT'S FOR */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">What it&apos;s for</p>
              <h2>
                People come to QHHT when something is asking to be
                understood.
              </h2>
              <p className="sub">
                Maybe you&apos;re stuck somewhere you can&apos;t quite
                name, carrying a hurt that has no clear beginning. Maybe
                you&apos;ve always felt different, awake in a world that
                mostly stays asleep, and you&apos;re ready to understand
                why.
              </p>
            </div>
            <div className="checks" style={{ maxWidth: 880, margin: "0 auto" }}>
              {CHECKS.map((c) => (
                <div className="check" key={c}>
                  <Check />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE PHASES */}
        <section className="section" id="phases">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">How a session unfolds</p>
              <h2>
                <em>Five</em> movements, one journey home.
              </h2>
              <p className="sub">
                Every session is unhurried. Nothing is forced. We simply
                follow what your soul brings forward, in its own order and
                its own time.
              </p>
            </div>

            <Phase
              image="/assets/questions-note.png"
              cap="your questions"
              rotate={-2.4}
              bare
              num="one"
              title="The Questions"
              tag="before we begin, a conversation"
              quote="Bring everything. No question is too small for the part of you that knows."
            >
              <p>
                We start with time together, often two hours or more,
                simply talking. Your life, your story, the threads that
                brought you here. There&apos;s no rush and nothing you
                need to perform.
              </p>
              <p>
                Together we write your <strong>list of questions</strong>
                everything you&apos;d ask if you could speak directly to
                the wisest part of yourself. About your body, your
                relationships, your purpose, your path. These become the
                questions I&apos;ll carry into the session for you.
              </p>
            </Phase>

            <Phase
              reversed
              image="/assets/induction-red-bird.png"
              cap="the doorway"
              rotate={2.6}
              num="two"
              title="The Induction"
              tag="crossing the threshold"
              quote="It feels like remembering, not imagining."
            >
              <p>
                You lie down, comfortable and warm. With my voice as a
                thread, you move gently through relaxation into the{" "}
                <strong>theta state</strong> that soft, drowsy place
                between waking and sleep.
              </p>
              <p>
                You don&apos;t lose control and you don&apos;t go
                unconscious. You simply soften enough that the thinking
                mind steps aside, and a deeper seeing opens. We begin with
                a cloud, a journey, a descent, and then the first scene
                arrives, often more vivid than you expect.
              </p>
            </Phase>
          </div>
        </section>

        <section className="induction-drift">
          <img src="/assets/induction-drift-banner.png" alt="Drifting through the clouds, into the theta state" />
          <span className="induction-drift-note">the descent begins</span>
        </section>

        <section className="section" id="phases-cont">
          <div className="wrap">
            <Phase
              image="/assets/morning-figure.png"
              cap="the lives"
              rotate={-1.8}
              num="three"
              title="The Three Lives Remembered"
              tag="what your soul chooses to show"
              quote="Three doors open. Each one was already yours."
            >
              <p>
                Your Subconscious selects the lifetimes most relevant to
                your questions, often we move through{" "}
                <strong>two or three scenes</strong>, sometimes more. A
                pair of feet on a dusty road. A name. A season. A death,
                witnessed gently and without fear.
              </p>
              <p>
                You may find yourself a healer, a farmer, a wanderer, a
                mother in a century you&apos;ve never studied. The
                details aren&apos;t the point, it&apos;s the{" "}
                <strong>thread</strong> running between those lives and
                this one. Again and again, people meet the exact root of
                what they came to understand.
              </p>
            </Phase>

            <Phase
              reversed
              image="/assets/deepening-falling.png"
              cap="the deepening"
              rotate={2.2}
              num="four"
              title="The Deepening"
              tag="from a life into the source of it"
              quote="You go past the life, into what was living it."
            >
              <p>
                After the final scene, we move past the individual
                lifetime entirely. I guide you deeper still, out of the
                personality, beyond the story, into the field where all
                of it is held.
              </p>
              <p>
                This is the bridge. The small self rests, and something
                far larger draws near. People describe it as warmth, as
                light, as a presence that has known them forever.
                It&apos;s from this depth that the next movement becomes
                possible.
              </p>
            </Phase>

            <Phase
              image="/assets/subconscious-doorway.png"
              cap="the SC"
              rotate={-2.6}
              num="five"
              title="The Subconscious"
              tag="the part of you that already knows"
              quote="And then a voice that is unmistakably yours begins to answer everything."
            >
              <p>
                Now we invite forward what Dolores called the{" "}
                <strong>Subconscious</strong> though it is far more than
                that word suggests. It is the higher mind, the oversoul,
                the loving intelligence that has never once left you.
              </p>
              <p>
                I read your questions, one by one, and it answers,
                through you, in your own voice. It explains the lives you
                saw. It speaks to your body and, where it&apos;s
                appropriate and you&apos;re willing, offers{" "}
                <strong>healing</strong>. It is endlessly kind,
                occasionally funny, and always exactly true.
              </p>
            </Phase>
          </div>
        </section>

        {/* THE DAY / PRACTICAL */}
        <section className="section section--dark grain grain-dark">
          <div className="wrap">
            <div className="section-head">
              <p className="label">The session, in practice</p>
              <h2>What to expect on the day.</h2>
            </div>
            <div className="ribbon">
              {RIBBON.map((r) => (
                <div className="r" key={r.n}>
                  <div className="n">{r.n}</div>
                  <h4>{r.h}</h4>
                  <p>{r.p}</p>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 60,
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid rgba(196,181,160,.22)",
                paddingTop: 34,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontStyle: "italic",
                    fontSize: 28,
                    color: "var(--lavender-soft)",
                  }}
                >
                  Allow 4–5 hours · one session is complete in itself
                </div>
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    letterSpacing: ".06em",
                    color: "rgba(245,240,235,.6)",
                    marginTop: 8,
                  }}
                >
                  In person · The Soul Journey from 350€ · includes your
                  recording
                </div>
              </div>
              <a className="btn btn-light" href="/booking">
                Book your session <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* FIELD NOTES */}
        <section className="section">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Field notes from sessions</p>
              <h2>What the Subconscious has said.</h2>
              <p className="sub">
                Fragments of what&apos;s come through in real sessions,
                shared anonymously, with permission. The voice is always
                tender, and always exactly true.
              </p>
            </div>
            <div className="tgrid">
              {FIELD_NOTES.map((f) => (
                <article className="tcard" key={f.tag}>
                  <div
                    className="stars"
                    style={{ fontFamily: "var(--script)", fontSize: 24, letterSpacing: 0 }}
                  >
                    {f.tag}
                  </div>
                  <blockquote>&ldquo;{f.quote}&rdquo;</blockquote>
                  <div className="who">
                    <div>
                      <div className="nm">{f.who}</div>
                      <div className="mt">shared with permission · placeholder</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 40 }}>
              <div className="audio-test">
                <button className="play" aria-label="Play clip">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="meta">
                  <h4>Hear the Subconscious speak</h4>
                  <p>A short, anonymized clip from a session, add your audio file here.</p>
                </div>
                <div className="bar">
                  <i></i>
                </div>
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: "var(--taupe)",
                  marginTop: 14,
                  fontStyle: "italic",
                }}
              >
                Placeholder, with client consent, a real session clip is
                extraordinary proof.
              </p>
            </div>
          </div>
        </section>

        {/* PREP LEAD MAGNET */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="prep-card grain grain-dark">
              <div>
                <p className="eyebrow">Free guide</p>
                <h2>How to prepare for your session.</h2>
                <p>
                  Not quite ready to book? Begin here. A gentle guide to
                  preparing your heart, your questions and your body, sent
                  straight to your inbox.
                </p>
                <PrepGuideForm />
              </div>
              <div className="prep-visual">
                <a href="/guides/how-to-prepare-for-your-session.pdf" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/prep-guide-cover.png" alt="How to Prepare for Your Session, the free QHHT guide" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="section">
          <div className="wrap">
            <div className="quote-band">
              <div className="mark">&ldquo;</div>
              <p>
                I came in with a pain my doctors couldn&apos;t name. I
                left understanding where it began, three lifetimes ago,
                and within a week it had eased. I still listen to my
                recording when I need to remember.
              </p>
              <div className="by">
                Your client&apos;s name ·{" "}
                <span className="tplace" style={{ verticalAlign: "middle" }}>
                  placeholder · send me the real words
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--tint grain">
          <div className="wrap">
            <div className="section-head center">
              <p className="label">Gentle answers</p>
              <h2>The questions most people ask.</h2>
            </div>
            <FaqAccordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </section>

        {/* CTA */}
        <section className="cta-band grain">
          <span className="kicker">when you&apos;re ready</span>
          <h2>Come home to yourself.</h2>
          <p>
            We begin with a conversation, no pressure, no performance.
            Just two souls, meeting at the right time.
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a className="btn btn-primary" href="/booking">
              Book a discovery call <Arrow />
            </a>
            <a className="btn-ghost" href="/oracle">
              Or pull a free oracle card
            </a>
          </div>
          <span className="seal-note">your soul has been here before</span>
        </section>
      </main>

      <Footer />
    </>
  );
}
