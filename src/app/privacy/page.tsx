import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy | Phoenix Digital',
  description: 'Privacy policy for Phoenix Digital.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl font-semibold text-[#000914] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-12">Last updated: March 2025</p>

        <div className="prose prose-slate prose-sm max-w-none space-y-10">

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Overview</h2>
            <p className="text-slate-600 leading-relaxed">
              Phoenix Digital (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website phoenixcitydigital.com (the &ldquo;Site&rdquo;). This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our Site and the choices you have associated with that information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              We collect information you provide directly to us, such as when you fill out the contact form on our Site. This may include:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Message content</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              We may also collect certain information automatically when you visit our Site, including your IP address, browser type, referring URLs, and pages visited, through standard web analytics tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
              <li>Respond to your inquiries and contact form submissions</li>
              <li>Communicate with you about services, projects, or follow-up questions</li>
              <li>Improve the Site and understand how visitors use it</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-3">
              We do not sell, trade, or rent your personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Site may use cookies and similar tracking technologies to enhance your experience and collect analytics data. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the Site may not function properly without cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We may use third-party services such as Google Analytics to analyze Site usage. These services may collect information sent by your browser as part of a web page request, including cookies and your IP address. Their use of this information is governed by their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain personal information only as long as necessary to fulfill the purposes for which it was collected or as required by applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to reasonable requests in accordance with applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#000914] mb-3">Contact</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us through the{' '}
              <a href="/contact" className="text-[#000914] hover:underline font-medium">
                contact form
              </a>{' '}
              on our Site.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
