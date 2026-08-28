"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cartGet, cartClear, type CartItem } from "@/lib/cart";
import { orderAdd, type Order } from "@/lib/orders";
import { authGet } from "@/lib/auth";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function money(n: number) {
  return "€" + (Math.round(n * 100) / 100).toLocaleString("en-US");
}

const SESSION_IDS = new Set(["journey", "bqh", "reading"]);

export function CheckoutView() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[] | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setItems(cartGet());
    const user = authGet();
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  if (items === null) return null;

  if (order) {
    const needsBooking = order.items.some((i) => SESSION_IDS.has(i.id));
    return (
      <div className="checkout-success">
        <div className="cs-mark">✓</div>
        <h2>Thank you, {order.name.split(" ")[0] || "friend"}.</h2>
        <p>
          Your order <strong>{order.id}</strong> is confirmed. A receipt has
          been sent to {order.email}.
        </p>
        <div className="cs-summary">
          {order.items.map((i) => (
            <div className="row" key={i.id}>
              <span>
                {i.name} × {i.qty}
              </span>
              <span>{money(i.price * i.qty)}</span>
            </div>
          ))}
          <div className="row total">
            <span>Total paid</span>
            <span>{money(order.total)}</span>
          </div>
        </div>
        {needsBooking ? (
          <>
            <p className="cs-next">
              One or more of your items is a live session. Let&apos;s find a
              time that works for you.
            </p>
            <a className="btn btn-primary" href="/booking">
              Pick your session time <Arrow />
            </a>
          </>
        ) : (
          <a className="btn btn-primary" href="/account">
            View your account <Arrow />
          </a>
        )}
        <a className="btn-ghost" href="/shop" style={{ marginTop: 14 }}>
          Continue exploring
        </a>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty, so there&apos;s nothing to check out yet.</p>
        <a className="btn btn-primary" href="/shop">
          Explore the offerings <Arrow />
        </a>
      </div>
    );
  }

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const placed = orderAdd({ items: items!, total, name, email });
    setTimeout(() => {
      cartClear();
      setSubmitting(false);
      setOrder(placed);
      router.refresh();
    }, 500);
  }

  return (
    <form className="checkout-wrap" onSubmit={handleSubmit}>
      <div className="checkout-form">
        <section className="co-block">
          <h3>Contact</h3>
          <div className="co-row">
            <input
              type="text"
              placeholder="Full name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </section>

        <section className="co-block">
          <h3>Billing address</h3>
          <input
            type="text"
            placeholder="Address, city, country"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </section>

        <section className="co-block">
          <h3>Payment</h3>
          <input
            type="text"
            inputMode="numeric"
            placeholder="Card number"
            required
            value={card}
            onChange={(e) => setCard(e.target.value)}
          />
          <div className="co-row">
            <input
              type="text"
              placeholder="MM / YY"
              required
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
            <input
              type="text"
              inputMode="numeric"
              placeholder="CVC"
              required
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
          <p className="co-note">
            Payment processing connects here as part of a Studio build.
            Nothing is charged on this preview site.
          </p>
        </section>
      </div>

      <div className="checkout-summary">
        <h3>Order summary</h3>
        {items.map((i) => (
          <div className="row" key={i.id}>
            <span>
              {i.name} × {i.qty}
            </span>
            <span>{money(i.price * i.qty)}</span>
          </div>
        ))}
        <div className="row total">
          <span>Total</span>
          <span>{money(total)}</span>
        </div>
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          {submitting ? "Processing…" : `Pay ${money(total)}`} <Arrow />
        </button>
        <p className="co-secure">Secure checkout · your soul&apos;s next step</p>
      </div>
    </form>
  );
}
