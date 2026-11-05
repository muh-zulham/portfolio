"use client";

import Link from "next/link";
import { SOCIAL_LINKS, ABOUT_ME } from "@/app/constants/data";
import { ABOUT_ME_ID } from "@/app/constants/data-id";
import { useLanguage } from "@/components/providers/language-context";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter, FaThreads } from "react-icons/fa6";

// =============================================
// SOCIAL BUTTONS DATA
// =============================================
const SOCIAL_BUTTONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "X (Twitter)",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.threads,
    label: "Threads",
    icon: <FaThreads className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.email,
    label: "Email",
    icon: (
      <>
        <Mail className="w-5 h-5" /> Email
      </>
    ),
    className: "flex items-center gap-2 font-medium",
  },
];

// =============================================
// MAIN COMPONENT
// =============================================
export default function AboutMe() {
  const { language } = useLanguage();
  const desc = language === "id" ? ABOUT_ME_ID.description : ABOUT_ME.description;

  return (
    <section id="about" className="divide-y divide-dashed divide-border">
      <div className="p-4">
        <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground text-justify leading-relaxed">
          {desc.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          {SOCIAL_BUTTONS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 btn text-sm ${btn.className || ""}`}
              aria-label={btn.label}
            >
              {btn.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
