"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Baby, User, Terminal, Brain, GraduationCap, Rocket, Network, Bot, Blocks, Database, Headphones, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
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
            className="w-full lg:w-1/2 flex justify-center lg:justify-center lg:pl-10"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float border border-border-dark bg-card overflow-hidden">
              <Image 
                src="/udhay.png" 
                alt="Udhay Profile" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                priority
              />
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
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
              I spend most of my time building products,
              writing code, and exploring new ideas.

              When I'm away from the keyboard,
              you'll probably find me lifting weights
              or planning the next thing to build.            
              
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
                Hi, I'm Udhay.

                I'm passionate about software engineering,
                product development, and artificial intelligence.

                Most of my time is spent building side projects,
                experimenting with new ideas, and turning concepts
                into products. Outside of tech, I enjoy lifting weights,
                reading, and continuously challenging myself to grow.            
              </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-text-secondary border-t border-border-dark pt-8">
              <span>Developer</span>
              <span>Builder</span>
              <span>Fitness Enthusiast</span>
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
              {
                title: "Started with Curiosity",
                duration: "2014 - 2016",
                desc: "Discovered programming through Scratch and simple visual projects, which sparked my curiosity for technology. Soon moved into HTML, CSS, and PHP, building my first websites and learning how the web worked behind the scenes.",
                skills: "Scratch • HTML • CSS • PHP • Web Fundamentals",
                icon: Baby
              },
              {
                title: "Exploring Systems & Security",
                duration: "2017 - 2019",
                desc: "Began diving deeper into the technical side of computing. Explored databases, Linux, networking, and cybersecurity while developing a strong interest in understanding how systems operate under the hood. Spent time learning about ethical hacking, server administration, and security concepts.",
                skills: "Linux • Databases • Networking • Cybersecurity • System Administration",
                icon: User
              },
              {
                title: "Building Through Experimentation",
                duration: "2020 - 2022",
                desc: "Used the COVID years to learn by building. Created personal projects, experimented with shell scripting, automated Linux workflows, participated in hackathons, and gained hands-on experience turning ideas into working software. This was the period where coding became more than just a hobby.",
                skills: "Web Development • Shell Scripting • Automation • Hackathons • Open Source",
                icon: Terminal
              },
              {
                title: "The AI Shift",
                duration: "2023 - 2024",
                desc: "Started exploring artificial intelligence and modern developer tooling. Experimented with AI-powered applications, language models, automation workflows, and product design while combining everything learned from web development, systems engineering, and security.",
                skills: "Artificial Intelligence • LLMs • Developer Tools • Product Design • Automation",
                icon: Brain
              },
              {
                title: "Academic Focus",
                duration: "2025",
                desc: "Dedicated a significant portion of the year to preparing for competitive entrance examinations and academics. While studies were the primary focus, I continued following advancements in AI, experimenting with new technologies, and refining ideas for future projects.",
                skills: "Problem Solving • Mathematics • Research • Self Learning",
                icon: GraduationCap
              },
              {
                title: "Shipping Products",
                duration: "2026 - Present",
                desc: "Focused on building and launching real-world products. Working on AI-powered developer tools, browser extensions, automation platforms, and multi-agent systems. Currently building projects like Linko and Lore while continuously learning across engineering, product development, AI, design, and entrepreneurship.",
                skills: "AI Products • Multi-Agent Systems • Startups • Product Engineering • Shipping",
                icon: Rocket
              }
            ].map((exp, idx) => {
              const Icon = exp.icon;
              return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative block p-4 md:p-6 md:-mx-6 transition-all hover:bg-card border border-transparent hover:border-border-dark bento-card interactive"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="font-mono text-lg font-bold text-text-primary flex items-center gap-3">
                    <Icon className="w-5 h-5 text-accent-primary" />
                    {exp.title}
                  </h3>
                  <span className="font-mono text-sm text-text-secondary mt-1 md:mt-0">{exp.duration}</span>
                </div>
                <p className="font-mono text-sm text-text-secondary leading-relaxed max-w-2xl mb-4">
                  {exp.desc}
                </p>
                <div className="font-mono text-xs text-accent-primary">
                  <span className="text-text-secondary">Skills:</span> {exp.skills}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 container mx-auto border-t border-border-dark/50">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
        >
          <div className="font-mono text-sm uppercase tracking-widest text-text-secondary">
            Projects
          </div>
          <Link href="/archive" className="font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors interactive">
            [ Archive ]
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            { name: "Linko", stack: "Extension APIs • JS/TS • Real-time Systems", desc: "Multiplayer networking for LeetCode. A Chrome extension that helps developers connect, collaborate, and learn together while solving coding problems. Built with a focus on real-time interaction and community-driven learning.", icon: Network },
            { name: "Minecraft-AI Agent", stack: "AI Agents • Minecraft API • LLMs", desc: "A platform that provides an AI companion to play alongside you in Minecraft and help you survive in the game. (Status: Building 🚧)", icon: Bot },
            { name: "MCP Builder", stack: "AI Agents • MCP • TypeScript • APIs", desc: "Build and deploy Model Context Protocol servers in minutes. A platform that simplifies the creation, testing, and deployment of MCP servers to help developers connect AI models with external tools, APIs, and data sources.", icon: Blocks },
            { name: "Scraper.io", stack: "Node.js • Web Scraping • Automation • APIs", desc: "Extract, structure, and automate web data collection. A powerful platform built to help developers and businesses collect structured data from websites at scale. Converts unstructured content into usable data and automates workflows.", icon: Database },
            { name: "Podex", stack: "AI • Search • Recommendation Engines", desc: "The future of podcast discovery. A platform being built to help listeners discover, understand, and engage with podcasts more effectively by combining AI-powered recommendations with intuitive design. (Status: Building 🚧)", icon: Headphones },
            { name: "Lore", stack: "Rust • CLI • LLMs", desc: "Run small LLM models directly from your terminal. Built with Rust for maximum performance and a tiny footprint. (Beginner Project)", icon: Terminal },
            { name: "sqrt", stack: "Web • Education", desc: "An educational math learning resource for all ages. Hackathon Winner at Midnight Hacks 2019.", link: "https://devpost.com/software/sqrt", icon: Trophy },
          ].map((project, idx) => {
            const ProjectIcon = project.icon;
            
            const card = (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bento-card group p-8 flex flex-col justify-between min-h-[250px] lg:min-h-[300px] relative overflow-hidden interactive"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-background-secondary border border-border-dark shadow-sm">
                      <ProjectIcon className="w-6 h-6 text-text-primary" />
                    </div>
                    <h3 className="font-mono text-xl font-bold text-text-primary">{project.name}</h3>
                  </div>
                  <p className="font-mono text-sm text-text-secondary">{project.desc}</p>
                </div>
                
                <div className="mt-8 flex items-center justify-between relative z-10">
                  <span className="font-code text-xs text-text-secondary group-hover:text-text-primary transition-colors">{project.stack}</span>
                  <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            );

            return project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" key={idx} className="block">
                {card}
              </a>
            ) : card;
          })}
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
          {["React", "Next.js", "TypeScript & JavaScript", "Node.js", "Express", "MongoDB", "Docker", "Python", "Docker", "Tailwind CSS",  "PostgreSQL", "Rust", "shell scripting", "Mongo DB"].map((skill, idx) => (
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
                 <a href="https://github.com/sup-Udh" target="_blank" rel="noreferrer" className="font-mono text-xs text-text-secondary hover:text-accent-primary transition-colors interactive">@sup-Udh</a>
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
          <Link href="/blog" className="font-mono text-xs hover:text-accent-primary text-text-secondary transition-colors flex items-center gap-2 group interactive">
            View All Posts <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { date: "May 15, 2026", title: "From Scratch to AI Agents: My 12-Year Journey in Tech", excerpt: "How dragging colorful blocks turned into an obsession with software.", link: "/blog/journey" },
            { date: "May 02, 2026", title: "Why I Keep Building Products That Never Launch", excerpt: "Exploring why incomplete projects are essential for growth.", link: "/blog/never-launch" },
            { date: "Apr 18, 2026", title: "The Future of Software Is Agents, Not Apps", excerpt: "Why the future is about software working alongside us.", link: "/blog/agents-not-apps" },
          ].map((post, idx) => (
            <Link href={post.link} key={idx} className="block group interactive">
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
              <a href="mailto:udhay1co.de@gmail.com" className="font-mono text-sm hover:text-accent-primary transition-colors underline underline-offset-4 interactive">udhay1co.de@gmail.com</a>
            </div>
          </div>
          
          <div className="flex gap-6 font-mono text-sm text-text-secondary">
            <a href="https://github.com/sup-Udh" target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors flex items-center gap-2 interactive">[ GitHub ]</a>
            <a href="https://www.linkedin.com/in/udhay-rajeev-42b193206/" target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors flex items-center gap-2 interactive">[ LinkedIn ]</a>
            <a href="https://x.com/Udhay26903569" target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors flex items-center gap-2 interactive">[ Twitter/X ]</a>
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
