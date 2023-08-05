/* eslint-env node */
const { tdsTheme } = require("@designervoid/ton-design-system");
const flowbite = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ...tdsTheme,
      fontFamily: {
        sans: ["Mulish"],
      },
      colors: {
        ...tdsTheme.colors,
        orange: {
          light: "#FFAA01",
          dark: "#FD9900",
        },
      },
    },
  },
  plugins: [
    flowbite,
  ],
};
