import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#000914',
          dark: '#04153a',
          light: '#0a2260',
        },
        brand: {
          DEFAULT: '#000914',
          dark: '#04153a',
          light: '#0a2260',
        },
        offwhite: '#FBFBFB',
        copper: {
          DEFAULT: '#C17A3A',
          50: '#FBF4EC',
          100: '#F5E5D0',
          200: '#E9C99E',
          300: '#DDAC6C',
          400: '#D1903A',
          500: '#C17A3A',
          600: '#A3652F',
          700: '#855024',
          800: '#673C1A',
          900: '#49270F',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
