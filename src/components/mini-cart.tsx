"use client";

import { useEffect, useState } from "react";
import {
  cartGet,
  cartRemove,
  cartSetQty,
  CART_CHANGE_EVENT,
  CART_OPEN_EVENT,
  type CartItem,
} from "@/lib/cart";

const Close = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function money(n: number) {
  return "€" + (Math.round(n * 100) / 100).toLocaleString("en-US");
}

export function MiniCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(cartGet());
    const refresh = () => setItems(cartGet());
    const openDrawer = () => {
      refresh();
      setOpen(true);
    };
    window.addEventListener(CART_CHANGE_EVENT, refresh);
    window.addEventListener(CART_OPEN_EVENT, openDrawer);
    return () => {
      window.removeEventListener(CART_CHANGE_EVENT, refresh);
      window.removeEventListener(CART_OPEN_EVENT, openDrawer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div
        className={`mini-cart-backdrop${open ? " show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside className={`mini-cart${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="mini-cart-head">
          <h3>Your cart</h3>
          <button aria-label="Close cart" onClick={() => setOpen(false)}>
            <Close />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="mini-cart-empty">
            <p>Your cart is empty, but the path is wide open.</p>
            <a className="btn btn-primary" href="/shop" onClick={() => setOpen(false)}>
              Explore the offerings <Arrow />
            </a>
          </div>
        ) : (
          <>
            <div className="mini-cart-items">
              {items.map((i) => (
                <div className="mini-cart-item" key={i.id}>
                  <div className="mc-img">{i.img && <img src={i.img} alt="" />}</div>
                  <div className="mc-info">
                    <h4>{i.name}</h4>
                    <div className="mc-meta">{i.meta}</div>
                    <div className="qty">
                      <button
                        aria-label="Less"
                        onClick={() => {
                          cartSetQty(i.id, i.qty - 1);
                          setItems(cartGet());
                        }}
                      >
                        –
                      </button>
                      <span>{i.qty}</span>
                      <button
                        aria-label="More"
                        onClick={() => {
                          cartSetQty(i.id, i.qty + 1);
                          setItems(cartGet());
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mc-right">
                    <div className="mc-price">{money(i.price * i.qty)}</div>
                    <button
                      className="ci-remove"
                      onClick={() => {
                        cartRemove(i.id);
                        setItems(cartGet());
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mini-cart-foot">
              <div className="mc-subtotal">
                <span>Subtotal</span>
                <span>{money(total)}</span>
              </div>
              <a className="btn btn-primary" href="/cart" onClick={() => setOpen(false)}>
                View cart &amp; checkout <Arrow />
              </a>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
