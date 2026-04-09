import Link from "next/link";

const portfolioSteps = [
  {
    num: "1",
    title: "経験を棚卸しする",
    desc: "プロジェクトで何をしたか、どんな役割を担ったか、具体的に振り返ります。",
    prompt: "どのプロジェクトに参加した？ あなたの役割は？ 何を担当した？",
  },
  {
    num: "2",
    title: "数字で成果を記録する",
    desc: "フォロワー増加数、PV数、イベント参加者数など、測定できる成果をまとめます。",
    prompt: "Before → After で変化した数字は？ 期間は？",
  },
  {
    num: "3",
    title: "困難と工夫を言語化する",
    desc: "ぶつかった壁と、それをどう乗り越えたか。ここがガクチカの核心です。",
    prompt: "一番大変だったことは？ どう解決した？ 何を学んだ？",
  },
  {
    num: "4",
    title: "STAR形式でまとめる",
    desc: "Situation（状況）→ Task（課題）→ Action（行動）→ Result（結果）の4段階で文章化。",
    prompt: "面接官に30秒で伝えるなら、どう話す？",
  },
  {
    num: "5",
    title: "成果物を見せられる形にする",
    desc: "制作物のスクリーンショット、URLリンク、レポートなどをポートフォリオページにまとめます。",
    prompt: "一目で「こんなことやりました」とわかる見せ方は？",
  },
];

const examples = [
  {
    title: "SNS運用のガクチカ例",
    text: "大学2年からInstagramの企業アカウント運用に携わり、3ヶ月でフォロワーを200名から1,500名に増加させました。投稿企画・デザイン・分析を担当し、エンゲージメント率を2.1%から4.8%に改善。数字を基に仮説検証を繰り返す習慣が身につきました。",
  },
  {
    title: "イベント運営のガクチカ例",
    text: "50名規模の学生交流イベントを企画から運営まで担当。集客はSNSとDMで行い、目標の40名を上回る52名が参加。当日の進行トラブル（会場の音響不具合）にも即座に対応し、参加者満足度は4.6/5.0でした。",
  },
];

export default function GakuchikaPortfolioPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/gakuchika" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ガクチカに戻る
        </Link>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>
            ガクチカを仕上げる
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
            5ステップで就活で使えるポートフォリオに
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {portfolioSteps.map((step) => (
            <div key={step.num} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "20px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: "rgba(255,107,53,0.1)", border: "2px solid rgba(255,107,53,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "var(--color-accent)",
                  flexShrink: 0,
                }}>
                  {step.num}
                </div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 17, color: "var(--color-primary)" }}>{step.title}</h2>
              </div>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 12 }}>{step.desc}</p>
              <div style={{ background: "var(--color-warm)", borderRadius: 10, padding: "12px 14px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", marginBottom: 4 }}>考えてみよう</div>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 }}>{step.prompt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Example section */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20, color: "var(--color-primary)", marginBottom: 20, textAlign: "center" }}>
            ガクチカ文章の例
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {examples.map((ex) => (
              <div key={ex.title} style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: "20px",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 9999, padding: "3px 12px", display: "inline-block", marginBottom: 12 }}>
                  {ex.title}
                </div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.85, fontFamily: "var(--font-serif)", margin: 0 }}>
                  {ex.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/gakuchika/projects" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "14px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(255,107,53,0.25)",
          }}>
            プロジェクトに参加する
            <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18 }}>
              <path d="M7 4l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>
            まだプロジェクトに参加していない方はこちら
          </p>
        </div>
      </div>
    </div>
  );
}
