export interface Project {
  name: string;
  tagline: string;
  overview: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  images?: {
    hero?: string;
    gallery?: {
      src: string;
      alt: string;
      caption?: string;
    }[];
  };
  features?: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "KatalogDealer",
    tagline: "SaaS Multi-Tenant Platform for Automotive Dealers.",
    overview:
      "Architected a Single-Instance Multi-Tenant SaaS that transforms a simple bio-link into a high-converting digital catalog for automotive dealers, serving dynamic subdomains (dealer.katalogdealer.com).",
    description:
      "Engineered a dynamic domain routing system using Next.js 16 (App Router) and Middleware, seamlessly serving customized public sites, dealer dashboards, and landing pages from a single codebase. Integrated AI automation with Gemini API to auto-generate vehicle specs, and built a robust Lead Generation Ecosystem capturing leads into a PostgreSQL database.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Python", "Cloudinary"],
    link: "https://katalogdealer.com",
    github: "https://github.com/muh-zulham/katalogdealer",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "KatalogDealer Dashboard",
          caption: "Dealer dashboard with dynamic subdomains.",
        },
      ],
    },
    features: [
      "Single-Instance Multi-Tenant SaaS Architecture",
      "Dynamic domain routing via Middleware",
      "AI Automation for vehicle specs (Gemini API)",
      "Strict Data Isolation with Supabase RLS",
    ],
  },
      {
    name: "SikatPDF",
    tagline: "Online PDF toolkit that just works.",
    overview:
      "SikatPDF is a production-ready PDF utility SaaS (Merge, Split, Compress) that lets users process PDF files directly in the browser — no install, no signup. Built to be fast, private, and simple enough for anyone to use.",
    description:
      "SikatPDF provides a set of practical PDF utilities in a single, clean interface. The goal was to remove friction from everyday document tasks: upload, process, download. Everything runs smoothly on both desktop and mobile, with an automated 'Auto-Purge' system ensuring strict data privacy.",
    tech: ["Python", "FastAPI", "Next.js", "System Architecture", "Cloudflare", "Vercel", "Cron Jobs"],
    link: "https://sikatpdf.com",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "SikatPDF homepage screenshot",
          caption: "Clean landing page with the core PDF tools.",
        },
      ],
    },
    features: [
      "Browser-based PDF processing — no install required",
      "Modular Component architecture for scalability",
      "Automated 'Auto-Purge' system for data privacy",
      "Simple, distraction-free interface",
    ],
  },
];
