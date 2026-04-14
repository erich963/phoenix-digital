import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Phoenix Digital — B2B Lead Generation Systems',
  description:
    'We build B2B lead generation systems. Google Ads management, conversion-focused websites, and practical growth strategy.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

/* ── Inline SVG Icons ─────────────────────────────────────────────── */
const icons = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  browser: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <circle cx="7" cy="6" r="0.5" fill="currentColor" />
      <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.15" stroke="currentColor" />
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  rocket: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  trendUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center py-32 lg:py-44 bg-[#0a0a0a] overflow-hidden">
        {/* Geometric accent — grid dots */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />

        {/* Geometric accent — gradient orb */}
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.07]" style={{
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
        }} />

        {/* Diagonal line accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />

        <div className="relative w-full" style={pad}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">B2B Lead Generation</span>
            </div>

            <h1 className="text-display text-white mb-6">
              We Build B2B Lead<br className="hidden sm:block" /> Generation Systems
            </h1>

            <p className="text-neutral-400 text-body-lg mb-10 max-w-xl">
              Google Ads management, conversion-focused landing pages, and practical growth strategy — for B2B companies that need qualified pipeline, not vanity metrics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-neutral-300 border border-neutral-700 hover:border-neutral-500 hover:text-white rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────── */}
      <section className="border-b border-neutral-100 bg-white" style={pad}>
        <div className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {[
            { icon: icons.user, label: 'Senior-Level Execution' },
            { icon: icons.target, label: 'Google Ads Specialization' },
            { icon: icons.zap, label: 'Fast, Focused Delivery' },
            { icon: icons.shield, label: 'Owner-Led Accountability' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-neutral-400">{item.icon}</span>
              <span className="text-sm font-medium text-neutral-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section id="services" className="bg-white py-24 lg:py-32" style={pad}>
        <div className="max-w-xl mb-14">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">What We Do</p>
          <h2 className="text-heading text-neutral-900 mb-4">
            Three services. One focus.
          </h2>
          <p className="text-neutral-500 text-body-lg">
            Everything we do is built around one goal: generating qualified B2B leads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: icons.target,
              title: 'Google Ads Management',
              desc: 'Disciplined paid search management built around lead quality, economics, and pipeline value. Senior-level campaign work, not set-and-forget.',
              href: '/google-ads',
            },
            {
              icon: icons.browser,
              title: 'Websites & Landing Pages',
              desc: 'Fast, modern, conversion-focused sites and landing pages built to support paid acquisition and turn clicks into conversations.',
              href: '/websites-landing-pages',
            },
            {
              icon: icons.compass,
              title: 'Strategy Consultations',
              desc: 'Senior-level advisory for marketing, tracking, GTM, CRM, and AI strategy. Focused guidance, not open-ended retainers.',
              href: '/strategy-consultations',
            },
          ].map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group border border-neutral-150 rounded-xl p-8 hover:shadow-card-hover hover:border-neutral-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-[0.925rem] text-neutral-500 leading-relaxed mb-5">
                {service.desc}
              </p>
              <span className="text-sm font-medium text-accent inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Phoenix Digital ────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24 lg:py-32" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Why Phoenix Digital</p>
            <h2 className="text-heading text-neutral-900 mb-6">
              A simpler, more focused approach to B2B growth
            </h2>
            <div className="space-y-4 text-neutral-500 leading-relaxed">
              <p>
                The old agency model is bloated. Large teams, vague retainers, junior handoffs, and tools that create complexity instead of clarity. Phoenix Digital was built as a direct response to that.
              </p>
              <p>
                With modern tools and AI-enabled workflows, high-quality execution that once required large teams can now be delivered by a lean, expert-led operation — faster, with less overhead, and better economics for clients.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
              >
                More about our approach
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: icons.user, heading: 'Senior-level execution', body: 'Every engagement is handled directly by an experienced practitioner. No delegation to junior teams.' },
              { icon: icons.eye, heading: 'No bloated scope', body: 'Clear deliverables, focused retainers. You know exactly what you\'re paying for.' },
              { icon: icons.target, heading: 'Google Ads specialization', body: 'Paid search is our primary channel. Deep expertise and disciplined optimization.' },
              { icon: icons.shield, heading: 'Owner-led accountability', body: 'We treat your budget like our own and report against real pipeline metrics.' },
            ].map((item) => (
              <div key={item.heading} className="flex items-start gap-4 bg-white border border-neutral-150 rounded-xl p-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center text-accent mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-[0.925rem] mb-1">{item.heading}</p>
                  <p className="text-sm text-neutral-500 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32" style={pad}>
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">How We Work</p>
          <h2 className="text-heading text-neutral-900">From diagnosis to results</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {[
            { icon: icons.search, step: '01', title: 'Diagnose', desc: 'We audit your current setup, identify gaps, and build a clear picture of what needs to change.' },
            { icon: icons.layers, step: '02', title: 'Build', desc: 'We design the system — campaigns, landing pages, tracking — tailored to your market and goals.' },
            { icon: icons.rocket, step: '03', title: 'Launch', desc: 'We go live with focused strategy, clean execution, and proper measurement from day one.' },
            { icon: icons.trendUp, step: '04', title: 'Optimize', desc: 'We refine continuously based on real data — improving lead quality and scaling what works.' },
          ].map((item) => (
            <div key={item.step} className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center mx-auto lg:mx-0 mb-5">
                {item.icon}
              </div>
              <p className="text-xs font-semibold text-neutral-300 tracking-widest uppercase mb-2">{item.step}</p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who It's For ──────────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24 lg:py-32 border-y border-neutral-100" style={pad}>
        <div className="max-w-xl mb-12">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Who We Work With</p>
          <h2 className="text-heading text-neutral-900">Built for B2B companies where leads matter</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Professional services firms',
            'Regional B2B service businesses',
            'Niche consultancies',
            'Industrial & specialized services',
            'Growth-stage B2B companies',
            'Businesses with meaningful lead value',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 bg-white border border-neutral-150 rounded-lg px-5 py-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              <span className="text-[0.925rem] text-neutral-600">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32" style={pad}>
        <div className="max-w-xl mb-14">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Client Feedback</p>
          <h2 className="text-heading text-neutral-900">What our clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              quote: 'After 10 years in commodity financing, I was laid off unexpectedly and needed to reposition myself quickly. Eric helped me think through my options clearly, with real patience and expertise. He gave me clarity when I needed it most.',
              name: 'Katharine R.',
              role: 'Financial Services',
              initials: 'KR',
            },
            {
              quote: "I've worked with Eric on various projects over the last two years and can't recommend him enough. He brings exceptional attention to detail, creative thinking, and an honest approach that's rare in this industry.",
              name: 'Jared W.',
              role: 'Business Owner',
              initials: 'JW',
            },
          ].map((t) => (
            <div key={t.name} className="border border-neutral-150 rounded-xl p-8">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-600 text-[0.925rem] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {/* Photo placeholder — avatar */}
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-semibold text-neutral-500">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-xs text-neutral-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About the Founder ─────────────────────────────────────── */}
      <section className="bg-neutral-50 py-24 lg:py-32 border-t border-neutral-100" style={pad}>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-2xl bg-neutral-200 flex items-center justify-center overflow-hidden">
              {/* Replace with actual photo: <img src="/eric.jpg" alt="Eric H." className="w-full h-full object-cover" /> */}
              <span className="text-3xl font-bold text-neutral-400">E</span>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium text-sm tracking-wide uppercase mb-2">Founder</p>
            <h3 className="text-subheading text-neutral-900 mb-4">Eric H.</h3>
            <p className="text-neutral-500 leading-relaxed mb-6 max-w-lg">
              Hands-on operator with deep experience across Google Ads, lead generation, CRO, tracking, GTM strategy, CRM systems, and practical AI/automation. Every engagement gets direct, senior-level attention.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {[
                'Google Ads & Lead Gen',
                'CRO & Landing Pages',
                'Go-To-Market & RevOps',
                'Data, Tracking & Analytics',
                'Marketing Strategy',
                'CRM & Process Alignment',
                'Applied AI Strategy',
                'Automation',
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 text-sm text-neutral-500">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden" style={pad}>
        {/* Geometric accent */}
        <div className="absolute top-0 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.05]" style={{
          background: 'radial-gradient(circle, #2563eb 0%, transparent 70%)',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />

        <div className="relative max-w-2xl">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">Get Started</p>
          <h2 className="text-heading text-white mb-5">
            Ready to build a lead generation system that actually works?
          </h2>
          <p className="text-neutral-500 text-body-lg mb-8 max-w-xl">
            Whether you need Google Ads management, a conversion-focused website, or strategic guidance — let&apos;s build clarity, momentum, and pipeline.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

      {/* ── Contact Form ──────────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32" style={pad}>
        <div className="max-w-2xl mb-10">
          <p className="text-accent font-medium text-sm tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-heading text-neutral-900 mb-4">Let&apos;s talk</h2>
          <p className="text-neutral-500 text-body-lg">
            Working with B2B companies looking to scale revenue through Google Ads, proven funnels, and focused execution.
          </p>
        </div>
        <div className="max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
