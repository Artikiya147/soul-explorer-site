"use client";

import { useEffect, useState } from "react";
import { cartCount, CART_CHANGE_EVENT, CART_OPEN_EVENT } from "@/lib/cart";

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6L5 2H2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
  </svg>
);

const AccountIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
  </svg>
);

export function Nav({ light }: { light?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setCount(cartCount());
    const refresh = () => setCount(cartCount());
    window.addEventListener(CART_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(CART_CHANGE_EVENT, refresh);
  }, []);

  function openCart(e: React.MouseEvent) {
    e.preventDefault();
    setMobileOpen(false);
    window.dispatchEvent(new CustomEvent(CART_OPEN_EVENT));
  }

  return (
    <>
      <nav
        className={`nav${light ? " nav-light" : ""}${scrolled ? " scrolled" : ""}`}
      >
        <a className="nav-brand" href="/">
          <img
            className="bi bi-dark"
            src="/assets/logo-wordmark-trim.png"
            alt="Soul Explorer"
          />
          <img
            className="bi bi-light"
            src="/assets/logo-wordmark-light.png"
            alt="Soul Explorer"
          />
        </a>
        <div className="nav-links">
          <div className="nav-group">
            <button className="nav-trigger">
              Sessions <Chevron />
            </button>
            <div className="nav-menu">
              <a href="/qhht">
                <span>QHHT</span>
                <em>In-person quantum healing hypnosis</em>
              </a>
              <a href="/bqh">
                <span>BQH · Online</span>
                <em>Beyond Quantum Healing, anywhere</em>
              </a>
              <a href="/qmv">
                <span>QMV</span>
                <em>Quantum Mission Visualization</em>
              </a>
              <a href="/soul-readings">
                <span>Soul Readings</span>
                <em>Channeled guidance &amp; astrology</em>
              </a>
              <a href="/soul-systems">
                <span>Soul Systems</span>
                <em>Structure for your practice</em>
              </a>
            </div>
          </div>
          <div className="nav-group">
            <button className="nav-trigger">
              Explore <Chevron />
            </button>
            <div className="nav-menu">
              <a href="/oracle">
                <span>Oracle Reading</span>
                <em className="free">Free · cards + a message</em>
              </a>
              <a href="/meditations">
                <span>Meditations</span>
                <em>The guided series</em>
              </a>
              <a href="/community">
                <span>Community</span>
                <em>Courses on Skool</em>
              </a>
              <a href="/blog">
                <span>Journal</span>
                <em>Reflections &amp; teachings</em>
              </a>
            </div>
          </div>
          <a href="/about">About</a>
          <div className="nav-group">
            <button className="nav-trigger">
              Resources <Chevron />
            </button>
            <div className="nav-menu">
              <a href="/studio">
                <span>Studio</span>
                <em>Web design for practitioners</em>
              </a>
              <a href="/shop">
                <span>Shop</span>
                <em>Sessions &amp; digital guidebooks</em>
              </a>
              <a href="/booking-tool">
                <span>Booking Tool</span>
                <em>Real calendar, Zoom &amp; Whereby</em>
              </a>
              <a href="/la-postina">
                <span>La Postina</span>
                <em>Email marketing, built in</em>
              </a>
              <a href="/oracle-widget">
                <span>Oracle Widget</span>
                <em>A reading tool for your site</em>
              </a>
              <a href="/proposal-builder">
                <span>Proposal Builder</span>
                <em>Coming soon</em>
              </a>
            </div>
          </div>
          <a href="/shop">Shop</a>
          <a href="/contact">Contact</a>
          <a className="nav-cart" href="/account" aria-label="Account">
            <AccountIcon />
          </a>
          <a className="nav-cart" href="/cart" aria-label="Cart" onClick={openCart}>
            <CartIcon />
            <span className={`cart-count${count > 0 ? " show" : ""}`}>{count}</span>
          </a>
          <a className="nav-cta" href="/oracle">
            Free reading
          </a>
        </div>
        <button
          className="nav-burger"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="m-group">Sessions</div>
        <a href="/qhht">QHHT</a>
        <a href="/bqh">BQH · Online</a>
        <a href="/qmv">QMV</a>
        <a href="/soul-readings">Soul Readings</a>
        <a href="/soul-systems">Soul Systems</a>
        <div className="m-group">Explore</div>
        <a href="/oracle">
          Oracle <em>reading</em>
        </a>
        <a href="/meditations">Meditations</a>
        <a href="/community">Community</a>
        <a href="/blog">Journal</a>
        <div className="m-group">More</div>
        <a href="/about">About Alex</a>
        <a href="/studio">The Studio</a>
        <a href="/shop">Shop</a>
        <a href="/booking-tool">Booking Tool</a>
        <a href="/la-postina">La Postina</a>
        <a href="/oracle-widget">Oracle Widget</a>
        <a href="/proposal-builder">Proposal Builder</a>
        <a href="/account">Account</a>
        <a href="/cart" onClick={openCart}>
          Cart{count > 0 ? ` (${count})` : ""}
        </a>
        <a href="/contact">Contact</a>
      </div>
    </>
  );
}
