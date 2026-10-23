import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#1e1b4b",
        },
        navy: {
          800: "#0f172a",
          900: "#0b0f19",
          950: "#070a12",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
        }
      },
    },
  },
  plugins: [],
};
export default config;
