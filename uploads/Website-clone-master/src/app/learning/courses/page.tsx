import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Course Catalog — DeepLearnHQ Academy",
  description:
    "7 AI courses on Udemy by Saad Ahmed. Prompt engineering, ChatGPT, generative AI, Python, Midjourney, data analysis, and more. 4.6★ rated. Enroll on Udemy.",
  keywords:
    "AI courses, prompt engineering, ChatGPT course, generative AI, Python for beginners, Midjourney, data analysis, Saad Ahmed Udemy",
};

const courses = [
  {
    slug: "gptcourse",
    udemyUrl: "https://www.udemy.com/course/gptcourse/",
    title: "Complete Prompt Engineering, ChatGPT & AI Bootcamp",
    subtitle: "2,000+ Prompts · MidJourney · ChatGPT · Python",
    level: "Beginner to Advanced",
    description:
      "The flagship course. Covers the full AI practitioner toolkit — prompt engineering, ChatGPT, MidJourney, vibe coding, AI agents, and LangChain. 2,000+ real-world prompts across content, coding, art, and business. Zero prerequisites. Continuously updated.",
    topics: ["Prompt Engineering", "ChatGPT", "MidJourney", "AI Agents", "LangChain", "Vibe Coding"],
    badge: "Bestseller",
  },
  {
    slug: "generative-ai-chatgpt",
    udemyUrl: "https://www.udemy.com/course/generative-ai-chatgpt/",
    title: "Master Generative AI & Generative AI Tools",
    subtitle: "ChatGPT, Adobe Firefly & More",
    level: "All Levels",
    description:
      "An all-encompassing course for beginners and advanced users exploring a wide variety of generative AI tools — from ChatGPT to Adobe Firefly. Covers AI for data analysis, content creation, visualization, and real-world career applications.",
    topics: ["Generative AI", "ChatGPT", "Adobe Firefly", "Data Analysis", "Content Creation", "Career AI"],
    badge: null,
  },
  {
    slug: "python-programming-for-beginners-with-chatgpt",
    udemyUrl: "https://www.udemy.com/course/python-programming-for-beginners-with-chatgpt/",
    title: "Python Programming for Beginners with ChatGPT",
    subtitle: null,
    level: "Beginner",
    description:
      "Learn Python from scratch using ChatGPT and Google Colab as your coding assistant. Covers Python fundamentals, object-oriented programming, advanced techniques, and data analysis — accelerated with AI so you learn faster and retain more.",
    topics: ["Python Fundamentals", "OOP", "Data Analysis", "Google Colab", "ChatGPT", "Automation"],
    badge: "No experience needed",
  },
  {
    slug: "chatgptcodeinterpreterprojects",
    udemyUrl: "https://www.udemy.com/course/chatgptcodeinterpreterprojects/",
    title: "Masterclass in ChatGPT, Advanced Analytics & Python Projects",
    subtitle: null,
    level: "Intermediate",
    description:
      "A hands-on masterclass using ChatGPT's code interpreter for complex data analysis, visualization, and Python projects. Build real-world applications — from Excel automation to web apps — with AI as your development partner.",
    topics: ["ChatGPT Code Interpreter", "Python Projects", "Data Analytics", "Visualization", "Web Apps", "Excel Automation"],
    badge: null,
  },
  {
    slug: "chatgptandpython",
    udemyUrl: "https://www.udemy.com/course/chatgptandpython/",
    title: "Prompt Engineering for Data Analysis: Python, Pandas & ChatGPT",
    subtitle: null,
    level: "Beginner to Intermediate",
    description:
      "Master data analysis and visualization using ChatGPT, Python, and Pandas through prompt engineering techniques. Designed for learners from any background who want to leverage AI to supercharge their data work — no prior coding required.",
    topics: ["Prompt Engineering", "Python", "Pandas", "Data Visualization", "Data Management", "ChatGPT"],
    badge: null,
  },
  {
    slug: "create-digital-ai-art-with-midjourney",
    udemyUrl: "https://www.udemy.com/course/create-digital-ai-art-with-midjourney/",
    title: "Create & Sell AI Art with Midjourney",
    subtitle: "AI Art Generation",
    level: "Beginner",
    description:
      "Learn Midjourney from installation to master-level prompts. Create stunning AI-generated artwork and build a passive income stream selling on Etsy and PromptBase. Covers market research, prompt crafting, and full monetization strategy.",
    topics: ["Midjourney", "AI Art", "Prompt Crafting", "Etsy Selling", "PromptBase", "Passive Income"],
    badge: null,
  },
  {
    slug: "generative-ai-chatgpt-apis-learn-python-with-ai-and-more",
    udemyUrl: "https://www.udemy.com/course/generative-ai-chatgpt-apis-learn-python-with-ai-and-more/",
    title: "Learn Python, Generative AI, APIs, ChatGPT, Gemini & More",
    subtitle: "5 Courses in 1",
    level: "Beginner",
    description:
      "Five courses in one: Python from scratch, Generative AI, ChatGPT APIs, Google Gemini, and 10+ AI tools. Covers AI video, photo editing, code generation, business writing, and real-world applications — a complete AI practitioner foundation.",
    topics: ["Python", "Generative AI", "ChatGPT API", "Google Gemini", "OpenAI API", "10+ AI Tools"],
    badge: "5-in-1",
  },
];

