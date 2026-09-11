import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Code,
  Palette,
  Lightbulb,
  Compass,
  Languages,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, LANGUAGES } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const cardHover = {
    hover: { y: -4, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bridging Computer Science Logic with Thoughtful User Interface Design
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="prose prose-slate dark:prose-invert max-w-none text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
              <p>
                I am a motivated <strong className="text-slate-900 dark:text-white">Computer Science and Design</strong> undergraduate 
                at <span className="text-slate-900 dark:text-white font-medium">Alva’s Institute of Engineering and Technology</span> (Class of 2027). 
                My studies uniquely combine core computer science fundamentals with modern digital design thinking.
              </p>
              <p>
                With a practical foundation in <span className="font-semibold text-indigo-600 dark:text-indigo-400">HTML, CSS, JavaScript, Python, and SQL</span>, 
                I have a strong interest in front-end web development and creating clean, responsive, user-friendly web applications. 
                I enjoy transforming wireframes and functional logic into seamless digital interfaces that feel effortless to use.
              </p>
              <p>
                As an adaptable learner, I bring a solid problem-solving mindset, clear communication, and dependable teamwork to every project. 
                Whether participating in technical hackathons, coordinating college initiatives, or exploring new technologies, 
                I am actively seeking internship and software development opportunities to contribute to real-world software engineering projects.
              </p>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 transition-shadow hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Clean Web Development
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Building responsive, semantic, and well-structured web layouts using modern web standards.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 transition-shadow hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-100 dark:bg-violet-900/60 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-3">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  UI/UX & User-Centricity
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Designing intuitive workflows in Figma, prioritizing clear typography, hierarchy, and accessibility.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 transition-shadow hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Analytical Problem Solving
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Applying algorithmic thinking and data structure concepts to solve practical challenges.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-750 transition-shadow hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">
                  Continuous Growth Mindset
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Consistently upskilling through online certifications, competitive ideathons, and peer collaboration.
                </p>
              </motion.div>
            </div>

          </motion.div>

          {/* Right Column: Quick Profile Card & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick Profile Summary Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Academic & Candidate Profile</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">
                    Degree
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    B.E. in Computer Science and Design (2023 – 2027)
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">
                    Institution
                  </span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    Alva’s Institute of Engineering and Technology
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">
                      Academic CGPA
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      8.00 / 10
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block">
                      Location
                    </span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Mangalore, Karnataka
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold block mb-1">
                    Seeking
                  </span>
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                    Software Development & UI/UX Internships
                  </span>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Languages className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Languages</span>
              </h3>
              <div className="space-y-2.5">
                {LANGUAGES.map((lang) => (
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                      {lang.name}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {lang.proficiency}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
