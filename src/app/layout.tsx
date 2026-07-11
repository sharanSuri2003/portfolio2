import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import { ThemeBtn } from "@/components/ui/themebtn";
import Atmosphere from "@/components/atmosphere";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = "https://sharansuri.in";
const siteTitle = "Sharan Suri";
const siteDescription =
  "Engineer into breaking stuff down, building web vibes, and vibing with design sometimes. Fullstack @ WebVeda & IGC.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s · ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  authors: [{ name: "Sharan Suri", url: siteUrl }],
  creator: "Sharan Suri",
  keywords: [
    "Sharan Suri",
    "portfolio",
    "fullstack engineer",
    "web developer",
    "WebVeda",
    "IGC",
  ],
  alternates: {
    canonical: "/",
  },
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
        alt: "Sharan Suri — engineer, fullstack, design",
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased w-screen md:w-full overflow-x-hidden`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Atmosphere />
          <div className='fixed bottom-4 right-4 z-20'>
            <ThemeBtn />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
