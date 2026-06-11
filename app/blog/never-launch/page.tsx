"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NeverLaunchBlog() {
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
            <span>May 02, 2026</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span>4 min read</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span className="text-accent-primary">Product</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight leading-tight text-text-primary">
            Why I Keep Building Products That Never Launch
          </h1>
        </header>

        <article className="prose prose-invert prose-p:font-mono prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6 max-w-none">
          <p>
            Not every project I build reaches the finish line. Some never make it past a prototype, while others get surprisingly close before being abandoned. At first, I saw that as failure. Over time, I realized it was simply part of learning how to build products.
          </p>
          <p>
            Projects like Setups and Basically Mail taught me lessons that no tutorial ever could. I learned about user experience, validation, distribution, and the reality that building software is only one part of creating a successful product. Sometimes the hardest challenge isn't building something—it's finding people who actually need it.
          </p>
          <p>
            Even though many of these projects never launched publicly, I don't regret building them. Every unfinished project improved my skills, sharpened my judgment, and gave me new ideas for the next thing. In many ways, the projects that failed taught me more than the ones that succeeded.
          </p>
        </article>
      </motion.div>
    </main>
  );
}
