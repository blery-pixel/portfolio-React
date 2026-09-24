import { Icon } from "@iconify/react";
import Reveal from "./Reveal.jsx";
import aboutImg from "../unnamed.jpg";

const HIGHLIGHTS = [
  ["mdi:account-group-outline", "Team Player", "Collaborative & supportive"],
  ["mdi:headset", "Client Focused", "Service-oriented mindset"],
  ["mdi:code-tags", "Self-Taught Dev", "Driven & curious learner"],
  ["mdi:swap-horizontal", "Adaptable", "Quick to learn & adjust"],
];

export default function About() {
  return (
    <Reveal id="about">
      <span className="section-label">About</span>
      <h2 className="section-title">A bit about me</h2>
      <div className="about-grid">
        <div className="about-visual">
          <img src={aboutImg} alt="About Ilias" />
          <div className="about-floating-card">
            <div className="card-title">🚀 Currently</div>
            <div className="card-desc">
              Learning front-end web development (HTML, CSS, JavaScript) and
              building real-world projects to sharpen my skills.
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
            I'm a <strong>motivated and versatile professional</strong>{" "}
            transitioning into web development. My diverse background in customer
            service, retail sales, and technical HVAC systems has given me a unique
            blend of skills — from communicating with clients to solving complex
            technical problems.
          </p>
          <p>
            I'm now channeling that same energy into{" "}
            <strong>learning to build for the web</strong>. I enjoy turning ideas
            into interactive, well-structured pages and am constantly pushing
            myself to learn new technologies and best practices.
          </p>
          <div className="about-highlights">
            {HIGHLIGHTS.map(([icon, title, desc]) => (
              <div className="highlight-item" key={title}>
                <div className="highlight-icon">
                  <Icon icon={icon} />
                </div>
                <div className="highlight-text">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="journey-banner">
            <div className="journey-icon">
              <Icon icon="mdi:road-variant" />
            </div>
            <div className="journey-text">
              <h4>My Journey into Tech</h4>
              <p>
                From client-facing roles and technical HVAC training → learning
                HTML, CSS & JavaScript → building my first web projects. Every step
                has taught me something valuable I now apply to code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}