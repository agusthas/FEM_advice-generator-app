const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "hsl(193, 38%, 86%)",
          400: "hsl(150, 100%, 66%)",
          500: "hsl(150, 100%, 67%)",
        },
        neutral: {
          400: "hsl(217, 19%, 38%)",
          500: "hsl(217, 19%, 24%)",
          600: "hsl(220, 22%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
