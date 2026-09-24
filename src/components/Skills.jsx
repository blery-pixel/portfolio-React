import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal.jsx";

const GROUPS = [
  {
    icon: "mdi:code-braces",
    title: "Web Development",
    bars: [
      ["HTML5", 65],
      ["CSS3 / Flexbox / Grid", 55],
      ["JavaScript (Basics)", 35],
      ["Responsive Design", 50],
    ],
  },
  {
    icon: "mdi:account-heart-outline",
    title: "Soft Skills & Languages",
    bars: [
      ["Communication", 95],
      ["Customer Service", 90],
      ["Arabic (Native)", 100],
      ["French (Fluent) / English (B2)", 85],
    ],
  },
];

const TAGS = [
  "mdi:language-html5",
  "HTML5",
  "mdi:language-css3",
  "CSS3",
  "mdi:language-javascript",
  "JavaScript",
  "mdi:git",
  "Git",
  "mdi:face-agent",
  "Client Relations",
  "mdi:cart-outline",
  "Direct Sales",
  "mdi:snowflake",
  "Refrigeration",
  "mdi:translate",
  "Trilingual",
  "mdi:molecule",
  "Adaptability",
  "mdi:target",
  "Goal-Oriented",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Reveal id="skills">
      <span className="section-label">Skills</span>
      <h2 className="section-title">Capabilities</h2>
      <p className="section-desc">
        A blend of technical foundations, interpersonal strengths, and growing
        web development skills.
      </p>
      <div className="skills-container" ref={sectionRef}>
        {GROUPS.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3>
              <span className="icon">
                <Icon icon={group.icon} />
              </span>
              {group.title}
            </h3>
            <div className="skill-bars">
              {group.bars.map(([name, pct]) => (
                <div className="skill-bar" key={name}>
                  <div className="skill-bar-header">
                    <span className="skill-bar-name">{name}</span>
                    <span className="skill-bar-pct">{pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: visible ? `${pct}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="skills-tags" style={{ marginTop: 48 }}>
        {TAGS.map((tag, i) =>
          i % 2 === 0 ? null : (
            <span className="skill-tag" key={tag}>
              <span className="tag-icon">
                <Icon icon={TAGS[i - 1]} />
              </span>
              {tag}
            </span>
          ),
        )}
      </div>
    </Reveal>
  );
}