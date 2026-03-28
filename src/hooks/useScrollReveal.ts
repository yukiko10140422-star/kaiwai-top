"use client";

import { useEffect } from "react";

export function useScrollReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll("[data-reveal], [data-stagger], .divider")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);
}

export function useScrollProgress(): void {
  useEffect(() => {
    const progressBar = document.querySelector(
      ".scroll-progress"
    ) as HTMLElement | null;
    if (!progressBar) return;

    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) {
        progressBar.style.transform = `scaleX(${window.scrollY / h})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}
