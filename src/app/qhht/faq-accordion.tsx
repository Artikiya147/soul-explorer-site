"use client";

import { useState } from "react";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div
          className={`faq-item${openIndex === i ? " open" : ""}`}
          key={item.q}
        >
          <button
            className="faq-q"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.q} <span className="ic"></span>
          </button>
          <div
            className="faq-a"
            style={{ maxHeight: openIndex === i ? "400px" : undefined }}
          >
            <div className="inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
