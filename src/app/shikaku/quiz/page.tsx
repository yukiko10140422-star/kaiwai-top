"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "好きなこと・得意なことは？",
    options: [
      { label: "数字・計算", scores: { boki: 3, fp: 3 } },
      { label: "パソコン・IT", scores: { mos: 2, it: 3 } },
      { label: "英語・語学", scores: { toeic: 3 } },
      { label: "人と話す・サポート", scores: { fp: 2, mos: 1 } },
      { label: "法律・不動産", scores: { takken: 3, fp: 1 } },
    ],
  },
  {
    id: 2,
    question: "将来やりたい仕事のイメージは？",
    options: [
      { label: "オフィス・事務", scores: { mos: 3, boki: 2 } },
      { label: "IT・エンジニア", scores: { it: 3 } },
      { label: "金融・保険", scores: { fp: 3, boki: 1 } },
      { label: "海外・グローバル", scores: { toeic: 3 } },
      { label: "不動産・建築", scores: { takken: 3 } },
    ],
  },
  {
    id: 3,
    question: "勉強スタイルは？",
    options: [
      { label: "コツコツ暗記が得意", scores: { takken: 2, boki: 2, fp: 1 } },
      { label: "問題を繰り返すのが好き", scores: { toeic: 2, fp: 2 } },
      { label: "実践しながら覚える", scores: { mos: 2, it: 2 } },
    ],
  },
  {
    id: 4,
    question: "資格取得までかけられる時間は？",
    options: [
      { label: "1〜2ヶ月", scores: { mos: 3, it: 3 } },
      { label: "3〜4ヶ月", scores: { boki: 3, fp: 3, toeic: 2 } },
      { label: "半年以上", scores: { takken: 3, it: 1 } },
    ],
  },
  {
    id: 5,
    question: "就活で一番アピールしたいことは？",
    options: [
      { label: "スキル・専門性", scores: { it: 2, takken: 2, boki: 1 } },
      { label: "語学力", scores: { toeic: 3 } },
      { label: "行動力・挑戦", scores: { takken: 2, it: 1 } },
      { label: "チームワーク", scores: { mos: 2, fp: 1 } },
    ],
  },
];

const results: Record<string, { name: string; desc: string; period: string; merit: string; emoji: string }> = {
  toeic: {
    name: "TOEIC",
    emoji: "🌍",
    desc: "英語力をスコアで証明できる世界標準のテスト。グローバルな仕事を目指すなら最強の武器になります。",
    period: "3〜6ヶ月",
    merit: "外資系・グローバル企業への就職で大きくアピールできる",
  },
  mos: {
    name: "MOS（Microsoft Office Specialist）",
    emoji: "💻",
    desc: "Word・Excel・PowerPointのスキルを証明。事務・営業など幅広い職種で評価される定番資格です。",
    period: "1〜3ヶ月",
    merit: "短期間で取りやすく、どの業界でも使える",
  },
  boki: {
    name: "日商簿記3級",
    emoji: "📊",
    desc: "お金の流れを読む力を証明する資格。経理・会計・金融など数字を扱う仕事に直結します。",
    period: "2〜4ヶ月",
    merit: "文系学生でも取りやすく、就活での評価が高い",
  },
  fp: {
    name: "FP技能士3級",
    emoji: "💰",
    desc: "税金・保険・年金など「お金全般」の知識を証明。金融・保険業界はもちろん、生活にも役立つ知識が身につきます。",
    period: "3〜4ヶ月",
    merit: "実生活にも直結する知識で一石二鳥",
  },
  it: {
    name: "ITパスポート",
    emoji: "🖥️",
    desc: "ITの基礎知識を証明する国家資格。文系・理系問わず全業界でデジタル人材として評価されます。",
    period: "1〜2ヶ月",
    merit: "短期間・低コストで取れてコスパ最高",
  },
  takken: {
    name: "宅地建物取引士（宅建）",
    emoji: "🏠",
    desc: "不動産取引の専門資格。取得難易度が高い分、就活での差別化効果は抜群です。",
    period: "6ヶ月〜1年",
    merit: "難関資格だからこそ、取れれば就活で強力なアピールになる",
  },
};

