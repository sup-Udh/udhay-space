"use client";

import { motion } from "framer-motion";
import { Terminal, Crosshair, Code2, Sparkles, MoveUpRight, Zap, Hash } from "lucide-react";

export function DoodleCross({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`absolute text-[var(--accent-pink)] ${className}`}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <motion.path d="M10 10L30 30" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.2 }} />
        <motion.path d="M30 10L10 30" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }} />
      </svg>
    </motion.div>
  );
}

export function DoodleCircle({ className }: { className?: string }) {
  return (
    <motion.div className={`absolute text-[var(--accent-pink)] ${className}`}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="neon-outline-svg">
        <motion.circle 
          cx="40" cy="40" r="35" 
          initial={{ pathLength: 0 }} 
          animate={{ pathLength: 1 }} 
          transition={{ duration: 1.5, delay: 0.8 }} 
          style={{ filter: "drop-shadow(0 0 5px var(--glow-pink))" }}
        />
      </svg>
    </motion.div>
  );
}

export function FloatingElement({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: ["-5px", "5px", "-5px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute font-mono text-[var(--text-secondary)] opacity-40 select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Doodles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <DoodleCross className="top-[10%] left-[5%] rotate-12 scale-150" />
      <DoodleCross className="top-[60%] right-[15%] -rotate-6" />
      
      <DoodleCircle className="top-[25%] left-[30%]" />
      
      {/* Code Text Doodles */}
      <FloatingElement className="top-[15%] right-[20%] text-2xl font-bold" delay={0}>{"</>"}</FloatingElement>
      <FloatingElement className="bottom-[20%] left-[10%] text-xl font-bold" delay={1}>{"{ }"}</FloatingElement>
      <FloatingElement className="top-[45%] right-[5%] text-lg" delay={2}>{"const build = true;"}</FloatingElement>
      <FloatingElement className="bottom-[10%] right-[30%] text-xl" delay={0.5}>{"npm run dev"}</FloatingElement>
      <FloatingElement className="top-[75%] left-[25%] text-lg" delay={1.5}>{"git commit -m 'ship it'"}</FloatingElement>
      <FloatingElement className="top-[5%] left-[40%] text-2xl" delay={0.2}>{"[ ]"}</FloatingElement>

      {/* Hand-written sketches via SVG / Icons */}
      <motion.div className="absolute top-[35%] left-[8%] text-[var(--accent-pink)] opacity-80" animate={{ rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <Terminal size={48} strokeWidth={1.5} />
      </motion.div>

      <motion.div className="absolute bottom-[30%] right-[8%] text-white opacity-20" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
        <Code2 size={64} strokeWidth={1} />
      </motion.div>

      <div className="absolute top-[80%] right-[45%] text-[var(--accent-pink)]">
        <Zap size={32} strokeWidth={2} style={{ filter: "drop-shadow(0 0 10px var(--glow-pink))" }} />
      </div>

      <FloatingElement className="top-[50%] left-[45%] text-3xl text-[var(--accent-pink)] opacity-60" delay={0.8}>
        <Hash size={40} />
      </FloatingElement>

      <div className="absolute top-[20%] left-[20%] font-marker text-[var(--text-secondary)] text-xl opacity-30 rotate-[-15deg]">
        // build things that matter
      </div>
      
      <div className="absolute bottom-[15%] right-[15%] font-marker text-[var(--text-secondary)] text-xl opacity-30 rotate-[5deg]">
        /* experimental */
      </div>
    </div>
  );
}
