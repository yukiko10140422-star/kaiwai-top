const features = [
  {
    num: "01",
    title: "3分で完了",
    desc: "通学中のスキマ時間にサクッと診断。長いアンケートは不要です。",
  },
  {
    num: "02",
    title: "完全無料・登録不要",
    desc: "診断からアクション提案まで全て無料。メールアドレスの登録も不要。",
  },
  {
    num: "03",
    title: "結果はその場ですぐ",
    desc: "回答後すぐにあなたのタイプと行動プランを表示。待つ必要なし。",
  },
  {
    num: "04",
    title: "診断で終わらない",
    desc: "実際のプロジェクトに参加してスキルと実績を積むことができます。",
  },
];

export default function Features() {
  return (
    <section className="section-spacing" style={{ background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }} id="features">
      <div className="container-inner">
        <h2 className="section-heading">KAIWAIの特徴</h2>
        <p className="section-sub">手軽で、無料で、すぐわかる。しかも診断で終わらない。</p>

        {/* Editorial numbered grid with borders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="max-md:!grid-cols-1">
          {features.map((f, i) => (
            <div
              key={f.num}
              style={{
                padding: "36px 32px",
                borderBottom: "1px solid var(--color-border)",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                borderRight: i % 2 === 0 ? "1px solid var(--color-border)" : "none",
              }}
              className={i % 2 === 0 ? "max-md:!border-r-0" : ""}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 900, color: "var(--color-accent)", lineHeight: 1, flexShrink: 0 }}>
                {f.num}
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
