/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a9e6f2",
          "secondary": "#0b097c",
          "accent": "#f29deb",
          "neutral": "#201E29",
          "base-100": "#E8DFF1",
          "info": "#3C7AD7",
          "success": "#128151",
          "warning": "#F5C54D",
          "error": "#F11E2C",
        },
      },
    ],
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
}