import { ReactNode } from "react";
import {
  SiFirebase,
  SiGraphql,
  SiReact,
  SiRedux,
  SiSentry,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbDeviceMobileCode, TbRocket } from "react-icons/tb";
import { projects } from "../../data/projects";

export type TabId = "apps" | "stack" | "profile";

export type AppEntry = {
  title: string;
  category: string;
  tools: string;
  image: string;
  url?: string;
  /** Short label shown on the list row, e.g. "10K+". */
  metric: string;
  rating: string;
};

const METRICS: Record<string, { metric: string; rating: string }> = {
  "HAAT Delivery": { metric: "1M+", rating: "4.5" },
  AppsOnAir: { metric: "1K+", rating: "—" },
  "Hydreight Wellness": { metric: "10K+", rating: "4.6" },
  "The DRIPBaR": { metric: "5K+", rating: "4.8" },
  ContactBook: { metric: "10K+", rating: "4.5" },
};

export const apps: AppEntry[] = projects.map((project) => ({
  title: project.title,
  category: project.category.split(" · ")[0],
  tools: project.tools,
  image: project.image,
  url: project.links[0]?.url,
  metric: METRICS[project.title]?.metric ?? "10K+",
  rating: METRICS[project.title]?.rating ?? "4.5",
}));

export const stackItems: { icon: ReactNode; label: string; note: string }[] = [
  { icon: <SiReact />, label: "React Native", note: "iOS · Android · tvOS" },
  { icon: <SiTypescript />, label: "TypeScript", note: "strict mode" },
  { icon: <SiGraphql />, label: "GraphQL", note: "Apollo · codegen" },
  { icon: <SiRedux />, label: "State", note: "Redux · Zustand" },
  { icon: <SiFirebase />, label: "Firebase", note: "auth · push" },
  { icon: <SiSentry />, label: "Sentry", note: "crash-free 99.8%" },
  { icon: <TbRocket />, label: "Fastlane", note: "CI/CD · CodePush" },
  { icon: <TbApi />, label: "Native", note: "bridges · modules" },
  { icon: <TbDeviceMobileCode />, label: "ReNative", note: "OTT · tvOS" },
];

export const profileStats = [
  { value: "7+", label: "Years" },
  { value: "1M+", label: "Downloads" },
  { value: "5", label: "Live apps" },
];
