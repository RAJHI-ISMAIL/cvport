import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-mono font-bold uppercase text-[12px] md:text-[13px] tracking-wider border-brut-2 border-ink transition-all duration-120 cursor-pointer select-none focus-visible:outline-3 focus-visible:outline-violet focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-lime text-ink shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        secondary:
          "bg-paper text-ink shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        accent:
          "bg-violet text-white shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        yellow:
          "bg-yellow text-ink shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        pink:
          "bg-pink text-ink shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
        dark:
          "bg-ink text-paper shadow-brut-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#0A0A0A] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none",
      },
      size: {
        sm: "px-3 py-1.5 text-[11px]",
        md: "px-5 py-3 text-[12px] md:text-[13px]",
        lg: "px-6 py-3.5 text-[14px]",
        full: "w-full py-3 px-4 text-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  children,
  href,
  target,
  rel,
  ...props
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
