import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Info } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Projects } from './components/Projects.tsx';
import { EducationTimeline } from './components/EducationTimeline.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Activities } from './components/Activities.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Apply dark mode class to HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Scroll listener for active nav link & floating scroll button
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'skills',
      'projects',
      'education',
      'certifications',
      'activities',
      'contact',
    ];

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const scrollPosition = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-indigo-600 selection:text-white transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onNotify={triggerNotification} />
        <About />
        <Skills />
        <Projects onNotify={triggerNotification} />
        <EducationTimeline />
        <Certifications />
        <Activities />
        <Contact onNotify={triggerNotification} />
      </main>

      {/* Footer */}
      <Footer onNotify={triggerNotification} />

      {/* Floating Scroll to Top Button with Motion Animations */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={scrollToTop}
            id="floating-scroll-top-btn"
            aria-label="Scroll to top of page"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification Container with Spring Motion */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 40, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-6 left-1/2 z-50 px-4 py-3 rounded-xl bg-slate-900/95 dark:bg-slate-800/95 text-white border border-slate-700 shadow-xl backdrop-blur-md text-xs sm:text-sm font-medium flex items-center gap-2.5 max-w-md pointer-events-none"
          >
            <Info className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>{notification}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
