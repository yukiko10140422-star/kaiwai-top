import Link from "next/link";

const types = [
  {
    label: "ガクチカ型",
    title: "経験を作る・発信する・運営する",
    desc: "就活の自己PRで話せる実績を、実務プロジェクトへの参加を通じて積み上げる。",
    href: "/gakuchika",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <path d="M28 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.15)" strokeLinejoin="round" />
        <rect x="12" y="28" width="32" height="20" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M20 34h16M20 40h10" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    examples: [
      { text: "SNS運用 — フォロワー獲得まで実践", link: "/gakuchika/projects" },
      { text: "Web制作 — LP・サイトをチームで作る", link: "/gakuchika/projects" },
      { text: "イベント企画 — 50人規模の運営経験", link: "/gakuchika/projects" },
    ],
    subLinks: [
      { label: "プロジェクト一覧", href: "/gakuchika/projects" },
      { label: "参加の流れ", href: "/gakuchika/flow" },
      { label: "ポートフォリオ作成", href: "/gakuchika/portfolio" },
    ],
  },
  {
    label: "留学型",
    title: "世界を広げる・語学を磨く",
    desc: "英語学習から国選び、エージェント紹介まで、段階的にサポート。",
    href: "/ryugaku",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <circle cx="28" cy="28" r="18" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <ellipse cx="28" cy="28" rx="8" ry="18" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
        <path d="M10 28h36" stroke="var(--color-accent)" strokeWidth="1.5" opacity="0.5" />
        <path d="M36 12l6-2 2 6" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    examples: [
      { text: "TOEIC 600点 — 3ヶ月学習プラン", link: "/ryugaku/prepare" },
      { text: "留学先6か国の費用・特徴を比較", link: "/ryugaku/countries" },
      { text: "英語カフェ — 週1回の実践コミュニティ", link: "/ryugaku/cafe" },
    ],
    subLinks: [
      { label: "英語学習プラン", href: "/ryugaku/prepare" },
      { label: "国選びガイド", href: "/ryugaku/countries" },
      { label: "英語カフェ", href: "/ryugaku/cafe" },
    ],
  },
  {
    label: "資格型",
    title: "武器を手に入れる",
    desc: "人気資格の比較から学習計画まで、わかりやすいスキル証明を手に入れる。",
    href: "/shikaku",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" style={{ width: 48, height: 48 }}>
        <rect x="8" y="12" width="40" height="28" rx="3" stroke="var(--color-accent)" strokeWidth="2" fill="rgba(255,107,53,0.08)" />
        <path d="M8 20h40" stroke="var(--color-accent)" strokeWidth="2" />
        <circle cx="28" cy="32" r="6" stroke="var(--color-accent)" strokeWidth="1.5" fill="rgba(255,107,53,0.15)" />
        <path d="M25 32l2 2 4-4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 44l6-4 6 4" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    examples: [
      { text: "6問診断 — 14資格から上位3つを提案", link: "/shikaku/quiz" },
      { text: "人気資格一覧 — IT・ビジネス・語学", link: "/shikaku/popular" },
      { text: "学習計画テンプレ — 5ステップで作成", link: "/shikaku/plan" },
    ],
    subLinks: [
      { label: "資格診断", href: "/shikaku/quiz" },
      { label: "人気資格一覧", href: "/shikaku/popular" },
      { label: "学習計画", href: "/shikaku/plan" },
    ],
  },
  {
    label: "サークル型",
    title: "仲間と動く・居場所を見つける",
    desc: "サークル探しから集客支援まで、つながりの中で成長する。",
    href: "/circle",
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
    examples: [
      { text: "文化系・体育会のサークル一覧", link: "/circle/search" },
      { text: "スポーツ8種 — 日程・場所・参加方法", link: "/circle/sports" },
      { text: "集客支援 — SNSテンプレ・ポスター制作", link: "/circle/promote" },
    ],
    subLinks: [
      { label: "サークル検索", href: "/circle/search" },
      { label: "スポーツ一覧", href: "/circle/sports" },
      { label: "集客支援", href: "/circle/promote" },
    ],
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
          あなたはどのタイプ？ それぞれに具体的なサポートを用意しています。
        </p>

        {/* Type classification diagram */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <div style={{ position: "relative", width: 240, height: 240 }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 80, height: 80, borderRadius: "50%", background: "rgba(255,107,53,0.15)", border: "2px solid rgba(255,107,53,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", textAlign: "center", lineHeight: 1.3 }}>あなたの<br />タイプ</span>
            </div>
            <svg viewBox="0 0 240 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
              <line x1="120" y1="40" x2="120" y2="85" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="200" y1="120" x2="155" y2="120" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="120" y1="200" x2="120" y2="155" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
              <line x1="40" y1="120" x2="85" y2="120" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
            </svg>
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

        {/* Type cards with concrete examples */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="max-md:!grid-cols-1">
          {types.map((type) => (
            <div
              key={type.label}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "28px 24px",
                transition: "border-color 0.2s",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {type.icon}
                </div>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.12em", display: "block", marginBottom: 3 }}>
                    {type.label}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 900 }}>
                    {type.title}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 16 }}>
                {type.desc}
              </p>

              {/* Concrete examples */}
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "14px 16px", marginBottom: 16 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", marginBottom: 10 }}>
                  たとえばこんなサポート
                </div>
                {type.examples.map((ex) => (
                  <Link key={ex.text} href={ex.link} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, textDecoration: "none" }}>
                    <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14, flexShrink: 0 }}>
                      <path d="M4 8l3 3 5-5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{ex.text}</span>
                  </Link>
                ))}
              </div>

              {/* Sub-page links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {type.subLinks.map((sl) => (
                  <Link
                    key={sl.label}
                    href={sl.href}
                    style={{
                      fontSize: 12, fontWeight: 600,
                      padding: "5px 14px", borderRadius: 100,
                      background: "rgba(255,107,53,0.1)", color: "var(--color-accent)",
                      border: "1px solid rgba(255,107,53,0.15)",
                      textDecoration: "none",
                    }}
                  >
                    {sl.label}
                  </Link>
                ))}
              </div>

              {/* CTA to category top */}
              <Link href={type.href} style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "rgba(255,107,53,0.12)", color: "var(--color-accent)",
                padding: "10px 20px", borderRadius: 100,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                border: "1px solid rgba(255,107,53,0.2)",
                transition: "background 0.2s",
              }}>
                {type.label.replace("型", "")}サポートを見る
                <svg viewBox="0 0 16 16" fill="none" style={{ width: 14, height: 14 }}>
                  <path d="M6 3l5 5-5 5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* "まだわからない" link */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link href="/sonota" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            color: "rgba(255,255,255,0.5)", fontSize: 14, fontWeight: 500,
            textDecoration: "none", padding: "10px 20px",
            border: "1px solid rgba(255,255,255,0.1)", borderRadius: 100,
            transition: "border-color 0.2s, color 0.2s",
          }}>
            まだどのタイプかわからない？ → 5問で診断する
          </Link>
        </div>
      </div>
    </section>
  );
}
