export default function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Full-width photo background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&h=900&fit=crop"
          alt="キャンパスで学ぶ学生たち"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.6) 100%)" }} />
      </div>

      <div className="container-inner" style={{ position: "relative", zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="max-md:!grid-cols-1">
          {/* Left: Copy */}
          <div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#fff", marginBottom: 24 }}>
              <span style={{ color: "var(--color-accent)" }}>「やりたいことが<br />見つからない」</span>を、<br />
              たった5問で<br />解決。
            </h1>

            <p style={{ fontSize: 16, lineHeight: 1.9, color: "rgba(255,255,255,0.8)", maxWidth: 440, marginBottom: 36 }}>
              5つの質問に答えるだけで、あなたの志向を4タイプに分類。ガクチカ・留学・資格・サークル — それぞれに合った「最初の一歩」を無料で提案します。
            </p>

            <a href="#" className="cta-button" style={{ marginBottom: 24 }}>
              無料で診断する（3分で完了）
            </a>

            <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}>
              {["登録不要", "完全無料", "結果はすぐ表示"].map((text) => (
                <span key={text} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16, color: "var(--color-accent)" }}>check</span>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="max-md:hidden" style={{ display: "flex", flexDirection: "column", gap: 24, justifyContent: "center" }}>
            {[
              { num: "1,200+", label: "診断済み" },
              { num: "87%", label: "行動開始率" },
              { num: "4.6", label: "満足度（5.0中）" },
            ].map((stat) => (
              <div key={stat.label} style={{ borderLeft: "3px solid var(--color-accent)", paddingLeft: 20 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2.4rem", fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stats row */}
        <div className="hidden max-md:flex" style={{ gap: 24, marginTop: 32, justifyContent: "center" }}>
          {[
            { num: "1,200+", label: "診断済み" },
            { num: "87%", label: "行動開始" },
            { num: "4.6", label: "満足度" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 900, color: "#fff" }}>{stat.num}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
