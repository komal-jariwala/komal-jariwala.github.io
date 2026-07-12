import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const skillBlocks = [
  {
    id: "mobile",
    title: "MOBILE",
    subtitle: "Cross-Platform Apps",
    description:
      "Building performant, responsive mobile apps with React Native. From healthcare to food delivery, I deliver pixel-perfect experiences on iOS and Android.",
    skills: [
      "React Native",
      "TypeScript",
      "React Native tvOS",
      "ReNative",
      "JavaScript",
      "Redux",
      "Context API",
      "MobX",
      "Zustand",
      "Nativewind",
    ],
  },
  {
    id: "api",
    title: "API & INTEGRATION",
    subtitle: "Backend & DevOps",
    description:
      "Integrating GraphQL, REST APIs, and native modules. From HIPAA-compliant auth to CI/CD with Fastlane & CodePush, I ensure robust, secure data flow and smooth deployments.",
    skills: [
      "GraphQL",
      "REST APIs",
      "Node.js",
      "Firebase",
      "Azure B2C",
      "Fastlane",
      "CodePush",
      "CI/CD",
    ],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const first = containerRef.current[0];

    if (!isTouch && first) {
      first.classList.add("what-content-active");
    }

    if (isTouch) {
      const handlers: Array<{ el: HTMLDivElement; fn: () => void }> = [];
      containerRef.current.forEach((container, index) => {
        if (!container) return;
        container.classList.remove("what-noTouch");
        if (index === 0) container.classList.add("what-content-active");
        const fn = () => handleClick(container);
        container.addEventListener("click", fn);
        handlers.push({ el: container, fn });
      });

      return () => {
        handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      };
    }
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {skillBlocks.map((block, index) => (
            <div
              key={block.id}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner" />

              <div className="what-content-in">
                <div className="what-content-top">
                  <h3>{block.title}</h3>
                  <h4>{block.subtitle}</h4>
                  <p>{block.description}</p>
                </div>

                <div className="what-skills">
                  <h5>Skillset &amp; tools</h5>
                  <div className="what-content-flex">
                    {block.skills.map((skill) => (
                      <span key={skill} className="what-tags">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="what-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container && sibling.classList.contains("what-content")) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
