import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#000000",
          soft: "#000000",
          faint: "#000000",
        },
        paper: {
          DEFAULT: "#faf7f2",
          warm: "#f3ede3",
        },
        accent: "#c8553d",
      },
      fontFamily: {
        serif: ["var(--font-besley)", "Times New Roman", "serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      letterSpacing: {
        widest2: "0.18em",
        widest3: "0.22em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
