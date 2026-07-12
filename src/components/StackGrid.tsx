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

const StackGrid = () => (
  <section className="stack-section section-wrap" id="stack">
    <SectionHeading
      index="05"
      title="Tech stack"
      subtitle="Tools I use daily to ship mobile apps."
    />
    <div className="stack-marquee">
      <div className="stack-marquee__track">
        {[...stack, ...stack].map((item, i) => (
          <div key={`${item.label}-${i}`} className="stack-chip">
            <span className="stack-chip__icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StackGrid;
