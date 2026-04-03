"use client";
import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "好きなこと・得意なことは？",
    options: [
      { label: "数字・計算", scores: { boki: 3, fp: 3, cpa: 1 } },
      { label: "パソコン・IT", scores: { mos: 2, it: 3, kihon: 2, ai: 2 } },
      { label: "英語・語学", scores: { toeic: 3, eiken: 2 } },
      { label: "人と話す・サポート", scores: { fp: 2, sharoushi: 2, hisho: 2 } },
      { label: "法律・不動産", scores: { takken: 3, gyosei: 2, sharoushi: 1, chusho: 1 } },
    ],
  },
  {
    id: 2,
    question: "将来やりたい仕事のイメージは？",
    options: [
      { label: "オフィス・事務", scores: { mos: 3, boki: 2, hisho: 2 } },
      { label: "IT・エンジニア", scores: { it: 3, kihon: 3, ai: 2 } },
      { label: "金融・保険", scores: { fp: 3, boki: 2, sharoushi: 1 } },
      { label: "海外・グローバル", scores: { toeic: 3, eiken: 2 } },
      { label: "不動産・法律・経営", scores: { takken: 3, gyosei: 2, chusho: 2, sharoushi: 1 } },
      { label: "工場・製造・インフラ", scores: { kiken: 3, it: 1 } },
    ],
  },
  {
    id: 3,
    question: "勉強スタイルは？",
    options: [
      { label: "コツコツ暗記が得意", scores: { takken: 2, boki: 2, fp: 1, gyosei: 2, sharoushi: 2 } },
      { label: "問題を繰り返すのが好き", scores: { toeic: 2, fp: 2, chusho: 1, boki: 1 } },
      { label: "実践しながら覚える", scores: { mos: 2, it: 2, kiken: 2, ai: 1 } },
    ],
  },
  {
    id: 4,
    question: "資格取得までかけられる時間は？",
    options: [
      { label: "1〜2ヶ月", scores: { mos: 3, it: 3, kiken: 2, hisho: 2, eiken: 1 } },
      { label: "3〜6ヶ月", scores: { boki: 3, fp: 3, toeic: 2, kihon: 2, ai: 2 } },
      { label: "半年〜1年", scores: { takken: 3, gyosei: 2, sharoushi: 1 } },
      { label: "1年以上かけてもいい", scores: { sharoushi: 3, chusho: 3, gyosei: 2, takken: 1 } },
    ],
  },
  {
    id: 5,
    question: "資格を取る一番の目的は？",
    options: [
      { label: "就活で有利になりたい", scores: { boki: 2, toeic: 2, mos: 1, it: 1 } },
      { label: "専門スキルを身につけたい", scores: { kihon: 2, ai: 2, chusho: 1, sharoushi: 1 } },
      { label: "自信をつけたい", scores: { fp: 2, eiken: 2, hisho: 1, it: 1 } },
      { label: "将来独立・起業したい", scores: { chusho: 3, gyosei: 2, fp: 1, sharoushi: 2 } },
    ],
  },
  {
    id: 6,
    question: "挑戦したい難易度は？",
    options: [
      { label: "短期間でサクッと取りたい", scores: { mos: 3, it: 3, kiken: 3, hisho: 2, eiken: 1 } },
      { label: "ちょっと難しくてもOK", scores: { boki: 2, fp: 2, toeic: 2, kihon: 2, ai: 2, eiken: 2 } },
      { label: "難関資格に挑戦したい", scores: { takken: 3, gyosei: 3, sharoushi: 3, chusho: 3 } },
    ],
  },
];

type QualificationKey = "toeic" | "mos" | "boki" | "fp" | "it" | "takken" | "eiken" | "kihon" | "hisho" | "ai" | "kiken" | "sharoushi" | "gyosei" | "chusho";

