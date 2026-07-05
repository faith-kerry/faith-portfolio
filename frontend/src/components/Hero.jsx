import React from "react";

function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container">

        <p className="text-info mb-2">Hello, I'm</p>

        <h1 className="display-2 fw-bold">
          Faith Kerubo
        </h1>

        <h3 className="my-3 text-light">
          Software Engineer | Economist | Aspiring Data Analyst
        </h3>

        <p className="hero-text">
          Building intelligent, accessible and data-driven digital
          solutions that create real-world impact.
        </p>

        <div className="mt-4">

          <a href="#projects" className="btn btn-info me-3">
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