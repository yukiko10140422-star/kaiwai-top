export default function Flow() {
  return (
    <section
      className="section-spacing bg-bg-alt"
      id="flow"
    >
      <div className="card-base relative overflow-hidden" style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(36px, 5vw, 64px)' }}>
        {/* Decorative radial gradient */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '-30%',
            right: '-15%',
            width: '50%',
            height: '160%',
            background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.03), transparent 60%)',
          }}
        />

        <div className="section-label">診断の流れ</div>
        <h2 className="font-extrabold text-primary text-center" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 8 }}>
          たった3ステップで、次の一歩が見える
        </h2>
        <div className="text-center" style={{ fontSize: 14, color: '#999', marginBottom: 'clamp(32px, 3vw, 48px)' }}>
          5つの質問に答えるだけ。あなた専用のアクションプランが手に入ります。
        </div>

        <div className="flex flex-col items-stretch relative" style={{ zIndex: 1 }}>
          {/* Step 1 */}
          <div className="flex items-start" style={{ gap: 16 }}>
            <div
              className="rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display font-extrabold flex items-center justify-center"
              style={{ width: 36, height: 36, minWidth: 36, fontSize: 15, boxShadow: '0 4px 14px rgba(var(--accent-rgb), 0.3)', marginTop: 4 }}
            >
              1
            </div>
            <div
              className="flex-1 bg-bg-alt border border-border transition-all hover:-translate-y-0.5"
              style={{ borderRadius: 16, borderLeftWidth: 3, borderLeftColor: '#ff6b35', padding: '20px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              <div className="flex items-center" style={{ gap: 8, marginBottom: 4 }}>
                <span
                  className="material-symbols-outlined text-accent"
                  style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="font-bold" style={{ fontSize: 16 }}>
                  3分で無料診断
                </h3>
              </div>
              <div style={{ fontSize: 13, color: '#999', marginBottom: 8, lineHeight: 1.6 }}>
                5つの質問に答えるだけ
              </div>
              <span
                className="inline-block font-semibold text-accent-dark"
                style={{ fontSize: 12, padding: '3px 12px', borderRadius: 9999, background: 'rgba(var(--accent-rgb), 0.08)' }}
              >
                所要時間 3分
              </span>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center relative" style={{ height: 40, marginLeft: 18 }}>
            <div className="flex-1" style={{ width: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.04))' }} />
            <div className="flex items-center justify-center">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 20 }}>
                south
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start" style={{ gap: 16 }}>
            <div
              className="rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display font-extrabold flex items-center justify-center"
              style={{ width: 36, height: 36, minWidth: 36, fontSize: 15, boxShadow: '0 4px 14px rgba(var(--accent-rgb), 0.3)', marginTop: 4 }}
            >
              2
            </div>
            <div
              className="flex-1 bg-bg-alt border border-border transition-all hover:-translate-y-0.5"
              style={{ borderRadius: 16, borderLeftWidth: 3, borderLeftColor: '#3b82f6', padding: '20px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              <div className="flex items-center" style={{ gap: 8, marginBottom: 4 }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 20, color: '#3b82f6', fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
                <h3 className="font-bold" style={{ fontSize: 16 }}>
                  あなたのタイプを提示
                </h3>
              </div>
              <div style={{ fontSize: 13, color: '#999', marginBottom: 10, lineHeight: 1.6 }}>
                4つのタイプからあなたに最適なキャリアパスを診断
              </div>
              {/* 4タイプ ミニプレビューカード */}
              <div className="flex flex-wrap" style={{ gap: 6 }}>
                {([
                  { label: 'ガクチカ型', color: '#ff6b35', bg: 'rgba(255,107,53,0.1)' },
                  { label: '留学型', color: '#3b82f6', bg: 'rgba(59,130,246,0.1)' },
                  { label: '資格型', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
                  { label: 'サークル型', color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
                ] as const).map((type) => (
                  <span
                    key={type.label}
                    className="inline-block font-semibold"
                    style={{
                      fontSize: 12,
                      padding: '4px 12px',
                      borderRadius: 9999,
                      background: type.bg,
                      color: type.color,
                      border: `1px solid ${type.color}20`,
                    }}
                  >
                    {type.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center relative" style={{ height: 40, marginLeft: 18 }}>
            <div className="flex-1" style={{ width: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.04))' }} />
            <div className="flex items-center justify-center">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: 20 }}>
                south
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start" style={{ gap: 16 }}>
            <div
              className="rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display font-extrabold flex items-center justify-center"
              style={{ width: 36, height: 36, minWidth: 36, fontSize: 15, boxShadow: '0 4px 14px rgba(var(--accent-rgb), 0.3)', marginTop: 4 }}
            >
              3
            </div>
            <div
              className="flex-1 bg-bg-alt border border-border transition-all hover:-translate-y-0.5"
              style={{ borderRadius: 16, borderLeftWidth: 3, borderLeftColor: '#22c55e', padding: '20px 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
            >
              <div className="flex items-center" style={{ gap: 8, marginBottom: 4 }}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 20, color: '#22c55e', fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <h3 className="font-bold" style={{ fontSize: 16 }}>
                  あなた専用の行動プランを提案
                </h3>
              </div>
              <div style={{ fontSize: 13, color: '#999', marginBottom: 8, lineHeight: 1.6 }}>
                タイプに合った具体的なタスクリストを受け取れます
              </div>
              <span
                className="inline-block font-semibold"
                style={{ fontSize: 12, padding: '3px 12px', borderRadius: 9999, background: 'rgba(34,197,94,0.08)', color: '#16a34a' }}
              >
                すぐに行動開始できる
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
