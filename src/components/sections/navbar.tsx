"use client";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import { ABOUT_ME } from "@/app/constants/data";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/components/providers/language-context";

const STAGGER = 30;

export default function Navbar() {
  const lenis = useLenis();
  const { language, setLanguage, t } = useLanguage();
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(href, { offset: -20, duration: 1.5 });
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="py-2 px-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {ABOUT_ME.name.split(" ")[0].toLowerCase()}.
        </Link>

        <div className="hidden md:flex items-center justify-end flex-1 gap-6">
          {[
            { name: t.nav.skills, href: "#skills" },
            { name: t.nav.projects, href: "#projects" },
            { name: t.nav.contact, href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToSection(e, item.href)}
              className="relative text-base text-foreground/80 cursor-pointer group"
            >
              <span className="inline-flex">
                {item.name.split("").map((letter, i) => (
                  <span
                    key={i}
                    className="relative inline-block overflow-hidden"
                  >
                    <span
                      className="block transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full group-hover:opacity-80"
                      style={{ transitionDelay: `${i * STAGGER}ms` }}
                    >
                      {letter}
                    </span>
                    <span
                      className="block absolute left-0 top-0 font-medium translate-y-full opacity-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 group-hover:opacity-100"
                      style={{
                        transitionDelay: `${i * STAGGER}ms`,
                        color: "hsl(var(--link))",
                      }}
                    >
                      {letter}
                    </span>
                  </span>
                ))}
              </span>
            </Link>
          ))}
        </div>

        <div className="ml-6 flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "id" : "en")}
            className="text-sm font-mono px-2 py-1 rounded-md border border-border hover:bg-muted transition-colors"
            aria-label="Toggle Language"
          >
            {language === "en" ? "EN" : "ID"}
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
