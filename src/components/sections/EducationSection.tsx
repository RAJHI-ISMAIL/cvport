import React from "react";
import { siteContent } from "@/data/content";
import { GraduationCap, Languages as LanguagesIcon, Star } from "lucide-react";
import { SparkleDoodle } from "@/components/ui/Doodles";

export const EducationSection: React.FC = () => {
  const { education, languages } = siteContent;

  return (
    <section
      id="education"
      className="w-full bg-cream border-b-3 border-ink"
      aria-label="Education and Languages"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Col: Yellow Label Box "EDUCATION →" (Col-span-2) */}
        <div className="lg:col-span-2 bg-yellow p-6 flex lg:flex-col items-center justify-between lg:justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-ink select-none">
          <div className="flex lg:flex-col items-start gap-2">
            <GraduationCap className="w-6 h-6 text-ink" />
            <span className="font-heading text-xl uppercase tracking-wider text-ink mt-0 lg:mt-2">
              EDUCATION
            </span>
          </div>
          <span className="font-mono text-2xl font-bold text-ink hidden lg:block">
            ↓
          </span>
          <span className="font-mono text-2xl font-bold text-ink lg:hidden">
            →
          </span>
        </div>

        {/* Centre Col: 3 Education Cards (Col-span-7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-paper border-b-3 lg:border-b-0 lg:border-r-3 border-ink space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 border-brut-2 border-ink shadow-brut-xs relative transition-transform hover:translate-x-[1px] hover:translate-y-[1px] ${
                item.highlight ? "bg-cream" : "bg-paper"
              }`}
            >
              {/* Badge (e.g. TOP 1 GRADUATE or CURRENT) */}
              {item.badge && (
                <div className="absolute -top-3 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 bg-yellow text-ink border-2 border-ink font-mono text-[10px] font-bold uppercase tracking-wider shadow-brut-xs">
                  {item.badge.includes("TOP 1") && (
                    <Star className="w-3 h-3 fill-ink text-ink" />
                  )}
                  <span>{item.badge}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <span className="font-mono text-xs font-bold text-violet uppercase tracking-wider">
                  {item.period}
                </span>
                <span className="font-mono text-xs text-ink/70">
                  📍 {item.location}
                </span>
              </div>

              <h3 className="font-heading text-base sm:text-lg uppercase tracking-tight text-ink">
                {item.degree}
              </h3>

              <div className="font-mono text-xs sm:text-sm font-bold text-ink/80 mt-1">
                {item.institution}
              </div>

              <p className="font-mono text-xs sm:text-[13px] text-ink/90 mt-2.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Col: Languages Card (Col-span-3) */}
        <div className="lg:col-span-3 bg-cream p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <SparkleDoodle
            className="absolute -top-2 -right-2 w-8 h-8 opacity-60"
            fillColor="#FF7C9C"
          />

          <div>
            <div className="flex items-center gap-2 pb-3 border-b-2 border-ink mb-6">
              <LanguagesIcon className="w-5 h-5 text-ink" />
              <h3 className="font-heading text-lg uppercase tracking-wider text-ink">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div
                  key={lang.language}
                  className="bg-paper border-brut-2 border-ink p-3.5 shadow-brut-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading text-sm uppercase tracking-tight text-ink">
                      {lang.language}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-violet">
                      {lang.level}
                    </span>
                  </div>

                  {/* 5-segment level bar per design.md */}
                  <div className="grid grid-cols-5 gap-1.5 h-2.5">
                    {[1, 2, 3, 4, 5].map((seg) => (
                      <div
                        key={seg}
                        className={`border border-ink transition-colors ${
                          seg <= Math.floor(lang.score)
                            ? "bg-lime"
                            : seg - 0.5 <= lang.score
                            ? "bg-yellow"
                            : "bg-cream"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t-2 border-ink/20 font-mono text-[11px] text-ink/70">
            Fluent in technical documentation and international team workflows.
          </div>
        </div>
      </div>
    </section>
  );
};
