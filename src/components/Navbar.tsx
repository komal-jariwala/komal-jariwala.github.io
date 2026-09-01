import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "../data/profile";
import DynamicIsland from "./DynamicIsland";
import Magnetic from "./Magnetic";
import "./styles/Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 260);
  });

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -110 : 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
    >
      <nav className="site-nav section-wrap">
        <a href="#landing" className="site-nav__brand">
          KJ<span className="site-nav__dot">.</span>
        </a>

        <DynamicIsland />

        <div className="site-nav__end">
          <ul className="site-nav__links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <Magnetic strength={0.25}>
            <a href={`mailto:${profile.email}`} className="site-nav__cta">
              Hire me
            </a>
          </Magnetic>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
