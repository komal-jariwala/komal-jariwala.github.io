import { PropsWithChildren, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import "./styles/PullToRefresh.css";

const THRESHOLD = 64;
const MAX_PULL = 108;
const RESTING = 52;
/** Fraction of the drag distance the page actually travels. */
const RUBBER_BAND = 0.42;

/**
 * Wraps the page content in iOS-style pull-to-refresh. Only the content moves,
 * so the fixed header and background stay put.
 */
const PullToRefresh = ({ children }: PropsWithChildren) => {
  const [refreshing, setRefreshing] = useState(false);
  const refreshingRef = useRef(false);

  const pull = useMotionValue(0);
  const y = useSpring(pull, { stiffness: 420, damping: 40, mass: 0.6 });

  const rotate = useTransform(y, [0, THRESHOLD], [0, 300]);
  const scale = useTransform(y, [0, THRESHOLD], [0.5, 1]);
  const opacity = useTransform(y, [6, THRESHOLD * 0.7], [0, 1]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let startY = 0;
    let tracking = false;
    let wheelPull = 0;
    let settle = 0;

    const release = () => {
      if (refreshingRef.current) return;

      if (pull.get() >= THRESHOLD) {
        refreshingRef.current = true;
        setRefreshing(true);
        pull.set(RESTING);

        window.setTimeout(() => {
          refreshingRef.current = false;
          setRefreshing(false);
          pull.set(0);
        }, 900);
      } else {
        pull.set(0);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (window.scrollY > 0 || refreshingRef.current) return;
      startY = event.touches[0].clientY;
      tracking = true;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!tracking || refreshingRef.current) return;

      const delta = event.touches[0].clientY - startY;
      if (delta <= 0 || window.scrollY > 0) {
        tracking = false;
        pull.set(0);
        return;
      }

      pull.set(Math.min(delta * RUBBER_BAND, MAX_PULL));
    };

    const onTouchEnd = () => {
      if (!tracking) return;
      tracking = false;
      release();
    };

    // Trackpad equivalent: keep overscrolling upward once already at the top.
    const onWheel = (event: WheelEvent) => {
      if (window.scrollY > 0 || refreshingRef.current) return;
      if (event.deltaY >= 0) {
        wheelPull = 0;
        pull.set(0);
        return;
      }

      wheelPull = Math.min(wheelPull - event.deltaY * RUBBER_BAND, MAX_PULL);
      pull.set(wheelPull);

      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        wheelPull = 0;
        release();
      }, 130);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
    };
  }, [pull]);

  return (
    <>
      <motion.div
        className={`ptr ${refreshing ? "ptr--active" : ""}`}
        style={{ y, opacity }}
        aria-hidden="true"
      >
        <motion.span className="ptr__spinner" style={{ rotate, scale }} />
      </motion.div>

      <motion.div style={{ y }}>{children}</motion.div>
    </>
  );
};

export default PullToRefresh;
