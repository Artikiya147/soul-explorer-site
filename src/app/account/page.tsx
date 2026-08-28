import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AccountView } from "./account-view";

export const metadata: Metadata = {
  title: "Your Account · Soul Explorer",
  description: "Your Soul Explorer orders and sessions.",
  robots: { index: false, follow: false },
};

export default function AccountPage() {
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
              <span>Account</span>
            </nav>
            <h1>
              Your <em>account.</em>
            </h1>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <AccountView />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
