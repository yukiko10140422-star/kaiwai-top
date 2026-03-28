interface Stage {
  letter: string;
  label: string;
  title: string;
  who: string;
  description: string;
  iconBg: string;
  borderColorValue: string;
  chips: string[];
  rewards: string[];
  rewardColor: string;
  chipBg: string;
  chipText: string;
}

const stages: Stage[] = [
  {
    letter: "Y",
    label: "入口",
    title: "まず知る・参加する",
    who: "何をしたいかまだ明確でない人、最初の行動がわからない人",
    description: "診断であなたのタイプを知り、小さなタスクから実績を積み始めるフェーズ。",
    iconBg: "bg-gradient-to-br from-[#22c55e] to-[#16a34a]",
    borderColorValue: "#22c55e",
    chips: ["タイプ診断", "初回タスク", "小さな実績づくり", "コミュニティ参加"],
    rewards: ["チームへの参加感", "ガクチカのタネ", "小さな成功体験"],
    rewardColor: "#16a34a",
    chipBg: "rgba(34,197,94,0.08)",
    chipText: "#16a34a",
  },
  {
    letter: "A",
    label: "実行",
    title: "やりたいことを形にする",
    who: "方向性が決まり、動き始めている人",
    description: "制作・発信・目標設計のサポートを受けて、「やりたい」を具体的な成果にするフェーズ。",
    iconBg: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]",
    borderColorValue: "#3b82f6",
    chips: ["制作支援", "発信支援", "目標設計", "継続サポート"],
    rewards: ["ポートフォリオ", "実績", "就活で話せる経験"],
    rewardColor: "#2563eb",
    chipBg: "rgba(59,130,246,0.08)",
    chipText: "#2563eb",
  },
  {
    letter: "P",
    label: "挑戦",
    title: "実案件で加速する",
    who: "実力がついてきた人、外部に挑戦したい人",
    description: "実際の案件に参加し、企業との接点を持ちながら成長を加速させるフェーズ。",
    iconBg: "bg-gradient-to-br from-accent to-accent-dark",
    borderColorValue: "#ff6b35",
    chips: ["伴走型支援", "実案件参加", "外部発信", "事業共創"],
    rewards: ["実務経験", "企業との接点", "起業の種"],
    rewardColor: "#e84430",
    chipBg: "rgba(var(--accent-rgb),0.08)",
    chipText: "#e84430",
  },
];

interface ConnectorProps {
  label: string;
  gradientFrom: string;
  gradientTo: string;
}

function Connector({ label, gradientFrom, gradientTo }: ConnectorProps) {
  return (
    <div
      className="flex flex-col items-center gap-1.5"
      style={{ padding: '16px 0' }}
    >
      <div
        className="rounded-sm"
        style={{
          width: 2,
          height: 20,
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div className="text-muted font-medium" style={{ fontSize: 13 }}>{label}</div>
      <span className="material-symbols-outlined text-lg text-muted">south</span>
    </div>
  );
}

export default function GrowthPath() {
  return (
    <section className="section-spacing bg-bg-alt">
      <div className="container-inner">
        <div className="section-label">成長ストーリー</div>
        <h2 className="section-heading">診断の先にある、3つのステージ</h2>
        <p className="text-center" style={{ fontSize: 15, color: '#666', lineHeight: 1.8, maxWidth: 520, margin: '-16px auto 40px' }}>
          KAIWAIでは診断して終わりではありません。あなたの段階に合わせた支援で、着実にステップアップできます。
        </p>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          {stages.map((stage, index) => (
            <div key={stage.letter}>
              <div
                className="card-base"
                style={{
                  borderLeftWidth: 4,
                  borderLeftStyle: 'solid',
                  borderLeftColor: stage.borderColorValue,
                  padding: '28px 24px',
                }}
              >
                {/* ヘッダー: アイコン + ラベル + タイトル */}
                <div className="flex items-center" style={{ gap: 14, marginBottom: 12 }}>
                  <div
                    className={`rounded-full flex items-center justify-center font-display font-extrabold text-white ${stage.iconBg}`}
                    style={{ width: 44, height: 44, minWidth: 44, fontSize: 15, letterSpacing: 1 }}
                  >
                    {stage.letter}
                  </div>
                  <div>
                    <div className="font-display font-bold uppercase text-muted" style={{ fontSize: 12, letterSpacing: 2 }}>
                      {stage.label}
                    </div>
                    <h3 className="font-bold text-primary" style={{ fontSize: 18, letterSpacing: '-0.02em' }}>
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* 対象者 */}
                <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14, verticalAlign: '-2px', marginRight: 4 }}>person</span>
                  {stage.who}
                </div>

                {/* 説明 */}
                <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 16 }}>
                  {stage.description}
                </p>

                {/* やること チップ */}
                <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 16 }}>
                  {stage.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-block font-medium rounded-full"
                      style={{ fontSize: 13, padding: '5px 14px', background: stage.chipBg, color: stage.chipText }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* 得られるもの */}
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: `${stage.borderColorValue}08`,
                    borderLeft: `3px solid ${stage.borderColorValue}30`,
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 600, color: stage.rewardColor, marginBottom: 6 }}>
                    得られるもの
                  </div>
                  <div className="flex flex-wrap" style={{ gap: 8 }}>
                    {stage.rewards.map((r) => (
                      <span key={r} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#555' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14, color: stage.rewardColor, fontVariationSettings: "'FILL' 1" }}>check</span>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index === 0 && (
                <Connector label="経験を積んで" gradientFrom="#22c55e" gradientTo="#3b82f6" />
              )}
              {index === 1 && (
                <Connector label="さらに挑戦して" gradientFrom="#3b82f6" gradientTo="var(--color-accent)" />
              )}
            </div>
          ))}

          {/* 循環構造の説明 */}
          <div
            className="card-base"
            style={{
              marginTop: 32,
              padding: '20px 24px',
              background: 'rgba(var(--accent-rgb), 0.03)',
              borderColor: 'rgba(var(--accent-rgb), 0.1)',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}>
                sync
              </span>
              <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-primary)' }}>
                循環する成長の仕組み
              </span>
            </div>
            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8 }}>
              挑戦フェーズの実案件から生まれたタスクは、入口フェーズの学生にも開放されます。
              支援を受ける側が、やがて支援する側にもなれる — これがKAIWAIの循環構造です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
