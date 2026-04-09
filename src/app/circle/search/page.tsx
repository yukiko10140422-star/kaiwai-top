import Link from "next/link";

const categories = [
  {
    type: "文化系",
    circles: [
      { name: "軽音楽部", tags: ["音楽", "バンド"], desc: "初心者歓迎。月2回ライブあり。" },
      { name: "写真サークル", tags: ["アート", "屋外"], desc: "撮影会・展示・SNS発信を活動。" },
      { name: "プログラミング研究会", tags: ["IT", "ものづくり"], desc: "アプリ開発・ハッカソン参加。" },
      { name: "映画研究会", tags: ["映画", "制作"], desc: "鑑賞会・短編制作・映画祭応募。" },
      { name: "ボランティアサークル", tags: ["社会貢献", "地域"], desc: "地域イベント支援・子ども食堂運営。" },
    ],
  },
  {
    type: "体育会系",
    circles: [
      { name: "フットサル", tags: ["球技", "チーム"], desc: "週1〜2回活動。大会出場あり。" },
      { name: "テニス部", tags: ["球技", "個人/ダブルス"], desc: "初心者から上級者まで。合宿あり。" },
      { name: "ダンスサークル", tags: ["パフォーマンス", "音楽"], desc: "K-POP・ストリート・コンテンポラリー。" },
      { name: "ランニング部", tags: ["個人", "健康"], desc: "マラソン大会出場、朝活ランあり。" },
      { name: "バスケットボール", tags: ["球技", "チーム"], desc: "週2回体育館で練習。リーグ戦参加。" },
    ],
  },
];

export default function CircleSearchPage() {
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

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>サークルを探す</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>興味のあるジャンルからサークルを見つけよう</p>
        </div>

        {categories.map((cat) => (
          <div key={cat.type} style={{ marginBottom: 36 }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 18, color: "var(--color-primary)", marginBottom: 14, paddingBottom: 10, borderBottom: "2px solid rgba(255,107,53,0.15)" }}>{cat.type}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {cat.circles.map((c) => (
                <div key={c.name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--color-primary)" }}>{c.name}</h3>
                    <div style={{ display: "flex", gap: 4 }}>
                      {c.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 10, fontWeight: 600, color: "var(--color-accent)", background: "rgba(255,107,53,0.06)", borderRadius: 9999, padding: "2px 8px", border: "1px solid rgba(255,107,53,0.1)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
            掲載されていないサークルの情報提供も受け付けています。<br />
            <a href="#" style={{ color: "var(--color-accent)", textDecoration: "underline" }}>サークル情報を登録する</a>
          </p>
        </div>
      </div>
    </div>
  );
}
