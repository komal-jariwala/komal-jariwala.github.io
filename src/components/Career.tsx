import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. React Native Developer</h4>
                <h5>HAAT – Food Delivery app</h5>
              </div>
              <h3>Oct 2025 – Present</h3>
            </div>
            <p>
              Improved app performance and compatibility (including Android 16K
              support, list optimization, and timer enhancements) while working in
              a fast-paced startup environment focused on timely data visibility
              and delivery.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Logicwind</h5>
              </div>
              <h3>Sep 2022 – Sept 2025</h3>
            </div>
            <p>
              Delivered scalable and responsive mobile apps using React Native
              and TypeScript, improving load times by 30%. Built and integrated
              custom native modules (iOS – Objective-C/Swift, Android –
              Kotlin/Java). Diagnosed and resolved native bridge crashes, memory
              leaks, and performance bottlenecks. Mentored junior developers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Triveni Infotech</h5>
              </div>
              <h3>Jul 2020 – Sep 2022</h3>
            </div>
            <p>
              Built HIPAA-compliant healthcare apps with secure login (Azure
              B2C, Okta) and GraphQL APIs; integrated Context hooks, real-time
              syncing, push notifications, and Firebase analytics. Implemented
              CI/CD pipelines using Fastlane & CodePush. Led Agile ceremonies
              and reduced crash rate by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Narola Infotech</h5>
              </div>
              <h3>Jan 2020 – Jun 2020</h3>
            </div>
            <p>
              Implemented complex state management with Redux, MobX and Context.
              Integrated REST APIs with Axios/Fetch. Built UI features for MVPs
              and integrated Firebase services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern Android Developer</h4>
                <h5>Dominant Infotech</h5>
              </div>
              <h3>Jun 2016 – Jun 2017</h3>
            </div>
            <p>
              Developed core Android modules using Java/XML and gained hands-on
              experience in data handling and API integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
