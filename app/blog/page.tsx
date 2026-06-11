"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  
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

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 border-b border-border-dark pb-8"
        >
          <div className="relative w-full md:w-96 interactive">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input 
              type="text" 
              placeholder="Search posts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background-secondary border border-border-dark text-text-primary font-mono text-sm pl-10 pr-4 py-3 outline-none focus:border-text-secondary transition-colors"
            />
          </div>
          
          <div className="flex gap-4 font-mono text-sm overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            {["All", "Engineering", "Design", "AI", "Workflow"].map((cat) => (
              <button key={cat} className={`whitespace-nowrap px-4 py-2 border ${cat === "All" ? "border-text-primary text-text-primary" : "border-border-dark text-text-secondary hover:border-text-secondary"} transition-colors interactive`}>
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

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

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center gap-4 font-mono text-sm">
          <button className="px-4 py-2 border border-border-dark text-text-secondary opacity-50 cursor-not-allowed">Previous</button>
          <button className="px-4 py-2 border border-border-dark text-text-primary bg-background-secondary">1</button>
          <button className="px-4 py-2 border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors interactive">2</button>
          <button className="px-4 py-2 border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors interactive">Next</button>
        </div>

      </div>
    </div>
  );
}
