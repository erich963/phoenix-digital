import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Phoenix Digital — B2B Lead Generation Systems',
  description: 'Phoenix Digital builds B2B lead generation systems powered by Google Ads, supported by conversion-focused landing pages and practical strategy.',
  metadataBase: new URL('https://phoenixcitydigital.com'),
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0a0a0a] min-h-[80vh] flex items-center py-32 lg:py-44" style={sectionPad}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-6">Phoenix Digital</p>
          <h1 className="text-[#f5f5f5] font-semibold leading-[1.1] mb-7" style={{ fontSize: 'clamp(2rem, calc(2rem + ((1vw - 0.2rem) * 3.2)), 4rem)' }}>
            We build B2B lead generation systems.
          </h1>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
            Specializing in Google Ads, conversion-focused landing pages, and fast, practical websites that turn traffic into qualified pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] bg-white hover:bg-[#f5f5f5] rounded-none transition-colors">
              Book a Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white border border-white/30 hover:border-white rounded-none transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CLARITY STRIP */}
      <section className="bg-white border-b border-[#e5e5e5] py-12" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-3">Core Offer</p>
            <h2 className="text-xl font-semibold text-[#0a0a0a] leading-snug">Paid Search Lead Generation</h2>
            <p className="text-sm text-[#6b7280] mt-1">(Google Ads)</p>
          </div>
          <div className="lg:col-span-2">
            <p className="text-[#2d2d2d] leading-relaxed">
              We build and manage Google Ads campaigns designed to generate qualified B2B leads — not just traffic. Clean account architecture, intent-based targeting, conversion tracking that actually works, and landing pages built to convert. This is the core of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#f7f7f7] py-20 lg:py-28" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Services</p>
          <h2 className="text-3xl font-semibold text-[#0a0a0a]">What we do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: 'Primary',
              title: 'Paid Search Lead Generation',
              sub: 'Google Ads',
              body: 'End-to-end Google Ads management built for B2B pipeline — from campaign architecture and keyword strategy to conversion tracking and landing page alignment.',
              href: '/google-ads',
            },
            {
              label: null,
              title: 'Websites & Landing Pages',
              sub: null,
              body: 'Conversion-focused pages built fast. Landing pages for paid campaigns, lead gen sites, and B2B website builds designed to support acquisition — not just look good.',
              href: '/websites-landing-pages',
            },
            {
              label: null,
              title: 'Strategy Consultations',
              sub: 'Advisory only',
              body: 'Senior-level advisory sessions on marketing, tracking, RevOps, CRM, and AI strategy. Scoped, focused, and designed to give you clarity and a next step — not ongoing execution.',
              href: '/strategy-consultations',
            },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group block bg-white border border-[#e5e5e5] p-8 hover:border-[#0a0a0a] transition-colors">
              <div className="flex items-start justify-between mb-5">
                <div className="w-6 h-px bg-[#0a0a0a] mt-3" />
                {s.label && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] border border-[#e5e5e5] px-2 py-1">{s.label}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-1">{s.title}</h3>
              {s.sub && <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-4">{s.sub}</p>}
              <p className="text-sm text-[#6b7280] leading-relaxed mt-3">{s.body}</p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a] group-hover:underline">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY PHOENIX DIGITAL */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#e5e5e5]" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">The model</p>
            <h2 className="text-3xl font-semibold text-[#0a0a0a] mb-6 leading-tight">
              Senior-level work.<br />No bloated agency.
            </h2>
            <p className="text-[#6b7280] leading-relaxed mb-6">
              The traditional agency model layers overhead, junior execution, and vague retainers between you and the results you actually need. Phoenix Digital is built differently.
            </p>
            <p className="text-[#6b7280] leading-relaxed">
              Every engagement is owner-led. Scope is clear. Reporting is tied to pipeline. Modern tools and AI workflows mean faster execution without the overhead — but the judgment, strategy, and accountability still come from a senior practitioner who knows your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e5e5e5]">
            {[
              { heading: 'Owner-led', body: 'No account managers or junior handoffs. You work directly with the person doing the work.' },
              { heading: 'Clearly scoped', body: 'Defined deliverables. No ambiguity about what you are paying for or what you will get.' },
              { heading: 'Paid search first', body: 'Google Ads is the core channel. Deep specialization, not a checkbox service.' },
              { heading: 'Fast execution', body: 'Lean model means faster builds, quicker pivots, and less overhead for everyone.' },
            ].map((item) => (
              <div key={item.heading} className="bg-white p-6">
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2">{item.heading}</h3>
                <p className="text-sm text-[#6b7280] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#f7f7f7] py-20 lg:py-28" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">Client feedback</p>
          <h2 className="text-3xl font-semibold text-[#0a0a0a]">What clients say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              quote: 'After 10 years in commodity financing, I was laid off unexpectedly and needed to reposition quickly. Eric helped me think through my options clearly, with real patience and expertise. He gave me clarity when I needed it most.',
              name: 'Katharine R.',
            },
            {
              quote: "I've worked with Eric on various projects over the last two years and can't recommend him enough. He brings exceptional attention to detail, creative thinking, and an honest approach that's rare in this industry.",
              name: 'Jared W.',
            },
          ].map((t) => (
            <div key={t.name} className="bg-white border border-[#e5e5e5] p-8">
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-[#0a0a0a] text-base">★</span>
                ))}
              </div>
              <p className="text-[#2d2d2d] leading-relaxed mb-6 text-[1.05rem]">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-[#0a0a0a]">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-white py-20 lg:py-28 border-b border-[#e5e5e5]" style={sectionPad}>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6b7280] mb-4">About</p>
          <h2 className="text-3xl font-semibold text-[#0a0a0a] mb-6 leading-tight">Portland, Maine.<br/>Owner-led. No fluff.</h2>
          <p className="text-[#6b7280] leading-relaxed mb-8">
            Phoenix Digital is a lean, expert-led B2B lead generation agency. Founded after years of watching businesses pay bloated retainers for junior execution and vague deliverables. Built around a simpler premise: focused work, clear scope, measurable results.
          </p>
          <Link href="/about" className="text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] hover:underline">
            Learn more →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0a0a0a] py-20 lg:py-28" style={sectionPad}>
        <div className="max-w-2xl">
          <h2 className="text-[#f5f5f5] font-semibold mb-5" style={{ fontSize: 'clamp(1.5rem, calc(1.5rem + ((1vw - 0.2rem) * 1.8)), 2.4rem)' }}>
            Ready to build a better lead generation system?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Tell us about your business and what you need. We&apos;ll follow up within one business day.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0a0a0a] bg-white hover:bg-[#f5f5f5] rounded-none transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-[#f7f7f7] py-20 lg:py-28 border-t border-[#e5e5e5]" style={sectionPad}>
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-semibold text-[#0a0a0a] mb-3">Let&apos;s Talk</h2>
          <p className="text-[#6b7280] leading-relaxed">
            B2B companies looking to generate better leads through Google Ads, paid search, websites, or focused strategy.
          </p>
        </div>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
