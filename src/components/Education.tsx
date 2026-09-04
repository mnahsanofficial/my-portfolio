'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';
import EvidenceModal, { Evidence } from './EvidenceModal';

// Scans backing each credential. Paths must exist in /public or the modal
// falls back to an "image not available" message rather than a broken icon.
const ITEE_EVIDENCE: Evidence = {
  title: 'Fundamental IT Engineer Examination (FE) — ITEE',
  caption: 'Issued by Bangladesh Computer Council (BCC) · 23 April 2022',
  src: '/assets/images/credentials/certificate-itee-fe.jpg',
  alt: 'ITEE Fundamental IT Engineer Examination certificate awarded to Nazmul Ahsan',
};

const AWARD_EVIDENCE: Evidence = {
  title: 'Highest Placement Bonus Achiever',
  caption: 'Talvette · Q2 2026',
  src: '/assets/images/credentials/award-talvette-placement-bonus.png',
  alt: 'Talvette Highest Placement Bonus Achiever award for Nazmul Ahsan, Q2 2026',
};

const Education = () => {
  const [evidence, setEvidence] = useState<Evidence | null>(null);
  const educationData = [
    {
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      institution: "Jahangirnagar University",
      year: "2018 — 2023",
      icon: <FaGraduationCap />,
      description: "Focused on algorithms, data structures, web development, and software engineering principles."
    }
  ];

  return (
    <section id="education" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">Education & Credentials</span>
          <h2 className="font-display text-5xl md:text-6xl text-navy-900 leading-[1.05] mt-6 mb-6">
            Where I <span className="italic text-gold-600">learned</span>.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-ink-600 leading-relaxed">
            Academic foundation and professional certifications.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-navy-900/15 md:-translate-x-1/2"></div>

          <motion.div
            variants={staggerContainer(0.2, 0.15)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-16"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0, 0.6)}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:items-center`}
              >
                {/* Timeline node */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-paper border border-gold-500 z-10">
                  <span className="text-gold-600">{edu.icon}</span>
                </div>

                {/* Card */}
                {/* On mobile the card sits right of the timeline rail (ml-20), so its width
                    must subtract that offset — plain w-full overflowed the page by 80px. */}
                <div className={`w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <motion.div
                    variants={staggerContainer(0.08, 0.2)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={defaultViewport}
                    className="bg-cream-50 border border-navy-900/10 p-6 lg:p-8 hover:border-gold-500/60 hover:bg-white transition-all duration-300"
                  >
                    <motion.div variants={fadeIn('down', 0, 0.4)} className="flex items-baseline justify-between gap-3 mb-4">
                      <span className="font-mono text-xs text-gold-600 tracking-wider">
                        {edu.year}
                      </span>
                      <span className="block flex-1 h-px bg-navy-900/10"></span>
                    </motion.div>

                    <motion.h3 variants={fadeIn('up', 0, 0.4)} className="font-display text-2xl text-navy-900 leading-tight">
                      {edu.degree}
                    </motion.h3>

                    {edu.field && (
                      <motion.p variants={fadeIn('up', 0.05, 0.4)} className="text-gold-600 italic font-display mt-1">
                        {edu.field}
                      </motion.p>
                    )}

                    <motion.h4 variants={fadeIn('up', 0.1, 0.4)} className="text-sm font-semibold uppercase tracking-wider text-ink-700 mt-3">
                      {edu.institution}
                    </motion.h4>

                    <motion.p variants={fadeIn('up', 0.2, 0.4)} className="text-ink-600 mt-4 leading-relaxed text-[15px]">
                      {edu.description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          variants={fadeIn('up', 0.1, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mt-20 bg-navy-900 text-cream-50 p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[80px]"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex md:justify-center">
              <span className="w-16 h-16 border border-gold-500 flex items-center justify-center text-gold-500">
                <FaAward className="text-2xl" />
              </span>
            </div>
            <div className="md:col-span-10">
              <span className="text-[10px] tracking-editorial uppercase text-gold-500">Certification</span>
              <h3 className="font-display text-3xl md:text-4xl mt-3 mb-4 leading-tight">
                Fundamental IT Engineer Examination <span className="italic text-gold-400">(FE) — ITEE</span>
              </h3>
              <span className="block w-12 h-px bg-gold-500 my-4"></span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-cream-50/85">
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Result</p>
                  <p className="font-semibold">Full Passer</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">National Rank</p>
                  <p className="font-semibold">13th</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Date</p>
                  <p className="font-semibold">23 April 2022</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Issued by</p>
                  <p className="font-semibold">Bangladesh Computer Council (BCC)</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEvidence(ITEE_EVIDENCE)}
                className="mt-7 inline-flex items-center gap-2 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 px-4 py-2.5 transition-colors"
              >
                <FiSearch className="text-sm" />
                <span className="text-[11px] tracking-editorial uppercase font-semibold">Verify</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Achievement */}
        <motion.div
          variants={fadeIn('up', 0.1, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mt-8 bg-navy-900 text-cream-50 p-10 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/10 blur-[80px]"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2 flex md:justify-center">
              <span className="w-16 h-16 border border-gold-500 flex items-center justify-center text-gold-500">
                <FaTrophy className="text-2xl" />
              </span>
            </div>
            <div className="md:col-span-10">
              <span className="text-[10px] tracking-editorial uppercase text-gold-500">Achievement</span>
              <h3 className="font-display text-3xl md:text-4xl mt-3 mb-4 leading-tight">
                Highest Placement Bonus <span className="italic text-gold-400">Achiever</span>
              </h3>
              <span className="block w-12 h-px bg-gold-500 my-4"></span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-cream-50/85">
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Awarded by</p>
                  <p className="font-semibold">Talvette</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Period</p>
                  <p className="font-semibold">Q2 2026</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Distinction</p>
                  <p className="font-semibold">Highest in company history</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEvidence(AWARD_EVIDENCE)}
                className="mt-7 inline-flex items-center gap-2 border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 px-4 py-2.5 transition-colors"
              >
                <FiSearch className="text-sm" />
                <span className="text-[11px] tracking-editorial uppercase font-semibold">Verify</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <EvidenceModal evidence={evidence} onClose={() => setEvidence(null)} />
    </section>
  );
};

export default Education;
