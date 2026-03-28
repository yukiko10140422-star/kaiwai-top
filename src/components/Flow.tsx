export default function Flow() {
  return (
    <section
      className="section-spacing bg-bg-alt"
      id="flow"
    >
      <div className="card-base relative overflow-hidden before:content-[''] before:absolute before:-top-[30%] before:-right-[15%] before:w-1/2 before:h-[160%] before:bg-[radial-gradient(circle,rgba(var(--accent-rgb),0.03),transparent_60%)] before:rounded-full before:pointer-events-none" style={{ maxWidth: 680, margin: '0 auto', padding: 'clamp(36px, 5vw, 64px)' }}>
        <div className="section-label">HOW IT WORKS</div>
        <h2 className="font-extrabold text-primary text-center" style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', marginBottom: 8 }}>
          KAIWAIでできること
        </h2>
        <div className="text-center" style={{ fontSize: 14, color: '#999', marginBottom: 'clamp(32px, 3vw, 48px)' }}>
          たった3分で「次にやるべきこと」がわかる無料診断サービス
        </div>

        <div className="flex flex-col items-stretch relative z-1">
          {/* Step 1 */}
          <div className="flex gap-4 max-md:gap-3 items-start">
            <div className="w-9 h-9 max-md:w-[30px] max-md:h-[30px] min-w-9 max-md:min-w-[30px] rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display text-[15px] max-md:text-[13px] font-extrabold flex items-center justify-center shadow-[0_4px_14px_rgba(var(--accent-rgb),0.3)] mt-1">
              1
            </div>
            <div className="flex-1 bg-bg-alt rounded-2xl border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]" style={{ borderLeftWidth: "3px", borderLeftColor: "#ff6b35", padding: '20px 24px' }}>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="material-symbols-outlined text-[20px] text-accent"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <h3 className="text-base max-md:text-[15px] font-bold">
                  3分で無料診断
                </h3>
              </div>
              <div className="text-[13px] text-[#999] mb-2 leading-[1.6]">
                5つの質問に答えるだけ
              </div>
              <span className="inline-block font-semibold py-[3px] px-3 rounded-full bg-[rgba(var(--accent-rgb),0.08)] text-accent-dark" style={{ fontSize: 12 }}>
                所要時間 3分
              </span>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center h-10 relative ml-[18px] max-md:ml-[15px]">
            <div className="w-0.5 flex-1 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.04)]" />
            <div className="flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-accent">
                south
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 max-md:gap-3 items-start">
            <div className="w-9 h-9 max-md:w-[30px] max-md:h-[30px] min-w-9 max-md:min-w-[30px] rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display text-[15px] max-md:text-[13px] font-extrabold flex items-center justify-center shadow-[0_4px_14px_rgba(var(--accent-rgb),0.3)] mt-1">
              2
            </div>
            <div className="flex-1 bg-bg-alt rounded-2xl border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]" style={{ borderLeftWidth: "3px", borderLeftColor: "#3b82f6", padding: '20px 24px' }}>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="material-symbols-outlined text-[20px] text-[#3b82f6]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bolt
                </span>
                <h3 className="text-base max-md:text-[15px] font-bold">
                  あなたのタイプを提示
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["ガクチカ型", "留学型", "資格型", "サークル型"].map(
                  (type) => (
                    <span
                      key={type}
                      className="text-xs font-semibold py-1 px-3 rounded-full bg-white border border-border text-primary"
                    >
                      {type}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Connector */}
          <div className="flex flex-col items-center h-10 relative ml-[18px] max-md:ml-[15px]">
            <div className="w-0.5 flex-1 bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.04)]" />
            <div className="flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px] text-accent">
                south
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 max-md:gap-3 items-start">
            <div className="w-9 h-9 max-md:w-[30px] max-md:h-[30px] min-w-9 max-md:min-w-[30px] rounded-full bg-gradient-to-br from-accent to-accent-dark text-white font-display text-[15px] max-md:text-[13px] font-extrabold flex items-center justify-center shadow-[0_4px_14px_rgba(var(--accent-rgb),0.3)] mt-1">
              3
            </div>
            <div className="flex-1 bg-bg-alt rounded-2xl border border-border shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]" style={{ borderLeftWidth: "3px", borderLeftColor: "#22c55e", padding: '20px 24px' }}>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="material-symbols-outlined text-[20px] text-[#22c55e]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <h3 className="text-base max-md:text-[15px] font-bold">
                  具体的なアクションを提案
                </h3>
              </div>
              <div className="text-[13px] text-[#999] mb-2 leading-[1.6]">
                タイプに合った最初の一歩を提示
              </div>
              <span className="inline-block font-semibold py-[3px] px-3 rounded-full bg-[rgba(34,197,94,0.08)] text-[#16a34a]" style={{ fontSize: 12 }}>
                すぐに行動開始できる
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
