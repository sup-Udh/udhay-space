"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const posts = [
    { date: "Oct 24, 2025", title: "Building an AI-powered code reviewer", readTime: "5 min read", desc: "How I integrated LLMs into my CI/CD pipeline using GitHub Actions and Node.js.", category: "AI" },
    { date: "Sep 12, 2025", title: "Minimalism in Web Design", readTime: "8 min read", desc: "Why less is more when building developer tools and how to apply minimalist principles.", category: "Design" },
    { date: "Aug 05, 2025", title: "My terminal setup for 2026", readTime: "4 min read", desc: "A deep dive into my dotfiles, tmux configuration, and workflow automation.", category: "Workflow" },
    { date: "Jul 18, 2025", title: "State Management in Next.js App Router", readTime: "6 min read", desc: "Navigating the complexities of React Server Components and client-side state.", category: "Engineering" },
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
            <motion.article 
              key={idx}
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
                <Link href="#" className="inline-flex items-center gap-2 font-mono text-sm text-text-primary group-hover:gap-4 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
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
