export default function MidCTA() {
  return (
    <div style={{ padding: "48px 24px", textAlign: "center", background: "var(--color-warm)" }}>
      <div className="container-inner">
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, fontWeight: 700, color: "var(--color-primary)", marginBottom: 20 }}>
          自分のタイプが気になったら
        </p>
        <a href="#" className="cta-button" style={{ padding: "14px 36px", fontSize: 15 }}>
          <span>無料で診断する</span>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
