"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

type RevealState = "hidden" | "revealing" | "instant";

/**
 * Subtle one-shot reveal for blocks scrolled into view. Anything already on
 * screen (or when reduced motion is preferred) renders immediately with no
 * transition, so first paint is never blank.
 */
export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("hidden");

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const rect = node.getBoundingClientRect();
    const onScreen = rect.top < window.innerHeight && rect.bottom > 0;

    if (reduceMotion || onScreen) {
      setState("instant");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState("revealing");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === "instant"
      ? " is-visible is-instant"
      : state === "revealing"
        ? " is-visible"
        : "";

  return (
    <div
      ref={ref}
      className={`scroll-reveal${stateClass}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
