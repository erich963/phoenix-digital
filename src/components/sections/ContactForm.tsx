'use client'

import { useState } from 'react'

interface FormData { firstName: string; lastName: string; company: string; email: string; message: string }

const initial: FormData = { firstName: '', lastName: '', company: '', email: '', message: '' }

const input = 'w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 transition placeholder:text-slate-300'

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log('Form submission:', form)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setSubmitted(true)
    setForm(initial)
  }

  if (submitted) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-10 text-center">
        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">Message received.</h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ll review your message and follow up within one business day to schedule a consultation.
        </p>
        <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-slate-700 font-medium hover:text-slate-900 transition-colors">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-600 mb-1.5">First Name <span className="text-slate-900">*</span></label>
          <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={onChange} className={input} placeholder="First name" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-600 mb-1.5">Last Name <span className="text-slate-900">*</span></label>
          <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={onChange} className={input} placeholder="Last name" />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-600 mb-1.5">Company Name</label>
        <input id="company" name="company" type="text" value={form.company} onChange={onChange} className={input} placeholder="Your company" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1.5">Email Address <span className="text-slate-900">*</span></label>
        <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={input} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-600 mb-1.5">Message <span className="text-slate-900">*</span></label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} className={`${input} resize-none`} placeholder="Tell us about your business, your goals, and what you're working on..." />
      </div>
      <button type="submit" disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-700 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors">
        {loading ? (
          <><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>
        ) : 'Send Message'}
      </button>
    </form>
  )
}
