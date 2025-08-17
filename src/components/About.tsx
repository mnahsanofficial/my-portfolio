'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaLightbulb } from 'react-icons/fa';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations'; // Adjust path if needed

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{color: '#2563eb'}}>Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Who I am and what I bring to the table
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={staggerContainer(0.2, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-6"
          >
            <motion.h3 variants={fadeIn('left', 0, 0.6)} className="text-2xl md:text-3xl font-semibold text-gray-800">
              Full Stack Developer with 5+ Years of Experience
            </motion.h3>
            
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                I&apos;m a <span className="font-medium text-blue-600">Full Stack Software Developer</span> with 5+ years of experience building scalable, reliable, and user-focused applications using technologies like Angular, React, Next.js, NestJS, Python-Django, PostgreSQL, and TypeScript. I specialize in designing full-stack systems with efficient API integrations, optimized databases, and seamless UI/UX across devices.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                Currently at <span className="font-medium text-indigo-600">BaryTech</span>, I lead and contribute to web-based solutions that serve 1,000+ users. I&apos;ve implemented advanced features such as screen recording, chat systems, and video trimming tools, while improving API performance by 30% and reducing deployment times by 50% through containerization.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                Previously, I served as an <span className="font-medium text-indigo-600">eqUIP Intern</span> at the Commonwealth Games Federation, where I led the development of a national athlete database and CGA-Bangladesh&apos;s new website. I initiated esports development projects in partnership with government and international stakeholders, amplifying digital engagement in sports nationwide.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                My past experience at <span className="font-medium text-indigo-600">bongoDev</span> involved building dynamic applications using NestJS, Next.js, and MySQL. I&apos;ve also been responsible for automating QA pipelines, optimizing data models, and mentoring junior developers.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                In addition to my technical expertise, I&apos;ve ranked 13th nationally in the Fundamental Information Technology Engineers Examination (ITEE-FE) and hold certifications in Python and Machine Learning.
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                <span className="font-medium text-amber-600">💡 Tech Stack:</span> JavaScript, TypeScript, Angular, React, Next.js, NestJS, Python, Django, PostgreSQL, MySQL, Docker, Kubernetes, Git, CI/CD, Agile, QA Automation
              </motion.p>
              
              <motion.p variants={fadeIn('left', 0, 0.6)}>
                Let&apos;s connect if you&apos;re looking for a passionate developer who blends technical depth with product thinking. I&apos;m open to exciting opportunities that challenge me to build meaningful tech products.
              </motion.p>
            </div>
            
            
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
                 <motion.h4 variants={fadeIn('down', 0, 0.5)} className="text-2xl font-bold text-gray-800 mb-6">My Professional Journey</motion.h4>
                
                <motion.div
                  variants={staggerContainer(0.2, 0.2)}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={defaultViewport}
                  className="space-y-6"
                >
                                     <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-start">
                     <div className="flex flex-col items-center mr-4">
                       <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 shadow-lg"></div>
                       <div className="w-px h-full bg-gradient-to-b from-blue-400 to-transparent mt-2"></div>
                     </div>
                     <div className="flex-1">
                       <h5 className="text-lg font-semibold text-gray-800 mb-1">Barytech Technologies</h5>
                       <p className="text-blue-600 text-sm font-medium mb-2">Software Developer (Full Stack) | 2023-Present</p>
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Developed web applications using Angular and Python-Django, designed RESTful APIs, and implemented core features.
                       </p>
                     </div>
                   </motion.div>
                  
                                     <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-start">
                     <div className="flex flex-col items-center mr-4">
                       <div className="w-4 h-4 bg-indigo-500 rounded-full mt-1 shadow-lg"></div>
                       <div className="w-px h-full bg-gradient-to-b from-indigo-400 to-transparent mt-2"></div>
                     </div>
                     <div className="flex-1">
                       <h5 className="text-lg font-semibold text-gray-800 mb-1">Commonwealth Games Federation</h5>
                       <p className="text-indigo-600 text-sm font-medium mb-2">eqUIP Intern | 2024-2025</p>
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Guided website development and initiated esports projects with government stakeholders.
                       </p>
                     </div>
                   </motion.div>
                  
                                     <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-start">
                     <div className="flex flex-col items-center mr-4">
                       <div className="w-4 h-4 bg-purple-500 rounded-full mt-1 shadow-lg"></div>
                     </div>
                     <div className="flex-1">
                       <h5 className="text-lg font-semibold text-gray-800 mb-1">bongoDev</h5>
                       <p className="text-purple-600 text-sm font-medium mb-2">Jr. Software Engineer | 2021-2023</p>
                       <p className="text-gray-600 text-sm leading-relaxed">
                         Built applications with NestJS and Next.js, conducted code reviews, and created technical documentation.
                       </p>
                     </div>
                   </motion.div>
                </motion.div>
              </div>
            </div>
            
            <div className="absolute -z-10 w-full h-full bg-blue-200 rounded-2xl top-4 left-4"></div>
                         <motion.div variants={staggerContainer(0.15, 0.2)} className="grid grid-cols-2 gap-4 pt-8">
               <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                 <div className="p-2 bg-blue-100 rounded-full text-blue-600 shadow-sm">
                   <FaCode className="text-xl" />
                 </div>
                 <span className="font-medium text-gray-800">Clean Code</span>
               </motion.div>
               <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                 <div className="p-2 bg-indigo-100 rounded-full text-indigo-600 shadow-sm">
                   <FaServer className="text-xl" />
                 </div>
                 <span className="font-medium text-gray-800">Scalable Systems</span>
               </motion.div>
               <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                 <div className="p-2 bg-purple-100 rounded-full text-purple-600 shadow-sm">
                   <FaBrain className="text-xl" />
                 </div>
                 <span className="font-medium text-gray-800">Problem Solving</span>
               </motion.div>
               <motion.div variants={fadeIn('up', 0, 0.5)} className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg">
                 <div className="p-2 bg-amber-100 rounded-full text-amber-600 shadow-sm">
                   <FaLightbulb className="text-xl" />
                 </div>
                 <span className="font-medium text-gray-800">Innovative Ideas</span>
               </motion.div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;