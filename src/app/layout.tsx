import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "NW's Not Just Bookkeeping | Small Business Bookkeeping Services — More Time to Grow",
    template: "%s | NW's Not Just Bookkeeping",
  },
  description: SITE.description,
  keywords: [
    "small business bookkeeping",
    "bookkeeping services",
    "monthly bookkeeping",
    "bookkeeping cleanup",
    "catch-up bookkeeping",
    "financial reporting",
    "monthly reconciliations",
    "payroll support",
    "QuickBooks bookkeeper",
    "remote bookkeeper",
    "accounts payable management",
    "accounts receivable management",
    "Not Just Bookkeeping",
  ],
  authors: [{ name: SITE.owner.name, url: SITE.url }],
  creator: SITE.owner.name,
  publisher: SITE.name,
  category: "Financial Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    title: "NW's Not Just Bookkeeping — More time to grow.",
    description:
      "I help small business owners save 5+ hours a week by taking bookkeeping completely off their plate — monthly reconciliations, cleanup, payroll, and clear financial reporting.",
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: "NW's Not Just Bookkeeping — More time to grow. Bookkeeping for small businesses by Nicole.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NW's Not Just Bookkeeping — More time to grow.",
    description:
      "Friendly, accurate bookkeeping for small businesses. Save 5+ hours a week — 100% remote, serving all 50 US states.",
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/nw-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2b7fff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;600;700&display=swap"
          precedence="default"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
