import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import ConsentAnalytics from "./components/ConsentAnalytics";
import MotionProvider from "./components/MotionProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--f-display-font",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--f-body-font",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--f-mono-font",
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute base for og:image / canonical URLs. Without it Next falls back
  // to VERCEL_URL, i.e. the deployment host, and share previews point at
  // *.vercel.app instead of the real domain.
  metadataBase: new URL("https://www.deeplearnhq.ca"),
  title: "DeepLearnHQ — Learn AI by Building With It",
  description:
    "Practical AI education for people who want to use modern tools at work, build useful things and stay relevant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
        <ConsentAnalytics />
      </body>
    </html>
  );
}
