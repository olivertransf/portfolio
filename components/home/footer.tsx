import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { LinkIcon, socialIconNames } from "@/components/ui/link-icon";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="section-pad border-t border-border py-6 sm:py-7">
      <div className="max-content flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex min-w-0 flex-col items-start gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Oliver Tran, home"
          >
            <BrandMark className="h-6 w-6" />
            <span className="text-sm font-bold text-fg">Oliver Tran</span>
          </Link>
          <span className="hidden text-border-strong sm:inline" aria-hidden="true">
            ·
          </span>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted sm:whitespace-nowrap">
            © {new Date().getFullYear()} Oliver Tran
          </p>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <LinkIcon name={socialIconNames[link.label]} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
