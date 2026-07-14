import Link from 'next/link';
import type { BlogPostData } from '@/data/types';
import RichContent from '@/components/shared/RichContent';

// Category → Unsplash photo mapping
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const categoryImages: Record<string, string> = {
  'AI & Machine Learning': u('photo-1677442135703-1787eea5ce01'),
  'Technology':            u('photo-1518770660439-4636190af475'),
  'Digital Transformation':u('photo-1451187580459-43490279c0fa'),
  'Business':              u('photo-1486406146926-c627a92ad1ab'),
  'Startups':              u('photo-1559136555-9303baea8ebd'),
  'Web Development':       u('photo-1547658719-da2b51169166'),
  'Mobile Development':    u('photo-1512941937669-90a1b58e7e9c'),
  'Cloud Computing':       u('photo-1544197150-b99a580bb7a8'),
  'Design':                u('photo-1561070791-2526d30994b5'),
  'Blockchain':            u('photo-1639762681057-408e52192e55'),
  'IoT':                   u('photo-1558618666-fcd25c85cd64'),
  'Game Development':      u('photo-1511512578047-dfb367046420'),
};

function getHeroImage(featuredImage: string, category: string): string {
  if (featuredImage && !featuredImage.includes('placeholder')) return featuredImage;
  return categoryImages[category] ?? u('photo-1518770660439-4636190af475');
}

function getCardImage(featuredImage: string, category: string): string {
  if (featuredImage && !featuredImage.includes('placeholder')) return featuredImage;
  return categoryImages[category]?.replace('w=1200', 'w=800') ?? u('photo-1518770660439-4636190af475', 800);
}

interface BlogPostTemplateProps {
  data: BlogPostData;
  relatedPosts?: {
    slug: string;
    title: string;
    category: string;
    featuredImage: string;
    publishDate: string;
    excerpt: string;
  }[];
}

export default function BlogPostTemplate({ data, relatedPosts = [] }: BlogPostTemplateProps) {
  return (
    <>
      {/* Article Header — white bg, centered */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">
          {/* Title — large centered */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-8">
            {data.title}
          </h1>

          {/* Author (underlined link) + date + reading time */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
            <Link
              href={`/blog/author/${data.authorSlug}`}
              className="text-[#0B0C0D] font-semibold underline hover:text-[#1E6FD9] transition-colors"
            >
              {data.author}
            </Link>
            <span className="mx-1">&middot;</span>
            <time dateTime={data.publishDate}>
              {new Date(data.publishDate).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <span className="mx-1">&middot;</span>
            <span>{data.readingTime} min read</span>
          </div>
        </div>

        {/* Featured Image — full width, rounded */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <img
              src={getHeroImage(data.featuredImage, data.category)}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body — max-w-4xl centered */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <RichContent content={data.content} />
        </div>
      </article>

      {/* Recent Blogs Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header row: "recent blogs." + "View All" */}
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B0C0D]">
                recent blogs.
              </h2>
              <Link
                href="/blog"
                className="text-[#1E6FD9] font-semibold hover:underline transition-colors flex items-center gap-1"
              >
                View All
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* 3 blog cards in a row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((post) => {
                const postDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                });

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block"
                  >
                    {/* Card image */}
                    <div className="aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={getCardImage(post.featuredImage, post.category)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Category badge + date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <time className="text-gray-400 text-xs">{postDate}</time>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
