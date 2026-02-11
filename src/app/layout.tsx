import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/infographic/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Эволюция Дмитрия Медведева | Интерактивная инфографика",
  description: "Интерактивное исследование трансформации политической позиции Дмитрия Медведева: от селективной европеизации к государственческому прагматизму.",
  keywords: ["Медведев", "политика", "Россия", "европеизация", "трансформация", "инфографика"],
  authors: [{ name: "Z.ai" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Эволюция Дмитрия Медведева",
    description: "Интерактивное исследование политической трансформации",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
