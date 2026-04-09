import Link from "next/link";

export default function MidCTA() {
  return (
    <div style={{ padding: "48px 24px", textAlign: "center", background: "var(--color-warm)" }}>
      <div className="container-inner">
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 700, color: "var(--color-primary)", marginBottom: 8 }}>
          自分のタイプが気になったら
        </p>
        <p style={{ fontSize: 14, color: "var(--color-body-light)", marginBottom: 20 }}>
          5つの質問に答えるだけ。登録不要・完全無料です。
        </p>
        <Link href="/sonota" className="cta-button" style={{ padding: "14px 36px", fontSize: 15 }}>
          <span>3分でタイプ診断する</span>
          <svg viewBox="0 0 20 20" fill="none" style={{ width: 18, height: 18 }}>
            <path d="M7 4l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
