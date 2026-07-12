export const profile = {
  name: "Komal Jariwala",
  title: "Senior Mobile Developer",
  email: "kmlrn8522@gmail.com",
  whatsapp: "917990640751",
  calendly: "https://calendly.com/komal-jariwala/30min",
  experienceYears: 7,
  location: "Surat, India",
  locationPreference:
    "Remote preferred · Hybrid in Surat area · Not open to relocation",
  openTo: ["Full-time", "Freelance", "Contract"] as const,
  social: {
    github: "https://github.com/komaljariwala",
    linkedin: "https://www.linkedin.com/in/komal-jariwala",
    twitter: "https://x.com/komaljariwala",
    instagram: "https://www.instagram.com/komaljariwala",
  },
};

export function getWhatsAppLink(purpose: "fulltime" | "freelance" | "general") {
  if (!profile.whatsapp) return null;

  const messages = {
    fulltime:
      "Hi Komal! I'm a hiring manager interested in a full-time mobile role. Here's the JD:\n\n",
    freelance:
      "Hi Komal! I have a freelance mobile project. Here are the details:\n\n",
    general: "Hi Komal! I'd like to connect about a mobile development opportunity.",
  };

  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(messages[purpose])}`;
}
