export default function CTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background image with overlay */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&h=600&fit=crop&crop=center"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,26,46,0.92) 0%, rgba(22,33,62,0.88) 50%, rgba(15,52,96,0.92) 100%)' }} />
      </div>

      {/* Glow decoration */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.12), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-inner" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 'clamp(72px, 10vw, 120px) 0' }}>
        <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 800, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 20 }}>
          まだ悩んでいるあなたへ
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 40px' }}>
          「何をすればいいかわからない」は、多くの学生が感じている、ごく普通の気持ちです。
          KAIWAIの診断は、5つの質問に答えるだけ。
          3分後には、あなた専用の「最初の一歩」が見えています。
        </p>

        <div style={{ marginBottom: 32 }}>
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '20px 52px', fontSize: 17, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', borderRadius: 16, textDecoration: 'none', boxShadow: '0 8px 32px rgba(var(--accent-rgb), 0.5)', transition: 'all 0.3s ease' }}
          >
            <span>無料で診断する</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>arrow_forward</span>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {[
            { icon: "group", text: "1,200人が診断済み" },
            { icon: "trending_up", text: "87%が行動を開始" },
            { icon: "verified_user", text: "登録不要・勧誘なし" },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'rgba(255,107,53,0.7)', fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
