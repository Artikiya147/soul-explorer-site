"use client";

import { useEffect, useState } from "react";
import { cartGet, cartRemove, cartSetQty, type CartItem } from "@/lib/cart";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function money(n: number) {
  return "€" + (Math.round(n * 100) / 100).toLocaleString("en-US");
}

export function CartView() {
  const [items, setItems] = useState<CartItem[] | null>(null);

  useEffect(() => {
    setItems(cartGet());
  }, []);

  function refresh() {
    setItems(cartGet());
  }

  if (items === null) return null;

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty, but the path is wide open.</p>
        <a className="btn btn-primary" href="/shop">
          Explore the offerings <Arrow />
        </a>
      </div>
    );
  }

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="cart-wrap">
      <div className="cart-items">
        {items.map((i) => (
          <div className="cart-item" key={i.id}>
            <div className="ci-img">{i.img && <img src={i.img} alt="" />}</div>
            <div>
              <h4>{i.name}</h4>
              <div className="ci-meta">{i.meta}</div>
              <div className="qty">
                <button
                  aria-label="Less"
                  onClick={() => {
                    cartSetQty(i.id, i.qty - 1);
                    refresh();
                  }}
                >
                  –
                </button>
                <span>{i.qty}</span>
                <button
                  aria-label="More"
                  onClick={() => {
                    cartSetQty(i.id, i.qty + 1);
                    refresh();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="ci-right">
              <div className="ci-price">{money(i.price * i.qty)}</div>
              <button
                className="ci-remove"
                onClick={() => {
                  cartRemove(i.id);
                  refresh();
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Summary</h3>
        <div className="row">
          <span>Subtotal</span>
          <span>{money(total)}</span>
        </div>
        <div className="row">
          <span>Sessions are booked after checkout</span>
          <span></span>
        </div>
        <div className="total">
          <span className="t-lbl">Total</span>
          <span className="t-val">{money(total)}</span>
        </div>
        <a className="btn btn-primary" href="/checkout">
          Checkout <Arrow />
        </a>
        <p
          style={{
            fontSize: 12,
            color: "var(--taupe)",
            textAlign: "center",
            marginTop: 14,
            fontStyle: "italic",
          }}
        >
          Secure checkout connects to your payment + booking flow.
        </p>
      </div>
    </div>
  );
}
