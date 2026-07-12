import SectionHeading from "./SectionHeading";
import { alsoBuilt } from "../data/projects";
import "./styles/About.css";

const highlights = [
  { value: "7+", label: "Years mobile" },
  { value: "10K+", label: "App downloads" },
  { value: "3", label: "Live on stores" },
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

      <div className="about-grid">
        <div className="about-copy">
          <div className="about-status">
            <span className="status-dot" />
            Shipping @ HAAT
          </div>
          <p className="about-lead">
            I turn product ideas into production-ready iOS & Android apps with{" "}
            <strong>React Native</strong> and <strong>TypeScript</strong>. Healthcare,
            wellness, food delivery — I&apos;ve shipped in all of them.
          </p>
          <p className="about-text">
            Obsessed with smooth UI, fast lists, and zero-crash releases. Fastlane,
            CodePush, Sentry — the full ship pipeline. Not open to relocation.
          </p>
          <p className="about-extra">{alsoBuilt}</p>
        </div>

        <div className="about-side">
          <div className="about-stats">
            {highlights.map((item) => (
              <div key={item.label} className="about-stat">
                <span className="about-stat__value">{item.value}</span>
                <span className="about-stat__label">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="about-traits">
            {traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
