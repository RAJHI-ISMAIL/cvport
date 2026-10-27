import React from "react";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { ProjectsAndCertifications } from "@/components/sections/ProjectsAndCertifications";
import { ExperienceAndCta } from "@/components/sections/ExperienceAndCta";
import { EducationSection } from "@/components/sections/EducationSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <LanguageProvider>
      <LoadingScreen />
      <div className="w-full min-h-screen bg-cream bg-dot-pattern py-0 md:py-8 px-0 md:px-4 flex justify-center">
        {/* 
          Neo-Brutalist Bento Board:
          Shared 3px borders, high-contrast, max-w-[1280px]
        */}
        <div className="w-full max-w-[1280px] bg-paper border-t-0 md:border-t-3 border-b-3 md:border-l-3 md:border-r-3 border-ink shadow-none md:shadow-brut overflow-hidden flex flex-col">
          {/* Navigation */}
          <Nav />

          <main className="flex flex-col w-full">
            {/* Hero Section */}
            <Hero />

            {/* Skills Strip + Expandable Matrix */}
            <SkillsStrip />

            {/* Featured Projects Carousel + Certifications Stack */}
            <ProjectsAndCertifications />

            {/* Experience Timeline + Collaboration CTA */}
            <ExperienceAndCta />

            {/* Education Bento + Languages */}
            <EducationSection />

            {/* Contact Section + Message Composer */}
            <Contact />
          </main>

          {/* Footer Bar */}
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

