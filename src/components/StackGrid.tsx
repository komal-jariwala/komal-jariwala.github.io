import {
  SiFirebase,
  SiGraphql,
  SiNodedotjs,
  SiReact,
  SiSentry,
  SiTypescript,
} from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import SectionHeading from "./SectionHeading";
import "./styles/StackGrid.css";

const stack = [
  { icon: <SiReact />, label: "React Native" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <TbDeviceMobileCode />, label: "tvOS" },
  { icon: <SiGraphql />, label: "GraphQL" },
  { icon: <SiNodedotjs />, label: "Node.js" },
  { icon: <SiFirebase />, label: "Firebase" },
  { icon: <SiSentry />, label: "Sentry" },
  { icon: <SiReact />, label: "ReNative" },
];

const secondRow = [...stack].reverse();

const Row = ({
  items,
  reverse,
}: {
  items: typeof stack;
  reverse?: boolean;
}) => (
  <div className={`stack-marquee ${reverse ? "stack-marquee--reverse" : ""}`}>
    <div className="stack-marquee__track">
      {[...items, ...items].map((item, i) => (
        <div key={`${item.label}-${i}`} className="stack-chip">
          <span className="stack-chip__icon">{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const StackGrid = () => (
  <section className="stack-section section-wrap" id="stack">
    <SectionHeading
      index="05"
      title="Tech stack"
      subtitle="Tools I use daily to ship mobile apps. Hover to pause."
    />
    <Row items={stack} />
    <Row items={secondRow} reverse />
  </section>
);

export default StackGrid;
