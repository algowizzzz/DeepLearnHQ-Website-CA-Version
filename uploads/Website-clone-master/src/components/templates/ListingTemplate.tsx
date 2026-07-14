'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

interface ListingItem {
  slug: string;
  title: string;
  date?: string;
  category?: string;
  image?: string;
  excerpt?: string;
}

interface ListingTemplateProps {
  title: string;
  subtitle?: string;
  items: ListingItem[];
  basePath: string;
  categories?: string[];
}

const ITEMS_PER_PAGE = 12;

export default function ListingTemplate({
  title,
  subtitle,
  items,
  basePath,
  categories = [],
}: ListingTemplateProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Light Hero */}
      <section className="bg-[#fdf8f6] pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-[#0B0C0D] md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-500 md:text-xl max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="bg-white border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => handleCategoryChange('All')}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === 'All'
                    ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Article Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedItems.length > 0 ? (
            <div className="space-y-0 divide-y divide-gray-200">
              {paginatedItems.map((item) => {
                const formattedDate = item.date
                  ? new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : null;

                return (
                  <Link
                    key={item.slug}
                    href={`${basePath}/${item.slug}`}
                    className="group block py-8 first:pt-0 last:pb-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors leading-snug mb-2 md:text-2xl">
                          {item.title}
                        </h3>
                        {item.excerpt && (
                          <p className="text-gray-500 text-base leading-relaxed line-clamp-2 mb-3">
                            {item.excerpt}
                          </p>
                        )}
                        {formattedDate && (
                          <time className="text-sm text-gray-400">{formattedDate}</time>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 group-hover:border-[#1E6FD9] group-hover:bg-[#1E6FD9] transition-all flex-shrink-0 mt-1">
                        <svg
                          className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No items found.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const showPage =
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1;

                if (!showPage) {
                  const prevShown =
                    page - 1 === 1 ||
                    page - 1 === totalPages ||
                    Math.abs(page - 1 - currentPage) <= 1;
                  if (prevShown) {
                    return (
                      <span key={page} className="w-10 h-10 flex items-center justify-center text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-semibold text-sm transition-colors ${
                      currentPage === page
                        ? 'bg-[#1E6FD9] text-white shadow-md shadow-[#1E6FD9]/30'
                        : 'border border-gray-200 text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9]'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#0B0C0D] px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
            Pull the Trigger!
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let&apos;s bring your vision to life
          </h2>
          <p className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Partner with DeepLearnHQ to transform your ideas into powerful digital solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#1E6FD9] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1759b3]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
