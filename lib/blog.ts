export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-in-public",
    title: "Building in public",
    description:
      "Why I ship small projects often, and what I have learned from putting work out before it feels finished.",
    date: "2026-06-15",
    tags: ["Development", "Process"],
    content: [
      "Most of my projects start as something I wanted for myself. Claveo came from needing a better practice routine. PocketPic came from wanting a daily photo habit that actually stuck.",
      "Shipping early means feedback arrives while the idea is still flexible. It also keeps the scope honest. If a feature does not matter to the first version, it probably does not matter at all.",
      "This blog is where I will write about that process: what I am building, what broke, and what I would do differently next time.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}
