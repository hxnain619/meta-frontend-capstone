const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        salad: "url('./images/greek-salad.jpg')",
        bruchetta: "url('./images/icon/bruchetta.svg')",
        dessert: "url('./images/lemon-dessert.jpg')",
      },
      fontFamily: {
        heading: ['"Markazi Text"', ...defaultTheme.fontFamily.sans], // For main headings
        body: ['"Karla"', ...defaultTheme.fontFamily.sans], // For subheadings and text
      },
      colors: {
        green: "#495E57",
        yellow: "#F4CE14",
        orange: "#EE9972",
        brown: "#FBDABB",
        grey: "#EDEFEE",
        black: "#333333",
      },
    },
  },
  plugins: [],
};
