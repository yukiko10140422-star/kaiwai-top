"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  // SSR時はfalse → 全要素が表示状態でHTMLに出力される（白画面防止）
  // クライアントサイドでのみtrueになり、アニメーション用の非表示状態を適用してからアニメーション開始
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // まずisClientをtrueにして非表示状態のクラスを付与する
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const section = sectionRef.current;
    if (!section) return;

    const chips = section.querySelectorAll<HTMLElement>(".empathy-chip");
    const lines = section.querySelectorAll<HTMLElement>(".hero-line-inner");
    const sub = section.querySelector<HTMLElement>(".hero-sub");
    const cta = section.querySelector<HTMLElement>(".hero-cta-wrap");
    const trust = section.querySelector<HTMLElement>(".trust-signals");
    const imgs = section.querySelectorAll<HTMLElement>(".hero-img");
    const floats = section.querySelectorAll<HTMLElement>(".hero-float-card");

    // 2フレーム待ってからアニメーション開始（非表示状態が適用されてからinクラスを追加）
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        let d = 100;
        chips.forEach((c, i) => {
          setTimeout(() => c.classList.add("in"), d + i * 120);
        });
        d += chips.length * 120 + 100;
        lines.forEach((l, i) => {
          setTimeout(() => l.classList.add("in"), d + i * 180);
        });
        d += lines.length * 180 + 100;
        setTimeout(() => sub?.classList.add("in"), d);
        setTimeout(() => cta?.classList.add("in"), d + 200);
        setTimeout(() => trust?.classList.add("in"), d + 400);
        imgs.forEach((img, i) => {
          setTimeout(() => img.classList.add("in"), 400 + i * 200);
        });
        floats.forEach((f, i) => {
          setTimeout(() => f.classList.add("in"), 1200 + i * 300);
        });
      });
    });
  }, [isClient]);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-[clamp(32px,4vw,64px)] pt-[100px] max-md:pt-[68px] pb-[60px] max-md:pb-7 relative bg-surface text-primary"
    >
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-[rgba(var(--accent-rgb),0.05)] rounded-full blur-[80px] -top-[100px] -right-[100px] opacity-0"
          style={{ animation: "shapeFloat 20s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-[rgba(var(--accent-rgb),0.03)] rounded-full blur-[80px] -bottom-[100px] -left-[100px] opacity-0"
          style={{ animation: "shapeFloat 20s ease-in-out infinite -7s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] bg-[rgba(var(--accent-rgb),0.025)] rounded-full blur-[80px] top-[40%] left-[30%] opacity-0"
          style={{ animation: "shapeFloat 20s ease-in-out infinite -14s" }}
        />
      </div>

      <div className="relative z-1 max-md:order-1">
        {/* Empathy chips */}
        <div className="flex flex-wrap gap-1.5 mb-[clamp(20px,3vw,28px)] max-md:mb-4">
          {["何を始めればいいかわからない", "ガクチカがない", "就活が不安"].map(
            (text) => (
              <span
                key={text}
                className={`empathy-chip inline-flex items-center gap-1.5 bg-[rgba(var(--accent-rgb),0.06)] border border-[rgba(var(--accent-rgb),0.12)] py-[5px] px-3.5 rounded-full text-[11px] text-[#666] transition-all duration-300 before:content-[''] before:w-[5px] before:h-[5px] before:bg-accent before:rounded-full hover:border-[rgba(var(--accent-rgb),0.4)] hover:text-primary${isClient ? " opacity-0 translate-y-3 scale-95" : ""}`}
              >
                {text}
              </span>
            )
          )}
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(32px,3.5vw,44px)] max-md:text-[26px] font-extrabold leading-[1.45] max-md:leading-[1.5] tracking-[-0.03em] max-md:tracking-[-0.02em] mb-[clamp(14px,2vw,20px)] overflow-hidden text-primary">
          <span className="block overflow-hidden">
            <span
              className="hero-line-inner block transition-transform duration-900"
              style={isClient ? { translate: "0 110%" } : undefined}
            >
              迷っている学生へ。
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="hero-line-inner block transition-transform duration-900"
              style={isClient ? { translate: "0 110%" } : undefined}
            >
              <span className="bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent">
                3分の診断
              </span>
              で、次の一歩がわかる。
            </span>
          </span>
        </h1>

        {/* Sub text */}
        <p
          className={`hero-sub text-[clamp(13px,1.2vw,15px)] max-md:text-[14px] text-[#666] leading-[1.9] max-md:leading-[1.85] mb-[clamp(24px,3vw,36px)] max-w-[440px] max-md:max-w-full transition-all duration-800 delay-600${isClient ? " opacity-0 translate-y-5" : ""}`}
        >
          あなたの志向・興味・現在地から、4つのタイプに分類。
          <br className="max-md:hidden" />
          ガクチカ・留学・資格・サークル、それぞれに合った
          <br className="max-md:hidden" />
          具体的なアクションを無料で提案します。
        </p>

        {/* CTA */}
        <div
          className={`hero-cta-wrap transition-all duration-800 delay-800 max-md:mt-2${isClient ? " opacity-0 translate-y-5" : ""}`}
        >
          <a
            href="#"
            className="inline-flex max-md:w-full max-md:justify-center items-center gap-2.5 bg-gradient-to-br from-accent to-accent-dark text-white py-[18px] px-10 max-md:px-6 rounded-[14px] max-md:rounded-[16px] text-base font-semibold max-md:font-bold no-underline relative overflow-hidden transition-all duration-400 shadow-[0_8px_32px_rgba(var(--accent-rgb),0.3)] max-md:shadow-[0_8px_32px_rgba(var(--accent-rgb),0.35)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(var(--accent-rgb),0.45)]"
          >
            <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent z-1 animate-[shimmer_4s_ease-in-out_infinite_2s]" />
            <span className="relative z-1">無料で診断してみる</span>
            <span className="material-symbols-outlined relative z-1 text-lg transition-transform duration-400 hover:translate-x-1">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Trust signals */}
        <div
          className={`trust-signals flex gap-[18px] max-md:gap-2 flex-wrap mt-4 max-md:mt-3.5 transition-opacity duration-800 delay-1000${isClient ? " opacity-0" : ""}`}
        >
          {[
            { icon: "timer", text: "3分で完了" },
            { icon: "verified_user", text: "完全無料" },
            { icon: "bolt", text: "結果はすぐ表示" },
            { icon: "do_not_disturb_on", text: "無理な勧誘なし" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-[5px] text-[11px] text-[#999] max-md:bg-[rgba(0,0,0,0.03)] max-md:backdrop-blur-[8px] max-md:py-1.5 max-md:px-3 max-md:rounded-full max-md:border max-md:border-border"
            >
              <span
                className="material-symbols-outlined text-[14px] text-accent"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative z-1 max-md:order-2">
        <div className="grid grid-cols-2 gap-2.5 max-md:gap-2" style={{ gridTemplateRows: "200px 200px" }}>
          <div
            className="hero-img rounded-[20px] max-md:rounded-[14px] overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.1)] max-md:shadow-[0_4px_20px_rgba(0,0,0,0.1)] row-span-2 max-md:row-span-1 max-md:col-span-2 transition-[clip-path] duration-1000"
            style={isClient ? { clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" } : undefined}
          >
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop&crop=faces"
              alt="学生が協力して学んでいる様子"
              className="w-full h-full max-md:h-auto object-cover transition-all duration-800 will-change-transform hover:scale-[1.06] hover:brightness-[0.88] max-md:aspect-video"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3.5 bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-transparent rounded-b-[20px]">
              <span className="inline-block bg-white/15 backdrop-blur-[12px] text-white text-[11px] font-medium py-1 px-2.5 rounded-[6px]">
                実務参加で成長
              </span>
            </div>
          </div>
          <div
            className="hero-img rounded-[20px] max-md:rounded-[14px] overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.1)] max-md:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-[clip-path] duration-1000"
            style={isClient ? { clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" } : undefined}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces"
              alt="学生グループの議論"
              className="w-full h-full max-md:h-auto object-cover transition-all duration-800 will-change-transform hover:scale-[1.06] hover:brightness-[0.88] max-md:aspect-[4/3]"
            />
          </div>
          <div
            className="hero-img rounded-[20px] max-md:rounded-[14px] overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.1)] max-md:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-[clip-path] duration-1000"
            style={isClient ? { clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)" } : undefined}
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=faces"
              alt="チームでの作業風景"
              className="w-full h-full max-md:h-auto object-cover transition-all duration-800 will-change-transform hover:scale-[1.06] hover:brightness-[0.88] max-md:aspect-[4/3]"
            />
          </div>
        </div>

        {/* Float card */}
        <div
          className={`hero-float-card absolute max-md:relative bottom-2 max-md:bottom-auto left-[-12px] max-md:left-auto max-md:mt-2.5 bg-white/90 backdrop-blur-[16px] border border-border rounded-[14px] py-3 px-4 shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-md:shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-2 transition-all duration-700 max-md:opacity-100 max-md:translate-y-0 max-md:scale-100${isClient ? " opacity-0 translate-y-6 scale-[0.85]" : ""}`}
        >
          <div className="w-8 h-8 rounded-full bg-[rgba(var(--accent-rgb),0.08)] flex items-center justify-center">
            <span
              className="material-symbols-outlined text-base text-accent"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              trending_up
            </span>
          </div>
          <div className="text-[11px] leading-[1.4]">
            <strong className="block text-xs text-primary font-semibold">
              87%の学生が
            </strong>
            <span className="text-[#999]">診断後に行動を開始</span>
          </div>
        </div>
      </div>
    </section>
  );
}
