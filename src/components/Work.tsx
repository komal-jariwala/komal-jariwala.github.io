import { MdArrowOutward } from "react-icons/md";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import "./styles/Work.css";

const Work = () => {
  return (
    <section className="work-section section-wrap" id="work">
      <SectionHeading
        index="03"
        title="Featured apps"
        subtitle="Live on Google Play — healthcare, wellness & productivity."
      />

      <div className="work-grid">
        {projects.map((project, i) => (
          <article
            key={project.title}
            className={`work-card ${i === 0 ? "work-card--lead" : ""}`}
          >
            <a
              href={project.links[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card__device"
            >
              <div className="phone-frame">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  width={240}
                  height={480}
                />
              </div>
            </a>
            <div className="work-card__body">
              <span className="work-card__num">0{i + 1}</span>
              <h3>{project.title}</h3>
              <p className="work-card__cat">{project.category}</p>
              <p className="work-card__desc">{project.tools}</p>
              <div className="work-card__links">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} <MdArrowOutward />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
