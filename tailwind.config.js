/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blues
        'royal-blue': {
          DEFAULT: '#1e3a8a',
          dark: '#0f172a',
          light: '#3b82f6',
        },
        'navy': {
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
          light: '#2563eb',
        },
        // Secondary Yellows
        'golden': {
          DEFAULT: '#fbbf24',
          light: '#fcd34d',
          dark: '#f59e0b',
        },
        'mustard': {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-blue-yellow': 'linear-gradient(135deg, #1e3a8a, #3b82f6, #fbbf24)',
        'gradient-gold': 'radial-gradient(circle, #fbbf24, #f59e0b, transparent)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
