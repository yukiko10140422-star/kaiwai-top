const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=faces",
    name: "大学2年・経済学部",
    tag: "ガクチカ型",
    tagColor: "#ff6b35",
    body: "何をすればいいか分からず焦っていましたが、診断で出たSNS運用のタスクを始めたら、フォロワー500人を達成。就活の自己PRで話せるエピソードができました！",
  },
  {
    avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=80&h=80&fit=crop&crop=faces",
    name: "大学1年・文学部",
    tag: "留学型",
    tagColor: "#3b82f6",
    body: "英語は好きだけど、どう活かすか悩んでいました。英会話カフェでのボランティアから始め、今では短期留学を計画中です。",
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=faces",
    name: "大学3年・法学部",
    tag: "資格型",
    tagColor: "#22c55e",
    body: "何か武器が欲しいと思っていた。診断後にTOEICの学習計画を立て、3ヶ月で150点アップ。具体的な行動プランがあると違います。",
  },
  {
    avatar: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=80&h=80&fit=crop&crop=faces",
    name: "大学1年・工学部",
    tag: "サークル型",
    tagColor: "#8b5cf6",
    body: "人と関わるのが好きだけど居場所がなかった。KAIWAIのコミュニティでイベント運営を経験して、自信がつきました。",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing" style={{ background: 'var(--color-bg-alt)' }} id="testimonials">
      <div className="container-inner">
        <div className="section-label">体験談</div>
        <h2 className="section-heading">体験ストーリー</h2>
        <p className="section-sub">実際にKAIWAIの診断を受けた学生の声をご紹介します。</p>

        <div className="grid grid-cols-2 max-md:grid-cols-1" style={{ gap: 20, maxWidth: 800, margin: '0 auto' }}>
          {testimonials.map(t => (
            <div
              key={t.name}
              className="card-base"
              style={{ padding: '28px 24px', position: 'relative', borderLeft: `3px solid ${t.tagColor}` }}
            >
              {/* Large quote mark */}
              <div style={{ position: 'absolute', top: 8, right: 16, fontSize: 64, fontFamily: 'Georgia, serif', color: `${t.tagColor}08`, lineHeight: 1, pointerEvents: 'none' }}>&ldquo;</div>

              {/* Header: avatar + name + tag */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <img
                  src={t.avatar}
                  alt={`${t.name}の写真`}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${t.tagColor}20` }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: t.tagColor, padding: '4px 12px', borderRadius: 100, background: `${t.tagColor}10` }}>{t.tag}</span>
              </div>

              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.85, position: 'relative', zIndex: 1 }}>
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
