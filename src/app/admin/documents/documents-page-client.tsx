"use client";

import { useState } from "react";
import { AdminRail } from "@/components/admin-rail";
import { DocumentsView } from "./documents-view";

export function DocumentsPageClient() {
  const [practice, setPractice] = useState<string>("qhht");

  return (
    <div className="rail-app">
      <AdminRail practice={practice} onPracticeChange={setPractice} />
      <main className="rail-main">
        <div className="rail-page-head">
          <h1 className="rail-page-title">Documents</h1>
          <p className="rail-page-sub">Click any text to edit it.</p>
        </div>
        <DocumentsView practice={practice} />
      </main>
    </div>
  );
}
