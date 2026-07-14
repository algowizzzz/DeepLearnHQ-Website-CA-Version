export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewPoints: string[];
  features: { title: string; description: string }[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  caseStudies: {
    title: string;
    description: string;
    image?: string;
    slug?: string;
  }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export interface IndustryPageData {
  slug: string;
  fullSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  overview: string;
  challenges?: { title: string; description: string }[];
  services: { title: string; description: string }[];
  useCases?: { title: string; description: string }[];
  caseStudies: {
    title: string;
    description: string;
    image?: string;
    slug?: string;
  }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  ctaHeading?: string;
  ctaDescription?: string;
}

export interface SolutionPageData {
  slug: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  features: { title: string; description: string }[];
  benefits: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  author: string;
  authorSlug: string;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  readingTime: number;
  relatedPosts: string[];
}

export interface PressReleaseData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  content: string;
  featuredImage?: string;
}

export interface NewsData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  content: string;
  featuredImage?: string;
}

export interface EventData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  location: string;
  description: string;
  content: string;
  image?: string;
}

export interface AuthorData {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  postSlugs: string[];
}

export interface CaseStudyPageData {
  slug: string;
  title: string;
  client: string;
  metaTitle: string;
  metaDescription: string;
  heroImage?: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  technologies: string[];
  testimonial?: { quote: string; name: string; role: string };
}

export interface GeoPageData {
  slug: string;
  service: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  description: string;
  content: string;
}
