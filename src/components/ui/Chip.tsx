import React from "react";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/ui/TechIcon";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: "paper" | "lime" | "pink" | "yellow" | "violet" | "sky";
  withShadow?: boolean;
  showIcon?: boolean;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = "paper",
  withShadow = false,
  showIcon = true,
  className,
  ...props
}) => {
  const variantStyles = {
    paper: "bg-paper text-ink",
    lime: "bg-lime text-ink",
    pink: "bg-pink text-ink",
    yellow: "bg-yellow text-ink",
    violet: "bg-violet text-white",
    sky: "bg-sky text-ink",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] md:text-[12px] font-mono font-bold tracking-tight border-brut-2 border-ink rounded-[2px]",
        variantStyles[variant],
        withShadow && "shadow-brut-xs",
        className
      )}
      {...props}
    >
      {showIcon && <TechIcon name={label} size={13} className="shrink-0" />}
      <span>{label}</span>
    </span>
  );
};
