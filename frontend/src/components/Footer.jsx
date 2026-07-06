import { FaGithub, FaLinkedin, FaHeart, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container text-center">

        <h3 className="mb-3">Faith Kerubo</h3>

        <p className="mb-4 footer-tagline">
          Building intelligent, accessible and data-driven solutions
          that create meaningful impact.
        </p>

        <div className="social-icons mb-4">

          <a
            href="https://github.com/faithkerry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/faith-kerubo-047941390"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kerubofaith944@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Faith Kerubo. Crafted with{" "}
          <FaHeart className="heart" /> and a passion for innovation.
        </p>

      </div>
    </footer>
  );
}

export default Footer;