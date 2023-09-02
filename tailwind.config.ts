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
      colors: {
        facebook: "#198FF5",
        twitter: "#1CA0F2",
        "instagram-one": "#FDC468",
        "instagram-two": "#DF4996",
        youtube: "#C4032A",
        "gray-one": "#999999",
        "gray-two": "#1a1a1a",
        "tiktok-one": "#69C9D0",
        "tiktok-two": "#EE1D52",
        "my-green": "#00B300",
      },
    },
  },
  plugins: [],
};
export default config;
