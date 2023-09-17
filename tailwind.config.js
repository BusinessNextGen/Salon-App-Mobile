/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#C80406",
        "secondary-color": "#AF856F",
        brandColor1: "#179644",
        brandColor2: "#116A30",
        brandColor3: "#24432E",
        grey1: "#1B1E23",
        grey2: "#282C35",
        grey3: "#26303F",
        grey4: "#3E4C5B",
        grey5: "#677C99",
        grey6: "#A0B0C1",
        grey7: "#DFE4EA",
        white: "#FFFFFF",
      },
      fontFamily: {
        "space-grotesk-regular": ["SpaceGrotesk-Regular"],
        "space-grotesk-medium": ["SpaceGrotesk-Medium"],
        "space-grotesk-semibold": ["SpaceGrotesk-SemiBold"],
        "space-grotesk-bold": ["SpaceGrotesk-Bold"],
        "urbanist-medium": ["Urbanist-Medium"],
        "urbanist-semibold": ["Urbanist-SemiBold"],
        "urbanist-bold": ["Urbanist-Bold"],
        "urbanist-regular": ["Urbanist-Regular"],
      },
    },
  },
  plugins: [],
};
