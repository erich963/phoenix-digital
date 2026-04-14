import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(2.25rem, calc(2.25rem + ((1vw - 0.2rem) * 3)), 3.75rem)',
          { lineHeight: '1.08', fontWeight: '700', letterSpacing: '-0.025em' },
        ],
        heading: [
          'clamp(1.75rem, calc(1.75rem + ((1vw - 0.2rem) * 1.8)), 2.75rem)',
          { lineHeight: '1.12', fontWeight: '600', letterSpacing: '-0.02em' },
        ],
        subheading: [
          'clamp(1.25rem, calc(1.25rem + ((1vw - 0.2rem) * 1)), 1.65rem)',
          { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' },
        ],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        section: 'min(6.5rem, 8vw)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'card-hover':
          '0 4px 12px rgba(0,0,0,0.06), 0 12px 28px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}
export default config
