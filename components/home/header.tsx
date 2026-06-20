"use client";

import Link from "next/link";
import { BrandMark } from "@/components/ui/brand-mark";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks } from "@/lib/data";

export function Header() {
  return (
    <header className="section-pad sticky top-0 z-50 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="max-content grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 justify-self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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

        <nav aria-label="Primary" className="justify-self-center">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
