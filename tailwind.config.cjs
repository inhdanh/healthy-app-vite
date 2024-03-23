/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      light: "#FFFFFF",
      "primary/300": "#FFCC21",
      "primary/400": "#FF963C",
      "primary/500": "#EA6C00",
      "secondary/300": "#8FE9D0",
      "dark/500/text": "#414141",
      "gray/400": "#777777",
      border: "#707070",
      chart: "#2E2E2E",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
  ],
};
