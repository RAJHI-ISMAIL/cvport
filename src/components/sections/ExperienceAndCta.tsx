import React from "react";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { SpikyBurst } from "@/components/ui/Doodles";
import { ArrowDown, ArrowUpRight, Briefcase } from "lucide-react";

export const ExperienceAndCta: React.FC = () => {
  const { experience, personal } = siteContent;

  return (
    <section
      id="experience"
      className="w-full bg-paper border-b-3 border-ink"
      aria-label="Professional Experience and Call to Action"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Col: Pink Label Box "EXPERIENCE →" (Col-span-2) */}
        <div className="lg:col-span-2 bg-pink p-6 flex lg:flex-col items-center justify-between lg:justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-ink select-none">
          <div className="flex lg:flex-col items-start gap-2">
            <Briefcase className="w-6 h-6 text-ink" />
            <span className="font-heading text-xl uppercase tracking-wider text-ink mt-0 lg:mt-2">
              EXPERIENCE
            </span>
          </div>
          <span className="font-mono text-2xl font-bold text-ink hidden lg:block">
            ↓
          </span>
          <span className="font-mono text-2xl font-bold text-ink lg:hidden">
            →
          </span>
        </div>

        {/* Centre Col: Timeline of Experience (Col-span-6) */}
        <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 bg-paper border-b-3 lg:border-b-0 lg:border-r-3 border-ink flex flex-col justify-between">
          <div>
            <div className="relative pl-6 sm:pl-8 border-l-3 border-ink space-y-8">
              {experience.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Black timeline bullet dot on the vertical line */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-ink border-2 border-paper ring-4 ring-lime" />

                  {/* Header: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2">
                    <h3 className="font-heading text-base sm:text-lg uppercase tracking-tight text-ink">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs font-bold text-ink/75">
                      {item.period}
                    </span>
                  </div>

                  {/* Company & Location pill */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-yellow border border-ink font-mono text-[11px] font-bold text-ink">
                      <span className="w-2 h-2 rounded-full bg-violet" />
                      {item.company}
                    </span>
                    <span className="font-mono text-[11px] text-ink/70">
                      📍 {item.location} ({item.duration})
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mt-3 font-mono text-xs sm:text-[13px] text-ink leading-relaxed">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-violet font-bold select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* View Full Resume Button */}
          <div className="mt-8 pt-6 border-t-2 border-ink/15">
            <Button
              href="/resume.pdf"
              target="_blank"
              variant="secondary"
              size="md"
            >
              <span>VIEW FULL RESUME</span>
              <ArrowDown className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Right Col: Violet Grid CTA Panel (Col-span-4) */}
        <div className="lg:col-span-4 bg-violet bg-grid-pattern-violet p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden text-white min-h-[320px]">
          {/* Spiky burst sticker in bottom right corner */}
          <div className="absolute -bottom-6 -right-6 pointer-events-none select-none z-0 rotate-12">
            <SpikyBurst
              className="w-32 h-32 opacity-90 drop-shadow-md"
              fillColor="#FF7C9C"
            />
          </div>

          <div className="relative z-10 space-y-4">
            <span className="inline-block px-3 py-1 bg-yellow text-ink font-mono text-[11px] font-bold uppercase tracking-wider border-2 border-ink shadow-brut-xs">
              READY TO COLLABORATE
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-[28px] leading-tight uppercase tracking-tight text-white drop-shadow-xs">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER.
            </h3>
            <p className="font-mono text-xs sm:text-[13px] text-white/90 leading-relaxed max-w-sm">
              Whether you have an AI research challenge, full-stack application, or exciting internship opportunity.
            </p>
          </div>

          <div className="relative z-10 mt-8">
            <Button
              href={`mailto:${personal.email}?subject=Collaboration%20Inquiry`}
              target="_self"
              variant="yellow"
              size="lg"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
