"use client";

import { useState } from "react";
import { cartAdd } from "@/lib/cart";

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

type Item = { id: string; name: string; price: number; img?: string; meta?: string };

export function AddToCartButton({
  item,
  label,
  variant = "primary",
}: {
  item: Item;
  label: string;
  variant?: "primary" | "add";
}) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    cartAdd(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  if (variant === "add") {
    return (
      <button className={`btn-add${added ? " added" : ""}`} onClick={handleAdd}>
        <Plus />
        <span className="add-label">{added ? "Added" : "Add"}</span>
      </button>
    );
  }

  return (
    <button className="btn btn-primary" onClick={handleAdd} style={{ cursor: "pointer" }}>
      {added ? "Added to cart ✓" : label}
      <Arrow />
    </button>
  );
}
