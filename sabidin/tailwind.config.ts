import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseBlue: '#006FEE',
        baseGreen: '#24DE85',
        baseYellow: '#F5A524',
        baseWhite: '#FEFDF1',
        baseBlack: '#333333',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-0.8': '-0.08em',
        'extra-wide': '0.67em'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
