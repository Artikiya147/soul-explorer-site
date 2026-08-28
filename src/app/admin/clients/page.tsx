import type { Metadata } from "next";
import "@/styles/admin.css";
import { AdminRail } from "@/components/admin-rail";
import { ClientsView } from "./clients-view";

export const metadata: Metadata = {
  title: "Clients · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function ClientsAdminPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <div className="rail-page-head">
            <h1 className="rail-page-title">Clients</h1>
            <p className="rail-page-sub">
              Every client, their session type, where they are in the onboarding pipeline, and a log of emails you&apos;ve sent them.
            </p>
          </div>
          <ClientsView />
        </main>
      </div>
  );
}
