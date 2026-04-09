import Link from "next/link";

const countries = [
  { name: "オーストラリア", period: "1ヶ月〜1年", cost: "月15〜30万円", lang: "英語", features: ["ワーホリ対応", "治安が良い", "多文化環境"], popularity: "人気No.1" },
  { name: "カナダ", period: "1ヶ月〜1年", cost: "月15〜30万円", lang: "英語・仏語", features: ["発音がクリア", "移民に寛容", "都市と自然の両立"], popularity: "人気No.2" },
  { name: "フィリピン", period: "1週間〜3ヶ月", cost: "月8〜15万円", lang: "英語", features: ["マンツーマン授業", "コスパ最強", "短期集中向き"], popularity: "コスパNo.1" },
  { name: "アメリカ", period: "3ヶ月〜1年", cost: "月20〜40万円", lang: "英語", features: ["大学の選択肢が豊富", "キャリアに直結", "文化の最先端"], popularity: "" },
  { name: "イギリス", period: "3ヶ月〜1年", cost: "月20〜35万円", lang: "英語", features: ["歴史ある教育機関", "ヨーロッパ旅行しやすい", "アカデミック"], popularity: "" },
  { name: "韓国", period: "1ヶ月〜1年", cost: "月10〜20万円", lang: "韓国語", features: ["近くて安い", "K-Culture好きに", "短期から可能"], popularity: "" },
];

const steps = [
  { title: "目的を決める", desc: "語学力UP？異文化体験？キャリア？目的で最適な国が変わります。" },
  { title: "期間と予算を決める", desc: "1ヶ月の短期から1年の長期まで。予算は国とプログラムで大きく異なります。" },
  { title: "エージェントに相談", desc: "ビザ、保険、航空券、学校選び。信頼できるエージェントに無料相談できます。" },
];

export default function RyugakuCountriesPage() {
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

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>留学先を選ぶ</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>人気の留学先を比較して、自分に合う国を見つけよう</p>
        </div>

        {/* Country cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
          {countries.map((c) => (
            <div key={c.name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)" }}>{c.name}</h2>
                {c.popularity && <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 9999, padding: "3px 12px" }}>{c.popularity}</span>}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                <span style={{ fontSize: 12, color: "#555", background: "var(--color-bg)", borderRadius: 8, padding: "4px 10px" }}>{c.lang}</span>
                <span style={{ fontSize: 12, color: "#555", background: "var(--color-bg)", borderRadius: 8, padding: "4px 10px" }}>{c.period}</span>
                <span style={{ fontSize: 12, color: "#555", background: "var(--color-bg)", borderRadius: 8, padding: "4px 10px" }}>{c.cost}</span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {c.features.map((f) => (
                  <span key={f} style={{ fontSize: 12, color: "var(--color-accent)", background: "rgba(255,107,53,0.06)", borderRadius: 9999, padding: "3px 10px", border: "1px solid rgba(255,107,53,0.12)" }}>{f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Steps to decide */}
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20, color: "var(--color-primary)", marginBottom: 20, textAlign: "center" }}>国を決めるまでの3ステップ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {steps.map((s, i) => (
            <div key={s.title} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "18px" }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--color-accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-primary)", marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 14px rgba(255,107,53,0.25)" }}>
            エージェントに無料相談する
          </a>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>相談は無料・オンライン完結</p>
        </div>
      </div>
    </div>
  );
}
