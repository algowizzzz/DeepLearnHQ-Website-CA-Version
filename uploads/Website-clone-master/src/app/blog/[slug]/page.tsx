import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found | DeepLearnHQ Blog' };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.relatedPosts
    .map((relSlug) => blogPosts.find((p) => p.slug === relSlug))
    .filter(Boolean)
    .map((p) => ({
      slug: p!.slug,
      title: p!.title,
      category: p!.category,
      featuredImage: p!.featuredImage,
      publishDate: p!.publishDate,
      excerpt: p!.excerpt,
    }));

  return <BlogPostTemplate data={post} relatedPosts={relatedPosts} />;
}
