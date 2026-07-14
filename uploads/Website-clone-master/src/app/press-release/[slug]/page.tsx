import { notFound } from 'next/navigation';
import { getAllPressReleaseSlugs, getPressReleaseBySlug } from '@/data/press-releases';
import ArticleTemplate from '@/components/templates/ArticleTemplate';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPressReleaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getPressReleaseBySlug(slug);
  if (!data) return { title: 'Not Found' };
  return { title: data.metaTitle, description: data.metaDescription };
}

export default async function PressReleasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getPressReleaseBySlug(slug);
  if (!data) notFound();
  return <ArticleTemplate data={data} type="press-release" />;
}
