import type { Metadata } from "next";
import {
  Newsreader,
  Hanken_Grotesk,
  Sacramento,
  Pinyon_Script,
  Caveat,
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

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-newsreader",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
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
      className={`${newsreader.variable} ${hanken.variable} ${sacramento.variable} ${pinyon.variable} ${caveat.variable}`}
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
