import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdPalette } from "react-icons/md";
import { themes, useTheme } from "../context/ThemeProvider";
import "./styles/ThemeSwitcher.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const active = themes.find((item) => item.id === theme) ?? themes[0];

  return (
    <div className="theme-switcher">
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            <p className="theme-panel__title">Pick a vibe</p>
            {themes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`theme-option ${
                  item.id === theme ? "theme-option--active" : ""
                }`}
                onClick={() => setTheme(item.id)}
              >
                <span className="theme-option__swatch">
                  {item.swatch.map((color) => (
                    <i key={color} style={{ background: color }} />
                  ))}
                </span>
                <span className="theme-option__text">
                  <strong>{item.name}</strong>
                  <small>{item.blurb}</small>
                </span>
                {item.id === theme && (
                  <MdCheck className="theme-option__check" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="theme-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={`Change theme, currently ${active.name}`}
        whileTap={{ scale: 0.94 }}
      >
        <motion.span
          className="theme-trigger__icon"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <MdPalette />
        </motion.span>
        <span className="theme-trigger__label">{active.name}</span>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
