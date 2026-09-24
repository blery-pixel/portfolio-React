import Reveal from "./Reveal.jsx";
import proj1 from "../pr pics/portfolio-screenshot.png";
import proj2 from "../pr pics/1002147657.png";

const PROJECTS = [
  {
    img: proj1,
    alt: "Portfolio Website",
    type: "First Project",
    title: "Personal Portfolio",
    desc: "My very own portfolio website — the one you're viewing right now! Built from scratch with HTML, CSS, and JavaScript to showcase my journey into web development.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    img: proj2,
    alt: "Landing Page",
    type: "Practice",
    title: "Responsive Landing Page",
    desc: "A clean, modern landing page built to practice responsive design principles, Flexbox, Grid layout, and mobile-first approach.",
    tags: ["HTML5", "CSS Grid", "Flexbox"],
  },
  {
    img: null,
    alt: "Todo App",
    type: "In Progress",
    title: "Task Manager App",
    desc: "A JavaScript-powered task manager to practice DOM manipulation, event handling, and local storage for data persistence.",
    tags: ["JavaScript", "DOM", "LocalStorage"],
  },
];

export default function Projects() {
  return (
    <Reveal id="projects">
      <span className="section-label">Projects</span>
      <h2 className="section-title">What I'm building</h2>
      <p className="section-desc">
        Hands-on projects I've built while learning web development. Each one
        taught me something new.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              {project.img && (
                <img src={project.img} alt={project.alt} />
              )}
              <div className="project-overlay"></div>
            </div>
            <div className="project-body">
              <div className="project-type">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}