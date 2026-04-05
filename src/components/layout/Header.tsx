'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navLinks = [
  { label: 'Paid Search', href: '/google-ads' },
  { label: 'Websites & Landing Pages', href: '/websites-landing-pages' },
  { label: 'Strategy', href: '/strategy-consultations' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#0a0a0a] font-bold text-xl tracking-tight hover:text-[#2a2a2a] transition-colors"
          >
            Phoenix Digital
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.95rem] font-medium transition-colors hover:text-[#0a0a0a] ${
                  pathname === link.href ? 'text-[#0a0a0a]' : 'text-[#2d2d2d]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#0a0a0a] hover:bg-[#2a2a2a] rounded-none transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-[#0a0a0a] hover:text-[#2a2a2a] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#e5e5e5] bg-white">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium transition-colors hover:text-[#0a0a0a] hover:bg-gray-50 ${
                  pathname === link.href
                    ? 'text-[#0a0a0a] bg-gray-50'
                    : 'text-[#2d2d2d]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#0a0a0a] hover:bg-[#2a2a2a] rounded-none transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
