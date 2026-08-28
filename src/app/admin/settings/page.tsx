import type { Metadata } from "next";
import "@/styles/admin.css";
import { AdminRail } from "@/components/admin-rail";
import { SettingsView } from "./settings-view";

export const metadata: Metadata = {
  title: "Settings · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <div className="rail-page-head">
            <h1 className="rail-page-title">Settings</h1>
            <p className="rail-page-sub">
              Practices and document templates. Add a new holistic technique any time — everything here is editable.
            </p>
          </div>
          <SettingsView />
        </main>
      </div>
  );
}
