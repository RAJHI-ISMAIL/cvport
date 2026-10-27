"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Chip } from "@/components/ui/Chip";
import { TechIcon } from "@/components/ui/TechIcon";
import { ChevronDown, ChevronUp, Sparkles, Layers } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export const SkillsStrip: React.FC = () => {
  const { featuredSkills, allSkills } = siteContent;
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="w-full bg-paper border-b-3 border-ink">
      {/* Primary Strip */}
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Section Label (Violet) */}
        <div className="flex items-center justify-between lg:justify-center px-6 py-4 lg:py-0 lg:w-44 bg-violet text-white font-heading text-lg md:text-xl uppercase tracking-wider select-none border-b-3 lg:border-b-0 lg:border-r-3 border-ink shrink-0">
          <span>{t.skills.sectionLabel}</span>
        </div>

        {/* Featured Skills Grid / Cells */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-ink">
          {featuredSkills.map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center gap-2 p-3 sm:p-4 text-center hover:bg-lime transition-colors group cursor-default select-none border-b-2 sm:border-b-0 border-ink"
            >
              <TechIcon
                name={skill}
                size={16}
                className="shrink-0 transition-transform group-hover:scale-125"
              />
              <span className="font-mono text-xs sm:text-[13px] font-bold text-ink tracking-tight group-hover:scale-105 transition-transform">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Expand "All Skills" Button */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center justify-center gap-2 px-5 py-3 lg:py-0 bg-yellow text-ink font-mono text-xs font-bold uppercase tracking-wider border-t-3 lg:border-t-0 lg:border-l-3 border-ink hover:bg-lime transition-colors select-none cursor-pointer shrink-0"
          aria-expanded={expanded}
          aria-controls="all-skills-panel"
        >
          <Layers className="w-4 h-4" />
          <span>{expanded ? t.skills.showLess : t.skills.allSkills}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expandable All Skills Bento Drawer */}
      {expanded && (
        <div
          id="all-skills-panel"
          className="p-6 md:p-8 bg-cream border-t-3 border-ink animate-fadeIn"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-violet" />
              <h3 className="font-heading text-xl uppercase tracking-wider text-ink">
                Comprehensive Skill Matrix
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {allSkills.map((category) => (
                <div
                  key={category.category}
                  className="bg-paper border-brut-2 border-ink shadow-brut-xs p-4 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-heading text-xs uppercase tracking-wider text-violet mb-3 pb-2 border-b-2 border-ink/15">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          variant={
                            category.category === "Soft Skills" ? "yellow" : "paper"
                          }
                          className="text-[11px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
