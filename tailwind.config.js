/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

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
        appear: "appear 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
        appearSlow: "appear 1.4s cubic-bezier(0.19, 1, 0.22, 1)",
      },
      keyframes: {
        appear: {
          "0%": { scale: "0" },
          "20%": { scale: "0" },
          "100%": { scale: "1" },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
