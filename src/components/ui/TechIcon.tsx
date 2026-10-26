import React from "react";
import { Code2 } from "lucide-react";

export interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  colored?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({
  name,
  size = 16,
  colored = true,
  className = "",
  ...props
}) => {
  const normalized = name.toLowerCase().trim();

  // 1. GIT
  if (normalized.includes("git") && !normalized.includes("digital")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M21.62 10.79l-8.41-8.41a2.38 2.38 0 00-3.37 0L7.46 4.76l2.97 2.97a2.82 2.82 0 013.27.7 2.83 2.83 0 01.69 3.29l2.86 2.86a2.82 2.82 0 013.28.69 2.83 2.83 0 01-4 4 2.83 2.83 0 01-.69-3.29l-2.73-2.73v5.11a2.83 2.83 0 11-2 0V9.89a2.83 2.83 0 01-1.52-2.48 2.82 2.82 0 01.73-1.92L4.38 2.52a2.38 2.38 0 00-3.37 0 2.38 2.38 0 000 3.37l8.41 8.41a2.38 2.38 0 003.37 0l8.83-8.83a2.38 2.38 0 000-3.37z"
          fill={colored ? "#F05032" : "currentColor"}
        />
      </svg>
    );
  }

  // 2. REACT
  if (normalized.includes("react")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="-11.5 -10.23174 23 20.46348"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="0" cy="0" r="2.05" fill={colored ? "#087ea4" : "currentColor"} />
        <g stroke={colored ? "#149eca" : "currentColor"} strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 3. NEXT.JS
  if (normalized.includes("next")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <circle cx="12" cy="12" r="11" fill={colored ? "#000000" : "currentColor"} />
        <path
          d="M15.5 8.5v7m-7-7v7l8.5-8.5"
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 4. TYPESCRIPT
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill={colored ? "#3178C6" : "currentColor"} />
        <path
          d="M4.5 10.5h6m-3 0v8M13.5 16.5c.8.9 2 1.5 3.3 1.5 1.7 0 2.7-.9 2.7-2.1 0-2.8-5-1.8-5-4.4 0-1.2 1-2 2.6-2 1.1 0 2.2.5 2.9 1.2"
          stroke="#FFFFFF"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 5. JAVASCRIPT
  if (normalized.includes("javascript") || normalized === "js") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <rect width="24" height="24" rx="4" fill={colored ? "#F7DF1E" : "currentColor"} />
        <path
          d="M7 11.5v5.2c0 1.5-.8 2.3-2 2.3-.8 0-1.6-.4-2-.9M13.5 16.5c.8.9 2 1.5 3.3 1.5 1.7 0 2.7-.9 2.7-2.1 0-2.8-5-1.8-5-4.4 0-1.2 1-2 2.6-2 1.1 0 2.2.5 2.9 1.2"
          stroke="#000000"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 6. PYTHON
  if (normalized.includes("python")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M11.88 2c-4.24 0-3.98 1.84-3.98 1.84l.01 1.91h4.04v.57H6.28S3.5 6.01 3.5 10.27c0 4.26 2.42 4.11 2.42 4.11h1.44v-2.03s-.08-2.42 2.38-2.42h4.11s2.3.04 2.3-2.27V4.27S16.5 2 11.88 2zm-2.23 1.24a.82.82 0 110 1.64.82.82 0 010-1.64z"
          fill={colored ? "#3776AB" : "currentColor"}
        />
        <path
          d="M12.12 22c4.24 0 3.98-1.84 3.98-1.84l-.01-1.91h-4.04v-.57h5.67s2.78.31 2.78-3.95c0-4.26-2.42-4.11-2.42-4.11h-1.44v2.03s.08 2.42-2.38 2.42h-4.11s-2.3-.04-2.3 2.27v3.39s-.35 2.27 4.27 2.27zm2.23-1.24a.82.82 0 110-1.64.82.82 0 010 1.64z"
          fill={colored ? "#FFD438" : "currentColor"}
        />
      </svg>
    );
  }

  // 7. ANGULAR
  if (normalized.includes("angular")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 2L2.5 5.5l1.5 12.5L12 22l8-4 1.5-12.5L12 2z"
          fill={colored ? "#DD0031" : "currentColor"}
        />
        <path
          d="M12 2v20l8-4 1.5-12.5L12 2z"
          fill={colored ? "#C3002F" : "currentColor"}
        />
        <path
          d="M12 5.5L7 16.5h2.2l1-2.5h3.6l1 2.5H17L12 5.5zm1.1 6.8h-2.2l1.1-2.7 1.1 2.7z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 8. NODE.JS
  if (normalized.includes("node")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 2.5l8.5 4.9v9.8L12 22.1l-8.5-4.9V7.4L12 2.5z"
          fill={colored ? "#339933" : "currentColor"}
        />
        <path
          d="M12 5.5l6 3.5v7l-6 3.5-6-3.5V9l6-3.5z"
          fill={colored ? "#026E00" : "#222222"}
        />
        <path
          d="M10 9v6l5-3-5-3z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. TAILWIND CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-1.1 3-.7.6.2 1 .7 1.5 1.2 1 1 2 2.4 4.5 2.4 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1.1-3 .7-.6-.2-1-.7-1.5-1.2-1-1-2-2.4-4.5-2.4zM7.5 12.5C5.1 12.5 3.6 13.7 3 16.1c1-.8 2-1.1 3-.7.6.2 1 .7 1.5 1.2 1 1 2 2.4 4.5 2.4 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 1.1-3 .7-.6-.2-1-.7-1.5-1.2-1-1-2-2.4-4.5-2.4z"
          fill={colored ? "#06B6D4" : "currentColor"}
        />
      </svg>
    );
  }

  // 10. FLUTTER
  if (normalized.includes("flutter")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M14.3 2.5L4 12.8l3.1 3.1 13.4-13.4h-6.2z" fill={colored ? "#42A5F5" : "currentColor"} />
        <path d="M14.3 12.6l-5.6 5.6 3.1 3.1 3.7-3.7 5.1 5.1H24l-9.7-10.1z" fill={colored ? "#0D47A1" : "currentColor"} />
        <path d="M8.7 18.2l3.1-3.1 3.1 3.1-3.1 3.1z" fill={colored ? "#01579B" : "currentColor"} />
      </svg>
    );
  }

  // 11. MONGODB
  if (normalized.includes("mongo")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 2C11.5 4 6 9.5 6 15c0 3.5 2.5 6.5 6 7 3.5-.5 6-3.5 6-7 0-5.5-5.5-11-6-13z"
          fill={colored ? "#47A248" : "currentColor"}
        />
        <path
          d="M12 2v20c-.2 0-.4-.1-.6-.1-2.9-.6-5-3.2-5-6.4 0-4.5 4.5-9.3 5.4-11.5.1-.7.2-1.4.2-2z"
          fill={colored ? "#499D4A" : "currentColor"}
        />
        <path
          d="M12 18.5c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1l2-2c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-2 2c-.2.1-.4.2-.6.2z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 12. DART
  if (normalized.includes("dart")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M4 4h9l7 7-7 9H4L11 11 4 4z" fill={colored ? "#0175C2" : "currentColor"} />
        <path d="M13 4l7 7-4 4-7-7 4-4z" fill={colored ? "#02569B" : "currentColor"} />
      </svg>
    );
  }

  // 13. SQL / DATABASE / POSTGRES
  if (
    normalized.includes("sql") ||
    normalized.includes("postgres") ||
    normalized.includes("data") ||
    normalized.includes("database")
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <ellipse cx="12" cy="5" rx="8" ry="3" fill={colored ? "#336791" : "currentColor"} />
        <path
          d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
          stroke={colored ? "#336791" : "currentColor"}
          strokeWidth="2"
        />
      </svg>
    );
  }

  // 14. DOCKER
  if (normalized.includes("docker")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M13 7h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7zm6-3h2v2h-2zm-3 0h2v2h-2zm9 7c-.3 0-.6.1-.9.2-1.3-.9-2.9-1.2-4.5-1H3c-.6 0-1 .4-1 1v4c0 3.9 3.1 7 7 7h6c4.4 0 8-3.6 8-8 0-.3 0-.7-.1-1 .7-.4 1.1-1.2 1.1-2.2 0-.2 0-.4-.1-.6-.9.2-1.9.4-2.9.6z"
          fill={colored ? "#2496ED" : "currentColor"}
        />
      </svg>
    );
  }

  // 15. AWS / CLOUD
  if (normalized.includes("aws") || normalized.includes("cloud") || normalized.includes("ec2")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M7.5 18c-3 0-5.5-2.5-5.5-5.5 0-2.8 2.1-5.1 4.9-5.4C7.8 4.3 10.2 2 13 2c3.3 0 6 2.7 6 6 .2 0 .4 0 .6.1 2.5.4 4.4 2.6 4.4 5.2 0 2.9-2.4 5.3-5.3 5.3H7.5z"
          fill={colored ? "#FF9900" : "currentColor"}
        />
        <path
          d="M6 16c4 2 8 2 12 0"
          stroke="#232F3E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // 16. LINUX
  if (normalized.includes("linux") || normalized.includes("ubuntu")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M12 2C9.5 2 8 4 8 6v5c0 1.5-.5 3-1.5 4-1 1-1.5 2.5-1.5 4 0 2.5 3 3 7 3s7-.5 7-3c0-1.5-.5-3-1.5-4-1-1-1.5-2.5-1.5-4V6c0-2-1.5-4-4-4z"
          fill={colored ? "#FCC624" : "currentColor"}
        />
        <circle cx="10" cy="6" r="1" fill="#000000" />
        <circle cx="14" cy="6" r="1" fill="#000000" />
        <path d="M10 8h4l-2 2z" fill="#E95420" />
      </svg>
    );
  }

  // 17. HTML / CSS
  if (normalized.includes("html") || normalized.includes("css")) {
    const isHtml = normalized.includes("html");
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          d="M3 3l1.8 17.5L12 23l7.2-2.5L21 3H3z"
          fill={colored ? (isHtml ? "#E34F26" : "#1572B6") : "currentColor"}
        />
        <path
          d="M12 5v15.5l5.5-1.9 1.4-13.6H12z"
          fill={colored ? (isHtml ? "#EF652A" : "#33A9DC") : "currentColor"}
        />
        <path
          d="M7 8h10l-.4 3.5H9.5l.3 3.5h7.3L16 18.5 12 19.8l-4-1.3-.3-3"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // 18. THREE.JS / 3D
  if (normalized.includes("three") || normalized.includes("fiber")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke={colored ? "#000000" : "currentColor"} strokeWidth="2" />
        <path d="M12 2v20M3 7l9 5 9-5M3 17l9-5 9 5" stroke={colored ? "#000000" : "currentColor"} strokeWidth="1.5" />
      </svg>
    );
  }

  // Fallback icon for any code/tech
  return (
    <Code2
      className={className}
      size={size}
      aria-hidden="true"
      {...props}
    />
  );
};
