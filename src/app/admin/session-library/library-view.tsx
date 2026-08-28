"use client";

import { useMemo, useState } from "react";
import { LIBRARY, CATEGORIES } from "./library-data";

export function LibraryView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LIBRARY.filter((doc) => {
      if (category !== "all" && doc.category !== category) return false;
      if (!q) return true;
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.blurb.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof LIBRARY>();
    for (const doc of filtered) {
      if (!map.has(doc.category)) map.set(doc.category, []);
      map.get(doc.category)!.push(doc);
    }
    return map;
  }, [filtered]);

  return (
    <div className="lib-wrap">
      <div className="lib-controls">
        <input
          type="search"
          placeholder="Search during a session — e.g. “trauma”, “grounding”, “attached entities”…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <div className="lib-cat-pills">
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => setCategory("all")}
          >
            All ({LIBRARY.length})
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c} ({LIBRARY.filter((d) => d.category === c).length})
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="lib-empty">Nothing matches “{query}”.</p>
      ) : (
        [...grouped.entries()].map(([cat, docs]) => (
          <section className="lib-group" key={cat}>
            <h2>{cat}</h2>
            <div className="lib-grid">
              {docs.map((doc) => (
                <a
                  key={doc.title}
                  className="lib-card"
                  href={doc.href || `/session-library/${encodeURIComponent(doc.file)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3>{doc.title}</h3>
                  <p>{doc.blurb}</p>
                </a>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
