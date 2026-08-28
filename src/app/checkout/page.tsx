import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CheckoutView } from "./checkout-view";

export const metadata: Metadata = {
  title: "Checkout · Soul Explorer",
  description: "Complete your order.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
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
              <a href="/cart">Cart</a>
              <span className="sep">·</span>
              <span>Checkout</span>
            </nav>
            <h1>
              Complete your <em>order.</em>
            </h1>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <CheckoutView />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
