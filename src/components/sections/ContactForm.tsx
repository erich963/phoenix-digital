'use client'

import { useState } from 'react'

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  message: string
}

const initialState: FormData = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Replace with actual backend integration (e.g., Resend, SendGrid, or Next.js API route)
    // For now, we simulate a submission with a short delay
    console.log('Form submission:', formData)

    await new Promise((resolve) => setTimeout(resolve, 800))

    setLoading(false)
    setSubmitted(true)
    setFormData(initialState)
  }

  if (submitted) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-[#000914] rounded-none flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          Message received.
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ll review your message and follow up within one business day to schedule a consultation or ask a few clarifying questions.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-[#000914] font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            First Name <span className="text-[#000914]">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#000914] focus:border-transparent transition placeholder:text-slate-400"
            placeholder="First name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Last Name <span className="text-[#000914]">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#000914] focus:border-transparent transition placeholder:text-slate-400"
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#000914] focus:border-transparent transition placeholder:text-slate-400"
          placeholder="Your company"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Email Address <span className="text-[#000914]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#000914] focus:border-transparent transition placeholder:text-slate-400"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Message <span className="text-[#000914]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-200 rounded-none focus:outline-none focus:ring-2 focus:ring-[#000914] focus:border-transparent transition placeholder:text-slate-400 resize-none"
          placeholder="Tell us about your business, your goals, and what you're working on..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white bg-[#000914] hover:bg-[#04153a] disabled:opacity-60 disabled:cursor-not-allowed rounded-none transition-colors"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
