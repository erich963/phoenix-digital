'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navLinks } from '@/lib/data'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Phoenix Digital"
              width={180}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.875rem] font-medium transition-colors hover:text-slate-900 ${
                  pathname === link.href ? 'text-slate-900' : 'text-slate-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-slate-500 hover:text-slate-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors hover:text-slate-900 hover:bg-gray-50 ${
                  pathname === link.href ? 'text-slate-900 bg-gray-50' : 'text-slate-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-brand hover:bg-brand-dark rounded-lg transition-colors"
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
