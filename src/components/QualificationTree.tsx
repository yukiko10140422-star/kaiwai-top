const branches = [
  {
    id: "popular",
    label: "人気資格一覧",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="var(--color-accent)" strokeWidth="1.8" fill="rgba(255,107,53,0.08)" />
        <path d="M9 12h14M9 17h10M9 22h7" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    desc: "MOSやTOEIC、簿記、宅建など、就活で武器になる資格を一覧でチェック。",
    chips: ["MOS", "TOEIC", "簿記", "宅建", "FP"],
  },
  {
    id: "interest",
    label: "興味別分類",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <circle cx="16" cy="16" r="11" stroke="var(--color-accent)" strokeWidth="1.8" fill="rgba(255,107,53,0.08)" />
        <path d="M16 5v11l7 4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: "IT系・ビジネス系・語学系など、あなたの志向に合った資格分野を絞り込む。",
    chips: ["IT系", "ビジネス系", "語学系", "医療・福祉系"],
  },
  {
    id: "plan",
    label: "学習計画テンプレ",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28 }}>
        <rect x="5" y="4" width="22" height="24" rx="3" stroke="var(--color-accent)" strokeWidth="1.8" fill="rgba(255,107,53,0.08)" />
        <path d="M10 10h12M10 15h12M10 20h7" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="21" r="4" fill="rgba(255,107,53,0.15)" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path d="M20.5 21l1 1 2-2" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    desc: "試験日から逆算した週ごとの学習スケジュールを自動生成。継続しやすい計画づくりをサポート。",
    chips: ["逆算スケジュール", "進捗管理", "合格目標設定"],
  },
];

export default function QualificationTree() {
  return (
    <section
      className="section-spacing"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-inner">
        {/* Header */}
        <div className="editorial-header">
          <h2 className="editorial-title">
            資格サポート<br />の3ステップ
          </h2>
          <p className="editorial-sub">
            「何を取ればいいかわからない」から「合格まで伴走」まで。資格取得を通じてわかりやすいスキル証明を手に入れよう。
          </p>
        </div>

        {/* Tree diagram */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48 }}>

          {/* Root node */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 28px",
              borderRadius: 100,
              background: "var(--color-accent)",
              color: "#fff",
              fontFamily: "var(--font-serif)",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: "0.04em",
              boxShadow: "0 4px 16px rgba(255,107,53,0.25)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="rgba(255,255,255,0.9)" />
            </svg>
            資格
          </div>

          {/* Vertical stem */}
          <div style={{ width: 2, height: 32, background: "rgba(255,107,53,0.3)" }} />

          {/* Horizontal connector */}
          <div style={{ position: "relative", width: "100%", maxWidth: 800, height: 2, background: "rgba(255,107,53,0.2)" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: `${16.67 + i * 33.33}%`,
                  top: 0,
                  transform: "translateX(-50%)",
                  width: 2,
                  height: 24,
                  background: "rgba(255,107,53,0.3)",
                }}
              />
            ))}
          </div>

          {/* Branch cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              width: "100%",
              maxWidth: 800,
              paddingTop: 24,
            }}
            className="max-md:!grid-cols-1"
          >
            {branches.map((branch) => (
              <div
                key={branch.id}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: 16,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "box-shadow 0.2s",
                }}
              >
                {/* Icon + label */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {branch.icon}
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 900,
                      fontSize: 16,
                      color: "var(--color-primary)",
                    }}
                  >
                    {branch.label}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75 }}>
                  {branch.desc}
                </p>

                {/* Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {branch.chips.map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: 100,
                        background: "rgba(var(--accent-rgb), 0.08)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div
          style={{
            borderRadius: 16,
            background: "var(--color-warm)",
            border: "1px solid var(--color-border)",
            padding: "32px 40px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 18,
                fontWeight: 900,
                marginBottom: 6,
                color: "var(--color-primary)",
              }}
            >
              まずは自分に合う資格を診断で見つけよう
            </div>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7 }}>
              アンケート回答後、あなたの志向・目標に合った資格ルートを提案します。
            </p>
          </div>
          <a
            href="#診断"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 100,
              background: "var(--color-accent)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: "nowrap",
              boxShadow: "0 4px 16px rgba(255,107,53,0.2)",
            }}
          >
            診断してみる
            <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
