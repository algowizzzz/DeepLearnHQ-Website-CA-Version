import { getAllPressReleases } from '@/data/press-releases';
import ListingTemplate from '@/components/templates/ListingTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press Releases | DeepLearnHQ',
  description: 'Latest press releases and announcements from DeepLearnHQ.',
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function getExcerpt(content: string, maxLength = 160): string {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export default function PressReleasesPage() {
  const releases = getAllPressReleases();
  return (
    <ListingTemplate
      title="Press Releases"
      subtitle="Latest press releases and announcements from DeepLearnHQ."
      basePath="/press-release"
      items={releases.map((r) => ({
        slug: r.slug,
        title: r.title,
        date: r.publishDate,
        excerpt: getExcerpt(r.content),
      }))}
    />
  );
}
