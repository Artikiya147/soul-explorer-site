import type { Metadata } from "next";
import "@/styles/admin.css";
import "@/app/admin/session-library/library.css";
import { AdminRail } from "@/components/admin-rail";
import { NavigatorView } from "./navigator-view";

export const metadata: Metadata = {
  title: "Session Navigator · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function NavigatorPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <div className="rail-page-head">
            <h1 className="rail-page-title">Live session</h1>
            <p className="rail-page-sub">
              If you&apos;re stuck in a situation mid-session: search it, open it, read it. Thirteen real scenarios, from induction to closing.
            </p>
          </div>
          <NavigatorView />
        </main>
      </div>
  );
}
