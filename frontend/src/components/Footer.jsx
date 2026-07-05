import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container text-center">

        <h4 className="mb-3">Faith Kerubo</h4>

        <p className="mb-3">
          Software Engineer • Economist • Aspiring Data Analyst
        </p>

        <div className="social-icons mb-3">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Faith Kerubo. Built with React, Flask &
          Bootstrap <FaHeart className="heart" />
        </p>

      </div>
    </footer>
  );
}

export default Footer;