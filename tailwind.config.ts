// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9E7',
          100: '#FCF3CF',
          200: '#F9E79F',
          300: '#F7D76F',
          400: '#F4C63F',
          500: '#D4AF37',
          600: '#C4A137',
          700: '#A38830',
          800: '#826C26',
          900: '#61501D',
        },
      },
    },
  },
  plugins: [],
}
export default config