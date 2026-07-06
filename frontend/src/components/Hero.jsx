import { Typewriter } from "react-simple-typewriter";

function Hero({ portfolio }) {
  return (
    <section id="home" className="hero">
      <div className="container text-center">

        <p className="welcome">Hi, There I'm</p>

        <h1 className="display-3 fw-bold">
  {portfolio ? portfolio.name : "Loading..."}
        </h1>

        <h3 className="typing-text">
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
  {portfolio ? portfolio.bio : "Loading..."}
        </p>
        <div className="hero-buttons justify-content-center">
          <a href="#projects" className="btn btn-info btn-lg">
            View Projects
          </a>

          <a href="#contact" className="btn btn-outline-light btn-lg">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;