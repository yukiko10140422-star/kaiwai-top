import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const steps = [
  {
    num: "01",
    title: "ヒアリング",
    desc: "まずはあなたの興味・得意なこと・使える時間を聞かせてください。15分程度のオンライン面談です。",
    details: ["興味のある分野を整理", "週に使える時間を確認", "過去の経験や得意なことをヒアリング"],
    time: "約15分",
  },
  {
    num: "02",
    title: "審査・マッチング",
    desc: "ヒアリング内容をもとに、あなたに合ったプロジェクトとチームをマッチングします。スキルではなくやる気を重視。",
    details: ["スキルではなく意欲を重視", "興味とプロジェクトの相性を判断", "チーム構成を考慮して配置"],
    time: "結果は3日以内",
  },
  {
    num: "03",
    title: "プロジェクト参加",
    desc: "チームに合流して実務スタート。メンターがつくので未経験でも安心です。",
    details: ["チームSlackに招待", "キックオフミーティング", "最初のタスクをアサイン"],
    time: "開始後すぐ",
  },
  {
    num: "04",
    title: "成果・実績化",
    desc: "プロジェクトの成果物をポートフォリオに。数字・エピソードを就活で使える形にまとめます。",
    details: ["成果物の記録・整理", "数値実績（PV数、フォロワー数等）の可視化", "ガクチカ文章の作成支援"],
    time: "プロジェクト終了時",
  },
];

export default function GakuchikaFlowPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <Breadcrumb items={[
        { label: "ガクチカ", href: "/gakuchika" },
        { label: "参加の流れ" },
      ]} />

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>
            参加の流れ
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
            ヒアリングからガクチカ完成まで、4ステップでサポートします
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: "relative", paddingLeft: 48, paddingBottom: i < steps.length - 1 ? 40 : 0 }}>
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", left: 19, top: 40, bottom: 0, width: 2, background: "rgba(255,107,53,0.15)" }} />
              )}

              {/* Step number circle */}
              <div style={{
                position: "absolute", left: 0, top: 0,
                width: 40, height: 40, borderRadius: "50%",
                background: "var(--color-accent)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16,
                boxShadow: "0 4px 12px rgba(255,107,53,0.3)",
              }}>
                {step.num}
              </div>

              {/* Content */}
              <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "20px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)" }}>{step.title}</h2>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", background: "var(--color-bg)", borderRadius: 9999, padding: "3px 10px" }}>{step.time}</span>
                </div>

                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 14 }}>{step.desc}</p>

                <div style={{ background: "var(--color-warm)", borderRadius: 10, padding: "12px 14px" }}>
                  {step.details.map((detail) => (
                    <div key={detail} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                        <path d="M4 8l3 3 5-5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span style={{ fontSize: 13, color: "#555" }}>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "14px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(255,107,53,0.25)",
          }}>
            まずはヒアリングに申し込む
          </a>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>
            無料・15分・オンライン完結
          </p>
        </div>
      </div>
    </div>
  );
}
