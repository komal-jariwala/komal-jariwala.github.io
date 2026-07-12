import { SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { profile } from "../data/profile";
import "./styles/Landing.css";

const bentoItems = [
  {
    id: "exp",
    label: "Experience",
    value: "7+",
    detail: "years shipping mobile",
    featured: true,
  },
  {
    id: "rn",
    icon: <SiReact />,
    label: "Stack",
    value: "React Native",
    detail: "iOS · Android · tvOS",
  },
  {
    id: "ts",
    icon: <SiTypescript />,
    label: "Language",
    value: "TypeScript",
    detail: "strict mode always",
  },
  {
    id: "stack",
    icon: <SiNodedotjs />,
    label: "Ship",
    value: "GraphQL · CI/CD",
    detail: "Fastlane · CodePush",
  },
];

const Landing = () => {
  return (
    <section className="landing-section" id="landing">
      <div className="landing-container section-wrap">
        <div className="hero-layout hero-enter">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge__dot" />
              Open to {profile.openTo.join(" · ")}
            </div>

            <h1 className="hero-title">
              <span className="hero-title__line">Komal</span>
              <span className="hero-title__line hero-title__gradient">
                Jariwala
              </span>
            </h1>

            <p className="hero-role">
              Senior Mobile{" "}
              <span className="hero-role-swap">
                <span>Developer</span>
                <span>Engineer</span>
              </span>
            </p>

            <p className="hero-tagline">
              I build fast, polished React Native apps for healthcare, wellness,
              and startups — from idea to App Store.
            </p>

            <div className="hero-cta">
              <a href="#work" className="btn btn--primary">
                See my apps
              </a>
              <a href="#contact" className="btn btn--ghost">
                Let&apos;s talk
              </a>
            </div>

            <p className="hero-meta">
              {profile.location} · Remote & hybrid
            </p>
          </div>

          <div className="hero-bento">
            {bentoItems.map((item) => (
              <article
                key={item.id}
                className={`bento-tile ${item.featured ? "bento-tile--featured" : ""}`}
                data-bento={item.id}
              >
                {item.icon && (
                  <span className="bento-tile__icon">{item.icon}</span>
                )}
                <span className="bento-tile__label">{item.label}</span>
                <strong className="bento-tile__value">{item.value}</strong>
                <span className="bento-tile__detail">{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
