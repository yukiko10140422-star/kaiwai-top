"use client";

import { useEffect, useState } from "react";

export default function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCtaEl = document.querySelector(".hero-cta-wrap");
    if (!heroCtaEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && window.scrollY > 300) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(heroCtaEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`hidden max-md:block fixed bottom-0 left-0 right-0 z-98 p-[12px_16px] pb-[calc(12px+env(safe-area-inset-bottom,0px))] bg-white/85 backdrop-blur-[24px] backdrop-saturate-[180%] border-t border-[rgba(0,0,0,0.06)] transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#"
        className="flex items-center justify-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-white py-3.5 px-6 rounded-[14px] text-[15px] font-bold no-underline shadow-[0_4px_20px_rgba(var(--accent-rgb),0.35)] relative overflow-hidden after:content-[''] after:absolute after:top-0 after:-left-full after:w-[60%] after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:animate-[shimmer_3s_ease-in-out_infinite_1s]"
      >
        <span>無料で診断してみる</span>
        <span className="material-symbols-outlined text-base">
          arrow_forward
        </span>
      </a>
    </div>
  );
}
