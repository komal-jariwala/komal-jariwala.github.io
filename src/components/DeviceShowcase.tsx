import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MdOutlineApps, MdOutlineLayers, MdPersonOutline } from "react-icons/md";
import {
  AppsScreen,
  DetailScreen,
  ProfileScreen,
  StackScreen,
  StatusBar,
} from "./device/PhoneScreens";
import { apps, TabId } from "./device/deviceData";
import "./styles/DeviceShowcase.css";

const TABS: { id: TabId; label: string; icon: JSX.Element }[] = [
  { id: "apps", label: "Apps", icon: <MdOutlineApps /> },
  { id: "stack", label: "Stack", icon: <MdOutlineLayers /> },
  { id: "profile", label: "Me", icon: <MdPersonOutline /> },
];

const TAB_IDS = TABS.map((tab) => tab.id);

/** Scripted walkthrough that plays until the visitor takes over. */
const DEMO_DELAYS = [2600, 3000, 1200, 2700, 2900];

const SPRING = { type: "spring", stiffness: 320, damping: 34 } as const;

const DeviceShowcase = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { margin: "-80px" });

  const [tab, setTab] = useState<TabId>("apps");
  const [direction, setDirection] = useState(1);
  const [detail, setDetail] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [interacted, setInteracted] = useState(false);

  const tabRef = useRef<TabId>("apps");

  const changeTab = useCallback((next: TabId) => {
    const from = TAB_IDS.indexOf(tabRef.current);
    const to = TAB_IDS.indexOf(next);
    if (from === to) return;
    setDirection(to > from ? 1 : -1);
    tabRef.current = next;
    setTab(next);
  }, []);

  const openDetail = useCallback((index: number) => setDetail(index), []);
  const closeDetail = useCallback(() => setDetail(null), []);
  const takeOver = useCallback(() => setInteracted(true), []);

  // Fake fetch so the detail view shimmers like a real screen.
  useEffect(() => {
    if (detail === null) return;
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 520);
    return () => window.clearTimeout(timer);
  }, [detail]);

  useEffect(() => {
    if (interacted || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const steps = [
      () => openDetail(0),
      () => closeDetail(),
      () => changeTab("stack"),
      () => changeTab("profile"),
      () => changeTab("apps"),
    ];

    let index = 0;
    let timer = 0;

    const tick = () => {
      timer = window.setTimeout(() => {
        steps[index % steps.length]();
        index += 1;
        tick();
      }, DEMO_DELAYS[index % DEMO_DELAYS.length]);
    };

    tick();
    return () => window.clearTimeout(timer);
  }, [interacted, inView, changeTab, openDetail, closeDetail]);

  // Subtle parallax tilt so the device reads as a physical object.
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const handleTilt = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(nx * 12);
    rotateX.set(-ny * 12);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleSwipe = (offsetX: number) => {
    if (Math.abs(offsetX) < 55) return;
    const current = TAB_IDS.indexOf(tabRef.current);
    const next = offsetX < 0 ? current + 1 : current - 1;
    if (next < 0 || next >= TAB_IDS.length) return;
    takeOver();
    changeTab(TAB_IDS[next]);
  };

  return (
    <div
      className="device-stage"
      ref={rootRef}
      onPointerMove={handleTilt}
      onPointerLeave={resetTilt}
      onPointerDown={takeOver}
    >
      <motion.div
        className="device"
        style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
      >
        <div className="device__glare" aria-hidden="true" />
        <div className="device__screen">
          <div className="device__island" aria-hidden="true" />
          <StatusBar />

          <div className="device__viewport">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={tab}
                className="device__page"
                drag={detail === null ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={(_, info) => handleSwipe(info.offset.x)}
                initial={{ opacity: 0, x: direction * 26 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -26 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                {tab === "apps" && <AppsScreen onOpen={openDetail} />}
                {tab === "stack" && <StackScreen />}
                {tab === "profile" && <ProfileScreen />}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence>
              {detail !== null && (
                <motion.div
                  className="device__page device__page--pushed"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={SPRING}
                >
                  <DetailScreen
                    app={apps[detail]}
                    loading={loading}
                    onBack={closeDetail}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <nav className="device__tabs">
            {TABS.map((item) => {
              const active = item.id === tab && detail === null;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`device__tab ${active ? "is-active" : ""}`}
                  onClick={() => {
                    closeDetail();
                    changeTab(item.id);
                  }}
                >
                  <span className="device__tab-icon">{item.icon}</span>
                  <span className="device__tab-label">{item.label}</span>
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      className="device__tab-pill"
                      transition={SPRING}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <span className="device__home" aria-hidden="true" />
        </div>
      </motion.div>

      <p className="device-stage__hint">
        {interacted ? "Swipe or tap to explore" : "Live demo — tap to take over"}
      </p>
    </div>
  );
};

export default DeviceShowcase;
