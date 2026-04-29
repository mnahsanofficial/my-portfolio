'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  SiAngular,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiJira,
  SiPostman
} from 'react-icons/si';
import { FiDatabase, FiCloud, FiTool, FiCheckCircle } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

interface SkillCategory {
  title: string;
  skills: { name: string; icon: IconType }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular', icon: SiAngular },
        { name: 'React', icon: SiReact },
        { name: 'Vue.js', icon: SiVuedotjs },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'REST APIs', icon: FiDatabase },
      ],
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'MySQL', icon: SiMysql },
        { name: 'Git', icon: SiGit },
        { name: 'Docker', icon: SiDocker },
        { name: 'CI/CD', icon: FiTool },
        { name: 'Azure', icon: FiCloud },
        { name: 'JIRA', icon: SiJira },
      ],
    },
    {
      title: 'Testing & QA',
      skills: [
        { name: 'Postman', icon: SiPostman },
        { name: 'Manual Testing', icon: FiCheckCircle },
        { name: 'E2E Testing', icon: FiCheckCircle },
        { name: 'Automation', icon: FiCheckCircle },
        { name: 'Debugging', icon: FiTool },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn('up', 0, 0.5)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600" style={{color: '#2563eb'}}>Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and competencies I&apos;ve mastered throughout my career
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeIn('up', 0, 0.4)}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-center">
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <motion.ul variants={staggerContainer(0.08, 0.1)} initial="initial" whileInView="whileInView" viewport={defaultViewport} className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.li variants={fadeIn('up', 0, 0.3)} key={skill.name} className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                      <skill.icon className="text-base text-blue-600" />
                      {skill.name}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
};

export default Skills;