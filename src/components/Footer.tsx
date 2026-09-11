import React from 'react';
import { Linkedin, Github, Mail, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onNotify?: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNotify }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNotify) {
      onNotify('GitHub Placeholder: Ready to link your GitHub profile anytime!');
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                NM
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Computer Science & Design Student • Alva's Institute of Engineering & Technology
            </p>
          </div>

          {/* Social Links & Jump to Top */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Neelambika Matagar LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Neelambika Matagar GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Send email to Neelambika Matagar"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Scroll to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="ml-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950 dark:hover:text-indigo-400 transition-all border border-slate-200 dark:border-slate-700"
              title="Scroll to top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3 text-center sm:text-left">
          <p>
            © 2026 Neelambika Matagar. Designed and developed with passion.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <span>Mangalore, Karnataka</span>
            <span>•</span>
            <span>AIET CS & Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
