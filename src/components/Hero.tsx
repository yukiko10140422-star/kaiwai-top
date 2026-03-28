export default function Hero() {
  return (
    <section className="bg-surface text-primary relative">
      <div className="container-inner">
        {/* メイングリッド: テキスト左 + モックアップ右 */}
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
            paddingTop: 80,
            paddingBottom: 48,
          }}
        >
          {/* 左: テキストエリア */}
          <div>
            {/* 見出し */}
            <h1
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1.45,
                letterSpacing: '-0.03em',
                fontWeight: 800,
                marginBottom: 20,
              }}
              className="text-primary"
            >
              「やりたいことが
              <br className="md:hidden" />
              見つからない」を、
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-dark))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                たった5問
              </span>
              で解決。
            </h1>

            {/* サブヘッド */}
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.85,
                marginBottom: 32,
                maxWidth: 460,
                color: '#666',
              }}
            >
              5つの質問に答えるだけで、あなたの志向を4タイプに分類。ガクチカ・留学・資格・サークル — それぞれに合った「最初の一歩」を無料で提案します。
            </p>

            {/* CTAボタン */}
            <div style={{ marginBottom: 16 }}>
              <a
                href="#"
                className="hero-cta items-center bg-gradient-to-br from-accent to-accent-dark text-white font-semibold no-underline shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  padding: '18px 40px',
                  display: 'inline-flex',
                  gap: 10,
                  borderRadius: 14,
                  fontSize: 16,
                }}
              >
                <span>無料で診断する（3分で完了）</span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 20 }}
                >
                  arrow_forward
                </span>
              </a>
            </div>

            {/* CTA下の信頼シグナル */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                fontSize: 13,
                color: '#999',
              }}
            >
              <span>登録不要</span>
              <span style={{ color: '#ccc' }}>・</span>
              <span>完全無料</span>
              <span style={{ color: '#ccc' }}>・</span>
              <span>結果はすぐ表示</span>
            </div>
          </div>

          {/* 右: 診断結果モックアップUI */}
          <div className="hero-visual">
            <div
              style={{
                background: '#ffffff',
                borderRadius: 24,
                boxShadow: '0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* 上部グラデーションバー */}
              <div
                style={{
                  height: 6,
                  background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-dark))',
                }}
              />

              <div style={{ padding: '28px 32px 32px' }}>
                {/* タイプ結果ヘッダー */}
                <p
                  style={{
                    fontSize: 13,
                    color: '#999',
                    marginBottom: 8,
                    fontWeight: 500,
                  }}
                >
                  あなたのタイプは...
                </p>

                {/* タイプ名 */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 24,
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: 28,
                      color: 'var(--color-accent)',
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    star
                  </span>
                  <span
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-primary)',
                    }}
                  >
                    ガクチカ型
                  </span>
                </div>

                {/* おすすめアクション */}
                <p
                  style={{
                    fontSize: 12,
                    color: '#999',
                    marginBottom: 12,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  おすすめアクション
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'SNS運用を始める',
                    'Web制作に挑戦',
                    'イベント企画に参加',
                  ].map((action) => (
                    <div
                      key={action}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '10px 14px',
                        background: 'rgba(var(--accent-rgb), 0.04)',
                        borderRadius: 10,
                      }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontSize: 18,
                          color: 'var(--color-accent)',
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        check_circle
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: 'var(--color-primary)',
                        }}
                      >
                        {action}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 詳しく見るボタン */}
                <div style={{ marginTop: 20 }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--color-accent)',
                      cursor: 'pointer',
                    }}
                  >
                    詳しく見る
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 16 }}
                    >
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 信頼バー */}
        <div
          style={{
            background: 'rgba(var(--accent-rgb), 0.04)',
            borderRadius: 16,
            padding: '24px 32px',
            marginBottom: 20,
          }}
        >
          <div
            className="hero-trust-bar"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 48,
            }}
          >
            {[
              { value: '1,200人', label: '累計診断済み' },
              { value: '87%', label: '行動を開始' },
              { value: '4.6/5.0', label: '満足度' },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    lineHeight: 1.3,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#999',
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
