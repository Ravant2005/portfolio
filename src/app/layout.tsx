import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: "S. Ravant Vignesh — AI/ML Engineer · Origami Unfold",
  description:
    "Portfolio of S. Ravant Vignesh — AI/ML Engineer building generative AI, multi-agent systems, and full-stack AI products. Founder of Yovaan AI. International Hackathon Winner. Founder of Baarak.",
  keywords: [
    "Ravant Vignesh",
    "AI Engineer",
    "Generative AI",
    "Multi-Agent Systems",
    "LangChain",
    "RAG",
    "Yovaan AI",
    "Baarak",
    "CertiChain",
    "Portfolio",
  ],
  authors: [{ name: "S. Ravant Vignesh" }],
  icons: {
    icon: "/images/yovaanai-logo.jpg",
  },
  openGraph: {
    title: "S. Ravant Vignesh — AI/ML Engineer",
    description:
      "Generative AI & Multi-Agent Systems. Founder of Yovaan AI & Baarak. International Hackathon Winner.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S. Ravant Vignesh — AI/ML Engineer",
    description:
      "Generative AI & Multi-Agent Systems. Founder of Yovaan AI & Baarak.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
