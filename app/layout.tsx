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

export const metadata: Metadata = {
  title: "Udhay | Developer",
  description: "A highly technical developer who loves building products, AI systems, experiments, and tools.",
  keywords: ["portfolio", "developer", "AI", "Udhay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased bg-primary text-primary min-h-screen selection:bg-white selection:text-black">
        <Navbar />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
