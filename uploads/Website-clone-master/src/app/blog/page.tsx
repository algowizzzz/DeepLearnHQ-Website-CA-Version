"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { blogPosts } from "@/data/blog";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const categoryImages: Record<string, string> = {
  "AI & Machine Learning": u("photo-1677442135703-1787eea5ce01"),
  Technology:              u("photo-1518770660439-4636190af475"),
  "Digital Transformation":u("photo-1451187580459-43490279c0fa"),
  Business:                u("photo-1486406146926-c627a92ad1ab"),
  Startups:                u("photo-1559136555-9303baea8ebd"),
  "Web Development":       u("photo-1547658719-da2b51169166"),
  "Mobile Development":    u("photo-1512941937669-90a1b58e7e9c"),
  "Cloud Computing":       u("photo-1544197150-b99a580bb7a8"),
  Design:                  u("photo-1561070791-2526d30994b5"),
  Blockchain:              u("photo-1639762681057-408e52192e55"),
  IoT:                     u("photo-1558618666-fcd25c85cd64"),
  "Game Development":      u("photo-1511512578047-dfb367046420"),
};

function getPostImage(featuredImage: string, category: string): string {
  if (featuredImage && !featuredImage.includes("placeholder")) return featuredImage;
  return categoryImages[category] ?? u("photo-1518770660439-4636190af475");
}

const POSTS_PER_PAGE = 9;

const ALL_CATEGORIES = [
  "All",
  "AI & Machine Learning",
  "Startups",
  "Business",
  "Mobile Development",
  "Web Development",
  "Digital Transformation",
  "Cloud Computing",
  "Technology",
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sort newest first
  const sorted = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()),
    []
  );

  const filtered = useMemo(() => {
    let result = sorted;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [sorted, activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const featuredPost = sorted[0];
  const showFeatured = activeCategory === "All" && !searchQuery.trim() && currentPage === 1;

  const handleCategory = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "#777169" }}
          >
            Insights & Ideas
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#000000",
              maxWidth: "36rem",
            }}
          >
            Thinking on AI, software, and building what lasts.
          </h1>

          {/* Search */}
          <form onSubmit={handleSearch} className="mt-8 max-w-lg">
            <div
              className="flex items-center rounded-full overflow-hidden"
              style={{ border: "1px solid #e5e5e5", backgroundColor: "#ffffff" }}
            >
              <div className="pl-5 pr-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: "#777169" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="flex-1 py-3 text-sm bg-transparent focus:outline-none"
                style={{ color: "#000000", fontFamily: "Inter, sans-serif" }}
              />
              <button
                type="submit"
                className="mr-1 px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
              >
                Search
              </button>
            </div>
          </form>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: "Inter, sans-serif",
                  backgroundColor: activeCategory === cat ? "#000000" : "transparent",
                  color: activeCategory === cat ? "#ffffff" : "#4e4e4e",
                  border: activeCategory === cat ? "1px solid #000000" : "1px solid #e5e5e5",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {showFeatured && featuredPost && (
        <section className="py-14" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div
                className="aspect-[16/10] rounded-2xl overflow-hidden"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <img
                  src={getPostImage(featuredPost.featuredImage, featuredPost.category)}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-[0.15em] mb-4 px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#f5f5f5", color: "#777169" }}
                >
                  {featuredPost.category}
                </span>
                <h2
                  className="mb-4 group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "#000000",
                  }}
                >
                  {featuredPost.title}
                </h2>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9375rem", color: "#4e4e4e" }}
                >
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "#777169" }}>
                  <span>{featuredPost.author}</span>
                  <span style={{ color: "#e5e5e5" }}>|</span>
                  <span>{formatDate(featuredPost.publishDate)}</span>
                  <span style={{ color: "#e5e5e5" }}>|</span>
                  <span>{featuredPost.readingTime} min read</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="py-14" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #f0f0f0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {paginated.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col">
                    {/* Image */}
                    <div
                      className="aspect-[16/10] rounded-xl overflow-hidden mb-4"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <img
                        src={getPostImage(post.featuredImage, post.category)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "#f5f5f5", color: "#777169" }}
                      >
                        {post.category}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#aaa9a3", fontFamily: "Inter, sans-serif" }}>
                        {formatDate(post.publishDate)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-2 group-hover:opacity-70 transition-opacity flex-1"
                      style={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 300,
                        fontSize: "1.375rem",
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                        color: "#000000",
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      className="mb-4 line-clamp-2"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.6, color: "#777169" }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div
                      className="flex items-center justify-between mt-auto pt-4"
                      style={{ borderTop: "1px solid #f0f0f0", fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "#aaa9a3" }}
                    >
                      <span>{post.author}</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
                    style={{ border: "1px solid #e5e5e5", color: "#4e4e4e" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </button>

                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let p: number;
                    if (totalPages <= 7) p = i + 1;
                    else if (currentPage <= 4) p = i + 1;
                    else if (currentPage >= totalPages - 3) p = totalPages - 6 + i;
                    else p = currentPage - 3 + i;
                    return (
                      <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className="w-9 h-9 rounded-full text-sm font-medium transition-colors"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          backgroundColor: currentPage === p ? "#000000" : "transparent",
                          color: currentPage === p ? "#ffffff" : "#4e4e4e",
                          border: currentPage === p ? "1px solid #000000" : "1px solid #e5e5e5",
                        }}
                      >
                        {p}
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors disabled:opacity-30"
                    style={{ border: "1px solid #e5e5e5", color: "#4e4e4e" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-24 text-center">
              <p style={{ fontFamily: "Inter, sans-serif", color: "#777169", fontSize: "1rem" }}>
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#000000",
            }}
          >
            Stay sharp on AI and software.
          </h2>
          <p className="mb-8" style={{ fontFamily: "Inter, sans-serif", color: "#4e4e4e", fontSize: "0.9375rem" }}>
            New articles every week from the DeepLearnHQ team — no noise, no filler.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#000000", color: "#ffffff", fontFamily: "Inter, sans-serif" }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
