module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        comm: ["Commissioner", "sans-serif"],
      },
      colors: {
        "brink-pink": {
          50: "#fef6f8",
          100: "#fdeef1",
          200: "#fad3dd",
          300: "#f7b9c8",
          400: "#f0859f",
          500: "#ea5076",
          600: "#d3486a",
          700: "#b03c59",
          800: "#8c3047",
          900: "#73273a",
        },
      },
      backgroundImage: {
        "hero-background":
          "url('https://pixabay.com/es/photos/cygnet-aves-animal-lago-cisne-6482420/')",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-filters")],
};
