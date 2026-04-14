import type { Metadata } from 'next'
import Link from 'next/link'
import { websitesFAQs } from '@/lib/data'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'B2B Websites | Phoenix Digital',
  description:
    'Fast, conversion-focused websites for B2B growth. Built to support lead generation and establish credibility.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const projectTypes = [
  {
    title: 'Lead Gen Websites',
    description: '3-8 page service sites built to convert. Clear messaging, strong structure, and design built around your lead generation goals.',
    tags: ['3-6 week delivery', 'Full site', 'SEO foundations'],
  },
  {
    title: 'Site Refreshes',
    description: 'Updated messaging, structure, and design for existing sites that need to perform better without a full rebuild.',
    tags: ['Flexible scope', 'Messaging-first', 'Quick to launch'],
  },
  {
    title: 'New Service Pages',
    description: 'Focused pages for new service offerings or campaigns — structured to rank and convert.',
    tags: ['Fast turnaround', 'SEO-ready', 'Conversion-focused'],
  },
]

const whatWeInclude = [
  'Conversion-focused structure and copy',
  'Fast turnaround',
  'Modern tech stack (Next.js, React, Tailwind)',
  'Mobile-responsive design',
  'Form and CTA setup',
  'Lightweight SEO foundations',
  'Analytics and tracking readiness',
]

export default function WebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-32 lg:py-40" style={pad}>
        <div className="max-w-3xl">
          <p className="text-brand-light font-medium text-sm tracking-wide uppercase mb-4">Websites</p>
          <h1 className="text-display text-white mb-6">
            Fast, conversion-focused websites for B2B growth.
          </h1>
          <p className="text-slate-400 text-body-lg mb-10 max-w-2xl">
            Built to support lead generation and establish credibility — not just to look good.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28" style={pad}>
        <div className="mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">What We Build</p>
          <h2 className="text-heading text-slate-900 mb-4">Three types of projects</h2>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            From site refreshes to full B2B websites, every project is built with the same goal: generate more qualified leads.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectTypes.map((project) => (
            <div key={project.title} className="bg-white border border-slate-200 rounded-xl p-8">
              <div className="w-8 h-0.5 bg-brand mb-5 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-block text-xs font-medium text-brand bg-brand-subtle rounded-md px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-100" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">What&apos;s Included</p>
            <h2 className="text-heading text-slate-900 mb-6">Everything needed to perform</h2>
            <p className="text-slate-500 leading-relaxed">
              Every project includes the core elements for conversion performance — not just visual design. Tracking, performance foundations, and clear CTAs are part of every deliverable.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {whatWeInclude.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-lg px-5 py-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-900 py-14 lg:py-16" style={pad}>
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white mb-3">Modern stack built for performance</h2>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xl">
              Every site is built on a modern web stack — fast load times, reliable deployment, and easy handoff. No bloated CMS dependencies or legacy frameworks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Next.js', 'React', 'Tailwind CSS', 'Vercel'].map((tech) => (
              <span key={tech} className="inline-block text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-100" style={pad}>
        <div className="mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-heading text-slate-900">Common questions</h2>
        </div>
        <div className="max-w-3xl space-y-4">
          {websitesFAQs.map((faq) => (
            <details key={faq.question} className="group bg-slate-50 border border-slate-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-base font-semibold text-slate-900">{faq.question}</span>
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
          <h2 className="text-heading text-slate-900 mb-5">Ready to build a site that converts?</h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a full B2B website or a targeted site refresh, let&apos;s talk about your goals and what the right project looks like.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
