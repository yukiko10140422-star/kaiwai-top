import Link from "next/link";

const supports = [
  { title: "SNS運用テンプレート", desc: "投稿カレンダー・キャプション例文・ハッシュタグリストを無料提供。", icon: "📱" },
  { title: "募集ポスター制作", desc: "新入生勧誘用のポスター・バナーをテンプレートから作成できます。", icon: "🖼️" },
  { title: "募集文章テンプレート", desc: "Twitter/Instagram/掲示板用の募集文テンプレートをそのまま使えます。", icon: "✏️" },
  { title: "イベント告知支援", desc: "KAIWAIのSNSアカウントでイベント情報を拡散します。", icon: "📢" },
];

const steps = [
  { title: "フォームで申請", desc: "サークル名・活動内容・サポートしてほしいことを教えてください。" },
  { title: "ヒアリング（15分）", desc: "オンラインで現状の課題と目標を確認します。" },
  { title: "サポート開始", desc: "テンプレート提供・SNS拡散・素材制作を実施します。" },
];

export default function CirclePromotePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/circle" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          サークルに戻る
        </Link>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>集客・宣伝サポート</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>サークルの集客を無料でサポートします</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 40 }}>
          {supports.map((s) => (
            <div key={s.title} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "18px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-primary)", marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20, color: "var(--color-primary)", marginBottom: 16, textAlign: "center" }}>サポートの流れ</h2>
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
            サポートを申請する
          </a>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>完全無料・審査なし</p>
        </div>
      </div>
    </div>
  );
}
