import SectionHeading from "./SectionHeading";
import "./styles/Skills.css";

const skillBlocks = [
  {
    id: "mobile",
    title: "Mobile Engineering",
    description:
      "React Native apps that feel native on iOS & Android — from healthcare to food delivery.",
    skills: [
      "React Native",
      "TypeScript",
      "tvOS",
      "ReNative",
      "Redux",
      "Zustand",
      "Nativewind",
    ],
    accent: "sky",
  },
  {
    id: "platform",
    title: "Platform & Ship",
    description:
      "GraphQL, native modules, CI/CD — secure data flow and smooth store releases.",
    skills: [
      "GraphQL",
      "REST",
      "Firebase",
      "Fastlane",
      "CodePush",
      "Sentry",
      "CI/CD",
    ],
    accent: "violet",
  },
];

const Skills = () => (
  <section className="skills-section section-wrap" id="skills">
    <SectionHeading
      index="02"
      title="What I build"
      subtitle="End-to-end mobile — UI, APIs, and shipping to the stores."
    />
    <div className="skills-bento">
      {skillBlocks.map((block) => (
        <article
          key={block.id}
          className={`skills-card skills-card--${block.accent}`}
        >
          <h3>{block.title}</h3>
          <p>{block.description}</p>
          <div className="skills-tags">
            {block.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
