/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      yellow: "#F4CA16",
      yellowOpacity: "rgba(244, 202, 22, 0.4)",
      red: "red",
      blue: "blue",
    },
    extend: {
      animation: {
        wiggle: "wiggle 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
        wiggleSlow: "wiggle 1.4s cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        wiggle: {
          "0%": { scale: "0" },
          "20%": { scale: "0" },
          "100%": { scale: "1" },
        },
      },
    },
  },
  plugins: [],
};
