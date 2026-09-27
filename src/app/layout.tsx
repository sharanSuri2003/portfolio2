import type { Metadata, Viewport } from "next";
import { Bowlby_One, Inter } from "next/font/google";
import "./globals.css";
import Marquee from "@/components/marquee";
import Nav from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import { site } from "@/lib/content";

// Stand-in for Lateral. One heavy cut, inflated, display only.
const bowlby = Bowlby_One({
  variable: "--font-bowlby",
  subsets: ["latin"],
  weight: "400",
});

// Stand-in for Aeonik Pro. Weights 500 and 700 carry UI and prose.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://sharansuri.in";
const siteTitle = "Sharan Suri";
const siteDescription =
  "Fullstack engineer building checkout and payment infrastructure, quiz engines, and ranking systems that hold up when traffic arrives.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s · ${siteTitle}` },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    "Sharan Suri",
    "portfolio",
    "fullstack engineer",
    "web developer",
    "WebVeda",
    "IGC",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Sharan Suri portfolio preview with bold black type on cream and a red ribbon",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-portfolio.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ebe4d8",
  colorScheme: "light",
};

// next/font variables sit on <html> so --font-bowlby and --font-inter exist
// at :root. The stacks in globals.css reference them; an undefined variable
// computes to guaranteed-invalid and is inherited that way.
const fontVars = `${bowlby.variable} ${inter.variable}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={fontVars}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <a
          href='#main'
          className='pill pill-outline sr-only focus:not-sr-only focus:fixed focus:left-16 focus:top-16 focus:z-[80]'
        >
          Skip to content
        </a>
        <div className='fixed inset-x-0 top-0 z-50'>
          <Marquee />
          <Nav />
        </div>
        <div id='main'>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
