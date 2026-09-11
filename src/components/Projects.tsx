import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Info } from 'lucide-react';
import { ProjectCard } from './ProjectCard.tsx';
import { ProjectModal } from './ProjectModal.tsx';
import { PROJECTS } from '../data/portfolioData.ts';
import { Project } from '../types.ts';

interface ProjectsProps {
  onNotify?: (msg: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNotify }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'current' | 'ongoing'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.statusType === filter;
  });

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Portfolio Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Projects & Works in Progress
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Practical software implementations demonstrating machine learning application, responsive web engineering, and user-centric UI/UX design.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: `All Projects (${PROJECTS.length})` },
              { id: 'completed', label: 'Completed ML' },
              { id: 'current', label: 'Current Web' },
              { id: 'ongoing', label: 'UI/UX Concept' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                type="button"
                id={`filter-projects-${tab.id}`}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                onNotify={onNotify}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Authentic Transparency Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-start sm:items-center gap-3 text-xs text-slate-500 dark:text-slate-400"
        >
          <Info className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-slate-700 dark:text-slate-300">Recruiter Note:</strong>{' '}
            Project descriptions reflect real student coursework and current development stages. GitHub and live demo action buttons are prepared placeholders that can be updated with public repository URLs at any time.
          </p>
        </motion.div>

      </div>

      {/* Project Deep-dive Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onNotify={onNotify}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
