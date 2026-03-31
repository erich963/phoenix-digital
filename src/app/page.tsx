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
      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <section
        className="min-h-[82vh] flex items-center py-32 lg:py-48"
        style={{ background: 'linear-gradient(135deg, #000914 0%, #001533 60%, #000c22 100%)' }}
      >
        <div className="w-full" style={sectionPad}>
          <div className="max-w-2xl">
            {/* Orange accent bar */}
            <div className="w-12 h-1 bg-[#ff910a] mb-7" />

            <h1
              className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
              style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
            >
              Transform Your Google Ads Account Into A Lead Gen Engine
            </h1>
            <p className="text-[#FBFBFB]/75 text-[1.05rem] leading-relaxed mb-7">
              Senior-level Google Ads management for B2B businesses built on:
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Clean, scalable account architecture',
                'Deep research and lead gen expertise',
                'Proven ad copy and superior targeting',
                'Owner-level accountability',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#FBFBFB] text-[1.05rem]">
                  <span className="w-2 h-2 rounded-full bg-[#ff910a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-[#000914] bg-white border-2 border-white hover:bg-[#ff910a] hover:border-[#ff910a] hover:text-white rounded-none transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 2: Services ─────────────────────────────────────── */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28" style={sectionPad}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-1 bg-[#ff910a]" />
          <h2
            className="text-[#000914] font-semibold"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Ads Management Card */}
          <div
            className="bg-white border-t-4 border-[#ff910a] p-8"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.12)' }}
          >
            <h3
              className="text-[#000914] font-semibold mb-6"
              style={{ fontSize: 'clamp(1.2rem, calc(1.2rem + ((1vw - 0.2rem) * 1.5)), 1.6rem)' }}
            >
              Google Ads Management
            </h3>

            {/* Pricing table */}
            <div className="mb-6 border border-gray-200 divide-y divide-gray-200">
              {[
                { price: '$500/month', spend: '$500–$2,000/month in ad spend' },
                { price: '$1,000/month', spend: '$2,001–$5,000/month in ad spend' },
                { price: '$1,500/month', spend: '$5,001–$10,000/month in ad spend' },
              ].map((row, i) => (
                <div
                  key={row.price}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 px-4 py-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <span className="font-semibold text-[#000914] text-sm sm:w-36 flex-shrink-0">{row.price}</span>
                  <span className="text-sm text-[#121010]/70">{row.spend}</span>
                </div>
              ))}
            </div>

            <p className="font-semibold text-[#000914] text-sm mb-3">What&apos;s Included:</p>
            <ul className="space-y-2.5 mb-6">
              {[
                'Google Ads account & campaign setup',
                'Ongoing account and campaign management',
                'Monthly and quarterly performance reporting',
                'One 60-minute quarterly strategy & progress review',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#121010]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff910a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-[#121010]/55 italic border-t border-gray-100 pt-4">
              Meetings or work outside the scope above are billed as Strategy Consultations at $150/Hour
            </p>
          </div>

          {/* Strategy Consultations Card */}
          <div
            className="bg-white border-t-4 border-[#000914] p-8"
            style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.12)' }}
          >
            <h3
              className="text-[#000914] font-semibold mb-1"
              style={{ fontSize: 'clamp(1.2rem, calc(1.2rem + ((1vw - 0.2rem) * 1.5)), 1.6rem)' }}
            >
              Strategy Consultations
            </h3>
            <p className="text-sm text-[#121010]/55 mb-5">Advisory Only &middot; $150/Hour</p>
            <p className="text-sm text-[#121010]/70 leading-relaxed mb-6">
              Phoenix Digital is not a full-service agency. Strategy consultations are offered as standalone, hourly sessions focused on guidance, not execution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Marketing', desc: 'Channel prioritization, campaigns, and messaging' },
                { title: 'Data, Tracking & Analytics', desc: 'GA4, GTM, and conversion tracking audits' },
                { title: 'RevOps & Go-To-Market', desc: 'ICPs, funnel stages, lifecycle definitions' },
                { title: 'Financial', desc: 'Reporting structure and budget allocation' },
                { title: 'CRM & Integrations', desc: 'CRM structure, data quality, and adoption' },
                { title: 'Applied AI Strategy', desc: 'Realistic AI opportunities across your workflow' },
              ].map((cat) => (
                <div key={cat.title} className="border-l-2 border-[#ff910a] bg-gray-50 px-3 py-3">
                  <p className="font-semibold text-[#000914] text-sm mb-0.5">{cat.title}</p>
                  <p className="text-xs text-[#121010]/60 leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: About ────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-1 bg-[#ff910a]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50">About Us</p>
            </div>
            <h2
              className="text-[#000914] font-semibold mb-6"
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-[#FBFBFB] bg-[#000914] border border-[#000914] hover:bg-[#ff910a] hover:border-[#ff910a] rounded-none transition-colors"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          {/* Value props panel */}
          <div className="bg-[#f8f9fa] border border-gray-200 p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-6">What sets us apart</p>
            <ul className="space-y-5">
              {[
                { heading: 'Senior-level execution', body: 'Every engagement is handled directly by an experienced practitioner — not delegated to a junior team.' },
                { heading: 'No bloated scope', body: 'Clear deliverables, focused retainers. You know exactly what you\'re getting.' },
                { heading: 'Google Ads specialization', body: 'Paid search is our primary channel. Deep expertise, not a checkbox service.' },
                { heading: 'Owner-level accountability', body: 'We treat your budget like our own and report against real pipeline metrics.' },
              ].map((item) => (
                <li key={item.heading} className="flex items-start gap-4">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#ff910a] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#000914] text-sm mb-0.5">{item.heading}</p>
                    <p className="text-sm text-[#121010]/65 leading-relaxed">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section 4: Testimonials ─────────────────────────────────── */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28" style={sectionPad}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-1 bg-[#ff910a]" />
          <h2
            className="text-[#000914] font-semibold"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: 'After 10 years in commodity financing, I was laid off unexpectedly and needed to reposition myself quickly. Eric helped me think through my options clearly, with real patience and expertise. He gave me clarity when I needed it most.',
              name: 'Katharine R.',
            },
            {
              quote: "I've worked with Eric on various projects over the last two years and can't recommend him enough. He brings exceptional attention to detail, creative thinking, and an honest approach that's rare in this industry.",
              name: 'Jared W.',
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 border-t-4 border-[#ff910a]"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.1)' }}
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#ff910a] text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-[#121010] text-base leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm font-semibold text-[#000914]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 5: CTA Banner ───────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: 'linear-gradient(135deg, #000914 0%, #001533 100%)', ...sectionPad }}
      >
        <div className="max-w-2xl">
          <div className="w-10 h-1 bg-[#ff910a] mb-7" />
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
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold uppercase tracking-wider text-white bg-[#ff910a] border-2 border-[#ff910a] hover:bg-transparent hover:text-[#ff910a] rounded-none transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* ── Section 6: Team ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" style={sectionPad}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-1 bg-[#ff910a]" />
          <h2
            className="text-[#000914] font-semibold"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Meet Our Team
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Avatar */}
          <div
            className="w-44 h-44 rounded-full flex items-center justify-center flex-shrink-0 text-white text-4xl font-bold"
            style={{ background: '#ff910a' }}
          >
            E
          </div>

          {/* Info */}
          <div>
            <h3
              className="text-[#000914] font-semibold mb-1"
              style={{ fontSize: 'clamp(1.39rem, calc(1.39rem + ((1vw - 0.2rem) * 1.5)), 1.85rem)' }}
            >
              Eric H.
            </h3>
            <p className="text-sm text-[#121010]/50 mb-6 uppercase tracking-widest">Founder</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5">
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
                <div key={skill} className="flex items-center gap-2.5 text-sm text-[#121010]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff910a] flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 7: Contact Form ─────────────────────────────────── */}
      <section className="bg-[#f8f9fa] py-20 lg:py-28 border-t border-gray-200" style={sectionPad}>
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-1 bg-[#ff910a]" />
          </div>
          <h2
            className="text-[#000914] font-semibold mb-4"
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
