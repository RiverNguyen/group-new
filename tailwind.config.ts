import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      lg: '1025px',
      sm: '640px',
      xlg: {
        max: '1024px',
      },
      xsm: {
        max: '639px',
      },
      tablet: {
        min: '640px',
        max: '1024px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter-family)', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter-family)', 'Arial', 'sans-serif'],
        manrope: ['var(--font-manrope-family)', 'Arial', 'sans-serif'],
        'work-sans': ['var(--font-work-sans-family)', 'Arial', 'sans-serif'],
        playfair: ['var(--font-playfair-family)', 'Georgia', 'serif'],
        heading: ['var(--font-playfair-family)', 'Georgia', 'serif'],
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {},
      backgroundImage: {},
      boxShadow: {},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.flex-y-center': {
          '@apply flex items-center': {},
        },
        '.flex-x-center': {
          '@apply flex justify-center': {},
        },
        '.absolute-center': {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2': {},
        },
        '.absolute-x-center': {
          '@apply absolute left-1/2 -translate-x-1/2': {},
        },
        '.absolute-y-center': {
          '@apply absolute top-1/2 -translate-y-1/2': {},
        },
      })
    }),
  ],
}
export default config
