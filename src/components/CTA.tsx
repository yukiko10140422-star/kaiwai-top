export default function CTA() {
  return (
    <section className="section-spacing">
      <div
        className="border border-[rgba(var(--accent-rgb),0.1)] rounded-3xl grid grid-cols-2 max-md:grid-cols-1 items-center gap-12 max-md:gap-5 overflow-hidden relative shadow-[0_8px_40px_rgba(var(--accent-rgb),0.06)] before:content-[''] before:absolute before:-bottom-[100px] before:-left-[60px] before:w-[350px] before:h-[350px] before:bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.05),transparent_70%)] before:rounded-full before:pointer-events-none after:content-[''] after:absolute after:-top-[120px] after:-right-20 after:w-[400px] after:h-[400px] after:bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.06),transparent_70%)] after:rounded-full after:animate-[ctaGlow_6s_ease-in-out_infinite_alternate]"
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #fffaf7 100%)", padding: 'clamp(40px, 5vw, 64px)' }}
      >
        <div className="relative z-1">
          <h2 className="text-[clamp(22px,2.2vw,28px)] max-md:text-[21px] font-extrabold text-primary mb-3 leading-[1.5] max-md:leading-[1.55] tracking-[-0.02em]">
            まだ迷ってる？
            <br />
            それならまず、診断してみよう。
          </h2>
          <p className="text-sm max-md:text-[13px] text-[#666] mb-6 leading-[1.8]">
            3分であなたのタイプがわかる。無料で、勧誘なし。
            <br className="max-md:hidden" />
            まずは気軽に試してみてください。
          </p>
          <a
            href="#"
            className="inline-flex max-md:w-full max-md:justify-center items-center gap-2 bg-gradient-to-br from-accent to-accent-dark text-white py-4 px-9 max-md:px-6 rounded-[14px] max-md:rounded-2xl text-[15px] font-semibold max-md:font-bold no-underline transition-all duration-400 relative overflow-hidden hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(var(--accent-rgb),0.35)] max-md:shadow-[0_8px_32px_rgba(var(--accent-rgb),0.3)] group before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#ff8855] before:to-accent before:opacity-0 before:transition-opacity before:duration-400 hover:before:opacity-100"
          >
            <span className="relative z-1">無料で診断してみる</span>
            <span className="material-symbols-outlined relative z-1 text-lg transition-transform duration-400 group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <div className="flex max-md:flex-wrap gap-4 max-md:gap-2.5 mt-3.5">
            {[
              { icon: "timer", text: "3分で完了" },
              { icon: "verified_user", text: "完全無料" },
              { icon: "bolt", text: "結果はすぐ表示" },
            ].map((item) => (
              <div
                key={item.text}
                className="text-[11px] text-[#999] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[13px] text-[#bbb]">
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-1 rounded-[20px] max-md:rounded-2xl overflow-hidden h-[260px] max-md:h-[200px] group">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop&crop=faces"
            alt="チームでの作業"
            className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
            style={{ maxHeight: 240, objectFit: 'cover', borderRadius: 16 }}
          />
        </div>
      </div>
    </section>
  );
}
