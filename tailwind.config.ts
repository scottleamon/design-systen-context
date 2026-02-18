import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        "ds-theme-higher-ed",
        "ds-theme-k12",
        "ds-theme-admin",
    ],
    theme: {
        extend: {
        fontFamily: {
            sans: ['"adelle-sans"', "var(--font-inter)", "ui-sans-serif", "system-ui"],
            mono: ['"adelle-mono"', "ui-monospace", "monospace"],
            display: ['"adelle-condensed"', "ui-sans-serif", "sans-serif"],
            "ds-sans": ["var(--ds-font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
            "ds-mono": ["var(--ds-font-mono)", "ui-monospace", "monospace"],
        },
        colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
            },
            muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
            },
            destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
            },
            card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
            },
            popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
            },
            /* Brand palette */
            "tc-navy": "#0B2341",
            "cherry": "#E31C5F",
            "coral": "#F26A4B",
            "tc-blue": "#36B4E5",
            "tangerine": "#FF9A4D",
            "taupe": "#BBA888",
            "brick-red": "#6B1019",
            "warm-cream": "#D5CBBE",
            "light-sand": "#F0E4DA",
            "tc-grey": "#58595B",
            "ds-primary": {
                    DEFAULT: "var(--ds-primary)",
                    foreground: "var(--ds-primary-foreground)",
                },
                "ds-secondary": {
                    DEFAULT: "var(--ds-secondary)",
                    foreground: "var(--ds-secondary-foreground)",
                },
                "ds-destructive": {
                    DEFAULT: "var(--ds-destructive)",
                    foreground: "var(--ds-destructive-foreground)",
                },
                "ds-muted": {
                    DEFAULT: "var(--ds-muted)",
                    foreground: "var(--ds-muted-foreground)",
                },
                "ds-accent": {
                    DEFAULT: "var(--ds-accent)",
                    foreground: "var(--ds-accent-foreground)",
                    border: "var(--ds-accent-border)",
                },
                "ds-success": {
                    DEFAULT: "var(--ds-success)",
                    foreground: "var(--ds-success-foreground)",
                },
                "ds-warning": {
                    DEFAULT: "var(--ds-warning)",
                    foreground: "var(--ds-warning-foreground)",
                },
                "ds-background": "var(--ds-background)",
                "ds-foreground": "var(--ds-foreground)",
                "ds-border": "var(--ds-border)",
                "ds-input": "var(--ds-input)",
                "ds-ring": "var(--ds-ring)",
                "ds-card": {
                    DEFAULT: "var(--ds-card)",
                    foreground: "var(--ds-card-foreground)",
                },
            },
            borderRadius: {
                "ds-none": "var(--ds-radius-none)",
                "ds-sm": "var(--ds-radius-sm)",
                "ds": "var(--ds-radius)",
                "ds-md": "var(--ds-radius-md)",
                "ds-lg": "var(--ds-radius-lg)",
                "ds-xl": "var(--ds-radius-xl)",
                "ds-2xl": "var(--ds-radius-2xl)",
                "ds-3xl": "var(--ds-radius-3xl)",
                "ds-full": "var(--ds-radius-full)",
            },
            boxShadow: {
                "ds-none": "var(--ds-shadow-none)",
                "ds-xs": "var(--ds-shadow-xs)",
                "ds-sm": "var(--ds-shadow-sm)",
                "ds": "var(--ds-shadow)",
                "ds-md": "var(--ds-shadow-md)",
                "ds-lg": "var(--ds-shadow-lg)",
                "ds-xl": "var(--ds-shadow-xl)",
                "ds-2xl": "var(--ds-shadow-2xl)",
                "ds-inner": "var(--ds-shadow-inner)",
            },
        },
    },
    plugins: [],
};
export default config;
