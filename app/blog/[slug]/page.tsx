import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { SectionLabel } from "@/components/ui/section-label";
import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post not found · Oliver Tran" };
  }

  return {
    title: `${post.title} · Oliver Tran`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="section-pad py-12 sm:py-14">
        <article className="max-content max-w-2xl">
          <Link
            href="/blog"
            className="text-xs font-bold uppercase tracking-[0.12em] text-muted transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ← Back to blog
          </Link>

          <SectionLabel className="mt-8">
            {formatBlogDate(post.date)}
          </SectionLabel>
          <h1 className="mt-3 text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-fg">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
            {post.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="blog-prose mt-10 border-t border-border pt-8">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
