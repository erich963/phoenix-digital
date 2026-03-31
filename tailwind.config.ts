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
        sans: ['Barlow', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#000914',
          hover: '#013BA5',
          dark: '#04153a',
        },
        orange: '#ff910a',
        offwhite: '#FBFBFB',
      },
      fontSize: {
        'display': ['clamp(1.8rem, calc(1.8rem + ((1vw - 0.2rem) * 2.829)), 3.25rem)', { lineHeight: '1.15', fontWeight: '600' }],
        'heading': ['clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 2.072)), 2.625rem)', { lineHeight: '1.2', fontWeight: '600' }],
        'subheading': ['clamp(1.39rem, calc(1.39rem + ((1vw - 0.2rem) * 1.5)), 1.85rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.05rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': 'min(6.5rem, 8vw)',
        'section-y': '5rem',
      },
      boxShadow: {
        'card': '6px 6px 9px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}
export default config
