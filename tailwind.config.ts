import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "verde-escuro": "#004643",
        "verde-agua": "#9ac3c1",
        bege: "#ebe2d8",
        preto: "#000000",
        branco: "#ffffff",
      },
      fontFamily: {
        heading: ["var(--font-merriweather)"],
        body: ["var(--font-public-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
