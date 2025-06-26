import plugin from 'tailwindcss/plugin'

import type { Config } from 'tailwindcss'

export default {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.spacer': {
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1440px',
        },
        '.horizontal-center': {
          display: 'flex',
          alignItems: 'center',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
  darkMode: 'class',
} satisfies Config
