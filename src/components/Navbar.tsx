import { profile } from "../data/profile";
import "./styles/Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="site-nav section-wrap">
        <a href="#landing" className="site-nav__brand">
          KJ<span className="site-nav__dot">.</span>
        </a>
        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href={`mailto:${profile.email}`} className="site-nav__cta">
          Hire me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
