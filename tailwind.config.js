/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // EXACT BicaraPintar Purple from reference (#6A2FF7)
        primary: {
          50: "#f3f1ff",
          100: "#ebe5ff",
          200: "#d9ceff",
          300: "#bea6ff",
          400: "#9f75ff",
          500: "#843dff",
          600: "#6A2FF7", // EXACT brand color from reference
          700: "#5A1FE7", // Hover state
          800: "#4c1d95",
          900: "#3b1a78",
        },
        // Secondary Colors - Mint/Teal accents
        secondary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf", // Accent color from reference
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        // PURE BLACK - Critical fix
        black: "#000000",
        // Remove all dark variations - use pure black only
        "pure-black": "#000000",
        // White for text and buttons
        white: "#ffffff",
        // Gray scales for text only
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db", // Light text
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      backgroundImage: {
        // EXACT gradients from reference design
        "gradient-primary": "linear-gradient(135deg, #6A2FF7 0%, #843dff 100%)",
        "gradient-border": "linear-gradient(135deg, #6A2FF7, #843dff, #2dd4bf)",
        // Remove all dark gradients - use pure black
        "gradient-hero": "none", // Disabled
        "gradient-dark": "none", // Disabled
        "gradient-card": "none", // Disabled
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        // Match reference typography
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
        // Add exact spacing from reference
        "hero-mobile": "80px", // Mobile top padding
        "hero-desktop": "120px", // Desktop top padding
      },
      borderRadius: {
        // Match reference border radius
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },
      animation: {
        // Smooth animations matching reference
        "fade-in": "fadeIn 0.8s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      maxWidth: {
        // Container widths matching reference
        container: "1200px",
        "8xl": "1400px",
      },
    },
  },
  plugins: [],
  // Safelist important classes
  safelist: [
    "bg-black",
    "bg-pure-black",
    "text-white",
    "bg-purple-600",
    "border-purple-600",
    "gradient-card",
    "feature-button",
    "btn-primary",
    "btn-secondary",
    "phone-mockup",
    "chat-message",
  ],
};
