export default function MidCTA() {
  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', background: 'linear-gradient(180deg, rgba(var(--accent-rgb), 0.03) 0%, rgba(var(--accent-rgb), 0.06) 100%)' }}>
      <p style={{ fontSize: 15, color: '#777', marginBottom: 16, fontWeight: 500 }}>
        自分のタイプが気になったら
      </p>
      <a href="#" className="cta-button" style={{ padding: '14px 36px', fontSize: 15 }}>
        <span>無料で診断する</span>
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
      </a>
    </div>
  );
}
