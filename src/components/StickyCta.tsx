import { FaWhatsapp } from "react-icons/fa6";
import { getWhatsAppLink } from "../data/profile";
import "./styles/StickyCta.css";

const StickyCta = () => {
  const whatsapp = getWhatsAppLink("fulltime");
  if (!whatsapp) return null;

  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-cta"
      aria-label="Share job description on WhatsApp"
    >
      <FaWhatsapp />
      <span>Share JD</span>
    </a>
  );
};

export default StickyCta;
