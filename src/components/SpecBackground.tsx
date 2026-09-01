import "./styles/SpecBackground.css";

/** Wireframe of a handset annotated the way a layout spec would be. */
const DeviceWire = ({
  className,
  label,
}: {
  className: string;
  label: string;
}) => (
  <svg
    className={`spec-wire ${className}`}
    viewBox="0 0 220 450"
    fill="none"
    aria-hidden="true"
  >
    {/* Body + screen */}
    <rect
      x="20"
      y="12"
      width="180"
      height="380"
      rx="30"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <rect
      x="28"
      y="20"
      width="164"
      height="364"
      rx="24"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeDasharray="5 5"
      opacity="0.55"
    />

    {/* Dynamic Island */}
    <rect
      x="90"
      y="29"
      width="40"
      height="12"
      rx="6"
      stroke="currentColor"
      strokeWidth="1"
    />

    {/* Safe area guides */}
    <rect
      x="36"
      y="54"
      width="148"
      height="296"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeDasharray="3 6"
      opacity="0.6"
    />
    <rect
      x="72"
      y="370"
      width="76"
      height="4"
      rx="2"
      stroke="currentColor"
      strokeWidth="0.7"
    />

    {/* Width redline */}
    <line
      x1="20"
      y1="410"
      x2="200"
      y2="410"
      stroke="currentColor"
      strokeWidth="0.7"
    />
    <line x1="20" y1="404" x2="20" y2="416" stroke="currentColor" strokeWidth="0.7" />
    <line
      x1="200"
      y1="404"
      x2="200"
      y2="416"
      stroke="currentColor"
      strokeWidth="0.7"
    />
    <text
      x="110"
      y="432"
      textAnchor="middle"
      fontSize="15"
      fontFamily="Geist Mono, ui-monospace, monospace"
      fill="currentColor"
    >
      {label}
    </text>

    {/* Safe-area inset callout */}
    <line x1="28" y1="54" x2="8" y2="54" stroke="currentColor" strokeWidth="0.7" />
    <text
      x="4"
      y="50"
      fontSize="13"
      fontFamily="Geist Mono, ui-monospace, monospace"
      fill="currentColor"
      opacity="0.85"
    >
      16
    </text>
  </svg>
);

/** 44pt minimum tap target, the classic mobile annotation. */
const TapTarget = () => (
  <svg className="spec-tap" viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle
      cx="60"
      cy="52"
      r="30"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="4 5"
    />
    <circle cx="60" cy="52" r="3" fill="currentColor" />
    <line x1="30" y1="52" x2="90" y2="52" stroke="currentColor" strokeWidth="0.7" />
    <text
      x="60"
      y="104"
      textAnchor="middle"
      fontSize="13"
      fontFamily="Geist Mono, ui-monospace, monospace"
      fill="currentColor"
    >
      44pt tap
    </text>
  </svg>
);

const buildLog = [
  "$ fastlane beta",
  "▸ match · signing certs ok",
  "▸ gym · Release scheme",
  "▸ Hydreight 2.14.0 (142)",
  "✓ TestFlight upload · 3m 12s",
  "$ appcenter codepush release-react",
  "✓ rollout 100% · 0 rollbacks",
  "$ sentry-cli releases finalize",
  "✓ crash-free sessions 99.8%",
  "$ detox test --configuration ios.sim",
  "✓ 48 passing · 0 failing",
];

const BuildTicker = () => (
  <div className="spec-ticker" aria-hidden="true">
    <div className="spec-ticker__track">
      {[...buildLog, ...buildLog].map((line, i) => (
        <span key={`${line}-${i}`}>{line}</span>
      ))}
    </div>
  </div>
);

/**
 * Shared layer that gives every theme the same mobile-engineering vocabulary:
 * an 8pt grid, annotated device wireframes and a running build log.
 */
const SpecBackground = () => (
  <div className="spec" aria-hidden="true">
    <div className="spec__grid" />
    <div className="spec__baseline" />
    <DeviceWire className="spec-wire--a" label="393 × 852" />
    <DeviceWire className="spec-wire--b" label="430 × 932" />
    <TapTarget />
    <BuildTicker />
  </div>
);

export default SpecBackground;
