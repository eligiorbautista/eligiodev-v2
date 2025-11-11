module.exports = {
  content: [
    "./index.html",
    "./App.{ts,tsx,js,jsx}",
    "./index.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./data/**/*.{ts,tsx,js,jsx}",
    "./config/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        background: "#000000",
        primary: "#111111",
        accent: "#9CA3AF",
        "accent-secondary": "#6B7280",
        "text-main": "#FFFFFF",
        "text-secondary": "#9CA3AF",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "typing-b": "blink 0.7s step-end infinite",
        "progress-bar": "progressBar 3s linear forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#9CA3AF" },
        },
        progressBar: {
          from: { width: "100%" },
          to: { width: "0%" },
        },
      },
    },
  },
  plugins: [],
};

