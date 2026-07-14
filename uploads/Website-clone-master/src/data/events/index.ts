import type { EventData } from '../types';

const events: Record<string, EventData> = {
  'fintech-hackathon-at-momentum-tech-conference-2018': {
    slug: 'fintech-hackathon-at-momentum-tech-conference-2018',
    title: 'FinTech Hackathon at Momentum Tech Conference 2018',
    metaTitle: 'FinTech Hackathon at Momentum Tech Conference 2018 | DeepLearnHQ',
    metaDescription: 'DeepLearnHQ participated in the FinTech Hackathon at Momentum Tech Conference 2018, showcasing innovative financial technology solutions.',
    date: '2018-10-15',
    location: 'Salt Lake City, Utah, USA',
    description: 'DeepLearnHQ participated in the FinTech Hackathon at Momentum Tech Conference 2018, where our team showcased innovative fintech solutions and competed against top tech companies.',
    content: '<p>DeepLearnHQ was proud to participate in the FinTech Hackathon at the Momentum Tech Conference 2018 held in Salt Lake City, Utah. The event brought together technology leaders, financial innovators, and developers to create cutting-edge fintech solutions.</p><p>Our team of skilled developers worked on building a blockchain-based financial platform that impressed judges with its innovative approach to decentralized finance. The hackathon provided an excellent opportunity to showcase our technical expertise and collaborate with industry peers.</p><p>The Momentum Tech Conference is one of the premier technology events in the western United States, attracting thousands of attendees and featuring keynotes from industry leaders in technology, finance, and entrepreneurship.</p>',
  },
  'startup-grind-global-conference': {
    slug: 'startup-grind-global-conference',
    title: 'Startup Grind Global Conference 2020',
    metaTitle: 'Startup Grind Global Conference 2020 | DeepLearnHQ',
    metaDescription: 'DeepLearnHQ attended the Startup Grind Global Conference 2020 in Silicon Valley, connecting with entrepreneurs and showcasing our development capabilities.',
    date: '2020-02-11',
    location: 'Redwood City, California, USA',
    description: 'DeepLearnHQ attended the Startup Grind Global Conference 2020, one of the largest startup events in the world, held in Silicon Valley.',
    content: '<p>DeepLearnHQ made a significant impact at the Startup Grind Global Conference 2020, one of the world\'s largest events for startups and technology companies. Held in Redwood City, California, the conference brought together over 10,000 attendees from 125+ countries.</p><p>Our CEO, Salman Lakhani, spoke at the event about the journey of building a global software development company. The presentation covered how DeepLearnHQ grew from a small startup to a company with offices in four countries, serving clients worldwide.</p><p>The conference featured keynotes from industry leaders, networking sessions, and startup exhibitions. DeepLearnHQ used the opportunity to connect with potential partners, explore emerging technologies, and share insights about mobile app development, AI, and blockchain technologies.</p>',
  },
  'gitex-technology-week-this-october': {
    slug: 'gitex-technology-week-this-october',
    title: 'GITEX Technology Week 2018',
    metaTitle: 'GITEX Technology Week 2018 | DeepLearnHQ',
    metaDescription: 'DeepLearnHQ exhibited at GITEX Technology Week 2018 in Dubai, showcasing our latest mobile app development, AI, and blockchain solutions.',
    date: '2018-10-14',
    location: 'Dubai World Trade Centre, Dubai, UAE',
    description: 'DeepLearnHQ showcased its cutting-edge technology solutions at GITEX Technology Week 2018, the largest tech exhibition in the Middle East.',
    content: '<p>DeepLearnHQ was thrilled to exhibit at GITEX Technology Week 2018, held at the Dubai World Trade Centre. As the largest technology event in the Middle East, North Africa, and South Asia region, GITEX attracted over 100,000 visitors and 4,500 exhibitors from around the world.</p><p>At our booth, we demonstrated our latest solutions in mobile app development, artificial intelligence, blockchain technology, and IoT applications. Visitors had the opportunity to experience live demos of our products and learn about our development capabilities.</p><p>The event was a massive success for DeepLearnHQ, as we connected with potential clients from across the region, established new partnerships, and gained valuable insights into the technology landscape of the Middle East market.</p>',
  },
};

export function getAllEventSlugs(): string[] {
  return Object.keys(events);
}

export function getEventBySlug(slug: string): EventData | undefined {
  return events[slug];
}

export function getAllEvents(): EventData[] {
  return Object.values(events).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
