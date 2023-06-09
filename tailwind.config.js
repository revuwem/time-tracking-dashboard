/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "4xl": "2rem",
        "5xl": ["2.5rem", "125%"],
        "6xl": "3.5rem",
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
      colors: {
        black: "hsl(var(--black) / <alpha-value>)",
        white: "hsl(var(--white) / <alpha-value>)",
        gray: "hsl(var(--gray) / <alpha-value>)",
        blue: {
          dark: "hsl(var(--blue-dark) / <alpha-value>)",
          light: "hsl(var(--blue-light) / <alpha-value>)",
          lighten: "hsl(var(--blue-lighten) / <alpha-value>)",
          desaturated: "hsl(var(--blue-desaturated) / <alpha-value>)",
          darken: "hsl(var(--blue-darken) / <alpha-value>)",
          pale: "hsl(var(--blue-pale) / <alpha-value>)",
        },
        cards: {
          orange: "hsl(var(--cards-orange) / <alpha-value>)",
          blue: "hsl(var(--cards-blue) / <alpha-value>)",
          pink: "hsl(var(--cards-pink) / <alpha-value>)",
          green: "hsl(var(--cards-green) / <alpha-value>)",
          violet: "hsl(var(--cards-violet) / <alpha-value>)",
          yellow: "hsl(var(--cards-yellow) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
