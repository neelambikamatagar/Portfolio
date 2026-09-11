import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Code2,
  Palette,
  Laptop,
  CheckCircle2,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface HeroProps {
  onNotify?: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'design'>('code');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    if (onNotify) onNotify('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNotify) {
      onNotify('GitHub Placeholder: You can update this with your actual GitHub username anytime!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60"
    >
      {/* Subtle background ambient circles with gentle pulse */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 dark:opacity-20 blur-3xl">
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-900/50 absolute -top-10 left-1/4"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.45, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="w-80 h-80 rounded-full bg-violet-200 dark:bg-purple-900/40 absolute top-10 right-1/4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs with motion stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Internships & Software Opportunities</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 dark:from-indigo-400 dark:via-violet-300 dark:to-purple-300">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.role}
              </p>
            </motion.div>

            {/* Short Introduction */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Academic pill info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 transition-colors">
                <Laptop className="w-3.5 h-3.5 text-indigo-500" />
                Alva’s Institute of Engg. & Tech (2023–2027)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                <span>📍</span> Mangalore, Karnataka
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                id="hero-view-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-600/25 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                id="hero-contact-me-btn"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-xs transition-all"
              >
                <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Contact Me</span>
              </motion.a>
            </motion.div>

            {/* Social Icons & Email Quick Copy */}
            <motion.div
              variants={itemVariants}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-600 dark:text-slate-400"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Neelambika Matagar LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-600" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github-link"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-colors border border-slate-200 dark:border-slate-700"
                aria-label="Neelambika Matagar GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </motion.a>

              {/* Copy Email Button */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual Element with entrance animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-shadow hover:shadow-2xl">
              
              {/* Window Title Bar */}
              <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                    cs-design.config.ts
                  </span>
                </div>
                
                {/* Tab switcher */}
                <div className="flex items-center bg-slate-200/70 dark:bg-slate-950 p-0.5 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab('code')}
                    className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-all ${
                      activeTab === 'code'
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Logic</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('design')}
                    className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-all ${
                      activeTab === 'design'
                        ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-xs'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5" />
                    <span>Design UI</span>
                  </button>
                </div>
              </div>

              {/* Code / Design view with smooth tab animated crossfade */}
              <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === 'code' ? (
                    <motion.div
                      key="code-tab"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-1.5 text-slate-700 dark:text-slate-300"
                    >
                      <div className="text-slate-400 italic">// Computer Science & Design Profile</div>
                      <div>
                        <span className="text-violet-600 dark:text-violet-400">const</span>{' '}
                        <span className="text-blue-600 dark:text-blue-400">engineer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">name:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">'Neelambika Matagar'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">degree:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">'B.E. Computer Science & Design'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">coreStack:</span> [
                        <span className="text-amber-600 dark:text-amber-400">'React.js'</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-400">'Python'</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-400">'SQL'</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-400">'Figma'</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">strengths:</span> [
                        <span className="text-indigo-600 dark:text-indigo-300">'Web Development'</span>,{' '}
                        <span className="text-indigo-600 dark:text-indigo-300">'UI/UX Design'</span>,{' '}
                        <span className="text-indigo-600 dark:text-indigo-300">'ML Applications'</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">focus:</span>{' '}
                        <span className="text-emerald-600 dark:text-emerald-400">'User-friendly web applications'</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-slate-500 dark:text-slate-400">status:</span>{' '}
                        <span className="text-emerald-500 font-semibold">'Ready for Real-world Projects'</span>
                      </div>
                      <div>&#125;;</div>
                      <div className="pt-2 text-indigo-600 dark:text-indigo-400">
                        <span className="text-slate-400">export default</span> engineer;
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="design-tab"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4 font-sans"
                    >
                      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            UI/UX Principles
                          </span>
                          <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Figma to Code</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">Accessibility</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">High contrast & readable type</p>
                          </div>
                          <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                            <p className="font-semibold text-slate-800 dark:text-slate-200">Responsive</p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Mobile to desktop fluid grids</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div className="text-xs">
                          <p className="font-semibold text-indigo-950 dark:text-indigo-200">Design System Focus</p>
                          <p className="text-slate-600 dark:text-slate-400">Clean typography, consistent spacing & intuitive UX</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom stats banner */}
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Alva's Institute (AIET)
                </span>
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Class of 2027
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
