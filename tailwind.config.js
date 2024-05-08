import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      "xs": ["0.8125rem", { lineHeight: "1.5rem" }],
      "sm": ["0.875rem", { lineHeight: "1.5rem" }],
      "base": ["1rem", { lineHeight: "1.75rem" }],
      "lg": ["1.125rem", { lineHeight: "1.75rem" }],
      "xl": ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      colors: {
        primary: '#DFB187',
        background: '#111521',
        grayBackground: '#161B2B',
        light: '#D4D4D4',
        dark: "#000",
        description: "#9c9ca7"
      },
      fontFamily: {
        'primary': ['Gilda Display', 'serif'],
        'secondary': ['Barlow', 'sans-serif'],
      },
    },

  },
  plugins: [nextui()],
}
