"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AgentsNotAppsBlog() {
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
            <span>Apr 18, 2026</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span>3 min read</span>
            <span className="w-1 h-1 rounded-full bg-border-dark"></span>
            <span className="text-accent-primary">AI</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight leading-tight text-text-primary">
            The Future of Software Is Agents, Not Apps
          </h1>
        </header>

        <article className="prose prose-invert prose-p:font-mono prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6 max-w-none">
          <p>
            For years, software has been built around applications. If you wanted something done, you opened an app, learned its interface, and completed your task. AI is beginning to change that model by introducing agents that can understand goals rather than just commands.
          </p>
          <p>
            Instead of manually moving between tools, future systems will coordinate work on our behalf. An agent might research information, write code, update documents, and communicate with other tools without requiring constant supervision. The software becomes less about clicking buttons and more about defining outcomes.
          </p>
          <p>
            We're still in the early days, but the shift is already visible. That's one of the reasons I'm interested in building AI products and multi-agent systems. The future won't be about using more software—it will be about software working alongside us.
          </p>
        </article>
      </motion.div>
    </main>
  );
}
