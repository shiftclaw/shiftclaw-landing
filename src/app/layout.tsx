import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
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
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShiftClawCO",
    creator: "@ShiftClawCO",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ShiftClaw",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "An indie studio where human creativity meets AI execution. Building SaaS tools that solve real problems.",
  sameAs: [
    "https://x.com/ShiftClawCO",
    "https://github.com/ShiftClawCO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
