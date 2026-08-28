"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { practicesGet, PRACTICES_CHANGE_EVENT, type Practice } from "@/lib/practices";
import { signOut } from "@/app/admin/login/sign-out-action";

const NAV_ITEMS = [
  { href: "/admin/clients", label: "Clients", ico: "◇" },
  { href: "/admin/documents", label: "Documents", ico: "▤" },
  { href: "/admin/navigator", label: "Live session", ico: "✦" },
  { href: "/admin/session-library", label: "Library", ico: "▥" },
  { href: "/admin/media", label: "Media", ico: "▧" },
  { href: "/admin/settings", label: "Settings", ico: "⚙" },
];

export function AdminRail({
  practice,
  onPracticeChange,
}: {
  practice?: string;
  onPracticeChange?: (p: string) => void;
}) {
  const pathname = usePathname();
  const [practices, setPractices] = useState<Practice[]>([]);

  useEffect(() => {
    const refresh = () => { practicesGet().then(setPractices); };
    refresh();
    window.addEventListener(PRACTICES_CHANGE_EVENT, refresh);
    return () => window.removeEventListener(PRACTICES_CHANGE_EVENT, refresh);
  }, []);

  return (
    <aside className="rail">
      <a className="rail-head" href="/admin">
        <div className="rail-brand">soul <em>explorer</em></div>
        <div className="rail-tag">Studio · Client management</div>
      </a>

      {onPracticeChange && practice && (
        <div className="prac">
          <div className="mini-label">Practice</div>
          <div className="prac-grid">
            {practices.map((p) => (
              <button
                key={p.id}
                className={`prac-btn${practice === p.id ? " active" : ""}`}
                style={practice === p.id ? { ["--prac-acc" as string]: p.accent } : undefined}
                onClick={() => onPracticeChange(p.id)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <nav className="rail-nav">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            className={`rail-nav-item${pathname === item.href ? " active" : ""}`}
            href={item.href}
          >
            <span className="ico">{item.ico}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="rail-foot">
        <div className="rail-note">
          Autosave on. Data stays in this browser.
        </div>
        <form action={signOut}>
          <button type="submit" className="rail-signout">
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
