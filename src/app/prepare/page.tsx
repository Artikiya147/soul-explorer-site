import type { Metadata } from "next";
import { PrepareGuide } from "./prepare-guide";
import "./prepare.css";

export const metadata: Metadata = {
  title: "How to Prepare for Your Session, A Gentle Guide · Soul Explorer",
  description:
    "A gentle guide to preparing for your QHHT or BQH session, your questions, your body, your heart, and what to expect on the day.",
  robots: { index: false, follow: false },
};

export default function PreparePage() {
  return <PrepareGuide />;
}
