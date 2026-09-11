import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck } from 'lucide-react';
import { CertificationCard } from './CertificationCard.tsx';
import { CERTIFICATIONS } from '../data/portfolioData.ts';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
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
            <Award className="w-3.5 h-3.5" />
            <span>Lifelong Learning & Accreditation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Certifications & Courses
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            Targeted training and certifications across artificial intelligence, machine learning, networking security, and professional career readiness.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Note on certificates */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-center justify-center"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            Certificates and course completion records are available upon request during recruitment and interview verification.
          </span>
        </motion.div>

      </div>
    </section>
  );
};
