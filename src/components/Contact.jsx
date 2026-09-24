import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal.jsx";

const CHANNELS = [
  {
    icon: "mdi:email-outline",
    label: "Email",
    value: "Iliasfatheddine2002@gmail.com",
    href: "mailto:Iliasfatheddine2002@gmail.com",
  },
  {
    icon: "mdi:map-marker-outline",
    label: "Location",
    value: "Bouskoura, Casablanca",
    href: "https://maps.google.com/?q=Bouskoura,Casablanca",
  },
  {
    icon: "mdi:phone-outline",
    label: "Phone",
    value: "+212 601099272",
    href: "tel:+212601099272",
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <Reveal id="contact">
      <span className="section-label">Contact</span>
      <h2 className="section-title">Let's connect</h2>
      <p className="section-desc">
        Interested in working together or have advice for a junior developer?
        I'd love to hear from you!
      </p>
      <div className="contact-grid">
        <div className="contact-info">
          <p>
            Whether you have an opportunity, a project idea, or just want to
            share some advice — my inbox is always open!
          </p>
          <div className="contact-channels">
            {CHANNELS.map((channel) => (
              <a
                href={channel.href}
                className="contact-channel"
                key={channel.label}
              >
                <div className="contact-channel-icon">
                  <Icon icon={channel.icon} />
                </div>
                <div className="contact-channel-text">
                  <div className="ch-label">{channel.label}</div>
                  <div className="ch-value">{channel.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit} ref={formRef}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@email.com"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell me about your opportunity or project..."
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit" disabled={sent}>
            {sent ? (
              "Sent! ✓"
            ) : (
              <>
                Send Message <Icon icon="mdi:send" width={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </Reveal>
  );
}