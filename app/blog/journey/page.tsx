"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function JourneyBlog() {
  useEffect(() => {
    // Fire confetti on load as an easter egg!
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#10B981', '#EC4899', '#3B82F6']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#10B981', '#EC4899', '#3B82F6']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container mx-auto max-w-3xl">
      <div className="noise-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors mb-12 interactive group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
        </Link>

        <header className="mb-12 border-b border-border-dark pb-8">
          <div className="font-mono text-sm text-text-secondary mb-4 flex items-center gap-4">
            <span>May 15, 2026</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span>3 min read</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span className="text-accent-primary">Journey</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight leading-tight text-text-primary">
            From Scratch to AI Agents: My 12-Year Journey in Tech
          </h1>
        </header>

        <article className="prose prose-invert prose-p:font-mono prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6 max-w-none">
          <p>
            When I first discovered Scratch in 2014, I had no idea it would become the start of a long journey into technology. What began as dragging colorful blocks around a screen slowly turned into an obsession with understanding how software worked. Before long, I was experimenting with HTML, CSS, and PHP, building simple websites and learning by breaking things.
          </p>
          <p>
            As the years passed, my curiosity kept pulling me into new areas. I explored Linux, databases, networking, cybersecurity, and automation. Every topic felt like another piece of a much larger puzzle. I wasn't following a perfect roadmap I was simply chasing whatever seemed interesting at the time.
          </p>
          <p>
            Today, that same curiosity has led me to AI, developer tools, and product building. Looking back, I realize none of those detours were wasted. Every technology I explored taught me something valuable, and together they shaped the way I think, build, and solve problems.
          </p>
        </article>
      </motion.div>
    </main>
  );
}
