/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Bicara Pintar Purple Palette
        primary: {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#843dff",
          600: "#6A2FF7", // Main brand color
          700: "#5b21b6",
          800: "#4c1d95",
          900: "#3b1a78",
        },
        // Secondary Colors
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // Background and Surface Colors
        dark: {
          100: "#1a1a1a",
          200: "#262626",
          300: "#404040",
          400: "#525252",
          500: "#737373",
          600: "#a3a3a3",
          700: "#d4d4d4",
          800: "#e5e5e5",
          900: "#f5f5f5",
        },
      },
      backgroundImage: {
        // Gradient patterns from Bicara Pintar design
        "gradient-primary":
          "linear-gradient(135deg, #6A2FF7 0%, #843dff 50%, #9f75ff 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #14b8a6 0%, #2dd4bf 50%, #5eead4 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #1a1a1a 0%, #262626 50%, #404040 100%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(106, 47, 247, 0.1) 0%, rgba(132, 61, 255, 0.05) 100%)",
        "gradient-border": "linear-gradient(135deg, #6A2FF7, #843dff, #2dd4bf)",
        "gradient-hero":
          "radial-gradient(ellipse at center, rgba(106, 47, 247, 0.3) 0%, rgba(26, 26, 26, 0.8) 70%)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": [
          "2.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-up": "fadeUp 0.8s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(106, 47, 247, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(106, 47, 247, 0.8)" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
