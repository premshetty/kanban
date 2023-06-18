/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#DBDBDB",
        heading: "#0D062D",
        sidebartext: "rgba(120, 116, 134, 1)",
      },
    },
  },
  plugins: [],
};
