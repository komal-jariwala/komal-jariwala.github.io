import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { alsoBuilt } from "../data/projects";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../lib/motion";
import { handleSpotlight } from "../lib/spotlight";
import "./styles/About.css";

const highlights = [
  { value: "7+", label: "Years mobile" },
  { value: "1M+", label: "App downloads" },
  { value: "5", label: "Live on stores" },
];

const traits = [
  "React Native",
  "TypeScript",
  "HIPAA apps",
  "Startup speed",
  "Pixel-perfect UI",
  "Ships on Friday",
];

const About = () => {
  return (
    <section className="about-section section-wrap" id="about">
      <SectionHeading
        index="01"
        title="About me"
        subtitle="Senior mobile engineer — Surat, India. Remote & hybrid friendly."
      />

      <motion.div
        className="about-grid"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <div className="about-copy">
          <motion.div className="about-status" variants={fadeUp}>
            <span className="status-dot" />
            Shipping @ HAAT
          </motion.div>
          <motion.p className="about-lead" variants={fadeUp}>
            I turn product ideas into production-ready iOS &amp; Android apps
            with <strong>React Native</strong> and <strong>TypeScript</strong>.
            Healthcare, wellness, food delivery — I&apos;ve shipped in all of
            them.
          </motion.p>
          <motion.p className="about-text" variants={fadeUp}>
            Obsessed with smooth UI, fast lists, and zero-crash releases.
            Fastlane, CodePush, Sentry — the full ship pipeline. Not open to
            relocation.
          </motion.p>
          <motion.p className="about-extra" variants={fadeUp}>
            {alsoBuilt}
          </motion.p>
        </div>

        <div className="about-side">
          <motion.div className="about-stats" variants={stagger(0.09)}>
            {highlights.map((item) => (
              <motion.div
                key={item.label}
                className="about-stat spotlight"
                variants={scaleIn}
                onPointerMove={handleSpotlight}
              >
                <Counter value={item.value} className="about-stat__value" />
                <span className="about-stat__label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="about-traits" variants={stagger(0.05)}>
            {traits.map((trait) => (
              <motion.span key={trait} variants={scaleIn}>
                {trait}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