type Scores = Record<string, number>;

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({ toeic: 0, mos: 0, boki: 0, fp: 0, it: 0, takken: 0 });
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const option = question.options[selected];
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, val]) => {
      newScores[key] = (newScores[key] ?? 0) + val;
    });
    setScores(newScores);
    setSelected(null);

    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
    }
  }

  const topKey = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "toeic";
  const result = results[topKey];

  if (finished) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
        <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px" }}>
          <Link href="/shikaku" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            資格トップへ
          </Link>
        </div>

        <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 20px" }}>
          {/* Result header */}
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
              診断結果
            </div>
            <div style={{ fontSize: 56, marginBottom: 16 }}>{result.emoji}</div>
            <div style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 8 }}>
              あなたに向いている資格は
            </div>
            <h1 style={{
              fontFamily: "var(--font-serif)", fontWeight: 900,
              fontSize: 26, color: "var(--color-primary)", lineHeight: 1.3,
            }}>
              {result.name}
            </h1>
          </div>

          {/* Result card */}
          <div style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: 20,
            padding: "28px 24px",
            marginBottom: 20,
          }}>
            <p style={{ fontSize: 15, color: "#555", lineHeight: 1.85, marginBottom: 20 }}>
              {result.desc}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
                <span style={{ color: "var(--color-muted)", flexShrink: 0 }}>📅 学習期間</span>
                <span style={{ fontWeight: 700, color: "var(--color-primary)" }}>{result.period}</span>
              </div>
              <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
                <span style={{ color: "var(--color-muted)", flexShrink: 0 }}>✓ ポイント</span>
                <span style={{ fontWeight: 700, color: "var(--color-accent)" }}>{result.merit}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/shikaku/plan" style={{ textDecoration: "none" }}>
            <div style={{
              background: "var(--color-accent)",
              borderRadius: 16,
              padding: "20px 24px",
              textAlign: "center",
              boxShadow: "0 8px 24px rgba(255,107,53,0.3)",
              marginBottom: 12,
            }}>
              <div style={{ fontWeight: 900, fontSize: 16, color: "#fff", marginBottom: 4 }}>
                学習計画を立てる
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.85)" }}>
                合格までのスケジュールを作ろう
              </div>
            </div>
          </Link>

          <button
            onClick={() => { setCurrent(0); setScores({ toeic: 0, mos: 0, boki: 0, fp: 0, it: 0, takken: 0 }); setFinished(false); setSelected(null); }}
            style={{
              width: "100%", padding: "14px", borderRadius: 12,
              background: "transparent", border: "1px solid var(--color-border)",
              fontSize: 14, color: "var(--color-muted)", cursor: "pointer",
            }}
          >
            もう一度診断する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", fontFamily: "var(--font-sans)" }}>
      {/* Header */}
      <div style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/shikaku" style={{ display: "flex", alignItems: "center", color: "var(--color-muted)", fontSize: 14 }}>
          <svg viewBox="0 0 24 24" fill="none" style={{ width: 20, height: 20, marginRight: 4 }}>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          もどる
        </Link>
        <span style={{ fontSize: 13, color: "var(--color-muted)", fontWeight: 600 }}>
          {current + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: "var(--color-border)" }}>
        <div style={{
          height: "100%", background: "var(--color-accent)",
          width: `${progress}%`,
          transition: "width 0.4s ease",
        }} />
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 20px" }}>
        {/* Question */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            Q{question.id}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 22, color: "var(--color-primary)", lineHeight: 1.4 }}>
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: 14,
                border: selected === idx ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                background: selected === idx ? "rgba(var(--accent-rgb), 0.06)" : "var(--color-surface)",
                cursor: "pointer",
                textAlign: "left",
                fontSize: 15,
                fontWeight: selected === idx ? 700 : 500,
                color: selected === idx ? "var(--color-accent)" : "var(--color-primary)",
                transition: "all 0.15s",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{
                width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                border: selected === idx ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                background: selected === idx ? "var(--color-accent)" : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {selected === idx && (
                  <svg viewBox="0 0 12 12" fill="none" style={{ width: 10, height: 10 }}>
                    <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {option.label}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={selected === null}
          style={{
            width: "100%", padding: "18px",
            borderRadius: 14,
            background: selected !== null ? "var(--color-accent)" : "var(--color-border)",
            border: "none",
            color: selected !== null ? "#fff" : "var(--color-muted)",
            fontWeight: 900, fontSize: 16,
            cursor: selected !== null ? "pointer" : "not-allowed",
            transition: "all 0.2s",
            boxShadow: selected !== null ? "0 4px 16px rgba(255,107,53,0.3)" : "none",
          }}
        >
          {current + 1 === questions.length ? "診断結果を見る" : "次へ"}
        </button>
      </div>
    </div>
  );
}
