export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  appStoreUrl?: string;
  github?: string;
  featured?: boolean;
  year: string;
  category: string;
  icon?: string;
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Projects", href: "/#projects" },
] as const;

export const projects: Project[] = [
  {
    slug: "claveo",
    title: "Claveo",
    description:
      "All-in-one music practice app. Record sessions, build streaks, and stay in tune with built-in tools.",
    stack: ["Swift", "SwiftUI", "Svelte"],
    liveUrl: "https://claveo-app.vercel.app/",
    appStoreUrl:
      "https://apps.apple.com/us/app/claveo-music-companion/id6755795790",
    github: "https://github.com/olivertransf/Claveo",
    icon: "/projects/claveo/icon.png",
    featured: true,
    year: "2025",
    category: "iOS",
  },
  {
    slug: "pocketpic",
    title: "PocketPic",
    description:
      "One photo a day, one time-lapse. Shoot on iPhone or from your Mac menu bar.",
    stack: ["Swift", "SwiftUI"],
    liveUrl: "https://pocket-pic.vercel.app/",
    github: "https://github.com/olivertransf/PocketPic",
    year: "2025",
    category: "iOS · macOS",
  },
  {
    slug: "studium",
    title: "Studium",
    description:
      "Real SAT questions with smart filters and progress tracking. Pick up on phone, Mac, or web.",
    stack: ["Swift", "React", "Firebase"],
    liveUrl: "https://studium-prep.vercel.app",
    github: "https://github.com/olivertransf/Studium",
    year: "2025",
    category: "iOS · Web",
  },
  {
    slug: "itsturkey",
    title: "itsturkey",
    description:
      "Street View geography game. Solo streaks, daily challenges, and live duels with friends.",
    stack: ["Next.js", "TypeScript", "MongoDB"],
    liveUrl: "https://itsturkey.vercel.app",
    github: "https://github.com/olivertransf/itsturkey",
    year: "2026",
    category: "Web",
  },
  {
    slug: "soundfolio",
    title: "Soundfolio",
    description:
      "Your listening habits, visualized. Import Spotify history and sync Last.fm on web and iOS.",
    stack: ["Next.js", "Firebase", "Swift"],
    liveUrl: "https://soundfolio-stats.vercel.app",
    github: "https://github.com/olivertransf/Soundfolio",
    year: "2026",
    category: "Web · iOS",
  },
];

export const githubProfile = "https://github.com/olivertransf";

export const socialLinks = [
  { label: "GitHub", href: githubProfile },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olivertransf/",
  },
] as const;
