import type { Config } from "tailwindcss";

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
      keyframes: {
        lineAnimation: {
          "0%" : { width: "0" },
            "100%": { width: "60%"},
        },
        lineAnimation2: {
          "0%" : { width: "0" },
            "100%": { width: "40%"},
        }
      },
      animation: {
        "line": "lineAnimation 2s ease-in-out forwards",
        "line2": "lineAnimation2 2s linear forwards",
      }, 
      colors: {
        'blue-0': '#8ED1FC',
        'green-0': '#9FE6A0',
      }
    },
  },
  plugins: [],
};
export default config;
