import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        lora: ["var(--font-lora)"],
        raleway: ["var(--font-raleway)"],
        kazimir: ["'Kazimir-Bold'", "sans-serif"],
      },
      fontSize: {
        // Custom text sizes found in components
        'xs': ['12px', { lineHeight: '1.21em' }],
        'sm': ['14px', { lineHeight: '1.375em' }],
        'base': ['16px', { lineHeight: '1.4em' }],
        'lg': ['18px', { lineHeight: '1.4em' }],
        'xl': ['20px', { lineHeight: '1.4em' }],
        '2xl': ['24px', { lineHeight: '1.28em' }],
        '3xl': ['32px', { lineHeight: '1.28em' }],
        '4xl': ['40px', { lineHeight: '1.28em' }],
        '5xl': ['48px', { lineHeight: '1.28em' }],
        '6xl': ['64px', { lineHeight: '1.09em' }],
        // Custom sizes with specific pixel values
        '16': ['16px', { lineHeight: '1.21em' }],
        '18': ['18px', { lineHeight: '1.28em' }],
        '20': ['20px', { lineHeight: '1.4em' }],
        '22': ['22px', { lineHeight: '1.28em' }],
        '24': ['24px', { lineHeight: '1.28em' }],
        '32': ['32px', { lineHeight: '1.4em' }],
        '40': ['40px', { lineHeight: '1.28em' }],
        '48': ['48px', { lineHeight: '1.28em' }],
        '58': ['58px', { lineHeight: '1.28em' }], // New H2 size (64px * 0.9 = 57.6px, rounded to 58px)
        '52': ['52px', { lineHeight: '1.28em' }], // New H3 size (58px * 0.9 = 52.2px, rounded to 52px)
        '64': ['64px', { lineHeight: '1.09em' }],
        '102': ['101.947px', { lineHeight: '1.366em' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      lineHeight: {
        '1.09': '1.09em',
        '1.17': '1.17em',
        '1.21': '1.21em',
        '1.28': '1.28em',
        '1.366': '1.366em',
        '1.375': '1.375em',
        '1.388': '1.388em',
        '1.4': '1.4em',
        '1.42': '1.42em',
        '1.5': '1.5em',
      },
      letterSpacing: {
        '0.01': '0.01em',
      },
    },
  },
  plugins: [],
};

export default config;
