"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProfileFrame, ProfileArcs, profileImageClass } from "@/components/ui/profile-frame";
import { SectionLabel } from "@/components/ui/section-label";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section id="home" className="relative border-b border-border section-pad">
      <div className="max-content relative py-14 sm:py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6 xl:gap-8"
        >
          <div className="max-w-xl">
            <motion.div variants={fadeUp}>
              <SectionLabel>Developer · Musician · Student</SectionLabel>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-4 sm:mt-6 lg:hidden"
            >
              <div className="relative h-[4.25rem] w-[4.25rem] shrink-0 sm:h-20 sm:w-20">
                <ProfileArcs inset={3} />
                <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/profile.png"
                  alt=""
                  fill
                  priority
                  sizes="80px"
                  className={profileImageClass}
                />
                </div>
              </div>
              <h1 className="text-[clamp(2rem,6vw,2.75rem)] font-bold leading-[1.08] tracking-tight text-fg">
                Oliver Tran
              </h1>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 hidden text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-fg lg:block"
            >
              Oliver Tran
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-base"
            >
              High school student focused on computer science, native app
              development, and music.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-2.5 sm:mt-8"
            >
              <Link
                href="#projects"
                className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-bold text-surface-raised transition-[opacity,transform] duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-[#0a0a0a]"
              >
                View projects
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-lg border border-border-strong bg-surface-raised px-4 py-2 text-sm font-bold text-fg transition-[colors,transform] duration-200 hover:scale-[1.02] hover:border-accent hover:text-accent active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="hidden lg:block lg:-translate-x-10 xl:-translate-x-12"
          >
            <ProfileFrame />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
