import Link from 'next/link'

const footerNav = [
  { label: 'Google Ads Management', href: '/google-ads' },
  { label: 'Websites & Landing Pages', href: '/websites-landing-pages' },
  { label: 'Strategy Consultations', href: '/strategy-consultations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-white font-semibold text-lg tracking-tight hover:text-copper transition-colors"
            >
              Phoenix Digital
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xs">
              B2B lead generation systems built on Google Ads, fast websites, and practical strategy.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Portland, Maine
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Services
            </h3>
            <nav className="flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-copper transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="md:col-span-1">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Get Started
            </h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Ready to build a better lead generation system? Let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-copper hover:bg-copper-600 rounded-lg transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 Phoenix Digital. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-slate-500 hover:text-copper transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
