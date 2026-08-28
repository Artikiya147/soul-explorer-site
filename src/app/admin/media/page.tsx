import type { Metadata } from "next";
import "@/styles/admin.css";
import { AdminRail } from "@/components/admin-rail";
import { MediaAdmin } from "./media-admin";

export const metadata: Metadata = {
  title: "Site Media · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function MediaAdminPage() {
  return (
      <div className="rail-app">
        <AdminRail />
        <main className="rail-main">
          <MediaAdmin />
        </main>
      </div>
  );
}
