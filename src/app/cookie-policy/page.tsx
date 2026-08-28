import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LegalEntity } from "@/components/legal-entity";

export const metadata: Metadata = {
  title: "Cookie Policy · Soul Explorer",
  description: "What Soul Explorer stores in your browser, and why.",
  robots: { index: false, follow: true },
};

const ITEMS = [
  {
    key: "sx_cart",
    what: "Your shopping cart",
    why: "Remembers what you've added to cart across pages, so it's still there when you come back.",
    keeps: "Until you clear it or complete a purchase.",
  },
  {
    key: "sx_oracle_email",
    what: "Your free Oracle Reading",
    why: "The email you enter unlocks your reading and lets it be shown to you again on return visits.",
    keeps: "Until you clear your browser data.",
  },
  {
    key: "sx_questionnaire",
    what: "Soul Reading Questionnaire answers",
    why: "Keeps a copy of your submitted answers on your own device so you can revisit them.",
    keeps: "Until you clear your browser data.",
  },
  {
    key: "sx_news_email",
    what: "Newsletter sign-up",
    why: "Remembers that you've already subscribed, so we don't show the sign-up form again.",
    keeps: "Until you clear your browser data.",
  },
  {
    key: "sx_cookie_ack",
    what: "This cookie notice",
    why: "Remembers that you've seen and dismissed this banner.",
    keeps: "Until you clear your browser data.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="legal">
          <div className="legal-head">
            <h1>
              Cookie <em>Policy.</em>
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
            <h2>The short version</h2>
            <p>
              Soul Explorer doesn&apos;t use tracking, analytics, or advertising cookies. The
              only thing this site stores in your browser is a handful of small entries in{" "}
              <strong>local storage</strong> (a browser feature similar to cookies, but which
              never leaves your device or gets sent to our server) that make the site itself work
              better for you, your cart, a reading you&apos;ve unlocked, or answers you&apos;ve
              filled in.
            </p>

            <h2>What&apos;s stored, and why</h2>
            <p>Here is every single entry this site can store in your browser:</p>
            <ul>
              {ITEMS.map((item) => (
                <li key={item.key}>
                  <strong>
                    {item.what} <code>({item.key})</code>
                  </strong>{" "}
                  — {item.why} Kept: {item.keeps}
                </li>
              ))}
            </ul>

            <h2>Cookies vs. local storage</h2>
            <p>
              Strictly speaking, none of the items above are HTTP cookies, they&apos;re browser
              local storage, which behaves similarly (it stays on your device) but is never
              automatically transmitted with every request the way a cookie is. We use this
              plain-language &ldquo;Cookie Policy&rdquo; name because it&apos;s the term most
              people look for, but nothing here is a tracking cookie, and nothing here is shared
              with advertisers or third-party trackers.
            </p>

            <h2>Fonts</h2>
            <p>
              This site&apos;s typefaces are bundled and served from our own server at build
              time, not loaded live from Google Fonts or any other third party, so visiting this
              site doesn&apos;t send a request to Google just to display text.
            </p>

            <h2>Embedded YouTube videos</h2>
            <p>
              Some pages may include an embedded video, played through YouTube&apos;s
              privacy-enhanced player (<code>youtube-nocookie.com</code>). Simply loading the
              page doesn&apos;t set a YouTube cookie; if you press play, YouTube (Google) may set
              its own cookies to run the player, separate from anything this site controls. See{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                Google&apos;s Privacy Policy
              </a>{" "}
              for how they handle that.
            </p>

            <h2>Managing what&apos;s stored</h2>
            <p>
              You can clear everything this site has stored at any time through your browser&apos;s
              settings (usually under Privacy → Clear browsing data → Cookies and site data, or
              equivalent). Doing so will empty your cart and log you out of any unlocked reading,
              but it won&apos;t affect anything already sent to us by email.
            </p>

            <h2>If this changes</h2>
            <p>
              If we ever add analytics or advertising cookies, we&apos;ll update this page and
              show a proper consent choice (accept/reject) before anything non-essential loads,
              not just a notice.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can go to{" "}
              <a href="mailto:hello@soul-explorer.com">hello@soul-explorer.com</a>. See also our{" "}
              <a href="/privacy-policy">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
