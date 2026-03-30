const steps = [
  {
    num: "01",
    title: "5つの質問に答える",
    desc: "直感で選ぶだけ。深く考える必要はありません。所要時間約3分。",
  },
  {
    num: "02",
    title: "あなたのタイプがわかる",
    desc: "ガクチカ型・留学型・資格型・サークル型の4タイプに分類されます。",
  },
  {
    num: "03",
    title: "行動プランを受け取る",
    desc: "タイプに合った具体的なアクションリストをお届け。何から始めればいいか、もう迷いません。",
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

        {/* Steps — editorial border-divided columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="max-md:!grid-cols-1">
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                padding: "32px 28px",
                borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
              }}
              className={i > 0 ? "max-md:!border-l-0 max-md:!border-t max-md:!border-t-[var(--color-border)]" : ""}
            >
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", fontWeight: 900, color: "var(--color-accent)", lineHeight: 1, display: "block", marginBottom: 16 }}>
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
