import { transform } from "next/dist/build/swc/generated-native";
import { withRouter } from "next/router";
import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enables dark mode using a class,
  theme: {
    extend: {
      colors: {
        customBlack:"#1e1e1e",
        customBackground:"rgb(222, 229, 225)" ,
        customGreen: "rgb(23, 119, 14)",
        customWhite: "rgb(255, 255, 255)",
        foreground: "var(--foreground)",
        button: {
                    DEFAULT: "#1E40AF",
                    hover: "#1E3A8A",
                  },
        dark: {
                    customBackground: "#1E1E1E",
                    customBlack: "rgb(10, 10, 10)",
                    text: "rgb(255, 255, 255)",
                  },
      },
      fontFamily: {
                sans: ["Inter", "sans-serif"], // Custom font
              },
    },
    keyframes: {
      pulsate: {
        "0%": { transform: "scale(0.9)" },
        "100%": { transform: "scale(1.1)" },
      },
    }
  },
  plugins: [],
} satisfies Config;
