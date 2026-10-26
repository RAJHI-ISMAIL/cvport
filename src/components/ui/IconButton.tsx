import React from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon: React.ReactNode;
  variant?: "paper" | "lime" | "pink" | "yellow" | "violet";
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  label,
  icon,
  variant = "paper",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}) => {
  const bgColors = {
    paper: "bg-paper hover:bg-lime text-ink",
    lime: "bg-lime hover:bg-paper text-ink",
    pink: "bg-pink hover:bg-yellow text-ink",
    yellow: "bg-yellow hover:bg-lime text-ink",
    violet: "bg-violet hover:bg-lime text-white hover:text-ink",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={label}
      title={label}
      className={cn(
        "w-10 h-10 min-w-10 min-h-10 flex items-center justify-center border-brut-2 border-ink shadow-brut-xs cursor-pointer select-none transition-all duration-120 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#0A0A0A] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none focus-visible:outline-3 focus-visible:outline-violet focus-visible:outline-offset-2",
        bgColors[variant],
        className
      )}
      {...props}
    >
      {icon}
    </a>
  );
};
