interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({
  features,
  columns = 3,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-6 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="group p-6 transition-all"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow:
              "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
          }}
        >
          <div
            className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium"
            style={{
              fontFamily: '"Inter", sans-serif',
              backgroundColor: "#f5f5f5",
              color: "#777169",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <h3
            className="mb-3 text-lg font-medium"
            style={{
              fontFamily: '"Inter", sans-serif',
              color: "#000000",
              letterSpacing: "0.16px",
            }}
          >
            {feature.title}
          </h3>
          <p
            className="leading-relaxed text-sm"
            style={{
              fontFamily: '"Inter", sans-serif',
              color: "#4e4e4e",
              letterSpacing: "0.16px",
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
