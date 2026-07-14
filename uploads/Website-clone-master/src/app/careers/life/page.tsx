import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life at DeepLearnHQ | Culture & Values",
  description:
    "How we work, what we value, and what it actually feels like to be part of the DeepLearnHQ team. Real rituals. Real culture. No PR spin.",
};

const values = [
  {
    title: "Ship fast",
    description:
      "We ship early, ship often, we ship to learn. Perfect is the enemy of good. You'll merge code, see it in the world, and iterate based on what users tell us. We have strong opinions, loosely held. Data beats arguments.",
  },
  {
    title: "Teach generously",
    description:
      "If you know something, teach it. If you don't know something, ask. Friday learning hours are protected time. We read papers, run workshops, and share what we're learning. Everyone here teaches someone. Everyone here learns from someone.",
  },
  {
    title: "Stay curious",
    description:
      "We ask why. We try new things. We kill ideas that don't work. We study the industry, we study our users, we study the gaps between what we think and what's true. Curiosity is a job requirement.",
  },
  {
    title: "Own your work",
    description:
      "You're not handed a spec and told to execute. You help shape what gets built. You see it through. You own the outcomes—the wins and the mistakes. That responsibility is what makes the work matter.",
  },
];

const weekDays = [
  {
    day: "Monday",
    title: "Async Start",
    description:
      "We start async. You review PRs from folks across timezones. Slack is warm with messages from Toronto who've already started shipping. There's a daily standup at 10am CT for anyone who needs real-time sync, but most of us read the written updates.",
  },
  {
    day: "Tuesday",
    title: "Deep Work",
    description:
      "You're deep in a feature. Code flows. Slack is quiet. Headphones on. You're pairing with an engineer in Toronto on an agentic system. You've got an async video recorded for the team showing the thinking. They'll watch it and give feedback by evening.",
  },
  {
    day: "Wednesday",
    title: "Sync Day",
    description:
      "Sync day. We have architecture review at 10am. Three engineers present ideas, we poke holes, we ask questions, we commit to a direction. Afternoon is free for implementation. You take a learning hour—reading a paper on RAG systems, watching a course module on Postgres optimization.",
  },
  {
    day: "Thursday",
    title: "Demo Time",
    description:
      "You demo what you built Tuesday through Thursday. Small thing, or big thing—doesn't matter. You show the code, explain the decisions, take feedback. Everyone learns. Someone makes a suggestion that changes your approach. That's the point.",
  },
  {
    day: "Friday",
    title: "Demos & Learning",
    description:
      "Friday demos happen at 10am CT. Every engineer, designer, product person, founder shows what shipped that week. Sometimes it's 3 lines of code. Sometimes it's a full feature. The energy is real. You see your work land. You see teammates' work land. Then it's learning hours. You attend a workshop on prompt engineering, or you run one. Or you just read and take notes.",
  },
];

const rituals = [
  {
    title: "Weekly standup",
    description:
      'Written first, async. Get your message out before 10am CT. "What I shipped. What I\'m working on. What I\'m blocked on." Real, honest, helpful.',
  },
  {
    title: "Friday demos",
    description:
      "10am CT. Ship or don't ship—you show what you worked on. This isn't a presentation. It's a conversation. \"Here's what I built. Here's why. Here's what I'm uncertain about.\" Feedback happens live.",
  },
  {
    title: "Learning hours",
    description:
      "Every Friday afternoon. You pick what you learn. Workshops, courses, papers, code reviews, whatever moves the needle. Protected time. No meetings.",
  },
  {
    title: "Architecture review",
    description:
      "Every other Wednesday. Major decisions get discussed. \"Why this approach?\" \"Did we consider?\" \"What breaks if?\" We make decisions together.",
  },
  {
    title: "Quarterly gatherings",
    description:
      "We get everyone in the same room. Madison one quarter, Toronto the next. We work together, we eat together, we plan together. We're distributed, but we're not disconnected.",
  },
  {
    title: "One-on-ones",
    description:
      "Monthly with your lead. Not status reports. Real conversations. \"How are you growing? What are you struggling with? What do you need from me?\"",
  },
];

export default function LifePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#fdf8f6] pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#1E6FD9] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/careers" className="hover:text-[#1E6FD9] transition-colors">
              Careers
            </Link>
            <span>/</span>
            <span className="text-gray-900">Life at DeepLearnHQ</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
              Life at DeepLearnHQ
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We're a team that ships. Fast. We move with urgency but not panic. We hold each other to high standards and we're generous with help. You'll see the same rigor in our code reviews as you will in how we celebrate wins.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl">
            How we actually behave — not what we put on a poster.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#1E6FD9] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Week Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            A Typical Week
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl">
            What the rhythm of working here actually looks like.
          </p>

          <div className="space-y-6">
            {weekDays.map((item, index) => (
              <div
                key={item.day}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#1E6FD9]">
                      <span className="text-white font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#1a1a1a]">
                      {item.day}: {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Rituals Section */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Team Rituals
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl">
            What keeps us connected across Madison and Toronto.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rituals.map((ritual) => (
              <div
                key={ritual.title}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#1E6FD9] transition-all"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">
                  {ritual.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ritual.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Actually Feels Like Section */}
      <section className="py-20 bg-gray-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-12">
            What It Actually Feels Like
          </h2>

          <div className="max-w-4xl space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              You'll work with people who care about the craft. You'll ship things that matter. You'll learn constantly because your teammates are sharp and generous. You'll be trusted to make decisions. You'll see your work used by real people. You'll face hard problems and solve them alongside people who are smarter than you in different ways.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Some days you'll be frustrated. Some PRs will need three revisions. Some ideas will get killed. That's what matters—we don't ship empty calories. We ship things that work, used by people, solving real problems.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              You'll grow. Not because we're forcing training on you. Because every day you're working alongside people who are better at different things, and you're learning by watching them work.
            </p>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 mt-8">
              <p className="text-[#1E6FD9] font-semibold text-lg">
                "You'll see the same rigor in our code reviews as you will in how we celebrate wins."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Come See For Yourself */}
      <section className="py-20 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#fdf8f6] rounded-2xl p-10 md:p-16 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Come See For Yourself
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Our office in Madison is always open. Our Toronto team works from our office in Toronto, ON. If you're curious about what this feels like, let's talk. We'll show you how we work.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors"
            >
              View Open Positions
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B0C0D] px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to join?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We're always looking for strong people who want to work on real problems. See what's open—or reach out and tell us who you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/careers"
              className="bg-[#1E6FD9] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1859B3] transition-colors text-center"
            >
              View Open Positions
            </Link>
            <a
              href="mailto:careers@deeplearnhq.com"
              className="bg-white text-[#0B0C0D] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              careers@deeplearnhq.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
