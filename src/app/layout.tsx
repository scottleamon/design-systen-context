import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";

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
            <body className={`${inter.variable} font-sans antialiased min-h-screen flex selection:bg-blue-500/15`}>
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
