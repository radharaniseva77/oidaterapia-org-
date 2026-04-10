import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      colors: {
        arena: "#FAF7F2",
        cielo: "#B0D4E3",
        tierra: "#E2D1B3",
        indigo: "#1A365D",
        black: "#1A365D", // Overriding pure black with deep indigo
        primary: "#1A365D",
        secondary: "#B0D4E3",
        accent: "#E2D1B3",
        background: "#FAF7F2",
        foreground: "#1A365D",
      },
    },
  },
  plugins: [],
};
export default config;
