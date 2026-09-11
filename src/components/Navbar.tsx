import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Activities', href: '#activities', id: 'activities' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 dark:text-white group"
            id="nav-logo"
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-indigo-500/20"
            >
              NM
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 inline" /> CS & Design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Hire CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.88, rotate: 20 }}
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
              id="theme-toggle-btn"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </motion.button>

            {/* Quick Contact CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-500/20 transition-all"
              id="nav-quick-contact-btn"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </motion.a>

            {/* Mobile Hamburger Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
            id="mobile-nav-menu"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full text-center py-3 rounded-xl text-sm font-semibold bg-indigo-600 text-white shadow-xs"
                >
                  Contact Neelambika
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
