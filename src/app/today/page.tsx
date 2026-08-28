import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { TodayCard } from "./today-card";

export const metadata: Metadata = {
  title: "Card of the Day, A Free Daily Whisper · Soul Explorer",
  description:
    "A free daily card from Whispers from the Womb of Stars, with a message from Liora. Return each day for a new whisper for your soul.",
  openGraph: {
    type: "website",
    title: "Card of the Day, a free daily whisper",
    description: "A daily card and a message from Liora. Return each day for a new whisper.",
    images: ["/assets/portrait-hero.png"],
  },
};

export default function TodayPage() {
  return (
    <>
      <Nav />

      <main>
        <header className="page-hero grain" style={{ paddingBottom: 30 }}>
          <div className="halo halo-1"></div>
          <div className="wrap" style={{ textAlign: "center" }}>
            <nav
              className="breadcrumb"
              aria-label="Breadcrumb"
              style={{ justifyContent: "center" }}
            >
              <a href="/">Home</a>
              <span className="sep">·</span>
              <span>Card of the Day</span>
            </nav>
            <span className="kicker">free · a new card each dawn</span>
            <h1 style={{ margin: "0 auto" }}>
              Today&apos;s <em>whisper.</em>
            </h1>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 30 }}>
          <div className="wrap">
            <div style={{ maxWidth: 920, margin: "0 auto" }}>
              <TodayCard />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
