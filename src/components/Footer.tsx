export default function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border py-10" style={{ paddingBottom: 100 }}>
      <div className="container-inner">
        <div className="flex max-md:flex-col justify-between items-start max-md:items-center max-md:text-center gap-10 max-md:gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                <div className="w-3 h-3 bg-gradient-to-br from-[#999] to-[#bbb] rounded-[50%_0_50%_50%]" />
                <div className="w-3 h-3 bg-gradient-to-br from-accent to-accent-dark rounded-[50%_50%_0_50%]" />
              </div>
              <span className="font-display font-semibold text-xs tracking-[2px] text-[#999]">
                KAIWAI
              </span>
            </div>
            <div className="text-[13px] text-[#666] font-medium max-w-[280px] leading-[1.6]">
              学生の「やりたい」を、最初の一歩に変える
            </div>
          </div>
          <div className="flex flex-col items-end max-md:items-center gap-3">
            <div className="flex gap-6 max-md:gap-4">
              <a
                href="#"
                className="text-xs text-[#999] no-underline transition-colors duration-300 hover:text-primary"
              >
                利用規約
              </a>
              <a
                href="#"
                className="text-xs text-[#999] no-underline transition-colors duration-300 hover:text-primary"
              >
                プライバシー
              </a>
              <a
                href="#"
                className="text-xs text-[#999] no-underline transition-colors duration-300 hover:text-primary"
              >
                お問い合わせ
              </a>
            </div>
            <div className="text-[11px] text-[#bbb]">&copy; 2026 KAIWAI</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
