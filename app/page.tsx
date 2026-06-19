import { FeaturedWork } from "@/components/home/featured-work";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
      </main>
      <Footer />
    </>
  );
}
