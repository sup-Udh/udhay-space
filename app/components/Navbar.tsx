"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "#projects" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#2A2A2A]">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-sm font-bold tracking-wider">
          <Link href="/" className="hover:text-accent-primary transition-colors">
            Udhay_
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path || (pathname === '/' && link.path.startsWith('#'));
            // Note: In a real app, hash links need scroll spying for true active state on single page.
            return (
              <div key={link.name} className="flex items-center gap-6">
                <Link
                  href={link.path}
                  className="group relative font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors interactive"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-[#2A2A2A] text-xs">/</span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile menu could be added here later */}
        <div className="md:hidden font-mono text-xs">
          Menu
        </div>
      </div>
    </header>
  );
}
