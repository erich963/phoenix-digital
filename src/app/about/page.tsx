import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Phoenix Digital',
  description:
    'Phoenix Digital is a lean, expert-led B2B lead generation agency based in Portland, Maine.',
}

const pad = { paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }

const principles = [
  { title: 'Clarity beats complexity', description: 'Focused scope, clean structure, and clear reporting produce better outcomes than broad retainers and vague deliverables.' },
  { title: 'Senior-level work doesn\'t require a giant agency', description: 'Modern tools and AI-enabled workflows mean high-quality execution can be delivered by a lean, expert-led operation — at a fraction of the overhead.' },
  { title: 'You should own your systems', description: 'Accounts, data, and infrastructure belong to the client. No lock-in, no black boxes, no dependency on any single agency.' },
  { title: 'Accountability matters', description: 'Every engagement is tied to real business outcomes. If something is not working, it gets fixed — not explained away with a dashboard.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-32 lg:py-40" style={pad}>
        <div className="max-w-3xl">
          <p className="text-brand-light font-medium text-sm tracking-wide uppercase mb-4">About Phoenix Digital</p>
          <h1 className="text-display text-white mb-6">Built for clarity. Focused on outcomes.</h1>
          <p className="text-slate-400 text-body-lg max-w-2xl">
            Phoenix Digital exists because the old agency model stopped working for most B2B businesses. Too many agencies are built around complexity — large teams, opaque retainers, and broad deliverables that are hard to measure. We were built as a direct response to that.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="bg-slate-50 border-b border-slate-100 py-20 lg:py-28" style={pad}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">Our Story</p>
            <h2 className="text-heading text-slate-900 mb-6">A direct response to a broken model</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>The traditional agency model was built for a different era — one that required large teams to produce work that can now be executed by a focused, senior-led operation with the right tools and process.</p>
              <p>The result for most clients was unnecessary overhead, junior execution, fragmented accountability, and retainers that grew without proportional returns.</p>
              <p>Phoenix Digital was founded on a simpler idea: high-quality B2B lead generation work should be focused, fast, and accountable. It should not require a bloated agency to deliver.</p>
            </div>
          </div>
          <div>
            <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">The Model</p>
            <h2 className="text-heading text-slate-900 mb-6">Lean, expert-led, AI-enabled</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>Modern tools and AI workflows now allow high-quality execution — strategy, campaign management, web builds, tracking, and analytics — to be delivered by a lean, expert-led operation at a fraction of traditional agency overhead.</p>
              <p>That is not a shortcut. It is a more efficient model. Clients benefit from faster turnaround, tighter scope, less overhead, and direct access to the practitioner doing the work.</p>
              <p>AI amplifies expertise — it does not replace it. The judgment, strategy, and accountability still come from a senior practitioner who understands your business and your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20 lg:py-28 border-b border-slate-100" style={pad}>
        <div className="mb-14">
          <p className="text-brand font-medium text-sm tracking-wide uppercase mb-3">How We Work</p>
          <h2 className="text-heading text-slate-900">The principles behind every engagement</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="border border-slate-200 rounded-xl p-7">
              <div className="w-8 h-0.5 bg-brand mb-5 rounded-full" />
              <h3 className="text-base font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 lg:py-28" style={pad}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-heading text-slate-900 mb-5">Ready to work with a team that values clarity over complexity?</h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your goals, your current setup, and where focused, senior-level work can make the biggest difference.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
