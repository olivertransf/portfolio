const site = {
  name: "Oliver Tran",
  role: "Developer · your focus",
  bio: "One or two sentences about what you build and care about.",
  links: [
    { label: "Email", href: "mailto:you@example.com" },
    { label: "GitHub", href: "https://github.com/yourusername" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  ],
  projects: [
    {
      name: "Project title",
      href: "https://example.com",
      description: "Short description.",
    },
    {
      name: "Another project",
      href: "https://example.com",
      description: "What it does, in one line.",
    },
  ],
};

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
        </header>

        <section className="space-y-4">
          <h2 className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Work
          </h2>
          <ul className="space-y-6">
            {site.projects.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  className="group block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[15px] font-medium text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:decoration-foreground dark:decoration-neutral-600">
                    {project.name}
                  </span>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {project.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="flex flex-wrap gap-x-5 gap-y-2 border-t border-neutral-200 pt-8 text-sm dark:border-neutral-800">
          {site.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-neutral-600 transition-colors hover:text-foreground dark:text-neutral-400 dark:hover:text-foreground"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </footer>
      </main>
    </div>
  );
}
