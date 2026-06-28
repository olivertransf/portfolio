"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";
import { formatBlogDate, type BlogPost } from "@/lib/blog";
import { fadeUp, staggerContainer } from "@/lib/motion";

function PostCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className="rounded-xl border border-border bg-surface-raised p-4 transition-[box-shadow,border-color] duration-200 hover:border-border-strong hover:shadow-[0_12px_32px_-14px_color-mix(in_srgb,var(--foreground)_14%,transparent)] sm:p-5"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
        {formatBlogDate(post.date)}
      </p>
      <h2 className="mt-1 text-xl font-bold leading-tight text-fg sm:text-2xl">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors hover:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {post.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-border bg-surface px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-border pt-3">
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-medium text-fg underline decoration-border-strong underline-offset-2 transition-colors hover:text-muted"
        >
          Read post
        </Link>
      </div>
    </motion.article>
  );
}

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="section-pad py-12 sm:py-14">
      <div className="max-content">
        <SectionLabel as="h1">Blog</SectionLabel>
        <p className="mt-3 max-w-xl text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
          Notes on building apps, learning computer science, and making things
          that stick.
        </p>

        {posts.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-border bg-surface px-5 py-8 text-center text-sm text-muted">
            No posts yet. Check back soon.
          </p>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-8 space-y-3"
          >
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
