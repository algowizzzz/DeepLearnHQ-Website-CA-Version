import type { Metadata } from "next";
import { SP } from "../lib/social-proof";

/* app/bootcamp/page.tsx is a client component ("use client", for the
   animation/checkout-url state), and Next.js only reads `metadata` from
   server components — without this layout the page silently inherited the
   root layout's generic homepage title/description instead of its own.
   Copied from the old index.html's <head> (git show main:index.html),
   the page this route replaces. */
const TITLE = `Master Generative AI in 8 Weeks — ${SP.rating} Bootcamp | DeepLearnHQ`;
const DESCRIPTION = `Master ChatGPT 5, Claude, Gemini, MidJourney & AI agents in 8 weeks. ${SP.rating}-rated curriculum, 4 hands-on projects, weekly live Q&A. $99 USD, 30-day guarantee.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.deeplearnhq.ca/bootcamp",
  },
  openGraph: {
    title: "The Generative AI 8-Week Bootcamp | DeepLearnHQ",
    description: DESCRIPTION,
    type: "website",
    url: "https://www.deeplearnhq.ca/bootcamp",
    siteName: "DeepLearnHQ",
    images: ["https://www.deeplearnhq.ca/assets/blog/ai-machine-learning.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Generative AI 8-Week Bootcamp | DeepLearnHQ",
    images: ["https://www.deeplearnhq.ca/assets/blog/ai-machine-learning.png"],
  },
};

export default function BootcampLayout({ children }: { children: React.ReactNode }) {
  return children;
}
