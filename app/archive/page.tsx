"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArchiveX } from "lucide-react";

export default function ArchivePage() {
  const archivedProjects = [
    {
      name: "Basically Mail",
      tagline: "A modern newsletter platform built for creators and readers",
      desc: "Co-founded Basically Mail, a newsletter platform designed to make publishing and discovering content simple and accessible. The goal was to provide creators with a streamlined way to share ideas while giving readers a focused reading experience. Although the platform never reached a public launch, building it provided valuable experience in product development, content platforms, user acquisition, and working through the challenges of turning an idea into a real product.",
      roles: "Co-Founder • Product Development • Frontend Engineering • Product Design",
      tech: "React • Node.js • MongoDB • Content Platforms",
    },
    {
      name: "Setups",
      tagline: "Workspace setups & productivity workflows",
      desc: "An experimental platform for sharing workspace setups and productivity workflows. Although the project never made it to a full release, it helped me explore community-driven product design and content discovery. One of my early attempts at building a community platform. While it wasn't shipped publicly, the experience played a key role in shaping how I approach product development today.",
      roles: "Solo Developer",
      tech: "Community Building • UI/UX Design • Next.js",
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 container mx-auto max-w-4xl">
      {/* Background Noise Texture */}
      <div className="noise-bg" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors mb-12 interactive group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight leading-tight mb-6 flex items-center gap-4">
            <ArchiveX className="w-10 h-10 text-text-secondary" />
            Graveyard of Ambition
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-mono max-w-2xl leading-relaxed">
            Welcome to the archives. Here lie the projects that I was incredibly excited about until I got distracted by another shiny idea. They may not be finished, but they taught me valuable lessons. Experiments and failures are just as important as the successes!
          </p>
        </div>

        <div className="space-y-12">
          {archivedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bento-card p-8 border border-border-dark flex flex-col gap-4"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border-dark/50 pb-4">
                <div>
                  <h3 className="font-mono text-2xl font-bold text-text-primary">{project.name}</h3>
                  <span className="font-mono text-sm text-text-secondary">{project.tagline}</span>
                </div>
                <div className="font-mono text-xs px-3 py-1 border border-border-dark text-text-secondary bg-background-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-text-secondary opacity-50 block"></span>
                  Status: Archived
                </div>
              </div>

              <p className="font-mono text-sm text-text-secondary leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-col gap-2 mt-4 font-mono text-xs bg-background-secondary/50 p-4 border border-border-dark/50">
                <div>
                  <span className="text-text-secondary">Role:</span> <span className="text-text-primary">{project.roles}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Tech:</span> <span className="text-accent-primary">{project.tech}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
