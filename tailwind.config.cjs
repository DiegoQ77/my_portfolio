/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#0956f9",
      "blue-primary": "#0956f9",
      "blue-dark": "#051229",
      "blue-second": "#0b4bc8",
      gray: "#808080",
      white: "#fafafa",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Quicksand", "serif-serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        100: "28rem",
        118: "36rem",
      },
    },
  },
  plugins: [],
};
