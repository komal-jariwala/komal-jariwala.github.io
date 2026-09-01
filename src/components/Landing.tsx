import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { fadeUp, scaleIn, stagger } from "../lib/motion";
import DeviceShowcase from "./DeviceShowcase";
import Magnetic from "./Magnetic";
import "./styles/Landing.css";

const heroStats = [
  { value: "7+", label: "Years" },
  { value: "25K+", label: "Downloads" },
  { value: "3", label: "Live apps" },
];

const Landing = () => {
  return (
    <section className="landing-section" id="landing">
      <div className="landing-container section-wrap">
        <motion.div
          className="hero-layout"
          variants={stagger(0.09)}
          initial="hidden"
          animate="show"
        >
          <div className="hero-content">
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="hero-badge__dot" />
              Open to {profile.openTo.join(" · ")}
            </motion.div>

            <h1 className="hero-title">
              <motion.span className="hero-title__line" variants={fadeUp}>
                Komal
              </motion.span>
              <motion.span
                className="hero-title__line hero-title__gradient"
                variants={fadeUp}
              >
                Jariwala
              </motion.span>
            </h1>

            <motion.p className="hero-role" variants={fadeUp}>
              Senior Mobile{" "}
              <span className="hero-role-swap">
                <span>Developer</span>
                <span>Engineer</span>
              </span>
            </motion.p>

            <motion.p className="hero-tagline" variants={fadeUp}>
              I build fast, polished React Native apps for healthcare, wellness,
              and startups — from idea to App Store.
            </motion.p>

            <motion.div className="hero-cta" variants={fadeUp}>
              <Magnetic>
                <a href="#work" className="btn btn--primary">
                  See my apps
                </a>
              </Magnetic>
              <Magnetic>
                <a href="#contact" className="btn btn--ghost">
                  Let&apos;s talk
                </a>
              </Magnetic>
            </motion.div>

            <motion.div className="hero-stats" variants={stagger(0.06)}>
              {heroStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="hero-stat"
                  variants={scaleIn}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p className="hero-meta" variants={fadeUp}>
              {profile.location} · Remote &amp; hybrid
            </motion.p>
          </div>

          <motion.div
            className="hero-device"
            initial={{ opacity: 0, y: 40, rotateY: -12 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <DeviceShowcase />
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="hero-scroll__rail">
            <span className="hero-scroll__dot" />
          </span>
          Scroll
        </motion.a>
      </div>
    </section>
  );
};

export default Landing;
