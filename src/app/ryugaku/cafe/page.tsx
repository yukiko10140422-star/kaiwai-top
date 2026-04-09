import Link from "next/link";

const features = [
  { title: "週1回・90分", desc: "毎週決まった時間に気軽に参加。オンラインでもオフラインでもOK。" },
  { title: "レベル不問", desc: "「Hello」しか言えなくても大丈夫。グループで助け合いながら進めます。" },
  { title: "テーマ制トーク", desc: "毎回テーマが決まっているので話題に困りません。趣味・旅行・将来の夢など。" },
  { title: "留学経験者と話せる", desc: "実際に留学した先輩が参加。リアルな体験談を直接聞けます。" },
];

const schedule = [
  { day: "毎週火曜", time: "19:00-20:30", format: "オンライン（Zoom）", level: "初心者OK" },
  { day: "毎週土曜", time: "14:00-15:30", format: "オフライン（渋谷カフェ）", level: "中級者向け" },
];

export default function RyugakuCafePage() {
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

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>英語カフェ</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>気軽に英語を使えるコミュニティ。参加無料。</p>
        </div>

        {/* Features */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
          {features.map((f) => (
            <div key={f.title} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "18px" }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-primary)", marginBottom: 6 }}>{f.title}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20, color: "var(--color-primary)", marginBottom: 16, textAlign: "center" }}>開催スケジュール</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {schedule.map((s) => (
            <div key={s.day} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "20px", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,107,53,0.06)", border: "1px solid rgba(255,107,53,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 32 32" fill="none" style={{ width: 24, height: 24 }}>
                  <rect x="4" y="8" width="24" height="20" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.06)" />
                  <path d="M4 14h24" stroke="var(--color-accent)" strokeWidth="1.5" />
                  <path d="M10 4v8M22 4v8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-primary)", marginBottom: 4 }}>{s.day} {s.time}</div>
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ fontSize: 11, color: "#555", background: "var(--color-bg)", borderRadius: 8, padding: "2px 8px" }}>{s.format}</span>
                  <span style={{ fontSize: 11, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 8, padding: "2px 8px" }}>{s.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 14px rgba(255,107,53,0.25)" }}>
            次回の英語カフェに参加する
          </a>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>参加無料・予約不要（オフラインは事前連絡推奨）</p>
        </div>
      </div>
    </div>
  );
}
