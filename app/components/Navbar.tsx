"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const NAV_ITEMS = ["ABOUT", "PROJECTS", "EXPERIENCE", "CONTACT"];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex max-w-7xl items-center justify-between rounded-full border border-black/[0.08] px-8 transition-all duration-[400ms] ease-in-out md:px-10 ${
          isScrolled
            ? "w-[88%] bg-white/25 py-3 backdrop-blur-md"
            : "w-[92%] bg-white/15 py-[18px] backdrop-blur-sm"
        }`}
      >
        {/* Left Side */}
        <div className="flex items-center gap-3 font-serif text-[#111111]">
          <span className="text-xl font-light opacity-60">武</span>
          <span className="text-lg tracking-[0.35em]">UDHAY</span>
        </div>

        {/* Right Side */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {NAV_ITEMS.map((item, index) => (
            <li key={item} className="flex items-center gap-6 lg:gap-8">
              <a
                href={`#${item.toLowerCase()}`}
                className="group relative inline-block font-sans text-[0.65rem] font-light tracking-[0.2em] text-[#444444] transition-all duration-[400ms] ease-out hover:-translate-y-[2px] hover:text-[#111111] lg:text-xs"
              >
                {item}
                <span className="absolute -bottom-1.5 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#111111] transition-all duration-[400ms] ease-out group-hover:w-full"></span>
              </a>
              {index < NAV_ITEMS.length - 1 && (
                <span className="font-light text-black/15">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
