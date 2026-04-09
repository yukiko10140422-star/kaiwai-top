import Link from "next/link";

const siteMap = [
  {
    title: "ガクチカ",
    links: [
      { label: "プロジェクト一覧", href: "/gakuchika/projects" },
      { label: "参加の流れ", href: "/gakuchika/flow" },
      { label: "ポートフォリオ作成", href: "/gakuchika/portfolio" },
    ],
  },
  {
    title: "留学",
    links: [
      { label: "英語学習プラン", href: "/ryugaku/prepare" },
      { label: "国選びガイド", href: "/ryugaku/countries" },
      { label: "英語カフェ", href: "/ryugaku/cafe" },
    ],
  },
  {
    title: "資格",
    links: [
      { label: "資格診断", href: "/shikaku/quiz" },
      { label: "人気資格一覧", href: "/shikaku/popular" },
      { label: "学習計画", href: "/shikaku/plan" },
    ],
  },
  {
    title: "サークル",
    links: [
      { label: "サークル検索", href: "/circle/search" },
      { label: "スポーツ一覧", href: "/circle/sports" },
      { label: "集客支援", href: "/circle/promote" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", color: "#fff", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Sitemap */}
      <div className="container-inner" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr repeat(4, 1fr)", gap: 32 }} className="max-md:!grid-cols-2 max-md:!gap-y-28">
          {/* Brand */}
          <div className="max-md:col-span-2">
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", fontWeight: 900, marginBottom: 12 }}>
              <span style={{ color: "#fff" }}>KAI</span>
              <span style={{ color: "var(--color-accent)" }}>WAI</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 200 }}>
              「やりたいことが見つからない」を解決する、学生のためのキャリア支援プラットフォーム。
            </p>
            <Link href="/sonota" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, fontSize: 13, fontWeight: 600, color: "var(--color-accent)", textDecoration: "none" }}>
              タイプ診断を受ける →
            </Link>
          </div>

          {/* Category columns */}
          {siteMap.map((cat) => (
            <div key={cat.title}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em", marginBottom: 14 }}>
                {cat.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, padding: "20px 0" }}>
          <div style={{ display: "flex", gap: 24 }}>
            {["利用規約", "プライバシー", "お問い合わせ"].map((link) => (
              <a
                key={link}
                href="#"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              >
                {link}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>&copy; 2026 KAIWAI</p>
        </div>
      </div>
    </footer>
  );
}
