"use client";

import { scrollToProjects } from "@/lib/scroll";

export function HeroCta() {
  return (
    <button
      type="button"
      onClick={scrollToProjects}
      className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-bold text-surface-raised transition-[opacity,transform] duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-[#0a0a0a]"
    >
      View projects
    </button>
  );
}
