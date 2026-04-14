import type { Metadata } from 'next'
import Link from 'next/link'
import { strategyCategories } from '@/lib/data'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Strategic Sessions | Phoenix Digital',
  description:
    'Senior-level advisory sessions covering marketing, data, RevOps, CRM, financial planning, and applied AI strategy.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const sessionFormats = [
  {
    title: 'Hourly Advisory',
    description: 'Focused, senior-level guidance on a specific problem, decision, or opportunity. Come with a clear question, leave with a clear answer.',
  },
  {
    title: '90-Minute Strategy Intensive',
    description: 'A structured deep-dive into a specific area — funnel, tracking, GTM, CRM, or AI adoption. Includes a written summary of key takeaways and next steps.',
  },
  {
    title: 'Audit + Recommendations',
    description: 'A thorough review of your current setup in a specific area, followed by a prioritized set of practical recommendations.',
  },
]

const strategyFAQs = [
  { question: 'Is this ongoing consulting or one-time sessions?', answer: 'Strategic sessions are intentionally scoped as advisory — not open-ended retainers. That keeps the focus tight and the value high. Multiple sessions can be booked as needed.' },
  { question: 'What is and is not included?', answer: 'Sessions are advisory only. You get experienced guidance, a clear framework, or a practical next step. Implementation work outside of paid search and web projects is not assumed.' },
  { question: 'How do I prepare for a session?', answer: 'Come with a specific question, problem, or decision you want to work through. The more specific the input, the more actionable the output.' },
  { question: 'Can sessions lead to a broader engagement?', answer: 'Yes. Many engagements start with a strategic session. If paid search management or a website project makes sense, we can discuss scope from there.' },
]

export default function StrategicSessionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-20 sm:py-28 lg:py-36" style={pad}>
        <div className="max-w-3xl">
          <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Strategic Sessions</p>
          <h1 className="text-display text-slate-900 mb-6">
            Senior-level strategy sessions for growth, tracking, GTM, CRM, and AI.
          </h1>
          <p className="text-slate-400 text-body-lg mb-10 max-w-2xl">
            Designed for businesses that need experienced guidance, sharper decision-making, or targeted troubleshooting — without committing to broad implementation work.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-700 rounded-lg transition-colors">
            Book a Session
          </Link>
        </div>
      </section>

      {/* Scope Note */}
      <section className="bg-slate-100 border-b border-slate-200 py-10 lg:py-12" style={pad}>
        <div className="max-w-2xl">
          <p className="text-slate-700 font-medium leading-relaxed">
            These are advisory sessions — not open-ended execution retainers. Sessions are intentionally scoped to give you a clear answer, a sharper framework, or a practical next step.
          </p>
        </div>
      </section>

      {/* Six Categories */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-200" style={pad}>
        <div className="mb-12">
          <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Areas of Focus</p>
          <h2 className="text-heading text-slate-900">Six categories of senior-level advisory</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategyCategories.map((cat) => (
            <div key={cat.title} className="border border-slate-200 rounded-xl p-7">
              <div className="w-8 h-0.5 bg-slate-900 mb-5 rounded-full" />
              <h3 className="text-base font-semibold text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-100 border-b border-slate-200 py-20 lg:py-28" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Who This Is For</p>
            <h2 className="text-heading text-slate-900 mb-6">Built for operators who need answers, not ambiguity</h2>
            <p className="text-slate-500 leading-relaxed">
              Strategic sessions are best suited for decision-makers who have a specific problem to solve and want experienced guidance without a long ramp-up.
            </p>
          </div>
          <div className="space-y-4">
            {[
              'Founders and operators who need a senior perspective quickly',
              'Teams stuck on a specific funnel, tracking, or strategy problem',
              'Businesses that want a second opinion before a significant decision',
              'Organizations evaluating AI tools, CRM changes, or new GTM approaches',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5">
                <svg className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Formats */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-200" style={pad}>
        <div className="mb-12">
          <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Session Formats</p>
          <h2 className="text-heading text-slate-900">Choose the format that fits your need</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sessionFormats.map((format) => (
            <div key={format.title} className="border border-slate-200 rounded-xl p-7">
              <div className="w-8 h-0.5 bg-slate-900 mb-5 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{format.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 border-b border-slate-200 py-20 lg:py-28" style={pad}>
        <div className="mb-12">
          <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-heading text-slate-900">Common questions</h2>
        </div>
        <div className="max-w-3xl space-y-4">
          {strategyFAQs.map((faq) => (
            <details key={faq.question} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-sm sm:text-base font-semibold text-slate-900">{faq.question}</span>
                <ChevronDownIcon className="w-5 h-5 text-slate-300 flex-shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-5 border-t border-slate-200">
                <p className="text-sm text-slate-500 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28" style={pad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading text-slate-900 mb-5">Have a specific problem to work through?</h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a strategic session and bring your question. We&apos;ll give you a clear perspective, a practical framework, and a concrete next step.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-700 rounded-lg transition-colors">
            Book a Session
          </Link>
        </div>
      </section>
    </>
  )
}
