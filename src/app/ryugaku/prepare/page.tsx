import Link from "next/link";

const plans = [
  {
    title: "TOEIC 600点を目指す",
    period: "3ヶ月プラン",
    steps: ["基礎文法の復習（2週間）", "公式問題集 Part 5-7 集中（6週間）", "模試 → 弱点分析 → 再演習（4週間）", "直前対策・時間配分練習（2週間）"],
    target: "留学準備・就活の基礎スコア",
  },
  {
    title: "TOEIC 730点を目指す",
    period: "6ヶ月プラン",
    steps: ["600点レベルの基礎固め（1ヶ月）", "リスニング強化 — Podcast・シャドーイング（2ヶ月）", "長文読解・速読トレーニング（2ヶ月）", "模試3回 → 分析 → 本番（1ヶ月）"],
    target: "海外大学交換留学の目安",
  },
  {
    title: "英検2級を取得する",
    period: "2ヶ月プラン",
    steps: ["語彙・熟語の暗記（毎日30分）", "長文・リスニング問題演習（週3回）", "ライティング練習 — 型を覚える（週2回）", "二次面接対策 — 質問パターン練習"],
    target: "大学入試・推薦の加点",
  },
];

export default function RyugakuPreparePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/ryugaku" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          留学サポートに戻る
        </Link>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>英語力をつける</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>目標に合わせた学習プランを選んでください</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {plans.map((plan) => (
            <div key={plan.title} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)" }}>{plan.title}</h2>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 9999, padding: "3px 12px" }}>{plan.period}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 14 }}>{plan.target}</p>
              <div style={{ background: "var(--color-warm)", borderRadius: 10, padding: "14px 16px" }}>
                {plan.steps.map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: i < plan.steps.length - 1 ? 8 : 0 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,107,53,0.1)", border: "1.5px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 10, color: "var(--color-accent)", flexShrink: 0, marginTop: 1 }}>
                      {i + 1}
                    </div>
                    <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/ryugaku/cafe" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 14px rgba(255,107,53,0.25)" }}>
            英語カフェで実践する
          </Link>
        </div>
      </div>
    </div>
  );
}
