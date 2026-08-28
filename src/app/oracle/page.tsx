import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { OracleWizard } from "./oracle-wizard";
import "./oracle.css";

export const metadata: Metadata = {
  title: "Free Oracle Reading, Whispers from the Womb of Stars · Soul Explorer",
  description:
    "A free online oracle reading, set an intention, draw three cards from Whispers from the Womb of Stars, and receive a personal message channeled in the voice of Liora.",
};

export default function OraclePage() {
  return (
    <>
      <Nav light />
      <OracleWizard />
      <Footer />
    </>
  );
}
