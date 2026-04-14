import type { Metadata } from 'next'
import Link from 'next/link'
import { paidSearchFAQs } from '@/lib/data'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Paid Search & Landing Pages for B2B Lead Generation | Phoenix Digital',
  description:
    'Senior-level Google Ads management and conversion-focused landing pages for B2B companies. Clean architecture, intent-based targeting, and reporting tied to pipeline value.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const commonProblems = [
  { label: 'Paying for the wrong clicks', desc: 'Broad match keywords and poor negatives driving irrelevant traffic.' },
  { label: 'Low-quality or irrelevant leads', desc: 'Volume without qualification — leads that never close.' },
  { label: 'Weak account structure', desc: 'Campaigns built for impressions, not pipeline.' },
  { label: 'Poor conversion tracking', desc: "No clear picture of what's working or where ROI is coming from." },
  { label: 'No click-to-conversion path', desc: 'Great ads landing on generic pages that don\'t convert.' },
  { label: 'Agency busywork, not outcomes', desc: 'Reports full of vanity metrics, short on accountability.' },
]

const included = [
  'Account strategy and architecture review',
  'Campaign architecture and structure',
  'Keyword research and match type strategy',
  'Ad copy development and testing',
  'Conversion tracking setup and verification',
  'Ongoing optimization and bid management',
  'Landing page builds and optimization',
  'Monthly performance reporting',
]

export default function PaidSearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-32 lg:py-40" style={pad}>
        <div className="max-w-3xl">
          <p className="text-brand-light font-medium text-sm tracking-wide uppercase mb-4">Paid Search</p>
          <h1 className="text-display text-white mb-6">
            Turn paid search into a predictable source of qualified B2B leads.
          </h1>
          <p className="text-slate-400 text-body-lg mb-10 max-w-2xl">
            Google Ads management and landing page strategy built around lead quality, economics, and pipeline value — not vanity metrics.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">Who This Is For</p>
            <h2 className="text-heading text-slate-900 mb-6">Built for B2B businesses with real lead value</h2>
            <p className="text-slate-500 leading-relaxed">
              Paid search management from Phoenix Digital is built for B2B companies in one of three situations:
            </p>
          </div>
          <div className="space-y-4">
            {[
              'B2B companies getting too many unqualified leads from paid search',
              'Businesses spending on Google Ads without a clear picture of ROI',
              'Teams working with agencies that optimize for impressions instead of pipeline',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5">
                <svg className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-100" style={pad}>
        <div className="mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">Common Problems We Solve</p>
          <h2 className="text-heading text-slate-900 max-w-lg">Why most B2B Google Ads accounts underperform</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonProblems.map((p) => (
            <div key={p.label} className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-base font-semibold text-slate-900 mb-2">{p.label}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">What&apos;s Included</p>
            <h2 className="text-heading text-slate-900 mb-6">Full-service management, clearly scoped</h2>
            <p className="text-slate-500 leading-relaxed">
              Every paid search engagement covers the full stack — from strategy to landing pages to ongoing optimization. Nothing is handed off to a junior team.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-100" style={pad}>
        <div className="max-w-2xl mb-12">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">Our Approach</p>
          <h2 className="text-heading text-slate-900">Designed around pipeline, not clicks</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Clean Architecture', desc: 'Campaigns built on logical structure and tight audience targeting — not keyword sprawl.' },
            { title: 'Intent-Based Targeting', desc: 'Keywords and match types chosen to capture real buying intent, not just search volume.' },
            { title: 'Copy Built to Qualify', desc: 'Ads that attract the right leads and screen out the wrong ones before the click.' },
            { title: 'Landing Pages That Convert', desc: 'Purpose-built pages designed to match visitor intent and maximize conversion rates.' },
          ].map((item) => (
            <div key={item.title} className="border border-slate-200 rounded-xl p-6">
              <div className="w-8 h-0.5 bg-brand mb-5 rounded-full" />
              <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28" style={pad}>
        <div className="mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-heading text-slate-900">Common questions</h2>
        </div>
        <div className="max-w-3xl space-y-4">
          {paidSearchFAQs.map((faq) => (
            <details key={faq.question} className="group bg-white border border-slate-200 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                <ChevronDownIcon className="w-5 h-5 text-slate-300 flex-shrink-0 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-5 border-t border-slate-100">
                <p className="text-sm text-slate-500 leading-relaxed pt-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28" style={pad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading text-slate-900 mb-5">Get a clearer view of what your paid search should be doing.</h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a consultation and we&apos;ll take a direct look at your current setup, your goals, and where paid search can make the biggest difference.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
