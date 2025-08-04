'use client';

import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { fadeIn, staggerContainer, staggerItem, defaultViewport } from '../lib/animations';

interface ExperienceItemDef { // Renamed to avoid conflict if ExperienceItem is globally defined
  role: string;
  company: string;
  duration: string;
  location: string;
  employmentType?: string;
  description?: string;
  responsibilities: string[];
  skills: string[];
  companyLogo?: string;
}

const Experience = () => {
  const experiences: ExperienceItemDef[] = [
    {
      role: 'Software Developer (Full Stack)',
      company: 'Barytech Technologies',
      duration: 'June 2023 – Present',
      location: 'Remote',
      employmentType: 'Full-time',
      description: 'Developing innovative web solutions for enterprise clients',
      responsibilities: [
        'Led development of web applications using Angular (frontend) and Python-Django (backend)',
        'Designed and implemented RESTful APIs, improving system performance by 30%',
        'Built core features including Screen Recording, Video Trimming, and Real-time Chat functionality',
        'Collaborated with cross-functional teams to deliver 5+ major product features on schedule',
        'Optimized database queries reducing API response times by 40%'
      ],
      skills: ['Angular', 'Python-Django', 'PostgreSQL', 'REST APIs', 'CI/CD', 'AWS']
    },
    {
      role: 'eqUIP Intern',
      company: 'Commonwealth Games Federation (CGA)',
      duration: 'April 2024 – March 2025',
      location: 'Dhaka, Bangladesh',
      employmentType: 'Internship',
      description: 'Digital transformation initiative for sports organizations',
      responsibilities: [
        'Spearheaded development of new website for CGA-Bangladesh, enhancing digital presence by 200%',
        'Developed prototype athlete database system used by 50+ national sports federations',
        'Initiated esports development projects, securing meetings with Sports Minister and Global Esports Federation',
        'Coordinated between IT and Media teams to streamline content delivery processes',
        'Implemented analytics dashboard tracking 10K+ monthly visitors'
      ],
      skills: ['Next.js', 'React', 'MongoDB', 'Project Management', 'Stakeholder Engagement']
    },
    {
      role: 'Junior Software Engineer',
      company: 'bongoDev',
      duration: 'June 2021 – May 2023',
      location: 'Remote',
      employmentType: 'Full-time',
      description: 'Building scalable web applications for international clients',
      responsibilities: [
        'Developed 10+ web applications using NestJS, Next.js, and TypeScript',
        'Reduced bug reports by 60% through rigorous code reviews and testing protocols',
        'Created comprehensive technical documentation adopted company-wide',
        'Mentored 3 junior developers in React and TypeScript best practices',
        'Implemented automated testing pipeline reducing QA time by 35%'
      ],
      skills: ['NestJS', 'Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Jest', 'Agile']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.5)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My career journey and key contributions at each organization
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.25, 0.2)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0, 0.6)}
              // Removed initial, whileInView, viewport from here as they are inherited from parent staggerContainer
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <motion.div
                variants={staggerContainer(0.1, 0.3)}
                initial="initial" // Child stagger containers need their own initial/whileInView
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.1 }}
                className="p-8"
              >
                <motion.div variants={fadeIn('down', 0, 0.5)} className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600">
                      <FaBuilding className="text-2xl" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                      </div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                        {exp.employmentType}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-500">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    {exp.description && (
                      <motion.p variants={fadeIn('up', 0, 0.5)} className="mt-4 text-gray-600">{exp.description}</motion.p>
                    )}
                  </div>
                </motion.div> {/* End of header block */}
                
                <div className="mt-8"> {/* This div is a direct child of p-8 staggerContainer */}
                  <motion.h4 variants={fadeIn('up', 0, 0.5)} className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities & Achievements:</motion.h4>
                  <motion.ul variants={staggerContainer(0.1)} initial="initial" whileInView="whileInView" viewport={defaultViewport} className="space-y-3"> {/* Added initial/whileInView/viewport to this child staggerContainer */}
                    {exp.responsibilities.map((item, i) => (
                      <motion.li variants={staggerItem} key={i} className="flex">
                        <span className="flex-shrink-0 w-5 h-5 text-blue-500 mr-3 mt-0.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div> {/* End of responsibilities block */}

                <div className="mt-8"> {/* This div is also a direct child of p-8 staggerContainer */}
                  <motion.h4 variants={fadeIn('up', 0, 0.5)} className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</motion.h4>
                  <motion.div variants={staggerContainer(0.05)} initial="initial" whileInView="whileInView" viewport={defaultViewport} className="flex flex-wrap gap-3">  {/* Added initial/whileInView/viewport to this child staggerContainer */}
                    {exp.skills.map((skill, i) => {
                      const colorClasses = [
                                'bg-blue-100 text-blue-800 border border-blue-200',
                                'bg-indigo-100 text-indigo-800 border border-indigo-200',
                                'bg-purple-100 text-purple-800 border border-purple-200',
                                'bg-amber-100 text-amber-800 border border-amber-200',
                                'bg-emerald-100 text-emerald-800 border border-emerald-200',
                                'bg-rose-100 text-rose-800 border border-rose-200',
                                'bg-sky-100 text-sky-800 border border-sky-200',
                                'bg-fuchsia-100 text-fuchsia-800 border border-fuchsia-200',
                      ];
                      const colorClass = colorClasses[i % colorClasses.length];
                      const isKeyTech = ['Angular', 'Python-Django', 'Next.js', 'TypeScript', 'React','NestJS'].includes(skill);
                      const highlightClass = isKeyTech ? 'ring-2 ring-offset-2 ring-opacity-50' : '';
                      const keyTechRing = isKeyTech ?
                        (skill === 'Angular' ? 'ring-red-300' :
                        skill === 'Python-Django' ? 'ring-emerald-300' :
                        skill === 'Next.js' ? 'ring-blue-300' :
                        skill === 'NestJS' ? 'ring-green-300' :
                      'ring-indigo-300') : '';
      
                      return (
                          <motion.span
                            key={i}
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${colorClass} ${highlightClass} ${keyTechRing} transition-all`}
                          >
                            {skill}
                            {isKeyTech && (
                            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            )}
                          </motion.span>
                       );
                    })}
                  </motion.div> {/* End of skills flex-wrap div */}
                </div> {/* End of technologies block */}
              </motion.div> 
            </motion.div> 
          ))}
          </motion.div>
          </div>
         {/* End of space-y-12 staggerContainer */}
    </section>
  );
};

export default Experience;