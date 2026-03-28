interface Stage {
  letter: string;
  label: string;
  title: string;
  colorClass: string;
  iconBg: string;
  chipBg: string;
  chipText: string;
  borderColor: string;
  borderColorValue: string;
  chips: string[];
}

const stages: Stage[] = [
  {
    letter: "Y",
    label: "Youth",
    title: "まず知る・参加する",
    colorClass: "gp-stage--youth",
    iconBg: "bg-gradient-to-br from-[#22c55e] to-[#16a34a]",
    chipBg: "bg-[rgba(34,197,94,0.08)]",
    chipText: "text-[#16a34a]",
    borderColor: "border-l-[#22c55e]",
    borderColorValue: "#22c55e",
    chips: ["タイプ診断", "初回タスク", "小さな実績づくり", "コミュニティ"],
  },
  {
    letter: "A",
    label: "Amateur",
    title: "やりたいことを形にする",
    colorClass: "gp-stage--amateur",
    iconBg: "bg-gradient-to-br from-[#3b82f6] to-[#2563eb]",
    chipBg: "bg-[rgba(59,130,246,0.08)]",
    chipText: "text-[#2563eb]",
    borderColor: "border-l-[#3b82f6]",
    borderColorValue: "#3b82f6",
    chips: ["制作支援", "発信支援", "目標設計", "継続サポート"],
  },
  {
    letter: "P",
    label: "Pro",
    title: "挑戦を加速させる",
    colorClass: "gp-stage--pro",
    iconBg: "bg-gradient-to-br from-accent to-accent-dark",
    chipBg: "bg-[rgba(var(--accent-rgb),0.08)]",
    chipText: "text-accent-dark",
    borderColor: "border-l-accent",
    borderColorValue: "#ff6b35",
    chips: ["伴走型支援", "実案件参加", "外部発信", "事業共創"],
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
      className="flex flex-col items-center gap-1.5 py-3"
    >
      <div
        className="w-0.5 h-5 rounded-sm"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div className="text-muted font-medium" style={{ fontSize: 13 }}>{label}</div>
      <div>
        <span className="material-symbols-outlined text-lg text-muted">
          south
        </span>
      </div>
    </div>
  );
}

export default function GrowthPath() {
  return (
    <section
      className="section-spacing bg-bg-alt"
    >
      <div className="container-inner">
        <div className="section-label">GROWTH STORY</div>
        <h2 className="section-heading">診断の先にある、成長ストーリー</h2>

        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          {stages.map((stage, index) => (
            <div key={stage.letter}>
              <div
                className="relative bg-surface border border-border rounded-2xl border-l-[3px] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
                style={{ borderLeftColor: stage.borderColorValue, padding: '28px 24px 24px' }}
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div
                    className={`w-10 h-10 min-w-10 rounded-full flex items-center justify-center font-display text-[13px] font-extrabold text-white tracking-[1px] ${stage.iconBg}`}
                  >
                    {stage.letter}
                  </div>
                  <div>
                    <div className="font-display font-bold tracking-[2px] uppercase text-muted" style={{ fontSize: 12 }}>
                      {stage.label}
                    </div>
                    <h3 className="text-[clamp(16px,1.4vw,19px)] max-md:text-base font-bold tracking-[-0.02em] text-primary">
                      {stage.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stage.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`inline-block text-xs font-medium py-[5px] max-md:py-1.5 px-3.5 max-md:px-3 rounded-full leading-[1.4] ${stage.chipBg} ${stage.chipText}`}
                      style={{ fontSize: 13 }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              {index === 0 && (
                <Connector
                  label="経験を積んで"
                  gradientFrom="#22c55e"
                  gradientTo="#3b82f6"
                />
              )}
              {index === 1 && (
                <Connector
                  label="さらに挑戦して"
                  gradientFrom="#3b82f6"
                  gradientTo="var(--color-accent)"
                />
              )}
            </div>
          ))}

          <p className="text-center mt-7 text-[#666]" style={{ fontSize: 14, lineHeight: 2, maxWidth: 440, margin: '28px auto 0' }}>
            プロの案件で生まれたタスクは、ユースやアマチュアにも切り出されます。全員が「実務」を通じて成長できる仕組みです。
          </p>
        </div>
      </div>
    </section>
  );
}
