import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import { websitesFAQs } from '@/lib/data'
import {
  CheckCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'B2B Websites & Landing Pages | Phoenix Digital',
  description:
    'Fast, conversion-focused websites and landing pages for B2B growth. Built to support paid acquisition and lead generation.',
}

const whatWeInclude = [
  'Conversion-focused structure and copy',
  'Fast turnaround',
  'Modern tech stack (Next.js, React, Tailwind)',
  'Mobile-responsive design',
  'Form and CTA setup',
  'Lightweight SEO foundations',
  'Analytics and tracking readiness',
]

const projectTypes = [
  {
    title: 'Paid Search Landing Pages',
    description: 'Purpose-built for campaign performance. Designed to align with specific ad groups, match visitor intent, and maximize conversion rates.',
    tags: ['1–2 week delivery', 'Tracking built in', 'CTA-optimized'],
  },
  {
    title: 'Lead Gen Websites',
    description: '3–8 page service sites built to convert. Clear messaging, strong structure, and design built around your lead generation goals.',
    tags: ['3–6 week delivery', 'Full site', 'SEO foundations'],
  },
  {
    title: 'Site Refreshes',
    description: 'Updated messaging, structure, and design for existing sites that need to perform better without a full rebuild.',
    tags: ['Flexible scope', 'Messaging-first', 'Quick to launch'],
  },
  {
    title: 'New Service Pages',
    description: 'Focused pages for new service offerings, campaigns, or organic traffic — structured to rank and convert.',
    tags: ['Fast turnaround', 'SEO-ready', 'Conversion-focused'],
  },
]

const whyPaidSearch = [
  'Every high-intent click that lands on a weak page is a wasted opportunity',
  'Landing pages built specifically for your ad campaigns convert significantly better',
  'Tracking and conversion events built in from day one — not retrofitted later',
  'Aligned messaging from ad headline to page headline to CTA',
]

export default function WebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#000914] py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="text-white/60">Websites & Landing Pages</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight tracking-tight mb-6">
              Fast, conversion-focused websites and landing pages for B2B growth.
            </h1>
            <p className="text-lg text-[#FBFBFB]/80 leading-relaxed mb-10 max-w-2xl">
              Built to support lead generation and paid acquisition — not just to look good.
            </p>
            <Button href="/contact" size="lg" variant="outline">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl font-semibold text-[#000914] tracking-tight mb-4">
              Four types of projects
            </h2>
            <p className="text-slate-600 max-w-xl leading-relaxed">
              From single landing pages to full B2B websites, every project is built with the same goal: generate more qualified leads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectTypes.map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-[6px_6px_9px_rgba(0,0,0,0.2)]"
              >
                <div className="w-8 h-1 bg-[#000914] mb-5" />
                <h3 className="text-xl font-semibold text-[#000914] mb-3">{project.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium text-[#000914] bg-gray-100 border border-gray-200 rounded-none px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters for Paid Search */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Why This Matters for Paid Search</SectionLabel>
              <h2 className="text-3xl font-semibold text-[#000914] tracking-tight mb-6">
                Your landing page is half the battle
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A high-intent Google Ad click that lands on a weak page is a wasted opportunity — and one of the most common reasons B2B paid search underperforms. Phoenix Digital builds pages designed to convert, with clear messaging, strong CTAs, and tracking built in from day one.
              </p>
            </div>
            <div className="space-y-3">
              {whyPaidSearch.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-lg px-5 py-4"
                >
                  <CheckCircleIcon className="w-5 h-5 text-[#000914] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>What&apos;s Included</SectionLabel>
              <h2 className="text-3xl font-semibold text-[#000914] tracking-tight mb-6">
                Everything needed to perform
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Every project includes the core elements for conversion performance — not just visual design. Tracking, performance foundations, and clear CTAs are part of every deliverable.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {whatWeInclude.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-3.5">
                  <CheckCircleIcon className="w-4 h-4 text-[#000914] flex-shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack callout */}
      <section className="bg-[#000914] py-14 lg:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-white mb-3">
                Modern stack built for performance
              </h2>
              <p className="text-[#FBFBFB]/70 leading-relaxed text-sm max-w-xl">
                Every site and landing page is built on a modern web stack — Next.js, React, and Tailwind CSS — built for fast load times, reliable deployment, and easy handoff. No bloated CMS dependencies or legacy frameworks.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Next.js', 'React', 'Tailwind CSS', 'Vercel'].map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-sm font-semibold text-white bg-white/10 border border-white/30 rounded-none px-4 py-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-semibold text-[#000914] tracking-tight">
              Common questions
            </h2>
          </div>
          <div className="max-w-3xl space-y-4">
            {websitesFAQs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="text-base font-semibold text-[#000914]">{faq.question}</span>
                  <ChevronDownIcon className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-5 border-t border-gray-200">
                  <p className="text-sm text-slate-600 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000914] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5 max-w-2xl mx-auto">
            Ready to build a site that converts?
          </h2>
          <p className="text-[#FBFBFB]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a single landing page or a full B2B website, let&apos;s talk about your goals and what the right project looks like.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
