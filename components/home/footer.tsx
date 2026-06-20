import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { LinkIcon, socialIconNames } from "@/components/ui/link-icon";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="section-pad border-t border-border py-6 sm:py-7">
      <div className="max-content flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-3">
        <nav aria-label="Social links" className="sm:order-2">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end sm:gap-x-5">
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

        <div className="flex w-full items-center justify-between gap-4 sm:order-1 sm:w-auto sm:justify-start sm:gap-x-3">
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
          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.12em] text-muted sm:whitespace-nowrap">
            © {new Date().getFullYear()} Oliver Tran
          </p>
        </div>
      </div>
    </footer>
  );
}
