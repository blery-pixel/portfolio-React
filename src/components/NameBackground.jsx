import { useEffect, useMemo, useRef } from "react";

const LETTERS = ["I", "L", "I", "A", "S"];
const TOTAL = 60;

export default function NameBackground() {
  const containerRef = useRef(null);

  const chars = useMemo(
    () =>
      Array.from({ length: TOTAL }, () => ({
        letter: LETTERS[Math.floor(Math.random() * LETTERS.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 14,
        dur: Math.random() * 6 + 5,
        delay: Math.random() * -10,
        opacity: 0.04 + Math.random() * 0.12,
      })),
    [],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = container.querySelectorAll(".name-char");

    let mouseX = -9999;
    let mouseY = -9999;
    let raf = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const update = () => {
      const radius = 150;

      spans.forEach((span, i) => {
        const c = chars[i];
        const charX = (c.x / 100) * window.innerWidth;
        const charY = (c.y / 100) * window.innerHeight;

        const dx = mouseX - charX;
        const dy = mouseY - charY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const progress = 1 - dist / radius;
          span.style.transform = `scale(${1 + progress * 0.3})`;
          span.style.textShadow = `0 0 ${progress * 15}px rgba(48, 104, 68, 0.6)`;
        } else {
          span.style.transform = "scale(1)";
          span.style.textShadow = "none";
        }
      });

      raf = requestAnimationFrame(update);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(update);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [chars]);

  return (
    <div className="name-bg" ref={containerRef}>
      {chars.map((c, i) => (
        <div
          key={i}
          className="name-wrapper"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            "--dur": `${c.dur}s`,
            "--del": `${c.delay}s`,
          }}
        >
          <span
            className="name-char"
            style={{ fontSize: `${c.size}px`, opacity: c.opacity }}
          >
            {c.letter}
          </span>
        </div>
      ))}
    </div>
  );
}