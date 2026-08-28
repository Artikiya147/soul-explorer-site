import type { Metadata } from "next";
import "@/styles/admin.css";
import "./library.css";
import { AdminRail } from "@/components/admin-rail";
import { LibraryView } from "./library-view";

export const metadata: Metadata = {
  title: "Session Library · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function SessionLibraryPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <div className="rail-page-head">
            <h1 className="rail-page-title">Session library</h1>
            <p className="rail-page-sub">
              Every script, reference and client-communication document in one searchable place, so you can find the right one fast if you&apos;re stuck mid-session.
            </p>
          </div>
          <LibraryView />
        </main>
      </div>
  );
}
