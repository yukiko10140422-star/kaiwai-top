interface TypeAction {
  label: string;
}

interface DiagnosisType {
  icon: string;
  name: string;
  color: string;
  bg: string;
  description: string;
  actions: TypeAction[];
}

const diagnosisTypes: DiagnosisType[] = [
  {
    icon: "stars",
    name: "ガクチカ型",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.04)",
    description: "経験を作る・発信する・運営する",
    actions: [
      { label: "SNS運用を始める" },
      { label: "Web制作に挑戦" },
      { label: "イベント企画に参加" },
    ],
  },
  {
    icon: "public",
    name: "留学型",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.04)",
    description: "世界を広げる・語学を磨く",
    actions: [
      { label: "英語カフェに参加" },
      { label: "留学準備を開始" },
      { label: "TOEIC対策" },
    ],
  },
  {
    icon: "history_edu",
    name: "資格型",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.04)",
    description: "武器を手に入れる",
    actions: [
      { label: "人気資格を調べる" },
      { label: "学習計画を立てる" },
      { label: "検定に挑戦" },
    ],
  },
  {
    icon: "groups",
    name: "サークル型",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.04)",
    description: "仲間と動く・居場所を見つける",
    actions: [
      { label: "コミュニティに参加" },
      { label: "イベント運営" },
      { label: "団体を立ち上げる" },
    ],
  },
];

export default function ResultPreview() {
  return (
    <section className="section-spacing">
      <div className="container-inner">
        <div className="section-label">診断結果イメージ</div>
        <h2 className="section-heading">こんな結果が手に入ります</h2>

        <div
          className="grid grid-cols-2 max-md:grid-cols-1"
          style={{ gap: 16, maxWidth: 680, margin: "0 auto" }}
        >
          {diagnosisTypes.map((type) => (
            <div
              key={type.name}
              className="card-base"
              style={{ padding: 24 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 8,
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{
                    fontSize: 22,
                    color: type.color,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  {type.icon}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: type.color,
                  }}
                >
                  {type.name}
                </span>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  marginBottom: 12,
                  lineHeight: 1.6,
                }}
              >
                {type.description}
              </p>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#999",
                  marginBottom: 8,
                }}
              >
                おすすめアクション:
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {type.actions.map((action) => (
                  <li
                    key={action.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 16,
                        color: type.color,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check_circle
                    </span>
                    {action.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 32px",
              borderRadius: 12,
              border: "2px solid var(--color-accent)",
              color: "var(--color-accent)",
              background: "var(--color-surface)",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            自分のタイプを知る
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
