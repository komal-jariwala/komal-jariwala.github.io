export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  category: string;
  tools: string;
  image: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "HAAT Delivery",
    category: "Food Delivery · 1M+ downloads",
    tools:
      "React Native, Android 16K, list performance, real-time order tracking, restaurant discovery",
    image: "/images/haat.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.haat.client",
      },
      {
        label: "Website",
        url: "https://haat.delivery/",
      },
    ],
  },
  {
    title: "AppsOnAir",
    category: "OTA Distribution · 1K+ downloads",
    tools:
      "React Native, APK/IPA distribution, tester invites, rollback, release notifications",
    image: "/images/appsonair.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.logicwind.appsonair",
      },
      {
        label: "Website",
        url: "https://www.appsonair.com/",
      },
    ],
  },
  {
    title: "Hydreight Wellness",
    category: "Wellness & IV Therapy · 10K+ downloads",
    tools:
      "React Native, HIPAA-aligned flows, real-time booking, licensed provider dispatch",
    image: "/images/hydreight.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.vsdigitalhealth.thehydreight",
      },
    ],
  },
  {
    title: "The DRIPBaR",
    category: "IV Therapy & Wellness · National franchise",
    tools:
      "React Native, iOS, appointment scheduling, location discovery, wellness booking",
    image: "/images/dripbar.webp",
    links: [
      {
        label: "Website",
        url: "https://thedripbar.com/",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.vsdigitalhealth.thedripbar",
      },
    ],
  },
  {
    title: "ContactBook",
    category: "Contact & Team Management · 10K+ downloads",
    tools:
      "React Native, Android, secure team sync, Caller ID, workspace collaboration",
    image: "/images/contactbook.webp",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.logicwind.contactbook",
      },
    ],
  },
];

export const alsoBuilt =
  "Also: OTT & tvOS apps (ReNative) · freelance mobile store builds";
