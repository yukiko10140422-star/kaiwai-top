"use client";

import { useEffect } from "react";

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
