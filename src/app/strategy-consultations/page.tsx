import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { strategyCategories } from '@/lib/data'
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Strategy Consultations | Phoenix Digital',
  description:
    'Senior-level advisory sessions covering marketing, data, RevOps, CRM, financial planning, and applied AI strategy.',
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const sessionFormats = [
  {
    title: 'Hourly Advisory',
    description:
      'Focused, senior-level guidance on a specific problem, decision, or opportunity. Come with a clear question, leave with a clear answer.',
  },
  {
    title: '90-Minute Strategy Intensive',
    description:
      'A structured deep-dive into a specific area — funnel, tracking, GTM, CRM, or AI adoption. Includes a written summary of key takeaways and next steps.',
  },
  {
    title: 'Audit + Recommendations',
    description:
      'A thorough review of your current setup in a specific area, followed by a prioritized set of practical recommendations.',
  },
]

const whoThisIsFor = [
  'Founders and operators who need a senior perspective quickly',
  'Teams stuck on a specific funnel, tracking, or strategy problem',
  'Businesses that want a second opinion before a significant decision',
  'Organizations evaluating AI tools, CRM changes, or new GTM approaches',
]

const strategyFAQs = [
  {
    question: 'Is this ongoing consulting or one-time sessions?',
    answer:
      'Strategy consultations are intentionally scoped as advisory sessions — not open-ended ongoing retainers. That keeps the focus tight and the value high. Multiple sessions can be booked as needed.',
  },
  {
    question: 'What is and is not included in a strategy session?',
    answer:
      'Sessions are advisory only. You get experienced guidance, a clear framework, or a practical next step. Implementation work outside of Google Ads and web projects is not assumed and would be scoped separately.',
  },
  {
    question: 'How do I prepare for a session?',
    answer:
      'Come with a specific question, problem, or decision you want to work through. The more specific the input, the more actionable the output.',
  },
  {
    question: 'Can strategy sessions lead to a broader engagement?',
    answer:
      'Yes. Many engagements start with a strategy session. If Google Ads management or a website project makes sense, we can discuss scope from there.',
  },
]

export default function StrategyConsultationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#020f2a] py-32 lg:py-40" style={sectionPad}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Strategy Consultations</p>
          <h1
            className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
          >
            Senior-level strategy sessions for growth, tracking, GTM, CRM, and AI-enabled operations.
          </h1>
          <p className="text-[1.05rem] text-[#FBFBFB]/80 leading-relaxed mb-10 max-w-2xl">
            Strategy consultations are designed for businesses that need experienced guidance, sharper decision-making, or targeted troubleshooting — without committing to broad implementation work.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Scope note */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 lg:py-14" style={sectionPad}>
        <div className="max-w-2xl">
          <p className="text-[#020f2a] font-medium leading-relaxed">
            These are advisory sessions — not open-ended execution retainers. Sessions are intentionally scoped to give you a clear answer, a sharper framework, or a practical next step. Implementation outside of Google Ads and web projects is not assumed.
          </p>
        </div>
      </section>

      {/* Six Categories */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Areas of Focus</p>
          <h2 className="text-3xl font-semibold text-[#020f2a]">
            Six categories of senior-level advisory
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-gray-200 p-7"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
            >
              <div className="w-8 h-1 bg-[#020f2a] mb-5" />
              <h3 className="text-base font-semibold text-[#020f2a] mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-[#121010]/60 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Who This Is For</p>
            <h2 className="text-3xl font-semibold text-[#020f2a] mb-6">
              Built for operators who need answers, not ambiguity
            </h2>
            <p className="text-[#121010]/70 leading-relaxed">
              Strategy sessions are best suited for decision-makers who have a specific problem to solve and want experienced guidance without a long ramp-up.
            </p>
          </div>
          <div className="space-y-4">
            {whoThisIsFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white border border-gray-200 p-5"
              >
                <CheckCircleIcon className="w-5 h-5 text-[#020f2a] flex-shrink-0 mt-0.5" />
                <span className="text-[#121010]/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Session Formats</p>
          <h2 className="text-3xl font-semibold text-[#020f2a]">
            Choose the format that fits your need
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessionFormats.map((format) => (
            <div
              key={format.title}
              className="bg-white border border-gray-200 p-8"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
            >
              <div className="w-8 h-1 bg-[#020f2a] mb-5" />
              <h3 className="text-lg font-semibold text-[#020f2a] mb-3">
                {format.title}
              </h3>
              <p className="text-sm text-[#121010]/60 leading-relaxed">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">FAQ</p>
          <h2 className="text-3xl font-semibold text-[#020f2a]">
            Common questions
          </h2>
        </div>
        <div className="max-w-3xl space-y-4">
          {strategyFAQs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-base font-semibold text-[#020f2a]">{faq.question}</span>
                <ChevronDownIcon className="w-5 h-5 text-[#121010]/30 flex-shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-5 border-t border-gray-100">
                <p className="text-sm text-[#121010]/70 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020f2a] py-20 lg:py-28" style={sectionPad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-[#FBFBFB] font-semibold mb-5"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Have a specific problem to work through?
          </h2>
          <p className="text-[#FBFBFB]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a strategy session and bring your question. We&apos;ll give you a clear perspective, a practical framework, and a concrete next step.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
