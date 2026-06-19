"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@/components/ui/link-icon";
import { SectionLabel } from "@/components/ui/section-label";
import { githubProfile, projects, type Project } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg underline decoration-border-strong underline-offset-2 transition-colors hover:text-muted"
        >
          <LinkIcon name="website" />
          Website
        </Link>
      )}
      {project.appStoreUrl && (
        <Link
          href={project.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg underline decoration-border-strong underline-offset-2 transition-colors hover:text-muted"
        >
          <LinkIcon name="app-store" />
          App Store
        </Link>
      )}
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-fg underline decoration-border-strong underline-offset-2 transition-colors hover:text-muted"
        >
          <LinkIcon name="github" />
          GitHub
        </Link>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const titleClass =
    "text-xl font-bold leading-tight text-fg sm:text-2xl";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="rounded-xl border border-border bg-surface-raised p-4 transition-[box-shadow,border-color] duration-200 hover:border-border-strong hover:shadow-[0_12px_32px_-14px_color-mix(in_srgb,var(--foreground)_14%,transparent)] sm:p-5"
    >
      <div className="flex gap-3 sm:gap-4">
        {project.icon && (
          <Image
            src={project.icon}
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 shrink-0 rounded-xl sm:h-14 sm:w-14"
          />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
            {project.category} · {project.year}
          </p>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-0.5 inline-flex items-center gap-1.5 transition-colors hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className={titleClass}>{project.title}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="mt-1 shrink-0 text-muted"
              >
                <path
                  d="M6 3.5h6.5V10M9.5 6.5 12.5 3.5M12.5 3.5H9.75M12.5 3.5V6.25M3.5 6v6.5h6.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <h3 className={`${titleClass} mt-0.5`}>{project.title}</h3>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-border pt-3">
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="flex h-full flex-col rounded-xl border border-border bg-surface-raised p-4 transition-[box-shadow,border-color] duration-200 hover:border-border-strong hover:shadow-[0_12px_32px_-14px_color-mix(in_srgb,var(--foreground)_14%,transparent)]"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
        {project.category} · {project.year}
      </p>
      <h3 className="mt-1 text-base font-bold leading-snug text-fg">
        {project.title}
      </h3>

      <p className="mt-2 min-h-[3.25rem] line-clamp-3 flex-1 text-xs leading-snug text-muted">
        {project.description}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded bg-surface px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-3 border-t border-border pt-2.5">
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export function FeaturedWork() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad py-12 sm:py-14">
      <div className="max-content">
        <SectionLabel href={githubProfile}>Projects</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-6 space-y-3"
        >
          <FeaturedCard project={featured} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((project) => (
              <CompactCard key={project.slug} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
