import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",
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
        sumi: {
          1200: "#020202",
          1100: "#121213",
          1000: "#1C1C1E",
          900: "#232325",
          800: "#2D2C2F",
          700: "#353538",
          600: "#4B4A4E",
          500: "#64636A",
          400: "#81808C",
          300: "#A2A2AD",
          200: "#BBBAC8",
          100: "#E6E5F1",
          50: "#F5F4FF",
        },
        sun: {
          600: "#d42f2f",
          500: "#E73D3D",
          400: "#F14848",
        },
      },
      opacity: {
        disabled: "0.5",
        hover: "0.9",
        focus: "0.8",
      },
    },
  },
  plugins: [],
};
export default config;
