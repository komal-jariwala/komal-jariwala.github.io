import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "./SectionHeading";
import { profile, getWhatsAppLink } from "../data/profile";
import "./styles/Contact.css";

const Contact = () => {
  const whatsappFulltime = getWhatsAppLink("fulltime");
  const whatsappFreelance = getWhatsAppLink("freelance");

  return (
    <section className="contact-section section-wrap" id="contact">
      <SectionHeading
        index="06"
        title="Let's work together"
        subtitle="Full-time, freelance, or contract — share your JD or book a call."
      />

      <div className="contact-cta-card">
        <div className="contact-cta-card__tags">
          {profile.openTo.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="contact-cta-card__loc">{profile.locationPreference}</p>
        <div className="contact-cta-card__actions">
          <a
            href={whatsappFulltime!}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            <FaWhatsapp /> Share JD on WhatsApp
          </a>
          <a
            href={whatsappFreelance!}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Freelance inquiry
          </a>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Book 30 min
          </a>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-block">
          <h4>Email</h4>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div className="contact-block">
          <h4>WhatsApp</h4>
          <a
            href={getWhatsAppLink("general")!}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-wa"
          >
            +91 79906 40751 <MdArrowOutward />
          </a>
        </div>
        <div className="contact-block">
          <h4>Social</h4>
          <div className="contact-socials">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
              GitHub <MdArrowOutward />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn <MdArrowOutward />
            </a>
            <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">
              Twitter <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <p>
          Designed & built by <span>{profile.name}</span>
        </p>
        <p>
          <MdCopyright /> 2026
        </p>
      </footer>
    </section>
  );
};

export default Contact;
