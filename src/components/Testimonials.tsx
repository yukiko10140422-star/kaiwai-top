interface TestimonialItem {
  avatar: string;
  name: string;
  tag: string;
  tagColor: string;
  body: string;
}

const testimonials: TestimonialItem[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=80&h=80&fit=crop&crop=faces",
    name: "大学2年・経済学部",
    tag: "ガクチカ型",
    tagColor: "#ff6b35",
    body: "「何をすればいいか分からず焦っていましたが、診断で出たSNS運用のタスクを始めたら、フォロワー500人を達成。就活の自己PRで話せるエピソードができました！」",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1614644147724-2d4785d69962?w=80&h=80&fit=crop&crop=faces",
    name: "大学1年・文学部",
    tag: "留学型",
    tagColor: "#3b82f6",
    body: "「英語は好きだけど、どう活かすか悩んでいました。英会話カフェでのボランティアから始め、今では短期留学を計画中です。」",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=faces",
    name: "大学3年・法学部",
    tag: "資格型",
    tagColor: "#22c55e",
    body: "「何か武器が欲しいと思っていた。診断後にTOEICの学習計画を立て、3ヶ月で150点アップ。具体的な行動プランがあると違います。」",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=80&h=80&fit=crop&crop=faces",
    name: "大学1年・工学部",
    tag: "サークル型",
    tagColor: "#8b5cf6",
    body: "「人と関わるのが好きだけど居場所がなかった。KAIWAIのコミュニティでイベント運営を経験して、自信がつきました。」",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-spacing bg-bg-alt"
      id="testimonials"
    >
      <div className="container-inner">
        <div className="section-label">体験談</div>
        <h2 className="section-heading">体験ストーリー</h2>

        <div
          className="grid grid-cols-2 max-md:grid-cols-1"
          style={{ gap: 16, maxWidth: 800, margin: '0 auto' }}
        >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-border rounded-[20px] max-md:rounded-[18px] transition-all duration-500 relative overflow-hidden after:content-['\201C'] after:absolute after:top-3 after:right-[18px] after:text-[52px] after:font-[Georgia,serif] after:bg-clip-text after:text-transparent after:leading-none after:pointer-events-none hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
            style={{
              padding: '28px 24px 24px 28px',
              borderLeftWidth: 3,
              borderLeftStyle: 'solid',
              borderLeftColor: t.tagColor,
            }}
          >
            <div className="flex items-center gap-3" style={{ marginBottom: 14 }}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={t.avatar}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div style={{ fontSize: 13 }} className="font-semibold">{t.name}</div>
              </div>
              <span
                className="inline-block font-semibold rounded"
                style={{
                  fontSize: 12,
                  color: t.tagColor,
                  backgroundColor: `${t.tagColor}10`,
                  padding: '4px 12px',
                }}
              >
                {t.tag}
              </span>
            </div>
            <div className="text-[#666] italic" style={{ fontSize: 13, lineHeight: 1.75, marginTop: 12 }}>
              {t.body}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
