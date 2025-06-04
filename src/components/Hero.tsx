'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  fadeIn,
  scaleUp,
  staggerContainer,
  staggerItem,
  sentenceVariant,
  letterVariant,
  defaultViewport
} from '../../lib/animations'; // Assuming Hero.tsx is in src/components/
import { SiAngular, SiNextdotjs, SiPython, SiNestjs, SiDjango } from 'react-icons/si';
import { FaReact } from 'react-icons/fa'; // Using FaReact for broader recognition

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0">
        <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10"></div>
      </div>

      {/* Floating bubbles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [1, 0.8, 0.5, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div 
            variants={staggerContainer(0.3, 0.1)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <motion.span variants={fadeIn('none', 0, 0.5)} className="inline-block text-white">Hi, I&apos;m </motion.span>
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 inline-block"
                variants={sentenceVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={defaultViewport}
              >
                { "Nazmul Ahsan".split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letterVariant} className="inline-block">
                    {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
            
            <motion.h2 variants={fadeIn('up', 0.3, 0.6)} className="text-2xl md:text-3xl mb-8 text-blue-100 font-medium">
              Full Stack Developer & Tech Enthusiast
            </motion.h2>
            
            <motion.p variants={fadeIn('up', 0.4, 0.6)} className="text-lg md:text-xl mb-10 text-blue-100 max-w-lg mx-auto lg:mx-0">
              Crafting pixel-perfect, high-performance web applications with modern technologies.
            </motion.p>
            
            <motion.div variants={staggerContainer(0.2, 0.5)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div variants={scaleUp(0, 0.5)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </motion.div>
              
              <motion.div variants={scaleUp(0, 0.5)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#projects"
                  className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  View My Work
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            variants={scaleUp(0.2, 0.8)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="relative lg:w-1/2 flex justify-center"
          >
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
              variants={staggerContainer(0.2, 0.5)}
              initial="initial"
              whileInView="whileInView"
              viewport={defaultViewport}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-30"></div>
                <Image
                  src="/assets/images/ahsan.jpg"
                  alt="Nazmul Ahsan"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              
              {/* Tech stack floating badges */}
              <motion.div 
                variants={scaleUp(0, 0.5)}
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <SiAngular className="text-xl text-blue-800" />
              </motion.div>
              
              <motion.div 
                variants={scaleUp(0, 0.5)}
                className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <FaReact className="text-xl text-blue-800" />
              </motion.div>
              
              <motion.div 
                variants={scaleUp(0, 0.5)}
                className="absolute top-1/3 -right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
              >
                <SiNextdotjs className="text-xl text-blue-800" />
              </motion.div>
              <motion.div 
                variants={scaleUp(0, 0.5)}
                className="absolute bottom-8 -right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 0.3 }}
              >
                <SiPython className="text-xl text-green-800" />
              </motion.div>
              <motion.div 
                variants={scaleUp(0, 0.5)}
                className="absolute top-1/4 -left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.7 }}
              >
                <SiNestjs className="text-xl text-purple-800" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;