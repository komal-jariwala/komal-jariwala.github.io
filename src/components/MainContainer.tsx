import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import StackGrid from "./StackGrid";
import StickyCta from "./StickyCta";
import Skills from "./Skills";
import Work from "./Work";

const MainContainer = () => {
  return (
    <div className="page-shell">
      <div className="page-mesh" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />
      <Navbar />
      <SocialIcons />
      <StickyCta />
      <main className="page-main">
        <Landing />
        <About />
        <Skills />
        <Work />
        <Career />
        <StackGrid />
        <Contact />
      </main>
    </div>
  );
};

export default MainContainer;
