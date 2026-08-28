import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Book a Session · Soul Explorer",
  description:
    "Book a QHHT session, BQH online, a Soul Reading, or a free discovery call with Alex Fadda. Real availability, synced to Google Calendar.",
};

const WP_BOOKING_EMBED_URL = "https://soul-explorer.com/booking-embed/";

export default function BookingPage() {
  return (
    <>
      <Nav />

      <main>
        <header className="page-hero grain" style={{ paddingBottom: 30 }}>
          <div className="halo halo-1"></div>
          <div className="wrap">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Book a session</span>
            </nav>
            <span className="kicker">let&apos;s begin</span>
            <h1>
              Book your <em>session.</em>
            </h1>
            <p className="lede">
              Choose what your soul is asking for, then a time that works for
              you. Not sure yet? Start with a free discovery call.
            </p>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <iframe
              src={WP_BOOKING_EMBED_URL}
              title="Book a session with Soul Explorer"
              style={{
                display: "block",
                width: "100%",
                height: "1000px",
                border: "none",
                borderRadius: 16,
              }}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
