import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Phoenix Digital',
  description:
    'Get in touch with Phoenix Digital to discuss paid search management, websites, or strategic sessions.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const goodFitProjects = [
  'Paid search campaign management and optimization',
  'Conversion-focused B2B websites',
  'Site refreshes and messaging updates',
  'Strategic sessions on funnel, tracking, GTM, or CRM',
  'Combined lead gen system builds',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-24 lg:py-28" style={pad}>
        <div className="max-w-2xl">
          <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Contact</p>
          <h1 className="text-display text-slate-900 mb-6">Let&apos;s Talk</h1>
          <p className="text-slate-400 text-body-lg">
            We work with B2B companies looking to scale revenue with paid search, proven funnels, and focused execution.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 lg:py-28" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">Good Fit Projects</p>
              <h2 className="text-xl font-semibold text-slate-900 mb-5">What kinds of projects we take on</h2>
              <div className="space-y-3">
                {goodFitProjects.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-sm text-slate-500 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-3">What Happens Next</p>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">After you submit</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We&apos;ll review your message and follow up within one business day — either to schedule a consultation or to ask a few clarifying questions about your situation.
              </p>
            </div>

            <p className="text-sm text-slate-400">Based in Portland, Maine.</p>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
