import React from "react";
import { cn } from "@/lib/utils";

export interface SectionLabelProps {
  label: string;
  arrow?: string;
  variant?: "violet" | "pink" | "lime" | "yellow";
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  arrow = "→",
  variant = "violet",
  className,
}) => {
  const variantStyles = {
    violet: "bg-violet text-white",
    pink: "bg-pink text-ink",
    lime: "bg-lime text-ink",
    yellow: "bg-yellow text-ink",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between px-5 py-4 font-heading text-lg md:text-xl uppercase tracking-wider select-none border-b-3 md:border-b-0 md:border-r-3 border-ink",
        variantStyles[variant],
        className
      )}
    >
      <span>{label}</span>
      {arrow && <span className="font-mono text-xl font-bold ml-2">{arrow}</span>}
    </div>
  );
};
