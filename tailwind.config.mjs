/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "progress-fill": {
          "0%": { width: "0%" }, // Start fra venstre
          "100%": { width: "70%" }, // Fylder op til 70%
        },
        // Ny 'swim'-animation
        swim: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideshow: {
          "0%, 33%": { opacity: "1" }, // Første billede vises i starten
          "33.33%, 66%": { opacity: "0" }, // Andet billede vises i midten
          "66.66%, 100%": { opacity: "0" }, // Tredje billede vises til sidst
        },
        slideshow2: {
          "0%, 33%": { opacity: "0" },
          "33.33%, 66%": { opacity: "1" }, // Andet billede vises i midten
          "66.66%, 100%": { opacity: "0" },
        },
        slideshow3: {
          "0%, 66%": { opacity: "0" },
          "66.66%, 100%": { opacity: "1" }, // Tredje billede vises til sidst
        },
      },
      animation: {
        "progress-fill": "progress-fill 3s ease forwards", // Animation over 3 sekunder
        swim: "swim 3s ease-in-out infinite",
        slideshow1: "slideshow 9s ease-in-out infinite",
        slideshow2: "slideshow2 9s ease-in-out infinite",
        slideshow3: "slideshow3 9s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
