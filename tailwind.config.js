/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#C80406",
        "secondary-color": "#AF856F",
      },
    },
  },
  plugins: [],
};
