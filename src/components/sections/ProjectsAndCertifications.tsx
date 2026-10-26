"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { siteContent, Project } from "@/data/content";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { SparkleDoodle } from "@/components/ui/Doodles";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Award,
  CheckCircle2,
  X,
  Code2,
  Play,
  Pause,
} from "lucide-react";

export const ProjectsAndCertifications: React.FC = () => {
  const { projects, certifications } = siteContent;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const currentProject = projects[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, [projects.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, [projects.length]);

  // Automatic slide progression (4.5s interval), pausing on hover or when modals are open
  useEffect(() => {
    if (!isAutoPlay || isHovered || activeModalProject || showAllProjectsModal) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, activeModalProject, showAllProjectsModal, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Close modals on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
        setShowAllProjectsModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      className="w-full bg-paper border-b-3 border-ink"
      aria-label="Projects and Certifications"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left 70%: FEATURED PROJECTS CAROUSEL (Col-span-8) */}
        <div
          ref={carouselRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured Projects Carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-ink focus:outline-none focus-visible:outline-3 focus-visible:outline-violet"
        >
          {/* Section Header Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="font-heading text-xl sm:text-2xl uppercase tracking-wider text-ink block">
                FEATURED PROJECTS
              </span>
              <span className="font-mono text-xs text-ink/70">
                Project {currentIndex + 1} of {projects.length}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setShowAllProjectsModal(true)}
                className="px-3.5 py-2 bg-paper text-ink font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border-brut-2 border-ink shadow-brut-xs hover:bg-yellow transition-all select-none"
              >
                VIEW ALL PROJECTS →
              </button>

              {/* Autoplay Play/Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsAutoPlay((prev) => !prev)}
                className={`px-2.5 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border-brut-2 border-ink shadow-brut-xs transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                  isAutoPlay && !isHovered
                    ? "bg-lime text-ink"
                    : isAutoPlay && isHovered
                    ? "bg-yellow text-ink"
                    : "bg-paper text-ink/70 hover:bg-yellow"
                }`}
                title={
                  isAutoPlay
                    ? isHovered
                      ? "Autoplay paused on hover"
                      : "Click to pause autoplay"
                    : "Click to enable autoplay"
                }
                aria-label={isAutoPlay ? "Pause automatic slide rotation" : "Start automatic slide rotation"}
              >
                {isAutoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-ink shrink-0" />
                    <span>{isHovered ? "PAUSED" : "AUTO: ON"}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-ink shrink-0" />
                    <span>AUTO: OFF</span>
                  </>
                )}
              </button>

              {/* Prev / Next Pink Arrow Buttons per design.jpg */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-9 h-9 flex items-center justify-center bg-pink text-ink border-brut-2 border-ink shadow-brut-xs hover:bg-lime transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-9 h-9 flex items-center justify-center bg-pink text-ink border-brut-2 border-ink shadow-brut-xs hover:bg-lime transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Slide Card (Pink outer frame per design.jpg) */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full bg-pink border-brut-3 border-ink shadow-brut p-4 sm:p-5 relative transition-all"
          >
            {/* Autoplay Progress Line */}
            <div className="w-full h-1.5 bg-ink/20 border border-ink overflow-hidden mb-3">
              <div
                key={`${currentIndex}-${isAutoPlay}-${isHovered}`}
                className={`h-full bg-violet ${
                  isAutoPlay && !isHovered ? "animate-progress-bar" : "w-0"
                }`}
              />
            </div>
            {/* Project Image / Visual Display Area (16:7 aspect ratio) */}
            <div className="w-full aspect-[16/7] min-h-[190px] border-brut-2 border-ink bg-cream relative overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Graphic Neo-Brutalist Visual Mockup */}
              <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
              <SparkleDoodle
                className="absolute top-3 right-4 w-6 h-6"
                fillColor="#FFD21F"
              />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-yellow border-brut-2 border-ink shadow-brut-xs flex items-center justify-center font-heading text-xl text-ink mb-2">
                  {currentProject.imagePlaceholderInitial}
                </div>
                <h4 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-ink px-4 line-clamp-1">
                  {currentProject.title}
                </h4>
                <p className="font-mono text-xs text-ink/80 mt-1 font-bold">
                  {currentProject.tagline}
                </p>
              </div>
            </div>

            {/* White Body Details Card below screenshot */}
            <div className="mt-4 bg-paper border-brut-2 border-ink p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-ink">
                  {currentProject.title}
                </h3>
                <p className="font-mono text-xs sm:text-[13px] text-ink/90 mt-2 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {currentProject.tags.map((tag) => (
                    <Chip key={tag} label={tag} variant="paper" />
                  ))}
                </div>
              </div>

              {/* View Details Button */}
              <div className="mt-5 pt-4 border-t-2 border-ink/15 flex flex-wrap items-center justify-between gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setActiveModalProject(currentProject)}
                >
                  <span>VIEW DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Button>

                {currentProject.liveUrl && !currentProject.liveUrl.startsWith("TODO") && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-violet hover:underline"
                  >
                    <span>LIVE DEMO</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div
            className="flex items-center justify-center gap-2 mt-6"
            aria-label="Carousel pagination"
          >
            {projects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${p.title}`}
                className={`w-3 h-3 rounded-full border-brut-2 border-ink transition-all ${
                  currentIndex === idx
                    ? "bg-ink scale-125"
                    : "bg-paper hover:bg-yellow"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right 30%: CERTIFICATIONS (Col-span-4, Lime Background) */}
        <div
          id="certifications"
          className="lg:col-span-4 bg-lime p-6 sm:p-8 flex flex-col justify-between border-b-3 lg:border-b-0 border-ink relative"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b-3 border-ink mb-6">
              <span className="font-heading text-xl uppercase tracking-wider text-ink">
                CERTIFICATIONS
              </span>
              <Award className="w-6 h-6 text-ink" />
            </div>

            {/* Certifications Stack */}
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-paper border-brut-2 border-ink shadow-brut-xs p-4 flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow border border-ink">
                      {cert.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                  </div>
                  <h4 className="font-heading text-sm sm:text-base text-ink uppercase tracking-tight mt-2.5">
                    {cert.title}
                  </h4>
                  <p className="font-mono text-xs text-ink/75 mt-1 font-bold">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 pt-4 border-t-3 border-ink">
            <Button
              href="#experience"
              variant="secondary"
              size="full"
              className="bg-paper"
            >
              <span>EXPLORE EXPERIENCE →</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Single Project Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="w-full max-w-lg bg-paper border-brut-3 border-ink shadow-brut p-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-3 border-b-3 border-ink">
              <div>
                <span className="font-mono text-xs font-bold text-violet uppercase tracking-wider">
                  Project Deep Dive
                </span>
                <h3 className="font-heading text-xl uppercase tracking-wider text-ink mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
                className="w-8 h-8 flex items-center justify-center border-brut-2 border-ink bg-yellow hover:bg-lime transition-colors"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>

            <div className="py-4 space-y-4">
              <p className="font-mono text-sm text-ink leading-relaxed">
                {activeModalProject.longDescription}
              </p>

              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-ink/80 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.tags.map((t) => (
                    <Chip key={t} label={t} variant="lime" />
                  ))}
                </div>
              </div>

              <div className="p-3 bg-cream border-brut-2 border-ink font-mono text-xs text-ink/80 space-y-1">
                <div>
                  <span className="font-bold">Live Demo: </span>
                  {activeModalProject.liveUrl}
                </div>
                <div>
                  <span className="font-bold">Repository: </span>
                  {activeModalProject.repoUrl}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-ink/20 flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setActiveModalProject(null)}
              >
                DONE
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* View All Projects Modal */}
      {showAllProjectsModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-xs animate-fadeIn"
          onClick={() => setShowAllProjectsModal(false)}
        >
          <div
            className="w-full max-w-4xl bg-cream border-brut-3 border-ink shadow-brut p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b-3 border-ink mb-6">
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-violet" />
                <h3 className="font-heading text-2xl uppercase tracking-wider text-ink">
                  All Featured Projects ({projects.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAllProjectsModal(false)}
                aria-label="Close dialog"
                className="w-9 h-9 flex items-center justify-center border-brut-2 border-ink bg-yellow hover:bg-lime transition-colors"
              >
                <X className="w-5 h-5 text-ink" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-paper border-brut-2 border-ink shadow-brut-xs p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-lime border border-ink">
                      {proj.tags[0]}
                    </span>
                    <h4 className="font-heading text-base uppercase tracking-tight text-ink mt-2">
                      {proj.title}
                    </h4>
                    <p className="font-mono text-xs text-ink/80 mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {proj.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono bg-cream border border-ink/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/15 flex items-center justify-between font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAllProjectsModal(false);
                        setActiveModalProject(proj);
                      }}
                      className="font-bold text-violet hover:underline"
                    >
                      DETAILS →
                    </button>
                    {proj.liveUrl && !proj.liveUrl.startsWith("TODO") && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-ink hover:text-lime"
                      >
                        VISIT ↗
                      </a>
                    )}
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
