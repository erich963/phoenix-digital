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
      <section className="bg-[#000914] py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel className="text-white/60">B2B Lead Generation</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-6">
              We build B2B lead generation systems.
            </h1>
            <p className="text-lg sm:text-xl text-[#FBFBFB]/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Specializing in Google Ads, conversion-focused landing pages, and fast, practical websites that help B2B companies turn traffic into qualified pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="outline">
                Book a Consultation
              </Button>
              <Button href="#services" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white hover:text-[#000914]">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 border-y border-gray-200 py-5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircleIcon className="w-4 h-4 text-[#000914] flex-shrink-0" />
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000914] tracking-tight">
              What we do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-[#000914] transition-colors flex flex-col shadow-[6px_6px_9px_rgba(0,0,0,0.2)]"
              >
                <h3 className="text-xl font-semibold text-[#000914] mb-3 group-hover:text-[#04153a] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircleIcon className="w-4 h-4 text-[#000914] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#000914] hover:gap-2 transition-all"
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
      <section className="bg-[#000914] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel className="text-white/60">Why Phoenix Digital</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight max-w-lg">
              A better model for B2B growth
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <div className="w-8 h-1 bg-white/30 mb-5" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#FBFBFB]/70 leading-relaxed">
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
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000914] tracking-tight">
              Our process
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-5xl font-bold text-gray-200 leading-none select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-[#000914] mt-2 mb-2">
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
      <section className="bg-gray-50 border-y border-gray-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Ideal Clients</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#000914] tracking-tight mb-4">
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
                  className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-4"
                >
                  <div className="w-2 h-2 bg-[#000914] rounded-full flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>Client Feedback</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000914] tracking-tight">
              What clients say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-[6px_6px_9px_rgba(0,0,0,0.2)]"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-[#000914]" />
                  ))}
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-[#000914]">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white border-y border-gray-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#000914] tracking-tight mb-6">
              Lean, expert-led, and built for B2B
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Phoenix Digital is a lean, expert-led B2B lead generation agency based in Portland, Maine. Founded by a hands-on practitioner with deep experience in Google Ads, conversion optimization, tracking, CRM, and AI-enabled growth strategy.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#000914] hover:gap-2.5 transition-all"
            >
              Learn more about our approach
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#000914] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel className="text-white/60">Get Started</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5 max-w-2xl mx-auto">
            Ready to build a better lead generation system?
          </h2>
          <p className="text-[#FBFBFB]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals, your current setup, and where paid search can make the biggest difference.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
