import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";
import "./styles/SectionHeading.css";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ index, title, subtitle }: Props) => (
  <motion.header
    className="section-heading"
    variants={stagger(0.07)}
    initial="hidden"
    whileInView="show"
    viewport={viewportOnce}
  >
    <motion.span className="section-heading__index" variants={fadeUp}>
      {index}
    </motion.span>
    <div>
      <motion.h2 className="section-heading__title" variants={fadeUp}>
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p className="section-heading__subtitle" variants={fadeUp}>
          {subtitle}
        </motion.p>
      )}
    </div>
  </motion.header>
);

export default SectionHeading;
