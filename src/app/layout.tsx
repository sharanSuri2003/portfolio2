import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import SiteFooter from "@/components/site-footer";
import IntroGate, { INTRO_SCRIPT } from "@/components/intro-gate";
import { site } from "@/lib/content";

// Stand-in for Spektra — the documented substitute. Extremely condensed, one
// weight, built for poster scale. Display only; never body.
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

// Stand-in for Helvetica Neue LT. Carries every UI label and line of prose.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://sharansuri.in";
const siteTitle = "Sharan Suri";
const siteDescription =
  "Fullstack engineer. Checkout and payment infrastructure at WebVeda, founding engineer at IGC. 500K+ records migrated, 0 to 40K users in four months.";

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
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sharan Suri — fullstack engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

// The next/font variable classes sit on <html> so --font-bebas and --font-inter
// are defined at :root. The stacks in globals.css are declared there too, and a
// custom property that references an undefined variable computes to
// guaranteed-invalid — inherited as invalid, never re-resolved.
const fontVars = `${bebas.variable} ${inter.variable}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: INTRO_SCRIPT stamps data-js and data-intro on
    // <html> before React hydrates, so the client tree legitimately carries
    // attributes the server markup does not. Scoped to this element only.
    <html lang='en' className={fontVars} suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        {/* Runs before first paint so a reload mid-session never flashes the
            hero cascade before the gate can switch it off. */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      <body className='bg-void-black text-bone-cream'>
        <a
          href='#main'
          className='pill pill-compact sr-only focus:not-sr-only focus:fixed focus:left-20 focus:top-20 focus:z-60'
        >
          Skip to content
        </a>
        <IntroGate />
        <Nav />
        <div id='main'>{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
