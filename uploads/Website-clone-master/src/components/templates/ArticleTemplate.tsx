import Link from 'next/link';
import type { PressReleaseData, NewsData } from '@/data/types';
import RichContent from '@/components/shared/RichContent';

interface ArticleTemplateProps {
  data: PressReleaseData | NewsData;
  type: 'press-release' | 'news';
}

export default function ArticleTemplate({ data, type }: ArticleTemplateProps) {
  const sectionLabel = type === 'press-release' ? 'Press Releases' : 'News & Updates';
  const sectionPath = type === 'press-release' ? '/press-release' : '/news';

  const formattedDate = new Date(data.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Light Hero */}
      <section className="bg-[#fdf8f6] pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={sectionPath} className="hover:text-[#1E6FD9] transition-colors">
              {sectionLabel}
            </Link>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-gray-500 text-base">
            Published on <time dateTime={data.publishDate}>{formattedDate}</time>
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          {data.featuredImage && (
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-12">
              <img
                src={data.featuredImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <RichContent content={data.content} />
        </div>
      </article>

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
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#1E6FD9] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1759b3]"
            >
              Get in Touch
            </Link>
            <Link
              href={sectionPath}
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View All {sectionLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
