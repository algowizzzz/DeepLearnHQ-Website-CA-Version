import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center gap-2">
            {index > 0 && (
              <span style={{ color: "#e5e5e5" }}>/</span>
            )}
            {isLast || !item.href ? (
              <span
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: "#777169",
                  letterSpacing: "0.16px",
                }}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors hover:opacity-70"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  color: "#777169",
                  letterSpacing: "0.16px",
                }}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
