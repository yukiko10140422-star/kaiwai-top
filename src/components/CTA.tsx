export default function CTA() {
  return (
    <section className="section-spacing">
      <div
        className="card-base relative overflow-hidden"
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(32px, 5vw, 64px)',
          background: 'linear-gradient(135deg, #fffaf7 0%, #fff5f0 100%)',
          borderColor: 'rgba(var(--accent-rgb), 0.12)',
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: -120,
            right: -80,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.06), transparent 70%)',
          }}
        />

        <div className="relative" style={{ zIndex: 1, textAlign: 'center' }}>
          <h2
            className="font-extrabold text-primary"
            style={{
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              lineHeight: 1.5,
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            まだ悩んでいるあなたへ
          </h2>

          <p style={{ fontSize: 15, lineHeight: 1.9, color: '#555', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            「何をすればいいかわからない」は、
            多くの学生が感じている、ごく普通の気持ちです。
            <br />
            KAIWAIの診断は、5つの質問に答えるだけ。
            <br />
            3分後には、あなた専用の「最初の一歩」が見えています。
          </p>

          {/* CTAボタン */}
          <div style={{ marginBottom: 24 }}>
            <a
              href="#"
              className="items-center bg-gradient-to-br from-accent to-accent-dark text-white font-bold no-underline shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              style={{
                padding: '18px 48px',
                display: 'inline-flex',
                gap: 10,
                borderRadius: 14,
                fontSize: 16,
              }}
            >
              <span>無料で診断する — 登録不要</span>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                arrow_forward
              </span>
            </a>
          </div>

          {/* 信頼要素 */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {[
              { icon: "group", text: "1,200人が診断済み" },
              { icon: "trending_up", text: "87%が行動を開始" },
              { icon: "do_not_disturb_on", text: "勧誘なし" },
            ].map((item) => (
              <div
                key={item.text}
                style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#888' }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 16, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
