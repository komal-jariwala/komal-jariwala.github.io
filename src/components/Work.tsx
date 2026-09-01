import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import { handleSpotlight } from "../lib/spotlight";
import "./styles/Work.css";

const Work = () => {
  return (
    <section className="work-section section-wrap" id="work">
      <SectionHeading
        index="03"
        title="Featured apps"
        subtitle="Live on Google Play — healthcare, wellness & productivity."
      />

      <motion.div
        className="work-grid"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            className={`work-card spotlight glow-edge ${
              i === 0 ? "work-card--lead" : ""
            }`}
            variants={fadeUp}
            onPointerMove={handleSpotlight}
          >
            <a
              href={project.links[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card__device"
            >
              <motion.div
                className="phone-frame"
                whileHover={{ y: -10, rotate: -1.5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  width={240}
                  height={480}
                />
              </motion.div>
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
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
