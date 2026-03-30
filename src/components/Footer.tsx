export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", color: "#fff", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 900 }}>
          <span style={{ color: "#fff" }}>KAI</span>
          <span style={{ color: "var(--color-accent)" }}>WAI</span>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["利用規約", "プライバシー", "お問い合わせ"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
            >
              {link}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>&copy; 2026 KAIWAI</p>
      </div>
    </footer>
  );
}
