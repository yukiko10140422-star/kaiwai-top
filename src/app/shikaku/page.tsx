"use client";
import Link from "next/link";

const branches = [
  {
    href: "/shikaku/popular",
    label: "人気資格一覧",
    desc: "就活で武器になる資格をチェックしよう",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        <rect x="5" y="7" width="30" height="26" rx="4" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M11 15h18M11 21h13M11 27h9" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    chips: ["MOS", "TOEIC", "簿記", "宅建", "FP"],
  },
  {
    href: "/shikaku/interest",
    label: "興味別分類",
    desc: "あなたの志向に合った資格分野を見つけよう",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        <circle cx="20" cy="20" r="14" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M20 10v10l8 4" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    chips: ["IT系", "ビジネス系", "語学系", "医療・福祉系"],
  },
  {
    href: "/shikaku/plan",
    label: "学習計画テンプレ",
    desc: "試験日から逆算した学習スケジュールを作ろう",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" style={{ width: 40, height: 40 }}>
        <rect x="6" y="5" width="28" height="30" rx="4" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M12 13h16M12 19h16M12 25h9" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="28" cy="26" r="5" fill="rgba(255,107,53,0.15)" stroke="var(--color-accent)" strokeWidth="1.8" />
        <path d="M26 26l1.5 1.5 2.5-2.5" stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    chips: ["逆算スケジュール", "進捗管理", "合格目標"],
  },
];

export default function ShikakuPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          もどる
        </Link>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 20px" }}>
        {/* Title */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "10px 24px", borderRadius: 100,
            fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 20,
            marginBottom: 16,
            boxShadow: "0 4px 16px rgba(255,107,53,0.25)",
          }}>
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20 }}>
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="rgba(255,255,255,0.9)" />
            </svg>
            資格
          </div>
          <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7 }}>
            どのサポートを使いますか？
          </p>
        </div>

        {/* Branch cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {branches.map((branch) => (
            <Link key={branch.href} href={branch.href} style={{ textDecoration: "none" }}>
              <div style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 16,
                padding: "20px 20px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                cursor: "pointer",
                transition: "box-shadow 0.2s, transform 0.15s",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(255,107,53,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                }}
              >
                {/* Icon */}
                <div style={{ flexShrink: 0 }}>{branch.icon}</div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 17, color: "var(--color-primary)", marginBottom: 4 }}>
                    {branch.label}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 10 }}>
                    {branch.desc}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {branch.chips.map((chip) => (
                      <span key={chip} style={{
                        fontSize: 11, fontWeight: 600,
                        padding: "3px 10px", borderRadius: 100,
                        background: "rgba(var(--accent-rgb), 0.08)",
                        color: "var(--color-accent)",
                      }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, flexShrink: 0, color: "var(--color-muted)" }}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
