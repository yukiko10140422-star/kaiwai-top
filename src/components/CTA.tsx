export default function CTA() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: 'clamp(72px, 10vw, 120px) 0', position: 'relative', overflow: 'hidden' }}>
      {/* Glow decoration */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.15), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-inner" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 800, color: '#fff', lineHeight: 1.4, letterSpacing: '-0.02em', marginBottom: 20 }}>
          まだ悩んでいるあなたへ
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.85, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 36px' }}>
          「何をすればいいかわからない」は、多くの学生が感じている、ごく普通の気持ちです。
          KAIWAIの診断は、5つの質問に答えるだけ。
          3分後には、あなた専用の「最初の一歩」が見えています。
        </p>

        <div style={{ marginBottom: 28 }}>
          <a
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '20px 48px', fontSize: 17, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', borderRadius: 16, textDecoration: 'none', boxShadow: '0 8px 32px rgba(var(--accent-rgb), 0.4)', transition: 'all 0.3s ease' }}
          >
            <span>無料で診断する</span>
            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>arrow_forward</span>
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap' }}>
          {[
            { icon: "group", text: "1,200人が診断済み" },
            { icon: "trending_up", text: "87%が行動を開始" },
            { icon: "verified_user", text: "登録不要・勧誘なし" },
          ].map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'rgba(var(--accent-rgb), 0.7)', fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
