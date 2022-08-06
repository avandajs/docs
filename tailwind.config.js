/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./content/**/*.{md,yml,json,yaml,toml,csv}",
    "./app.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pry: {
          light: "#E2A8D5",
          dark: "#A140BE",
          code_light: "#0f172a"
        }
      },
      fontFamily: {
        sans: ["Inter"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

