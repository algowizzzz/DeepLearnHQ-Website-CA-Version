interface RichContentProps {
  content: string;
}

export default function RichContent({ content }: RichContentProps) {
  return (
    <div
      className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-p:text-gray-600 prose-a:text-[#1E6FD9] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a1a1a] prose-ul:text-gray-600 prose-ol:text-gray-600 prose-img:rounded-lg"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
