import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#F9FCFE',
          100: '#EAF7FC',
          200: '#DDEAF2',
          500: '#33B9E8',
          700: '#0068B5',
          900: '#063B63',
          950: '#0F2233'
        }
      },
      boxShadow: {
        pearl: '0 30px 80px rgba(6, 59, 99, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
