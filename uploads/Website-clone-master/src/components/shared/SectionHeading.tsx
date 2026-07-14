interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  titleHighlight?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  titleHighlight,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "";

  const renderTitle = () => {
    if (!titleHighlight) {
      return title;
    }
    const parts = title.split(titleHighlight);
    if (parts.length === 1) {
      return title;
    }
    return (
      <>
        {parts[0]}
        <em
          className="not-italic"
          style={{ color: "#000000", fontStyle: "italic" }}
        >
          {titleHighlight}
        </em>
        {parts.slice(1).join(titleHighlight)}
      </>
    );
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClass}`}>
      {label && (
        <p
          className="mb-3 text-xs font-medium uppercase"
          style={{
            fontFamily: '"Inter", sans-serif',
            color: "#777169",
            letterSpacing: "0.18px",
          }}
        >
          {label}
        </p>
      )}
      <h2
        className="mb-4 leading-[1.08] md:text-4xl lg:text-5xl"
        style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontWeight: 300,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#000000",
          letterSpacing: "-0.02em",
        }}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className="leading-relaxed"
          style={{
            fontFamily: '"Inter", sans-serif',
            color: "#4e4e4e",
            fontSize: "18px",
            letterSpacing: "0.16px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
