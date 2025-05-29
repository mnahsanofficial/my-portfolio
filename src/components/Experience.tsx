interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Software Developer (Full Stack)',
      company: 'Barytech Technologies, Remote',
      duration: 'June 2023 – Present',
      responsibilities: [
        'Developed web applications using Angular (front-end) and Python-Django (back-end)',
        'Designed RESTful APIs and maintained databases',
        'Implemented core features like Screen Recording, Video Trimming, Chat etc',
      ],
    },
    {
      role: 'eqUIP Intern, Commonwealth Games Federation (CGA)',
      company: 'Media & IT, Bangladesh Olympic Association',
      duration: 'April 2024 – March 2025',
      responsibilities: [
        'Guided a team in building a new website for CGA-Bangladesh',
        'Developed a dummy website for an athlete database in Bangladesh',
        'Initiated esports development projects by connecting with stakeholders',
      ],
    },
    {
      role: 'Jr. Software Engineer',
      company: 'bongoDev, Remote',
      duration: 'June 2021 – May 2023',
      responsibilities: [
        'Developed web applications using NestJS, Next.js, TypeScript, React, and JavaScript',
        'Conducted code reviews, maintained databases, and quality assurance testing',
        'Created technical documentation for software projects',
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-primary pl-6 py-2 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-gray-600 font-medium">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2">•</span>
                    {item}
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

export default Experience;