const types = [
  {
    label: "ガクチカ型",
    title: "経験を作る・発信する・運営する",
    desc: "SNS運用、Web制作、イベント企画 — 「やった」を形にするタイプ。就活の自己PRで話せる実績を積み上げる。",
    actions: ["SNS運用を始める", "Web制作に挑戦", "イベント企画に参加"],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <path d="M28 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.15)" strokeLinejoin="round" />
        <rect x="12" y="28" width="32" height="20" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M20 34h16M20 40h10" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "留学型",
    title: "世界を広げる・語学を磨く",
    desc: "英語カフェ、留学準備、TOEIC対策 — グローバルに動くタイプ。海外経験で視野を広げる。",
    actions: ["英語カフェに参加", "留学準備を開始", "TOEIC対策"],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <circle cx="28" cy="28" r="18" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <ellipse cx="28" cy="28" rx="8" ry="18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
        <path d="M10 28h36" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
        <path d="M12 18h32M12 38h32" stroke="var(--color-accent)" strokeWidth="1" opacity="0.3" />
        <path d="M36 12l6-2 2 6" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "資格型",
    title: "武器を手に入れる",
    desc: "人気資格、学習計画、検定挑戦 — コツコツ力を蓄えるタイプ。わかりやすいスキル証明を手に入れる。",
    actions: ["人気資格を調べる", "学習計画を立てる", "検定に挑戦"],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <rect x="8" y="12" width="40" height="28" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M8 20h40" stroke="var(--color-accent)" strokeWidth="2" />
        <circle cx="28" cy="32" r="6" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(255,107,53,0.15)" />
        <path d="M25 32l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 44l6-4 6 4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "サークル型",
    title: "仲間と動く・居場所を見つける",
    desc: "コミュニティ参加、イベント運営、団体活動 — つながりで成長するタイプ。人との関わりの中で力を発揮する。",
    actions: ["コミュニティに参加", "イベント運営", "団体を立ち上げる"],
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <circle cx="28" cy="20" r="7" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.15)" />
        <circle cx="14" cy="26" r="5" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(255,107,53,0.08)" />
        <circle cx="42" cy="26" r="5" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(255,107,53,0.08)" />
        <path d="M18 44c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 42c0-4.4 3.6-8 8-8" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M50 42c0-4.4-3.6-8-8-8" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

export default function ResultPreview() {
  return (
    <section
      className="section-spacing"
      id="types"
      style={{ background: "var(--color-dark)", color: "#fff" }}
    >
      <div className="container-inner">
        <h2 className="section-heading" style={{ color: "#fff" }}>4つのタイプ</h2>
        <p className="section-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
          あなたはどのタイプ？ それぞれに最適な行動プランがある。
        </p>

        {/* Type classification diagram */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ position: "relative", width: 240, height: 240 }}>
            {/* Center circle */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,107,53,0.15)", border: "2px solid rgba(255,107,53,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textAlign: "center", lineHeight: 1.3 }}>あなたの<br />タイプ</span>
            </div>
            {/* Connecting lines */}
            <svg viewBox="0 0 240 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <line x1="120" y1="40" x2="120" y2="85" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="200" y1="120" x2="155" y2="120" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="120" y1="200" x2="120" y2="155" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="40" y1="120" x2="85" y2="120" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
            </svg>
            {/* 4 type labels */}
            {[
              { label: "ガクチカ", x: "50%", y: 0, transform: "translate(-50%, 0)" },
              { label: "留学", x: "100%", y: "50%", transform: "translate(-100%, -50%)" },
              { label: "資格", x: "50%", y: "100%", transform: "translate(-50%, -100%)" },
              { label: "サークル", x: 0, y: "50%", transform: "translate(0, -50%)" },
            ].map((item) => (
              <div key={item.label} style={{ position: "absolute", left: item.x, top: item.y, transform: item.transform }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)" }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Type cards with icons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="max-md:!grid-cols-1">
          {types.map((type) => (
            <div
              key={type.label}
              style={{
                padding: "36px 32px",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "background 0.2s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {type.icon}
                </div>
                <div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: 4 }}>
                    {type.label}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 900 }}>
                    {type.title}
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 16 }}>
                {type.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {type.actions.map((action) => (
                  <span
                    key={action}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 14px",
                      borderRadius: 100,
                      background: "rgba(255,107,53,0.1)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(255,107,53,0.15)",
                    }}
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
