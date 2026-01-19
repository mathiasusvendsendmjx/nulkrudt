/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Barrio", "cursive"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
