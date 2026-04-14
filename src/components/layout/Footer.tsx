import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div
        className="py-16"
        style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Phoenix Digital" width={160} height={32} className="h-7 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              B2B lead generation systems built on paid search, conversion-focused websites, and practical strategy.
            </p>
            <p className="mt-3 text-sm text-slate-300">Portland, Maine</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <Link href="/paid-search" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">Paid Search</Link>
            <Link href="/websites" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">Websites</Link>
            <Link href="/strategic-sessions" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">Strategic Sessions</Link>
            <Link href="/about" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">Contact</Link>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-slate-300">&copy; {new Date().getFullYear()} Phoenix Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
