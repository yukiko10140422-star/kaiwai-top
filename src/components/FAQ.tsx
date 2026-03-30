"use client";

import { useState, useCallback } from "react";

const faqs = [
  {
    q: "本当に無料ですか？",
    a: "はい、診断からその後のアクション提案、コミュニティへの参加まで、学生の方は全て無料でご利用いただけます。追加費用は一切かかりません。",
  },
  {
    q: "診断にどれくらい時間がかかりますか？",
    a: "約3分で完了します。5つの質問に直感で答えるだけなので、スキマ時間に気軽に受けられます。",
  },
  {
    q: "勧誘はありますか？",
    a: "一切ありません。しつこい連絡も来ません。あくまであなたの「やりたい」を見つけるためのサポートが目的です。",
  },
  {
    q: "1年生でも参加できますか？",
    a: "もちろんです。早い段階で自分の方向性を知ることは大きなアドバンテージになります。早く始めるほど選択肢が広がります。",
  },
  {
    q: "診断結果が自分に合わなかったら？",
    a: "別タイプの結果も自由に参照できます。複数タイプを組み合わせたり、気軽に再診断することも可能です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="section-spacing" style={{ background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border)" }} id="faq">
      <div className="container-inner">
        {/* Editorial left-right layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60 }} className="max-md:!grid-cols-1 max-md:!gap-6">
          <div>
            <h2 className="editorial-title" style={{ textAlign: "left" }}>
              よくある<br />質問
            </h2>
          </div>
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid var(--color-border)",
                  cursor: "pointer",
                }}
                onClick={() => toggle(index)}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-serif)", fontWeight: 900, color: "var(--color-accent)", flexShrink: 0, fontSize: 15 }}>Q.</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, marginBottom: openIndex === index ? 12 : 0 }}>
                      {faq.q}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#666",
                        lineHeight: 1.8,
                        maxHeight: openIndex === index ? 200 : 0,
                        opacity: openIndex === index ? 1 : 0,
                        overflow: "hidden",
                        transition: "all 0.4s ease",
                        paddingLeft: 4,
                      }}
                    >
                      {faq.a}
                    </div>
                  </div>
                  <svg
                    style={{ width: 20, height: 20, color: "#999", flexShrink: 0, transition: "transform 0.3s", transform: openIndex === index ? "rotate(180deg)" : "none" }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
