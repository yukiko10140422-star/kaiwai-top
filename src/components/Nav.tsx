"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const categories = [
  { href: "/gakuchika", label: "ガクチカ" },
  { href: "/ryugaku", label: "留学" },
  { href: "/shikaku", label: "資格" },
  { href: "/circle", label: "サークル" },
];

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
        <Link href="/" style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 900, letterSpacing: "0.1em", textDecoration: "none" }}>
          <span style={{ color: "var(--color-primary)" }}>KAI</span>
          <span style={{ color: "var(--color-accent)" }}>WAI</span>
        </Link>

        {/* Desktop links */}
        <div className="flex gap-6 items-center max-md:hidden">
          {/* Category links */}
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              style={{ fontSize: 13, fontWeight: 600, color: "var(--color-body-light)", textDecoration: "none", transition: "color 0.2s" }}
            >
              {cat.label}
            </Link>
          ))}

          {/* Separator */}
          <span style={{ width: 1, height: 16, background: "var(--color-border)" }} />

          {/* Page links */}
          <a href="#features" style={{ fontSize: 13, fontWeight: 500, color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}>
            特徴
          </a>
          <a href="#faq" style={{ fontSize: 13, fontWeight: 500, color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}>
            FAQ
          </a>

          {/* CTA */}
          <Link
            href="/sonota"
            style={{
              padding: "10px 24px",
              background: "var(--color-accent)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
              borderRadius: 9999,
              transition: "background 0.2s",
              boxShadow: "0 2px 8px rgba(var(--accent-rgb), 0.2)",
            }}
          >
            タイプ診断
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div
          className="hidden max-md:!flex flex-col"
          style={{ gap: 5, padding: 8, cursor: "pointer", zIndex: 101, minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" }}
          onClick={toggleMenu}
        >
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(3px, 4px)" : "none" }} />
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: 20, height: 2, background: "var(--color-primary)", borderRadius: 1, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(3px, -4px)" : "none" }} />
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div style={{ position: "fixed", top: 64, left: 0, right: 0, bottom: 0, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)", padding: "32px var(--gutter)", zIndex: 99, display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Category section */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: 4, paddingLeft: 4 }}>
              カテゴリ
            </div>
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={closeMenu}
                style={{ fontSize: 17, fontWeight: 600, color: "var(--color-primary)", textDecoration: "none", padding: "12px 16px", borderRadius: 12, transition: "background 0.2s" }}
              >
                {cat.label}
              </Link>
            ))}

            <div style={{ height: 1, background: "var(--color-border)", margin: "12px 0" }} />

            {/* Page section */}
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", letterSpacing: "0.1em", marginBottom: 4, paddingLeft: 4 }}>
              このページ
            </div>
            {[
              { href: "#flow", label: "診断の流れ" },
              { href: "#types", label: "4タイプ" },
              { href: "#features", label: "特徴" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ fontSize: 17, fontWeight: 500, color: "var(--color-body-light)", textDecoration: "none", padding: "12px 16px", borderRadius: 12 }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ height: 1, background: "var(--color-border)", margin: "12px 0" }} />

            {/* CTA */}
            <Link
              href="/sonota"
              onClick={closeMenu}
              className="btn-primary"
              style={{ justifyContent: "center", marginTop: 8 }}
            >
              タイプ診断を受ける
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
