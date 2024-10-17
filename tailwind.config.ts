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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--muted-foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          10: "var(--primary-10)",
        },
        border: "var(--border)",
        secondary: "var(--secondary)",
        success: "var(--success)",
      },
      backgroundImage: {
        "hero-dots": "url('/hero-dots.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
