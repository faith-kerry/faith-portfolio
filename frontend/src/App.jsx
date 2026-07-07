import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import portfolio from "./portfolioData";

function App() {
  return (
    <>
      <Navbar />
      <Hero portfolio={portfolio} />
      <About portfolio={portfolio} />
      <Skills portfolio={portfolio} />
      <Projects />
      <Blogs />
      <Contact portfolio={portfolio} />
      <Footer />
    </>
  );
}

export default App;