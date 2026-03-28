export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #fff 0%, #fffaf7 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-inner">
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', paddingTop: 72, paddingBottom: 48 }}
        >
          {/* Left: Copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 100, background: 'rgba(var(--accent-rgb), 0.06)', marginBottom: 24 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>school</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-accent-dark)' }}>学生向けキャリア診断</span>
            </div>

            <h1 style={{ fontSize: 'clamp(30px, 3.8vw, 48px)', lineHeight: 1.4, letterSpacing: '-0.03em', fontWeight: 800, marginBottom: 24 }}>
              「やりたいことが
              <br className="md:hidden" />
              見つからない」を、
              <br />
              <span style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                たった5問
              </span>
              で解決。
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.85, marginBottom: 36, maxWidth: 480, color: '#555' }}>
              5つの質問に答えるだけで、あなたの志向を
              <strong style={{ color: 'var(--color-primary)' }}>4タイプ</strong>に分類。
              ガクチカ・留学・資格・サークル — それぞれに合った「最初の一歩」を無料で提案します。
            </p>

            <div style={{ marginBottom: 20 }}>
              <a href="#" className="cta-button">
                <span>無料で診断する（3分で完了）</span>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 13, color: '#999' }}>
              {["登録不要", "完全無料", "結果はすぐ表示"].map((t, i) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  {i > 0 && <span style={{ color: '#ddd' }}>|</span>}
                  <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo grid + Mockup overlay */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            {/* Photo grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 10 }}>
              <div style={{ gridRow: '1 / 3', borderRadius: 20, overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=660&fit=crop&crop=faces"
                  alt="学生が協力して学んでいる様子"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ borderRadius: 20, overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop&crop=faces"
                  alt="教室での授業風景"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ borderRadius: 20, overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&crop=faces"
                  alt="チームでの作業"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* Floating mockup card */}
            <div style={{ position: 'absolute', bottom: -16, left: -24, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: 18, boxShadow: '0 12px 40px rgba(0,0,0,0.12)', padding: '16px 20px', border: '1px solid rgba(255,255,255,0.8)', maxWidth: 220 }}>
              <div style={{ height: 3, width: 40, borderRadius: 2, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-dark))', marginBottom: 10 }} />
              <div style={{ fontSize: 11, color: '#aaa', marginBottom: 4 }}>あなたのタイプ</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>stars</span>
                <span style={{ fontSize: 16, fontWeight: 800 }}>ガクチカ型</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['SNS運用', 'Web制作', 'イベント企画'].map(a => (
                  <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#666' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 13, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>check</span>
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats badge */}
            <div style={{ position: 'absolute', top: -8, right: -8, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: 14, boxShadow: '0 8px 24px rgba(0,0,0,0.08)', padding: '10px 16px', border: '1px solid rgba(255,255,255,0.8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>trending_up</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1.2 }}>87%</div>
                  <div style={{ fontSize: 10, color: '#999' }}>行動開始率</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ borderRadius: 16, padding: '24px 32px', marginBottom: 12, background: 'rgba(var(--accent-rgb), 0.03)', border: '1px solid rgba(var(--accent-rgb), 0.06)' }}>
          <div className="hero-trust-bar" style={{ display: 'flex', justifyContent: 'center', gap: 48 }}>
            {[
              { value: '1,200+', label: '累計診断数', icon: 'group' },
              { value: '87%', label: '行動開始率', icon: 'trending_up' },
              { value: '4.6', label: '満足度（5.0中）', icon: 'star' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(var(--accent-rgb), 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{item.value}</div>
                  <div style={{ fontSize: 12, color: '#999' }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
