import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AuthorTemplate from '@/components/templates/AuthorTemplate';
import { getAuthorBySlug, getAllAuthorSlugs } from '@/data/authors';
import { getBlogPostsByAuthor } from '@/data/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: 'Author Not Found | DeepLearnHQ Blog' };
  }

  return {
    title: `${author.name} - ${author.role} | DeepLearnHQ Blog`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - ${author.role} | DeepLearnHQ Blog`,
      description: author.bio,
      type: 'profile',
    },
  };
}

export default async function AuthorPage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = getBlogPostsByAuthor(slug);

  return <AuthorTemplate author={author} posts={posts} />;
}
