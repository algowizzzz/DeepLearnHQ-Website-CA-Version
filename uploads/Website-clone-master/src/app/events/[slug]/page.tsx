import { notFound } from 'next/navigation';
import { getAllEventSlugs, getEventBySlug } from '@/data/events';
import EventTemplate from '@/components/templates/EventTemplate';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllEventSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getEventBySlug(slug);
  if (!data) return { title: 'Not Found' };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getEventBySlug(slug);
  if (!data) notFound();
  return <EventTemplate data={data} />;
}
