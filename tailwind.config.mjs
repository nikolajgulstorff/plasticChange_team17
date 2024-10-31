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
      },
      animation: {
        "progress-fill": "progress-fill 3s ease forwards", // Animation over 3 sekunder
        swim: "swim 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
