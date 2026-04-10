import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="パンくずリスト" style={{ padding: "12px 24px", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
      <ol style={{ display: "flex", alignItems: "center", gap: 6, listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <Link href="/" style={{ fontSize: 13, color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}>
            トップ
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg viewBox="0 0 12 12" fill="none" style={{ width: 10, height: 10, flexShrink: 0 }}>
              <path d="M4 2l4 4-4 4" stroke="var(--color-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
            </svg>
            {item.href ? (
              <Link href={item.href} style={{ fontSize: 13, color: "var(--color-muted)", textDecoration: "none", transition: "color 0.2s" }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ fontSize: 13, color: "var(--color-primary)", fontWeight: 600 }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
