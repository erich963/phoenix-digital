import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Phoenix Digital — B2B Lead Generation Systems',
  description:
    'Senior-level Google Ads management and strategic guidance designed to support sustainable B2B growth.',
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section
        className="min-h-[80vh] flex items-center py-32 lg:py-48"
        style={{ background: 'linear-gradient(rgba(0,9,20,0.92), rgba(0,9,20,0.92))' }}
      >
        <div className="w-full" style={sectionPad}>
          <div className="max-w-2xl">
            <h1
              className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
              style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
            >
              Transform Your Google Ads Account Into A Lead Gen Engine
            </h1>
            <p className="text-[#FBFBFB]/80 text-[1.05rem] leading-relaxed mb-6">
              Senior-level Google Ads management for B2B businesses built on:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                'Clean, scalable account architecture',
                'Deep research and lead gen expertise',
                'Proven ad copy and superior targeting',
                'Owner-level accountability',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#FBFBFB]/90 text-[1.05rem]">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#FBFBFB]/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-[#020f2a] bg-white border border-white hover:bg-[#0a2d6e] hover:text-white hover:border-[#0a2d6e] rounded-none transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Services */}
      <section className="bg-white py-20 lg:py-28" style={sectionPad}>
        <h2
          className="text-[#020f2a] font-semibold mb-12"
          style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Ads Management Card */}
          <div
            className="bg-white p-8 rounded-sm"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
          >
            <h3
              className="text-[#020f2a] font-semibold mb-6"
              style={{ fontSize: 'clamp(1.39rem, calc(1.39rem + ((1vw - 0.2rem) * 1.5)), 1.85rem)' }}
            >
              Google Ads Management
            </h3>

            {/* Pricing table */}
            <div className="mb-6 border border-gray-200 divide-y divide-gray-200">
              {[
                { price: '$500/month', spend: '$500–$2,000/month in ad spend' },
                { price: '$1,000/month', spend: '$2,001–$5,000/month in ad spend' },
                { price: '$1,500/month', spend: '$5,001–$10,000/month in ad spend' },
              ].map((row) => (
                <div key={row.price} className="flex flex-col sm:flex-row sm:items-center gap-1 px-4 py-3">
                  <span className="font-semibold text-[#020f2a] text-sm sm:w-36 flex-shrink-0">{row.price}</span>
                  <span className="text-sm text-[#121010]/70">{row.spend}</span>
                </div>
              ))}
            </div>

            <p className="font-semibold text-[#020f2a] text-sm mb-3">What&apos;s Included:</p>
            <ul className="space-y-2 mb-6">
              {[
                'Google Ads account & campaign setup',
                'Ongoing account and campaign management',
                'Monthly and quarterly performance reporting',
                'One 60-minute quarterly strategy & progress review',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#121010]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#020f2a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#121010]/60 italic border-t border-gray-100 pt-4">
              Meetings or work outside the scope above are billed as Strategy Consultations at $150/Hour
            </p>
          </div>

          {/* Strategy Consultations Card */}
          <div
            className="bg-white p-8 rounded-sm"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
          >
            <h3
              className="text-[#020f2a] font-semibold mb-4"
              style={{ fontSize: 'clamp(1.39rem, calc(1.39rem + ((1vw - 0.2rem) * 1.5)), 1.85rem)' }}
            >
              Strategy Consultations
              <span className="block text-base font-normal text-[#121010]/60 mt-1">Advisory Only &middot; $150/Hour</span>
            </h3>
            <p className="text-sm text-[#121010]/70 leading-relaxed mb-6">
              Please note that Phoenix Digital is not a full-service agency. Strategy consultations are offered as standalone, hourly sessions focused on guidance, not execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Marketing', desc: 'Get help prioritizing channels, campaigns, and messaging' },
                { title: 'Data, Tracking & Analytics', desc: 'Audit and troubleshoot GA4, GTM, and conversion tracking' },
                { title: 'RevOps & Go-To-Market', desc: 'Clarify ICPs, funnel stages, lifecycle definitions' },
                { title: 'Financial', desc: 'Consult on reporting structure, budget allocation' },
                { title: 'CRM & Integrations', desc: 'Improve CRM structure, data quality, and adoption' },
                { title: 'Applied AI Strategy', desc: 'Identify realistic opportunities to use AI across research' },
              ].map((cat) => (
                <div key={cat.title} className="bg-gray-50 p-4 rounded-sm">
                  <p className="font-semibold text-[#020f2a] text-sm mb-1">{cat.title}</p>
                  <p className="text-xs text-[#121010]/60 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About */}
      <section className="bg-white py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">About Us</p>
            <h2
              className="text-[#020f2a] font-semibold mb-6"
              style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
            >
              A Simpler, More Focused Approach to Lead Gen
            </h2>
            <div className="space-y-4 text-[#121010] leading-relaxed">
              <p>
                After years of working with disjointed teams, endless tools, and agencies more focused on retainers than results, Phoenix Digital was built on a different premise: that B2B lead generation should be focused, measurable, and free from unnecessary complexity.
              </p>
              <p>
                We work with B2B companies that need qualified leads — not just traffic. Our approach centers on Google Ads as the primary acquisition channel, supported by smart landing page strategy, clear tracking, and practical guidance.
              </p>
              <p>
                No bloated retainers. No junior handoffs. No agency theater. Just senior-level work built around your pipeline.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-[#FBFBFB] bg-[#020f2a] border border-[#020f2a] hover:bg-[#0a2d6e] hover:border-[#0a2d6e] rounded-none transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          {/* Image placeholder right */}
          <div
            className="hidden lg:flex items-center justify-center h-80 rounded-sm"
            style={{ background: '#020f2a' }}
          >
            <span className="text-[#FBFBFB]/20 text-6xl font-bold">PD</span>
          </div>
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="bg-[#f9f9f9] py-20 lg:py-28" style={sectionPad}>
        <h2
          className="text-[#020f2a] font-semibold mb-12"
          style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
        >
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="bg-white p-8 rounded-sm"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
          >
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#ff910a] text-lg">&#9733;</span>
              ))}
            </div>
            <p className="text-[#121010] text-base leading-relaxed mb-6">
              &ldquo;After 10 years in commodity financing, I was laid off unexpectedly and needed to reposition myself quickly. Eric helped me think through my options clearly, with real patience and expertise. He gave me clarity when I needed it most.&rdquo;
            </p>
            <p className="text-sm font-semibold text-[#020f2a]">— Katharine R.</p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white p-8 rounded-sm"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
          >
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#ff910a] text-lg">&#9733;</span>
              ))}
            </div>
            <p className="text-[#121010] text-base leading-relaxed mb-6">
              &ldquo;I&apos;ve worked with Eric on various projects over the last two years and can&apos;t recommend him enough. He brings exceptional attention to detail, creative thinking, and an honest approach that&apos;s rare in this industry.&rdquo;
            </p>
            <p className="text-sm font-semibold text-[#020f2a]">— Jared W.</p>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Banner */}
      <section className="bg-[#020f2a] py-20 lg:py-28" style={sectionPad}>
        <div className="max-w-2xl">
          <h2
            className="text-[#FBFBFB] font-semibold mb-5"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Ready to stop guessing and start scaling?
          </h2>
          <p className="text-[#FBFBFB]/70 text-[1.05rem] leading-relaxed mb-8">
            Build clarity, momentum, and a plan that actually works. Whether you need Google Ads management, strategic guidance, or a full lead gen system, we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-[#FBFBFB] border border-[#FBFBFB] hover:bg-white hover:text-[#020f2a] rounded-none transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Section 6: Team */}
      <section className="bg-white py-20 lg:py-28" style={sectionPad}>
        <h2
          className="text-[#020f2a] font-semibold mb-12"
          style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
        >
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Avatar */}
          <div
            className="w-48 h-48 rounded-full flex items-center justify-center flex-shrink-0 text-white text-4xl font-bold"
            style={{ background: '#020f2a' }}
          >
            E
          </div>

          {/* Info */}
          <div>
            <h3
              className="text-[#020f2a] font-semibold mb-4"
              style={{ fontSize: 'clamp(1.39rem, calc(1.39rem + ((1vw - 0.2rem) * 1.5)), 1.85rem)' }}
            >
              Eric H.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
              {[
                'Google Ads / Lead Gen',
                'CRO & Landing Page Optimization',
                'Go-To-Market (GTM) & RevOps',
                'Data, Tracking & Analytics',
                'Marketing Strategy',
                'CRM / Process Alignment',
                'Applied AI Strategy',
                'Automation',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-[#121010]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#020f2a] flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Contact Form */}
      <section className="bg-white py-20 lg:py-28 border-t border-gray-100" style={sectionPad}>
        <div className="max-w-2xl mb-10">
          <h2
            className="text-[#020f2a] font-semibold mb-4"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Let&apos;s Talk
          </h2>
          <p className="text-[#121010] text-[1.05rem] leading-relaxed">
            We work with B2B companies looking to scale revenue with Google Ads lead generation, proven funnels, process alignment, scalable systems, and focused execution.
          </p>
        </div>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
