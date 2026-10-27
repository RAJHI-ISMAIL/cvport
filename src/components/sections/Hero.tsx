"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteContent } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { SparkleDoodle, PlusCross, AsteriskStar } from "@/components/ui/Doodles";
import { ArrowDown, ArrowUpRight, Mail, Globe, MapPin } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

// Inline brand SVGs for GitHub and LinkedIn for maximum reliability and styling
const GithubIcon = () => (
  <svg
    className="w-5 h-5 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-5 h-5 fill-current"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const fullLines = [
  `> const developer = {`,
  `    focus: '${siteContent.codeCard.focus}',`,
  `    build: '${siteContent.codeCard.build}',`,
  `    stack: '${siteContent.codeCard.stack}',`,
  `    passion: '${siteContent.codeCard.passion}'`,
  `  }`,
];

export const Hero: React.FC = () => {
  const { personal } = siteContent;
  const { t } = useLang();
  const [lineCount, setLineCount] = useState(0);
  const [avatarMode, setAvatarMode] = useState<
    "standing" | "smiling" | "slight-smile" | "thoughtful"
  >("standing");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger Ismail to smile and speak greeting
  const triggerGreeting = () => {
    if (avatarMode === "smiling" && isSpeaking) {
      setIsSpeaking(false);
      setAvatarMode("standing");
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      return;
    }

    setAvatarMode("smiling");
    setIsSpeaking(true);

    try {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance("Hello, I'm Ismail");
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      // Ignore if speech synthesis is blocked or unavailable
    }

    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
    }

    speechTimeoutRef.current = setTimeout(() => {
      setIsSpeaking(false);
    }, 15000);
  };

  useEffect(() => {
    return () => {
      if (speechTimeoutRef.current) {
        clearTimeout(speechTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      const timer = setTimeout(() => setLineCount(fullLines.length), 0);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setLineCount((prev) => {
        if (prev >= fullLines.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  const typedLines = fullLines.slice(0, lineCount);

  return (
    <section
      aria-label="Hero Section"
      className="w-full bg-cream border-b-3 border-ink relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Column (Cream + Grid texture) */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-cream bg-grid-pattern flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-ink relative">
          {/* Decorative Sparkle */}
          <SparkleDoodle
            className="absolute top-6 right-8 w-8 h-8 hidden sm:block animate-pulse"
            fillColor="#FFD21F"
          />
          <PlusCross
            className="absolute bottom-6 right-10 w-5 h-5 text-ink/40 hidden sm:block"
          />

          <div className="space-y-6">
            {/* Top Tag & Location */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block px-3.5 py-1.5 bg-violet text-white font-mono text-[12px] font-bold uppercase tracking-wider border-brut-2 border-ink shadow-brut-xs">
                {t.hero.tagline}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow text-ink font-mono text-[11px] font-bold uppercase tracking-tight border-brut-2 border-ink shadow-brut-xs">
                <MapPin className="w-3.5 h-3.5" />
                {t.hero.location}
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.95] tracking-tight uppercase text-ink select-none">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block text-ink">{t.hero.titleLine2}</span>
            </h1>

            {/* Intro text */}
            <p className="font-mono text-ink text-sm sm:text-base leading-relaxed max-w-xl">
              {t.hero.intro}
            </p>
          </div>

          {/* Action Buttons & Socials */}
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="#projects" variant="primary" size="md">
                <span>{t.hero.viewWork}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                href="/resume.pdf"
                target="_blank"
                variant="secondary"
                size="md"
              >
                <span>{t.hero.downloadResume}</span>
                <ArrowDown className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Connect with me social row */}
            <div className="pt-2">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink/70 mb-2">
                {t.hero.connectWith}
              </p>
              <div className="flex items-center gap-3">
                <IconButton
                  href={personal.socials.find((s) => s.icon === "github")?.url || "#"}
                  label="GitHub Profile"
                  icon={<GithubIcon />}
                />
                <IconButton
                  href={personal.socials.find((s) => s.icon === "linkedin")?.url || "#"}
                  label="LinkedIn Profile"
                  icon={<LinkedinIcon />}
                />
                <IconButton
                  href={`mailto:${personal.email}`}
                  label="Email Ismail"
                  target="_self"
                  icon={<Mail className="w-5 h-5 text-ink" />}
                />
                <IconButton
                  href={personal.websiteUrl}
                  label="Personal Website"
                  icon={<Globe className="w-5 h-5 text-ink" />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Pink background + Photo Frame + Code Card) */}
        <div className="lg:col-span-5 bg-pink p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center relative min-h-[580px] gap-4 sm:gap-5">
          {/* Asterisk top left */}
          <AsteriskStar className="absolute top-4 left-4 w-7 h-7 text-ink/70" />

          {/* Main Photo Frame (Lime outline with Brutalist Shadow) */}
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] bg-lime border-brut-3 border-ink shadow-brut p-3 flex flex-col justify-between">
            {/* Speech Bubble Popup - Floats prominently right on top of the frame */}
            {isSpeaking && (
              <div
                id="speech-bubble-popup"
                className="absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-bounce"
              >
                <div className="relative bg-yellow text-ink font-heading text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 border-brut-2 border-ink shadow-brut whitespace-nowrap flex items-center gap-1.5">
                  <span className="text-sm">👋</span>
                  <span>HELLO, I&apos;M ISMAIL!</span>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-ink"></div>
                  <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-yellow"></div>
                </div>
              </div>
            )}

            {/* Top Frame Bar: Avatar Tag + Click Me Hint */}
            <div className="flex items-center justify-between pb-2 px-0.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-yellow border-2 border-ink shadow-brut-xs">
                2D AVATAR • ISMAIL
              </span>
              <button
                type="button"
                onClick={triggerGreeting}
                className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-paper hover:bg-yellow border-2 border-ink shadow-brut-xs transition-colors cursor-pointer select-none text-ink"
                title="Click me to say hello!"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>CLICK ME 👋</span>
              </button>
            </div>

            {/* Inner Photo Area */}
            <div className="relative w-full aspect-[4/5] border-brut-2 border-ink overflow-hidden bg-white flex flex-col justify-between">
              {/* Avatar Display - Clickable */}
              <button
                id="avatar-click-target"
                type="button"
                onClick={triggerGreeting}
                className="relative w-full flex-1 flex items-center justify-center p-2 bg-white overflow-hidden cursor-pointer group focus:outline-none"
                title="Click on Ismail to make him smile!"
                aria-label="Click Ismail to say hello and smile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    avatarMode === "standing"
                      ? "/avatar-front.png"
                      : avatarMode === "smiling"
                        ? "/expr-smiling.png"
                        : avatarMode === "slight-smile"
                          ? "/expr-slight-smile.png"
                          : "/expr-thoughtful.png"
                  }
                  alt={`Rajhi Ismail 2D Character - ${avatarMode}`}
                  className={`max-w-full object-contain transition-all duration-300 select-none group-hover:scale-105 ${avatarMode === "standing"
                      ? "h-[94%] drop-shadow-md"
                      : "h-[88%] drop-shadow-md"
                    }`}
                />

                {/* Subtle Click hint on hover */}
                <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-paper/90 border border-ink font-mono text-[9px] font-bold text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click me 💬
                </span>
              </button>

              {/* Expression Selector Bar */}
              <div className="flex items-center justify-center gap-1.5 p-1.5 bg-paper border-t-2 border-ink select-none z-10">
                <button
                  type="button"
                  onClick={() => {
                    setAvatarMode("standing");
                    setIsSpeaking(false);
                  }}
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold border border-ink transition-all cursor-pointer ${avatarMode === "standing"
                      ? "bg-yellow shadow-brut-xs -translate-y-0.5"
                      : "bg-cream hover:bg-yellow/40"
                    }`}
                >
                  🧍 Stand
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerGreeting();
                  }}
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold border border-ink transition-all cursor-pointer ${avatarMode === "smiling"
                      ? "bg-yellow shadow-brut-xs -translate-y-0.5"
                      : "bg-cream hover:bg-yellow/40"
                    }`}
                >
                  😄 Smile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAvatarMode("slight-smile");
                    setIsSpeaking(false);
                  }}
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold border border-ink transition-all cursor-pointer ${avatarMode === "slight-smile"
                      ? "bg-yellow shadow-brut-xs -translate-y-0.5"
                      : "bg-cream hover:bg-yellow/40"
                    }`}
                >
                  🙂 Chill
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAvatarMode("thoughtful");
                    setIsSpeaking(false);
                  }}
                  className={`px-2 py-0.5 font-mono text-[10px] font-bold border border-ink transition-all cursor-pointer ${avatarMode === "thoughtful"
                      ? "bg-yellow shadow-brut-xs -translate-y-0.5"
                      : "bg-cream hover:bg-yellow/40"
                    }`}
                >
                  🤔 Think
                </button>
              </div>
            </div>
          </div>

          {/* Overlapping Violet Code Card (Positioned below the photo frame so the avatar image is 100% clear) */}
          <div className="w-full max-w-[340px] sm:max-w-[380px] bg-violet text-white border-brut-3 border-ink shadow-brut p-4 font-mono text-[11px] sm:text-[12px] leading-relaxed z-20 select-none sm:translate-x-3 transition-transform hover:translate-x-1 hover:translate-y-1">
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-lime inline-block"></span>
              <span className="text-[10px] text-white/60 ml-2">developer.ts</span>
            </div>
            <pre className="text-left whitespace-pre overflow-x-auto">
              <code>
                {typedLines.map((line, idx) => (
                  <div key={idx} className="leading-tight">
                    {line.includes(":") ? (
                      <>
                        <span className="text-lime">
                          {line.substring(0, line.indexOf(":") + 1)}
                        </span>
                        <span className="text-pink">
                          {line.substring(line.indexOf(":") + 1)}
                        </span>
                      </>
                    ) : (
                      <span className="text-white/90">{line}</span>
                    )}
                  </div>
                ))}
                {typedLines.length < fullLines.length && (
                  <span className="inline-block w-2 h-4 bg-yellow animate-pulse align-middle ml-1"></span>
                )}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};




