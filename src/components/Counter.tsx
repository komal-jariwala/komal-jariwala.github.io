import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  /** Display string such as "7+", "10K+" or "3". */
  value: string;
  className?: string;
};

const NUMERIC = /^(\d+(?:\.\d+)?)(.*)$/;

/** Counts up to the numeric part of `value` the first time it scrolls in. */
const Counter = ({ value, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = value.match(NUMERIC);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const node = ref.current;
    if (!node || target === null || !inView) return;

    const decimals = Number.isInteger(target) ? 0 : 1;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (latest) => {
        node.textContent = `${latest.toFixed(decimals)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, target, suffix]);

  return (
    <span ref={ref} className={className}>
      {target !== null && inView ? `0${suffix}` : value}
    </span>
  );
};

export default Counter;
