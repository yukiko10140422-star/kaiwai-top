import Link from "next/link";

export default function GakuchikaPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Hero banner with photo */}
      <div className="hero-banner" style={{ padding: "0" }}>
        <div className="hero-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=600&fit=crop"
            alt="プロジェクトに取り組む学生チーム"
          />
          <div className="hero-banner-overlay" />
        </div>
        <div className="hero-banner-content">
          {/* Back link */}
          <div style={{ padding: "16px 24px" }}>
            <Link href="/" className="page-back" style={{ color: "rgba(255,255,255,0.6)" }}>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              もどる
            </Link>
          </div>

          <div style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px 64px", textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-accent)", color: "#fff",
              padding: "10px 28px", borderRadius: 100,
              fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20,
              marginBottom: 20,
              boxShadow: "0 4px 20px rgba(255,107,53,0.3)",
            }}>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none" />
                <path d="M3 10h18" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                <path d="M8 5V3M16 5V3" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              ガクチカ
            </div>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              あなたの状況を教えてください
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
              状況に合ったサポートを案内します
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 20px 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Link href="/gakuchika/projects" className="link-card">
            <div className="icon-circle">
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <circle cx="16" cy="16" r="12" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
                <path d="M10 16l4 4 8-8" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>
                やりたいことが決まっている
              </div>
              <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                プロジェクト一覧から参加先を探す
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link href="/gakuchika/flow" className="link-card">
            <div className="icon-circle">
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <path d="M8 8h16v4H8zM8 16h12v4H8zM8 24h8v4H8z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" rx="2" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>
                参加の流れを知りたい
              </div>
              <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                ヒアリング → 審査 → 参加の3ステップ
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link href="/gakuchika/portfolio" className="link-card link-card-accent">
            <div className="icon-circle-white" style={{ width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "rgba(255,255,255,0.2)" }}>
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <path d="M6 6h20v20H6z" stroke="rgba(255,255,255,0.8)" strokeWidth="2" rx="3" />
                <path d="M6 12h20" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                <path d="M12 6v20" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
                <path d="M16 18l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6 }}>
                実績をポートフォリオにまとめたい
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                就活で使えるガクチカに仕上げる
              </div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.8 }}>
            ガクチカとは「学生時代に力を入れたこと」。<br />
            SNS運用・Web制作・イベント企画など、<br />
            実務プロジェクトに参加して経験と実績を積めます。
          </p>
        </div>
      </div>
    </div>
  );
}
