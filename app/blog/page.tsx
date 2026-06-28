import type { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · Oliver Tran",
  description:
    "Notes on building apps, learning computer science, and making things that stick.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <Header />
      <main>
        <BlogList posts={posts} />
      </main>
      <Footer />
    </>
  );
}
