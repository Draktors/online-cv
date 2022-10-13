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
    extend: {},
  },
  plugins: [],
};
