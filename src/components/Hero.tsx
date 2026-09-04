'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  fadeIn,
  scaleUp,
  staggerContainer,
  defaultViewport
} from '../lib/animations';
import { SiAngular, SiNextdotjs, SiPython, SiNestjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

interface BubbleStyle {
  id: number;
  initialX: number;
  animateY: number[];
  animateX: (string | number)[];
  transitionDuration: number;
  width: string;
  height: string;
  left: string;
  top: string;
}

const Hero = () => {
  const [bubbleParams, setBubbleParams] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    const newBubbleParams = [...Array(8)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 100,
      animateY: [0, -120, -240, -360],
      animateX: [0, Math.random() * 60 - 30, Math.random() * 60 - 30, Math.random() * 60 - 30],
      transitionDuration: 18 + Math.random() * 10,
      width: `${3 + Math.random() * 4}px`,
      height: `${3 + Math.random() * 4}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setBubbleParams(newBubbleParams);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Editorial grid texture */}
      <div className="absolute inset-0 editorial-grid opacity-60 z-0"></div>

      {/* Gold radial ambient light */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold-500/10 blur-[120px] z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[100px] z-0"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {bubbleParams.map((params) => (
          <motion.div
            key={params.id}
            initial={{ y: 0, x: params.initialX }}
            animate={{
              y: params.animateY,
              x: params.animateX,
              opacity: [0.4, 0.3, 0.15, 0]
            }}
            transition={{
              duration: params.transitionDuration,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gold-400/40"
            style={{
              width: params.width,
              height: params.height,
              left: params.left,
              top: params.top
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="lg:col-span-7 text-left"
          >
            <motion.div variants={fadeIn('up', 0, 0.5)} className="editorial-eyebrow mb-8">
              Portfolio · 2026
            </motion.div>

            <motion.h1 className="font-display text-[2.15rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] leading-[1.08] mb-6 text-cream-50">
              <motion.span variants={fadeIn('up', 0.1, 0.6)} className="block">
                Full Stack Engineer
              </motion.span>
              <motion.span variants={fadeIn('up', 0.2, 0.6)} className="block">
                <span className="text-gold-500/50 mr-2 sm:mr-3">|</span>QA Automation
              </motion.span>
              <motion.span variants={fadeIn('up', 0.3, 0.6)} className="block italic text-gold-400">
                <span className="not-italic text-gold-500/50 mr-2 sm:mr-3">|</span>Technical Recruiter
              </motion.span>
            </motion.h1>

            <motion.div variants={fadeIn('up', 0.4, 0.6)} className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="gold-rule"></span>
              <p className="text-sm tracking-wider uppercase text-cream-50/70 font-medium">
                Nazmul Ahsan — Dhaka, Bangladesh
              </p>
            </motion.div>

            <motion.p variants={fadeIn('up', 0.5, 0.6)} className="mt-8 text-lg md:text-xl text-cream-50/75 max-w-xl leading-relaxed">
              I build features, write my own test cases, and I&apos;ve hired engineers too. Five years across Angular, React, Vue.js, Next.js, Python-Django, and NestJS — shipping the feature, proving it works, and knowing a strong engineer when I see one.
            </motion.p>

            <motion.div variants={staggerContainer(0.15, 0.6)} className="mt-12 flex flex-col sm:flex-row gap-4">
              <motion.a
                variants={scaleUp(0, 0.5)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <span className="text-[11px] tracking-editorial uppercase">Download Resume</span>
              </motion.a>

              <motion.div variants={scaleUp(0, 0.5)} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="#projects" className="btn-outline-light">
                  <span className="text-[11px] tracking-editorial uppercase">View Selected Work</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Portrait — editorial card */}
          <motion.div
            variants={fadeIn('left', 0.3, 0.8)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Gold offset frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500/50"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/30"></div>

              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden bg-navy-800">
                <Image
                  src="/assets/images/ahsan.jpg"
                  alt="Nazmul Ahsan"
                  fill
                  className="object-cover object-center grayscale-[15%]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent"></div>
              </div>

              {/* Tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-cream-50 border border-gold-500/40 p-3 shadow-lg"
              >
                <FaReact className="text-2xl text-navy-800" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.8 }}
                className="absolute top-1/3 -left-8 bg-cream-50 border border-gold-500/40 p-3 shadow-lg"
              >
                <SiAngular className="text-2xl text-navy-800" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.4 }}
                className="absolute bottom-16 -right-8 bg-cream-50 border border-gold-500/40 p-3 shadow-lg"
              >
                <SiNextdotjs className="text-2xl text-navy-800" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 1.2 }}
                className="absolute -bottom-2 left-8 bg-cream-50 border border-gold-500/40 p-3 shadow-lg"
              >
                <SiPython className="text-2xl text-navy-800" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.2 }}
                className="absolute top-12 -right-10 bg-cream-50 border border-gold-500/40 p-3 shadow-lg hidden sm:block"
              >
                <SiNestjs className="text-2xl text-navy-800" />
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
