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
  SiPostman,
  SiPhp,
  SiGraphql,
  SiCypress,
  SiSelenium
} from 'react-icons/si';
import { FiDatabase, FiCloud, FiTool, FiCheckCircle } from 'react-icons/fi';
import { fadeIn, staggerContainer, defaultViewport } from '../lib/animations';

interface SkillCategory {
  title: string;
  index: string;
  skills: { name: string; icon: IconType }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      index: 'I',
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
      index: 'II',
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'NestJS', icon: SiNestjs },
        { name: 'PHP', icon: SiPhp },
        { name: 'GraphQL', icon: SiGraphql },
        { name: 'REST APIs', icon: FiDatabase },
      ],
    },
    {
      title: 'Database & DevOps',
      index: 'III',
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
      index: 'IV',
      skills: [
        // react-icons v5 has no Playwright glyph, so it falls back to the same
        // neutral check icon used by the other non-branded QA entries.
        { name: 'TDD', icon: FiCheckCircle },
        { name: 'Cypress', icon: SiCypress },
        { name: 'Playwright', icon: FiCheckCircle },
        { name: 'Selenium', icon: SiSelenium },
        { name: 'Postman', icon: SiPostman },
        { name: 'E2E Testing', icon: FiCheckCircle },
        { name: 'Test Automation', icon: FiCheckCircle },
        { name: 'Manual Testing', icon: FiCheckCircle },
        { name: 'Bug Triage', icon: FiTool },
        { name: 'Debugging', icon: FiTool },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 editorial-grid opacity-40 z-0"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 blur-[100px] z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        <motion.div
          variants={fadeIn('up', 0, 0.6)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="mb-20 max-w-3xl"
        >
          <span className="editorial-eyebrow mb-6">Skills</span>
          <h2 className="font-display text-5xl md:text-6xl text-cream-50 leading-[1.05] mt-6 mb-6">
            The <span className="italic text-gold-400">craft</span> & the tools.
          </h2>
          <span className="gold-rule"></span>
          <p className="mt-6 text-base text-cream-50/70 leading-relaxed">
            Technologies and competencies sharpened across enterprise SaaS, sports tech, and open-source.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="initial"
          whileInView="whileInView"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-cream-50/10"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeIn('up', 0, 0.5)}
              className="bg-navy-900 p-8 lg:p-10 hover:bg-navy-800 transition-colors group"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-xs text-gold-500/80 tracking-wider">{category.index}</span>
                <h3 className="font-display text-2xl text-cream-50">{category.title}</h3>
              </div>
              <span className="block w-8 h-px bg-gold-500/60 group-hover:w-12 transition-all duration-300 mt-3 mb-6"></span>

              <motion.ul
                variants={staggerContainer(0.06, 0.1)}
                initial="initial"
                whileInView="whileInView"
                viewport={defaultViewport}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill) => (
                  <motion.li
                    variants={fadeIn('up', 0, 0.3)}
                    key={skill.name}
                    className="chip-dark"
                  >
                    <skill.icon className="text-sm text-gold-400" />
                    {skill.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
