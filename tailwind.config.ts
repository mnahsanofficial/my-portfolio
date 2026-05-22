import type { Config } from 'tailwindcss';

// Tailwind v4 uses CSS-first config — theme tokens live in src/styles/globals.css via @theme.
// This file is kept minimal for any tooling that still expects it.
const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};

export default config;
