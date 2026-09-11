import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Layout,
  Database,
  Server,
  Wrench,
  Cpu,
  Users,
  Check,
  Search,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-blue-500" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-rose-500" />;
      case 'Users':
        return <Users className="w-5 h-5 text-teal-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    const matchesCategory =
      selectedCategory === 'All' || category.title === selectedCategory;
    
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesTitle = category.title.toLowerCase().includes(query);
    const matchesSkills = category.skills.some((skill) =>
      skill.toLowerCase().includes(query)
    );

    return matchesTitle || matchesSkills;
  });

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
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
              <Code className="w-3.5 h-3.5" />
              <span>Technical & Professional Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Skills & Core Technologies
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
              Categorized competencies developed through academic coursework, personal development, and hands-on projects.
            </p>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="skills-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g., Python, React)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400 transition-all"
            />
          </div>
        </motion.div>

        {/* Category Pills Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              whileTap={{ scale: 0.96 }}
              id={`filter-skill-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skill Cards Grid with Animated Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 15 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -4 }}
                key={category.title}
                id={`skill-card-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 transition-transform group-hover:scale-105">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => {
                      const isMatched =
                        searchQuery.trim() !== '' &&
                        skill.toLowerCase().includes(searchQuery.toLowerCase());

                      return (
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          key={skill}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-default ${
                            isMatched
                              ? 'bg-indigo-100 text-indigo-900 border border-indigo-300 dark:bg-indigo-900/80 dark:text-indigo-200 dark:border-indigo-600 ring-2 ring-indigo-500/20'
                              : 'bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/40 hover:text-indigo-700 dark:hover:text-indigo-300'
                          }`}
                        >
                          <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span>{skill}</span>
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom tag info */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="font-mono">Verified coursework & projects</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on Transparency */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-500 dark:text-slate-400"
        >
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Transparent Skill Representation:
          </span>{' '}
          All skills reflect active coursework, hands-on laboratory practice, project implementations, and certifications without inflated proficiency percentages.
        </motion.div>

      </div>
    </section>
  );
};
