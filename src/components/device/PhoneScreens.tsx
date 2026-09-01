import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MdArrowBack,
  MdArrowOutward,
  MdCheckCircle,
  MdChevronRight,
  MdSignalCellularAlt,
  MdStar,
  MdWifi,
} from "react-icons/md";
import { AppEntry, apps, profileStats, stackItems } from "./deviceData";
import { profile } from "../../data/profile";

const formatTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export const StatusBar = () => {
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatTime()), 15000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="ph-status">
      <span className="ph-status__time">{time}</span>
      <span className="ph-status__icons">
        <MdSignalCellularAlt />
        <MdWifi />
        <span className="ph-battery">
          <span className="ph-battery__fill" />
        </span>
      </span>
    </div>
  );
};

/* ------------------------------------------------------------------ */

export const AppsScreen = ({
  onOpen,
}: {
  onOpen: (index: number) => void;
}) => (
  <div className="ph-screen">
    <header className="ph-head">
      <p className="ph-head__eyebrow">Shipped</p>
      <h4 className="ph-head__title">Featured apps</h4>
    </header>

    <ul className="ph-list">
      {apps.map((app, index) => (
        <motion.li
          key={app.title}
          className="ph-row"
          onClick={() => onOpen(index)}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <span className="ph-row__icon">
            <img src={app.image} alt="" loading="lazy" />
          </span>
          <span className="ph-row__text">
            <strong>{app.title}</strong>
            <small>{app.category}</small>
          </span>
          <span className="ph-row__meta">
            <b>
              <MdStar /> {app.rating}
            </b>
            <small>{app.metric}</small>
          </span>
          <MdChevronRight className="ph-row__chevron" />
        </motion.li>
      ))}

      <li className="ph-row ph-row--static">
        <span className="ph-row__icon ph-row__icon--ghost">+3</span>
        <span className="ph-row__text">
          <strong>Also built</strong>
          <small>OTT &amp; tvOS · ReNative · store builds</small>
        </span>
      </li>
    </ul>

    <section className="ph-log">
      <p className="ph-log__title">Ship log</p>
      {[
        { label: "fastlane beta · v2.14 (142)", when: "2h" },
        { label: "CodePush rollout · 100%", when: "1d" },
        { label: "Sentry crash-free · 99.8%", when: "now" },
      ].map((entry) => (
        <div key={entry.label} className="ph-log__row">
          <MdCheckCircle />
          <span>{entry.label}</span>
          <time>{entry.when}</time>
        </div>
      ))}
    </section>

    <p className="ph-note">Tap an app for details</p>
  </div>
);

/* ------------------------------------------------------------------ */

export const StackScreen = () => (
  <div className="ph-screen">
    <header className="ph-head">
      <p className="ph-head__eyebrow">Daily drivers</p>
      <h4 className="ph-head__title">Tech stack</h4>
    </header>

    <div className="ph-grid">
      {stackItems.map((item) => (
        <motion.div
          key={item.label}
          className="ph-tile"
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <span className="ph-tile__icon">{item.icon}</span>
          <strong>{item.label}</strong>
          <small>{item.note}</small>
        </motion.div>
      ))}
    </div>

    <section className="ph-log">
      <p className="ph-log__title">Also in the toolbox</p>
      <p className="ph-log__prose">
        Detox · Reanimated · MMKV · Notifee · Maestro · App Store Connect ·
        Play Console
      </p>
    </section>
  </div>
);

/* ------------------------------------------------------------------ */

export const ProfileScreen = () => (
  <div className="ph-screen">
    <div className="ph-profile">
      <span className="ph-avatar">KJ</span>
      <strong className="ph-profile__name">{profile.name}</strong>
      <small className="ph-profile__role">{profile.title}</small>
      <span className="ph-chip-live">
        <i /> Open to work
      </span>
    </div>

    <div className="ph-stats">
      {profileStats.map((stat) => (
        <div key={stat.label} className="ph-stat">
          <strong>{stat.value}</strong>
          <small>{stat.label}</small>
        </div>
      ))}
    </div>

    <ul className="ph-list ph-list--compact">
      <li className="ph-row ph-row--static">
        <span className="ph-row__text">
          <strong>Now</strong>
          <small>Sr. React Native Dev @ HAAT</small>
        </span>
      </li>
      <li className="ph-row ph-row--static">
        <span className="ph-row__text">
          <strong>Based in</strong>
          <small>{profile.location} · Remote &amp; hybrid</small>
        </span>
      </li>
      <li className="ph-row ph-row--static">
        <span className="ph-row__text">
          <strong>Open to</strong>
          <small>{profile.openTo.join(" · ")}</small>
        </span>
      </li>
    </ul>

    <motion.a
      className="ph-cta ph-cta--spaced"
      href={`mailto:${profile.email}`}
      whileTap={{ scale: 0.96 }}
    >
      Get in touch <MdArrowOutward />
    </motion.a>
  </div>
);

/* ------------------------------------------------------------------ */

const DetailSkeleton = () => (
  <div className="ph-skeleton">
    <span className="sk sk--hero" />
    <span className="sk sk--line" />
    <span className="sk sk--line sk--short" />
    <span className="sk sk--block" />
  </div>
);

export const DetailScreen = ({
  app,
  loading,
  onBack,
}: {
  app: AppEntry;
  loading: boolean;
  onBack: () => void;
}) => (
  <div className="ph-screen ph-screen--detail">
    <motion.button
      type="button"
      className="ph-back"
      onClick={onBack}
      whileTap={{ scale: 0.92 }}
    >
      <MdArrowBack /> Apps
    </motion.button>

    {loading ? (
      <DetailSkeleton />
    ) : (
      /* CSS rather than a motion value so the content is never stuck hidden. */
      <div className="ph-enter">
        <div className="ph-hero">
          <img src={app.image} alt={`${app.title} screen`} loading="lazy" />
        </div>

        <h4 className="ph-detail__title">{app.title}</h4>
        <p className="ph-detail__cat">
          <MdStar /> {app.rating} · {app.metric} downloads
        </p>
        <p className="ph-detail__body">{app.tools}</p>

        {app.url && (
          <motion.a
            className="ph-cta"
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.96 }}
          >
            Open listing <MdArrowOutward />
          </motion.a>
        )}
      </div>
    )}
  </div>
);
