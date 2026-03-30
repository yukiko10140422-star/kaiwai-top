const types = [
  {
    label: "ガクチカ型",
    title: "経験を作る・発信する・運営する",
    desc: "SNS運用、Web制作、イベント企画 — 「やった」を形にするタイプ。就活の自己PRで話せる実績を積み上げる。",
    actions: ["SNS運用を始める", "Web制作に挑戦", "イベント企画に参加"],
  },
  {
    label: "留学型",
    title: "世界を広げる・語学を磨く",
    desc: "英語カフェ、留学準備、TOEIC対策 — グローバルに動くタイプ。海外経験で視野を広げる。",
    actions: ["英語カフェに参加", "留学準備を開始", "TOEIC対策"],
  },
  {
    label: "資格型",
    title: "武器を手に入れる",
    desc: "人気資格、学習計画、検定挑戦 — コツコツ力を蓄えるタイプ。わかりやすいスキル証明を手に入れる。",
    actions: ["人気資格を調べる", "学習計画を立てる", "検定に挑戦"],
  },
  {
    label: "サークル型",
    title: "仲間と動く・居場所を見つける",
    desc: "コミュニティ参加、イベント運営、団体活動 — つながりで成長するタイプ。人との関わりの中で力を発揮する。",
    actions: ["コミュニティに参加", "イベント運営", "団体を立ち上げる"],
  },
];

export default function ResultPreview() {
  return (
    <section
      className="section-spacing"
      id="types"
      style={{ background: "var(--color-dark)", color: "#fff" }}
    >
      <div className="container-inner">
        <h2 className="section-heading" style={{ color: "#fff" }}>4つのタイプ</h2>
        <p className="section-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
          あなたはどのタイプ？ それぞれに最適な行動プランがある。
        </p>

        {/* Editorial 2x2 grid with borders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="max-md:!grid-cols-1">
          {types.map((type) => (
            <div
              key={type.label}
              style={{
                padding: "36px 32px",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "background 0.2s",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 12 }}>
                {type.label}
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
                {type.title}
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 16 }}>
                {type.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {type.actions.map((action) => (
                  <span
                    key={action}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 14px",
                      borderRadius: 100,
                      background: "rgba(255,107,53,0.1)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(255,107,53,0.15)",
                    }}
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
