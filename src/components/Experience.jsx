import { Icon } from "@iconify/react";
import Reveal from "./Reveal.jsx";

const JOBS = [
  {
    icon: "mdi:store",
    role: "Salesperson",
    company: "Clothing Retail Store",
    period: "Retail",
    desc: "Welcomed and assisted clients, guided product choices, and drove direct sales. Excelled at working under pressure during peak seasons and high-traffic periods — skills that translate to handling deadlines and fast-paced development cycles.",
    tags: ["Direct Sales", "Customer Welcome", "Pressure Management"],
  },
  {
    icon: "mdi:truck-delivery-outline",
    role: "Sales Assistant",
    company: "Pepsi / Manupack",
    period: "Distribution",
    desc: "Maintained daily client contact, ensured strict adherence to operational guidelines, and consistently met sales and distribution objectives as part of a team. Learned the value of clear processes and reliable communication.",
    tags: ["Client Relations", "Target Driven", "Teamwork"],
  },
  {
    icon: "mdi:bullhorn-outline",
    role: "Activity Animator",
    company: "Events & Activities",
    period: "Events",
    desc: "Communicated effectively with clients and groups, animated engaging activities, and adapted quickly to stress and unforeseen circumstances. Strong public speaking and adaptability — essential for presenting work and collaborating in tech teams.",
    tags: ["Public Speaking", "Animation", "Adaptability"],
  },
];

export default function Experience() {
  return (
    <Reveal id="experience">
      <span className="section-label">Experience</span>
      <h2 className="section-title">Where I've worked</h2>
      <p className="section-desc">
        Diverse roles that sharpened my interpersonal, operational, and
        problem-solving skills — all transferable to tech.
      </p>
      <div className="experience-grid">
        {JOBS.map((job) => (
          <div className="exp-card" key={job.role}>
            <div className="exp-icon-wrap">
              <Icon icon={job.icon} />
            </div>
            <div className="exp-content">
              <div className="exp-header">
                <div>
                  <h3>{job.role}</h3>
                  <div className="company">{job.company}</div>
                </div>
                <span className="exp-period">{job.period}</span>
              </div>
              <p>{job.desc}</p>
              <div className="timeline-tags" style={{ marginTop: 12 }}>
                {job.tags.map((tag) => (
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