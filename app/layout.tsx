import type { Metadata } from "next";
import { Geist, Geist_Mono, Chakra_Petch, Hanuman, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
});

const hanuman = Hanuman({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-hanuman",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bunkenTech = localFont({
  src: "../public/fonts/BunkenTechSansScWide-Med.otf",
  variable: "--font-bunken",
});

export const metadata: Metadata = {
  title: "ARCAVON - The Future of Warfare",
  description: "Arcavon is a game-tech company building high-quality, story-driven games and tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chakraPetch.variable} ${hanuman.variable} ${inter.variable} ${bunkenTech.variable} antialiased bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
