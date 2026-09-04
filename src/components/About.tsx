'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaLightbulb } from 'react-icons/fa';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '150+', label: 'Critical Bugs Closed' },
    { value: '15K+', label: 'Lines Refactored' },
    { value: '30+', label: 'Engineers Placed' },
  ];

  const traits = [
    { icon: <FaCode className="text-base" />, label: 'Clean Code' },
    { icon: <FaServer className="text-base" />, label: 'Scalable Systems' },
    { icon: <FaBrain className="text-base" />, label: 'Problem Solving' },
    { icon: <FaLightbulb className="text-base" />, label: 'Innovative Ideas' },
  ];

  return (
    <section id="about" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
        >
          {/* Left: section header */}
          <motion.div variants={fadeIn('right', 0, 0.6)} className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="editorial-eyebrow mb-6">About</span>
            <h2 className="font-display text-5xl md:text-6xl text-navy-900 leading-[1.05] mt-6 mb-8">
              A <span className="italic text-gold-600">full stack</span> engineer with a QA-driven mindset.
            </h2>
            <span className="gold-rule"></span>
            <p className="mt-8 text-base text-ink-600 leading-relaxed">
              I build, ship, and harden production-grade web applications. From API architecture to pixel-perfect UI, my work is shaped by a discipline borrowed from QA: assume nothing, test everything.
            </p>
          </motion.div>

          {/* Right: content */}
          <motion.div variants={fadeIn('left', 0.2, 0.6)} className="lg:col-span-8 space-y-10">
            <div className="space-y-5 text-lg text-ink-700 leading-relaxed font-light">
              <p>
                Full Stack Software Engineer with 5+ years building across Angular, React, Vue.js, Next.js, Python-Django, and NestJS.
              </p>
              <p>
                I write each feature, write its test cases with TDD, and run the end-to-end automation in Cypress, Playwright, and Selenium — so quality is never handed off to someone else.
              </p>
              <p>
                Shipped products for enterprise SaaS platforms, the Bangladesh Olympic Association, and open-source tools used by developers worldwide.
              </p>
              <p>
                I&apos;m also a technical recruiter who has placed 30+ engineers — so I know what a strong engineer looks like from both sides of the hiring table.
              </p>
            </div>

            {/* Stats — editorial grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-navy-900/10">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeIn('up', 0, 0.4)}
                  className="border-r border-b border-navy-900/10 p-6 bg-cream-50 hover:bg-white transition-colors"
                >
                  <p className="font-display text-4xl text-navy-900">{stat.value}</p>
                  <span className="block w-6 h-px bg-gold-500 my-3"></span>
                  <p className="text-xs tracking-wider uppercase text-ink-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {traits.map((trait) => (
                <motion.div
                  key={trait.label}
                  variants={fadeIn('up', 0, 0.5)}
                  className="flex items-center gap-3 px-4 py-3 border border-navy-900/15 bg-white/60 hover:border-gold-500 hover:bg-white transition-all"
                >
                  <span className="text-gold-600">{trait.icon}</span>
                  <span className="text-sm font-medium text-navy-900">{trait.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
