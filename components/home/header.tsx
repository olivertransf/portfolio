"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/lib/data";

function isActiveNavLink(pathname: string, href: string): boolean {
  return href.startsWith("/#") && pathname === "/";
}

export function Header() {
  const pathname = usePathname();
  return (
    <header className="section-pad sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="max-content relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group relative z-10 flex shrink-0 items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Oliver Tran, home"
        >
          <BrandMark
            size={28}
            className="size-7 shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden text-xs font-bold uppercase tracking-[0.12em] text-muted sm:inline">
            Oliver Tran
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <ul className="pointer-events-auto flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const active = isActiveNavLink(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      active
                        ? "text-fg"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="relative z-10 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
