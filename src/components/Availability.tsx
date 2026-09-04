'use client';

import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe } from 'react-icons/fi';
import { fadeIn, staggerContainer, staggerItem, defaultViewport } from '../lib/animations';

const PRIORITY_MARKETS = [
  'USA',
  'Netherlands',
  'Germany',
  'Ireland',
  'United Kingdom',
  'Canada',
  'Australia',
  'UAE',
];

const Availability = () => {
  return (
    <section id="availability" className="py-20 md:py-24 bg-navy-900 relative overflow-hidden">
      {/* Ambient gold light, consistent with the hero treatment */}
      <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-gold-500/10 blur-[110px] z-0"></div>
      <div className="absolute inset-0 editorial-grid opacity-40 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left: heading + status */}
          <motion.div variants={fadeIn('right', 0, 0.6)} className="lg:col-span-5">
            <span className="editorial-eyebrow mb-6">Availability</span>

            <h2 className="font-display text-4xl md:text-5xl text-cream-50 leading-[1.08] mt-6 mb-6">
              Open to <span className="italic text-gold-400">relocation</span> and remote roles
            </h2>
            <span className="gold-rule"></span>

            {/* Status line */}
            <div className="mt-8 inline-flex items-center gap-3 border border-gold-500/40 bg-gold-500/5 px-4 py-2.5">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-500"></span>
              </span>
              <span className="text-[11px] tracking-editorial uppercase text-gold-300 font-semibold">
                Currently: open to new opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: body + markets */}
          <motion.div variants={fadeIn('left', 0.15, 0.6)} className="lg:col-span-7 space-y-8">
            <p className="text-lg md:text-xl text-cream-50/80 leading-relaxed">
              I&apos;m based in Dhaka, Bangladesh, and building toward a move abroad. I&apos;d need employer
              visa sponsorship or relocation support, and I&apos;m equally open to fully remote roles with
              distributed international teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 border border-cream-50/15 p-4">
                <FiMapPin className="text-gold-400 text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Based in</p>
                  <p className="text-cream-50 font-display text-lg">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3 border border-cream-50/15 p-4">
                <FiGlobe className="text-gold-400 text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-editorial uppercase text-cream-50/50 mb-1">Requires</p>
                  <p className="text-cream-50 font-display text-lg">Visa sponsorship</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[10px] tracking-editorial uppercase text-gold-500 mb-4 font-semibold">
                Priority markets
              </p>
              <motion.div
                variants={staggerContainer(0.05)}
                initial="initial"
                whileInView="whileInView"
                viewport={defaultViewport}
                className="flex flex-wrap gap-2"
              >
                {PRIORITY_MARKETS.map((market) => (
                  <motion.span key={market} variants={staggerItem} className="chip-dark">
                    <span className="chip-dot"></span>
                    {market}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Availability;
