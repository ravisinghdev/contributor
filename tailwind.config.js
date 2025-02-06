import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|button|code|input|kbd|link|listbox|navbar|snippet|toggle|divider|ripple|spinner|form|popover).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        default: {
          0: "#000000",
          1000: "#FFFFFF"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
