import Link from "next/link";

export default function CirclePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div className="hero-banner" style={{ padding: "0" }}>
        <div className="hero-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=600&fit=crop&crop=faces"
            alt="サークル活動中の学生グループ"
          />
          <div className="hero-banner-overlay" />
        </div>
        <div className="hero-banner-content">
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
                <circle cx="9" cy="8" r="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                <circle cx="17" cy="10" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
                <path d="M2 20c0-4 3-7 7-7s7 3 7 7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              サークル
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
          <Link href="/circle/search" className="link-card">
            <div className="icon-circle">
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <circle cx="14" cy="14" r="8" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
                <path d="M20 20l6 6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>サークルを探したい</div>
              <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>文化系・体育会から自分に合うサークルを見つける</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link href="/circle/promote" className="link-card">
            <div className="icon-circle">
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <path d="M8 26V14l8-8 8 8v12" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
                <path d="M4 26h24" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                <path d="M14 26v-6h4v6" stroke="var(--color-accent)" strokeWidth="2" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>既にサークルに所属している</div>
              <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>集客支援・SNS運用・イベント告知をサポート</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link href="/circle/sports" className="link-card link-card-accent">
            <div style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                <circle cx="16" cy="16" r="12" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                <path d="M16 4v24M4 16h24M8 8l16 16M24 8L8 24" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6 }}>スポーツに参加したい</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>スポーツ種目一覧・日程・参加方法</div>
            </div>
            <svg viewBox="0 0 24 24" fill="none" className="link-card-arrow" style={{ width: 22, height: 22 }}>
              <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.8 }}>
            一人で始めなくて大丈夫。<br />
            仲間と一緒に活動するから、続けられる。
          </p>
        </div>
      </div>
    </div>
  );
}
