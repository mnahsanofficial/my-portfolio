'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool, FiUsers } from 'react-icons/fi';

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 1-5 (for visualization)
    icon?: JSX.Element;
  }[];
  icon: JSX.Element;
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Mastery',
      icon: <FiCode className="text-2xl" />,
      skills: [
        { name: 'Angular', level: 5 },
        { name: 'React', level: 4 },
        { name: 'Next.js', level: 4 },
        { name: 'Vue.js', level: 3 },
        { name: 'TypeScript', level: 5 },
        { name: 'JavaScript', level: 5 },
      ],
    },
    {
      title: 'Backend Expertise',
      icon: <FiDatabase className="text-2xl" />,
      skills: [
        { name: 'Python-Django', level: 5 },
        { name: 'NestJS', level: 4 },
        { name: 'PostgreSQL', level: 4 },
        { name: 'MongoDB', level: 3 },
      ],
    },
    {
      title: 'Dev Tools',
      icon: <FiTool className="text-2xl" />,
      skills: [
        { name: 'Postman', level: 5 },
        { name: 'pgAdmin', level: 4 },
        { name: 'Machine Learning', level: 3 },
        { name: 'CI/CD', level: 4 },
        { name: 'Agile Methodologies', level: 4 },
      ],
    },
    {
      title: 'Professional Skills',
      icon: <FiUsers className="text-2xl" />,
      skills: [
        { name: 'Project Management', level: 4 },
        { name: 'Communication', level: 5 },
        { name: 'Leadership', level: 4 },
        { name: 'Event Management', level: 4 },
      ],
    },
  ];

  // Skill level descriptions
  const levelDescriptions = [
    'Basic Awareness',
    'Working Knowledge',
    'Practical Experience',
    'Advanced Skills',
    'Expert Level'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and competencies I've mastered throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-center">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4 text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <ul className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500" title={levelDescriptions[skill.level - 1]}>
                          {levelDescriptions[skill.level - 1].split(' ')[0]}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level * 20}%` }}
                          transition={{ duration: 1, delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${
                            skill.level >= 4 ? 'bg-blue-600' : 
                            skill.level >= 3 ? 'bg-indigo-500' : 'bg-blue-400'
                          }`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill level legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto"
        >
          <h4 className="font-semibold text-gray-700 mb-3">Skill Level Guide</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {levelDescriptions.map((desc, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className={`w-3 h-3 rounded-full mr-2 ${
                    index === 4 ? 'bg-blue-600' :
                    index === 3 ? 'bg-indigo-500' :
                    index === 2 ? 'bg-blue-400' :
                    index === 1 ? 'bg-blue-300' : 'bg-blue-200'
                  }`}
                />
                <span className="text-xs text-gray-600">{desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;