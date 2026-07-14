import { getAllNews } from '@/data/news';
import ListingTemplate from '@/components/templates/ListingTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates | DeepLearnHQ',
  description: 'Latest news and updates from DeepLearnHQ.',
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

function getExcerpt(content: string, maxLength = 160): string {
  const text = stripHtml(content);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

export default function NewsPage() {
  const news = getAllNews();
  return (
    <ListingTemplate
      title="News & Updates"
      subtitle="Latest news and updates from DeepLearnHQ."
      basePath="/news"
      items={news.map((n) => ({
        slug: n.slug,
        title: n.title,
        date: n.publishDate,
        excerpt: getExcerpt(n.content),
      }))}
    />
  );
}
