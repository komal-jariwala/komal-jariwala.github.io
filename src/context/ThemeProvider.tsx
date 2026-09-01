import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const themes = [
  {
    id: "aurora",
    name: "Aurora",
    blurb: "Drifting light & glass",
    swatch: ["#38bdf8", "#a78bfa", "#2dd4bf"],
  },
  {
    id: "editorial",
    name: "Editorial",
    blurb: "Bold print, hard edges",
    swatch: ["#ff4d1c", "#c6f24e", "#111111"],
  },
  {
    id: "neon",
    name: "Neon",
    blurb: "Cyber glow & particles",
    swatch: ["#ff2e97", "#00e5ff", "#7c3aed"],
  },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const STORAGE_KEY = "kj-theme";
const DEFAULT_THEME: ThemeId = "aurora";

const isThemeId = (value: unknown): value is ThemeId =>
  themes.some((theme) => theme.id === value);

const readInitialTheme = (): ThemeId => {
  if (typeof window === "undefined") return DEFAULT_THEME;

  // `?theme=neon` wins so a specific look can be shared by link.
  const requested = new URLSearchParams(window.location.search).get("theme");
  if (isThemeId(requested)) return requested;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isThemeId(stored) ? stored : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
};

const BROWSER_CHROME_COLOR: Record<ThemeId, string> = {
  aurora: "#05070f",
  editorial: "#f2ede1",
  neon: "#06010e",
};

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeId>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_CHROME_COLOR[theme]);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Private browsing or blocked storage — theme still applies for this session.
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
