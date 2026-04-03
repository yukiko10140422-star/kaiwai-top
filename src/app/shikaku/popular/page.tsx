import Link from "next/link";

const qualifications = [
  {
    name: "MOS（Microsoft Office Specialist）",
    category: "IT・パソコン",
    level: "初級〜中級",
    period: "1〜3ヶ月",
    desc: "Word・Excel・PowerPointのスキルを証明。事務・営業職など幅広い就職に有利。",
    merit: "就活の書類選考で評価されやすい",
  },
  {
    name: "TOEIC",
    category: "語学",
    level: "全レベル",
    period: "3〜6ヶ月",
    desc: "英語のビジネス活用力を測る世界標準のテスト。700点以上で就活アピールに使える。",
    merit: "外資系・グローバル企業に強い",
  },
  {
    name: "日商簿記検定",
    category: "ビジネス・経理",
    level: "3級から",
    period: "2〜4ヶ月",
    desc: "お金の流れを理解するための基礎スキル。経理・会計・金融業界への就職に有効。",
    merit: "文系学生でも取りやすく評価が高い",
  },
  {
    name: "FP技能士（ファイナンシャルプランナー）",
    category: "金融・保険",
    level: "3級から",
    period: "3〜4ヶ月",
    desc: "お金の知識全般（税金・保険・年金）を学べる。金融・保険業界への就職に強い。",
    merit: "生活にも役立つ実用的な知識が身につく",
  },
  {
    name: "宅地建物取引士（宅建）",
    category: "不動産",
    level: "中級",
    period: "6ヶ月〜1年",
    desc: "不動産取引の専門資格。不動産・建設業界への就職に強く、取得難易度が高い分評価も高い。",
    merit: "取得すると就活で大きな差別化になる",
  },
  {
    name: "ITパスポート",
    category: "IT・デジタル",
    level: "初級",
    period: "1〜2ヶ月",
    desc: "ITの基礎知識を証明する国家資格。文系・理系問わず全業界で評価される入門資格。",
    merit: "短期間で取りやすくコスパが高い",
  },
];

export default function PopularPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
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
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 8 }}>POPULAR</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 26, color: "var(--color-primary)", lineHeight: 1.3 }}>
            人気資格一覧
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", marginTop: 8, lineHeight: 1.7 }}>
            就活で武器になる資格をピックアップ。自分に合うものを見つけよう。
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {qualifications.map((q) => (
            <div key={q.name} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 16,
              padding: "20px 18px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, gap: 8 }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 15, color: "var(--color-primary)", lineHeight: 1.4 }}>
                  {q.name}
                </h2>
                <span style={{
                  flexShrink: 0, fontSize: 11, fontWeight: 600,
                  padding: "3px 10px", borderRadius: 100,
                  background: "rgba(var(--accent-rgb), 0.08)", color: "var(--color-accent)",
                }}>
                  {q.category}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 12 }}>
                {q.desc}
              </p>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--color-muted)" }}>
                <span>📅 学習期間: {q.period}</span>
                <span>📊 難易度: {q.level}</span>
              </div>
              <div style={{ marginTop: 10, fontSize: 12, fontWeight: 700, color: "var(--color-accent)" }}>
                ✓ {q.merit}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32, padding: "24px 20px", background: "var(--color-warm)", borderRadius: 16, textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
            どの資格が自分に合う？
          </p>
          <Link href="/shikaku/interest" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "12px 24px", borderRadius: 100,
            background: "var(--color-accent)", color: "#fff",
            fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 16px rgba(255,107,53,0.2)",
          }}>
            興味別分類で絞り込む
            <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
