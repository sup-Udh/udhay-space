"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only run scroll spy on the home page
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = navLinks
        .filter((link) => link.path.startsWith("/#"))
        .map((link) => link.path.replace("/#", ""));

      let currentActive = "";
      
      // If we're at the very top, active is "Home" (empty hash)
      if (window.scrollY < 100) {
        setActiveHash("");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top half of the screen
          // and the bottom of the section is below the top of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            currentActive = section;
          }
        }
      }

      setActiveHash(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-md border-b border-border-dark transition-colors duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-sm font-bold tracking-wider">
          <Link href="/" className="hover:text-accent-primary transition-colors">
            Udhay Rajeev_
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            let isActive = false;
            
            if (pathname === "/blog" && link.path === "/blog") {
              isActive = true;
            } else if (pathname === "/") {
              if (link.path === "/") {
                isActive = activeHash === "";
              } else if (link.path === `/#${activeHash}` && activeHash !== "") {
                isActive = true;
              }
            }

            return (
              <div key={link.name} className="flex items-center gap-6">
                <Link
                  href={link.path}
                  className={`group relative font-mono text-xs uppercase tracking-widest transition-colors interactive ${
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute -bottom-1 left-0 h-[1px] bg-accent-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-border-dark text-xs">/</span>
                )}
              </div>
            );
          })}

          {mounted && (
            <button 
              onClick={toggleTheme}
              className="ml-4 text-text-secondary hover:text-text-primary transition-colors interactive flex items-center justify-center"
              aria-label="Toggle colorful mode"
            >
              {theme === "colorful" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
        </nav>

          {/* Mobile menu could be added here later */}
        <div className="md:hidden font-mono text-xs">
          Menu
        </div>
      </div>

      {/* Walking Pixel Cat */}
      <motion.div
        className="absolute bottom-0 left-0 pointer-events-none"
        animate={{
          x: ["0vw", "calc(100vw - 40px)", "calc(100vw - 40px)", "0vw"],
          scaleX: [1, 1, -1, -1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.49, 0.51, 1], // Wait 2% of the time at the edges to "turn around"
        }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, ease: "linear" }}
        >
          {/* Pixelated Cat SVG */}
          <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
            {/* Tail */}
            <rect x="2" y="4" width="2" height="8" fill="var(--color-text-primary)" />
            <rect x="0" y="2" width="2" height="4" fill="var(--color-text-primary)" />
            {/* Body */}
            <rect x="4" y="8" width="10" height="6" fill="var(--color-text-primary)" />
            {/* Head */}
            <rect x="14" y="4" width="8" height="8" fill="var(--color-text-primary)" />
            {/* Ears */}
            <rect x="14" y="2" width="2" height="2" fill="var(--color-text-primary)" />
            <rect x="20" y="2" width="2" height="2" fill="var(--color-text-primary)" />
            {/* Eyes */}
            <rect x="16" y="6" width="2" height="2" fill="var(--color-background-primary)" />
            <rect x="20" y="6" width="2" height="2" fill="var(--color-background-primary)" />
            {/* Nose */}
            <rect x="18" y="8" width="2" height="2" fill="var(--color-text-secondary)" />
            {/* Legs */}
            <rect x="4" y="14" width="2" height="2" fill="var(--color-text-primary)" />
            <rect x="12" y="14" width="2" height="2" fill="var(--color-text-primary)" />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
}
