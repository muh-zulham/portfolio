"use client";

import { EXPERIENCE } from "@/app/constants/data";
import { EXPERIENCE_ID } from "@/app/constants/data-id";
import { useLanguage } from "@/components/providers/language-context";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import CollapsibleGrid from "@/components/ui/collapsible-grid";

export default function Experience() {
  if (EXPERIENCE.length === 0) return null;
  const { language, t } = useLanguage();
  const expData = language === "id" ? EXPERIENCE_ID : EXPERIENCE;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          {t.sections.experience}
        </h2>
      </div>

      <div className="relative divide-y divide-dashed divide-border">
        {expData.map((exp, index) => (
          <CollapsibleGrid
            key={`${exp.role}-${exp.company}`}
            isExpanded={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            header={
              <div className="flex items-center gap-3">
                {exp.logo && (
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-border overflow-hidden bg-background">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0 space-y-0.5">
                  <h3 className="font-medium text-base leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.companyLink ? (
                      <Link
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        @ {exp.company}
                        <ArrowUpRight className="inline-block w-4 h-4 ml-1 align-text-bottom text-muted-foreground" />
                      </Link>
                    ) : (
                      <span className="font-medium text-foreground/80">@ {exp.company}</span>
                    )}
                  </p>
                </div>

                <div className="hidden sm:flex flex-col text-right font-mono text-sm text-muted-foreground mr-2">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
                
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </div>
            }
          >
            {/* Collapsible Details */}
            <div className="space-y-3">
              {/* Mobile-only Period/Location (visible inside collapsible) */}
              <div className="flex flex-col sm:hidden mb-2 text-left">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period} • {exp.location}
                </span>
              </div>

              <ul className="text-sm text-muted-foreground text-justify leading-relaxed list-disc list-inside space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs badge text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CollapsibleGrid>
        ))}
      </div>
    </section>
  );
}
