import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { googleAdsFAQs } from '@/lib/data'
import {
  CheckCircleIcon,
  XCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Google Ads Management for B2B Lead Generation | Phoenix Digital',
  description:
    'Senior-level Google Ads management for B2B companies. Clean account architecture, intent-based targeting, and reporting tied to pipeline value.',
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const commonProblems = [
  { label: 'Paying for the wrong clicks', description: 'Broad match keywords and poor negatives driving irrelevant traffic' },
  { label: 'Low-quality or irrelevant leads', description: 'Volume without qualification — leads that never close' },
  { label: 'Weak account structure and targeting', description: 'Campaigns built for impressions, not pipeline' },
  { label: 'Poor or missing conversion tracking', description: 'No clear picture of what\'s working or where ROI is coming from' },
  { label: 'No clear path from click to conversion', description: 'Great ads landing on generic pages that don\'t convert' },
  { label: 'Agencies focused on busywork, not outcomes', description: 'Reports full of vanity metrics, short on accountability' },
]

const included = [
  'Account strategy and architecture review',
  'Campaign architecture and structure',
  'Keyword research and match type strategy',
  'Ad copy development and testing',
  'Conversion tracking setup and verification',
  'Ongoing optimization and bid management',
  'Monthly performance reporting',
  'Landing page recommendations',
]

const engagementOptions = [
  {
    title: 'Project Kickoff + Ongoing Management',
    description: 'A structured onboarding process followed by disciplined, continuous management. Strategy, architecture, copy, tracking, and optimization — all handled.',
  },
  {
    title: 'Quarterly Strategy Reviews',
    description: 'For businesses with in-house execution that need senior-level strategic oversight and prioritization on a regular cadence.',
  },
  {
    title: 'Landing Page Builds',
    description: 'Conversion-focused landing pages built specifically to support paid search campaigns — included in engagements or available as standalone projects.',
  },
]

export default function GoogleAdsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000914] py-32 lg:py-40" style={sectionPad}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Google Ads Management</p>
          <h1
            className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
          >
            Turn Google Ads into a predictable source of qualified B2B leads.
          </h1>
          <p className="text-[1.05rem] text-[#FBFBFB]/80 leading-relaxed mb-10 max-w-2xl">
            Disciplined paid search management built around lead quality, economics, and pipeline value — not vanity metrics.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Who This Is For</p>
            <h2 className="text-3xl font-semibold text-[#000914] mb-6">
              Built for B2B businesses with real lead value
            </h2>
            <p className="text-[#121010]/70 leading-relaxed">
              Google Ads management from Phoenix Digital is built for B2B companies in one of three situations:
            </p>
          </div>
          <div className="space-y-4">
            {[
              'B2B companies getting too many unqualified leads from paid search',
              'Businesses spending on Google Ads without a clear picture of ROI',
              'Teams working with agencies that optimize for impressions instead of pipeline',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white border border-gray-200 p-5"
                style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
              >
                <CheckCircleIcon className="w-5 h-5 text-[#000914] flex-shrink-0 mt-0.5" />
                <span className="text-[#121010]/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Common Problems We Solve</p>
          <h2 className="text-3xl font-semibold text-[#000914] max-w-lg">
            Why most B2B Google Ads accounts underperform
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonProblems.map((problem) => (
            <div
              key={problem.label}
              className="bg-white border border-gray-200 p-6"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
            >
              <div className="flex items-start gap-3 mb-2">
                <XCircleIcon className="w-5 h-5 text-[#121010]/30 flex-shrink-0 mt-0.5" />
                <h3 className="text-base font-semibold text-[#000914]">{problem.label}</h3>
              </div>
              <p className="text-sm text-[#121010]/60 leading-relaxed pl-8">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">What&apos;s Included</p>
            <h2 className="text-3xl font-semibold text-[#000914] mb-6">
              Full-service management, clearly scoped
            </h2>
            <p className="text-[#121010]/70 leading-relaxed">
              Every Google Ads engagement covers the full stack — from initial strategy to ongoing optimization. Nothing is left to chance or handed off to a junior team member.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5 bg-white border border-gray-200 px-4 py-3">
                <CheckCircleIcon className="w-4 h-4 text-[#000914] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#121010]/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">The Phoenix Digital Approach</p>
          <h2 className="text-3xl font-semibold text-[#000914]">
            Designed around pipeline, not clicks
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Clean Architecture', desc: 'Campaigns built on logical structure and tight audience targeting — not keyword sprawl.' },
            { title: 'Intent-Based Targeting', desc: 'Keywords and match types chosen to capture real buying intent, not just search volume.' },
            { title: 'Copy Built to Qualify', desc: 'Ads that attract the right leads and screen out the wrong ones before the click.' },
            { title: 'Reporting Tied to Pipeline', desc: 'Performance tracked against what matters: leads, lead quality, and pipeline value.' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-200 p-6" style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}>
              <div className="w-6 h-1 bg-[#000914] mb-4" />
              <h3 className="text-base font-semibold text-[#000914] mb-2">{item.title}</h3>
              <p className="text-sm text-[#121010]/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Landing Pages callout */}
      <section className="bg-gray-50 border-y border-gray-200 py-14 lg:py-16" style={sectionPad}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-[#000914] mb-3">
              Why landing pages matter
            </h2>
            <p className="text-[#121010]/70 leading-relaxed text-sm">
              A great Google Ads campaign can be undermined by a weak landing page. Phoenix Digital can build and optimize the landing pages that support your paid search performance — with conversion-focused structure, strong CTAs, and tracking built in from day one.
            </p>
          </div>
          <Button href="/websites-landing-pages" variant="secondary" size="md">
            Learn about landing pages
          </Button>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Engagement Options</p>
          <h2 className="text-3xl font-semibold text-[#000914]">
            How we can work together
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementOptions.map((option) => (
            <div
              key={option.title}
              className="bg-white border border-gray-200 p-8"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
            >
              <div className="w-8 h-1 bg-[#000914] mb-5" />
              <h3 className="text-lg font-semibold text-[#000914] mb-3">{option.title}</h3>
              <p className="text-sm text-[#121010]/60 leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">FAQ</p>
          <h2 className="text-3xl font-semibold text-[#000914]">
            Common questions
          </h2>
        </div>
        <div className="max-w-3xl space-y-4">
          {googleAdsFAQs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-white border border-gray-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-base font-semibold text-[#000914]">{faq.question}</span>
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
      <section className="bg-[#000914] py-20 lg:py-28" style={sectionPad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-[#FBFBFB] font-semibold mb-5"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Get a clearer view of what your Google Ads account should be doing.
          </h2>
          <p className="text-[#FBFBFB]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Book a consultation and we&apos;ll take a direct look at your current setup, your goals, and where paid search can make the biggest difference.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
