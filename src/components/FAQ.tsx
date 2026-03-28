"use client";

import { useState, useCallback } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "本当に無料ですか？",
    answer:
      "はい、診断からその後のアクション提案、コミュニティへの参加まで、学生の方は全て無料でご利用いただけます。",
  },
  {
    question: "診断にどれくらい時間がかかりますか？",
    answer:
      "直感的に答えられる5つの質問だけですので、約3分程度で完了します。",
  },
  {
    question: "特定のスクールへの勧誘はありますか？",
    answer:
      "一切ありません。あくまであなたの「やりたい」を見つけるためのサポートが目的です。",
  },
  {
    question: "1年生でも参加できますか？",
    answer:
      "もちろんです。早期から自分の方向性を見つけることで、大学生活をより充実させることができます。",
  },
  {
    question: "診断結果が自分の思っていたのと違う場合は？",
    answer:
      "診断結果は一つのヒントです。別のタイプのアクションを閲覧したり、自分に合うものを組み合わせて活動することも可能です。",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section
      className="py-[clamp(80px,10vw,140px)] max-md:py-[52px]"
      id="faq"
      data-reveal=""
    >
      <h2 className="text-[clamp(26px,2.8vw,36px)] max-md:text-[22px] font-extrabold tracking-[-0.03em] max-md:tracking-[-0.02em] leading-[1.35] max-md:leading-[1.5] text-center mb-9 max-md:after:content-[''] max-md:after:block max-md:after:w-10 max-md:after:h-[3px] max-md:after:mt-2.5 max-md:after:mx-auto max-md:after:bg-gradient-to-r max-md:after:from-accent max-md:after:to-accent-dark max-md:after:rounded-sm">
        よくある質問
      </h2>

      <div className="max-w-[680px] mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-border py-5 max-md:py-[18px] cursor-pointer rounded-xl px-3 transition-colors duration-300 hover:bg-[rgba(var(--accent-rgb),0.03)]`}
            onClick={() => toggle(index)}
          >
            <div className="text-sm font-semibold flex gap-2.5 items-center justify-between">
              <div className="flex gap-2.5 items-center">
                <span className="font-display font-bold text-white min-w-6 h-6 inline-flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark rounded-full text-xs">
                  Q
                </span>
                {faq.question}
              </div>
              <svg
                className={`w-5 h-5 text-muted transition-transform duration-400 shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div
              className={`text-[13px] text-muted leading-[1.8] pl-[34px] overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-[200px] opacity-100 pt-3"
                  : "max-h-0 opacity-0 pt-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
