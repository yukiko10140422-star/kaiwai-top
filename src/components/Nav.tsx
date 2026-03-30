"use client";

import { useEffect, useState, useCallback } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div className="container-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 900, letterSpacing: "0.1em", textDecoration: "none" }}>
          <span style={{ color: "var(--color-primary)" }}>KAI</span>
          <span style={{ color: "var(--color-accent)" }}>WAI</span>
        </a>

        {/* Desktop links */}
        <div className="flex gap-7 items-center max-md:hidden">
          {[
            { href: "#flow", label: "診断の流れ" },
            { href: "#types", label: "4タイプ" },
            { href: "#features", label: "特徴" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: 13, fontWeight: 600, color: "#666", textDecoration: "none", transition: "color 0.2s" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            style={{
              padding: "10px 24px",
              background: "var(--color-accent)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
              borderRadius: 8,
              transition: "background 0.2s",
            }}
          >
            無料で診断
          </a>
        </div>

        {/* Mobile hamburger */}
        <div
          className="hidden max-md:!flex flex-col"
          style={{ gap: 5, padding: 8, cursor: "pointer", zIndex: 101 }}
          onClick={toggleMenu}
        >
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(3px, 4px)" : "none" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(3px, -4px)" : "none" }} />
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", padding: "32px var(--gutter)", zIndex: 99, display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              { href: "#flow", label: "診断の流れ" },
              { href: "#types", label: "4タイプ" },
              { href: "#features", label: "特徴" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} style={{ fontSize: 18, color: "#333", textDecoration: "none" }}>
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={closeMenu}
              style={{ textAlign: "center", padding: "14px 24px", background: "var(--color-accent)", color: "#fff", borderRadius: 8, fontWeight: 700, textDecoration: "none" }}
            >
              無料で診断する
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
