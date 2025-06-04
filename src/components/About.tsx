'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaLightbulb } from 'react-icons/fa';
import { fadeIn, staggerContainer, defaultViewport } from '../../lib/animations'; // Adjust path if needed

const About = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Who I am and what I bring to the table
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer(0.2, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-6"
          >
            <motion.h3 variants={fadeIn('left', 0, 0.6)} className="text-2xl md:text-3xl font-semibold text-gray-800">
              Crafting Digital Excellence Through Code
            </motion.h3>
            
            <div className="space-y-4 text-gray-600 text-lg">
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                I&apos;m <span className="font-medium text-blue-600">Nazmul Ahsan</span>, a passionate Full Stack Developer with expertise in both frontend and backend technologies. My journey in tech has been driven by a relentless curiosity and commitment to building solutions that make an impact.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                With proficiency in <span className="font-medium">Angular, React, Next.js</span> for the frontend and <span className="font-medium">Python-Django, NestJS</span> for the backend, I bridge the gap between beautiful interfaces and robust systems.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                My experience ranges from developing knowledge management tools like <span className="font-medium text-indigo-600">EINO</span> to creating memorial platforms such as <span className="font-medium text-indigo-600">Red July Live</span>, each project honing my skills in different domains.
              </motion.p>
            </div>
            
            <motion.div variants={staggerContainer(0.15, 0.2)} className="grid grid-cols-2 gap-4 pt-4">
              <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <FaCode className="text-xl" />
                </div>
                <span className="font-medium">Clean Code</span>
              </motion.div>
              <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
                  <FaServer className="text-xl" />
                </div>
                <span className="font-medium">Scalable Systems</span>
              </motion.div>
              <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <FaBrain className="text-xl" />
                </div>
                <span className="font-medium">Problem Solving</span>
              </motion.div>
              <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                  <FaLightbulb className="text-xl" />
                </div>
                <span className="font-medium">Innovative Ideas</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={fadeIn('right', 0.4, 0.6)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="relative"
          >
            <div className="bg-white p-1 rounded-2xl shadow-xl border border-gray-100">
              <div className="h-full w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden p-8 space-y-6">
                <motion.h4 variants={fadeIn('down', 0, 0.5)} className="text-2xl font-bold text-gray-800">My Professional Journey</motion.h4>
                
                <motion.div
                  variants={staggerContainer(0.2, 0.2)}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={defaultViewport}
                  className="space-y-6"
                >
                  <motion.div variants={fadeIn('up', 0, 0.5)} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                      <div className="w-px h-full bg-gradient-to-b from-blue-400 to-transparent"></div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800">Barytech Technologies</h5>
                      <p className="text-gray-500 text-sm mb-2">Software Developer (Full Stack) | 2023-Present</p>
                      <p className="text-gray-600">
                        Developed web applications using Angular and Python-Django, designed RESTful APIs, and implemented core features.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn('up', 0, 0.5)} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1"></div>
                      <div className="w-px h-full bg-gradient-to-b from-indigo-400 to-transparent"></div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800">Commonwealth Games Federation</h5>
                      <p className="text-gray-500 text-sm mb-2">eqUIP Intern | 2024-2025</p>
                      <p className="text-gray-600">
                        Guided website development and initiated esports projects with government stakeholders.
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeIn('up', 0, 0.5)} className="flex">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800">bongoDev</h5>
                      <p className="text-gray-500 text-sm mb-2">Jr. Software Engineer | 2021-2023</p>
                      <p className="text-gray-600">
                        Built applications with NestJS and Next.js, conducted code reviews, and created technical documentation.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-full h-full bg-blue-200 rounded-2xl top-4 left-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;