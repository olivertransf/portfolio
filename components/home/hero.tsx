import { SectionLabel } from "@/components/ui/section-label";
import { HeroCta } from "@/components/home/hero-cta";

export function Hero() {
  return (
    <section id="home" className="relative border-b border-border section-pad">
      <div className="max-content relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6 xl:gap-8">
          <div className="max-w-xl">
            <div className="animate-fade-up">
              <SectionLabel>Developer · Musician · Student</SectionLabel>
            </div>

            <div className="animate-fade-up mt-4 sm:mt-6 [animation-delay:80ms]">
              <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-fg">
                Oliver Tran
              </h1>
            </div>

            <p className="animate-fade-up mt-5 max-w-lg text-pretty text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-base lg:mt-4 [animation-delay:160ms]">
              High school student focused on computer science, native app
              development, and music.
            </p>

            <div className="animate-fade-up mt-7 flex flex-wrap gap-2.5 sm:mt-8 [animation-delay:240ms]">
              <HeroCta />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
