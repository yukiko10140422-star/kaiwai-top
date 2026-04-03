import Link from "next/link";

const categories = [
  {
    id: "it",
    label: "IT・デジタル系",
    icon: "💻",
    desc: "プログラミング・データ・Webに興味がある人向け",
    qualifications: ["ITパスポート", "基本情報技術者", "MOS", "Webデザイン技能検定"],
    career: "エンジニア・デザイナー・DX推進",
  },
  {
    id: "business",
    label: "ビジネス・経営系",
    icon: "📊",
    desc: "経営・会計・マーケティングに興味がある人向け",
    qualifications: ["日商簿記", "中小企業診断士", "ビジネス実務法務", "マーケティング検定"],
    career: "経営企画・コンサル・営業",
  },
  {
    id: "finance",
    label: "金融・保険系",
    icon: "💰",
    desc: "お金の仕組みや投資・保険に興味がある人向け",
    qualifications: ["FP技能士", "証券外務員", "銀行業務検定", "損害保険募集人"],
    career: "銀行・証券・保険・ファイナンシャルプランナー",
  },
  {
    id: "english",
    label: "語学・国際系",
    icon: "🌍",
    desc: "英語・海外・グローバルに興味がある人向け",
    qualifications: ["TOEIC", "英検", "TOEFL", "中国語検定"],
    career: "外資系・商社・海外事業",
  },
  {
    id: "real-estate",
    label: "不動産・建築系",
    icon: "🏠",
    desc: "街づくり・建物・不動産に興味がある人向け",
    qualifications: ["宅地建物取引士", "管理業務主任者", "建築士", "インテリアコーディネーター"],
    career: "不動産・建設・住宅メーカー",
  },
  {
    id: "welfare",
    label: "医療・福祉系",
    icon: "🏥",
    desc: "人の健康・福祉・介護に興味がある人向け",
    qualifications: ["介護福祉士", "社会福祉士", "医療事務", "登録販売者"],
    career: "医療機関・介護施設・福祉事業所",
  },
];

export default function InterestPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px", display: "flex", alignItems: "center" }}>
        <Link href="/shikaku" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          資格トップへ
        </Link>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 20px" }}>
        {/* Title */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 8 }}>INTEREST</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 26, color: "var(--color-primary)", lineHeight: 1.3 }}>
            興味別分類
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", marginTop: 8, lineHeight: 1.7 }}>
            あなたの「好き」や「気になること」から、合う資格を探そう。
          </p>
        </div>

        {/* Category cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {categories.map((cat) => (
            <div key={cat.id} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "20px 18px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ fontSize: 24 }}>{cat.icon}</span>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 16, color: "var(--color-primary)" }}>
                  {cat.label}
                </h2>
              </div>
              <p style={{ fontSize: 13, color: "#666", marginBottom: 12, lineHeight: 1.7 }}>
                {cat.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                {cat.qualifications.map((q) => (
                  <span key={q} style={{
                    fontSize: 11, fontWeight: 600,
                    padding: "3px 10px", borderRadius: 100,
                    background: "rgba(var(--accent-rgb), 0.08)", color: "var(--color-accent)",
                  }}>
                    {q}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: 12, color: "var(--color-muted)" }}>
                🎯 目指せる職種: {cat.career}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32, padding: "24px 20px", background: "var(--color-warm)", borderRadius: 16, textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
            目標が決まったら学習計画を立てよう
          </p>
          <Link href="/shikaku/plan" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "12px 24px", borderRadius: 100,
            background: "var(--color-accent)", color: "#fff",
            fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 16px rgba(255,107,53,0.2)",
          }}>
            学習計画を作る
            <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
