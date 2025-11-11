// Tailwind CSS Theme Configuration
// This is the TypeScript source of truth for the theme

export interface TailwindThemeConfig {
  theme: {
    extend: {
      fontFamily: {
        sans: string[];
        mono: string[];
      };
      colors: {
        background: string;
        primary: string;
        accent: string;
        "accent-secondary": string;
        "text-main": string;
        "text-secondary": string;
      };
      animation: {
        "fade-in-up": string;
        blink: string;
        "fade-in": string;
        "typing-b": string;
        "progress-bar": string;
      };
      keyframes: {
        fadeInUp: {
          "0%": { opacity: string; transform: string };
          "100%": { opacity: string; transform: string };
        };
        fadeIn: {
          "0%": { opacity: string };
          "100%": { opacity: string };
        };
        blink: {
          "from, to": { "border-color": string };
          "50%": { "border-color": string };
        };
        progressBar: {
          from: { width: string };
          to: { width: string };
        };
      };
    };
  };
}

export const tailwindThemeConfig: TailwindThemeConfig = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        mono: ["VT323", "monospace"],
      },
      colors: {
        background: "#030712",
        primary: "#212429",
        accent: "#FF6347",
        "accent-secondary": "#4ADE80",
        "text-main": "#F8FAFC",
        "text-secondary": "#94A3B8",
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
          "50%": { "border-color": "#FF6347" },
        },
        progressBar: {
          from: { width: "100%" },
          to: { width: "0%" },
        },
      },
    },
  },
};

// Helper function to get config as plain object (for JSON serialization)
export const getTailwindConfig = (): TailwindThemeConfig => tailwindThemeConfig;
