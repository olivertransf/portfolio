import type { ReactNode } from "react";

type LinkIconName =
  | "email"
  | "github"
  | "linkedin"
  | "instagram"
  | "website"
  | "app-store";

type LinkIconProps = {
  name: LinkIconName;
  className?: string;
};

const ICON_CLASS = "size-3.5 shrink-0";

function IconSvg({
  children,
  className = ICON_CLASS,
  filled = false,
}: {
  children: ReactNode;
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function StrokeIcon({ children }: { children: ReactNode }) {
  return (
    <g
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </g>
  );
}

function BrandIcon({
  children,
  offsetY = 0,
}: {
  children: ReactNode;
  offsetY?: number;
}) {
  return (
    <g transform={`translate(0 ${offsetY}) translate(12 12) scale(0.9) translate(-12 -12)`}>
      {children}
    </g>
  );
}

export function LinkIcon({ name, className = ICON_CLASS }: LinkIconProps) {
  switch (name) {
    case "email":
      return (
        <IconSvg className={className}>
          <StrokeIcon>
            <rect x="4" y="6" width="16" height="12" rx="2" />
            <path d="M4.5 7.5 12 13l7.5-5.5" />
          </StrokeIcon>
        </IconSvg>
      );
    case "github":
      return (
        <IconSvg className={className} filled>
          <BrandIcon>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.01-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.29-1.23 3.29-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </BrandIcon>
        </IconSvg>
      );
    case "linkedin":
      return (
        <IconSvg className={className} filled>
          <BrandIcon offsetY={-1.25}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
          </BrandIcon>
        </IconSvg>
      );
    case "instagram":
      return (
        <IconSvg className={className}>
          <StrokeIcon>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3.75" />
          </StrokeIcon>
          <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
        </IconSvg>
      );
    case "website":
      return (
        <IconSvg className={className}>
          <StrokeIcon>
            <circle cx="12" cy="12" r="8.5" />
            <ellipse cx="12" cy="12" rx="3.25" ry="8.5" />
            <path d="M3.5 12h17M5.25 8h13.5M5.25 16h13.5" />
          </StrokeIcon>
        </IconSvg>
      );
    case "app-store":
      return (
        <IconSvg className={className} filled>
          <BrandIcon offsetY={-0.35}>
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.722 1.343.104 2.715-.688 3.559-1.71" />
          </BrandIcon>
        </IconSvg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export const socialIconNames = {
  Email: "email",
  GitHub: "github",
  LinkedIn: "linkedin",
  Instagram: "instagram",
} as const satisfies Record<string, LinkIconName>;
