import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdBolt, MdCheckCircle, MdPlace, MdWorkOutline } from "react-icons/md";
import "./styles/DynamicIsland.css";

const activities = [
  {
    id: "open",
    icon: <MdWorkOutline />,
    label: "Open to work",
    value: "Full-time · Freelance",
    tone: "live",
  },
  {
    id: "build",
    icon: <MdBolt />,
    label: "fastlane beta",
    value: "v2.14 (142)",
    tone: "build",
  },
  {
    id: "ship",
    icon: <MdCheckCircle />,
    label: "Crash-free",
    value: "99.8% · Sentry",
    tone: "ok",
  },
  {
    id: "where",
    icon: <MdPlace />,
    label: "Surat, India",
    value: "Remote & hybrid",
    tone: "live",
  },
] as const;

const SPRING = { type: "spring", stiffness: 380, damping: 32 } as const;

/**
 * Live-activity pill in the header. Cycles through status cards the way an
 * iOS Dynamic Island does, expanding and contracting around its content.
 */
const DynamicIsland = () => {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let collapse = 0;
    const cycle = window.setInterval(() => {
      setExpanded(true);
      collapse = window.setTimeout(() => setExpanded(false), 2600);
      setIndex((current) => (current + 1) % activities.length);
    }, 5200);

    // Show the first activity shortly after load instead of waiting a cycle.
    const kickoff = window.setTimeout(() => setExpanded(true), 1400);
    const firstCollapse = window.setTimeout(() => setExpanded(false), 4000);

    return () => {
      window.clearInterval(cycle);
      window.clearTimeout(collapse);
      window.clearTimeout(kickoff);
      window.clearTimeout(firstCollapse);
    };
  }, []);

  const activity = activities[index];

  return (
    <motion.div
      className={`island ${expanded ? "island--open" : ""}`}
      data-tone={activity.tone}
      layout
      transition={SPRING}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.span layout className="island__dot" />

      <AnimatePresence mode="popLayout" initial={false}>
        {expanded && (
          <motion.span
            key={activity.id}
            className="island__body"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.22 }}
          >
            <span className="island__icon">{activity.icon}</span>
            <span className="island__text">
              <strong>{activity.label}</strong>
              <small>{activity.value}</small>
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DynamicIsland;
