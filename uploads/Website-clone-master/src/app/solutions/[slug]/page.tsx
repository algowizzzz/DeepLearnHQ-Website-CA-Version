import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, getAllSolutionSlugs } from '@/data/solutions';
import { SolutionTemplate } from '@/components/templates';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getSolutionBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getSolutionBySlug(slug);

  if (!data) {
    notFound();
  }

  return <SolutionTemplate data={data} />;
}
