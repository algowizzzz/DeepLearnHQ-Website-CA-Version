import Link from 'next/link';
import type { AuthorData, BlogPostData } from '@/data/types';

interface AuthorTemplateProps {
  author: AuthorData;
  posts: BlogPostData[];
}

export default function AuthorTemplate({ author, posts }: AuthorTemplateProps) {
  return (
    <>
      {/* Author Bio Section */}
      <section className="bg-[#0B0C0D] pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1E6FD9] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white">Authors</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              {author.avatar ? (
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#1E6FD9]/30"
                />
              ) : (
                <div className="w-28 h-28 bg-gradient-to-br from-[#1E6FD9] to-[#1859B3] rounded-full flex items-center justify-center border-4 border-[#1E6FD9]/30">
                  <span className="text-white text-3xl font-bold">
                    {author.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="text-center sm:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {author.name}
              </h1>
              <p className="text-[#1E6FD9] font-semibold text-lg mb-4">
                {author.role}
              </p>
              <p className="text-gray-400 leading-relaxed max-w-xl">
                {author.bio}
              </p>
              <p className="text-gray-500 text-sm mt-4">
                {posts.length} article{posts.length !== 1 ? 's' : ''} published
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B0C0D] mb-10">
            Articles by {author.name}
          </h2>

          {posts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                });

                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
                  >
                    {/* Card Image */}
                    {post.featuredImage && (
                      <div className="aspect-video bg-gray-100 overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block bg-[#1E6FD9]/10 text-[#1E6FD9] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <time className="text-gray-400 text-xs">{formattedDate}</time>
                      </div>
                      <h3 className="text-lg font-bold text-[#0B0C0D] group-hover:text-[#1E6FD9] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles published yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
