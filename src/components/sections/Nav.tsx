"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Nav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          className="hidden lg:flex items-center justify-center gap-6 px-6 font-mono text-[13px] font-bold tracking-wider"
        >
          {siteContent.navigation.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="text-ink hover:text-violet transition-colors duration-100 hover:underline underline-offset-4 decoration-2"
              >
                {item.label}
              </a>
              {index < siteContent.navigation.length - 1 && (
                <span className="text-ink/30 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:flex items-stretch border-l-3 border-ink">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 bg-violet text-white font-mono font-bold text-[13px] uppercase tracking-wider hover:bg-violet-dark transition-colors select-none"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-stretch border-l-3 border-ink">
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
            {siteContent.navigation.map((item) => (
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
          <div className="p-4 bg-cream">
            <Button
              href="#contact"
              variant="accent"
              size="full"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT ME <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
