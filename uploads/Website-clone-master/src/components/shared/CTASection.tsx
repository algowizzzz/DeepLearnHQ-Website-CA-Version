import Link from "next/link";

interface CTAProps {
  label: string;
  href: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: CTAProps;
  secondaryCTA?: CTAProps;
}

export default function CTASection({
  title = "Let's bring your vision to life",
  description,
  primaryCTA = { label: "Get Started", href: "/contact" },
  secondaryCTA,
}: CTASectionProps) {
  return (
    <section className="px-4 py-20 md:px-8 lg:px-16" style={{ backgroundColor: "#f5f2ef" }}>
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="mb-3 text-xs font-medium uppercase tracking-widest"
          style={{ color: "#777169", letterSpacing: "0.18px" }}
        >
          Get in touch
        </p>
        <h2
          className="mb-4 text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08]"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 300,
            color: "#000000",
            letterSpacing: "-0.96px",
          }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="mb-8 text-lg leading-relaxed"
            style={{ fontFamily: '"Inter", sans-serif', color: "#4e4e4e" }}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryCTA.href}
            className="inline-block px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80"
            style={{
              fontFamily: '"Inter", sans-serif',
              backgroundColor: "#000000",
              borderRadius: "9999px",
            }}
          >
            {primaryCTA.label}
          </Link>
          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-block px-6 py-3 text-sm font-medium transition-shadow hover:shadow-md"
              style={{
                fontFamily: '"Inter", sans-serif',
                backgroundColor: "rgba(245,242,239,0.8)",
                borderRadius: "30px",
                color: "#000000",
                boxShadow: "rgba(78,50,23,0.04) 0px 6px 16px",
              }}
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
