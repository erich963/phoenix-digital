import type { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Contact | Phoenix Digital',
  description:
    'Get in touch with Phoenix Digital to discuss Google Ads management, landing pages, websites, or strategy consulting.',
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

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
      <section className="bg-[#000914] py-24 lg:py-32" style={sectionPad}>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Contact</p>
          <h1
            className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
          >
            Let&apos;s Talk
          </h1>
          <p className="text-[1.05rem] text-[#FBFBFB]/80 leading-relaxed">
            We work with B2B companies looking to scale revenue with Google Ads lead generation, proven funnels, process alignment, scalable systems, and focused execution.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-16 lg:py-24" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left column — context */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Good Fit Projects</p>
              <h2 className="text-xl font-semibold text-[#000914] mb-5">
                What kinds of projects we take on
              </h2>
              <div className="space-y-3">
                {goodFitProjects.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-[#000914] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#121010]/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">What Happens Next</p>
              <h2 className="text-xl font-semibold text-[#000914] mb-4">
                After you submit
              </h2>
              <p className="text-sm text-[#121010]/70 leading-relaxed">
                We&apos;ll review your message and follow up within one business day — either to schedule a consultation or to ask a few clarifying questions about your situation.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm text-[#121010]/50">
                Based in Portland, Maine.
              </p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </section>
    </>
  )
}
