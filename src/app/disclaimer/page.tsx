import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LegalEntity } from "@/components/legal-entity";

export const metadata: Metadata = {
  title: "Disclaimer · Soul Explorer",
  description:
    "Important information about the nature of QHHT and BQH sessions with Soul Explorer, and the terms you agree to before a session.",
  robots: { index: false, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal">
          <div className="legal-head">
            <h1>
              Disclaimer <em>&amp; session terms.</em>
            </h1>
            <p className="legal-updated">Last updated 27 August 2026</p>
          </div>

          <p className="legal-notice">
            This page describes the real terms every client agrees to before
            a QHHT or BQH session with Soul Explorer. A version of this is
            also signed directly before each session; this page exists so
            you can read it in advance, with no pressure, before you book.
          </p>

          <LegalEntity />

          <div className="legal-body">
            <h2>Not a medical service</h2>
            <p>
              QHHT (Quantum Healing Hypnosis Technique) and BQH (Beyond
              Quantum Healing) sessions involve relaxation, visualization,
              hypnosis and stress-reduction techniques. These are{" "}
              <strong>not medical treatment</strong>, and do not replace the
              advice or care of a licensed physician or mental health
              professional. Please continue to consult your own doctor or
              healthcare provider for any medical condition, existing or new,
              and let them know about any changes in your health or in your
              session.
            </p>

            <h2>You are responsible for your own experience</h2>
            <p>
              Ultimate responsibility for any change resulting from a session
              rests with you. All healing is self-healing; I act only as a
              facilitator in the process. You may receive guidance or
              &quot;homework&quot; during a session, understood to come from
              your own higher self, not from me as the practitioner.
            </p>

            <h2>I may decline to proceed</h2>
            <p>
              If I determine that continuing is not in the best interest of
              either of us, I may choose not to proceed with a session. I am
              not responsible for any costs you&apos;ve incurred in
              connection with a declined session, including travel or
              accommodation.
            </p>

            <h2>Recording, and how it&apos;s used</h2>
            <p>
              Sessions are recorded digitally for your own later use. Because
              of the sensitive, energetic nature of this work, recording
              equipment can occasionally be affected, resulting in static or
              partial recordings. Your name and personal details are always
              kept confidential. You&apos;re welcome to share your own
              recording however feels right to you.
            </p>
            <p>
              Sometimes a session surfaces information that feels meant for
              wider benefit. If that happens, I may ask separately for your
              written consent to share an anonymized summary, in audio,
              video, or written form, with your identity and any identifying
              details removed or changed, and only after you&apos;ve approved
              the final content. This is always a separate, explicit consent,
              never assumed.
            </p>

            <h2>Emergency contact</h2>
            <p>
              Before a session begins, I&apos;ll ask you for an emergency
              contact, in case of unforeseen circumstances during our time
              together.
            </p>

            <h2>Governing law</h2>
            <p>This agreement is governed by and interpreted under Italian law.</p>

            <h2>Questions</h2>
            <p>
              If anything here isn&apos;t clear, or you&apos;d like to talk
              it through before booking, reach out to{" "}
              <a href="mailto:hello@soul-explorer.com">hello@soul-explorer.com</a>{" "}
              or start with a{" "}
              <a href="/booking">free discovery call</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
