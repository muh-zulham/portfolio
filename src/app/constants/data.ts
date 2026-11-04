// =============================================
// PORTFOLIO DATA — Zulham
// =============================================

const DOMAIN = "muhzulham.my.id";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Zulham",
  title: "Frontend Developer",
  location: "Indonesia",
  email: "hi.zulham@gmail.com",
  description: [
    "Hey, I'm Zulham — a frontend developer based in Indonesia. I build fast, modern web interfaces that don't just look good but feel right to use. I'm currently deep into the Next.js + Tailwind ecosystem, and I love turning design ideas into responsive, accessible, and production-ready pages.",
    "When I'm not coding, I'm usually exploring how small details — motion, spacing, loading states — can make or break a user's first impression. I care about clean code and clean UI equally, and I'm always looking for projects where I can ship something real, not just a demo.",
    "I'm currently open to freelance work and remote opportunities where I can help startups or small teams build their web presence from scratch or improve what they already have.",
  ],
  profileImage: "/placeholder-avatar.png",
  profileGif: "/placeholder-avatar.png",
};

export const USER_NAMES = {
  githubUsername: "muh-zulham",
  linkedinUsername: "muhzulham",
  twitterUsername: "muhzulham",
  peerlistUsername: "",
  instagramUsername: "zulhamjourney",
  calUsername: "",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

export const SKILLS = [
  "html",
  "css",
  "js",
  "ts",
  "react",
  "nextjs",
  "tailwind",
  "nodejs",
  "git",
  "github",
  "vscode",
  "figma",
  "vercel",
];

export const EXPERIENCE = [
  {
    company: "Self-employed",
    companyLink: "",
    logo: "",
    role: "Frontend Developer",
    period: "2024 - Present",
    location: "Remote, Indonesia",
    description:
      "Built and shipped responsive web interfaces using Next.js, TypeScript, and Tailwind CSS. Focused on clean component architecture, performance optimization, and accessible UI patterns for client projects.",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
];

export const EDUCATION = [
  {
    degree: "Sistem Komputer",
    institution: "Universitas Sumatera Utara",
    institutionLink: "https://usu.ac.id",
    period: "2015 - 2019",
    score: "3.13",
  },
];

export const TESTIMONIALS = [];
