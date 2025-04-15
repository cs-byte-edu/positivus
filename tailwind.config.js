/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 15s linear infinite",
      },
      fontFamily: {
        Volkhov: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
