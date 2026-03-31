import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About | Phoenix Digital',
  description:
    'Phoenix Digital is a lean, expert-led B2B lead generation agency based in Portland, Maine.',
}

const principles = [
  {
    title: 'Clarity beats complexity',
    description:
      'Focused scope, clean structure, and clear reporting produce better outcomes than broad retainers and vague deliverables.',
  },
  {
    title: 'Senior-level work should not require a giant agency',
    description:
      'Modern tools and AI-enabled workflows mean high-quality execution can be delivered by a lean, expert-led operation — at a fraction of the overhead.',
  },
  {
    title: 'You should own your systems',
    description:
      'Accounts, data, and infrastructure belong to the client. No lock-in, no black boxes, no dependency on any single agency relationship.',
  },
  {
    title: 'Accountability matters',
    description:
      'Every engagement is tied to real business outcomes. If something is not working, it gets fixed — not explained away with a dashboard.',
  },
]

const expertise = [
  'Google Ads & paid search',
  'Conversion rate optimization',
  'Landing page design & development',
  'Conversion tracking & GTM',
  'RevOps & go-to-market strategy',
  'CRM alignment & automation',
  'Data, analytics & reporting',
  'Applied AI strategy & workflow automation',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-20 pb-24 lg:pt-28 lg:pb-32 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>About Phoenix Digital</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight tracking-tight mb-6">
              Built for clarity. Focused on outcomes.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Phoenix Digital exists because the old agency model stopped working for most B2B businesses. Too many agencies are built around complexity — large teams, opaque retainers, and broad deliverables that are hard to measure. We were built as a direct response to that.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                A direct response to a broken model
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  The traditional agency model was built for a different era — one that required large teams to produce work that can now be executed by a focused, senior-led operation with the right tools and process.
                </p>
                <p>
                  The result for most clients was unnecessary overhead, junior execution, fragmented accountability, and retainers that grew without proportional returns.
                </p>
                <p>
                  Phoenix Digital was founded on a simpler idea: high-quality B2B lead generation work should be focused, fast, and accountable. It should not require a bloated agency to deliver.
                </p>
              </div>
            </div>
            <div>
              <SectionLabel>The Model</SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Lean, expert-led, AI-enabled
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Modern tools and AI workflows now allow high-quality execution — strategy, campaign management, web builds, tracking, and analytics — to be delivered by a lean, expert-led operation at a fraction of traditional agency overhead.
                </p>
                <p>
                  That is not a shortcut. It is a more efficient model. Clients benefit from faster turnaround, tighter scope, less overhead, and direct access to the practitioner doing the work.
                </p>
                <p>
                  AI amplifies expertise — it does not replace it. The judgment, strategy, and accountability still come from a senior practitioner who understands your business and your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
              The principles behind every engagement
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-7"
              >
                <div className="w-8 h-1 bg-copper rounded-full mb-5" />
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>The Founder</SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Eric H. — Portland, Maine
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Phoenix Digital is led by a hands-on practitioner with deep experience across the full B2B lead generation stack — from paid search and landing page optimization to conversion tracking, CRM alignment, RevOps, and practical AI strategy.
                </p>
                <p>
                  Every engagement is owner-led. There are no junior team members handling your account, no layers of account management between you and the work, and no ambiguity about who is responsible for outcomes.
                </p>
                <p>
                  The goal in every project is the same: a cleaner system, better-qualified leads, and a measurable improvement in how your business generates pipeline.
                </p>
              </div>
            </div>
            <div>
              <SectionLabel>Areas of Expertise</SectionLabel>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Deep across the B2B growth stack
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-lg px-4 py-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-5 max-w-2xl mx-auto">
            Ready to work with a team that values clarity over complexity?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals, your current setup, and where focused, senior-level work can make the biggest difference.
          </p>
          <Button href="/contact" size="lg">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
