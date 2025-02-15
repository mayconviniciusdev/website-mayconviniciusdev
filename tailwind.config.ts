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
        'blue': '#004369',
        'blue-cyan': '#0E7178',
        'white': '#F6F6F6',
        'grey': '#474747',
      },
    },
  },
  plugins: [],
} satisfies Config;
