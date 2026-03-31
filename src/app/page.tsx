import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'
import {
  services,
  processSteps,
  whyItems,
  testimonials,
  trustItems,
  whoItIsFor,
} from '@/lib/data'
import {
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Phoenix Digital — B2B Lead Generation Systems',
  description:
    'Phoenix Digital helps B2B companies build lead generation systems with Google Ads at the center, supported by conversion-focused landing pages, fast websites, and practical strategy.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>B2B Lead Generation</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              We build B2B lead generation systems.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Specializing in Google Ads, conversion-focused landing pages, and fast, practical websites that help B2B companies turn traffic into qualified pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Book a Consultation
              </Button>
              <Button href="#services" variant="outline" size="lg">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-slate-50 border-y border-slate-200 py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="w-4 h-4 text-copper flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              What we do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-copper transition-colors flex flex-col"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-copper transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircleIcon className="w-4 h-4 text-copper flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-copper hover:gap-2 transition-all"
                >
                  Learn more
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phoenix Digital */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>Why Phoenix Digital</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight max-w-lg">
              A better model for B2B growth
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="w-8 h-1 bg-copper rounded-full mb-5" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Our process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-copper-100 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Ideal Clients</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Who this is for
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Phoenix Digital works best with B2B businesses where qualified leads have real commercial value and where speed, precision, and accountability matter.
              </p>
            </div>
            <div className="space-y-3">
              {whoItIsFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-5 py-4"
                >
                  <div className="w-2 h-2 bg-copper rounded-full flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>Client Feedback</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              What clients say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-copper" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
              Lean, expert-led, and built for B2B
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Phoenix Digital is a lean, expert-led B2B lead generation agency based in Portland, Maine. Founded by a hands-on practitioner with deep experience in Google Ads, conversion optimization, tracking, CRM, and AI-enabled growth strategy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-copper hover:gap-2.5 transition-all"
            >
              Learn more about our approach
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel className="text-copper">Get Started</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5 max-w-2xl mx-auto">
            Ready to build a better lead generation system?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals, your current setup, and where paid search can make the biggest difference.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
