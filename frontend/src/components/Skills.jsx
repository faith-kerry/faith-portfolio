function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Bootstrap",
    "Flask",
    "Python",
    "Git & GitHub",
    "SQL",,
    "JSON",
    "Machine Learning",
    "Data Analysis",
    "AI Essentials",
    "Economics"
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container">

        <h2 className="text-center mb-5">
          Skills
        </h2>

        <div className="row">

          {skills.map((skill, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0 text-center p-4">

                <h5>{skill}</h5>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;