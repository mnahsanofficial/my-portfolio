interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Python-Django', 'NestJS', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Tools & Others',
      skills: ['Postman', 'pgAdmin', 'Machine Learning', 'CI/CD', 'Agile Methodologies'],
    },
    {
      title: 'Soft Skills',
      skills: ['Project Management', 'Communication', 'Leadership', 'Event Management'],
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;