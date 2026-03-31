import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ContactForm from '@/components/sections/ContactForm'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Contact | Phoenix Digital',
  description:
    'Get in touch with Phoenix Digital to discuss Google Ads management, landing pages, websites, or strategy consulting.',
}

const goodFitProjects = [
  'Google Ads campaign management and optimization',
  'Conversion-focused landing pages for paid campaigns',
  'B2B lead gen websites and site refreshes',
  'Strategy sessions on funnel, tracking, GTM, or CRM',
  'Combined acquisition system builds',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Let&apos;s talk.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tell us about your business, your goals, and what&apos;s not working. We&apos;ll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Left column — context */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionLabel>Good Fit Projects</SectionLabel>
                <h2 className="text-xl font-semibold text-slate-900 mb-5">
                  What kinds of projects we take on
                </h2>
                <div className="space-y-3">
                  {goodFitProjects.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionLabel>What Happens Next</SectionLabel>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  After you submit
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We&apos;ll review your message and follow up within one business day — either to schedule a consultation or to ask a few clarifying questions about your situation.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-sm text-slate-500">
                  Based in Portland, Maine.
                </p>
              </div>
            </div>

            {/* Right column — form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
