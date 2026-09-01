import { motion, useScroll, useSpring } from "framer-motion";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import PullToRefresh from "./PullToRefresh";
import SocialIcons from "./SocialIcons";
import StackGrid from "./StackGrid";
import StickyCta from "./StickyCta";
import Skills from "./Skills";
import ThemeBackground from "./ThemeBackground";
import ThemeSwitcher from "./ThemeSwitcher";
import Work from "./Work";

const MainContainer = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div className="page-shell">
      <ThemeBackground />
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <Navbar />
      <SocialIcons />
      <StickyCta />
      <ThemeSwitcher />
      <PullToRefresh>
        <main className="page-main">
          <Landing />
          <About />
          <Skills />
          <Work />
          <Career />
          <StackGrid />
          <Contact />
        </main>
      </PullToRefresh>
    </div>
  );
};

export default MainContainer;
