const features = [
  {
    num: "01",
    title: "3分で完了",
    desc: "通学中のスキマ時間にサクッと診断。長いアンケートは不要です。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <circle cx="24" cy="24" r="18" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" />
        <path d="M24 14v10l7 4" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "完全無料・登録不要",
    desc: "診断からアクション提案まで全て無料。メールアドレスの登録も不要。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <path d="M24 4l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" strokeLinejoin="round" />
        <path d="M16 36h16M18 42h12" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "結果はその場ですぐ",
    desc: "回答後すぐにあなたのタイプと行動プランを表示。待つ必要なし。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <path d="M24 6v8" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 24h8M32 24h8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <circle cx="24" cy="26" r="14" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" />
        <path d="M18 26l4 4 8-8" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "診断で終わらない",
    desc: "実際のプロジェクトに参加してスキルと実績を積むことができます。",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 40, height: 40 }}>
        <path d="M8 40l10-14 8 6 14-22" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 10h8v8" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="40" r="3" fill="var(--color-accent)" opacity="0.3" />
        <circle cx="18" cy="26" r="3" fill="var(--color-accent)" opacity="0.3" />
        <circle cx="26" cy="32" r="3" fill="var(--color-accent)" opacity="0.3" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="section-spacing section-alt" id="features">
      <div className="container-inner">
        <div className="reveal">
          <h2 className="section-heading">KAIWAIの特徴</h2>
          <p className="section-sub">手軽で、無料で、すぐわかる。しかも診断で終わらない。</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="max-md:!grid-cols-1">
          {features.map((f, i) => (
            <div
              key={f.num}
              className={`reveal reveal-delay-${(i % 2) + 1}${i % 2 === 0 ? " max-md:!border-r-0" : ""}`}
              style={{
                padding: "36px 32px",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                borderRight: i % 2 === 0 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div className="icon-box">
                {f.icon}
              </div>
              <div>
                <div className="badge" style={{ marginBottom: 4, fontSize: 11, padding: "2px 8px" }}>
                  {f.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-body-light)", lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
