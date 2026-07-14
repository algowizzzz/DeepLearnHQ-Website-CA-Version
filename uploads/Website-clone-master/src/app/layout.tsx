import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextUsButton from "@/components/TextUsButton";

export const metadata: Metadata = {
  title: "AI-Native Software Studio | DeepLearnHQ",
  description:
    "DeepLearnHQ is an AI-native software studio offering strategy, AI solutions, software development, data analytics, cloud, QA, and modernization services. Plus AI education through SeekhoAI.",
  openGraph: {
    title: "AI-Native Software Studio | DeepLearnHQ",
    description:
      "DeepLearnHQ is an AI-native software studio offering strategy, AI solutions, software development, data analytics, cloud, QA, and modernization services. Plus AI education through SeekhoAI.",
    url: "https://www.deeplearnhq.ca/",
    siteName: "DeepLearnHQ",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "AI-Native Software Studio | DeepLearnHQ",
    description:
      "DeepLearnHQ is an AI-native software studio offering strategy, AI solutions, software development, data analytics, cloud, QA, and modernization services. Plus AI education through SeekhoAI.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <TextUsButton />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
