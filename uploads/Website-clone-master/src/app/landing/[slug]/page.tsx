import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLandingPageBySlug, getAllLandingPageSlugs } from '@/data/landing-pages';
import LandingPageTemplate from '@/components/templates/LandingPageTemplate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLandingPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      type: 'website',
    },
  };
}

export default async function LandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LandingPageTemplate data={page} />;
}
