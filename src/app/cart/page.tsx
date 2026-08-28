import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CartView } from "./cart-view";

export const metadata: Metadata = {
  title: "Your Cart · Soul Explorer",
  description: "Your Soul Explorer cart.",
  robots: { index: false, follow: false },
};

export default function CartPage() {
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
              <a href="/shop">Shop</a>
              <span className="sep">·</span>
              <span>Cart</span>
            </nav>
            <h1>
              Your <em>cart.</em>
            </h1>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 20 }}>
          <div className="wrap">
            <CartView />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
