import profile from "../assets/images/faith.jpeg";

function About() {
  return (
    <section id="about" className="py-5 about-section">
      <div className="container">

        <div className="row align-items-center">

          {/* Profile Image */}
          <div className="col-lg-5 text-center mb-4">

            <img
              src={profile}
              alt="Faith Kerubo"
              className="img-fluid rounded-circle profile-img"
            />

          </div>

          {/* About Content */}
          <div className="col-lg-7">

            <h2 className="mb-4">About Me</h2>

            <p>
              I'm <strong>Faith Kerubo</strong>, a Software Engineer with a background
              in Economics and currently expanding my expertise in Data Analysis.
            </p>

            <p>
              I enjoy building intelligent web applications, AI-powered solutions,
              and user-friendly digital experiences that solve real-world problems.
            </p>

            <p>
              I recently completed the <strong>AI Essentials for Professionals</strong>
              certification and I'm continuously improving my technical and
              analytical skills through projects, hackathons, and continuous learning.
            </p>

            <div className="mt-4">

              <span className="badge bg-info me-2 mb-2 p-2">React</span>
              <span className="badge bg-info me-2 mb-2 p-2">Flask</span>
              <span className="badge bg-info me-2 mb-2 p-2">Python</span>
              <span className="badge bg-info me-2 mb-2 p-2">JavaScript</span>
              <span className="badge bg-info me-2 mb-2 p-2">SQL</span>
              <span className="badge bg-info me-2 mb-2 p-2">Bootstrap</span>
              <span className="badge bg-info me-2 mb-2 p-2">Git & GitHub</span>
              <span className="badge bg-info me-2 mb-2 p-2">AI</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;