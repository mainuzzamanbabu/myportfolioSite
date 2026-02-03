"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { projects, categories } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { services } from "@/data/services";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

// Counter Component - Fixed for hydration
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(end); // Start with end value to avoid hydration mismatch
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setCount(0);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Navigation
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Experience", "Projects", "Services", "Skills", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark/0 ${
        scrolled ? "nav-glass py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text">MZ</a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-primary-sm ml-2">
            Hire Me →
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-2xl p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="lg:hidden absolute top-full left-0 right-0 nav-glass border-t border-white/10 overflow-hidden shadow-2xl z-50"
          >
            <div className="container mx-auto px-8 py-10 flex flex-col gap-8 items-center">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-2xl font-semibold tracking-wide text-white/80 hover:text-white transition-all hover:scale-105"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
              <div className="w-full h-px bg-white/10 my-2" />
              <a 
                href="#contact" 
                className="btn-primary w-full text-center py-4 text-lg"
                onClick={() => setMobileOpen(false)}
              >
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative flex items-center pt-24 pb-0 lg:pt-32 lg:pb-0 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            >
              <span className="block text-white">Hi there, I&apos;m</span>
              <span className="gradient-text">Mainuzzaman</span>
            </motion.h1>
            
            <motion.div variants={fadeInUp} className="text-xl sm:text-2xl text-blue-400 font-medium mb-8">
              <TypeAnimation
                sequence={[
                  "Full-Stack Software Engineer",
                  2000,
                  "React & Next.js Expert",
                  2000,
                  "Node.js & Python Specialist",
                  2000,
                  "E-Commerce Builder",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-base sm:text-lg text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ marginBottom: '1rem' }}
            >
              5+ years building production web applications across e-commerce, enterprise systems, 
              and educational platforms. Transforming ideas into scalable digital products.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start ml-0 mb-8 lg:mb-6">
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <a href="#contact" className="btn-secondary">
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex gap-3 mt-4 lg:mt-3 justify-center lg:justify-start ml-0">
              {[
                { href: "https://github.com/mainuzzaman", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
                { href: "https://linkedin.com/in/mainuzzaman", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { href: "mailto:mainuzzamanb@gmail.com", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-white/80 hover:text-white hover:border-blue-500/50 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="flex justify-center lg:justify-center order-1 lg:order-2"
          >
            <div className="profile-image-container w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="profile-image-inner">
                <Image
                  src="/mz.jpg"
                  alt="Mainuzzaman - Full-Stack Software Engineer"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const stats = [
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 21, suffix: "+", label: "Projects Delivered" },
    { value: 80, suffix: "K+", label: "Users Served" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-8">
            <motion.h2 variants={fadeInUp} className="section-title">
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              Building scalable solutions with modern technologies
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <p className="text-base sm:text-lg text-white/75 leading-relaxed text-center lg:text-left">
                I am a results-driven <strong className="text-white">Full-Stack Software Engineer</strong> based in 
                Dhaka, Bangladesh, with <strong className="text-white">5+ years of experience</strong> building 
                production-ready web applications.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: "⚡", title: "Frontend Excellence", color: "text-blue-400", desc: "React, Next.js, TypeScript, Redux Toolkit, Tailwind CSS — building responsive, performant interfaces serving 80,000+ users." },
                  { icon: "🛠️", title: "Backend Mastery", color: "text-purple-400", desc: "Python, Django, FastAPI, PostgreSQL, Redis, Celery — architecting scalable APIs and background processing systems." },
                  { icon: "🛒", title: "E-Commerce & Enterprise", color: "text-emerald-400", desc: "Multi-brand e-commerce platforms, ERP systems, inventory management, payment integrations (Stripe, PayPal)." }
                ].map((item, i) => (
                  <div key={i} className="glass-card p-5">
                    <h4 className={`font-semibold ${item.color} mb-2 flex items-center gap-2`}>
                      <span className="text-xl">{item.icon}</span> {item.title}
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="counter">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-white/50 mt-2 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 glass-card p-6">
                <h4 className="font-semibold mb-5 text-lg">📍 Quick Info</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Location:</span>
                    <span>Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Email:</span>
                    <span className="text-sm">mainuzzamanb@gmail.com</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50">Availability:</span>
                    <span className="text-emerald-400 font-medium">Open to work</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Experience Section
function ExperienceSection() {
  return (
    <section id="experience" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="section-title">
              Work <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              5+ years of professional software development
            </motion.p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/30 space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="experience-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit border border-white/10">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.slice(0, 6).map((tech, i) => (
                    <span key={i} className="tech-badge text-xs">{tech}</span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-10">
            <motion.h2 variants={fadeInUp} className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              21+ production projects across multiple industries
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn text-xs sm:text-sm ${activeFilter === category ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                layout
                className="project-card group"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="tech-badge text-xs">{project.category}</span>
                    {project.featured && (
                      <span className="text-xs text-yellow-400 flex items-center gap-1">
                        ★ Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-white/50 mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-white/40">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 font-medium"
                    >
                      View Live ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length > 9 && (
            <motion.p variants={fadeInUp} className="text-center mt-8 text-white/40">
              And {filteredProjects.length - 9} more projects...
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  return (
    <section id="services" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="section-title">
              My <span className="gradient-text">Services</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              What I can build for you
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="service-card group"
              >
                <span className="service-icon">{service.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-white/50 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-5">
                  {service.deliverables.slice(0, 4).map((item, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="text-purple-400 shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-white/10">
                  <span className="text-blue-400 font-bold">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  return (
    <section id="skills" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="section-title">
              Tech <span className="gradient-text">Stack</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              Technologies I work with
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div key={index} variants={fadeInUp} className="glass-card p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-xl sm:text-2xl">
                    {index === 0 && "⚡"}
                    {index === 1 && "🛠️"}
                    {index === 2 && "🔧"}
                    {index === 3 && "🤖"}
                  </span>
                  {category.title}
                </h3>
                
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-white/40">{skill.years} years</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="section-padding px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
              Let&apos;s discuss your project
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <div className="glass-card p-6 sm:p-8 h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  {[
                    { icon: "📧", label: "Email", value: "mainuzzamanb@gmail.com", href: "mailto:mainuzzamanb@gmail.com", color: "bg-blue-500/10" },
                    { icon: "📱", label: "Phone", value: "+8801999348089", href: "tel:+8801999348089", color: "bg-purple-500/10" },
                    { icon: "📍", label: "Location", value: "Dhaka, Bangladesh (GMT+6)", color: "bg-emerald-500/10" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-white/50">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="hover:text-blue-400 transition-colors font-medium text-sm sm:text-base truncate block">{item.value}</a>
                        ) : (
                          <p className="font-medium text-sm sm:text-base">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-3">Available for:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Freelance", "Remote", "Consulting"].map((item, i) => (
                      <span key={i} className="tech-badge text-xs">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form className="glass-card p-6 sm:p-8 space-y-5">
                <div>
                  <label className="text-sm text-white/50 block mb-2">Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div>
                  <label className="text-sm text-white/50 block mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <label className="text-sm text-white/50 block mb-2">Message</label>
                  <textarea rows={4} placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message →
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-white/10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/40">
          © 2026 <span className="gradient-text font-semibold">Mainuzzaman</span>. All rights reserved.
        </p>
        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/mainuzzaman" },
            { label: "LinkedIn", href: "https://linkedin.com/in/mainuzzaman" },
            { label: "Email", href: "mailto:mainuzzamanb@gmail.com" }
          ].map((link, i) => (
            <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
