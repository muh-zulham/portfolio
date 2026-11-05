// =============================================
// PORTFOLIO DATA — Zulham
// =============================================

const DOMAIN = "muhzulham.my.id";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Zulham",
  title: "Frontend Developer",
  location: "Jambi, Indonesia",
  email: "hi.zulham@gmail.com",
  description: [
    "Hey, I'm Zulham — a frontend developer based in Indonesia. I build fast, modern web interfaces that don't just look good but feel right to use. I'm currently deep into the Next.js + Tailwind ecosystem, and I love turning design ideas into responsive, accessible, and production-ready pages.",
    "When I'm not coding, I'm usually exploring how small details — motion, spacing, loading states — can make or break a user's first impression. I care about clean code and clean UI equally, and I'm always looking for projects where I can ship something real, not just a demo.",
    "I'm currently open to freelance work and remote opportunities where I can help startups or small teams build their web presence from scratch or improve what they already have.",
  ],
  profileImage: "/muhzulham.webp",
  profileGif: "/muhzulham.webp",
};

export const USER_NAMES = {
  githubUsername: "muh-zulham",
  linkedinUsername: "muhzulham",
  twitterUsername: "zulhamjourney",
  threadsUsername: "zulhamjourney",
  peerlistUsername: "",
  instagramUsername: "zulhamjourney",
  calUsername: "muhammad-zulham-uaj4fr",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  threads: `https://threads.net/@${USER_NAMES.threadsUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xpppboyp";

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
  "flutter",
  "kotlin",
  "git",
  "github",
  "vscode",
  "figma",
  "vercel",
];

export interface Experience {
  company: string;
  companyLink?: string;
  logo?: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "KatalogDealer.com",
    companyLink: "https://katalogdealer.com",
    logo: "",
    role: "Founder & Lead Full-Stack Engineer",
    period: "2026 - Present",
    location: "Indonesia · Remote",
    description: [
      "Architected a Single-Instance Multi-Tenant SaaS that transforms a simple bio-link into a high-converting digital catalog for automotive dealers, serving dynamic subdomains ({dealer}.katalogdealer.com).",
      "Engineered a dynamic domain routing system using Next.js 16 (App Router) and Middleware, seamlessly serving customized public sites, dealer dashboards, and landing pages from a single codebase.",
      "Integrated AI Automation: Built a Python pipeline utilizing Gemini API to auto-generate vehicle specifications and dynamic Q&A for hundreds of car models, enriching SEO and user engagement.",
      "Developed a robust Lead Generation Ecosystem: Created interactive chat-bot modals and custom credit simulators that capture leads directly into a PostgreSQL database (Supabase) via WhatsApp integration.",
      "Implemented strict Data Isolation & Security: Utilized Supabase Row Level Security (RLS) and Service Roles to ensure tenant data privacy, combined with a Telegram Bot approval flow for user onboarding."
    ],
    skills: ["Next.js", "TypeScript", "Supabase", "Python", "Cloudinary", "Vercel"],
  },
    {
    company: "SikatPDF.com",
    companyLink: "https://sikatpdf.com",
    logo: "",
    role: "Founder & Lead Product Engineer",
    period: "Jan 2023 - Present",
    location: "Indonesia · Hybrid",
    description: [
      "Successfully built and launched a production-ready MVP for a PDF utility SaaS (Merge, Split, Compress), serving organic traffic.",
      "Designed a Modular Component architecture, reducing feature deployment time and ensuring scalability as user base grows.",
      "Implemented an automated 'Auto-Purge' system (Cron jobs), ensuring strict data privacy and security by instantly deleting user files post-processing.",
      "Currently driving product strategy, exploring monetization models and optimizing infrastructure costs (Cloudflare/Vercel) for maximum profit margins."
    ],
    skills: ["Python", "System Architecture", "Product Strategy", "FastAPI"],
  },
  {
    company: "Freelance",
    companyLink: "",
    logo: "",
    role: "Lead Tech Strategist",
    period: "Jan 2020 - Dec 2023",
    location: "Jambi, Indonesia · Remote",
    description: [
      "Consulted multiple SME clients on digital transformation strategies, translating business needs into technical roadmaps.",
      "Developed and deployed custom web applications tailored to client workflows, improving operational efficiency.",
      "Managed end-to-end project lifecycles, from requirement gathering and UI/UX design to deployment and post-launch maintenance."
    ],
    skills: ["Product Research", "System Architecture", "UI/UX", "Consulting"],
  },
  {
    company: "PT. SURYA MADISTRINDO",
    companyLink: "https://suryamadistrindosmg.com/",
    logo: "",
    role: "Marketing Data Control Admin",
    period: "Oct 2015 - Oct 2019",
    location: "Medan, North Sumatra · On-site",
    description: [
      "Analyzed and audited large-scale marketing datasets to identify trends and operational bottlenecks across regional branches.",
      "Developed automated reporting tools (VBA/Excel Macros), reducing manual data processing time significantly per week.",
      "Collaborated with cross-functional teams to ensure data integrity and accuracy for strategic decision-making."
    ],
    skills: ["Data Analysis", "VBA", "Reporting", "Data Integrity"],
  },
  {
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    companyLink: "https://bri.co.id",
    logo: "",
    role: "IT eChannel",
    period: "Aug 2012 - Aug 2015",
    location: "Medan, North Sumatra · On-site",
    description: [
      "Maintained and monitored the bank's e-channel infrastructure (ATM, EDC, Mobile Banking) to ensure 99.9% uptime.",
      "Provided Tier-1 & Tier-2 technical support, resolving critical network and hardware issues across the regional network.",
      "Assisted in the migration of legacy systems to newer, more secure banking protocols."
    ],
    skills: ["IT Infrastructure", "Network Security", "Troubleshooting", "Banking Systems"],
  }
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [];
