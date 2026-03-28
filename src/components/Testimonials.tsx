interface TestimonialItem {
  avatar: string;
  name: string;
  meta: string;
  tag: string;
  body: string;
}

const testimonials: TestimonialItem[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
    name: "Aさん",
    meta: "大学2年・経済学部",
    tag: "ガクチカ型",
    body: "「何をすればいいか分からず焦っていましたが、診断で出たSNS運用のタスクを始めたら、自分の得意が見つかりました!」",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    name: "Bさん",
    meta: "大学1年・文学部",
    tag: "留学型",
    body: "「英語は好きだけど、どう活かすか悩んでいました。英会話カフェでのボランティアから始め、今では短期留学を計画中です。」",
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-spacing"
      id="testimonials"
    >
      <div className="font-display text-[11px] max-md:text-[10px] font-semibold tracking-[3px] max-md:tracking-[4px] uppercase bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent mb-3 text-center">
        VOICE
      </div>
      <h2 className="text-[clamp(26px,2.8vw,36px)] max-md:text-[22px] font-extrabold tracking-[-0.03em] max-md:tracking-[-0.02em] leading-[1.35] max-md:leading-[1.5] text-center mb-9 max-md:after:content-[''] max-md:after:block max-md:after:w-10 max-md:after:h-[3px] max-md:after:mt-2.5 max-md:after:mx-auto max-md:after:bg-gradient-to-r max-md:after:from-accent max-md:after:to-accent-dark max-md:after:rounded-sm">
        体験ストーリー
      </h2>

      <div
        className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-3.5 max-w-[800px] mx-auto"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-border rounded-[20px] max-md:rounded-[18px] p-8 max-md:p-[22px] pl-8 max-md:pl-[26px] transition-all duration-500 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-gradient-to-b before:from-accent before:to-accent-dark after:content-['\201C'] after:absolute after:top-3 after:right-[18px] after:text-[52px] after:font-[Georgia,serif] after:bg-gradient-to-br after:from-[rgba(var(--accent-rgb),0.15)] after:to-[rgba(var(--accent-rgb),0.05)] after:bg-clip-text after:text-transparent after:leading-none after:pointer-events-none hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
          >
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={t.avatar}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold">{t.name}</div>
                <div className="text-[11px] text-muted">{t.meta}</div>
              </div>
              <span className="inline-block text-[10px] font-semibold text-accent bg-[rgba(var(--accent-rgb),0.06)] py-[3px] px-2.5 rounded">
                {t.tag}
              </span>
            </div>
            <div className="text-[13px] text-[#666] leading-[1.75] italic mt-3">
              {t.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
