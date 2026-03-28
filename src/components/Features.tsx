const features = [
  {
    icon: "schedule",
    title: "3分で完了",
    description: "通学中のスキマ時間にサクッと診断。長いアンケートは不要です。",
  },
  {
    icon: "verified_user",
    title: "完全無料・登録不要",
    description: "診断からアクション提案まで全て無料。メールアドレスの登録も不要。",
  },
  {
    icon: "bolt",
    title: "結果はその場ですぐ",
    description: "回答後すぐにあなたのタイプと行動プランを表示。待つ必要なし。",
  },
];

const highlight = {
  icon: "rocket_launch",
  title: "診断で終わらない。実務に参加できる。",
  description: "KAIWAIの最大の特徴。診断後、実際のプロジェクトに参加してスキルと実績を積むことができます。支援を受ける側が、やがて支援する側にもなれる循環構造です。",
};

export default function Features() {
  return (
    <section className="section-spacing">
      <div className="container-inner">
        <div className="section-label">特長</div>
        <h2 className="section-heading">KAIWAIが選ばれる理由</h2>

        {/* 3 features in a row */}
        <div className="grid grid-cols-3 max-md:grid-cols-1" style={{ gap: 16, marginBottom: 20 }}>
          {features.map(f => (
            <div key={f.title} className="card-base" style={{ padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(var(--accent-rgb), 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>{f.icon}</span>
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>{f.description}</p>
            </div>
          ))}
        </div>

        {/* Highlight card — full width */}
        <div style={{ padding: '32px 32px', borderRadius: 20, background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.04), rgba(var(--accent-rgb), 0.08))', border: '1px solid rgba(var(--accent-rgb), 0.1)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 28, color: '#fff', fontVariationSettings: "'FILL' 1" }}>{highlight.icon}</span>
          </div>
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{highlight.title}</h3>
            <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>{highlight.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
