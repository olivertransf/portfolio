type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  name: string;
  description: string;
  links: ProjectLink[];
};

const site = {
  name: "Oliver Tran",
  role: "High school student · San Francisco",
  bio: "I build iOS apps, make music, and solve problems with code.",
  links: [
    { label: "Email", href: "mailto:olivertransf@gmail.com" },
    { label: "GitHub", href: "https://github.com/olivertransf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/olivertransf/" },
  ],
  projects: [
    {
      name: "Claveo",
      description:
        "Music practice toolkit — metronome, tuner, recorder, and theory reference.",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/Claveo" },
        { label: "Website", href: "https://claveo.netlify.app/" },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/claveo-music-companion/id6755795790",
        },
      ],
    },
    {
      name: "Soundfolio",
      description:
        "Self-hosted Spotify listening history and stats (Next.js, Prisma, PostgreSQL).",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/Soundfolio" },
        {
          label: "Demo",
          href: "https://soundfolio-stats.netlify.app/demo?range=ytd",
        },
      ],
    },
    {
      name: "PocketPic",
      description:
        "A journal camera app for capturing and generating timelapse videos.",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/PocketPic" },
      ],
    },
    {
      name: "Studium",
      description:
        "iOS/iPadOS SAT prep — filtering, progress, stats, and iCloud sync.",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/Studium" },
        {
          label: "Website",
          href: "https://studium-web-six.vercel.app",
        },
      ],
    },
    {
      name: "Lienzo",
      description:
        "Native SwiftUI Canvas LMS student client — courses, assignments, calendar, inbox, and more.",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/Lienzo" },
      ],
    },
    {
      name: "IggyWiki",
      description:
        "Resource hub for St. Ignatius College Preparatory.",
      links: [
        { label: "GitHub", href: "https://github.com/olivertransf/IggyWiki" },
        { label: "Website", href: "https://iggywiki.netlify.app/" },
      ],
    },
  ] satisfies Project[],
};

function contactLinkText(href: string) {
  if (href.startsWith("mailto:")) {
    return href.slice("mailto:".length);
  }
  try {
    const u = new URL(href);
    return `${u.hostname}${u.pathname}`.replace(/\/$/, "") || href;
  } catch {
    return href;
  }
}

export default function Home() {
  return (
    <div className="min-h-full px-6 py-20 sm:py-28">
      <main className="mx-auto flex max-w-md flex-col gap-16">
        <header className="space-y-3">
          <h1 className="text-2xl font-medium tracking-tight text-foreground">
            {site.name}
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {site.role}
          </p>
          <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
            {site.bio}
          </p>
          <div className="space-y-1.5 pt-1 text-[15px]">
            {site.links.map((link) => (
              <p key={link.label}>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {link.label}:
                </span>{" "}
                <a
                  href={link.href}
                  className="text-foreground underline decoration-neutral-300 underline-offset-[3px] transition-colors hover:decoration-foreground dark:decoration-neutral-600"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {contactLinkText(link.href)}
                </a>
              </p>
            ))}
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Projects
          </h2>
          <ul className="space-y-8">
            {site.projects.map((project) => (
              <li key={project.name} className="space-y-2">
                <h3 className="text-[15px] font-medium text-foreground">
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
                {project.links.length > 0 ? (
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-sm">
                    {project.links.map((link, i) => (
                      <li key={`${project.name}-${link.label}`} className="flex items-center gap-x-3">
                        {i > 0 ? (
                          <span
                            className="text-neutral-300 dark:text-neutral-600"
                            aria-hidden
                          >
                            ·
                          </span>
                        ) : null}
                        <a
                          href={link.href}
                          className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground dark:text-neutral-400 dark:decoration-neutral-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
