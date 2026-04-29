'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaLightbulb } from 'react-icons/fa';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations'; // Adjust path if needed

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '200+', label: 'Bugs Resolved' },
    { value: '15K+', label: 'Daily API Requests Handled' },
    { value: '30+', label: 'Candidates Placed' },
  ];

  const traits = [
    { icon: <FaCode className="text-xl" />, label: 'Clean Code' },
    { icon: <FaServer className="text-xl" />, label: 'Scalable Systems' },
    { icon: <FaBrain className="text-xl" />, label: 'Problem Solving' },
    { icon: <FaLightbulb className="text-xl" />, label: 'Innovative Ideas' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{color: '#2563eb'}}>Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Who I am and what I bring to the table
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-start">
          <motion.div
            variants={staggerContainer(0.2, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-8"
          >
            <motion.h3 variants={fadeIn('left', 0, 0.6)} className="text-2xl md:text-3xl font-semibold text-gray-800">
              Full Stack Engineer with a QA-Driven Mindset
            </motion.h3>
            
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                Full Stack Software Engineer with 5+ years building production-grade web applications across Angular, React, Vue.js, Next.js, Python-Django, and NestJS.
              </motion.p>
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                I bring a QA-first mindset to every project - I&apos;ve automated E2E test pipelines, resolved 200+ production bugs, and consistently improved system performance and reliability.
              </motion.p>
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                I&apos;ve shipped products for enterprise SaaS platforms, the Bangladesh Olympic Association, and built open-source tools used by developers worldwide.
              </motion.p>
            </div>
            <motion.div variants={staggerContainer(0.1, 0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={fadeIn('up', 0, 0.4)} className="rounded-xl border border-gray-200 bg-white p-4 text-center">
                  <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={staggerContainer(0.15, 0.2)} className="grid grid-cols-2 gap-4 pt-2">
              {traits.map((trait) => (
                <motion.div key={trait.label} variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3 p-3 bg-transparent rounded-lg border border-gray-300">
                  <div className="text-blue-600">{trait.icon}</div>
                  <span className="font-medium text-gray-800">{trait.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;