import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#e6edff',
          200: '#cdd9ff',
          300: '#aabbff',
          400: '#7f93ff',
          500: '#5670ff',
          600: '#3b54db',
          700: '#2e41ab',
          800: '#253686',
          900: '#1f2d6e'
        }
      }
    }
  },
  plugins: []
} satisfies Config
