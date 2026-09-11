import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { Certification } from '../types.ts';

interface CertificationCardProps {
  cert: Certification;
  index?: number;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ cert, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      id={`cert-card-${cert.id}`}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-900/60 transition-shadow flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-900/60 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Verified Completion
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {cert.title}
        </h3>

        {cert.issuer && (
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            {cert.issuer}
          </p>
        )}

        {cert.skillsCovered && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {cert.skillsCovered.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-indigo-400" />
          Academic & Professional
        </span>
        <span className="font-mono text-[11px]">Certified</span>
      </div>
    </motion.div>
  );
};
