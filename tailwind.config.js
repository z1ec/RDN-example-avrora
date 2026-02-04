/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A45C",
          dark: "#A8843C",
          light: "#E6D3A3",
        },
        black: {
          DEFAULT: "#0B0B0B",
          soft: "#121212",
          light: "#1A1A1A",
        },
        white: {
          DEFAULT: "#F5F5F5",
          muted: "#D6D6D6",
          soft: "#B8B8B8",
        },
        orange: {
          DEFAULT: "#D28B36",
          soft: "#B8742F",
        },
      },
      fontFamily: {
        heading: ["Kosolapa Script", "cursive"],
        body: ["Galliard Antiqua", "serif"],
      },
    },
  },
  plugins: [],
}
