import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { LinkIcon, socialIconNames } from "@/components/ui/link-icon";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer id="contact" className="section-pad border-t border-border py-8 sm:py-7">
      <div className="max-content flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="space-y-1 sm:flex sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
          <Link
            href="/"
            className="flex w-fit items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Oliver Tran, home"
          >
            <BrandMark className="h-6 w-6" />
            <span className="text-sm font-bold text-fg">Oliver Tran</span>
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
            © {new Date().getFullYear()} Oliver Tran
          </p>
        </div>

        <nav aria-label="Social links" className="border-t border-border pt-5 sm:border-0 sm:pt-0">
          <ul className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start sm:gap-x-5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex items-center justify-center rounded-md p-2 text-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:gap-1.5 sm:p-0"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <LinkIcon
                    name={socialIconNames[link.label]}
                    className="size-4 sm:size-3.5"
                  />
                  <span className="hidden text-[10px] font-bold uppercase tracking-[0.1em] sm:inline">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
