import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

const projects = [
  {
    title: "SNS運用",
    desc: "Instagram・X・TikTokのアカウント運用。投稿企画、コンテンツ作成、フォロワー分析まで一貫して経験できます。",
    tasks: ["投稿企画・下書き", "画像・動画素材の作成", "DM対応・フォロワー獲得"],
    difficulty: "初心者OK",
    time: "週3〜5時間",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="6" y="6" width="28" height="28" rx="7" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
        <circle cx="20" cy="20" r="7" stroke="var(--color-accent)" strokeWidth="2" />
        <circle cx="30" cy="10" r="2" fill="var(--color-accent)" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Web制作",
    desc: "LP・サービスサイトの制作。デザイン、コーディング、公開までチームで取り組みます。",
    tasks: ["デザインカンプ作成", "HTML/CSS コーディング", "レスポンシブ対応・テスト"],
    difficulty: "基礎知識あると◎",
    time: "週5〜8時間",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="4" y="8" width="32" height="20" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
        <path d="M4 14h32" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M16 34h8M20 28v6" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "コンテンツ制作",
    desc: "動画編集、記事ライティング、グラフィックデザイン。クリエイティブなスキルを実践で磨きます。",
    tasks: ["企画・構成案の作成", "撮影・編集・デザイン", "レビュー・修正・公開"],
    difficulty: "初心者OK",
    time: "週3〜5時間",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
        <path d="M16 14l10 6-10 6z" fill="var(--color-accent)" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "イベント運営",
    desc: "企画立案から集客、当日進行、振り返りまで。マネジメント経験が積めます。",
    tasks: ["企画書作成・会場手配", "集客・告知・SNS連携", "当日進行・記録・振り返り"],
    difficulty: "初心者OK",
    time: "イベント前後に集中",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <rect x="6" y="10" width="28" height="24" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
        <path d="M6 18h28" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M14 6v8M26 6v8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "企画・リサーチ",
    desc: "市場調査、競合分析、ビジネスプラン作成。企画力と分析力を身につけます。",
    tasks: ["リサーチ・データ収集", "分析レポート作成", "企画書・プレゼン資料"],
    difficulty: "初心者OK",
    time: "週3〜5時間",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <circle cx="18" cy="18" r="10" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
        <path d="M26 26l8 8" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "営業・集客",
    desc: "営業リスト作成、メールアポ、オンライン営業。ビジネスの最前線を体験します。",
    tasks: ["ターゲットリスト作成", "メール・DM営業", "フォローアップ・商談同席"],
    difficulty: "コミュ力あると◎",
    time: "週3〜5時間",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 32, height: 32 }}>
        <path d="M20 4l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" strokeLinejoin="round" />
        <path d="M12 32h16M14 36h12" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function GakuchikaProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <Breadcrumb items={[
        { label: "ガクチカ", href: "/gakuchika" },
        { label: "プロジェクト一覧" },
      ]} />

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>
            参加できるプロジェクト
          </h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
            興味のある分野を選んで詳細を確認してください。複数参加も可能です。
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {projects.map((pj) => (
            <div key={pj.title} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: 20,
              padding: "24px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,107,53,0.04)", border: "1px solid rgba(255,107,53,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {pj.icon}
                </div>
                <div>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)" }}>{pj.title}</h2>
                  <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 9999, padding: "2px 10px" }}>{pj.difficulty}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted)", background: "var(--color-bg)", borderRadius: 9999, padding: "2px 10px" }}>{pj.time}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 16 }}>{pj.desc}</p>

              <div style={{ background: "var(--color-warm)", borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8, letterSpacing: "0.04em" }}>担当できるタスク例</div>
                {pj.tasks.map((task) => (
                  <div key={task} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                      <path d="M4 8l3 3 5-5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, color: "#555" }}>{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/gakuchika/flow" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "14px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(255,107,53,0.25)",
          }}>
            参加の流れを見る
            <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18 }}>
              <path d="M7 4l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
