import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">

        <h2 className="text-center mb-5">Let's Connect</h2>

        <p className="text-center mb-5">
          I'm always open to collaborating on exciting projects,
          hackathons, internships, and opportunities in software
          engineering, AI, and data analysis.
        </p>

        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <FaEnvelope size={40} className="contact-icon"/>
            <h5 className="mt-3">Email</h5>
            <p>kerubofaith944@gmail.com</p>
          </div>

          <div className="col-md-4 mb-4">
            <FaGithub size={40} className="contact-icon"/>
            <h5 className="mt-3">GitHub</h5>
            <p>github.com/faith-kerry</p>
          </div>

          <div className="col-md-4 mb-4">
            <FaLinkedin size={40} className="contact-icon"/>
            <h5 className="mt-3">LinkedIn</h5>
            <p>https://linkedin.com/in/Faith-Kerubo-047941390</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;