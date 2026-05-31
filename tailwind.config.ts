import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0C0A09',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
        },
        popupcolor: {
          DEFAULT: '#155DFC',
        },
      },
    },
  },
} satisfies Config;
