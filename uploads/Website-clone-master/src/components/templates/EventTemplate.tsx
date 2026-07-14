import Link from 'next/link';
import type { EventData } from '@/data/types';
import RichContent from '@/components/shared/RichContent';

interface EventTemplateProps {
  data: EventData;
}

export default function EventTemplate({ data }: EventTemplateProps) {
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      {/* Light Hero */}
      <section className="bg-[#fdf8f6] pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/events" className="hover:text-[#1E6FD9] transition-colors">
              Events
            </Link>
          </nav>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0C0D] leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-gray-500 text-base">
            Published on <time dateTime={data.date}>{formattedDate}</time>
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Date & Location Info */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#fdf8f6] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-[#1E6FD9]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Date
                </span>
              </div>
              <p className="text-[#0B0C0D] font-bold text-lg ml-12">{formattedDate}</p>
            </div>
            <div className="bg-[#fdf8f6] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-[#1E6FD9]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Location
                </span>
              </div>
              <p className="text-[#0B0C0D] font-bold text-lg ml-12">{data.location}</p>
            </div>
          </div>

          {/* Event Image */}
          {data.image && (
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-12">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Event Content */}
          <RichContent content={data.content} />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#0B0C0D] px-4 py-20 md:px-8 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1E6FD9]">
            Pull the Trigger!
          </p>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Let&apos;s bring your vision to life
          </h2>
          <p className="mb-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Partner with DeepLearnHQ to transform your ideas into powerful digital solutions.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-[#1E6FD9] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#1759b3]"
            >
              Get in Touch
            </Link>
            <Link
              href="/events"
              className="inline-block rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
