import Reveal from "./Reveal.jsx";

const ITEMS = [
  {
    date: "2023",
    green: false,
    title: "Technician Diploma — Commercial Refrigeration & Air Conditioning",
    institution: "ISTA Inara — Casablanca",
    desc: "Specialized technical training in HVAC systems, commercial refrigeration, and climate control technologies. Developed strong problem-solving skills, attention to detail, and technical diagnostics — all of which transfer directly to debugging code.",
    tags: ["HVAC", "Refrigeration", "Technical Diagnostics", "Problem Solving"],
  },
  {
    date: "2025 — Present",
    green: true,
    title: "Self-Taught Web Development",
    institution: "Online Learning — FreeCodeCamp, YouTube, Documentation",
    desc: "Actively learning front-end web development through structured online courses and hands-on practice. Focused on building real projects to solidify my understanding of HTML, CSS, and JavaScript fundamentals.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
];

export default function Education() {
  return (
    <Reveal id="education">
      <span className="section-label">Education</span>
      <h2 className="section-title">Academic background</h2>
      <p className="section-desc">
        The foundation that shaped my technical thinking and professional
        discipline.
      </p>
      <div className="timeline">
        {ITEMS.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className={`timeline-dot${item.green ? " green" : ""}`}></div>
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-card">
              <h3>{item.title}</h3>
              <div className="institution">{item.institution}</div>
              <p>{item.desc}</p>
              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span className={`tag${item.green ? " green" : ""}`} key={tag}>
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