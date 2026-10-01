import type { Metadata } from "next";

/* app/bootcamp/page.tsx is a client component ("use client", for the
   animation/checkout-url state), and Next.js only reads `metadata` from
   server components — without this layout the page silently inherited the
   root layout's generic homepage title/description instead of its own.
   Copied from the old index.html's <head> (git show main:index.html),
   the page this route replaces. */
export const metadata: Metadata = {
  title: "Master Generative AI in 8 Weeks — 4.5★ Bootcamp | DeepLearnHQ",
  description:
    "Master ChatGPT 5, Claude, Gemini, MidJourney & AI agents in 8 weeks. 4.5★-rated curriculum, 4 hands-on projects, weekly live Q&A. $99 USD, 30-day guarantee.",
  alternates: {
    canonical: "https://www.deeplearnhq.ca/bootcamp",
  },
  openGraph: {
    title: "The Generative AI 8-Week Bootcamp | DeepLearnHQ",
    description:
      "Master ChatGPT 5, Claude, Gemini, MidJourney & AI agents in 8 weeks. 4.5★-rated curriculum, 4 hands-on projects, weekly live Q&A. $99 USD, 30-day guarantee.",
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
