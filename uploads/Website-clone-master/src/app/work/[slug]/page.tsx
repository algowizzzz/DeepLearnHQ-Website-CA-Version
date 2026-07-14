import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/data/case-studies';
import { CaseStudyTemplate } from '@/components/templates';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getCaseStudyBySlug(slug);

  if (!data) {
    notFound();
  }

  return <CaseStudyTemplate data={data} />;
}
