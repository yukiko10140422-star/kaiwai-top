import Link from "next/link";

export default function ShikakuPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          もどる
        </Link>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px" }}>
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "10px 28px", borderRadius: 100,
            fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20,
            marginBottom: 20,
            boxShadow: "0 4px 20px rgba(255,107,53,0.3)",
          }}>
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="rgba(255,255,255,0.9)" />
            </svg>
            資格サポート
          </div>
          <p style={{ fontSize: 16, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
            あなたの状況を教えてください
          </p>
          <p style={{ fontSize: 14, color: "var(--color-muted)" }}>
            状況に合ったサポートを案内します
          </p>
        </div>

        {/* 2 choices */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* 決まっている */}
          <Link href="/shikaku/plan" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-surface)",
              border: "2px solid var(--color-border)",
              borderRadius: 20,
              padding: "28px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              cursor: "pointer",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                background: "rgba(var(--accent-rgb), 0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28,
              }}>
                ✅
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>
                  取りたい資格は決まっている
                </div>
                <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  学習計画を一緒に立てましょう
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          {/* まだ決まっていない */}
          <Link href="/shikaku/quiz" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-accent)",
              borderRadius: 20,
              padding: "28px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(255,107,53,0.3)",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28,
              }}>
                🤔
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6 }}>
                  まだ決まっていない
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                  5問の診断で向いている資格を見つけよう
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
