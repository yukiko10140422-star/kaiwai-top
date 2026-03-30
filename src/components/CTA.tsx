export default function CTA() {
  return (
    <section id="cta" style={{ position: "relative", overflow: "hidden" }}>
      {/* Photo background with dark overlay */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(20,20,30,0.92) 100%)" }} />
      </div>

      <div className="container-inner" style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "clamp(80px, 12vw, 140px) 0" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
          まだ悩んでいる<br />
          <span style={{ color: "var(--color-accent)" }}>あなた</span>へ
        </h2>

        <p style={{ fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.55)", maxWidth: 460, margin: "0 auto 40px" }}>
          「何をすればいいかわからない」は、多くの学生が感じている、ごく普通の気持ちです。3分後には最初の一歩が見えています。
        </p>

        <a href="#" className="cta-button" style={{ padding: "20px 52px", fontSize: 17 }}>
          無料で診断する（3分で完了）
        </a>

        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginTop: 32 }}>
          {[
            "1,200人が診断済み",
            "87%が行動を開始",
            "登録不要・勧誘なし",
          ].map((text) => (
            <span key={text} style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
