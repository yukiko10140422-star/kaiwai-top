import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "試験日を決める",
    desc: "まず受験日を決めることが最初の一歩。目標の試験日から逆算してスケジュールを組みます。",
    tip: "試験日は公式サイトで確認しよう",
  },
  {
    num: "02",
    title: "学習時間を把握する",
    desc: "試験日まで何日あるか計算し、1日あたりの学習時間を決めます。無理のない量から始めましょう。",
    tip: "1日30分〜1時間が続けやすい",
  },
  {
    num: "03",
    title: "テキストと問題集を選ぶ",
    desc: "資格に合ったテキストを1冊決め、ひたすらやり込むのがコツ。多すぎると続かないので1冊に絞ること。",
    tip: "「みんなが欲しかった」シリーズが人気",
  },
  {
    num: "04",
    title: "週ごとの目標を立てる",
    desc: "「今週は第1章まで終わらせる」など、週単位で進捗目標を設定します。小さな達成感が継続のカギ。",
    tip: "日曜日に翌週の計画を見直そう",
  },
  {
    num: "05",
    title: "過去問を繰り返す",
    desc: "試験1ヶ月前からは過去問中心に切り替え。同じ問題を繰り返すことで合格ラインが見えてきます。",
    tip: "過去3年分を3周するのが目安",
  },
];

const templates = [
  {
    label: "1ヶ月プラン",
    target: "ITパスポート・MOS",
    schedule: "毎日1〜2時間 × 30日",
    weekly: ["Week1: テキスト1周目（基礎）", "Week2: テキスト2周目（重点復習）", "Week3: 過去問1回目", "Week4: 過去問2〜3回目・最終確認"],
  },
  {
    label: "3ヶ月プラン",
    target: "簿記3級・FP3級",
    schedule: "毎日1時間 × 90日",
    weekly: ["Month1: テキスト全体把握", "Month2: 問題演習・弱点発見", "Month3: 過去問・直前対策"],
  },
  {
    label: "6ヶ月プラン",
    target: "TOEIC・宅建",
    schedule: "毎日1〜2時間 × 180日",
    weekly: ["Month1〜2: 基礎固め", "Month3〜4: 実践演習", "Month5: 弱点克服", "Month6: 模擬試験・総まとめ"],
  },
];

export default function PlanPage() {
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
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 8 }}>PLAN</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 26, color: "var(--color-primary)", lineHeight: 1.3 }}>
            学習計画テンプレ
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", marginTop: 8, lineHeight: 1.7 }}>
            試験日から逆算して、無理なく続く計画を作ろう。
          </p>
        </div>

        {/* Steps */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 17, marginBottom: 16, color: "var(--color-primary)" }}>
            計画の立て方 5ステップ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                padding: "16px 16px",
                display: "flex",
                gap: 14,
              }}>
                <div style={{
                  flexShrink: 0, width: 36, height: 36,
                  borderRadius: "50%", background: "rgba(var(--accent-rgb), 0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 14, color: "var(--color-accent)",
                }}>
                  {step.num}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-primary)", marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 6 }}>
                    {step.desc}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-accent)", fontWeight: 600 }}>
                    💡 {step.tip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Templates */}
        <div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 17, marginBottom: 16, color: "var(--color-primary)" }}>
            期間別テンプレート
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {templates.map((tmpl) => (
              <div key={tmpl.label} style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: "20px 18px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{
                    fontSize: 13, fontWeight: 700,
                    padding: "4px 14px", borderRadius: 100,
                    background: "var(--color-accent)", color: "#fff",
                  }}>
                    {tmpl.label}
                  </span>
                  <span style={{ fontSize: 12, color: "var(--color-muted)" }}>対象: {tmpl.target}</span>
                </div>
                <div style={{ fontSize: 13, color: "#666", marginBottom: 12 }}>
                  📅 {tmpl.schedule}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {tmpl.weekly.map((w) => (
                    <div key={w} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--color-primary)" }}>
                      <span style={{ color: "var(--color-accent)", fontWeight: 700, flexShrink: 0 }}>→</span>
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32, padding: "24px 20px", background: "var(--color-warm)", borderRadius: 16, textAlign: "center" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "var(--color-primary)", marginBottom: 4 }}>
            まずは診断で自分のタイプを知ろう
          </p>
          <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 16, lineHeight: 1.6 }}>
            診断結果に合った資格ルートを提案します
          </p>
          <Link href="/" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "12px 24px", borderRadius: 100,
            background: "var(--color-accent)", color: "#fff",
            fontWeight: 700, fontSize: 14,
            boxShadow: "0 4px 16px rgba(255,107,53,0.2)",
          }}>
            診断してみる
            <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
