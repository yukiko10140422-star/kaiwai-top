interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: FeatureItem[] = [
  {
    icon: "schedule",
    title: "3分で完了",
    description:
      "通学中のスキマ時間にサクッと診断。長いアンケートは不要です。",
  },
  {
    icon: "verified_user",
    title: "完全無料",
    description:
      "診断からアクション提案まで全て無料。メールアドレスの登録も不要。",
  },
  {
    icon: "bolt",
    title: "結果はすぐ",
    description:
      "回答後すぐにあなたのタイプと行動プランを表示。待つ必要なし。",
  },
  {
    icon: "group_add",
    title: "実務に参加",
    description:
      "診断で終わらない。実際のプロジェクトに参加してスキルと実績を積める。",
    highlight: true,
  },
];

export default function Features() {
  return (
    <section
      className="section-spacing"
    >
      <div className="container-inner">
        <div className="section-label">特長</div>
        <h2 className="section-heading">KAIWAIが選ばれる理由</h2>

        <div
          className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-2 gap-5 max-md:gap-3.5"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-border rounded-2xl text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
              style={{
                padding: '24px 20px',
                ...(feature.highlight ? {
                  background: 'rgba(var(--accent-rgb), 0.04)',
                  borderColor: 'var(--color-accent)',
                } : {}),
              }}
            >
              <div className="rounded-full bg-[rgba(var(--accent-rgb),0.06)] flex items-center justify-center mx-auto" style={{ width: 48, height: 48, marginBottom: 16 }}>
                <span
                  className="material-symbols-outlined text-2xl text-accent"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-base max-md:text-sm font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#666]" style={{ fontSize: 13, lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
