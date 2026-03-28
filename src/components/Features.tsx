interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: "schedule",
    title: "3分で完了",
    description:
      "通学中や休憩時間のスキマ時間で、すぐに自分のタイプを知ることができます。",
  },
  {
    icon: "verified_user",
    title: "完全無料",
    description:
      "診断からアクションの提案まで、全ての機能を無料で利用いただけます。",
  },
  {
    icon: "bolt",
    title: "結果はすぐ",
    description:
      "質問回答後、待つことなくその場であなたのタイプと推奨アクションを表示。",
  },
  {
    icon: "group_add",
    title: "実務に参加",
    description:
      "ただの診断で終わらず、実際にスキルを活かせる実案件への参加もサポート。",
  },
];

export default function Features() {
  return (
    <section
      className="section-spacing"
    >
      <div
        className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-2 gap-[18px] max-md:gap-3"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white border border-border rounded-[20px] max-md:rounded-2xl p-[28px_24px] max-md:p-[20px_16px] text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
          >
            <div className="w-14 max-md:w-12 h-14 max-md:h-12 rounded-full bg-[rgba(var(--accent-rgb),0.06)] flex items-center justify-center mx-auto mb-4 max-md:mb-3">
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
            <p className="text-xs max-md:text-[11px] text-[#666] leading-[1.7]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
