import React from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Tag, AlertCircle, Sparkles } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNotify?: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onNotify }) => {
  if (!project) return null;

  const handlePlaceholderClick = (type: 'github' | 'demo') => {
    if (onNotify) {
      if (type === 'github') {
        onNotify(
          `GitHub placeholder for "${project.title}": Ready to link to your GitHub repository!`
        );
      } else {
        onNotify(
          `Live Demo placeholder for "${project.title}": Ready to link once deployed!`
        );
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col z-10"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-800/40">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  project.statusType === 'completed'
                    ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300'
                    : project.statusType === 'current'
                    ? 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300'
                    : 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3" />
                {project.status}
              </span>
            </div>
            <h3
              id="project-modal-title"
              className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              {project.title}
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Project Overview
            </h4>
            <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                Key Technical Features & Methodology
              </h4>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  <Tag className="w-3 h-3 text-indigo-500" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Notice on honest documentation */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <AlertCircle className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
            <p>
              Note: This project documentation strictly reflects verified coursework and student development status without speculative backend or production claims.
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => handlePlaceholderClick('github')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 transition-colors shadow-xs cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (Placeholder)</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => handlePlaceholderClick('demo')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:hover:bg-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo (Placeholder)</span>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
