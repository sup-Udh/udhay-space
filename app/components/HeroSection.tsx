"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse parallax
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transform amounts
  const imageX = useTransform(springX, [-1, 1], [-20, 20]);
  const imageY = useTransform(springY, [-1, 1], [-20, 20]);
  
  const textX = useTransform(springX, [-1, 1], [10, -10]);
  const textY = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize to -1 to 1 range
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  if (!isMounted) return null;

  return (
    <section 
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24"
      onMouseMove={handleMouseMove}
    >
      {/* BACKGROUND ILLUSTRATION (CENTER) */}
      <motion.div 
        style={{ x: imageX, y: imageY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[140vw] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply md:w-[85vw]"
      >
        <div className="relative aspect-square w-full">
          <Image
            src="/images/musashi-profile.png"
            alt="Miyamoto Musashi"
            fill
            priority
            className="object-contain object-center [filter:brightness(1.1)_contrast(1.5)_grayscale(1)]"
          />
        </div>
      </motion.div>

      {/* FOREGROUND TYPOGRAPHY (OVERLAPS IMAGE) */}
      <div className="relative z-20 mx-auto flex h-full min-h-[80vh] w-full max-w-7xl flex-col px-8 md:flex-row md:px-12">
        
        {/* LEFT COLUMN */}
        <motion.div 
          style={{ x: textX, y: textY }}
          className="flex h-full flex-col justify-center md:w-1/2"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-serif text-2xl tracking-widest text-[#444444] md:text-3xl">2026</p>
            <h1 className="mt-2 font-serif text-[18vw] font-bold leading-[0.8] tracking-tighter text-[#111111] md:text-[10rem] lg:text-[14rem]">
              Udhay
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 max-w-xs md:mt-24"
          >
            <h2 className="font-serif text-2xl text-[#111111] md:text-3xl">
              Welcome to my space.
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-[#444444]">
              Building products, experimenting with AI, and turning ideas into reality through code.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="hidden h-full flex-col justify-between pb-12 pt-8 md:flex md:w-1/2 md:items-end">
          {/* Top Right */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-serif text-5xl font-light tracking-wider text-[#111111] lg:text-7xl">
              portfolio.
            </p>
          </motion.div>

          {/* Bottom Right Vertical List */}
          <motion.div
            style={{ x: textX, y: textY }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-end space-y-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.3em] text-[#444444]"
          >
            <p>developer.</p>
            <p>builder.</p>
            <p>ai engineer.</p>
            <p>problem solver.</p>
          </motion.div>
        </div>

        {/* MOBILE ONLY: Right elements stacked at bottom */}
        <div className="mt-16 flex flex-col items-start gap-12 pb-16 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-serif text-5xl font-light tracking-wider text-[#111111]">
              portfolio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start space-y-2 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#444444]"
          >
            <p>developer.</p>
            <p>builder.</p>
            <p>ai engineer.</p>
            <p>problem solver.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
