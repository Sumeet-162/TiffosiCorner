import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Ferrari color system
        'ferrari-red': {
          DEFAULT: '#FF2800',
          50: '#FFF5F2',
          100: '#FFE0D9',
          200: '#FFC1B3',
          300: '#FF9C8D',
          400: '#FF6B56',
          500: '#FF3520',
          600: '#FF2800',
          700: '#D91F00',
          800: '#B31A00',
          900: '#8C1400',
          950: '#660F00',
        },
        'ferrari-yellow': {
          DEFAULT: '#FFCC00',
          50: '#FFFAEB',
          100: '#FFF6D6',
          200: '#FFECAD',
          300: '#FFE285',
          400: '#FFD54C',
          500: '#FFCC00',
          600: '#D9AD00',
          700: '#B38E00',
          800: '#8C6F00',
          900: '#665000',
          950: '#403200',
        },
        'ferrari-dark': {
          DEFAULT: '#1A1A1A',
          50: '#F0F0F0',
          100: '#E0E0E0',
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666',
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#0A0A0A',
          950: '#050505',
        },
        'racing-blue': {
          DEFAULT: '#005AFF',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#005AFF',
          700: '#0047CC',
          800: '#003399',
          900: '#002266',
          950: '#001133',
        },
        'racing-silver': {
          DEFAULT: '#E0E0E0',
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F5F5F5',
          300: '#EEEEEE',
          400: '#E0E0E0',
          500: '#BDBDBD',
          600: '#9E9E9E',
          700: '#757575',
          800: '#616161',
          900: '#424242',
          950: '#212121',
        },
        
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "checkered-flag": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "40px 40px" }
        },
        "pulse-engine": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.5s ease-out",
        "slide-in": "slide-in 0.5s ease-out",
        "checkered-flag": "checkered-flag 2s linear infinite",
        "pulse-engine": "pulse-engine 2s ease-in-out infinite"
      },
      backgroundImage: {
        'ferrari-gradient': 'linear-gradient(90deg, #FF2800 0%, #CC0000 100%)',
        'racing-gradient': 'linear-gradient(45deg, #1A1A1A 0%, #333333 100%)',
        'checkered-pattern': 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%) 50% / 20px 20px',
        'carbon-fiber': 'linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1)), linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1))',
      },
      boxShadow: {
        'racing': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
        'ferrari': '0 8px 24px -12px rgba(255, 40, 0, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#FF2800',
              '&:hover': {
                color: '#D91F00',
              },
            },
          },
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
