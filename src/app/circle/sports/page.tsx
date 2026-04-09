import Link from "next/link";

const sports = [
  { name: "フットサル", schedule: "毎週日曜 10:00-12:00", location: "市民体育館", level: "初心者OK", members: "15名" },
  { name: "バスケットボール", schedule: "毎週水曜 19:00-21:00", location: "大学体育館", level: "経験者優遇", members: "20名" },
  { name: "バドミントン", schedule: "毎週土曜 14:00-16:00", location: "市民体育館", level: "初心者OK", members: "12名" },
  { name: "テニス", schedule: "毎週火・木 17:00-19:00", location: "大学テニスコート", level: "初心者OK", members: "18名" },
  { name: "バレーボール", schedule: "隔週土曜 13:00-15:00", location: "市民体育館", level: "初心者OK", members: "10名" },
  { name: "ランニング", schedule: "毎週日曜 7:00-8:30", location: "公園・河川敷", level: "誰でも参加可", members: "8名" },
  { name: "ヨガ・ストレッチ", schedule: "毎週金曜 12:00-13:00", location: "大学教室", level: "初心者OK", members: "12名" },
  { name: "ボルダリング", schedule: "月2回 土曜 15:00-17:00", location: "クライミングジム", level: "初心者OK", members: "6名" },
];

export default function CircleSportsPage() {
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
          <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24, color: "var(--color-primary)", marginBottom: 8 }}>スポーツ一覧</h1>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>気軽に参加できるスポーツ活動の日程と場所</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sports.map((s) => (
            <div key={s.name} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 14, padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <h2 style={{ fontWeight: 700, fontSize: 17, color: "var(--color-primary)" }}>{s.name}</h2>
                <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", background: "rgba(255,107,53,0.08)", borderRadius: 9999, padding: "3px 10px" }}>{s.level}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
                  <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                    <rect x="2" y="4" width="12" height="10" rx="2" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M5 2v4M11 2v4M2 8h12" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {s.schedule}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
                  <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                    <path d="M8 2C5.2 2 3 4.7 3 6.5 3 10.5 8 14 8 14s5-3.5 5-7.5C13 4.7 10.8 2 8 2z" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <circle cx="8" cy="6.5" r="1.5" fill="var(--color-accent)" opacity="0.5" />
                  </svg>
                  {s.location}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#555" }}>
                  <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                    <circle cx="6" cy="6" r="3" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <circle cx="10" cy="6" r="3" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <path d="M2 14c0-2.5 2-4 4-4h4c2 0 4 1.5 4 4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  現在 {s.members}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "#fff", padding: "14px 32px", borderRadius: 9999, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 14px rgba(255,107,53,0.25)" }}>
            参加を申し込む
          </a>
          <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 12 }}>参加無料・見学だけでもOK</p>
        </div>
      </div>
    </div>
  );
}
