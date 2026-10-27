"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const CRITICAL_IMAGES = [
  "/avatar-front.png",
  "/avatar-34.png",
  "/expr-neutral.png",
  "/expr-slight-smile.png",
  "/expr-smiling.png",
  "/expr-thoughtful.png",
  "/expr-serious.png",
  "/expr-lookup.png",
  "/projects/tempora/hero.png",
  "/projects/tempora/logo.jpg",
  "/projects/ecommerce-ai/logo.png",
  "/projects/olympic-ml/logo.png",
  "/projects/olympic-ml/hero.jpg",
];

const CRITICAL_VIDEOS = [
  "/projects/tempora/earth-spin.mp4",
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const targetProgressRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const totalAssets = CRITICAL_IMAGES.length + CRITICAL_VIDEOS.length;

  // Lock body scroll while loading screen is visible
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, []);

  // Completion sequence
  const finishLoading = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;

    targetProgressRef.current = 100;
    setProgress(100);

    // Smooth fade out into the website
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 600);
    }, 350);
  }, [onComplete]);

  // Smooth progress interpolator
  useEffect(() => {
    const startTime = Date.now();
    const minDisplayDuration = 1800; // 1.8s minimum display for aesthetic delight

    const updateLoop = () => {
      const elapsed = Date.now() - startTime;
      const timeRatio = Math.min(1, elapsed / minDisplayDuration);

      const assetRatio = totalAssets > 0 ? loadedCount / totalAssets : 1;
      const combinedTarget = Math.min(100, Math.floor(Math.max(timeRatio * 92, assetRatio * 96)));

      targetProgressRef.current = Math.max(targetProgressRef.current, combinedTarget);

      setProgress((prev) => {
        if (prev >= 100) return 100;
        const delta = targetProgressRef.current - prev;
        const step = Math.max(1, Math.ceil(delta * 0.18));
        const next = Math.min(100, prev + step);

        if (next >= 100 && elapsed >= minDisplayDuration) {
          finishLoading();
          return 100;
        }
        return next;
      });

      if (!completedRef.current) {
        animFrameRef.current = requestAnimationFrame(updateLoop);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [loadedCount, totalAssets, finishLoading]);

  // Preload critical images and project video streams
  useEffect(() => {
    let mounted = true;

    // Safety timeout: Never get stuck on slow networks (max 3.8s)
    const safetyTimeout = setTimeout(() => {
      if (!completedRef.current && mounted) {
        finishLoading();
      }
    }, 3800);

    const assetIncrement = () => {
      if (mounted) {
        setLoadedCount((prev) => {
          const next = prev + 1;
          if (next >= totalAssets) {
            targetProgressRef.current = 100;
          }
          return next;
        });
      }
    };

    // Preload images
    CRITICAL_IMAGES.forEach((src) => {
      const img = new window.Image();
      img.onload = assetIncrement;
      img.onerror = assetIncrement;
      img.src = src;
    });

    // Buffer video metadata & initial chunk
    CRITICAL_VIDEOS.forEach((src) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;

      const onVideoReady = () => {
        cleanup();
        assetIncrement();
      };

      const cleanup = () => {
        video.removeEventListener("loadeddata", onVideoReady);
        video.removeEventListener("loadedmetadata", onVideoReady);
        video.removeEventListener("canplay", onVideoReady);
        video.removeEventListener("error", onVideoReady);
      };

      video.addEventListener("loadeddata", onVideoReady, { once: true });
      video.addEventListener("loadedmetadata", onVideoReady, { once: true });
      video.addEventListener("canplay", onVideoReady, { once: true });
      video.addEventListener("error", onVideoReady, { once: true });

      video.src = src;
      video.load();

      setTimeout(onVideoReady, 1600);
    });

    return () => {
      mounted = false;
      clearTimeout(safetyTimeout);
    };
  }, [totalAssets, finishLoading]);

  // Keyboard shortcut listener to skip (Space or Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === "Escape") {
        e.preventDefault();
        finishLoading();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [finishLoading]);

  if (isDone) return null;

  // Liquid level inside cup rises smoothly as progress increases
  const liquidY = 72 - (progress / 100) * 26;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[999999] bg-cream flex flex-col items-center justify-center p-6 select-none transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? "opacity-0 scale-95 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Centered Cup & Aesthetic Animation matching Pinterest reference */}
      <div className="flex flex-col items-center justify-center -mt-8">
        
        {/* Vector Matcha Cup with Live Waving Liquid */}
        <div className="relative w-36 h-28 flex items-center justify-center">
          <svg
            width="130"
            height="105"
            viewBox="0 0 130 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Clip path matching inside of the rounded cup */}
              <clipPath id="matcha-cup-interior">
                <path d="M 30 22 L 30 66 Q 30 78 42 78 L 80 78 Q 92 78 92 66 L 92 22 Z" />
              </clipPath>
            </defs>

            {/* Waving Liquid Layer inside cup */}
            <g clipPath="url(#matcha-cup-interior)">
              {/* Back wave (lighter matcha lime) */}
              <path
                d={`M -80 ${liquidY} Q -60 ${liquidY - 5} -40 ${liquidY} T 0 ${liquidY} T 40 ${liquidY} T 80 ${liquidY} T 120 ${liquidY} T 160 ${liquidY} T 200 ${liquidY} V 85 H -80 Z`}
                fill="#CFEB52"
                opacity="0.85"
                className="animate-wave-drift-fast"
              />

              {/* Front wave (rich matcha lime) */}
              <path
                d={`M -80 ${liquidY + 2} Q -60 ${liquidY + 7} -40 ${liquidY + 2} T 0 ${liquidY + 2} T 40 ${liquidY + 2} T 80 ${liquidY + 2} T 120 ${liquidY + 2} T 160 ${liquidY + 2} T 200 ${liquidY + 2} V 85 H -80 Z`}
                fill="#9FCF26"
                className="animate-wave-drift"
              />

              {/* Tiny gentle rising bubble */}
              <circle
                cx="61"
                cy={Math.min(74, liquidY + 10)}
                r="1.8"
                fill="#FFFFFF"
                opacity="0.6"
                className="animate-pulse"
              />
            </g>

            {/* Cup Outer Contour (Black 3.5px stroke, rounded bottom) */}
            <path
              d="M 30 22 L 30 66 Q 30 78 42 78 L 80 78 Q 92 78 92 66 L 92 22"
              stroke="#0A0A0A"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />

            {/* Cup Handle (Right side C-shape) */}
            <path
              d="M 92 34 C 110 34 110 58 92 58"
              stroke="#0A0A0A"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Bottom surface plate line */}
            <line
              x1="24"
              y1="85"
              x2="98"
              y2="85"
              stroke="#0A0A0A"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Small dot on the right of plate */}
            <circle cx="106" cy="85" r="2.2" fill="#0A0A0A" />
          </svg>
        </div>

        {/* "loading . . ." text matching the Pinterest reference with bouncing dots */}
        <div className="flex items-center justify-center gap-1.5 font-mono text-sm sm:text-base font-bold text-ink mt-3 tracking-wider">
          <span>loading</span>
          <span className="animate-dot-1 inline-block font-black text-base leading-none">.</span>
          <span className="animate-dot-2 inline-block font-black text-base leading-none">.</span>
          <span className="animate-dot-3 inline-block font-black text-base leading-none">.</span>
        </div>

        {/* Minimal Progress Bar & Asset Telemetry */}
        <div className="w-48 sm:w-56 flex flex-col items-center gap-2 mt-6">
          {/* Subtle Progress Bar */}
          <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden border border-ink/15">
            <div
              className="h-full bg-lime border-r border-ink/40 transition-all duration-200 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Micro Telemetry */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-ink/55 tracking-wider">
            <span>PREPARING ASSETS</span>
            <span className="font-bold text-ink">{progress}%</span>
          </div>
        </div>

        {/* Subtle Skip Option */}
        <button
          type="button"
          onClick={finishLoading}
          className="mt-6 px-3 py-1 font-mono text-xs text-ink/40 hover:text-ink transition-colors tracking-widest cursor-pointer"
          title="Press Space or click to skip"
        >
          [ SKIP ]
        </button>
      </div>
    </div>
  );
};
