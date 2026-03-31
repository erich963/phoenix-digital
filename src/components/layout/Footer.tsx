import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#000914] text-[#FBFBFB]">
      <div
        className="py-16"
        style={{ paddingLeft: 'min(6.5rem, 8vw)', paddingRight: 'min(6.5rem, 8vw)' }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left — brand + tagline + location */}
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-[#FBFBFB] font-bold text-xl tracking-tight hover:text-white/80 transition-colors"
            >
              Phoenix Digital
            </Link>
            <p className="mt-4 text-sm text-[#FBFBFB]/70 leading-relaxed">
              B2B lead generation systems built on Google Ads, fast websites, and practical strategy.
            </p>
            <p className="mt-3 text-sm text-[#FBFBFB]/50">
              Portland, Maine
            </p>
          </div>

          {/* Right — privacy policy link */}
          <div className="flex flex-col gap-2">
            <Link
              href="/privacy"
              className="text-sm text-[#FBFBFB] underline hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-[#FBFBFB]/40">
            &copy; 2025 Phoenix Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
