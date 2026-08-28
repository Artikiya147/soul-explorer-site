import type { Metadata } from "next";
import "@/styles/admin.css";
import { AdminRail } from "@/components/admin-rail";

export const metadata: Metadata = {
  title: "Admin · Soul Explorer",
  robots: { index: false, follow: false },
};

const TOOLS = [
  {
    href: "/admin/clients",
    title: "Clients",
    desc: "Client info, onboarding pipeline, email log, welcome-on-board.",
  },
  {
    href: "/admin/documents",
    title: "Document builder",
    desc: "Waivers, agreements, transcripts and final analyses — QHHT, QMV, BQH, or Studio.",
  },
  {
    href: "/admin/session-library",
    title: "Session library",
    desc: "Every script and reference doc, searchable, for use during a live session.",
  },
  {
    href: "/admin/navigator",
    title: "Session navigator",
    desc: "Stuck mid-session? Search the situation, open, read. Thirteen real scenarios.",
  },
  {
    href: "/admin/media",
    title: "Site media",
    desc: "Upload and manage images/video across the site's placeholder slots.",
  },
  {
    href: "/admin/settings",
    title: "Settings",
    desc: "Letterhead, practices, logos, and a backup of everything.",
  },
];

export default function AdminIndexPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <div className="rail-page-head">
            <h1 className="rail-page-title">Admin</h1>
            <p className="rail-page-sub">Internal tools for running Soul Explorer. Not indexed, not public.</p>
          </div>
          <div className="admin-tool-grid">
            {TOOLS.map((t) => (
              <a className="admin-tool-card" href={t.href} key={t.href}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </a>
            ))}
          </div>
        </main>
      </div>
  );
}
