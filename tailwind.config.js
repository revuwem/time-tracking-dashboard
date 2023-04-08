/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          black: "hsl(var(--black) / <alpha-value>)",
          white: "hsl(var(--white) / <alpha-value>)",
          blue: {
            dark: "hsl(var(--blue-dark) / <alpha-value>)",
            light: "hsl(var(--blue-light) / <alpha-value>)",
            darken: "hsl(var(--blue-darken) / <alpha-value>)",
            desaturated: "hsl(var(--blue-desaturated) / <alpha-value>)",
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
  },
  plugins: [],
};
