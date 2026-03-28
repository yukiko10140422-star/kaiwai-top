export default function Hero() {
  return (
    <section style={{ background: 'linear-gradient(180deg, #fff 0%, #fffaf7 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.04), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-inner">
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', paddingTop: 80, paddingBottom: 56 }}
        >
          {/* Left: Copy */}
          <div>
            {/* Eyebrow */}
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
                  {i > 0 && <span style={{ color: '#ddd', marginRight: 0 }}>|</span>}
                  <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Mockup Card */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            {/* Floating glow behind card */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '110%', height: '110%', borderRadius: 32, background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.08), rgba(var(--accent-rgb), 0.02))', filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', background: '#fff', borderRadius: 24, boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.04)' }}>
              {/* Top gradient bar */}
              <div style={{ height: 5, background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-dark), #ff8855)' }} />

              <div style={{ padding: '32px 28px 28px' }}>
                <p style={{ fontSize: 13, color: '#aaa', marginBottom: 6, fontWeight: 500 }}>あなたのタイプは...</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 22, color: '#fff', fontVariationSettings: "'FILL' 1" }}>stars</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>ガクチカ型</div>
                    <div style={{ fontSize: 12, color: '#999' }}>経験を作る・発信する・運営する</div>
                  </div>
                </div>

                <div style={{ fontSize: 12, fontWeight: 600, color: '#aaa', letterSpacing: '0.08em', marginBottom: 10 }}>おすすめアクション</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {['SNS運用を始める', 'Web制作に挑戦', 'イベント企画に参加'].map((action, i) => (
                    <div key={action} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: i === 0 ? 'rgba(var(--accent-rgb), 0.06)' : 'rgba(0,0,0,0.02)', borderRadius: 12, border: i === 0 ? '1px solid rgba(var(--accent-rgb), 0.12)' : '1px solid transparent' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-accent)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: i === 0 ? 'var(--color-accent-dark)' : 'var(--color-primary)' }}>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{ borderRadius: 16, padding: '28px 32px', marginBottom: 12, background: 'rgba(var(--accent-rgb), 0.03)', border: '1px solid rgba(var(--accent-rgb), 0.06)' }}>
          <div className="hero-trust-bar" style={{ display: 'flex', justifyContent: 'center', gap: 56 }}>
            {[
              { value: '1,200+', label: '累計診断数', icon: 'group' },
              { value: '87%', label: '行動開始率', icon: 'trending_up' },
              { value: '4.6', label: '満足度（5.0中）', icon: 'star' },
            ].map((item) => (
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
