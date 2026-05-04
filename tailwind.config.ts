import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A2E4A",
          alt: "#243B55",
        },
        brand: {
          green: "#2DB84B",
          "green-dark": "#1A7A2E",
          "green-bg": "#E8F8EC",
        },
        ink: {
          DEFAULT: "#1A1A2E",
          mid: "#4A6080",
          light: "#8FA3BC",
        },
        line: "#E2E8F0",
        canvas: "#F5F7FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        thai: ["var(--font-sarabun)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 46, 74, 0.04), 0 8px 24px rgba(26, 46, 74, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
