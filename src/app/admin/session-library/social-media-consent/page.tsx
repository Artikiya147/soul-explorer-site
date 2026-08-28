import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "@/styles/admin.css";
import "@/app/admin/session-library/library.css";

export const metadata: Metadata = {
  title: "Social Media & Marketing Consent · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function SocialMediaConsentPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="admin-page consent-print" style={{ maxWidth: 760 }}>
          <div className="admin-head">
            <h1>Video &amp; Social Media Consent</h1>
            <p>
              A separate, explicit consent for using a client&apos;s actual
              recording (not anonymized) for marketing or social media.
              Neither your existing waiver nor your intake form covers this,
              both only cover sharing with identity removed. Print this, or
              copy it into a real PDF, and have the client sign it
              separately, only when you actually want to use footage of
              them, never bundled into the general waiver.
            </p>
          </div>

          <div className="consent-doc">
            <h2>Consent to Use Recording for Marketing &amp; Social Media</h2>
            <p className="consent-sub">
              Soul Explorer · Alessandra Fadda
            </p>

            <p>
              I, ________________________ (&quot;the Client&quot;), separately
              from any general session waiver, give my explicit and voluntary
              consent for Alessandra Fadda (&quot;Soul Explorer&quot;) to use
              the following from my session, with my identity visible and
              not anonymized:
            </p>

            <div className="consent-checklist">
              <label><input type="checkbox" readOnly /> A short video clip of my session or testimonial</label>
              <label><input type="checkbox" readOnly /> Audio excerpts from my recording</label>
              <label><input type="checkbox" readOnly /> Photos taken during or around my session</label>
              <label><input type="checkbox" readOnly /> My first name and general story (e.g. &quot;Giulia, QHHT client&quot;)</label>
            </div>

            <p>on the following platforms:</p>
            <div className="consent-checklist">
              <label><input type="checkbox" readOnly /> Instagram / Facebook</label>
              <label><input type="checkbox" readOnly /> TikTok</label>
              <label><input type="checkbox" readOnly /> The Soul Explorer website</label>
              <label><input type="checkbox" readOnly /> Other: ________________________</label>
            </div>

            <ol>
              <li>
                I understand this consent is entirely separate from, and in
                addition to, the general session waiver, and is never a
                condition of receiving a session. Declining this consent has
                no effect on my session or its price.
              </li>
              <li>
                I understand I will be shown the specific clip, excerpt, or
                content before it is posted anywhere, and my approval of that
                specific piece of content is required before it is published.
              </li>
              <li>
                I understand I can withdraw this consent at any time, in
                writing, for any content not yet published. Content already
                published will be removed within a reasonable time of my
                request wherever practically possible.
              </li>
              <li>
                I understand no payment or compensation is owed to me for
                this use unless separately agreed in writing.
              </li>
              <li>
                This consent is governed by Italian law, including Articles
                13 and 15 of the Italian Constitution regarding personal
                data and prior consent.
              </li>
            </ol>

            <div className="consent-sign-row">
              <div>
                <p className="consent-sign-label">Client signature</p>
                <div className="consent-sign-line" />
                <p className="consent-sign-label">Date</p>
                <div className="consent-sign-line" />
              </div>
              <div>
                <p className="consent-sign-label">Alessandra Fadda</p>
                <div className="consent-sign-line" />
                <p className="consent-sign-label">Date</p>
                <div className="consent-sign-line" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
