import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface ContactProps {
  onNotify?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    if (onNotify) onNotify(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) errs.name = 'Please enter your name.';
    if (!email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & transition
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onNotify) {
        onNotify('Message prepared! Click "Open in Email Client" to send directly.');
      }
    }, 600);
  };

  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name || 'Recruiter'}`
  )}&body=${encodeURIComponent(
    `Hello Neelambika,\n\n${message}\n\nFrom,\n${name}\n(${email})`
  )}`;

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
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
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Internships, Projects & Opportunities
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            I am actively seeking internship and placement opportunities in software development, front-end engineering, and UI/UX design. Feel free to contact me directly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200 dark:border-slate-700">
                Contact Details
              </h3>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                  Email Address
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy email"
                  >
                    {copiedField === 'Email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                  Phone Number
                </span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    title="Copy phone"
                  >
                    {copiedField === 'Phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                  LinkedIn Profile
                </span>
                <motion.a
                  whileHover={{ x: 2 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60 group hover:border-indigo-300 dark:hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600">
                      in/neelambika-matagar
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
                </motion.a>
              </div>

              {/* Location */}
              <div className="space-y-1">
                <span className="text-xs uppercase font-semibold text-slate-500 dark:text-slate-400 block">
                  Current Location
                </span>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/60">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              
              <div className="flex items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Reach out for recruitment, technical collaborations, or general queries.
                  </p>
                </div>
                <MessageSquare className="w-5 h-5 text-indigo-500" />
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        Message Prepared!
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                        Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong>! As this portfolio operates as a frontend showcase, you can dispatch your message directly via your email client below or reach out directly at{' '}
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">{PERSONAL_INFO.email}</span>.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={mailtoLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Open in Email Client</span>
                      </motion.a>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                      >
                        Write Another Message
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4" id="portfolio-contact-form">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Recruiter / Hiring Manager"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.name
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.email
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message Area */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Describe the opportunity, internship role, or project inquiry..."
                        className={`w-full px-4 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.message
                            ? 'border-rose-500 focus:ring-rose-500'
                            : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 resize-y`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Frontend transparency disclaimer */}
                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>
                        Notice: This form operates client-side for validation. Submitting prepares your message to open in your default email client or copy directly to ensure reliable delivery.
                      </span>
                    </div>

                    {/* Submit Button with Motion Tap */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating & Preparing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
