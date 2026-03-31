const steps = [
  {
    num: "01",
    title: "5つの質問に答える",
    desc: "直感で選ぶだけ。深く考える必要はありません。所要時間約3分。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}>
        <rect x="14" y="6" width="36" height="48" rx="4" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" />
        <path d="M24 22h16M24 30h16M24 38h10" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="44" cy="44" r="12" fill="var(--color-accent)" />
        <path d="M40 44l3 3 5-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "あなたのタイプがわかる",
    desc: "ガクチカ型・留学型・資格型・サークル型の4タイプに分類されます。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}>
        <circle cx="32" cy="24" r="10" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" />
        <path d="M16 52c0-8.8 7.2-16 16-16s16 7.2 16 16" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" fill="rgba(255,107,53,0.06)" />
        <path d="M38 18l4-4M42 22l4-2M40 28l5 0" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="42" cy="14" r="2" fill="var(--color-accent)" opacity="0.4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "行動プランを受け取る",
    desc: "タイプに合った具体的なアクションリストをお届け。何から始めればいいか、もう迷いません。",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 56 }}>
        <path d="M32 8l6 12h14l-11 9 4 13-13-8-13 8 4-13-11-9h14z" stroke="var(--color-accent)" strokeWidth="2.5" fill="rgba(255,107,53,0.06)" strokeLinejoin="round" />
        <path d="M32 56V42" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 48h16" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Flow() {
  return (
    <section className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }} id="flow">
      <div className="container-inner">
        {/* Editorial split header */}
        <div className="editorial-header">
          <h2 className="editorial-title">
            カンタン<br />3ステップ
          </h2>
          <p className="editorial-sub">
            直感で答えるだけ。むずかしいことは何もありません。迷ったら直感に従ってください。
          </p>
        </div>

        {/* Steps with icons and connecting arrows */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, position: "relative" }} className="max-md:!grid-cols-1">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "32px 28px",
                borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
                textAlign: "center",
                position: "relative",
              }}
              className={i > 0 ? "max-md:!border-l-0 max-md:!border-t max-md:!border-t-[var(--color-border)]" : ""}
            >
              {/* Icon */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,107,53,0.05)", border: "2px solid rgba(255,107,53,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {step.icon}
                </div>
              </div>

              {/* Connecting arrow (desktop only) */}
              {i < 2 && (
                <div className="max-md:!hidden" style={{ position: "absolute", right: -14, top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1" />
                    <path d="M11 9l5 5-5 5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 900, color: "var(--color-accent)", lineHeight: 1, display: "block", marginBottom: 12 }}>
                {step.num}
              </span>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
