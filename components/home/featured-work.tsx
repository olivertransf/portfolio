import Image from "next/image";
import Link from "next/link";
import { LinkIcon } from "@/components/ui/link-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { githubProfile, projects, type Project } from "@/lib/data";

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

const cardMotion =
  "transition-[transform,box-shadow,border-color] duration-200 will-change-transform hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_12px_32px_-14px_color-mix(in_srgb,var(--foreground)_14%,transparent)] motion-reduce:transform-none motion-reduce:transition-colors";

function FeaturedCard({ project }: { project: Project }) {
  return (
    <ScrollReveal className="h-full">
    <article
      className={`flex h-full flex-col rounded-xl border border-border bg-surface-raised p-5 sm:p-6 ${cardMotion}`}
    >
      <div className="flex items-start gap-3.5 sm:gap-4">
        {project.icon && (
          <Image
            src={project.icon}
            alt=""
            width={72}
            height={72}
            priority
            sizes="64px"
            className="h-14 w-14 shrink-0 rounded-2xl sm:h-16 sm:w-16"
          />
        )}
        <div className="min-w-0 pt-0.5">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-1 text-xl font-bold leading-tight text-fg sm:text-2xl">
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {project.title}
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
              project.title
            )}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-border pt-3.5">
        <ProjectLinks project={project} />
      </div>
    </article>
    </ScrollReveal>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <ScrollReveal className="h-full">
      <article
        className={`flex h-full flex-col rounded-xl border border-border bg-surface-raised p-4 sm:p-5 ${cardMotion}`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
          {project.category} · {project.year}
        </p>
        <h3 className="mt-1 text-base font-bold leading-snug text-fg sm:text-[17px]">
          {project.title}
        </h3>

        <p className="mt-2 text-xs leading-snug text-muted sm:text-[13px] sm:leading-relaxed">
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

        <div className="mt-4 border-t border-border pt-3">
          <ProjectLinks project={project} />
        </div>
      </article>
    </ScrollReveal>
  );
}

export function FeaturedWork() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad py-12 sm:py-14">
      <div className="max-content">
        <SectionLabel as="h2" href={githubProfile}>
          Projects
        </SectionLabel>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <FeaturedCard project={featured} />
          </div>
          {rest.map((project) => (
            <CompactCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
