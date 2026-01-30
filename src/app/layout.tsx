import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
});

export const metadata: Metadata = {
    title: "Design System Workbench",
    description: "Visual explorer for the AI Context Repository",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={`${inter.variable} ${outfit.variable} font-sans bg-zinc-950 text-zinc-300 min-h-screen flex selection:bg-indigo-500/30`}>
                <Sidebar />
                <main className="flex-1 overflow-y-auto bg-grid-white/[0.02]">
                    {children}
                </main>
            </body>
        </html>
    );
}
