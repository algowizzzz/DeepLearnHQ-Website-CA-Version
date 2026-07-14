"use client";

import { useState, useEffect, useRef } from "react";

interface Tech {
  name: string;
  color: string;
  abbr: string;
}

const tabs: Record<string, Tech[]> = {
  AI: [
    { name: "LangChain", color: "#512BD4", abbr: "LC" },
    { name: "PyTorch", color: "#EE4C2C", abbr: "PT" },
    { name: "TensorFlow", color: "#FF6F00", abbr: "TF" },
    { name: "HuggingFace", color: "#FFD21E", abbr: "HF" },
    { name: "OpenAI", color: "#10A37F", abbr: "OA" },
    { name: "Anthropic", color: "#000000", abbr: "AC" },
    { name: "Vertex AI", color: "#4285F4", abbr: "VA" },
    { name: "Llama 2", color: "#4B8BBE", abbr: "L2" },
  ],
  Web: [
    { name: "React", color: "#61DAFB", abbr: "Re" },
    { name: "Next.js", color: "#000000", abbr: "Nx" },
    { name: "TypeScript", color: "#3178C6", abbr: "TS" },
    { name: "Node.js", color: "#339933", abbr: "Nd" },
    { name: "Python", color: "#3776AB", abbr: "Py" },
    { name: "Django", color: "#092E20", abbr: "Dj" },
    { name: "FastAPI", color: "#009688", abbr: "FA" },
    { name: "Tailwind CSS", color: "#06B6D4", abbr: "TW" },
  ],
  Mobile: [
    { name: "Swift", color: "#F05138", abbr: "Sw" },
    { name: "Kotlin", color: "#7F52FF", abbr: "Kt" },
    { name: "Flutter", color: "#02569B", abbr: "Fl" },
    { name: "React Native", color: "#61DAFB", abbr: "RN" },
    { name: "Firebase", color: "#FFCA28", abbr: "Fb" },
    { name: "Expo", color: "#000000", abbr: "Ex" },
    { name: "SwiftUI", color: "#0071E3", abbr: "SU" },
    { name: "Jetpack Compose", color: "#4285F4", abbr: "JC" },
  ],
  Data: [
    { name: "PostgreSQL", color: "#4169E1", abbr: "Pg" },
    { name: "MongoDB", color: "#47A248", abbr: "Mg" },
    { name: "Redis", color: "#DC382D", abbr: "Rd" },
    { name: "Elasticsearch", color: "#005571", abbr: "Es" },
    { name: "Kafka", color: "#231F20", abbr: "Kf" },
    { name: "Snowflake", color: "#29B5E8", abbr: "Sf" },
    { name: "BigQuery", color: "#4285F4", abbr: "BQ" },
    { name: "Apache Spark", color: "#E25A1C", abbr: "AS" },
  ],
  Cloud: [
    { name: "AWS", color: "#FF9900", abbr: "AW" },
    { name: "Azure", color: "#0078D4", abbr: "Az" },
    { name: "GCP", color: "#4285F4", abbr: "GC" },
    { name: "Docker", color: "#2496ED", abbr: "Dk" },
    { name: "Kubernetes", color: "#326CE5", abbr: "K8" },
    { name: "Terraform", color: "#7B42BC", abbr: "Tf" },
    { name: "GitHub Actions", color: "#2088FF", abbr: "GA" },
    { name: "Jenkins", color: "#D24939", abbr: "Jk" },
  ],
};

const tabKeys = Object.keys(tabs);

const cardShadow =
  "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px";

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setFadeKey((prev) => prev + 1);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28"
      style={{
        backgroundColor: "#f5f5f5",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 400,
              letterSpacing: "0.18px",
              color: "#777169",
              textTransform: "uppercase",
            }}
          >
            TECH STACK
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              marginTop: "12px",
            }}
          >
            Built With Modern Tools
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              lineHeight: 1.6,
              letterSpacing: "0.18px",
              color: "#4e4e4e",
              marginTop: "16px",
            }}
          >
            We use the right tool for the job. Always.
          </p>
        </div>

        {/* Tabs on left, tech grid on right */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: vertical tab list */}
          <div className="lg:w-56 shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {tabKeys.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className="whitespace-nowrap text-left transition-all duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: activeTab === tab ? 600 : 400,
                    fontSize: "0.9375rem",
                    padding: "10px 16px",
                    borderRadius: "9999px",
                    backgroundColor:
                      activeTab === tab ? "#000000" : "rgba(0,0,0,0.04)",
                    color: activeTab === tab ? "#ffffff" : "#4e4e4e",
                    border: "none",
                    cursor: "pointer",
                    letterSpacing: "0.18px",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right: tech badges grid */}
          <div className="flex-1">
            <div
              key={fadeKey}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-fadeIn"
            >
              {tabs[activeTab].map((tech, index) => (
                <div
                  key={`${activeTab}-${tech.name}`}
                  className="flex items-center gap-3 animate-slideUp"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    boxShadow: cardShadow,
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.abbr}
                  </div>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      fontSize: "0.8125rem",
                      color: "#000000",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