const results: Record<QualificationKey, { name: string; desc: string; period: string; merit: string; emoji: string; level: "普通" | "やや難" | "難関" }> = {
  toeic: {
    name: "TOEIC",
    emoji: "🌍",
    desc: "英語力をスコアで証明できる世界標準のテスト。700点以上でグローバル企業への就職に強くなります。",
    period: "3〜6ヶ月",
    merit: "外資系・グローバル企業への就職で大きくアピールできる",
    level: "やや難",
  },
  mos: {
    name: "MOS（Microsoft Office Specialist）",
    emoji: "💻",
    desc: "Word・Excel・PowerPointのスキルを証明。事務・営業など幅広い職種で評価される定番資格。",
    period: "1〜3ヶ月",
    merit: "短期間で取りやすく、どの業界でも使える",
    level: "普通",
  },
  boki: {
    name: "日商簿記3級",
    emoji: "📊",
    desc: "お金の流れを読む力を証明する資格。経理・会計・金融など数字を扱う仕事に直結します。",
    period: "2〜4ヶ月",
    merit: "文系学生でも取りやすく、就活での評価が高い",
    level: "普通",
  },
  fp: {
    name: "FP技能士3級",
    emoji: "💰",
    desc: "税金・保険・年金など「お金全般」の知識を証明。金融・保険業界はもちろん、生活にも役立つ。",
    period: "3〜4ヶ月",
    merit: "実生活にも直結する知識で一石二鳥",
    level: "普通",
  },
  it: {
    name: "ITパスポート",
    emoji: "🖥️",
    desc: "ITの基礎知識を証明する国家資格。文系・理系問わず全業界でデジタル人材として評価されます。",
    period: "1〜2ヶ月",
    merit: "短期間・低コストで取れてコスパ最高",
    level: "普通",
  },
  takken: {
    name: "宅地建物取引士（宅建）",
    emoji: "🏠",
    desc: "不動産取引の専門資格。取得難易度が高い分、就活での差別化効果は抜群です。",
    period: "6ヶ月〜1年",
    merit: "難関資格だからこそ、取れれば就活で強力なアピールになる",
    level: "やや難",
  },
  eiken: {
    name: "英検2級",
    emoji: "🗣️",
    desc: "高校卒業〜大学在学レベルの英語力を証明。TOEICと並んで就活での語学アピールに使えます。",
    period: "2〜4ヶ月",
    merit: "スコアではなく合否で判定されるためわかりやすい",
    level: "普通",
  },
  kihon: {
    name: "基本情報技術者",
    emoji: "⚙️",
    desc: "ITパスポートの上位資格。エンジニア・SE志望なら持っておきたい国家資格です。",
    period: "3〜6ヶ月",
    merit: "IT系就職・転職で高く評価される",
    level: "やや難",
  },
  hisho: {
    name: "秘書検定2級",
    emoji: "📋",
    desc: "ビジネスマナー・コミュニケーション力を証明。事務・サービス業・接客業への就職に有効。",
    period: "1〜2ヶ月",
    merit: "女性に人気で事務系就職に幅広く使える",
    level: "普通",
  },
  ai: {
    name: "AIパスポート・G検定",
    emoji: "🤖",
    desc: "AI・データサイエンスの基礎知識を証明。2026年急上昇中のトレンド資格です。",
    period: "2〜3ヶ月",
    merit: "DX・AI時代に求められる人材としてアピールできる",
    level: "やや難",
  },
  kiken: {
    name: "危険物取扱者（乙種4類）",
    emoji: "🔥",
    desc: "ガソリン・灯油など危険物の取り扱いを認める国家資格。製造・物流・エネルギー業界で重宝されます。",
    period: "1〜2ヶ月",
    merit: "工場・物流系就職で即戦力としてアピールできる",
    level: "普通",
  },
  sharoushi: {
    name: "社会保険労務士（社労士）",
    emoji: "⚖️",
    desc: "労働・社会保険に関する唯一の国家資格。人事・労務・コンサルへの就職・独立に強い。",
    period: "1年〜1年半",
    merit: "難関だからこそ取れれば圧倒的な差別化になる",
    level: "難関",
  },
  gyosei: {
    name: "行政書士",
    emoji: "📝",
    desc: "官公署への書類作成・申請を行う国家資格。法律系資格の登竜門として知名度が高い。",
    period: "6ヶ月〜1年",
    merit: "法律知識の証明として幅広い業界でアピールできる",
    level: "難関",
  },
  chusho: {
    name: "中小企業診断士",
    emoji: "📈",
    desc: "経営コンサルタントの唯一の国家資格。経営・財務・マーケティングを幅広く学べる。",
    period: "1年〜2年",
    merit: "経営・コンサル志望の学生に圧倒的な差別化になる",
    level: "難関",
  },
};

type Scores = Partial<Record<QualificationKey, number>>;

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Scores>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const progress = (current / questions.length) * 100;

  function handleSelect(idx: number) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const option = question.options[selected];
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([key, val]) => {
      const k = key as QualificationKey;
      newScores[k] = (newScores[k] ?? 0) + val;
    });
    setScores(newScores);
    setSelected(null);

    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
    }
  }

  function handleReset() {
    setCurrent(0);
    setScores({});
    setFinished(false);
    setSelected(null);
  }

  const topResults = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => results[key as QualificationKey])
    .filter(Boolean);

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
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
              診断結果
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: "var(--color-primary)", marginBottom: 4 }}>
              あなたにおすすめの資格はこれです！
            </p>
            <p style={{ fontSize: 13, color: "var(--color-muted)" }}>
              スコアの高い順にトップ3を表示しています
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            {topResults.map((result, i) => (
              <div key={result.name} style={{
                background: "var(--color-surface)",
                border: i === 0 ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                borderRadius: 20,
                padding: "24px 20px",
                position: "relative",
              }}>
                {i === 0 && (
                  <div style={{
                    position: "absolute", top: -12, left: 20,
                    background: "var(--color-accent)", color: "#fff",
                    fontSize: 11, fontWeight: 700, padding: "3px 12px",
                    borderRadius: 100, letterSpacing: "0.05em",
                  }}>
                    ⭐ 最もおすすめ
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: 32 }}>{result.emoji}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 16, color: "var(--color-primary)", lineHeight: 1.3 }}>
                      {result.name}
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 600,
                      padding: "2px 8px", borderRadius: 100,
                      background: result.level === "難関" ? "rgba(220,50,50,0.08)" : result.level === "やや難" ? "rgba(255,107,53,0.08)" : "rgba(0,180,100,0.08)",
                      color: result.level === "難関" ? "#dc3232" : result.level === "やや難" ? "var(--color-accent)" : "#00a855",
                    }}>
                      {result.level}
                    </span>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, marginBottom: 12 }}>
                  {result.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--color-muted)", flexShrink: 0 }}>📅</span>
                    <span style={{ color: "var(--color-primary)" }}>{result.period}</span>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ color: "var(--color-accent)", flexShrink: 0 }}>✓</span>
                    <span style={{ fontWeight: 600, color: "var(--color-accent)" }}>{result.merit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
            onClick={handleReset}
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

      <div style={{ height: 4, background: "var(--color-border)" }}>
        <div style={{
          height: "100%", background: "var(--color-accent)",
          width: `${progress}%`,
          transition: "width 0.4s ease",
        }} />
      </div>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "40px 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", marginBottom: 12 }}>
            Q{question.id}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 900, fontSize: 22, color: "var(--color-primary)", lineHeight: 1.4 }}>
            {question.question}
          </h2>
        </div>

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
