'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaSearch, FaBookOpen } from 'react-icons/fa';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science (MSc)",
      status: "Looking for opportunities",
      institution: "Seeking Admission",
      year: "Future",
      icon: <FaSearch className="text-blue-500" />,
      description: "Actively exploring graduate programs in Computer Science to further specialize in software engineering and emerging technologies."
    },
    {
      degree: "Bachelor of Science (BSc)",
      field: "Computer Science & Engineering",
      institution: "Jahangirnagar University",
      year: "2018 - 2021",
      icon: <FaGraduationCap className="text-indigo-500" />,
      description: "Completed with a CGPA of 2.82/4.00. Gained comprehensive knowledge in algorithms, data structures, web development, and software engineering principles."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Shaheed Police Smrity College",
      year: "2017",
      icon: <FaBookOpen className="text-green-500" />,
      description: "Science Division with focus on Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shaheed Police Smrity College",
      year: "2015",
      icon: <FaBookOpen className="text-amber-500" />,
      description: "Science Division with outstanding academic performance."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.5)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{color: '#2563eb'}}>Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My educational background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200 -translate-x-1/2"></div>
          
          <motion.div
            variants={staggerContainer(0.25, 0.2)}
            initial="initial"
            whileInView="whileInView"
            viewport={defaultViewport}
            className="space-y-12"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 0, 0.6)}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-blue-100 shadow-md z-10 mx-auto md:mx-0">
                  <div className="text-xl">
                    {edu.icon}
                  </div>
                </div>
                
                {/* Education card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} mt-6 md:mt-0`}>
                  <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true, amount: 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <motion.div variants={fadeIn('down', 0, 0.4)} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-800">
                        {edu.degree} {edu.field && <span className="text-blue-600">• {edu.field}</span>}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                        {edu.year}
                      </span>
                    </motion.div>
                    
                    <motion.h4 variants={fadeIn('up', 0.1, 0.4)} className="text-lg font-semibold text-gray-700 mb-2">
                      {edu.institution}
                    </motion.h4>
                    
                    {edu.status && (
                      <motion.div variants={fadeIn('up', 0.2, 0.4)} className="mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {edu.status}
                        </span>
                      </motion.div>
                    )}
                    
                    <motion.p variants={fadeIn('up', 0.3, 0.4)} className="text-gray-600">
                      {edu.description}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;