import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

/* Inter is kept as a CSS variable fallback for when Adobe Fonts (adelle-sans)
   are not yet loaded. The font-family stack in globals.css prefers adelle-sans. */
const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Design Components & Context Hub | TimelyCare",
    description: "Internal design system documentation and component reference",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            {/* Adobe Fonts (Typekit) — replace YOUR_KIT_ID with your project embed ID */}
            {/* <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" /> */}
            <body className={`${inter.variable} font-sans antialiased min-h-screen flex selection:bg-primary/10`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto bg-[hsl(var(--card))]">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
