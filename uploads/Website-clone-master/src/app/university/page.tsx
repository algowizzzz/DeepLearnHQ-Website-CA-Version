import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import CTASection from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'University | DeepLearnHQ',
  description:
    'Begin your professional journey at DeepLearnHQ. We defy norms, embrace risks, and create influence through our internship and training programs.',
};

const programDetails = [
  {
    title: 'Learn From the Best',
    description:
      'Our mentors are seasoned professionals with years of industry experience. They guide you through real-world projects, not textbook exercises, helping you build skills that matter in the professional world.',
    icon: (
      <svg className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Work on Real Projects',
    description:
      'From day one, you will be contributing to live projects for real clients. This hands-on approach ensures you graduate with a portfolio of work that demonstrates genuine capability and professional experience.',
    icon: (
      <svg className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Build Your Network',
    description:
      'Connect with fellow interns, mentors, and industry leaders. The relationships you build at DeepLearnHQ extend far beyond the program, providing a professional network that supports your career growth.',
    icon: (
      <svg className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Career Launchpad',
    description:
      'Top-performing participants receive full-time employment offers. Our program has a strong track record of converting talented interns into permanent team members who go on to lead key projects.',
    icon: (
      <svg className="w-8 h-8 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const applicationSteps = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Fill out the online application form with your resume, cover letter, and portfolio links.',
  },
  {
    step: '02',
    title: 'Technical Assessment',
    description: 'Complete a skills assessment tailored to the role you are applying for.',
  },
  {
    step: '03',
    title: 'Interview',
    description: 'Meet with our team leads for a conversation about your experience, goals, and culture fit.',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    description: 'Successful candidates receive an offer letter and begin the onboarding journey.',
  },
];

const tracks = [
  'Software Engineering',
  'Mobile Development',
  'UI/UX Design',
  'Quality Assurance',
  'Data Science & AI',
  'Project Management',
];

export default function UniversityPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="Begin your Professional Journey here"
        description="If it's broken, fix it. If it doesn't exist, invent it. At DeepLearnHQ, we defy norms, embrace risks, and create influence."
        bgColor="#fdf8f6"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'University' },
        ]}
      />

      {/* Full-width Team Photo */}
      <section className="relative w-full">
        <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E6FD9]/10 to-[#0B0C0D]/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase">Our Young Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Our Program
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Why DeepLearnHQ University?
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We do not just train interns. We build professionals who are ready to take on the challenges of the modern tech industry from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {programDetails.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0B0C0D] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Tracks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              Tracks
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Available Programs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div
                key={track}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E6FD9]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#1E6FD9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0B0C0D]">{track}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#1E6FD9] text-sm font-semibold uppercase tracking-widest">
              How to Apply
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#0B0C0D]">
              Application Process
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {applicationSteps.map((item) => (
              <div key={item.step} className="relative flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-[#0B0C0D] rounded-2xl flex items-center justify-center">
                  <span className="text-[#1E6FD9] font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B0C0D] mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection
        title="Ready to Start Your Journey?"
        description="Applications are open for the next cohort. Take the first step toward building world-class digital products with DeepLearnHQ."
        primaryCTA={{ label: 'Apply Now', href: '/contact' }}
        secondaryCTA={{ label: 'View Open Positions', href: '/careers' }}
      />
    </>
  );
}
