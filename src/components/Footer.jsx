import { Icon } from "@iconify/react";

const SOCIALS = [
  ["mdi:email-outline", "mailto:Iliasfatheddine2002@gmail.com", "Email"],
  ["mdi:github", "https://github.com/", "GitHub"],
  ["mdi:phone-outline", "tel:+212601099272", "Phone"],
  [
    "mdi:map-marker-outline",
    "https://maps.google.com/?q=Bouskoura,Casablanca",
    "Location",
  ],
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <p>
            <span className="text-text-dim">© 2026</span>{" "}
            <span className="name">Ilias Fatheddine</span>.
            Built with passion & curiosity.
          </p>
        </div>
        <div className="footer-socials">
          {SOCIALS.map(([icon, href, label]) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener" }
                : {})}
            >
              <Icon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}