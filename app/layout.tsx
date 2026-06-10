import type { Metadata } from "next";
import { Shippori_Mincho_B1, Inter } from "next/font/google";
import "./globals.css";

const shipporiMincho = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udhay — Portfolio | 武蔵の道",
  description:
    "Personal portfolio of Udhay — inspired by the legendary samurai Miyamoto Musashi. A cinematic journey through code, craft, and the way of the warrior.",
  keywords: ["portfolio", "developer", "Udhay", "Miyamoto Musashi", "samurai"],
  openGraph: {
    title: "Udhay — Portfolio",
    description: "The Way of the Warrior — A cinematic developer portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shipporiMincho.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
