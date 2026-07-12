import SectionHeading from "./SectionHeading";
import "./styles/Career.css";

const roles = [
  {
    title: "Sr. React Native Developer",
    company: "HAAT",
    period: "Oct 2025 – Present",
    detail: "Food delivery · Android 16K, list perf, startup shipping pace.",
  },
  {
    title: "Software Engineer",
    company: "Logicwind",
    period: "Sep 2022 – Sep 2025",
    detail: "30% faster load times · native modules · mentored juniors.",
  },
  {
    title: "React Native Developer",
    company: "Triveni Infotech",
    period: "Jul 2020 – Sep 2022",
    detail: "HIPAA healthcare · GraphQL · Fastlane · 40% fewer crashes.",
  },
  {
    title: "React Native Developer",
    company: "Narola Infotech",
    period: "Jan 2020 – Jun 2020",
    detail: "Redux/MobX · REST APIs · Firebase MVPs.",
  },
  {
    title: "Intern Android Developer",
    company: "Dominant Infotech",
    period: "Jun 2016 – Jun 2017",
    detail: "Java/XML Android modules · API integration.",
  },
];

const Career = () => (
  <section className="career-section section-wrap" id="career">
    <SectionHeading
      index="04"
      title="Experience"
      subtitle="7+ years building mobile — startups to healthcare."
    />
    <div className="career-track">
      {roles.map((role, i) => (
        <article key={role.company + role.period} className="career-card">
          <span className="career-card__step">{String(i + 1).padStart(2, "0")}</span>
          <div className="career-card__main">
            <div className="career-card__head">
              <div>
                <h3>{role.title}</h3>
                <p className="career-card__company">{role.company}</p>
              </div>
              <time>{role.period}</time>
            </div>
            <p className="career-card__detail">{role.detail}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Career;
