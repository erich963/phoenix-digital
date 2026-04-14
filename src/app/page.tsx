import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/sections/ContactForm'
import { services, processSteps, whyItems, testimonials } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Phoenix Digital — B2B Lead Generation Systems',
  description:
    'We build B2B lead generation systems. Paid search management, conversion-focused websites, and practical growth strategy.',
}

const pad = {
  paddingLeft: 'min(6.5rem, 8vw)',
  paddingRight: 'min(6.5rem, 8vw)',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] flex items-center py-32 lg:py-44 bg-slate-900 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background:
              'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          }}
        />

        <div className="relative w-full" style={pad}>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-xs font-medium text-slate-400 tracking-wide uppercase">
                B2B Lead Generation
              </span>
            </div>

            <h1 className="text-display text-white mb-6">
              We Build B2B Lead Generation Systems
            </h1>

            <p className="text-slate-400 text-body-lg mb-10 max-w-xl">
              Paid search management, conversion-focused websites, and practical
              growth strategy — for B2B companies that need qualified pipeline,
              not vanity metrics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white rounded-lg transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────── */}
      <section id="services" className="bg-white py-24 lg:py-32" style={pad}>
        <div className="max-w-xl mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-heading text-slate-900 mb-4">
            Three services. One focus: qualified leads.
          </h2>
          <p className="text-slate-500 text-body-lg">
            Everything we do is built around one goal — generating qualified B2B
            leads and pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group border border-slate-200 rounded-xl p-8 hover:shadow-card-hover hover:border-brand/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                {service.title}
              </h3>
              <p className="text-[0.925rem] text-slate-500 leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-medium text-brand inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Learn more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-100" style={pad}>
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-heading text-slate-900">
            From diagnosis to results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center lg:text-left">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mx-auto lg:mx-0 mb-5 text-sm font-bold">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Phoenix Digital ────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">
              Why Phoenix Digital
            </p>
            <h2 className="text-heading text-slate-900 mb-6">
              A simpler, more focused approach to B2B growth
            </h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                The old agency model is bloated. Large teams, vague retainers,
                junior handoffs, and tools that create complexity instead of
                clarity. Phoenix Digital was built as a direct response to that.
              </p>
              <p>
                With modern tools and AI-enabled workflows, high-quality
                execution that once required large teams can now be delivered by
                a lean, expert-led operation — faster, with less overhead, and
                better economics for clients.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-xl p-5"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-subtle text-brand text-sm font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900 text-[0.925rem] mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-100" style={pad}>
        <div className="max-w-xl mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">
            Client Feedback
          </p>
          <h2 className="text-heading text-slate-900">
            What our clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-slate-200 rounded-xl p-8"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-[0.925rem] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-subtle flex items-center justify-center text-xs font-semibold text-brand">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA + Contact Form ──────────────────────────────── */}
      <section className="bg-slate-900 py-24 lg:py-32 relative overflow-hidden" style={pad}>
        <div
          className="absolute top-0 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background:
              'radial-gradient(circle, #6366f1 0%, transparent 70%)',
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-brand-light font-medium text-sm tracking-wide uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-heading text-white mb-5">
              Ready to build a lead generation system that actually works?
            </h2>
            <p className="text-slate-400 text-body-lg mb-8">
              Whether you need paid search management, a conversion-focused
              website, or strategic guidance — let&apos;s build clarity,
              momentum, and pipeline.
            </p>
            <div className="space-y-4 text-slate-500 text-sm">
              <p>
                We&apos;ll review your message and follow up within one business
                day to schedule a consultation.
              </p>
              <p className="text-slate-600">Portland, Maine</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
