const steps = [
  {
    num: "01",
    icon: "edit_note",
    title: "5つの質問に答える",
    desc: "直感で選ぶだけ。深く考える必要はありません。通学中でもサクッと完了します。",
    badge: "所要時間 約3分",
    color: "#ff6b35",
  },
  {
    num: "02",
    icon: "psychology",
    title: "あなたのタイプがわかる",
    desc: "回答をもとに、ガクチカ型・留学型・資格型・サークル型の4つから判定。",
    badge: null,
    color: "#3b82f6",
    types: [
      { label: "ガクチカ型", color: "#ff6b35" },
      { label: "留学型", color: "#3b82f6" },
      { label: "資格型", color: "#22c55e" },
      { label: "サークル型", color: "#8b5cf6" },
    ],
  },
  {
    num: "03",
    icon: "rocket_launch",
    title: "あなた専用の行動プランを受け取る",
    desc: "タイプに合った具体的なアクションリストが届きます。何から始めればいいか、もう迷いません。",
    badge: "すぐに行動開始できる",
    color: "#22c55e",
  },
];

export default function Flow() {
  return (
    <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }} id="flow">
      <div className="container-inner">
        <div className="section-label">診断の流れ</div>
        <h2 className="section-heading">たった3ステップで、次の一歩が見える</h2>
        <p className="section-sub">5つの質問に答えるだけ。あなた専用のアクションプランが手に入ります。</p>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {steps.map((step, i) => (
            <div key={step.num}>
              {/* Step card */}
              <div className="card-base" style={{ padding: '28px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                {/* Large number */}
                <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1, color: step.color, opacity: 0.15, minWidth: 48, fontFamily: 'var(--font-display)' }}>
                  {step.num}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: step.color, fontVariationSettings: "'FILL' 1" }}>{step.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700 }}>{step.title}</h3>
                  </div>

                  <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginBottom: step.badge || step.types ? 12 : 0 }}>
                    {step.desc}
                  </p>

                  {step.badge && (
                    <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 100, background: `${step.color}12`, color: step.color }}>
                      {step.badge}
                    </span>
                  )}

                  {step.types && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {step.types.map(t => (
                        <span key={t.label} style={{ fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 100, background: `${t.color}10`, color: t.color, border: `1px solid ${t.color}20` }}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0' }}>
                  <div style={{ width: 2, height: 24, background: `linear-gradient(to bottom, ${steps[i].color}40, ${steps[i+1].color}40)` }} />
                  <span className="material-symbols-outlined" style={{ fontSize: 18, color: '#ccc' }}>expand_more</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
