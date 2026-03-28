export default function Hero() {
  return (
    <section style={{ paddingTop: 100, paddingBottom: 60 }} className="bg-surface text-primary relative">
      <div className="container-inner">
        <div
          className="hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}
        >
          {/* 左: テキスト */}
          <div>
            {/* empathy chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {["何を始めればいいかわからない", "ガクチカがない", "就活が不安"].map(text => (
                <span
                  key={text}
                  style={{ padding: '8px 18px', fontSize: 13, background: 'rgba(var(--accent-rgb), 0.08)' }}
                  className="inline-flex items-center gap-1.5 rounded-full text-accent-dark border border-orange-200"
                >
                  <span
                    style={{ width: 6, height: 6, flexShrink: 0 }}
                    className="bg-accent rounded-full"
                  />
                  {text}
                </span>
              ))}
            </div>

            {/* 見出し */}
            <h1
              style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.45, letterSpacing: '-0.03em', marginBottom: 16 }}
              className="font-extrabold text-primary"
            >
              迷っている学生へ。<br />
              <span className="bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent">
                3分の診断
              </span>
              で、次の一歩がわかる。
            </h1>

            {/* サブテキスト */}
            <p style={{ fontSize: 14, lineHeight: 1.9, marginBottom: 32, maxWidth: 440, color: '#666' }}>
              あなたの志向・興味・現在地から、4つのタイプに分類。
              ガクチカ・留学・資格・サークル、それぞれに合った
              具体的なアクションを無料で提案します。
            </p>

            {/* CTAボタン */}
            <div style={{ marginBottom: 24 }}>
              <a
                href="#"
                style={{ padding: '18px 40px', display: 'inline-flex', gap: 10 }}
                className="hero-cta items-center bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl text-base font-semibold no-underline shadow-lg hover:shadow-xl transition-shadow"
              >
                <span>無料で診断してみる</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>

            {/* 信頼シグナル 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[
                { icon: "timer", text: "3分で完了" },
                { icon: "verified_user", text: "完全無料" },
                { icon: "bolt", text: "結果はすぐ表示" },
                { icon: "do_not_disturb_on", text: "無理な勧誘なし" },
              ].map(item => (
                <div
                  key={item.text}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#999' }}
                >
                  <span
                    className="material-symbols-outlined text-accent"
                    style={{ fontVariationSettings: "'FILL' 1", fontSize: 15 }}
                  >
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* 右: 写真グリッド */}
          <div className="relative hero-visual">
            <div
              className="hero-photo-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}
            >
              <div className="hero-photo-main" style={{ gridRow: '1 / 3' }}>
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=800&fit=crop&crop=faces"
                  alt="学生が協力して学んでいる様子"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                  className="shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop&crop=faces"
                  alt="学生グループの議論"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                  className="shadow-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop&crop=faces"
                  alt="チームでの作業風景"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
                  className="shadow-lg"
                />
              </div>
            </div>

            {/* フロートカード */}
            <div
              className="hero-float-card"
              style={{
                position: 'absolute', bottom: 8, left: -12,
                background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0,0,0,0.06)', borderRadius: 14,
                padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
                boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
              }}
            >
              <div
                style={{ width: 32, height: 32, flexShrink: 0 }}
                className="rounded-full bg-orange-50 flex items-center justify-center"
              >
                <span
                  className="material-symbols-outlined text-base text-accent"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  trending_up
                </span>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>
                <strong style={{ display: 'block', fontSize: 14, fontWeight: 700 }}>87%の学生が</strong>
                <span style={{ color: '#777' }}>診断後に行動を開始</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
