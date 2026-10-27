"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { siteContent, Project, Certification } from "@/data/content";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { SparkleDoodle } from "@/components/ui/Doodles";
import { TechIcon } from "@/components/ui/TechIcon";
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
  Eye,
  Download,
  Volume2,
  VolumeX,
  Images,
  Film,
  Presentation,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────────────────────────────────
   ProjectVisual — 16:7 media area shown inside the carousel slide
───────────────────────────────────────────────────────────────────────── */
const ProjectVisual: React.FC<{ project: Project }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  // If the project has a video, show it
  if (project.videoUrl) {
    return (
      <div className="w-full aspect-[16/7] min-h-[190px] border-brut-2 border-ink bg-ink relative overflow-hidden group">
        <video
          ref={videoRef}
          src={project.videoUrl}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="w-full h-full object-cover"
          aria-label={`${project.title} demo video`}
        />
        {/* Logo overlay */}
        {project.logoUrl && (
          <div className="absolute top-3 left-3 z-10 w-10 h-10 border-2 border-ink bg-paper overflow-hidden shadow-brut-xs">
            <Image src={project.logoUrl} alt={`${project.title} logo`} fill className="object-contain p-1" sizes="40px" />
          </div>
        )}
        {/* Mute toggle */}
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="absolute bottom-3 right-3 z-10 w-8 h-8 bg-paper border-2 border-ink flex items-center justify-center hover:bg-yellow transition-colors shadow-brut-xs"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="w-4 h-4 text-ink" /> : <Volume2 className="w-4 h-4 text-ink" />}
        </button>
        {/* LIVE badge */}
        <span className="absolute top-3 right-3 z-10 px-2 py-0.5 bg-pink border border-ink font-mono text-[10px] font-bold text-ink uppercase tracking-wider animate-pulse">
          ▶ DEMO
        </span>
      </div>
    );
  }

  // If no video but has hero image
  if (project.heroImage) {
    return (
      <div className="w-full aspect-[16/7] min-h-[190px] border-brut-2 border-ink bg-ink relative overflow-hidden">
        <Image src={project.heroImage} alt={`${project.title} screenshot`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
        {project.logoUrl && (
          <div className="absolute top-3 left-3 z-10 w-10 h-10 border-2 border-ink bg-paper overflow-hidden shadow-brut-xs">
            <Image src={project.logoUrl} alt={`${project.title} logo`} fill className="object-contain p-1" sizes="40px" />
          </div>
        )}
      </div>
    );
  }

// Logo-only visual (e.g. projects that ship a logo but no screenshot/video)
  if (project.logoUrl) {
    return (
      <div className="w-full aspect-[16/7] min-h-[190px] border-brut-2 border-ink relative overflow-hidden group">
        <Image
          src={project.logoUrl}
          alt={`${project.title} logo`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        {/* Gradient scrim for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <SparkleDoodle
          className="absolute top-3 right-4 w-6 h-6"
          fillColor="#FFD21F"
          strokeColor="#0A0A0A"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
          <h4 className="font-heading text-lg sm:text-2xl uppercase tracking-wider drop-shadow-md line-clamp-1">
            {project.title}
          </h4>
          <p className="font-mono text-xs sm:text-sm text-yellow font-bold mt-0.5">
            {project.tagline}
          </p>
        </div>
      </div>
    );
  }

  // Placeholder fallback for projects without assets
  return (
    <div className="w-full aspect-[16/7] min-h-[190px] border-brut-2 border-ink bg-cream relative overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <SparkleDoodle className="absolute top-3 right-4 w-6 h-6" fillColor="#FFD21F" />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-yellow border-brut-2 border-ink shadow-brut-xs flex items-center justify-center font-heading text-xl text-ink mb-2">
          {project.imagePlaceholderInitial}
        </div>
        <h4 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-ink px-4 line-clamp-1">
          {project.title}
        </h4>
        <p className="font-mono text-xs text-ink/80 mt-1 font-bold">{project.tagline}</p>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────
   ProjectDetailModal — rich modal with Overview / Video / Gallery / Slides tabs
───────────────────────────────────────────────────────────────────────── */
const ProjectDetailModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const { t } = useLang();
  type Tab = "overview" | "video" | "gallery" | "presentation";
  const tabs: Tab[] = [
    "overview",
    ...(project.videoUrl ? ["video" as Tab] : []),
    ...(project.gallery?.length ? ["gallery" as Tab] : []),
    ...(project.presentationUrl ? ["presentation" as Tab] : []),
  ];
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [galleryIdx, setGalleryIdx] = useState(0);
  const gallery = project.gallery ?? [];

  const tabLabel: Record<Tab, string> = {
    overview: t.projects.overview,
    video: t.projects.video,
    gallery: t.projects.gallery,
    presentation: t.projects.presentation,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-ink/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-paper border-brut-3 border-ink shadow-brut relative max-h-[95vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-5 border-b-3 border-ink shrink-0">
          <div className="flex items-center gap-3">
            {project.logoUrl && (
              <div className="w-10 h-10 border-2 border-ink bg-cream relative overflow-hidden shrink-0">
                <Image src={project.logoUrl} alt={`${project.title} logo`} fill className="object-contain p-1" sizes="40px" />
              </div>
            )}
            <div>
              <span className="font-mono text-xs font-bold text-violet uppercase tracking-wider">Project Deep Dive</span>
              <h3 className="font-heading text-xl uppercase tracking-wider text-ink mt-0.5 leading-tight">{project.title}</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 flex items-center justify-center border-brut-2 border-ink bg-yellow hover:bg-lime transition-colors shrink-0"
          >
            <X className="w-5 h-5 text-ink" />
          </button>
        </div>

        {/* Tab Bar */}
        {tabs.length > 1 && (
          <div className="flex border-b-3 border-ink shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border-r-2 border-ink last:border-r-0 ${
                  activeTab === tab ? "bg-violet text-white" : "bg-cream text-ink hover:bg-yellow"
                }`}
              >
                {tab === "overview" && <Code2 className="w-3.5 h-3.5" />}
                {tab === "video" && <Film className="w-3.5 h-3.5" />}
                {tab === "gallery" && <Images className="w-3.5 h-3.5" />}
                {tab === "presentation" && <Presentation className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{tabLabel[tab]}</span>
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* ── Overview ── */}
          {activeTab === "overview" && (
            <div className="p-5 space-y-4">
              <p className="font-mono text-sm text-ink leading-relaxed">{project.longDescription}</p>
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-ink/80 mb-2">{t.projects.technologiesUsed}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => <Chip key={tag} label={tag} variant="lime" />)}
                </div>
              </div>
              <div className="p-3 bg-cream border-brut-2 border-ink font-mono text-xs text-ink/80 space-y-1">
                <div><span className="font-bold">{t.projects.liveLink}: </span>{project.liveUrl?.startsWith("TODO") ? "—" : project.liveUrl}</div>
                <div><span className="font-bold">{t.projects.repoLink}: </span>{project.repoUrl?.startsWith("TODO") ? "—" : project.repoUrl}</div>
              </div>
            </div>
          )}

          {/* ── Video ── */}
          {activeTab === "video" && project.videoUrl && (
            <div className="p-5">
              <div className="border-brut-2 border-ink bg-ink overflow-hidden">
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="w-full"
                  aria-label={`${project.title} demo video`}
                />
              </div>
              <p className="font-mono text-xs text-ink/60 mt-2">↑ Project demo video — use controls to pause / seek</p>
            </div>
          )}

          {/* ── Gallery ── */}
          {activeTab === "gallery" && gallery.length > 0 && (
            <div className="p-5 space-y-3">
              <div className="border-brut-2 border-ink bg-ink relative overflow-hidden aspect-video">
                <Image
                  key={galleryIdx}
                  src={gallery[galleryIdx]}
                  alt={`${project.title} screenshot ${galleryIdx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <button
                  type="button"
                  onClick={() => setGalleryIdx((i) => (i === 0 ? gallery.length - 1 : i - 1))}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-paper border-2 border-ink flex items-center justify-center hover:bg-yellow transition-colors shadow-brut-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setGalleryIdx((i) => (i === gallery.length - 1 ? 0 : i + 1))}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-paper border-2 border-ink flex items-center justify-center hover:bg-yellow transition-colors shadow-brut-xs"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-paper border border-ink font-mono text-[10px] font-bold text-ink">
                  {galleryIdx + 1} / {gallery.length}
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {gallery.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setGalleryIdx(i)}
                    className={`shrink-0 w-16 h-10 relative border-2 transition-all overflow-hidden ${
                      i === galleryIdx ? "border-violet shadow-brut-xs scale-105" : "border-ink hover:border-violet"
                    }`}
                  >
                    <Image src={img} alt={`Thumb ${i + 1}`} fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Presentation / Slides ── */}
          {activeTab === "presentation" && project.presentationUrl && (
            <div className="p-5 flex flex-col gap-3">
              <div className="border-brut-2 border-ink bg-white overflow-hidden">
                <iframe
                  src={`${project.presentationUrl}#toolbar=1&navpanes=0`}
                  title={`${project.title} presentation`}
                  className="w-full h-[55vh] sm:h-[62vh] border-0"
                />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.presentationUrl}
                  download
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-cream hover:bg-yellow border-2 border-ink font-mono text-xs font-bold text-ink transition-colors shadow-brut-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t.certifications.download}
                </a>
                <a
                  href={project.presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-cream hover:bg-lime border-2 border-ink font-mono text-xs font-bold text-ink transition-colors shadow-brut-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {t.certifications.openTab}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t-2 border-ink/20 flex justify-between items-center gap-3 shrink-0 bg-cream">
          <div className="flex gap-2">
            {project.liveUrl && !project.liveUrl.startsWith("TODO") && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-lime border-brut-2 border-ink font-mono text-xs font-bold text-ink hover:bg-yellow transition-colors shadow-brut-xs">
                {t.projects.liveDemo} <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <Button variant="primary" size="sm" onClick={onClose}>{t.projects.close}</Button>
        </div>
      </div>
    </div>
  );
};

export const ProjectsAndCertifications: React.FC = () => {
  const { projects, certifications } = siteContent;
  const { t } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [showAllProjectsModal, setShowAllProjectsModal] = useState(false);
  const [activeModalCert, setActiveModalCert] = useState<Certification | null>(null);
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
    if (
      !isAutoPlay ||
      isHovered ||
      activeModalProject ||
      showAllProjectsModal ||
      activeModalCert
    )
      return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [
    isAutoPlay,
    isHovered,
    activeModalProject,
    showAllProjectsModal,
    activeModalCert,
    handleNext,
  ]);

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
        setActiveModalCert(null);
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
                {t.projects.sectionLabel}
              </span>
              <span className="font-mono text-xs text-ink/70">
                {t.projects.projectOf.replace("{n}", String(currentIndex + 1)).replace("{total}", String(projects.length))}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setShowAllProjectsModal(true)}
                className="px-3.5 py-2 bg-paper text-ink font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border-brut-2 border-ink shadow-brut-xs hover:bg-yellow transition-all select-none"
              >
                {t.projects.viewAll}
              </button>

              {/* Autoplay Play/Pause Toggle */}
              <button
                type="button"
                onClick={() => setIsAutoPlay((prev) => !prev)}
                className={`px-2.5 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border-brut-2 border-ink shadow-brut-xs transition-all flex items-center gap-1.5 cursor-pointer select-none ${isAutoPlay && !isHovered
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
                    <span>{isHovered ? t.projects.paused : t.projects.autoOn}</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-ink shrink-0" />
                    <span>{t.projects.autoOff}</span>
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
                className={`h-full bg-violet ${isAutoPlay && !isHovered ? "animate-progress-bar" : "w-0"
                  }`}
              />
            </div>
            {/* Project Visual Area (16:7) — real media when available */}
            <ProjectVisual project={currentProject} />

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
                className={`w-3 h-3 rounded-full border-brut-2 border-ink transition-all ${currentIndex === idx
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
                  className="bg-paper border-brut-2 border-ink shadow-brut-xs p-4 sm:p-5 flex flex-col justify-between hover:translate-x-[1px] hover:translate-y-[1px] transition-all group"
                >
                  <div>
                    {/* Top Tag & Verified status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow border border-ink flex items-center gap-1 text-ink">
                          <TechIcon
                            name={
                              cert.tag === "CLOUD"
                                ? "aws"
                                : cert.tag === "SYSTEMS"
                                ? "linux"
                                : "duolingo"
                            }
                            size={12}
                            className="shrink-0"
                          />
                          <span>{cert.tag}</span>
                        </span>
                        <span className="font-mono text-[10px] font-bold text-ink/60 uppercase">
                          {cert.shortName}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-700 font-mono text-[10px] font-bold">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="hidden sm:inline">VERIFIED</span>
                      </div>
                    </div>

                    {/* Title & Issuer */}
                    <h4 className="font-heading text-sm sm:text-base text-ink uppercase tracking-tight mt-2.5 group-hover:text-violet transition-colors">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-xs text-ink/80 mt-0.5 font-bold">
                      {cert.issuer}
                    </p>

                    <p className="font-mono text-[11px] sm:text-xs text-ink/80 mt-2 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.slice(0, 3).map((sk) => (
                        <span
                          key={sk}
                          className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-cream border border-ink/30 text-ink"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: View in website and direct PDF */}
                  <div className="mt-4 pt-3 border-t-2 border-ink/15 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalCert(cert)}
                      className="flex-1 py-1.5 px-3 bg-violet text-white hover:bg-yellow hover:text-ink font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-ink shadow-brut-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 select-none"
                      title={`Show ${cert.title} inside the website`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW IN WEBSITE</span>
                    </button>

                    <a
                      href={cert.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2.5 bg-paper hover:bg-lime text-ink font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-ink shadow-brut-xs transition-all flex items-center gap-1 shrink-0"
                      title="Open PDF in new tab"
                    >
                      <span>PDF</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
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
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
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

      {/* In-Website Certificate Viewer Modal */}
      {activeModalCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate Viewer: ${activeModalCert.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-ink/75 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="w-full max-w-5xl bg-paper border-brut-3 border-ink shadow-brut p-4 sm:p-6 relative max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-3 border-ink">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-none bg-yellow border-2 border-ink flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-lime border border-ink font-mono text-[10px] font-bold text-ink uppercase tracking-wider">
                      {activeModalCert.tag}
                    </span>
                    <span className="font-mono text-xs text-ink/70 font-bold uppercase">
                      {activeModalCert.issuer}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl uppercase tracking-wider text-ink mt-0.5">
                    {activeModalCert.title}
                  </h3>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={activeModalCert.fileUrl}
                  download
                  className="px-2.5 py-1.5 bg-cream hover:bg-yellow text-ink border-2 border-ink font-mono text-xs font-bold uppercase tracking-wider shadow-brut-xs transition-colors flex items-center gap-1.5"
                  title="Download Certificate PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">DOWNLOAD</span>
                </a>

                <a
                  href={activeModalCert.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 bg-cream hover:bg-lime text-ink border-2 border-ink font-mono text-xs font-bold uppercase tracking-wider shadow-brut-xs transition-colors flex items-center gap-1.5"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">OPEN TAB</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalCert(null)}
                  aria-label="Close certificate viewer"
                  className="w-9 h-9 flex items-center justify-center border-2 border-ink bg-yellow hover:bg-pink text-ink transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Switcher Tabs between the 3 certificates */}
            <div className="flex flex-wrap items-center gap-2 pt-3 pb-3 border-b-2 border-ink/20 bg-cream -mx-4 sm:-mx-6 px-4 sm:px-6">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-ink/70 uppercase mr-1">
                SWITCH CERTIFICATE:
              </span>
              {certifications.map((cert) => {
                const isActive = activeModalCert.id === cert.id;
                return (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setActiveModalCert(cert)}
                    className={`px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider border-2 border-ink transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? "bg-violet text-white shadow-brut-xs translate-y-[-1px]"
                        : "bg-paper text-ink hover:bg-yellow shadow-none"
                    }`}
                  >
                    <TechIcon
                      name={
                        cert.tag === "CLOUD"
                          ? "aws"
                          : cert.tag === "SYSTEMS"
                          ? "linux"
                          : "duolingo"
                      }
                      size={14}
                      className="shrink-0"
                    />
                    <span>{cert.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* In-Website Document Viewer Frame */}
            <div className="flex-1 py-3 flex flex-col min-h-0">
              <div className="relative w-full h-[55vh] sm:h-[62vh] md:h-[68vh] border-2 border-ink bg-white overflow-hidden shadow-inner">
                <iframe
                  src={`${activeModalCert.fileUrl}#toolbar=1&navpanes=0`}
                  title={activeModalCert.title}
                  className="w-full h-full border-0"
                />
              </div>

              {/* Competencies & Skills verification footer */}
              <div className="mt-3 pt-3 border-t-2 border-ink/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[11px] font-bold text-ink/70 uppercase">
                    Competencies:
                  </span>
                  {activeModalCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[10px] font-mono font-bold bg-yellow border border-ink text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setActiveModalCert(null)}
                  >
                    CLOSE VIEWER
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
