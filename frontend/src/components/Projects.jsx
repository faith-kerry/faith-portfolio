function Projects() {
  const projects = [
    {
      title: "MediNexa AI",
      description: "An AI-powered healthcare platform focused on smarter appointment booking and patient support.",
      status: "🚧 In Development",
    },
    {
      title: "AI Communication Bridge",
      description: "An accessibility-focused platform designed to improve communication through AI.",
      status: "🚧 In Development",
    },
    {
      title: "More Projects",
      description: "Exciting software engineering and data analytics projects are on the way.",
      status: "Coming Soon",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Featured Projects</h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <div className="card project-card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>

                  <span className="badge bg-warning text-dark">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;