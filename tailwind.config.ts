import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'media', // Change this line
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1E40AF",
        dark: "#1F2937",
        light: "#F9FAFB",
      },
    },
  },
  plugins: [],
};

export default config;