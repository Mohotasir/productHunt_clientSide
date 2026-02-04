/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ must be here (top-level)

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#3498DB",
        secondary: "#5DADE2",
      },
    },
  },

  plugins: [
    require("daisyui"),
  ],
}
