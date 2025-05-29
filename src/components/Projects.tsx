interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'EINO (Associated with BaryTech)',
      description: 'Aims to make knowledge secure and easily retrievable for employees, similar to tools like Google, YouTube, and Siri. The goal is to become the most popular digital tool for small and medium-sized businesses by 2025.',
      tags: ['Angular', 'Python-Django', 'PostgreSQL'],
    },
    {
      title: 'Red July Live (Web Application)',
      description: 'Developed an interactive memorial platform using modern web technologies to honor the martyrs and activists of Bangladesh\'s Quota Reform Movement and subsequent mass uprisings.',
      tags: ['Next.js', 'React', 'TypeScript'],
    },
  ];

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500">Project Screenshot</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;