import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, Tag, Sparkles } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onNotify?: (msg: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onNotify }) => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      case 'current':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800';
      case 'ongoing':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    }
  };

  const handlePlaceholder = (e: React.MouseEvent, type: 'github' | 'demo') => {
    e.stopPropagation();
    if (onNotify) {
      if (type === 'github') {
        onNotify(`GitHub placeholder for "${project.title}": Ready for your repository link.`);
      } else {
        onNotify(`Live Demo placeholder for "${project.title}": Ready for your deployment URL.`);
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      transition={{ duration: 0.4 }}
      id={`project-card-${project.id}`}
      className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-800/80 transition-shadow duration-300 group cursor-default"
    >
      <div>
        {/* Header with Status & Category Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(
              project.statusType
            )}`}
          >
            <Sparkles className="w-3 h-3" />
            <span>{project.status}</span>
          </span>

          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
            {project.statusType === 'completed' ? 'Academic ML' : 'Web & UI/UX'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Key Features (if available) */}
        {project.keyFeatures && (
          <div className="mb-4 space-y-1.5 pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
              Key Highlights:
            </span>
            {project.keyFeatures.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span
              whileHover={{ scale: 1.05 }}
              key={tech}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Tag className="w-3 h-3 text-indigo-500" />
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2.5">
        <motion.button
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.96 }}
          type="button"
          onClick={() => onSelect(project)}
          id={`view-project-details-${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group/btn transition-colors cursor-pointer"
        >
          <span>View Project Details</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </motion.button>

        <div className="flex items-center gap-1.5">
          {/* GitHub Placeholder Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={(e) => handlePlaceholder(e, 'github')}
            id={`project-github-btn-${project.id}`}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="GitHub repository placeholder"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </motion.button>

          {/* Live Demo Placeholder Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={(e) => handlePlaceholder(e, 'demo')}
            id={`project-demo-btn-${project.id}`}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Live demo link placeholder"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
