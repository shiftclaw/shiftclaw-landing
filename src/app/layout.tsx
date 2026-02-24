import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL } from "@/lib/constants";

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

export const metadata: Metadata = {
  title: "ShiftClaw — Tools that ship fast",
  description:
    "An indie studio where human creativity meets AI execution. Building SaaS tools that solve real problems.",
  keywords: ["indie", "saas", "tools", "ai", "startup", "shiftclaw"],
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
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
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
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
