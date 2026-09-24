import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const LINKS = [
  ["about", "About"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["learning", "Learning"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "";
      const pos = window.scrollY;
      document.querySelectorAll("section[id]").forEach((section) => {
        if (pos >= section.offsetTop - 100) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <nav
        style={{
          borderBottomColor: scrolled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.04)",
        }}
      >
        <a href="#hero" className="nav-logo">
          <span className="dot"></span> Ilias.
        </a>
        <ul className="nav-links">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{ color: active === id ? "#E5E7EB" : "" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <Icon icon="mdi:menu" />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? " active" : ""}`}>
        {LINKS.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}