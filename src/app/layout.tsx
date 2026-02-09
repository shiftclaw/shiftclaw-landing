import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://shiftclawco.com";

export const metadata: Metadata = {
  title: "ShiftClaw — Tools that ship fast",
  description:
    "An indie studio where human creativity meets AI execution. Building SaaS tools that solve real problems.",
  keywords: ["indie", "saas", "tools", "ai", "startup", "shiftclaw"],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ShiftClaw",
    title: "ShiftClaw — Tools that ship fast",
    description:
      "An indie studio where human creativity meets AI execution. Building SaaS tools that solve real problems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShiftClaw — Tools that ship fast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShiftClawCO",
    creator: "@ShiftClawCO",
    title: "ShiftClaw — Tools that ship fast",
    description:
      "An indie studio where human creativity meets AI execution. Building SaaS tools that solve real problems.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
