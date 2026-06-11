import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Udhay Rajeev",
  description: "Here's Udhay's personal space. Builder of products, AI systems, and developer tools.",
  openGraph: {
    title: "Udhay Rajeev",
    description: "Here's Udhay's personal space. Builder of products, AI systems, and developer tools.",
    siteName: "Udhay's Portfolio",
    type: "website",
    images: [
      {
        url: "/udhay-thumb.png",
        width: 256,
        height: 256,
        alt: "Udhay's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Udhay Rajeev",
    description: "Here's Udhay's personal space. Builder of products, AI systems, and developer tools.",
    images: ["/udhay-thumb.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-background-primary text-text-primary custom-scrollbar font-code">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
