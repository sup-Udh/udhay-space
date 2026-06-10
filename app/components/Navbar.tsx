"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="absolute top-0 z-40 flex w-full items-center justify-between px-8 py-8 md:px-12"
    >
      <div className="font-serif text-lg font-bold tracking-widest text-[#111111]">
        UDHAY
      </div>
      <ul className="flex gap-8 font-sans text-sm tracking-wide text-[#444444]">
        {["About", "Projects", "Experience", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-[#111111]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
