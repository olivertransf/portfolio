import Link from "next/link";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  as?: "p" | "h2";
};

const labelClass =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-muted";

export function SectionLabel({
  children,
  className = "",
  href,
  as = "p",
}: SectionLabelProps) {
  const Tag = as;
  const headingClass = as === "h2" ? "m-0" : "";

  if (href) {
    return (
      <Tag className={headingClass || undefined}>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${labelClass} transition-colors hover:text-fg ${className}`}
        >
          {children}
        </Link>
      </Tag>
    );
  }

  return (
    <Tag className={`${labelClass} ${headingClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
