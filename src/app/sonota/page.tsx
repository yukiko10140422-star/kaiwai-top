"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const questions = [
  {
    q: "今いちばん得たいものに近いのはどれですか？",
    options: [
      { label: "就活や自己PRで話せる経験", type: "gakuchika" },
      { label: "語学力や海外に関わる経験", type: "ryugaku" },
      { label: "わかりやすいスキルや証明", type: "shikaku" },
      { label: "仲間と一緒に取り組む居場所", type: "circle" },
    ],
  },
  {
    q: "何か始めるとしたら、いちばん続けやすいのは？",
    options: [
      { label: "何かを作る・発信する・運営する", type: "gakuchika" },
      { label: "英語や海外に関する準備を進める", type: "ryugaku" },
      { label: "勉強して試験や検定に挑戦する", type: "shikaku" },
      { label: "誰かと一緒にイベントに参加する", type: "circle" },
    ],
  },
  {
    q: "周りから評価されたい形として近いのは？",
    options: [
      { label: "行動して経験を積んでいる人", type: "gakuchika" },
      { label: "新しい環境に挑戦している人", type: "ryugaku" },
      { label: "努力して知識を身につけた人", type: "shikaku" },
      { label: "チームの中で活躍できる人", type: "circle" },
    ],
  },
  {
    q: "今の自分に足りないと感じるものは？",
    options: [
      { label: "実績や行動経験", type: "gakuchika" },
      { label: "視野の広さや国際感覚", type: "ryugaku" },
      { label: "専門性やわかりやすい武器", type: "shikaku" },
      { label: "人とのつながりや所属感", type: "circle" },
    ],
  },
  {
    q: "最初の一歩として少しワクワクするのは？",
    options: [
      { label: "SNS運用やWeb制作、企画に関わる", type: "gakuchika" },
      { label: "留学準備や語学学習を始める", type: "ryugaku" },
      { label: "資格の勉強計画を立てる", type: "shikaku" },
      { label: "コミュニティやサークル活動に参加", type: "circle" },
    ],
  },
];

const typeInfo: Record<string, { label: string; desc: string; href: string; color: string }> = {
  gakuchika: { label: "ガクチカ型", desc: "まずは「経験を作ること」が力になるタイプ。SNS運用、Web制作、企画など、自分で実績を作れる活動が向いています。", href: "/gakuchika", color: "var(--color-accent)" },
  ryugaku: { label: "留学型", desc: "海外や異文化にまつわる経験が、あなたの行動のモチベーションになりやすいタイプ。語学学習や留学準備から始めてみましょう。", href: "/ryugaku", color: "var(--color-accent)" },
  shikaku: { label: "資格型", desc: "目標に挑み、努力の成果がわかりやすい形で残ることにやりがいを感じるタイプ。人気資格の情報収集から始めてみましょう。", href: "/shikaku", color: "var(--color-accent)" },
  circle: { label: "サークル型", desc: "人とのつながりの中で力を発揮するタイプ。コミュニティ活動やサークル運営に参加してみましょう。", href: "/circle", color: "var(--color-accent)" },
};

export default function SonotaPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = useCallback((type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Tally results
      const counts: Record<string, number> = {};
      newAnswers.forEach((a) => { counts[a] = (counts[a] || 0) + 1; });
      // Tie-break: Q1 priority, then Q5
      const maxCount = Math.max(...Object.values(counts));
      const winners = Object.keys(counts).filter((k) => counts[k] === maxCount);
      if (winners.length === 1) {
        setResult(winners[0]);
      } else {
        // Q1 priority
        const q1 = newAnswers[0];
        if (winners.includes(q1)) { setResult(q1); }
        else {
          const q5 = newAnswers[4];
          if (winners.includes(q5)) { setResult(q5); }
          else { setResult(winners[0]); }
        }
      }
    }
  }, [answers, currentQ]);

  const reset = useCallback(() => {
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  }, []);

  // Result view
  if (result) {
    const info = typeInfo[result];
    return (
      <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
        <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            トップに戻る
          </Link>
        </div>

        <div style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px", textAlign: "center" }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 8 }}>あなたのタイプは…</div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--color-accent)", color: "#fff",
              padding: "12px 32px", borderRadius: 100,
              fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 24,
              boxShadow: "0 4px 20px rgba(255,107,53,0.3)",
            }}>
              {info.label}
            </div>
          </div>

          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 20, padding: "28px 24px", marginBottom: 32, textAlign: "left" }}>
            <p style={{ fontSize: 15, color: "var(--color-primary)", lineHeight: 1.85, fontFamily: "var(--font-serif)" }}>
              {info.desc}
            </p>
          </div>

          <Link href={info.href} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--color-accent)", color: "#fff",
            padding: "14px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: 15, textDecoration: "none",
            boxShadow: "0 4px 14px rgba(255,107,53,0.25)",
          }}>
            {info.label}のサポートを見る
            <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18 }}>
              <path d="M7 4l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <div style={{ marginTop: 20 }}>
            <button onClick={reset} style={{ background: "none", border: "none", color: "var(--color-muted)", fontSize: 13, cursor: "pointer", textDecoration: "underline" }}>
              もう一度診断する
            </button>
          </div>

          <div style={{ marginTop: 40 }}>
            <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 12 }}>他のタイプも見てみる</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {Object.entries(typeInfo).filter(([k]) => k !== result).map(([k, v]) => (
                <Link key={k} href={v.href} style={{ fontSize: 13, color: "var(--color-accent)", background: "rgba(255,107,53,0.06)", borderRadius: 9999, padding: "6px 14px", textDecoration: "none", border: "1px solid rgba(255,107,53,0.12)" }}>
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  const q = questions[currentQ];
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          もどる
        </Link>
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "48px 20px" }}>
        {/* Progress */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "var(--color-accent)" }}>
            Q {String(currentQ + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
          </span>
          <div style={{ flex: 1, height: 4, background: "var(--color-border)", borderRadius: 2 }}>
            <div style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, height: "100%", background: "var(--color-accent)", borderRadius: 2, transition: "width 0.3s ease" }} />
          </div>
        </div>

        <h1 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 22, color: "var(--color-primary)", lineHeight: 1.5, marginBottom: 32 }}>
          {q.q}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {q.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.type)}
              style={{
                background: "var(--color-surface)",
                border: "2px solid var(--color-border)",
                borderRadius: 16,
                padding: "20px 24px",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 600,
                color: "var(--color-primary)",
                lineHeight: 1.6,
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.boxShadow = "0 0 0 1px rgba(255,107,53,0.24), 0 4px 12px rgba(255,107,53,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
