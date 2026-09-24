import { Icon } from "@iconify/react";
import meImg from "../me.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-grid"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse"></span> Learning & Open to Opportunities
        </div>
        <h1 className="hero-title">
          <span className="line">Hi, I'm</span>
          <span className="line gradient-text">Ilias.</span>
          <span className="line outline-text">Web Developer</span>
        </h1>
        <p className="hero-desc">
          Aspiring web developer with a background in <code>customer service</code>,{" "}
          <code>sales</code>, and <code>technical systems</code>. Currently building
          my skills in front-end development and crafting my first projects.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <Icon icon="mdi:code-braces" width={18} />
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            <Icon icon="mdi:email-outline" width={18} />
            Get in Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">
              3<span className="accent">+</span>
            </div>
            <div className="stat-label">Roles</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Languages</div>
          </div>
          <div className="stat">
            <div className="stat-number">
              2<span className="accent">+</span>
            </div>
            <div className="stat-label">Projects</div>
          </div>
        </div>
      </div>
      <div className="hero-visual about-visual">
        <img src={meImg} alt="Ilias Fatheddine" />
      </div>
    </section>
  );
}