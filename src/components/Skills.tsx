import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeUp, scaleIn, stagger, viewportOnce } from "../lib/motion";
import { handleSpotlight } from "../lib/spotlight";
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
    <motion.div
      className="skills-bento"
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {skillBlocks.map((block) => (
        <motion.article
          key={block.id}
          className={`skills-card spotlight glow-edge skills-card--${block.accent}`}
          variants={fadeUp}
          onPointerMove={handleSpotlight}
        >
          <h3>{block.title}</h3>
          <p>{block.description}</p>
          <motion.div className="skills-tags" variants={stagger(0.04)}>
            {block.skills.map((skill) => (
              <motion.span key={skill} variants={scaleIn}>
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default Skills;
