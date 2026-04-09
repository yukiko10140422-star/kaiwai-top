import Link from "next/link";

export default function RyugakuPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          もどる
        </Link>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px" }}>
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
              <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
              <path d="M3 12h18M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9M12 3c-2 2.5-3 5.5-3 9s1 6.5 3 9" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
            </svg>
            留学サポート
          </div>
          <p style={{ fontSize: 16, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
            あなたの状況を教えてください
          </p>
          <p style={{ fontSize: 14, color: "var(--color-muted)" }}>
            段階に合ったサポートを案内します
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Link href="/ryugaku/prepare" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 20, padding: "28px 24px",
              display: "flex", alignItems: "center", gap: 20,
            }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                  <path d="M6 22V10a2 2 0 012-2h16a2 2 0 012 2v12" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
                  <path d="M10 14h12M10 18h8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>
                  まず英語力をつけたい
                </div>
                <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  TOEIC対策・英語学習の進め方
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          <Link href="/ryugaku/countries" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-surface)", border: "2px solid var(--color-border)", borderRadius: 20, padding: "28px 24px",
              display: "flex", alignItems: "center", gap: 20,
            }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: "rgba(var(--accent-rgb), 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                  <circle cx="16" cy="16" r="12" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
                  <path d="M4 16h24M16 4c3 3 4.5 7 4.5 12s-1.5 9-4.5 12M16 4c-3 3-4.5 7-4.5 12s1.5 9 4.5 12" stroke="var(--color-accent)" strokeWidth="1.5" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 6 }}>
                  留学先を決めたい
                </div>
                <div style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  国選び・期間・予算・エージェント
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          <Link href="/ryugaku/cafe" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-accent)", borderRadius: 20, padding: "28px 24px",
              display: "flex", alignItems: "center", gap: 20,
              boxShadow: "0 8px 24px rgba(255,107,53,0.3)",
            }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", flexShrink: 0, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
                  <path d="M6 10h16v10a4 4 0 01-4 4h-8a4 4 0 01-4-4V10z" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                  <path d="M22 14h2a3 3 0 010 6h-2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
                  <path d="M10 6v4M14 4v6M18 6v4" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6 }}>
                  英語カフェに参加したい
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                  気軽に英語を使えるコミュニティ
                </div>
              </div>
              <svg viewBox="0 0 24 24" fill="none" style={{ width: 22, height: 22, flexShrink: 0 }}>
                <path d="M9 18l6-6-6-6" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.8 }}>
            留学は「いつか」ではなく「今日から準備」。<br />
            英語学習から国選び、エージェント紹介まで<br />
            段階的にサポートします。
          </p>
        </div>
      </div>
    </div>
  );
}
