import type { Metadata } from "next";
import { Anton, Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kicklane | Streetwear Sneakers",
  description: "Streetwear sneakers for everyday wear with free 30-day returns.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col bg-white text-[#111] antialiased font-[family-name:var(--font-body)] selection:bg-[#FFD60A]`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}