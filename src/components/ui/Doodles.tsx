import React from "react";
import { cn } from "@/lib/utils";

interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
}

export const SparkleDoodle: React.FC<DoodleProps> = ({
  className,
  fillColor = "#FFD21F",
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <path
      d="M16 2 C16 9.5 22.5 16 30 16 C22.5 16 16 22.5 16 30 C16 22.5 9.5 16 2 16 C9.5 16 16 9.5 16 2 Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpikyBurst: React.FC<DoodleProps> = ({
  className,
  fillColor = "#FF7C9C",
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <polygon
      points="32,2 38,18 54,12 46,26 62,32 46,38 54,52 38,46 32,62 26,46 10,52 18,38 2,32 18,26 10,12 26,18"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const AsteriskStar: React.FC<DoodleProps> = ({
  className,
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <path
      d="M16 2V30M2 16H30M6 6L26 26M6 26L26 6"
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const SquiggleLine: React.FC<DoodleProps> = ({
  className,
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="80"
    height="20"
    viewBox="0 0 80 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <path
      d="M2 10 Q 12 2, 22 10 T 42 10 T 62 10 T 78 10"
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const HeartDoodle: React.FC<DoodleProps> = ({
  className,
  fillColor = "#FF5A5F",
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <path
      d="M16 28 C16 28 3 20 3 10 C3 5 7 2 12 2 C14.5 2 16 3.5 16 3.5 C16 3.5 17.5 2 20 2 C25 2 29 5 29 10 C29 20 16 28 16 28 Z"
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusCross: React.FC<DoodleProps> = ({
  className,
  strokeColor = "#0A0A0A",
  ...props
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("select-none pointer-events-none", className)}
    {...props}
  >
    <path
      d="M10 2V18M2 10H18"
      stroke={strokeColor}
      strokeWidth="3"
      strokeLinecap="square"
    />
  </svg>
);
