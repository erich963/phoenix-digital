import type { Metadata } from 'next'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About | Phoenix Digital',
  description:
    'Phoenix Digital is a lean, expert-led B2B lead generation agency based in Portland, Maine.',
}

const sectionPad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

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
      <section className="bg-[#020f2a] py-32 lg:py-40" style={sectionPad}>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">About Phoenix Digital</p>
          <h1
            className="text-[#FBFBFB] font-semibold leading-[1.15] mb-6"
            style={{ fontSize: 'clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)' }}
          >
            Built for clarity. Focused on outcomes.
          </h1>
          <p className="text-[1.05rem] text-[#FBFBFB]/80 leading-relaxed max-w-2xl">
            Phoenix Digital exists because the old agency model stopped working for most B2B businesses. Too many agencies are built around complexity — large teams, opaque retainers, and broad deliverables that are hard to measure. We were built as a direct response to that.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Our Story</p>
            <h2 className="text-3xl font-semibold text-[#020f2a] mb-6">
              A direct response to a broken model
            </h2>
            <div className="space-y-4 text-[#121010]/70 leading-relaxed">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">The Model</p>
            <h2 className="text-3xl font-semibold text-[#020f2a] mb-6">
              Lean, expert-led, AI-enabled
            </h2>
            <div className="space-y-4 text-[#121010]/70 leading-relaxed">
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
      </section>

      {/* Principles */}
      <section className="bg-white py-20 lg:py-28 border-b border-gray-200" style={sectionPad}>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">How We Work</p>
          <h2 className="text-3xl font-semibold text-[#020f2a]">
            The principles behind every engagement
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-white border border-gray-200 p-7"
              style={{ boxShadow: '6px 6px 9px rgba(0,0,0,0.2)' }}
            >
              <div className="w-8 h-1 bg-[#020f2a] mb-5" />
              <h3 className="text-base font-semibold text-[#020f2a] mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-[#121010]/60 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="bg-gray-50 border-b border-gray-200 py-20 lg:py-28" style={sectionPad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">The Founder</p>
            <h2 className="text-3xl font-semibold text-[#020f2a] mb-6">
              Eric H. — Portland, Maine
            </h2>
            <div className="space-y-4 text-[#121010]/70 leading-relaxed">
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#121010]/50 mb-4">Areas of Expertise</p>
            <h2 className="text-3xl font-semibold text-[#020f2a] mb-6">
              Deep across the B2B growth stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 bg-white border border-gray-200 px-4 py-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#020f2a] flex-shrink-0" />
                  <span className="text-sm text-[#121010]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020f2a] py-20 lg:py-28" style={sectionPad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-[#FBFBFB] font-semibold mb-5"
            style={{ fontSize: 'clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)' }}
          >
            Ready to work with a team that values clarity over complexity?
          </h2>
          <p className="text-[#FBFBFB]/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals, your current setup, and where focused, senior-level work can make the biggest difference.
          </p>
          <Button href="/contact" size="lg" variant="outline">
            Book a Consultation
          </Button>
        </div>
      </section>
    </>
  )
}
