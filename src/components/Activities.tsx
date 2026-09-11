import React from 'react';
import { motion } from 'motion/react';
import {
  Trophy,
  Zap,
  HeartHandshake,
  CalendarCheck,
  Award,
  Users,
} from 'lucide-react';
import { ACTIVITIES } from '../data/portfolioData.ts';

export const Activities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section
      id="activities"
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
            <Users className="w-3.5 h-3.5" />
            <span>Beyond the Classroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Training & Extracurricular Activities
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Practical competitive exposure, professional technical training, leadership roles, and community contributions.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.title}
              id={`activity-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                    {getIcon(activity.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/60">
                    {activity.roleOrCategory}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {activity.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {activity.tags && (
                <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
