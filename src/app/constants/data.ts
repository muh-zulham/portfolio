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
    company: "Self-employed",
    companyLink: "",
    logo: "",
    role: "Lead Product Developer (Digital Invitations & SaaS)",
    period: "Jan 2026 - Present",
    location: "Indonesia · Hybrid",
    description: [
      "Developed custom Digital Invitation platforms focusing on elegant user experience and lightweight performance.",
      "Designed end-to-end digital solutions to help clients digitize their event and business needs.",
      "Managed the entire product development lifecycle, from client requirement consultations and UI/UX design to deployment.",
      "Optimized infrastructure scalability to ensure service stability with efficient operational costs."
    ],
    skills: ["Node.js", "React.js", "Product Management", "UI/UX", "SaaS"],
  },
  {
    company: "SikatPDF.com",
    companyLink: "https://sikatpdf.com",
    logo: "",
    role: "Founder & Lead Product Engineer",
    period: "Jan 2023 - Present",
    location: "Indonesia · Hybrid",
    description: [
      "Successfully built and launched an MVP for a PDF solution featuring Merge, Split, and Compress tools.",
      "Designed a Modular Component architecture to ensure a scalable and maintainable system.",
      "Implemented an automated 'Auto-Purge' system to guarantee the security and privacy of user data.",
      "Currently maintaining the system while exploring monetization models and further infrastructure optimization."
    ],
    skills: ["Python", "System Architecture", "Product Strategy", "Web Development"],
  },
  {
    company: "Freelance",
    companyLink: "",
    logo: "",
    role: "Lead Tech Strategist",
    period: "Jan 2020 - Dec 2023",
    location: "Jambi, Indonesia · Remote",
    description: [
      "Focused on research and development of Enterprise Resource Planning (ERP) systems and digital workflow automation for SMEs.",
      "Explored the implementation of AI in the software development lifecycle to accelerate feature delivery.",
      "Built database foundations for Premium features using manual injection techniques for A/B testing and market validation."
    ],
    skills: ["Product Research", "Artificial Intelligence (AI)", "ERP", "Database"],
  },
  {
    company: "PT. SURYA MADISTRINDO",
    companyLink: "https://suryamadistrindosmg.com/",
    logo: "",
    role: "Marketing Data Control Admin",
    period: "Oct 2015 - Oct 2019",
    location: "Medan, North Sumatra · On-site",
    description: [
      "Managed large-scale regional marketing data ecosystems to generate interactive and dynamic analytical reporting.",
      "Conducted data input system audits to ensure information integrity and compliance with company standard procedures."
    ],
    skills: ["Data Analysis", "Analytic Reporting", "Data Entry", "Audit"],
  },
  {
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    companyLink: "https://bri.co.id",
    logo: "",
    role: "IT eChannel",
    period: "Aug 2012 - Aug 2015",
    location: "Medan, North Sumatra · On-site",
    description: [
      "Responsible for High Availability of software and hardware for digital banking services.",
      "Managed server security and network infrastructure (QoS/Bandwidth Allocation) within a strict banking security environment."
    ],
    skills: ["IT Infrastructure Management", "Network Security", "Banking Systems"],
  }
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export const TESTIMONIALS: Testimonial[] = [];
