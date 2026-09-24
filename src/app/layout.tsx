import type { Metadata } from "next";
import {
  Italiana,
  Tenor_Sans,
  Sacramento,
  Petit_Formal_Script,
} from "next/font/google";
import "../styles/legacy-styles.css";
import "../styles/legacy-pages.css";
import "../styles/legacy-home.css";
import "../styles/mini-cart.css";
import "../styles/legal.css";
import "../styles/plugin-pages.css";
import "./fonts.css";
import { MiniCart } from "@/components/mini-cart";
import { CookieBanner } from "@/components/cookie-banner";
import { EditModeToggle } from "@/components/edit-mode-toggle";
import { WhatsAppBubble } from "@/components/whatsapp-bubble";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});

const tenor = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

const petitFormalScript = Petit_Formal_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-petit-formal-script",
});

export const metadata: Metadata = {
  title: "Soul Explorer · Alex Fadda, QHHT, Soul Readings & Past-Life Regression",
  description:
    "Quantum healing, soul readings and past-life regression with Alex Fadda. For the ones who feel more than they can explain.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${tenor.variable} ${sacramento.variable} ${petitFormalScript.variable}`}
      suppressHydrationWarning
    >
      <body className="paper grain">
        {children}
        <MiniCart />
        <CookieBanner />
        <EditModeToggle />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
