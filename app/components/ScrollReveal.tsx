"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal-section")
    );
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-item, .scroll-reveal-card")
    );

    if (!sections.length && !items.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.body.classList.add("scroll-reveal-ready");

    if (prefersReducedMotion) {
      document.body.classList.add("scroll-reveal-reduced");
      sections.forEach((section) => section.classList.add("is-visible"));
      items.forEach((item) => item.classList.add("is-revealed"));

      return () => {
        document.body.classList.remove("scroll-reveal-ready", "scroll-reveal-reduced");
      };
    }

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-revealed");
          itemObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.08
      }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          sectionObserver.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14
      }
    );

    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => sectionObserver.observe(section));
      items.forEach((item) => itemObserver.observe(item));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      itemObserver.disconnect();
      sectionObserver.disconnect();
      document.body.classList.remove("scroll-reveal-ready", "scroll-reveal-reduced");
    };
  }, []);

  return null;
}
