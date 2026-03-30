const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=faces",
    quote: "何をすればいいか分からず焦っていましたが、診断で出たSNS運用のタスクを始めたら、フォロワー500人を達成。就活の自己PRで話せるエピソードができました。",
    person: "大学2年・経済学部（ガクチカ型）",
  },
  {
    avatar: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=80&h=80&fit=crop&crop=faces",
    quote: "英語は好きだけど、どう活かすか悩んでいました。英会話カフェでのボランティアから始め、今では短期留学を計画中。世界が広がりました。",
    person: "大学1年・文学部（留学型）",
  },
  {
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=faces",
    quote: "何か武器が欲しいと思っていた。診断後にTOEICの学習計画を立て、3ヶ月で150点アップ。具体的な行動プランがあると全然違います。",
    person: "大学3年・法学部（資格型）",
  },
  {
    avatar: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=80&h=80&fit=crop&crop=faces",
    quote: "人と関わるのが好きだけど居場所がなかった。KAIWAIのコミュニティでイベント運営を経験して、人前で話す自信がつきました。",
    person: "大学1年・工学部（サークル型）",
  },
];

export default function Testimonials() {
  return (
    <section className="section-spacing" style={{ borderTop: "1px solid var(--color-border)" }} id="testimonials">
      <div className="container-inner">
        {/* Editorial split header */}
        <div className="editorial-header">
          <h2 className="editorial-title">
            体験者の<br />声
          </h2>
          <p className="editorial-sub">
            KAIWAIで一歩を踏み出した仲間たちのリアルな体験。
          </p>
        </div>

        {/* Testimonial grid with borders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="max-md:!grid-cols-1">
          {testimonials.map((t, i) => (
            <div
              key={t.person}
              style={{
                padding: "36px 28px",
                border: "1px solid var(--color-border)",
                borderTop: i < 2 ? "1px solid var(--color-border)" : "none",
                borderLeft: i % 2 === 0 ? "none" : "none",
              }}
            >
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, lineHeight: 1.8, marginBottom: 20, color: "var(--color-primary)" }}>
                「{t.quote}」
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img
                  src={t.avatar}
                  alt={t.person}
                  style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(var(--accent-rgb), 0.15)" }}
                />
                <span style={{ fontSize: 13, color: "#888", letterSpacing: "0.04em" }}>{t.person}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
