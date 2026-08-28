"use client";

import { useEffect, useState } from "react";
import { authGet, authSet, authClear, type SxUser } from "@/lib/auth";
import { ordersGet, type Order } from "@/lib/orders";
import { bookingsGet, type Booking } from "@/lib/bookings";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function money(n: number) {
  return "€" + (Math.round(n * 100) / 100).toLocaleString("en-US");
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function AccountView() {
  const [user, setUser] = useState<SxUser | null | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setUser(authGet());
  }, []);

  useEffect(() => {
    if (user) {
      setOrders(ordersGet());
      setBookings(bookingsGet());
    }
  }, [user]);

  if (user === undefined) return null;

  if (!user) {
    return (
      <div className="acc-gate">
        <h2>Sign in to your account.</h2>
        <p>
          Enter your name and the email you used at checkout to see your
          orders and sessions.
        </p>
        <form
          className="acc-gate-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (!name || !email) return;
            authSet({ name, email });
            setUser({ name, email });
          }}
        >
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
          <button className="btn btn-primary" type="submit">
            Sign in <Arrow />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="acc-wrap">
      <div className="acc-header">
        <div>
          <p className="label" style={{ marginBottom: 6 }}>
            Welcome back
          </p>
          <h2>{user.name.split(" ")[0] || user.name}</h2>
          <p className="acc-email">{user.email}</p>
        </div>
        <button
          className="btn-ghost"
          onClick={() => {
            authClear();
            setUser(null);
          }}
        >
          Sign out
        </button>
      </div>

      <section className="acc-section">
        <h3>Your sessions</h3>
        {bookings.length === 0 ? (
          <p className="acc-empty">
            No sessions booked yet.{" "}
            <a href="/booking">Book one whenever you&apos;re ready →</a>
          </p>
        ) : (
          <div className="acc-list">
            {bookings.map((b) => (
              <div className="acc-row" key={b.id}>
                <div>
                  <h4>{b.sessionType}</h4>
                  <p>{b.slot}</p>
                </div>
                <span className="acc-tag">Confirmed</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="acc-section">
        <h3>Order history</h3>
        {orders.length === 0 ? (
          <p className="acc-empty">
            No orders yet. <a href="/shop">Explore the shop →</a>
          </p>
        ) : (
          <div className="acc-list">
            {orders.map((o) => (
              <div className="acc-row" key={o.id}>
                <div>
                  <h4>
                    {o.id} <span className="acc-date">· {formatDate(o.date)}</span>
                  </h4>
                  <p>{o.items.map((i) => `${i.name} × ${i.qty}`).join(", ")}</p>
                </div>
                <span className="acc-price">{money(o.total)}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
