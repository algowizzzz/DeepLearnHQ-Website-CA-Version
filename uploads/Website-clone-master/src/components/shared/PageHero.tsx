import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  description,
  breadcrumbs,
  bgColor = "#ffffff",
  textColor = "#000000",
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative px-4 pb-16 pt-32 md:px-8 lg:px-16"
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-7xl">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        )}

        <div className="flex items-start justify-between gap-8">
          <div className="max-w-3xl">
            <h1
              className="mb-6 leading-[1.08]"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(2.75rem, 5vw, 3.5rem)",
                letterSpacing: "-0.96px",
                color: textColor,
              }}
            >
              {title}
            </h1>
            {description && (
              <p
                className="leading-relaxed"
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "18px",
                  color: "#4e4e4e",
                  letterSpacing: "0.16px",
                }}
              >
                {description}
              </p>
            )}
          </div>

          <div className="hidden lg:block">
            {children || null}
          </div>
        </div>
      </div>
    </section>
  );
}
