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
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                "ds-sans": ["var(--ds-font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
                "ds-mono": ["var(--ds-font-mono)", "ui-monospace", "monospace"],
            },
            colors: {
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
