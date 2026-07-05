function About() {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-5 text-center mb-4">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="img-fluid rounded-circle profile-img"
            />

          </div>

          <div className="col-lg-7">

            <h2>About Me</h2>

            <p>
              I'm <strong>Faith Kerubo</strong>, a Software Engineer with a background
              in Economics and currently expanding my expertise in Data Analysis.
            </p>

            <p>
              I enjoy building intelligent web applications, AI-powered solutions,
              and user-friendly digital experiences that solve real-world problems.
            </p>

            <p>
              I have completed the <strong>AI Essentials for Professionals</strong>
              certification and I'm continuously improving my technical and
              analytical skills through projects and hackathons.
            </p>

            <div className="mt-4">

              <span className="badge bg-info me-2 p-2">React</span>
              <span className="badge bg-info me-2 p-2">Flask</span>
              <span className="badge bg-info me-2 p-2">Python</span>
              <span className="badge bg-info me-2 p-2">JavaScript</span>
              <span className="badge bg-info me-2 p-2">SQL</span>
              <span className="badge bg-info me-2 p-2">AI</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;