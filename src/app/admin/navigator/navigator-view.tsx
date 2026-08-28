"use client";

import { useMemo, useState } from "react";
import { NAV_ENTRIES, NAV_ALWAYS } from "@/lib/navigator-data";

export function NavigatorView() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const tags = useMemo(() => Array.from(new Set(NAV_ENTRIES.map((n) => n.tag))), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return NAV_ENTRIES.filter((n) => {
      const matchTag = tag === "all" || n.tag === tag;
      const matchQ = !q || (n.q + " " + n.a + " " + n.tag).toLowerCase().includes(q);
      return matchTag && matchQ;
    });
  }, [query, tag]);

  return (
    <div className="qref-wrap">
      <div className="lib-controls">
        <input
          type="search"
          placeholder="If you're stuck mid-session: search the situation, open, read…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <div className="lib-cat-pills">
          <button className={tag === "all" ? "active" : ""} onClick={() => setTag("all")}>
            All ({NAV_ENTRIES.length})
          </button>
          {tags.map((t) => (
            <button key={t} className={tag === t ? "active" : ""} onClick={() => setTag(t)}>
              {t} ({NAV_ENTRIES.filter((n) => n.tag === t).length})
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="lib-empty">Nothing matches “{query}”.</p>
      ) : (
        <div className="qref-list">
          {filtered.map((n) => {
            const open = openId === n.id;
            return (
              <div className={`qref-item${open ? " open" : ""}`} key={n.id}>
                <button className="qref-q" onClick={() => setOpenId(open ? null : n.id)}>
                  <span className="qref-tag">{n.tag}</span>
                  <span>{n.q}</span>
                </button>
                {open && <div className="qref-a">{n.a}</div>}
              </div>
            );
          })}
        </div>
      )}

      <div className="qref-always">
        <p className="doc-eyebrow" style={{ marginBottom: 10 }}>Always</p>
        <div className="qref-always-body">{NAV_ALWAYS}</div>
      </div>
    </div>
  );
}
