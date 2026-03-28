"use client";

import { useEffect, useState, useCallback } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const handleMagneticMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const btn = e.currentTarget;
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    },
    []
  );

  const handleMagneticLeave = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.currentTarget.style.transform = "";
    },
    []
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 px-[var(--gutter)] border-b border-border transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "bg-white/92"
      } backdrop-blur-[40px] backdrop-saturate-[180%] max-md:bg-white/85 max-md:backdrop-blur-[24px] max-md:backdrop-saturate-200`}
    >
      <div className="flex items-center justify-between h-[60px] max-md:h-[52px] w-[min(100%,var(--inner))] mx-auto">
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <div className="flex gap-0.5">
            <div className="w-4 h-4 bg-gradient-to-br from-[#999] to-[#d0d0d0] rounded-[50%_0_50%_50%] transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-115" />
            <div className="w-4 h-4 bg-gradient-to-br from-accent to-accent-dark rounded-[50%_50%_0_50%] transition-transform duration-500 group-hover:rotate-12 group-hover:scale-115" />
          </div>
          <div className="font-display font-bold text-[15px] tracking-[3px] text-primary transition-colors duration-500">
            KAIWAI
          </div>
        </a>

        <div
          className={`flex gap-7 items-center max-md:hidden ${
            menuOpen
              ? "!flex flex-col fixed top-[52px] left-0 right-0 bottom-0 bg-[rgba(248,248,248,0.98)] backdrop-blur-[20px] p-8 px-[var(--gutter)] gap-6 z-99"
              : ""
          }`}
        >
          <a
            href="#flow"
            onClick={closeMenu}
            className="text-[13px] font-medium text-[#666] no-underline relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-[width] after:duration-400 hover:after:w-full"
          >
            サービス
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className="text-[13px] font-medium text-[#666] no-underline relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-[width] after:duration-400 hover:after:w-full"
          >
            診断について
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className="text-[13px] font-medium text-[#666] no-underline relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-[width] after:duration-400 hover:after:w-full"
          >
            活動事例
          </a>
          <a
            href="#"
            onClick={closeMenu}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="text-[13px] font-semibold text-white bg-gradient-to-br from-accent to-accent-dark py-2.5 px-6 rounded-[10px] no-underline inline-block transition-all duration-400 will-change-transform hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.3)]"
          >
            無料で診断する
          </a>
        </div>

        {/* Mobile menu - shown via CSS media query */}
        <div
          className={`hidden max-md:flex flex-col gap-[5px] p-2 cursor-pointer z-101`}
          onClick={toggleMenu}
        >
          <span
            className={`block w-5 h-0.5 bg-primary rounded-sm transition-all duration-300 ${
              menuOpen
                ? "rotate-45 translate-x-[3px] translate-y-[4px]"
                : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary rounded-sm transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-primary rounded-sm transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 translate-x-[3px] -translate-y-[4px]"
                : ""
            }`}
          />
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="md:hidden fixed top-[52px] left-0 right-0 bottom-0 bg-[rgba(248,248,248,0.98)] backdrop-blur-[20px] p-8 px-[var(--gutter)] z-99 flex flex-col gap-6">
            <a
              href="#flow"
              onClick={closeMenu}
              className="text-lg text-[#333] no-underline"
            >
              サービス
            </a>
            <a
              href="#faq"
              onClick={closeMenu}
              className="text-lg text-[#333] no-underline"
            >
              診断について
            </a>
            <a
              href="#testimonials"
              onClick={closeMenu}
              className="text-lg text-[#333] no-underline"
            >
              活動事例
            </a>
            <a
              href="#"
              onClick={closeMenu}
              className="text-center py-3.5 px-6 text-white bg-gradient-to-br from-accent to-accent-dark rounded-[10px] no-underline font-semibold"
            >
              無料で診断する
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