const levelStyle: Record<string, { bg: string; color: string }> = {
  "Beginner": { bg: "#f0fdf4", color: "#15803d" },
  "Beginner to Advanced": { bg: "#f5f5f5", color: "#4e4e4e" },
  "Beginner to Intermediate": { bg: "#f0fdf4", color: "#15803d" },
  "Intermediate": { bg: "#eff6ff", color: "#1d4ed8" },
  "All Levels": { bg: "#f5f5f5", color: "#4e4e4e" },
  "Advanced": { bg: "#faf5ff", color: "#7e22ce" },
};

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/learning"
              className="text-xs transition-opacity hover:opacity-70"
              style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
            >
              Academy
            </Link>
            <span style={{ color: "#e5e5e5" }}>/</span>
            <span className="text-xs" style={{ fontFamily: "Inter, sans-serif", color: "#000000" }}>
              Course Catalog
            </span>
          </div>

          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            7 Courses · Udemy
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.75rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "36rem",
            }}
          >
            Every course we teach.
          </h1>
          <p
            className="mt-5 max-w-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
          >
            All 7 courses taught by Saad Ahmed — available on Udemy with free previews. Covering prompt engineering, generative AI, Python, data analysis, and AI art.
          </p>
        </div>
      </section>

      {/* Course list */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => {
              const ls = levelStyle[course.level] ?? { bg: "#f5f5f5", color: "#4e4e4e" };
              return (
                <div
                  key={course.slug}
                  className="flex flex-col p-8"
                  style={{
                    borderRadius: "20px",
                    backgroundColor: "#ffffff",
                    boxShadow: "rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px",
                  }}
                >
                  {/* Level + badge row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: ls.bg, color: ls.color, fontFamily: "Inter, sans-serif" }}
                    >
                      {course.level}
                    </span>
                    {course.badge && (
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="mb-1"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      fontSize: "1.375rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                      color: "#000000",
                    }}
                  >
                    {course.title}
                  </h2>
                  {course.subtitle && (
                    <p
                      className="mb-4 text-sm"
                      style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}
                    >
                      {course.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p
                    className="flex-1 mb-5 leading-relaxed text-sm"
                    style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e" }}
                  >
                    {course.description}
                  </p>

                  {/* Topic pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#f5f5f5", color: "#777169", fontFamily: "Inter, sans-serif" }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Enroll CTA — links directly to the course */}
                  <a
                    href={course.udemyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Enroll on Udemy
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#000000",
              marginBottom: "1rem",
            }}
          >
            All courses available on Udemy with free previews.
          </p>
          <p className="mb-8 text-sm" style={{ fontFamily: "Inter, sans-serif", color: "#777169" }}>
            Rated 4.6★ · 4,610+ reviews · 35,000+ learners. New courses added regularly.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.udemy.com/user/saad-ahmed-434/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              View instructor profile on Udemy
            </a>
            <Link
              href="/learning/enterprise-training"
              className="inline-block px-6 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff", color: "#4e4e4e", fontFamily: "Inter, sans-serif" }}
            >
              Enterprise training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
