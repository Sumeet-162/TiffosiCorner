/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Alata", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        cardo: ["Cardo", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "ferrari-red": "#FF2800",
        "ferrari-yellow": "#FFCC00",
        "ferrari-dark": {
          DEFAULT: "#121212",
          50: "#F5F5F5",
          100: "#E1E1E1",
          200: "#C2C2C2",
          300: "#9E9E9E",
          400: "#7A7A7A",
          500: "#565656",
          600: "#363636",
          700: "#222222",
          800: "#121212",
          900: "#000000",
        },
        team: {
          "ferrari": "#FF2800",
          "mercedes": "#00D2BE",
          "red_bull": "#0600EF",
          "mclaren": "#FF8700",
          "aston_martin": "#006F62",
          "alpine": "#0090FF",
          "williams": "#005AFF",
          "alphatauri": "#2B4562",
          "alfa": "#900000",
          "haas": "#FFFFFF",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        'ferrari': '0 4px 14px 0 rgba(255, 40, 0, 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 