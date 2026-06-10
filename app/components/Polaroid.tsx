"use client";

import { motion } from "framer-motion";

export default function Polaroid() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      whileHover={{ scale: 1.02 }}
      whileDrag={{ scale: 1.05, rotate: 0 }}
      initial={{ rotate: -4 }}
      animate={{ rotate: -4 }}
      className="relative z-10 cursor-grab active:cursor-grabbing"
      style={{
        width: "380px",
        height: "460px",
        backgroundColor: "#EAEAEA", /* Off-white polaroid frame */
        padding: "20px 20px 80px 20px",
        boxShadow: "10px 15px 30px rgba(0,0,0,0.8), inset 0 0 10px rgba(255,255,255,0.5)",
        border: "1px solid rgba(255,255,255,0.2)"
      }}
    >
      {/* Tape effect on top */}
      <div 
        className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#dcdcdc] opacity-80"
        style={{ width: "120px", height: "35px", rotate: "-2deg", boxShadow: "1px 2px 5px rgba(0,0,0,0.3)" }}
      ></div>

      {/* The actual photo area (empty placeholder) */}
      <div className="w-full h-full bg-[#1A1A1A] border border-[#050505] shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')]"></div>
        <span className="font-marker text-[var(--text-secondary)] text-xl opacity-50 select-none">PHOTO PLACEHOLDER</span>
      </div>

      {/* Hand-written text below photo */}
      <div className="absolute bottom-5 left-5 font-marker text-[#111] text-2xl rotate-[1deg] opacity-90 select-none">
        Udhay - 2026
      </div>
    </motion.div>
  );
}
