function Blogs() {
  const insights = [
    {
      title: "Building AI Solutions for Real-World Problems",
      description:
        "Artificial Intelligence has the greatest impact when it addresses real human challenges. My goal is to build AI-powered solutions that improve healthcare, accessibility, and everyday digital experiences while remaining ethical, practical, and user-centered.",
      category: "AI • Innovation",
    },
    {
      title: "My Journey into Data Analysis",
      description:
        "My journey into data analysis has changed the way I approach problem-solving. By learning Python, SQL, Excel, and data visualization, I'm discovering how data can uncover meaningful insights, support informed decisions, and drive innovation across different industries.",
      category: "Data Analysis",
    },
    {
      title: "My Journey as a Software Engineer",
      description:
        "Software engineering has taught me much more than writing code. Every project, challenge, and hackathon has strengthened my technical skills, collaboration, and resilience. I'm passionate about building technology that solves meaningful problems and creates lasting impact.",
      category: "Software Engineering",
    },
  ];

  return (
    <section id="insights" className="py-5 blog-section">
      <div className="container">

        <h2 className="text-center mb-3">Insights</h2>

        <p className="text-center text-light mb-5">
          Reflections on software engineering, Artificial Intelligence,
          data analysis, and continuous learning.
        </p>

        <div className="row">

          {insights.map((insight, index) => (
            <div className="col-lg-4 mb-4" key={index}>

              <div className="card blog-card h-100">

                <div className="card-body d-flex flex-column">

                  <h4>{insight.title}</h4>

                  <p className="flex-grow-1">
                    {insight.description}
                  </p>

                  <span className="badge bg-info text-dark mt-3 align-self-start">
                    {insight.category}
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

export default Blogs;