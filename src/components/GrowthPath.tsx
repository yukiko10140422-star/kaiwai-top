const stages = [
  {
    phase: "ステージ 01",
    title: "入口 — まず知る・参加する",
    who: "何をしたいかまだ明確でない人、最初の行動がわからない人",
    desc: "診断であなたのタイプを知り、小さなタスクから実績を積み始めるフェーズ。認証制タスクで品質を担保しながら、チームの一員として活動できます。",
    chips: ["タイプ診断", "初回タスク", "小さな実績づくり", "コミュニティ参加"],
    outcome: "チームへの参加感、ガクチカのタネ、小さな成功体験",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
        <rect x="8" y="10" width="20" height="28" rx="2" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" />
        <path d="M28 18h12v20a2 2 0 01-2 2H28" stroke="var(--color-accent)" strokeWidth="2" />
        <path d="M18 6v8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="26" r="4" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(255,107,53,0.15)" />
      </svg>
    ),
    color: "rgba(255,107,53,0.06)",
  },
  {
    phase: "ステージ 02",
    title: "実行 — やりたいことを形にする",
    who: "方向性が決まり、動き始めている人",
    desc: "制作・発信・目標設計のサポートを受けて、「やりたい」を具体的な成果にするフェーズ。Web制作、SNS運用、コンテンツ制作など実務スキルを身につけます。",
    chips: ["制作支援", "発信支援", "目標設計", "継続サポート"],
    outcome: "ポートフォリオ、実績、就活で話せる経験",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
        <path d="M24 4l-4 12h-12l10 7-4 12 10-7 10 7-4-12 10-7h-12z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" strokeLinejoin="round" />
        <path d="M16 42h16" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 46h8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "rgba(255,107,53,0.08)",
  },
  {
    phase: "ステージ 03",
    title: "挑戦 — 実案件で加速する",
    who: "実力がついてきた人、外部に挑戦したい人",
    desc: "実際の案件に参加し、企業との接点を持ちながら成長を加速。挑戦フェーズの実案件は入口フェーズの学生にもタスクとして開放され、循環が生まれます。",
    chips: ["伴走型支援", "実案件参加", "外部発信", "事業共創"],
    outcome: "実務経験、企業との接点、起業の種",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" style={{ width: 36, height: 36 }}>
        <path d="M8 40l16-24 16 24z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.1)" strokeLinejoin="round" />
        <path d="M24 16V8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 8h8" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 28v6" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="38" r="2" fill="var(--color-accent)" opacity="0.3" />
      </svg>
    ),
    color: "rgba(255,107,53,0.1)",
  },
];

export default function GrowthPath() {
  return (
    <section className="section-spacing" style={{ background: "var(--color-warm)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-inner">
        {/* Editorial split header */}
        <div className="editorial-header">
          <h2 className="editorial-title">
            成長の<br />3段階
          </h2>
          <p className="editorial-sub">
            診断はただの入口。その先の成長までを一貫してサポートする。支援を受ける側が、やがて支援する側にもなれる循環構造。
          </p>
        </div>

        {/* Visual progress bar */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }} className="max-md:!flex-col max-md:!gap-4">
            {stages.map((stage, i) => (
              <div key={stage.phase} style={{ display: "flex", alignItems: "center" }} className="max-md:!flex-col">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="max-md:!flex-col max-md:!text-center">
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: stage.color,
                    border: "2px solid rgba(255,107,53,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {stage.icon}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", whiteSpace: "nowrap" }}>
                    {stage.phase.replace("ステージ ", "")}
                  </span>
                </div>
                {i < 2 && (
                  <div className="max-md:!hidden" style={{ width: 80, height: 2, background: "linear-gradient(90deg, rgba(255,107,53,0.15), rgba(255,107,53,0.3))", margin: "0 12px", position: "relative" }}>
                    <div style={{ position: "absolute", right: -4, top: -3, width: 8, height: 8, borderTop: "2px solid rgba(255,107,53,0.3)", borderRight: "2px solid rgba(255,107,53,0.3)", transform: "rotate(45deg)" }} />
                  </div>
                )}
                {i < 2 && (
                  <div className="hidden max-md:!block" style={{ width: 2, height: 24, background: "linear-gradient(180deg, rgba(255,107,53,0.15), rgba(255,107,53,0.3))", margin: "4px auto" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stages — editorial border-divided columns */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="max-md:!grid-cols-1">
          {stages.map((stage, i) => (
            <div
              key={stage.phase}
              style={{
                padding: "32px 24px",
                borderLeft: i > 0 ? "1px solid var(--color-border)" : "none",
              }}
              className={i > 0 ? "max-md:!border-l-0 max-md:!border-t max-md:!border-t-[rgba(0,0,0,0.08)]" : ""}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 12 }}>
                {stage.phase}
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 900, marginBottom: 8 }}>
                {stage.title}
              </h3>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>
                {stage.who}
              </p>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                {stage.desc}
              </p>

              {/* Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {stage.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100, background: "rgba(var(--accent-rgb), 0.08)", color: "var(--color-accent)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-primary)" }}>
                <span style={{ marginRight: 4 }}>→</span>
                {stage.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Circulation banner */}
        <div style={{ marginTop: 48, position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1100&h=300&fit=crop&crop=faces"
            alt="学生たちが協力している様子"
            style={{ width: "100%", height: 180, objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(var(--accent-rgb), 0.85), rgba(232,68,48,0.9))" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px 32px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
              循環する成長の仕組み
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", lineHeight: 1.75, maxWidth: 520 }}>
              挑戦フェーズの実案件は、入口フェーズの学生にもタスクとして開放。支援を受ける側が、やがて支援する側にもなれる。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
