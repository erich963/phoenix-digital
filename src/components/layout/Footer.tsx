import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white/90">
      <div
        className="py-16"
        style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-white font-bold text-lg tracking-tight hover:text-accent transition-colors"
            >
              Phoenix Digital
            </Link>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              B2B lead generation systems built on Google Ads, conversion-focused websites, and practical strategy.
            </p>
            <p className="mt-3 text-sm text-neutral-600">
              Portland, Maine
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <Link href="/contact" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Phoenix Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
