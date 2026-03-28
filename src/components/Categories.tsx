"use client";

import { useRef, useCallback } from "react";

interface CategoryItem {
  img: string;
  alt: string;
  icon: string;
  badgeClass: string;
  title: string;
  sub: string;
}

const categories: CategoryItem[] = [
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
    alt: "ガクチカ",
    icon: "stars",
    badgeClass: "bg-[rgba(255,107,53,0.3)]",
    title: "ガクチカ",
    sub: "経験を作る・発信する・運営する",
  },
  {
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=500&fit=crop",
    alt: "留学",
    icon: "public",
    badgeClass: "bg-[rgba(59,130,246,0.3)]",
    title: "留学",
    sub: "世界を広げる・語学を磨く",
  },
  {
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&h=500&fit=crop",
    alt: "資格",
    icon: "history_edu",
    badgeClass: "bg-[rgba(168,85,247,0.3)]",
    title: "資格",
    sub: "武器を手に入れる",
  },
  {
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop&crop=faces",
    alt: "サークル",
    icon: "groups",
    badgeClass: "bg-[rgba(34,197,94,0.3)]",
    title: "サークル",
    sub: "仲間と動く・居場所を見つける",
  },
];

export default function Categories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      isDragging.current = true;
      startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
      scrollLeftRef.current = trackRef.current?.scrollLeft ?? 0;
      if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging.current || !trackRef.current) return;
      e.preventDefault();
      const x = e.pageX - trackRef.current.offsetLeft;
      trackRef.current.scrollLeft =
        scrollLeftRef.current - (x - startX.current) * 1.5;
    },
    []
  );

  return (
    <section className="py-[clamp(80px,10vw,140px)] max-md:py-[52px] overflow-x-clip">
      <div
        className="container-inner mb-[clamp(24px,3vw,36px)]"
        data-reveal=""
      >
        <div className="font-display text-[11px] max-md:text-[10px] font-semibold tracking-[3px] max-md:tracking-[4px] uppercase bg-gradient-to-br from-accent to-accent-dark bg-clip-text text-transparent mb-3">
          YOUR TYPE
        </div>
        <h2 className="text-[clamp(26px,2.8vw,36px)] max-md:text-[22px] font-extrabold tracking-[-0.03em] max-md:tracking-[-0.02em] leading-[1.35] max-md:leading-[1.5] mb-2.5 max-md:after:content-[''] max-md:after:block max-md:after:w-10 max-md:after:h-[3px] max-md:after:mt-2.5 max-md:after:bg-gradient-to-r max-md:after:from-accent max-md:after:to-accent-dark max-md:after:rounded-sm">
          あなたはどのタイプ？
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 cursor-grab select-none overflow-x-auto [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="min-w-[max(var(--gutter),calc((100vw-var(--inner))/2))] shrink-0" />
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="min-w-[280px] max-md:min-w-[260px] h-[340px] max-md:h-[320px] rounded-3xl max-md:rounded-[20px] overflow-hidden relative shrink-0 transition-transform duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:scale-[1.03] group"
          >
            <img
              src={cat.img}
              alt={cat.alt}
              className="w-full h-full object-cover transition-all duration-800 group-hover:scale-110 group-hover:brightness-[0.8]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-[rgba(0,0,0,0.65)] flex flex-col justify-end p-7 transition-[background] duration-500 group-hover:from-15% group-hover:to-[rgba(0,0,0,0.75)]">
              <div
                className={`w-9 h-9 rounded-[10px] flex items-center justify-center backdrop-blur-[8px] mb-2.5 transition-transform duration-400 group-hover:scale-115 group-hover:rotate-5 ${cat.badgeClass}`}
              >
                <span className="material-symbols-outlined text-lg text-white">
                  {cat.icon}
                </span>
              </div>
              <div className="text-[20px] max-md:text-[22px] font-bold text-white mb-1 tracking-[-0.01em]">
                {cat.title}
              </div>
              <div className="text-xs max-md:text-[13px] text-white/65">
                {cat.sub}
              </div>
            </div>
            <div className="absolute bottom-7 right-7 w-9 h-9 rounded-full bg-white/15 backdrop-blur-[8px] flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-x-0">
              <span className="material-symbols-outlined text-lg text-white">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
        <div className="min-w-[max(var(--gutter),calc((100vw-var(--inner))/2))] shrink-0" />
      </div>
    </section>
  );
}
