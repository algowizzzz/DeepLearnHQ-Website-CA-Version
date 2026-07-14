"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const getHref = (page: number) => {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={getHref(currentPage - 1)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
        >
          Prev
        </Link>
      )}

      {pages.map((page, index) =>
        typeof page === "string" ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getHref(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-[#1E6FD9] text-white"
                : "border border-gray-200 text-gray-600 hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link
          href={getHref(currentPage + 1)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-[#1E6FD9] hover:text-[#1E6FD9]"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
