"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import SpotifyWidget from "./components/SpotifyWidget";
import { useTheme } from "./components/ThemeProvider";

const buildItems = [
  "AI tools.",
  "web extensions.",
  "modern websites.",
  "SaaS products.",
  "scalable MVPs.",
  "automation systems.",
  "developer tools.",
  "CLI applications.",
  "beautiful UI's.",
  "open-source tech."
];

export default function Home() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % buildItems.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Noise Texture */}
      <div className="noise-bg" />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 container mx-auto">
        <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-20 items-center justify-between">
          
          {/* Left Side: Profile Image Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
              {/* Placeholder SVG since the user mentioned a cartoon-style profile image. */}
              <div className="w-full h-full border border-border-dark bg-card flex flex-col items-center justify-center overflow-hidden grayscale">
                <span className="text-text-secondary text-sm font-mono mb-2">[ Image Placeholder ]</span>
                <span className="text-[#2A2A2A] text-xs font-code px-8 text-center">Replace this with cartoon profile image.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight leading-tight mb-6">
              Hi, I'm Udhay. <br />
              <span className="text-text-secondary text-3xl md:text-4xl lg:text-5xl block mt-4 leading-relaxed">
                I build <br />
                <span className="text-text-primary inline-flex h-[1.2em] overflow-hidden align-bottom min-w-[200px] md:min-w-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentItemIndex}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="block whitespace-nowrap"
                    >
                      {buildItems[currentItemIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </h1>
            <p className="text-sm md:text-base text-text-secondary font-mono max-w-md mb-10 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="flex flex-wrap gap-6 font-mono text-sm">
              <Link href="#projects" className="group relative interactive">
                <span className="relative z-10 text-background-primary bg-text-primary px-6 py-3 font-bold block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  View Projects
                </span>
                <div className="absolute inset-0 border border-text-primary z-0"></div>
              </Link>
              <Link href="/blog" className="group relative interactive">
                <span className="relative z-10 text-text-primary bg-transparent border border-border-dark px-6 py-3 font-bold block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-text-primary">
                  Read Blog
                </span>
                <div className="absolute inset-0 bg-text-primary opacity-0 group-hover:opacity-10 transition-opacity z-0"></div>
              </Link>
              <Link href="#contact" className="group relative interactive flex items-center">
                <span className="text-text-secondary hover:text-text-primary px-4 py-3 font-bold transition-colors">
                  Contact
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm uppercase tracking-widest text-text-secondary"
          >
            About
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono"
          >
            <p className="text-base md:text-lg text-text-primary leading-relaxed mb-8 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-text-secondary border-t border-border-dark pt-8">
              <span>Developer</span>
              <span>Builder</span>
              <span>AI Enthusiast</span>
              <span>Product Creator</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm uppercase tracking-widest text-text-secondary"
          >
            Experience
          </motion.div>
          <div className="flex flex-col gap-8">
            {[
              { role: "Product Engineer", company: "AI Startup", duration: "2024 - Present", desc: "Building AI-powered tools for developers. Leading the frontend architecture and product design." },
              { role: "Software Engineer", company: "Tech Corp", duration: "2022 - 2024", desc: "Developed scalable web applications and microservices. Improved performance by 40%." },
              { role: "Frontend Developer", company: "Agency", duration: "2020 - 2022", desc: "Created award-winning marketing sites and interactive web experiences." }
            ].map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative block p-6 -mx-6 transition-all hover:bg-card border border-transparent hover:border-border-dark bento-card interactive"
              >
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-mono text-lg font-bold text-text-primary">
                    {job.company} <span className="text-text-secondary font-normal">/ {job.role}</span>
                  </h3>
                  <span className="font-mono text-sm text-text-secondary mt-1 md:mt-0">{job.duration}</span>
                </div>
                <p className="font-mono text-sm text-text-secondary leading-relaxed max-w-xl">
                  {job.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-12"
        >
          Projects
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "AI Project Manager", stack: "Next.js / OpenAI / Tailwind", size: "lg:col-span-2 lg:row-span-2", desc: "A smart task manager that automatically categorizes and prioritizes your workflow." },
            { name: "Developer Productivity Tool", stack: "Rust / React", size: "lg:col-span-1", desc: "CLI and GUI tool for automating local development environments." },
            { name: "Chrome Extension", stack: "TypeScript", size: "lg:col-span-1", desc: "Browser extension with 10k+ active users for quick code snippets." },
            { name: "RSS Platform", stack: "Node.js / Vue", size: "lg:col-span-1", desc: "A minimalist, distraction-free RSS reader for developers." },
            { name: "Automation System", stack: "Python", size: "lg:col-span-1", desc: "Home automation scripts integrated with various APIs." },
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bento-card group p-8 flex flex-col justify-between min-h-[250px] lg:min-h-[300px] relative overflow-hidden interactive ${project.size}`}
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="font-mono text-xl font-bold text-text-primary mb-3">{project.name}</h3>
                <p className="font-mono text-sm text-text-secondary">{project.desc}</p>
              </div>
              
              <div className="mt-8 flex items-center justify-between relative z-10">
                <span className="font-code text-xs text-text-secondary group-hover:text-text-primary transition-colors">{project.stack}</span>
                <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-12"
        >
          Skills Stack
        </motion.div>
        
        <div className="flex flex-wrap gap-4 font-code text-sm">
          {["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "AI", "Python", "Docker", "Tailwind CSS", "Framer Motion", "PostgreSQL"].map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border border-border-dark text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors cursor-default bg-background-secondary"
            >
              [ {skill} ]
            </motion.div>
          ))}
        </div>

        {/* ACTIVITY SECTION (GITHUB + SPOTIFY) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 pt-12 border-t border-border-dark/20"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-8">
            Activity Feed
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* GITHUB */}
            <div className="lg:col-span-2 border border-border-dark bg-card p-6 md:p-8 hover:border-text-secondary transition-colors interactive overflow-x-auto hide-scrollbar">
               <div className="flex justify-between items-center mb-6">
                 <span className="font-mono text-xs text-text-secondary">Code</span>
                 <a href="https://github.com/sup-Udh" target="_blank" rel="noreferrer" className="font-mono text-xs text-text-secondary hover:text-white transition-colors interactive">@sup-Udh</a>
               </div>
               <div className="min-w-[750px]">
                 {mounted && (
                   <GitHubCalendar 
                      username="sup-Udh" 
                      year={2026}
                      colorScheme={theme === "colorful" ? "light" : "dark"}
                      theme={theme === "colorful" ? undefined : {
                        light: ['#0A0A0A', '#2A2A2A', '#52525B', '#A1A1AA', '#F5F5F5'],
                        dark: ['#0A0A0A', '#2A2A2A', '#52525B', '#A1A1AA', '#F5F5F5'],
                      }}
                      hideColorLegend={true}
                      labels={{
                        totalCount: '{{count}} contributions in 2026',
                      }}
                      blockSize={12}
                      blockMargin={4}
                      fontSize={12}
                    />
                 )}
               </div>
            </div>

            {/* LIVE SPOTIFY WIDGET */}
            <SpotifyWidget />
          </div>
        </motion.div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <div className="flex justify-between items-end mb-12">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-sm uppercase tracking-widest text-text-secondary"
          >
            Latest Writing
          </motion.div>
          <Link href="/blog" className="font-mono text-xs hover:text-white text-text-secondary transition-colors flex items-center gap-2 group interactive">
            View All Posts <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { date: "Oct 24, 2025", title: "Building an AI-powered code reviewer", excerpt: "How I integrated LLMs into my CI/CD pipeline." },
            { date: "Sep 12, 2025", title: "Minimalism in Web Design", excerpt: "Why less is more when building developer tools." },
            { date: "Aug 05, 2025", title: "My terminal setup for 2026", excerpt: "A deep dive into my dotfiles and workflow." },
          ].map((post, idx) => (
            <Link href="/blog" key={idx} className="block group interactive">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 border border-border-dark bg-background-secondary group-hover:-translate-y-2 group-hover:border-text-secondary transition-all duration-300 h-full flex flex-col"
              >
                <span className="font-mono text-xs text-text-secondary mb-4 block">{post.date}</span>
                <h3 className="font-mono text-lg font-bold text-text-primary mb-3 group-hover:underline underline-offset-4 decoration-text-secondary">{post.title}</h3>
                <p className="font-mono text-sm text-text-secondary mt-auto">{post.excerpt}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <section id="contact" className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-4 text-text-primary">Let's build something interesting.</h2>
            <div className="flex items-center gap-4 text-text-secondary mt-6">
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-4 bg-text-primary block" />
              <a href="mailto:contact@placeholder.com" className="font-mono text-sm hover:text-white transition-colors underline underline-offset-4 interactive">contact@placeholder.com</a>
            </div>
          </div>
          
          <div className="flex gap-6 font-mono text-sm text-text-secondary">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 interactive">[ GitHub ]</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 interactive">[ LinkedIn ]</a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 interactive">[ Twitter/X ]</a>
          </div>
        </div>
        
        <div className="mt-32 text-center font-mono text-xs text-text-secondary flex flex-col items-center justify-center gap-2">
          <p>Built by Udhay.</p>
          <p>Powered by curiosity and caffeine.</p>
          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.5 }} className="w-2 h-4 bg-text-secondary block mt-4" />
        </div>
      </section>
    </div>
  );
}
