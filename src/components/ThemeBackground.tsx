import { useTheme } from "../context/ThemeProvider";
import NeonField from "./NeonField";
import SpecBackground from "./SpecBackground";
import "./styles/ThemeBackground.css";

const ThemeBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="theme-bg" aria-hidden="true">
      {theme === "aurora" && (
        <div className="aurora-field">
          <span className="aurora-blob aurora-blob--1" />
          <span className="aurora-blob aurora-blob--2" />
          <span className="aurora-blob aurora-blob--3" />
          <span className="aurora-blob aurora-blob--4" />
        </div>
      )}

      {theme === "editorial" && (
        <div className="editorial-field">
          <span className="editorial-shape editorial-shape--disc" />
          <span className="editorial-shape editorial-shape--bar" />
          <span className="editorial-shape editorial-shape--ring" />
        </div>
      )}

      {theme === "neon" && (
        <div className="neon-field">
          <span className="neon-glow neon-glow--1" />
          <span className="neon-glow neon-glow--2" />
          <span className="neon-glow neon-glow--3" />
          <NeonField />
          <span className="neon-scanlines" />
        </div>
      )}

      <SpecBackground />
      <div className="theme-grain" />
    </div>
  );
};

export default ThemeBackground;
