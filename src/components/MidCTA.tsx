export default function MidCTA() {
  return (
    <div
      style={{
        padding: '32px 20px',
        textAlign: 'center',
        background: 'rgba(var(--accent-rgb), 0.03)',
      }}
    >
      <p style={{ fontSize: 15, color: '#666', marginBottom: 16 }}>
        自分のタイプが気になったら
      </p>
      <a
        href="#"
        className="items-center bg-gradient-to-br from-accent to-accent-dark text-white font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-lg"
        style={{
          padding: '14px 32px',
          display: 'inline-flex',
          gap: 8,
          borderRadius: 12,
          fontSize: 15,
        }}
      >
        <span>無料で診断する</span>
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          arrow_forward
        </span>
      </a>
    </div>
  );
}
