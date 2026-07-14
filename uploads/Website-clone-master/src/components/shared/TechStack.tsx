interface TechStackProps {
  technologies: string[];
}

export default function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="inline-block px-4 py-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{
            fontFamily: '"Inter", sans-serif',
            backgroundColor: "#ffffff",
            color: "#4e4e4e",
            borderRadius: "9999px",
            letterSpacing: "0.16px",
            boxShadow:
              "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
