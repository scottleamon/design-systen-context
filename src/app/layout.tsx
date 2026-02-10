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
    title: "Design System Workbench | TimelyCare",
    description: "Internal design system documentation and component reference",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 min-h-screen flex selection:bg-indigo-500/20`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Sidebar />
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
