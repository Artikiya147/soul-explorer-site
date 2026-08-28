import type { Metadata } from "next";
import "@/styles/admin.css";
import { DocumentsPageClient } from "./documents-page-client";

export const metadata: Metadata = {
  title: "Document Builder · Soul Explorer",
  robots: { index: false, follow: false },
};

export default function DocumentsPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Sacramento&display=swap"
        rel="stylesheet"
      />
      <DocumentsPageClient />
    </>
  );
}
