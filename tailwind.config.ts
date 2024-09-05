import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        main: "var(--color-main)",
        second: "var(--color-second)",
        'second-light': "var(--color-second-light)",
        light: "var(--color-light)",
        text: "var(--text-color)",
        white: "var(--bg-white)"
      },
      fontFamily: {
        serif: ["var(--ff-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
  darkMode: ['selector', '[data-mode="dark"]']
};
export default config;
