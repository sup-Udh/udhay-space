"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Blog() {
  
  const posts = [
    { date: "May 15, 2026", title: "From Scratch to AI Agents: My 12-Year Journey in Tech", readTime: "3 min read", desc: "A look back at how dragging colorful blocks slowly turned into an obsession with understanding how software worked, and how those detours shaped my thinking today.", category: "Journey", link: "/blog/journey" },
    { date: "May 02, 2026", title: "Why I Keep Building Products That Never Launch", readTime: "4 min read", desc: "Sometimes the hardest challenge isn't building something—it's finding people who actually need it. Exploring why incomplete projects are essential for growth.", category: "Product", link: "/blog/never-launch" },
    { date: "Apr 18, 2026", title: "The Future of Software Is Agents, Not Apps", readTime: "3 min read", desc: "We are moving away from manual applications to goal-oriented agents that coordinate work on our behalf. Here is why the future is about software working alongside us.", category: "AI", link: "/blog/agents-not-apps" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
      {/* Background Noise Texture */}
      <div className="noise-bg" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-text-primary mb-8 interactive group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-6 text-text-primary">Blog.</h1>
          <p className="text-text-secondary font-mono text-lg max-w-xl">
            Writing about software engineering, product design, and artificial intelligence.
          </p>
        </motion.div>

        {/* Filters and Search removed per user request */}

        {/* Posts List */}
        <div className="flex flex-col gap-8">
          {posts.map((post, idx) => (
            <Link href={post.link} key={idx} className="block w-full cursor-pointer">
              <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="group border border-border-dark bg-background-secondary p-8 hover:border-text-secondary transition-all interactive flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="md:w-1/4 flex flex-col gap-2 font-mono text-sm text-text-secondary shrink-0">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-mono text-text-primary mb-3 group-hover:underline underline-offset-4 decoration-text-secondary">{post.title}</h2>
                <p className="text-text-secondary font-mono mb-6 leading-relaxed">{post.desc}</p>
                <span className="inline-flex items-center gap-2 font-mono text-sm text-text-primary group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          </Link>
          ))}
        </div>

        {/* Pagination removed per user request */}

      </div>
    </div>
  );
}
