import Link from "next/link";

export default function BuildTeam() {
  return (
    <section className="py-16 lg:py-20" style={{ backgroundColor: "#f5f2ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(245,242,239,0.8)",
            borderRadius: "30px",
            padding: "48px 40px",
            boxShadow: "rgba(78,50,23,0.04) 0px 6px 16px",
          }}
        >
          {/* Text */}
          <div>
            <h4
              className="text-center sm:text-left"
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#000000",
              }}
            >
              Amplify Your Team
            </h4>
            <p
              className="mt-3 text-center sm:text-left"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.6,
                letterSpacing: "0.18px",
                color: "#4e4e4e",
                maxWidth: "28rem",
              }}
            >
              AI isn&apos;t about replacing people. It&apos;s about giving them superpowers. We build tools that help your team work faster, smarter, better.
            </p>
          </div>

          {/* CTA — black pill button */}
          <Link
            href="/contact/"
            className="inline-flex items-center whitespace-nowrap transition-opacity duration-300 hover:opacity-80"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#ffffff",
              backgroundColor: "#000000",
              borderRadius: "9999px",
              padding: "12px 24px",
            }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
