/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        premium: "0 24px 80px rgba(16, 16, 18, 0.10)",
        subtle: "0 18px 60px rgba(16, 16, 18, 0.08)",
        glow: "0 0 40px rgba(255, 255, 255, 0.45)",
        "card-hover": "0 32px 80px rgba(16, 16, 20, 0.12)",
        "button-glow": "0 18px 48px rgba(10, 10, 12, 0.22)"
      },
      colors: {
        ink: "#0b0b0d",
        graphite: "#26272b",
        steel: "#6f737a",
        cloud: "#f7f7f5",
        line: "#e6e6e1",
        mist: "#eef2f6",
        pearl: "#f7f9fb"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        "fade-in": "fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px) scale(0.98)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" }
        },
        "fade-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      }
    }
  },
  plugins: []
};
