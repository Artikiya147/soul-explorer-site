import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LegalEntity } from "@/components/legal-entity";

export const metadata: Metadata = {
  title: "Privacy Policy · Soul Explorer",
  description: "How Soul Explorer collects, uses, and protects your personal data.",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal">
          <div className="legal-head">
            <h1>
              Privacy <em>Policy.</em>
            </h1>
            <p className="legal-updated">Last updated 26 August 2026</p>
          </div>

          <p className="legal-notice">
            This policy has been drafted using Soul Explorer&apos;s real business details and
            describes the site&apos;s actual, current data practices as faithfully as possible.
            It is a solid starting point, not a substitute for review by a qualified privacy
            professional before you rely on it for full legal compliance.
          </p>

          <LegalEntity />

          <div className="legal-body">
            <h2>Who we are</h2>
            <p>
              Soul Explorer (soul-explorer.com) is operated by Alessandra Fadda, a sole
              proprietor based in Italy. For the purposes of the GDPR and the Italian Data
              Protection Code, Alessandra Fadda is the data controller for any personal data
              collected through this site.
            </p>

            <h2>What data we collect, and why</h2>
            <p>
              We collect as little as the site's features actually require. Here is every place
              personal data can enter, and what happens to it:
            </p>

            <h3>Browsing the site</h3>
            <p>
              Our hosting provider automatically logs standard technical information (IP
              address, browser type, pages visited, timestamps) for security and to keep the
              site running, as any web server does. We do not run analytics or advertising
              trackers on this site.
            </p>

            <h3>Your cart</h3>
            <p>
              When you add something to your cart, it&apos;s saved only in your own browser&apos;s
              local storage, not on our servers. We never see the contents of your cart until you
              actually reach out to book or pay.
            </p>

            <h3>The free Oracle Reading</h3>
            <p>
              To reveal your reading, we ask for an email address. It&apos;s stored in your
              browser&apos;s local storage to unlock the reading and remember it for you, it is
              not automatically added to any mailing list. If you separately sign up to our
              newsletter, that&apos;s a distinct, clearly-labelled action.
            </p>

            <h3>The Soul Reading Questionnaire</h3>
            <p>
              This intake form asks for sensitive information relevant to a reading, your name,
              date and place of birth, and anything you choose to share about what brings you
              there. When you submit it, it opens your own email client and sends that
              information directly to <strong>hello@soul-explorer.com</strong>. A copy is also
              kept in your browser&apos;s local storage so you can return to your answers. We use
              this information solely to prepare and deliver your reading.
            </p>

            <h3>Booking a session or buying a guidebook</h3>
            <p>
              To book a QHHT, BQH, or reading session, or to purchase a digital guidebook, we
              collect your name, email, and (for sessions) any details relevant to preparing your
              work together, birth date, time of birth, and place of birth where relevant to the
              reading itself. This is processed to perform the service you&apos;ve requested, and
              is never sold or used for anything else.
            </p>

            <h3>Newsletter</h3>
            <p>
              If you sign up for our newsletter, we collect your email address to send it. You
              can unsubscribe at any time using the link in any email, or by writing to us.
            </p>

            <h2>Legal basis for processing</h2>
            <ul>
              <li>
                <strong>Contract:</strong> to book a session, prepare a reading, or fulfil a
                digital purchase you&apos;ve requested.
              </li>
              <li>
                <strong>Consent:</strong> for the newsletter, and for anything you voluntarily
                share in the questionnaire or a free reading.
              </li>
              <li>
                <strong>Legitimate interest:</strong> for keeping the site secure and functioning
                correctly.
              </li>
            </ul>

            <h2>How long we keep it</h2>
            <p>
              Data tied to a booked session or reading (your questionnaire answers, session
              notes) is kept for as long as reasonably needed to deliver the work and respond to
              any follow-up questions, and no longer than required by Italian tax and accounting
              law for invoicing records. Newsletter addresses are kept until you unsubscribe.
              Anything stored only in your own browser&apos;s local storage stays there until you
              clear your browser data, we never receive a copy unless you send it to us directly.
            </p>

            <h2>Who we share it with</h2>
            <p>
              We do not sell or rent your personal data. We share it only with the service
              providers that help us run the site and our practice, our hosting provider, our
              email provider, and, if you book a session, whichever calendar/video tool is used
              to hold that session. Each of these acts under its own privacy obligations.
            </p>

            <h2>Cookies &amp; local storage</h2>
            <p>
              This site does not use tracking or advertising cookies. It uses your browser&apos;s
              local storage for a small number of essential, on-site conveniences, your cart, a
              free reading you&apos;ve unlocked, newsletter sign-up, and questionnaire answers.
              See our <a href="/cookie-policy">Cookie Policy</a> for the full list.
            </p>

            <h2>Your rights</h2>
            <p>Under the GDPR, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Ask us to correct or update it</li>
              <li>Ask us to delete it</li>
              <li>Restrict or object to certain processing</li>
              <li>Receive your data in a portable format</li>
              <li>
                Lodge a complaint with the Italian data protection authority (
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">
                  Garante per la Protezione dei Dati Personali
                </a>
                )
              </li>
            </ul>
            <p>
              To exercise any of these rights, write to{" "}
              <a href="mailto:hello@soul-explorer.com">hello@soul-explorer.com</a>.
            </p>

            <h2>Children</h2>
            <p>
              Soul Explorer&apos;s services are intended for adults. We do not knowingly collect
              personal data from anyone under 16.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If this policy changes, we&apos;ll update the date at the top of this page. For
              significant changes, we&apos;ll make that clear on the site.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy or your data can go to{" "}
              <a href="mailto:hello@soul-explorer.com">hello@soul-explorer.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
