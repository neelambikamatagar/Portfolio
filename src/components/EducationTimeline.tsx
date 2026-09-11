import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData.ts';

export const EducationTimeline: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education Journey
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A chronological timeline of my academic milestones, degrees, and foundational scientific preparation.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/left line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-10">
            {EDUCATION.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.period + item.degree}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot with Pulse Effect */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-600 dark:border-indigo-500 shadow-md flex items-center justify-center z-10">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400"
                      />
                    </div>
                  </div>

                  {/* Card Content with Slide In Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full"
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-all">
                      
                      {/* Period Badge & Level */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.badge}
                        </span>
                      </div>

                      {/* Degree / Program */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        {item.institution}
                      </p>

                      {/* Location & Grade */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>

                        {item.grade && (
                          <span className="inline-flex items-center gap-1 font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded">
                            <Award className="w-3.5 h-3.5 text-emerald-500" />
                            {item.grade}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
