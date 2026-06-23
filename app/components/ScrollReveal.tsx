"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal-section")
    );

    if (!sections.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.classList.add("scroll-reveal-ready");

    if (prefersReducedMotion) {
      document.body.classList.add("scroll-reveal-reduced");
      sections.forEach((section) => section.classList.add("is-visible"));

      return () => {
        document.body.classList.remove("scroll-reveal-ready", "scroll-reveal-reduced");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14
      }
    );

    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => observer.observe(section));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      document.body.classList.remove("scroll-reveal-ready", "scroll-reveal-reduced");
    };
  }, []);

  return null;
}
