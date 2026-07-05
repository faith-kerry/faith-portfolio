import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">

        <p className="welcome">Hello, I'm</p>

        <h1>Faith Kerubo</h1>

        <h3>
          <Typewriter
            words={[
              "Software Engineer",
              "Economist",
              "Aspiring Data Analyst",
              "AI Enthusiast"
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h3>

        <p className="hero-description">
          Building intelligent, accessible and data-driven digital
          solutions that create real-world impact.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn btn-info">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline-light">
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;