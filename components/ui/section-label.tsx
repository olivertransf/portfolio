import Link from "next/link";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const labelClass =
  "text-[11px] font-bold uppercase tracking-[0.14em] text-muted";

export function SectionLabel({ children, className = "", href }: SectionLabelProps) {
  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${labelClass} transition-colors hover:text-fg ${className}`}
      >
        {children}
      </Link>
    );
  }

  return <p className={`${labelClass} ${className}`}>{children}</p>;
}
