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
      className="flex flex-col items-center gap-1 py-1.5"
      data-reveal=""
    >
      <div
        className="w-0.5 h-5 rounded-sm"
        style={{
          background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <div className="text-[11px] text-muted font-medium">{label}</div>
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
      className="pt-[clamp(100px,12vw,160px)] pb-[clamp(80px,10vw,140px)] max-md:pt-16 max-md:pb-[52px] bg-bg-alt"
      data-reveal=""
    >
      <div className="container-inner">
        <div className="w-12 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="font-display text-[11px] max-md:text-[10px] font-semibold tracking-[3px] max-md:tracking-[4px] uppercase bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent mb-3 text-center">
          GROWTH STORY
        </div>
        <h2 className="text-[clamp(26px,2.8vw,36px)] max-md:text-[22px] font-extrabold tracking-[-0.03em] max-md:tracking-[-0.02em] leading-[1.35] max-md:leading-[1.5] text-center after:content-[''] after:block after:w-10 after:h-[3px] after:mx-auto after:mt-2.5 after:bg-gradient-to-r after:from-accent after:to-accent-dark after:rounded-sm">
          診断の先にある、成長ストーリー
        </h2>
        <div className="h-[clamp(28px,3vw,40px)]" />

        <div className="max-w-[500px] mx-auto">
          {stages.map((stage, index) => (
            <div key={stage.letter}>
              <div
                className="relative bg-surface border border-border rounded-[18px] max-md:rounded-2xl p-[28px_24px_24px] max-md:p-[22px_18px_20px] border-l-[3px] transition-all duration-500 hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)]"
                style={{ borderLeftColor: stage.borderColorValue }}
                data-reveal=""
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div
                    className={`w-10 h-10 min-w-10 rounded-full flex items-center justify-center font-display text-[13px] font-extrabold text-white tracking-[1px] ${stage.iconBg}`}
                  >
                    {stage.letter}
                  </div>
                  <div>
                    <div className="font-display text-[10px] font-bold tracking-[2px] uppercase text-muted">
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
                      className={`inline-block text-xs max-md:text-[12px] font-medium py-[5px] max-md:py-1.5 px-3.5 max-md:px-3 rounded-full leading-[1.4] ${stage.chipBg} ${stage.chipText}`}
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

          <p className="text-center mt-7 text-[13px] text-[#666] leading-[1.8] max-w-[400px] mx-auto">
            プロの案件で生まれたタスクは、ユースやアマチュアにも切り出されます。全員が「実務」を通じて成長できる仕組みです。
          </p>
        </div>
      </div>
    </section>
  );
}
