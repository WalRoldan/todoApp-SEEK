import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Color principal para botones y elementos destacados
        secondary: "#E5E7EB", // Fondo secundario
        danger: "#EF4444", // Color de advertencia
      },
    },
  },
  plugins: [],
} satisfies Config;