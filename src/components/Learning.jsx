import { Icon } from "@iconify/react";
import Reveal from "./Reveal.jsx";

const CARDS = [
  { icon: "mdi:language-html5", cls: "html", title: "HTML5", desc: "Semantic markup, forms, accessibility best practices", filled: 3 },
  { icon: "mdi:language-css3", cls: "css", title: "CSS3", desc: "Flexbox, Grid, animations, responsive design", filled: 3 },
  { icon: "mdi:language-javascript", cls: "js", title: "JavaScript", desc: "DOM manipulation, events, functions, ES6+", filled: 2 },
  { icon: "mdi:git", cls: "git", title: "Git & GitHub", desc: "Version control, repositories, collaboration", filled: 1 },
];

export default function Learning() {
  return (
    <Reveal id="learning">
      <span className="section-label">Learning Path</span>
      <h2 className="section-title">What I'm learning</h2>
      <p className="section-desc">
        My current focus areas as I build my front-end development foundation.
      </p>
      <div className="learning-grid">
        {CARDS.map((card) => (
          <div className="learning-card" key={card.title}>
            <div className={`lc-icon ${card.cls}`}>
              <Icon icon={card.icon} />
            </div>
            <h4>{card.title}</h4>
            <p>{card.desc}</p>
            <div className="progress-dots">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={i < card.filled ? "dot-filled" : "dot-empty"}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}