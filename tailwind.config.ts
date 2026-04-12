import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F6F2',
        foreground: '#1A1A18',
        muted: '#6A6560',
        border: '#E2DDD6',
        surface: '#FFFFFF',
        primary: {
          50:  '#EDF4EF',
          100: '#D2E7D8',
          200: '#A8CFBA',
          300: '#72AD91',
          400: '#45896C',
          DEFAULT: '#2C5840',
          600: '#224732',
          700: '#193626',
          800: '#10241A',
          900: '#08120D',
        },
        clay: {
          light: '#D4B89A',
          DEFAULT: '#A0785A',
          dark: '#6B4E38',
        },
        stone: {
          50:  '#F8F6F2',
          100: '#F0EDE7',
          200: '#E2DDD6',
          300: '#D0C8BC',
          400: '#B0A898',
          500: '#8A8278',
          600: '#6A6560',
          700: '#504D48',
          800: '#363330',
          900: '#1A1A18',
        },
      },
      fontFamily: {
        sans:  ['var(--font-noto-sans-jp)', 'Noto Sans JP', 'Hiragino Sans', 'sans-serif'],
        serif: ['var(--font-noto-serif-jp)', 'Noto Serif JP', 'Hiragino Mincho ProN', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.8rem, 7vw, 5rem)', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'h1':      ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'h2':      ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'h3':      ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1160px',
        'prose-jp':  '72ch',
      },
      lineHeight: {
        'jp':       '1.9',
        'jp-tight': '1.5',
      },
      letterSpacing: {
        'jp':       '0.05em',
        'label':    '0.12em',
        'wide-jp':  '0.08em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
