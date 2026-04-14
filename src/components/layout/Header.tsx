'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { label: 'Google Ads', href: '/google-ads' },
  { label: 'Websites & Landing Pages', href: '/websites-landing-pages' },
  { label: 'Strategy', href: '/strategy-consultations' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
      <div style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}>
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-neutral-900 font-bold text-lg tracking-tight hover:text-accent transition-colors"
          >
            Phoenix Digital
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.875rem] font-medium transition-colors hover:text-accent ${
                  pathname === link.href ? 'text-accent' : 'text-neutral-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-neutral-900 hover:bg-accent rounded-lg transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors hover:text-accent hover:bg-neutral-50 ${
                  pathname === link.href ? 'text-accent bg-neutral-50' : 'text-neutral-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-accent rounded-lg transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
