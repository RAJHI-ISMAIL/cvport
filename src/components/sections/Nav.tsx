"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLang } from "@/context/LanguageContext";
import { Language, languageLabels } from "@/data/translations";

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { lang, t, setLang } = useLang();

  const navItems = [
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.certifications, href: "#certifications" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const allLangs: Language[] = ["en", "ar", "zh"];

  return (
    <header className="sticky top-0 z-50 w-full bg-paper border-b-3 border-ink">
      <div className="max-w-[1280px] mx-auto flex items-stretch justify-between h-16 md:h-18">
        {/* Logo box (Lime) */}
        <a
          href="#"
          className="flex items-center gap-2 px-4 md:px-6 bg-lime border-r-3 border-ink font-heading text-sm md:text-base uppercase tracking-wider text-ink transition-colors hover:bg-yellow select-none"
        >
          <span className="font-mono font-bold text-base md:text-lg">&lt;/&gt;</span>
          <span>{siteContent.personal.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center gap-6 px-4 font-mono text-[13px] font-bold tracking-wider"
        >
          {navItems.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="text-ink hover:text-violet transition-colors duration-100 hover:underline underline-offset-4 decoration-2 whitespace-nowrap"
              >
                {item.label}
              </a>
              {index < navItems.length - 1 && (
                <span className="text-ink/30 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right side: Language Switcher + Contact CTA */}
        <div className="hidden lg:flex items-stretch border-l-3 border-ink">
          {/* Language Switcher */}
          <div className="relative flex items-stretch border-r-3 border-ink">
            <button
              type="button"
              onClick={() => setLangMenuOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 bg-paper font-mono font-bold text-xs uppercase tracking-wider text-ink hover:bg-yellow transition-colors select-none"
              aria-label="Change language"
              aria-expanded={langMenuOpen}
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span className="text-sm">{languageLabels[lang].flag}</span>
              <span>{languageLabels[lang].nativeLabel}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-0 w-36 bg-paper border-3 border-ink shadow-brut z-50">
                {allLangs.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => { setLang(l); setLangMenuOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 font-mono text-xs font-bold uppercase tracking-wider border-b-2 border-ink last:border-b-0 transition-colors ${
                      lang === l ? "bg-violet text-white" : "bg-paper text-ink hover:bg-lime"
                    }`}
                  >
                    <span>{languageLabels[l].flag}</span>
                    <span>{languageLabels[l].label}</span>
                    {lang === l && <span className="ml-auto text-[10px]">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 bg-violet text-white font-mono font-bold text-[13px] uppercase tracking-wider hover:bg-violet-dark transition-colors select-none"
          >
            <span>{t.nav.contactBtn}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile: Lang button + Hamburger */}
        <div className="flex lg:hidden items-stretch border-l-3 border-ink divide-x-3 divide-ink">
          {/* Mobile lang cycle button */}
          <button
            type="button"
            onClick={() => {
              const idx = allLangs.indexOf(lang);
              const next = allLangs[(idx + 1) % allLangs.length];
              setLang(next);
            }}
            aria-label="Cycle language"
            className="flex items-center gap-1 px-2.5 bg-paper font-mono font-bold text-xs text-ink hover:bg-yellow transition-colors"
          >
            <Globe className="w-3.5 h-3.5 shrink-0" />
            <span>{languageLabels[lang].flag}</span>
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex items-center gap-2 px-4 bg-paper font-mono font-bold text-xs uppercase tracking-wider text-ink hover:bg-lime transition-colors"
          >
            <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-paper border-t-3 border-ink flex flex-col">
          <nav aria-label="Mobile Navigation" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3.5 border-b-2 border-ink/20 font-mono text-sm font-bold tracking-wider text-ink hover:bg-lime transition-colors"
              >
                {item.label} →
              </a>
            ))}
          </nav>
          {/* Language options in mobile menu */}
          <div className="flex gap-2 p-4 border-b-2 border-ink/20 bg-cream">
            {allLangs.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`flex-1 py-2 flex items-center justify-center gap-1.5 font-mono text-xs font-bold border-2 border-ink transition-colors ${
                  lang === l ? "bg-violet text-white" : "bg-paper text-ink hover:bg-lime"
                }`}
              >
                <span>{languageLabels[l].flag}</span>
                <span>{languageLabels[l].nativeLabel}</span>
              </button>
            ))}
          </div>
          <div className="p-4 bg-cream">
            <Button
              href="#contact"
              variant="accent"
              size="full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contactBtn} <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
