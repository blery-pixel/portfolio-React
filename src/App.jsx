import NameBackground from "./components/NameBackground.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Learning from "./components/Learning.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <NameBackground />
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Learning />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  );
}