const types = [
  {
    icon: "stars",
    title: "ガクチカ型",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.05)",
    description: "経験を作る・発信する・運営する",
    actions: ["SNS運用を始める", "Web制作に挑戦", "イベント企画に参加"],
  },
  {
    icon: "public",
    title: "留学型",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.05)",
    description: "世界を広げる・語学を磨く",
    actions: ["英語カフェに参加", "留学準備を開始", "TOEIC対策"],
  },
  {
    icon: "history_edu",
    title: "資格型",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.05)",
    description: "武器を手に入れる",
    actions: ["人気資格を調べる", "学習計画を立てる", "検定に挑戦"],
  },
  {
    icon: "groups",
    title: "サークル型",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.05)",
    description: "仲間と動く・居場所を見つける",
    actions: ["コミュニティに参加", "イベント運営", "団体活動に参加"],
  },
];

export default function Categories() {
  return (
    <section className="section-spacing bg-surface">
      <div className="container-inner">
        <div className="section-label">タイプ紹介</div>
        <h2 className="section-heading">あなたはどのタイプ？</h2>

        <div
          className="grid grid-cols-2 max-md:grid-cols-1"
          style={{ gap: 16, maxWidth: 680, margin: "0 auto" }}
        >
          {types.map((type) => (
            <div
              key={type.title}
              className="card-base"
              style={{ padding: 28, background: type.bg }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: 28,
                  color: type.color,
                  fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                  display: "block",
                  marginBottom: 12,
                }}
              >
                {type.icon}
              </span>

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: type.color,
                  marginBottom: 4,
                }}
              >
                {type.title}
              </div>

              <div
                style={{
                  fontSize: 13,
                  color: "#666",
                  marginBottom: 16,
                }}
              >
                {type.description}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {type.actions.map((action) => (
                  <div
                    key={action}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 18,
                        color: type.color,
                        fontVariationSettings: '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                      }}
                    >
                      check_circle
                    </span>
                    <span style={{ fontSize: 14, color: "#333" }}>
                      {action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
