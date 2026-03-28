"use client";

import { useEffect } from "react";

// data-reveal は削除済み。useScrollReveal は空関数として残す（互換性のため）
export function useScrollReveal(): void {
  // noop
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
