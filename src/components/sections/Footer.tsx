"use client";

import React, { useState, useEffect } from "react";
import { siteContent } from "@/data/content";
import { IconButton } from "@/components/ui/IconButton";
import { Mail, Globe, ArrowUp } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { personal } = siteContent;
  const { t } = useLang();
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    const y = new Date().getFullYear();
    const frameId = requestAnimationFrame(() => setCurrentYear(y));
    return () => cancelAnimationFrame(frameId);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-paper border-t-3 border-ink">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-stretch justify-between">
        {/* Left: Lime Logo Box */}
        <div className="flex items-center gap-2 px-6 py-4 bg-lime border-b-3 md:border-b-0 md:border-r-3 border-ink font-heading text-sm uppercase tracking-wider text-ink select-none">
          <span className="font-mono font-bold text-base">&lt;/&gt;</span>
          <span>{personal.name}</span>
        </div>

        {/* Center: Dynamic Copyright */}
        <div className="flex items-center justify-center p-4 text-center font-mono text-xs text-ink/80">
          © {currentYear} {personal.name}. {t.footer.copyright} Built with
          Next.js & Neo-Brutalist Design.
        </div>

        {/* Right: Social Icons & Back-to-Top */}
        <div className="flex items-center justify-center gap-2 p-3 border-t-3 md:border-t-0 md:border-l-3 border-ink bg-cream">
          <IconButton
            href={personal.socials.find((s) => s.icon === "github")?.url || "#"}
            label="GitHub"
            icon={<GithubIcon />}
          />
          <IconButton
            href={personal.socials.find((s) => s.icon === "linkedin")?.url || "#"}
            label="LinkedIn"
            icon={<LinkedinIcon />}
          />
          <IconButton
            href={`mailto:${personal.email}`}
            label="Email"
            target="_self"
            icon={<Mail className="w-5 h-5 text-ink" />}
          />
          <IconButton
            href={personal.websiteUrl}
            label="Website"
            icon={<Globe className="w-5 h-5 text-ink" />}
          />

          <button
            type="button"
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
            className="w-10 h-10 flex items-center justify-center border-brut-2 border-ink bg-yellow hover:bg-lime transition-all shadow-brut-xs hover:translate-x-[1px] hover:translate-y-[1px] ml-1"
          >
            <ArrowUp className="w-5 h-5 text-ink" />
          </button>
        </div>
      </div>
    </footer>
  );
};
